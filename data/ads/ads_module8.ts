import { Module } from '../../types';

export const ANALISIS_DISENO_MODULE_8: Module = {
  id: 'ads-mod-8',
  title: '8. Metodologías para el desarrollo del sistema',
  description:
    'Semana 8: jueves 12/11 — las siete metodologías de la Unidad IV.2 (Kendall y Kendall, Martin, Whitten, UML/RUP, ISE de Galvis, RMM de Isakowitz, sistemas expertos de Rolston) y un marco de cinco criterios para compararlas. Viernes 13/11 — taller comparativo con escala de estimación (0 %): elegir una metodología para un caso y justificarla.',
  evaluation: '0%',
  slides: [
    {
      id: 'ads8-1',
      title: 'Jueves 12/11 · Metodologías para el desarrollo del sistema',
      contentHtml: `
        <div class="space-y-7">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-4xl shadow-lg">🧭</div>
            <div>
              <p class="text-sm uppercase tracking-widest font-bold text-indigo-700">Análisis y Diseño de Sistemas · Unidad IV</p>
              <h2 class="text-3xl md:text-4xl font-bold text-slate-900">Metodologías para el desarrollo del sistema</h2>
              <p class="text-slate-500 mt-1">Comparar es preguntar qué produce, en qué se apoya y dónde falla</p>
            </div>
          </div>
          <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-5 text-indigo-950">
            <p class="text-lg"><strong>Objetivo:</strong> comparar las metodologías para el desarrollo del sistema.</p>
          </div>
          <p class="text-sm text-slate-500">Jueves 12/11/2026 · 13:00–14:30 · Aula A-01 · Sección A · IUPSM — Extensión Ciudad Ojeda</p>
        </div>
      `,
      notes: 'Inicio 5 min: asistencia + pregunta puente de la diapositiva 3. Taller comparativo el viernes 13/11 (0 %, escala de estimación). Prueba escrita de la Unidad IV: viernes 20/11, 10 %.'
    },
    {
      id: 'ads8-2',
      title: 'Ruta de la semana',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-slate-600 text-lg">La S7 respondió <strong>cómo se analiza</strong>. Hoy: <strong>quién ordena el proyecto completo</strong> y qué entrega en cada paso.</p>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-indigo-50 border border-indigo-200 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-indigo-700">Hoy · jueves</p><h3 class="text-lg font-bold text-indigo-950 mt-2">Las siete metodologías</h3><p class="text-sm text-indigo-900 mt-2">Y un marco de cinco criterios para compararlas.</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-slate-700">Hoy · práctica</p><h3 class="text-lg font-bold text-slate-950 mt-2">Emparejar y elegir</h3><p class="text-sm text-slate-700 mt-2">Fragmentos reales: ¿de qué metodología son?</p></div>
            <div class="bg-violet-50 border border-violet-200 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-violet-700">Viernes</p><h3 class="text-lg font-bold text-violet-950 mt-2">Taller comparativo</h3><p class="text-sm text-violet-900 mt-2">Tres metodologías, un caso, una elección justificada.</p></div>
          </div>
        </div>
      `
    },
    {
      id: 'ads8-3',
      title: 'Pregunta puente · ¿quién ordena el proyecto?',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-gradient-to-br from-slate-900 to-indigo-900 text-white p-6 rounded-2xl">
            <p class="text-xs uppercase tracking-widest font-bold text-indigo-300">Pregunta de partida</p>
            <p class="text-xl md:text-2xl font-bold mt-2 leading-snug">Ya sabemos <em>cómo</em> analiza cada enfoque. ¿Quién decide <em>en qué orden</em> se hace todo el proyecto y <em>qué se entrega</em> en cada paso?</p>
          </div>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-white border-l-4 border-indigo-500 rounded-xl p-3" data-reveal><strong>El ciclo de vida (S4)</strong> dice <em>cuándo</em>: fases y orden general.</div>
            <div class="bg-white border-l-4 border-indigo-500 rounded-xl p-3" data-reveal><strong>La notación</strong> (DFD, UML) dice <em>con qué se dibuja</em>.</div>
            <div class="bg-white border-l-4 border-indigo-500 rounded-xl p-3" data-reveal><strong>La técnica</strong> dice <em>con qué se hace</em> un paso: entrevista, caso de uso.</div>
            <div class="bg-indigo-50 border-l-4 border-indigo-700 rounded-xl p-3" data-reveal><strong>La metodología</strong> integra las tres: pasos, notaciones y entregables.</div>
          </div>
        </div>
      `
    },
    {
      id: 'ads8-4',
      title: 'Qué es una metodología · cinco criterios',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-slate-700">Una metodología es un <strong>conjunto de pasos, notaciones y entregables</strong> que organiza el trabajo de un proyecto. Para comparar dos, se usan siempre los mismos cinco criterios:</p>
          <table class="w-full text-sm border-collapse">
            <thead><tr class="bg-indigo-700 text-white"><th class="p-2 border text-left">#</th><th class="p-2 border text-left">Criterio</th><th class="p-2 border text-left">Pregunta</th></tr></thead>
            <tbody>
              <tr data-reveal><td class="p-2 border font-bold">1</td><td class="p-2 border font-bold">Fuerza motriz</td><td class="p-2 border">¿Qué mira primero: datos, procesos, objetos, conocimiento, navegación, personas?</td></tr>
              <tr data-reveal><td class="p-2 border font-bold">2</td><td class="p-2 border font-bold">Cobertura</td><td class="p-2 border">¿Cubre todo el ciclo o solo una fase?</td></tr>
              <tr data-reveal><td class="p-2 border font-bold">3</td><td class="p-2 border font-bold">Entregable central</td><td class="p-2 border">¿Qué modelo o documento produce?</td></tr>
              <tr data-reveal><td class="p-2 border font-bold">4</td><td class="p-2 border font-bold">Fortaleza</td><td class="p-2 border">¿Qué resuelve mejor que las demás?</td></tr>
              <tr data-reveal><td class="p-2 border font-bold">5</td><td class="p-2 border font-bold">Limitación</td><td class="p-2 border">¿Qué exige del equipo o del proyecto?</td></tr>
            </tbody>
          </table>
          <p class="text-sm text-slate-500">Estos cinco criterios se quedan en la pizarra toda la clase y son la base del taller del viernes.</p>
        </div>
      `,
      notes: 'Dejar los cinco criterios escritos en la pizarra antes de empezar y completarlos con los estudiantes a medida que aparece cada metodología. La tabla completa es el producto de la clase.'
    },
    {
      id: 'ads8-5',
      title: 'Kendall y Kendall · las personas primero',
      contentHtml: `
        <div class="space-y-4">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-indigo-50 border border-indigo-200 rounded-2xl p-5">
              <p class="text-xs uppercase font-bold text-indigo-700">Fuerza motriz</p>
              <p class="text-lg font-bold text-indigo-950">Las personas que usan el sistema</p>
              <p class="text-sm text-indigo-900 mt-2">Participación del usuario en todo el ciclo; apoyo de herramientas CASE.</p>
            </div>
            <div class="bg-white border rounded-2xl p-5">
              <p class="text-xs uppercase font-bold text-slate-600">Entregable central</p>
              <p class="text-lg font-bold text-slate-900">El juego completo de modelos</p>
              <p class="text-sm text-slate-700 mt-2">DFD, diccionario de datos, árboles y tablas de decisión, más la documentación.</p>
            </div>
          </div>
          <div class="bg-slate-50 border rounded-xl p-4">
            <p class="font-bold text-slate-800 mb-2">Siete fases del ciclo de vida</p>
            <ol class="grid md:grid-cols-2 gap-x-6 gap-y-1 text-sm text-slate-700 list-decimal list-inside">
              <li data-reveal>Identificación del problema, oportunidades y objetivos</li>
              <li data-reveal>Requerimientos humanos de información</li>
              <li data-reveal>Análisis de las necesidades del sistema</li>
              <li data-reveal>Diseño del sistema recomendado</li>
              <li data-reveal>Desarrollo y documentación del software</li>
              <li data-reveal>Prueba y mantenimiento</li>
              <li data-reveal>Implantación y evaluación</li>
            </ol>
          </div>
          <p class="text-sm text-slate-600"><strong>Limitación:</strong> es un marco amplio; no impone una notación única ni técnicas de estimación.</p>
        </div>
      `,
      notes: 'Fuente: Kendall y Kendall (1997), B1 del banco. No repetir las fases del ciclo de vida de la S4: aquí solo se usan para ubicar la metodología. Las siete fases se revelan de una en una si el grupo está participando.'
    },
    {
      id: 'ads8-6',
      title: 'James Martin y Jeffrey Whitten · datos o procesos',
      contentHtml: `
        <div class="space-y-4">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white border-2 border-indigo-300 rounded-2xl p-5">
              <p class="text-xs uppercase font-bold text-indigo-700">James Martin</p>
              <h3 class="text-lg font-bold text-slate-900">Ingeniería de información</h3>
              <p class="text-sm text-slate-700 mt-2">Cuatro etapas: <strong>planificación</strong> de la empresa y de sus datos → análisis → diseño → construcción.</p>
              <p class="text-sm text-slate-700 mt-2">Aporta el paquete <strong>RAD</strong>: talleres JRP/JAD con usuarios, <em>timeboxing</em>, herramientas CASE y lenguajes de cuarta generación.</p>
              <p class="text-sm text-slate-600 mt-2"><strong>Límite:</strong> exige disciplina de planificación de datos.</p>
            </div>
            <div class="bg-white border-2 border-violet-300 rounded-2xl p-5">
              <p class="text-xs uppercase font-bold text-violet-700">Jeffrey Whitten</p>
              <h3 class="text-lg font-bold text-slate-900">Método por fases con catálogo de técnicas</h3>
              <p class="text-sm text-slate-700 mt-2">Ordena el proyecto en fases y <strong>elige la técnica</strong> según el proyecto: procesos de negocio, datos o prototipos.</p>
              <p class="text-sm text-slate-700 mt-2">Su manual es, sobre todo, un <strong>catálogo de técnicas con criterios de selección</strong>.</p>
              <p class="text-sm text-slate-600 mt-2"><strong>Límite:</strong> la libertad de elección exige criterio formado.</p>
            </div>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-950">
            <strong>Fuente secundaria:</strong> de Martin y de Whitten no hay ejemplar en la biblioteca. Lo dictado se limita a lo que el programa analítico y la literatura de referencia permiten afirmar.
          </div>
        </div>
      `,
      notes: 'Pendiente de fuente primaria: si el docente consigue los libros, fijar las etapas exactas antes de la próxima edición del módulo. No profundizar en detalles que no estén respaldados.'
    },
    {
      id: 'ads8-7',
      title: 'UML no es una metodología',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-gradient-to-br from-rose-900 to-slate-900 text-white p-6 rounded-2xl">
            <p class="text-xs uppercase tracking-widest font-bold text-rose-300">Error frecuente</p>
            <p class="text-xl md:text-2xl font-bold mt-2 leading-snug">UML dice <em>cómo se dibuja</em>. No dice <em>en qué orden</em> ni <em>qué entregar</em>.</p>
          </div>
          <div class="grid md:grid-cols-3 gap-3 text-sm">
            <div class="bg-white border rounded-xl p-4"><p class="font-bold text-slate-900">Qué es</p><p class="text-slate-700 mt-1">Un <strong>lenguaje de modelado</strong> estandarizado por la OMG.</p></div>
            <div class="bg-white border rounded-xl p-4"><p class="font-bold text-slate-900">Qué contiene</p><p class="text-slate-700 mt-1">14 tipos de diagramas en UML 2.5: clases, casos de uso, secuencia, actividad, estados, componentes, despliegue…</p></div>
            <div class="bg-white border rounded-xl p-4"><p class="font-bold text-slate-900">Qué no es</p><p class="text-slate-700 mt-1">No es un proceso: no ordena fases ni define entregables.</p></div>
          </div>
          <p class="text-slate-600">Para que un lenguaje sirva hay que ponerle un proceso alrededor. El más difundido es <strong>RUP</strong>.</p>
        </div>
      `,
      notes: 'Contraste clave de la clase: UML = lenguaje; RUP = proceso. Es la pregunta más probable en la prueba del 20/11 y vuelve en el ticket de salida.'
    },
    {
      id: 'ads8-8',
      title: 'RUP · cuatro fases y disciplinas',
      contentHtml: `
        <div class="space-y-4">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
            <div class="bg-indigo-600 text-white rounded-2xl p-4" data-reveal><p class="text-xs uppercase font-bold text-indigo-200">Fase 1</p><p class="font-bold text-lg mt-1">Inicio</p><p class="text-xs mt-1 text-indigo-100">Alcance y caso de negocio</p></div>
            <div class="bg-indigo-500 text-white rounded-2xl p-4" data-reveal><p class="text-xs uppercase font-bold text-indigo-100">Fase 2</p><p class="font-bold text-lg mt-1">Elaboración</p><p class="text-xs mt-1 text-indigo-50">Arquitectura estable</p></div>
            <div class="bg-indigo-400 text-white rounded-2xl p-4" data-reveal><p class="text-xs uppercase font-bold text-indigo-50">Fase 3</p><p class="font-bold text-lg mt-1">Construcción</p><p class="text-xs mt-1 text-indigo-50">Producto completo</p></div>
            <div class="bg-indigo-300 text-indigo-950 rounded-2xl p-4" data-reveal><p class="text-xs uppercase font-bold text-indigo-800">Fase 4</p><p class="font-bold text-lg mt-1">Transición</p><p class="text-xs mt-1">Entrega al usuario</p></div>
          </div>
          <div class="bg-slate-50 border rounded-xl p-4 text-sm text-slate-700">
            <p class="font-bold text-slate-800 mb-1">Disciplinas que se repiten en cada iteración</p>
            <p>Modelado del negocio · requisitos · análisis y diseño · implementación · pruebas · despliegue · gestión de configuración y cambios · gestión del proyecto · entorno.</p>
          </div>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-3"><strong>Entregable:</strong> modelo de casos de uso + modelo de clases + arquitectura.</div>
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-3"><strong>Limitación:</strong> peso documental y de roles; en equipos pequeños se percibe burocrático.</div>
          </div>
        </div>
      `,
      notes: 'Fuente: Visual Paradigm, «What is RUP» (W4). Enfatizar que las fases son cuatro pero las iteraciones son muchas: RUP es iterativo e incremental, como el USDP de Sistemas I.'
    },
    {
      id: 'ads8-9',
      title: 'ISE · Galvis y el software educativo',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-slate-700">Metodología de <strong>dominio específico</strong>: sirve para <strong>materiales educativos computarizados</strong>, no para un sistema de inventario.</p>
          <div class="grid md:grid-cols-5 gap-2 text-center text-sm">
            <div class="bg-violet-600 text-white rounded-xl p-3" data-reveal><p class="font-bold">1</p><p class="mt-1">Análisis</p><p class="text-xs mt-1 text-violet-100">Población y necesidad</p></div>
            <div class="bg-violet-500 text-white rounded-xl p-3" data-reveal><p class="font-bold">2</p><p class="mt-1">Diseño</p><p class="text-xs mt-1 text-violet-50">Educativo, comunicacional, computacional</p></div>
            <div class="bg-violet-400 text-white rounded-xl p-3" data-reveal><p class="font-bold">3</p><p class="mt-1">Desarrollo</p><p class="text-xs mt-1 text-violet-50">Versión inicial</p></div>
            <div class="bg-violet-300 text-violet-950 rounded-xl p-3" data-reveal><p class="font-bold">4</p><p class="mt-1">Prueba piloto</p><p class="text-xs mt-1">Con estudiantes reales</p></div>
            <div class="bg-violet-200 text-violet-950 rounded-xl p-3" data-reveal><p class="font-bold">5</p><p class="mt-1">Ajuste</p><p class="text-xs mt-1">Prueba de campo</p></div>
          </div>
          <div class="bg-slate-50 border rounded-xl p-4 text-sm text-slate-700">
            <p><strong>Producto:</strong> material educativo computarizado validado. <strong>ISE-OO</strong> (Galvis, 1998) usa UML como notación: la notación se comparte aunque el proceso sea distinto.</p>
          </div>
          <p class="text-sm text-slate-600"><strong>Limitación:</strong> exige equipo interdisciplinario (contenido, pedagogía y programación) y acceso a la población destinataria.</p>
        </div>
      `,
      notes: 'Fuentes: Galvis, Gómez y Mariño (1998), B6; Marcano y Benigni (2014), Saber 26(3), para las fases de la ISE-OO. Preguntar: «¿por qué esta metodología no sirve para la ferretería?».'
    },
    {
      id: 'ads8-10',
      title: 'RMM · Isakowitz y las aplicaciones hipermedia',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-slate-700"><strong>Relationship Management Methodology</strong> (Isakowitz, Stohr y Balasubramanian, 1995): metodología para diseñar aplicaciones <strong>hipermedia</strong> — sitios web, multimedia, enciclopedias navegables.</p>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white border rounded-2xl p-4">
              <p class="text-xs uppercase font-bold text-slate-600">Qué aporta</p>
              <ul class="text-sm text-slate-700 mt-2 space-y-1 list-disc list-inside">
                <li data-reveal>Siete pasos, desde el diseño E-R hasta la construcción y prueba.</li>
                <li data-reveal>Un modelo propio: <strong>RMDM</strong>, que combina entidades y relaciones con <strong>mecanismos de navegación</strong>.</li>
                <li data-reveal>Producto: el diagrama de navegación y el diseño de cada pantalla.</li>
              </ul>
            </div>
            <div class="bg-rose-50 border border-rose-200 rounded-2xl p-4">
              <p class="text-xs uppercase font-bold text-rose-700">Límite</p>
              <p class="text-sm text-rose-950 mt-2">Solo tiene sentido si el producto <strong>se navega</strong>. En un sistema transaccional, los enlaces no son el problema.</p>
              <p class="text-sm text-rose-900 mt-3"><strong>Fuerza motriz:</strong> la navegación entre objetos de información.</p>
            </div>
          </div>
          <p class="text-sm text-slate-600">Base teórica: modelo E-R + HDM (hipermedia). Es el ejemplo más claro de metodología que <strong>nace de un tipo de producto</strong>.</p>
        </div>
      `,
      notes: 'Fuente: Isakowitz, Stohr y Balasubramanian (1995), CACM 38(8), 34–44. El nombre «relationship management» viene de gestionar relaciones entre objetos de información, no de gestionar clientes: aclararlo si alguien lo confunde con CRM.'
    },
    {
      id: 'ads8-11',
      title: 'Sistemas expertos · Rolston y el conocimiento',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-slate-700">Cuando el sistema no gestiona datos sino <strong>conocimiento experto</strong>, el proceso cambia: lo difícil no es programar, es <strong>extraer y representar las reglas</strong>.</p>
          <div class="grid md:grid-cols-3 gap-3 text-sm text-center">
            <div class="bg-teal-600 text-white rounded-2xl p-4" data-reveal><p class="font-bold">Base de conocimiento</p><p class="text-xs mt-1 text-teal-100">Reglas del experto</p></div>
            <div class="bg-teal-500 text-white rounded-2xl p-4" data-reveal><p class="font-bold">Motor de inferencia</p><p class="text-xs mt-1 text-teal-50">Encadena las reglas</p></div>
            <div class="bg-teal-400 text-white rounded-2xl p-4" data-reveal><p class="font-bold">Interfaz</p><p class="text-xs mt-1 text-teal-50">Pregunta y explica</p></div>
          </div>
          <div class="bg-white border rounded-xl p-4 text-sm text-slate-700">
            <p class="font-bold text-slate-800 mb-1">Regla típica</p>
            <p class="font-mono text-xs md:text-sm bg-slate-100 rounded p-2">SI el socio tiene multa pendiente ENTONCES no se autoriza el préstamo</p>
          </div>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-3"><strong>Camino:</strong> adquisición del conocimiento → representación en reglas → motor de inferencia → validación con el experto.</div>
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-3"><strong>Límite:</strong> sin experto disponible y sin reglas verificables, el sistema no se puede construir.</div>
          </div>
        </div>
      `,
      notes: 'Fuente: Rolston (1996), B8. Aclarar que un sistema experto no es «un sistema con inteligencia artificial»: es un sistema cuya lógica está en reglas explícitas y auditables, no en el código.'
    },
    {
      id: 'ads8-12',
      title: 'Demostración · un requerimiento, tres metodologías',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-slate-900 text-white rounded-xl p-4">
            <p class="text-xs uppercase tracking-widest font-bold text-indigo-300">Caso</p>
            <p class="text-lg font-semibold mt-1">La biblioteca municipal quiere digitalizar el préstamo. El requerimiento es el mismo; la metodología cambia <em>por dónde se empieza</em>.</p>
          </div>
          <table class="w-full text-sm border-collapse">
            <thead><tr class="bg-slate-700 text-white"><th class="p-2 border text-left"></th><th class="p-2 border text-left">Kendall y Kendall</th><th class="p-2 border text-left">Martin (IE/RAD)</th><th class="p-2 border text-left">RUP</th></tr></thead>
            <tbody>
              <tr data-reveal><td class="p-2 border font-bold">Primer paso</td><td class="p-2 border">Entrevistar a bibliotecarios y socios</td><td class="p-2 border">Modelar los datos: socio, ejemplar, préstamo</td><td class="p-2 border">Identificar actores y casos de uso</td></tr>
              <tr data-reveal><td class="p-2 border font-bold">Primer entregable</td><td class="p-2 border">Requerimientos + DFD del préstamo</td><td class="p-2 border">Modelo de datos de la biblioteca</td><td class="p-2 border">Diagrama de casos de uso</td></tr>
              <tr data-reveal><td class="p-2 border font-bold">Cómo avanza</td><td class="p-2 border">Modelo por modelo hasta implantar</td><td class="p-2 border">De los datos a los procesos, con taller JAD</td><td class="p-2 border">Iteración: elaboración → construcción</td></tr>
              <tr data-reveal><td class="p-2 border font-bold">Qué gana aquí</td><td class="p-2 border">Compromiso del personal</td><td class="p-2 border">Consistencia de los datos</td><td class="p-2 border">Trazabilidad de cada caso de uso</td></tr>
            </tbody>
          </table>
          <p class="text-slate-600 text-sm">Los tres llegan a un sistema que funciona. La pregunta no es «cuál es mejor», sino <strong>cuál conviene a este proyecto</strong>.</p>
        </div>
      `,
      notes: '12 min. Mantener el caso de la biblioteca de la S7: el estudiante reconoce el dominio y el cambio se percibe en el método, no en el problema.'
    },
    {
      id: 'ads8-13',
      title: 'Demostración · ¿por qué elegir uno?',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-gradient-to-br from-indigo-900 to-violet-900 text-white p-6 rounded-2xl">
            <p class="text-xs uppercase tracking-widest font-bold text-violet-300">Pregunta de cierre de la demostración</p>
            <p class="text-xl md:text-2xl font-bold mt-2 leading-snug">Si los tres producen un sistema que funciona, ¿con qué se decide?</p>
          </div>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white border-l-4 border-indigo-500 rounded-xl p-4"><p class="font-bold text-slate-900">Criterio 1 · fuerza motriz</p><p class="text-sm text-slate-700 mt-1">¿El problema real está en los datos, en los procesos, en las personas o en el conocimiento?</p></div>
            <div class="bg-white border-l-4 border-indigo-500 rounded-xl p-4"><p class="font-bold text-slate-900">Criterio 5 · limitación</p><p class="text-sm text-slate-700 mt-1">¿Qué exige esta metodología que este proyecto <em>no</em> tiene: tiempo, experto, equipo, madurez?</p></div>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-950">
            <strong>Regla de la casa:</strong> una metodología nunca se elige «porque es la más completa». Se elige por lo que el proyecto necesita y por lo que el equipo puede sostener.
          </div>
        </div>
      `,
      notes: 'Cerrar la demostración dejando la regla escrita. Es lo que se evalúa el viernes en la escala de estimación y el 20/11 en la prueba.'
    },
    {
      id: 'ads8-14',
      title: 'Práctica · emparejar y elegir',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
            <p class="font-bold text-indigo-950">Parte A · 18 min en parejas</p>
            <p class="text-sm text-indigo-900">Cada fragmento → metodología + <strong>la palabra que lo delata</strong>. Se entrega en el cuaderno.</p>
          </div>
          <ol class="grid md:grid-cols-2 gap-x-6 gap-y-2 text-sm text-slate-700 list-decimal list-inside">
            <li data-reveal>«El primer taller reúne a usuarios y analistas dos días para acordar el alcance del módulo».</li>
            <li data-reveal>«Antes de hablar de procesos, construimos el modelo de datos de toda la empresa».</li>
            <li data-reveal>«El diagrama de secuencia muestra cómo el socio, el ejemplar y el préstamo intercambian mensajes».</li>
            <li data-reveal>«La fase de elaboración termina con la arquitectura estable del sistema».</li>
            <li data-reveal>«Probamos el material con estudiantes de sexto grado y ajustamos el texto según sus respuestas».</li>
            <li data-reveal>«El diagrama RMDM muestra qué nodos enlazan con cuáles y cuántos enlaces hay por pantalla».</li>
            <li data-reveal>«Escribimos la regla: si el socio tiene multa pendiente, no se autoriza el préstamo».</li>
            <li data-reveal>«Empezamos identificando el problema, las oportunidades y los objetivos».</li>
            <li data-reveal>«El equipo decide si modela procesos o datos según lo que exija el proyecto».</li>
          </ol>
        </div>
      `,
      notes: 'Clave: 1 Martin (JAD) · 2 Martin (IE) · 3 UML · 4 RUP · 5 ISE · 6 RMM · 7 Sistemas expertos · 8 Kendall y Kendall · 9 Whitten. Corrección: pedir la palabra que delata; si dos fragmentos apuntan a la misma metodología, preguntar por el criterio 1.'
    },
    {
      id: 'ads8-15',
      title: 'Práctica · el caso de la ferretería',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-slate-900 text-white rounded-xl p-5">
            <p class="text-xs uppercase tracking-widest font-bold text-indigo-300">Caso · Ferretería El Constructor</p>
            <p class="text-lg font-semibold mt-1">Dos sucursales. Necesita controlar inventario por sucursal, compras y cuentas por cobrar. El dueño quiere resultados en <strong>ocho semanas</strong> y no tiene personal de sistemas.</p>
          </div>
          <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
            <p class="font-bold text-indigo-950">Parte B · 18 min en parejas (cuaderno)</p>
            <ol class="text-sm text-indigo-900 mt-2 space-y-1 list-decimal list-inside">
              <li>Dos metodologías candidatas y el <strong>criterio 1</strong> que las hace candidatas.</li>
              <li>Un <strong>entregable concreto</strong> de la primera semana con cada una.</li>
              <li>Una <strong>limitación</strong> de cada una <em>para este proyecto</em>.</li>
              <li>La elegida, en una frase: «Elegimos… porque…».</li>
            </ol>
          </div>
          <p class="text-sm text-slate-600">Se aceptan varias respuestas: lo que se evalúa es la <strong>justificación con los cinco criterios</strong>, no la coincidencia con una lista.</p>
        </div>
      `,
      notes: 'Respuestas defendibles: Martin/RAD (datos consistentes entre sucursales + timeboxing de 8 semanas), Whitten (procesos de inventario y compras), Kendall (dueño muy involucrado, usuario único). Es incorrecto elegir ISE, RMM o sistemas expertos sin justificar el dominio.'
    },
    {
      id: 'ads8-16',
      title: 'Cierre y taller del viernes',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-white border-l-4 border-indigo-600 rounded-xl p-4">
            <p class="font-bold text-slate-900">Ticket de salida</p>
            <p class="text-slate-700">En una frase: ¿cuál es la diferencia entre <strong>UML</strong> y <strong>RUP</strong>?</p>
          </div>
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div class="bg-violet-50 border border-violet-200 rounded-2xl p-4"><p class="text-xs uppercase font-bold text-violet-700">Viernes 13/11</p><p class="font-bold text-violet-950 mt-1">Taller comparativo · 0 %</p><p class="text-violet-900 mt-1">Tres metodologías sobre un caso, elección justificada y escala de estimación.</p></div>
            <div class="bg-rose-50 border border-rose-200 rounded-2xl p-4"><p class="text-xs uppercase font-bold text-rose-700">Viernes 20/11</p><p class="font-bold text-rose-950 mt-1">Prueba escrita · 10 %</p><p class="text-rose-900 mt-1">Unidad IV. Pide justificar una elección, no recitar fases.</p></div>
          </div>
          <p class="text-slate-600">Traer el cuaderno con la tabla de los cinco criterios completada.</p>
        </div>
      `,
      notes: 'Respuesta esperada del ticket: UML es el lenguaje de modelado; RUP es el proceso que lo usa. Anunciar el taller del viernes y la prueba del 20/11 (PGA S9).'
    },
    {
      id: 'ads8-17',
      title: 'Fuentes',
      contentHtml: `
        <div class="space-y-4 text-sm">
          <h3 class="text-xl font-bold text-slate-900">Fuentes de la semana</h3>
          <ul class="space-y-2 text-slate-700">
            <li>Kendall, K. y Kendall, J. (1997). <em>Análisis y diseño de sistemas</em>. Pearson.</li>
            <li>Galvis, Á., Gómez, R. y Mariño, O. (1998). <em>Ingeniería de software educativo con modelaje orientado por objetos</em>.</li>
            <li>Marcano, I. y Benigni, G. (2014). Análisis de alternativas metodológicas para el desarrollo de software educativo. <em>Saber, 26</em>(3), 297–304.</li>
            <li>Isakowitz, T., Stohr, E. y Balasubramanian, P. (1995). RMM: A methodology for structured hypermedia design. <em>Communications of the ACM, 38</em>(8), 34–44.</li>
            <li>Rolston, D. (1996). <em>Principios de inteligencia artificial y sistemas expertos</em> (2.ª ed.). McGraw-Hill.</li>
            <li>Visual Paradigm. <em>What is RUP</em> · uml-diagrams.org. <em>UML 2.5 diagrams overview</em>.</li>
          </ul>
          <p class="text-xs text-slate-500">Programa analítico U-IV y PGA 2026-2 (plan de la asignatura).</p>
        </div>
      `,
      notes: 'Martin y Whitten figuran en la bibliografía del programa pero no hay ejemplar en la biblioteca: se citan como fuente secundaria. Si el docente consigue los libros, actualizar el módulo.'
    }
  ]
};
