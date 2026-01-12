import { Module } from '../../types';

export const PNN_MODULE_13: Module = {
  id: 'pnn-mod-13',
  title: '13. Programación Dinámica: Grafos Multietapa',
  description: 'Introducción a la Programación Dinámica y su aplicación en grafos por etapas.',
  evaluation: '0% - Práctica Guiada',
  slides: [
    {
      id: 'pnn13-1',
      title: 'Rompiendo la Maldición de la Recursividad',
      notes: 'Intro a DP.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full space-y-6">
          <div class="text-center max-w-4xl">
            <h1 class="text-3xl font-bold text-slate-900 mb-4">Programación Dinámica (DP)</h1>
            <p class="text-lg text-slate-700">
              "Quienes no recuerdan el pasado están condenados a repetirlo."
            </p>
            <p class="text-sm text-slate-500 mt-2">
              La DP es una técnica de optimización que resuelve problemas complejos dividiéndolos en subproblemas superpuestos y <strong>almacenando</strong> sus resultados.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
            <div class="bg-red-50 p-6 rounded-xl border border-red-200 flex flex-col items-center">
              <h3 class="font-bold text-red-800 mb-2">Recursividad Ingenua</h3>
              <div class="text-4xl mb-2">🐌</div>
              <p class="text-center text-sm text-red-700">
                Calcula lo mismo una y otra vez.
                <br>Fibonacci(50) ≈ 12 mil millones de operaciones.
                <br><strong>O(2^n)</strong>
              </p>
            </div>

            <div class="bg-green-50 p-6 rounded-xl border border-green-200 flex flex-col items-center">
              <h3 class="font-bold text-green-800 mb-2">Programación Dinámica</h3>
              <div class="text-4xl mb-2">⚡</div>
              <p class="text-center text-sm text-green-700">
                Calcula una vez, guarda y reutiliza.
                <br>Fibonacci(50) ≈ 50 operaciones.
                <br><strong>O(n)</strong>
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn13-2-multistage',
      title: 'Grafos Multietapa',
      notes: 'Estructura del problema.',
      contentHtml: `
        <div class="flex flex-col h-full">
          <h3 class="text-2xl font-bold text-slate-800 mb-4">El Problema de las Etapas</h3>
          <p class="text-slate-600 mb-6">
            Un grafo dirigido donde los nodos se dividen en $k$ etapas. Las aristas solo van de la etapa $i$ a la $i+1$.
            Queremos el costo mínimo de $S$ (Source) a $T$ (Target).
          </p>
          
          <div class="flex-1 bg-white p-4 rounded-xl shadow border border-slate-200 flex items-center justify-center overflow-hidden">
            <div class="flex items-center gap-8">
              <!-- Etapa 1 -->
              <div class="flex flex-col gap-2">
                <div class="text-xs font-bold text-center text-slate-400 mb-2">Etapa 1</div>
                <div class="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold shadow z-10">S</div>
              </div>

              <!-- Flechas -->
              <div class="flex flex-col justify-around h-32">
                <div class="h-0.5 w-12 bg-slate-300 rotate-12"></div>
                <div class="h-0.5 w-12 bg-slate-300 -rotate-12"></div>
              </div>

              <!-- Etapa 2 -->
              <div class="flex flex-col gap-8">
                <div class="text-xs font-bold text-center text-slate-400 mb-2">Etapa 2</div>
                <div class="w-10 h-10 bg-blue-100 text-blue-800 border border-blue-300 rounded-full flex items-center justify-center font-bold">A</div>
                <div class="w-10 h-10 bg-blue-100 text-blue-800 border border-blue-300 rounded-full flex items-center justify-center font-bold">B</div>
              </div>

              <!-- Flechas -->
              <div class="flex flex-col justify-around h-48">
                <div class="h-0.5 w-12 bg-slate-300"></div>
                <div class="h-0.5 w-12 bg-slate-300 rotate-45"></div>
                <div class="h-0.5 w-12 bg-slate-300 -rotate-45"></div>
              </div>

              <!-- Etapa 3 -->
              <div class="flex flex-col gap-8">
                <div class="text-xs font-bold text-center text-slate-400 mb-2">Etapa 3</div>
                <div class="w-10 h-10 bg-blue-100 text-blue-800 border border-blue-300 rounded-full flex items-center justify-center font-bold">C</div>
                <div class="w-10 h-10 bg-blue-100 text-blue-800 border border-blue-300 rounded-full flex items-center justify-center font-bold">D</div>
              </div>

              <!-- Flechas -->
              <div class="flex flex-col justify-around h-32">
                <div class="h-0.5 w-12 bg-slate-300 -rotate-12"></div>
                <div class="h-0.5 w-12 bg-slate-300 rotate-12"></div>
              </div>

              <!-- Etapa 4 -->
              <div class="flex flex-col gap-2">
                <div class="text-xs font-bold text-center text-slate-400 mb-2">Etapa 4</div>
                <div class="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bold shadow z-10">T</div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn13-3-method',
      title: 'Backward Approach (Hacia Atrás)',
      notes: 'Fórmula de recurrencia.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full">
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-slate-800">Pensando al Revés</h3>
            <p class="text-slate-600">
              Para saber el camino óptimo a $T$, primero preguntamos:
              <br>
              "¿Cuál es el mejor camino desde la Etapa 3 hasta $T$?"
            </p>
            
            <div class="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
              <h4 class="font-bold text-blue-900">Relación de Recurrencia</h4>
              <p class="text-sm text-blue-800 mt-2 font-mono">
                cost(i, j) = min { c(j, l) + cost(i+1, l) }
              </p>
              <p class="text-xs text-blue-600 mt-2">
                Donde:<br>
                - $j$ es un nodo en la etapa $i$.<br>
                - $l$ es un vecino de $j$ en la etapa $i+1$.<br>
                - $c(j, l)$ es el peso de la arista.
              </p>
            </div>
          </div>

          <div class="bg-white p-6 rounded-xl shadow border border-slate-200 flex flex-col items-center justify-center">
            <h4 class="font-bold text-slate-700 mb-4">Ejemplo de Decisión</h4>
            <div class="flex items-center gap-4">
              <div class="flex flex-col gap-8">
                <div class="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold">?</div>
              </div>
              
              <div class="flex flex-col gap-8">
                <div class="flex items-center gap-2">
                  <div class="h-0.5 w-8 bg-slate-400"></div>
                  <span class="text-xs font-bold bg-white border px-1 rounded">2</span>
                  <div class="w-10 h-10 bg-green-100 border border-green-500 rounded-full flex items-center justify-center text-xs">Cost:5</div>
                </div>
                <div class="flex items-center gap-2">
                  <div class="h-0.5 w-8 bg-slate-400"></div>
                  <span class="text-xs font-bold bg-white border px-1 rounded">7</span>
                  <div class="w-10 h-10 bg-red-100 border border-red-500 rounded-full flex items-center justify-center text-xs">Cost:1</div>
                </div>
              </div>
            </div>
            <div class="mt-4 text-center text-sm">
              Opción A: 2 + 5 = 7 <span class="text-green-600 font-bold">(Ganador)</span>
              <br>
              Opción B: 7 + 1 = 8
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn13-4-bst',
      title: 'BST Óptimos',
      notes: 'Minimizar costo de búsqueda.',
      contentHtml: `
        <div class="flex flex-col h-full">
          <h3 class="text-xl font-bold text-slate-800 mb-4">Árboles de Búsqueda Óptimos</h3>
          <p class="text-slate-600 mb-4 text-sm">
            Si sabemos que ciertos elementos se buscan con más frecuencia que otros, podemos estructurar el árbol para que los más populares estén cerca de la raíz.
          </p>
          
          <div class="grid grid-cols-2 gap-8 flex-1">
            <div class="bg-white p-4 rounded border border-slate-200">
              <h4 class="font-bold text-slate-700 mb-2">Frecuencias</h4>
              <table class="w-full text-sm text-left">
                <thead class="bg-slate-100">
                  <tr><th class="p-2">Clave</th><th class="p-2">Frecuencia</th></tr>
                </thead>
                <tbody>
                  <tr class="border-b"><td>A</td><td>10%</td></tr>
                  <tr class="border-b"><td>B</td><td>50%</td></tr>
                  <tr class="border-b"><td>C</td><td>40%</td></tr>
                </tbody>
              </table>
              <p class="text-xs text-slate-500 mt-2">
                'B' debería ser la raíz, aunque alfabéticamente esté en medio.
              </p>
            </div>

            <div class="bg-white p-4 rounded border border-slate-200 flex items-center justify-center">
              <div class="relative w-32 h-32">
                <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold shadow z-10">B</div>
                <div class="absolute top-16 left-0 w-10 h-10 bg-slate-200 text-slate-700 rounded-full flex items-center justify-center font-bold">A</div>
                <div class="absolute top-16 right-0 w-10 h-10 bg-slate-200 text-slate-700 rounded-full flex items-center justify-center font-bold">C</div>
                
                <svg class="absolute inset-0 w-full h-full pointer-events-none">
                  <line x1="64" y1="20" x2="20" y2="64" stroke="#cbd5e1" stroke-width="2" />
                  <line x1="64" y1="20" x2="108" y2="64" stroke="#cbd5e1" stroke-width="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn13-5-code',
      title: 'Implementación (Python)',
      notes: 'Código DP.',
      contentHtml: `
        <div class="flex flex-col h-full">
          <div class="bg-yellow-500 text-white px-4 py-2 rounded-t-lg font-bold text-sm">Python: Grafo Multietapa</div>
          <div class="bg-slate-900 p-4 rounded-b-lg overflow-auto custom-scrollbar flex-1 text-xs font-mono text-yellow-100">
<pre><code class="language-python">import sys

def shortest_dist(graph, N):
    # dist[i] almacenará la distancia mínima desde el nodo i hasta el destino (N-1)
    dist = [0] * N
    dist[N-1] = 0 # Distancia del destino a sí mismo es 0

    # Recorremos los nodos en orden inverso (Backward Approach)
    # Asumimos que los nodos están numerados topológicamente
    for i in range(N-2, -1, -1):
        dist[i] = sys.maxsize
        
        # Revisar todas las aristas que salen de i
        for v, weight in graph[i]:
            # Aplicar la ecuación de recurrencia
            if dist[v] != sys.maxsize:
                dist[i] = min(dist[i], weight + dist[v])

    return dist[0]

# Grafo representado como lista de adyacencia: nodo -> [(vecino, peso)]
# 0: S, 1-2: Etapa 2, 3-4: Etapa 3, 5: T
g = {
    0: [(1, 1), (2, 2)],
    1: [(3, 4), (4, 3)],
    2: [(3, 2), (4, 5)],
    3: [(5, 6)],
    4: [(5, 2)],
    5: []
}
print(shortest_dist(g, 6))</code></pre>
          </div>
        </div>
      `
    }
  ]
};
