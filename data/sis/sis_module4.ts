import { Module } from '../../types';

export const SISTEMAS_I_MODULE_4: Module = {
  id: 'sis-mod-4',
  title: '4. Feriado · Repaso de la Unidad I',
  description:
    'Semana 4 (lunes 12/10): feriado nacional, sin clase. La prueba escrita de la Unidad I (10 %) se aplica el lunes 26/10 (semana 6).',
  evaluation: '0% — Sin clase (feriado)',
  slides: [
    {
      id: 'sis4-1',
      title: 'Sistemas I · Semana 4',
      contentHtml: `
        <div class="space-y-7">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-4xl shadow-lg">📅</div>
            <div>
              <p class="text-sm uppercase tracking-widest font-bold text-blue-600">Ingeniería de Software · Unidad I</p>
              <h2 class="text-3xl md:text-4xl font-bold text-slate-900">Feriado: sin clase</h2>
              <p class="text-slate-500 mt-1">Lunes 12/10/2026 · Día de la Resistencia Indígena</p>
            </div>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-950">
            La prueba escrita de la Unidad I (10 %) <strong>no se aplicó</strong>. Se aplica el <strong>lunes 26/10/2026</strong> (semana 6), a las 16:00 en el aula A-06.
          </div>
          <p class="text-sm text-slate-500">Sección A · IUPSM — Extensión Ciudad Ojeda · Período 2026-2</p>
        </div>
      `,
      notes: 'Semana 4 sin clase por feriado (12/10). La prueba U-I se movió primero al 19/10 (S5) y, por la falla eléctrica de ese día, al 26/10 (S6). Instrumento: 04-Evaluaciones/SISTEMAS-I/Revisado-2026-2/ESTUDIANTE-FORMATO-8.1-S04-prueba-escrita-u1-10pct-2026-10-26.docx.'
    },
    {
      id: 'sis4-2',
      title: 'Qué repasar para la prueba',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-slate-600">La prueba cubre la <strong>Unidad I</strong> (semanas 1 a 3):</p>
          <ul class="list-disc list-inside text-slate-800 space-y-2">
            <li data-reveal>Definición de ingeniería de software y crisis del software <span class="text-slate-500">(semana 1)</span></li>
            <li data-reveal>Programa frente a producto de software <span class="text-slate-500">(semana 1)</span></li>
            <li data-reveal>Atributos de calidad <span class="text-slate-500">(semana 1)</span></li>
            <li data-reveal>Las cinco actividades: Proceso, Administración de Proyectos, Personas, Producto y Calidad <span class="text-slate-500">(semana 2)</span></li>
            <li data-reveal>Aplicación a un caso: hechos, necesidades y criterios comprobables <span class="text-slate-500">(semana 3)</span></li>
          </ul>
          <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-950"><strong>Estructura:</strong> selección múltiple, respuesta breve y análisis de un caso · 20 puntos · individual, sin apuntes, 75 minutos.</div>
        </div>
      `
    },
    {
      id: 'sis4-3',
      title: 'Autoevaluación de repaso',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-slate-600">Responde en tu cuaderno sin mirar tus apuntes; luego compara con ellos.</p>
          <ol class="list-decimal list-inside text-slate-800 space-y-2">
            <li data-reveal>¿Qué significa que la ingeniería de software sea un enfoque <em>disciplinado</em>?</li>
            <li data-reveal>¿Qué problemas describía la «crisis del software»?</li>
            <li data-reveal>Nombra tres atributos de calidad y da un ejemplo de cada uno.</li>
            <li data-reveal>¿Qué relación hay entre la actividad Proceso y la actividad Calidad?</li>
            <li data-reveal>En tu caso de la semana 3, ¿qué criterio comprobable redactaste? ¿Permite decidir «cumple / no cumple»?</li>
          </ol>
        </div>
      `,
      notes: 'Preguntas de repaso distintas de los ítems de la prueba; no revelan ítems ni la clave.'
    },
    {
      id: 'sis4-4',
      title: 'Fuentes',
      contentHtml: `
        <div class="bg-slate-50 border border-slate-200 rounded-2xl p-5">
          <p class="font-bold text-slate-900">Base de la Unidad I</p>
          <ul class="list-disc list-inside text-sm text-slate-700 mt-3 space-y-2">
            <li>Programa analítico de SISTEMAS I, Unidad I.</li>
            <li>Pressman, R. S. (2010). <em>Ingeniería del software. Un enfoque práctico</em> (7.ª ed.). McGraw-Hill.</li>
            <li>Sommerville, I. (2004). <em>Ingeniería de software</em>. Pearson Educación.</li>
          </ul>
        </div>
      `
    }
  ]
};
