# Cambios técnicos — EduPresenter (2026-10-13)

Correcciones aplicadas sobre `reports/revision-app-opus.md`, acotadas a los puntos técnicos indicados
(sin rutas hash, sin tocar `tools/protectedContent.ts`, `lib/crypto.ts`, `lib/unlock.ts` ni `data/**`).

Verificación: `npx tsc --noEmit` sin errores · `npx vite build` termina OK.

---

## 1. Mermaid fuera del arranque (C1)

**`vite.config.ts`**
- Antes (líneas 28–31): `manualChunks: { react: ['react','react-dom'], mermaid: ['mermaid'] }`.
- Después (líneas 26–35): `manualChunks(id)` en forma de función que solo agrupa
  `react`/`react-dom`/`scheduler`; mermaid queda fuera y el `import('mermaid')` dinámico crea su
  propio chunk sin precargarse.

Comprobación: `dist/index.html` ahora emite un único `modulepreload` (`react-C9lEDpBO.js`); ya **no**
aparece el chunk de mermaid (`mermaid.core-*.js`).

---

## 2. `components/PdfExport.tsx` (A10/A11)

- **(c) limpiar `data-overflow`** — en `fitSlidesToPage` (antes línea 26, `const fit = …`):
  ```ts
  delete page.dataset.overflow;
  ```
  ahora se borra al inicio de cada página antes de medir.

- **(b) esperar imágenes decodificadas** — se añadió el paso 2 (después de mermaid, antes de medir):
  ```ts
  await Promise.all(Array.from(container.querySelectorAll('img'))
    .map((img) => img.decode ? img.decode().catch(() => {}) : Promise.resolve()));
  ```

- **(a) `try/finally` + respaldo con temporizador** — el efecto (antes líneas 79–133, después 80–151)
  envuelve toda la preparación en `try/catch/finally`; en `finally` programa un
  `setTimeout(() => setPreparing(false), 500)` para que el botón nunca quede en «Preparando…» si
  `prepare()` falla o `afterprint` no llega (móviles). El listener de `afterprint` limpia ese
  temporizador cuando sí se dispara.

- **(d) contenedor montado solo al preparar** — el portal (antes línea 154 `{createPortal(`) ahora es
  `{preparing && createPortal(…)}` (después línea 172), de modo que el módulo ya no se duplica
  permanentemente en el DOM. Se añadió `aria-hidden="true"` al contenedor. El efecto que mide corre
  con dependencia `[preparing]`, así que se ejecuta **después** de montar el contenedor
  (`containerRef` ya apunta al nodo).

---

## 3. `views/TasksView.tsx` — módulo sin diapositivas (A8)

- Antes (línea 131): `onOpenSlide(course.id, module.id, task.slideId ?? module.slides[0].id)` →
  `TypeError` si `module.slides` está vacío.
- Después: se calcula un destino seguro y se oculta el botón si no hay diapositiva válida:
  ```ts
  const targetSlideId = task.slideId && module.slides.some((s) => s.id === task.slideId)
    ? task.slideId : module.slides[0]?.id;
  ```
  y el botón «Ver en la clase» se renderiza solo si `targetSlideId` existe.

---

## 4. `views/ReadingView.tsx` — marcar como visto en diapositivas largas (A7)

- Antes (línea 25): `{ threshold: 0.5 }`.
- Después: `{ threshold: 0.15 }` (umbral bajo, alcanzable por secciones más altas que la pantalla).

---

## 5. Accesibilidad (C4)

### `components/SearchOverlay.tsx`
- **Devolver el foco**: al montar guarda `document.activeElement` y lo refocaliza al cerrar
  (antes solo `useEffect(() => inputRef.current?.focus(), [])`).
- **Trampa de Tab**: listener `keydown` en `document` que cicla el foco dentro del diálogo
  (`role="dialog"` + `aria-modal="true"` añadidos) y cierra con Escape desde cualquier punto
  (antes Escape solo funcionaba con el foco en el input; se retiró ese handler inline).

### `views/SyllabusView.tsx`
- Antes (línea 114–116): el cuerpo cerrado usaba `max-h-0 opacity-0` y dejaba botones tabulables.
- Después: se añadió `aria-hidden={!isOpen}` y `ref={(el) => { if (el) el.inert = !isOpen; }}`
  al contenedor del acordeón, de modo que al estar cerrado no es enfocable ni visible para
  lectores de pantalla.

### Contraste `text-slate-400` → `text-slate-500`
Sustitución en el texto informativo pequeño de las vistas y paneles indicados:

| Archivo | Ocurrencias |
|---|---|
| `views/ReadingView.tsx` | 3 |
| `views/PresentationView.tsx` | 3 |
| `views/SyllabusView.tsx` | 5 |
| `views/MenuView.tsx` | 2 |
| `components/SearchOverlay.tsx` | 4 |
| `components/LockPanel.tsx` | 1 |
| `components/NotesPanel.tsx` | 0 (no tenía `text-slate-400`) |

---

## 6. Rutas hash

**No implementado** (fuera de alcance, según indicación).

---

## Lo que NO se tocó / no se pudo

- `tools/protectedContent.ts`, `lib/crypto.ts`, `lib/unlock.ts`, `data/**`: sin cambios.
- `text-slate-400` en `components/PdfExport.tsx:191` y `components/SlideViewer.tsx:91` (pie
  institucional y nota de portada del PDF): **no** se cambiaron porque están fuera del alcance
  explícito del punto 5 (`views/*.tsx`, `SearchOverlay.tsx`, `LockPanel.tsx`, `NotesPanel.tsx`).
  Quedan pendientes si se quiere subir también el contraste ahí.
- Resto de hallazgos del informe (A1–A6, A9, A12–A13, B*, C2–C3, C5) quedan fuera de esta tanda.
