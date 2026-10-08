import { Module } from '../../types';

export const SISTEMAS_I_MODULE_2: Module = {
  id: 'sis-mod-2',
  title: '2. Las Actividades de la Ingeniería de Software',
  description:
    'Semana 2 (lunes 28/09): las cinco actividades de la ingeniería de software — Proceso, Administración de Proyectos, Personas, Producto y Calidad — aplicadas a un caso real de Ciudad Ojeda y consolidadas en un mapa conceptual. Unidad I: Introducción a la Ingeniería de Software.',
  evaluation: '0% — Diagnóstica + mapa conceptual',
  slides: [
    {
      id: 'sis2-1',
      title: 'Sistemas I — Semana 2',
      contentHtml: `
        <div class="space-y-6">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center text-white text-3xl shadow-lg">⚙️</div>
            <div>
              <h2 class="text-3xl font-bold text-slate-900">Las cinco actividades de la Ingeniería de Software</h2>
              <p class="text-slate-500">Ing. Luis Felipe Moreno Oropeza · Sistemas I · Unidad I: Introducción a la Ingeniería de Software</p>
            </div>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-3"><p class="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Fecha</p><p class="font-bold text-slate-800 text-sm">Lunes 28/09/2026</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-3"><p class="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Hora</p><p class="font-bold text-slate-800 text-sm">16:00 – 18:15</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-3"><p class="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Aula</p><p class="font-bold text-slate-800 text-sm">A-06 · Sección A</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-3"><p class="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Duración</p><p class="font-bold text-slate-800 text-sm">3 h académicas</p></div>
          </div>

          <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-900">
            🎯 <strong>Objetivo de hoy:</strong> conocer el <strong>componente de aplicación</strong> de la ingeniería de software.
            La semana pasada vimos <em>qué es</em> la IS; hoy vemos <em>qué hace</em> un ingeniero de software.
          </div>

          <div class="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm text-slate-700">
            🧭 <strong>Ruta de la clase:</strong> teoría breve → caso real de una farmacia de Ciudad Ojeda → mapa conceptual individual.
          </div>
        </div>
      `,
      notes: 'Llegar 10 min antes. Materiales: proyector, pizarra, hojas para la diagnóstica y para el mapa conceptual, lista de cotejo. No re-explicar la definición de IS, la crisis, los atributos ni el campo de aplicación del 21/09.'
    },
    {
      id: 'sis2-2',
      title: 'Qué veremos hoy',
      contentHtml: `
        <div class="space-y-5">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-4">
              <h4 class="font-bold text-emerald-900">🎯 Las cinco actividades</h4>
              <ul class="list-disc list-inside text-sm text-emerald-800 mt-2 space-y-1">
                <li><strong>Proceso</strong> — con qué secuencia se construye</li>
                <li><strong>Administración de Proyectos</strong> — costo, fecha y riesgos</li>
                <li><strong>Personas</strong> — quiénes participan y con qué roles</li>
                <li><strong>Producto</strong> — qué se entrega exactamente</li>
                <li><strong>Calidad</strong> — cómo sabemos que es lo pedido</li>
              </ul>
            </div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <h4 class="font-bold text-slate-700">🛠️ Qué harás tú</h4>
              <ul class="list-disc list-inside text-sm text-slate-600 mt-2 space-y-1">
                <li>Resolver una prueba diagnóstica (no califica)</li>
                <li>Aplicar las cinco actividades a un caso real, en equipo</li>
                <li>Construir tu propio mapa conceptual</li>
              </ul>
            </div>
          </div>

          <div class="bg-slate-900 text-white rounded-xl p-4">
            <p class="text-[11px] uppercase tracking-widest font-bold text-slate-300 mb-2">Ruta de la clase</p>
            <div class="flex h-8 rounded-lg overflow-hidden text-[11px] font-bold text-white">
              <div class="bg-blue-600 flex items-center justify-center" style="width: 26%">Teoría breve</div>
              <div class="bg-emerald-600 flex items-center justify-center" style="width: 59%">Caso real en equipo + mapa conceptual</div>
              <div class="bg-slate-600 flex items-center justify-center" style="width: 15%">Diagnóstica y cierre</div>
            </div>
          </div>

          <div class="bg-rose-50 border border-rose-200 rounded-lg p-3 text-sm text-rose-800">
            📌 <strong>Lunes 12/10 → 10 % del Corte I</strong> (prueba escrita, Unidad I). El mapa conceptual de hoy te sirve para prepararla.
          </div>
        </div>
      `,
      notes: 'No mostrar la distribución porcentual del PGA: aquí la barra es solo una guía visual de la clase de hoy.'
    },
    {
      id: 'sis2-3',
      title: 'Prueba diagnóstica (0 %)',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-blue-600 text-white rounded-xl p-4 flex justify-between items-center">
            <div>
              <h4 class="font-bold text-lg">🩺 Prueba diagnóstica</h4>
              <p class="font-bold text-xs">12 minutos · en hoja · sin materiales · NO califica</p>
            </div>
            <span class="text-3xl">📝</span>
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white border rounded-xl p-4 shadow-sm">
              <h5 class="font-bold text-slate-700 mb-2">Modalidad</h5>
              <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>6 ítems de opción múltiple</li>
                <li>1 ítem de verdadero o falso</li>
                <li>1 ítem abierto (3 líneas)</li>
              </ul>
            </div>
            <div class="bg-white border rounded-xl p-4 shadow-sm">
              <h5 class="font-bold text-slate-700 mb-2">¿Para qué sirve?</h5>
              <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Para saber qué recordamos de la clase del 21/09</li>
                <li>Para que el docente refuerce lo que haga falta antes del 12/10</li>
                <li>Para que tú sepas qué repasar</li>
              </ul>
            </div>
          </div>

          <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800">
            ⚠️ <strong>No califica:</strong> no se asienta ninguna nota. Responde con sinceridad: no hay respuestas que quiten puntos.
          </div>
        </div>
      `,
      notes: 'Se aplica hoy porque el PGA la fecha el 28/09/2026 y Sistemas I no tiene clase el jueves 24/09. Tabular en el acto e insumos: registro de respuestas (cualitativo) y registro anecdótico. Devolver retroalimentación el 05/10.'
    },
    {
      id: 'sis2-4',
      title: '¿Qué hace realmente un ingeniero de software?',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-5 rounded-2xl shadow-lg">
            <p class="text-xs uppercase tracking-widest font-bold mb-2">Sommerville, cap. 1</p>
            <p class="text-lg leading-relaxed">
              La ingeniería de software es una disciplina de ingeniería que se interesa por
              <strong>todos los aspectos de la producción de software</strong>…
            </p>
            <p class="text-sm text-blue-100 mt-2">…no solo por los procesos técnicos: también la administración del proyecto, las personas y la calidad.</p>
          </div>

          <div class="space-y-2">
            <div class="flex gap-3 items-center bg-white border-l-4 border-blue-500 rounded-lg p-3"><span class="font-bold text-blue-600 w-6">1</span><p class="text-sm text-gray-700"><strong>Proceso:</strong> ¿con qué secuencia se construye el software?</p></div>
            <div class="flex gap-3 items-center bg-white border-l-4 border-indigo-500 rounded-lg p-3"><span class="font-bold text-indigo-600 w-6">2</span><p class="text-sm text-gray-700"><strong>Proyectos:</strong> ¿cuánto cuesta, cuándo se entrega y qué riesgos hay?</p></div>
            <div class="flex gap-3 items-center bg-white border-l-4 border-violet-500 rounded-lg p-3"><span class="font-bold text-violet-600 w-6">3</span><p class="text-sm text-gray-700"><strong>Personas:</strong> ¿quiénes participan, con qué roles y qué competencias?</p></div>
            <div class="flex gap-3 items-center bg-white border-l-4 border-pink-500 rounded-lg p-3"><span class="font-bold text-pink-600 w-6">4</span><p class="text-sm text-gray-700"><strong>Producto:</strong> ¿qué se entrega exactamente y a quién?</p></div>
            <div class="flex gap-3 items-center bg-white border-l-4 border-emerald-500 rounded-lg p-3"><span class="font-bold text-emerald-600 w-6">5</span><p class="text-sm text-gray-700"><strong>Calidad:</strong> ¿cómo sabemos que es lo que se pidió y que funciona?</p></div>
          </div>

          <p class="text-xs text-gray-500 text-center">Cada actividad responde una pregunta distinta. Por eso ninguna se puede eliminar: solo se traslada.</p>
        </div>
      `,
      notes: 'Punto de partida: la IS abarca todos los aspectos de la producción. No confundir "proceso" con "IS completa".'
    },
    {
      id: 'sis2-5',
      title: 'El tablero de las cinco actividades',
      contentHtml: `
        <div class="space-y-5">
          <p class="text-gray-600">Este es el esqueleto de toda la clase. Se dibuja vacío en la pizarra y se va llenando; al final cada estudiante hace su versión en el mapa conceptual.</p>

          <div class="bg-white p-4 rounded-xl border shadow-sm">
            <div class="mermaid">
              graph TD
                IS["INGENIERÍA DE SOFTWARE"] --> P["1. Proceso"]
                IS --> PJ["2. Proyectos"]
                IS --> PE["3. Personas"]
                IS --> PO["4. Producto"]
                IS --> C["5. Calidad"]
                style IS fill:#0f172a,stroke:#0f172a,color:#fff
                style P fill:#dbeafe,stroke:#3b82f6
                style PJ fill:#e0e7ff,stroke:#6366f1
                style PE fill:#ede9fe,stroke:#8b5cf6
                style PO fill:#fce7f3,stroke:#ec4899
                style C fill:#d1fae5,stroke:#10b981
            </div>
          </div>
        </div>
      `,
      notes: 'Dejar el tablero en la pizarra durante toda la sesión. Es el ancla visual que evita divagar.'
    },
    {
      id: 'sis2-6',
      title: 'Actividad 1 · Proceso',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p class="text-sm text-blue-900"><strong>Proceso = conjunto de actividades, acciones y tareas</strong> (Pressman, cap. 1 §1.4).</p>
          </div>

          <div class="grid md:grid-cols-3 gap-3">
            <div class="bg-white border-2 border-blue-100 rounded-xl p-3"><div class="text-2xl">🎯</div><h4 class="font-bold text-blue-900 text-sm">Actividad</h4><p class="text-xs text-gray-600 mt-1">Objetivo amplio, común a cualquier proyecto. Ej.: comunicarse con el cliente.</p></div>
            <div class="bg-white border-2 border-indigo-100 rounded-xl p-3"><div class="text-2xl">📦</div><h4 class="font-bold text-indigo-900 text-sm">Acción</h4><p class="text-xs text-gray-600 mt-1">Conjunto de tareas que produce algo importante. Ej.: diseñar la arquitectura.</p></div>
            <div class="bg-white border-2 border-violet-100 rounded-xl p-3"><div class="text-2xl">🔧</div><h4 class="font-bold text-violet-900 text-sm">Tarea</h4><p class="text-xs text-gray-600 mt-1">Objetivo pequeño y definido. Ej.: una prueba unitaria.</p></div>
          </div>

          <div>
            <p class="text-xs font-bold text-slate-500 mb-2">5 ACTIVIDADES ESTRUCTURALES — las mismas en un proyecto pequeño y en uno enorme</p>
            <div class="flex flex-wrap gap-2 text-xs font-bold">
              <span class="bg-blue-100 text-blue-900 border border-blue-200 rounded-full px-3 py-1">1 · Comunicación</span>
              <span class="bg-blue-100 text-blue-900 border border-blue-200 rounded-full px-3 py-1">2 · Planeación</span>
              <span class="bg-indigo-100 text-indigo-900 border border-indigo-200 rounded-full px-3 py-1">3 · Modelado</span>
              <span class="bg-violet-100 text-violet-900 border border-violet-200 rounded-full px-3 py-1">4 · Construcción</span>
              <span class="bg-pink-100 text-pink-900 border border-pink-200 rounded-full px-3 py-1">5 · Despliegue</span>
            </div>
            <p class="text-xs text-gray-500 mt-2">Se aplican <strong>iterativamente</strong>: cada iteración produce un incremento del software.</p>
          </div>

          <div class="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-600">
            🕶️ <strong>Actividades sombrilla</strong> (a lo largo de todo el proceso): seguimiento y control del proyecto · administración del riesgo · aseguramiento de la calidad · revisiones técnicas · medición · administración de la configuración · administración de la reutilización · producción del producto del trabajo.
          </div>
        </div>
      `,
      notes: 'Insistir en la diferencia actividad/acción/tarea: es lo que más se confunde. No re-explicar las capas IS del 21/09.'
    },
    {
      id: 'sis2-7',
      title: 'Actividad 2 · Administración de Proyectos',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-4 text-sm text-indigo-900">
            📋 La planeación crea <strong>el mapa del proyecto</strong>: tareas técnicas, riesgos probables, recursos, productos del trabajo y programación (Pressman, p. 13).
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
            <div class="bg-white border-2 border-indigo-100 rounded-xl p-3"><div class="text-2xl">🎯</div><p class="text-xs font-bold text-indigo-900 mt-1">Alcance</p></div>
            <div class="bg-white border-2 border-indigo-100 rounded-xl p-3"><div class="text-2xl">⏱️</div><p class="text-xs font-bold text-indigo-900 mt-1">Tiempo</p></div>
            <div class="bg-white border-2 border-indigo-100 rounded-xl p-3"><div class="text-2xl">💰</div><p class="text-xs font-bold text-indigo-900 mt-1">Presupuesto</p></div>
            <div class="bg-white border-2 border-indigo-100 rounded-xl p-3"><div class="text-2xl">⭐</div><p class="text-xs font-bold text-indigo-900 mt-1">Calidad</p></div>
          </div>
          <p class="text-sm text-gray-600 text-center">Si uno se mueve, se mueven los demás. <strong>El plan del proyecto es un producto del trabajo</strong>, no un documento decorativo.</p>

          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-4">
              <p class="text-3xl font-bold text-rose-700">60 % / 40 %</p>
              <p class="text-xs text-rose-800 mt-1">Aproximadamente el 60 % del costo del software es desarrollo y el 40 % pruebas (Sommerville, cap. 1).</p>
            </div>
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p class="text-3xl font-bold text-amber-700">Evolución &gt; Desarrollo</p>
              <p class="text-xs text-amber-800 mt-1">En el software a la medida, los costos de evolución superan con frecuencia los de desarrollo.</p>
            </div>
          </div>
        </div>
      `,
      notes: 'Estos dos datos son el gancho del caso: por eso la Ing. Pérez no puede pedir "que el sistema sepa de todo" con presupuesto cerrado.'
    },
    {
      id: 'sis2-8',
      title: 'Actividad 3 · Personas',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-gradient-to-br from-violet-600 to-purple-700 text-white p-5 rounded-2xl">
            <p class="text-sm leading-relaxed">
              El software <strong>lo usan y lo cambian personas, además de sus desarrolladores</strong> (Sommerville, p. 7).
              Por eso hay que gestionar a los <strong>participantes</strong>.
            </p>
          </div>

          <div>
            <p class="text-xs font-bold text-slate-500 mb-2">PARTICIPANTES DEL PROYECTO (STAKEHOLDERS)</p>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-center text-xs font-bold">
              <div class="bg-violet-50 border border-violet-200 rounded-lg p-2 text-violet-900">Cliente / dueño</div>
              <div class="bg-violet-50 border border-violet-200 rounded-lg p-2 text-violet-900">Usuario final</div>
              <div class="bg-violet-50 border border-violet-200 rounded-lg p-2 text-violet-900">Ingenieros de software</div>
              <div class="bg-violet-50 border border-violet-200 rounded-lg p-2 text-violet-900">Personal de apoyo</div>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-white border rounded-xl p-4 shadow-sm">
              <h5 class="font-bold text-slate-700 mb-1">👥 Equipos y roles</h5>
              <p class="text-xs text-gray-600">Quién hace qué · curva de aprendizaje · rotación · motivación.</p>
            </div>
            <div class="bg-white border rounded-xl p-4 shadow-sm">
              <h5 class="font-bold text-slate-700 mb-1">🎓 Capacitación</h5>
              <p class="text-xs text-gray-600">Un sistema que nadie sabe usar no se despliega: se abandona.</p>
            </div>
            <div class="bg-white border rounded-xl p-4 shadow-sm">
              <h5 class="font-bold text-slate-700 mb-1">⚖️ Ética profesional</h5>
              <p class="text-xs text-gray-600">Conflictos de interés, publicidad engañosa, seguridad y datos de los usuarios.</p>
            </div>
            <div class="bg-white border rounded-xl p-4 shadow-sm">
              <h5 class="font-bold text-slate-700 mb-1">🗣️ Comunicación</h5>
              <p class="text-xs text-gray-600">El cliente muchas veces no sabe expresar lo que necesita: hay que ayudarlo a decirlo.</p>
            </div>
          </div>

          <div class="bg-violet-50 border border-violet-200 rounded-lg p-3 text-sm text-violet-900">
            ❓ <strong>Para discutir:</strong> ¿qué pasa en un proyecto cuando los usuarios no participan ni se capacitan?
          </div>
        </div>
      `,
      notes: 'Recordar: "stakeholder" es el término técnico, pero explique siempre "participantes". No dejar la columna de Personas con cosas técnicas.'
    },
    {
      id: 'sis2-9',
      title: 'Actividad 4 · Producto',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-pink-50 border border-pink-200 rounded-xl p-4 text-sm text-pink-900">
            📦 Un sistema desarrollado profesionalmente <strong>es más que un programa</strong>:
            programas separados + archivos de configuración + documentación del sistema y del usuario (Sommerville, p. 6).
          </div>

          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-white border-2 border-blue-100 rounded-xl p-4">
              <h4 class="font-bold text-blue-900 text-sm">🏷️ Genérico</h4>
              <p class="text-xs text-gray-600 mt-1">Lo produce una organización y se vende en el mercado. Quien lo hace controla la especificación.</p>
              <p class="text-[11px] text-gray-400 mt-2">Ej.: bases de datos, procesadores de texto, ERP.</p>
            </div>
            <div class="bg-white border-2 border-violet-100 rounded-xl p-4">
              <h4 class="font-bold text-violet-900 text-sm">🎯 A la medida</h4>
              <p class="text-xs text-gray-600 mt-1">Para un cliente particular. Quien <strong>compra</strong> controla la especificación.</p>
              <p class="text-[11px] text-gray-400 mt-2">Ej.: control de tráfico aéreo, control industrial.</p>
            </div>
            <div class="bg-white border-2 border-pink-100 rounded-xl p-4">
              <h4 class="font-bold text-pink-900 text-sm">🔀 Híbrido (ERP)</h4>
              <p class="text-xs text-gray-600 mt-1">Un sistema grande y complejo se adapta a la empresa con sus reglas y procesos.</p>
              <p class="text-[11px] text-gray-400 mt-2">Ej.: SAP. ← <strong>El caso de hoy está aquí.</strong></p>
            </div>
          </div>

          <div class="bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm text-slate-700">
            🔁 El <strong>producto</strong> de la actividad 4 es lo que se entrega; la <strong>calidad</strong> de la actividad 5 lo verifica. Sin documentación ni datos migrados, el producto está incompleto.
          </div>
        </div>
      `,
      notes: 'Enganchar con la pregunta 1 de la apertura: un sistema que funciona pero nadie documenta sigue siendo programa, no producto.'
    },
    {
      id: 'sis2-10',
      title: 'Actividad 5 · Calidad',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-sm text-emerald-900">
            🔎 Ya conoces los atributos de calidad del 21/09. Lo que falta responder es: <strong>¿en qué momentos del proyecto se verifica la calidad?</strong>
          </div>

          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-white border-2 border-emerald-100 rounded-xl p-4">
              <div class="text-3xl">🔍</div>
              <h4 class="font-bold text-emerald-900 text-sm mt-1">En el proceso</h4>
              <p class="text-xs text-gray-600 mt-1">Revisiones técnicas y auditorías: detectar el error antes de que se propague.</p>
            </div>
            <div class="bg-white border-2 border-emerald-100 rounded-xl p-4">
              <div class="text-3xl">🧪</div>
              <h4 class="font-bold text-emerald-900 text-sm mt-1">En el producto</h4>
              <p class="text-xs text-gray-600 mt-1">Pruebas: el sistema hace lo especificado y lo hace bien.</p>
            </div>
            <div class="bg-white border-2 border-emerald-100 rounded-xl p-4">
              <div class="text-3xl">🔁</div>
              <h4 class="font-bold text-emerald-900 text-sm mt-1">En la evolución</h4>
              <p class="text-xs text-gray-600 mt-1">Mantenimiento: el cambio no rompe lo que ya funcionaba.</p>
            </div>
          </div>

          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 text-sm">
            La calidad no es solo "que funcione": incluye el <strong>comportamiento en ejecución</strong> y la
            <strong>estructura y organización de los programas y la documentación</strong> (Sommerville, p. 7).
          </div>
        </div>
      `,
      notes: 'Un minuto de debate: ¿por qué la calidad se decide en el proceso si el producto todavía no existe?'
    },
    {
      id: 'sis2-11',
      title: 'Las actividades no son cajas sueltas',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-white p-4 rounded-xl border shadow-sm">
            <div class="mermaid">
              graph LR
                PJ["2. Proyectos"] -->|costea y calendariza| P["1. Proceso"]
                PE["3. Personas"] -->|ejecuta| P
                P -->|produce| PO["4. Producto"]
                C["5. Calidad"] -->|vigila proceso y producto| P
                style P fill:#dbeafe,stroke:#3b82f6
                style PJ fill:#e0e7ff,stroke:#6366f1
                style PE fill:#ede9fe,stroke:#8b5cf6
                style PO fill:#fce7f3,stroke:#ec4899
                style C fill:#d1fae5,stroke:#10b981
            </div>
          </div>

          <div class="space-y-2 text-sm">
            <div class="bg-rose-50 border-l-4 border-rose-500 rounded-lg p-3 text-rose-900">❌ <strong>El proceso sin personas no se ejecuta.</strong></div>
            <div class="bg-rose-50 border-l-4 border-rose-500 rounded-lg p-3 text-rose-900">❌ <strong>El producto sin calidad no se entrega.</strong></div>
            <div class="bg-rose-50 border-l-4 border-rose-500 rounded-lg p-3 text-rose-900">❌ <strong>El proceso sin proyectos se entrega tarde y fuera de presupuesto.</strong></div>
            <div class="bg-emerald-50 border-l-4 border-emerald-500 rounded-lg p-3 text-emerald-900">✅ <strong>Quitar una actividad no ahorra trabajo: lo traslada o lo elimina.</strong></div>
          </div>
        </div>
      `,
      notes: 'Esta es la frase de cierre conceptual antes del caso. Es también la pregunta que se hará a cada equipo en la plenaria.'
    },
    {
      id: 'sis2-12',
      title: 'Caso: Farmacia San Rafael',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-slate-900 text-white rounded-xl p-5">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-2xl">🏪</span>
              <h4 class="font-bold text-lg">Ciudad Ojeda · 18 años en el mercado</h4>
            </div>
            <p class="text-sm leading-relaxed text-slate-200">
              Vende <strong>1.200 referencias</strong> (medicamentos, higiene, cosméticos, víveres) y atiende
              <strong>900 clientes por semana</strong>. Hoy todo se anota en un cuaderno y en una planilla compartida de Excel.
              Trabajan <strong>3 personas en el mostrador</strong>, un vendedor y un administrador.
            </p>
            <p class="text-sm leading-relaxed text-slate-200 mt-2">
              La semana pasada se dañó el computador: se perdieron <strong>3 días de ventas</strong> y el control de
              <strong>40 productos</strong> por agotarse. La competencia de la esquina ya tiene sistema y ofrece crédito.
            </p>
          </div>

          <div class="bg-amber-50 border-2 border-amber-200 rounded-xl p-4">
            <p class="text-sm text-amber-900">
              La <strong>Ing. Pérez</strong> quiere "un sistema sencillo y rápido" con impresión de recibos y control de stock mínimo,
              y lo necesita <strong>funcionando antes del 30 de octubre</strong>: presupuesto aprobado, <strong>no ampliable</strong>.
              Dos de los tres empleados nunca han usado una computadora. Y su requerimiento, textual, es:
            </p>
            <p class="text-center font-bold text-amber-800 mt-2">"Quiero que el sistema sepa de todo lo de la farmacia."</p>
          </div>

          <div class="grid grid-cols-3 gap-3 text-center">
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-3"><p class="text-2xl font-bold text-rose-700">3 días</p><p class="text-[11px] text-rose-700">de ventas perdidas</p></div>
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-3"><p class="text-2xl font-bold text-amber-700">30/10</p><p class="text-[11px] text-amber-700">fecha inamovible</p></div>
            <div class="bg-slate-100 border border-slate-300 rounded-xl p-3"><p class="text-2xl font-bold text-slate-700">1 mes</p><p class="text-[11px] text-slate-600">de presupuesto cerrado</p></div>
          </div>
        </div>
      `,
      notes: 'Leer la escena en voz alta (≈60 s). No imprimir: se proyecta y se dicta. Los datos del numeral a)–e) van en la diapositiva siguiente.'
    },
    {
      id: 'sis2-13',
      title: 'Datos complementarios del caso',
      contentHtml: `
        <div class="space-y-3">
          <div class="flex gap-3 bg-white border-l-4 border-blue-500 rounded-lg p-3"><span class="font-bold text-blue-600 w-6">a)</span><p class="text-sm text-gray-700">La competencia ya tiene sistema y ofrece <strong>venta a crédito</strong>; la farmacia todavía no.</p></div>
          <div class="flex gap-3 bg-white border-l-4 border-indigo-500 rounded-lg p-3"><span class="font-bold text-indigo-600 w-6">b)</span><p class="text-sm text-gray-700">Apenas entregado el sistema, la Ing. Pérez pidió <strong>tres cosas nuevas</strong>: ventas a crédito, avisos por WhatsApp y reportes para la SUNDAES.</p></div>
          <div class="flex gap-3 bg-white border-l-4 border-violet-500 rounded-lg p-3"><span class="font-bold text-violet-600 w-6">c)</span><p class="text-sm text-gray-700">El presupuesto aprobado <strong>no cubre</strong> capacitación, ni migración de los datos históricos, ni soporte pos-venta.</p></div>
          <div class="flex gap-3 bg-white border-l-4 border-pink-500 rounded-lg p-3"><span class="font-bold text-pink-600 w-6">d)</span><p class="text-sm text-gray-700">El cuaderno y la planilla se usan <strong>en paralelo</strong>; nadie decide cuál es la fuente oficial.</p></div>
          <div class="flex gap-3 bg-white border-l-4 border-emerald-500 rounded-lg p-3"><span class="font-bold text-emerald-600 w-6">e)</span><p class="text-sm text-gray-700">La Ing. Pérez es quien <strong>paga</strong>, pero quien decide el día a día en el mostrador es la <strong>supervisora</strong>.</p></div>

          <div class="bg-rose-50 border border-rose-200 rounded-lg p-3 text-sm text-rose-800">
            🔍 <strong>El inciso b) es evolución, no desarrollo.</strong> ¿Por qué suele ser la parte más cara del proyecto?
          </div>
        </div>
      `,
      notes: 'Proyectar y leer los cinco datos. El inciso b) conecta con la evidencia de Sommerville: evolución > desarrollo.'
    },
    {
      id: 'sis2-14',
      title: 'Taller en equipos: un rol por actividad',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-blue-600 text-white rounded-xl p-4 flex justify-between items-center">
            <div>
              <h4 class="font-bold text-lg">🛠️ Tablero de cinco actividades</h4>
              <p class="font-bold text-xs">Equipos de 5 · 35 minutos · reloj visible</p>
            </div>
            <span class="text-3xl">⏱️</span>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-5 gap-2 text-center">
            <div class="bg-blue-50 border-2 border-blue-200 rounded-lg p-2"><p class="text-lg">🔁</p><p class="text-[11px] font-bold text-blue-900">Rol 1 · Proceso</p></div>
            <div class="bg-indigo-50 border-2 border-indigo-200 rounded-lg p-2"><p class="text-lg">📋</p><p class="text-[11px] font-bold text-indigo-900">Rol 2 · Proyectos</p></div>
            <div class="bg-violet-50 border-2 border-violet-200 rounded-lg p-2"><p class="text-lg">👥</p><p class="text-[11px] font-bold text-violet-900">Rol 3 · Personas</p></div>
            <div class="bg-pink-50 border-2 border-pink-200 rounded-lg p-2"><p class="text-lg">📦</p><p class="text-[11px] font-bold text-pink-900">Rol 4 · Producto</p></div>
            <div class="bg-emerald-50 border-2 border-emerald-200 rounded-lg p-2"><p class="text-lg">⭐</p><p class="text-[11px] font-bold text-emerald-900">Rol 5 · Calidad</p></div>
          </div>

          <ol class="space-y-2 text-sm">
            <li class="bg-white border rounded-lg p-3"><strong>1.</strong> Cada rol llena <strong>su columna</strong> con <strong>2 hechos del caso</strong> (con dato o cita textual).</li>
            <li class="bg-white border rounded-lg p-3"><strong>2.</strong> Cada columna recibe <strong>1 riesgo</strong> de esa actividad.</li>
            <li class="bg-white border rounded-lg p-3"><strong>3.</strong> Unan las columnas con <strong>2 flechas rotuladas</strong> entre actividades.</li>
            <li class="bg-amber-50 border border-amber-200 rounded-lg p-3"><strong>Plenaria (12 min):</strong> el <strong>vocero</strong> expone una actividad y responde: <em>¿qué pasaría con este proyecto si se eliminara <strong>su</strong> actividad?</em></li>
          </ol>

          <div class="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-600">
            👨‍🏫 Mientras trabajan, el docente pasa por los equipos: <strong>pregunten sus dudas cuando las tengan</strong>. La actividad es formativa: no califica.
          </div>
        </div>
      `,
      notes: 'Formar los equipos ANTES de que empiece el bloque (2 min). Avisos de reloj a los 15 y a los 5 min. Si se atascan, proyectar una columna ya resuelta y preguntar qué falta.'
    },
    {
      id: 'sis2-15',
      title: 'Actividad en clase: mapa conceptual (0 %)',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-slate-900 text-white rounded-xl p-4 flex justify-between items-center">
            <div>
              <h4 class="font-bold text-lg">🗺️ Mapa conceptual de las actividades de la IS</h4>
              <p class="font-bold text-xs">Individual · 15 minutos · en hoja · 0 %</p>
            </div>
            <span class="text-3xl">✍️</span>
          </div>

          <div class="bg-white border rounded-xl p-4">
            <p class="text-xs font-bold text-slate-500 mb-2">CÓMO SE CONSTRUYE</p>
            <ol class="space-y-2 text-sm">
              <li class="flex gap-2"><span class="font-bold text-blue-600">1.</span> Nodo central: <strong>Ingeniería de software</strong>.</li>
              <li class="flex gap-2"><span class="font-bold text-blue-600">2.</span> Cinco ramas: Proceso · Proyectos · Personas · Producto · Calidad.</li>
              <li class="flex gap-2"><span class="font-bold text-blue-600">3.</span> En cada rama: <strong>2 conceptos clave</strong> + <strong>1 ejemplo del caso</strong>.</li>
              <li class="flex gap-2"><span class="font-bold text-blue-600">4.</span> Al menos <strong>2 relaciones</strong> dibujadas y <strong>rotuladas</strong>.</li>
            </ol>
          </div>

          <div class="bg-indigo-50 border border-indigo-200 rounded-lg p-3 text-sm text-indigo-900">
            📊 <strong>No califica (0 %).</strong> Tu hoja se revisa en clase con una lista de cotejo y
            <strong>se devuelve corregida la semana del 05/10</strong>.
          </div>

          <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800">
            🎯 Esto es <strong>insumo directo de la prueba del 12/10</strong>. Escriban con letra legible: no se entrega por SAIA, se revisa en clase.
          </div>
        </div>
      `,
      notes: 'Criterios de la lista: 5 actividades correctas · 2 conceptos por rama · 2 relaciones rotuladas · 1 ejemplo por rama · legibilidad · entrega en el tiempo.'
    },
    {
      id: 'sis2-16',
      title: 'Cierre y tarea',
      contentHtml: `
        <div class="space-y-5">
          <div>
            <h3 class="text-xl font-bold text-slate-900">Preguntas de salida</h3>
            <div class="space-y-2">
              <div class="flex gap-3 bg-white border-l-4 border-blue-500 rounded-lg p-3"><span class="font-bold text-blue-600">1</span><p class="text-sm text-gray-700">¿Cuáles son las cinco actividades de la IS y qué problema resuelve cada una?</p></div>
              <div class="flex gap-3 bg-white border-l-4 border-indigo-500 rounded-lg p-3"><span class="font-bold text-indigo-600">2</span><p class="text-sm text-gray-700">¿Qué diferencia hay entre una <strong>actividad</strong> y una <strong>tarea</strong> dentro del proceso?</p></div>
              <div class="flex gap-3 bg-white border-l-4 border-violet-500 rounded-lg p-3"><span class="font-bold text-violet-600">3</span><p class="text-sm text-gray-700">En el caso de hoy, ¿cuál de las cinco actividades está <strong>más amenazada</strong> y con qué evidencia?</p></div>
              <div class="flex gap-3 bg-white border-l-4 border-emerald-500 rounded-lg p-3"><span class="font-bold text-emerald-600">4</span><p class="text-sm text-gray-700">¿Por qué la calidad no se reduce a "que el programa corra"?</p></div>
            </div>
          </div>

          <div class="bg-blue-600 text-white rounded-xl p-4 flex items-center gap-4">
            <span class="text-3xl">📚</span>
            <div>
              <h4 class="font-bold">Tarea</h4>
              <p class="text-sm">Un negocio de Ciudad Ojeda y su actividad más crítica, en una página, con 2 hechos del negocio. Es la semilla del análisis de caso del 05/10.</p>
            </div>
          </div>

          <div class="bg-slate-50 border rounded-xl p-4">
            <h4 class="font-bold text-slate-800">Próxima sesión · lunes 05/10</h4>
            <p class="text-sm text-gray-600 mt-1">Profundización de las actividades + <strong>análisis de caso de una empresa</strong> (ficha individual, 0 %).</p>
          </div>
        </div>
      `,
      notes: 'Las tres primeras preguntas también sirven como retroalimentación rápida antes del 12/10.'
    },
    {
      id: 'sis2-17',
      title: 'Fuentes',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm space-y-2">
            <p class="font-bold text-slate-800">Fuentes de esta sesión</p>
            <ul class="list-disc list-inside text-gray-600 space-y-1">
              <li><strong>Programa analítico de SISTEMAS I</strong>, Unidad I (objetivos específicos y contenidos oficiales).</li>
              <li><strong>Pressman, R.</strong> — <em>Ingeniería del Software: un enfoque práctico</em>, cap. 1 §1.4 "El proceso del software" (pp. 12–15).</li>
              <li><strong>Sommerville, I.</strong> — <em>Ingeniería de Software</em>, cap. 1 §1.1 "Desarrollo de software profesional" (pp. 5–8).</li>
              <li><strong>SWEBOK v4.0</strong>, IEEE Computer Society (2024) — marco transversal de la disciplina.</li>
              <li><strong>Plan General de la Asignatura 2026-2</strong>: objetivo, contenidos y evaluación de la semana.</li>
            </ul>
          </div>
          <p class="text-xs text-gray-400 text-center">Material adaptado con fines docentes; se citan las fuentes originales.</p>
        </div>
      `,
      notes: 'Proyectar durante las preguntas de cierre.'
    }
  ]
};
