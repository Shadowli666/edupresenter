
import { Module } from '../types';

export const PNN_MODULE_5: Module = {
  id: 'pnn-mod-5',
  title: '5. Ordenamiento: Quicksort',
  description: 'Algoritmo de ordenamiento rápido y análisis de eficiencia.',
  evaluation: '20% - Prueba Escrita',
  slides: [
    {
      id: 'pnn5-1',
      title: 'Lógica del Quicksort',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            <strong>Quicksort</strong> es uno de los algoritmos más rápidos y utilizados. También usa "Divide y Vencerás", pero a diferencia del Merge Sort, no usa memoria auxiliar extra para mezclar.
          </p>

          <div class="bg-white border rounded-xl p-6 shadow-sm">
            <h4 class="font-bold text-purple-800 mb-4">El Pivote</h4>
            <p class="text-sm text-slate-600 mb-4">
              La clave es elegir un elemento llamado <strong>Pivote</strong>. El objetivo es particionar el arreglo de modo que:
            </p>
            <ul class="list-disc list-inside text-sm text-slate-700 space-y-2 bg-purple-50 p-4 rounded">
              <li>Todos los elementos <strong>menores</strong> que el pivote queden a su izquierda.</li>
              <li>Todos los elementos <strong>mayores</strong> queden a su derecha.</li>
            </ul>
            <p class="text-sm text-slate-500 mt-4">
              Luego, se aplica recursivamente lo mismo a la sublista izquierda y derecha.
            </p>
          </div>
        </div>
      `
    },
    {
      id: 'pnn5-2',
      title: 'Análisis de Eficiencia',
      contentHtml: `
        <div class="space-y-8">
          <p class="text-gray-700">Quicksort suele ser más rápido que Sortmerge en la práctica, pero tiene un "talón de Aquiles".</p>

          <div class="grid md:grid-cols-2 gap-6">
             <div class="bg-green-50 p-6 rounded-lg border border-green-200">
               <h4 class="text-lg font-bold text-green-800 mb-2">Caso Promedio</h4>
               <div class="text-3xl font-bold text-green-600 font-mono mb-2">O(n log n)</div>
               <p class="text-sm text-green-700">
                 Ocurre cuando el pivote divide la lista en partes más o menos iguales. Es extremadamente rápido.
               </p>
             </div>

             <div class="bg-red-50 p-6 rounded-lg border border-red-200">
               <h4 class="text-lg font-bold text-red-800 mb-2">Peor Caso</h4>
               <div class="text-3xl font-bold text-red-600 font-mono mb-2">O(n²)</div>
               <p class="text-sm text-red-700">
                 Ocurre si elegimos mal el pivote (ej. elegir siempre el primero en una lista ya ordenada). Se degrada al nivel de un Bubble Sort.
               </p>
             </div>
          </div>

          <div class="text-center text-xs text-gray-500">
            *Para evitar el peor caso, se suele elegir el pivote al azar o la mediana de tres.
          </div>
        </div>
      `
    },
    {
      id: 'pnn5-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="text-6xl font-bold text-purple-600 mb-6 select-none">?</div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Ordenamiento Rápido</h3>
          <p class="text-center text-gray-600 max-w-md">
            Es el algoritmo por defecto en muchas librerías estándar. ¿Dudas sobre la partición o el pivote?
          </p>
        </div>
      `
    },
    {
      id: 'pnn5-end-thanks',
      title: 'Gracias por su atención',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">Fin de la Clase</h2>
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-purple-500 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "La eficiencia es hacer las cosas bien; la efectividad es hacer las cosas correctas."
            </p>
            <footer class="flex items-center justify-center gap-2">
              <div class="h-px w-8 bg-slate-300"></div>
              <cite class="not-italic font-bold text-slate-900">Peter Drucker</cite>
            </footer>
          </blockquote>
        </div>
      `
    }
  ]
};
