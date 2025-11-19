
import { Module } from '../types';

export const PROG_MODULE_12: Module = {
  id: 'prog-mod-12',
  title: '12. Entrega de Notas (Corte II)',
  description: 'Cierre del Segundo Corte y retroalimentación.',
  evaluation: 'Cierre de Corte',
  slides: [
    {
      id: 'p12-1',
      title: 'Resumen Corte II',
      contentHtml: `
        <div class="space-y-8">
           <div class="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg">
            <h3 class="text-xl font-bold text-teal-900 mb-2">Evaluaciones Realizadas</h3>
            <p class="text-teal-800">Desglose del 30% correspondiente al segundo corte.</p>
          </div>

          <div class="overflow-hidden border rounded-xl shadow-sm">
            <table class="min-w-full text-sm text-left text-slate-600">
              <thead class="bg-slate-100 text-slate-700 uppercase font-bold">
                <tr>
                  <th class="px-6 py-4">Actividad</th>
                  <th class="px-6 py-4">Tema</th>
                  <th class="px-6 py-4 text-center">Valor</th>
                  <th class="px-6 py-4 text-center">Estado</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr>
                  <td class="px-6 py-4 font-medium text-slate-900">Ejercicios Prácticos</td>
                  <td class="px-6 py-4">Listas y Pilas</td>
                  <td class="px-6 py-4 text-center font-bold text-blue-600">10%</td>
                  <td class="px-6 py-4 text-center"><span class="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">Calificado</span></td>
                </tr>
                <tr>
                  <td class="px-6 py-4 font-medium text-slate-900">Proyecto Final</td>
                  <td class="px-6 py-4">Integración Estructuras</td>
                  <td class="px-6 py-4 text-center font-bold text-blue-600">20%</td>
                  <td class="px-6 py-4 text-center"><span class="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">Defendido</span></td>
                </tr>
                <tr class="bg-slate-50">
                  <td class="px-6 py-4 font-bold text-slate-900" colspan="2">TOTAL CORTE II</td>
                  <td class="px-6 py-4 text-center font-bold text-slate-900 text-lg">30%</td>
                  <td class="px-6 py-4"></td>
                </tr>
                 <tr class="bg-slate-900 text-white">
                  <td class="px-6 py-4 font-bold" colspan="2">ACUMULADO GENERAL (Corte I + II)</td>
                  <td class="px-6 py-4 text-center font-bold text-lg">60%</td>
                  <td class="px-6 py-4"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 'p12-end-questions',
      title: 'Revisión de Notas',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mb-6">
             <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Verificación</h3>
          <p class="text-center text-gray-600 max-w-md">
            Acérquese para revisar su calificación del Proyecto y su acumulado total.
          </p>
        </div>
      `
    },
    {
      id: 'p12-end-thanks',
      title: 'Fin del Corte II',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">¡Buen Trabajo!</h2>
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-teal-500 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "La calidad nunca es un accidente; siempre es el resultado de un esfuerzo de la inteligencia."
            </p>
            <footer class="flex items-center justify-center gap-2">
              <div class="h-px w-8 bg-slate-300"></div>
              <cite class="not-italic font-bold text-slate-900">John Ruskin</cite>
            </footer>
          </blockquote>
        </div>
      `
    }
  ]
};
