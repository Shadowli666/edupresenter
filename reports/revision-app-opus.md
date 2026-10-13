# Revisión de fondo — EduPresenter (cambios sin commitear, 2026-10-13)

Alcance: lectura del árbol de trabajo actual (`git status`: 12 archivos modificados + `lib/`, `views/`,
`components/LockPanel.tsx`, `components/SearchOverlay.tsx`, `tools/studentContent.ts` nuevos).
No se modificó ningún archivo del proyecto salvo este informe.

Verificaciones ejecutadas:

| Verificación | Resultado |
|---|---|
| `npx tsc --noEmit` | sin errores |
| `vite build --mode student` (a `/tmp/edup-student`) | OK; `index-*.js` 1 137 kB (213 kB gzip); **no** aparece ninguna cadena de `notes` |
| `vite build` docente (a `/tmp/edup-teacher`) | OK; contiene las `notes` (esperado) |
| `dist/index.html` del build | `./vendor/tailwind.js` reescrito a ruta relativa (OK para Pages); **`modulepreload` de `mermaid-*.js` en la carga inicial** |
| Plugin AST con casos límite (script en `/tmp/edup-plugtest/t.mts`, importa `tools/studentContent.ts`) | ver A1/B2: `lock`/`audience` por variable y `notes` abreviado/por spread **no se procesan** |
| `vite` dev en `127.0.0.1:5799` + `curl` | sirve `/data/sis/sis_module2.ts` (con notas), `/materias/pnn/pnn_evaluacion_quiz_10%.xml`, `/content/plan.json`, `/unlock-codes.example.json` (HTTP 200) |
| `gh repo view Shadowli666/edupresenter` | **`visibility: PUBLIC`** |

Severidades: crítica / alta / media / baja.

---

## A) Correctitud y bugs

### A1 — El plugin solo reconoce literales: `lock`/`audience` por variable salen en claro (fallo abierto) — **crítica**
- Evidencia: `tools/studentContent.ts:66-67` (`propName` solo acepta `PropertyAssignment` con nombre identificador/cadena), `:81` (exige `StringLiteralLike` para `audience`), `:88` (exige `StringLiteralLike` para `lock`).
- Escenario verificado: `lock: K` con `const K = 'k1'` → el plugin devuelve "sin cambios" y `contentHtml: 'EXAMEN'` queda **en claro** en el bundle. Igual con `audience: D`. El README (`README.md`, sección "Códigos") promete "nunca se publican sin cifrar", que en este caso es falso.
- Arreglo: fallar cerrado ante cualquier forma no literal.
  ```ts
  const lock = props.get('lock');
  if (lock && !(ts.isPropertyAssignment(lock) && ts.isStringLiteralLike(lock.initializer)))
    throw new Error(`${file}: 'lock' debe ser un literal de texto`);
  // ídem para 'audience'; y si el objeto tiene SpreadAssignment o ShorthandPropertyAssignment
  // de 'notes' | 'lock' | 'audience' | 'contentHtml' -> throw.
  ```
  Además, una verificación posterior al build (B5) que busque en `dist/` el texto plano de cada diapositiva bloqueada.

### A2 — `notes` abreviado (`notes,`) o por spread (`...base`) no se elimina — **alta**
- Evidencia: `tools/studentContent.ts:66-67, 85-86`. Verificado: `{ contentHtml:'x', notes }` y `{ contentHtml:'x', ...base }` quedan sin cambios (la nota viaja al bundle). Hoy los 56 archivos usan `notes: '...'` literal, así que no hay fuga actual, pero es una trampa de autoría.
- Arreglo: tratar `ShorthandPropertyAssignment` y `SpreadAssignment` como error de compilación en objetos-diapositiva (mismo `throw` de A1). Las `notes` en objetos anidados que no tienen `contentHtml` (p. ej. `meta: { notes }`) tampoco se eliminan (`:79`); documentarlo o eliminar `notes` en cualquier objeto bajo `data/`.

### A3 — Código obsoleto en `localStorage` bloquea para siempre esa evaluación — **alta**
- Evidencia: `lib/unlock.ts:59` (`restoreUnlocked` no borra la clave si `openGroup` falla), `:45` (`unlockWithCode` excluye las claves que ya están en `codes`).
- Escenario: el docente cambia el código de `eval-corte-1` y redepliega (el README lo indica). El estudiante que ya lo había abierto tiene el código viejo guardado: `restoreUnlocked` no abre nada pero conserva `codes['eval-corte-1']`; cuando escribe el código nuevo, `unlockWithCode` ni siquiera prueba esa clave → "Código incorrecto" indefinidamente hasta borrar datos del sitio.
- Arreglo:
  ```ts
  for (const [k, c] of entries) if (!(await openGroup(k, c))) delete codes[k];
  persist(); emit();
  ```
  y en `unlockWithCode` probar también claves con código guardado que no tengan ninguna diapositiva abierta.

### A4 — Diapositivas "no disponibles" (`sealed: null`) se muestran vacías; el panel de LockPanel es inalcanzable — **media**
- Evidencia: `lib/unlock.ts:22-23` (`isLocked` es `false` si `sealed === null`), `components/SlideViewer.tsx:28,79` (solo muestra `LockPanel` si `locked`), `components/LockPanel.tsx:12` (rama `isUnavailable` nunca se ejecuta). `components/PdfExport.tsx:75` incluye esas diapositivas → **página en blanco** en el PDF.
- Arreglo: `const locked = isLocked(slide) || isUnavailable(slide);` en `SlideViewer` y filtrar `isUnavailable` en `PdfExport`.

### A5 — Espacio/Enter sobre botones se convierten en "revelar paso" — **media**
- Evidencia: `App.tsx:161` (solo excluye INPUT/TEXTAREA/contentEditable), `:171-176` (`' '`/`'Enter'` → `revealStep()` + `preventDefault`).
- Escenario: en una diapositiva con `data-reveal` pendientes, el docente tabula al botón "Exportar PDF", a una opción de `data-quiz`, a una pestaña de `data-tabs` o al botón "Siguiente" y pulsa Enter: se revela un paso y el `preventDefault` del keydown **cancela la activación del botón** (la respuesta del quiz no se registra, la pestaña no cambia). También afecta a `SELECT`/`SUMMARY`.
- Arreglo:
  ```ts
  const interactive = el?.closest('button, a[href], select, summary, [role="button"], [data-quiz], [data-tabs]');
  if ((e.key === ' ' || e.key === 'Enter') && interactive) return;
  ```

### A6 — `revealNext` es un único slot global de módulo — **baja (riesgo latente)**
- Evidencia: `lib/enhance.ts:22, 124, 153`.
- Hoy funciona: React ejecuta las limpiezas antes de los efectos nuevos y la vista de lectura usa `stepped=false`. En StrictMode (dev, `index.tsx` usa `<React.StrictMode>`) el doble montaje es inocuo porque los guardas `data-enhanced`/`.edup-copy` impiden duplicados, con un detalle: la limpieza del cronómetro (`:120`) hace `clearInterval` pero no pone `handle = undefined`, así que tras el remontaje el botón queda en "⏸" y el primer clic no hace nada visible. Cualquier segundo visor `stepped` (p. ej. una vista previa del docente) se pisaría con el primero.
- Arreglo: que `enhance` devuelva `{ cleanup, step }` y que `PresentationView` guarde `step` en un `ref` y maneje él mismo las teclas; en la limpieza del timer, `handle = undefined; paint()`.

### A7 — Marcado de "visto" en lectura no funciona para diapositivas largas — **media**
- Evidencia: `views/ReadingView.tsx:20-25` (`threshold: 0.5`).
- Escenario: en el celular, una sección más alta que 2× la pantalla nunca alcanza 50 % de intersección → nunca se marca como vista (es justo el caso típico de lectura en móvil).
- Arreglo: `threshold: 0` con `rootMargin: '0px 0px -60% 0px'` (se marca cuando su parte superior cruza el 40 % superior de la pantalla), o `threshold: [0, 0.5]` + `e.intersectionRect.height >= innerHeight * 0.5`.

### A8 — `TasksView` falla si el módulo no tiene diapositivas — **baja**
- Evidencia: `views/TasksView.tsx:131` (`module.slides[0].id`). En el build de estudiantes un módulo cuyas diapositivas sean todas `audience:'docente'` queda vacío (`constants.ts:13`) → `TypeError` y pantalla en blanco. Si `task.slideId` apunta a una diapositiva solo-docente, el enlace lleva a SYLLABUS sin aviso (guard de `App.tsx:139-142`).
- Arreglo: ocultar el botón si no hay destino válido; validar `slideId` en un script de chequeo.

### A9 — Restauración desde `localStorage`: el primer efecto de persistencia sobrescribe el estado guardado — **baja**
- Evidencia: `App.tsx:32-57` (restaura con `setState`) y `:123-136` (persiste). En el primer commit ambos efectos corren en orden: el de persistencia escribe `{selectedCourseId:null, viewMode:'MENU'}` antes de que se apliquen los `setState` de restauración. Funciona (incluso con el doble montaje de StrictMode) solo porque las actualizaciones encoladas en la primera ejecución sobreviven. Si el render intermedio fallara, se pierde el estado.
- Arreglo: inicialización perezosa `useState(() => readSaved())` y quitar el efecto de restauración. `TASKS` no se restaura (decisión razonable) y `returnTo` (`App.tsx:100-104, 215`) es consistente.

### A10 — `PdfExport`: posibles bloqueos del botón y medición prematura — **media**
- Evidencia: `components/PdfExport.tsx:122-133`.
  - Si `prepare()` lanza (p. ej. en `fitSlidesToPage`) o `containerRef` es nulo, nadie hace `setPreparing(false)` → botón deshabilitado en "Preparando…" hasta desmontar.
  - En navegadores móviles `window.print()` no bloquea y `afterprint` no es fiable → mismo bloqueo.
  - Solo se espera `document.fonts.ready`; las `<img>` (hay en `data/python/python_module1.ts`) se miden antes de cargar → zoom erróneo.
  - `page.dataset.overflow` (`:46`) nunca se limpia entre exportaciones.
  - `zoom` (`:32-43`): en Firefox < 126 no existe; la iteración no cambia la altura y termina en `MIN_ZOOM` marcando overflow en todas (degradación, no rotura).
  - En el build de estudiantes la portada dice "Material de uso docente" (`:174`).
- Arreglo: `prepare().catch(console.error).finally(() => { if (!cancelled) setTimeout(() => setPreparing(false), 500); })` tras `print()`; esperar `Promise.all([...imgs].map(i => i.decode().catch(() => {})))`; borrar `data-overflow` al inicio; texto de portada según `IS_STUDENT`.

### A11 — El portal del PDF está montado siempre — **media (rendimiento/DOM)**
- Evidencia: `components/PdfExport.tsx:154-196`, usado en `views/PresentationView.tsx:43` y `views/ReadingView.tsx:57`.
- Efecto: todo el módulo se renderiza dos veces (en lectura, la semana entera duplicada); `id` duplicados del HTML de las diapositivas; los `<style>` embebidos se duplican; Tailwind Play (MutationObserver) re-escanea todo ese DOM; los lectores de pantalla pueden leer el contenido fuera de pantalla (`left:-99999px` no lo oculta a la accesibilidad).
- Arreglo: renderizar el portal solo cuando `preparing` es `true` (el efecto ya corre después del commit, así que el contenedor existirá) y añadir `aria-hidden="true"`.

### A12 — `<script>` en contenido nunca se ejecuta — **baja**
- Evidencia: `data/prog/prog_module15.ts:226` (visualizador BST dentro de `contentHtml`); `components/SlideViewer.tsx:85` usa `dangerouslySetInnerHTML`, que no ejecuta scripts. Ese interactivo está muerto. Los `<style>` embebidos sí se aplican, pero a toda la página.
- Arreglo: convertirlo en un interactivo declarativo de `lib/enhance.ts` (p. ej. `data-widget="bst"`).

### A13 — Plugin: otros detalles — **baja**
- `this.warn` dentro del `visit` funciona (arrow function captura el `this` del hook; verificado con el contexto simulado).
- Ediciones solapadas: no las hay en los casos reales (`notes` antes o después de `contentHtml` producen rangos contiguos `[a,c]`, `[c,d]`; verificado). Caso borde: `notes: 'x' /* c */,` → `removeProp` (`:69-73`) no consume la coma → `, ,` → error de sintaxis (falla ruidosamente).
- Plantillas con `${}`: lanza error claro (`:92-94`). Concatenaciones `'a' + 'b'` dan el mismo mensaje, que es engañoso ("usa una plantilla con ${}").
- HMR: el plugin solo actúa con `--mode student`; en `vite --mode student` re-cifra en cada transform con sal nueva (correcto).
- Filtro de ruta `/\/data\/.+\.ts$/` (`:60`): `.tsx` o contenido fuera de `data/` no se procesaría.

---

## B) Seguridad y privacidad del build de estudiantes

### B1 — **El repositorio es público: el código fuente publica todo lo que el build oculta** — **crítica**
- Evidencia: `gh repo view` → `PUBLIC`; `git ls-files` incluye `data/**/*.ts` (con `notes`), `materias/pnn/pnn_evaluacion_quiz_10%.xml`, `materias/edd/edd_evaluacion_quiz_10%.xml`, `materias/python/python_quiz_corto_10%.xml` (bancos de preguntas con respuestas), `content/plan.json`/`plan.xlsx`, y `data/books/datastructures-estructuras-de-datos-osvaldo-cairo.pdf` + `book_full.txt` (libro con derechos de autor redistribuido públicamente).
- Escenario: cualquier estudiante abre `github.com/Shadowli666/edupresenter/blob/main/data/...` y lee notas del docente y, en cuanto se marque una evaluación con `lock`, su **texto en claro**. El cifrado del bundle no protege nada mientras la fuente sea pública. El historial de git conserva lo ya subido.
- Arreglo (en este orden): (1) hacer el repo **privado** (GitHub Pages desde repo privado requiere plan Pro/Team/Education; alternativa: repo privado de fuentes + workflow que publica solo `dist/` en un repo público o en Cloudflare Pages/Netlify); (2) sacar `materias/`, `data/books/`, `content/` del repo (o a un repo privado aparte); (3) si ya se publicaron evaluaciones aún vigentes, cambiarlas y considerar reescribir historial (`git filter-repo`).

### B2 — Fallo abierto del plugin con `lock`/`audience` no literales — **crítica** (ver A1).

### B3 — El servidor de desarrollo en el hotspot expone todo el proyecto — **alta**
- Evidencia: `vite.config.ts:15` (`host: true`, "para que los estudiantes entren desde el hotspot"). Verificado por `curl` contra el dev server: HTTP 200 para `/data/sis/sis_module2.ts` (incluye "Llegar 10 min antes…", una nota), `/materias/pnn/pnn_evaluacion_quiz_10%.xml`, `/content/plan.json`, `/unlock-codes.example.json`. Por el mismo mecanismo se serviría **`/unlock-codes.local`** (no está en `server.fs.deny`; solo `.git` dio 403). Además `npm run dev` es el build docente: las notas y evaluaciones viajan en claro.
- Arreglo: no usar `npm run dev` con estudiantes. Para el hotspot: `npm run build:student && npx vite preview --host --outDir dist` (solo sirve `dist/`). Añadir `server.fs.deny: ['.env', '.env.*', '*.local', 'materias/**', 'content/**']` y `host: process.env.EDUP_LAN ? true : 'localhost'`.

### B4 — El hotspot sobre HTTP no puede descifrar (WebCrypto exige contexto seguro) — **alta**
- Evidencia: `lib/crypto.ts:13-33` usa `crypto.subtle`, que es `undefined` en `http://192.168.x.x`. La excepción se captura (`:32-33`) y se devuelve `null`, así que el estudiante ve "Código incorrecto" con el código correcto. Igual con `navigator.clipboard` en `lib/enhance.ts:43` ("No se pudo").
- Arreglo: detectar `!window.isSecureContext || !crypto?.subtle` en `LockPanel` y mostrar "Abre el sitio por https (GitHub Pages) para desbloquear"; para copiar, recurrir a `document.execCommand('copy')` con un `<textarea>` temporal.

### B5 — Fortaleza del esquema y ataque offline realista — **alta (depende de los códigos)**
- Evidencia: `lib/crypto.ts:11` (`trim().toUpperCase()`), `:18` (PBKDF2-SHA256, 120 000 iteraciones), `tools/studentContent.ts` `seal()` (sal de 16 B e IV de 12 B aleatorios por diapositiva, AES-GCM-256). La construcción es correcta: IV único, GCM autentica, no hay reutilización de clave/IV.
- Lo que no hace: frenar la búsqueda exhaustiva. Salt + IV + texto cifrado están en el JS público y GCM sirve de verificador perfecto. Una sal por diapositiva no ayuda: el atacante ataca **una** diapositiva.
- Orden de magnitud (estimación con supuestos, no medido aquí): una GPU de gama alta hace en hashcat del orden de 10⁴–10⁵ intentos/s a 120 k iteraciones; una CPU con Node/WebCrypto, del orden de 10²/s.
  - Código de 4–5 caracteres [A-Z0-9] (1,7 M – 60 M): segundos u horas en GPU.
  - 6 caracteres aleatorios (2,2·10⁹): horas en GPU.
  - 8 aleatorios (2,8·10¹²): ~1 año·GPU.
  - Códigos "humanos" (`PARCIAL1`, `SQL2026`, `EVAL-CORTE-1`): segundos con diccionario o máscara. La mayúscula forzada reduce aún más el espacio.
- Ataque realista en un aula: no es la GPU, es **compartir el código** (es único por clave para toda la sección) y leerlo de `localStorage` en un PC compartido del laboratorio (B6). Y, mientras B1 siga abierto, leer la fuente en GitHub.
- Arreglo:
  1. Generar códigos aleatorios de ≥ 10 caracteres del alfabeto Crockford base32 (~50 bits), p. ej. `node -e "..."` en un script `tools/gen-codes`, y validar la longitud en `loadCodes`.
  2. Derivar la clave una sola vez por grupo (sal por `lock`, no por diapositiva) o probar primero una diapositiva del grupo antes de derivar las demás. Hoy un código incorrecto cuesta `nº claves × nº diapositivas` derivaciones (`lib/unlock.ts:33-37, 45-47`): en un celular modesto son segundos.
  3. La mejor defensa para evaluaciones es **no publicar** el contenido hasta la fecha: desplegar en el momento (workflow manual o `schedule`) en lugar de cifrar con días de anticipación.
- Siguen en claro aunque esté bloqueada: `title` e `id` de la diapositiva (`LockPanel.tsx`, búsqueda por título) y las tareas (`tasks`) del módulo. Que el docente lo sepa al titular las evaluaciones.

### B6 — Códigos guardados en claro en `localStorage` — **media**
- Evidencia: `lib/unlock.ts:16, 49`.
- Escenario: PC del laboratorio. El siguiente usuario abre el sitio y la evaluación aparece desbloqueada; el código se lee en DevTools → Application.
- Arreglo: `sessionStorage` por defecto + casilla "Recordar en este dispositivo"; botón "Olvidar códigos"; caducidad (`{code, until}`).

### B7 — Otros caminos de fuga revisados (sin hallazgo) — **informativo**
- Sourcemaps: `vite.config.ts` `sourcemap: false`. Verificado: no hay `.map` en `/tmp/edup-student/assets`.
- `content/plan.json`, `materias/`, `data/pnn/`, `data/books/`: ningún módulo los importa (solo `constants.ts:24-34` hace glob de 7 carpetas); no entran al bundle. Sí están en el repo público (B1) y en el dev server (B3).
- Chunks de mermaid: no contienen datos del curso.
- Búsqueda: `components/SearchOverlay.tsx:21-29` indexa `''` para las diapositivas bloqueadas; tras desbloquear se reindexa al reabrir el overlay. Correcto.
- PDF: excluye bloqueadas (`PdfExport.tsx:75`).
- Build docente (`npm run build`) con notas: `vite.config.ts` comenta "Vercel"; si alguna vez se despliega ese `dist/` en público, las notas se publican. Recomendable que `npm run build` falle si `GITHUB_ACTIONS`/`VERCEL` está definido sin `--mode student`.

### B8 — `dangerouslySetInnerHTML` + Mermaid `securityLevel: 'loose'` — **baja**
- Evidencia: `components/SlideViewer.tsx:55, 85`; `components/PdfExport.tsx:95, 186`.
- Hoy el HTML es del propio docente y se compila, así que el riesgo real es bajo. Se vuelve real si se pega HTML de terceros (web, IA, PRs de estudiantes al repo público): `<img onerror>` se ejecuta con innerHTML y tendría acceso a `localStorage` (códigos, B6). `loose` además permite `click` callbacks en diagramas.
- Arreglo: `securityLevel: 'strict'` (si no se usan `click`), y en el plugin del build de estudiantes rechazar `on\w+=` y `javascript:` en `contentHtml`.

---

## C) Arquitectura y rendimiento

### C1 — El chunk de Mermaid (301 kB) se precarga en el arranque — **alta (rendimiento)**
- Evidencia: `vite.config.ts:25-27` (`manualChunks: { mermaid: ['mermaid'] }`). En el build, el helper de precarga de Vite (`__vitePreload`) quedó **dentro** de `mermaid-*.js` (`index-*.js` empieza con `import{_ as we}from"./mermaid-…js"`) y `dist/index.html` emite `<link rel="modulepreload" href="./assets/mermaid-…js">`. El `import('mermaid')` dinámico de `SlideViewer.tsx:44` deja de ser perezoso.
- Arreglo: quitar `mermaid` de `manualChunks` o usar la forma función:
  ```ts
  manualChunks(id) { if (/node_modules\/(react|react-dom|scheduler)\//.test(id)) return 'react'; }
  ```
  y comprobar que `index.html` ya no precarga mermaid.

### C2 — Todo el contenido es eager (1,1 MB / 213 kB gzip) — **media**
- Evidencia: `constants.ts:24-34` (`import.meta.glob(..., { eager: true })` × 7 cursos, incluidos 3 que no son del período).
- En el celular de un estudiante con datos limitados se descarga y parsea el material de 7 materias para ver una.
- Arreglo: separar metadatos (título, semanas, `tasks`, títulos de diapositivas) del `contentHtml`: glob **no** eager por curso (`import.meta.glob('./data/sis/*.ts')`) y cargar el curso al entrar. La búsqueda global y Tareas usarían un índice ligero generado en build (plugin que emite `search-index.json` con título + texto plano). Además decidir si `intro`/`prog`/`python` deben estar en el sitio de estudiantes 2026-2 (hoy salen en el menú).

### C3 — Tailwind Play CDN en producción — **media**
- Evidencia: `index.html:10` (`public/vendor/tailwind.js`, 500 kB, se ejecuta de forma síncrona en `<head>`).
- Costo: compila CSS en el cliente en cada carga; su MutationObserver re-escanea con cada cambio de DOM (inserciones de SVG de Mermaid, portal de PDF, interactivos); flash sin estilos si el JS tarda; advertencia oficial de no usarlo en producción.
- Arreglo: Tailwind v3 compilado con `content: ['./**/*.{tsx,ts}', './data/**/*.ts', './index.html']` + `@tailwindcss/typography`. Como las clases están como texto literal en `data/**/*.ts`, el escáner las encuentra. Resultado típico: decenas de kB de CSS, sin JS. El funcionamiento offline del hotspot se mantiene, porque el CSS va en `dist/`.

### C4 — Accesibilidad — **media**
Problemas verificados en el código:
- **Acordeón:** el contenido cerrado se oculta con `max-h-0 opacity-0` (`views/SyllabusView.tsx:115`), pero sus botones siguen siendo **tabulables** e invisibles. Faltan `aria-expanded`/`aria-controls`. El botón-punto de la línea de tiempo (`:86`) no tiene nombre accesible. Con `max-h-[2000px]`, un módulo de 21 diapositivas (p. ej. `data/sis/sis_module3.ts`) queda cerca del tope; más diapositivas se recortan.
  - Arreglo: `hidden`/`inert` cuando está cerrado, `aria-expanded={isOpen}` y `aria-label` en el punto.
- **Búsqueda:** `components/SearchOverlay.tsx:55` tiene `role="dialog"` sin `aria-modal`, sin trampa de foco y sin devolver el foco al cerrar. Escape solo funciona con el foco en el input (`:64`): si el foco está en un resultado, el handler de `App.tsx:168` retorna temprano porque `searchOpen` y el overlay no se cierra. No hay navegación con ↑/↓ en los resultados.
- **Interactivos** (`lib/enhance.ts:51-92`):
  - Las pestañas no usan `role="tablist"/"tab"`, `aria-selected` ni flechas.
  - El quiz no anuncia el resultado; falta `aria-live` en `[data-explain]`.
  - Lo revelado tampoco se anuncia.
- **Contraste:** `text-slate-400` sobre blanco (#94a3b8, ≈ 2,6:1) se usa para información real: "Clase 1.1" (`SyllabusView.tsx`), etiquetas del progreso (`PresentationView.tsx`) y numeración en lectura. No cumple AA (4,5:1). Usar `slate-500`/`600`.
- **`prose` en móvil:** `body { overflow-x: hidden }` (`index.html:16`) **recorta** en lugar de permitir scroll. Hay 37 `grid-cols-3/4/5` sin prefijo responsivo en las materias 2026-2 y 6 archivos con `<table>`: en el teléfono quedan columnas ilegibles o cortadas.
  - Arreglo CSS: `.prose table{display:block;overflow-x:auto}`, `.prose pre{overflow-x:auto}`, y una regla de autoría "usar `md:grid-cols-N`" (o un chequeo en `tools/`).

### C5 — Estado global de módulo vs. contexto — **baja**
- `lib/unlock.ts` y `lib/progress.ts` como stores externos con `useSyncExternalStore` están bien: son simples, se pueden probar y no causan renders en cascada.
- El problema es `revealNext` (A6), que es estado de UI de un componente concreto y debería vivir en él.
- Sin router: la app no tiene URL por diapositiva, así que el **botón "atrás" del teléfono sale del sitio** y no se puede compartir el enlace a una clase (ver D).
- Detalle menor: el handler de teclado (`App.tsx:158-201`) se re-suscribe en cada render porque `next`/`prev` son objetos nuevos cada vez. Es inocuo, pero se resuelve con `useMemo` o un ref.

---

## D) Mejoras de mayor valor (por impacto/esfuerzo)

| # | Mejora | Impacto | Esfuerzo | Por qué primero |
|---|---|---|---|---|
| 1 | **Repo privado + sacar `materias/`, `data/books/`, `content/` del repo público** (B1) | Muy alto | Bajo | Hoy las notas, los bancos de quiz con respuestas y un libro con derechos están públicos; el cifrado no sirve mientras la fuente sea pública. |
| 2 | **Plugin con fallo cerrado + verificación post-build** (A1/A2): `throw` ante formas no literales; script que busca en `dist/` el texto de cada `lock` y de cada `notes` | Muy alto | Bajo | Convierte "confío en que lo escribí bien" en una garantía de CI. |
| 3 | **Política de códigos + no publicar antes de tiempo** (B5): generador de códigos de ≥10 caracteres, validación de longitud en `loadCodes`, deploy por `workflow_dispatch` el día de la evaluación | Alto | Bajo | Cierra el ataque offline y el problema de compartir con antelación. |
| 4 | **Fix de códigos obsoletos y `sessionStorage`** (A3/B6) | Alto | Bajo | Evita soporte el día del examen ("me dice incorrecto"). |
| 5 | **Hotspot seguro** (B3/B4): `preview` del build de estudiantes, `fs.deny`, aviso si no hay contexto seguro | Alto | Bajo | El uso en aula sin internet es el escenario declarado. |
| 6 | **Rutas con hash** (`#/sis-001/sis2/sis2-3`) | Alto (estudiantes) | Medio | Botón atrás del móvil, enlaces directos a una clase desde WhatsApp/SAIA, marcadores. Sustituye en buena parte la restauración vía `localStorage`. |
| 7 | **Mermaid fuera del arranque + carga por curso** (C1/C2) | Medio-alto | Bajo (C1) / Medio (C2) | C1 es una línea y ahorra ~300 kB en la primera carga. |
| 8 | **Arreglos de teclado y A4/A7/A10/A11** | Medio | Bajo | Pulen la presentación en vivo y el PDF. |
| 9 | **Lectura móvil**: tablas/grids con scroll, contraste, acordeón accesible (C4) | Medio | Bajo-medio | El sitio de estudiantes se usará sobre todo en teléfono. |
| 10 | **Tailwind compilado** (C3) | Medio | Medio | Rendimiento y robustez; hacerlo cuando el contenido esté estable. |
| 11 | **Modo presentador**: segunda ventana con notas, temporizador y siguiente diapositiva (BroadcastChannel) | Alto (docente) | Medio | Aprovecha las `notes` que ya existen y separa lo que ve el aula de lo que ve el docente. |
| 12 | **Chequeo de contenido en `tools/`**: ids únicos, `slideId` de tareas válidos, `md:grid-cols`, `<script>` prohibido, fechas `due` dentro del período de `semestre.json` | Medio | Bajo | Detecta antes del deploy los errores de autoría que hoy fallan en silencio (A8, A12). |

---

## Resumen ejecutivo

1. El build de estudiantes funciona: no publica `notes` ni sourcemaps y cifra con AES-GCM/PBKDF2 bien construido (verificado en el bundle).
2. **Crítico:** el repositorio de GitHub es **público** y contiene la fuente con notas, los bancos de quiz con respuestas y un PDF con derechos de autor. Eso anula el cifrado.
3. **Crítico:** el plugin falla abierto si `lock`/`audience` no son literales: la evaluación sale en claro (reproducido).
4. **Alto:** un código cambiado deja la evaluación bloqueada para siempre en quien ya la abrió. El dev server en el hotspot expone `data/`, `materias/` y `unlock-codes.local`. Sobre HTTP en la LAN no se puede descifrar.
5. **Alto:** con códigos cortos o "humanos" el ataque offline es trivial. La defensa real es usar códigos aleatorios de ≥10 caracteres y no publicar antes de la fecha.
6. **Rendimiento:** Mermaid (301 kB) se precarga por un `manualChunks` mal ajustado. Todo el contenido de 7 cursos es eager (1,1 MB). Tailwind Play corre en producción.
7. **UX/a11y:**
   - Enter/Espacio en botones se convierten en "revelar paso".
   - El acordeón deja botones invisibles tabulables.
   - Tablas y grids se recortan en el móvil.
   - La lectura no marca como vistas las diapositivas largas.

**Orden recomendado de correcciones:**
1. B1: repo privado y limpieza.
2. A1/A2/B2 + verificación post-build.
3. A3 + B6.
4. B5: códigos y despliegue a la fecha.
5. B3/B4: hotspot.
6. C1: mermaid.
7. A5, A4, A7, A10, A11.
8. C4: móvil y accesibilidad.
9. Rutas con hash.
10. C2/C3: carga por curso y Tailwind compilado.
11. Modo presentador.
