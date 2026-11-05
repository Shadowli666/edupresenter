---
name: edupresenter-revision
description: Revisa un módulo de EduPresenter escrito o modificado por un modelo antes de darlo por terminado. Combina una revisión mecánica (tools/revisar_modulo.mjs) con una rúbrica de relevancia, fuentes, no repetición, nivel y diseño contra el plan de sesión. Úsala al terminar diapositivas nuevas o cuando pidan "revisa el módulo", "revisa las diapositivas", "¿es relevante este contenido?", "control de calidad de la clase".
---

# Revisión de módulos de EduPresenter

El objetivo es que nada llegue al aula sin responder al plan de la clase y sin respaldo en sus fuentes.
**Quien revisa no es quien redactó.**
- Si el harness permite subagentes, delega la pasada 2 en uno nuevo y pásale solo el plan, el módulo y el informe del script.
- Si no los permite, haz la pasada 2 por separado, partiendo de cero, con el plan y el esquema.

El contrato técnico del módulo está en `AGENTS.md` (§1–§5); esta skill no lo repite.

Los comandos se ejecutan desde la raíz del proyecto (`cd ~/Proyectos/edupresenter`), y el plan se pasa con su
ruta absoluta.

## Insumos

- El módulo: `data/<curso>/<prefijo>_module<N>.ts`.
- Los planes de sesión de la semana: `<workspace>/03-Clases/<Asignatura>/S<NN>-contenido-clase-<día>.md`.
  Toma el workspace de `semestre.json` (`~/Documentos/PSM-*/`).
- El módulo anterior del mismo curso. El script lo busca solo.

## Pasada 1 — mecánica

```bash
node tools/revisar_modulo.mjs data/<curso>/<prefijo>_module<N>.ts --plan <plan-jueves.md> [--plan <plan-viernes.md>]
```

**Errores.** Rompen el contrato y se corrigen siempre:
- ids duplicados o `slideId` inexistente;
- imagen enlazada en caliente, con `src` absoluto, sin archivo o sin `alt`;
- imagen en una diapositiva con `lock`;
- Java en PNN II, o SAIA en el contenido para estudiantes;
- falta la diapositiva «Fuentes».

**Avisos.** Se decide cada uno:
- más de 150 palabras en una diapositiva, o bloques de código de más de 20 líneas;
- redacción valorativa («breve», «sencillo», «fácil»…);
- actividades sin `notes`;
- títulos parecidos a los de la semana anterior;
- referencias de «Fuentes» que no están en el plan.

Si el plan no tiene la sección «Fuentes consultadas», el contraste de fuentes no se puede hacer. Repórtalo
como hallazgo **alto**; no lo des por bueno.

## Pasada 2 — relevancia (rúbrica)

Cada criterio se califica **cumple / no cumple / no aplica**, con una línea de evidencia (id de la diapositiva y
motivo). Los criterios condicionales solo se aplican si se da la condición; si no, van como «no aplica», no como fallo.

### P · Pertinencia pedagógica
1. **Trazabilidad.** Cada diapositiva responde al objetivo o a los contenidos del plan, o a «lo nuevo» de la nota
   de continuidad. Arma la tabla diapositiva → elemento del plan. Las diapositivas huérfanas se eliminan.
2. **Alcance.** Nada excede la semana del PGA ni adelanta contenido de semanas posteriores sin que el plan lo diga.
3. **Avance.** No repite la sesión anterior: compara con los títulos y los contenidos del módulo anterior.
   Una recuperación breve con preguntas (sin volver a explicar) sí está permitida.
4. **Construye hacia la evaluación.** *(Solo si el plan declara una evaluación próxima.)* Al menos una actividad
   ejercita el formato y los criterios de ese instrumento.
5. **Teoría → práctica.** La teoría ocupa ~20–30 %, seguida de práctica guiada y luego autónoma.

### R · Rigor y fuentes
6. **Respaldo.** Cada definición, dato, fecha o afirmación técnica tiene fuente en «Fuentes consultadas».
   Lo que no lo tiene se elimina o se marca «pendiente de verificación docente» en `notes`.
7. **Referencias reales.** Cada referencia de la diapositiva «Fuentes» está en el plan y su URL o su obra
   existen. Una referencia inventada es un fallo **crítico**.
8. **Código verificado.** *(Solo si hay código.)*
   - La salida mostrada coincide con la del archivo `S<NN>-*` ejecutado.
   - El lenguaje es el permitido por la asignatura.
9. **Exigencia cognitiva.** Al menos una tarea pide explicar, justificar o decidir, no solo recordar.

### O · Orientación al aula
10. **Contexto.**
    - Ejemplos de Ingeniería de Sistemas y del entorno local (empresas y servicios de la región).
    - Sin relleno genérico («en la actualidad…», «es fundamental…»), listas que no aportan ni tono publicitario.
11. **Redacción para estudiantes.** Sobria, formal, en imperativo plural, sin valorar la dificultad ni dar tiempos estimados.
12. **Diseño.**
    - Una idea por diapositiva y lo clave señalado.
    - El texto en pantalla no duplica el guion: el guion va en `notes`.
    - La figura está junto al texto que la explica.
    - Las figuras explican algo; no decoran.
13. **Imágenes.** *(Solo si hay imágenes.)*
    - Crédito visible y licencia registrada en `public/img/CREDITOS.md`.
    - Las figuras de libros con derechos se redibujaron o tienen autorización del docente.
14. **Ficha del estudiante.** *(Solo si hay práctica autónoma.)* Está dentro de las diapositivas y sus respuestas
    van en `notes`.

### M · Comportamiento del modelo
15. **Datos del período.** No hay datos inventados: fechas, porcentajes y medios de entrega salen de
    `semestre.json` o del plan; si faltan, figuran «por confirmar».
16. **Sin evaluaciones expuestas.** *(Solo si hay `lock`.)* Nada de la evaluación aparece en diapositivas visibles, en `tasks` ni en imágenes.

## Resultado

1. Corrige lo que no cumple (o devuélvelo al redactor) y vuelve a correr la pasada 1.
2. Escribe el informe en el plan de sesión, en «Notas para el docente» → «Revisión del módulo (fecha)».
   Nunca va en las diapositivas.

```markdown
### Revisión del módulo (AAAA-MM-DD) — revisor: <subagente | pasada separada>
- Pasada 1: <n> errores corregidos · avisos decididos: <lista breve>
- Rúbrica: <n> cumple · <n> no cumple · <n> no aplica
- Hallazgos: <id> — <criterio> — <qué se hizo>
- Pendiente de verificación docente: <afirmaciones o fuentes sin confirmar>
```

3. Termina con `npx tsc --noEmit` y `npm run build` (AGENTS.md §7).
