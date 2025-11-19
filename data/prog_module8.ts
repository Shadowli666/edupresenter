
import { Module } from '../types';

export const PROG_MODULE_8: Module = {
  id: 'prog-mod-8',
  title: '8. Pilas (Stacks)',
  description: 'Concepto LIFO, operaciones básicas y estructura.',
  evaluation: '0% - Introducción Teórica',
  slides: [
    {
      id: 'p8-1',
      title: 'Concepto de Pila (LIFO)',
      contentHtml: `
        <div class="space-y-8">
          <div class="flex flex-col md:flex-row gap-8 items-center">
            <div class="flex-1">
              <h3 class="text-2xl font-bold text-slate-900 mb-4">LIFO: Last In, First Out</h3>
              <p class="text-gray-700 mb-4">
                "El último en entrar es el primero en salir".
              </p>
              <p class="text-gray-600 text-sm">
                Imagina una pila de platos sucios. Colocas uno encima del otro. Cuando vas a lavar, tomas el que está arriba (el último que pusiste), no el de abajo.
              </p>
            </div>
            
            <!-- Visual Stack representation -->
            <div class="flex flex-col-reverse items-center p-6 bg-slate-100 rounded-xl border-b-8 border-slate-300 w-48 shadow-inner">
               <div class="w-32 h-8 bg-red-500 rounded mb-1 border border-red-600 shadow-sm animate-pulse text-center text-white text-xs flex items-center justify-center">Tope (Top)</div>
               <div class="w-32 h-8 bg-blue-500 rounded mb-1 border border-blue-600 shadow-sm"></div>
               <div class="w-32 h-8 bg-blue-500 rounded mb-1 border border-blue-600 shadow-sm"></div>
               <div class="w-32 h-8 bg-blue-500 rounded mb-1 border border-blue-600 shadow-sm"></div>
               <div class="w-32 h-8 bg-blue-900 rounded mb-1 border border-blue-950 shadow-sm text-center text-white text-xs flex items-center justify-center">Base</div>
            </div>
          </div>

          <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 text-sm text-yellow-900">
            <strong>Restricción:</strong> En una pila, SOLO se puede acceder al elemento superior (Tope). No puedes sacar un elemento del medio sin sacar los de arriba primero.
          </div>
        </div>
      `
    },
    {
      id: 'p8-2',
      title: 'Operaciones Básicas',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-6">
          <!-- PUSH -->
          <div class="bg-white border-2 border-green-100 rounded-xl p-6 hover:border-green-300 transition-colors">
            <h3 class="text-xl font-bold text-green-700 mb-2 flex items-center">
              <span class="bg-green-100 p-2 rounded mr-2">⬇</span> Push (Apilar)
            </h3>
            <p class="text-gray-600 text-sm mb-4">Inserta un elemento en el tope de la pila.</p>
            <div class="font-mono text-xs bg-slate-900 text-green-400 p-3 rounded">
              Si PilaLlena() -> Error<br>
              Sino:<br>
              &nbsp;&nbsp;Tope++<br>
              &nbsp;&nbsp;Pila[Tope] = Dato
            </div>
          </div>

          <!-- POP -->
          <div class="bg-white border-2 border-red-100 rounded-xl p-6 hover:border-red-300 transition-colors">
            <h3 class="text-xl font-bold text-red-700 mb-2 flex items-center">
              <span class="bg-red-100 p-2 rounded mr-2">⬆</span> Pop (Desapilar)
            </h3>
            <p class="text-gray-600 text-sm mb-4">Extrae y elimina el elemento del tope.</p>
            <div class="font-mono text-xs bg-slate-900 text-red-400 p-3 rounded">
              Si PilaVacia() -> Error<br>
              Sino:<br>
              &nbsp;&nbsp;Valor = Pila[Tope]<br>
              &nbsp;&nbsp;Tope--<br>
              &nbsp;&nbsp;Retornar Valor
            </div>
          </div>
        </div>

        <div class="mt-8 p-4 bg-slate-50 border rounded text-center">
          <h4 class="font-bold text-slate-700 mb-2">Otras Operaciones</h4>
          <div class="flex justify-center gap-4 text-sm">
            <span class="px-3 py-1 bg-white border rounded shadow-sm"><strong>Peek / Top:</strong> Ver el tope sin sacarlo.</span>
            <span class="px-3 py-1 bg-white border rounded shadow-sm"><strong>IsEmpty:</strong> ¿Está vacía?</span>
          </div>
        </div>
      `
    },
    {
      id: 'p8-3',
      title: 'Práctica: Traza de Pila',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-600">Realice mentalmente las operaciones y determine el estado final.</p>
          
          <div class="bg-white border p-6 rounded shadow-sm font-mono text-sm">
            <p class="mb-2">Pila P = vacía;</p>
            <p class="text-blue-600">P.push(5);</p>
            <p class="text-blue-600">P.push(10);</p>
            <p class="text-blue-600">P.push(8);</p>
            <p class="text-red-600">P.pop();</p>
            <p class="text-blue-600">P.push(2);</p>
            <p class="text-red-600">P.pop();</p>
          </div>

          <details class="group bg-slate-50 p-4 rounded border border-slate-200">
            <summary class="font-bold text-slate-800 cursor-pointer select-none">¿Qué valor queda en el Tope y qué valores contiene la pila?</summary>
            <div class="mt-4 text-sm text-slate-700 space-y-2">
              <p>1. Push 5 -> [5]</p>
              <p>2. Push 10 -> [5, 10]</p>
              <p>3. Push 8 -> [5, 10, 8]</p>
              <p>4. Pop -> Saca el 8. Queda [5, 10]</p>
              <p>5. Push 2 -> [5, 10, 2]</p>
              <p>6. Pop -> Saca el 2. Queda [5, 10]</p>
              <p class="font-bold mt-2 text-green-700">Resultado: Tope es 10. Pila: [5, 10]</p>
            </div>
          </details>
        </div>
      `
    },
    {
      id: 'p8-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 animate-bounce">
             <span class="text-6xl font-bold select-none">?</span>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Estructura LIFO</h3>
          <p class="text-center text-gray-600 max-w-md">
            El concepto es simple, pero fundamental para entender cómo funcionan las llamadas a funciones en la computadora.
          </p>
        </div>
      `
    },
    {
      id: 'p8-end-thanks',
      title: 'Gracias por su atención',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">Fin de la Clase</h2>
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-green-500 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "El mejor código es el que no se tiene que escribir."
            </p>
            <footer class="flex items-center justify-center gap-2">
              <div class="h-px w-8 bg-slate-300"></div>
              <cite class="not-italic font-bold text-slate-900">Kevin Wilson</cite>
            </footer>
          </blockquote>
        </div>
      `
    }
  ]
};
