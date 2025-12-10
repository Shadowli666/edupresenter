
import { Module } from '../../types';

export const MODULE_6: Module = {
  id: 'mod-6',
  title: '6. Entrega de Notas',
  description: 'Socialización de calificaciones y cierre del Primer Corte.',
  evaluation: 'Cierre de Corte',
  slides: [
    {
      id: 's6-1',
      title: 'Desglose de Evaluaciones - Corte I',
      contentHtml: `
        <div class="space-y-8">
          <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h3 class="text-xl font-bold text-blue-900 mb-2">Resumen del Corte</h3>
            <p class="text-blue-800">A continuación se detalla la ponderación de las evaluaciones realizadas durante las primeras 5 semanas.</p>
          </div>

          <div class="flex justify-center bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
             <div class="mermaid">
               graph LR
                 Start([Inicio]) --> Mod4[Guía Ejercicios]
                 Mod4 -->|10%| Mod5[Prueba Escrita]
                 Mod5 -->|20%| Suma{Total 30%}
                 Suma --> Fin([Cierre Corte])
                 
                 style Mod4 fill:#dcfce7,stroke:#16a34a
                 style Mod5 fill:#dbeafe,stroke:#2563eb
                 style Suma fill:#fef9c3,stroke:#ca8a04,stroke-width:2px
             </div>
          </div>

          <div class="overflow-hidden border rounded-xl shadow-sm">
            <table class="min-w-full text-sm text-left text-slate-600">
              <thead class="bg-slate-100 text-slate-700 uppercase font-bold">
                <tr>
                  <th class="px-6 py-4">Actividad</th>
                  <th class="px-6 py-4">Temática</th>
                  <th class="px-6 py-4 text-center">Ponderación</th>
                  <th class="px-6 py-4 text-center">Estado</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr>
                  <td class="px-6 py-4 font-medium text-slate-900">Prueba Diagnóstica</td>
                  <td class="px-6 py-4">Conceptos Básicos</td>
                  <td class="px-6 py-4 text-center text-gray-400">0%</td>
                  <td class="px-6 py-4 text-center"><span class="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">Finalizado</span></td>
                </tr>
                <tr>
                  <td class="px-6 py-4 font-medium text-slate-900">Guía de Ejercicios</td>
                  <td class="px-6 py-4">Expresiones y Algoritmos</td>
                  <td class="px-6 py-4 text-center font-bold text-blue-600">10%</td>
                  <td class="px-6 py-4 text-center"><span class="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">Calificado</span></td>
                </tr>
                <tr>
                  <td class="px-6 py-4 font-medium text-slate-900">Prueba Escrita</td>
                  <td class="px-6 py-4">Resolución de Problemas</td>
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

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
              <h4 class="font-bold text-yellow-800 mb-2">Reclamos y Correcciones</h4>
              <p class="text-sm text-yellow-700">
                Si encuentra alguna inconsistencia en su nota, por favor acérquese al finalizar la presentación.
              </p>
            </div>
            <div class="bg-green-50 p-6 rounded-lg border border-green-100">
              <h4 class="font-bold text-green-800 mb-2">Próximos Pasos</h4>
              <p class="text-sm text-green-700">
                Inicio del <strong>Corte II</strong>: Estructuras condicionales avanzadas y bucles.
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 's6-end-questions',
      title: 'Revisión Individual',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 mb-6">
             <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Espacio para Revisión</h3>
          <p class="text-center text-gray-600 max-w-md">
            Se llamará a cada estudiante por orden de lista para firmar el acta de notas. Por favor, mantengan el orden.
          </p>
        </div>
      `
    },
    {
      id: 's6-end-thanks',
      title: 'Fin del Primer Corte',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">¡Felicidades por completar el Corte I!</h2>
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-blue-600 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "El éxito es la suma de pequeños esfuerzos repetidos día tras día."
            </p>
            <footer class="flex items-center justify-center gap-2">
              <div class="h-px w-8 bg-slate-300"></div>
              <cite class="not-italic font-bold text-slate-900">Robert Collier</cite>
            </footer>
          </blockquote>
        </div>
      `
    }
  ]
};
