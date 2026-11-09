import { Module } from '../../types';

export const SISTEMAS_I_MODULE_8: Module = {
  id: 'sis-mod-8',
  title: '8. Modelos de proceso: unidad de entrega',
  description:
    'Semana 8 (lunes 09/11): modelos por incremento, USDP, clúster (Meyer) y Booch. La pregunta que los distingue es qué queda terminado al final de cada vuelta. Exposición grupal con escala de estimación (formativa).',
  evaluation: '0% — Exposición grupal (escala de estimación)',
  slides: [
    {
      id: 'sis8-1',
      title: 'Sistemas I · Semana 8',
      contentHtml: `
        <div class="space-y-7">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-4xl shadow-lg">📦</div>
            <div>
              <p class="text-sm uppercase tracking-widest font-bold text-blue-600">Ingeniería de Software · Unidad II.2</p>
              <h2 class="text-3xl md:text-4xl font-bold text-slate-900">¿Qué se entrega en cada vuelta?</h2>
              <p class="text-slate-500 mt-1">Incremental · USDP · Clúster · Booch</p>
            </div>
          </div>
          <div class="space-y-2">
            <div data-reveal class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-blue-700 w-8">1</span><span>Retorno a la semana 7: elegir el modelo con datos</span></div>
            <div data-reveal class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-blue-700 w-8">2</span><span>Cuatro modelos y su unidad de entrega</span></div>
            <div data-reveal class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-blue-700 w-8">3</span><span>Exposición grupal: beneficios y limitaciones de un modelo</span></div>
            <div data-reveal class="flex gap-3 bg-blue-50 border border-blue-200 rounded-xl p-3"><span class="font-bold text-blue-700 w-8">4</span><span>Cuadro comparativo y aplicación a un caso</span></div>
          </div>
          <p class="text-sm text-slate-500">Lunes 09/11/2026 · 16:00–18:15 · Aula A-06 · Sección A · IUPSM — Extensión Ciudad Ojeda</p>
        </div>
      `,
      notes: `Plan completo: 03-Clases/SISTEMAS-I/S08-contenido-clase-lunes.md. Tiempos (135 min): 5 inicio + 7 recuperación y pregunta eje + 7 incremental + 8 USDP + 6 clúster + 7 Booch + 8 organización de grupos + 12 preparación + 36 exposiciones (4 x 9) + 10 cuadro comparativo + 16 aplicación y plenaria + 13 cierre = 135. Teoría 28 min = 21 %. Actividad PGA S8: exposición grupal sobre beneficios y limitaciones de un modelo asignado, escala de estimación, 0 %. Matrícula: 13 estudiantes (deathnote, Sistemas I (A) 2026-2) → 4 grupos de 3, 3, 3 y 4. La S7 se dictó sin asignar grupos: hoy se forman al inicio y se preparan en clase. No hay tarea en este módulo.`
    },
    {
      id: 'sis8-2',
      title: 'Retorno a la semana 7',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-slate-600">Respondemos en cadena, en voz alta, sin volver a la teoría.</p>
          <div data-reveal class="bg-white border rounded-xl p-4"><p class="font-bold text-blue-700">1</p><p class="text-slate-800">¿Con qué dos datos del proyecto se elige entre cascada y espiral?</p></div>
          <div data-reveal class="bg-white border rounded-xl p-4"><p class="font-bold text-blue-700">2</p><p class="text-slate-800">En la cascada con prototipo, ¿qué se hace con el prototipo cuando ya precisó los requerimientos?</p></div>
          <div data-reveal class="bg-white border rounded-xl p-4"><p class="font-bold text-blue-700">3</p><p class="text-slate-800">¿Qué se revisa en cada vuelta de la espiral?</p></div>
        </div>
      `,
      notes: `16:05 a 16:08 (3 min de las preguntas, dentro de los 7 del bloque). Respuestas: 1) claridad y estabilidad de los requerimientos, y escala y riesgo del proyecto (Pressman p. 33, 40); 2) se descarta al menos en parte; para eso se fijan las reglas del juego desde el principio (p. 38); 3) el riesgo, y con él el plan, el costo y la programación (p. 40). Preguntas de sondeo y convergentes, respuesta en cadena, sin volver a explicar. Si el grupo no responde, dar la primera palabra y pedir a otro que la complete.`
    },
    {
      id: 'sis8-3',
      title: 'Pregunta eje',
      contentHtml: `
        <div class="space-y-6">
          <div class="grid md:grid-cols-4 gap-3 text-center">
            <div class="bg-white border rounded-xl p-3"><p class="text-2xl">🧱</p><p class="text-sm font-bold mt-1">Todo el sistema</p></div>
            <div class="bg-white border rounded-xl p-3"><p class="text-2xl">🚚</p><p class="text-sm font-bold mt-1">Una parte que ya funciona</p></div>
            <div class="bg-white border rounded-xl p-3"><p class="text-2xl">🏗️</p><p class="text-sm font-bold mt-1">Una arquitectura</p></div>
            <div class="bg-white border rounded-xl p-3"><p class="text-2xl">🧩</p><p class="text-sm font-bold mt-1">Un grupo de clases</p></div>
          </div>
          <div class="bg-blue-600 text-white rounded-2xl p-8">
            <p class="text-xs uppercase tracking-widest text-blue-100">Pregunta de la sesión</p>
            <h3 class="text-2xl md:text-3xl font-bold mt-2">Si el modelo ya está elegido, ¿qué queda terminado al final de la primera vuelta?</h3>
          </div>
          <p class="text-slate-600">Escribe tu respuesta en el cuaderno. La retomamos al cerrar.</p>
        </div>
      `,
      notes: `16:08 a 16:12 (4 min). Recoger 2 o 3 respuestas sin corregir. Respuesta esperada al cierre: cada modelo define una unidad de entrega distinta; esa unidad decide qué se puede usar primero, qué se puede cambiar después y qué hay que dejar bien desde el principio (normalmente la arquitectura). Idea central de la sesión: la semana pasada se eligió el modelo con datos; hoy se trocea el trabajo dentro del modelo.`
    },
    {
      id: 'sis8-4',
      title: 'Modelo incremental',
      contentHtml: `
        <div class="space-y-4">
          <span class="inline-block bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider rounded-full px-3 py-1">Secuencias lineales escalonadas</span>
          <div class="bg-white border rounded-xl p-4">
            <div data-diagram data-steps="A | B, A>B | C, B>C | D, C>D | E, D>E" data-flow>
flowchart LR
  A["Requerimientos básicos"] --> B["Incremento 1<br/>producto fundamental"]
  B --> C["Entrega 1<br/>el cliente la usa"]
  C --> D["Incremento 2<br/>más funcionalidad"]
  D --> E["Entrega 2 y siguientes<br/>hasta el producto final"]
            </div>
          </div>
          <p class="text-slate-700">Cada incremento recorre las actividades del proceso y produce <strong>una versión que ya opera</strong>. El primero cubre lo esencial; de su uso sale el plan del siguiente.</p>
        </div>
      `,
      notes: `16:12 a 16:16 (4 min de los 7 del bloque). Pressman p. 35 y 36: el modelo incremental combina elementos del flujo lineal y del paralelo; aplica secuencias lineales escalonadas; cada secuencia produce incrementos susceptibles de entregarse. El primer incremento suele ser el producto fundamental: cubre requerimientos básicos y el cliente lo usa o evalúa; de allí sale el plan del siguiente. Cada incremento puede usar prototipos en su propio flujo. Pregunta de comprobación: por qué el primer incremento no es la primera etapa de la cascada (porque es una versión usable de punta a punta, no una fase interna).`
    },
    {
      id: 'sis8-5',
      title: 'Incremental: cuándo y qué cuidar',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-4">
          <div class="space-y-3">
            <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
              <p class="font-bold text-emerald-800">Cuándo conviene</p>
              <ul class="list-disc list-inside text-sm text-emerald-950 mt-2 space-y-1">
                <li>Requerimientos iniciales razonablemente claros, pero alcance grande.</li>
                <li>Se necesita funcionalidad limitada pronto.</li>
                <li>Poco personal al inicio; se incorpora más después.</li>
                <li>Hay riesgos técnicos que se pueden aislar en los primeros incrementos.</li>
              </ul>
            </div>
            <div class="bg-white border rounded-xl p-4">
              <p class="font-bold text-slate-900">Beneficios</p>
              <ul class="list-disc list-inside text-sm text-slate-700 mt-2 space-y-1">
                <li>Menor costo de adaptar requerimientos cambiantes.</li>
                <li>El cliente opina sobre algo que ve funcionar.</li>
                <li>Software útil en manos del usuario antes.</li>
              </ul>
            </div>
          </div>
          <div class="space-y-3">
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-4">
              <p class="font-bold text-rose-800">Limitaciones</p>
              <ul class="list-disc list-inside text-sm text-rose-950 mt-2 space-y-1">
                <li>El proceso no es visible para la gerencia sin entregas regulares.</li>
                <li>La estructura se degrada si no se refactoriza.</li>
                <li>En sistemas grandes hace falta una arquitectura estable desde el inicio.</li>
              </ul>
            </div>
            <div class="bg-white border rounded-xl p-4">
              <p class="font-bold text-slate-900">Ejemplo</p>
              <p class="text-sm text-slate-700 mt-2">Ferretería La Viga, en Ciudad Ojeda: 1) inventario y ventas; 2) compras a proveedores; 3) reportes para el contador.</p>
            </div>
          </div>
        </div>
      `,
      notes: `16:16 a 16:19 (3 min). Beneficios y problemas: Sommerville p. 33 y 34. Los tres beneficios de Sommerville: menor costo de adaptación, retroalimentación más fácil, entrega más rápida de software útil. Los dos problemas administrativos: el proceso no es visible y la estructura tiende a degradarse sin refactorización; en sistemas grandes y largos se necesita arquitectura estable y responsabilidades claras por equipo. Cuándo: Pressman p. 35 y 36.`
    },
    {
      id: 'sis8-6',
      title: 'Proceso Unificado (USDP)',
      contentHtml: `
        <div class="space-y-4">
          <span class="inline-block bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider rounded-full px-3 py-1">Impulsado por casos de uso · centrado en la arquitectura · iterativo e incremental</span>
          <div class="bg-white border rounded-xl p-3">
            <div data-diagram data-steps="A | B, A>B | C, B>C | D, C>D | E, D>E | E>A" data-flow>
flowchart LR
  A["Concepción<br/>casos de uso preliminares"] --> B["Elaboración<br/>arquitectura ejecutable"]
  B --> C["Construcción<br/>componentes y pruebas"]
  C --> D["Transición<br/>beta y lanzamiento"]
  D --> E["Producción<br/>operación y soporte"]
  E -.->|"cada incremento<br/>vuelve a empezar"| A
            </div>
          </div>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-blue-50 border border-blue-200 rounded-xl p-3 text-blue-950">Las fases <strong>se solapan en el tiempo</strong> y se repiten en cada incremento: no son una cascada.</div>
            <div class="bg-white border rounded-xl p-3">Los <strong>flujos de trabajo</strong> (requerimientos, análisis y diseño, implementación, pruebas, despliegue) atraviesan todas las fases.</div>
          </div>
        </div>
      `,
      notes: `16:19 a 16:23 (4 min de los 8 del bloque). Pressman §2.5 p. 45 a 48: proceso impulsado por casos de uso, centrado en la arquitectura, iterativo e incremental. Fases: concepción (requerimientos del negocio, casos de uso preliminares, arquitectura tentativa, plan), elaboración (se amplían casos de uso y arquitectura; línea base de arquitectura ejecutable), construcción (componentes, pruebas unitarias, integración y aceptación), transición (beta, manuales, lanzamiento), producción (operación y soporte). Pressman advierte que las fases no ocurren en secuencia sino que concurren escalonadas (p. 48). Aclarar los nombres: USDP, Proceso Unificado (PU), RUP y Proceso Racional Unificado son el mismo proceso.`
    },
    {
      id: 'sis8-7',
      title: 'USDP: cuándo y qué cuidar',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-4">
          <div class="space-y-3">
            <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
              <p class="font-bold text-emerald-800">Cuándo conviene</p>
              <ul class="list-disc list-inside text-sm text-emerald-950 mt-2 space-y-1">
                <li>Proyectos orientados a objetos de escala media o grande.</li>
                <li>La arquitectura y los casos de uso son el eje del trabajo.</li>
                <li>El equipo puede sostener la disciplina del proceso.</li>
              </ul>
            </div>
            <div class="bg-white border rounded-xl p-4">
              <p class="font-bold text-slate-900">Beneficios</p>
              <ul class="list-disc list-inside text-sm text-slate-700 mt-2 space-y-1">
                <li>Integra lo mejor de los modelos anteriores.</li>
                <li>Trazabilidad: de cada caso de uso salen pruebas de aceptación.</li>
                <li>Arquitectura ejecutable temprana que demuestra viabilidad.</li>
              </ul>
            </div>
          </div>
          <div class="space-y-3">
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-4">
              <p class="font-bold text-rose-800">Limitaciones</p>
              <ul class="list-disc list-inside text-sm text-rose-950 mt-2 space-y-1">
                <li>Pesado en artefactos y roles.</li>
                <li>Exige experiencia y disciplina del equipo.</li>
                <li>Debe adaptarse: no se aplica entero a un proyecto pequeño.</li>
              </ul>
            </div>
            <div class="bg-white border rounded-xl p-4">
              <p class="font-bold text-slate-900">Ejemplo</p>
              <p class="text-sm text-slate-700 mt-2">Control de estudios de la extensión Ciudad Ojeda: inscripción, notas y titulación, cada iteración con su arquitectura.</p>
            </div>
          </div>
        </div>
      `,
      notes: `16:23 a 16:27 (4 min). Sommerville §2.4 p. 50 a 52: cuatro fases (concepción, elaboración, construcción, transición), flujos de trabajo y buenas prácticas (iterativo, gestión de requerimientos, arquitecturas de componentes, modelado visual, verificación de calidad y control de cambios). Pressman p. 46: el modelo iterativo e incremental del PU puede y debe adaptarse a las necesidades del proyecto; por eso la limitación de peso se corrige con adaptación, no se niega. Pregunta de comprobación: en qué fase aparece la primera arquitectura que ya se ejecuta y por qué no se descarta (elaboración; línea base que se reviste, no prototipo desechable, p. 47 nota 20).`
    },
    {
      id: 'sis8-8',
      title: 'Modelo de agrupamiento: clúster',
      contentHtml: `
        <div class="space-y-4">
          <span class="inline-block bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider rounded-full px-3 py-1">Bertrand Meyer · la unidad es el grupo de clases</span>
          <div class="bg-white border rounded-xl p-3">
            <div data-diagram data-steps="S | C1, S>C1 | C2, S>C2 | C3, S>C3 | K, C1>K" data-flow>
flowchart TB
  S["Sistema"] --> C1["Clúster: ventas"]
  S --> C2["Clúster: inventario"]
  S --> C3["Clúster: facturación"]
  C1 --> K["Clases relacionadas<br/>cliente, pedido, línea"]
            </div>
          </div>
          <p class="text-slate-700">Un <strong>clúster</strong> es un grupo de clases relacionadas —o, recursivamente, de clústeres— con un objetivo común. Es la unidad de trabajo que puede asumir <strong>un solo desarrollador</strong>.</p>
        </div>
      `,
      notes: `16:27 a 16:29 (2 min de los 6 del bloque). El programa analítico lo llama Cluster; en la bibliografía de métodos orientados a objetos es el modelo de agrupamiento (clúster) asociado a Bertrand Meyer. Meyer: la clase es la unidad de módulo; el clúster es una agrupación lógica de clases entre la clase y el sistema, y puede contener subclústeres. La frase sobre el clúster como unidad de un solo desarrollador proviene del material de cátedra de la U-II, no del texto de Meyer: queda pendiente de verificación docente. Decirlo en voz alta: el nombre del programa y el concepto son el mismo. Ojo: no confundir con la técnica estadística de análisis de conglomerados.`
    },
    {
      id: 'sis8-9',
      title: 'El subciclo de cada clúster',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white border rounded-xl p-3">
            <div data-diagram data-steps="A | B, A>B | C, B>C | D, C>D | E, D>E" data-flow>
flowchart LR
  A["Especificación"] --> B["Diseño"]
  B --> C["Implementación"]
  C --> D["Verificación<br/>y validación"]
  D --> E["Generalización"]
            </div>
          </div>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-blue-50 border border-blue-200 rounded-xl p-3 text-blue-950"><strong>Secuencial dentro</strong> del clúster.</div>
            <div class="bg-blue-50 border border-blue-200 rounded-xl p-3 text-blue-950"><strong>Concurrente entre</strong> clústeres: sus subciclos se solapan.</div>
          </div>
          <p class="text-slate-700">Ventaja: se evita el efecto <strong>todo o nada</strong> de la cascada. Un clúster puede estar terminado mientras otro recién empieza.</p>
        </div>
      `,
      notes: `16:29 a 16:33 (4 min). Subciclo: especificación, diseño, implementación, verificación y validación, generalización; se aplica al clúster y no al sistema completo. Componente secuencial y componente concurrente; distintos subciclos de vida que pueden solaparse. Evita el efecto todo o nada propio del modelo en cascada. Pregunta de comprobación: si dos clústeres avanzan en paralelo, qué hay que acordar antes de empezar (las interfaces entre las clases que se tocan). FUENTE SECUNDARIA: el subciclo proviene de material de cátedra sobre el modelo de agrupamiento; verificar con el docente antes de fijarlo como contenido de examen.`
    },
    {
      id: 'sis8-10',
      title: 'Método de Grady Booch',
      contentHtml: `
        <div class="space-y-4">
          <span class="inline-block bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider rounded-full px-3 py-1">Macroproceso y microproceso</span>
          <div class="bg-white border rounded-xl p-3">
            <div data-diagram data-steps="A | B, A>B | C, B>C | D, C>D | E, D>E" data-flow>
flowchart LR
  A["Conceptualización<br/>requerimientos esenciales"] --> B["Análisis<br/>modelo del comportamiento"]
  B --> C["Diseño<br/>arquitectura"]
  C --> D["Evolución<br/>implementación"]
  D --> E["Mantenimiento"]
            </div>
          </div>
          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-white border rounded-xl p-3 text-sm">
              <p class="font-bold text-slate-900">Macroproceso</p>
              <p class="text-slate-600 mt-1">Marco de control del proyecto y de la arquitectura; dura semanas o meses.</p>
            </div>
            <div class="bg-white border rounded-xl p-3 text-sm">
              <p class="font-bold text-slate-900">Microproceso</p>
              <p class="text-slate-600 mt-1">Clases y objetos → semántica → relaciones → interfaces e implementación. Se repite dentro de cada etapa.</p>
            </div>
          </div>
        </div>
      `,
      notes: `16:33 a 16:37 (4 min de los 7 del bloque). Booch (1994): el método se organiza en macroproceso (conceptualización, análisis, diseño, evolución, mantenimiento; interés de la dirección técnica, arquitectura, fechas y calidad) y microproceso (identificar clases y objetos, identificar su semántica, identificar sus relaciones, especificar interfaces e implementación). El microproceso se repite dentro de cada etapa del macroproceso. El producto se ve como una sucesión de arquitecturas que avanzan por iteraciones.`
    },
    {
      id: 'sis8-11',
      title: 'Booch: cuándo y qué cuidar',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-4">
          <div class="space-y-3">
            <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
              <p class="font-bold text-emerald-800">Cuándo conviene</p>
              <ul class="list-disc list-inside text-sm text-emerald-950 mt-2 space-y-1">
                <li>Proyectos orientados a objetos con arquitectura compleja.</li>
                <li>Se prevé evolución y mantenimiento largo.</li>
                <li>Importa la descomposición en capas y la reducción temprana del riesgo.</li>
              </ul>
            </div>
            <div class="bg-white border rounded-xl p-4">
              <p class="font-bold text-slate-900">Beneficios</p>
              <ul class="list-disc list-inside text-sm text-slate-700 mt-2 space-y-1">
                <li>Arquitecturas sucesivas: el riesgo baja en cada vuelta.</li>
                <li>Separa la gestión del proyecto del trabajo diario.</li>
              </ul>
            </div>
          </div>
          <div class="space-y-3">
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-4">
              <p class="font-bold text-rose-800">Limitaciones</p>
              <ul class="list-disc list-inside text-sm text-rose-950 mt-2 space-y-1">
                <li>Se centra en el análisis y el diseño: no define una disciplina de pruebas ni de gestión del proyecto.</li>
                <li>Notación extensa, hoy absorbida por UML.</li>
                <li>Exige experiencia en objetos y en diseño arquitectónico.</li>
              </ul>
            </div>
            <div class="bg-white border rounded-xl p-4">
              <p class="font-bold text-slate-900">Ejemplo</p>
              <p class="text-sm text-slate-700 mt-2">Red de farmacias de la Costa Oriental: inventario y ventas por capas de objetos, con evolución prevista.</p>
            </div>
          </div>
        </div>
      `,
      notes: `16:37 a 16:40 (3 min). Limitaciones desde la propia obra y el material de cátedra: el método cubre análisis y diseño; su notación (clases, objetos, estados, módulos, procesos, interacción) fue sustituida por UML; se le critica el gran conjunto de símbolos. Pregunta de comprobación: qué hace el microproceso que no hace el macroproceso.`
    },
    {
      id: 'sis8-12',
      title: 'Cuadro comparativo',
      contentHtml: `
        <div class="overflow-x-auto">
          <table class="w-full text-sm border-collapse">
            <thead>
              <tr class="bg-slate-100 text-left">
                <th class="p-2 border w-1/6">Modelo</th>
                <th class="p-2 border">Qué queda terminado al final de cada vuelta</th>
                <th class="p-2 border">Cuándo conviene</th>
                <th class="p-2 border">Un beneficio</th>
                <th class="p-2 border">Una limitación</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2 border font-bold">Incremental</td><td class="p-2 border">&nbsp;</td><td class="p-2 border">&nbsp;</td><td class="p-2 border">&nbsp;</td><td class="p-2 border">&nbsp;</td></tr>
              <tr><td class="p-2 border font-bold">USDP</td><td class="p-2 border">&nbsp;</td><td class="p-2 border">&nbsp;</td><td class="p-2 border">&nbsp;</td><td class="p-2 border">&nbsp;</td></tr>
              <tr><td class="p-2 border font-bold">Clúster</td><td class="p-2 border">&nbsp;</td><td class="p-2 border">&nbsp;</td><td class="p-2 border">&nbsp;</td><td class="p-2 border">&nbsp;</td></tr>
              <tr><td class="p-2 border font-bold">Booch</td><td class="p-2 border">&nbsp;</td><td class="p-2 border">&nbsp;</td><td class="p-2 border">&nbsp;</td><td class="p-2 border">&nbsp;</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm text-slate-600 mt-3">Copia la tabla en el cuaderno y complétala con tus palabras, sin mirar las fichas. No se imprime.</p>
      `,
      notes: `17:36 a 17:46 (10 min). El estudiante copia y completa la tabla en el cuaderno u hoja propia. Las respuestas de referencia están en el plan §2.9 y NO se proyectan. Criterio formativo: la unidad de entrega y la limitación deben ser las del modelo correcto; no vale repetir la misma frase en las cuatro filas. Si el docente decide recogerla, pedir nombre y cédula.`
    },
    {
      id: 'sis8-12b',
      title: 'Síntesis: los cuatro modelos',
      contentHtml: `
        <div class="overflow-x-auto">
          <table class="w-full text-sm border-collapse">
            <thead>
              <tr class="bg-slate-100 text-left">
                <th class="p-2 border">Modelo</th>
                <th class="p-2 border">Qué queda terminado</th>
                <th class="p-2 border">Qué controla</th>
                <th class="p-2 border">Su punto débil</th>
              </tr>
            </thead>
            <tbody>
              <tr data-reveal><td class="p-2 border font-bold">Incremental</td><td class="p-2 border">Una versión que ya funciona</td><td class="p-2 border">El valor que recibe el cliente</td><td class="p-2 border">La estructura se degrada</td></tr>
              <tr data-reveal><td class="p-2 border font-bold">USDP</td><td class="p-2 border">Una iteración con arquitectura</td><td class="p-2 border">Casos de uso y arquitectura</td><td class="p-2 border">Peso documental y de roles</td></tr>
              <tr data-reveal><td class="p-2 border font-bold">Clúster</td><td class="p-2 border">Un grupo de clases completo</td><td class="p-2 border">La modularidad y el paralelismo</td><td class="p-2 border">No gobierna el proyecto</td></tr>
              <tr data-reveal><td class="p-2 border font-bold">Booch</td><td class="p-2 border">Un nivel de arquitectura</td><td class="p-2 border">El diseño arquitectónico</td><td class="p-2 border">No define pruebas ni gestión</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm text-slate-500 mt-3">No se elige «el mejor»: se elige qué se necesita tener funcionando primero.</p>
      `,
      notes: `Se muestra DESPUÉS del cuadro individual, como síntesis de plenaria (ya dentro de los 16 min de aplicación). No adelantarla antes de las exposiciones. El punto débil de Booch está corregido: el macroproceso incluye evolución y mantenimiento, de modo que no se puede decir que no toca la implementación; lo que no define es una disciplina de pruebas ni la gestión del proyecto.`
    },
    {
      id: 'sis8-13',
      title: 'Grupos, guion y criterios',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-4">
          <div class="space-y-2">
            <p class="font-bold text-slate-900">Cuatro grupos · un modelo por grupo</p>
            <div class="flex flex-wrap gap-2 text-sm">
              <span class="bg-blue-100 text-blue-800 rounded-full px-3 py-1">Incremental</span>
              <span class="bg-blue-100 text-blue-800 rounded-full px-3 py-1">USDP</span>
              <span class="bg-blue-100 text-blue-800 rounded-full px-3 py-1">Clúster</span>
              <span class="bg-blue-100 text-blue-800 rounded-full px-3 py-1">Booch</span>
            </div>
            <p class="text-sm text-slate-600 mt-2">6 minutos por grupo y 3 de preguntas. Todos los integrantes hablan.</p>
            <div class="bg-white border rounded-xl p-3 text-sm mt-3">
              <p class="font-bold">Guion (5 puntos)</p>
              <ol class="list-decimal list-inside text-slate-700 mt-1 space-y-1">
                <li>Qué es, en una frase.</li>
                <li>Qué se entrega al final de cada vuelta.</li>
                <li>Cuándo conviene, con dos datos de un proyecto.</li>
                <li>Un beneficio y una limitación.</li>
                <li>Un ejemplo real o de la comunidad.</li>
              </ol>
            </div>
          </div>
          <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm">
            <p class="font-bold text-slate-900">Cómo se observa la exposición</p>
            <ul class="list-disc list-inside text-slate-700 mt-2 space-y-1">
              <li>Define el modelo sin confundirlo con otro.</li>
              <li>Identifica la unidad de entrega.</li>
              <li>Justifica el «cuándo» con datos.</li>
              <li>Beneficio y limitación del modelo expuesto.</li>
              <li>Ejemplo pertinente y claro.</li>
            </ul>
            <p class="text-slate-500 mt-3">Es formativa: no lleva nota. Se devuelve una fortaleza y una corrección.</p>
          </div>
        </div>
      `,
      notes: `16:40 a 16:48 (8 min). Formar cuatro grupos: 13 estudiantes → 3, 3, 3 y 4. Asignar modelos por sorteo. Anotar los grupos para la escala de estimación. La escala es de 4 niveles por criterio (4 preciso y justificado con datos; 3 correcto con imprecisiones; 2 parcial, falta unidad de entrega o limitación; 1 no logrado) y no se convierte en nota (0 %). Decir que, si no saben algo, lo digan: se corrige en la plenaria y no se penaliza.`
    },
    {
      id: 'sis8-14',
      title: 'Ficha · incremento y USDP',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-3 text-sm">
          <div class="bg-white border rounded-xl p-4 space-y-1">
            <p class="font-bold text-blue-700">Incremental</p>
            <ul class="list-disc list-inside text-slate-700 space-y-1">
              <li>Secuencias lineales escalonadas; cada una entrega una versión que opera.</li>
              <li>El primero es el producto fundamental; su uso genera el plan del siguiente.</li>
              <li>Conviene: requerimientos iniciales claros, alcance grande, valor pronto, poco personal al inicio.</li>
              <li>Beneficio: retroalimentación real y menor costo de cambio.</li>
              <li>Limitación: proceso poco visible y estructura que se degrada.</li>
            </ul>
            <p class="text-xs text-slate-500 mt-2">Pressman (2010), p. 35–36 · Sommerville (2011), p. 33–34</p>
          </div>
          <div class="bg-white border rounded-xl p-4 space-y-1">
            <p class="font-bold text-blue-700">USDP</p>
            <ul class="list-disc list-inside text-slate-700 space-y-1">
              <li>Dirigido por casos de uso, centrado en la arquitectura, iterativo e incremental.</li>
              <li>Fases: concepción, elaboración, construcción, transición y producción, solapadas.</li>
              <li>La elaboración puede dejar una arquitectura ejecutable que no se desecha.</li>
              <li>Beneficio: trazabilidad de casos de uso a pruebas.</li>
              <li>Limitación: pesado; hay que adaptarlo al proyecto.</li>
            </ul>
            <p class="text-xs text-slate-500 mt-2">Pressman (2010), p. 45–48 · Sommerville (2011), p. 50–52</p>
          </div>
        </div>
      `,
      notes: `16:48 a 17:00 (12 min de preparación). Estas fichas y la siguiente son el material de trabajo de los grupos; no se imprime. El docente circula y corrige una imprecisión por grupo, sin dar la exposición hecha. Sugerencia de reparto en grupos de 3: uno abre y define, otro explica la unidad de entrega y el cuándo, el tercero cierra con beneficio, limitación y ejemplo; en el grupo de 4, el cuarto lleva el ejemplo y las preguntas.`
    },
    {
      id: 'sis8-15',
      title: 'Ficha · clúster y Booch',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-3 text-sm">
          <div class="bg-white border rounded-xl p-4 space-y-1">
            <p class="font-bold text-blue-700">Clúster (agrupamiento)</p>
            <ul class="list-disc list-inside text-slate-700 space-y-1">
              <li>Unidad: grupo de clases relacionadas, o de clústeres, con un objetivo común.</li>
              <li>Cada clúster recorre su subciclo: especificación, diseño, implementación, verificación y generalización.</li>
              <li>Secuencial dentro del clúster; concurrente entre clústeres.</li>
              <li>Beneficio: paralelismo y fin del efecto todo o nada.</li>
              <li>Limitación: es vista de producto, no de proyecto; exige interfaces estables.</li>
            </ul>
            <p class="text-xs text-slate-500 mt-2">Meyer (1997) · material de cátedra U-II</p>
          </div>
          <div class="bg-white border rounded-xl p-4 space-y-1">
            <p class="font-bold text-blue-700">Booch</p>
            <ul class="list-disc list-inside text-slate-700 space-y-1">
              <li>Macroproceso: conceptualización, análisis, diseño, evolución, mantenimiento.</li>
              <li>Microproceso: clases y objetos, semántica, relaciones, interfaces e implementación.</li>
              <li>El micro se repite dentro de cada etapa del macro.</li>
              <li>Beneficio: arquitecturas sucesivas; el riesgo baja por vueltas.</li>
              <li>Limitación: no define pruebas ni gestión del proyecto; notación superada por UML.</li>
            </ul>
            <p class="text-xs text-slate-500 mt-2">Booch (1994)</p>
          </div>
        </div>
      `,
      notes: `Material de preparación (12 min). Recordar al grupo de clúster que el nombre del programa es Cluster y el concepto es el modelo de agrupamiento de Meyer; no confundir con análisis de conglomerados. Al grupo de Booch: el macroproceso es de gestión técnica del proyecto; el micro, el trabajo diario sobre clases.`
    },
    {
      id: 'sis8-16',
      title: 'Caso · Bomberos de Ciudad Ojeda',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-950">
            El Cuerpo de Bomberos quiere un sistema para recibir llamadas de emergencia, despachar la unidad más cercana, registrar el parte de servicio y llevar el mantenimiento de vehículos y equipos. Hoy todo se anota en libros y se coordina por radio. Son 6 estaciones, 14 unidades y 60 funcionarios. El mando quiere empezar a usarlo en tres meses y ampliarlo después.
          </div>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div data-reveal class="bg-white border rounded-xl p-3"><p class="font-bold text-blue-700">1 · Incremental</p><p class="text-slate-700">¿Cuál sería el primer incremento y por qué ese?</p></div>
            <div data-reveal class="bg-white border rounded-xl p-3"><p class="font-bold text-blue-700">2 · USDP</p><p class="text-slate-700">Escribe en dos líneas el caso de uso que atenderías primero: actor, objetivo y disparador. ¿Dónde aparece la arquitectura ejecutable?</p></div>
            <div data-reveal class="bg-white border rounded-xl p-3"><p class="font-bold text-blue-700">3 · Clúster</p><p class="text-slate-700">Nombra dos clústeres de clases del sistema.</p></div>
            <div data-reveal class="bg-white border rounded-xl p-3"><p class="font-bold text-blue-700">4 · Booch</p><p class="text-slate-700">¿Qué te da el macroproceso que no dan los otros tres?</p></div>
          </div>
        </div>
      `,
      notes: `17:46 a 18:02 (16 min): 10 de trabajo escrito y 6 de plenaria. Claves solo docente. 1) Primer incremento: recepción y despacho de llamadas con registro del parte; es lo que da valor inmediato. Se acepta solo registro de llamadas si se argumenta que el despacho depende de datos que aún no existen. 2) Caso de uso: recibir y despachar una emergencia; casos de uso preliminares en concepción, línea base ejecutable en elaboración. 3) Clústeres: emergencias y despacho (llamada, emergencia, unidad, despacho) y mantenimiento (vehículo, equipo, orden de servicio); vale cualquier agrupación coherente con interfaces claras. 4) Booch: marco de control del proyecto y de la arquitectura por etapas, con evolución y mantenimiento explícitos. Cierre: el mismo sistema admite los cuatro modelos porque cada uno responde a una pregunta distinta; la decisión real es qué se necesita tener funcionando primero.`
    },
    {
      id: 'sis8-17',
      title: 'Cierre',
      contentHtml: `
        <div class="space-y-3">
          <div class="bg-blue-600 text-white rounded-2xl p-5">
            <p class="text-xs uppercase tracking-widest text-blue-100">Ticket de salida</p>
            <p class="text-lg font-bold mt-2">El modelo que usaría para el primer año del sistema de los bomberos es ___ porque su unidad de entrega es ___.</p>
          </div>
          <div class="bg-white border rounded-xl p-4 text-sm"><strong>Semana 9 · lunes 16/11:</strong> Unidad III. Requerimientos del cliente y del desarrollador. Trae el cuaderno.</div>
          <div class="bg-white border rounded-xl p-4 text-sm"><strong>Hoy no hay entrega calificada:</strong> el cuadro comparativo y la exposición son formativos; el cuadro puede recogerse como evidencia.</div>
        </div>
      `,
      notes: `18:02 a 18:15 (13 min): síntesis 3 min volviendo a la pregunta eje con palabras de los estudiantes; ticket de salida 5 min con 2 o 3 lecturas orales; anuncio de la S9 3 min; cierre 2 min. NO anunciar la prueba del 10 % del 16/11 como si la Unidad III estuviera dictada: el PGA la fija ese día y la unidad empieza esa misma semana; el docente debe decidir antes (mover la fecha o limitar el alcance) y solo entonces anunciarla. Si el docente decide revisar el cuadro comparativo, recogerlo con nombre y cédula.`
    },
    {
      id: 'sis8-18',
      title: 'Fuentes',
      contentHtml: `
        <div class="bg-slate-50 border border-slate-200 rounded-2xl p-5">
          <p class="font-bold text-slate-900">Base de la semana</p>
          <ul class="list-disc list-inside text-sm text-slate-700 mt-3 space-y-2">
            <li>Programa analítico de SISTEMAS I, Unidad II.2: modelos por incremento, USDP, Cluster y Grady Booch.</li>
            <li>Pressman, R. S. (2010). <em>Ingeniería del software. Un enfoque práctico</em> (7.ª ed.). McGraw-Hill. Cap. 2: incremental (p. 35–36); proceso unificado (p. 45–48).</li>
            <li>Sommerville, I. (2011). <em>Ingeniería de software</em> (9.ª ed.). Pearson. Cap. 2: desarrollo incremental (p. 32–34); RUP (p. 50–52).</li>
            <li>Meyer, B.: clúster como agrupación lógica de clases (estructura de Eiffel).</li>
            <li>Material de cátedra de la Unidad II sobre el modelo de agrupamiento (subciclo del clúster).</li>
            <li>Booch, G. (1994). <em>Object-Oriented Analysis and Design with Applications</em> (2.ª ed.). Benjamin/Cummings: macroproceso y microproceso.</li>
            <li>El caso de los bomberos es ficticio y sirve solo para la práctica.</li>
          </ul>
        </div>
      `
    }
  ]
};
