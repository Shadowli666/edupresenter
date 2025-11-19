
import { Module } from '../types';

export const PROG_MODULE_6: Module = {
  id: 'prog-mod-6',
  title: '6. Entrega de Notas (Corte I)',
  description: 'Retroalimentación y cierre del primer corte.',
  evaluation: 'Cierre de Corte',
  slides: [
    {
      id: 'p6-1',
      title: 'Resultados del Corte I',
      contentHtml: `
        <div class="space-y-8">
           <div class="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
            <h3 class="text-xl font-bold text-indigo-900 mb-2">Resumen de Evaluaciones</h3>
            <p class="text-indigo-800">Ponderación oficial de las actividades realizadas.</p>
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
                  <td class="px-6 py-4 font-medium text-slate-900">Diagnóstico</td>
                  <td class="px-6 py-4">Datos y Archivos</td>
                  <td class="px-6 py-4 text-center text-gray-400">0%</td>
                  <td class="px-6 py-4 text-center"><span class="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">Finalizado</span></td>
                </tr>
                <tr>
                  <td class="px-6 py-4 font-medium text-slate-900">Guía de Ejercicios</td>
                  <td class="px-6 py-4">Arreglos y Vectores</td>
                  <td class="px-6 py-4 text-center font-bold text-blue-600">10%</td>
                  <td class="px-6 py-4 text-center"><span class="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">Calificado</span></td>
                </tr>
                <tr>
                  <td class="px-6 py-4 font-medium text-slate-900">Prueba Escrita</td>
                  <td class="px-6 py-4">Listas y Punteros</td>
                  <td class="px-6 py-4 text-center font-bold text-blue-600">20%</td>
                  <td class="px-6 py-4 text-center"><span class="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">Calificado</span></td>
                </tr>
                <tr class="bg-slate-50">
                  <td class="px-6 py-4 font-bold text-slate-900" colspan="2">TOTAL</td>
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
      id: 'p6-end-questions',
      title: 'Entrega Individual',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 mb-6">
             <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Firma de Acta</h3>
          <p class="text-center text-gray-600 max-w-md">
            Por favor verifique su nota acumulada antes de firmar.
          </p>
        </div>
      `
    },
    {
      id: 'p6-end-thanks',
      title: 'Fin del Corte',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">¡Excelente Trabajo!</h2>
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-indigo-600 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "No te preocupes si no funciona bien. Si todo estuviera correcto, serías despedido del trabajo."
            </p>
            <footer class="flex items-center justify-center gap-2">
              <div class="h-px w-8 bg-slate-300"></div>
              <cite class="not-italic font-bold text-slate-900">Ley de Mosher de la Ingeniería de Software</cite>
            </footer>
          </blockquote>
        </div>
      `
    }
  ]
};
