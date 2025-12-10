
import { Module } from '../types';

export const MODULE_12: Module = {
  id: 'mod-12',
  title: '12. Entrega de Notas (Corte II)',
  description: 'Cierre del segundo corte, discusión y entrega en DACE.',
  evaluation: 'Cierre de Corte',
  slides: [
    {
      id: 's12-1',
      title: 'Resumen de Evaluaciones - Corte II',
      contentHtml: `
        <div class="space-y-8">
          <div class="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
            <h3 class="text-xl font-bold text-indigo-900 mb-2">Evaluación Continua</h3>
            <p class="text-indigo-800">Detalle de las actividades sumativas correspondientes al segundo corte (30% + acumulado).</p>
          </div>

          <div class="flex justify-center bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
             <div class="mermaid">
               graph LR
                 C1[Corte I: 30%] -.-> Total{Total 60%}
                 
                 subgraph Corte II
                   Act1[Ejercicios] -->|10%| Act2[Parcial]
                   Act2 -->|20%| Suma2[Total 30%]
                 end
                 
                 Suma2 --> Total
                 Total --> Final([Nota Acumulada])
                 
                 style C1 fill:#f1f5f9,stroke:#94a3b8,stroke-dasharray: 5 5
                 style Act1 fill:#dcfce7,stroke:#16a34a
                 style Act2 fill:#dbeafe,stroke:#2563eb
                 style Total fill:#fef9c3,stroke:#ca8a04,stroke-width:2px
             </div>
          </div>

          <div class="overflow-hidden border rounded-xl shadow-sm">
            <table class="min-w-full text-sm text-left text-slate-600">
              <thead class="bg-slate-100 text-slate-700 uppercase font-bold">
                <tr>
                  <th class="px-6 py-4">Actividad</th>
                  <th class="px-6 py-4">Contenido</th>
                  <th class="px-6 py-4 text-center">Ponderación</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr>
                  <td class="px-6 py-4 font-medium text-slate-900">Ejercicios Prácticos</td>
                  <td class="px-6 py-4">Estructuras Secuenciales y Condicionales</td>
                  <td class="px-6 py-4 text-center font-bold text-blue-600">10%</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 font-medium text-slate-900">Prueba Parcial</td>
                  <td class="px-6 py-4">Ciclos (Mientras, Para) y Lógica</td>
                  <td class="px-6 py-4 text-center font-bold text-blue-600">20%</td>
                </tr>
                <tr class="bg-slate-50">
                  <td class="px-6 py-4 font-bold text-slate-900" colspan="2">TOTAL CORTE II</td>
                  <td class="px-6 py-4 text-center font-bold text-slate-900 text-lg">30%</td>
                </tr>
                <tr class="bg-slate-900 text-white">
                  <td class="px-6 py-4 font-bold" colspan="2">ACUMULADO GENERAL (C1 + C2)</td>
                  <td class="px-6 py-4 text-center font-bold text-lg">60%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 's12-end-questions',
      title: 'Revisión Final',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 mb-6">
             <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Firma y DACE</h3>
          <p class="text-center text-gray-600 max-w-md">
            Se procederá a la carga de notas en el sistema DACE. Verifique que su nota definitiva sea correcta antes de retirarse.
          </p>
        </div>
      `
    },
    {
      id: 's12-end-thanks',
      title: 'Fin del Corte II',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">¡Buen Trabajo!</h2>
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-indigo-600 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "El único modo de hacer un gran trabajo es amar lo que haces."
            </p>
            <footer class="flex items-center justify-center gap-2">
              <div class="h-px w-8 bg-slate-300"></div>
              <cite class="not-italic font-bold text-slate-900">Steve Jobs</cite>
            </footer>
          </blockquote>
        </div>
      `
    }
  ]
};
