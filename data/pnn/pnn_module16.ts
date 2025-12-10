
import { Module } from '../../types';

export const PNN_MODULE_16: Module = {
  id: 'pnn-mod-16',
  title: '16. Problema de las N Reinas',
  description: 'Aplicación clásica de Backtracking sobre el tablero de ajedrez.',
  evaluation: '0% - Práctica Guiada',
  slides: [
    {
      id: 'pnn16-1',
      title: 'Las N Reinas',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            <strong>Problema:</strong> Colocar <em>N</em> reinas en un tablero de ajedrez de <em>NxN</em> de tal manera que ninguna reina ataque a otra (no pueden compartir fila, columna ni diagonal).
          </p>

          <div class="flex flex-col md:flex-row gap-6 items-center">
            <div class="bg-white p-4 border rounded shadow-sm">
               <div class="grid grid-cols-4 gap-1 w-32 h-32 border-2 border-slate-800">
                 <!-- Tablero 4x4 simplificado -->
                 <div class="bg-white"></div><div class="bg-slate-300 flex items-center justify-center">♛</div><div class="bg-white"></div><div class="bg-slate-300"></div>
                 <div class="bg-slate-300"></div><div class="bg-white"></div><div class="bg-slate-300"></div><div class="bg-white flex items-center justify-center">♛</div>
                 <div class="bg-white flex items-center justify-center">♛</div><div class="bg-slate-300"></div><div class="bg-white"></div><div class="bg-slate-300"></div>
                 <div class="bg-slate-300"></div><div class="bg-white"></div><div class="bg-slate-300 flex items-center justify-center">♛</div><div class="bg-white"></div>
               </div>
               <p class="text-center text-xs mt-2 font-bold">Solución 4-Reinas</p>
            </div>

            <div class="flex-1">
              <h4 class="font-bold text-purple-900 mb-2">Enfoque Backtracking</h4>
              <ol class="list-decimal list-inside text-sm text-slate-700 space-y-2">
                <li>Colocar una reina en la primera fila, columna 1.</li>
                <li>Pasar a la siguiente fila. Intentar colocar reina en una columna segura.</li>
                <li>Si encontramos un lugar seguro, avanzar.</li>
                <li>Si no hay lugar seguro en la fila actual, <strong>retroceder (backtrack)</strong> a la fila anterior y mover esa reina.</li>
              </ol>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn16-2',
      title: 'Pseudocódigo para N Reinas',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-slate-900 text-slate-100 p-4 rounded-lg text-xs font-mono shadow-lg max-w-xl mx-auto">
<pre>
procedimiento NReinas(fila):
  si fila > N:
    imprimir solución
    retornar

  para col en 1..N:
    si esSeguro(fila, col):
      colocar reina en (fila, col)
      NReinas(fila + 1)
      quitar reina de (fila, col)

función esSeguro(fila, col):
  verificar columna, diagonal principal y secundaria
</pre>
          </div>
        </div>
      `
    },
    {
      id: 'pnn16-3',
      title: 'Actividad: Árbol de Búsqueda para 4 Reinas',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Para N = 4, dibujen una parte del árbol de búsqueda que representa las decisiones de colocar reinas fila por fila.
          </p>
          <ol class="list-decimal list-inside text-sm text-slate-700 space-y-2 bg-slate-50 p-4 rounded-lg border">
            <li>Representar cada nodo como "fila actual, columnas ocupadas".</li>
            <li>Marcar las ramas que se podan por conflicto.</li>
            <li>Identificar al menos una rama que llegue a una solución válida.</li>
          </ol>
          <div class="bg-white p-4 rounded-xl border text-xs font-mono">
            <p class="font-bold mb-2">Guía de decisión (N = 4)</p>
            <pre>
Fila 1: probar columnas 1..4
  Si eliges col=2 (columna segura), pasa a fila 2
Fila 2: evita columnas atacadas por (1,2): col=2 (misma col), col=1 y col=3 (diagonales)
  Candidatas seguras: col=4
Fila 3: evita ataques desde (1,2) y (2,4)
  Candidatas seguras: col=1
Fila 4: evita ataques desde (1,2), (2,4), (3,1)
  Candidatas seguras: col=3  -> solución (2,4,1,3)
            </pre>
          </div>
          
        </div>
      `
    },
    {
      id: 'pnn16-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="text-6xl font-bold text-indigo-600 mb-6 select-none">?</div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Problema de las N Reinas</h3>
          <p class="text-center text-gray-600 max-w-md">
            ¿Preguntas sobre la función esSeguro, el tamaño del espacio de búsqueda o cómo optimizar la implementación?
          </p>
        </div>
      `
    },
    {
      id: 'pnn16-end-thanks',
      title: 'Gracias por su atención',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">Fin de la Clase</h2>
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-indigo-500 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "Las N Reinas son un tablero perfecto para practicar la elegancia del backtracking." 
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
