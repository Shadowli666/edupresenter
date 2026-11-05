---
name: edupresenter-modulo
description: Crea el módulo semanal de una clase en EduPresenter a partir del plan de sesión. Genera el andamiaje con tools/nuevo_modulo.mjs y lo completa con patrones de diseño instruccional (secuencia teoría → ejemplo resuelto → práctica guiada → autónoma, señalización, recuperación, ticket de salida). Úsala cuando pidan "crea el módulo de la semana", "nuevo módulo", "arma las diapositivas de la clase" dentro de este proyecto.
---

# Crear un módulo de clase en EduPresenter

El contrato técnico (estructura `Module`, `notes` y `lock` literales, tareas, interactivos, imágenes) está en
`AGENTS.md`. **Léelo primero**; esta skill no lo repite. En el entorno PSM, el contenido viene de la skill
global `psm-clases` (plan de sesión investigado) y las imágenes de `psm-diapositivas` (`obtener_imagen.py`).

Los comandos se ejecutan desde la raíz del proyecto (`cd ~/Proyectos/edupresenter`), aunque la sesión esté abierta
en otra carpeta.

## Insumos obligatorios

- El plan de sesión de cada sesión de la semana, con objetivo, guion minuto a minuto, nota de continuidad y
  **Fuentes consultadas**. Si no existe, no inventes la clase: pide el plan o prepáralo antes con `psm-clases`.
- El horario real (día, hora, aula). Está en `semestre.json` → `horario.bloques`.

## Flujo

1. **Andamiaje:**
   ```bash
   node tools/nuevo_modulo.mjs --curso <sis|ads|sql|pnn-2026-2> --semana <N> --titulo "<tema>" \
     --objetivo "<objetivo del PGA>" --unidad "Unidad <…>" \
     --sesion "Jueves dd/mm/aaaa · hh:mm–hh:mm · Aula …" [--sesion "Viernes …"]
   ```
   - Crea `data/<curso>/<prefijo>_module<N>.ts` con ids, constante y portada correctos.
   - Para cada sesión deja la secuencia de abajo y, al final, «Fuentes».
   - Los huecos quedan marcados con `PENDIENTE`.
2. **Completar cada `PENDIENTE` desde el plan.**
   - Duplica o elimina diapositivas según el guion: una idea por diapositiva.
   - El guion del docente, las respuestas y los tiempos van en `notes`.
3. **Imágenes**, solo si explican algo: `obtener_imagen.py` de `psm-diapositivas` (crédito y licencia automáticos).
4. **Revisión:** skill `edupresenter-revision` (script + rúbrica, con un revisor distinto del redactor).
5. **Verificación:** `npx tsc --noEmit` y `npm run build`.
   - No se publica sin que el docente lo pida: `git push` a `main` publica en GitHub Pages.

## Secuencia por sesión (patrones)

| Momento | Diapositivas | Patrón |
|---|---|---|
| Portada | 1 | Objetivo visible. En `notes`, «Construye hacia: <evaluación próxima>». |
| Ruta | 1 | Las etapas de la clase. Las palabras clave nuevas (pre-entrenamiento) se presentan antes del proceso. |
| Activación | 1 | Pregunta puente o 2–3 preguntas de **recuperación** de la sesión anterior. Se responden sin volver a explicar (respeta la regla de no repetición). |
| Teoría | ~20–30 % del bloque | Una idea por diapositiva, con lo clave **señalado** (negritas, color, flechas). Sin párrafos: lo que el docente dirá va en `notes`. |
| Ejemplo resuelto | 1–3 | Paso a paso con `data-reveal`, o un diagrama con `data-diagram` + `data-steps`. Código ≤ 20 líneas y salida real del archivo `S<NN>-*` ejecutado. |
| Práctica guiada | 1–2 | El mismo tipo de problema, ahora con pasos a completar entre todos (los pasos resueltos se van retirando). |
| Práctica autónoma | 1–3 | La ficha del estudiante (enunciados numerados con datos y criterios), resuelta en el cuaderno. Respuestas en `notes`. |
| Cierre | 1 | Síntesis, más un **ticket de salida** con `data-quiz` y `data-explain`. Anuncio de la próxima evaluación (fecha del plan o «por confirmar»). |
| Fuentes | 1 al final | APA 7, solo las de «Fuentes consultadas» del plan, incluidas las de las imágenes. |

### Diseño de cada diapositiva

- **Coherencia:** quita todo lo que no ayude a entender (adornos, datos curiosos, iconos sin función).
- **Señalización:** resalta 1–2 elementos por diapositiva, no todos.
- **Redundancia:** no pongas en pantalla el texto que el docente va a leer.
- **Contigüidad:** el rótulo va junto a la parte de la figura que explica.
- **Segmentación:** los procesos se muestran por pasos (`data-reveal`, `data-steps`).
- **Errores frecuentes:** anticipa en `notes` 1–2 confusiones típicas del tema (p. ej., `WHERE` frente a `HAVING`,
  o puntero frente a valor) y diseña una pregunta de la práctica guiada que las haga visibles.
- **Contexto:** casos de empresas, servicios o situaciones de la región; nada de ejemplos genéricos importados sin adaptar.
- **Comparar lenguajes:** `data-tabs` (p. ej., C y Python). En PNN II, nunca Java.

**Base:**
- Principios de aprendizaje multimedia (Mayer, 2009).
- Diseño inverso (Wiggins y McTighe): la sesión «construye hacia» su evaluación.
- Práctica de recuperación (Roediger y Butler, 2011).
- Ejemplos resueltos con retirada gradual de la ayuda.

Prevalecen las estrategias oficiales del IUPSM (`estrategias-formativas.md`) y las reglas del docente en el
`AGENTS.md` del workspace.
