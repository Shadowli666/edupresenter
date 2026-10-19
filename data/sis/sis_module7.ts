import { Module } from '../../types';

export const SISTEMAS_I_MODULE_7: Module = {
  id: 'sis-mod-7',
  title: '7. Modelos de proceso: cascada, prototipo y espiral',
  description:
    'Semana 7 (lunes 02/11): retroalimentación del Corte I y modelos de proceso (cascada, cascada con prototipo y espiral); ejercicio de selección del modelo adecuado con ficha individual.',
  evaluation: '0% — Ficha de trabajo individual (formativa)',
  slides: [
    {
      id: 'sis7-1',
      title: 'Sistemas I · Semana 7',
      contentHtml: `
        <div class="space-y-7">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-4xl shadow-lg">🧭</div>
            <div>
              <p class="text-sm uppercase tracking-widest font-bold text-blue-600">Ingeniería de Software · Unidad II.2</p>
              <h2 class="text-3xl md:text-4xl font-bold text-slate-900">Modelos de proceso</h2>
              <p class="text-slate-500 mt-1">Cascada · Cascada con prototipo · Espiral</p>
            </div>
          </div>
          <div class="space-y-2">
            <div data-reveal class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-blue-700 w-8">1</span><span>Retroalimentación del Corte I</span></div>
            <div data-reveal class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-blue-700 w-8">2</span><span>Tres modelos: qué son, cuándo convienen, beneficios y limitaciones</span></div>
            <div data-reveal class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-blue-700 w-8">3</span><span>Demostración y práctica en parejas: elegir el modelo con datos del caso</span></div>
            <div data-reveal class="flex gap-3 bg-blue-50 border border-blue-200 rounded-xl p-3"><span class="font-bold text-blue-700 w-8">4</span><span>Ficha de trabajo individual (formativa, 0 %)</span></div>
          </div>
          <p class="text-sm text-slate-500">Lunes 02/11/2026 · 16:00–18:15 · Aula A-06 · Sección A · IUPSM — Extensión Ciudad Ojeda</p>
        </div>
      `,
      notes: `Plan completo: 03-Clases/SISTEMAS-I/S07-contenido-clase-lunes.md. Tiempos (135 min): 5 inicio + 15 retroalimentación + 4 pregunta eje + 9 cascada + 9 prototipo + 10 espiral + 4 síntesis + 10 demostración + 16 práctica guiada + 3 encuadre ficha + 35 ficha + 8 plenaria + 7 cierre = 135. Teoría 36 min = 27 %. Actividad PGA S7: ejercicio de selección del modelo de proceso para casos dados, ficha de trabajo individual, 0 %. Los diagramas de este módulo son animados (aparecen por pasos con flechas en movimiento). Fuente teórica: Pressman (2010), cap. 2, p. 33 a 40. Esta sesión no repite S2 (las cinco actividades se mencionan solo como recuerdo) ni S5 (enfoques) y no adelanta incremental, USDP, Cluster ni Booch (S8).`
    },
    {
      id: 'sis7-2',
      title: 'Retroalimentación del Corte I',
      contentHtml: `
        <div class="space-y-5">
          <div class="grid md:grid-cols-3 gap-3">
            <div data-reveal class="bg-white border rounded-xl p-4"><p class="text-2xl">📋</p><p class="font-bold mt-1">Cómo se revisó</p><p class="text-sm text-slate-600 mt-1">Qué se evaluó en el cuadro comparativo y en la prueba, y con qué criterios se calificó.</p></div>
            <div data-reveal class="bg-white border rounded-xl p-4"><p class="text-2xl">🔎</p><p class="font-bold mt-1">Qué miramos juntos</p><p class="text-sm text-slate-600 mt-1">Aciertos del grupo, errores frecuentes y las dudas que dejaste en tu autoevaluación.</p></div>
            <div data-reveal class="bg-white border rounded-xl p-4"><p class="text-2xl">🧑‍🎓</p><p class="font-bold mt-1">Tu resultado</p><p class="text-sm text-slate-600 mt-1">Es personal: consúltalo en DACE y pide la revisión de tu hoja al docente.</p></div>
          </div>
          <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-950">Hoy no se leen notas en voz alta. Participa con lo que aprendiste, no con tu calificación.</div>
        </div>
      `,
      notes: `Minutos 16:05 a 16:20 (15 min): 3 panorama y criterios, 5 aciertos y errores frecuentes del grupo (2 o 3 de cada uno, mostrando el criterio y no la hoja de alguien), 5 dudas agrupadas de la autoevaluación con que cerró la S6, 2 puente a la clase. No leer ni mostrar notas individuales. PENDIENTE DEL DOCENTE: completar tras corregir el recuento real de aciertos y errores por criterio y las dudas agrupadas; el plan no trae resultados porque la prueba y el cuadro se aplican el 26/10. Hipótesis a verificar: confundir los cuatro elementos de la U-II.1 como metodologías equivalentes (6 de 20 puntos de la escala del cuadro) y respuestas genéricas en las preguntas de caso de la prueba. Decidir si la revisión individual de hojas se ofrece al terminar la clase o por cita. Ausentes y recuperación: según 00-Normativa.`
    },
    {
      id: 'sis7-3',
      title: 'Pregunta eje',
      contentHtml: `
        <div class="space-y-6">
          <div class="flex flex-wrap items-center gap-2 text-sm">
            <span class="bg-slate-100 border rounded-full px-3 py-1">Comunicación</span><span class="text-slate-400">→</span>
            <span class="bg-slate-100 border rounded-full px-3 py-1">Planeación</span><span class="text-slate-400">→</span>
            <span class="bg-slate-100 border rounded-full px-3 py-1">Modelado</span><span class="text-slate-400">→</span>
            <span class="bg-slate-100 border rounded-full px-3 py-1">Construcción</span><span class="text-slate-400">→</span>
            <span class="bg-slate-100 border rounded-full px-3 py-1">Despliegue</span>
            <span class="text-slate-500 ml-2">las cinco actividades que ya conoces</span>
          </div>
          <div class="bg-blue-600 text-white rounded-2xl p-8">
            <p class="text-xs uppercase tracking-widest text-blue-100">Antes de empezar</p>
            <h3 class="text-2xl md:text-3xl font-bold mt-2">Dos equipos hacen las mismas cinco actividades. ¿Pueden trabajar de manera muy distinta? ¿En qué se diferenciarían?</h3>
          </div>
          <p class="text-slate-600">Escribe tu respuesta en el cuaderno. Al terminar la teoría la revisamos.</p>
        </div>
      `,
      notes: `4 min (16:20 a 16:24): 1 min de recuerdo de las cinco actividades (S2, sin volver a explicarlas) y 3 min de respuestas de 2 o 3 estudiantes sin corregir. Respuesta esperada al final del bloque de teoría: el modelo de proceso cambia el orden, la repetición y el control del riesgo con que se recorren las mismas actividades (Pressman, p. 33: cada modelo pone distinto énfasis y define distinto el flujo del proceso). Un modelo de proceso prescriptivo define un conjunto de elementos del proceso y un flujo predecible para el trabajo (p. 33).`
    },
    {
      id: 'sis7-4',
      title: 'Modelo de la cascada',
      contentHtml: `
        <div class="space-y-4">
          <span class="inline-block bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider rounded-full px-3 py-1">Ciclo de vida clásico · sistemático y secuencial</span>
          <div class="bg-white border rounded-xl p-4">
            <div data-diagram data-steps="A | B, A>B | C, B>C | D, C>D | E, D>E" data-flow>
flowchart LR
  A["Comunicación"] --> B["Planeación"]
  B --> C["Modelado"]
  C --> D["Construcción"]
  D --> E["Despliegue"]
            </div>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-5 gap-2 text-xs text-slate-700">
            <div class="bg-slate-50 border rounded-lg p-2"><strong>Comunicación</strong><br>inicio del proyecto, recabar requerimientos</div>
            <div class="bg-slate-50 border rounded-lg p-2"><strong>Planeación</strong><br>estimación, programación, seguimiento</div>
            <div class="bg-slate-50 border rounded-lg p-2"><strong>Modelado</strong><br>análisis, diseño</div>
            <div class="bg-slate-50 border rounded-lg p-2"><strong>Construcción</strong><br>código, pruebas</div>
            <div class="bg-slate-50 border rounded-lg p-2"><strong>Despliegue</strong><br>entrega, asistencia, retroalimentación</div>
          </div>
          <p class="text-sm text-slate-500">Cada fase termina antes de empezar la siguiente. Pressman (2010), p. 34, fig. 2.3.</p>
        </div>
      `,
      notes: `16:24 a 16:33 (9 min en total para cascada: esta diapositiva 3 min, la siguiente 6). Construir el diagrama fase por fase con el avance de la presentación y preguntar en cada paso qué entrega esa fase. El modelo en V se menciona en una línea sin diagrama: asocia las pruebas (verificación y validación) con las acciones tempranas y Pressman dice que no hay diferencias fundamentales con el ciclo clásico (p. 34, fig. 2.4 en p. 35). Nota al pie 6 (p. 34): Royce preveía bucles de retroalimentación, pero la mayoría de organizaciones lo aplica como estrictamente lineal.`
    },
    {
      id: 'sis7-5',
      title: 'Cascada: cuándo, beneficios y limitaciones',
      contentHtml: `
        <div class="grid md:grid-cols-3 gap-3">
          <div data-reveal class="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
            <p class="font-bold text-emerald-900">✅ Cuándo conviene</p>
            <ul class="list-disc list-inside text-sm text-slate-800 mt-2 space-y-1">
              <li>Requerimientos bien comprendidos y estables</li>
              <li>Trabajo que fluye en forma lineal hasta el final</li>
              <li>Adaptaciones o mejoras bien definidas a un sistema existente (por ejemplo, un cambio de regulación en un software de contabilidad)</li>
            </ul>
          </div>
          <div data-reveal class="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p class="font-bold text-blue-900">⭐ Beneficios</p>
            <ul class="list-disc list-inside text-sm text-slate-800 mt-2 space-y-1">
              <li>Estructura y orden para el equipo</li>
              <li>Cada fase deja un entregable: se planifica y se revisa por hitos</li>
              <li>Fácil de explicar al cliente</li>
            </ul>
          </div>
          <div data-reveal class="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p class="font-bold text-amber-900">⚠️ Limitaciones</p>
            <ul class="list-disc list-inside text-sm text-slate-800 mt-2 space-y-1">
              <li>Rara vez el proyecto real sigue el flujo lineal; los cambios generan confusión</li>
              <li>Al cliente le cuesta enunciar todos los requerimientos al inicio</li>
              <li>Sin versión funcional hasta muy avanzado el proyecto: un error grande se descubre tarde</li>
            </ul>
          </div>
        </div>
        <p class="text-sm text-slate-500 mt-3">Pressman (2010), p. 33–35. El beneficio sobre hitos y explicación al cliente es una síntesis didáctica, no una cita.</p>
      `,
      notes: `Los 6 min restantes del bloque de cascada: cuándo conviene (2 min), beneficios (2 min), limitaciones (2 min). Fuente: cuándo conviene, p. 33 y p. 35; limitaciones, p. 34 (tres problemas y estados de bloqueo de Bradac: miembros del equipo esperan a otros). Los beneficios: estructura y orden (p. 33, dicho de los modelos prescriptivos); lo de hitos y explicación al cliente es síntesis didáctica del docente. Pregunta de comprobación: si el cliente cambia un requisito cuando ya se está construyendo, ¿qué pasa? Respuesta: se vuelve a fases anteriores de forma indirecta y con confusión, por eso exige requerimientos estables.`
    },
    {
      id: 'sis7-6',
      title: 'Cascada con prototipo',
      contentHtml: `
        <div class="space-y-4">
          <span class="inline-block bg-violet-100 text-violet-800 text-xs font-bold uppercase tracking-wider rounded-full px-3 py-1">Paradigma de hacer prototipos → entrada a una cascada</span>
          <div class="bg-white border rounded-xl p-4">
            <div data-diagram data-steps="A | B, A>B | C, B>C | D, C>D | E, D>E | E>A | Real, Ciclo>Real, F, G, H, I, F>G, G>H, H>I" data-flow="A>B, B>C, C>D, D>E, E>A">
flowchart TB
  subgraph Ciclo["Ciclo del prototipo"]
    direction LR
    A["Comunicación"] --> B["Plan rápido"] --> C["Diseño rápido"] --> D["Construir prototipo"] --> E["Evaluar con el cliente"]
    E --> A
  end
  subgraph Real["Sistema real"]
    direction LR
    F["Requerimientos aprobados"] --> G["Modelado"] --> H["Construcción"] --> I["Despliegue"]
  end
  Ciclo --> Real
            </div>
          </div>
          <ul class="list-disc list-inside text-sm text-slate-800 space-y-1">
            <li>El ciclo se repite hasta que los participantes aprueban: el prototipo sirve para <strong>definir requerimientos</strong>.</li>
            <li>Luego se descarta (al menos en parte) y se hace la ingeniería del sistema real, con la mirada puesta en la calidad.</li>
          </ul>
          <p class="text-sm text-slate-500">Pressman (2010), p. 37–38, fig. 2.6. El libro no usa el nombre «cascada con prototipo»: es la forma de combinar ambas ideas en esta clase.</p>
        </div>
      `,
      notes: `16:33 a 16:42 (9 min para prototipo: esta diapositiva 4 min, la siguiente 5). El nombre cascada con prototipo es del programa analítico y del PGA; Pressman presenta el paradigma de hacer prototipos (p. 37) y advierte que se usa más como técnica dentro de cualquier otro modelo; tras precisar los requerimientos el prototipo se descarta, al menos en parte, y se hace la ingeniería real (p. 38). Decirlo en voz alta: es una síntesis didáctica. El diagrama avanza paso a paso; las flechas en movimiento marcan el ciclo de iteración (comunicación, plan rápido, diseño rápido, construcción, entrega, y de vuelta a comunicación). El diseño rápido se centra en lo que verá el usuario: interfaz y formatos de pantalla (p. 37).`
    },
    {
      id: 'sis7-7',
      title: 'Prototipo: cuándo, beneficios y limitaciones',
      contentHtml: `
        <div class="grid md:grid-cols-3 gap-3">
          <div data-reveal class="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
            <p class="font-bold text-emerald-900">✅ Cuándo conviene</p>
            <ul class="list-disc list-inside text-sm text-slate-800 mt-2 space-y-1">
              <li>El cliente tiene objetivos generales, pero no los requerimientos detallados</li>
              <li>No se sabe cómo debe ser la interacción entre el usuario y el sistema</li>
              <li>El desarrollador duda de un algoritmo o de la plataforma</li>
            </ul>
          </div>
          <div data-reveal class="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p class="font-bold text-blue-900">⭐ Beneficios</p>
            <ul class="list-disc list-inside text-sm text-slate-800 mt-2 space-y-1">
              <li>Mejora la comprensión de lo que hay que construir</li>
              <li>El usuario siente cómo será el sistema real</li>
              <li>El equipo construye algo de inmediato</li>
            </ul>
          </div>
          <div data-reveal class="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p class="font-bold text-amber-900">⚠️ Limitaciones</p>
            <ul class="list-disc list-inside text-sm text-slate-800 mt-2 space-y-1">
              <li>El cliente cree que el prototipo ya es el producto y pide «unos arreglos»</li>
              <li>Decisiones apresuradas (lenguaje, algoritmo) se quedan en el sistema</li>
            </ul>
          </div>
        </div>
        <div data-reveal class="mt-3 bg-slate-900 text-white rounded-xl p-4 text-sm"><strong>Regla del juego:</strong> se acuerda desde el principio que el prototipo sirve para definir requerimientos y después se descarta.</div>
        <p class="text-sm text-slate-500 mt-3">Pressman (2010), p. 37–38.</p>
      `,
      notes: `Los 5 min restantes de prototipo. Pregunta de comprobación: ¿qué se le dice al cliente antes de empezar para que no pida arreglos y se quede con el prototipo? Respuesta: las reglas del juego (p. 38). Hay prototipos desechables y evolutivos (Brooks, p. 38); aquí se trabaja el desechable que sirve para precisar requerimientos. Cuándo conviene: p. 37; beneficios: p. 37 y 38; limitaciones: p. 38 (dos problemas).`
    },
    {
      id: 'sis7-8',
      title: 'Modelo en espiral',
      contentHtml: `
        <div class="space-y-3">
          <span class="inline-block bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider rounded-full px-3 py-1">Modelo evolutivo impulsado por el riesgo (Boehm)</span>
          <div class="bg-white border rounded-xl p-3">
            <div data-diagram data-steps="V1, P1, R1, I1, E1, P1>R1, R1>I1, I1>E1 | V2, V1>V2, P2, R2, I2, E2, P2>R2, R2>I2, I2>E2 | V3, V2>V3, P3, R3, I3, E3, P3>R3, R3>I3, I3>E3" data-flow>
flowchart TB
  subgraph V1["Vuelta 1"]
    direction LR
    P1["Planificar"] --> R1["Analizar riesgos"] --> I1["Ingeniería"] --> E1["Cliente evalúa"]
  end
  subgraph V2["Vuelta 2"]
    direction LR
    P2["Planificar"] --> R2["Analizar riesgos"] --> I2["Ingeniería"] --> E2["Cliente evalúa"]
  end
  subgraph V3["Vuelta 3"]
    direction LR
    P3["Planificar"] --> R3["Analizar riesgos"] --> I3["Ingeniería"] --> E3["Cliente evalúa"]
  end
  V1 --> V2
  V2 --> V3
            </div>
          </div>
          <div class="grid grid-cols-3 gap-2 text-xs text-slate-700">
            <div data-reveal class="bg-slate-50 border rounded-lg p-2"><strong>Vuelta 1</strong><br>especificación del producto</div>
            <div data-reveal class="bg-slate-50 border rounded-lg p-2"><strong>Vuelta 2</strong><br>un prototipo</div>
            <div data-reveal class="bg-slate-50 border rounded-lg p-2"><strong>Vuelta 3</strong><br>una versión más completa</div>
          </div>
          <p class="text-sm text-slate-500">En cada vuelta se revisan el riesgo, el plan y el costo con la retroalimentación del cliente. Versión simplificada de cuatro sectores; Pressman (2010), p. 39–40, fig. 2.7, usa las cinco actividades.</p>
        </div>
      `,
      notes: `16:42 a 16:52 (10 min para espiral: esta diapositiva 4 min, la siguiente 6). Atribución del diagrama: Pressman (p. 39, fig. 2.7) organiza la espiral por las cinco actividades estructurales con el análisis de riesgo dentro del recorrido; los cuatro sectores (planificar, riesgos, ingeniería, evaluación del cliente) son la versión original de Boehm (Pressman la cita en la nota 9, p. 39; también la usa la fuente W4 del banco). Equivalencia con S2 (síntesis didáctica): planificar es comunicación más planeación, ingeniería es modelado más construcción, evaluación del cliente es despliegue. Lo que produce cada vuelta: p. 40 (primer circuito, especificación; luego prototipo; luego versiones más sofisticadas). Pregunta de comprobación: ¿qué cambia entre la vuelta 1 y la vuelta 3? El diagrama muestra una fila por vuelta y aparece vuelta por vuelta.`
    },
    {
      id: 'sis7-9',
      title: 'Espiral: cuándo, beneficios y limitaciones',
      contentHtml: `
        <div class="grid md:grid-cols-3 gap-3">
          <div data-reveal class="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
            <p class="font-bold text-emerald-900">✅ Cuándo conviene</p>
            <ul class="list-disc list-inside text-sm text-slate-800 mt-2 space-y-1">
              <li>Sistemas y software a gran escala</li>
              <li>Hay riesgos importantes que conviene revisar en cada nivel de avance</li>
              <li>El producto evoluciona durante mucho tiempo (concepto, producto, mejoras)</li>
            </ul>
          </div>
          <div data-reveal class="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p class="font-bold text-blue-900">⭐ Beneficios</p>
            <ul class="list-disc list-inside text-sm text-slate-800 mt-2 space-y-1">
              <li>Enfoque realista: desarrollador y cliente reaccionan ante los riesgos en cada vuelta</li>
              <li>Usa prototipos para reducir riesgos, en cualquier etapa</li>
              <li>Conserva el escalón sistemático de la cascada dentro de una estructura iterativa</li>
            </ul>
          </div>
          <div data-reveal class="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p class="font-bold text-amber-900">⚠️ Limitaciones</p>
            <ul class="list-disc list-inside text-sm text-slate-800 mt-2 space-y-1">
              <li>Es difícil convencer al cliente (sobre todo bajo contrato) de que el enfoque es controlable</li>
              <li>Exige mucha experiencia en evaluar riesgos</li>
              <li>Con presupuesto cerrado se complica: el costo se revisa en cada vuelta</li>
            </ul>
          </div>
        </div>
        <p class="text-sm text-slate-500 mt-3">Pressman (2010), p. 40.</p>
      `,
      notes: `Los 6 min restantes de espiral (cuándo conviene 2, beneficios 2, limitaciones 2). Todo en Pressman p. 40: enfoque realista para sistemas y software a gran escala; uso de prototipos como mecanismo de reducción de riesgos; mantiene el escalón sistemático del ciclo clásico en una estructura iterativa; si se aplica bien reduce los riesgos antes de que sean un problema; limitaciones: convencer a los clientes, mucha experiencia en evaluar riesgos, problemas si un riesgo importante no se descubre; consejo del libro sobre presupuesto cerrado. Este dato del presupuesto cerrado es el que discrimina el caso 4 de la ficha.`
    },
    {
      id: 'sis7-10',
      title: 'Cómo elegir: cuatro datos del proyecto',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white border rounded-xl p-4">
            <div data-diagram data-steps="S | W, S>W | R, S>R | E, R>E | P, R>P" data-flow>
flowchart TD
  S["¿Los requerimientos son claros y estables?"]
  S -->|"Sí"| W["Cascada"]
  S -->|"No"| R["¿Hay riesgos técnicos o de negocio altos en un proyecto grande?"]
  R -->|"Sí"| E["Espiral"]
  R -->|"No"| P["Cascada con prototipo"]
            </div>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
            <div data-reveal class="bg-slate-50 border rounded-lg p-2">📄 <strong>Claridad y estabilidad</strong> de los requerimientos</div>
            <div data-reveal class="bg-slate-50 border rounded-lg p-2">📏 <strong>Tamaño y duración</strong> del proyecto</div>
            <div data-reveal class="bg-slate-50 border rounded-lg p-2">⚠️ <strong>Riesgo técnico</strong> y de negocio</div>
            <div data-reveal class="bg-slate-50 border rounded-lg p-2">🤝 <strong>Disponibilidad del cliente</strong> para dar retroalimentación</div>
          </div>
          <p class="text-sm text-slate-500">Es una guía para razonar, no una regla: los modelos se combinan (la espiral usa prototipos). Respuesta a la pregunta eje: las mismas actividades, con distinto orden, repetición y control del riesgo.</p>
        </div>
      `,
      notes: `16:52 a 16:56 (4 min). El árbol es una heurística didáctica, no una regla de Pressman. Cerrar la pregunta eje de la diapositiva 3: el modelo cambia el flujo (orden, repetición y control del riesgo, Pressman p. 33). Preguntar: qué dato del caso te movería de un modelo a otro. Lo que queda para S8: incremental, USDP, Cluster y Booch; si preguntan, responder lo vemos en la semana 8.`
    },
    {
      id: 'sis7-11',
      title: 'Demostración · Lavandería Burbujas del Lago',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-slate-50 border rounded-xl p-4 text-sm text-slate-800">La lavandería ficticia <strong>Burbujas del Lago</strong>, en Ciudad Ojeda, quiere un sistema para registrar pedidos, avisar cuando la ropa está lista y cobrar. <strong>Mismo negocio, un dato que cambia:</strong></div>
          <div data-tabs>
            <section data-tab="Variante A">
              <p class="text-slate-800">La dueña entrega la hoja de pedido actual, las 6 tarifas por kilo y 2 reportes. Lo usarán 2 personas. Plazo: 6 semanas.</p>
              <p data-reveal class="mt-2 bg-emerald-50 border border-emerald-200 rounded-lg p-2 text-sm"><strong>Modelo:</strong> cascada. <strong>Datos:</strong> requerimientos escritos y estables; alcance pequeño. <strong>Vigilar:</strong> un reporte nuevo al final sale caro.</p>
            </section>
            <section data-tab="Variante B">
              <p class="text-slate-800">La dueña dice: «no sé cómo lo quiero; enséñame algo en pantalla y te digo». Puede reunirse cada semana.</p>
              <p data-reveal class="mt-2 bg-emerald-50 border border-emerald-200 rounded-lg p-2 text-sm"><strong>Modelo:</strong> cascada con prototipo. <strong>Datos:</strong> no sabe qué quiere ver; cliente disponible cada semana. <strong>Vigilar:</strong> que quiera quedarse con la maqueta.</p>
            </section>
            <section data-tab="Variante C">
              <p class="text-slate-800">Ahora son 15 locales; las lavadoras traen sensores de marcas distintas cuyos datos no se conocen; hay que conectar un sistema contable externo. Duración: 14 meses. La junta aprueba el dinero por etapas y acepta revisar plan y costo en cada una.</p>
              <p data-reveal class="mt-2 bg-emerald-50 border border-emerald-200 rounded-lg p-2 text-sm"><strong>Modelo:</strong> espiral. <strong>Datos:</strong> proyecto grande; riesgo técnico alto (sensores, integración); decisión por etapas. <strong>Vigilar:</strong> exige experiencia en evaluar riesgos.</p>
            </section>
          </div>
          <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-950"><strong>Cuatro pasos:</strong> 1) subrayar los datos clave · 2) hacer las preguntas del árbol · 3) elegir y justificar con dos datos del caso · 4) nombrar una limitación.</div>
        </div>
      `,
      notes: `16:56 a 17:06 (10 min): variante A completa en 4 min (piensa en voz alta con los cuatro pasos), B en 3 min, C en 3 min. Demostración en un solo proceso, sin interrumpir; cada variante termina con una comprobación rápida: qué dato cambió. Respuestas visibles porque es el modelado del docente y estos casos no están en la ficha. Pressman: A, p. 33 y 35; B, p. 37 y 38; C, p. 40. Comprobación final: qué dato cambió en cada variante (claridad de requerimientos, disponibilidad del cliente, escala y riesgo).`
    },
    {
      id: 'sis7-12',
      title: 'Práctica guiada en parejas',
      contentHtml: `
        <div class="space-y-3">
          <p class="text-slate-600 text-sm">Con tu pareja, escribe en el cuaderno: <strong>modelo · dos datos del caso · una limitación</strong>. Después elige el modelo aquí.</p>
          <div class="grid md:grid-cols-2 gap-3">
            <div data-quiz class="bg-white border rounded-xl p-4 space-y-2">
              <p class="font-bold">Caso G1 · Cooperativa de Transporte Costa Oriental</p>
              <p class="text-sm text-slate-700">62 socios usan un programa de nómina hecho hace 4 años. Una ley cambia la fórmula de un bono; el contador entregó la fórmula exacta con 5 ejemplos numéricos. Las pantallas no cambian. Plazo: 6 semanas. Equipo: 1 analista y 2 programadores.</p>
              <button data-option data-correct class="block w-full text-left border rounded-lg p-2 text-sm">Cascada</button>
              <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">Cascada con prototipo</button>
              <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">Espiral</button>
              <p data-explain class="text-sm text-slate-600">Adaptación bien definida de un sistema existente: fórmula exacta, ejemplos, sin cambio de interfaz y plazo fijo.</p>
            </div>
            <div data-quiz class="bg-white border rounded-xl p-4 space-y-2">
              <p class="font-bold">Caso G2 · Naviera Lago Norte</p>
              <p class="text-sm text-slate-700">Quiere ubicar en un mapa sus 14 lanchas de carga. Aún no compra los dispositivos GPS (3 proveedores; no se sabe si funcionan con la cobertura del lago) y debe conectarse con el sistema de despacho actual, que es antiguo. La gerencia aprueba el dinero por etapas y decide continuar según los resultados. Duración: 12 meses.</p>
              <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">Cascada</button>
              <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">Cascada con prototipo</button>
              <button data-option data-correct class="block w-full text-left border rounded-lg p-2 text-sm">Espiral</button>
              <p data-explain class="text-sm text-slate-600">Riesgo técnico alto (hardware sin definir, cobertura incierta, sistema antiguo) y dinero por etapas que permite revisar el plan en cada vuelta.</p>
            </div>
          </div>
        </div>
      `,
      notes: `17:06 a 17:22 (16 min): por caso 4 min de pareja y 4 min de plenaria con la técnica de la pregunta (el docente indica quién responde). Pedir primero la justificación con datos y luego revelar la selección. G1: cascada (Pressman p. 33, adaptación bien definida; limitación aceptable: si la fórmula vuelve a cambiar durante el proyecto hay que volver atrás, o error detectado tarde, p. 34). G2: espiral (p. 40). Alternativa aceptable si se justifica: cascada con prototipo para probar un GPS, aclarando que no cubre el riesgo de integración ni el de financiamiento. La cascada se descarta porque la tecnología no está definida. Plan B de tiempo: si falta tiempo, G2 pasa a la plenaria final.`
    },
    {
      id: 'sis7-13',
      title: 'Ficha de trabajo individual · instrucciones',
      contentHtml: `
        <div class="space-y-4">
          <ul class="list-disc list-inside text-sm text-slate-800 space-y-1">
            <li>Trabajo <strong>individual</strong>, con tus apuntes. <strong>35 minutos</strong> para los cuatro casos (diapositivas siguientes).</li>
            <li><strong>No se imprime</strong>: copia la tabla en el cuaderno o en una hoja propia, con tu nombre y cédula.</li>
            <li>Usa <strong>datos concretos del caso</strong>, no frases generales como «es mejor».</li>
            <li>Es formativa: no tiene nota, sirve para saber qué datos estás leyendo bien.</li>
          </ul>
          <table class="w-full text-sm border">
            <thead class="bg-slate-100"><tr><th class="p-2 border text-left">Caso</th><th class="p-2 border text-left">Modelo elegido</th><th class="p-2 border text-left">Dos datos del caso que lo justifican</th><th class="p-2 border text-left">Una limitación que el equipo debe vigilar</th></tr></thead>
            <tbody>
              <tr><td class="p-2 border font-semibold">1</td><td class="p-2 border"></td><td class="p-2 border"></td><td class="p-2 border"></td></tr>
              <tr><td class="p-2 border font-semibold">2</td><td class="p-2 border"></td><td class="p-2 border"></td><td class="p-2 border"></td></tr>
              <tr><td class="p-2 border font-semibold">3</td><td class="p-2 border"></td><td class="p-2 border"></td><td class="p-2 border"></td></tr>
              <tr><td class="p-2 border font-semibold">4</td><td class="p-2 border"></td><td class="p-2 border"></td><td class="p-2 border"></td></tr>
            </tbody>
          </table>
          <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-950">Al final: <strong>en el caso que más dudaste, ¿qué modelo descartaste y por qué?</strong> (una frase)</div>
        </div>
      `,
      notes: `17:22 a 17:25 (3 min de encuadre) y luego 35 min de ficha (17:25 a 18:00), con avisos a los 15 y a los 5 minutos finales. Individual, con apuntes; el docente solo aclara dudas de forma. Instrumento PGA: ficha de trabajo individual, 0 %, análisis de producciones. Recoger las hojas al cierre para tabular patrones y devolverlas en la S8. Lista de cotejo formativa del docente, sin puntaje: 1) el modelo es coherente con los datos del caso; 2) cita datos concretos del caso; 3) la limitación corresponde al modelo elegido.`
    },
    {
      id: 'sis7-14',
      title: 'Ficha · casos 1 y 2',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-3">
          <div class="bg-white border rounded-xl p-4 space-y-2">
            <p class="font-bold text-blue-700">Caso 1 · Gimnasio Fuerza Zuliana</p>
            <p class="text-sm text-slate-800">240 socios; hoy lleva las mensualidades en una hoja de cálculo. La dueña entregó por escrito los 3 planes, la regla de mora (recargo del 10 % a los 5 días) y los 3 reportes que necesita: solventes, morosos y asistencia semanal. Solo ella y la recepcionista usarán el sistema. No espera cambios. Lo necesita en 8 semanas.</p>
          </div>
          <div class="bg-white border rounded-xl p-4 space-y-2">
            <p class="font-bold text-blue-700">Caso 2 · Unidad Educativa Costa Verde</p>
            <p class="text-sm text-slate-800">La directora quiere que los 450 representantes consulten el boletín y los avisos desde el celular. Dice: «algo sencillo, pero no sé cómo debe verse ni qué más pueden querer los padres». Muchos representantes tienen poca experiencia con aplicaciones. Un docente de informática y un pasante lo desarrollan en 3 meses; la directora puede reunirse con ellos cada semana. No hay integraciones con otros sistemas.</p>
          </div>
        </div>
      `,
      notes: `Claves, solo docente. Caso 1: cascada. Es un sistema nuevo pero con requerimientos escritos y estables (Pressman p. 33 admite proyectos nuevos si los requerimientos están bien definidos); 2 usuarios, plazo fijo, sin cambios esperados. Limitación: un reporte olvidado se descubre tarde (p. 34). Error típico: es nuevo, entonces prototipo. Caso 2: cascada con prototipo. Objetivos generales sin requerimientos detallados e interacción de usuarios inexpertos desconocida (p. 37); cliente disponible cada semana; sin riesgo técnico grande ni escala. Limitación: que pidan arreglos y se queden con el prototipo, por eso las reglas del juego (p. 38). Espiral no: no hay escala ni riesgo técnico. Cascada pura no: la directora no puede enunciar los requerimientos.`
    },
    {
      id: 'sis7-15',
      title: 'Ficha · casos 3 y 4',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-3">
          <div class="bg-white border rounded-xl p-4 space-y-2">
            <p class="font-bold text-blue-700">Caso 3 · Red Clínica Lacustre</p>
            <p class="text-sm text-slate-800">Quiere una historia clínica electrónica para sus 5 sedes de la Costa Oriental. Debe conectarse con equipos de imagen de tres marcas (aún no se sabe qué protocolos entregan los fabricantes) y con un laboratorio externo cuyo sistema cambiará el próximo año. Médicos, enfermería, administración y la junta directiva piden cosas distintas, y la junta cambia el alcance cada trimestre. Duración estimada: 20 meses. La junta acepta revisar plan y costo al cierre de cada trimestre.</p>
          </div>
          <div class="bg-white border rounded-xl p-4 space-y-2">
            <p class="font-bold text-blue-700">Caso 4 · Mercado Municipal de Ciudad Ojeda</p>
            <p class="text-sm text-slate-800">La alcaldía quiere que los 180 comerciantes paguen el alquiler del puesto por teléfono. Las tarifas por metro cuadrado y las fechas de pago están fijadas por ordenanza y no cambian. Lo que nadie sabe es cómo harán el pago los comerciantes, en su mayoría adultos mayores con poca experiencia con aplicaciones, ni qué pasos aceptarán. El pago usa un servicio ya existente de un banco, con documentación pública. Dos programadores, 4 meses, presupuesto cerrado.</p>
          </div>
        </div>
      `,
      notes: `Claves, solo docente. Caso 3: espiral. Proyecto grande y largo; riesgos técnicos altos (protocolos desconocidos, laboratorio cambiante); varios participantes con intereses distintos; se acepta revisar plan y costo en cada ciclo (Pressman p. 40). Limitación: exige experiencia en evaluar riesgos y un riesgo no detectado se vuelve problema (p. 40). Cascada con prototipo es insuficiente: ayuda a precisar pantallas pero no gobierna riesgos de integración y escala durante 20 meses; solo cabe como técnica dentro de una vuelta (p. 37 y 40). Caso 4: cascada con prototipo. Reglas de negocio fijas pero interacción de usuario desconocida (p. 37); riesgo técnico acotado (servicio bancario documentado); equipo pequeño y plazo corto. El presupuesto cerrado descarta la espiral porque el costo se revisa en cada circuito (consejo, p. 40). Cascada pura no: se desconoce la interacción. Limitación: que el prototipo quede como producto (p. 38). Plenaria de 8 min (18:00 a 18:08), una pregunta por caso sin dictar la clave completa: caso 1, qué dato te hizo descartar el prototipo; caso 2, qué diferencia hay con el caso 1 si los dos son pequeños; caso 3, por qué el prototipo solo no alcanza; caso 4, qué dato cierra la puerta a la espiral.`
    },
    {
      id: 'sis7-16',
      title: 'Cierre y próxima semana',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white border rounded-xl p-4"><p class="font-bold">Ticket de salida (en tu cuaderno)</p>
            <p class="text-sm text-slate-700 mt-1">«El modelo que elegiría para un sistema de mi comunidad y el dato que lo justifica es…»</p></div>
          <div data-reveal class="flex gap-3 bg-white border rounded-xl p-4"><span class="text-2xl">📌</span><span><strong>Entrega tu hoja de la ficha</strong> con nombre y cédula; te la devolvemos en la próxima clase.</span></div>
          <div data-reveal class="flex gap-3 bg-emerald-50 border border-emerald-200 rounded-xl p-4"><span class="text-2xl">🗣️</span><span><strong>Lunes 09/11 (semana 8):</strong> modelos por incremento, USDP, Cluster y Grady Booch. Cada grupo expone los beneficios y las limitaciones de un modelo asignado: qué es, cuándo conviene y un ejemplo.</span></div>
        </div>
      `,
      notes: `18:08 a 18:15 (7 min): recoger hojas 2 min (verificar nombre y CI), ticket de salida 3 min (2 o 3 lecturas orales), anuncio y asignación 2 min. PENDIENTE DE DECISIÓN DOCENTE: formar los grupos y asignar un modelo a cada uno hoy para que preparen la exposición de la S8 (escala de estimación, PGA S8, 0 %). Si no se asignan hoy, quitar la tarea sis7-t1 y la segunda tarjeta de esta diapositiva. Bibliografía: Pressman, incremental p. 35 y 36; proceso unificado desde la p. 45; para Cluster y Grady Booch las fuentes quedan por confirmar. Próxima evaluación calificada: lunes 16/11 (S9), prueba escrita de la Unidad III, 10 % (PGA); consultar si se mantiene esa fecha porque la unidad III empieza esa misma semana. No hay entrega de archivos esta semana.`
    },
    {
      id: 'sis7-17',
      title: 'Fuentes',
      contentHtml: `
        <div class="bg-slate-50 border border-slate-200 rounded-2xl p-5">
          <p class="font-bold text-slate-900">Base de la semana</p>
          <ul class="list-disc list-inside text-sm text-slate-700 mt-3 space-y-2">
            <li>Programa analítico de SISTEMAS I, Unidad II: modelos de proceso.</li>
            <li>Pressman, R. S. (2010). <em>Ingeniería del software. Un enfoque práctico</em> (7.ª ed.). McGraw-Hill. Cap. 2: cascada (p. 33–35), hacer prototipos (p. 37–38), espiral (p. 39–40).</li>
            <li>Los cuatro sectores de la espiral siguen el modelo original de Boehm, citado por Pressman (p. 39, nota 9). Los casos de la clase son ficticios.</li>
          </ul>
        </div>
      `
    }
  ],
  tasks: [
    {
      id: 'sis7-t1',
      title: 'Preparar la exposición de la semana 8',
      description: 'Cada grupo prepara una exposición breve sobre el modelo de proceso que se le asigne (incremental, USDP, Cluster o Grady Booch). Se presenta en clase.',
      items: ['Qué es el modelo', 'Cuándo conviene', 'Beneficios y limitaciones', 'Un ejemplo'],
      due: '2026-11-09',
      corte: 2,
      weight: '0 % (formativa)',
      kind: 'tarea',
      slideId: 'sis7-16'
    }
  ]
};
