# Resumen — Semana 4 · Programación No Numérica II (2026-2)

**Materia:** PROGRAMACIÓN NO NUMÉRICA II · **Docente:** Prof. Luis Felipe Moreno Oropeza · **Período:** 2026-2 · **Sección:** A · **Aula:** A-06

## Qué se creó

| Entregable | Ruta |
|---|---|
| Plan de sesión — jueves 15/10 (prueba escrita mixta Unidad I, 10 %) | `03-Clases/PROGRAMACION-NO-NUMERICA-II/S04-contenido-clase-jueves.md` |
| Plan de sesión — viernes 16/10 (recursividad + divide y conquista) | `03-Clases/PROGRAMACION-NO-NUMERICA-II/S04-contenido-clase-viernes.md` |
| Módulo EduPresenter (semana 4) | `data/pnn-2026-2/pnn_module4.ts` |
| Este resumen | `reports/s4-programacion-no-numerica-ii.md` |

### Detalle del módulo `pnn_module4.ts`

- `id: 'pnn-mod-4'` (el número final = 4, orden correcto) · `evaluation: '10% — Prueba escrita mixta (Unidad I)'`.
- 16 diapositivas (`pnn4-1` … `pnn4-16`), en dos bloques:
  - **Jueves (prueba, pocas y SIN ítems):** portada, instrucciones/normas, alcance y convenciones (recordatorio por temas, sin preguntas), cierre.
  - **Viernes (contenido nuevo):** portada, qué veremos, recursividad (caso base/recursivo + `data-quiz`), pila de llamadas, divide y conquista (3 pasos), búsqueda binaria, y 3 diapositivas de **código en vivo en Java** (factorial, búsqueda binaria, máx/mín por DyC) con salida esperada; práctica autónoma (4 ejercicios) y cierre.
- Soluciones, trazas y tiempos internos **solo en `notes`** (texto literal, sin `${}`) → cifradas en el build.
- 1 tarea formativa (`pnn4-t1`) que prepara el taller evaluado del 22/10.

## Fuentes citadas

- `08-Banco/PROGRAMACION-NO-NUMERICA-II/FUENTES.md` y `BIBLIOGRAFIA.md`:
  - Joyanes, L. (2007). *Estructuras de datos en Java* (B2) — recursividad y algoritmo en Java.
  - Tenenbaum, A. (1993). *Estructura de datos* (B3) — divide y conquista.
  - GeeksforGeeks (W1), CP-Algorithms (W2), Khan Academy ES (W5) — búsqueda binaria y divide y conquista.
- Programa analítico: Unidad II (objetivos II.1/II.2, contenidos «Búsqueda Binaria» y «Máximos y Mínimos»).
- `02-PGA/plan-programacion-no-numerica-ii-2026-2-revisado.json` — semana 4 (unidad II.1–II.2, métodos Expositivo/Demostración, actividad y 10 %).
- `04-Evaluaciones/.../S04-2026-10-15-prueba-mixta-unidad-I-borrador.md` — **solo el alcance** y las convenciones; los ítems NO se reprodujeron.
- `semestre.json` y `AGENTS.md` del workspace PSM — horario, bloques de 90 min (2 h académicas), reglas §3bis/§3ter.

## Supuestos

- **Lenguaje = Java.** Confirmado por la bibliografía base (Joyanes, *Estructuras de datos en Java*) y por el uso en las semanas 2 y 3 (código en vivo en Java + comparación C++/C/Python). El viernes se codifica solo en Java.
- **Continuidad:** la recursividad solo se había **nombrado** (diagnóstica 25/09 y tarea de repaso); **no se dictó como contenido**. Se formaliza por primera vez el viernes 16/10. No se repite árboles/teoremas/HEAP (ya evaluados el jueves).
- **Reparto del bloque del jueves:** 5 min logística + 8 min repaso opcional de alcance + 75 min prueba + 2 min cierre = 90 min, respetando los 75 min propuestos en el borrador.
- **Balance del viernes:** teoría 21 min (23 %, dentro de 20–30 %) → práctica guiada 30 min → práctica autónoma 22 min.
- **Tarea del módulo** alineada como preparación formativa (0 %) del taller evaluado del 22/10 (20 %).

## Datos por confirmar

- La prueba del 15/10 está en estado **borrador**: no aplicar ni registrar sin aprobación del docente (así se indica en el plan del jueves).
- Sin otros datos pendientes: fechas, porcentajes (10 % / 20 % / 30-30-40), horario y aula se tomaron de `semestre.json`, del plan revisado y del borrador de evaluación; no se inventó ninguno.

## Verificación

- `npx tsc --noEmit` → sin errores.
- `npm run build` → terminó sin error (solo el aviso preexistente de tamaño de chunk).
- Comprobación de no filtración en `dist/`:
  - Soluciones/trazas de `notes` (`Resultado: 120`, `se apilan 5, 4, 3, 2, 1`, `iterativo 2n-2=14`) → **no aparecen** (cifradas).
  - Ítems de la prueba (`42, 28, 35, 7, 18, 31, 12`, «Un árbol binario tiene altura 4», «Inserte, en este orden») → **no aparecen**.
  - Contenido visible (`Divide y Conquista`) → aparece correctamente.
