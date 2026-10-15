# Cambios — PROGRAMACIÓN NO NUMÉRICA II (2026-2)

Materia: PROGRAMACIÓN NO NUMÉRICA II. Archivos editados: `data/pnn-2026-2/pnn_module2.ts`,
`data/pnn-2026-2/pnn_module3.ts` y `03-Clases/PROGRAMACION-NO-NUMERICA-II/S03-contenido-clase-viernes.md`.
Verificación de tipos: `npx tsc --noEmit` → **pasa sin errores**.

Fuentes de verdad consultadas: `semestre.json`, `_referencias/maps/MAPA-GENERAL.md`,
`03-Clases/PROGRAMACION-NO-NUMERICA-II/S02-*.md` y `S03-*.md`, y
`04-Evaluaciones/PROGRAMACION-NO-NUMERICA-II/Corte-I/S04-prueba-escrita-10pct-2026-10-15.md`
(prueba escrita Unidad I **15/10**) y `Revisado-2026-2/S05-2026-10-22-taller-practico-divide-y-conquista-borrador.md`
(taller 20 % **22/10**).

## Cambios aplicados

| # | Archivo:línea | Antes → Después |
|---|---|---|
| menor "impresa" | `pnn_module2.ts:35` | `notes` con "guía de ejercicios impresa" → "guía de ejercicios en pantalla (sin impresión)" |
| #31 | `pnn_module2.ts:447` (ahora 449) | comentario en Python `// OJO: doble barra = division entera` → `# OJO: doble barra = división entera` (en Python `//` tras `print(...)` era SyntaxError) |
| #32 | `pnn_module2.ts:336-338` (ahora +339) | código Java sin línea "Ocupadas" → se añade `System.out.println("Ocupadas: " + 5 + " de " + a.length);` (coherente con el plan `S02-contenido-clase-viernes.md:134`, que sí la imprime) |
| #32 | `pnn_module2.ts:343-345` (ahora +347) | salida esperada de Java sin "Ocupadas" → se añade la línea `Ocupadas: 5 de 7` (ahora los cuatro lenguajes coinciden con la afirmación de `:471`) |
| #34 | `pnn_module2.ts:574-605` (pnn2-10a) | diapositiva "Árbol de referencia (cópialo)" mostraba la solución (Niveles, Altura=3 · Nodos=8 · Aristas=7, "no es completo") → se deja **solo el árbol** y esa solución se mueve al `notes` (`:608`) |
| #38 | `pnn_module3.ts:46` | agenda "Fórmulas del arreglo: hijos y padre" → "Activación breve: fórmulas del arreglo (recuerdo)" |
| #38 | `pnn_module3.ts:99-135` (pnn3-4) | diapositiva completa "Fórmulas del arreglo: el mapa de índices" (tabla + ejemplo) → diapositiva de **activación breve** con las tres fórmulas y una pregunta relámpago (p=3), sin re-explicar |
| #39 | `pnn_module3.ts:244-272` (pnn3-9) | "Ejercicio en pizarra: 15, 8, 30, 12, 25" traía la tabla con los 5 arreglos y la traza completa → se deja **solo el enunciado** (insertar uno a uno) y la traza/solución se mueve a un `notes` nuevo |
| #40 | `pnn_module3.ts:409` (ahora 391) | "la técnica que usarás en la evaluación del 22/10" → "…en la prueba del 15/10" (la extracción de raíz con HEAPIFY pertenece a la prueba Unidad I del 15/10, no al taller de divide-y-conquista del 22/10) |
| #41 | `pnn_module3.ts:549` (ahora 531) | "se devuelven el lunes 12/10" → "se devuelven el jueves 15/10, antes de la prueba" (PNN II solo tiene jueves y viernes) |
| #41 | `S03-contenido-clase-viernes.md:46` | "se devuelven el lunes 12/10" → "se devuelven el jueves 15/10, antes de la prueba" (misma corrección de fecha en el plan, para coherencia) |

## Notas sobre decisiones tomadas

- **#32 (Java "Ocupadas"):** elegí **añadir la línea al código Java y a su salida esperada** (y no corregir la afirmación de `:469`), porque es lo coherente con el plan `S02-contenido-clase-viernes.md:134,142`, que sí incluye `System.out.println("Ocupadas: " + (5) + " de " + a.length)` y su salida. Así los cuatro lenguajes siguen dando la misma salida, como afirma `:471`.
- **#38 (fórmulas S3):** el plan `S03-contenido-clase-jueves.md` ya trata las fórmulas como recuerdo ("No se repite … se activan", línea 98) y su guion (0–7 min) las usa en la activación, así que no hizo falta editar el plan; la corrección se limitó al deck (agenda + diapositiva pnn3-4). Se conservó la nota de "motor de INSERTAR y HEAPIFY", que es el puente real hacia lo nuevo del día.
- **#39 (traza de pizarra):** la solución ahora vive en un `notes` nuevo (texto literal, sin `${}`), cumpliendo la regla de que respuestas/trazas van en `notes`, no en `contentHtml`. El plan `S03-contenido-clase-jueves.md:79-83` ya contenía la misma tabla, así que el docente la tiene en su material sin exponerla en pantalla.

## Lo que NO corregí (y por qué)

1. **`S02-contenido-clase-viernes.md:182` y `:260`** siguen diciendo "guía impresa" / "Materiales: guía impresa". La corrección pedida se limitaba al deck (`pnn_module2.ts:35`); esas líneas del plan S2 describen una sesión ya dictada (02/10) y el propio deck en `:646` ya dice "no se entregan impresos". Lo dejo reportado para que el docente decida si unifica el plan S2. **No lo cambié por estar fuera del alcance indicado.**
2. **#33** (tabla "posición vacía en Python es `None`" vs código con `"-"`), **#37** (nota condicional sobre "jueves 1°/10" que habla de INSERTAR/HEAPIFY, contenido de S3) y **#42/#43** (módulos 1 y 3 sin `notes`): **no están** en la lista de correcciones asignada a esta materia, así que no los toqué.
3. El **#32** deja una pequeña asimetría preexistente: Java y C++/C usan `a.length`/`7` para "Ocupadas" mientras Python usa `len(a)`, que es lo correcto en cada lenguaje; no es un error, lo dejo igual.

## Verificación

- `npx tsc --noEmit` → sin errores.
- Grep de control: ya no aparecen en pantalla "Altura = 3", "Datos del árbol", "Traza del último paso" ni la tabla "Tras insertar" (soluciones movidas a `notes`).
- No quedan referencias a "22/10" ni a "lunes 12/10" en `pnn_module3.ts`.
