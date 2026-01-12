import { Module } from '../../types';

export const PNN_MODULE_9: Module = {
  id: 'pnn-mod-9',
  title: '9. Algoritmos Voraces: Árboles de Expansión Mínima (MST)',
  description: 'Conectando redes al menor costo posible usando los algoritmos de Prim y Kruskal.',
  evaluation: '10% - Implementación y Taller',
  slides: [
    {
      id: 'pnn9-1',
      title: 'El Problema de la Conectividad',
      notes: 'Introducción al problema del MST.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full space-y-6">
          <div class="text-center max-w-4xl">
            <h1 class="text-3xl font-bold text-slate-900 mb-4">Árbol de Expansión Mínima (MST)</h1>
            <p class="text-lg text-slate-700">
              Imagina que eres un ingeniero encargado de conectar varias ciudades con fibra óptica.
              Quieres que todas las ciudades estén conectadas entre sí, pero el cable es muy costoso.
              ¿Cómo conectas todo usando la menor cantidad de cable posible?
            </p>
          </div>
          
          <div class="bg-white p-6 rounded-xl shadow-lg border border-slate-200 max-w-2xl w-full flex flex-col items-center">
            <div class="flex justify-center gap-8 mb-4">
              <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">A</div>
              <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">B</div>
              <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">C</div>
            </div>
            <p class="text-sm text-slate-500 text-center">
              Un <strong>MST</strong> es un subgrafo que conecta todos los vértices sin ciclos y con el peso total mínimo.
            </p>
          </div>
        </div>
      `
    },
    {
      id: 'pnn9-2-definitions',
      title: 'Definiciones Formales',
      notes: 'Conceptos clave de grafos para MST.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full">
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-slate-800">Conceptos Clave</h3>
            
            <div class="bg-slate-50 p-4 rounded border-l-4 border-blue-500">
              <h4 class="font-bold text-blue-900">Grafo Ponderado</h4>
              <p class="text-sm text-blue-800">Un grafo donde cada arista tiene un valor numérico (peso, costo, distancia).</p>
            </div>

            <div class="bg-slate-50 p-4 rounded border-l-4 border-green-500">
              <h4 class="font-bold text-green-900">Árbol de Expansión (Spanning Tree)</h4>
              <p class="text-sm text-green-800">Un subgrafo que incluye <strong>todos</strong> los vértices del grafo original y es un árbol (conexo y sin ciclos).</p>
            </div>

            <div class="bg-slate-50 p-4 rounded border-l-4 border-purple-500">
              <h4 class="font-bold text-purple-900">MST (Minimum Spanning Tree)</h4>
              <p class="text-sm text-purple-800">El árbol de expansión cuya suma de pesos de aristas es la mínima posible.</p>
            </div>
          </div>

          <div class="bg-white p-6 rounded-xl shadow border border-slate-200 flex flex-col items-center justify-center">
            <h4 class="font-bold text-slate-700 mb-4">Propiedad del Corte (Cut Property)</h4>
            <p class="text-sm text-slate-600 text-center mb-4">
              Si divides los vértices en dos grupos (un corte), la arista más barata que cruza de un grupo al otro <strong>siempre</strong> pertenece al MST.
            </p>
            <div class="w-full h-32 bg-slate-100 rounded border border-dashed border-slate-400 relative flex items-center justify-center">
              <div class="absolute left-4 w-8 h-8 bg-blue-400 rounded-full"></div>
              <div class="absolute right-4 w-8 h-8 bg-green-400 rounded-full"></div>
              <div class="h-1 bg-slate-300 w-full absolute top-1/2"></div>
              <div class="h-1 bg-red-500 w-full absolute top-1/2 transform rotate-12 z-10" style="width: 60%"></div>
              <span class="absolute top-1/2 bg-white px-1 text-xs font-bold text-red-600 border border-red-200 rounded z-20">Arista Mínima</span>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn9-3-prim',
      title: 'Algoritmo de Prim',
      notes: 'Explicación del algoritmo de Prim.',
      contentHtml: `
        <div class="flex flex-col h-full space-y-6">
          <h3 class="text-2xl font-bold text-slate-800">Algoritmo de Prim: El Conquistador</h3>
          <p class="text-slate-600">
            Prim crece el MST desde un nodo inicial, añadiendo siempre el nodo más cercano que aún no ha sido visitado.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-white p-6 rounded-lg shadow border-t-4 border-indigo-500">
              <h4 class="font-bold text-indigo-900 mb-2">Estrategia</h4>
              <ol class="list-decimal list-inside text-sm text-slate-700 space-y-2">
                <li>Empieza en un nodo arbitrario.</li>
                <li>Mantén una lista de las aristas que conectan nodos visitados con nodos no visitados.</li>
                <li>Elige la arista más barata de esa lista.</li>
                <li>Añade el nuevo nodo y repite.</li>
              </ol>
            </div>

            <div class="bg-slate-100 p-6 rounded-lg border border-slate-300">
              <h4 class="font-bold text-slate-700 mb-2">Estructura de Datos</h4>
              <p class="text-sm text-slate-600">
                Usa una <strong>Priority Queue (Min-Heap)</strong> para encontrar eficientemente la arista mínima en cada paso.
                <br><br>
                <strong>Complejidad:</strong> $O(E \\log V)$
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn9-4-kruskal',
      title: 'Algoritmo de Kruskal',
      notes: 'Explicación del algoritmo de Kruskal.',
      contentHtml: `
        <div class="flex flex-col h-full space-y-6">
          <h3 class="text-2xl font-bold text-slate-800">Algoritmo de Kruskal: El Constructor de Puentes</h3>
          <p class="text-slate-600">
            Kruskal ordena todas las aristas por peso y las añade una por una, siempre que no formen un ciclo.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-white p-6 rounded-lg shadow border-t-4 border-orange-500">
              <h4 class="font-bold text-orange-900 mb-2">Estrategia</h4>
              <ol class="list-decimal list-inside text-sm text-slate-700 space-y-2">
                <li>Ordena todas las aristas de menor a mayor peso.</li>
                <li>Itera sobre las aristas ordenadas.</li>
                <li>Si la arista conecta dos componentes diferentes, añádela.</li>
                <li>Si conecta nodos del mismo componente (ciclo), descártala.</li>
              </ol>
            </div>

            <div class="bg-slate-100 p-6 rounded-lg border border-slate-300">
              <h4 class="font-bold text-slate-700 mb-2">Estructura de Datos</h4>
              <p class="text-sm text-slate-600">
                Usa <strong>Union-Find (Disjoint Set)</strong> para detectar ciclos y unir componentes rápidamente.
                <br><br>
                <strong>Complejidad:</strong> $O(E \\log E)$ o $O(E \\log V)$
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn9-5-comparison',
      title: 'Prim vs Kruskal',
      notes: 'Cuándo usar cuál.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full w-full">
          <h3 class="text-2xl font-bold text-slate-800 mb-8">¿Cuál elegir?</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            
            <div class="bg-indigo-50 p-6 rounded-xl border-2 border-indigo-200 text-center">
              <h4 class="text-xl font-bold text-indigo-900 mb-2">Prim</h4>
              <p class="text-indigo-800 font-bold mb-4">Mejor para Grafos Densos</p>
              <p class="text-sm text-slate-600">
                Cuando hay muchas aristas ($E \\approx V^2$).
                Prim explora desde un nodo, aprovechando la conectividad local.
              </p>
            </div>

            <div class="bg-orange-50 p-6 rounded-xl border-2 border-orange-200 text-center">
              <h4 class="text-xl font-bold text-orange-900 mb-2">Kruskal</h4>
              <p class="text-orange-800 font-bold mb-4">Mejor para Grafos Dispersos</p>
              <p class="text-sm text-slate-600">
                Cuando hay pocas aristas ($E \\approx V$).
                Es más simple de implementar si ya tienes las aristas ordenadas o si el grafo es muy disperso.
              </p>
            </div>

          </div>
        </div>
      `
    },
    {
      id: 'pnn9-6-code-prim',
      title: 'Código: Prim (Python)',
      notes: 'Implementación de Prim.',
      contentHtml: `
        <div class="flex flex-col h-full">
          <div class="bg-indigo-600 text-white px-4 py-2 rounded-t-lg font-bold text-sm">Python (Prim con Heap)</div>
          <div class="bg-slate-900 p-4 rounded-b-lg overflow-auto custom-scrollbar flex-1 text-xs font-mono text-indigo-100">
<pre><code class="language-python">import heapq

def prim(n, edges):
    # edges es lista de (u, v, peso)
    adj = {i: [] for i in range(n)}
    for u, v, w in edges:
        adj[u].append((v, w))
        adj[v].append((u, w))
        
    visited = set()
    min_heap = [(0, 0)] # (costo, nodo_inicial)
    mst_cost = 0
    
    while len(visited) < n and min_heap:
        cost, u = heapq.heappop(min_heap)
        
        if u in visited:
            continue
            
        visited.add(u)
        mst_cost += cost
        
        for v, w in adj[u]:
            if v not in visited:
                heapq.heappush(min_heap, (w, v))
                
    return mst_cost</code></pre>
          </div>
        </div>
      `
    },
    {
      id: 'pnn9-7-code-kruskal',
      title: 'Código: Kruskal (Python)',
      notes: 'Implementación de Kruskal.',
      contentHtml: `
        <div class="flex flex-col h-full">
          <div class="bg-orange-600 text-white px-4 py-2 rounded-t-lg font-bold text-sm">Python (Kruskal con Union-Find)</div>
          <div class="bg-slate-900 p-4 rounded-b-lg overflow-auto custom-scrollbar flex-1 text-xs font-mono text-orange-100">
<pre><code class="language-python">class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
    
    def find(self, i):
        if self.parent[i] != i:
            self.parent[i] = self.find(self.parent[i])
        return self.parent[i]
        
    def union(self, i, j):
        root_i = self.find(i)
        root_j = self.find(j)
        if root_i != root_j:
            self.parent[root_i] = root_j
            return True
        return False

def kruskal(n, edges):
    # edges es lista de (u, v, peso)
    edges.sort(key=lambda x: x[2]) # Ordenar por peso
    uf = UnionFind(n)
    mst_cost = 0
    edges_count = 0
    
    for u, v, w in edges:
        if uf.union(u, v):
            mst_cost += w
            edges_count += 1
            
    return mst_cost</code></pre>
          </div>
        </div>
      `
    },
    {
      id: 'pnn9-8-summary',
      title: 'Resumen',
      notes: 'Conclusión.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center space-y-8">
          <h2 class="text-3xl font-bold text-slate-800">Conectividad Optimizada</h2>
          <p class="text-xl text-slate-600 max-w-2xl">
            Hemos aprendido a conectar redes minimizando costos.
            Tanto Prim como Kruskal son ejemplos perfectos de cómo la estrategia <strong>Greedy</strong> puede encontrar la solución óptima global en estructuras matroides como los grafos.
          </p>
          <div class="mt-8">
            <p class="text-slate-500 italic">Próxima clase: Caminos más cortos (Dijkstra).</p>
          </div>
        </div>
      `
    }
  ]
};
