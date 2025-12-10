
import { Module } from '../types';

export const PNN_MODULE_11: Module = {
  id: 'pnn-mod-11',
  title: '11. Árboles Balanceados (AVL)',
  description: 'Árboles AVL, necesidad del balanceo, factor de equilibrio, rotaciones y ejercicios guiados.',
  evaluation: '10% - Quiz + Taller Corto',
  slides: [
    {
      id: 'pnn11-1',
      title: 'Necesidad del Balanceo',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            En un Árbol Binario de Búsqueda (BST) normal, si insertamos datos ordenados (1, 2, 3, 4...), el árbol se degenera en una lista enlazada, perdiendo su eficiencia.
          </p>
          
          <div class="flex justify-around items-center bg-slate-50 p-4 rounded border">
             <div class="text-center">
               <p class="text-xs font-bold mb-2">Árbol Degenerado</p>
               <div class="mermaid">
                 graph TD
                   1((1)) --- 2((2))
                   2 --- 3((3))
                   3 --- 4((4))
               </div>
               <p class="text-xs text-red-500 mt-1">Búsqueda: O(n)</p>
             </div>
             <div class="text-center">
               <p class="text-xs font-bold mb-2">Árbol Balanceado</p>
               <div class="mermaid">
                 graph TD
                   2((2)) --- 1((1))
                   2 --- 3((3))
                   3 --- 4((4))
               </div>
               <p class="text-xs text-green-500 mt-1">Búsqueda: O(log n)</p>
             </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn11-2',
      title: 'Árboles AVL',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Un <strong>Árbol AVL</strong> (Adelson-Velsky y Landis) es un BST que se autobalancea.
          </p>

          <div class="bg-white p-6 border rounded-xl shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">Factor de Equilibrio (FE)</h4>
            <p class="text-sm text-slate-600 mb-4">
              Para cada nodo, la diferencia de altura entre su subárbol izquierdo y derecho debe ser <strong>-1, 0 o 1</strong>.
            </p>
            <div class="bg-slate-100 p-3 rounded text-center font-mono font-bold text-slate-800 mb-4">
              FE = Altura(Izq) - Altura(Der)
            </div>
            
            <h4 class="font-bold text-slate-800 mb-2">Rotaciones</h4>
            <p class="text-sm text-slate-600">
              Si un nodo se desbalancea (|FE| > 1), se aplican rotaciones para restaurar el equilibrio:
            </p>
            <ul class="grid grid-cols-2 gap-2 mt-2 text-xs text-blue-700 font-medium">
              <li class="bg-blue-50 p-2 rounded">Rotación Simple Derecha (RSD)</li>
              <li class="bg-blue-50 p-2 rounded">Rotación Simple Izquierda (RSI)</li>
              <li class="bg-blue-50 p-2 rounded">Rotación Doble Derecha (RDD)</li>
              <li class="bg-blue-50 p-2 rounded">Rotación Doble Izquierda (RDI)</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'pnn11-3',
      title: 'Ejemplo de Inserciones en un AVL',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Consideremos la secuencia de inserciones: <strong>10, 20, 30, 25, 28, 27, 5</strong>. Analicemos en qué momento el árbol se desbalancea y qué rotaciones se aplican.
          </p>

          <div class="grid md:grid-cols-2 gap-6 items-start">
            <div class="bg-white p-4 rounded-xl border text-xs font-mono">
<pre>
Insertar 10  -> raíz = 10
Insertar 20  -> 10 (der) 20   (FE(10) = -1)
Insertar 30  -> desbalance en 10 (FE = -2) -> RSI (Rotación Simple Izquierda)

Resultado parcial:
   20
  /  \
10   30

Insertar 25, 28, 27, 5 -> se producen casos de rotación doble.
</pre>
              <p class="mt-2 text-[11px] text-slate-500">
                En clase, se puede completar árbol por árbol en la pizarra, calculando alturas y factores de equilibrio.
              </p>
            </div>

            <div class="bg-slate-50 p-4 rounded-xl border">
              <h4 class="font-bold text-slate-800 mb-2 text-sm">Tabla de Alturas y FE (esquema)</h4>
              <table class="min-w-full text-xs text-left text-slate-700">
                <thead class="bg-slate-100 font-bold">
                  <tr>
                    <th class="px-2 py-1">Nodo</th>
                    <th class="px-2 py-1">Alt. Izq</th>
                    <th class="px-2 py-1">Alt. Der</th>
                    <th class="px-2 py-1">FE</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200">
                  <tr><td class="px-2 py-1">10</td><td class="px-2 py-1 text-center">0</td><td class="px-2 py-1 text-center">1</td><td class="px-2 py-1 text-center">-1</td></tr>
                  <tr><td class="px-2 py-1">20</td><td class="px-2 py-1 text-center">1</td><td class="px-2 py-1 text-center">1</td><td class="px-2 py-1 text-center">0</td></tr>
                  <tr><td class="px-2 py-1">30</td><td class="px-2 py-1 text-center">0</td><td class="px-2 py-1 text-center">0</td><td class="px-2 py-1 text-center">0</td></tr>
                  <!-- El resto se puede completar como actividad -->
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn11-4',
      title: 'Actividad Práctica: Detecta el Desbalance',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Dada una secuencia de inserciones propuesta por el docente, los estudiantes deben:
          </p>
          <ol class="list-decimal list-inside text-sm text-slate-700 space-y-2 bg-slate-50 p-4 rounded-lg border">
            <li>Dibujar el árbol BST sin balanceo.</li>
            <li>Calcular las alturas y FE de cada nodo.</li>
            <li>Identificar en qué nodos se viola la condición |FE| ≤ 1.</li>
            <li>Determinar el tipo de rotación (RSD, RSI, RDD, RDI) a aplicar.</li>
          </ol>
          
        </div>
      `
    },
    {
      id: 'pnn11-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="text-6xl font-bold text-indigo-600 mb-6 select-none">?</div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Árboles AVL</h3>
          <p class="text-center text-gray-600 max-w-md">
            ¿Dudas sobre cómo calcular factores de equilibrio, cuándo se aplican rotaciones simples o dobles, o cómo implementar un AVL?
          </p>
        </div>
      `
    },
    {
      id: 'pnn11-end-thanks',
      title: 'Gracias por su atención',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">Fin de la Clase</h2>
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-indigo-500 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "Un buen árbol de búsqueda es como una biblioteca bien ordenada: todo está donde debe estar." 
            </p>
            <footer class="flex items-center justify-center gap-2">
              <div class="h-px w-8 bg-slate-300"></div>
              <cite class="not-italic font-bold text-slate-900">Programación No Numérica II</cite>
            </footer>
          </blockquote>
        </div>
      `
    }
  ]
};
