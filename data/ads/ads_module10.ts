import { Module } from '../../types';

export const ANALISIS_DISENO_MODULE_10: Module = {
  id: 'ads-mod-10',
  title: '10. Del expediente a los requerimientos',
  description: 'Contraste de evidencias y formulación de candidatos a requerimientos.',
  evaluation: '0% (formativa)',
  slides: [
    {
      id: 'ads10-1', title: 'Del expediente a los requerimientos',
      contentHtml: `<div class="space-y-6"><p class="text-sky-700 font-bold uppercase tracking-widest">Análisis y Diseño de Sistemas · Unidad V</p><h2 class="text-4xl font-bold text-slate-900">¿Qué sabemos antes de proponer un sistema?</h2><p class="text-xl">Contrasten evidencias, identifiquen incertidumbres y formulen un candidato verificable.</p><p class="text-slate-500">Viernes 27/11/2026 · Sección A · 13:00–14:30 · Aula A-01</p></div>`,
      notes: 'Apertura 5 min. No se conoce lo dictado el 26/11 ni el alcance real de la semana anterior: consultar al grupo y ajustar si ya se hizo este ejercicio. No presentar el contenido previo como confirmado. La actividad es formativa.'
    },
    {
      id: 'ads10-2', title: 'Una decisión con versiones distintas',
      contentHtml: `<div class="space-y-6"><p class="text-2xl">Un manual exige autorizar todos los pedidos. Una auxiliar afirma que solo consulta cuando falta mercancía.</p><p class="text-3xl font-bold text-sky-800">¿Qué regla debería incorporar el sistema?</p><p data-reveal class="bg-amber-50 p-4 rounded-xl">¿Qué información falta antes de decidir?</p></div>`,
      notes: 'Recoger hipótesis sin resolver todavía. Un documento puede no estar vigente y un testimonio no describe necesariamente todos los casos. Mantener ambas ideas en la pizarra.'
    },
    {
      id: 'ads10-3', title: 'Del problema al candidato',
      contentHtml: `<div class="space-y-5"><p class="text-xl">Investigar un proceso no equivale a elegir ya una solución.</p><div data-diagram data-steps="A | B, A>B | C, B>C | D, C>D" data-flow>flowchart LR
A["Evidencias"] --> B["Necesidad"]
B --> C["Candidato"]
C --> D["Validación"]</div><p class="text-slate-600">La fuente y el estado acompañan cada candidato.</p></div>`,
      notes: 'Explicar durante la base teórica. Evidencia es lo dicho, registrado u observado; necesidad es el problema interpretado; candidato es una propuesta comprobable, aún no aprobada. La validación puede devolvernos a buscar evidencia. El gráfico es elaboración propia.'
    },
    {
      id: 'ads10-4', title: 'El inicio delimita la investigación',
      contentHtml: `<div class="grid grid-cols-2 gap-5 text-lg"><div class="bg-sky-50 p-5 rounded-xl"><strong>Problema y actores</strong><p>¿Qué ocurre y quién participa?</p></div><div class="bg-slate-100 p-5 rounded-xl"><strong>Proceso y frontera</strong><p>¿Qué se investiga y qué queda fuera?</p></div><div class="col-span-2 border-l-4 border-amber-500 p-4">La frontera inicial puede cambiar con evidencia nueva.</div></div>`,
      notes: '5 min. Distinguir el proceso que se estudia de una solución informática. Las etapas de investigación, análisis, diseño, construcción e implantación pueden iterarse según metodología; no son una secuencia universal rígida.'
    },
    {
      id: 'ads10-5', title: 'Tres fuentes, tres perspectivas',
      contentHtml: `<div class="space-y-4 text-lg"><div class="bg-sky-50 rounded-xl p-4"><strong>Documento:</strong> regla o registro; comprobar versión y vigencia.</div><div class="bg-emerald-50 rounded-xl p-4"><strong>Entrevista:</strong> experiencia y excepciones; preguntar a distintos roles.</div><div class="bg-amber-50 rounded-xl p-4"><strong>Observación:</strong> acciones en un momento y contexto; no generalizar una muestra.</div></div>`,
      notes: '9 min. Un formulario vacío muestra campos, no su uso. Preguntas abiertas antes de precisar. Observar con autorización y separar evento de interpretación. Preguntar qué muestra y qué no demuestra cada fuente; recoger ejemplos.'
    },
    {
      id: 'ads10-6', title: 'Contrastar no es votar',
      contentHtml: `<div class="space-y-5"><p class="text-2xl font-bold">Una discrepancia es una pregunta de investigación.</p><ol class="list-decimal pl-7 space-y-3 text-lg"><li>Identifiquen fuente, contexto y versión.</li><li>Busquen coincidencias y diferencias.</li><li>Definan qué comprobar y quién puede aclararlo.</li><li>Si falta evidencia, registren «por validar».</li></ol></div>`,
      notes: '4 min. No privilegiar automáticamente un manual, una autoridad o una sola observación. Puede haber distintos contextos, versiones o autorización previa. Verificar quién tiene competencia para aprobar la regla.'
    },
    {
      id: 'ads10-7', title: 'Caso: pedidos de repuestos',
      contentHtml: `<div class="space-y-5"><p class="text-lg">Una distribuidora de Ciudad Ojeda recibe pedidos y prepara repuestos. El estudio abarca desde la recepción hasta la autorización de preparación; excluye rutas y contabilidad.</p><div class="grid gap-3 text-lg"><p class="bg-sky-50 rounded-xl p-4"><strong>A · Manual 2024:</strong> todo pedido requiere autorización previa; vigencia desconocida.</p><p class="bg-emerald-50 rounded-xl p-4"><strong>B · Auxiliar:</strong> si hay existencia se prepara; si falta algo se consulta al encargado.</p><p class="bg-amber-50 rounded-xl p-4"><strong>C · Observación:</strong> un pedido con existencia se preparó sin solicitar autorización durante el episodio.</p></div></div>`,
      notes: 'Presentar A–C como evidencias dadas del escenario; los estudiantes no entrevistaron ni observaron. Una autorización previa al episodio es posible, no afirmada. Vigencia del manual desconocida.'
    },
    {
      id: 'ads10-8', title: 'Comparen las evidencias',
      contentHtml: `<div class="space-y-5"><p class="text-2xl font-bold">¿En qué coinciden B y C? ¿Dónde está la tensión con A?</p><p data-reveal class="bg-sky-50 p-4 rounded-xl">¿Qué permite concluir un solo pedido observado?</p><p data-reveal class="bg-amber-50 p-4 rounded-xl">¿Qué hipótesis y qué dato faltante explicarían la diferencia?</p></div>`,
      notes: 'Demostración guiada, parte de 18 min. B y C coinciden solo en el episodio con existencia y ausencia de llamada observada. C no demuestra que nunca se autorice. A difiere de B; C tensiona A si la regla está vigente y no existió autorización previa. No declarar incumplimiento sin comprobar.'
    },
    {
      id: 'ads10-9', title: '¿Cómo investigarían la discrepancia?',
      contentHtml: `<div class="space-y-5"><p class="text-2xl">¿A quién preguntarían y qué registro revisarían?</p><p data-reveal class="bg-emerald-50 p-4 rounded-xl">Formulen una pregunta abierta sobre el proceso.</p><p data-reveal class="bg-sky-50 p-4 rounded-xl">Precisen después cómo se deciden las excepciones.</p></div>`,
      notes: 'Escuchar primero. Ejemplo: auxiliar: «Cuénteme qué ocurre desde que reciben un pedido hasta que se prepara». Responsable competente: «¿Cuál es la regla vigente y quién puede aprobar excepciones?». Revisar manual vigente y muestra autorizada de pedidos y autorizaciones; observar distintos turnos con permiso.'
    },
    {
      id: 'ads10-10', title: 'Necesidad y candidato verificable',
      contentHtml: `<div class="space-y-4 text-lg"><p>¿Qué necesidad y qué función comprobable podrían derivarse del caso?</p><div data-reveal class="bg-sky-50 rounded-xl p-4"><strong>Evidencia A–C:</strong> existen versiones distintas sobre cómo se preparan los pedidos. <strong>Necesidad inferida:</strong> conocer el estado y responsable de cada pedido; por validar.</div><div data-reveal class="bg-emerald-50 rounded-xl p-4"><strong>R-01 · Candidato por validar:</strong> al consultar un pedido por identificador, el sistema mostrará su estado y responsable asignado.</div><p data-reveal>¿Qué falta confirmar antes de exigir un control de autorización?</p></div>`,
      notes: 'Tras recibir propuestas: necesidad inferida, por validar: conocer estado y responsable de cada pedido. R-01 candidato: al consultar un pedido por identificador, el sistema mostrará su estado y responsable asignado. No está aprobado: confirmar necesidad, datos, estados y alcance. No fijar regla de autorización todavía.'
    },
    {
      id: 'ads10-11', title: 'Práctica: definan y contrasten',
      contentHtml: `<div class="space-y-4 text-lg"><div class="bg-slate-100 p-4 rounded-xl"><strong>A:</strong> manual de 2024 exige autorización previa; vigencia desconocida. <strong>B:</strong> auxiliar prepara con existencia y consulta ante faltantes. <strong>C:</strong> un pedido con existencia se preparó sin solicitar autorización durante la observación.</div><ol class="list-decimal pl-7 space-y-3"><li>Delimiten problema, dos actores, un proceso incluido y uno excluido.</li><li>Indiquen una coincidencia, una discrepancia y un dato pendiente entre A, B y C.</li></ol><p>Justifiquen cada afirmación con la fuente correspondiente.</p></div>`,
      notes: 'Práctica formativa 25 min junto con siguiente diapositiva. Proponer trabajo en parejas como modalidad flexible, coherente con el taller previo; no exigir cuaderno. Problema: claridad de autorización y seguimiento; auxiliar y encargado; recepción y preparación dentro, rutas o contabilidad fuera. No atribuir al grupo trabajo real de campo.'
    },
    {
      id: 'ads10-12', title: 'Práctica: investiguen y formulen',
      contentHtml: `<div class="space-y-4 text-lg"><ol start="3" class="list-decimal pl-7 space-y-4"><li>Diseñen dos preguntas para roles distintos: una abierta y otra sobre excepciones. Indiquen dos aspectos y momentos de observación.</li><li>Formulen una necesidad y un candidato funcional identificable y comprobable; indiquen fuente y estado «por validar».</li><li>Expliquen qué decisión falta antes de fijar la regla de autorización.</li></ol></div>`,
      notes: 'Mantener visibles ambos enunciados alternando o copiándolos a la pizarra. Orientar sin dar la solución; aceptar alternativas justificadas. Observar consulta al encargado y registro durante recepción o preparación y, si ocurre, ante un faltante. La decisión requiere aclarar regla vigente, autoridad y excepciones.'
    },
    {
      id: 'ads10-13', title: 'Defiendan sus decisiones',
      contentHtml: `<div class="space-y-5"><p class="text-2xl font-bold">¿Puede un registro demostrar una regla vigente?</p><p data-reveal class="bg-sky-50 p-4 rounded-xl">¿Conocer el proceso implica poder aprobar una regla?</p><p data-reveal class="bg-amber-50 p-4 rounded-xl">¿Qué se pierde al decidir primero «usar una aplicación móvil»?</p></div>`,
      notes: 'Discusión 14 min: pedir argumentos antes de orientar. Un registro muestra un evento, no necesariamente una política; el operador puede no aprobar reglas. Elegir tecnología primero presupone solución y puede ocultar necesidades y restricciones. Lista de cotejo: frontera, evidencia/inferencia, preguntas, observables y candidato trazable por validar.'
    },
    {
      id: 'ads10-14', title: 'Cierre: una fuente y una incertidumbre',
      contentHtml: `<div class="space-y-6"><p class="text-2xl">Elijan una fuente del caso y expliquen:</p><div class="grid grid-cols-3 gap-4 text-lg"><div class="bg-sky-50 p-5 rounded-xl"><strong>Qué aporta</strong></div><div class="bg-amber-50 p-5 rounded-xl"><strong>Qué no sabemos</strong></div><div class="bg-emerald-50 p-5 rounded-xl"><strong>Cómo comprobarlo</strong></div></div></div>`,
      notes: '6 min. Solicitar respuesta oral o escrita sin exigir cuaderno. Recoger dos alternativas y cerrar: fuente, incertidumbre y siguiente verificación. Sin anunciar fechas ni condiciones de evaluación.'
    },
    {
      id: 'ads10-caso-srs', title: 'Estudio de caso: SRS',
      contentHtml: `<div class="space-y-4 text-lg"><p>Trabajo individual · Segundo corte · 20 %.</p><p>Dividan los dos últimos dígitos de su cédula entre 4: el residuo 0, 1, 2 o 3 corresponde respectivamente al caso 1, 2, 3 o 4. Lean la consigna y el expediente asignado antes de elaborar el SRS.</p><p class="font-bold">Consigna y expedientes</p><ul class="list-disc pl-7 space-y-1 text-sky-700 underline"><li><a href="ads/corte-2-srs/estudiante.pdf" target="_blank" rel="noopener noreferrer">Consigna y criterios de evaluación</a></li><li><a href="ads/corte-2-srs/caso-1.pdf" target="_blank" rel="noopener noreferrer">Caso 1 · Centro de Atención Médica Santa Lucía</a></li><li><a href="ads/corte-2-srs/caso-2.pdf" target="_blank" rel="noopener noreferrer">Caso 2 · Cooperativa de Transporte Costa del Lago</a></li><li><a href="ads/corte-2-srs/caso-3.pdf" target="_blank" rel="noopener noreferrer">Caso 3 · Instituto Técnico del Occidente</a></li><li><a href="ads/corte-2-srs/caso-4.pdf" target="_blank" rel="noopener noreferrer">Caso 4 · Comercial La Ceiba</a></li></ul><p>Entreguen el SRS impreso en clase el jueves 03/12/2026.</p></div>`,
      notes: 'Instrumento aprobado por el docente; verificar remisión a Control de Estudios y validar recepción con coordinación. Aprobación no acredita aplicación.'
    },
    {
      id: 'ads10-15', title: 'Fuentes',
      contentHtml: `<div class="space-y-3 text-base"><p>Sommerville, I. (2011). <em>Ingeniería de software</em> (9.ª ed.). Pearson, pp. 103–105.</p><p>Government Digital Service. (s. f.). <em>Learning about users and their needs</em>. https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs</p><p>Government Digital Service. (s. f.). <em>Contextual research and observation</em>. https://www.gov.uk/service-manual/user-research/contextual-research-and-observation</p><p>ISO/IEC/IEEE. (2018). <em>ISO/IEC/IEEE 29148:2018: Requirements engineering</em>. https://www.iso.org/standard/72089.html</p><p>IUPSM. (2013). <em>Programa analítico de Análisis y Diseño de Sistemas</em>, unidad V.</p></div>`,
      notes: 'ISO consultada solo en su ficha pública, no en texto íntegro. La investigación y las rutas locales están documentadas en el plan.'
    },
  ],
  tasks: [{
    id: 'ads10-t1',
    title: 'Estudio de caso y especificación de requerimientos',
    description: 'Trabajo individual: seleccionen el caso con los dos últimos dígitos de la cédula y entreguen el SRS impreso en clase el jueves 03/12/2026.',
    items: [
      'Dividan los dos últimos dígitos de la cédula entre 4: residuo 0, 1, 2 o 3 corresponde respectivamente al caso 1, 2, 3 o 4.',
      'Lean la consigna y el expediente asignado; distingan hechos, discrepancias y decisiones pendientes.',
      'Elaboren el SRS y la trazabilidad de necesidades y requerimientos; la tabla de discrepancias es opcional.',
      'Preparen el SRS impreso identificado con nombre, cédula y número de caso; extensión orientativa de 6 a 10 páginas, sin portada ni anexos.',
    ],
    due: '2026-12-03',
    corte: 2,
    weight: '20 %',
    kind: 'evaluacion',
    slideId: 'ads10-caso-srs',
  }],
};
