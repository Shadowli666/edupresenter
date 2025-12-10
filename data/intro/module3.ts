
import { Module } from '../../types';

export const MODULE_3: Module = {
  id: 'mod-3',
  title: '3. Algoritmos',
  description: 'Estructura y elementos fundamentales.',
  evaluation: '0% - Ejercicio',
  slides: [
    {
      id: 's3-1',
      title: 'Concepto de Algoritmo',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p class="text-lg italic text-gray-700">"Conjunto ordenado y finito de operaciones que permite hallar la solución de un problema."</p>
          </div>

          <h3 class="font-bold text-xl mt-6 text-gray-900">Características</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li><strong>Preciso:</strong> Cada paso debe estar claro y sin ambigüedad.</li>
            <li><strong>Finito:</strong> Debe tener un inicio y un fin determinado.</li>
            <li><strong>Definido:</strong> Si se sigue dos veces con los mismos datos, debe dar el mismo resultado.</li>
          </ul>

          <h3 class="font-bold text-xl mt-6 text-gray-900">Partes de un Algoritmo</h3>
          <div class="flex justify-center my-4">
             <div class="mermaid">
               flowchart LR
                 A["Entrada\n(Input)"] --> B["Proceso\n(Process)"] --> C["Salida\n(Output)"]
                 style A fill:#dcfce7,stroke:#16a34a,stroke-width:2px
                 style B fill:#dbeafe,stroke:#2563eb,stroke-width:2px
                 style C fill:#f3e8ff,stroke:#9333ea,stroke-width:2px
             </div>
          </div>
          <div class="grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
             <div>Datos iniciales</div>
             <div>Operaciones Lógicas</div>
             <div>Resultados</div>
          </div>
        </div>
      `
    },
    {
      id: 's3-2',
      title: 'Variables y Tipos de Datos',
      contentHtml: `
        <div class="space-y-8">
          
          <!-- Definiciones Básicas -->
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-blue-50 p-5 rounded-lg border border-blue-100">
              <h3 class="text-lg font-bold text-blue-800 mb-2 flex items-center gap-2">
                <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 7h-7m0 10h7m-7-5h7M4 7h7m-7 10h7m-7-5h7"></path></svg>
                Variables
              </h3>
              <p class="text-slate-700 text-sm mb-2">Espacios de memoria reservados cuyo contenido <strong>puede cambiar</strong> durante la ejecución.</p>
              <div class="font-mono text-xs bg-white p-2 rounded border border-blue-200 text-slate-600">
                puntos = 0;<br>
                puntos = puntos + 1; <span class="text-green-600">// Cambió a 1</span>
              </div>
            </div>
            
            <div class="bg-purple-50 p-5 rounded-lg border border-purple-100">
              <h3 class="text-lg font-bold text-purple-800 mb-2 flex items-center gap-2">
                <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                Constantes
              </h3>
              <p class="text-slate-700 text-sm mb-2">Valores fijos que <strong>no cambian</strong> nunca durante la ejecución del programa.</p>
              <div class="font-mono text-xs bg-white p-2 rounded border border-purple-200 text-slate-600">
                PI = 3.1416;<br>
                IVA = 0.16;
              </div>
            </div>
          </div>

          <!-- Sección de Tipos de Datos Detallada -->
          <div>
            <h3 class="text-xl font-bold text-slate-900 mb-4 border-b pb-2">Tipos de Datos Fundamentales</h3>
            <p class="text-sm text-gray-600 mb-4">El tipo de dato define qué clase de información puede guardar una variable y cuánta memoria ocupa.</p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <!-- Entero -->
              <div class="border rounded-lg p-4 hover:shadow-md transition-shadow bg-white">
                <div class="flex justify-between items-center mb-2">
                  <h4 class="font-bold text-slate-800">Entero (Integer)</h4>
                  <span class="text-xs font-mono bg-slate-100 px-2 py-1 rounded text-slate-500">int</span>
                </div>
                <p class="text-xs text-gray-600 mb-2">Números sin parte decimal. Pueden ser positivos o negativos.</p>
                <p class="text-xs font-mono bg-slate-50 p-2 rounded border-l-4 border-slate-400 text-slate-700">Ej: 10, -5, 2024, 0</p>
              </div>

              <!-- Real -->
              <div class="border rounded-lg p-4 hover:shadow-md transition-shadow bg-white">
                <div class="flex justify-between items-center mb-2">
                  <h4 class="font-bold text-slate-800">Real (Float/Double)</h4>
                  <span class="text-xs font-mono bg-slate-100 px-2 py-1 rounded text-slate-500">float</span>
                </div>
                <p class="text-xs text-gray-600 mb-2">Números con parte decimal o fraccionaria. Mayor precisión.</p>
                <p class="text-xs font-mono bg-slate-50 p-2 rounded border-l-4 border-slate-400 text-slate-700">Ej: 3.14, 2.5, -0.01, 10.0</p>
              </div>

              <!-- Carácter / Cadena -->
              <div class="border rounded-lg p-4 hover:shadow-md transition-shadow bg-white">
                <div class="flex justify-between items-center mb-2">
                  <h4 class="font-bold text-slate-800">Carácter / Cadena</h4>
                  <span class="text-xs font-mono bg-slate-100 px-2 py-1 rounded text-slate-500">string</span>
                </div>
                <p class="text-xs text-gray-600 mb-2">Texto, letras, símbolos. Se encierran entre comillas.</p>
                <p class="text-xs font-mono bg-slate-50 p-2 rounded border-l-4 border-slate-400 text-slate-700">Ej: "Hola Mundo", 'A', "123"</p>
              </div>

              <!-- Lógico -->
              <div class="border rounded-lg p-4 hover:shadow-md transition-shadow bg-white">
                <div class="flex justify-between items-center mb-2">
                  <h4 class="font-bold text-slate-800">Lógico (Boolean)</h4>
                  <span class="text-xs font-mono bg-slate-100 px-2 py-1 rounded text-slate-500">bool</span>
                </div>
                <p class="text-xs text-gray-600 mb-2">Solo admite dos valores de verdad. Útiles para condiciones.</p>
                <p class="text-xs font-mono bg-slate-50 p-2 rounded border-l-4 border-slate-400 text-slate-700">Ej: Verdadero, Falso (True, False)</p>
              </div>
            </div>
          </div>
          
          <!-- Reglas Identificadores -->
           <div class="bg-gray-50 rounded p-4 border border-gray-200">
            <h4 class="font-bold text-sm text-slate-800 mb-2">Reglas para nombrar variables (Identificadores)</h4>
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <li class="flex items-center text-green-700"><span class="mr-1">✓</span> Debe iniciar con letra o guion bajo (_).</li>
              <li class="flex items-center text-red-700"><span class="mr-1">✗</span> NO puede iniciar con números.</li>
              <li class="flex items-center text-green-700"><span class="mr-1">✓</span> Puede contener números después.</li>
              <li class="flex items-center text-red-700"><span class="mr-1">✗</span> NO espacios ni caracteres especiales (@, $).</li>
            </ul>
          </div>

        </div>
      `
    },
    {
      id: 's3-3',
      title: 'Taller de Lógica',
      contentHtml: `
        <div class="space-y-8">
          
          <!-- Variable vs Constant Exercise -->
          <div class="border-b pb-6">
            <h3 class="text-lg font-bold text-slate-900 mb-4">1. Identificación: ¿Variable o Constante?</h3>
            <p class="text-sm text-gray-500 mb-4">Para un sistema de facturación, identifique cómo definiría los siguientes datos:</p>
            
            <div class="bg-slate-50 rounded-lg p-4 space-y-3">
               <div class="flex justify-between text-sm">
                 <span>El valor del IVA (16%)</span>
                 <details class="inline-block">
                    <summary class="cursor-pointer text-blue-600 font-bold text-xs border border-blue-200 px-2 py-0.5 rounded bg-white">Ver</summary>
                    <span class="ml-2 font-mono text-purple-700">Constante</span>
                 </details>
               </div>
               <div class="flex justify-between text-sm">
                 <span>El nombre del cliente</span>
                 <details class="inline-block">
                    <summary class="cursor-pointer text-blue-600 font-bold text-xs border border-blue-200 px-2 py-0.5 rounded bg-white">Ver</summary>
                    <span class="ml-2 font-mono text-green-700">Variable</span>
                 </details>
               </div>
               <div class="flex justify-between text-sm">
                 <span>El total a pagar</span>
                 <details class="inline-block">
                    <summary class="cursor-pointer text-blue-600 font-bold text-xs border border-blue-200 px-2 py-0.5 rounded bg-white">Ver</summary>
                    <span class="ml-2 font-mono text-green-700">Variable</span>
                 </details>
               </div>
               <div class="flex justify-between text-sm">
                 <span>El valor de Pi</span>
                 <details class="inline-block">
                    <summary class="cursor-pointer text-blue-600 font-bold text-xs border border-blue-200 px-2 py-0.5 rounded bg-white">Ver</summary>
                    <span class="ml-2 font-mono text-purple-700">Constante</span>
                 </details>
               </div>
            </div>
          </div>

          <!-- Valid Identifiers Exercise -->
          <div>
            <h3 class="text-lg font-bold text-slate-900 mb-4">2. Identificadores Válidos</h3>
            <p class="text-sm text-gray-500 mb-4">¿Cuál de los siguientes nombres de variable es INCORRECTO?</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button class="p-3 border rounded text-left hover:bg-red-50 text-sm font-mono group">
                <span class="font-bold text-slate-800 block mb-1">1nombre</span>
                <span class="text-xs text-red-600 hidden group-hover:block">¡Incorrecto! No puede empezar con número.</span>
              </button>
              <button class="p-3 border rounded text-left hover:bg-green-50 text-sm font-mono group">
                <span class="font-bold text-slate-800 block mb-1">nombre_usuario</span>
                <span class="text-xs text-green-600 hidden group-hover:block">Correcto.</span>
              </button>
              <button class="p-3 border rounded text-left hover:bg-red-50 text-sm font-mono group">
                <span class="font-bold text-slate-800 block mb-1">total pagar</span>
                <span class="text-xs text-red-600 hidden group-hover:block">¡Incorrecto! No puede tener espacios.</span>
              </button>
              <button class="p-3 border rounded text-left hover:bg-green-50 text-sm font-mono group">
                <span class="font-bold text-slate-800 block mb-1">_saldo</span>
                <span class="text-xs text-green-600 hidden group-hover:block">Correcto.</span>
              </button>
            </div>
          </div>

        </div>
      `
    },
    {
      id: 's3-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 animate-bounce">
             <span class="text-6xl font-bold select-none">?</span>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Espacio de Preguntas</h3>
          <p class="text-center text-gray-600 max-w-md">
            Los algoritmos son pasos lógicos. Si algún paso no quedó claro, es el momento de revisarlo.
          </p>
        </div>
      `
    },
    {
      id: 's3-end-thanks',
      title: 'Gracias por su atención',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">Fin de la Clase</h2>
          
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-green-500 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "Primero resuelve el problema. Entonces, escribe el código."
            </p>
            <footer class="flex items-center justify-center gap-2">
              <div class="h-px w-8 bg-slate-300"></div>
              <cite class="not-italic font-bold text-slate-900">John Johnson</cite>
            </footer>
          </blockquote>
        </div>
      `
    }
  ]
};
