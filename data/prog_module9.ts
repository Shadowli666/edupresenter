
import { Module } from '../types';

export const PROG_MODULE_9: Module = {
  id: 'prog-mod-9',
  title: '9. Aplicaciones de las Pilas',
  description: 'Evaluación de expresiones y recursividad.',
  evaluation: '10% - Guía de Ejercicios',
  slides: [
    {
      id: 'p9-1',
      title: 'Evaluación de Expresiones',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">Las computadoras no leen "A + B" como nosotros. Usan pilas para convertir y evaluar expresiones matemáticas, evitando la ambigüedad de los paréntesis.</p>

          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-white p-4 border rounded shadow-sm">
              <strong class="block text-slate-800 mb-2 text-center border-b pb-1">Infija</strong>
              <p class="text-center font-mono text-sm text-gray-600">A + B</p>
              <p class="text-xs text-center text-gray-400 mt-2">Humano legible.</p>
            </div>
            <div class="bg-white p-4 border rounded shadow-sm bg-blue-50 border-blue-200">
              <strong class="block text-blue-800 mb-2 text-center border-b border-blue-200 pb-1">Postfija (Polaca Inversa)</strong>
              <p class="text-center font-mono font-bold text-sm text-blue-700">A B +</p>
              <p class="text-xs text-center text-blue-400 mt-2">Ideal para Pilas.</p>
            </div>
            <div class="bg-white p-4 border rounded shadow-sm">
              <strong class="block text-slate-800 mb-2 text-center border-b pb-1">Prefija</strong>
              <p class="text-center font-mono text-sm text-gray-600">+ A B</p>
              <p class="text-xs text-center text-gray-400 mt-2">Operador primero.</p>
            </div>
          </div>

          <div class="bg-slate-50 p-4 rounded-lg border border-slate-200 text-sm">
            <strong>Ejemplo Complejo:</strong> <br>
            Infija: <code class="bg-white px-1 rounded">(A + B) * C</code> <br>
            Postfija: <code class="bg-white px-1 rounded">A B + C *</code>
          </div>
        </div>
      `
    },
    {
      id: 'p9-2',
      title: 'Recursividad y el Stack',
      contentHtml: `
        <div class="space-y-6">
          <div class="flex gap-6 items-start">
            <div class="flex-1">
              <h3 class="text-xl font-bold text-purple-800 mb-4">La Pila de Llamadas (Call Stack)</h3>
              <p class="text-gray-700 mb-4">
                Cuando una función se llama a sí misma (Recursividad), la computadora usa una <strong>Pila</strong> interna para recordar dónde volver y qué valores tenían las variables locales.
              </p>
              <ul class="list-disc list-inside text-sm text-gray-600">
                <li>Cada llamada crea un "Stack Frame".</li>
                <li>Si la recursión es infinita, la pila se llena y ocurre un <strong>Stack Overflow</strong>.</li>
              </ul>
            </div>
            
            <!-- Visual Call Stack -->
            <div class="hidden md:flex flex-col-reverse items-center w-32 bg-purple-100 rounded p-2 border border-purple-200 h-48 justify-start">
              <div class="w-full bg-white border border-purple-300 rounded mb-1 p-1 text-center text-[10px]">Main()</div>
              <div class="w-full bg-white border border-purple-300 rounded mb-1 p-1 text-center text-[10px]">Factorial(3)</div>
              <div class="w-full bg-white border border-purple-300 rounded mb-1 p-1 text-center text-[10px]">Factorial(2)</div>
              <div class="w-full bg-white border border-purple-300 rounded mb-1 p-1 text-center text-[10px] font-bold animate-pulse">Factorial(1)</div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'p9-3',
      title: 'Guía de Ejercicios (10%)',
      contentHtml: `
        <div class="space-y-8">
          <div class="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-6">
            <p class="text-yellow-800 font-bold">Instrucciones de Evaluación (10%)</p>
            <p class="text-yellow-700 text-sm">Resuelva los siguientes ejercicios en papel. Esta actividad tiene ponderación acumulativa.</p>
          </div>

          <!-- Exercise 1 -->
          <details class="group border rounded-lg bg-white shadow-sm">
             <summary class="cursor-pointer font-bold text-slate-800 p-4 hover:bg-slate-50 flex justify-between items-center">
               <span>1. Conversión Postfija</span>
               <span class="text-slate-400 text-xs">▼</span>
             </summary>
             <div class="p-4 pt-0 text-sm text-slate-600 border-t bg-slate-50">
               <p class="my-3">Convierta la siguiente expresión infija a postfija:</p>
               <code class="block text-center text-lg font-mono bg-white p-2 border rounded mb-3">X * (Y + Z) - M</code>
               <details>
                  <summary class="text-xs text-blue-600 cursor-pointer font-bold mb-2">Ver Solución</summary>
                  <span class="font-mono font-bold text-green-600">X Y Z + * M -</span>
               </details>
             </div>
          </details>

          <!-- Exercise 2 -->
          <details class="group border rounded-lg bg-white shadow-sm">
             <summary class="cursor-pointer font-bold text-slate-800 p-4 hover:bg-slate-50 flex justify-between items-center">
               <span>2. Balanceo de Paréntesis</span>
               <span class="text-slate-400 text-xs">▼</span>
             </summary>
             <div class="p-4 pt-0 text-sm text-slate-600 border-t bg-slate-50">
               <p class="my-3">Use una pila para determinar si la expresión está balanceada:</p>
               <code class="block text-center text-lg font-mono bg-white p-2 border rounded mb-3">{ [ ( a + b ) ] * c }</code>
               <details>
                  <summary class="text-xs text-blue-600 cursor-pointer font-bold mb-2">Ver Solución</summary>
                  <p class="text-green-600"><strong>Balanceada.</strong> Cada vez que abre {, [, ( se hace Push. Cuando cierra ), ], } se hace Pop y se verifica coincidencia.</p>
               </details>
             </div>
          </details>
        </div>
      `
    },
    {
      id: 'p9-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-6 animate-bounce">
             <span class="text-6xl font-bold select-none">?</span>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Recursividad y Expresiones</h3>
          <p class="text-center text-gray-600 max-w-md">
            Temas densos pero poderosos. ¿Dudas sobre cómo la pila maneja la recursión?
          </p>
        </div>
      `
    },
    {
      id: 'p9-end-thanks',
      title: 'Gracias por su atención',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">Fin de la Clase</h2>
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-purple-500 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "Iterar es humano, recursar es divino."
            </p>
            <footer class="flex items-center justify-center gap-2">
              <div class="h-px w-8 bg-slate-300"></div>
              <cite class="not-italic font-bold text-slate-900">L. Peter Deutsch</cite>
            </footer>
          </blockquote>
        </div>
      `
    }
  ]
};
