import { Module } from '../../types';

export const ANALISIS_DISENO_MODULE_7: Module = {
  id: 'ads-mod-7',
  title: '7. Procesos de análisis y técnicas de recolección de datos',
  description:
    'Semana 7 (jueves 05/11 y viernes 06/11): procesos de análisis clásico, estructurado y orientado a objetos (unidad de análisis, herramientas y productos de cada enfoque) y técnicas de recolección de datos (entrevista, cuestionario, observación y revisión documental) aplicadas a un caso en una ficha grupal formativa. Unidad IV, objetivo IV.1.',
  evaluation: '0%',
  slides: [
    {
      id: 'ads7-1',
      title: 'Análisis y Diseño de Sistemas · Semana 7',
      contentHtml: `
        <div class="space-y-7">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 bg-sky-600 rounded-2xl flex items-center justify-center text-white text-4xl shadow-lg">🔍</div>
            <div>
              <p class="text-sm uppercase tracking-widest font-bold text-sky-700">Análisis y Diseño de Sistemas · Unidad IV</p>
              <h2 class="text-3xl md:text-4xl font-bold text-slate-900">Tres formas de analizar un sistema</h2>
              <p class="text-slate-500 mt-1">Clásico, estructurado y orientado a objetos</p>
            </div>
          </div>
          <div class="bg-sky-50 border border-sky-200 rounded-xl p-5 text-sky-950">
            <p class="text-lg"><strong>Objetivo:</strong> identificar las metodologías para el desarrollo de sistemas a partir de los procesos de análisis clásico, estructurado y orientado a objetos.</p>
          </div>
          <p class="text-sm text-slate-500">Jueves 05/11/2026 · 13:00–14:30 · Aula A-01 · Sección A · IUPSM — Extensión Ciudad Ojeda</p>
        </div>
      `,
      notes: 'Inicio: 7 min en total con las diap. 2 y 3.'
    },
    {
      id: 'ads7-2',
      title: 'Ruta del jueves',
      contentHtml: `
        <div class="space-y-6">
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-amber-50 border border-amber-200 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-amber-700">Enfoque 1</p><h3 class="text-lg font-bold text-amber-950 mt-2">Clásico</h3><p class="text-sm text-amber-900 mt-2">Documentos y procedimientos.</p></div>
            <div class="bg-sky-50 border border-sky-200 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-sky-700">Enfoque 2</p><h3 class="text-lg font-bold text-sky-950 mt-2">Estructurado</h3><p class="text-sm text-sky-900 mt-2">Procesos y flujos de datos.</p></div>
            <div class="bg-violet-50 border border-violet-200 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-violet-700">Enfoque 3</p><h3 class="text-lg font-bold text-violet-950 mt-2">Orientado a objetos</h3><p class="text-sm text-violet-900 mt-2">Objetos que unen datos y comportamiento.</p></div>
          </div>
          <div class="bg-slate-900 text-white rounded-2xl p-5">
            <div class="flex flex-wrap gap-2 text-sm font-bold">
              <span class="bg-sky-600 rounded-full px-3 py-2">Tres enfoques</span><span class="text-slate-400 self-center">→</span>
              <span class="bg-sky-600 rounded-full px-3 py-2">Cuadro comparativo</span><span class="text-slate-400 self-center">→</span>
              <span class="bg-indigo-600 rounded-full px-3 py-2">Caso farmacia</span><span class="text-slate-400 self-center">→</span>
              <span class="bg-emerald-600 rounded-full px-3 py-2">Práctica en parejas</span>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'ads7-3',
      title: 'Pregunta puente',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-gradient-to-br from-slate-900 to-sky-900 text-white p-6 rounded-2xl">
            <p class="text-xs uppercase tracking-widest font-bold text-sky-300">Pregunta puente</p>
            <p class="text-xl md:text-2xl font-bold mt-2 leading-snug">Todo ciclo de vida tiene una fase de análisis. ¿Se analiza igual una farmacia con descripciones escritas que con diagramas de flujo de datos o con clases?</p>
          </div>
          <p class="text-slate-600">Hoy vemos <strong>cómo</strong> se hace el análisis en tres enfoques. La pregunta común a los tres es: <strong>¿qué debe hacer el sistema?</strong></p>
        </div>
      `,
      notes: 'No reexplicar las 7 fases del ciclo de vida (S4). Recoger 2–3 respuestas y pasar a la teoría.'
    },
    {
      id: 'ads7-4',
      title: 'Análisis clásico',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-amber-500 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-amber-100">Unidad de análisis</p><p class="text-xl font-bold">El documento y el procedimiento</p></div>
          <p class="text-slate-700"><strong>Pregunta guía:</strong> ¿qué documentos circulan, quién los maneja y en qué orden?</p>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-white border rounded-xl p-3" data-reveal><p class="font-bold text-amber-800">Herramientas</p><p>Descripción narrativa, organigrama, flujograma de documentos, formularios y manuales de procedimiento.</p></div>
            <div class="bg-white border rounded-xl p-3" data-reveal><p class="font-bold text-amber-800">Producto</p><p>Informe del sistema actual.</p></div>
            <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-3" data-reveal><p class="font-bold text-emerald-800">Fortaleza</p><p>Cercano al lenguaje del usuario; poco formal.</p></div>
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-3" data-reveal><p class="font-bold text-rose-800">Limitación</p><p>Ambiguo, depende del analista y es difícil de verificar.</p></div>
          </div>
        </div>
      `,
      notes: 'Teoría 1 (7 min). Ejemplo oral: la descripción de cómo circula una orden de compra en original y copia.'
    },
    {
      id: 'ads7-5',
      title: 'Análisis estructurado',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-sky-600 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-sky-100">Unidad de análisis</p><p class="text-xl font-bold">El proceso que transforma datos</p></div>
          <p class="text-slate-700">Considera que los datos y los procesos que los transforman son entidades separadas (Pressman, §6.1.4).</p>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-white border rounded-xl p-3" data-reveal><p class="font-bold text-sky-800">Herramientas</p><p>DFD por niveles (contexto, nivel 0, nivel 1), diccionario de datos, especificación de procesos (español estructurado, tablas y árboles de decisión), diagrama entidad-relación.</p></div>
            <div class="bg-white border rounded-xl p-3" data-reveal><p class="font-bold text-sky-800">Producto</p><p>Modelo lógico del sistema: DFD + diccionario de datos.</p></div>
            <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-3" data-reveal><p class="font-bold text-emerald-800">Fortaleza</p><p>Riguroso; descompone de lo general a lo particular.</p></div>
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-3" data-reveal><p class="font-bold text-rose-800">Limitación</p><p>Al separar datos y procesos, un cambio en los datos afecta a muchos procesos.</p></div>
          </div>
        </div>
      `,
      notes: 'Teoría 2 (7 min). Los DFD se desarrollan en detalle en la Unidad VI; hoy solo se reconocen.'
    },
    {
      id: 'ads7-6',
      title: 'Análisis orientado a objetos',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-violet-600 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-violet-100">Unidad de análisis</p><p class="text-xl font-bold">El objeto: datos y comportamiento juntos</p></div>
          <p class="text-slate-700">Se centra en la definición de las clases y en la manera en que colaboran para cumplir los requerimientos (Pressman, §6.1.4).</p>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-white border rounded-xl p-3" data-reveal><p class="font-bold text-violet-800">Conceptos</p><p>Clase, objeto, atributo, operación, mensaje, encapsulamiento y herencia.</p></div>
            <div class="bg-white border rounded-xl p-3" data-reveal><p class="font-bold text-violet-800">Herramientas y producto</p><p>Casos de uso, diagrama de clases y colaboración entre objetos (notación UML).</p></div>
            <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-3" data-reveal><p class="font-bold text-emerald-800">Fortaleza</p><p>Reutilización; el mismo modelo sirve para el análisis y el diseño.</p></div>
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-3" data-reveal><p class="font-bold text-rose-800">Limitación</p><p>Exige abstraer bien las clases desde el inicio.</p></div>
          </div>
        </div>
      `,
      notes: 'Teoría 3 (7 min). UML se menciona como notación; como metodología se trabaja en S8.'
    },
    {
      id: 'ads7-7',
      title: 'Cuadro comparativo',
      contentHtml: `
        <div class="space-y-4">
          <div class="overflow-x-auto"><table class="w-full text-sm border">
            <thead class="bg-slate-100"><tr><th class="p-2 border text-left"></th><th class="p-2 border text-left text-amber-800">Clásico</th><th class="p-2 border text-left text-sky-800">Estructurado</th><th class="p-2 border text-left text-violet-800">Orientado a objetos</th></tr></thead>
            <tbody>
              <tr><td class="p-2 border font-bold">Mira</td><td class="p-2 border">Documentos</td><td class="p-2 border">Procesos y flujos de datos</td><td class="p-2 border">Objetos que colaboran</td></tr>
              <tr><td class="p-2 border font-bold">Datos y procesos</td><td class="p-2 border">Descritos en prosa</td><td class="p-2 border">Separados</td><td class="p-2 border">Unidos en la clase</td></tr>
              <tr><td class="p-2 border font-bold">Herramienta típica</td><td class="p-2 border">Flujograma de documentos</td><td class="p-2 border">DFD y diccionario</td><td class="p-2 border">Casos de uso y clases</td></tr>
              <tr><td class="p-2 border font-bold">Producto</td><td class="p-2 border">Informe del sistema actual</td><td class="p-2 border">Modelo lógico</td><td class="p-2 border">Modelo de casos de uso y de clases</td></tr>
            </tbody>
          </table></div>
          <div class="bg-sky-50 border border-sky-200 rounded-lg p-3 text-sm text-sky-900">La pregunta no es cuál enfoque es mejor, sino qué combinación de representaciones sirve mejor al proyecto (Pressman, §6.1.4).</div>
        </div>
      `,
      notes: 'Síntesis (5 min). Copiar el cuadro en el cuaderno; sirve para la práctica y para la prueba S9.'
    },
    {
      id: 'ads7-8',
      title: 'Demostración · Farmacia Santa Rita',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white border rounded-2xl p-5">
            <p class="font-bold text-slate-900">Proceso: despacho de recetas</p>
            <p class="text-slate-700 mt-2">El cliente entrega la receta. El auxiliar verifica si hay existencia: si hay, factura y despacha; si no, anota un pedido pendiente. El farmacéutico revisa las recetas de medicamentos controlados antes del despacho.</p>
          </div>
          <div data-diagram data-steps="C | C>P, P | P>I, I | P>D, D, F | F>P" data-flow>
flowchart LR
  C["Cliente"] -->|receta| P(("Despachar receta"))
  P -->|consulta existencia| I[("Inventario")]
  P -->|pedido pendiente| D[("Pedidos pendientes")]
  F["Farmacéutico"] -->|aprobación| P
          </div>
          <p class="text-sm text-slate-500">Vista estructurada (simplificada) del mismo proceso: entidades, proceso y almacenes.</p>
        </div>
      `,
      notes: 'Demostración (14 min con la diap. 9). Leer el caso y construir en la pizarra las tres columnas a la vez (sugerencia didáctica 1). El diagrama es una versión simplificada del nivel 0 para orientar.'
    },
    {
      id: 'ads7-9',
      title: 'Demostración · tres lentes',
      contentHtml: `
        <div class="grid md:grid-cols-3 gap-4 text-sm">
          <div class="bg-amber-50 border border-amber-200 rounded-2xl p-4" data-reveal>
            <p class="font-bold text-amber-800">Clásico</p>
            <ul class="list-disc list-inside mt-2 space-y-1 text-amber-950"><li>Narrativa del despacho</li><li>Flujograma de la receta: cliente → auxiliar → farmacéutico → caja</li><li>Formularios: receta, factura, libro de controlados</li></ul>
          </div>
          <div class="bg-sky-50 border border-sky-200 rounded-2xl p-4" data-reveal>
            <p class="font-bold text-sky-800">Estructurado</p>
            <ul class="list-disc list-inside mt-2 space-y-1 text-sky-950"><li>Nivel 0: 1. Verificar existencia · 2. Facturar · 3. Registrar pendiente · 4. Revisar controlados</li><li>Almacenes: Inventario, Pedidos pendientes</li><li class="font-mono text-xs">receta = fecha + cedula_paciente + {medicamento + dosis}</li></ul>
          </div>
          <div class="bg-violet-50 border border-violet-200 rounded-2xl p-4" data-reveal>
            <p class="font-bold text-violet-800">Orientado a objetos</p>
            <ul class="list-disc list-inside mt-2 space-y-1 text-violet-950"><li>Casos de uso: Despachar receta, Registrar pedido pendiente, Revisar controlado</li><li>Clases: Receta, Medicamento, Factura, Paciente</li><li>MedicamentoControlado hereda de Medicamento</li></ul>
          </div>
        </div>
      `,
      notes: 'Pregunta de cierre: ¿qué ve cada enfoque con más claridad? Clásico: quién maneja cada papel. Estructurado: el flujo de datos y los almacenes. OO: las reglas de los controlados como especialización (herencia).'
    },
    {
      id: 'ads7-10',
      title: 'Práctica A · ¿a qué enfoque pertenece?',
      contentHtml: `
        <div class="space-y-3">
          <p class="text-slate-700">En parejas: clasifica cada fragmento como <strong>C</strong> (clásico), <strong>E</strong> (estructurado) u <strong>O</strong> (orientado a objetos) e indica qué palabra o símbolo te lo indicó.</p>
          <ol class="grid md:grid-cols-2 gap-2 text-sm">
            <li class="bg-white border rounded-lg p-2"><strong>1.</strong> «El encargado recibe la solicitud en original y copia; archiva la copia en la carpeta del mes».</li>
            <li class="bg-white border rounded-lg p-2"><strong>2.</strong> <span class="font-mono">pedido = numero + fecha + cliente + {producto + cantidad}</span></li>
            <li class="bg-white border rounded-lg p-2"><strong>3.</strong> «Caso de uso: Renovar préstamo. Actor: Socio».</li>
            <li class="bg-white border rounded-lg p-2"><strong>4.</strong> Un círculo «2. Calcular multa», una flecha «fecha_devolución» y un almacén «D2 Préstamos».</li>
            <li class="bg-white border rounded-lg p-2"><strong>5.</strong> «Socio tiene los atributos cedula y nombre y la operación solicitarPrestamo()».</li>
            <li class="bg-white border rounded-lg p-2"><strong>6.</strong> Organigrama de compras con los cargos que firman cada orden.</li>
            <li class="bg-white border rounded-lg p-2"><strong>7.</strong> Tabla de decisión: si el socio tiene multa y el libro está reservado, no se renueva.</li>
            <li class="bg-white border rounded-lg p-2"><strong>8.</strong> «LibroDigital hereda de Libro y redefine prestar()».</li>
          </ol>
        </div>
      `,
      notes: 'Parte A (12 min). Clave: 1 C · 2 E (diccionario de datos) · 3 O · 4 E (DFD) · 5 O · 6 C · 7 E (especificación de procesos) · 8 O. Pedir primero la clasificación y luego la evidencia (sugerencia didáctica 2).'
    },
    {
      id: 'ads7-11',
      title: 'Práctica B · Biblioteca municipal',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white border rounded-2xl p-5">
            <p class="font-bold text-slate-900">Caso</p>
            <p class="text-slate-700 mt-2">El socio solicita un libro. Si está disponible, se registra el préstamo por 7 días. Si lo devuelve con retraso, se calcula una multa. Los socios con multa pendiente no pueden pedir nuevos préstamos.</p>
          </div>
          <div class="bg-emerald-600 text-white rounded-xl p-4"><p>Cada pareja recibe un enfoque (C, E u O) y elabora en el cuaderno <strong>dos artefactos</strong> propios de ese enfoque.</p></div>
          <div class="grid md:grid-cols-3 gap-3 text-sm">
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-3"><strong>C:</strong> narrativa + flujograma o lista de formularios.</div>
            <div class="bg-sky-50 border border-sky-200 rounded-xl p-3"><strong>E:</strong> DFD de contexto o nivel 0 + una entrada del diccionario.</div>
            <div class="bg-violet-50 border border-violet-200 rounded-xl p-3"><strong>O:</strong> casos de uso con actores + una clase con atributos y operaciones.</div>
          </div>
        </div>
      `,
      notes: 'Parte B (18 min) + plenaria de A y B (8 min). Asignar C, E, O de forma rotativa entre parejas vecinas (sugerencia didáctica 3). En la plenaria, una pareja por enfoque muestra su producto.'
    },
    {
      id: 'ads7-12',
      title: 'Cierre del jueves',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-gradient-to-br from-slate-900 to-sky-900 text-white p-6 rounded-2xl">
            <p class="text-xs uppercase tracking-widest font-bold text-sky-300">Ticket de salida</p>
            <p class="text-xl font-bold mt-2">Escribe una ventaja y una limitación del enfoque que te tocó en la práctica B.</p>
          </div>
          <div class="flex gap-4 bg-white border-l-4 border-emerald-500 rounded-xl p-4"><span class="font-bold text-emerald-600">⏭️</span><p class="text-slate-800"><strong>Viernes 06/11:</strong> técnicas de recolección de datos y ficha grupal sobre un caso.</p></div>
        </div>
      `
    },
    {
      id: 'ads7-13',
      title: 'Viernes 06/11 · Recolección de datos',
      contentHtml: `
        <div class="space-y-7">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center text-white text-4xl shadow-lg">🗂️</div>
            <div>
              <p class="text-sm uppercase tracking-widest font-bold text-emerald-700">Análisis y Diseño de Sistemas · Unidad IV</p>
              <h2 class="text-3xl md:text-4xl font-bold text-slate-900">Técnicas de recolección de datos</h2>
              <p class="text-slate-500 mt-1">De dónde sale la información para analizar</p>
            </div>
          </div>
          <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-emerald-950">
            <p class="text-lg"><strong>Objetivo:</strong> seleccionar y planificar técnicas de recolección de datos para un caso, según la información que se necesita.</p>
          </div>
          <p class="text-sm text-slate-500">Viernes 06/11/2026 · 13:00–14:30 · Aula A-01 · Sección A</p>
        </div>
      `,
      notes: 'Inicio (5 min con la diap. 14): leer dos tickets de salida del jueves.'
    },
    {
      id: 'ads7-14',
      title: 'Pregunta de inicio',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-gradient-to-br from-slate-900 to-emerald-900 text-white p-6 rounded-2xl">
            <p class="text-xs uppercase tracking-widest font-bold text-emerald-300">Pregunta</p>
            <p class="text-xl md:text-2xl font-bold mt-2 leading-snug">Para dibujar el DFD de la Farmacia Santa Rita, ¿de dónde salieron los datos del proceso?</p>
          </div>
          <div class="grid md:grid-cols-4 gap-3 text-sm text-center font-bold">
            <div class="bg-white border rounded-xl p-3" data-reveal>Preguntar</div>
            <div class="bg-white border rounded-xl p-3" data-reveal>Preguntar a muchos</div>
            <div class="bg-white border rounded-xl p-3" data-reveal>Mirar</div>
            <div class="bg-white border rounded-xl p-3" data-reveal>Leer documentos</div>
          </div>
        </div>
      `,
      notes: 'Las cuatro tarjetas anticipan entrevista, cuestionario, observación y revisión documental.'
    },
    {
      id: 'ads7-15',
      title: 'Entrevista',
      contentHtml: `
        <div class="space-y-4">
          <div class="grid md:grid-cols-3 gap-3 text-sm">
            <div class="bg-white border rounded-xl p-3"><p class="font-bold text-emerald-800">Cerrada</p><p>Preguntas preestablecidas.</p></div>
            <div class="bg-white border rounded-xl p-3"><p class="font-bold text-emerald-800">Abierta</p><p>Sin agenda fija: explora el problema.</p></div>
            <div class="bg-white border rounded-xl p-3"><p class="font-bold text-emerald-800">Combinada</p><p>La más usada en la práctica.</p></div>
          </div>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-sky-50 border border-sky-200 rounded-xl p-3"><p class="font-bold">Pregunta abierta</p><p class="italic">¿Cómo organiza la agenda de la semana?</p></div>
            <div class="bg-sky-50 border border-sky-200 rounded-xl p-3"><p class="font-bold">Pregunta cerrada</p><p class="italic">¿Cuántas citas se reprograman por semana?</p></div>
          </div>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-3" data-reveal><strong>Aporta:</strong> experiencia, necesidades y problemas percibidos.</div>
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-3" data-reveal><strong>Cuidado:</strong> el informante usa jerga y omite lo que considera obvio.</div>
          </div>
          <p class="text-xs text-slate-500">Sommerville, <em>Ingeniería de software</em>, §4.5.2.</p>
        </div>
      `,
      notes: 'Teoría 1 (7 min). Preparación: objetivo, guion, cita acordada, registro (notas o grabación con permiso) y validación posterior con el entrevistado.'
    },
    {
      id: 'ads7-16',
      title: 'Cuestionario',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white border rounded-2xl p-5"><p class="text-slate-700">Conjunto de preguntas escritas, iguales para todos, que se responde sin el analista presente.</p></div>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-3" data-reveal><strong>Aporta:</strong> opiniones y datos comparables de muchas personas (escalas, opción múltiple).</div>
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-3" data-reveal><strong>Cuidado:</strong> baja tasa de respuesta; no permite repreguntar; una mala redacción sesga los resultados.</div>
          </div>
          <div class="bg-sky-50 border border-sky-200 rounded-lg p-3 text-sm text-sky-900"><strong>Ejemplo:</strong> «En el último mes, ¿cuántas veces tuvo que esperar más de 30 minutos para su cita? 0 · 1 · 2 · 3 o más».</div>
        </div>
      `,
      notes: 'Teoría 2 (4 min).'
    },
    {
      id: 'ads7-17',
      title: 'Observación y etnografía',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white border rounded-2xl p-5"><p class="text-slate-700">El analista mira cómo se realiza el trabajo en su lugar. En la <strong>etnografía</strong> se integra durante un tiempo al entorno de trabajo.</p></div>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-3" data-reveal><strong>Aporta:</strong> cómo se hace realmente el trabajo, tiempos y prácticas informales que nadie menciona.</div>
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-3" data-reveal><strong>Cuidado:</strong> quien es observado puede cambiar su conducta; requiere permiso y tiempo.</div>
          </div>
          <p class="text-xs text-slate-500">Sommerville, <em>Ingeniería de software</em>, §4.5.5.</p>
        </div>
      `,
      notes: 'Teoría 3 (4 min). Ejemplo: el manual dice que se confirma por teléfono, pero se observa que se confirma por mensaje solo a algunos pacientes.'
    },
    {
      id: 'ads7-18',
      title: 'Revisión documental',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white border rounded-2xl p-5"><p class="text-slate-700">Estudio de formularios, reportes, manuales, reglamentos y registros históricos. Si son muchos, se revisa una <strong>muestra</strong>.</p></div>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-3" data-reveal><strong>Aporta:</strong> reglas formales, formatos, volúmenes e historial.</div>
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-3" data-reveal><strong>Cuidado:</strong> los documentos pueden estar desactualizados respecto a la práctica real.</div>
          </div>
          <div class="bg-sky-50 border border-sky-200 rounded-lg p-3 text-sm text-sky-900">Conviene hacerla al inicio: prepara las entrevistas y la observación.</div>
        </div>
      `,
      notes: 'Teoría 4 (4 min).'
    },
    {
      id: 'ads7-19',
      title: 'Elegir y combinar',
      contentHtml: `
        <div class="space-y-4">
          <div class="overflow-x-auto"><table class="w-full text-sm border">
            <thead class="bg-emerald-50"><tr><th class="p-2 border text-left">Si necesito conocer…</th><th class="p-2 border text-left">Técnica principal</th></tr></thead>
            <tbody>
              <tr><td class="p-2 border">La experiencia y las necesidades de un usuario clave</td><td class="p-2 border">Entrevista</td></tr>
              <tr><td class="p-2 border">La opinión de muchos usuarios</td><td class="p-2 border">Cuestionario</td></tr>
              <tr><td class="p-2 border">Cómo se hace el trabajo en realidad</td><td class="p-2 border">Observación</td></tr>
              <tr><td class="p-2 border">Las reglas formales y los volúmenes</td><td class="p-2 border">Revisión documental</td></tr>
            </tbody>
          </table></div>
          <div class="bg-slate-900 text-white rounded-xl p-4"><p><strong>Triangulación:</strong> contrastar al menos dos técnicas sobre la misma necesidad de información.</p></div>
        </div>
      `,
      notes: 'Teoría 5 (3 min). Pressman §5.3 (pp. 108–113) añade la recabación colaborativa y los escenarios de uso; se mencionan como complemento.'
    },
    {
      id: 'ads7-20',
      title: 'Demostración · de sesgada a neutral',
      contentHtml: `
        <div class="space-y-3">
          <div class="overflow-x-auto"><table class="w-full text-sm border">
            <thead class="bg-slate-100"><tr><th class="p-2 border text-left">Pregunta sesgada</th><th class="p-2 border text-left">Problema</th><th class="p-2 border text-left">Pregunta neutral</th></tr></thead>
            <tbody>
              <tr><td class="p-2 border">¿No le parece que el sistema actual es muy lento?</td><td class="p-2 border" data-reveal>Induce la respuesta</td><td class="p-2 border" data-reveal>¿Cómo describiría el tiempo que tarda en registrar una cita?</td></tr>
              <tr><td class="p-2 border">¿Usted siempre confirma las citas por teléfono, verdad?</td><td class="p-2 border" data-reveal>Supone la práctica</td><td class="p-2 border" data-reveal>¿Cómo se confirman las citas?</td></tr>
              <tr><td class="p-2 border">¿Le gustaría un sistema moderno con aplicación móvil?</td><td class="p-2 border" data-reveal>Propone la solución</td><td class="p-2 border" data-reveal>¿Qué dificultades tienen los pacientes para pedir o cambiar una cita?</td></tr>
              <tr><td class="p-2 border">¿Cuántas citas pierde y por qué la recepción no lo controla?</td><td class="p-2 border" data-reveal>Doble pregunta y atribuye culpa</td><td class="p-2 border" data-reveal>¿Cuántas citas quedan sin atender en una semana normal?</td></tr>
            </tbody>
          </table></div>
        </div>
      `,
      notes: 'Demostración (8 min). Antes de revelar, pedir al grupo que identifique el problema de cada pregunta y proponga la versión neutral. Opción: juego de roles de 3 min (sugerencia didáctica 1).'
    },
    {
      id: 'ads7-21',
      title: 'Ficha grupal · organización',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-emerald-600 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-emerald-100">Ficha de trabajo grupal · formativa</p><p class="mt-1">Grupos de 3 o 4 integrantes. Una hoja propia por grupo, con los nombres de todos.</p></div>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-white border rounded-2xl p-4"><p class="font-bold">Redactor</p><p class="text-sm text-slate-700 mt-1">Escribe las respuestas acordadas.</p></div>
            <div class="bg-white border rounded-2xl p-4"><p class="font-bold">Revisor</p><p class="text-sm text-slate-700 mt-1">Comprueba que las preguntas sean neutrales.</p></div>
            <div class="bg-white border rounded-2xl p-4"><p class="font-bold">Vocero</p><p class="text-sm text-slate-700 mt-1">Presenta una parte en la plenaria.</p></div>
          </div>
        </div>
      `,
      notes: 'Encuadre (3 min). Ficha: 37 min. Criterios formativos (INSTRUMENTOS-FORMATIVOS-0pct.md, S7): vincula técnica con necesidad de información; formula preguntas neutrales; identifica fuente o participante; registra evidencia y limitaciones.'
    },
    {
      id: 'ads7-22',
      title: 'Ficha · caso Sonrisa del Lago',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white border rounded-2xl p-5">
            <p class="font-bold text-slate-900">Clínica Odontológica Sonrisa del Lago (caso ficticio)</p>
            <p class="text-slate-700 mt-2">Tres odontólogos, una recepcionista y una asistente. Las citas se anotan en una agenda de papel y por mensajes de teléfono. A veces llegan dos pacientes a la misma hora. El reglamento interno indica confirmar cada cita 24 horas antes, pero la recepcionista afirma que «no da tiempo». La directora quiere saber cuántas citas se pierden y por qué. Se planifica un sistema de agenda.</p>
          </div>
        </div>
      `,
      notes: 'La contradicción reglamento / recepcionista es intencional: motiva la triangulación de la parte 4 (sugerencia didáctica 2).'
    },
    {
      id: 'ads7-23',
      title: 'Ficha · partes 1 a 4',
      contentHtml: `
        <div class="space-y-3">
          <ol class="space-y-3 text-sm">
            <li class="bg-white border-l-4 border-emerald-500 rounded-xl p-3"><strong>1. Necesidades de información.</strong> Enumera cuatro cosas que el analista necesita saber (por ejemplo, cómo se registra hoy una cita).</li>
            <li class="bg-white border-l-4 border-emerald-500 rounded-xl p-3"><strong>2. Plan de recolección.</strong> Para cada necesidad, un cuadro con: necesidad · técnica · fuente o participante · evidencia que esperas obtener.</li>
            <li class="bg-white border-l-4 border-emerald-500 rounded-xl p-3"><strong>3. Guion breve.</strong> Cinco preguntas neutrales para entrevistar a la recepcionista (al menos dos abiertas y dos cerradas) y tres preguntas para un cuestionario a pacientes.</li>
            <li class="bg-white border-l-4 border-emerald-500 rounded-xl p-3"><strong>4. Contraste y limitaciones.</strong> ¿Qué dos técnicas usarías para comprobar si las citas se confirman 24 horas antes? Indica una limitación de cada una.</li>
          </ol>
        </div>
      `,
      notes: 'Referencia. Partes 1–2 (ejemplo): registro actual de citas → observación de la recepción + revisión de la agenda → flujo real y formato; reglas de confirmación → revisión del reglamento → regla formal; causas de pérdida de citas → entrevista a recepcionista y directora + cuestionario a pacientes → experiencia y percepción; volumen de citas perdidas → revisión de la agenda con muestreo de 4 semanas → dato cuantitativo. Parte 3: aceptar preguntas que no inducen, no suponen la práctica, no proponen la solución y tienen una sola idea. Parte 4: revisión documental (limitación: la agenda puede no registrar la confirmación) + observación (limitación: la recepcionista puede cambiar su conducta); la entrevista sola recoge solo la percepción.'
    },
    {
      id: 'ads7-24',
      title: 'Plenaria y cierre',
      contentHtml: `
        <div class="space-y-5">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white border rounded-2xl p-4"><p class="font-bold">Plenaria</p><ul class="list-disc list-inside text-sm text-slate-700 mt-2 space-y-1"><li>Un grupo presenta cada parte.</li><li>Cada grupo pasa su guion al grupo vecino, que mejora una pregunta.</li></ul></div>
            <div class="bg-emerald-600 text-white rounded-2xl p-4"><p class="font-bold">Idea final</p><p class="text-sm mt-2">Cada técnica aporta un tipo de evidencia; se elige por la información que falta y se combinan para contrastar.</p></div>
          </div>
          <div class="space-y-3">
            <div class="flex gap-4 bg-white border-l-4 border-sky-500 rounded-xl p-4"><span class="font-bold text-sky-600">S8</span><p class="text-slate-800"><strong>Jueves 12/11 y viernes 13/11:</strong> metodologías para el desarrollo de sistemas y criterios de selección.</p></div>
            <div class="flex gap-4 bg-white border-l-4 border-rose-500 rounded-xl p-4"><span class="font-bold text-rose-600">S9</span><p class="text-slate-800"><strong>Viernes 20/11:</strong> prueba escrita mixta de la Unidad IV · <strong>10 %</strong> del Corte II.</p></div>
          </div>
        </div>
      `,
      notes: 'Plenaria (10 min) y cierre (5 min). Revisión entre pares sin calificación (sugerencia didáctica 3).'
    },
    {
      id: 'ads7-25',
      title: 'Fuentes',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-slate-50 border border-slate-200 rounded-2xl p-5">
            <p class="font-bold text-slate-900">Para ampliar</p>
            <ul class="list-disc list-inside text-sm text-slate-700 mt-3 space-y-2">
              <li><strong>Pressman, R. S.</strong> (2010). <em>Ingeniería del software. Un enfoque práctico</em> (7.ª ed.). McGraw-Hill. §5.3 y §6.1.4; Apéndice 2.</li>
              <li><strong>Sommerville, I.</strong> (2011). <em>Ingeniería de software</em> (9.ª ed.). Pearson. §4.5: adquisición y análisis de requerimientos.</li>
              <li><strong>Kendall, K. y Kendall, J.</strong> (1997). <em>Análisis y diseño de sistemas</em>. Pearson Education.</li>
              <li><strong>Senn, J.</strong> (1992). <em>Análisis y diseño de sistemas de información</em>. McGraw-Hill.</li>
            </ul>
          </div>
          <p class="text-xs text-slate-400 text-center">Material adaptado con fines docentes; se citan las fuentes originales. Casos ficticios.</p>
        </div>
      `
    }
  ],
  tasks: [{
    id: 'ads7-t1',
    title: 'Ficha grupal: recolección de datos en un caso',
    description: 'Ficha de trabajo grupal en clase sobre la Clínica Odontológica Sonrisa del Lago: necesidades de información, plan de recolección, guion de preguntas neutrales y contraste de técnicas.',
    items: ['Parte 1: cuatro necesidades de información', 'Parte 2: plan de recolección', 'Parte 3: guion de preguntas', 'Parte 4: contraste y limitaciones'],
    due: '2026-11-06',
    corte: 2,
    weight: '0 % (formativa)',
    kind: 'tarea',
    slideId: 'ads7-21',
  }],
};
