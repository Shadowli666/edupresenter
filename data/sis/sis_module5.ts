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
            ⚡ La clase del <strong>lunes 19/10</strong> se suspendió por falta de electricidad. Esta semana estudias en casa con estas diapositivas y la guía de estudio.
          </div>
          <p class="text-sm text-slate-500">Sección A · IUPSM — Extensión Ciudad Ojeda · Período 2026-2</p>
        </div>
      `,
      notes: 'Decisión docente 19/10/2026: clase presencial suspendida por falla eléctrica. Teoría enviada como guía (03-Clases/SISTEMAS-I/S05-guia-estudio-enfoques-desarrollo.docx). El 26/10 se aplica la prueba U-I (10 %, reprogramada desde el 12/10) y se entrega y presenta el cuadro (20 %). Plan presencial original: 03-Clases/SISTEMAS-I/S05-contenido-clase-lunes.md.'
    },
    {
      id: 'sis5-2',
      title: 'Tu plan de trabajo',
      contentHtml: `
        <div class="space-y-3">
          <div data-reveal class="flex gap-3 bg-white border rounded-xl p-4"><span class="font-bold text-blue-700 w-28">Hoy</span><span>Lee la teoría (diapositivas 3–8) y toma apuntes.</span></div>
          <div data-reveal class="flex gap-3 bg-white border rounded-xl p-4"><span class="font-bold text-blue-700 w-28">Esta semana</span><span>Resuelve la autoevaluación (diapositivas 10–11) y elabora el cuadro comparativo (diapositiva 12).</span></div>
          <div data-reveal class="flex gap-3 bg-blue-50 border border-blue-200 rounded-xl p-4"><span class="font-bold text-blue-700 w-28">Lunes 26/10</span><span>Prueba escrita de la Unidad I (10 %) y entrega del cuadro comparativo (20 %).</span></div>
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
          <ul class="list-disc list-inside text-slate-800 space-y-2">
            <li data-reveal>El sistema se ve como <strong>clases que colaboran</strong> para cumplir los requerimientos.</li>
            <li data-reveal><strong>Objeto</strong> = estado (atributos) + comportamiento (operaciones). Una <strong>clase</strong> describe un tipo de objeto; cada objeto concreto es una <strong>instancia</strong>.</li>
            <li data-reveal>Conceptos: <strong>encapsulación</strong> (datos y operaciones juntos), <strong>herencia</strong> (la subclase reutiliza y añade), <strong>mensajes</strong> (los objetos se piden servicios).</li>
          </ul>
          <div class="mermaid">classDiagram
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
          <p class="text-slate-600">Recuerda el caso de la semana 3: reservas en cuaderno, pedidos de palabra a la cocina y cuentas a mano.</p>
          <div data-tabs>
            <section data-tab="Estructurado"><p class="text-slate-800">Flujo de los datos entre procesos: Mesero → <em>Registrar pedido</em> → Pedidos → <em>Enviar a cocina</em> → Cocina; Pedidos → <em>Calcular cuenta</em> → Cliente.</p></section>
            <section data-tab="Orientado a objetos"><p class="text-slate-800">Clases <strong>Mesa</strong> (número, estado), <strong>Pedido</strong> (platos; agregarPlato(), subtotal()) y <strong>Cuenta</strong> (total()). Un pedido pertenece a una mesa.</p></section>
            <section data-tab="Aplicación Web"><p class="text-slate-800">Si El Barú abre <strong>reservas en línea</strong>, muchos clientes reservarán a la vez la noche del 24/12 (concurrencia, carga impredecible); debe responder rápido y estar disponible de noche.</p></section>
            <section data-tab="UML"><p class="text-slate-800">El modelo OO se dibuja como <strong>diagrama de casos de uso</strong> (Mesero — Registrar pedido; Cliente — Reservar mesa) y como <strong>diagrama de clases</strong>.</p></section>
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
      id: 'sis5-12',
      title: 'Taller 20 % · Cuadro comparativo',
      contentHtml: `
        <div class="space-y-4">
          <ul class="list-disc list-inside text-sm text-slate-800 space-y-1">
            <li>Trabajo <strong>individual</strong> para casa, con la guía de estudio y tus apuntes. Redáctalo con tus propias palabras.</li>
            <li>Distingue sus enfoques con precisión; no supongas que los cuatro términos designan la misma clase de método.</li>
            <li>Puedes completarlo en el archivo enviado o a mano en una hoja propia, copiando el cuadro. Puntaje máximo: <strong>20 puntos</strong>.</li>
          </ul>
          <table class="w-full text-sm border">
            <thead class="bg-slate-100"><tr><th class="p-2 border text-left">Elemento del programa</th><th class="p-2 border text-left">¿Qué aspecto organiza o representa principalmente?</th><th class="p-2 border text-left">Diferencia respecto de otro elemento de la lista</th><th class="p-2 border text-left">¿Qué papel cumple al desarrollar o modelar una aplicación?</th></tr></thead>
            <tbody>
              <tr><td class="p-2 border font-semibold">Desarrollo estructurado</td><td class="p-2 border"></td><td class="p-2 border"></td><td class="p-2 border"></td></tr>
              <tr><td class="p-2 border font-semibold">Desarrollo orientado a objetos</td><td class="p-2 border"></td><td class="p-2 border"></td><td class="p-2 border"></td></tr>
              <tr><td class="p-2 border font-semibold">Aplicaciones Web</td><td class="p-2 border"></td><td class="p-2 border"></td><td class="p-2 border"></td></tr>
              <tr><td class="p-2 border font-semibold">UML</td><td class="p-2 border"></td><td class="p-2 border"></td><td class="p-2 border"></td></tr>
            </tbody>
          </table>
          <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-950"><strong>Comparaciones directas:</strong> escribe dos oraciones que contrasten pares distintos de la tabla. Al menos una debe explicar qué papel cumple UML respecto de los enfoques de desarrollo. · <strong>Entrega: lunes 26/10 en la clase.</strong></div>
        </div>
      `,
      notes: 'Instrumento: 04-Evaluaciones/SISTEMAS-I/Revisado-2026-2/ESTUDIANTE-FORMATO-8.1-S05-cuadro-comparativo-enfoques-20pct-2026-10-26.docx. Clave y escala de estimación (8+4+4+2+2 = 20) solo en S05-cuadro-comparativo-enfoques-20pct-2026-10-19.md, Parte B. Rasgos esperados: estructurado = funciones/procesos y su descomposición; OO = objetos con estado y comportamiento; Web = categoría de aplicación, no metodología; UML = lenguaje de modelado, no proceso. Medio de entrega digital por confirmar.'
    },
    {
      id: 'sis5-13',
      title: 'Lunes 26/10 · Qué traer y qué estudiar',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-white border rounded-2xl p-5">
            <p class="text-xs uppercase tracking-widest font-bold text-blue-600">Prueba escrita · 10 %</p>
            <p class="font-bold text-slate-900 mt-1">Unidad I · individual, sin apuntes, 75 min</p>
            <ul class="list-disc list-inside text-sm text-slate-700 mt-3 space-y-1">
              <li>Definición de ingeniería de software y crisis del software</li>
              <li>Programa frente a producto de software</li>
              <li>Atributos de calidad</li>
              <li>Las cinco actividades y su aplicación a un caso</li>
            </ul>
          </div>
          <div class="bg-white border rounded-2xl p-5">
            <p class="text-xs uppercase tracking-widest font-bold text-emerald-600">Cuadro comparativo · 20 %</p>
            <p class="font-bold text-slate-900 mt-1">Entrega y presentación en la clase</p>
            <ul class="list-disc list-inside text-sm text-slate-700 mt-3 space-y-1">
              <li>Cuadro completo de los cuatro elementos</li>
              <li>Dos comparaciones directas</li>
              <li>Nombre y cédula en la hoja o el archivo</li>
            </ul>
          </div>
        </div>
      `,
      notes: 'Bloque de 135 min: prueba 75 min + entrega y presentación del cuadro ~45 min + logística. Notas del Corte I a DACE entre el 26 y el 31/10. Las fechas difieren del PGA (12/10 y 19/10); decidir si se notifica a coordinación.'
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
      items: ['Diapositivas 3 a 9 o la guía de estudio enviada', 'Autoevaluación de 8 preguntas'],
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
    },
    {
      id: 'sis5-t3',
      title: 'Prueba escrita de la Unidad I',
      description: 'Prueba individual sin apuntes, 75 minutos, en el aula A-06.',
      items: ['Selección múltiple, respuesta breve y análisis de un caso · 20 puntos'],
      due: '2026-10-26',
      corte: 1,
      weight: '10 %',
      kind: 'evaluacion',
      slideId: 'sis5-13'
    }
  ]
};
