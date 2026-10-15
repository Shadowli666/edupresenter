# Cambios aplicados — ELECTIVA II (PROGRAMACIÓN EN SQL)

Fecha: 2026-10-14 · Materia: ELECTIVA II (SQL) · Base: `verificacion-sonnet.md` (sección 3 y hallazgos adicionales A1/A2).
Archivos editados (solo los permitidos): `data/sql/sql_module1.ts`, `data/sql/sql_module3.ts`, `03-Clases/ELECTIVA-II-SQL/S01-contenido-clase-jueves.md` y `S03-contenido-clase-jueves.md`.

Verificación: `npx tsc --noEmit` **pasa** (sin errores) y `npm run build` **pasa** (cifra y compila sin errores).

---

## 1. Datos personales reales (#29, A2)

Cédulas del docente (`[cédula]`) y de una persona (`[cédula]`, "[estudiante]") sustituidas por datos ficticios evidentes.

- `data/sql/sql_module1.ts` (tabla `estudiante`, diapositiva `sql1-5`):
  - `:131` `[cédula] · [docente]` → `V-[cédula] · Estudiante Ejemplo`
  - `:132` `[cédula] · [estudiante]` → `V-[cédula] · Estudiante Ejemplo 2`
- `03-Clases/ELECTIVA-II-SQL/S01-contenido-clase-jueves.md` (misma tabla en §2.3):
  - `:96-97` mismas dos filas → `V-[cédula] · Estudiante Ejemplo` / `V-[cédula] · Estudiante Ejemplo 2`

---

## 2. Práctica autónoma en S1 (#24)

- `data/sql/sql_module1.ts`: añadida diapositiva nueva `sql1-15b` («Práctica autónoma · en tu cuaderno», 15 min) con 4 consignas para el cuaderno (`SELECT/WHERE/ORDER BY`, `BETWEEN`, reto con `LIKE`). Las respuestas de referencia van en `notes`, no en `contentHtml`. La diapositiva se inserta entre `sql1-15` (demostración guiada) y `sql1-16` (cierre), sin añadir tiempo: corresponde al bloque 110–125 min ya previsto en el plan.
- `03-Clases/ELECTIVA-II-SQL/S01-contenido-clase-jueves.md` §2.7: se aclara que es «práctica autónoma corta (15 min)» con **consignas para el cuaderno** (se escribe la consulta en el cuaderno y luego se verifica en el SGBD). Las 6 consignas ya existían y se conservan.

---

## 3. Repetición S1→S3 (#22, #23)

`SELECT/FROM/WHERE/ORDER BY` y operadores de comparación se dictaron el 24/09 (S1). En S3 solo se activan; ya no se presentan como contenido nuevo.

- `data/sql/sql_module3.ts`:
  - `sql3-9` (`:179-197`): «Contenido nuevo · SELECT, FROM, WHERE, ORDER BY» → **«Activación · recordamos la consulta básica»**, con 3 preguntas de recordatorio; las respuestas van a `notes` (añadido).
  - `sql3-10` (`:198-217`): «Operadores de comparación y lógicos» → **«Operadores lógicos · AND, OR, NOT»** (lo único nuevo); los comparadores `= <> < > <= >=`, `BETWEEN`, `IN` se marcan como «ya visto el 24/09».
  - `sql3-2` (`:38`): el recuadro «Contenido previsto» ahora dice «Repaso de SELECT / WHERE / ORDER BY (visto el 24/09) · operadores lógicos · funciones de agregación · GROUP BY / HAVING · INNER JOIN».
  - `description` (`:6-7`): reformulada para reflejar el alcance real (SELECT/WHERE/ORDER BY como repaso; LEFT/RIGHT JOIN y LIMIT fuera de evaluación).
- `03-Clases/ELECTIVA-II-SQL/S03-contenido-clase-jueves.md`:
  - `:4` (aviso): se agrega que `SELECT/FROM/WHERE/ORDER BY` y comparadores **sí se dictaron el 24/09** y hoy solo se activan.
  - `:17` (ficha Contenidos): se separa «repaso» de «nuevo» y se acota JOIN a INNER (LEFT/RIGHT como ampliación opcional).
  - Guion `:27`: el bloque de 20 min «SELECT/WHERE/ORDER BY» se recorta a **10 min** de «Activación de la consulta + operadores lógicos»; los 10 min liberados se suman al taller (ahora 40 min). Tiempos reajustados en toda la tabla para mantener los 135 min.
  - §2.2 `:88-97`: se anota que `SELECT/FROM/WHERE/ORDER BY` y comparadores se activan (no se reenseñan) y que `AND/OR/NOT` es lo nuevo.
  - §3 Nota de continuidad (`:132-141`): reescrita con la verdad — **24/09 sí dictó** la primera consulta y los operadores; **01/10 no se dictó** (se recupera); **lo nuevo de hoy** = operadores lógicos, funciones de agregación, `GROUP BY/HAVING` e `INNER JOIN`.
  - §4 preguntas 5 y 6: se reformulan a `INNER JOIN` y `HAVING` (en alcance); `LEFT JOIN` queda solo como mención de ampliación.

---

## 4. LIMIT y LEFT/RIGHT JOIN fuera del PGA (#25, A1)

Evidencia: PGA `plan-electiva-ii-sql-2026-2-revisado.json` semanas[2] (S3) lista solo `INNER JOIN` y semanas[3] (S4) dice «no incluye LIMIT ni DML»; la evaluación `S04-taller-consultas-10pct-2026-10-15.md` dice «No uses `LIMIT`» y usa únicamente `INNER JOIN`. Decisión: **quitar `LIMIT`** y **marcar LEFT/RIGHT JOIN como ampliación opcional, fuera de evaluación** (no se retiran del todo porque el plan S3 los anticipaba como "los tres JOIN"; se conservan con rótulo de opcional).

- `data/sql/sql_module3.ts`:
  - `sql3-16` taller (`:317-336`): consulta 4 «Ruta más rentable (`ORDER BY ... DESC LIMIT 1`)» → **«Zonas con monto total de al menos 80 (GROUP BY + HAVING)»**; consulta 5 «Rutas sin ningún pasaje (LEFT JOIN + IS NULL)» → **«Rutas con monto promedio de al menos 40 (GROUP BY + HAVING)»**. El LEFT JOIN pasa a un **«★ Reto opcional (ampliación, no evaluada)»** al final. Nota de entrega: «En las consultas evaluables no se usa LIMIT ni LEFT/RIGHT JOIN».
  - `sql3-13` JOINs (`:257-278`): título «Los tres joins del programa» → «INNER JOIN como núcleo, LEFT/RIGHT como ampliación»; filas rotuladas «· se evalúa» (INNER) / «· opcional» (LEFT/RIGHT); se añade aviso de alcance según PGA.
  - `sql3-14` (`:279-301`): «La consulta estrella · LEFT JOIN con GROUP BY» → **«Ejemplo tipo del taller · INNER JOIN con GROUP BY»** sobre base **biblioteca** (distinta a la del taller), y la solución del taller (patrón `ruta`/`pasaje`) se movió a `notes`.
- `03-Clases/ELECTIVA-II-SQL/S03-contenido-clase-jueves.md`:
  - Guion `:29` y `:31`: JOINs → «INNER JOIN como núcleo… LEFT/RIGHT ampliación opcional»; taller → «6 consultas con INNER JOIN, GROUP BY y HAVING (sin LIMIT) + reto opcional LEFT JOIN».
  - §2.3 (`:98-113`): tabla de joins con INNER «se evalúa» / LEFT-RIGHT «opcional»; ejemplo tipo del taller cambiado a biblioteca (INNER JOIN), eliminando el ejemplo `LEFT JOIN` sobre `ruta`.
  - §2.4 (`:115-124`): consignas del taller alineadas (consulta 4 y 5 con `HAVING`; reto opcional LEFT JOIN; sin LIMIT).
  - §2.5 cierre, §5 y §6: referencias a «consulta 5 (rutas sin pasajes)» y «consulta 4 (más rentable)» actualizadas a la numeración nueva (consulta 4 = zonas con `HAVING`, la más formativa para el 15/10).

---

## 5. «Ejemplo tipo del taller» mostraba la solución (#27)

- `data/sql/sql_module3.ts` `sql3-14` (`:279-301`): el ejemplo pasó de `LEFT JOIN` sobre `ruta`/`pasaje` (base del taller, casi-solución de la consulta 5) a un ejemplo con **esquema/tema distinto** (biblioteca: `libro`/`prestamo`, INNER JOIN + GROUP BY). La solución de referencia del taller (consultas 3, 4 y 5) se movió a `notes` de la diapositiva, sin mostrarse a los estudiantes.

---

## 6. NO crear `sql_module4.ts` (#26)

No existe plan de S4 ni material de S4/S5 en `data/sql/`. **Se deja constancia del faltante**: falta el material de la sesión del jueves 15/10 (taller práctico evaluado 10 % + introducción formativa a DML, prevista en el PGA semanas[3] «después de la evaluación: introducción formativa a INSERT, UPDATE y DELETE»). En `data/sql/` solo hay `sql_module1.ts` y `sql_module3.ts`. No se creó `sql_module4.ts` por instrucción explícita del encargo.

---

## Lo que NO se corrigió y por qué

- **#28 (escala de estimación visible en `sql3-17`)** y **#30 (falta `sql_module2.ts`, informativo)**: no figuran en la lista de correcciones de este encargo; se dejan sin tocar.
- **No se reenseñó ni se re-temporizó la recuperación del 01/10** (componentes, tipos, `CREATE TABLE`/`INSERT`): es contenido legítimamente nuevo porque la sesión S2 no se dictó. Se conserva el alcance de `sql3-4`…`sql3-8`.
- **Umbrales numéricos del taller (80 y 40)**: se dejaron concretos para enseñar `HAVING`, con nota en `notes` de que el docente los ajusta a los datos realmente cargados en clase (la habilidad evaluada es `GROUP BY` + `HAVING`, no el número).
