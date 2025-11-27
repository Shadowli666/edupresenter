
import { Module } from '../types';

export const PNN_MODULE_3: Module = {
  id: 'pnn-mod-3',
  title: '3. Divide y Conquista',
  description: 'Estrategia algorítmica, recursividad y Búsqueda Binaria.',
  evaluation: '0% - Práctica',
  slides: [
    {
      id: 'pnn3-1',
      title: 'Estrategia: Divide y Vencerás',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Es un paradigma de diseño de algoritmos que consiste en descomponer un problema difícil en subproblemas más sencillos.
          </p>

          <div class="flex flex-col md:flex-row gap-4 justify-center text-center my-6">
            <div class="bg-blue-50 p-4 rounded-lg border border-blue-200 flex-1">
              <div class="text-2xl mb-2">🔪</div>
              <h4 class="font-bold text-blue-900">1. Dividir</h4>
              <p class="text-xs text-blue-800">Partir el problema original en subproblemas más pequeños.</p>
            </div>
            <div class="bg-purple-50 p-4 rounded-lg border border-purple-200 flex-1">
              <div class="text-2xl mb-2">⚔️</div>
              <h4 class="font-bold text-purple-900">2. Conquistar</h4>
              <p class="text-xs text-purple-800">Resolver los subproblemas (generalmente de forma recursiva).</p>
            </div>
            <div class="bg-green-50 p-4 rounded-lg border border-green-200 flex-1">
              <div class="text-2xl mb-2">🔗</div>
              <h4 class="font-bold text-green-900">3. Combinar</h4>
              <p class="text-xs text-green-800">Juntar las soluciones parciales para formar la solución global.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn3-2',
      title: 'Recursividad',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Capacidad de una función de llamarse a sí misma. Es la herramienta clave para implementar Divide y Vencerás.
          </p>

          <div class="bg-slate-900 text-white p-6 rounded-lg font-mono text-sm shadow-lg">
            <p><span class="text-purple-400">funcion</span> Factorial(n) {</p>
            <p class="pl-4"><span class="text-gray-500">// Caso Base (Frenado)</span></p>
            <p class="pl-4"><span class="text-blue-400">si</span> (n == 0) <span class="text-blue-400">retornar</span> 1;</p>
            <br>
            <p class="pl-4"><span class="text-gray-500">// Paso Recursivo</span></p>
            <p class="pl-4"><span class="text-blue-400">retornar</span> n * Factorial(n - 1);</p>
            <p>}</p>
          </div>

          <div class="bg-yellow-50 p-4 border-l-4 border-yellow-400 text-xs text-yellow-900">
            <strong>Importante:</strong> Todo algoritmo recursivo DEBE tener un <strong>Caso Base</strong>. Sin él, la recursión sería infinita y causaría un desbordamiento de pila (Stack Overflow).
          </div>
        </div>
      `
    },
    {
      id: 'pnn3-3',
      title: 'Aplicación: Búsqueda Binaria',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Algoritmo eficiente O(log n) para encontrar un elemento en una lista <strong>ordenada</strong>.
          </p>

          <div class="border rounded-lg p-4 bg-white shadow-sm">
             <h4 class="font-bold text-slate-800 mb-4">Lógica del Algoritmo</h4>
             <div class="flex flex-col gap-2 text-sm text-slate-700">
               <p>1. Buscar el elemento del <strong>medio</strong> del arreglo.</p>
               <p>2. Si el valor medio es el buscado -> ¡Encontrado!</p>
               <p>3. Si el valor buscado es <strong>menor</strong> -> Descartar la mitad derecha y buscar solo en la izquierda.</p>
               <p>4. Si el valor buscado es <strong>mayor</strong> -> Descartar la mitad izquierda y buscar solo en la derecha.</p>
             </div>
          </div>

          <div class="flex justify-center gap-1">
             <div class="w-8 h-8 bg-gray-200 flex items-center justify-center text-xs text-gray-400">1</div>
             <div class="w-8 h-8 bg-gray-200 flex items-center justify-center text-xs text-gray-400">3</div>
             <div class="w-8 h-8 bg-gray-200 flex items-center justify-center text-xs text-gray-400">5</div>
             <div class="w-8 h-8 bg-blue-600 text-white font-bold flex items-center justify-center text-xs scale-110 shadow-lg">8</div>
             <div class="w-8 h-8 bg-gray-200 flex items-center justify-center text-xs text-gray-400">12</div>
             <div class="w-8 h-8 bg-gray-200 flex items-center justify-center text-xs text-gray-400">15</div>
             <div class="w-8 h-8 bg-gray-200 flex items-center justify-center text-xs text-gray-400">20</div>
          </div>
          <p class="text-center text-xs text-slate-500">Buscando el 8: Se compara con el medio, si coincide, termina.</p>

          <div class="bg-white rounded-xl border p-4">
            <h4 class="font-semibold text-slate-800 mb-2">Traza guiada</h4>
            <ol class="list-decimal list-inside text-xs text-slate-600 space-y-1">
              <li>low=0, high=6 → mid=3 → a[3]=8 → encontrado</li>
              <li>Variante: buscar 7 → low=0, high=6 → mid=3 (8) → high=2 → mid=1 (3) → low=2 → mid=2 (5) → low=3 → termina sin encontrar</li>
            </ol>
          </div>

          <div class="bg-slate-50 rounded-xl border p-4">
            <h4 class="font-semibold text-slate-800 mb-2">Preguntas rápidas</h4>
            <ul class="list-disc list-inside text-sm text-slate-700 space-y-1">
              <li>¿Qué ocurre si el arreglo no está ordenado?</li>
              <li>¿Cómo cambiaría si buscamos el primer elemento ≥ x?</li>
              <li>¿Qué pasa si hay duplicados?</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'pnn3-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="text-6xl font-bold text-blue-600 mb-6 select-none">?</div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Divide y Vencerás</h3>
          <p class="text-center text-gray-600 max-w-md">
            Esta estrategia reduce drásticamente la complejidad de los algoritmos. ¿Dudas sobre la Búsqueda Binaria?
          </p>
        </div>
      `
    },
    {
      id: 'pnn3-end-thanks',
      title: 'Gracias por su atención',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">Fin de la Clase</h2>
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-blue-500 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "Los grandes problemas son solo un montón de pequeños problemas pegados."
            </p>
            <footer class="flex items-center justify-center gap-2">
              <div class="h-px w-8 bg-slate-300"></div>
              <cite class="not-italic font-bold text-slate-900">Filosofía D&C</cite>
            </footer>
          </blockquote>
        </div>
      `
    }
  ]
};
