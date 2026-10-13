# EduPresenter — guía para agentes que generan o editan clases

App estática (Vite + React + TS). Contenido en `data/<curso>/<prefijo>_module<N>.ts`: un `Module` por semana.
El docente es el Prof. Luis Felipe Moreno Oropeza (IUPSM, período 2026-2). Reglas pedagógicas y datos del período
viven en el workspace PSM (`/home/akira/Documentos/PSM-2026-2/AGENTS.md`, `semestre.json`); no los inventes.

## 1. Crear o editar un módulo

```ts
import { Module } from '../../types';

export const SIS_MODULE_4: Module = {
  id: 'sis-mod-4',              // el número final define el orden
  title: '4. Título de la semana',
  description: 'Una frase.',
  evaluation: '0%',
  slides: [
    {
      id: 'sis4-1',             // único dentro del módulo
      title: 'Título de la diapositiva',
      contentHtml: `<div class="space-y-5">…</div>`,  // HTML con clases Tailwind
      notes: 'Solo el docente: respuestas, tiempos, pendientes.',
    },
  ],
  tasks: [ /* ver §3 */ ],
};
```

- Un módulo nuevo se detecta solo (`import.meta.glob` en `constants.ts`); para un curso nuevo hay que declararlo ahí.
- Una diapositiva = una hoja A4 horizontal en el PDF: se escala sola, pero **no metas más de lo que cabe en pantalla**.
- **Orden de contenido:** teoría breve (~20–30 %) → práctica guiada → práctica autónoma. No repitas la sesión anterior.
- **Sin imprimir:** la ficha del estudiante va dentro de las diapositivas; respuestas y listas de cotejo van en `notes`, nunca en `contentHtml`.

## 2. Notas y evaluaciones protegidas (IMPORTANTE)

| Campo | En `npm run dev` | En `npm run build` |
|---|---|---|
| `notes: '…'` | en claro | **cifrado** con el código de la clave `notas` |
| `lock: 'eval-corte-1'` | en claro | `contentHtml` **cifrado** con el código de esa clave |

Reglas para que el plugin (`tools/protectedContent.ts`) no falle y nada se filtre:

1. `notes` y `lock` deben ser **texto literal** (`'…'`, `"…"` o plantilla sin `${}`). Nada de variables, spread (`...base`) ni propiedades abreviadas: el build **se detiene con error** en vez de publicar en claro.
2. Una diapositiva con `lock` también debe tener `contentHtml` literal.
3. No pongas respuestas en `contentHtml` de una diapositiva visible; usa `notes`.
4. Marca como evaluación solo lo que el docente indique; pídele la clave (`eval-corte-1`, `eval-corte-2`…).

### Obtener el código de desbloqueo

```bash
cd /home/akira/Proyectos/edupresenter
npm run codes              # tabla: clave  código
npm run codes -- --json    # JSON, para scripts/agentes
cat unlock-codes.local     # mismo contenido; está en .gitignore, NO lo subas ni lo pegues en commits
```

- Los códigos se **generan solos** en el primer `npm run build` si no existen.
- Para fijar uno: edita `unlock-codes.local` (`{ "notas": "…", "eval-corte-1": "…" }`) y vuelve a compilar. **Cambiar un código exige recompilar y volver a publicar.**
- En CI, el secreto `UNLOCK_CODES` (mismo JSON). Sin él, notas/evaluaciones salen **no disponibles**.
- Un agente que edita el código fuente **no necesita** el código: `data/**/*.ts` está en claro. El código solo sirve para abrir el sitio compilado.
- Usa códigos de 10+ caracteres aleatorios. Nunca imprimas el código en informes ni en commits.

## 3. Tareas

Declara las tareas en el módulo; aparecen en la vista **Tareas** con fecha y corte:

```ts
tasks: [{
  id: 'sis4-t1',
  title: 'Nombre corto',
  description: 'Texto plano (sin HTML).',
  items: ['Entregable 1', 'Entregable 2'],
  due: '2026-10-19',            // YYYY-MM-DD, tomada de semestre.json / plan de sesión
  corte: 1,                      // 1 | 2 | 3
  weight: '10 %',               // o '0 % (formativa)'
  kind: 'tarea',                // 'tarea' | 'evaluacion' | 'lectura'
  slideId: 'sis4-16',           // diapositiva que la explica
}]
```

## 4. Interactivos (atributos `data-*` en el HTML)

```html
<!-- Aparecen de a uno (↓, Espacio, → o botón) -->
<li data-reveal>Paso 1</li>

<!-- Pestañas (sin JS se ven apiladas, p. ej. en el PDF) -->
<div data-tabs>
  <section data-tab="SQL">…</section>
  <section data-tab="Python">…</section>
</div>

<!-- Pregunta de selección -->
<div data-quiz>
  <p>¿Pregunta?</p>
  <button data-option>A</button>
  <button data-option data-correct>B</button>
  <p data-explain>Porque…</p>
</div>

<!-- Diagrama -->
<div class="mermaid">graph LR; A-->B</div>
```

Los `<pre><code>` reciben un botón *Copiar* solos. Los `data-reveal` se ven todos en la vista de lectura y en el PDF.

## 5. Verificación antes de dar por terminado

```bash
npx tsc --noEmit        # tipos
npm run build           # compila y cifra; debe terminar sin errores
```

Si agregaste una evaluación (`lock`), comprueba que su texto **no** aparezca en `dist/`:
`grep -rl "una frase exclusiva de la evaluación" dist/` debe devolver vacío.
