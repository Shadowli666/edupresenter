
import { Module } from '../types';

export const PNN_MODULE_18: Module = {
  id: 'pnn-mod-18',
  title: '18. Cierre del Curso (Corte III)',
  description: 'Entrega de notas finales y cierre.',
  evaluation: 'Cierre de Semestre',
  slides: [
    {
      id: 'pnn18-1',
      title: 'Resultados Finales',
      contentHtml: `
        <div class="space-y-8">
           <div class="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h3 class="text-xl font-bold text-green-900 mb-2">Resumen Corte III</h3>
            <p class="text-green-800">Evaluaciones finales del semestre.</p>
          </div>

          <div class="overflow-hidden border rounded-xl shadow-sm">
            <table class="min-w-full text-sm text-left text-slate-600">
              <thead class="bg-slate-100 text-slate-700 uppercase font-bold">
                <tr>
                  <th class="px-6 py-4">Actividad</th>
                  <th class="px-6 py-4">Tema</th>
                  <th class="px-6 py-4 text-center">Valor</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr>
                  <td class="px-6 py-4 font-medium text-slate-900">Examen Escrito</td>
                  <td class="px-6 py-4">Backtracking y Análisis</td>
                  <td class="px-6 py-4 text-center font-bold text-blue-600">20%</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 font-medium text-slate-900">Proyecto Final</td>
                  <td class="px-6 py-4">Reto Algorítmico</td>
                  <td class="px-6 py-4 text-center font-bold text-blue-600">20%</td>
                </tr>
                <tr class="bg-slate-50">
                  <td class="px-6 py-4 font-bold text-slate-900" colspan="2">TOTAL CORTE III</td>
                  <td class="px-6 py-4 text-center font-bold text-slate-900 text-lg">40%</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div class="text-center mt-8">
            <p class="text-lg font-bold text-slate-800">¡Semestre Finalizado!</p>
            <p class="text-slate-500">Éxito en sus futuros proyectos.</p>
          </div>
        </div>
      `
    }
  ]
};
