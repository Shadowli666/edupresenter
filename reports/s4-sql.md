# Resumen — Semana 4 · ELECTIVA II (PROGRAMACIÓN EN SQL)

**Sesión:** jueves 15/10/2026 · 14:30–16:45 · Aula A-01 · 135 min (3 h académicas).

## Qué se creó

| Entregable | Ruta |
|---|---|
| Plan de sesión (Markdown) | `/home/akira/Documentos/PSM-2026-2/03-Clases/ELECTIVA-II-SQL/S04-contenido-clase-jueves.md` |
| Módulo EduPresenter | `/home/akira/Proyectos/edupresenter/data/sql/sql_module4.ts` (`SQL_MODULE_4`, id `sql-mod-4`, 14 diapositivas `sql4-1`…`sql4-14`) |
| Resumen (este archivo) | `/home/akira/Proyectos/edupresenter/reports/s4-sql.md` |

## Contenido diseñado

Bloque de 135 min en dos partes, según el plan revisado S4 y el borrador de evaluación:

1. **Taller práctico individual S4 (10 %) — 90 min.** Aplica lo enseñado en S3: `SELECT/FROM/WHERE/ORDER BY`, `INNER JOIN`, `GROUP BY` y `HAVING` (sin `LIMIT` ni DML). En las diapositivas solo se muestra el **alcance** y las reglas operativas; la consigna, los datos y las soluciones **no** se reproducen (viven en el borrador `04-Evaluaciones/ELECTIVA-II-SQL/Revisado-2026-2/S04-taller-consultas-10pct-2026-10-15.md`).
2. **Introducción formativa a DML (0 %) — 45 min.** Teoría breve (DQL vs DML; `UPDATE` y `DELETE` nuevos; `INSERT` como reactivación, ya visto en S3) → demostración en vivo → práctica guiada y autónoma con 3 ejercicios reversibles sobre la tabla `ruta`, con salida esperada. Sin transacciones/ROLLBACK (el PGA las ubica en S6).

**Evaluación del módulo:** `'10%'` · `description` alineada al objetivo S4 ("Aplicar consultas de recuperación y manipulación de datos en tablas relacionales").

## Fuentes citadas (banco)

- **O1** José Juan Sánchez, *Bases de Datos* (https://josejuansanchez.org/bd/) — DML: INSERT, UPDATE, DELETE (`08-Banco/ELECTIVA-II-SQL/FUENTES.md` §1).
- **D2** *PostgreSQL Documentation* (https://www.postgresql.org/docs/) — sintaxis DML (`FUENTES.md` §6).
- **B1** Silberschatz, Korth & Sudarshan, *Fundamentos de bases de datos* — manipulación de datos (bibliografía).
- Plan revisado `02-PGA/plan-electiva-ii-sql-2026-2-revisado.json` (semana 4) y borradores `04-Evaluaciones/.../S04-*.md` y `S05-*.md` (solo alcance; no se filtraron ítems de S5).
- `semestre.json` (horario, corte I: 10 % S4 + 20 % S5) y `MAPA-GENERAL.md`.

## Supuestos y decisiones

1. **Dataset de la práctica DML = solo la tabla `ruta`** (no las 3 tablas de S3). Se reutiliza el esquema reconocible `ruta(id_ruta, nombre, zona)` con 3 filas iniciales (Ruta 1/Norte, Ruta 3/Centro, Ruta 5/Sur), coherentes con la demostración de S3. Es deliberado: la práctica DML de una sola tabla es análoga a la tabla `producto` que usará S5, y mantiene la teoría breve.
2. **Reversión sin transacciones:** cada ejercicio se revierte re-ejecutando el bloque de reinicio (`DROP TABLE IF EXISTS` + `CREATE TABLE` + `INSERT`). Transacciones (`BEGIN/COMMIT/ROLLBACK`) se omiten porque el PGA no las pide para esta semana (son contenido de S6).
3. **Sin `lock`** en ninguna diapositiva (instrucción explícita). Las soluciones y salidas esperadas del DML van solo en `notes` (literales, cifradas en el build).
4. **Sin `tasks`:** se mantiene la convención de los módulos SQL existentes (ninguno declara `tasks`); la evaluación se gestiona vía el borrador oficial, no por la vista de Tareas.
5. **La consigna de la evaluación se distribuye impresa o por SAIA** (es la evaluación aprobada, se permite imprimir esa guía). No se imprime la práctica formativa de DML: su ficha va dentro de las diapositivas y se resuelve en el SGBD/cuaderno.

## Verificación

- `npx tsc --noEmit` → **pasa** (exit 0).
- `npm run build` → **termina sin error** (✓ built in 2.90 s).
- `grep` en `dist/`: las notas del módulo no aparecen en claro (`Soluciones y salidas esperadas`, `Ruta 3 pasa de Centro`, `Respuestas de salida` → vacío) y no se filtra contenido de la evaluación S4 en el módulo (`Terminal`, `Parque`, `monto`, `id_pasaje` no figuran en `sql_module4.ts`; los aciertos en `dist` provienen de módulos preexistentes ajenos: `intro`, `python` y el taller formativo de S3).

## Por confirmar / pendientes

- **PPTX de la clase** no generado: el plan referencia `05-Diapositivas/ELECTIVA-II-SQL/S04-taller-consultas-y-dml.pptx` como "por generar" con `psm-diapositivas` si el docente lo pide (solo se entregó el módulo EduPresenter + plan, según lo indicado).
- **Medio de distribución de la guía del estudiante** (impresa vs SAIA): decisión del docente; se dejó como sugerencia didáctica, no como dato.
- **Conteo de filas de la base `rutas` completa de S3** ("5/8/30 filas" según el plan S3): el módulo S3 solo muestra filas parciales; por eso la práctica DML usa un subconjunto mínimo explícito de `ruta`, y no se intentó reconstruir el dataset completo (no estaba disponible).
