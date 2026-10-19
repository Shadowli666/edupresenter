import { Module } from '../../types';

export const SISTEMAS_I_MODULE_5: Module = {
  id: 'sis-mod-5',
  title: '5. Enfoques para el desarrollo de aplicaciones',
  description:
    'Semana 5 (lunes 19/10, estudio en casa): enfoque estructurado, orientado a objetos, aplicaciones Web y UML; cuadro comparativo (20 %) con entrega el 26/10.',
  evaluation: '20% — Cuadro comparativo de enfoques (entrega 26/10)',
  slides: [
    {
      id: 'sis5-1',
      title: 'Sistemas I · Semana 5',
      contentHtml: `
        <div class="space-y-7">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-4xl shadow-lg">🧭</div>
            <div>
              <p class="text-sm uppercase tracking-widest font-bold text-blue-600">Ingeniería de Software · Unidad II</p>
              <h2 class="text-3xl md:text-4xl font-bold text-slate-900">Enfoques para el desarrollo de aplicaciones</h2>
              <p class="text-slate-500 mt-1">Estructurado · Orientado a objetos · Aplicaciones Web · UML</p>
            </div>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-950">
            ⚡ Hoy, <strong>lunes 19/10</strong>, tocaba aplicar la prueba de la Unidad I (pospuesta por el feriado del 12/10), pero no hay electricidad. La prueba pasa al <strong>lunes 26/10</strong> (semana 6) y esta semana estudias la Unidad II en casa con estas diapositivas y la guía de estudio.
          </div>
          <p class="text-sm text-slate-500">Sección A · IUPSM — Extensión Ciudad Ojeda · Período 2026-2</p>
        </div>
      `,
      notes: 'Decisión docente 19/10/2026: clase presencial suspendida por falla eléctrica. Teoría enviada como guía (03-Clases/SISTEMAS-I/S05-guia-estudio-enfoques-desarrollo.docx). S4 (12/10) fue feriado; la prueba U-I se reprogramó al 19/10 y, por la falla eléctrica, pasa al 26/10 (S6), junto con la entrega y presentación del cuadro (20 %). Ruta de estudio y claves: 03-Clases/SISTEMAS-I/S05-contenido-clase-lunes.md.'
    },
    {
      id: 'sis5-2',
      title: 'Tu plan de trabajo',
      contentHtml: `
        <div class="space-y-3">
          <div data-reveal class="flex gap-3 bg-white border rounded-xl p-4"><span class="font-bold text-blue-700 w-28">Hoy</span><span>Lee la teoría (diapositivas 3–10) y toma apuntes.</span></div>
          <div data-reveal class="flex gap-3 bg-white border rounded-xl p-4"><span class="font-bold text-blue-700 w-28">Esta semana</span><span>Resuelve la autoevaluación (diapositivas 11–12) y elabora el cuadro comparativo (diapositivas 13–14).</span></div>
          <div data-reveal class="flex gap-3 bg-blue-50 border border-blue-200 rounded-xl p-4"><span class="font-bold text-blue-700 w-28">Lunes 26/10</span><span>Semana 6: prueba escrita de la Unidad I (10 %), presentación y entrega del cuadro comparativo (20 %).</span></div>
        </div>
      `
    },
    {
      id: 'sis5-3',
      title: 'Pregunta eje',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-blue-600 text-white rounded-2xl p-8">
            <p class="text-xs uppercase tracking-widest text-blue-100">Antes de leer</p>
            <h3 class="text-2xl md:text-3xl font-bold mt-2">Estructurado, orientado a objetos, Web y UML: ¿son cuatro maneras de hacer lo mismo?</h3>
          </div>
          <p class="text-slate-600">Escribe tu respuesta en el cuaderno. Al terminar la teoría vuelve a ella y corrígela si hace falta.</p>
        </div>
      `,
      notes: 'La concepción errónea esperada es tratarlos como cuatro metodologías paralelas; la escala del taller penaliza esa confusión (6 de 20 puntos).'
    },
    {
      id: 'sis5-pista',
      title: 'Una pista para leer',
      contentHtml: `
        <div class="space-y-5">
          <p class="text-lg text-slate-700">Para levantar un edificio hay que tomar decisiones de <strong>distinta clase</strong>:</p>
          <div class="grid md:grid-cols-3 gap-3">
            <div data-reveal class="bg-white border-2 border-slate-200 rounded-xl p-4"><p class="text-3xl">🧠</p><p class="font-bold text-slate-900 mt-2">Cómo se concibe el diseño</p><p class="text-sm text-slate-600 mt-1">¿Por las funciones que cumple cada espacio, o por las piezas que lo forman?</p></div>
            <div data-reveal class="bg-white border-2 border-slate-200 rounded-xl p-4"><p class="text-3xl">🏢</p><p class="font-bold text-slate-900 mt-2">Qué tipo de edificio es</p><p class="text-sm text-slate-600 mt-1">Una vivienda no exige lo mismo que un centro comercial abierto a miles de personas.</p></div>
            <div data-reveal class="bg-white border-2 border-slate-200 rounded-xl p-4"><p class="text-3xl">📐</p><p class="font-bold text-slate-900 mt-2">Con qué símbolos se dibujan los planos</p><p class="text-sm text-slate-600 mt-1">Una notación que cualquier arquitecto pueda leer igual.</p></div>
          </div>
          <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 text-blue-950">Mientras lees las cuatro diapositivas siguientes, pregúntate <strong>a cuál de estas decisiones se parece cada término</strong>. Puede que dos términos respondan a la misma.</div>
        </div>
      `,
      notes: `Organizador previo por analogía (síntesis didáctica del docente, no está en Pressman). Correspondencia que el estudiante debe descubrir: concepción del diseño = enfoque de análisis y diseño (estructurado: por funciones; OO: por piezas/objetos); tipo de edificio = categoría de aplicación (Web); notación de planos = lenguaje de modelado (UML). No dar la correspondencia en la diapositiva: se confirma en «Respuesta a la pregunta eje».`
    },
    {
      id: 'sis5-4',
      title: 'Desarrollo estructurado',
      contentHtml: `
        <div class="space-y-4">
          <span class="inline-block bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider rounded-full px-3 py-1">Enfoque de análisis y diseño</span>
          <ul class="list-disc list-inside text-slate-800 space-y-2">
            <li data-reveal><strong>Datos y procesos son entidades separadas</strong>: los procesos transforman los datos que fluyen por el sistema.</li>
            <li data-reveal>Trabaja por <strong>descomposición funcional</strong>: una función general se divide en subfunciones cada vez más pequeñas.</li>
            <li data-reveal>Herramientas: diagrama de flujo de datos (DFD), diccionario de datos, modelo entidad-relación.</li>
          </ul>
          <div class="mermaid">graph LR
  M([Mesero]) --> R[Registrar pedido]
  R --> P[(Pedidos)]
  P --> E[Enviar a cocina]
  E --> C([Cocina])
  P --> K[Calcular cuenta]
  K --> L([Cliente])</div>
          <p class="text-sm text-slate-500">Pregunta que se hace: <em>¿qué hace el sistema y por dónde pasan los datos?</em> · Pressman (2010), p. 130.</p>
        </div>
      `
    },
    {
      id: 'sis5-5',
      title: 'Desarrollo orientado a objetos',
      contentHtml: `
        <div class="space-y-4">
          <span class="inline-block bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider rounded-full px-3 py-1">Enfoque de análisis y diseño</span>
          <div class="grid md:grid-cols-[1.1fr_1fr] gap-4 items-center">
          <ul class="list-disc list-inside text-slate-800 space-y-2">
            <li data-reveal>El sistema se ve como <strong>clases que colaboran</strong> para cumplir los requerimientos.</li>
            <li data-reveal><strong>Objeto</strong> = estado (atributos) + comportamiento (operaciones). Una <strong>clase</strong> describe un tipo de objeto; cada objeto concreto es una <strong>instancia</strong>.</li>
            <li data-reveal>Conceptos: <strong>encapsulación</strong> (datos y operaciones juntos), <strong>herencia</strong> (la subclase reutiliza y añade), <strong>mensajes</strong> (los objetos se piden servicios).</li>
          </ul>
          <div class="mermaid [&_svg]:max-h-72 [&_svg]:mx-auto">classDiagram
  class Mesa {
    numero
    estado
  }
  class Pedido {
    platos
    agregarPlato()
    subtotal()
  }
  class Cuenta {
    total()
  }
  Mesa "1" -- "*" Pedido
  Pedido --> Cuenta</div>
          </div>
          <p class="text-sm text-slate-500">Pregunta que se hace: <em>¿qué cosas existen y qué responsabilidad tiene cada una?</em> · Pressman (2010), p. 131 y Apéndice 2.</p>
        </div>
      `
    },
    {
      id: 'sis5-6',
      title: 'Aplicaciones Web (webapps)',
      contentHtml: `
        <div class="space-y-4">
          <span class="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider rounded-full px-3 py-1">Categoría de software — no es un método</span>
          <p class="text-slate-700">Aplicaciones que residen en una red y se usan desde un navegador u otro cliente. Exigencias propias:</p>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div data-reveal class="bg-white border rounded-xl p-3">🌐 <strong>Uso intensivo de redes</strong>: usuarios diversos por Internet o intranet</div>
            <div data-reveal class="bg-white border rounded-xl p-3">👥 <strong>Concurrencia</strong>: muchos usuarios a la vez</div>
            <div data-reveal class="bg-white border rounded-xl p-3">📈 <strong>Carga impredecible</strong>: cien usuarios hoy, diez mil mañana</div>
            <div data-reveal class="bg-white border rounded-xl p-3">⚡ <strong>Rendimiento</strong>: si responde lento, el usuario se va</div>
            <div data-reveal class="bg-white border rounded-xl p-3 md:col-span-2">🕒 <strong>Disponibilidad</strong>: se espera que funcione a cualquier hora</div>
          </div>
          <p class="text-sm text-slate-500">Una webapp puede construirse con enfoque estructurado o con enfoque OO. Pregunta que se hace: <em>¿qué exigencias añade ofrecer el sistema por la red?</em> · Pressman (2010), §1.2.</p>
        </div>
      `
    },
    {
      id: 'sis5-7',
      title: 'UML: Lenguaje Unificado de Modelado',
      contentHtml: `
        <div class="space-y-4">
          <span class="inline-block bg-violet-100 text-violet-800 text-xs font-bold uppercase tracking-wider rounded-full px-3 py-1">Lenguaje de modelado — no es un proceso</span>
          <ul class="list-disc list-inside text-slate-800 space-y-2">
            <li data-reveal>Lenguaje estándar para <strong>visualizar, especificar, construir y documentar</strong> un sistema de software.</li>
            <li data-reveal>Indica <strong>cómo dibujar</strong> un modelo, no en qué orden trabajar ni cómo pensar el sistema.</li>
            <li data-reveal>Creado por Booch, Rumbaugh y Jacobson; entregado al Object Management Group (OMG) en 1997.</li>
            <li data-reveal>Diagramas frecuentes: casos de uso, clases, secuencia, actividad y estados.</li>
            <li data-reveal>Pensado sobre todo para modelos <strong>orientados a objetos</strong>.</li>
          </ul>
          <div data-reveal class="bg-violet-50 border border-violet-200 rounded-xl p-3 text-sm text-violet-950">👀 Vuelve a la diapositiva 6: el diagrama de <em>Mesa</em>, <em>Pedido</em> y <em>Cuenta</em> ya está dibujado con UML (diagrama de clases).</div>
          <p class="text-sm text-slate-500">Pregunta que se hace: <em>¿cómo lo dibujo para que todo el equipo lo entienda igual?</em> · Pressman (2010), Apéndice 1, p. 725.</p>
        </div>
      `,
      notes: 'Si preguntan por versiones: Pressman (2010) cita UML 2.0 con 13 diagramas; la referencia vigente del banco (uml-diagrams.org) trabaja con UML 2.5.'
    },
    {
      id: 'sis5-8',
      title: 'Respuesta a la pregunta eje',
      contentHtml: `
        <div class="space-y-4">
          <table class="w-full text-sm border rounded-xl overflow-hidden">
            <thead class="bg-slate-900 text-white"><tr><th class="p-3 text-left">Elemento</th><th class="p-3 text-left">¿Qué tipo de elemento es?</th><th class="p-3 text-left">Responde a…</th></tr></thead>
            <tbody class="divide-y bg-white">
              <tr data-reveal><td class="p-3 font-semibold">Estructurado</td><td class="p-3">Enfoque de análisis y diseño</td><td class="p-3">¿Cómo pienso el sistema? (funciones y datos)</td></tr>
              <tr data-reveal><td class="p-3 font-semibold">Orientado a objetos</td><td class="p-3">Enfoque de análisis y diseño</td><td class="p-3">¿Cómo pienso el sistema? (objetos que colaboran)</td></tr>
              <tr data-reveal><td class="p-3 font-semibold">Aplicaciones Web</td><td class="p-3">Categoría de aplicación</td><td class="p-3">¿Qué tipo de software construyo?</td></tr>
              <tr data-reveal><td class="p-3 font-semibold">UML</td><td class="p-3">Lenguaje de modelado</td><td class="p-3">¿Con qué notación lo dibujo?</td></tr>
            </tbody>
          </table>
          <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-950">No son cuatro maneras de hacer lo mismo: estructurado y OO se comparan <strong>entre sí</strong>; Web y UML responden a preguntas distintas.</div>
        </div>
      `
    },
    {
      id: 'sis5-9',
      title: 'Ejemplo: El Barú visto de cuatro maneras',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-slate-600">El restaurante de la semana 3 (reservas en cuaderno, pedidos de palabra, cuentas a mano), mirado con cada término:</p>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-white border-2 border-blue-200 rounded-xl p-4"><p class="font-bold text-blue-900">Estructurado</p><p class="text-slate-800 mt-1">Procesos por donde pasan los datos: <em>Registrar pedido</em> → Pedidos → <em>Enviar a cocina</em>; Pedidos → <em>Calcular cuenta</em>.</p></div>
            <div class="bg-white border-2 border-blue-200 rounded-xl p-4"><p class="font-bold text-blue-900">Orientado a objetos</p><p class="text-slate-800 mt-1">Objetos con sus datos y operaciones: <strong>Mesa</strong> (número, estado), <strong>Pedido</strong> (agregarPlato(), subtotal()), <strong>Cuenta</strong> (total()).</p></div>
            <div class="bg-white border-2 border-emerald-200 rounded-xl p-4"><p class="font-bold text-emerald-900">Aplicación Web</p><p class="text-slate-800 mt-1">Si abre <strong>reservas en línea</strong>: muchos clientes a la vez la noche del 24/12; debe responder rápido y estar disponible de noche.</p></div>
            <div class="bg-white border-2 border-violet-200 rounded-xl p-4"><p class="font-bold text-violet-900">UML</p><p class="text-slate-800 mt-1">El modelo OO dibujado como <strong>diagrama de clases</strong> y de <strong>casos de uso</strong> (Mesero — Registrar pedido; Cliente — Reservar mesa).</p></div>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-950">Entre estructurado y OO cambia <strong>la manera de pensar</strong> el restaurante; con UML solo cambia <strong>la forma de dibujarlo</strong>.</div>
        </div>
      `
    },
    {
      id: 'sis5-10',
      title: 'Autoevaluación (1/2)',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-3">
          <div data-quiz class="bg-white border rounded-xl p-4 space-y-2">
            <p class="font-semibold">Se modela cómo los datos del pedido fluyen entre los procesos registrar, calcular cuenta y facturar.</p>
            <button data-option data-correct class="block w-full text-left border rounded-lg p-2 text-sm">Estructurado</button>
            <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">Orientado a objetos</button>
            <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">UML</button>
            <p data-explain class="text-sm text-slate-600">Datos y procesos separados, con el flujo de datos entre procesos: es la mirada estructurada (DFD).</p>
          </div>
          <div data-quiz class="bg-white border rounded-xl p-4 space-y-2">
            <p class="font-semibold">Pedido guarda sus platos y él mismo sabe calcular su subtotal.</p>
            <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">Estructurado</button>
            <button data-option data-correct class="block w-full text-left border rounded-lg p-2 text-sm">Orientado a objetos</button>
            <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">Aplicaciones Web</button>
            <p data-explain class="text-sm text-slate-600">Estado y comportamiento juntos en un objeto: encapsulación.</p>
          </div>
          <div data-quiz class="bg-white border rounded-xl p-4 space-y-2">
            <p class="font-semibold">200 clientes deben poder reservar a la vez la noche del 24/12.</p>
            <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">UML</button>
            <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">Estructurado</button>
            <button data-option data-correct class="block w-full text-left border rounded-lg p-2 text-sm">Aplicaciones Web</button>
            <p data-explain class="text-sm text-slate-600">Concurrencia y carga impredecible son exigencias propias de las webapps.</p>
          </div>
          <div data-quiz class="bg-white border rounded-xl p-4 space-y-2">
            <p class="font-semibold">Se dibuja un monigote «Mesero» unido a «Registrar pedido».</p>
            <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">Orientado a objetos</button>
            <button data-option data-correct class="block w-full text-left border rounded-lg p-2 text-sm">UML</button>
            <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">Aplicaciones Web</button>
            <p data-explain class="text-sm text-slate-600">Es la notación del diagrama de casos de uso de UML.</p>
          </div>
        </div>
      `,
      notes: 'Formativa (0 %). Se revisa en plenaria el 26/10 antes de la prueba si alcanza el tiempo.'
    },
    {
      id: 'sis5-11',
      title: 'Autoevaluación (2/2)',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-3">
          <div data-quiz class="bg-white border rounded-xl p-4 space-y-2">
            <p class="font-semibold">«Gestionar restaurante» se divide en subfunciones cada vez más pequeñas.</p>
            <button data-option data-correct class="block w-full text-left border rounded-lg p-2 text-sm">Estructurado</button>
            <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">Orientado a objetos</button>
            <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">UML</button>
            <p data-explain class="text-sm text-slate-600">Descomposición funcional de arriba hacia abajo.</p>
          </div>
          <div data-quiz class="bg-white border rounded-xl p-4 space-y-2">
            <p class="font-semibold">MesaVIP tiene todo lo de Mesa y además un cargo por servicio.</p>
            <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">Aplicaciones Web</button>
            <button data-option data-correct class="block w-full text-left border rounded-lg p-2 text-sm">Orientado a objetos</button>
            <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">Estructurado</button>
            <p data-explain class="text-sm text-slate-600">Herencia: la subclase reutiliza lo de la superclase y añade lo suyo.</p>
          </div>
          <div data-quiz class="bg-white border rounded-xl p-4 space-y-2">
            <p class="font-semibold">La reserva debe responder rápido y estar disponible a cualquier hora.</p>
            <button data-option data-correct class="block w-full text-left border rounded-lg p-2 text-sm">Aplicaciones Web</button>
            <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">UML</button>
            <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">Orientado a objetos</button>
            <p data-explain class="text-sm text-slate-600">Rendimiento y disponibilidad: exigencias de las webapps.</p>
          </div>
          <div data-quiz class="bg-white border rounded-xl p-4 space-y-2">
            <p class="font-semibold">Todo el equipo usa la misma notación gráfica estándar para leer el diseño.</p>
            <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">Estructurado</button>
            <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">Orientado a objetos</button>
            <button data-option data-correct class="block w-full text-left border rounded-lg p-2 text-sm">UML</button>
            <p data-explain class="text-sm text-slate-600">UML es un lenguaje común para visualizar y documentar; no reemplaza al enfoque OO.</p>
          </div>
        </div>
      `
    },
    {
      id: 'sis5-guia-cuadro',
      title: 'Antes del cuadro: qué pide cada columna',
      contentHtml: `
        <div class="space-y-4">
          <div class="space-y-2 text-sm">
            <div class="grid md:grid-cols-[1fr_1.2fr] gap-2 items-center bg-white border rounded-xl p-3"><p class="font-semibold text-slate-900">¿Qué aspecto organiza o representa principalmente?</p><p class="text-slate-700">¿En qué se fija? ¿Alrededor de qué ordena el trabajo, o qué muestra?</p></div>
            <div class="grid md:grid-cols-[1fr_1.2fr] gap-2 items-center bg-white border rounded-xl p-3"><p class="font-semibold text-slate-900">Diferencia respecto de otro elemento de la lista (indica con cuál)</p><p class="text-slate-700">Elige otro de los cuatro, nómbralo y di en qué se distinguen.</p></div>
            <div class="grid md:grid-cols-[1fr_1.2fr] gap-2 items-center bg-white border rounded-xl p-3"><p class="font-semibold text-slate-900">¿Qué papel cumple al desarrollar o modelar una aplicación?</p><p class="text-slate-700">¿Para qué te sirve cuando construyes o dibujas una aplicación?</p></div>
          </div>
          <div class="border border-slate-200 rounded-xl overflow-hidden">
            <p class="bg-slate-100 text-xs font-bold uppercase tracking-wider text-slate-600 px-3 py-2">Ejemplo con otra lista (herramientas de oficina), solo para ver el nivel de respuesta</p>
            <div class="grid md:grid-cols-4 gap-0 text-xs divide-y md:divide-y-0 md:divide-x divide-slate-200">
              <div class="p-3 font-bold text-slate-900">Hoja de cálculo</div>
              <div class="p-3 text-slate-700">Datos en filas y columnas que se calculan con fórmulas.</div>
              <div class="p-3 text-slate-700">Con el <strong>procesador de textos</strong>: este organiza texto en párrafos; la hoja, datos que se recalculan.</div>
              <div class="p-3 text-slate-700">Registrar y calcular datos, por ejemplo un presupuesto.</div>
            </div>
          </div>
          <p class="text-sm text-slate-600">Una o dos oraciones por celda bastan. Recuerda la instrucción: no todos los elementos son métodos de desarrollo.</p>
        </div>
      `,
      notes: `Andamiaje para el trabajo en casa: traduce los encabezados del instrumento sin cambiarlos. No se llena ninguna fila de los cuatro elementos (6 de 20 puntos de la escala premian distinguir su naturaleza). El ejemplo de ofimática está lejos del tema a propósito; no usar diagrama de flujo ni pseudocódigo, que se confunden con el DFD.`
    },
    {
      id: 'sis5-12',
      title: 'Taller 20 % · Cuadro comparativo',
      contentHtml: `
        <div class="space-y-4">
          <ul class="list-disc list-inside text-sm text-slate-800 space-y-1">
            <li>Trabajo <strong>individual</strong> para casa, con la guía de estudio y tus apuntes. Redáctalo con tus propias palabras.</li>
            <li>Distingue con precisión qué tipo de elemento es cada uno; no todos son métodos de desarrollo.</li>
            <li>Puedes completarlo en el archivo enviado o a mano en una hoja propia, copiando el cuadro. Puntaje máximo: <strong>20 puntos</strong>.</li>
          </ul>
          <table class="w-full text-sm border">
            <thead class="bg-slate-100"><tr><th class="p-2 border text-left">Elemento del programa</th><th class="p-2 border text-left">¿Qué aspecto organiza o representa principalmente?</th><th class="p-2 border text-left">Diferencia respecto de otro elemento de la lista (indica con cuál lo comparas)</th><th class="p-2 border text-left">¿Qué papel cumple al desarrollar o modelar una aplicación?</th></tr></thead>
            <tbody>
              <tr><td class="p-2 border font-semibold">Desarrollo estructurado</td><td class="p-2 border"></td><td class="p-2 border"></td><td class="p-2 border"></td></tr>
              <tr><td class="p-2 border font-semibold">Desarrollo orientado a objetos</td><td class="p-2 border"></td><td class="p-2 border"></td><td class="p-2 border"></td></tr>
              <tr><td class="p-2 border font-semibold">Aplicaciones Web</td><td class="p-2 border"></td><td class="p-2 border"></td><td class="p-2 border"></td></tr>
              <tr><td class="p-2 border font-semibold">UML</td><td class="p-2 border"></td><td class="p-2 border"></td><td class="p-2 border"></td></tr>
            </tbody>
          </table>
          <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-950"><strong>Comparaciones directas:</strong> escribe dos oraciones que contrasten pares distintos de la tabla. Al menos una debe explicar qué papel cumple UML respecto de los enfoques de desarrollo. · <strong>Entrega: lunes 26/10 en la clase.</strong> La presentación oral de ese día es formativa: la nota es la del cuadro escrito.</div>
        </div>
      `,
      notes: 'Instrumento: 04-Evaluaciones/SISTEMAS-I/Revisado-2026-2/ESTUDIANTE-FORMATO-8.1-S05-cuadro-comparativo-enfoques-20pct-2026-10-26.docx. Clave y escala de estimación (8+4+4+2+2 = 20) solo en S05-cuadro-comparativo-enfoques-20pct-2026-10-19.md, Parte B. Rasgos esperados: estructurado = funciones/procesos y su descomposición; OO = objetos con estado y comportamiento; Web = categoría de aplicación, no metodología; UML = lenguaje de modelado, no proceso. Medio de entrega digital por confirmar.'
    },
    {
      id: 'sis5-13',
      title: 'Próxima semana · lunes 26/10',
      contentHtml: `
        <div class="space-y-4">
          <div data-reveal class="flex gap-3 bg-white border rounded-xl p-4"><span class="text-2xl">🗣️</span><span><strong>Presentación y entrega del cuadro comparativo (20 %)</strong>: trae tu cuadro completo, con nombre y cédula.</span></div>
          <div data-reveal class="flex gap-3 bg-white border rounded-xl p-4"><span class="text-2xl">📝</span><span><strong>Prueba escrita de la Unidad I (10 %)</strong>: individual, sin apuntes, 75 minutos. Repasa con el módulo de la semana 4.</span></div>
          <p class="text-sm text-slate-500">Detalle de la sesión en el módulo de la semana 6.</p>
        </div>
      `
    },
    {
      id: 'sis5-14',
      title: 'Fuentes',
      contentHtml: `
        <div class="bg-slate-50 border border-slate-200 rounded-2xl p-5">
          <p class="font-bold text-slate-900">Base de la semana</p>
          <ul class="list-disc list-inside text-sm text-slate-700 mt-3 space-y-2">
            <li>Programa analítico de SISTEMAS I, Unidad II: enfoques estructurado, orientado a objeto, aplicaciones Web y UML.</li>
            <li>Pressman, R. S. (2010). <em>Ingeniería del software. Un enfoque práctico</em> (7.ª ed.). McGraw-Hill. §1.2, §6.1.4 y Apéndices 1 y 2.</li>
          </ul>
        </div>
      `
    }
  ],
  tasks: [
    {
      id: 'sis5-t1',
      title: 'Guía de estudio: enfoques de desarrollo',
      description: 'Lee la teoría de la semana 5 y resuelve la autoevaluación.',
      items: ['Diapositivas 3 a 10 o la guía de estudio enviada', 'Autoevaluación de 8 preguntas (diapositivas 11 y 12)'],
      due: '2026-10-26',
      corte: 1,
      weight: '0 % (formativa)',
      kind: 'lectura',
      slideId: 'sis5-2'
    },
    {
      id: 'sis5-t2',
      title: 'Cuadro comparativo de enfoques',
      description: 'Cuadro individual de los cuatro elementos de la Unidad II con dos comparaciones directas. Se entrega y presenta en la clase.',
      items: ['Cuadro de 4 elementos por 3 columnas', 'Dos comparaciones directas, una sobre UML'],
      due: '2026-10-26',
      corte: 1,
      weight: '20 %',
      kind: 'evaluacion',
      slideId: 'sis5-12'
    }
  ]
};
