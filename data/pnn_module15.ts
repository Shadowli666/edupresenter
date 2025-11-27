
import { Module } from '../types';

export const PNN_MODULE_15: Module = {
  id: 'pnn-mod-15',
  title: '15. Backtracking (Vuelta Atrás)',
  description: 'Concepto de Backtracking, búsqueda en espacio de estados y ejemplos clásicos.',
  evaluation: '20% - Examen Escrito + Taller',
  slides: [
    {
      id: 'pnn15-1',
      title: 'Estrategia Backtracking',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Es una técnica algorítmica para encontrar soluciones a problemas que tienen restricciones. Construye candidatos a la solución de forma incremental y abandona ("hace backtrack") tan pronto determina que el candidato no puede llevar a una solución válida.
          </p>

          <div class="flex justify-center my-6">
            <div class="bg-slate-800 text-white p-4 rounded-lg shadow-lg max-w-md text-center">
              <p class="font-mono text-lg">"Prueba y Error Inteligente"</p>
              <p class="text-xs text-slate-400 mt-2">Si llego a un callejón sin salida, regreso al cruce anterior y tomo otro camino.</p>
            </div>
          </div>

          <div class="bg-white p-5 border rounded-xl shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">Espacio de Estados</h4>
            <p class="text-sm text-slate-600">
              Se modela como un árbol donde cada nodo es un estado parcial de la solución. Backtracking es esencialmente un recorrido DFS (Profundidad) sobre este árbol, podando las ramas que no sirven.
            </p>
          </div>
        </div>
      `
    },
    {
      id: 'pnn15-2',
      title: 'Pseudocódigo Genérico de Backtracking',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-slate-900 text-slate-100 p-4 rounded-lg text-xs font-mono shadow-lg max-w-xl mx-auto">
<pre>
procedimiento Backtrack(estado):
  si estado es solución completa:
    procesar solución
    retornar

  para cada decisión posible d desde estado:
    si d es prometedora (no viola restricciones):
      aplicar d al estado
      Backtrack(estado)
      deshacer d (backtrack)
</pre>
          </div>
          <p class="text-sm text-slate-600">
            El poder de Backtracking está en la función "prometedora", que permite <strong>podar</strong> grandes partes del espacio de búsqueda.
          </p>
        </div>
      `
    },
    {
      id: 'pnn15-3',
      title: 'Actividad: Combinaciones con Restricciones',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Problema propuesto: generar todas las cadenas binarias de longitud n con la restricción de que no haya más de 2 unos consecutivos.
          </p>
          <ol class="list-decimal list-inside text-sm text-slate-700 space-y-2 bg-slate-50 p-4 rounded-lg border">
            <li>Definir claramente el estado (posición actual, cadena parcial).</li>
            <li>Definir la función prometedora (¿cuándo podar?).</li>
            <li>Dibujar un fragmento del árbol de estados para n = 3.</li>
          </ol>
          <div class="bg-white p-4 rounded-xl border text-xs font-mono">
            <p class="font-bold mb-2">Árbol de estados (n = 3, sin más de 2 unos seguidos)</p>
            <pre>
Raíz: "" (posición 0)
  Opción 0 -> "0" (pos 1)
    Opción 0 -> "00" (pos 2)
      Opción 0 -> "000" (pos 3)  ✓ solución
      Opción 1 -> "001" (pos 3)  ✓ solución
    Opción 1 -> "01" (pos 2)
      Opción 0 -> "010" (pos 3)  ✓ solución
      Opción 1 -> "011" (pos 3)  ✓ solución
  Opción 1 -> "1" (pos 1)
    Opción 0 -> "10" (pos 2)
      Opción 0 -> "100" (pos 3)  ✓ solución
      Opción 1 -> "101" (pos 3)  ✓ solución
    Opción 1 -> "11" (pos 2)
      Opción 0 -> "110" (pos 3)  ✓ solución
      Opción 1 -> "111" (pos 3)  ✗ podar (3 unos consecutivos)
            </pre>
          </div>
          
        </div>
      `
    },
    {
      id: 'pnn15-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="text-6xl font-bold text-indigo-600 mb-6 select-none">?</div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Estrategia Backtracking</h3>
          <p class="text-center text-gray-600 max-w-md">
            ¿Preguntas sobre el diseño del espacio de estados, la función prometedora o diferencias con la fuerza bruta pura?
          </p>
        </div>
      `
    },
    {
      id: 'pnn15-end-thanks',
      title: 'Gracias por su atención',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">Fin de la Clase</h2>
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-indigo-500 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "Backtracking es fuerza bruta con inteligencia: sabe cuándo dejar de intentarlo." 
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
