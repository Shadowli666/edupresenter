# Cambios aplicados — SISTEMAS I

Materia: **SISTEMAS I**. Archivos editados: `data/sis/sis_module2.ts`. Fuente de verdad para la continuidad: `_referencias/maps/MAPA-GENERAL.md` §6 (confirmación docente 2026-10-05) y plan `03-Clases/SISTEMAS-I/S03-contenido-clase-lunes.md`.
Verificación: `npx tsc --noEmit` → **EXIT 0** (pasa).

---

## Correcciones aplicadas

### #1 — El caso (Farmacia San Rafael) y el mapa conceptual NO se realizaron

`data/sis/sis_module2.ts` presentaba el caso y el mapa conceptual como realizados y prometía una devolución el 05/10, pero MAPA-GENERAL §6 y el plan S03 registran que **solo se dictó la teoría**; el caso y el mapa no se ejecutaron y no se asignó traer un caso propio. Corregí el registro (diapositivas/notas) y la promesa de devolución, **sin tocar el contenido académico** (caso, cinco actividades, teoría intactos).

| Ubicación | Antes | Después |
|---|---|---|
| `sis_module2.ts:6-7` (description) | "…aplicadas a un caso real de Ciudad Ojeda **y consolidadas en un mapa conceptual**." | "… Se dictó la teoría; el caso de aplicación (Farmacia San Rafael) y el mapa conceptual **no se ejecutaron** (MAPA-GENERAL §6)." |
| `sis_module2.ts:8` (evaluation) | `0% — Diagnóstica + mapa conceptual` | `0% — Diagnóstica` |
| `sis_module2.ts:40` (sis2-1, visible) | *(no existía)* | Añadida caja "Registro de ejecución (MAPA-GENERAL §6)" que indica que caso y mapa no se realizaron y que la ficha de S3 sustituye el mapa. |
| `sis_module2.ts:44` (sis2-1 notes) | "…hojas para la diagnóstica y para el mapa conceptual…" | Se quitó "y para el mapa conceptual" y se añadió el registro de ejecución. |
| `sis_module2.ts:509` (sis2-15, visible) | "Tu hoja se revisa en clase con una lista de cotejo y **se devuelve corregida la semana del 05/10**." | "Actividad prevista pero **no ejecutada** el 28/09 (MAPA-GENERAL §6): no se realizó el mapa conceptual, por lo que no hay hoja que devolver." |
| `sis_module2.ts` notas de sis2-12, sis2-13, sis2-14, sis2-15 | *(sin marca)* | Se añadió "No ejecutado el 28/09 (MAPA-GENERAL §6)…" a cada nota (caso, datos, taller y mapa). |
| `sis_module2.ts` notas de sis2-16 (cierre) | *(sin marca)* | Se añadió que no se asignó la tarea de traer un caso propio y que el bloque `tasks` se conserva por trazabilidad con el PGA. |

### #3 (parcial) — Aclarar el marco de las "5 actividades" (Sommerville vs Pressman)

`sis_module2.ts:196` (diapositiva "Actividad 1 · Proceso"): el rótulo "5 ACTIVIDADES ESTRUCTURALES" se prestaba a confusión con las 5 actividades de la clase.

- Antes: `5 ACTIVIDADES ESTRUCTURALES — las mismas en un proyecto pequeño y en uno enorme`
- Después: `5 ACTIVIDADES ESTRUCTURALES DEL PROCESO (Pressman, cap. 1 §1.4) — distintas de las 5 actividades de la clase; las mismas en un proyecto pequeño y en uno enorme`

Además, en las `notes` de la misma diapositiva se añadió la aclaración explícita: las 5 actividades de la clase son las de **Sommerville/programa** (Proceso, Proyectos, Personas, Producto, Calidad), mientras que las 5 **estructurales del proceso** son de **Pressman** (Comunicación, Planeación, Modelado, Construcción, Despliegue).

### Diagnóstica — alinear el número de ítems con el PGA/plan

`sis_module2.ts:105-106` (diapositiva "Prueba diagnóstica (0 %)"): el deck decía "6 opción múltiple + 1 V/F + 1 abierto" (8 ítems). El PGA revisado (`02-PGA/plan-sistemas-i-2026-2-revisado.json`, semana 2) y el plan S02 dicen "**8 ítems de selección y 1 respuesta abierta breve**" (9 ítems).

- Antes: `6 ítems de opción múltiple` / `1 ítem de verdadero o falso` / `1 ítem abierto (3 líneas)`
- Después: `8 ítems de selección (opción múltiple)` / `1 respuesta abierta breve (3 líneas)`

Nota: el FORMATO-8.7-DIAGNOSTICA-2026-09-28.docx es una plantilla de formato (no enumera el número de ítems); el dato autoritativo del conteo está en el PGA y el plan S02.

---

## Verificaciones (sin cambio necesario)

### Páginas citadas en `sis_module3.ts` — verificadas correctas

`sis_module3.ts:394-395` cita "Pressman (1999), cap. 1, pp. 12–14" y "Sommerville (2004), cap. 1, pp. 5–9". Verificadas contra la biblioteca extraída (`09-Biblioteca/libros/…`):

- **Pressman** cap. 1 §1.4 "El proceso del software" (proceso + 5 actividades estructurales + actividades sombrilla) ocupa las **páginas impresas 12–14** (marcadores "13" y "14" en el texto extraído). La cita es correcta.
- **Sommerville** cap. 1 §1.1 "Desarrollo de software profesional" (producción profesional + calidad/atributos esenciales) ocupa las **páginas impresas 5–9** (marcadores "5", "7", "9" en el texto extraído). La cita es correcta.
- Los años (Pressman 1999, Sommerville 2004) coinciden con el banco (`08-Banco/SISTEMAS-I/FUENTES.md`, B2/B3).

Por tanto **no se modificó** `sis_module3.ts`. Queda pendiente (fuera del alcance asignado a esta materia) la discrepancia menor de rangos entre S2 y S3 que señala la verificación (#7): `sis_module2.ts` ("Fuentes", ~L570-571) cita Pressman pp. 12–15 y Sommerville pp. 5–8, mientras que el rango verificado es 12–14 y 5–9. No la corregí porque la instrucción solo me pidió verificar las páginas de `sis_module3.ts`.

---

## Lo que NO se corrigió y por qué

1. **Bloque `tasks` de `sis_module2.ts` (conservado por instrucción).** El task `sis2-t1` ("Semilla del análisis de caso… Será la base del análisis de caso del 05/10", due 2026-10-05) se conserva tal cual, pese a que MAPA-GENERAL §6 registra que "no se asignó traer un caso propio". La instrucción fue explícita: *"Conserva el bloque 'tasks' que ya existe en sis_module2.ts"*. Lo dejé y dejé constancia en las notas de sis2-16.

2. **Prueba del 12/10 (regla conservada).** No toqué la regla de que SISTEMAS I tiene la prueba de 10 % el lunes 12/10 (`sis_module2.ts` "Lunes 12/10 → 10 % del Corte I"). Hallazgo A6 (reportado, no corregido): **el 12/10 es feriado nacional en Venezuela (Día de la Resistencia Indígena)**, pero ni `calendario-2026-2.json` ni `semestre.json` registran feriados, y el PGA revisado programa la prueba ese lunes. NO VERIFICABLE con las fuentes del workspace; se reporta para que el docente confirme si se aplicó o se reprogramó, sin cambiar la diapositiva.

3. **#10 (plan S01: "120 min / 2 h teóricas" vs bloque de 135 min).** No lo corregí: no estaba en la lista de correcciones asignada a mi materia (la sesión S1 ya se dictó el 21/09 y el efecto es documental). Queda pendiente en `03-Clases/SISTEMAS-I/S01-contenido-clase-lunes.md` si el docente lo pide.

4. **`sis_module1.ts` y `sis_module3.ts` sin `notes`** (hallazgos #8 y #9, prioridad baja, opcionales). No los añadí: no estaban en el alcance asignado y S1/S3 ya fueron dictadas (sus tiempos y respuestas viven en los planes de sesión).

5. **Discrepancia de páginas S2 vs S3** (ver apartado anterior): no corregida por estar fuera del alcance pedido.

---

## Archivos tocados

- `data/sis/sis_module2.ts` (único archivo modificado).
- `data/sis/sis_module1.ts`, `data/sis/sis_module3.ts` y `03-Clases/SISTEMAS-I/*.md`: **sin cambios** (verificados, sin corrección requerida o fuera de alcance).
