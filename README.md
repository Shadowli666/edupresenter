# EduPresenter

Gestor web de clases y presentaciones para el docente. Organiza el contenido por **cursos → semanas (módulos) → diapositivas**, con modo de presentación a pantalla completa, diagramas [Mermaid](https://mermaid.js.org/) y notas del docente.

## Stack

- **Vite 7** + **React 18** + **TypeScript**
- **Tailwind CSS** vía Play CDN (incluye el plugin `typography` para las clases `prose*`)
- **Mermaid** (diagramas, carga dinámica por diapositiva)
- **lucide-react** (iconografía)

## Requisitos

- Node.js 18+
- npm

## Puesta en marcha

```bash
npm install      # o: npm ci
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # type-check (tsc) + build de producción en dist/
npm run preview  # sirve el build de dist/
```

> No se requiere ninguna API key: la app es 100 % estática.

## Estructura

```
.
├─ App.tsx                  # Menú, syllabus y modo presentación + navegación
├─ constants.ts             # Carga los módulos (import.meta.glob) y define los cursos
├─ types.ts                 # Tipos Course / Module / Slide
├─ components/
│  └─ SlideViewer.tsx       # Render de la diapositiva (HTML + Mermaid + pie institucional)
├─ data/                    # Módulos por curso (un .ts por semana)
│  ├─ intro/    moduleN.ts
│  ├─ prog/     prog_moduleN.ts
│  ├─ pnn/      pnn_moduleN.ts
│  └─ python/   python_moduleN.ts
├─ content/                 # plan.xlsx y su export plan.json
├─ tools/                   # utilidades de análisis de contenido (Python)
└─ reports/                 # salidas generadas por tools/
```

## Cómo agregar contenido

1. Crea un archivo en `data/<curso>/<prefijo>_module<N>.ts` exportando un `Module`:
   ```ts
   import { Module } from '../../types';

   export const MI_MODULO: Module = {
     id: 'pnn-mod-3',           // el número final define el orden de la semana
     title: '3. Título de la semana',
     description: 'Descripción breve.',
     evaluation: '0%',           // o "10%", "20%"...
     slides: [
       { id: 'pnn3-1', title: 'Diapositiva', contentHtml: '<p>...</p>', notes: 'Notas' },
     ],
   };
   ```
2. La app lo detecta automáticamente (`import.meta.glob`); no hay que registrarlo a mano.
3. Para diagramas, incluye un `<div class="mermaid">...</div>` dentro de `contentHtml`.

## Utilidades (`tools/`)

Ejecutar desde la raíz del proyecto:

```bash
python3 tools/check_slide_counts.py   # cuenta diapositivas por módulo (avisa de módulos "cortos")
python3 tools/analyze_plan.py         # compara content/plan.json con los módulos y escribe reports/comparison_report.txt
python3 tools/extract_plan.py         # convierte content/plan.xlsx -> content/plan.json (requiere pandas, openpyxl)
```

## Convenciones

- Español en todo el contenido y la interfaz.
- `id` de módulo: `<prefijo>-mod-<número>` (el número manda el orden).
- `id` de diapositiva: `<prefijo><semana>-<n>[-sufijo]`.
- Esta app es solo para dictar y organizar; no recibe entregas (SAIA no se usa en las materias del docente; el medio de entrega lo indica el docente).


## Notas del docente y evaluaciones protegidas

Hay **un solo sitio** (`npm run build`). En el build, el contenido sensible sale **cifrado** (AES-GCM + PBKDF2):

- **`notes`** de cada diapositiva → cifradas con el código de la clave `notas`. Se leen desde el botón **Notas** de la presentación.
- **`lock: '<clave>'`** (evaluaciones) → `contentHtml` cifrado; el estudiante lo abre con el código que entrega el docente.

En `npm run dev` todo está en claro. Los códigos viven en `unlock-codes.local` (ignorado por git) y se **generan solos** en el primer build;
`npm run codes` los muestra (`-- --json` para agentes). En GitHub Actions se definen en el secreto `UNLOCK_CODES`; si falta, ese contenido queda *no disponible* (nunca se publica en claro).
Detalle completo y reglas para generar clases: **`AGENTS.md`**.

> El cifrado solo protege lo que sale en el sitio publicado. Si el repositorio de GitHub es público, `data/**/*.ts` sigue siendo legible en la fuente.

## Tareas

Cada módulo puede declarar `tasks: Task[]` (ver `types.ts`). Aparecen en la vista **Tareas**
(vencidas / esta semana / próximas, con casilla de "hecha" guardada en el navegador).

## Interactivos en las diapositivas (HTML con `data-*`)

| Atributo | Efecto |
|---|---|
| `data-reveal` | el elemento aparece paso a paso (↓, Espacio, → o botón) |
| `data-tabs` > `data-tab="Título"` | pestañas |
| `data-quiz` > `data-option` / `data-correct` / `data-explain` | pregunta con retroalimentación |
| `<pre><code>` | botón "Copiar" automático |

Sin JavaScript (por ejemplo en el PDF) todo se muestra completo.
