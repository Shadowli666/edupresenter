import { Module } from '../../types';

export const PNN_MODULE_15: Module = {
  id: 'pnn-mod-15',
  title: '15. Backtracking: Fundamentos',
  description: 'La técnica de prueba y error sistemática. Poda y árboles de estado.',
  evaluation: '0% - Práctica Guiada',
  slides: [
    {
      id: 'pnn15-1',
      title: 'El Arte de Rectificar',
      notes: 'Definición.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full space-y-6">
          <div class="text-center max-w-4xl">
            <h1 class="text-3xl font-bold text-slate-900 mb-4">Backtracking (Vuelta Atrás)</h1>
            <p class="text-lg text-slate-700">
              Es una estrategia algorítmica para encontrar soluciones a problemas de restricciones.
              <br>
              "Construye la solución paso a paso. Si llega a un callejón sin salida, <strong>retrocede</strong> y prueba otro camino."
            </p>
          </div>
          
          <div class="relative w-64 h-64 bg-slate-100 rounded-xl border-4 border-slate-300 p-4 shadow-inner">
            <!-- Laberinto Simple -->
            <div class="absolute top-0 left-0 w-full h-4 bg-slate-800"></div>
            <div class="absolute bottom-0 left-0 w-full h-4 bg-slate-800"></div>
            <div class="absolute top-0 left-0 h-full w-4 bg-slate-800"></div>
            <div class="absolute top-0 right-0 h-full w-4 bg-slate-800"></div>
            
            <div class="absolute top-20 left-0 w-32 h-4 bg-slate-800"></div>
            <div class="absolute bottom-20 right-0 w-32 h-4 bg-slate-800"></div>
            
            <!-- Personaje -->
            <div class="absolute top-8 left-8 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow z-10">Start</div>
            
            <!-- Camino Fallido -->
            <svg class="absolute inset-0 w-full h-full pointer-events-none">
              <path d="M50 50 L50 150 L100 150" fill="none" stroke="#ef4444" stroke-width="4" stroke-dasharray="5,5" />
              <circle cx="100" cy="150" r="4" fill="#ef4444" />
            </svg>
            
            <!-- Retroceso y Camino Correcto -->
            <svg class="absolute inset-0 w-full h-full pointer-events-none">
              <path d="M50 100 L150 100 L150 200" fill="none" stroke="#22c55e" stroke-width="4" />
            </svg>
          </div>
        </div>
      `
    },
    {
      id: 'pnn15-2-pruning',
      title: 'Poda (Pruning)',
      notes: 'Eficiencia vs Fuerza Bruta.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full">
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-slate-800">Cortando Ramas Muertas</h3>
            <p class="text-slate-600">
              La diferencia clave con la Fuerza Bruta es la <strong>Poda</strong>.
              <br>
              Si detectamos que una solución parcial viola las reglas, dejamos de explorarla inmediatamente.
            </p>
            
            <div class="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
              <h4 class="font-bold text-yellow-900">Ejemplo: Permutaciones de {A, B, C}</h4>
              <p class="text-sm text-yellow-800 mt-2">
                Restricción: "No puede empezar con B".
              </p>
            </div>
          </div>

          <div class="bg-white p-2 rounded-xl shadow border border-slate-200 flex items-center justify-center overflow-hidden">
             <!-- Árbol de Estado -->
             <div class="flex flex-col items-center w-full">
               <div class="w-8 h-8 bg-slate-800 text-white rounded-full flex items-center justify-center text-xs mb-4">Root</div>
               
               <div class="flex justify-around w-full">
                 <!-- Rama A -->
                 <div class="flex flex-col items-center">
                   <div class="h-8 w-0.5 bg-slate-300"></div>
                   <div class="w-8 h-8 bg-green-100 border border-green-500 rounded-full flex items-center justify-center text-xs">A</div>
                   <div class="flex mt-2 gap-2">
                     <div class="w-6 h-6 bg-green-50 border border-green-300 rounded-full flex items-center justify-center text-[10px]">AB</div>
                     <div class="w-6 h-6 bg-green-50 border border-green-300 rounded-full flex items-center justify-center text-[10px]">AC</div>
                   </div>
                 </div>

                 <!-- Rama B (Podada) -->
                 <div class="flex flex-col items-center opacity-50">
                   <div class="h-8 w-0.5 bg-slate-300"></div>
                   <div class="w-8 h-8 bg-red-100 border border-red-500 rounded-full flex items-center justify-center text-xs relative">
                     B
                     <div class="absolute -top-2 -right-2 text-red-600 text-lg font-bold">✕</div>
                   </div>
                   <div class="text-[10px] text-red-500 mt-1">Podado</div>
                 </div>

                 <!-- Rama C -->
                 <div class="flex flex-col items-center">
                   <div class="h-8 w-0.5 bg-slate-300"></div>
                   <div class="w-8 h-8 bg-green-100 border border-green-500 rounded-full flex items-center justify-center text-xs">C</div>
                   <div class="flex mt-2 gap-2">
                     <div class="w-6 h-6 bg-green-50 border border-green-300 rounded-full flex items-center justify-center text-[10px]">CA</div>
                     <div class="w-6 h-6 bg-green-50 border border-green-300 rounded-full flex items-center justify-center text-[10px]">CB</div>
                   </div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn15-3-template',
      title: 'La Plantilla Universal',
      notes: 'Estructura del código.',
      contentHtml: `
        <div class="flex flex-col h-full">
          <h3 class="text-xl font-bold text-slate-800 mb-4">Estructura Recursiva</h3>
          <div class="bg-slate-900 p-6 rounded-xl shadow-lg flex-1 overflow-auto">
            <pre class="text-sm font-mono text-green-400">
function backtrack(candidato):
    if es_solucion(candidato):
        guardar_solucion(candidato)
        return

    for siguiente_paso in opciones_posibles:
        if es_valido(candidato, siguiente_paso):
            
            # 1. Hacer (Do)
            agregar(candidato, siguiente_paso)
            
            # 2. Recursión
            backtrack(candidato)
            
            # 3. Deshacer (Undo / Backtrack)
            quitar(candidato, siguiente_paso)
            </pre>
            
            <div class="mt-6 border-t border-slate-700 pt-4">
              <p class="text-slate-400 text-xs">
                El paso "Deshacer" es crucial. Es lo que permite reutilizar la estructura de datos para explorar otras ramas.
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn15-4-example',
      title: 'Ejemplo: Generar Subconjuntos',
      notes: 'Código Python.',
      contentHtml: `
        <div class="flex flex-col h-full">
          <div class="bg-yellow-500 text-white px-4 py-2 rounded-t-lg font-bold text-sm">Python: Power Set</div>
          <div class="bg-slate-900 p-4 rounded-b-lg overflow-auto custom-scrollbar flex-1 text-xs font-mono text-yellow-100">
<pre><code class="language-python">def subconjuntos(nums):
    res = []
    
    def backtrack(inicio, camino_actual):
        # En este problema, todos los nodos del árbol de estado son soluciones válidas
        res.append(camino_actual[:])
        
        for i in range(inicio, len(nums)):
            # Do
            camino_actual.append(nums[i])
            
            # Recurse
            backtrack(i + 1, camino_actual)
            
            # Undo
            camino_actual.pop()
            
    backtrack(0, [])
    return res

print(subconjuntos([1, 2, 3]))
# [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]</code></pre>
          </div>
        </div>
      `
    },
    {
      id: 'pnn15-5-summary',
      title: 'Resumen',
      notes: 'Conclusión.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center space-y-8">
          <h2 class="text-3xl font-bold text-slate-800">Exploración Sistemática</h2>
          <p class="text-xl text-slate-600 max-w-2xl">
            Backtracking es la base para resolver rompecabezas (Sudoku, N-Reinas), problemas de optimización combinatoria y juegos.
          </p>
          <div class="mt-8">
            <p class="text-slate-500 italic">Próxima clase: El problema de las N-Reinas (El "Hola Mundo" del Backtracking).</p>
          </div>
        </div>
      `
    }
  ]
};
