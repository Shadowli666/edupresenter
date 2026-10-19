import { Module } from '../../types';

export const SISTEMAS_I_MODULE_3: Module = {
  id: 'sis-mod-3',
  title: '3. Estudio de caso: actividades de la Ingeniería de Software',
  description:
    'Semana 3: aplicación de las cinco actividades de la Ingeniería de Software a un caso ficticio (hecho → criterio comprobable → riesgo). Unidad I, objetivo I.3.',
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
              <p class="text-slate-500 mt-1">Aplicación de las cinco actividades de la Ingeniería de Software</p>
            </div>
          </div>
          <div class="bg-blue-50 border border-blue-200 rounded-xl p-5 text-blue-950">
            <p class="text-lg">¿Cómo sabrías, <strong>antes de entregar un sistema</strong>, que va a resolver el problema de una empresa?</p>
          </div>
          <p class="text-sm text-slate-500">Lunes 05/10/2026 · Sección A · IUPSM — Extensión Ciudad Ojeda</p>
        </div>
      `,
      notes: `Plan completo: 03-Clases/SISTEMAS-I/S03-contenido-clase-lunes.md. 16:00 a 16:03. Lanzar la pregunta de la portada y escuchar 2 respuestas sin corregir; se responde al final con el ticket de salida (con un criterio comprobable). En S2 solo se dio la teoría de las cinco actividades: hoy es la primera aplicación. No volver a explicarlas.`
    },
    {
      id: 'sis3-2',
      title: 'Lo que harás hoy',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-xl text-slate-800">Tomarás un <strong>caso ficticio</strong> y, para cada una de las cinco actividades, escribirás tres cosas:</p>
          <div class="flex flex-col md:flex-row items-stretch gap-3">
            <div class="flex-1 bg-blue-50 border-2 border-blue-200 rounded-xl p-4"><p class="text-xs uppercase font-bold tracking-wider text-blue-700">1 · Hecho</p><p class="font-semibold text-blue-950 mt-1">Lo que dice el caso</p></div>
            <div class="self-center text-2xl text-slate-400">→</div>
            <div class="flex-1 bg-emerald-50 border-2 border-emerald-200 rounded-xl p-4"><p class="text-xs uppercase font-bold tracking-wider text-emerald-700">2 · Criterio comprobable</p><p class="font-semibold text-emerald-950 mt-1">Cómo probarías que quedó bien</p></div>
            <div class="self-center text-2xl text-slate-400">→</div>
            <div class="flex-1 bg-rose-50 border-2 border-rose-200 rounded-xl p-4"><p class="text-xs uppercase font-bold tracking-wider text-rose-700">3 · Riesgo</p><p class="font-semibold text-rose-950 mt-1">Qué pasaría si falla</p></div>
          </div>
          <div class="grid md:grid-cols-3 gap-3 text-sm">
            <div class="bg-white border rounded-xl p-3"><strong>Primero</strong> vemos un ejemplo resuelto.</div>
            <div class="bg-white border rounded-xl p-3"><strong>Luego</strong> lo ensayas en pareja.</div>
            <div class="bg-white border rounded-xl p-3"><strong>Al final</strong> completas tu ficha y otro compañero la revisa.</div>
          </div>
          <p class="text-sm text-slate-500">Objetivo I.3: explicar las actividades de la Ingeniería de Software mediante el análisis de un caso. Actividad formativa (0 %).</p>
        </div>
      `,
      notes: `16:03 a 16:05. Mostrar el producto final antes de los casos: así el estudiante sabe para qué lee. Decir en voz alta que la ficha no lleva nota (0 %), pero que la prueba de la Unidad I pedirá citar datos de un caso y redactar un criterio comprobable.`
    },
    {
      id: 'sis3-3',
      title: 'Recuerda: las cinco actividades',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-slate-600">Antes de mirar la diapositiva, dilas de memoria. Cada actividad mira el caso con una pregunta distinta:</p>
          <div class="space-y-2">
            <div data-reveal class="flex gap-4 items-center bg-blue-50 border border-blue-200 rounded-xl p-3"><span class="font-bold text-blue-900 w-56">Proceso</span><span class="text-slate-800">¿Cómo se trabaja: qué pasos, quién los hace y qué produce cada uno?</span></div>
            <div data-reveal class="flex gap-4 items-center bg-indigo-50 border border-indigo-200 rounded-xl p-3"><span class="font-bold text-indigo-900 w-56">Administración de Proyectos</span><span class="text-slate-800">¿Qué alcance, fecha, costo y riesgos tiene el trabajo?</span></div>
            <div data-reveal class="flex gap-4 items-center bg-violet-50 border border-violet-200 rounded-xl p-3"><span class="font-bold text-violet-900 w-56">Personas</span><span class="text-slate-800">¿Quién decide, quién opera y quién usará el sistema?</span></div>
            <div data-reveal class="flex gap-4 items-center bg-pink-50 border border-pink-200 rounded-xl p-3"><span class="font-bold text-pink-900 w-56">Producto</span><span class="text-slate-800">¿Qué se entrega exactamente?</span></div>
            <div data-reveal class="flex gap-4 items-center bg-emerald-50 border border-emerald-200 rounded-xl p-3"><span class="font-bold text-emerald-900 w-56">Calidad</span><span class="text-slate-800">¿Cómo sabemos que quedó bien?</span></div>
          </div>
        </div>
      `,
      notes: `16:05 a 16:08 (recuerdo activo, no reexplicación). Pedir al grupo que nombre las cinco antes de revelar cada fila. Usar el nombre completo «Administración de Proyectos»: la prueba no acepta «Proyectos» si no queda claro. Las preguntas son una síntesis didáctica de S2 (Pressman 1999, cap. 1; Sommerville 2004, cap. 1), no definiciones nuevas.`
    },
    {
      id: 'sis3-4',
      title: 'La herramienta: hecho → criterio → riesgo',
      contentHtml: `
        <div class="space-y-5">
          <div class="grid md:grid-cols-3 gap-3">
            <div data-reveal class="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
              <p class="text-xs uppercase font-bold tracking-wider text-blue-700">1 · Hecho</p>
              <p class="font-semibold text-blue-950 mt-2">Un dato que está escrito en el caso.</p>
              <p class="text-sm text-blue-900 mt-3 border-t border-blue-200 pt-2">✔ ¿Puedo señalar la línea del caso que lo dice?</p>
            </div>
            <div data-reveal class="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-4">
              <p class="text-xs uppercase font-bold tracking-wider text-emerald-700">2 · Criterio comprobable</p>
              <p class="font-semibold text-emerald-950 mt-2">Una prueba concreta que termina en «cumple» o «no cumple».</p>
              <p class="text-sm text-emerald-900 mt-3 border-t border-emerald-200 pt-2">✔ ¿Dos personas que hagan la prueba llegarían al mismo resultado?</p>
            </div>
            <div data-reveal class="bg-rose-50 border-2 border-rose-200 rounded-xl p-4">
              <p class="text-xs uppercase font-bold tracking-wider text-rose-700">3 · Riesgo</p>
              <p class="font-semibold text-rose-950 mt-2">Lo que ocurriría si eso sale mal.</p>
              <p class="text-sm text-rose-900 mt-3 border-t border-rose-200 pt-2">✔ ¿Se desprende del hecho, o lo inventé?</p>
            </div>
          </div>
          <div data-reveal class="grid md:grid-cols-2 gap-3">
            <div class="bg-white border border-rose-200 rounded-xl p-4"><p class="text-xs font-bold text-rose-700">✘ No se puede probar</p><p class="font-semibold text-slate-900 mt-1">«El sistema debe funcionar bien»</p></div>
            <div class="bg-white border border-emerald-200 rounded-xl p-4"><p class="text-xs font-bold text-emerald-700">✔ Se puede probar</p><p class="font-semibold text-slate-900 mt-1">«Se registra una reserva de prueba y aparece una sola vez en la lista del día»</p></div>
          </div>
        </div>
      `,
      notes: `16:08 a 16:16 (8 min). Pregunta detonadora: «¿qué evidencia habría permitido detectar antes una reserva perdida?». Revelar las tres columnas una a una y detenerse en el criterio: es lo que más cuesta. Un criterio comprobable dice qué se hace (la prueba), con qué dato y qué se observa al final; si la respuesta depende de la opinión de quien mira, no es comprobable. Es el mismo tipo de criterio de aceptación que pedirá la prueba de la Unidad I.`
    },
    {
      id: 'sis3-5',
      title: '¿Es comprobable?',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-slate-600">Ensayo rápido con un ejemplo que no es de ningún caso: el préstamo de libros de una biblioteca.</p>
          <div class="grid md:grid-cols-2 gap-3">
            <div data-quiz class="bg-white border rounded-xl p-4 space-y-2">
              <p class="font-semibold">¿Cuál es un criterio comprobable?</p>
              <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">El préstamo debe ser fácil y confiable.</button>
              <button data-option data-correct class="block w-full text-left border rounded-lg p-2 text-sm">Al prestar un libro de prueba, su estado cambia a «prestado» en el catálogo.</button>
              <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">Los usuarios deben quedar satisfechos con el préstamo.</button>
              <p data-explain class="text-sm text-slate-600">Hay una prueba (prestar un libro), un dato (ese libro) y un resultado observable (su estado).</p>
            </div>
            <div data-quiz class="bg-white border rounded-xl p-4 space-y-2">
              <p class="font-semibold">«La búsqueda debe ser rápida». ¿Qué le falta?</p>
              <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">Nada: ya se puede comprobar.</button>
              <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">Palabras más técnicas.</button>
              <button data-option data-correct class="block w-full text-left border rounded-lg p-2 text-sm">Qué búsqueda se hace y cuánto puede tardar como máximo.</button>
              <p data-explain class="text-sm text-slate-600">«Rápida» depende de quien opina; «menos de 3 segundos al buscar por título» se mide.</p>
            </div>
          </div>
        </div>
      `,
      notes: `16:16 a 16:22 (6 min). Votación a mano alzada antes de abrir cada respuesta. Si el grupo acierta rápido, pedir que mejoren en voz alta «el préstamo debe ser fácil» hasta volverlo comprobable. El ejemplo de biblioteca no coincide con ningún caso asignable para no adelantar respuestas.`
    },
    {
      id: 'sis3-6',
      title: 'Caso de ejemplo · Restaurante El Barú',
      contentHtml: `
        <div class="space-y-3">
          <div class="bg-rose-700 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-rose-100">Caso de ejemplo · no se asigna</p><h3 class="text-xl font-bold mt-1">🍽️ Restaurante El Barú</h3></div>
          <div class="bg-white border border-slate-200 rounded-xl p-4"><p class="text-slate-700">Las reservas se anotan en un cuaderno y luego se copian a una hoja. Los pedidos del salón se llevan de palabra a la cocina y algunas mesas se han perdido. Las cuentas se calculan a mano y se han presentado cargos equivocados.</p></div>
          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-blue-50 border border-blue-200 rounded-xl p-4"><h4 class="font-bold text-blue-900">Necesidad</h4><p class="text-sm text-blue-950 mt-1">Registrar reservas y pedidos, enviar la lista diaria a la cocina y consultar el estado de cuenta.</p></div>
            <div class="bg-violet-50 border border-violet-200 rounded-xl p-4"><h4 class="font-bold text-violet-900">Condiciones y personas</h4><p class="text-sm text-violet-950 mt-1">Apertura antes de la temporada de fiestas y presupuesto fijo. El dueño decide, los meseros toman el pedido, la cocina lo recibe y parte del personal tiene poca experiencia con computadoras.</p></div>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-950"><strong>Nuevas solicitudes:</strong> pedidos a domicilio y reporte diario de ventas.</div>
        </div>
      `,
      notes: `16:22 a 16:25 (3 min). Leer el caso en voz alta y pedir que señalen dos hechos (datos escritos). El Barú es el único caso que se resuelve en público y no se asigna a ninguna pareja, para que nadie copie la respuesta de su propio caso.`
    },
    {
      id: 'sis3-7',
      title: 'Ejemplo resuelto: una fila',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-slate-600">Actividad <strong>Proceso</strong> en El Barú, paso a paso:</p>
          <div class="space-y-2">
            <div data-reveal class="flex gap-4 bg-blue-50 border-2 border-blue-200 rounded-xl p-3"><span class="text-xs uppercase font-bold tracking-wider text-blue-700 w-24 shrink-0 pt-1">Hecho</span><p class="text-slate-900">Las reservas pasan del cuaderno a una hoja y los pedidos se dan <strong>de palabra</strong> a la cocina; algunas mesas se han perdido.</p></div>
            <div data-reveal class="flex gap-4 bg-emerald-50 border-2 border-emerald-200 rounded-xl p-3"><span class="text-xs uppercase font-bold tracking-wider text-emerald-700 w-24 shrink-0 pt-1">Criterio</span><p class="text-slate-900">Se registra una reserva de prueba para 4 personas: queda <strong>una sola vez</strong> y su pedido aparece en la lista de la cocina con la mesa correcta.</p></div>
            <div data-reveal class="flex gap-4 bg-rose-50 border-2 border-rose-200 rounded-xl p-3"><span class="text-xs uppercase font-bold tracking-wider text-rose-700 w-24 shrink-0 pt-1">Riesgo</span><p class="text-slate-900">La mesa se pierde o se duplica al copiarla, y la cocina prepara el pedido de otra mesa.</p></div>
          </div>
          <div data-reveal class="bg-slate-900 text-white rounded-xl p-4"><p class="font-bold">Comprueba tu fila</p><p class="text-sm text-slate-200 mt-1">Si la falla del caso volviera a ocurrir, ¿esta prueba la detectaría? Aquí sí: una mesa perdida no aparecería en la lista de la cocina.</p></div>
        </div>
      `,
      notes: `16:25 a 16:32 (7 min). Construir la fila en la pizarra antes de revelarla: preguntar primero cuál es el hecho, luego cómo lo probarían y por último qué pasa si falla. La comprobación final es la que deben repetir en cada fila de su ficha.`
    },
    {
      id: 'sis3-8',
      title: 'Así se ve una ficha completa',
      contentHtml: `
        <div class="space-y-3">
          <p class="text-sm"><span class="inline-block bg-rose-700 text-white text-xs font-bold uppercase tracking-wider rounded-full px-3 py-1 mr-2">Referencia · no copies</span><strong>Ficha de El Barú</strong></p>

          <div class="overflow-x-auto border border-slate-200 rounded-xl">
            <div class="min-w-[760px]">
              <div class="grid grid-cols-[150px_1fr_1fr_1fr] bg-slate-900 text-white text-xs font-bold"><div class="p-2">Actividad</div><div class="p-2">Hecho del caso</div><div class="p-2">Criterio comprobable</div><div class="p-2">Riesgo</div></div>
              <div class="divide-y divide-slate-200 text-xs">
                <div class="grid grid-cols-[150px_1fr_1fr_1fr]">
                  <div class="p-2 font-bold text-blue-800">Proceso</div>
                  <div class="p-2 text-slate-700">Reservas copiadas del cuaderno a una hoja; pedidos de palabra a la cocina.</div>
                  <div class="p-2 text-slate-700">Una reserva de prueba de 4 personas queda una sola vez y su pedido aparece en la lista de la cocina.</div>
                  <div class="p-2 text-slate-700">La mesa se pierde o se duplica y la cocina recibe el pedido de otra mesa.</div>
                </div>
                <div class="grid grid-cols-[150px_1fr_1fr_1fr] bg-slate-50">
                  <div class="p-2 font-bold text-indigo-800">Administración de Proyectos</div>
                  <div class="p-2 text-slate-700">Apertura antes de fiestas, presupuesto fijo; luego piden domicilio y reporte diario.</div>
                  <div class="p-2 text-slate-700">El dueño aprueba una lista priorizada de entregables que cabe en la fecha y el presupuesto.</div>
                  <div class="p-2 text-slate-700">Sumar lo nuevo sin ajustar el alcance retrasa la apertura.</div>
                </div>
                <div class="grid grid-cols-[150px_1fr_1fr_1fr]">
                  <div class="p-2 font-bold text-violet-800">Personas</div>
                  <div class="p-2 text-slate-700">Decide el dueño, piden los meseros, recibe la cocina; poca experiencia con computadoras.</div>
                  <div class="p-2 text-slate-700">En un ensayo, el mesero registra un pedido y la cocina lo recibe sin preguntar nada.</div>
                  <div class="p-2 text-slate-700">Si el mesero no puede usarlo, vuelve al cuaderno.</div>
                </div>
                <div class="grid grid-cols-[150px_1fr_1fr_1fr] bg-slate-50">
                  <div class="p-2 font-bold text-pink-800">Producto</div>
                  <div class="p-2 text-slate-700">Se requiere registrar reservas y pedidos, enviar la lista a la cocina y consultar la cuenta.</div>
                  <div class="p-2 text-slate-700">Un pedido de prueba de 3 platos llega a la cocina con la mesa correcta y su importe a la cuenta.</div>
                  <div class="p-2 text-slate-700">Entregar solo las reservas deja la cocina y las cuentas a mano.</div>
                </div>
                <div class="grid grid-cols-[150px_1fr_1fr_1fr]">
                  <div class="p-2 font-bold text-emerald-800">Calidad</div>
                  <div class="p-2 text-slate-700">Cuentas calculadas a mano, con cargos equivocados.</div>
                  <div class="p-2 text-slate-700">Al cerrar tres pedidos de prueba, el total por mesa coincide con lo pedido.</div>
                  <div class="p-2 text-slate-700">Un cobro incorrecto genera reclamos y pérdida de clientes.</div>
                </div>
              </div>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-blue-50 border border-blue-200 rounded-xl p-3"><strong>Relación 1:</strong> si el <em>proceso</em> de reservas falla, el <em>producto</em> pierde la mesa, porque el sistema solo guarda lo que se copió.</div>
            <div class="bg-violet-50 border border-violet-200 rounded-xl p-3"><strong>Relación 2:</strong> si las <em>personas</em> no ensayan, la <em>calidad</em> no se puede verificar, porque nadie prueba si el sistema le sirve a quien lo opera.</div>
          </div>
        </div>
      `,
      notes: `16:32 a 16:35 (3 min). No leer la tabla completa: señalar que cada criterio es una prueba con un dato concreto (4 personas, 3 platos, tres pedidos) y que las relaciones usan la forma «si A falla, B se afecta porque…». Dejarla disponible como modelo durante el trabajo individual.`
    },
    {
      id: 'sis3-9',
      title: 'Caso 1 · Servicios de transporte El Faro',
      contentHtml: `
        <div class="space-y-3">
          <div class="bg-sky-700 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-sky-100">Caso 1 · escenario ficticio</p><h3 class="text-xl font-bold mt-1">🚌 Servicios de transporte El Faro</h3></div>
          <div class="bg-white border border-slate-200 rounded-xl p-4"><p class="text-slate-700">El Faro organiza viajes entre sectores de Ciudad Ojeda. Las reservaciones se anotan en un cuaderno y luego se copian a una hoja de cálculo; los cambios de ruta se comunican por mensajería. En dos fines de semana recientes, algunas reservas pagadas no aparecieron en la lista del conductor.</p></div>
          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-blue-50 border border-blue-200 rounded-xl p-4"><h4 class="font-bold text-blue-900">Necesidad</h4><p class="text-sm text-blue-950 mt-1">Registrar reservas, emitir la lista diaria de pasajeros y consultar pagos.</p></div>
            <div class="bg-violet-50 border border-violet-200 rounded-xl p-4"><h4 class="font-bold text-violet-900">Condiciones y personas</h4><p class="text-sm text-violet-950 mt-1">Fecha acordada y presupuesto fijo. La tesorera aprueba gastos; el despachador coordina; los conductores tienen distintos niveles de experiencia digital.</p></div>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-950"><strong>Nuevas solicitudes:</strong> cambios de ruta desde el teléfono y reportes mensuales.</div>
        </div>
      `,
      notes: `16:35 a 16:42: encuadre de los cuatro casos (casos 1 a 4, unos 90 segundos cada uno). Asignar un caso por pareja procurando repartir los cuatro; cada estudiante usa el mismo caso en su ficha individual. Anclas para orientar (no para dictar): reservas pagadas que no aparecen en la lista del conductor, transcripción cuaderno → hoja, roles tesorera/despachador/conductores, solicitudes nuevas.`
    },
    {
      id: 'sis3-10',
      title: 'Caso 2 · Ferretería La Tuerca',
      contentHtml: `
        <div class="space-y-3">
          <div class="bg-amber-600 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-amber-100">Caso 2 · escenario ficticio</p><h3 class="text-xl font-bold mt-1">🔩 Ferretería La Tuerca</h3></div>
          <div class="bg-white border border-slate-200 rounded-xl p-4"><p class="text-slate-700">Las entradas de mercancía se anotan en cuadernos y luego en hojas de cálculo. Los conteos no siempre coinciden y algunos productos se agotan sin aviso.</p></div>
          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-blue-50 border border-blue-200 rounded-xl p-4"><h4 class="font-bold text-blue-900">Necesidad</h4><p class="text-sm text-blue-950 mt-1">Registrar productos y ventas, consultar existencias y avisar cuando el stock sea bajo.</p></div>
            <div class="bg-violet-50 border border-violet-200 rounded-xl p-4"><h4 class="font-bold text-violet-900">Condiciones y personas</h4><p class="text-sm text-violet-950 mt-1">Presupuesto fijo y fecha acordada. El dueño aprueba, el encargado recibe mercancía y los cajeros venden; uno requiere apoyo con computadoras.</p></div>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-950"><strong>Nuevas solicitudes:</strong> historial de precios de proveedores y saldos de clientes a crédito.</div>
        </div>
      `,
      notes: `Anclas para orientar (no para dictar): conteos de inventario que no coinciden, productos agotados sin aviso, roles de caja y almacén, solicitudes nuevas que amplían el alcance.`
    },
    {
      id: 'sis3-11',
      title: 'Caso 3 · Consultorio Vida Norte',
      contentHtml: `
        <div class="space-y-3">
          <div class="bg-teal-700 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-teal-100">Caso 3 · escenario ficticio</p><h3 class="text-xl font-bold mt-1">🩺 Consultorio Vida Norte</h3></div>
          <div class="bg-white border border-slate-200 rounded-xl p-4"><p class="text-slate-700">Las citas se anotan en una agenda y se coordinan por mensajería. Se han duplicado algunas citas y ciertas cancelaciones no se reflejan a tiempo.</p></div>
          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-blue-50 border border-blue-200 rounded-xl p-4"><h4 class="font-bold text-blue-900">Necesidad</h4><p class="text-sm text-blue-950 mt-1">Organizar citas, registrar asistencia y consultar el estado de pago.</p></div>
            <div class="bg-violet-50 border border-violet-200 rounded-xl p-4"><h4 class="font-bold text-violet-900">Condiciones y personas</h4><p class="text-sm text-violet-950 mt-1">La dirección aprueba gastos; recepción gestiona la agenda y los profesionales consultan horarios. El presupuesto es fijo y se comparte el equipo disponible.</p></div>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-950"><strong>Condición crítica:</strong> limitar el acceso a la información según el rol. Después solicitan recordatorios y reportes mensuales.</div>
          <p class="text-xs text-slate-500">Caso inventado. No uses datos reales de pacientes.</p>
        </div>
      `,
      notes: `Anclas para orientar (no para dictar): citas duplicadas, cancelaciones que no se reflejan, acceso a la información según el rol, equipo compartido.`
    },
    {
      id: 'sis3-12',
      title: 'Caso 4 · Panadería La Espiga',
      contentHtml: `
        <div class="space-y-3">
          <div class="bg-orange-600 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-orange-100">Caso 4 · escenario ficticio</p><h3 class="text-xl font-bold mt-1">🥖 Panadería La Espiga</h3></div>
          <div class="bg-white border border-slate-200 rounded-xl p-4"><p class="text-slate-700">Los pedidos llegan por llamadas y mensajes y se copian en papel. En los cambios de turno se han perdido pedidos especiales y la producción diaria se calcula manualmente.</p></div>
          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-blue-50 border border-blue-200 rounded-xl p-4"><h4 class="font-bold text-blue-900">Necesidad</h4><p class="text-sm text-blue-950 mt-1">Registrar pedidos, preparar la lista diaria de producción y consultar ingredientes disponibles.</p></div>
            <div class="bg-violet-50 border border-violet-200 rounded-xl p-4"><h4 class="font-bold text-violet-900">Condiciones y personas</h4><p class="text-sm text-violet-950 mt-1">Lanzamiento antes de temporada alta y presupuesto fijo. La encargada aprueba; panaderos y vendedores trabajan por turnos y con distinta experiencia digital.</p></div>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-950"><strong>Nuevas solicitudes:</strong> coordinar entregas a domicilio y mostrar información nutricional.</div>
        </div>
      `,
      notes: `Anclas para orientar (no para dictar): pedidos especiales perdidos en el cambio de turno, producción calculada a mano, temporada alta como fecha límite, solicitudes nuevas.`
    },
    {
      id: 'sis3-13',
      title: 'En pareja: tu primera fila',
      contentHtml: `
        <div class="space-y-4">
          <ol class="space-y-3">
            <li data-reveal class="flex gap-4 bg-white border rounded-xl p-4"><span class="w-8 h-8 shrink-0 rounded-full bg-fuchsia-600 text-white font-bold flex items-center justify-center">1</span><span>Lean su caso y <strong>subrayen tres hechos</strong> (datos escritos, no opiniones).</span></li>
            <li data-reveal class="flex gap-4 bg-white border rounded-xl p-4"><span class="w-8 h-8 shrink-0 rounded-full bg-fuchsia-600 text-white font-bold flex items-center justify-center">2</span><span>Elijan <strong>una actividad distinta de Proceso</strong> y el hecho que mejor le corresponde.</span></li>
            <li data-reveal class="flex gap-4 bg-white border rounded-xl p-4"><span class="w-8 h-8 shrink-0 rounded-full bg-fuchsia-600 text-white font-bold flex items-center justify-center">3</span><span>Escriban el <strong>criterio</strong> y el <strong>riesgo</strong> de esa fila.</span></li>
            <li data-reveal class="flex gap-4 bg-fuchsia-50 border border-fuchsia-200 rounded-xl p-4"><span class="w-8 h-8 shrink-0 rounded-full bg-fuchsia-600 text-white font-bold flex items-center justify-center">4</span><span>Pasen la prueba: ¿el criterio termina en «cumple / no cumple»? Si no, reescríbanlo.</span></li>
          </ol>
          <p class="text-sm text-slate-500">Conserva el caso: lo usarás en tu ficha individual.</p>
        </div>
      `,
      notes: `16:42 a 17:02 (20 min). Recorrer las parejas y preguntar antes de corregir: «¿qué línea del caso respalda eso?», «¿cómo lo probarías mañana?». A los 15 min, pedir a dos parejas con casos distintos que lean su criterio; el grupo decide si es comprobable.`
    },
    {
      id: 'sis3-14',
      title: 'Tu ficha · parte 1: las cinco filas',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-slate-700">Copia la tabla en tu cuaderno y completa <strong>una fila por actividad</strong>, siempre con el caso de tu pareja.</p>
          <div class="overflow-x-auto border border-slate-200 rounded-xl">
            <div class="min-w-[680px]">
              <div class="grid grid-cols-[180px_1fr_1fr_1fr] bg-slate-900 text-white text-xs font-bold"><div class="p-3">Actividad</div><div class="p-3">Hecho del caso</div><div class="p-3">Criterio comprobable</div><div class="p-3">Riesgo</div></div>
              <div class="divide-y divide-slate-200 text-sm">
                <div class="grid grid-cols-[180px_1fr_1fr_1fr] min-h-12"><div class="p-3 font-bold">Proceso</div><div class="p-3"></div><div class="p-3"></div><div class="p-3"></div></div>
                <div class="grid grid-cols-[180px_1fr_1fr_1fr] min-h-12 bg-slate-50"><div class="p-3 font-bold">Administración de Proyectos</div><div class="p-3"></div><div class="p-3"></div><div class="p-3"></div></div>
                <div class="grid grid-cols-[180px_1fr_1fr_1fr] min-h-12"><div class="p-3 font-bold">Personas</div><div class="p-3"></div><div class="p-3"></div><div class="p-3"></div></div>
                <div class="grid grid-cols-[180px_1fr_1fr_1fr] min-h-12 bg-slate-50"><div class="p-3 font-bold">Producto</div><div class="p-3"></div><div class="p-3"></div><div class="p-3"></div></div>
                <div class="grid grid-cols-[180px_1fr_1fr_1fr] min-h-12"><div class="p-3 font-bold">Calidad</div><div class="p-3"></div><div class="p-3"></div><div class="p-3"></div></div>
              </div>
            </div>
          </div>
          <p class="text-sm text-slate-500">La fila que hiciste en pareja ya cuenta: mejórala si hace falta. En cada fila, repite la comprobación del ejemplo.</p>
        </div>
      `,
      notes: `17:02 a 17:37 (35 min para las partes 1 y 2). Avisos de tiempo a los 20 y a los 30 min. Errores a vigilar: hechos que no están en el caso, criterios del tipo «que funcione bien», riesgos genéricos sin relación con el hecho. Quien termine antes pasa a la parte 2. No imprimir: se trabaja en el cuaderno u hoja propia.`
    },
    {
      id: 'sis3-15',
      title: 'Tu ficha · parte 2: relaciones',
      contentHtml: `
        <div class="space-y-5">
          <p class="text-slate-700">Las actividades no son cajas sueltas: cuando una falla, arrastra a otra. Escribe dos relaciones con esta forma:</p>
          <div class="bg-blue-50 border-2 border-blue-200 rounded-xl p-5 text-lg text-blue-950 text-center">Si <strong>[actividad A]</strong> falla, <strong>[actividad B]</strong> se afecta porque <strong>[hecho del caso]</strong>.</div>
          <div class="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <p class="font-bold text-slate-900">Antes de entregar, revisa tu ficha:</p>
            <div class="grid md:grid-cols-2 gap-2 text-sm text-slate-700 mt-3">
              <p>□ Cada fila tiene un hecho que está en el caso.</p><p>□ Cada criterio termina en «cumple / no cumple».</p>
              <p>□ Cada riesgo sale de su hecho.</p><p>□ Mis dos relaciones usan actividades distintas.</p>
            </div>
          </div>
        </div>
      `,
      notes: `Dentro de los 35 min de la ficha. Si alguien no encuentra relaciones, sugerir mirar dos filas suyas que compartan el mismo hecho.`
    },
    {
      id: 'sis3-16',
      title: 'Si te atascas',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-slate-600">Vuelve al caso y hazte la pregunta de la actividad. Puede haber varias respuestas válidas si se apoyan en un hecho.</p>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-blue-50 border border-blue-200 rounded-xl p-3"><strong class="text-blue-950">Proceso:</strong> ¿en qué paso se copia, se pasa de mano o se pierde la información?</div>
            <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-3"><strong class="text-indigo-950">Administración de Proyectos:</strong> ¿qué hacen las solicitudes nuevas con la fecha y el presupuesto?</div>
            <div class="bg-violet-50 border border-violet-200 rounded-xl p-3"><strong class="text-violet-950">Personas:</strong> ¿quién aprueba, quién opera y a quién le costará usarlo?</div>
            <div class="bg-pink-50 border border-pink-200 rounded-xl p-3"><strong class="text-pink-950">Producto:</strong> ¿qué necesidades del caso debe cubrir lo que se entrega?</div>
            <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-3 md:col-span-2"><strong class="text-emerald-950">Calidad:</strong> ¿qué falla describe el caso y qué prueba la detectaría antes de entregar?</div>
          </div>
        </div>
      `,
      notes: `Dejar esta diapositiva proyectada durante el trabajo individual si la mayoría está avanzando; si no, alternar con la parte 1.`
    },
    {
      id: 'sis3-17',
      title: 'Plenaria · una fila por actividad',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-slate-600">Entre todos armamos la tabla en la pizarra, con casos distintos.</p>
          <div class="overflow-x-auto border border-slate-200 rounded-xl">
            <div class="min-w-[680px]">
              <div class="grid grid-cols-[180px_90px_1fr_1fr_1fr] bg-slate-900 text-white text-xs font-bold"><div class="p-3">Actividad</div><div class="p-3">Caso</div><div class="p-3">Hecho</div><div class="p-3">Criterio comprobable</div><div class="p-3">Riesgo</div></div>
              <div class="divide-y divide-slate-200 text-sm">
                <div class="grid grid-cols-[180px_90px_1fr_1fr_1fr] min-h-11"><div class="p-3 font-semibold">Proceso</div><div class="p-3"></div><div class="p-3"></div><div class="p-3"></div><div class="p-3"></div></div>
                <div class="grid grid-cols-[180px_90px_1fr_1fr_1fr] min-h-11 bg-slate-50"><div class="p-3 font-semibold">Administración de Proyectos</div><div class="p-3"></div><div class="p-3"></div><div class="p-3"></div><div class="p-3"></div></div>
                <div class="grid grid-cols-[180px_90px_1fr_1fr_1fr] min-h-11"><div class="p-3 font-semibold">Personas</div><div class="p-3"></div><div class="p-3"></div><div class="p-3"></div><div class="p-3"></div></div>
                <div class="grid grid-cols-[180px_90px_1fr_1fr_1fr] min-h-11 bg-slate-50"><div class="p-3 font-semibold">Producto</div><div class="p-3"></div><div class="p-3"></div><div class="p-3"></div><div class="p-3"></div></div>
                <div class="grid grid-cols-[180px_90px_1fr_1fr_1fr] min-h-11"><div class="p-3 font-semibold">Calidad</div><div class="p-3"></div><div class="p-3"></div><div class="p-3"></div><div class="p-3"></div></div>
              </div>
            </div>
          </div>
          <div class="bg-blue-50 border border-blue-200 rounded-xl p-3 text-sm text-blue-950">Para cada criterio: ¿qué prueba harías y qué tendrías que observar para decir «cumple»?</div>
        </div>
      `,
      notes: `17:37 a 17:57 (20 min). Una contribución por actividad, de parejas con casos distintos (unos 4 min por fila). El docente copia la tabla en la pizarra y pregunta al grupo si cada criterio es comprobable antes de anotarlo. Si el tiempo aprieta, hacer solo tres filas (Proceso, Personas, Calidad) antes que recortar la coevaluación. Es síntesis aplicada, no repetición de definiciones.`
    },
    {
      id: 'sis3-18',
      title: 'Coevaluación: revisa la ficha de tu compañero',
      contentHtml: `
        <div class="space-y-4">
          <div class="overflow-x-auto border border-slate-200 rounded-xl">
            <div class="min-w-[560px]">
              <div class="grid grid-cols-[1fr_50px_50px] bg-slate-900 text-white text-xs font-bold"><div class="p-2">En la ficha que revisas…</div><div class="p-2 text-center">Sí</div><div class="p-2 text-center">No</div></div>
              <div class="divide-y divide-slate-200 text-sm">
                <div class="grid grid-cols-[1fr_50px_50px]"><div class="p-2">Cada actividad tiene un hecho que está en el caso.</div><div class="p-2 text-center">□</div><div class="p-2 text-center">□</div></div>
                <div class="grid grid-cols-[1fr_50px_50px] bg-slate-50"><div class="p-2">Los criterios se pueden probar y terminan en «cumple / no cumple».</div><div class="p-2 text-center">□</div><div class="p-2 text-center">□</div></div>
                <div class="grid grid-cols-[1fr_50px_50px]"><div class="p-2">Cada riesgo sale de su hecho.</div><div class="p-2 text-center">□</div><div class="p-2 text-center">□</div></div>
                <div class="grid grid-cols-[1fr_50px_50px] bg-slate-50"><div class="p-2">Hay dos relaciones entre actividades distintas.</div><div class="p-2 text-center">□</div><div class="p-2 text-center">□</div></div>
                <div class="grid grid-cols-[1fr_50px_50px]"><div class="p-2">Se entiende sin que el autor la explique.</div><div class="p-2 text-center">□</div><div class="p-2 text-center">□</div></div>
              </div>
            </div>
          </div>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-blue-50 border border-blue-200 rounded-xl p-3"><strong>Pregúntale:</strong> ¿qué dato del caso respalda tu criterio más importante?</div>
            <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-3"><strong>Pregúntale:</strong> ¿cómo comprobarías que ese criterio se cumple?</div>
          </div>
          <p class="text-xs text-slate-500">No pongas nota ni reescribas la ficha: marca, pregunta y devuélvela.</p>
        </div>
      `,
      notes: `17:57 a 18:09 (12 min): 5 min revisar con la lista, 4 min devolver y hacer las dos preguntas, 3 min para que el autor haga una mejora. El docente observa y anota los errores comunes con su propia lista de cotejo (0 %, no se asienta nota). Alternativa si no conviene intercambiar: autoevaluación con la misma lista.`
    },
    {
      id: 'sis3-19',
      title: 'Cierre · ticket de salida',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-gradient-to-br from-slate-900 to-blue-900 text-white p-6 rounded-2xl"><p class="text-xs uppercase tracking-widest font-bold text-blue-200">Vuelve a la pregunta del inicio</p><h3 class="text-2xl font-bold mt-2">¿Cómo sabrías, antes de entregar, que el sistema resuelve el problema?</h3></div>
          <div class="space-y-3">
            <div class="flex gap-4 bg-white border-l-4 border-blue-500 rounded-xl p-4"><span class="font-bold text-blue-600">1</span><p class="text-slate-800">Escribe un criterio comprobable de tu caso.</p></div>
            <div class="flex gap-4 bg-white border-l-4 border-indigo-500 rounded-xl p-4"><span class="font-bold text-indigo-600">2</span><p class="text-slate-800">Nombra una relación entre dos actividades y explica por qué.</p></div>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-950"><strong>Prueba escrita de la Unidad I (10 %):</strong> lunes 26/10/2026. Estaba prevista para el 12/10, pero ese día fue feriado.</div>
        </div>
      `,
      notes: `18:09 a 18:15 (6 min). Ticket oral o escrito; escuchar 2 o 3 criterios y validar en voz alta si son comprobables. Tarea: completar la ficha si quedó algo pendiente y conservar la retroalimentación. Nota de fechas: cuando se dictó esta clase (05/10) la prueba estaba en el PGA para el 12/10; el 12/10 fue feriado, se movió al 19/10 y, por la falla eléctrica de ese día, al 26/10 (S6). La diapositiva muestra la fecha vigente porque los estudiantes la usan para repasar.`
    },
    {
      id: 'sis3-20',
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
          <p class="text-xs text-slate-400 text-center">Los cinco escenarios son ficticios y se utilizan con fines formativos.</p>
        </div>
      `
    }
  ]
};
