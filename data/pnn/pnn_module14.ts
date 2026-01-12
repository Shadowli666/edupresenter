import { Module } from '../../types';

export const PNN_MODULE_14: Module = {
  id: 'pnn-mod-14',
  title: '14. TSP con Programación Dinámica',
  description: 'Resolución exacta del Problema del Viajante de Comercio usando máscaras de bits.',
  evaluation: '0% - Práctica Guiada',
  slides: [
    {
      id: 'pnn14-1',
      title: 'El Problema del Viajante (TSP)',
      notes: 'Definición formal.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full space-y-6">
          <div class="text-center max-w-4xl">
            <h1 class="text-3xl font-bold text-slate-900 mb-4">Traveling Salesperson Problem</h1>
            <p class="text-lg text-slate-700">
              "Dada una lista de ciudades y las distancias entre ellas, encontrar la ruta más corta que visite cada ciudad <strong>exactamente una vez</strong> y regrese al origen."
            </p>
          </div>
          
          <div class="relative w-64 h-64 bg-white rounded-full shadow-xl border border-slate-200">
            <!-- Ciudades -->
            <div class="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold z-10">A</div>
            <div class="absolute bottom-10 left-10 w-8 h-8 bg-slate-400 text-white rounded-full flex items-center justify-center font-bold z-10">B</div>
            <div class="absolute bottom-10 right-10 w-8 h-8 bg-slate-400 text-white rounded-full flex items-center justify-center font-bold z-10">C</div>
            <div class="absolute top-1/2 right-4 w-8 h-8 bg-slate-400 text-white rounded-full flex items-center justify-center font-bold z-10">D</div>
            
            <!-- Rutas (Grafo Completo) -->
            <svg class="absolute inset-0 w-full h-full pointer-events-none opacity-30">
              <line x1="128" y1="32" x2="60" y2="180" stroke="#94a3b8" stroke-width="1" />
              <line x1="128" y1="32" x2="196" y2="180" stroke="#94a3b8" stroke-width="1" />
              <line x1="128" y1="32" x2="220" y2="128" stroke="#94a3b8" stroke-width="1" />
              <line x1="60" y1="180" x2="196" y2="180" stroke="#94a3b8" stroke-width="1" />
              <line x1="60" y1="180" x2="220" y2="128" stroke="#94a3b8" stroke-width="1" />
              <line x1="196" y1="180" x2="220" y2="128" stroke="#94a3b8" stroke-width="1" />
            </svg>
            
            <!-- Ruta Óptima -->
            <svg class="absolute inset-0 w-full h-full pointer-events-none">
              <path d="M128 32 L220 128 L196 180 L60 180 Z" fill="none" stroke="#3b82f6" stroke-width="3" stroke-dasharray="5,5" />
            </svg>
          </div>
        </div>
      `
    },
    {
      id: 'pnn14-2-complexity',
      title: 'La Explosión Combinatoria',
      notes: 'Fuerza Bruta vs DP.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full">
          <div class="bg-red-50 p-6 rounded-xl border border-red-200 flex flex-col">
            <h3 class="font-bold text-red-800 mb-4">Fuerza Bruta</h3>
            <p class="text-sm text-red-700 mb-4">
              Probar todas las permutaciones posibles.
            </p>
            <div class="text-4xl font-mono font-bold text-red-600 mb-2">O(n!)</div>
            <ul class="text-xs text-red-600 space-y-1">
              <li>n=10 → 3.6 millones</li>
              <li>n=20 → 2.4 trillones (Siglos de cálculo)</li>
            </ul>
          </div>

          <div class="bg-green-50 p-6 rounded-xl border border-green-200 flex flex-col">
            <h3 class="font-bold text-green-800 mb-4">Programación Dinámica</h3>
            <p class="text-sm text-green-700 mb-4">
              Usando el algoritmo de Held-Karp.
            </p>
            <div class="text-4xl font-mono font-bold text-green-600 mb-2">O(n² · 2ⁿ)</div>
            <ul class="text-xs text-green-600 space-y-1">
              <li>n=10 → ~100,000 ops (Instantáneo)</li>
              <li>n=20 → ~400 millones (Segundos/Minutos)</li>
            </ul>
            <p class="mt-4 text-xs font-bold text-green-800">
              ¡Mejora exponencial! (Aunque sigue siendo intratable para n muy grande).
            </p>
          </div>
        </div>
      `
    },
    {
      id: 'pnn14-3-bitmask',
      title: 'Máscaras de Bits (Bitmasking)',
      notes: 'Representación de conjuntos.',
      contentHtml: `
        <div class="flex flex-col h-full space-y-6">
          <h3 class="text-xl font-bold text-slate-800">Representando Conjuntos con Enteros</h3>
          <p class="text-slate-600 text-sm">
            Para la DP, necesitamos un estado que represente "qué ciudades he visitado".
            Usamos un número binario donde el bit $i$ está encendido si la ciudad $i$ fue visitada.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-slate-900 p-6 rounded-xl text-green-400 font-mono text-sm shadow-lg">
              <div class="mb-4 border-b border-slate-700 pb-2">Ciudades: {A, B, C, D}</div>
              
              <div class="flex justify-between mb-2">
                <span>{A}</span>
                <span>0001 (1)</span>
              </div>
              <div class="flex justify-between mb-2">
                <span>{A, C}</span>
                <span>0101 (5)</span>
              </div>
              <div class="flex justify-between mb-2">
                <span>{A, B, D}</span>
                <span>1011 (11)</span>
              </div>
              <div class="flex justify-between font-bold text-white">
                <span>Todas</span>
                <span>1111 (15)</span>
              </div>
            </div>

            <div class="bg-white p-6 rounded-xl border border-slate-200 flex flex-col justify-center">
              <h4 class="font-bold text-slate-700 mb-2">Operaciones Bitwise</h4>
              <ul class="space-y-2 text-sm font-mono text-slate-600">
                <li>
                  <span class="text-purple-600">mask | (1 << i)</span> : Marcar ciudad i como visitada.
                </li>
                <li>
                  <span class="text-purple-600">mask & (1 << i)</span> : Verificar si i fue visitada.
                </li>
              </ul>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn14-4-recurrence',
      title: 'La Ecuación de Bellman-Held-Karp',
      notes: 'Estado y transición.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full space-y-8">
          <div class="bg-blue-50 p-8 rounded-xl border-l-8 border-blue-500 shadow-lg max-w-3xl w-full">
            <h3 class="text-2xl font-bold text-blue-900 mb-4">Estado DP</h3>
            <code class="text-xl font-mono text-blue-800 block mb-6">
              dp[mask][u]
            </code>
            <p class="text-blue-700 mb-4">
              Costo mínimo de visitar el conjunto de ciudades <code>mask</code>, terminando en la ciudad <code>u</code>.
            </p>
            
            <div class="border-t border-blue-200 pt-4">
              <h4 class="font-bold text-blue-900 mb-2">Transición:</h4>
              <p class="font-mono text-sm text-blue-800">
                dp[mask][u] = min( dp[mask ^ (1<<u)][v] + dist[v][u] )
              </p>
              <p class="text-xs text-blue-600 mt-2">
                Para todo <code>v</code> en <code>mask</code> tal que <code>v != u</code>.
                <br>
                (Intentamos llegar a <code>u</code> desde cualquier ciudad previa <code>v</code>).
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn14-5-code',
      title: 'Implementación (Python)',
      notes: 'Código completo.',
      contentHtml: `
        <div class="flex flex-col h-full">
          <div class="bg-yellow-500 text-white px-4 py-2 rounded-t-lg font-bold text-sm">Python: TSP con Máscaras</div>
          <div class="bg-slate-900 p-4 rounded-b-lg overflow-auto custom-scrollbar flex-1 text-xs font-mono text-yellow-100">
<pre><code class="language-python">import sys

def tsp(distancias):
    n = len(distancias)
    VISITED_ALL = (1 << n) - 1
    
    # dp[mask][last_city]
    # Inicializar con infinito
    dp = [[float('inf')] * n for _ in range(1 << n)]
    
    # Caso base: Empezar en ciudad 0
    dp[1][0] = 0 
    
    # Iterar por todas las máscaras (tamaño del subconjunto)
    for mask in range(1, 1 << n):
        for u in range(n):
            # Si u está en el conjunto mask
            if (mask & (1 << u)):
                
                # Probar ciudades previas v
                prev_mask = mask ^ (1 << u)
                if prev_mask == 0: continue
                
                for v in range(n):
                    if (prev_mask & (1 << v)):
                        dp[mask][u] = min(dp[mask][u], 
                                          dp[prev_mask][v] + distancias[v][u])
                                          
    # Costo final: Volver al origen (0) desde cualquier última ciudad
    ans = float('inf')
    for i in range(1, n):
        ans = min(ans, dp[VISITED_ALL][i] + distancias[i][0])
        
    return ans

# Matriz de adyacencia
dists = [
    [0, 10, 15, 20],
    [10, 0, 35, 25],
    [15, 35, 0, 30],
    [20, 25, 30, 0]
]
print(tsp(dists))</code></pre>
          </div>
        </div>
      `
    }
  ]
};
