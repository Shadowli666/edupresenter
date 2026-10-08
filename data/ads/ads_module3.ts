import { Module } from '../../types';

export const ANALISIS_DISENO_MODULE_3: Module = {
  id: 'ads-mod-3',
  title: '3. Sistemas de información: definición, clasificación e importancia',
  description:
    'Semana 3 (jueves 08/10 y viernes 09/10): definición, elementos, características e importancia de los sistemas de información, y sus clasificaciones por nivel de decisión y por función, aplicadas en el mapa conceptual de la semana. Unidad II, objetivos II.1, II.2 y II.4.',
  evaluation: '0% — Mapa conceptual',
  slides: [
    {
      id: 'ads3-1',
      title: 'Análisis y Diseño de Sistemas · Semana 3',
      contentHtml: `
        <div class="space-y-7">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 bg-sky-600 rounded-2xl flex items-center justify-center text-white text-4xl shadow-lg">🖥️</div>
            <div>
              <p class="text-sm uppercase tracking-widest font-bold text-sky-700">Análisis y Diseño de Sistemas · Unidad II</p>
              <h2 class="text-3xl md:text-4xl font-bold text-slate-900">Sistemas de información</h2>
              <p class="text-slate-500 mt-1">Definición, elementos, características e importancia en la organización</p>
            </div>
          </div>
          <div class="bg-sky-50 border border-sky-200 rounded-xl p-5 text-sky-950">
            <p class="text-lg"><strong>Objetivo:</strong> definir qué es un sistema de información, identificar sus elementos y explicar por qué sostiene las decisiones de la organización en tres niveles.</p>
          </div>
          <p class="text-sm text-slate-500">Jueves 08/10/2026 · 13:00–14:30 · Aula A-01 · Sección A · IUPSM — Extensión Ciudad Ojeda</p>
        </div>
      `
    },
    {
      id: 'ads3-2',
      title: 'Qué veremos hoy',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-slate-600 text-lg">Hoy cambia el objeto de estudio: dejamos el <strong>proyecto</strong> y entramos al <strong>sistema</strong> que la organización usará cada día.</p>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-sky-50 border border-sky-200 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-sky-700">Teoría breve</p><h3 class="text-xl font-bold text-sky-950 mt-2">Definir y desarmar el SI</h3><p class="text-sm text-sky-900 mt-2">Qué es · sus cuatro subsistemas · control · características · niveles de decisión.</p></div>
            <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-emerald-700">Comprobación</p><h3 class="text-xl font-bold text-emerald-950 mt-2">Clasificar en parejas</h3><p class="text-sm text-emerald-900 mt-2">Seis sistemas reales por nivel de decisión, con una línea de justificación.</p></div>
          </div>
          <div class="bg-slate-900 text-white rounded-2xl p-5">
            <p class="text-xs uppercase tracking-widest font-bold text-slate-300 mb-3">Ruta de trabajo (90 min)</p>
            <div class="flex flex-wrap gap-2 text-sm font-bold">
              <span class="bg-sky-600 rounded-full px-3 py-2">Definir</span><span class="text-slate-400 self-center">→</span>
              <span class="bg-indigo-600 rounded-full px-3 py-2">Desarmar el SI</span><span class="text-slate-400 self-center">→</span>
              <span class="bg-violet-600 rounded-full px-3 py-2">Niveles de decisión</span><span class="text-slate-400 self-center">→</span>
              <span class="bg-emerald-600 rounded-full px-3 py-2">Clasificar en parejas</span>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'ads3-3',
      title: 'Definición de sistema de información',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-gradient-to-br from-sky-600 to-indigo-700 text-white p-6 rounded-2xl shadow-lg">
            <p class="text-xs uppercase tracking-widest font-bold text-sky-100">Objetivo II.1</p>
            <p class="text-2xl font-bold mt-2">Un sistema de información es un conjunto organizado de <strong>personas, datos, procedimientos y tecnología</strong> que recopila, procesa, almacena y distribuye información para apoyar la toma de decisiones y la operación de la organización.</p>
          </div>
          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-white border-2 border-sky-100 rounded-xl p-5"><h4 class="font-bold text-sky-900">Construido con cuatro materiales</h4><p class="text-sm text-slate-700 mt-2">Personas que operan y deciden · datos como materia prima · procedimientos que ordenan el trabajo · tecnología que procesa y distribuye.</p></div>
            <div class="bg-slate-50 border-2 border-slate-200 rounded-xl p-5"><h4 class="font-bold text-slate-900">Diferencia con un sistema cualquiera</h4><p class="text-sm text-slate-700 mt-2">Un sistema puede ser completamente manual; el sistema de información incorpora <strong>tecnología</strong> para procesar y distribuir información.</p></div>
          </div>
        </div>
      `
    },
    {
      id: 'ads3-4',
      title: 'Los cuatro subsistemas del SI',
      contentHtml: `
        <div class="space-y-5">
          <p class="text-slate-600 text-lg">Todo SI funciona como un circuito de cuatro subsistemas clásicos de la organización:</p>
          <div class="overflow-x-auto border border-slate-200 rounded-xl">
            <div class="min-w-[640px]">
              <div class="grid grid-cols-3 bg-slate-900 text-white text-xs font-bold"><div class="p-3">Subsistema</div><div class="p-3">Qué hace</div><div class="p-3">Ejemplo</div></div>
              <div class="divide-y divide-slate-200 text-sm">
                <div class="grid grid-cols-3"><div class="p-3 font-bold text-sky-800">📥 Entrada</div><div class="p-3 text-slate-700">captura los datos del exterior</div><div class="p-3 text-slate-700">formulario de venta, sensor, escáner</div></div>
                <div class="grid grid-cols-3 bg-slate-50"><div class="p-3 font-bold text-indigo-800">⚙️ Proceso</div><div class="p-3 text-slate-700">transforma los datos en información</div><div class="p-3 text-slate-700">calcular el total, ordenar, clasificar</div></div>
                <div class="grid grid-cols-3"><div class="p-3 font-bold text-violet-800">📤 Salida</div><div class="p-3 text-slate-700">entrega el resultado</div><div class="p-3 text-slate-700">comprobante, reporte, gráfica</div></div>
                <div class="grid grid-cols-3 bg-slate-50"><div class="p-3 font-bold text-emerald-800">🔄 Retroalimentación</div><div class="p-3 text-slate-700">devuelve datos para corregir</div><div class="p-3 text-slate-700">«no hay existencias», resultado de la auditoría</div></div>
              </div>
            </div>
          </div>
          <div class="bg-sky-50 border border-sky-200 rounded-xl p-4 text-sm text-sky-950"><strong>Sigue el circuito:</strong> la entrada alimenta el proceso, el proceso genera la salida y la salida provoca retroalimentación que corrige la próxima entrada.</div>
        </div>
      `
    },
    {
      id: 'ads3-5',
      title: 'El control: que el sistema haga lo que debe',
      contentHtml: `
        <div class="space-y-5">
          <p class="text-gray-600">El <strong>control</strong> atraviesa todo el circuito: son los <strong>límites y las reglas</strong> que vigilan que el sistema haga lo que debe hacer.</p>
          <div class="grid md:grid-cols-3 gap-3">
            <div class="bg-white border-l-4 border-sky-500 rounded-xl p-4 shadow-sm"><h5 class="font-bold text-slate-800">🔐 Permisos</h5><p class="text-sm text-gray-600 mt-1">Quién puede entrar a cada dato y quién no, según su rol.</p></div>
            <div class="bg-white border-l-4 border-indigo-500 rounded-xl p-4 shadow-sm"><h5 class="font-bold text-slate-800">✅ Validaciones</h5><p class="text-sm text-gray-600 mt-1">El sistema rechaza lo que no cumple las reglas: fecha imposible, precio negativo.</p></div>
            <div class="bg-white border-l-4 border-violet-500 rounded-xl p-4 shadow-sm"><h5 class="font-bold text-slate-800">🕵️ Auditorías</h5><p class="text-sm text-gray-600 mt-1">Revisión periódica de que el proceso y las salidas fueron correctos.</p></div>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800">
            ⚠️ El control no es un quinto subsistema: es una <strong>función transversal</strong>. Y pregunta clave: <strong>¿quién usa la salida y para decidir qué?</strong>
          </div>
        </div>
      `
    },
    {
      id: 'ads3-6',
      title: 'Características de un sistema de información',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-gray-600">Cuatro características permiten reconocer un SI y no confundirlo con algo más:</p>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-sky-50 border-2 border-sky-200 rounded-xl p-5"><h4 class="font-bold text-sky-900">🤖 Automatizado</h4><p class="text-sm text-sky-800 mt-1">Usa tecnología para el proceso, a diferencia de un sistema manual.</p></div>
            <div class="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-5"><h4 class="font-bold text-indigo-900">🏢 Subsistema de la organización</h4><p class="text-sm text-indigo-800 mt-1">No funciona solo: depende de otras áreas (ventas, contabilidad, almacén).</p></div>
            <div class="bg-violet-50 border-2 border-violet-200 rounded-xl p-5"><h4 class="font-bold text-violet-900">📊 Produce información, no datos</h4><p class="text-sm text-violet-800 mt-1">El dato es la materia prima; la información es el dato con significado para decidir.</p></div>
            <div class="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-5"><h4 class="font-bold text-emerald-900">🔄 Es un ciclo</h4><p class="text-sm text-emerald-800 mt-1">La entrada alimenta el proceso; la salida genera nueva retroalimentación.</p></div>
          </div>
          <div class="bg-slate-900 text-white rounded-xl p-4 text-sm">
            <strong>Prueba rápida:</strong> si solo entrega datos en bruto, aún no es un SI que sirve; si la información no la usa nadie para decidir, sobra.
          </div>
        </div>
      `
    },
    {
      id: 'ads3-7',
      title: 'Importancia: información para tres niveles de decisión',
      contentHtml: `
        <div class="space-y-5">
          <p class="text-slate-600 text-lg">La información se consume en <strong>tres niveles de decisión</strong>. Cada nivel hace preguntas distintas y necesita información distinta.</p>
          <div class="overflow-x-auto border border-slate-200 rounded-xl">
            <div class="min-w-[680px]">
              <div class="grid grid-cols-4 bg-slate-900 text-white text-xs font-bold"><div class="p-3">Nivel</div><div class="p-3">Decisión típica</div><div class="p-3">Horizonte</div><div class="p-3">Información que necesita</div></div>
              <div class="divide-y divide-slate-200 text-sm">
                <div class="grid grid-cols-4"><div class="p-3 font-bold text-sky-800">Operativo</div><div class="p-3 text-slate-700">¿qué hago hoy?</div><div class="p-3 text-slate-700">día</div><div class="p-3 text-slate-700">ventas del día, stock, cola de trabajo</div></div>
                <div class="grid grid-cols-4 bg-slate-50"><div class="p-3 font-bold text-indigo-800">Táctico</div><div class="p-3 text-slate-700">¿cómo organizo el mes?</div><div class="p-3 text-slate-700">mes / trimestre</div><div class="p-3 text-slate-700">ventas por zona, rotación, cumplimiento</div></div>
                <div class="grid grid-cols-4"><div class="p-3 font-bold text-violet-800">Gerencial / estratégico</div><div class="p-3 text-slate-700">¿a dónde voy?</div><div class="p-3 text-slate-700">año</div><div class="p-3 text-slate-700">participación de mercado, rentabilidad, contexto</div></div>
              </div>
            </div>
          </div>
          <div class="bg-sky-50 border border-sky-200 rounded-xl p-4 text-sm text-sky-950"><strong>Por eso importa el SI:</strong> su valor no está en guardar datos, sino en dar a cada nivel la información correcta en el momento correcto.</div>
        </div>
      `
    },
    {
      id: 'ads3-8',
      title: 'Punto clave',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-gradient-to-br from-slate-900 to-sky-900 text-white p-8 rounded-2xl shadow-lg">
            <p class="text-xs uppercase tracking-widest font-bold text-sky-300">Idea que cae en la prueba</p>
            <p class="text-2xl md:text-3xl font-bold mt-3 leading-snug">Un sistema que solo sirve al nivel operativo deja a la organización <strong>sin capacidad de anticiparse</strong>.</p>
            <p class="text-sm text-sky-100 mt-4">Si todo el esfuerzo va a la caja y al inventario del día, nadie ve el mes ni el año: la empresa reacciona, pero no planifica.</p>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-950">
            🧠 Recuerda el estudio de viabilidad: <strong>la información mal ubicada en el nivel</strong> (reinvenirla a un nivel que no la usa) es una causa típica del rechazo del eje operativo.
          </div>
        </div>
      `
    },
    {
      id: 'ads3-9',
      title: 'Micro-práctica en parejas · 6 min',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-emerald-600 text-white rounded-xl p-4 flex items-center justify-between"><div><p class="text-xs uppercase tracking-widest font-bold text-emerald-100">En parejas · comprobación rápida</p><h3 class="text-xl font-bold">Clasifica cada sistema por nivel de decisión</h3></div><span class="text-3xl">🧭</span></div>
          <ol class="space-y-2 text-sm">
            <li class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-emerald-700">1</span><span class="flex-1">Facturación de una farmacia</span></li>
            <li class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-emerald-700">2</span><span class="flex-1">Control de asistencia del personal</span></li>
            <li class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-emerald-700">3</span><span class="flex-1">Tablero de indicadores de la cooperativa de transporte</span></li>
            <li class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-emerald-700">4</span><span class="flex-1">Sistema de compras de un colegio</span></li>
            <li class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-emerald-700">5</span><span class="flex-1">App de banca móvil</span></li>
            <li class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-emerald-700">6</span><span class="flex-1">Reporte mensual de la asamblea de socios</span></li>
          </ol>
          <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-sm text-emerald-950">
            <strong>Reglas:</strong> respuesta en el cuaderno (operativo · táctico · gerencial) y <strong>una línea</strong> que justifique por qué ese nivel y no otro. No se imprime nada.
          </div>
        </div>
      `
    },
    {
      id: 'ads3-10',
      title: 'Cierre del jueves · síntesis, tarea y anticipo',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-gradient-to-br from-slate-900 to-indigo-900 text-white p-6 rounded-2xl"><p class="text-xs uppercase tracking-widest font-bold text-indigo-200">Antes de irnos</p><h3 class="text-2xl font-bold mt-2">Lo que debe quedar</h3></div>
          <div class="grid md:grid-cols-3 gap-3">
            <div class="bg-white border-2 border-sky-100 rounded-xl p-4"><h4 class="font-bold text-sky-900 text-sm">Síntesis</h4><p class="text-sm text-slate-700 mt-1">El SI es un conjunto de <strong>cuatro subsistemas + control</strong>; su valor está en sostener los <strong>tres niveles de decisión</strong>.</p></div>
            <div class="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-4"><h4 class="font-bold text-emerald-900 text-sm">Tarea 📚</h4><p class="text-sm text-emerald-950 mt-1">Traer <strong>3 sistemas de información de empresas locales</strong> y, para cada uno, el nivel de decisión que sirve.</p></div>
            <div class="bg-amber-50 border-2 border-amber-200 rounded-xl p-4"><h4 class="font-bold text-amber-900 text-sm">Anticipo ⏭️</h4><p class="text-sm text-amber-950 mt-1">Viernes 09/10: <strong>clasificación de los SI</strong> + <strong>mapa conceptual</strong> (actividad de la semana, 0 %, lista de cotejo). Trae la tarea: te sirve para el mapa.</p></div>
          </div>
          <p class="text-xs text-slate-500">Quedó en la pizarra el esquema de los tres niveles: es la base del mapa conceptual del viernes.</p>
        </div>
      `
    },
    {
      id: 'ads3-11',
      title: 'Activación · 3 preguntas del jueves',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-sky-600 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-sky-100">Jueves 09/10 · primeros 7 minutos</p><h3 class="text-xl font-bold mt-1">Tres preguntas para arrancar</h3></div>
          <div class="space-y-3">
            <div class="flex gap-4 bg-white border-l-4 border-sky-500 rounded-xl p-4"><span class="font-bold text-sky-600">1</span><p class="text-slate-800">¿Cuáles son los <strong>cuatro subsistemas</strong> de un sistema de información?</p></div>
            <div class="flex gap-4 bg-white border-l-4 border-indigo-500 rounded-xl p-4"><span class="font-bold text-indigo-600">2</span><p class="text-slate-800">¿Qué <strong>nivel de decisión</strong> sirve el tablero de indicadores de la cooperativa de transporte?</p></div>
            <div class="flex gap-4 bg-white border-l-4 border-violet-500 rounded-xl p-4"><span class="font-bold text-violet-600">3</span><p class="text-slate-800">¿El control es un <strong>subsistema</strong> o una <strong>función transversal</strong>?</p></div>
          </div>
          <div class="bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm text-slate-700">Responde rápido y en voz alta: con esto activamos lo del jueves sin repetirlo. Hoy lo nuevo son las <strong>clasificaciones</strong> y la <strong>práctica</strong>.</div>
        </div>
      `
    },
    {
      id: 'ads3-12',
      title: 'Clasificación por nivel de decisión',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-sky-600 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-sky-100">Clasificación 1 · la del jueves, para consolidarla</p><h3 class="text-xl font-bold mt-1">¿Para quién decide el sistema?</h3></div>
          <div class="overflow-x-auto border border-slate-200 rounded-xl">
            <div class="min-w-[680px]">
              <div class="grid grid-cols-3 bg-slate-900 text-white text-xs font-bold"><div class="p-3">Nivel</div><div class="p-3">Ejemplos típicos</div><div class="p-3">Horizonte</div></div>
              <div class="divide-y divide-slate-200 text-sm">
                <div class="grid grid-cols-3"><div class="p-3 font-bold text-sky-800">Operativo (TPS)</div><div class="p-3 text-slate-700">caja, inventario, nómina</div><div class="p-3 text-slate-700">día</div></div>
                <div class="grid grid-cols-3 bg-slate-50"><div class="p-3 font-bold text-indigo-800">Táctico (MIS)</div><div class="p-3 text-slate-700">reportes de ventas por zona, cumplimiento de metas</div><div class="p-3 text-slate-700">mes</div></div>
                <div class="grid grid-cols-3"><div class="p-3 font-bold text-violet-800">Estratégico (EIS)</div><div class="p-3 text-slate-700">participación de mercado, rentabilidad</div><div class="p-3 text-slate-700">año</div></div>
              </div>
            </div>
          </div>
          <div class="bg-sky-50 border border-sky-200 rounded-xl p-4 text-sm text-sky-950"><strong>Truco de lectura:</strong> TPS procesa operaciones; MIS resume operaciones para mandos medios; EIS concentra la vista global para la dirección.</div>
        </div>
      `
    },
    {
      id: 'ads3-13',
      title: 'Clasificación por función',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-indigo-600 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-indigo-100">Clasificación 2 · nueva de hoy</p><h3 class="text-xl font-bold mt-1">¿Para qué área de la organización sirve?</h3></div>
          <div class="grid grid-cols-2 md:grid-cols-5 gap-3 text-center">
            <div class="bg-blue-50 border border-blue-200 rounded-xl p-4"><div class="text-2xl">🛒</div><p class="text-xs font-bold text-blue-900 mt-1">Ventas</p></div>
            <div class="bg-violet-50 border border-violet-200 rounded-xl p-4"><div class="text-2xl">📦</div><p class="text-xs font-bold text-violet-900 mt-1">Inventario</p></div>
            <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4"><div class="text-2xl">🧾</div><p class="text-xs font-bold text-emerald-900 mt-1">Contabilidad</p></div>
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-4"><div class="text-2xl">👥</div><p class="text-xs font-bold text-amber-900 mt-1">Personal</p></div>
            <div class="bg-sky-50 border border-sky-200 rounded-xl p-4"><div class="text-2xl">🗓️</div><p class="text-xs font-bold text-sky-900 mt-1">Planificación</p></div>
          </div>
          <div class="bg-white border-l-4 border-indigo-500 rounded-lg p-4 shadow-sm text-sm text-slate-700">
            Ejemplos en la práctica: el sistema de <strong>facturación</strong> de la farmacia es un SI de <strong>ventas</strong> · el <strong>control de asistencia</strong> es un SI de <strong>personal</strong> · el tablero de indicadores participa de <strong>planificación</strong>.
          </div>
        </div>
      `
    },
    {
      id: 'ads3-14',
      title: 'Idea fuerza · dos clasificaciones, dos preguntas',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-gradient-to-br from-slate-900 to-indigo-900 text-white p-8 rounded-2xl shadow-lg">
            <p class="text-xs uppercase tracking-widest font-bold text-indigo-300">Idea fuerza</p>
            <p class="text-2xl md:text-3xl font-bold mt-3 leading-snug">Un sistema puede pertenecer a <strong>dos clasificaciones a la vez</strong></p>
          </div>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-sky-50 border-2 border-sky-200 rounded-xl p-5"><h4 class="font-bold text-sky-900">Por nivel de decisión</h4><p class="text-sm text-sky-800 mt-1">Responde: <strong>¿para quién decide?</strong> Quién usa su información (operativo, táctico, gerencial).</p></div>
            <div class="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-5"><h4 class="font-bold text-indigo-900">Por función</h4><p class="text-sm text-indigo-800 mt-1">Responde: <strong>¿para qué sirve?</strong> Qué área atiende (ventas, inventario, contabilidad...).</p></div>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-950">
            🧠 <strong>Ejemplo:</strong> un sistema de <strong>inventario</strong> es operativo por nivel y de inventario por función. Y ojo: sus reportes pueden <strong>alimentar</strong> decisiones tácticas, sin dejar de ser operativo.
          </div>
        </div>
      `
    },
    {
      id: 'ads3-15',
      title: 'Práctica · mapa conceptual de la semana (40 min)',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-emerald-600 text-white rounded-xl p-4 flex items-center justify-between"><div><p class="text-xs uppercase tracking-widest font-bold text-emerald-100">Actividad PGA de la semana · 0 % · individual</p><h3 class="text-xl font-bold">Reproduce esta plantilla en tu cuaderno y complétala</h3></div><span class="text-3xl">🗺️</span></div>
          <div class="bg-slate-900 text-white rounded-xl p-4 text-center font-bold text-lg tracking-wide">🖥️ SISTEMA DE INFORMACIÓN <span class="block text-xs font-normal text-slate-300 mt-1">nodo central</span></div>
          <div class="grid md:grid-cols-3 gap-3">
            <div class="bg-sky-50 border-2 border-sky-200 rounded-xl p-4"><p class="text-xs uppercase font-bold text-sky-700">Rama 1</p><h4 class="font-bold text-sky-950 mt-1">Elementos</h4><p class="text-sm text-sky-900 mt-2">Los 4 subsistemas · control · 2 características propias</p></div>
            <div class="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-4"><p class="text-xs uppercase font-bold text-indigo-700">Rama 2</p><h4 class="font-bold text-indigo-950 mt-1">Clasificación</h4><p class="text-sm text-indigo-900 mt-2">Por nivel de decisión · por función</p></div>
            <div class="bg-violet-50 border-2 border-violet-200 rounded-xl p-4"><p class="text-xs uppercase font-bold text-violet-700">Rama 3</p><h4 class="font-bold text-violet-950 mt-1">Importancia</h4><p class="text-sm text-violet-900 mt-2">Los 3 niveles de decisión · 3 ejemplos propios de empresas de Ciudad Ojeda</p></div>
          </div>
          <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-sm text-emerald-950">
            <strong>Cómo se trabaja (40 min):</strong> en el cuaderno u hoja propia, individual. Usa como ganchos: los 4 subsistemas y el control (jueves), las dos clasificaciones (hoy) y la tarea de 3 sistemas locales.
          </div>
          <p class="text-xs text-slate-500">En cada rama escribe los conceptos <strong>conectados con palabras</strong>, no como lista suelta: es un mapa, no un resumen.</p>
        </div>
      `
    },
    {
      id: 'ads3-16',
      title: 'Qué va en cada rama',
      contentHtml: `
        <div class="space-y-5">
          <p class="text-slate-600 text-lg">Guía de contenido rama por rama. Todo salió de las sesiones de esta semana:</p>
          <div class="space-y-3">
            <div class="bg-sky-50 border-2 border-sky-200 rounded-xl p-4"><h4 class="font-bold text-sky-900">🧩 Rama 1 · Elementos</h4><p class="text-sm text-sky-950 mt-1"><strong>Los 4 subsistemas</strong> (entrada, proceso, salida, retroalimentación) <strong>con un ejemplo cada uno</strong> + <strong>el control</strong> (permisos, validaciones, auditorías) + <strong>2 características propias</strong> (automatizado, subsistema de la organización, produce información, ciclo...).</p></div>
            <div class="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-4"><h4 class="font-bold text-indigo-900">🗂️ Rama 2 · Clasificación</h4><p class="text-sm text-indigo-950 mt-1"><strong>Las dos clasificaciones</strong>: por nivel de decisión (operativo/TPS, táctico/MIS, estratégico/EIS) y por función (ventas, inventario, contabilidad, personal, planificación).</p></div>
            <div class="bg-violet-50 border-2 border-violet-200 rounded-xl p-4"><h4 class="font-bold text-violet-900">💡 Rama 3 · Importancia</h4><p class="text-sm text-violet-950 mt-1"><strong>Los 3 niveles de decisión</strong> (¿qué hago hoy? · ¿cómo organizo el mes? · ¿a dónde voy?) <strong>+ 3 ejemplos propios de empresas de Ciudad Ojeda</strong>, uno por nivel de decisión.</p></div>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800">
            ⚠️ Dos errores que quitan puntos: <strong>confundir subsistema con característica</strong> (subsistema = pieza del circuito; característica = propiedad del conjunto) y <strong>clasificar solo por función</strong> olvidando el nivel.
          </div>
        </div>
      `
    },
    {
      id: 'ads3-17',
      title: 'Lista de cotejo · verifica tu mapa (6 criterios)',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-cyan-700 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-cyan-100">Instrumento de la actividad · 0 %</p><h3 class="text-xl font-bold mt-1">Antes de entregar, revisa los 6 criterios</h3></div>
          <div class="overflow-x-auto border border-slate-200 rounded-xl">
            <div class="min-w-[600px]">
              <div class="grid grid-cols-[1fr_70px_70px] bg-slate-900 text-white text-xs font-bold"><div class="p-3">Criterio</div><div class="p-3 text-center">C</div><div class="p-3 text-center">NC</div></div>
              <div class="divide-y divide-slate-200 text-sm">
                <div class="grid grid-cols-[1fr_70px_70px] min-h-11"><div class="p-2">1 · El nodo central es correcto.</div><div class="p-2 text-center">□</div><div class="p-2 text-center">□</div></div>
                <div class="grid grid-cols-[1fr_70px_70px] min-h-11 bg-slate-50"><div class="p-2">2 · Las 3 ramas están presentes con sus conceptos.</div><div class="p-2 text-center">□</div><div class="p-2 text-center">□</div></div>
                <div class="grid grid-cols-[1fr_70px_70px] min-h-11"><div class="p-2">3 · Los 4 subsistemas están nombrados.</div><div class="p-2 text-center">□</div><div class="p-2 text-center">□</div></div>
                <div class="grid grid-cols-[1fr_70px_70px] min-h-11 bg-slate-50"><div class="p-2">4 · Las dos clasificaciones aparecen (por nivel y por función).</div><div class="p-2 text-center">□</div><div class="p-2 text-center">□</div></div>
                <div class="grid grid-cols-[1fr_70px_70px] min-h-11"><div class="p-2">5 · Al menos un ejemplo propio por rama.</div><div class="p-2 text-center">□</div><div class="p-2 text-center">□</div></div>
                <div class="grid grid-cols-[1fr_70px_70px] min-h-11 bg-slate-50"><div class="p-2">6 · Legible y entregado en el tiempo.</div><div class="p-2 text-center">□</div><div class="p-2 text-center">□</div></div>
              </div>
            </div>
          </div>
          <p class="text-xs text-slate-500">C = cumple · NC = no cumple. En los ejemplos propios vale cualquier empresa de Ciudad Ojeda (farmacia, taller, banco, panadería, bodega...), pero escritos por ti.</p>
        </div>
      `
    },
    {
      id: 'ads3-18',
      title: 'Plenaria y corrección',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-teal-700 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-teal-100">14 minutos · corrección en vivo</p><h3 class="text-xl font-bold mt-1">Tres mapas al frente</h3></div>
          <ol class="space-y-3 text-sm">
            <li class="flex gap-3 bg-white border rounded-xl p-4"><span class="font-bold text-teal-700">1</span><span>Exponen <strong>3 estudiantes</strong>, 3 minutos cada uno: cada quien defiende una rama distinta (Elementos, Clasificación, Importancia).</span></li>
            <li class="flex gap-3 bg-white border rounded-xl p-4"><span class="font-bold text-teal-700">2</span><span>La clase corrige cada mapa <strong>criterio por criterio</strong> con la lista de cotejo proyectada.</span></li>
            <li class="flex gap-3 bg-white border rounded-xl p-4"><span class="font-bold text-teal-700">3</span><span>El mapa te llega de vuelta el <strong>lunes 12/10</strong> con <strong>dos preguntas de retroalimentación</strong> para completarlo.</span></li>
          </ol>
          <div class="bg-slate-900 text-white rounded-xl p-4 text-sm"><strong>Errores que se buscan en la corrección:</strong> los dos frecuentes son confundir subsistema con característica y clasificar solo por función.</div>
        </div>
      `
    },
    {
      id: 'ads3-19',
      title: 'Cierre del viernes · preguntas de salida, tarea y aviso',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-gradient-to-br from-slate-900 to-teal-900 text-white p-6 rounded-2xl"><p class="text-xs uppercase tracking-widest font-bold text-teal-200">Antes de cerrar</p><h3 class="text-2xl font-bold mt-2">Tres preguntas de salida</h3></div>
          <div class="space-y-3">
            <div class="flex gap-4 bg-white border-l-4 border-teal-500 rounded-xl p-4"><span class="font-bold text-teal-600">1</span><p class="text-slate-800">¿Las dos clasificaciones sirven <strong>para lo mismo</strong>?</p></div>
            <div class="flex gap-4 bg-white border-l-4 border-indigo-500 rounded-xl p-4"><span class="font-bold text-indigo-600">2</span><p class="text-slate-800">¿Qué nivel de decisión suele <strong>faltar</strong> en un negocio pequeño?</p></div>
            <div class="flex gap-4 bg-white border-l-4 border-rose-500 rounded-xl p-4"><span class="font-bold text-rose-600">3</span><p class="text-slate-800">¿Qué pasa si un SI <strong>solo</strong> sirve al nivel operativo?</p></div>
          </div>
          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-teal-50 border border-teal-200 rounded-xl p-4 text-sm text-teal-950"><strong>Tarea:</strong> completa el mapa y trae <strong>un ejemplo de SI para cada nivel de decisión</strong>.</div>
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-950"><strong>Aviso:</strong> viernes <strong>16/10</strong> → <strong>prueba escrita del 10 %</strong> del Corte I (Unidades I y II). El mapa corregido es tu resumen de estudio.</div>
          </div>
        </div>
      `
    },
    {
      id: 'ads3-20',
      title: 'Fuentes',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-slate-50 border border-slate-200 rounded-2xl p-5">
            <p class="font-bold text-slate-900">Para ampliar</p>
            <ul class="list-disc list-inside text-sm text-slate-700 mt-3 space-y-2">
              <li><strong>Programa analítico de Análisis y Diseño de Sistemas</strong>, Unidad II: objetivos II.1 (definición de sistemas de información), II.2 (importancia) e II.4 (clasificaciones).</li>
              <li><strong>Kendall, K. y Kendall, J.</strong> (1997). <em>Análisis y diseño de sistemas</em>. Pearson.</li>
              <li><strong>Senn, J.</strong> (1992). <em>Análisis y diseño de sistemas de información</em>. McGraw-Hill.</li>
              <li><strong>TutorialsPoint</strong> — System Analysis and Design (referencia).</li>
            </ul>
          </div>
          <div class="bg-sky-50 border border-sky-200 rounded-xl p-4 text-sm text-sky-950"><strong>Actividad PGA de la semana:</strong> mapa conceptual de elementos y clasificación de los sistemas de información · lista de cotejo · 0 %.</div>
          <p class="text-xs text-slate-400 text-center">Material adaptado con fines docentes; se citan las fuentes originales.</p>
        </div>
      `
    }
  ]
};
