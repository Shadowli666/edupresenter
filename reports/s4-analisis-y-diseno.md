# Resumen — Semana 4 · ANÁLISIS Y DISEÑO DE SISTEMAS

**Fecha de elaboración:** martes 13/10/2026 · **Materia:** Análisis y Diseño de Sistemas (ADS) · **Docente:** Luis Felipe Moreno Oropeza · **Período 2026-2.**

## Qué se creó (rutas)

1. **Plan de sesión — jueves 15/10** (ciclo de vida + importancia + repaso integrador):
   `~/Documentos/PSM-2026-2/03-Clases/ANALISIS-Y-DISENO/S04-contenido-clase-jueves.md`
2. **Plan de sesión — viernes 16/10** (aplicación de la prueba escrita mixta 10 %):
   `~/Documentos/PSM-2026-2/03-Clases/ANALISIS-Y-DISENO/S04-contenido-clase-viernes.md`
3. **Módulo EduPresenter:** `~/Proyectos/edupresenter/data/ads/ads_module4.ts`
   — `id: ads-mod-4`, export `ANALISIS_DISENO_MODULE_4`, 17 diapositivas (`ads4-1` … `ads4-17`),
   `evaluation: '10% — Prueba escrita mixta (Unidades I y II)'`. Sin `lock`, sin `tasks` (patrón de los módulos 1–3).
4. **Este resumen:** `~/Proyectos/edupresenter/reports/s4-analisis-y-diseno.md`.

## Verificación

- `npx tsc --noEmit` → **pasa** (sin errores).
- `npm run build` → **termina sin error** (aviso de chunk >1200 kB preexistente, no relacionado).
- `grep -rl "atención ciudadana\|registros duplicados\|solicitudes pendientes" dist/` → **vacío**: ninguna frase de la evaluación aparece en el sitio compilado (no se usó `lock`; el alcance se describe sin reproducir preguntas ni el caso de la prueba).

## Diseño aplicado (reglas del docente)

- **Continuidad anti-repetición:** S4 jueves introduce lo **nuevo** (ciclo de vida, 7 fases; argumentación de la importancia II.5). La **definición de SI** (S1/S3) y la **tabla de niveles de decisión** (S3) solo se *evocan* en el repaso, no se re-explican (la verificación previa ya había detectado solapamiento S1–S3 en la definición de SI).
- **Teoría ≈24 % del bloque** (22 min de los 90), luego práctica guiada (caso ferretería) y práctica autónoma (repaso por ABP + técnica de la pregunta). Métodos/técnicas PGA: Expositivo, Descubrimiento · Clase magistral, ABP, Técnica de la pregunta.
- **Sin imprimir salvo la evaluación:** la ficha del estudiante (caso y preguntas del repaso) va en las diapositivas y se resuelve en el cuaderno. Respuestas de referencia, lista de cotejo y tiempos internos solo en `notes` (literales, sin `${}`).
- **Prueba:** viernes 16/10, 20 puntos, 5 apartados, Unidades I y II (10 % del Corte I). El repaso ejercita los mismos 5 ejes con **casos distintos** («El Constructor», «Salud Familiar»), sin revelar las preguntas ni el caso de la evaluación.

## Fuentes citadas

- `semestre.json` (horario, corte I `entrega_dace` 2026-10-31, hora académica 45 min).
- `02-PGA/plan-analisis-y-diseno-2026-2-revisado.json` (semana 4: contenidos, métodos, 10 %, fecha 2026-10-16).
- `_referencias/parsed/programas/analisis-diseno-sistemas.md` (Unidad II: objetivos II.3 y II.5).
- `08-Banco/ANALISIS-Y-DISENO/FUENTES.md` y `BIBLIOGRAFIA.md` (B1 Kendall & Kendall, B2 Senn, W1 TutorialsPoint — U1–U2).
- `04-Evaluaciones/ANALISIS-Y-DISENO/Revisado-2026-2/S04-2026-10-16-prueba-mixta-unidades-I-II.md` (alcance: 20 pts, 5 apartados; **no modificado**).
- `~/.agents/skills/psm-clases/references/calendario-2026-2.md` (semana 6 = retroalimentación + entrega DACE).
- `~/.agents/skills/psm-clases/references/estrategias-formativas.md` (métodos/técnicas).

## Supuestos

1. **Nomenclatura de las 7 fases del ciclo de vida** adoptada de Kendall & Kendall (B1) y TutorialsPoint (W1), para satisfacer el «se acepta la nomenclatura trabajada en clase» del borrador.
2. **II.5 (importancia en las organizaciones)** se trabajó como *argumentación* (eficiencia, integración, oportunidad, continuidad), para no repetir la tabla de niveles de decisión ya vista en S3.
3. **Devolución de resultados** anunciada para la **semana 6 (26–31/10)** y entrega de notas en DACE del Corte I el **31/10/2026** (datos del calendario y `semestre.json`, no inventados).

## Datos «por confirmar» / discrepancias (reportadas, no editadas)

1. **Duración de resolución de la prueba:** el borrador S04 **no fija tiempo**. Se propuso **60 min** dentro del bloque de 90 (10 logística + 60 resolución + 20 cierre) y se marcó como «por confirmar» en el plan y en las notas del docente.
2. **Discrepancia en el borrador:** `S04-2026-10-16-...md` indica «Bloque según horario: **jueves**, 13:00–14:30», pero la fecha de aplicación es **viernes 16/10** (plan revisado y horario vigente). No se modificó el borrador; conviene confirmar antes de imprimir.
3. El módulo no incluye `tasks` (ningún módulo ADS actual los usa). Si el docente quiere ver la prueba en la vista **Tareas**, se puede agregar una entrada `{ kind: 'evaluacion', due: '2026-10-16', corte: 1, weight: '10 %' }`.
