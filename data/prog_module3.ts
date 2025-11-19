
import { Module } from '../types';

export const PROG_MODULE_3: Module = {
  id: 'prog-mod-3',
  title: '3. Memoria Dinámica y Punteros',
  description: 'Gestión eficiente de la memoria y estructuras de referencia.',
  evaluation: '0% - Ejercicio Teórico/Práctico',
  slides: [
    {
      id: 'p3-1',
      title: 'Memoria Estática vs Dinámica',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white border border-gray-200 rounded-lg p-6">
            <h3 class="text-lg font-bold text-slate-800 mb-2">Memoria Estática</h3>
            <p class="text-sm text-gray-600 mb-4">El tamaño de las variables se define <strong>antes</strong> de compilar el programa.</p>
            <ul class="text-xs text-gray-500 space-y-2 mb-4">
              <li>• Se aloja en el "Stack" (Pila).</li>
              <li>• No se puede cambiar el tamaño durante la ejecución.</li>
              <li>• Ej: <code>int numeros[10];</code></li>
            </ul>
            <span class="bg-red-100 text-red-800 text-[10px] font-bold px-2 py-1 rounded">Rigidez</span>
          </div>

          <div class="bg-white border border-blue-200 rounded-lg p-6 relative overflow-hidden">
            <div class="absolute top-0 right-0 bg-blue-500 text-white text-xs px-2 py-1 rounded-bl">Flexible</div>
            <h3 class="text-lg font-bold text-blue-800 mb-2">Memoria Dinámica</h3>
            <p class="text-sm text-gray-600 mb-4">Se solicita memoria al sistema operativo <strong>durante</strong> la ejecución (Runtime).</p>
            <ul class="text-xs text-gray-500 space-y-2 mb-4">
              <li>• Se aloja en el "Heap" (Montículo).</li>
              <li>• Crece o decrece según la necesidad.</li>
              <li>• Requiere gestión manual (en C/C++) o Garbage Collector (Python/Java).</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'p3-2',
      title: 'Concepto de Punteros',
      contentHtml: `
        <div class="space-y-8">
          <div class="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
            <h3 class="text-xl font-bold text-purple-900">¿Qué es un puntero?</h3>
            <p class="text-purple-800 mt-2">Es una variable especial que no almacena un valor (como un número o letra), sino la <strong>dirección de memoria</strong> de otra variable.</p>
          </div>

          <div class="flex flex-col items-center py-4">
            <div class="flex gap-8 items-center">
              <!-- Variable Normal -->
              <div class="text-center">
                <p class="text-xs text-gray-500 mb-1">Dirección: 0x100</p>
                <div class="w-24 h-24 border-2 border-slate-300 bg-white flex items-center justify-center text-2xl font-bold text-slate-800 rounded shadow-sm">
                  10
                </div>
                <p class="font-mono text-sm font-bold mt-2">Var A</p>
              </div>

              <div class="text-2xl text-gray-400">← apuntando ←</div>

              <!-- Puntero -->
              <div class="text-center">
                <p class="text-xs text-gray-500 mb-1">Dirección: 0x204</p>
                <div class="w-24 h-24 border-2 border-purple-500 bg-purple-50 flex items-center justify-center text-sm font-mono font-bold text-purple-900 rounded shadow-sm">
                  0x100
                </div>
                <p class="font-mono text-sm font-bold mt-2 text-purple-700">Puntero P</p>
              </div>
            </div>
          </div>

          <p class="text-sm text-gray-500 text-center italic">
            "P sabe dónde vive A, por lo tanto P puede modificar el valor de A a distancia."
          </p>
        </div>
      `
    },
    {
      id: 'p3-3',
      title: 'Práctica: Memoria',
      contentHtml: `
        <div class="space-y-6">
           <div class="bg-white border p-6 rounded shadow-sm">
             <h4 class="font-bold text-slate-800 mb-4">Ejercicio Mental</h4>
             <p class="text-sm text-gray-600 mb-4">Analice la siguiente situación y determine si requiere memoria estática o dinámica.</p>
             
             <div class="space-y-4">
               <div class="p-3 bg-slate-50 rounded border border-slate-200">
                 <p class="text-sm font-medium text-slate-700 mb-2">Situación A: Calcular el promedio de notas de un salón que SIEMPRE tiene 30 alumnos.</p>
                 <details class="group">
                    <summary class="text-xs text-blue-600 cursor-pointer select-none">Ver Solución</summary>
                    <span class="text-xs font-bold text-green-600 block mt-1">Estática. El tamaño es fijo y conocido.</span>
                 </details>
               </div>

               <div class="p-3 bg-slate-50 rounded border border-slate-200">
                 <p class="text-sm font-medium text-slate-700 mb-2">Situación B: Un carrito de compras en una tienda online (el usuario puede agregar 1 o 100 productos).</p>
                 <details class="group">
                    <summary class="text-xs text-blue-600 cursor-pointer select-none">Ver Solución</summary>
                    <span class="text-xs font-bold text-green-600 block mt-1">Dinámica. No sabemos cuántos elementos habrá.</span>
                 </details>
               </div>
             </div>
           </div>
        </div>
      `
    },
    {
      id: 'p3-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-6 animate-bounce">
             <span class="text-6xl font-bold select-none">?</span>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Punteros y Referencias</h3>
          <p class="text-center text-gray-600 max-w-md">
            Este es uno de los temas más abstractos de la programación. ¿Dudas sobre el concepto de "Dirección de Memoria"?
          </p>
        </div>
      `
    },
    {
      id: 'p3-end-thanks',
      title: 'Gracias por su atención',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">Fin de la Clase</h2>
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-purple-500 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "C es peculiar, porque combina la potencia del ensamblador con la flexibilidad del ensamblador."
            </p>
            <footer class="flex items-center justify-center gap-2">
              <div class="h-px w-8 bg-slate-300"></div>
              <cite class="not-italic font-bold text-slate-900">Frase popular de programadores</cite>
            </footer>
          </blockquote>
        </div>
      `
    }
  ]
};
