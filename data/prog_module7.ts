


import { Module } from '../types';

export const PROG_MODULE_7: Module = {
  id: 'prog-mod-7',
  title: '7. Listas Enlazadas Avanzadas',
  description: 'Listas Doblemente Enlazadas y Listas Circulares.',
  evaluation: '0% - Ejercicio Práctico',
  slides: [
    {
      id: 'p7-1',
      title: 'Listas Doblemente Enlazadas',
      contentHtml: `
        <div class="space-y-8">
          <p class="text-gray-700">En una lista simple, solo podemos avanzar. En una <strong>Lista Doblemente Enlazada</strong>, cada nodo tiene dos punteros: uno al siguiente nodo (Next) y otro al anterior (Prev).</p>

          <div class="flex flex-col md:flex-row items-center justify-center gap-4 my-8 overflow-x-auto p-4 bg-white rounded-xl shadow-sm border border-slate-100">
            
            <div class="text-slate-400 font-mono text-xs">NULL</div>
            <div class="text-slate-300">←</div>

            <!-- Nodo 1 -->
            <div class="flex border-2 border-indigo-600 rounded bg-white shadow-md relative group hover:-translate-y-1 transition-transform">
               <div class="p-3 font-mono text-xs bg-indigo-50 flex items-center border-r border-indigo-200 text-indigo-800">← Prev</div>
               <div class="p-3 font-bold text-slate-800 px-6">10</div>
               <div class="p-3 font-mono text-xs bg-indigo-50 flex items-center border-l border-indigo-200 text-indigo-800">Next →</div>
            </div>
            
            <div class="text-indigo-300 text-xl">↔</div>

            <!-- Nodo 2 -->
            <div class="flex border-2 border-indigo-600 rounded bg-white shadow-md relative group hover:-translate-y-1 transition-transform">
               <div class="p-3 font-mono text-xs bg-indigo-50 flex items-center border-r border-indigo-200 text-indigo-800">← Prev</div>
               <div class="p-3 font-bold text-slate-800 px-6">20</div>
               <div class="p-3 font-mono text-xs bg-indigo-50 flex items-center border-l border-indigo-200 text-indigo-800">Next →</div>
            </div>

            <div class="text-slate-300">→</div>
            <div class="text-slate-400 font-mono text-xs">NULL</div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
             <div class="bg-green-50 p-4 rounded border border-green-200">
               <strong class="text-green-800 block mb-2">Ventajas</strong>
               <ul class="list-disc list-inside text-green-700 space-y-1">
                 <li>Recorrido bidireccional (adelante y atrás).</li>
                 <li>Eliminar un nodo es más fácil si ya tienes el puntero al nodo (no necesitas buscar el anterior manualmente).</li>
               </ul>
             </div>
             <div class="bg-orange-50 p-4 rounded border border-orange-200">
               <strong class="text-orange-800 block mb-2">Desventajas</strong>
               <ul class="list-disc list-inside text-orange-700 space-y-1">
                 <li>Mayor consumo de memoria (un puntero extra por nodo).</li>
                 <li>Lógica de inserción/eliminación más compleja (hay que actualizar 4 enlaces).</li>
               </ul>
             </div>
          </div>
        </div>
      `
    },
    {
      id: 'p7-2',
      title: 'Listas Circulares',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">En una <strong>Lista Circular</strong>, el último nodo no apunta a NULL, sino que regresa al primer nodo (Cabeza), formando un ciclo infinito.</p>

          <div class="relative h-48 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-center overflow-hidden">
             <!-- Visualización abstracta circular -->
             <div class="absolute w-32 h-32 border-4 border-dashed border-blue-200 rounded-full animate-spin-slow"></div>
             
             <div class="flex gap-4 z-10">
                <div class="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-lg">A</div>
                <div class="text-slate-400 self-center">→</div>
                <div class="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-lg">B</div>
                <div class="text-slate-400 self-center">→</div>
                <div class="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-lg">C</div>
             </div>
             
             <div class="absolute bottom-4 text-xs text-slate-500 font-mono bg-slate-50 px-2 py-1 rounded border">
                C->next = A
             </div>
          </div>

          <h4 class="font-bold text-slate-900 mt-4">Aplicaciones Reales</h4>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-start gap-2">
              <span class="bg-blue-100 text-blue-800 p-1 rounded text-xs mt-0.5">OS</span>
              <span>Gestión de procesos en Sistemas Operativos (Round Robin): Asignar tiempo de CPU a cada programa en un ciclo.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="bg-purple-100 text-purple-800 p-1 rounded text-xs mt-0.5">Media</span>
              <span>Reproductores de música en modo "Repetir lista".</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="bg-green-100 text-green-800 p-1 rounded text-xs mt-0.5">Juegos</span>
              <span>Juegos de mesa por turnos (Jugador 1 → 2 → 3 → 1).</span>
            </li>
          </ul>
        </div>
      `
    },
    {
      id: 'p7-3',
      title: 'Práctica: Navegación',
      contentHtml: `
        <div class="space-y-8">
          <p class="text-gray-600">Ponga a prueba su lógica de punteros en listas avanzadas.</p>

          <div class="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h4 class="font-bold text-slate-800 mb-2">Desafío Mental</h4>
            <p class="text-sm text-slate-600 mb-4">
              Estás en el nodo <strong>B</strong> de una Lista Doblemente Enlazada (A ↔ B ↔ C).<br>
              ¿Cómo accedes al valor de <strong>C</strong> usando punteros desde B?
            </p>
            <details class="group bg-white border rounded p-3">
              <summary class="text-xs font-bold text-blue-600 cursor-pointer select-none">Ver Respuesta</summary>
              <code class="block mt-2 font-mono text-sm bg-slate-900 text-green-400 p-2 rounded">
                B->next->valor
              </code>
            </details>

            <p class="text-sm text-slate-600 mt-6 mb-4">
              ¿Y cómo accedes al valor de <strong>A</strong> desde B?
            </p>
            <details class="group bg-white border rounded p-3">
              <summary class="text-xs font-bold text-blue-600 cursor-pointer select-none">Ver Respuesta</summary>
              <code class="block mt-2 font-mono text-sm bg-slate-900 text-green-400 p-2 rounded">
                B->prev->valor
              </code>
            </details>
          </div>
        </div>
      `
    },
    {
      id: 'p7-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-6 animate-bounce">
             <span class="text-6xl font-bold select-none">?</span>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Complejidad de Enlaces</h3>
          <p class="text-center text-gray-600 max-w-md">
            Manejar 'prev' y 'next' simultáneamente requiere cuidado para no romper la cadena. ¿Dudas?
          </p>
        </div>
      `
    },
    {
      id: 'p7-end-thanks',
      title: 'Gracias por su atención',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">Fin de la Clase</h2>
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-indigo-500 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "Para entender la recursividad, primero debes entender la recursividad."
            </p>
            <footer class="flex items-center justify-center gap-2">
              <div class="h-px w-8 bg-slate-300"></div>
              <cite class="not-italic font-bold text-slate-900">Broma clásica de CS</cite>
            </footer>
          </blockquote>
        </div>
      `
    }
  ]
};
