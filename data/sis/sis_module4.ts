import { Module } from '../../types';

export const SISTEMAS_I_MODULE_4: Module = {
  id: 'sis-mod-4',
  title: '4. Evaluación de la Unidad I y puente a la Unidad II',
  description:
    'Semana 4: prueba escrita mixta de la Unidad I (10 %), reprogramada para el lunes 26/10; cierre de unidad y puente a los enfoques de desarrollo.',
  evaluation: '10% — Prueba escrita mixta (Unidad I)',
  slides: [
    {
      id: 'sis4-1',
      title: 'Sistemas I · Semana 4',
      contentHtml: `
        <div class="space-y-7">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-4xl shadow-lg">📝</div>
            <div>
              <p class="text-sm uppercase tracking-widest font-bold text-blue-600">Ingeniería de Software · Unidad I</p>
              <h2 class="text-3xl md:text-4xl font-bold text-slate-900">Evaluación de la Unidad I</h2>
              <p class="text-slate-500 mt-1">Prueba escrita mixta · 10 % del Corte I</p>
            </div>
          </div>
          <p class="text-sm text-slate-500">Reprogramada: lunes 26/10/2026 · 16:00–18:15 · Aula A-06 · Sección A · IUPSM — Extensión Ciudad Ojeda</p>
        </div>
      `,
      notes: 'Sesión de evaluación. Instrumento en 04-Evaluaciones/SISTEMAS-I/Revisado-2026-2/S04-prueba-escrita-u1-10pct-2026-10-12.md (borrador no aprobado). Ninguna diapositiva muestra ítems.'
    },
    {
      id: 'sis4-2',
      title: 'Agenda de la sesión',
      contentHtml: `
        <div class="space-y-3">
          <div data-reveal class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-blue-700 w-20">10 min</span><span>Logística y normas</span></div>
          <div data-reveal class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-blue-700 w-20">75 min</span><span>Aplicación de la prueba (individual)</span></div>
          <div data-reveal class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-blue-700 w-20">10 min</span><span>Recolección</span></div>
          <div data-reveal class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-blue-700 w-20">40 min</span><span>Cierre de unidad y puente a la Unidad II</span></div>
        </div>
      `
    },
    {
      id: 'sis4-3',
      title: 'Alcance de la prueba',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-slate-600">La prueba cubre la <strong>Unidad I</strong>. Temas, sin ítems:</p>
          <ul class="list-disc list-inside text-slate-800 space-y-2">
            <li data-reveal>Definición de ingeniería de software y crisis del software</li>
            <li data-reveal>Programa frente a producto de software</li>
            <li data-reveal>Atributos de calidad</li>
            <li data-reveal>Las cinco actividades y su aplicación a un caso</li>
          </ul>
          <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-950"><strong>Estructura:</strong> selección múltiple, respuesta breve y análisis de un caso · 20 puntos.</div>
        </div>
      `
    },
    {
      id: 'sis4-4',
      title: 'Normas de aplicación',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-3">
          <div data-reveal class="bg-white border rounded-xl p-4">🧍 Trabajo <strong>individual</strong> y en silencio</div>
          <div data-reveal class="bg-white border rounded-xl p-4">📵 Sin apuntes ni dispositivos</div>
          <div data-reveal class="bg-white border rounded-xl p-4">✍️ Nombre, cédula y sección en cada hoja</div>
          <div data-reveal class="bg-white border rounded-xl p-4">❓ Solo se aclaran dudas de <strong>forma</strong></div>
          <div data-reveal class="bg-amber-50 border border-amber-200 rounded-xl p-4 md:col-span-2">⏱️ Duración: <strong>75 minutos</strong>. Avisos a los 35 y a los 10 minutos finales.</div>
        </div>
      `
    },
    {
      id: 'sis4-5',
      title: 'Durante la prueba',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-slate-900 text-white rounded-2xl p-8 text-center">
            <p class="text-sm uppercase tracking-widest text-slate-400">Prueba en curso</p>
            <p class="text-4xl font-bold mt-2">Unidad I · 20 puntos</p>
          </div>
          <p class="text-sm text-slate-500 text-center">Al terminar, entrega la hoja y espera en silencio.</p>
        </div>
      `
    },
    {
      id: 'sis4-6',
      title: 'Cierre de la Unidad I',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white border rounded-xl p-4"><p class="font-bold">Autoevaluación (en tu cuaderno)</p>
            <ol class="list-decimal list-inside text-sm text-slate-700 mt-2 space-y-1"><li data-reveal>Algo que dominé de la unidad</li><li data-reveal>Algo que me costó</li><li data-reveal>Una duda que me quedó</li></ol></div>
          <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-sm text-emerald-950">Las dudas se retoman en la retroalimentación del primer corte (semana 6).</div>
        </div>
      `,
      notes: 'No corregir ni revelar ítems. Agrupar las dudas por tema para la retroalimentación del 26–31/10.'
    },
    {
      id: 'sis4-7',
      title: 'Puente · Unidad II',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-blue-600 text-white rounded-2xl p-6">
            <p class="text-xs uppercase tracking-widest text-blue-100">Pregunta detonadora</p>
            <h3 class="text-2xl font-bold mt-1">¿Cómo se organiza el trabajo para construir un software?</h3>
          </div>
          <p class="text-slate-600">La próxima sesión (lunes 19/10) compararemos cuatro enfoques de desarrollo:</p>
          <div class="grid grid-cols-2 gap-3 text-sm">
            <div data-reveal class="bg-slate-50 border rounded-xl p-3 text-center">Estructurado</div>
            <div data-reveal class="bg-slate-50 border rounded-xl p-3 text-center">Orientado a objetos</div>
            <div data-reveal class="bg-slate-50 border rounded-xl p-3 text-center">Aplicaciones Web</div>
            <div data-reveal class="bg-slate-50 border rounded-xl p-3 text-center">UML</div>
          </div>
        </div>
      `,
      notes: 'Solo introducción; el desarrollo es el 19/10 (S5, con taller 20 % de cuadro comparativo).'
    },
    {
      id: 'sis4-8',
      title: 'Fuentes',
      contentHtml: `
        <div class="bg-slate-50 border border-slate-200 rounded-2xl p-5">
          <p class="font-bold text-slate-900">Base de la prueba</p>
          <ul class="list-disc list-inside text-sm text-slate-700 mt-3 space-y-2">
            <li>Programa analítico de SISTEMAS I, Unidad I.</li>
            <li>Pressman, R. (1999). <em>Ingeniería del software: un enfoque práctico</em>.</li>
            <li>Sommerville, I. (2004). <em>Ingeniería de software</em>.</li>
          </ul>
        </div>
      `
    }
  ]
};
