#!/usr/bin/env node
// Revisión mecánica de un módulo de EduPresenter + esquema para la revisión de relevancia.
//
//   node tools/revisar_modulo.mjs data/sql/sql_module8.ts [--plan <plan.md> ...] [--anterior auto|<ruta>|no] [--json]
//
// - ERRORES: rompen el contrato de AGENTS.md (ids, tareas, imágenes, Java en PNN, SAIA, falta «Fuentes»).
// - AVISOS: densidad y redacción; los revisa una persona o un modelo revisor.
// - ESQUEMA: una fila por diapositiva (palabras, imágenes, código, notas) y los títulos del módulo anterior,
//   para comprobar relevancia y no repetición contra el plan de sesión (ver AGENTS.md §6).
// Sale con código 1 si hay errores.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { transform } from 'esbuild';

const RAIZ = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const UMBRAL_PALABRAS = 150;      // calibrado con los módulos de la semana 7 (2026-11-05)
const UMBRAL_CODIGO = 20;         // líneas por bloque de código
const UMBRAL_IMG_KB = 400;
const EVALUATIVAS = /\b(breves?|sencill[oa]s?|f[aá]cil(?:es|mente)?|cort[oa]s?|livian[oa]s?|tiempo estimado|dedicaci[oó]n estimada)\b/gi;
const JAVA = /(public\s+static\s+void\s+main|System\.out\.print|import\s+java\.|language-java|\bArrayList<|public\s+class\s+\w+)/;
const TITULO_FUENTES = /^(fuentes|referencias|bibliograf[ií]a)/i;
const ACTIVIDAD = /(pr[aá]ctica|ficha|ejercicio|taller|actividad|reto)/i;

function uso(msg) {
  if (msg) console.error(`ERROR: ${msg}`);
  console.error('Uso: node tools/revisar_modulo.mjs <data/<curso>/<prefijo>_module<N>.ts> [--plan <plan.md> ...] [--anterior auto|<ruta>|no] [--json]');
  process.exit(2);
}

function argumentos(argv) {
  const a = { modulo: null, planes: [], anterior: 'auto', json: false };
  for (let i = 0; i < argv.length; i++) {
    const v = argv[i];
    if (v === '--plan') a.planes.push(argv[++i]);
    else if (v === '--anterior') a.anterior = argv[++i];
    else if (v === '--json') a.json = true;
    else if (v === '-h' || v === '--help') uso();
    else if (!a.modulo) a.modulo = v;
    else uso(`argumento desconocido: ${v}`);
  }
  if (!a.modulo) uso('falta la ruta del módulo');
  return a;
}

async function cargarModulo(ruta) {
  const codigo = fs.readFileSync(ruta, 'utf8');
  const { code } = await transform(codigo, { loader: 'ts', format: 'esm', target: 'es2022' });
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'edup-rev-'));
  const archivo = path.join(tmp, 'modulo.mjs');
  fs.writeFileSync(archivo, code);
  try {
    const mod = await import(pathToFileURL(archivo).href);
    const m = Object.values(mod).find((x) => x && typeof x === 'object' && Array.isArray(x.slides));
    if (!m) throw new Error('el archivo no exporta un Module con `slides`');
    return m;
  } finally {
    fs.rmSync(tmp, { recursive: true, force: true });
  }
}

const sinEtiquetas = (html) => html
  .replace(/<pre[\s\S]*?<\/pre>/gi, ' ')
  .replace(/<code[\s\S]*?<\/code>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&nbsp;/g, ' ').replace(/&[a-z]+;|&#\d+;/gi, ' ')
  .replace(/\s+/g, ' ').trim();

const palabras = (html) => (sinEtiquetas(html).match(/[\p{L}\p{N}][\p{L}\p{N}'’-]*/gu) || []).length;

function bloquesCodigo(html) {
  return [...html.matchAll(/<pre[^>]*>([\s\S]*?)<\/pre>/gi)].map((m) =>
    m[1].replace(/<[^>]+>/g, '').replace(/\n\s*$/, '').split('\n').filter((l) => l.trim() !== '').length);
}

const normalizar = (t) => t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();

// Palabras de estructura de clase: no indican tema, así que no cuentan para detectar repetición.
const ESTRUCTURA = new Set(('semana sesion clase jueves viernes lunes practica practicas guiada autonoma ficha fichas '
  + 'quiz mini comprobacion rapida cierre inicio ruta pregunta preguntas puente demostracion plenaria tarea tareas '
  + 'fuentes sintesis actividad parte partes organizacion ejercicio ejercicios taller caso repaso objetivo objetivos '
  + 'sistemas analisis diseno electiva programacion numerica').split(' '));

function parecido(a, b) {
  const temas = (t) => new Set(normalizar(t).replace(/\d+/g, ' ').split(' ')
    .filter((w) => w.length > 3 && !ESTRUCTURA.has(w)));
  const A = temas(a);
  const B = temas(b);
  if (Math.min(A.size, B.size) < 2) return 0;   // títulos sin tema propio: no se comparan
  const comun = [...A].filter((w) => B.has(w)).length;
  return comun / Math.min(A.size, B.size);
}

function fuentesDelPlan(planes) {
  const texto = [];
  let conSeccion = 0;
  for (const p of planes) {
    if (!fs.existsSync(p)) continue;
    const md = fs.readFileSync(p, 'utf8');
    const m = md.match(/^#{2,3}\s.*Fuentes[^\n]*\n([\s\S]*?)(?=^#{1,3}\s|(?![\s\S]))/m);
    if (m) { conSeccion++; texto.push(m[1]); }
  }
  const todo = texto.join('\n');
  return { conSeccion, texto: todo, urls: new Set(todo.match(/https?:\/\/[^\s)>\]"'`]+/g) || []) };
}

async function main() {
  const a = argumentos(process.argv.slice(2));
  const ruta = path.resolve(a.modulo);
  if (!fs.existsSync(ruta)) uso(`no existe ${a.modulo}`);
  const nombre = path.basename(ruta);
  const curso = path.basename(path.dirname(ruta));
  const mNombre = nombre.match(/^([a-z0-9]+)_module(\d+)\.ts$/);
  const prefijo = mNombre ? mNombre[1] : null;
  const semana = mNombre ? Number(mNombre[2]) : null;

  const errores = [];
  const avisos = [];
  const E = (d, msg) => errores.push(`${d ? `[${d}] ` : ''}${msg}`);
  const W = (d, msg) => avisos.push(`${d ? `[${d}] ` : ''}${msg}`);

  const m = await cargarModulo(ruta);
  if (/\bPENDIENTE\b/.test(`${m.title || ''} ${m.description || ''}`)) E(null, 'el título o la descripción del módulo conservan un PENDIENTE');
  if (!mNombre) W(null, `el nombre del archivo no sigue <prefijo>_module<N>.ts: ${nombre}`);
  else if (m.id !== `${prefijo}-mod-${semana}`) W(null, `id del módulo «${m.id}»; se esperaba «${prefijo}-mod-${semana}»`);

  // ---------------------------------------------------------------- diapositivas
  const ids = new Map();
  const esquema = [];
  let hayFuentes = false;
  let textoFuentes = '';
  m.slides.forEach((s, i) => {
    const d = s.id || `#${i + 1}`;
    if (!s.id) E(d, 'diapositiva sin id');
    if (ids.has(s.id)) E(d, `id duplicado (también en la diapositiva ${ids.get(s.id) + 1})`);
    ids.set(s.id, i);
    if (prefijo && s.id && !s.id.startsWith(`${prefijo}${semana}-`)) W(d, `id fuera del patrón ${prefijo}${semana}-<k>`);
    const html = s.contentHtml || '';
    const notas = (s.notes || '').trim();

    if (TITULO_FUENTES.test(s.title || '')) { hayFuentes = true; textoFuentes += html; }

    // imágenes
    const imgs = [...html.matchAll(/<img\b[^>]*>/gi)].map((x) => x[0]);
    imgs.forEach((tag) => {
      const src = (tag.match(/\ssrc\s*=\s*["']([^"']+)["']/i) || [])[1] || '';
      const alt = (tag.match(/\salt\s*=\s*["']([^"']*)["']/i) || [])[1];
      if (/^(https?:)?\/\//i.test(src)) E(d, `imagen enlazada en caliente (${src}); descárgala a public/img con obtener_imagen.py`);
      else if (src.startsWith('/')) E(d, `src absoluto «${src}»: usa «img/…» sin «/» inicial (base './')`);
      else if (src) {
        const archivo = path.join(RAIZ, 'public', src);
        if (!fs.existsSync(archivo)) E(d, `no existe public/${src}`);
        else if (fs.statSync(archivo).size / 1024 > UMBRAL_IMG_KB) W(d, `${src} pesa más de ${UMBRAL_IMG_KB} KB`);
      } else E(d, 'imagen sin src');
      if (alt === undefined || !alt.trim()) E(d, `imagen sin alt: ${src}`);
      if (s.lock) E(d, 'imagen en una diapositiva con lock: public/ no se cifra');
    });
    const figuras = (html.match(/<figure\b/gi) || []).length;
    const pies = (html.match(/<figcaption\b/gi) || []).length;
    if (imgs.length && pies < Math.max(figuras, 1)) W(d, 'imagen sin <figcaption> con fuente y licencia');

    // contenido para estudiantes
    if (/\bPENDIENTE\b/.test(`${s.title || ''} ${html}`)) E(d, 'quedan huecos PENDIENTE del andamiaje (nuevo_modulo.mjs)');
    else if (/\bPENDIENTE:/.test(notas)) W(d, 'las notas conservan un PENDIENTE del andamiaje');
    if (/\bSAIA\b/.test(html)) E(d, 'menciona SAIA en el contenido para estudiantes');
    if (curso.startsWith('pnn') && (JAVA.test(html) || JAVA.test(notas))) E(d, 'código en Java (PNN II usa C, C++ o Python)');
    const evaluativas = [...new Set((sinEtiquetas(html).match(EVALUATIVAS) || []).map((x) => x.toLowerCase()))];
    if (evaluativas.length) W(d, `redacción valorativa para estudiantes: ${evaluativas.join(', ')}`);
    const nPal = palabras(html);
    if (nPal > UMBRAL_PALABRAS) W(d, `${nPal} palabras: probablemente no cabe o no es una sola idea (umbral ${UMBRAL_PALABRAS})`);
    const codigo = bloquesCodigo(html);
    codigo.filter((n) => n > UMBRAL_CODIGO).forEach((n) => W(d, `bloque de código de ${n} líneas (máx. ${UMBRAL_CODIGO})`));
    if (ACTIVIDAD.test(s.title || '') && !notas) W(d, 'actividad sin notas para el docente (respuestas o criterios)');
    if (/data-quiz/.test(html) && !/data-correct/.test(html)) W(d, 'pregunta data-quiz sin opción data-correct');
    if (/class\s*=\s*["'][^"']*\bmermaid\b/.test(html)) W(d, 'diagrama .mermaid: en diapositivas nuevas usa data-diagram (PELE)');

    esquema.push({
      n: i + 1, id: s.id, titulo: s.title, palabras: nPal, imagenes: imgs.length,
      codigo: codigo.reduce((x, y) => x + y, 0), notas: notas ? notas.length : 0,
      lock: s.lock || '', interactivos: ['data-reveal', 'data-quiz', 'data-tabs', 'data-diagram']
        .filter((k) => html.includes(k)).map((k) => k.replace('data-', '')).join(' '),
    });
  });
  if (!hayFuentes) E(null, 'no hay diapositiva final «Fuentes» (APA 7, incluidas las imágenes)');

  // ---------------------------------------------------------------- tareas
  const tids = new Set();
  (m.tasks || []).forEach((t) => {
    const d = t.id || 'tarea';
    if (tids.has(t.id)) E(d, 'id de tarea duplicado');
    tids.add(t.id);
    if (t.slideId && !ids.has(t.slideId)) E(d, `slideId «${t.slideId}» no existe en el módulo`);
    if (t.due && !/^\d{4}-\d{2}-\d{2}$/.test(t.due)) E(d, `due «${t.due}» no es AAAA-MM-DD`);
    if (/\bSAIA\b/.test(`${t.description || ''} ${(t.items || []).join(' ')}`)) E(d, 'la tarea menciona SAIA');
  });

  // ---------------------------------------------------------------- fuentes contra el plan
  let plan = null;
  if (a.planes.length) {
    plan = fuentesDelPlan(a.planes);
    if (!plan.conSeccion) W(null, 'el plan no tiene sección «Fuentes consultadas»: no se pueden contrastar las fuentes');
    else {
      const urlsDiapo = new Set(textoFuentes.match(/https?:\/\/[^\s<"'`)]+/g) || []);
      const planTxt = normalizar(plan.texto);
      urlsDiapo.forEach((u) => { if (![...plan.urls].some((p) => p.startsWith(u) || u.startsWith(p))) W('Fuentes', `URL que no está en «Fuentes consultadas» del plan: ${u}`); });
      [...textoFuentes.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)].forEach((li) => {
        const apellido = normalizar(sinEtiquetas(li[1])).split(' ')[0];
        if (apellido && apellido.length > 2 && !planTxt.includes(apellido)) W('Fuentes', `referencia sin respaldo en el plan: «${sinEtiquetas(li[1]).slice(0, 70)}…»`);
      });
    }
  }

  // ---------------------------------------------------------------- módulo anterior
  let anterior = null;
  if (a.anterior !== 'no' && prefijo && semana > 1) {
    const rAnt = a.anterior === 'auto' ? path.join(path.dirname(ruta), `${prefijo}_module${semana - 1}.ts`) : path.resolve(a.anterior);
    if (fs.existsSync(rAnt)) {
      const mAnt = await cargarModulo(rAnt);
      anterior = { archivo: path.relative(RAIZ, rAnt), titulos: mAnt.slides.map((s) => s.title) };
      m.slides.forEach((s) => {
        if (TITULO_FUENTES.test(s.title || '')) return;
        const igual = anterior.titulos.find((t) => !TITULO_FUENTES.test(t) && parecido(t, s.title) >= 0.75);
        if (igual) W(s.id, `título parecido al de la semana anterior («${igual}»): comprobar que no repite contenido`);
      });
    }
  }

  // ---------------------------------------------------------------- salida
  const resultado = { modulo: path.relative(RAIZ, ruta), titulo: m.title, diapositivas: m.slides.length,
    tareas: (m.tasks || []).length, errores, avisos, esquema, anterior };
  if (a.json) { console.log(JSON.stringify(resultado, null, 2)); process.exit(errores.length ? 1 : 0); }

  const out = [];
  out.push(`# Revisión de ${resultado.modulo}`, '', `**${m.title}** · ${m.slides.length} diapositivas · ${resultado.tareas} tareas`, '');
  out.push(`## Errores (${errores.length})`, ...(errores.length ? errores.map((e) => `- ${e}`) : ['- Ninguno.']), '');
  out.push(`## Avisos (${avisos.length})`, ...(avisos.length ? avisos.map((w) => `- ${w}`) : ['- Ninguno.']), '');
  out.push('## Esquema (para la revisión de relevancia)', '',
    '| # | id | Título | Palabras | Img | Código | Notas | Lock | Interactivos |', '|---|---|---|---|---|---|---|---|---|',
    ...esquema.map((r) => `| ${r.n} | ${r.id} | ${(r.titulo || '').replace(/\|/g, '/')} | ${r.palabras} | ${r.imagenes || ''} | ${r.codigo || ''} | ${r.notas ? '✓' : '—'} | ${r.lock} | ${r.interactivos} |`), '');
  if (anterior) out.push(`## Títulos del módulo anterior (${anterior.archivo})`, '', anterior.titulos.join(' · '), '');
  if (plan && plan.conSeccion) out.push(`Fuentes del plan contrastadas: ${plan.urls.size} URL.`, '');
  console.log(out.join('\n'));
  process.exit(errores.length ? 1 : 0);
}

main().catch((e) => { console.error(`ERROR: ${e.message}`); process.exit(2); });
