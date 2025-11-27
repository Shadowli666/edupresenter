
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

          <div class="flex justify-center my-8 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <div class="mermaid">
              graph LR
                N1[NULL] <--> A(10)
                A <--> B(20)
                B <--> C(30)
                C <--> N2[NULL]
                
                style A fill:#eff6ff,stroke:#2563eb
                style B fill:#eff6ff,stroke:#2563eb
                style C fill:#eff6ff,stroke:#2563eb
                style N1 fill:#f1f5f9,stroke:#64748b,stroke-dasharray: 5 5
                style N2 fill:#f1f5f9,stroke:#64748b,stroke-dasharray: 5 5
            </div>
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

          <div class="flex justify-center my-8 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
             <div class="mermaid">
               graph LR
                 A((A)) --> B((B))
                 B --> C((C))
                 C --> A
                 
                 style A fill:#dbeafe,stroke:#2563eb,stroke-width:2px
                 style B fill:#dbeafe,stroke:#2563eb,stroke-width:2px
                 style C fill:#dbeafe,stroke:#2563eb,stroke-width:2px
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
