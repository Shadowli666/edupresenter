
import { Module } from '../types';

export const PNN_MODULE_2: Module = {
  id: 'pnn-mod-2',
  title: '2. Teoremas y Heaps',
  description: 'Propiedades matemáticas y estructura de Montículo (Heap).',
  evaluation: '0% - Ejercicios',
  slides: [
    {
      id: 'pnn2-1',
      title: 'Teoremas de Árboles Binarios',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">Las matemáticas nos permiten predecir el comportamiento y capacidad de los árboles.</p>

          <div class="grid gap-4">
            <div class="bg-white p-5 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 class="font-bold text-blue-800 mb-1">Teorema I: Cantidad de Nodos</h4>
              <p class="text-sm text-slate-600 mb-2">El número máximo de nodos en un árbol binario de altura <em>h</em> es:</p>
              <div class="bg-slate-100 p-2 rounded text-center font-mono font-bold text-slate-800">
                N = 2<sup>h+1</sup> - 1
              </div>
            </div>

            <div class="bg-white p-5 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 class="font-bold text-blue-800 mb-1">Teorema II: Relación Nodos/Aristas</h4>
              <p class="text-sm text-slate-600 mb-2">En todo árbol, el número de aristas (E) es siempre uno menos que el número de nodos (N).</p>
              <div class="bg-slate-100 p-2 rounded text-center font-mono font-bold text-slate-800">
                E = N - 1
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn2-2',
      title: 'El HEAP (Montículo)',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">Un <strong>Heap</strong> es un Árbol Binario Completo que cumple la propiedad de orden del montículo.</p>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-red-50 p-4 rounded-lg border border-red-100">
              <strong class="text-red-900 block mb-2">Max-Heap</strong>
              <p class="text-sm text-red-800 mb-2">El valor de cada nodo es <strong>mayor o igual</strong> que el de sus hijos.</p>
              <div class="flex flex-col items-center mt-4">
                 <div class="w-8 h-8 rounded-full bg-red-200 text-red-800 flex items-center justify-center font-bold text-sm border border-red-300">100</div>
                 <div class="flex gap-4 mt-1">
                    <div class="w-8 h-8 rounded-full bg-white text-red-800 flex items-center justify-center font-bold text-xs border border-red-200">80</div>
                    <div class="w-8 h-8 rounded-full bg-white text-red-800 flex items-center justify-center font-bold text-xs border border-red-200">90</div>
                 </div>
              </div>
            </div>

            <div class="bg-green-50 p-4 rounded-lg border border-green-100">
              <strong class="text-green-900 block mb-2">Min-Heap</strong>
              <p class="text-sm text-green-800 mb-2">El valor de cada nodo es <strong>menor o igual</strong> que el de sus hijos.</p>
              <div class="flex flex-col items-center mt-4">
                 <div class="w-8 h-8 rounded-full bg-green-200 text-green-800 flex items-center justify-center font-bold text-sm border border-green-300">5</div>
                 <div class="flex gap-4 mt-1">
                    <div class="w-8 h-8 rounded-full bg-white text-green-800 flex items-center justify-center font-bold text-xs border border-green-200">20</div>
                    <div class="w-8 h-8 rounded-full bg-white text-green-800 flex items-center justify-center font-bold text-xs border border-green-200">15</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn2-3',
      title: 'Algoritmos: Insertar y Heapify',
      contentHtml: `
        <div class="space-y-8">
          <div class="bg-white border p-6 rounded-lg shadow-sm">
             <h3 class="font-bold text-slate-800 mb-4 border-b pb-2">1. Inserción</h3>
             <ol class="list-decimal list-inside space-y-2 text-sm text-gray-700">
               <li>Se agrega el nuevo nodo en la <strong>primera posición libre</strong> (lo más a la izquierda posible del último nivel) para mantener la forma "Completa".</li>
               <li>Se ejecuta <strong>Up-Heap (Flotar)</strong>: Comparar con el padre e intercambiar si viola la propiedad del Heap, repitiendo hacia arriba.</li>
             </ol>
          </div>

          <div class="bg-white border p-6 rounded-lg shadow-sm">
             <h3 class="font-bold text-slate-800 mb-4 border-b pb-2">2. Heapify (Construcción)</h3>
             <p class="text-sm text-gray-700 mb-2">
               Algoritmo para convertir un arreglo desordenado en un Heap.
             </p>
             <div class="bg-slate-900 text-green-400 font-mono text-xs p-3 rounded">
               Para i desde (N/2) hasta 1 hacer:<br>
               &nbsp;&nbsp;Down-Heap(i); // Hundir el nodo si es menor que sus hijos
             </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn2-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="text-6xl font-bold text-red-600 mb-6 select-none">?</div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Montículos Binarios</h3>
          <p class="text-center text-gray-600 max-w-md">
            El Heap es la base de las Colas de Prioridad. ¿Quedó claro el proceso de "Flotar" y "Hundir"?
          </p>
        </div>
      `
    },
    {
      id: 'pnn2-end-thanks',
      title: 'Gracias por su atención',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">Fin de la Clase</h2>
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-red-500 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "El orden es el placer de la razón; pero el desorden es la delicia de la imaginación."
            </p>
            <footer class="flex items-center justify-center gap-2">
              <div class="h-px w-8 bg-slate-300"></div>
              <cite class="not-italic font-bold text-slate-900">Paul Claudel</cite>
            </footer>
          </blockquote>
        </div>
      `
    }
  ]
};
