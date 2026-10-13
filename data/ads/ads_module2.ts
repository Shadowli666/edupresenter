import { Module } from '../../types';

export const ANALISIS_DISENO_MODULE_2: Module = {
  id: 'ads-mod-2',
  title: '2. Objetivos del Análisis y Estudio de Viabilidad',
  description:
    'Semana 2, viernes 02/10: los cuatro ejes del estudio de viabilidad (técnica, económica, operativa y legal), la identificación y priorización de necesidades y el análisis económico y técnico, aplicados al caso de una cooperativa de transporte. Unidad I, objetivos I.3 y I.4.',
  evaluation: '0% — Ficha de viabilidad',
  slides: [
    {
      id: 'ads2-1',
      title: '¿Vale la pena construirlo?',
      contentHtml: `
        <div class="space-y-6">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 bg-sky-600 rounded-xl flex items-center justify-center text-white text-3xl shadow-lg">🔍</div>
            <div>
              <h2 class="text-3xl font-bold text-slate-900">Estudio de viabilidad</h2>
              <p class="text-slate-500">Análisis y Diseño de Sistemas · Ing. Luis Felipe Moreno Oropeza</p>
            </div>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-3"><p class="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Fecha</p><p class="font-bold text-slate-800 text-sm">Viernes 02/10/2026</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-3"><p class="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Hora</p><p class="font-bold text-slate-800 text-sm">13:00 – 14:30</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-3"><p class="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Aula</p><p class="font-bold text-slate-800 text-sm">A-01 · Sección A</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-3"><p class="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Duración</p><p class="font-bold text-slate-800 text-sm">2 h académicas</p></div>
          </div>

          <div class="bg-sky-50 border border-sky-200 rounded-lg p-4 text-sm text-sky-900">
            🎯 <strong>Objetivos de hoy:</strong> describir los objetivos del análisis y <strong>argumentar la importancia del estudio de viabilidad</strong> de un proyecto.
          </div>
        </div>
      `,
      notes: 'No hay registro del jueves 1°/10: este bloque recupera lo esencial en 20 min. Si el jueves sí se cubrió, reducir el bloque teórico a 12 min y ganar práctica.'
    },
    {
      id: 'ads2-2',
      title: 'Qué veremos hoy',
      contentHtml: `
        <div class="space-y-5">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-sky-50 border-2 border-sky-200 rounded-xl p-4">
              <h4 class="font-bold text-sky-900">📐 Conceptos</h4>
              <ul class="list-disc list-inside text-sm text-sky-800 mt-2 space-y-1">
                <li>Qué es (y qué no es) el análisis</li>
                <li>De dónde salen las necesidades</li>
                <li>Cómo se priorizan</li>
                <li>Los cuatro ejes de la viabilidad</li>
              </ul>
            </div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <h4 class="font-bold text-slate-700">✍️ Práctica</h4>
              <ul class="list-disc list-inside text-sm text-slate-600 mt-2 space-y-1">
                <li>Un caso real: cooperativa de transporte</li>
                <li>Ficha individual con los cuatro ejes</li>
                <li>Un veredicto y sus condiciones</li>
                <li>No califica: se revisa en clase</li>
              </ul>
            </div>
          </div>
          <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-sm text-emerald-800">
            ✅ El objetivo del análisis no es construir algo: es <strong>saber si vale la pena construirlo</strong>.
          </div>
        </div>
      `,
      notes: 'Enmarcar la semana: esta es la Unidad I; el lunes sigue sistemas de información.'
    },
    {
      id: 'ads2-3',
      title: '¿Qué hace el analista antes de proponer una solución?',
      contentHtml: `
        <div class="space-y-5">
          <p class="text-gray-600">Analizar es <strong>definir el problema antes de resolverlo</strong>. Si el problema no está bien definido, la solución estará mal aunque funcione.</p>

          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-white border-l-4 border-sky-500 rounded-lg p-4 shadow-sm">
              <h5 class="font-bold text-slate-800">1 · Delimitar el alcance</h5>
              <p class="text-sm text-gray-600">Qué problema entra y qué problema queda fuera.</p>
            </div>
            <div class="bg-white border-l-4 border-sky-500 rounded-lg p-4 shadow-sm">
              <h5 class="font-bold text-slate-800">2 · Detectar necesidades</h5>
              <p class="text-sm text-gray-600">Qué necesita la organización, no qué quiere el cliente pedir.</p>
            </div>
            <div class="bg-white border-l-4 border-sky-500 rounded-lg p-4 shadow-sm">
              <h5 class="font-bold text-slate-800">3 · Priorizar</h5>
              <p class="text-sm text-gray-600">No todas las necesidades valen lo mismo: impacto y urgencia.</p>
            </div>
            <div class="bg-white border-l-4 border-sky-500 rounded-lg p-4 shadow-sm">
              <h5 class="font-bold text-slate-800">4 · Comparar alternativas</h5>
              <p class="text-sm text-gray-600">Opciones y costos, antes de comprometerse con una.</p>
            </div>
          </div>

          <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800">
            ⚠️ <strong>El análisis no diseña.</strong> Confundir las dos fases es el error más común: saltar directo a «propongamos un sistema web».
          </div>
        </div>
      `,
      notes: 'Retomar la distinción análisis/diseño del jueves con una pregunta, no con la definición.'
    },
    {
      id: 'ads2-4',
      title: '¿De dónde salen las necesidades?',
      contentHtml: `
        <div class="space-y-5">
          <div class="grid grid-cols-2 md:grid-cols-3 gap-3 text-center">
            <div class="bg-sky-50 border border-sky-200 rounded-xl p-3"><div class="text-2xl">🗣️</div><p class="text-xs font-bold text-sky-900 mt-1">Entrevistas</p></div>
            <div class="bg-sky-50 border border-sky-200 rounded-xl p-3"><div class="text-2xl">👀</div><p class="text-xs font-bold text-sky-900 mt-1">Observación</p></div>
            <div class="bg-sky-50 border border-sky-200 rounded-xl p-3"><div class="text-2xl">🗣️</div><p class="text-xs font-bold text-sky-900 mt-1">Grupos focales</p></div>
            <div class="bg-sky-50 border border-sky-200 rounded-xl p-3"><div class="text-2xl">📋</div><p class="text-xs font-bold text-sky-900 mt-1">Cuestionarios</p></div>
            <div class="bg-sky-50 border border-sky-200 rounded-xl p-3"><div class="text-2xl">📄</div><p class="text-xs font-bold text-sky-900 mt-1">Documentos</p></div>
            <div class="bg-sky-50 border border-sky-200 rounded-xl p-3"><div class="text-2xl">📊</div><p class="text-xs font-bold text-sky-900 mt-1">Datos que ya tienen</p></div>
          </div>

          <div class="bg-white border rounded-xl p-4 shadow-sm">
            <h5 class="font-bold text-slate-700 mb-2">La organización siempre tiene datos que ya cuentan el problema:</h5>
            <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>Registro de quejas y reclamos</li>
              <li>Errores, reprocesos y tiempos perdidos</li>
              <li>Volumen de trabajo y colas de espera</li>
            </ul>
          </div>

          <div class="bg-rose-50 border border-rose-200 rounded-lg p-3 text-sm text-rose-800">
            🎯 <strong>Priorizar</strong> por impacto y por urgencia. Y ojo: «necesito una aplicación» es una <strong>propuesta</strong>, no una necesidad.
          </div>
        </div>
      `,
      notes: 'Pedir 2 ejemplos de datos que ya tiene una empresa cercana antes de avanzar.'
    },
    {
      id: 'ads2-5',
      title: 'El estudio de viabilidad: cuatro ejes',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-gray-600">Es la pregunta que decide si el proyecto continúa. Se mira en <strong>los cuatro ejes</strong>: si uno falla, el proyecto no se lanza tal cual.</p>

          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
              <h4 class="font-bold text-blue-900">🔧 Técnica</h4>
              <p class="text-sm text-blue-800 mt-1"><strong>¿Se puede construir con lo que hay?</strong></p>
              <p class="text-xs text-blue-700 mt-2">Falla si no hay equipos, red, datos o personal que lo mantenga.</p>
            </div>
            <div class="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-4">
              <h4 class="font-bold text-indigo-900">💰 Económica</h4>
              <p class="text-sm text-indigo-800 mt-1"><strong>¿Se puede pagar?</strong></p>
              <p class="text-xs text-indigo-700 mt-2">Falla si el costo no lo cubre nadie o el beneficio no lo justifica.</p>
            </div>
            <div class="bg-violet-50 border-2 border-violet-200 rounded-xl p-4">
              <h4 class="font-bold text-violet-900">👥 Operativa</h4>
              <p class="text-sm text-violet-800 mt-1"><strong>¿La organización puede usarlo?</strong></p>
              <p class="text-xs text-violet-700 mt-2">Falla si nadie está dispuesto a cambiar su forma de trabajar.</p>
            </div>
            <div class="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-4">
              <h4 class="font-bold text-emerald-900">⚖️ Legal</h4>
              <p class="text-sm text-emerald-800 mt-1"><strong>¿Se puede hacer dentro de la ley?</strong></p>
              <p class="text-xs text-emerald-700 mt-2">Falla si faltan permisos o se tratan datos personales sin base legal.</p>
            </div>
          </div>

          <div class="bg-slate-900 text-white rounded-xl p-4 text-sm">
            <strong>Regla de oro:</strong> un proyecto inviable en un eje no se lanza — o se lanza <strong>con condiciones</strong>.
          </div>
        </div>
      `,
      notes: 'Dejar la tabla en la pizarra: es la estructura de la ficha que van a llenar.'
    },
    {
      id: 'ads2-6',
      title: 'El eje económico se sustenta con números',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
            <p class="text-sm text-indigo-900">Sin cifras no hay decisión: son opiniones. Con tres números ya se puede discutir.</p>
          </div>

          <div class="grid md:grid-cols-3 gap-3 text-center">
            <div class="bg-white border-2 border-indigo-100 rounded-xl p-4">
              <div class="text-3xl">📉</div>
              <h4 class="font-bold text-indigo-900 text-sm mt-1">Inversión</h4>
              <p class="text-xs text-gray-600 mt-1">Inicial y mantenimiento. Lo que hay que poner.</p>
            </div>
            <div class="bg-white border-2 border-indigo-100 rounded-xl p-4">
              <div class="text-3xl">📈</div>
              <h4 class="font-bold text-indigo-900 text-sm mt-1">Beneficio</h4>
              <p class="text-xs text-gray-600 mt-1">Ahorro, ventas, tiempo recuperado. Con fecha y con medida.</p>
            </div>
            <div class="bg-white border-2 border-indigo-100 rounded-xl p-4">
              <div class="text-3xl">⏳</div>
              <h4 class="font-bold text-indigo-900 text-sm mt-1">Recuperación</h4>
              <p class="text-xs text-gray-600 mt-1">Cuántos meses tarda el proyecto en pagarse solo.</p>
            </div>
          </div>

          <div class="bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm text-slate-700">
            🔧 El <strong>análisis técnico</strong> cierra el círculo: inventario de equipos, software, datos y personal disponible.
          </div>
        </div>
      `,
      notes: 'Un ejemplo numérico rápido: 22.000 + 1.500/mes vs. ahorro en viajes perdidos.'
    },
    {
      id: 'ads2-7',
      title: 'Caso: cooperativa de transporte «La Ruta»',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-slate-900 text-white rounded-xl p-5">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-2xl">🚌</span>
              <h4 class="font-bold text-lg">Ciudad Ojeda · 42 socios · 5 rutas</h4>
            </div>
            <p class="text-sm leading-relaxed text-slate-200">
              La cooperativa <strong>«La Ruta»</strong> mueve cerca de <strong>1.100 pasajeros por semana</strong>.
              Cada carro tiene su conductor y su socio, y entrega el <strong>8 %</strong> del pasaje.
            </p>
            <p class="text-sm leading-relaxed text-slate-200 mt-2">
              Hoy todo se anota a mano: cuaderno de viajes, dos libros de recibo y el cuadre diario lo hace
              <strong>Jennifer</strong>, la única persona de la sede que sabe manejar una computadora.
            </p>
          </div>

          <div class="bg-amber-50 border-2 border-amber-200 rounded-xl p-4">
            <p class="text-sm text-amber-900">Lo que le pidió el socio principal al analista, textualmente:</p>
            <p class="text-center font-bold text-amber-800 mt-2">«Necesitamos una aplicación para que el pasajero vea por dónde va el carro y para que pueda pagar con el celular.»</p>
          </div>
        </div>
      `,
      notes: 'Leer la escena en voz alta (~45 s). Los datos por eje van en la diapositiva siguiente.'
    },
    {
      id: 'ads2-8',
      title: 'Los datos del caso, por eje',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-3">
          <div class="bg-blue-50 border-2 border-blue-200 rounded-xl p-3">
            <h4 class="font-bold text-blue-900">🔧 Técnico</h4>
            <ul class="list-disc list-inside text-xs text-blue-800 mt-1 space-y-1">
              <li><strong>2 de las 5 rutas no tienen señal</strong> de datos (la tercera y la quinta)</li>
              <li>Los carros <strong>no tienen GPS</strong> y la mayoría de los conductores no tiene celular inteligente</li>
              <li>Una sola computadora (2014) y <strong>nadie programa</strong></li>
              <li>Cotización: <strong>22.000 Bs.</strong> iniciales + <strong>1.500 Bs./mes</strong> (empresa de Maracaibo)</li>
            </ul>
          </div>

          <div class="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-3">
            <h4 class="font-bold text-indigo-900">💰 Económico</h4>
            <ul class="list-disc list-inside text-xs text-indigo-800 mt-1 space-y-1">
              <li>Facturan cerca de <strong>3.500.000 Bs. mensuales</strong> en pasajes</li>
              <li>La junta propone subir el aporte de <strong>8 % a 10 %</strong> para financiar el sistema</li>
              <li>En la asamblea varios socios dijeron: «yo no voy a pagar más por una aplicación que no voy a usar»</li>
            </ul>
          </div>

          <div class="bg-violet-50 border-2 border-violet-200 rounded-xl p-3">
            <h4 class="font-bold text-violet-900">👥 Operativo</h4>
            <ul class="list-disc list-inside text-xs text-violet-800 mt-1 space-y-1">
              <li>Los conductores <strong>no quieren instalar nada</strong> ni entregar datos de los pasajeros</li>
              <li>Las rutas cambian según la demanda, a veces en el mismo día</li>
              <li>Si Jennifer falta un día, la oficina se detiene</li>
            </ul>
          </div>

          <div class="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-3">
            <h4 class="font-bold text-emerald-900">⚖️ Legal</h4>
            <ul class="list-disc list-inside text-xs text-emerald-800 mt-1 space-y-1">
              <li>Hay que registrar <strong>nombre y cédula de cada pasajero</strong></li>
              <li>No hay <strong>permiso vigente</strong> ante la autoridad de Transporte Terrestre, ni contratos escritos con los conductores</li>
              <li>Los recibos deben ir <strong>numerados correlativamente</strong> y se reportan a SENIAT</li>
            </ul>
          </div>
        </div>
      `,
      notes: 'Proyectar y leer los cuatro bloques. No se imprime: se dicta.'
    },
    {
      id: 'ads2-9',
      title: 'Ficha de trabajo (35 min)',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-sky-600 text-white rounded-xl p-4 flex justify-between items-center">
            <div>
              <h4 class="font-bold text-lg">✍️ Un bloque por eje</h4>
              <p class="font-bold text-xs">35 minutos · individual · 0 %</p>
            </div>
            <span class="text-3xl">📋</span>
          </div>

          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-white border-2 border-sky-100 rounded-xl p-4">
              <h5 class="font-bold text-sky-900">🔧 EJE TÉCNICO</h5>
              <p class="text-xs text-gray-600 mt-2">¿Se puede construir con lo que hay?</p>
              <p class="text-xs text-slate-500 mt-2">1 necesidad priorizada y por qué · 1 dato del caso · veredicto</p>
            </div>
            <div class="bg-white border-2 border-indigo-100 rounded-xl p-4">
              <h5 class="font-bold text-indigo-900">💰 EJE ECONÓMICO</h5>
              <p class="text-xs text-gray-600 mt-2">¿Se puede pagar?</p>
              <p class="text-xs text-slate-500 mt-2">1 necesidad priorizada y por qué · 1 dato del caso · veredicto</p>
            </div>
            <div class="bg-white border-2 border-violet-100 rounded-xl p-4">
              <h5 class="font-bold text-violet-900">👥 EJE OPERATIVO</h5>
              <p class="text-xs text-gray-600 mt-2">¿La cooperativa puede usarlo?</p>
              <p class="text-xs text-slate-500 mt-2">1 necesidad priorizada y por qué · 1 dato del caso · veredicto</p>
            </div>
            <div class="bg-white border-2 border-emerald-100 rounded-xl p-4">
              <h5 class="font-bold text-emerald-900">⚖️ EJE LEGAL</h5>
              <p class="text-xs text-gray-600 mt-2">¿Se puede hacer dentro de la ley?</p>
              <p class="text-xs text-slate-500 mt-2">1 necesidad priorizada y por qué · 1 dato del caso · veredicto</p>
            </div>
          </div>

          <div class="bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm text-slate-700">
            <strong>Veredicto en cada eje:</strong> viable · viable con condiciones · no viable. Si aplica, escribe la condición.
          </div>

          <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800">
            📌 <strong>No califica (0 %).</strong> Se revisa en clase y te la devuelvo corregida la próxima sesión.
          </div>
        </div>
      `,
      notes: 'Es la actividad declarada en el PGA para la semana 2 (ficha de trabajo individual). Avisos de tiempo a los 10 y a los 25 minutos.'
    },
    {
      id: 'ads2-9b',
      title: 'Ficha: ejes técnico y económico (cópiala)',
      contentHtml: `
        <div class="space-y-3">
          <div class="bg-sky-600 text-white rounded-lg px-4 py-2 flex justify-between items-center">
            <span class="font-bold">📋 COPIA ESTA TABLA EN TU CUADERNO</span>
            <span class="font-bold text-xs">35 min · 0 %</span>
          </div>

          <table class="w-full text-xs border-collapse">
            <thead>
              <tr class="bg-slate-100">
                <th class="border border-slate-300 px-2 py-2 w-1/4">EJE</th>
                <th class="border border-slate-300 px-2 py-2">Necesidad priorizada<br/>y por qué es la primera</th>
                <th class="border border-slate-300 px-2 py-2">Dato del caso<br/>(cita o cifra)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="h-28 align-top">
                <td class="border border-slate-300 px-2 py-2 font-bold text-blue-900">🔧<br/>TÉCNICO<br/><span class="font-normal text-slate-500 text-[10px]">¿Se puede construir<br/>con lo que hay?</span></td>
                <td class="border border-slate-300 px-2 py-2"></td>
                <td class="border border-slate-300 px-2 py-2"></td>
              </tr>
              <tr class="h-28 align-top">
                <td class="border border-slate-300 px-2 py-2 font-bold text-indigo-900">💰<br/>ECONÓMICO<br/><span class="font-normal text-slate-500 text-[10px]">¿Se puede pagar?</span></td>
                <td class="border border-slate-300 px-2 py-2"></td>
                <td class="border border-slate-300 px-2 py-2"></td>
              </tr>
            </tbody>
          </table>

          <p class="text-sm text-slate-600">Veredicto de cada eje: <strong>viable</strong> · <strong>viable con condiciones</strong> · <strong>no viable</strong> — y si aplica, escribe la condición.</p>
        </div>
      `,
      notes: 'Se proyecta para que copien: no hay impresión. Dictar el encabezado una vez y dejar 30 segundos antes de empezar a escribir.'
    },
    {
      id: 'ads2-9c',
      title: 'Ficha: ejes operativo y legal (cópiala)',
      contentHtml: `
        <div class="space-y-3">
          <table class="w-full text-xs border-collapse">
            <thead>
              <tr class="bg-slate-100">
                <th class="border border-slate-300 px-2 py-2 w-1/4">EJE</th>
                <th class="border border-slate-300 px-2 py-2">Necesidad priorizada<br/>y por qué es la primera</th>
                <th class="border border-slate-300 px-2 py-2">Dato del caso<br/>(cita o cifra)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="h-24 align-top">
                <td class="border border-slate-300 px-2 py-2 font-bold text-violet-900">👥<br/>OPERATIVO<br/><span class="font-normal text-slate-500 text-[10px]">¿La cooperativa<br/>puede usarlo?</span></td>
                <td class="border border-slate-300 px-2 py-2"></td>
                <td class="border border-slate-300 px-2 py-2"></td>
              </tr>
              <tr class="h-24 align-top">
                <td class="border border-slate-300 px-2 py-2 font-bold text-emerald-900">⚖️<br/>LEGAL<br/><span class="font-normal text-slate-500 text-[10px]">¿Se puede hacer<br/>dentro de la ley?</span></td>
                <td class="border border-slate-300 px-2 py-2"></td>
                <td class="border border-slate-300 px-2 py-2"></td>
              </tr>
            </tbody>
          </table>

          <div class="bg-slate-900 text-white rounded-lg p-4">
            <p class="font-bold text-sm mb-2">CIERRE DE LA FICHA</p>
            <div class="space-y-1 text-sm">
              <p>1 · Veredicto global: <span class="inline-block w-56 border-b border-white/40"></span> viable · viable con condiciones · no viable</p>
              <p class="pt-2">2 · Condición 1: <span class="inline-block w-72 border-b border-white/40"></span></p>
              <p>3 · Condición 2: <span class="inline-block w-72 border-b border-white/40"></span></p>
            </div>
          </div>

          <p class="text-xs text-slate-500">Antes de entregar: ¿completaste los cuatro ejes? · ¿cada veredicto tiene un dato del caso? · ¿escribiste la necesidad y no la solución?</p>
        </div>
      `,
      notes: 'Proyectar esta diapositiva completa mientras responden; sirve de guía visual del cierre.'
    },
    {
      id: 'ads2-10',
      title: 'Antes de entregar, verifica',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white border rounded-xl p-5 shadow-sm">
            <h4 class="font-bold text-slate-800 mb-3">Lista de verificación de la ficha</h4>
            <div class="space-y-3">
              <div class="flex gap-3 items-center"><span class="text-sky-600">✓</span><p class="text-sm text-gray-700">¿Completé los <strong>cuatro</strong> ejes?</p></div>
              <div class="flex gap-3 items-center"><span class="text-sky-600">✓</span><p class="text-sm text-gray-700">¿Cada veredicto tiene <strong>un dato del caso</strong> que lo sostenga?</p></div>
              <div class="flex gap-3 items-center"><span class="text-sky-600">✓</span><p class="text-sm text-gray-700">¿Escribí la <strong>necesidad</strong> y no la solución que pidió el socio?</p></div>
              <div class="flex gap-3 items-center"><span class="text-sky-600">✓</span><p class="text-sm text-gray-700">¿Escribí el <strong>veredicto global</strong> y las <strong>2 condiciones</strong>?</p></div>
              <div class="flex gap-3 items-center"><span class="text-sky-600">✓</span><p class="text-sm text-gray-700">¿Se entiende con letra legible?</p></div>
            </div>
          </div>

          <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800">
            🎤 En la plenaria **tres estudiantes** defienden su veredicto: uno por eje, y responden «¿con qué dato lo sostienes?».
          </div>
        </div>
      `,
      notes: 'Elegir los tres defensores por anticipado si el grupo es grande (rotar en semanas siguientes).'
    },
    {
      id: 'ads2-11',
      title: 'Cierre y tarea',
      contentHtml: `
        <div class="space-y-5">
          <div>
            <h3 class="text-xl font-bold text-slate-900">Preguntas para salir</h3>
            <div class="space-y-2">
              <div class="flex gap-3 bg-white border-l-4 border-sky-500 rounded-lg p-3"><span class="font-bold text-sky-600">1</span><p class="text-sm text-gray-700">¿Cuáles son los cuatro ejes de la viabilidad y qué pregunta responde cada uno?</p></div>
              <div class="flex gap-3 bg-white border-l-4 border-indigo-500 rounded-lg p-3"><span class="font-bold text-indigo-600">2</span><p class="text-sm text-gray-700">¿Por qué no basta con decir «es técnicamente posible»?</p></div>
              <div class="flex gap-3 bg-white border-l-4 border-violet-500 rounded-lg p-3"><span class="font-bold text-violet-600">3</span><p class="text-sm text-gray-700">¿Cuál de los cuatro ejes tiene el poder de <strong>parar</strong> el proyecto?</p></div>
            </div>
          </div>

          <div class="bg-sky-600 text-white rounded-xl p-4 flex items-center gap-4">
            <span class="text-3xl">📚</span>
            <div>
              <h4 class="font-bold">Tarea</h4>
              <p class="text-sm">Termina la ficha y trae un caso de Ciudad Ojeda con los mismos cuatro ejes y un dato de evidencia por eje (una página).</p>
            </div>
          </div>

          <div class="bg-slate-50 border rounded-xl p-4">
            <h4 class="font-bold text-slate-800">Próxima sesión · jueves 08/10</h4>
            <p class="text-sm text-gray-600 mt-1"><strong>Sistemas de información:</strong> definición, elementos y clasificación (mapa conceptual, 0 %).</p>
          </div>
        </div>
      `,
      notes: 'La pregunta 3 ordena la plenaria: el eje legal es el que puede parar el proyecto en este caso.'
    },
    {
      id: 'ads2-12',
      title: 'Fuentes',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm space-y-2">
            <p class="font-bold text-slate-800">Fuentes de esta sesión</p>
            <ul class="list-disc list-inside text-gray-600 space-y-1">
              <li><strong>Programa analítico de Análisis y Diseño de Sistemas</strong>, Unidad I: objetivos I.3 y I.4 y contenido oficial (objetivos del análisis, identificación de necesidades, viabilidad económica, técnica, operativa y legal, análisis económico y técnico).</li>
              <li><strong>Kendall, K. y Kendall, J.</strong> (1997). <em>Análisis y diseño de sistemas</em>. Pearson.</li>
              <li><strong>Senn, J.</strong> (1992). <em>Análisis y diseño de sistemas de información</em>. McGraw-Hill.</li>
              <li><strong>TutorialsPoint</strong> — System Analysis and Design (referencia).</li>
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