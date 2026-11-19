import { Module } from '../../types';

export const ANALISIS_DISENO_MODULE_9: Module = {
  id: 'ads-mod-9',
  title: '9. Metodología del proyecto y alcance',
  description:
    'Semana 9: jueves 19/11 — aplicar la metodología declarada por cada equipo al proyecto del curso y definir el alcance (seis elementos, cuatro fuentes del curso, diagrama de contexto enunciado y acta de alcance formativa). Viernes 20/11 — taller individual de metodologías (10 %, 20 puntos) en el cuaderno, sin dispositivos.',
  evaluation: '10% — Taller individual de metodologías',
  slides: [
    {
      id: 'ads9-1',
      title: 'Jueves 19/11 · Metodología del proyecto y alcance',
      contentHtml: `
        <div class="space-y-7">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 bg-sky-600 rounded-2xl flex items-center justify-center text-white text-4xl shadow-lg">🧱</div>
            <div>
              <p class="text-sm uppercase tracking-widest font-bold text-sky-700">Análisis y Diseño de Sistemas · Unidad IV.3</p>
              <h2 class="text-3xl md:text-4xl font-bold text-slate-900">Metodología del proyecto y alcance</h2>
              <p class="text-slate-500 mt-1">El alcance es la frontera del sistema</p>
            </div>
          </div>
          <div class="bg-sky-50 border border-sky-200 rounded-xl p-5 text-sky-950">
            <p class="text-lg"><strong>Objetivo:</strong> aplicar al proyecto del curso la metodología seleccionada para definir su alcance.</p>
          </div>
          <p class="text-sm text-slate-500">Jueves 19/11/2026 · 13:00–14:30 · Aula A-01 · Sección A · IUPSM — Extensión Ciudad Ojeda</p>
        </div>
      `,
      notes: 'Inicio 4 min: asistencia y las dos preguntas de recuperación de la diapositiva 3. Construye hacia: el taller individual del 20/11 (10 %, 20 puntos) y el SRS del 04/12 (20 %), donde esta acta es la sección 1.2. Hoy no hay nota: el acta es formativa (0 %).'
    },
    {
      id: 'ads9-2',
      title: 'Ruta del jueves',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-slate-600 text-lg">La S8 respondió <strong>qué metodología</strong>. Hoy: <strong>qué produce esa metodología en tu proyecto</strong>.</p>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-white border-2 border-sky-300 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-sky-700">1 · 5 min</p><h3 class="text-lg font-bold text-slate-900 mt-2">Declaración</h3><p class="text-sm text-slate-700 mt-2">Cada equipo escribe y firma qué metodología eligió y con qué dos criterios.</p></div>
            <div class="bg-sky-50 border border-sky-200 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-sky-700">2 · 24 min</p><h3 class="text-lg font-bold text-sky-950 mt-2">La frontera</h3><p class="text-sm text-sky-900 mt-2">Qué es el alcance, sus seis elementos y las cuatro fuentes del curso.</p></div>
            <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-emerald-700">3 · 30 min</p><h3 class="text-lg font-bold text-emerald-950 mt-2">El acta</h3><p class="text-sm text-emerald-900 mt-2">El alcance del proyecto de cada pareja, escrito en el cuaderno.</p></div>
          </div>
        </div>
      `,
      notes: 'Ruta de 90 min: inicio 4, declaración 5, teoría 24, demostración 10, práctica guiada 8, práctica autónoma 30, plenaria 5, cierre 4.'
    },
    {
      id: 'ads9-3',
      title: 'Recuperación · la S8 en dos preguntas',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-gradient-to-br from-slate-900 to-sky-900 text-white p-6 rounded-2xl">
            <p class="text-xs uppercase tracking-widest font-bold text-sky-300">Sin volver a explicar</p>
            <p class="text-xl md:text-2xl font-bold mt-2 leading-snug">Dos preguntas de la semana pasada, con respuesta de una frase.</p>
          </div>
          <div class="grid gap-3 text-lg">
            <div class="bg-white border-l-4 border-sky-500 rounded-xl p-4" data-reveal>1. ¿UML es un <strong>lenguaje</strong> o un <strong>proceso</strong>?</div>
            <div class="bg-white border-l-4 border-sky-500 rounded-xl p-4" data-reveal>2. Si dos metodologías sirven para el mismo proyecto, ¿qué <strong>criterio</strong> decide?</div>
          </div>
        </div>
      `,
      notes: 'Respuestas: 1) UML es un lenguaje de modelado; el proceso es RUP. 2) Deciden el criterio 1 (fuerza motriz: qué mira primero el problema) y el criterio 5 (limitación: qué exige que este proyecto no tiene). Se responde en 4 min y no se vuelve a explicar.'
    },
    {
      id: 'ads9-4',
      title: 'Declaración de metodología por equipo',
      contentHtml: `
        <div class="space-y-5">
          <p class="text-slate-700">Antes de escribir el alcance, cada equipo deja constancia en el cuaderno. No se debate: se declara.</p>
          <div class="bg-sky-50 border-2 border-sky-300 rounded-2xl p-6 space-y-3">
            <p class="text-slate-800">«Metodología seleccionada: <strong>____________</strong>»</p>
            <p class="text-slate-800">«Criterio 1 (qué mira primero el problema): <strong>____________</strong>»</p>
            <p class="text-slate-800">«Criterio 5 (qué exige que este proyecto no tiene): <strong>____________</strong>»</p>
            <p class="text-sm text-slate-600">Fecha y firma de los integrantes.</p>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-950">
            Si el equipo <strong>no</strong> tiene elección previa, la declara hoy con esos dos criterios. La metodología elegida es el lente con el que se escribe el alcance.
          </div>
        </div>
      `,
      notes: '5 min. Recoger la lista de equipos y metodologías declaradas: queda por confirmar qué eligió cada equipo (no se inventan nombres). La declaración sustituye la evidencia que no existe del taller del 13/11, que no está registrado. Quien declara hoy no queda en desventaja.'
    },
    {
      id: 'ads9-5',
      title: 'Qué es el alcance · la frontera',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-gradient-to-br from-sky-900 to-slate-900 text-white p-6 rounded-2xl">
            <p class="text-xs uppercase tracking-widest font-bold text-sky-300">Definición de trabajo</p>
            <p class="text-xl md:text-2xl font-bold mt-2 leading-snug">El alcance es la <strong>frontera decidida y escrita</strong>: qué procesos y datos entran, qué queda fuera y con qué se comprobará que sirve.</p>
          </div>
          <div class="grid md:grid-cols-3 gap-3 text-sm">
            <div class="bg-white border rounded-xl p-4"><p class="font-bold text-slate-900">No es el cronograma</p><p class="text-slate-700 mt-1">El cronograma es consecuencia de la frontera y se escribe al final.</p></div>
            <div class="bg-white border rounded-xl p-4"><p class="font-bold text-slate-900">No es una lista de deseos</p><p class="text-slate-700 mt-1">Sin límite no hay forma de comprobar el resultado.</p></div>
            <div class="bg-white border rounded-xl p-4"><p class="font-bold text-slate-900">No es el organigrama</p><p class="text-slate-700 mt-1">El sistema no es la empresa: el sistema es lo que se va a construir.</p></div>
          </div>
          <p class="text-lg text-slate-800"><strong>Regla de la clase:</strong> si no puedes nombrar cinco cosas que quedan <strong>FUERA</strong>, todavía no tienes un alcance: tienes un deseo.</p>
        </div>
      `,
      notes: '7 min. Fuentes: Kendall y Kendall (2011, p. 9-10 y p. 87); Pressman (2010, p. 102-103); Sommerville (2011, p. 100); IBM Rational (2003, p. 3). Dejar la regla de los cinco de fuera escrita en la pizarra toda la clase.'
    },
    {
      id: 'ads9-6',
      title: 'Los seis elementos del alcance',
      contentHtml: `
        <div class="space-y-3">
          <table class="w-full text-sm border-collapse">
            <thead><tr class="bg-sky-700 text-white"><th class="p-2 border text-left">#</th><th class="p-2 border text-left">Elemento</th><th class="p-2 border text-left">Pregunta que responde</th></tr></thead>
            <tbody>
              <tr data-reveal><td class="p-2 border font-bold">1</td><td class="p-2 border font-bold">Problema y objetivo</td><td class="p-2 border">¿Qué duele y qué debe lograrse, medible?</td></tr>
              <tr data-reveal><td class="p-2 border font-bold">2</td><td class="p-2 border font-bold">Límites</td><td class="p-2 border">¿Qué procesos y datos están dentro?</td></tr>
              <tr data-reveal><td class="p-2 border font-bold">3</td><td class="p-2 border font-bold">Entregables</td><td class="p-2 border">¿Qué se entrega, tangible y verificable?</td></tr>
              <tr data-reveal><td class="p-2 border font-bold">4</td><td class="p-2 border font-bold">Restricciones</td><td class="p-2 border">¿Qué no se puede cambiar?</td></tr>
              <tr data-reveal><td class="p-2 border font-bold">5</td><td class="p-2 border font-bold">Supuestos</td><td class="p-2 border">¿Qué se da por cierto y, si falla, cambia el alcance?</td></tr>
              <tr data-reveal class="bg-amber-50"><td class="p-2 border font-bold">6</td><td class="p-2 border font-bold">Exclusiones</td><td class="p-2 border">¿Qué se decidió <strong>no</strong> hacer y quién lo hará?</td></tr>
            </tbody>
          </table>
          <p class="text-sm text-slate-700"><strong>Criterios de aceptación:</strong> ¿cómo se comprueba que el entregable sirve? Un número o una prueba reproducible, no «que funcione bien».</p>
        </div>
      `,
      notes: '8 min. Los dos elementos que el estudiante omite siempre son el 5 (supuestos) y el 6 (exclusiones): PMBOK los hace obligatorios justamente por eso (PMI, 2017, §5.3.3.1). Preguntar al grupo: ¿cuál de estos seis no escribieron nunca? Distinguir alcance del producto (lo que el sistema hará) de alcance del proyecto (el trabajo del equipo).'
    },
    {
      id: 'ads9-7',
      title: 'Las cuatro fuentes del curso',
      contentHtml: `
        <div class="space-y-3">
          <table class="w-full text-sm border-collapse">
            <thead><tr class="bg-slate-800 text-white"><th class="p-2 border text-left">Fuente</th><th class="p-2 border text-left">Artefacto</th><th class="p-2 border text-left">Qué fija</th></tr></thead>
            <tbody>
              <tr data-reveal><td class="p-2 border font-bold">Kendall y Kendall</td><td class="p-2 border">Estatutos del proyecto</td><td class="p-2 border">9 preguntas; la 2 pide el alcance y <strong>qué está más allá</strong></td></tr>
              <tr data-reveal><td class="p-2 border font-bold">Whitten y Bentley</td><td class="p-2 border">Project charter</td><td class="p-2 border">Alcance preliminar <strong>negociado</strong> y línea base</td></tr>
              <tr data-reveal><td class="p-2 border font-bold">RUP</td><td class="p-2 border">Documento de visión</td><td class="p-2 border">Fase de inicio: delimitar el alcance</td></tr>
              <tr data-reveal><td class="p-2 border font-bold">James Martin</td><td class="p-2 border">Plan de información</td><td class="p-2 border">El proyecto es una <strong>rebanada</strong> del plan</td></tr>
            </tbody>
          </table>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-3"><strong>En común:</strong> se decide antes de analizar en detalle e incluye objetivos, alcance, entregables y restricciones.</div>
            <div class="bg-sky-50 border border-sky-200 rounded-xl p-3"><strong>Diferencia:</strong> quién lo aprueba — el usuario, un comité, los interesados o la arquitectura de la empresa.</div>
          </div>
        </div>
      `,
      notes: '7 min. Kendall y Kendall (2011, p. 87-88); Whitten y Bentley (2008), fuente secundaria; IBM Rational (2003, p. 3-4); Martin (1990), fuente secundaria. Enfatizar que el contenido es el mismo y cambia la forma del documento. Puente al SRS: ISO/IEC/IEEE 29148 (2018), cláusula 1.2, exige describir qué queda cubierto y qué no.'
    },
    {
      id: 'ads9-8',
      title: 'El diagrama de contexto · el alcance dibujado',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-slate-700">Una <strong>burbuja</strong> es el sistema; las <strong>entidades externas</strong> quedan fuera y solo cruzan datos por la frontera.</p>
          <div data-diagram data-steps="V, C | S | P, B, D" class="bg-white border border-slate-200 rounded-xl p-3">
flowchart LR
  V["Vendedor"] --> S(("Sistema de información"))
  C["Cliente"] --> S
  S --> P["Proveedor"]
  S --> B["Banco"]
  S --> D["Dueño"]
          </div>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-white border-l-4 border-sky-500 rounded-xl p-3">Si el candidato es un área que el sistema <strong>gestiona</strong> (depósito, inventario), no es entidad externa.</div>
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-3">Hoy solo se enuncia: el DFD de contexto y de nivel 0 se produce en la <strong>S13</strong>.</div>
          </div>
        </div>
      `,
      notes: '2 min. Fuente: Kendall y Kendall (2011, p. 29): el diagrama de contexto muestra el alcance y las entidades externas están fuera del alcance. No dibujar el DFD hoy: se produce en la Unidad VI (S13). El diagrama sirve como prueba visual de coherencia del acta.'
    },
    {
      id: 'ads9-9',
      title: 'Demostración · El Lago: dentro y fuera',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-slate-900 text-white rounded-xl p-4">
            <p class="text-xs uppercase tracking-widest font-bold text-sky-300">Caso · Distribuidora de alimentos «El Lago»</p>
            <p class="text-sm mt-1">Dos depósitos, tres camiones, nueve vendedores, 180 clientes a crédito. Una computadora, conexión intermitente, sin personal de sistemas. El dueño quiere verlo funcionando en <strong>tres meses</strong>.</p>
          </div>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
              <p class="font-bold text-emerald-900">Dentro</p>
              <ul class="list-disc list-inside text-emerald-950 mt-2 space-y-1">
                <li data-reveal>Pedidos por vendedor y ruta</li>
                <li data-reveal>Despacho por camión y depósito</li>
                <li data-reveal>Inventario por depósito</li>
                <li data-reveal>Cuentas por cobrar y límite de crédito</li>
              </ul>
            </div>
            <div class="bg-rose-50 border border-rose-200 rounded-2xl p-4">
              <p class="font-bold text-rose-900">Fuera → dónde queda</p>
              <ul class="list-disc list-inside text-rose-950 mt-2 space-y-1">
                <li data-reveal>Nómina → hoja del administrador</li>
                <li data-reveal>Contabilidad → contador externo</li>
                <li data-reveal>Facturación fiscal → talonario</li>
                <li data-reveal>App móvil → pedidos en papel</li>
              </ul>
            </div>
          </div>
          <p class="text-sm text-slate-600">Restricción que decide el diseño: <strong>sin internet estable, el sistema opera en local</strong>. Supuesto crítico: el dueño dedica 4 h por semana.</p>
        </div>
      `,
      notes: '10 min. Caso nuevo: no es la ferretería de la S4 ni la farmacia ni la biblioteca. Recorrido: problema y objetivo medible, dentro/fuera con destino, actores externos (vendedor, despachador, administrador, dueño, cliente, proveedor, banco), restricciones, supuestos y dos criterios de aceptación verificables (cuadre con conteo de 20 códigos; bloqueo del despacho con cuota vencida). Cerrar con las tres decisiones discutibles: nota de despacho interna (dentro), comisión del vendedor (discutible), precio desde el celular (fuera, fase posterior).'
    },
    {
      id: 'ads9-10',
      title: 'Práctica guiada · corregir un alcance difuso',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-slate-700">Corrijan cada enunciado con la <strong>prueba de la frontera</strong> y nombren la categoría del error: contenido, categoría o disciplina de proyecto.</p>
          <ol class="space-y-2 text-slate-800 list-decimal list-inside">
            <li data-reveal class="bg-white border rounded-xl p-3">«El sistema mejorará la gestión administrativa de la empresa».</li>
            <li data-reveal class="bg-white border rounded-xl p-3">«Incluye inventario, compras, ventas, nómina, contabilidad y facturación fiscal».</li>
            <li data-reveal class="bg-white border rounded-xl p-3">«El alcance es: semana 1 análisis, semana 2 diseño, semana 3 construcción».</li>
            <li data-reveal class="bg-white border rounded-xl p-3">«Objetivo: hacer un módulo de inventario».</li>
          </ol>
          <p class="text-sm text-slate-600">Pregunta de control en cada corrección: <strong>¿esto es un deseo o una decisión?</strong></p>
        </div>
      `,
      notes: '8 min, 2 por enunciado. Clave: 1) pedir sujeto y verbo: quién hace qué, con qué dato y en cuánto tiempo (contenido: alcance difuso). 2) prueba de la frontera a los módulos más caros: nómina y contabilidad fuera, con destino (contenido: el sistema no es la organización). 3) es cronograma, no alcance: primero qué entra, después cuándo (categoría). 4) cambiar el verbo de hacer a conocer, reducir o impedir, con magnitud y plazo (categoría: objetivo no es entregable). Prueba de la frontera: quién hace hoy la tarea; el sistema decide o solo registra; si la función desaparece, el sistema sigue sirviendo.'
    },
    {
      id: 'ads9-11',
      title: 'Acta de alcance del proyecto',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-sky-50 border-2 border-sky-300 rounded-xl p-4">
            <p class="font-bold text-sky-950">En parejas · en el cuaderno · se revisa en clase</p>
            <p class="text-sm text-sky-900 mt-1">Escriban el acta de alcance de <strong>su</strong> proyecto del curso. Se evalúa una sola cosa: que un desconocido pueda decir qué entra y qué no.</p>
          </div>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-white border rounded-xl p-3"><p class="font-bold">1 · Encabezado</p><p class="text-slate-700">Fecha, integrantes y <strong>metodología declarada</strong>.</p></div>
            <div class="bg-white border rounded-xl p-3"><p class="font-bold">2 · Problema y objetivo</p><p class="text-slate-700">Una frase de problema con un dato; un objetivo con verbo medible y plazo.</p></div>
            <div class="bg-white border rounded-xl p-3"><p class="font-bold">3 · Dentro</p><p class="text-slate-700">Mínimo <strong>6</strong> procesos o datos, no módulos de software.</p></div>
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-3"><p class="font-bold">4 · Fuera</p><p class="text-amber-950">Mínimo <strong>5</strong> exclusiones, cada una con <strong>dónde queda</strong>.</p></div>
            <div class="bg-white border rounded-xl p-3"><p class="font-bold">5 · Entregables, restricciones y supuestos</p><p class="text-slate-700">Cuatro entregables verificables, tres restricciones, tres supuestos con su «¿y si falla?».</p></div>
            <div class="bg-white border rounded-xl p-3"><p class="font-bold">6 · Frontera y actores</p><p class="text-slate-700">Tres actores externos y la frase: «empieza cuando… y termina cuando…».</p></div>
          </div>
          <p class="text-xs text-slate-500">Lo nuevo entra por escrito al acta, con fecha y firma; si no está escrito, no entra.</p>
        </div>
      `,
      notes: '30 min. Reparto: encuadre 2, problema y objetivo 5, dentro/fuera 8, frontera y actores 5, entregables/restricciones/supuestos 6, prueba del intruso entre parejas vecinas 4. Es formativa (0 %): no se recoge ni se califica; se revisa con la lista de cotejo del plan. El acta es la sección 1.2 del SRS del 04/12 y el insumo de la recolección de datos de la S10. Criterios de la lista de cotejo en el plan del jueves, §5.1.'
    },
    {
      id: 'ads9-12',
      title: 'Cierre del jueves',
      contentHtml: `
        <div class="space-y-5">
          <div data-quiz class="bg-white border-l-4 border-sky-600 rounded-xl p-4">
            <p class="font-bold text-slate-900">Un acta dice: «Fuera: contabilidad». ¿Qué le falta para ser una exclusión admisible?</p>
            <button data-option>Más detalle técnico</button>
            <button data-option data-correct>El destino: quién lo hará y con qué</button>
            <button data-option>Un plazo de entrega</button>
            <p data-explain class="text-sm text-slate-600 mt-2">Una exclusión sin destino no es una decisión: es una omisión.</p>
          </div>
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div class="bg-rose-50 border border-rose-200 rounded-2xl p-4"><p class="text-xs uppercase font-bold text-rose-700">Viernes 20/11 · 10 %</p><p class="font-bold text-rose-950 mt-1">Taller individual de metodologías</p><p class="text-rose-900 mt-1">En clase, en el cuaderno, sin dispositivos. 20 puntos, cuatro apartados.</p></div>
            <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-4"><p class="text-xs uppercase font-bold text-emerald-700">Viernes 04/12 · 20 %</p><p class="font-bold text-emerald-950 mt-1">SRS del sistema</p><p class="text-emerald-900 mt-1">El acta de hoy es la sección 1.2 Alcance del documento.</p></div>
          </div>
        </div>
      `,
      notes: 'Cierre 4 min. Respuesta del quiz: el destino. Anunciar el taller del viernes (individual, sin dispositivos, en el cuaderno) y el SRS del 04/12. Recordar que en la S10 (23–28/11) se recolectan datos: del alcance salen las personas a entrevistar y los documentos a revisar.'
    },
    {
      id: 'ads9-13',
      title: 'Viernes 20/11 · Taller individual de metodologías',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-sm uppercase tracking-widest font-bold text-rose-700">Análisis y Diseño de Sistemas · Unidad IV</p>
          <h2 class="text-4xl font-bold text-slate-900">Taller individual: metodologías de desarrollo</h2>
          <div class="grid md:grid-cols-3 gap-4 text-center">
            <div class="bg-rose-600 text-white rounded-2xl p-5"><p class="text-2xl font-bold">10 %</p><p class="text-sm mt-1 text-rose-100">Ponderación</p></div>
            <div class="bg-slate-800 text-white rounded-2xl p-5"><p class="text-2xl font-bold">20 pts</p><p class="text-sm mt-1 text-slate-200">Cuatro apartados</p></div>
            <div class="bg-white border-2 border-slate-300 rounded-2xl p-5"><p class="text-2xl font-bold text-slate-900">66 min</p><p class="text-sm mt-1 text-slate-600">De trabajo individual</p></div>
          </div>
          <p class="text-slate-600">Viernes 20/11/2026 · 13:00–14:30 · Aula A-01 · Sección A</p>
        </div>
      `,
      notes: 'Portada del viernes. Se aplica el instrumento S09-2026-11-20 convertido a taller individual por decisión del docente del 17/11/2026. No introduce contenido nuevo: evalúa la Unidad IV.'
    },
    {
      id: 'ads9-14',
      title: 'Normas del taller',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-rose-50 border-2 border-rose-300 rounded-2xl p-5">
            <p class="text-lg font-bold text-rose-950">Individual, en el cuaderno, sin dispositivos.</p>
            <p class="text-sm text-rose-900 mt-1">Se copia el número de cada apartado y se responde debajo. Nombre, cédula y sección en la primera línea.</p>
          </div>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-white border rounded-xl p-3"><strong>1.</strong> Sin teléfono ni material de consulta: ni apuntes de la S8, ni cuaderno de otro curso.</div>
            <div class="bg-white border rounded-xl p-3"><strong>2.</strong> Cuatro apartados, en orden: 1 (18 min), 2 (12 min), 3 (22 min), 4 (14 min).</div>
            <div class="bg-white border rounded-xl p-3"><strong>3.</strong> Se califica la coherencia entre el caso, el método y la justificación.</div>
            <div class="bg-white border rounded-xl p-3"><strong>4.</strong> Se avisa a los 20, 10 y 5 minutos del final. La entrega se recoge a las 14:18.</div>
          </div>
          <p class="text-sm text-slate-600">No se responden dudas de contenido. Las dudas de forma se atienden en los primeros minutos.</p>
        </div>
      `,
      notes: '6 min de logística y 6 de instrucciones. Retirar teléfonos y material de consulta. Si se detecta copia, aplicar el procedimiento institucional que el docente indique (por confirmar). La ficha completa del instrumento está en el plan del viernes y en 04-Evaluaciones.'
    },
    {
      id: 'ads9-15',
      title: 'Ítem 1 · Procesos de análisis (6 pts)',
      contentHtml: `
        <div class="space-y-5">
          <div class="flex items-center justify-between">
            <p class="text-sm uppercase tracking-widest font-bold text-rose-700">Apartado 1 · 6 puntos</p>
            <p class="text-sm font-bold text-slate-500">18 min</p>
          </div>
          <p class="text-xl font-semibold text-slate-900 leading-snug">Expliquen una característica que distinga cada enfoque de análisis clásico, estructurado y orientado a objetos. Cierren indicando una diferencia entre dos de ellos.</p>
          <div class="grid md:grid-cols-3 gap-3 text-sm text-center">
            <div class="bg-white border rounded-xl p-4"><p class="font-bold">Clásico</p><p class="text-slate-600 mt-1">2 puntos</p></div>
            <div class="bg-white border rounded-xl p-4"><p class="font-bold">Estructurado</p><p class="text-slate-600 mt-1">2 puntos</p></div>
            <div class="bg-white border rounded-xl p-4"><p class="font-bold">Orientado a objetos</p><p class="text-slate-600 mt-1">2 puntos</p></div>
          </div>
          <p class="text-sm text-slate-500">Se califica la característica <strong>distintiva</strong> y el contraste final, no la definición memorizada.</p>
        </div>
      `,
      notes: 'Clave en el plan del viernes §2.6. Clásico: documento y procedimiento narrado, organigrama, flujograma de documentos. Estructurado: proceso que transforma datos; DFD, diccionario, especificación de procesos. Orientado a objetos: objeto o clase con datos y comportamiento; casos de uso, clases, mensajes. 2 puntos por enfoque con característica correcta y pertinente a lo tratado en clase; el contraste final debe ser coherente.'
    },
    {
      id: 'ads9-16',
      title: 'Ítem 2 · Metodologías del programa (4 pts)',
      contentHtml: `
        <div class="space-y-5">
          <div class="flex items-center justify-between">
            <p class="text-sm uppercase tracking-widest font-bold text-rose-700">Apartado 2 · 4 puntos</p>
            <p class="text-sm font-bold text-slate-500">12 min</p>
          </div>
          <p class="text-lg font-semibold text-slate-900 leading-snug">Seleccionen cuatro alternativas de esta lista y describan su propósito o ámbito según lo estudiado:</p>
          <div class="grid md:grid-cols-2 gap-2 text-sm">
            <div class="bg-white border rounded-lg p-2">Kendall y Kendall</div>
            <div class="bg-white border rounded-lg p-2">James Martin</div>
            <div class="bg-white border rounded-lg p-2">Jeffrey Whitten</div>
            <div class="bg-white border rounded-lg p-2">UML</div>
            <div class="bg-white border rounded-lg p-2">Software educativo de Galvis (ISE)</div>
            <div class="bg-white border rounded-lg p-2">RMM</div>
            <div class="bg-white border rounded-lg p-2">Sistemas expertos de Rolston</div>
          </div>
          <p class="text-sm text-slate-500">Un punto por cada alternativa explicada. No basta el nombre del autor.</p>
        </div>
      `,
      notes: 'Clave en el plan del viernes §2.6: 1 punto por cada alternativa correctamente explicada con base en el programa y los apuntes. UML es lenguaje de modelado, no metodología; ISE de Galvis es metodología de software educativo; RMM pertenece al ámbito hipermedia; Kendall es ciclo de vida centrado en las personas; Martin, ingeniería de información dirigida por datos; Whitten, método por fases con selección de técnica; Rolston, sistemas basados en conocimiento. Descontar describir UML como proceso.'
    },
    {
      id: 'ads9-17',
      title: 'Ítem 3 · Selección metodológica (6 pts)',
      contentHtml: `
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <p class="text-sm uppercase tracking-widest font-bold text-rose-700">Apartado 3 · 6 puntos</p>
            <p class="text-sm font-bold text-slate-500">22 min</p>
          </div>
          <div class="bg-slate-900 text-white rounded-xl p-4 text-sm">
            Un proyecto debe analizar el proceso de atención de solicitudes de una organización, comprender las necesidades de sus usuarios y producir modelos que orienten el desarrollo posterior.
          </div>
          <ol class="text-sm text-slate-800 space-y-2 list-decimal list-inside">
            <li data-reveal>Seleccionen una metodología o enfoque de la lista del curso.</li>
            <li data-reveal>Justifiquen la selección con <strong>dos criterios del caso</strong>.</li>
            <li data-reveal>Indiquen una <strong>limitación</strong> o aspecto que habría que verificar.</li>
          </ol>
        </div>
      `,
      notes: '6 pts: 2 por seleccionar una opción pertinente de la lista; 2 por dos criterios concretos del caso; 1 por limitación o condición verificable; 1 por coherencia entre la selección y el producto esperado. Se aceptan alternativas distintas si la argumentación es consistente. Defendibles: Kendall (usuarios y juego completo de modelos), Whitten (procesos de atención de solicitudes), estructurado (el proceso es el objeto de análisis). Martin exige justificar el costo de planificar datos; ISE, RMM y Rolston exigen justificar un dominio que aquí no está dado.'
    },
    {
      id: 'ads9-18',
      title: 'Ítem 4 · Recolección de datos (4 pts)',
      contentHtml: `
        <div class="space-y-5">
          <div class="flex items-center justify-between">
            <p class="text-sm uppercase tracking-widest font-bold text-rose-700">Apartado 4 · 4 puntos</p>
            <p class="text-sm font-bold text-slate-500">14 min</p>
          </div>
          <p class="text-lg font-semibold text-slate-900 leading-snug">Para conocer el procedimiento real, las reglas formales y la experiencia de los usuarios, elijan técnicas de recolección apropiadas y vinculen cada una con el tipo de evidencia que aportaría.</p>
          <div class="grid md:grid-cols-3 gap-3 text-sm">
            <div class="bg-white border rounded-xl p-3"><p class="font-bold">Procedimiento real</p><p class="text-slate-600 mt-1">¿Qué se observa?</p></div>
            <div class="bg-white border rounded-xl p-3"><p class="font-bold">Reglas formales</p><p class="text-slate-600 mt-1">¿Qué documento las fija?</p></div>
            <div class="bg-white border rounded-xl p-3"><p class="font-bold">Experiencia de usuarios</p><p class="text-slate-600 mt-1">¿A quién se pregunta?</p></div>
          </div>
        </div>
      `,
      notes: '1 punto por cada emparejamiento técnica-evidencia pertinente: revisión de documentos con reglas formales; entrevista con experiencia y necesidades; observación con procedimiento real. Se acepta otra técnica justificada (por ejemplo, cuestionario con percepción agregada), siempre que la evidencia declarada corresponda.'
    },
    {
      id: 'ads9-19',
      title: 'Entrega y cierre del taller',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-white border-l-4 border-rose-600 rounded-xl p-4">
            <p class="font-bold text-slate-900">Antes de entregar</p>
            <p class="text-slate-700">Nombre, cédula y sección · los cuatro apartados numerados · todo escrito con letra legible.</p>
          </div>
          <div class="bg-slate-50 border rounded-xl p-4 text-sm">
            <p class="font-bold text-slate-800">Retroalimentación del bloque</p>
            <p class="text-slate-700 mt-1">Se explica <strong>qué se valoró</strong> en cada apartado, sin resolver los ítems: pertinencia de la elección, criterios del caso, coherencia y emparejamiento técnica-evidencia.</p>
          </div>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-sky-50 border border-sky-200 rounded-xl p-3"><strong>S10 · 23–28/11:</strong> recolección de datos sobre el acta de alcance de cada equipo.</div>
            <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-3"><strong>04/12 · 20 %:</strong> SRS del sistema; el acta del 19/11 es su sección 1.2.</div>
          </div>
        </div>
      `,
      notes: 'Entrega 4 min (14:18) y retroalimentación 8 min, sin devolver puntajes. Queda por confirmar la fecha de publicación de calificaciones y el medio de retroalimentación individual. La corrección se asienta sobre 20 y se convierte a la ponderación del 10 % según la escala institucional 01-20.'
    },
    {
      id: 'ads9-20',
      title: 'Fuentes',
      contentHtml: `
        <div class="space-y-4 text-sm">
          <h3 class="text-xl font-bold text-slate-900">Fuentes de la semana</h3>
          <ul class="space-y-2 text-slate-700">
            <li>Kendall, K. E. y Kendall, J. E. (2011). <em>Análisis y diseño de sistemas</em> (8.ª ed.). Pearson Educación.</li>
            <li>Whitten, J. L. y Bentley, L. D. (2008). <em>Systems analysis and design methods</em> (7.ª ed.). McGraw-Hill.</li>
            <li>IBM Rational. (2003). <em>Rational Unified Process: Best practices for software development teams</em>. IBM.</li>
            <li>Martin, J. (1990). <em>Information Engineering</em>. Prentice-Hall.</li>
            <li>Pressman, R. S. (2010). <em>Ingeniería del software: un enfoque práctico</em> (7.ª ed.). McGraw-Hill.</li>
            <li>Sommerville, I. (2011). <em>Ingeniería de software</em> (9.ª ed.). Pearson Educación.</li>
            <li>Project Management Institute. (2017). <em>Guía del PMBOK</em> (6.ª ed.). PMI.</li>
            <li>ISO/IEC/IEEE. (2018). <em>ISO/IEC/IEEE 29148:2018</em>. IEEE.</li>
            <li>IUPSM. (2013). <em>Programa analítico de Análisis y Diseño de Sistemas</em>, Unidad IV.</li>
          </ul>
          <p class="text-xs text-slate-500">Whitten y Martin se citan como fuente secundaria: no hay ejemplar en la biblioteca.</p>
        </div>
      `,
      notes: 'Todas las referencias figuran en «Fuentes consultadas» de los planes del jueves y del viernes. Programa analítico y PGA 2026-2 son la base institucional. No se usan imágenes en este módulo.'
    }
  ],
  tasks: [
    {
      id: 'ads9-t1',
      title: 'Taller individual: metodologías (10 %)',
      description: 'Taller individual en clase sobre la Unidad IV: procesos de análisis, metodologías del programa, selección metodológica y recolección de datos. Se responde en el cuaderno, sin dispositivos, sobre 20 puntos.',
      items: [
        'Apartado 1: una característica distintiva de cada enfoque de análisis (6 pts)',
        'Apartado 2: propósito o ámbito de cuatro metodologías del programa (4 pts)',
        'Apartado 3: selección metodológica con dos criterios del caso y una limitación (6 pts)',
        'Apartado 4: técnicas de recolección vinculadas a la evidencia que aportan (4 pts)'
      ],
      due: '2026-11-20',
      corte: 2,
      weight: '10 %',
      kind: 'evaluacion',
      slideId: 'ads9-14'
    },
    {
      id: 'ads9-t2',
      title: 'Acta de alcance (0 %, formativa)',
      description: 'Acta de alcance del proyecto del curso, escrita en parejas durante la clase del jueves: objetivo, dentro, fuera con destino, entregables, restricciones y supuestos.',
      items: [
        'Encabezado con fecha, integrantes y metodología declarada',
        'Mínimo 6 elementos dentro y mínimo 5 fuera, cada uno con su destino',
        'Cuatro entregables verificables, tres restricciones y tres supuestos',
        'Prueba del intruso con la pareja vecina'
      ],
      due: '2026-11-19',
      corte: 2,
      weight: '0 % (formativa)',
      kind: 'tarea',
      slideId: 'ads9-11'
    }
  ]
};
