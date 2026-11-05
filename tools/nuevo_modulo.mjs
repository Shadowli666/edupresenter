#!/usr/bin/env node
// Crea el andamiaje de un módulo semanal de EduPresenter con las convenciones del proyecto.
//
//   node tools/nuevo_modulo.mjs --curso sql --semana 8 --titulo "Normalización avanzada" \
//     --objetivo "Aplicar la FNBC…" --unidad "Unidad III" \
//     --sesion "Jueves 12/11/2026 · 14:30–16:45 · Aula A-01" [--sesion "Viernes …"] [--icono 🧩] [--forzar]
//
// Deja cada hueco marcado con PENDIENTE: tools/revisar_modulo.mjs lo cuenta como error hasta que se
// complete con el contenido del plan de sesión. No inventa contenido.
import fs from 'node:fs';
import path from 'node:path';

const RAIZ = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const CURSOS = {
  sis: { constante: 'SISTEMAS_I', rotulo: 'Sistemas I', color: 'blue', icono: '🧭' },
  ads: { constante: 'ANALISIS_DISENO', rotulo: 'Análisis y Diseño de Sistemas', color: 'sky', icono: '🔍' },
  sql: { constante: 'SQL', rotulo: 'Electiva II · Programación en SQL', color: 'indigo', icono: '🧩' },
  'pnn-2026-2': { constante: 'PNN', prefijo: 'pnn', rotulo: 'Programación No Numérica II', color: 'teal', icono: '📈' },
};

function salir(msg) {
  console.error(`ERROR: ${msg}`);
  console.error('Uso: node tools/nuevo_modulo.mjs --curso <sis|ads|sql|pnn-2026-2> --semana N --titulo "…" --objetivo "…" '
    + '--unidad "Unidad …" --sesion "Día dd/mm/aaaa · hh:mm–hh:mm · Aula …" [--sesion …] [--icono X] [--forzar]');
  process.exit(2);
}

const a = { sesiones: [] };
const argv = process.argv.slice(2);
for (let i = 0; i < argv.length; i++) {
  const k = argv[i];
  if (k === '--forzar') { a.forzar = true; continue; }
  if (!k.startsWith('--') || i + 1 >= argv.length) salir(`argumento inválido: ${k}`);
  const v = argv[++i];
  if (k === '--sesion') a.sesiones.push(v); else a[k.slice(2)] = v;
}
const curso = CURSOS[a.curso];
if (!curso) salir(`--curso debe ser uno de: ${Object.keys(CURSOS).join(', ')}`);
const N = Number(a.semana);
if (!Number.isInteger(N) || N < 1 || N > 30) salir('--semana debe ser un entero entre 1 y 30');
for (const c of ['titulo', 'objetivo', 'unidad']) if (!a[c]) salir(`falta --${c}`);
if (!a.sesiones.length) salir('falta al menos una --sesion (día, fecha, hora y aula, tomados de semestre.json)');

const prefijo = curso.prefijo || a.curso;
const destino = path.join(RAIZ, 'data', a.curso, `${prefijo}_module${N}.ts`);
if (fs.existsSync(destino) && !a.forzar) salir(`ya existe ${path.relative(RAIZ, destino)}; usa --forzar para reemplazarlo`);

// Escapes: HTML dentro de una plantilla `…` y texto dentro de comillas simples '…'.
const html = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
const lit = (t) => t.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, ' ');
const c = curso.color;
const icono = a.icono || curso.icono;
let k = 0;
const diapos = [];
const diapo = (titulo, contenido, notas) => {
  k += 1;
  diapos.push(`    {
      id: '${prefijo}${N}-${k}',
      title: '${lit(titulo)}',
      contentHtml: \`
${contenido}
      \`,
      notes: '${lit(notas)}',
    }`);
};
const hueco = (que) => `        <div class="space-y-5">
          <p class="text-slate-500">PENDIENTE: ${html(que)}</p>
        </div>`;

a.sesiones.forEach((sesion, s) => {
  const dia = sesion.split(/[\s·]/)[0];
  if (s === 0) {
    diapo(`${curso.rotulo.split(' · ')[0]} · Semana ${N}`, `        <div class="space-y-7">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 bg-${c}-600 rounded-2xl flex items-center justify-center text-white text-4xl shadow-lg">${html(icono)}</div>
            <div>
              <p class="text-sm uppercase tracking-widest font-bold text-${c}-700">${html(curso.rotulo)} · ${html(a.unidad)}</p>
              <h2 class="text-3xl md:text-4xl font-bold text-slate-900">${html(a.titulo)}</h2>
            </div>
          </div>
          <div class="bg-${c}-50 border border-${c}-200 rounded-xl p-5 text-${c}-950">
            <p class="text-lg"><strong>Objetivo:</strong> ${html(a.objetivo)}</p>
          </div>
          <p class="text-sm text-slate-500">${html(sesion)} · Sección A · IUPSM — Extensión Ciudad Ojeda</p>
        </div>`, 'PENDIENTE: tiempos del inicio; «Construye hacia»: evaluación que prepara esta sesión (del plan).');
  } else {
    diapo(`${dia} · ${a.titulo}`, `        <div class="space-y-5">
          <p class="text-sm uppercase tracking-widest font-bold text-${c}-700">${html(sesion)}</p>
          <h2 class="text-3xl font-bold text-slate-900">PENDIENTE: tema de la sesión ${s + 1}</h2>
        </div>`, 'PENDIENTE: enlace con la sesión anterior de esta semana (nota de continuidad del plan).');
  }
  diapo(`Ruta del ${dia.toLowerCase()}`, hueco('etapas de la clase según el guion del plan (teoría → demostración → práctica).'),
    'PENDIENTE: minutos de cada etapa (deben sumar el bloque).');
  diapo('PENDIENTE: activación', hueco('pregunta puente o 2–3 preguntas de recuperación de la sesión anterior, sin volver a explicarla.'),
    'PENDIENTE: respuestas esperadas.');
  diapo('PENDIENTE: teoría', hueco('una idea por diapositiva (duplica esta diapositiva por cada concepto, ~20–30 % del bloque).'),
    'PENDIENTE: guion del docente y fuente de cada definición.');
  diapo('PENDIENTE: demostración', hueco('ejemplo resuelto paso a paso (data-reveal); el código y su salida salen del archivo S<NN>-* ejecutado.'),
    'PENDIENTE: errores frecuentes que conviene anticipar.');
  diapo('PENDIENTE: práctica guiada', hueco('ejercicio con pasos a completar entre todos.'), 'PENDIENTE: solución y criterios.');
  diapo('PENDIENTE: práctica autónoma', hueco('ficha del estudiante: enunciados numerados con datos y criterios; se resuelve en el cuaderno.'),
    'PENDIENTE: respuestas de la ficha (solo docente).');
  diapo(`Cierre del ${dia.toLowerCase()}`, hueco('síntesis, pregunta de comprobación (data-quiz) y anuncio de la próxima evaluación.'),
    'PENDIENTE: respuesta del data-quiz y tarea, si la hay.');
});
diapo('Fuentes', `        <div class="space-y-5">
          <div class="bg-slate-50 border border-slate-200 rounded-2xl p-5">
            <p class="font-bold text-slate-900">Fuentes</p>
            <ul class="list-disc list-inside text-sm text-slate-700 mt-3 space-y-2">
              <li>PENDIENTE: copiar en APA 7 las fuentes de «Fuentes consultadas» del plan, incluidas las de las imágenes.</li>
            </ul>
          </div>
        </div>`, 'Solo fuentes que estén en el plan de sesión (las verifica tools/revisar_modulo.mjs --plan).');

const constante = `${curso.constante}_MODULE_${N}`;
const ts = `import { Module } from '../../types';

export const ${constante}: Module = {
  id: '${prefijo}-mod-${N}',
  title: '${N}. ${lit(a.titulo)}',
  description: 'PENDIENTE: una frase con la semana, la fecha y los contenidos (del plan de sesión).',
  evaluation: '0%',
  slides: [
${diapos.join(',\n')},
  ],
  tasks: [
    // { id: '${prefijo}${N}-t1', title: '…', description: '…', items: ['…'], due: 'AAAA-MM-DD', corte: 2,
    //   weight: '0 % (formativa)', kind: 'tarea', slideId: '${prefijo}${N}-<k>' },
  ],
};
`;
fs.mkdirSync(path.dirname(destino), { recursive: true });
fs.writeFileSync(destino, ts);
console.log(`Creado ${path.relative(RAIZ, destino)} (${k} diapositivas, constante ${constante}).`);
console.log('Siguiente: completar cada PENDIENTE desde el plan de sesión; luego');
console.log(`  node tools/revisar_modulo.mjs ${path.relative(RAIZ, destino)} --plan <plan.md>   # 0 errores`);
console.log('  npx tsc --noEmit && npm run build');
