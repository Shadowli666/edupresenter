
import { Module } from '../types';

export const PYTHON_MODULE_6: Module = {
  id: 'py-mod-6',
  title: '6. Entrega de Notas (Corte I)',
  description: 'Cierre del primer corte y retroalimentación.',
  evaluation: 'Cierre de Corte',
  slides: [
    {
      id: 'py6-1',
      title: 'Resultados del Corte I',
      contentHtml: `
        <div class="space-y-8">
           <div class="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h3 class="text-xl font-bold text-green-900 mb-2">Resumen de Evaluaciones</h3>
            <p class="text-green-800">Ponderación oficial de las actividades realizadas en Python.</p>
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
                  <td class="px-6 py-4 font-medium text-slate-900">Prueba Diagnóstica</td>
                  <td class="px-6 py-4">Fundamentos y Lógica</td>
                  <td class="px-6 py-4 text-center text-gray-400">0%</td>
                  <td class="px-6 py-4 text-center"><span class="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">Realizado</span></td>
                </tr>
                <tr>
                  <td class="px-6 py-4 font-medium text-slate-900">Guía de Ejercicios</td>
                  <td class="px-6 py-4">Primeros Scripts (I/O)</td>
                  <td class="px-6 py-4 text-center font-bold text-blue-600">10%</td>
                  <td class="px-6 py-4 text-center"><span class="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">Calificado</span></td>
                </tr>
                <tr>
                  <td class="px-6 py-4 font-medium text-slate-900">Prueba Escrita</td>
                  <td class="px-6 py-4">Algoritmos y Bucles</td>
                  <td class="px-6 py-4 text-center font-bold text-blue-600">20%</td>
                  <td class="px-6 py-4 text-center"><span class="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">Calificado</span></td>
                </tr>
                <tr class="bg-slate-50">
                  <td class="px-6 py-4 font-bold text-slate-900" colspan="2">TOTAL CORTE I</td>
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
      id: 'py6-end',
      title: 'Retroalimentación',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">Fin del Primer Corte</h2>
          <p class="text-gray-600 mb-8">
            Recuerden revisar sus correcciones. En el próximo corte avanzaremos con Estructuras de Datos (Listas, Diccionarios) y Funciones.
          </p>
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-green-600 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "Hay dos tipos de lenguajes: aquellos de los que la gente se queja y aquellos que nadie usa."
            </p>
            <footer class="flex items-center justify-center gap-2">
              <div class="h-px w-8 bg-slate-300"></div>
              <cite class="not-italic font-bold text-slate-900">Bjarne Stroustrup</cite>
            </footer>
          </blockquote>
        </div>
      `
    }
  ]
};
