import { Module } from '../../types';

export const PYTHON_MODULE_6: Module = {
  id: 'py-mod-6',
  title: '6. Cierre del Corte I',
  description: 'Entrega de notas y retroalimentación del primer periodo.',
  evaluation: 'Cierre de Corte',
  slides: [
    {
      id: 'py6-1-grades',
      title: 'Resultados del Corte I',
      notes: 'Tabla de calificaciones.',
      contentHtml: `
        <div class="flex flex-col h-full space-y-8">
          <div class="bg-gradient-to-r from-green-500 to-emerald-600 p-6 rounded-xl shadow-lg text-white">
            <h3 class="text-2xl font-bold mb-2">Resumen de Evaluaciones</h3>
            <p class="opacity-90">Consolidado de actividades realizadas en el módulo de Python Básico.</p>
          </div>

          <div class="flex-1 overflow-hidden bg-white rounded-xl shadow border border-slate-200">
            <table class="w-full text-sm text-left">
              <thead class="bg-slate-100 text-slate-700 uppercase font-bold text-xs tracking-wider">
                <tr>
                  <th class="px-6 py-4">Actividad</th>
                  <th class="px-6 py-4">Tema Evaluado</th>
                  <th class="px-6 py-4 text-center">Ponderación</th>
                  <th class="px-6 py-4 text-center">Estado</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr class="hover:bg-slate-50 transition-colors">
                  <td class="px-6 py-4 font-medium text-slate-900">Prueba Diagnóstica</td>
                  <td class="px-6 py-4 text-slate-600">Lógica Computacional</td>
                  <td class="px-6 py-4 text-center text-slate-400">0%</td>
                  <td class="px-6 py-4 text-center">
                    <span class="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-bold border border-green-200">Completado</span>
                  </td>
                </tr>
                <tr class="hover:bg-slate-50 transition-colors">
                  <td class="px-6 py-4 font-medium text-slate-900">Taller Práctico 1</td>
                  <td class="px-6 py-4 text-slate-600">Variables y Operadores</td>
                  <td class="px-6 py-4 text-center font-bold text-blue-600">10%</td>
                  <td class="px-6 py-4 text-center">
                    <span class="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-bold border border-blue-200">Calificado</span>
                  </td>
                </tr>
                <tr class="hover:bg-slate-50 transition-colors">
                  <td class="px-6 py-4 font-medium text-slate-900">Parcial Escrito</td>
                  <td class="px-6 py-4 text-slate-600">Condicionales y Bucles</td>
                  <td class="px-6 py-4 text-center font-bold text-blue-600">20%</td>
                  <td class="px-6 py-4 text-center">
                    <span class="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-bold border border-blue-200">Calificado</span>
                  </td>
                </tr>
                <tr class="bg-slate-50 font-bold text-slate-900 border-t-2 border-slate-200">
                  <td class="px-6 py-4" colspan="2">TOTAL ACUMULADO</td>
                  <td class="px-6 py-4 text-center text-lg text-green-600">30%</td>
                  <td class="px-6 py-4"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 'py6-2-feedback',
      title: 'Próximos Pasos',
      notes: 'Cierre y motivación.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center space-y-12">
          
          <div class="max-w-2xl">
            <h2 class="text-4xl font-bold text-slate-900 mb-6">Fin del Primer Corte</h2>
            <p class="text-lg text-slate-600 leading-relaxed">
              Hemos cubierto los fundamentos: hablar el idioma de la máquina (Variables) y controlar el flujo de ejecución (If/While).
              <br><br>
              Lo que viene es <strong>Estructurar Datos</strong> y <strong>Modularizar Código</strong>.
            </p>
          </div>

          <div class="grid grid-cols-3 gap-6 w-full max-w-3xl">
            <div class="bg-white p-4 rounded-xl shadow-sm border border-slate-200 opacity-50">
              <div class="text-xs font-bold text-slate-400 uppercase mb-1">Pasado</div>
              <div class="font-mono text-slate-600">Variables</div>
            </div>
            <div class="bg-blue-50 p-4 rounded-xl shadow-md border border-blue-200 transform scale-110 z-10">
              <div class="text-xs font-bold text-blue-600 uppercase mb-1">Presente</div>
              <div class="font-bold text-blue-900">Cierre Corte I</div>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
              <div class="text-xs font-bold text-green-600 uppercase mb-1">Futuro</div>
              <div class="font-mono text-slate-800">Listas y Funciones</div>
            </div>
          </div>

          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-slate-900 shadow-sm max-w-2xl italic text-slate-700">
            "Primero resuelve el problema. Entonces, escribe el código."
            <footer class="mt-2 text-sm font-bold text-slate-900 not-italic">— John Johnson</footer>
          </blockquote>
        </div>
      `
    }
  ]
};
