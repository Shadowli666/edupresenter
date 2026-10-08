import { Module } from '../../types';

export const SISTEMAS_I_MODULE_3: Module = {
  id: 'sis-mod-3',
  title: '3. Estudio de caso: actividades de la Ingeniería de Software',
  description:
    'Semana 3: aplicación de las cinco actividades de la Ingeniería de Software a cuatro escenarios ficticios. Unidad I, objetivo I.3.',
  evaluation: '0%',
  slides: [
    {
      id: 'sis3-1',
      title: 'Sistemas I · Semana 3',
      contentHtml: `
        <div class="space-y-7">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-4xl shadow-lg">⚙️</div>
            <div>
              <p class="text-sm uppercase tracking-widest font-bold text-blue-600">Ingeniería de Software · Unidad I</p>
              <h2 class="text-3xl md:text-4xl font-bold text-slate-900">Del concepto al caso</h2>
              <p class="text-slate-500 mt-1">Aplicación de las actividades de la Ingeniería de Software</p>
            </div>
          </div>
          <div class="bg-blue-50 border border-blue-200 rounded-xl p-5 text-blue-950">
            <p class="text-lg"><strong>Reto:</strong> analizar evidencias, formular criterios verificables y anticipar riesgos en un caso organizacional.</p>
          </div>
          <p class="text-sm text-slate-500">Lunes 05/10/2026 · Sección A · IUPSM — Extensión Ciudad Ojeda</p>
        </div>
      `
    },
    {
      id: 'sis3-2',
      title: 'Hoy: de las ideas a la aplicación',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-slate-600 text-lg">Usaremos lo estudiado sobre las cinco actividades para analizar una situación concreta.</p>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-blue-50 border border-blue-200 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-blue-700">Analiza</p><h3 class="text-xl font-bold text-blue-950 mt-2">¿Qué evidencia ofrece el caso?</h3></div>
            <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-emerald-700">Propón</p><h3 class="text-xl font-bold text-emerald-950 mt-2">¿Cómo comprobarías que está bien?</h3></div>
          </div>
          <div class="bg-slate-900 text-white rounded-2xl p-5">
            <p class="text-xs uppercase tracking-widest font-bold text-slate-300 mb-3">Ruta de trabajo</p>
            <div class="flex flex-wrap gap-2 text-sm font-bold">
              <span class="bg-blue-600 rounded-full px-3 py-2">Recordar</span><span class="text-slate-400 self-center">→</span>
              <span class="bg-indigo-600 rounded-full px-3 py-2">Analizar el caso</span><span class="text-slate-400 self-center">→</span>
              <span class="bg-emerald-600 rounded-full px-3 py-2">Completar la ficha</span><span class="text-slate-400 self-center">→</span>
              <span class="bg-teal-600 rounded-full px-3 py-2">Compartir y mejorar</span>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'sis3-3',
      title: 'Objetivo y producto de aprendizaje',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-6 rounded-2xl shadow-lg">
            <p class="text-xs uppercase tracking-widest font-bold text-blue-100">Objetivo I.3</p>
            <p class="text-2xl font-bold mt-2">Explicar las actividades de la Ingeniería de Software mediante el análisis de un caso.</p>
          </div>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white border-2 border-blue-100 rounded-xl p-5"><h4 class="font-bold text-blue-900">En tu ficha</h4><ul class="list-disc list-inside text-sm text-slate-700 mt-3 space-y-2"><li>Un hecho concreto por actividad.</li><li>Un criterio de éxito comprobable.</li><li>Un riesgo relacionado con la evidencia.</li><li>Dos relaciones entre actividades.</li></ul></div>
            <div class="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-5"><h4 class="font-bold text-emerald-900">Actividad formativa</h4><p class="text-sm text-emerald-950 mt-3">La ficha sirve para recibir retroalimentación y mejorar el análisis; no tiene ponderación sumativa.</p></div>
          </div>
        </div>
      `
    },
    {
      id: 'sis3-4',
      title: 'Herramienta de análisis: hecho → criterio → riesgo',
      contentHtml: `
        <div class="space-y-6">
          <div class="grid md:grid-cols-3 gap-3">
            <div class="bg-blue-50 border-2 border-blue-200 rounded-xl p-5"><p class="text-xs uppercase font-bold tracking-wider text-blue-700">1 · Hecho / evidencia</p><p class="text-lg font-bold text-blue-950 mt-2">¿Qué dice u ocurre en el caso?</p><p class="text-sm text-blue-900 mt-2">Usa un dato concreto, no una opinión.</p></div>
            <div class="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-5"><p class="text-xs uppercase font-bold tracking-wider text-emerald-700">2 · Criterio verificable</p><p class="text-lg font-bold text-emerald-950 mt-2">¿Qué observamos o probamos?</p><p class="text-sm text-emerald-900 mt-2">Debe existir evidencia de cumplimiento.</p></div>
            <div class="bg-rose-50 border-2 border-rose-200 rounded-xl p-5"><p class="text-xs uppercase font-bold tracking-wider text-rose-700">3 · Riesgo</p><p class="text-lg font-bold text-rose-950 mt-2">¿Qué podría ocurrir si falla?</p><p class="text-sm text-rose-900 mt-2">Explica una consecuencia plausible.</p></div>
          </div>
          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-4"><p class="text-xs font-bold text-rose-700">Demasiado vago</p><p class="font-semibold text-rose-950 mt-1">«El sistema debe funcionar bien»</p></div>
            <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4"><p class="text-xs font-bold text-emerald-700">Comprobable</p><p class="font-semibold text-emerald-950 mt-1">«La reserva de prueba aparece una vez en la lista correcta»</p></div>
          </div>
        </div>
      `
    },
    {
      id: 'sis3-5',
      title: 'Caso · Servicios de transporte El Faro',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-slate-900 text-white p-5 rounded-2xl">
            <div class="flex items-center gap-3"><span class="text-3xl">🚌</span><div><p class="text-xs uppercase tracking-widest font-bold text-slate-300">Escenario ficticio</p><h3 class="text-xl font-bold">Servicios de transporte El Faro</h3></div></div>
            <p class="text-sm leading-relaxed text-slate-200 mt-4">El Faro organiza viajes entre sectores de Ciudad Ojeda. Las reservaciones se anotan en un cuaderno y luego se copian a una hoja de cálculo; los cambios de ruta se comunican por mensajería. En dos fines de semana recientes, algunas reservas pagadas no aparecieron en la lista del conductor.</p>
          </div>
          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-blue-50 border border-blue-200 rounded-xl p-4"><h4 class="font-bold text-blue-900">Necesidad</h4><p class="text-sm text-blue-950 mt-1">Registrar reservas, emitir lista diaria de pasajeros y consultar pagos.</p></div>
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-4"><h4 class="font-bold text-amber-900">Condiciones y participantes</h4><p class="text-sm text-amber-950 mt-1">Fecha acordada y presupuesto fijo. La tesorera aprueba gastos; el despachador coordina; los conductores tienen distintos niveles de experiencia digital.</p></div>
          </div>
          <div class="bg-violet-50 border border-violet-200 rounded-xl p-4 text-sm text-violet-950"><strong>Nuevas solicitudes:</strong> cambios de ruta desde el teléfono y reportes mensuales.</div>
          <p class="text-xs text-slate-500">El escenario es ficticio. No compartas información personal o confidencial.</p>
        </div>
      `
    },
    {
      id: 'sis3-6',
      title: 'Ejemplo: actividad Proceso',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-blue-600 text-white rounded-xl p-4"><p class="text-xl font-bold">De la evidencia a una comprobación</p></div>
          <div class="grid md:grid-cols-3 gap-3">
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-4"><p class="text-xs font-bold text-slate-500">HECHO</p><p class="text-sm text-slate-800 mt-2">La reserva se transcribe; algunas se omiten en la lista del conductor.</p></div>
            <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4"><p class="text-xs font-bold text-emerald-700">CRITERIO</p><p class="text-sm text-emerald-950 mt-2">Una reserva de prueba aparece una sola vez en la lista diaria correcta.</p></div>
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-4"><p class="text-xs font-bold text-rose-700">RIESGO</p><p class="text-sm text-rose-950 mt-2">Una transcripción duplicada o un cambio no comunicado puede causar omisiones.</p></div>
          </div>
          <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-4"><p class="font-bold text-indigo-950">Comprueba el criterio</p><p class="text-sm text-indigo-900 mt-1">¿Detectaría la falla descrita en el caso?</p></div>
          <p class="text-xs text-slate-500">Este ejemplo usa El Faro; tu pareja puede trabajar con otro escenario.</p>
        </div>
      `
    },
    {
      id: 'sis3-6-ferreteria',
      title: 'Caso alternativo · Ferretería La Tuerca',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-amber-600 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-amber-100">Escenario ficticio 2</p><h3 class="text-xl font-bold mt-1">Ferretería La Tuerca</h3></div>
          <div class="bg-white border border-slate-200 rounded-xl p-5"><p class="text-slate-700">Las entradas de mercancía se anotan en cuadernos y luego en hojas de cálculo. Los conteos no siempre coinciden y algunos productos se agotan sin aviso.</p></div>
          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-blue-50 border border-blue-200 rounded-xl p-4"><h4 class="font-bold text-blue-900">Necesidad</h4><p class="text-sm text-blue-950 mt-1">Registrar productos y ventas, consultar existencias y avisar cuando el stock sea bajo.</p></div>
            <div class="bg-violet-50 border border-violet-200 rounded-xl p-4"><h4 class="font-bold text-violet-900">Condiciones y personas</h4><p class="text-sm text-violet-950 mt-1">Presupuesto fijo y fecha acordada. El dueño aprueba, el encargado recibe mercancía y los cajeros venden; uno requiere apoyo con computadoras.</p></div>
          </div>
          <div class="bg-rose-50 border border-rose-200 rounded-xl p-4 text-sm text-rose-950"><strong>Nuevas solicitudes:</strong> historial de precios de proveedores y saldos de clientes a crédito.</div>
          <p class="text-xs text-slate-500">Caso inventado para la actividad; no representa un negocio real.</p>
        </div>
      `
    },
    {
      id: 'sis3-6-consultorio',
      title: 'Caso alternativo · Consultorio Vida Norte',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-teal-700 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-teal-100">Escenario ficticio 3</p><h3 class="text-xl font-bold mt-1">Consultorio Vida Norte</h3></div>
          <div class="bg-white border border-slate-200 rounded-xl p-5"><p class="text-slate-700">Las citas se anotan en una agenda y se coordinan por mensajería. Se han duplicado algunas citas y ciertas cancelaciones no se reflejan a tiempo.</p></div>
          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-blue-50 border border-blue-200 rounded-xl p-4"><h4 class="font-bold text-blue-900">Necesidad</h4><p class="text-sm text-blue-950 mt-1">Organizar citas, registrar asistencia y consultar el estado de pago.</p></div>
            <div class="bg-violet-50 border border-violet-200 rounded-xl p-4"><h4 class="font-bold text-violet-900">Condiciones y personas</h4><p class="text-sm text-violet-950 mt-1">La dirección aprueba gastos; recepción gestiona la agenda y los profesionales consultan horarios. El presupuesto es fijo y se comparte el equipo disponible.</p></div>
          </div>
          <div class="bg-rose-50 border border-rose-200 rounded-xl p-4 text-sm text-rose-950"><strong>Condición crítica:</strong> limitar el acceso a la información según el rol. Después solicitan recordatorios y reportes mensuales.</div>
          <p class="text-xs text-slate-500">Caso inventado. No usar datos reales de pacientes ni información personal.</p>
        </div>
      `
    },
    {
      id: 'sis3-6-panaderia',
      title: 'Caso alternativo · Panadería La Espiga',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-orange-600 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-orange-100">Escenario ficticio 4</p><h3 class="text-xl font-bold mt-1">Panadería La Espiga</h3></div>
          <div class="bg-white border border-slate-200 rounded-xl p-5"><p class="text-slate-700">Los pedidos llegan por llamadas y mensajes y se copian en papel. En los cambios de turno se han perdido pedidos especiales y la producción diaria se calcula manualmente.</p></div>
          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-blue-50 border border-blue-200 rounded-xl p-4"><h4 class="font-bold text-blue-900">Necesidad</h4><p class="text-sm text-blue-950 mt-1">Registrar pedidos, preparar la lista diaria de producción y consultar ingredientes disponibles.</p></div>
            <div class="bg-violet-50 border border-violet-200 rounded-xl p-4"><h4 class="font-bold text-violet-900">Condiciones y personas</h4><p class="text-sm text-violet-950 mt-1">Fecha de lanzamiento antes de temporada alta y presupuesto fijo. La encargada aprueba; panaderos y vendedores trabajan por turnos y con distinta experiencia digital.</p></div>
          </div>
          <div class="bg-rose-50 border border-rose-200 rounded-xl p-4 text-sm text-rose-950"><strong>Nuevas solicitudes:</strong> coordinar entregas a domicilio y mostrar información nutricional.</div>
          <p class="text-xs text-slate-500">Caso inventado para la actividad; no representa un negocio real.</p>
        </div>
      `
    },
    {
      id: 'sis3-6-caso-baru',
      title: 'Caso 5 · Restaurante El Barú (solo ejemplo)',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-rose-700 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-rose-100">Escenario ficticio 5</p><h3 class="text-xl font-bold mt-1">Restaurante El Barú</h3></div>
          <div class="bg-white border border-slate-200 rounded-xl p-5"><p class="text-slate-700">Las reservas se anotan en un cuaderno y luego se copian a una hoja. Los pedidos del salón se llevan de palabra a la cocina y algunas mesas se han perdido. Las cuentas se calculan a mano y se han presentado cargos equivocados.</p></div>
          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-blue-50 border border-blue-200 rounded-xl p-4"><h4 class="font-bold text-blue-900">Necesidad</h4><p class="text-sm text-blue-950 mt-1">Registrar reservas y pedidos, enviar la lista diaria a la cocina y consultar el estado de cuenta.</p></div>
            <div class="bg-violet-50 border border-violet-200 rounded-xl p-4"><h4 class="font-bold text-violet-900">Condiciones y personas</h4><p class="text-sm text-violet-950 mt-1">Fecha de apertura antes de la temporada de fiestas y presupuesto fijo. El dueño decide, los meseros toman el pedido, la cocina lo recibe y parte del personal tiene poca experiencia con computadoras.</p></div>
          </div>
          <div class="bg-rose-50 border border-rose-200 rounded-xl p-4 text-sm text-rose-950"><strong>Nuevas solicitudes:</strong> pedidos a domicilio y reporte diario de ventas.</div>
          <div class="bg-slate-900 text-white rounded-xl p-4 text-sm"><strong>Este caso no se asigna a ninguna pareja.</strong> Se usa únicamente para mostrar un ejemplo resuelto de la ficha.</div>
        </div>
      `
    },
    {
      id: 'sis3-6-ejemplo-baru',
      title: 'Ejemplo completo · ficha de El Barú',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-rose-700 text-white rounded-xl p-4 flex items-center justify-between">
            <div><p class="text-xs uppercase tracking-widest font-bold text-rose-100">Ejemplo resuelto · no copies</p><h3 class="text-xl font-bold">Restaurante El Barú</h3></div>
            <span class="text-3xl">✅</span>
          </div>

          <div class="overflow-x-auto border border-slate-200 rounded-xl">
            <div class="min-w-[760px]">
              <div class="grid grid-cols-[130px_1fr_1fr_1fr] bg-slate-900 text-white text-xs font-bold"><div class="p-3">Actividad</div><div class="p-3">Hecho del caso</div><div class="p-3">Criterio verificable</div><div class="p-3">Riesgo</div></div>
              <div class="divide-y divide-slate-200 text-xs">
                <div class="grid grid-cols-[130px_1fr_1fr_1fr]">
                  <div class="p-3 font-bold text-blue-800">Proceso</div>
                  <div class="p-3 text-slate-700">Las reservas pasan del cuaderno a una hoja y los pedidos se dan de palabra a la cocina.</div>
                  <div class="p-3 text-slate-700">Una reserva de prueba de 4 personas queda registrada una sola vez y su pedido aparece en la lista de la cocina.</div>
                  <div class="p-3 text-slate-700">La mesa se pierde o se duplica y la cocina recibe el pedido de otra mesa.</div>
                </div>
                <div class="grid grid-cols-[130px_1fr_1fr_1fr] bg-slate-50">
                  <div class="p-3 font-bold text-indigo-800">Proyectos</div>
                  <div class="p-3 text-slate-700">La apertura es antes de temporada de fiestas, con presupuesto fijo; luego piden reparto a domicilio y reporte diario.</div>
                  <div class="p-3 text-slate-700">El dueño aprueba una lista priorizada de entregables que cabe en la fecha y el presupuesto acordados.</div>
                  <div class="p-3 text-slate-700">Sumar las solicitudes nuevas sin ajustar alcance retrasa la apertura o deja el sistema incompleto.</div>
                </div>
                <div class="grid grid-cols-[130px_1fr_1fr_1fr]">
                  <div class="p-3 font-bold text-violet-800">Personas</div>
                  <div class="p-3 text-slate-700">Decide el dueño, toman pedidos los meseros y los recibe la cocina; parte del personal tiene poca experiencia con computadoras.</div>
                  <div class="p-3 text-slate-700">Cada rol completa su tarea en un ensayo: el mesero registra un pedido y la cocina lo recibe sin preguntas.</div>
                  <div class="p-3 text-slate-700">Si el mesero no puede usarlo, vuelve al cuaderno y los pedidos se pierden.</div>
                </div>
                <div class="grid grid-cols-[130px_1fr_1fr_1fr] bg-slate-50">
                  <div class="p-3 font-bold text-pink-800">Producto</div>
                  <div class="p-3 text-slate-700">Se requiere registrar reservas y pedidos, enviar la lista a la cocina y consultar la cuenta.</div>
                  <div class="p-3 text-slate-700">Un pedido de prueba de 3 platos llega a la lista de cocina con la mesa correcta y el importe en la cuenta.</div>
                  <div class="p-3 text-slate-700">Entregar solo el registro de reservas deja la cocina y las cuentas manuales.</div>
                </div>
                <div class="grid grid-cols-[130px_1fr_1fr_1fr]">
                  <div class="p-3 font-bold text-emerald-800">Calidad</div>
                  <div class="p-3 text-slate-700">Las cuentas se calculan a mano y se han presentado cargos equivocados.</div>
                  <div class="p-3 text-slate-700">Al cerrar tres pedidos de prueba, el total por mesa coincide con lo pedido y con lo cobrado.</div>
                  <div class="p-3 text-slate-700">Un cobro incorrecto genera reclamos y pérdida de confianza en el restaurante.</div>
                </div>
              </div>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-blue-50 border border-blue-200 rounded-xl p-3 text-sm"><strong>Relación 1:</strong> si el proceso de reservas falla, el producto pierde la información de la mesa porque el sistema solo guarda lo que se copió.</div>
            <div class="bg-violet-50 border border-violet-200 rounded-xl p-3 text-sm"><strong>Relación 2:</strong> si las personas no ensayan, la calidad no se puede verificar porque nadie comprueba si el sistema sirve a quien opera.</div>
          </div>

          <p class="text-xs text-slate-500">Ejemplo de referencia de un caso que no se asigna. Tu ficha debe tratar el caso de tu pareja.</p>
        </div>
      `
    },
    {
      id: 'sis3-7',
      title: 'Práctica guiada en parejas · 20 min',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-fuchsia-600 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-fuchsia-100">Primer ensayo</p><h3 class="text-xl font-bold">Trabajen con un caso distinto si es posible</h3></div>
          <ol class="space-y-3 text-sm">
            <li class="flex gap-3 bg-white border rounded-xl p-4"><span class="font-bold text-fuchsia-700">1</span><span>Trabajen con el caso que les asignen o elijan: El Faro, La Tuerca, Vida Norte o La Espiga.</span></li>
            <li class="flex gap-3 bg-white border rounded-xl p-4"><span class="font-bold text-fuchsia-700">2</span><span>Elijan una actividad distinta de Proceso y señalen un hecho del caso.</span></li>
            <li class="flex gap-3 bg-white border rounded-xl p-4"><span class="font-bold text-fuchsia-700">3</span><span>Formulen un criterio comprobable y anticipen un riesgo.</span></li>
            <li class="flex gap-3 bg-white border rounded-xl p-4"><span class="font-bold text-fuchsia-700">4</span><span>Compartan y mejoren la propuesta. Usen el mismo caso en la ficha individual.</span></li>
          </ol>
          <div class="bg-fuchsia-50 border border-fuchsia-200 rounded-xl p-4 text-sm text-fuchsia-950"><strong>Meta:</strong> que los equipos analicen escenarios distintos para comparar respuestas en plenaria.</div>
        </div>
      `
    },
    {
      id: 'sis3-8',
      title: 'Ficha 1 · análisis individual del caso',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-emerald-600 text-white rounded-xl p-4 flex items-center justify-between"><div><p class="text-xs uppercase tracking-widest font-bold text-emerald-100">35 min · formativa</p><h3 class="text-xl font-bold">Completa una fila por actividad</h3></div><span class="text-3xl">✍️</span></div>
          <div class="overflow-x-auto border border-slate-200 rounded-xl">
            <div class="min-w-[680px]">
              <div class="grid grid-cols-[120px_1fr_1fr_1fr] bg-slate-900 text-white text-xs font-bold"><div class="p-3">Actividad</div><div class="p-3">Hecho del caso</div><div class="p-3">Criterio verificable</div><div class="p-3">Riesgo</div></div>
              <div class="divide-y divide-slate-200 text-xs">
                <div class="grid grid-cols-[120px_1fr_1fr_1fr] min-h-14"><div class="p-3 font-bold">Proceso</div><div class="p-3">________________</div><div class="p-3">________________</div><div class="p-3">________________</div></div>
                <div class="grid grid-cols-[120px_1fr_1fr_1fr] min-h-14 bg-slate-50"><div class="p-3 font-bold">Proyectos</div><div class="p-3">________________</div><div class="p-3">________________</div><div class="p-3">________________</div></div>
                <div class="grid grid-cols-[120px_1fr_1fr_1fr] min-h-14"><div class="p-3 font-bold">Personas</div><div class="p-3">________________</div><div class="p-3">________________</div><div class="p-3">________________</div></div>
                <div class="grid grid-cols-[120px_1fr_1fr_1fr] min-h-14 bg-slate-50"><div class="p-3 font-bold">Producto</div><div class="p-3">________________</div><div class="p-3">________________</div><div class="p-3">________________</div></div>
                <div class="grid grid-cols-[120px_1fr_1fr_1fr] min-h-14"><div class="p-3 font-bold">Calidad</div><div class="p-3">________________</div><div class="p-3">________________</div><div class="p-3">________________</div></div>
              </div>
            </div>
          </div>
          <p class="text-sm text-slate-700"><strong>Usa el caso asignado a tu pareja en las cinco filas.</strong> Registra las respuestas en el cuaderno u hoja propia; no necesitas imprimir.</p>
        </div>
      `
    },
    {
      id: 'sis3-9',
      title: 'Ficha 2 · relaciones y revisión personal',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-blue-700 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-blue-100">Completa después de la matriz</p><h3 class="text-xl font-bold">Conecta las actividades</h3></div>
          <div class="space-y-3">
            <div class="bg-white border-2 border-blue-100 rounded-xl p-4"><p class="font-bold text-blue-950">Relación 1</p><p class="text-sm text-slate-700 mt-2">Si __________________ no se atiende, __________________ se afecta porque __________________.</p></div>
            <div class="bg-white border-2 border-blue-100 rounded-xl p-4"><p class="font-bold text-blue-950">Relación 2</p><p class="text-sm text-slate-700 mt-2">Si __________________ no se atiende, __________________ se afecta porque __________________.</p></div>
          </div>
          <div class="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <p class="font-bold text-slate-900">Antes de compartir, revisa:</p>
            <div class="grid md:grid-cols-2 gap-2 text-sm text-slate-700 mt-3">
              <p>□ Incluí hechos del caso para las cinco actividades.</p><p>□ Mis criterios pueden comprobarse.</p>
              <p>□ Vinculé cada riesgo con evidencia.</p><p>□ Expliqué dos relaciones entre actividades.</p>
            </div>
          </div>
          <p class="text-sm text-slate-700"><strong>Sin impresión:</strong> copia las dos relaciones y la revisión en tu cuaderno.</p>
        </div>
      `
    },
    {
      id: 'sis3-10',
      title: 'Preguntas de apoyo para avanzar',
      contentHtml: `
        <div class="space-y-5">
          <p class="text-slate-600">Si te atascas, vuelve al hecho del caso. Puede haber varias respuestas válidas si están respaldadas.</p>
          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-4"><h4 class="font-bold text-indigo-950">Proyectos</h4><p class="text-sm text-indigo-900 mt-1">¿Qué hacen las solicitudes nuevas con fecha, alcance y presupuesto?</p></div>
            <div class="bg-violet-50 border border-violet-200 rounded-xl p-4"><h4 class="font-bold text-violet-950">Personas</h4><p class="text-sm text-violet-900 mt-1">¿Quién paga, coordina y usará el sistema?</p></div>
            <div class="bg-pink-50 border border-pink-200 rounded-xl p-4"><h4 class="font-bold text-pink-950">Producto</h4><p class="text-sm text-pink-900 mt-1">¿Qué entregables responden a las necesidades descritas?</p></div>
            <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4"><h4 class="font-bold text-emerald-950">Calidad</h4><p class="text-sm text-emerald-900 mt-1">¿Qué prueba detectaría reservas omitidas o pagos inconsistentes?</p></div>
          </div>
          <div class="bg-slate-900 text-white rounded-xl p-4 text-center"><p class="text-xs uppercase tracking-widest font-bold text-slate-300">Chequeo final</p><p class="text-lg font-bold mt-2">¿Mi criterio se puede observar, medir o probar?</p></div>
        </div>
      `
    },
    {
      id: 'sis3-11',
      title: 'Plenaria · matriz común',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-teal-700 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-teal-100">Discusión guiada</p><h3 class="text-xl font-bold mt-1">Una evidencia útil por actividad</h3></div>
          <div class="overflow-x-auto border border-slate-200 rounded-xl">
            <div class="min-w-[680px]">
              <div class="grid grid-cols-4 bg-slate-900 text-white rounded-t-xl text-xs font-bold"><div class="p-3">Actividad</div><div class="p-3">Evidencia del caso</div><div class="p-3">Criterio verificable</div><div class="p-3">Riesgo</div></div>
              <div class="divide-y divide-slate-200 text-sm">
                <div class="grid grid-cols-4 min-h-14"><div class="p-3 font-semibold">Proceso</div><div class="p-3">__________</div><div class="p-3">__________</div><div class="p-3">__________</div></div>
                <div class="grid grid-cols-4 min-h-14 bg-slate-50"><div class="p-3 font-semibold">Proyectos / Personas</div><div class="p-3">__________</div><div class="p-3">__________</div><div class="p-3">__________</div></div>
                <div class="grid grid-cols-4 min-h-14"><div class="p-3 font-semibold">Producto / Calidad</div><div class="p-3">__________</div><div class="p-3">__________</div><div class="p-3">__________</div></div>
              </div>
            </div>
          </div>
          <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-950"><strong>Profundiza:</strong> ¿qué observación permite verificar el criterio? ¿Qué actividad se afecta si aparece ese riesgo?</div>
        </div>
      `
    },
    {
      id: 'sis3-12',
      title: 'Ficha 3 · coevaluación',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-cyan-700 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-cyan-100">Revisar para ayudar a mejorar</p><h3 class="text-xl font-bold mt-1">Lista de cotejo entre pares</h3></div>
          <div class="overflow-x-auto border border-slate-200 rounded-xl">
            <div class="min-w-[600px]">
              <div class="grid grid-cols-[1fr_60px_60px_60px] bg-slate-900 text-white text-xs font-bold"><div class="p-3">Criterio</div><div class="p-3 text-center">C</div><div class="p-3 text-center">NC</div><div class="p-3 text-center">NA</div></div>
              <div class="divide-y divide-slate-200 text-sm">
                <div class="grid grid-cols-[1fr_60px_60px_60px] min-h-11"><div class="p-2">Hay evidencia específica para cada actividad.</div><div class="p-2 text-center">□</div><div class="p-2 text-center">□</div><div class="p-2 text-center">□</div></div>
                <div class="grid grid-cols-[1fr_60px_60px_60px] min-h-11 bg-slate-50"><div class="p-2">Los criterios de éxito pueden comprobarse.</div><div class="p-2 text-center">□</div><div class="p-2 text-center">□</div><div class="p-2 text-center">□</div></div>
                <div class="grid grid-cols-[1fr_60px_60px_60px] min-h-11"><div class="p-2">Los riesgos se relacionan con hechos del caso.</div><div class="p-2 text-center">□</div><div class="p-2 text-center">□</div><div class="p-2 text-center">□</div></div>
                <div class="grid grid-cols-[1fr_60px_60px_60px] min-h-11 bg-slate-50"><div class="p-2">Se explican dos relaciones entre actividades.</div><div class="p-2 text-center">□</div><div class="p-2 text-center">□</div><div class="p-2 text-center">□</div></div>
                <div class="grid grid-cols-[1fr_60px_60px_60px] min-h-11"><div class="p-2">La ficha es comprensible y cuida datos personales.</div><div class="p-2 text-center">□</div><div class="p-2 text-center">□</div><div class="p-2 text-center">□</div></div>
              </div>
            </div>
          </div>
          <p class="text-xs text-slate-500">C = cumple · NC = no cumple · NA = no aplica. Es retroalimentación, no una calificación.</p>
        </div>
      `
    },
    {
      id: 'sis3-13',
      title: 'Ficha 3 · preguntas de retroalimentación',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-indigo-700 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-indigo-100">Después de revisar la lista</p><h3 class="text-xl font-bold mt-1">Deja dos preguntas útiles a tu pareja</h3></div>
          <div class="space-y-4">
            <div class="bg-blue-50 border-2 border-blue-200 rounded-xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-blue-700">Pregunta 1</p><p class="text-lg font-semibold text-blue-950 mt-2">¿Qué dato respalda el criterio más importante?</p><p class="text-sm text-slate-600 mt-4">Respuesta / sugerencia: ______________________________________________</p></div>
            <div class="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-indigo-700">Pregunta 2</p><p class="text-lg font-semibold text-indigo-950 mt-2">¿Cómo comprobarías que ese criterio se cumple?</p><p class="text-sm text-slate-600 mt-4">Respuesta / sugerencia: ______________________________________________</p></div>
          </div>
          <p class="text-sm text-slate-700">Escribe preguntas que ayuden a mejorar; no asignes una nota ni reescribas la ficha.</p>
        </div>
      `
    },
    {
      id: 'sis3-14',
      title: 'Cierre · ticket de salida',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-gradient-to-br from-slate-900 to-blue-900 text-white p-6 rounded-2xl"><p class="text-xs uppercase tracking-widest font-bold text-blue-200">Antes de cerrar</p><h3 class="text-2xl font-bold mt-2">Responde brevemente</h3></div>
          <div class="space-y-3">
            <div class="flex gap-4 bg-white border-l-4 border-blue-500 rounded-xl p-4"><span class="font-bold text-blue-600">1</span><p class="text-slate-800">Elige una actividad y formula un criterio que pueda comprobarse.</p></div>
            <div class="flex gap-4 bg-white border-l-4 border-indigo-500 rounded-xl p-4"><span class="font-bold text-indigo-600">2</span><p class="text-slate-800">Nombra una dependencia entre dos actividades y explica por qué.</p></div>
          </div>
          <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4"><p class="font-bold text-emerald-950">Entrega</p><p class="text-sm text-emerald-900 mt-1">Completa lo pendiente y conserva las preguntas de retroalimentación.</p></div>
        </div>
      `
    },
    {
      id: 'sis3-15',
      title: 'Fuentes',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-slate-50 border border-slate-200 rounded-2xl p-5">
            <p class="font-bold text-slate-900">Para ampliar</p>
            <ul class="list-disc list-inside text-sm text-slate-700 mt-3 space-y-2">
              <li>Programa analítico de SISTEMAS I, Unidad I, objetivo I.3.</li>
              <li>Pressman, R. (1999). <em>Ingeniería del software: un enfoque práctico</em>, cap. 1, pp. 12–14.</li>
              <li>Sommerville, I. (2004). <em>Ingeniería de software</em>, cap. 1, pp. 5–9.</li>
            </ul>
          </div>
          <p class="text-xs text-slate-400 text-center">Los cuatro escenarios son ficticios y se utilizan con fines formativos.</p>
        </div>
      `
    }
  ]
};
