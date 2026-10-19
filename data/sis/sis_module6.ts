import { Module } from '../../types';

export const SISTEMAS_I_MODULE_6: Module = {
  id: 'sis-mod-6',
  title: '6. Cierre del Corte I: cuadro comparativo y prueba de la Unidad I',
  description:
    'Semana 6 (lunes 26/10): presentación y entrega del cuadro comparativo de enfoques (20 %) y prueba escrita mixta de la Unidad I (10 %).',
  evaluation: '30% — Cuadro comparativo (20 %) + Prueba escrita U-I (10 %)',
  slides: [
    {
      id: 'sis6-1',
      title: 'Sistemas I · Semana 6',
      contentHtml: `
        <div class="space-y-7">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-4xl shadow-lg">🏁</div>
            <div>
              <p class="text-sm uppercase tracking-widest font-bold text-blue-600">Cierre del Corte I</p>
              <h2 class="text-3xl md:text-4xl font-bold text-slate-900">Cuadro comparativo y prueba de la Unidad I</h2>
              <p class="text-slate-500 mt-1">Presentación y entrega del cuadro (20 %) · Prueba escrita mixta (10 %)</p>
            </div>
          </div>
          <p class="text-sm text-slate-500">Lunes 26/10/2026 · 16:00–18:15 · Aula A-06 · Sección A · IUPSM — Extensión Ciudad Ojeda</p>
        </div>
      `,
      notes: 'Sesión reprogramada: S4 feriado (12/10) y S5 sin electricidad (19/10). Plan: 03-Clases/SISTEMAS-I/S06-contenido-clase-lunes.md. Prueba: 04-Evaluaciones/SISTEMAS-I/Revisado-2026-2/ESTUDIANTE-FORMATO-8.1-S04-prueba-escrita-u1-10pct-2026-10-26.docx (imprimir). Clave y escalas: S04-prueba-escrita-u1-10pct-2026-10-12.md y S05-cuadro-comparativo-enfoques-20pct-2026-10-19.md, Parte B. Notas del Corte I a DACE entre el 26 y el 31/10. La retroalimentación prevista en el PGA para S6 se pasa al inicio de S7 (por confirmar).'
    },
    {
      id: 'sis6-2',
      title: 'Agenda de la sesión',
      contentHtml: `
        <div class="space-y-3">
          <div data-reveal class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-blue-700 w-20">8 min</span><span>Asistencia y organización</span></div>
          <div data-reveal class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-blue-700 w-20">30 min</span><span>Presentación del cuadro comparativo</span></div>
          <div data-reveal class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-blue-700 w-20">4 min</span><span>Entrega del cuadro</span></div>
          <div data-reveal class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-blue-700 w-20">78 min</span><span>Prueba escrita de la Unidad I (normas + 75 min)</span></div>
          <div data-reveal class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-blue-700 w-20">15 min</span><span>Recolección y cierre del corte</span></div>
        </div>
      `,
      notes: '8 + 30 + 4 + 3 + 75 + 5 + 10 = 135 min. El cuadro va primero para que la prueba empiece a las 16:45 y nadie trabaje el cuadro durante la prueba.'
    },
    {
      id: 'sis6-3',
      title: 'Presentación del cuadro comparativo',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-slate-600">Presentamos por <strong>rondas</strong>. Lee desde tu cuadro; no lo corrijas todavía. La presentación es formativa: la nota es la del cuadro escrito.</p>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div data-reveal class="bg-white border rounded-xl p-4"><strong>Ronda 1 · Desarrollo estructurado</strong><br>¿Qué organiza o representa principalmente?</div>
            <div data-reveal class="bg-white border rounded-xl p-4"><strong>Ronda 2 · Desarrollo orientado a objetos</strong><br>¿En qué se diferencia del estructurado?</div>
            <div data-reveal class="bg-white border rounded-xl p-4"><strong>Ronda 3 · Aplicaciones Web</strong><br>¿Qué papel cumple al desarrollar una aplicación?</div>
            <div data-reveal class="bg-white border rounded-xl p-4"><strong>Ronda 4 · UML</strong><br>Lee tu comparación sobre el papel de UML.</div>
          </div>
          <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-950">Cierre de la ronda: ¿son cuatro maneras de hacer lo mismo? Justifica con lo que escuchaste.</div>
        </div>
      `,
      notes: 'Unos 6 min por ronda (2–3 estudiantes cada una) + 6 min de cierre con la pregunta eje. No calificar en voz alta ni dar la clave. Decisión docente: la presentación es formativa, sin puntaje aparte (20 puntos = cuadro escrito). Respuesta del cierre: estructurado y OO son enfoques de análisis y diseño; Web es una categoría de aplicación; UML es un lenguaje de modelado.'
    },
    {
      id: 'sis6-4',
      title: 'Entrega del cuadro',
      contentHtml: `
        <div class="space-y-4">
          <ul class="list-disc list-inside text-slate-800 space-y-2">
            <li data-reveal>Verifica <strong>nombre, cédula y sección</strong> en tu hoja o archivo.</li>
            <li data-reveal>Entrega el cuadro completo con las <strong>dos comparaciones directas</strong>.</li>
            <li data-reveal>Después de entregar no se hacen cambios.</li>
          </ul>
        </div>
      `,
      notes: 'Recibir todos los cuadros antes de repartir la prueba. Anotar quién no entregó. Medio de entrega para los archivos digitales: por confirmar (no SAIA).'
    },
    {
      id: 'sis6-5',
      title: 'Prueba escrita · normas',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-3">
          <div data-reveal class="bg-white border rounded-xl p-4">🧍 Trabajo <strong>individual</strong> y en silencio</div>
          <div data-reveal class="bg-white border rounded-xl p-4">📵 Sin apuntes ni dispositivos</div>
          <div data-reveal class="bg-white border rounded-xl p-4">✍️ Nombre y cédula en la hoja</div>
          <div data-reveal class="bg-white border rounded-xl p-4">❓ Solo se aclaran dudas de <strong>forma</strong></div>
          <div data-reveal class="bg-amber-50 border border-amber-200 rounded-xl p-4 md:col-span-2">⏱️ Duración: <strong>75 minutos</strong>. Avisos a los 35 y a los 10 minutos finales.</div>
        </div>
      `
    },
    {
      id: 'sis6-6',
      title: 'Durante la prueba',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-slate-900 text-white rounded-2xl p-8 text-center">
            <p class="text-sm uppercase tracking-widest text-slate-400">Prueba en curso</p>
            <p class="text-4xl font-bold mt-2">Unidad I · 20 puntos</p>
          </div>
          <p class="text-sm text-slate-500 text-center">Al terminar, entrega la hoja y espera en silencio.</p>
        </div>
      `,
      notes: 'Ninguna diapositiva muestra ítems. Registrar en la escala de estimación por parte (I, II, III).'
    },
    {
      id: 'sis6-7',
      title: 'Cierre del Corte I',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white border rounded-xl p-4"><p class="font-bold">Autoevaluación (en tu cuaderno)</p>
            <ol class="list-decimal list-inside text-sm text-slate-700 mt-2 space-y-1"><li data-reveal>Lo que más dominé del corte</li><li data-reveal>Lo que más me costó</li><li data-reveal>Una duda que quiero resolver</li></ol></div>
          <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-sm text-emerald-950"><strong>Próxima clase (lunes 02/11):</strong> resultados del Corte I y modelos de proceso: cascada, cascada con prototipo y espiral.</div>
        </div>
      `,
      notes: 'No comentar ítems ni respuestas. Agrupar las dudas por tema para la retroalimentación del 02/11.'
    }
  ],
  tasks: [
    {
      id: 'sis6-t1',
      title: 'Prueba escrita de la Unidad I',
      description: 'Prueba individual sin apuntes, 75 minutos, en el aula A-06.',
      items: ['Selección múltiple, respuesta breve y análisis de un caso · 20 puntos'],
      due: '2026-10-26',
      corte: 1,
      weight: '10 %',
      kind: 'evaluacion',
      slideId: 'sis6-5'
    }
  ]
};
