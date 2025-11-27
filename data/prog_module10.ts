
import { Module } from '../types';

export const PROG_MODULE_10: Module = {
  id: 'prog-mod-10',
  title: '10. Colas (Queues)',
  description: 'Concepto FIFO, operaciones y diferencias con pilas.',
  evaluation: '0% - Introducción',
  slides: [
    {
      id: 'p10-1',
      title: 'Concepto de Cola (FIFO)',
      contentHtml: `
        <div class="space-y-8">
          <div class="flex flex-col md:flex-row gap-8 items-center">
            <div class="flex-1">
              <h3 class="text-2xl font-bold text-slate-900 mb-4">FIFO: First In, First Out</h3>
              <p class="text-gray-700 mb-4">
                "El primero en llegar es el primero en ser atendido".
              </p>
              <p class="text-gray-600 text-sm">
                Exactamente igual a una fila en el banco o supermercado. Si llegas primero, te atienden primero. Los nuevos se ponen al final.
              </p>
            </div>
            
            <!-- Visual Queue representation -->
            <div class="flex items-center gap-2 p-4 bg-slate-100 rounded-xl border border-slate-200 overflow-x-auto">
               <div class="text-xs text-gray-400 font-bold uppercase mr-2">Salida<br>(Frente)</div>
               <div class="w-12 h-12 bg-green-500 rounded border border-green-600 text-white flex items-center justify-center font-bold shadow-sm">1</div>
               <div class="w-12 h-12 bg-green-400 rounded border border-green-500 text-white flex items-center justify-center font-bold shadow-sm">2</div>
               <div class="w-12 h-12 bg-green-300 rounded border border-green-400 text-white flex items-center justify-center font-bold shadow-sm">3</div>
               <div class="text-xs text-gray-400 font-bold uppercase ml-2">Entrada<br>(Final)</div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'p10-2',
      title: 'Operaciones Básicas',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-6">
          <!-- Enqueue -->
          <div class="bg-white border-2 border-blue-100 rounded-xl p-6 hover:border-blue-300 transition-colors">
            <h3 class="text-xl font-bold text-blue-700 mb-4 flex items-center">
              <span class="bg-blue-100 p-2 rounded mr-2">➜</span> Enqueue (Encolar)
            </h3>
            <div class="mermaid">
              flowchart TD
                Start([Inicio]) --> Check{¿Llena?}
                Check -- Sí --> Error[Error Overflow]
                Check -- No --> Inc[Final++]
                Inc --> Assign[Cola.Final = Dato]
                Assign --> End([Fin])
                
                style Check fill:#dbeafe,stroke:#2563eb
                style Error fill:#fecaca,stroke:#ef4444
            </div>
          </div>

          <!-- Dequeue -->
          <div class="bg-white border-2 border-orange-100 rounded-xl p-6 hover:border-orange-300 transition-colors">
            <h3 class="text-xl font-bold text-orange-700 mb-4 flex items-center">
              <span class="bg-orange-100 p-2 rounded mr-2">➜</span> Dequeue (Desencolar)
            </h3>
            <div class="mermaid">
              flowchart TD
                Start([Inicio]) --> Check{¿Vacía?}
                Check -- Sí --> Error[Error Underflow]
                Check -- No --> Get[Dato = Cola.Frente]
                Get --> Inc[Frente++]
                Inc --> Return[Retornar Dato]
                
                style Check fill:#ffedd5,stroke:#ea580c
                style Error fill:#fecaca,stroke:#ef4444
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'p10-3',
      title: 'Práctica: Pilas vs Colas',
      contentHtml: `
        <div class="space-y-8">
          <p class="text-gray-600">Analice qué estructura es más adecuada para cada situación.</p>

          <div class="space-y-4">
            <div class="bg-white p-4 border rounded shadow-sm flex justify-between items-center">
              <span class="text-slate-700 text-sm font-medium">Una lista de reproducción de canciones (Playlist) donde se agrega al final y suena la siguiente.</span>
              <details>
                 <summary class="text-xs text-blue-600 cursor-pointer font-bold px-3 py-1 bg-blue-50 rounded">Respuesta</summary>
                 <span class="ml-2 font-bold text-green-600 text-sm">Cola (FIFO)</span>
              </details>
            </div>

            <div class="bg-white p-4 border rounded shadow-sm flex justify-between items-center">
              <span class="text-slate-700 text-sm font-medium">La función "Deshacer" (Ctrl+Z) en Word.</span>
              <details>
                 <summary class="text-xs text-blue-600 cursor-pointer font-bold px-3 py-1 bg-blue-50 rounded">Respuesta</summary>
                 <span class="ml-2 font-bold text-purple-600 text-sm">Pila (LIFO)</span>
              </details>
            </div>

            <div class="bg-white p-4 border rounded shadow-sm flex justify-between items-center">
              <span class="text-slate-700 text-sm font-medium">La cola de impresión de una impresora compartida.</span>
              <details>
                 <summary class="text-xs text-blue-600 cursor-pointer font-bold px-3 py-1 bg-blue-50 rounded">Respuesta</summary>
                 <span class="ml-2 font-bold text-green-600 text-sm">Cola (FIFO)</span>
              </details>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'p10-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6 animate-bounce">
             <span class="text-6xl font-bold select-none">?</span>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Estructura FIFO</h3>
          <p class="text-center text-gray-600 max-w-md">
            Fundamental para sistemas operativos y redes. ¿Dudas sobre los punteros de Frente y Final?
          </p>
        </div>
      `
    },
    {
      id: 'p10-end-thanks',
      title: 'Gracias por su atención',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">Fin de la Clase</h2>
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-blue-500 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "La paciencia es una virtud, excepto cuando hay lag en la cola de red."
            </p>
            <footer class="flex items-center justify-center gap-2">
              <div class="h-px w-8 bg-slate-300"></div>
              <cite class="not-italic font-bold text-slate-900">Anónimo de Internet</cite>
            </footer>
          </blockquote>
        </div>
      `
    }
  ]
};
