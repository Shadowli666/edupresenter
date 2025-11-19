
import { Module } from '../types';

export const PNN_MODULE_6: Module = {
  id: 'pnn-mod-6',
  title: '6. Entrega de Notas (Corte I)',
  description: 'Retroalimentación y cierre del primer corte.',
  evaluation: 'Cierre de Corte',
  slides: [
    {
      id: 'pnn6-1',
      title: 'Resultados del Corte I',
      contentHtml: `
        <div class="space-y-8">
           <div class="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
            <h3 class="text-xl font-bold text-orange-900 mb-2">Resumen de Evaluaciones</h3>
            <p class="text-orange-800">Ponderación oficial de las actividades realizadas.</p>
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
                  <td class="px-6 py-4 font-medium text-slate-900">Taller Práctico</td>
                  <td class="px-6 py-4">Árboles y Sortmerge</td>
                  <td class="px-6 py-4 text-center font-bold text-blue-600">10%</td>
                  <td class="px-6 py-4 text-center"><span class="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">Calificado</span></td>
                </tr>
                <tr>
                  <td class="px-6 py-4 font-medium text-slate-900">Prueba Escrita</td>
                  <td class="px-6 py-4">Heaps y Quicksort</td>
                  <td class="px-6 py-4 text-center font-bold text-blue-600">20%</td>
                  <td class="px-6 py-4 text-center"><span class="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">Calificado</span></td>
                </tr>
                <tr class="bg-slate-50">
                  <td class="px-6 py-4 font-bold text-slate-900" colspan="2">TOTAL ACUMULADO</td>
                  <td class="px-6 py-4 text-center font-bold text-slate-900 text-lg">30%</td>
                  <td class="px-6 py-4"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 'pnn6-end-questions',
      title: 'Entrega Individual',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="text-6xl font-bold text-slate-400 mb-6 select-none">✓</div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Firma de Acta</h3>
          <p class="text-center text-gray-600 max-w-md">
            Por favor verifique su nota acumulada antes de firmar.
          </p>
        </div>
      `
    },
    {
      id: 'pnn6-end-thanks',
      title: 'Fin del Corte I',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">¡Excelente Trabajo!</h2>
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-orange-600 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "Saber lo que hay que hacer elimina el miedo."
            </p>
            <footer class="flex items-center justify-center gap-2">
              <div class="h-px w-8 bg-slate-300"></div>
              <cite class="not-italic font-bold text-slate-900">Rosa Parks</cite>
            </footer>
          </blockquote>
        </div>
      `
    }
  ]
};
