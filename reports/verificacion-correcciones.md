# Verificación de correcciones aplicadas (sin commitear) — EduPresenter 2026-2

Fecha: 2026-10-13. Verificador independiente (solo lectura). `ED` = `/home/akira/Proyectos/edupresenter/data`; `PSM` = `/home/akira/Documentos/PSM-2026-2`.
Base: `git diff -- data` (7 archivos), `npx tsc --noEmit` (sin errores), comprobación de balance de `<div>/<ul>/<ol>/<table>/<p>/<span>` por diapositiva en los 6 archivos modificados (sin desbalances).
Líneas = estado actual del archivo en el árbol de trabajo.

## 1. Estado por ítem

### Lista priorizada (sección 7)

| Ítem | Estado | Evidencia | Qué falta |
|---|---|---|---|
| P1 Crear `sql_module4.ts` y material S4/S5 | **FALTA** | `ls ED/sql` = solo `sql_module1.ts`, `sql_module3.ts`; no hay `*_module4.ts` en ninguna materia | Crear `ED/sql/sql_module4.ts` (taller 15/10 + intro DML) antes del jueves 15/10; después `ED/pnn-2026-2/pnn_module4.ts`, `ED/ads/ads_module4.ts` (16/10) y S5 |
| P2 Quitar LIMIT / decidir LEFT-RIGHT (#25, A1) | **HECHA** | `ED/sql/sql_module3.ts:326-331` consultas 4 y 5 ahora con GROUP BY + HAVING; sin ocurrencias de `LIMIT` (grep); `:~263-273` INNER "se evalúa", LEFT/RIGHT "opcional"; reto LEFT JOIN marcado "ampliación, no evaluada" | — (el reto opcional con `IS NULL` queda visible: aceptable, rotulado) |
| P3 Quitar repetición S1 en SQL S3 (#22) + nota continuidad plan (#23) | **PARCIAL** | Deck: `sql_module3.ts:180-196` (sql3-9) ahora "Activación · repaso del 24/09" con 3 preguntas; `:199-215` (sql3-10) solo AND/OR/NOT, comparadores "ya vistos el 24/09". Plan: `PSM/03-Clases/ELECTIVA-II-SQL/S03-contenido-clase-jueves.md:140-145` ya trae la nota de continuidad correcta (24/09 dictado; 01/10 no dictado; lo nuevo de hoy) | La recuperación del 01/10 (`sql_module3.ts:~70-86`, tipos y modelo) no se acotó a "lo que S1 no cubrió" (PK/FK, DECIMAL vs FLOAT); la agenda de la diapositiva 2 (`:37`) no se revisó contra el plan. Opcional |
| P4 PNN S3 "22/10" -> "15/10" (#40) | **HECHA** | `ED/pnn-2026-2/pnn_module3.ts:391` "en la prueba del 15/10" | — |
| P5a Python `//` -> `#` (#31) | **HECHA** | `ED/pnn-2026-2/pnn_module2.ts:449` `# OJO: doble barra = división entera` | — |
| P5b Línea "Ocupadas" en Java (#32) | **HECHA** | `pnn_module2.ts:338-340` println "Ocupadas: " y `:346-348` salida esperada con "Ocupadas: 5 de 7" | Pendiente menor: el espaciado "Padre:" difiere entre lenguajes (no afecta la afirmación) |
| P6 SIS S2: marcar caso/mapa no ejecutados y promesa 05/10 (#1) | **HECHA con regresión** | `ED/sis/sis_module2.ts:7` descripción; `:51-54` registro de ejecución; `:522` "no ejecutada... no hay hoja que devolver"; notes en `:~443,461,496,530,561` | Ver regresión R1 (`tasks` nuevo inventado). Además `sis2-12` a `sis2-15` (caso y taller) siguen como contenido proyectable; solo tienen nota |
| P7 Fechas (#13, #14, #41, A3) | **HECHA** | `ED/ads/ads_module3.ts:197,200` "jueves 08/10" / "Viernes 09/10"; `:336` "jueves 15/10"; `ED/pnn-2026-2/pnn_module3.ts:531` "jueves 15/10, antes de la prueba"; plan `PSM/03-Clases/ANALISIS-Y-DISENO/S03-contenido-clase-viernes.md:72,97,105` ya dice jueves 15/10 | — |
| P8a Árbol de referencia sin solución (#34) | **HECHA** | `pnn_module2.ts:567-595` solo árbol; solución en `notes` (`:595`) | — |
| P8b Traza heap en pizarra (#39) | **HECHA** | `pnn_module3.ts:244-253` solo enunciado; traza en `notes` `:253` | — |
| P9 Cédulas (#29, A2) | **HECHA** | `ED/sql/sql_module1.ts:131-132` "V-00000000 · Estudiante Ejemplo" / "V-00000001 · Estudiante Ejemplo 2". `grep 27758801\|31017576` en `data/` = 0 | — |
| P10a Errata ADS (#18, #19) | **HECHA** | `ED/ads/ads_module2.ts:358` "impresión"; `:399` "mientras responden" | — |
| P10b "impresa" PNN (#36) | **HECHA** | `pnn_module2.ts:35` "guía de ejercicios en pantalla (sin impresión)" | — |
| P10c Diagnóstica SIS (#2) | **HECHA** | `sis_module2.ts:118-119` "8 ítems de selección" + "1 respuesta abierta breve" | Confirmar con el docente que 8+1 es lo aplicado |
| P10d Páginas Pressman/Sommerville S3 (#7) | **FALTA** | `ED/sis/sis_module3.ts:394-395` sigue "pp. 12–14" y "pp. 5–9" (S2: 12–15 / 5–8) | Unificar con `PSM/08-Banco/SISTEMAS-I/FUENTES.md` |

### Hallazgos adicionales A1–A6

| Ítem | Estado | Evidencia | Qué falta |
|---|---|---|---|
| A1 Taller SQL entrena LIMIT | **HECHA** | ver P2 | — |
| A2 Segunda cédula | **HECHA** | ver P9 | — |
| A3 Plan ADS viernes "14/10" | **HECHA** (ya estaba corregido en el plan) | `S03-contenido-clase-viernes.md:72,97,105` = jueves 15/10 | — |
| A4 Incoherencia 4 materiales vs 5 recursos | **HECHA** | `ED/ads/ads_module3.ts:59,63` "personas, hardware, software, datos y redes" / "cinco recursos"; coincide con plan jueves `:20,48` | — |
| A5 SQL S3 teoría excesiva | **PARCIAL** | Se redujo teoría en sql3-9 y sql3-10 y se movieron respuestas a notes; no hay evidencia de reasignar minutos a práctica en el deck (no hay tiempos en deck) | Reflejar en `PSM/03-Clases/ELECTIVA-II-SQL/S03-contenido-clase-jueves.md:24-33` el tiempo liberado (taller 40 min ya figura en `:31`) |
| A6 Feriado 12/10 | **FALTA** (no verificable) | Sin cambios; no hay fuente | Preguntar al docente; registrar en "Faltantes conocidos" de `PSM/_referencias/maps/MAPA-GENERAL.md` |

### Ítems por materia (resto de tablas)

| Ítem | Estado | Evidencia | Qué falta |
|---|---|---|---|
| #3 Rótulo 5 actividades (SIS) | **HECHA** | `sis_module2.ts:209` "5 ACTIVIDADES ESTRUCTURALES DEL PROCESO (Pressman...) — distintas de las 5 actividades de la clase" | — |
| #4 "SUNDAES" | **FALTA** (baja) | `sis_module2.ts:~448` sin cambio | Preguntar sigla al docente |
| #8, #9, #21, #42, #43 `notes` ausentes en S1/S3 | **FALTA** (opcional) | `grep -c "notes:"` = 0 en sis_module1/3, ads_module1/3, pnn_module1/3 | Opcional |
| #10 Plan SIS S01 120 min | **FALTA** | `PSM/03-Clases/SISTEMAS-I/S01-contenido-clase-lunes.md:2,23` "2 h teóricas" / "120 min" | Corregir a 135 min / 3 h académicas |
| #11 ADS S3 repite circuito de S1 | **PARCIAL** | Se reconcilió la definición (A4), pero `ED/ads/ads_module3.ts:70-90` "Los cuatro subsistemas del SI" y `:91` control siguen completos; el plan jueves lo mantiene (`S03-contenido-clase-jueves.md:50,86,105,119`) | Reducir `ads_module3.ts:70-90` a recordatorio de S1 (o declararlo "repaso") y ajustar `S03-contenido-clase-jueves.md:50,99,119` |
| #12 ADS S1 viabilidad | **FALTA** (opcional) | Sin cambio | Ninguna obligatoria |
| #15 ADS S2 próxima sesión | **FALTA** | `ED/ads/ads_module2.ts:447-448` sigue "Próxima sesión · jueves 08/10 ... (mapa conceptual, 0 %)" mientras `ads_module3.ts:189` pone el mapa el viernes 09/10 | Cambiar a "jueves 08/10 definición; viernes 09/10 mapa" |
| #24 SQL S1 práctica | **HECHA** (extra) | Nueva diapositiva `ED/sql/sql_module1.ts:409-431` (sql1-15b) con 4 consignas y respuestas en notes `:432` | Ver R3 |
| #27 Ejemplo tipo del taller | **HECHA** | `sql_module3.ts:280-298` ahora sobre base "biblioteca" distinta | — |
| #28 "Escala de estimación" visible | **FALTA** | `sql_module3.ts:340-356` (sql3-17) sin cambios: tabla con acciones del docente visible | Mover a `notes` y dejar consigna de revisión por pares |
| #33 Python `None` vs `"-"` | **FALTA** | `pnn_module2.ts:517` sigue `None` frente a `:442` `"-"` | Alinear tabla o código |
| #37 Nota condicional "jueves 1°/10" | **FALTA** | `pnn_module2.ts:67` sin cambio | Eliminar nota condicional |
| #38 PNN S3 fórmulas como diapositiva | **HECHA** | `pnn_module3.ts:46,99-122` convertida en "Activación" con pregunta relámpago | — |
| #26 anticipo DML | ver P1 | `sql_module3.ts:370-371` correcto | — |
| #16, #17, #30, #35, #5, #6, #20 | Sin acción (falsos positivos/informativos) | — | — |

## 2. Regresiones y riesgos en los diffs

| # | Severidad | Hallazgo | Evidencia | Corrección |
|---|---|---|---|---|
| R1 | **Media** | Se inventó una tarea nueva en SIS S2 que contradice MAPA-GENERAL §6 y el plan S03 ("no se asignó tarea de traer un caso propio") y apunta a una fecha ya pasada (05/10). Además el texto "base del análisis de caso del 05/10" no existe en el plan S03 (el caso del 05/10 es un caso común ficticio). El HEAD no tenía `tasks` en este módulo; el bloque `tasks` ni siquiera existía, de modo que la nota en `:561` "el bloque tasks se conserva" es falsa | `ED/sis/sis_module2.ts:9-21` (`sis2-t1`, due `2026-10-05`) y notes `:561` | Eliminar `tasks` de `sis_module2.ts:9-21` y corregir la nota de `:561`. Puede aparecer como pendiente vencido en `views/TasksView.tsx` |
| R2 | Baja | La tarea `sis2-t1` aparece con `slideId: 'sis2-16'` (existe) pero la diapositiva 16 se rotula "no ejecutada": incoherencia | `sis_module2.ts:19`, `:533` | Se resuelve con R1 |
| R3 | Baja | `sql1-15b` agrega práctica a una sesión ya dictada el 24/09 (S1). Afirma "práctica evaluada de la semana 4" y fija "15 min (bloque 110–125)". Las consignas son correctas y no duplican contenido nuevo, pero el deck S1 ya no refleja lo dictado | `ED/sql/sql_module1.ts:409-432` | Aceptable; avisar al docente. Las consultas de referencia están solo en `notes` (cumple la regla) |
| R4 | Baja | `sql3-9` dice "repaso del 24/09" y "esto ya se dictó el 24/09". Coherente con la nota de continuidad del plan, pero la diapositiva 2 (`sql_module3.ts:37`) y la descripción siguen mencionando "consultas de lectura" como "contenido previsto"; sin contradicción grave | `sql_module3.ts:7,37,180-196` | Revisar agenda en `:37` |
| R5 | Baja | `sql_module3.ts:370-371` anticipa "jue 15/10 → taller práctico evaluado (10 %)" sin el alcance; el plan dice "sobre SELECT/WHERE/ORDER BY" en una versión y "SELECT/WHERE/ORDER BY, INNER JOIN, GROUP BY y HAVING" en otra (`S03...jueves.md:146` vs `:17`) | Ver archivos | Fijar el alcance contra `PSM/04-Evaluaciones/ELECTIVA-II-SQL/Revisado-2026-2/S04-taller-consultas-10pct-2026-10-15.md` |
| R6 | Baja | `ads_module3.ts:200` dice "Viernes 09/10", pero el título `:197` dice "preguntas del jueves 08/10": coherente; sin problema | — | — |

Verificado sin regresión: `notes` y `lock` siguen siendo texto literal (`tsc` sin errores; los `notes` nuevos usan comillas simples sin escapes rotos); HTML balanceado en las diapositivas editadas; sin cédulas visibles en `data/`; el contenido nuevo de SQL S3 no contradice la evaluación del 15/10 (sin LIMIT ni LEFT/RIGHT en lo evaluable); PNN no contradice el PGA (heap = prueba del 15/10); sin fechas inventadas salvo R1 (05/10) y la reutilización de "jueves 15/10" que sí figura en el plan y en el PGA; sin contenido repetido nuevo (los repasos están rotulados como activación).

## 3. Planes de `03-Clases` desalineados con `data`

Nota: los planes ADS viernes y SQL S03 ya reflejan el estado nuevo (fecha 15/10, sin LIMIT, nota de continuidad). Pendientes:

| Plan | Desalineación | Acción |
|---|---|---|
| `PSM/03-Clases/ANALISIS-Y-DISENO/S03-contenido-clase-jueves.md:50,99,119` | Mantiene los "cuatro subsistemas" como contenido de hoy, igual que el deck; el solapamiento con S1 (#11) sigue sin resolver tanto en plan como en deck | Decidir y alinear ambos |
| `PSM/03-Clases/ELECTIVA-II-SQL/S03-contenido-clase-jueves.md:17,146` | El alcance de la evaluación del 15/10 aparece con dos versiones distintas dentro del mismo plan | Unificar con la evaluación 8.x |
| `PSM/03-Clases/SISTEMAS-I/S02-contenido-clase-lunes.md` | Sin marca de "no ejecutado" mientras el deck sí la tiene (caso y mapa) | Añadir nota de ejecución |
| `PSM/03-Clases/SISTEMAS-I/S01-contenido-clase-lunes.md:2,23` | 120 min / 2 h teóricas frente a 135 min | Corregir |
| `PSM/03-Clases/ANALISIS-Y-DISENO/S02-*` (próxima sesión) | Si se corrige `ads_module2.ts:448`, alinear el plan | Revisar |
| Plan PNN S02 `PSM/03-Clases/PROGRAMACION-NO-NUMERICA-II/S02-contenido-clase-jueves.md:3` | "NO DICTADA" mientras `pnn_module2.ts:67` aún tiene la nota condicional | Eliminar nota en deck |

## 4. Lo que FALTA aplicar, por prioridad

1. **Crear `ED/sql/sql_module4.ts`** (taller 15/10 + intro DML) y módulos S4/S5 de SQL, PNN (15/10) y ADS (16/10). Urgente: quedan 2 días.
2. **Quitar el bloque `tasks` inventado** de `ED/sis/sis_module2.ts:9-21` y corregir la nota de `:561` (R1).
3. `ED/ads/ads_module3.ts:70-90`: reducir "cuatro subsistemas" a recordatorio y alinear `PSM/03-Clases/ANALISIS-Y-DISENO/S03-contenido-clase-jueves.md:50,99,119` (#11).
4. `ED/sql/sql_module3.ts:340-356` (sql3-17): mover la escala de estimación a `notes` (#28).
5. `ED/ads/ads_module2.ts:447-448`: "jueves 08/10 definición; viernes 09/10 mapa" (#15).
6. `ED/pnn-2026-2/pnn_module2.ts:67` (eliminar nota condicional, #37) y `:517` vs `:442` (None vs "-", #33).
7. `ED/sis/sis_module3.ts:394-395`: unificar páginas (#7).
8. `PSM/03-Clases/SISTEMAS-I/S01-contenido-clase-lunes.md:2,23`: 135 min (#10); marcar S02 como no ejecutado.
9. Acotar la recuperación del 01/10 en `ED/sql/sql_module3.ts:~70-86` y unificar el alcance del 15/10 en el plan (P3/R5).
10. Opcionales: `notes` en módulos S1/S3 (#8, #9, #21, #42, #43), #4 SUNDAES, A6 feriado 12/10.

## 5. ¿Es seguro commitear lo ya cambiado?

**Sí, con una excepción:** compila (`tsc` sin errores), el HTML está balanceado, `notes` sigue siendo texto literal, no hay cédulas visibles y los cambios corrigen errores reales sin contradecir la evaluación del 15/10 ni el PGA. La excepción es el bloque `tasks` de `ED/sis/sis_module2.ts:9-21`, que inventa una tarea contraria al registro de MAPA-GENERAL §6: eliminarlo antes de commitear (o commitear los otros 6 archivos y dejar ese fuera). El `git status` muestra además cambios en `components/`, `views/` y `vite.config.ts` fuera de `data/` que no revisé y no deben mezclarse en el mismo commit.
