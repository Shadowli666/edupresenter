import { Module } from '../../types';

export const PNN_MODULE_10: Module = {
  id: 'pnn-mod-10',
  title: '10. Algoritmos Voraces: Caminos Más Cortos (Dijkstra)',
  description: 'Encuentra la ruta óptima en grafos ponderados utilizando el algoritmo de Dijkstra.',
  evaluation: '0% - Práctica Guiada',
  slides: [
    {
      id: 'pnn10-1',
      title: 'El GPS Algorítmico',
      notes: 'Introducción al problema SSSP.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full space-y-6">
          <div class="text-center max-w-4xl">
            <h1 class="text-3xl font-bold text-slate-900 mb-4">Caminos Más Cortos (Dijkstra)</h1>
            <p class="text-lg text-slate-700">
              Cuando usas tu GPS para ir a casa, no quieres dar vueltas innecesarias.
              Quieres la ruta que minimice el tiempo o la distancia total.
              El algoritmo de <strong>Dijkstra</strong> es la base de cómo las computadoras resuelven este problema.
            </p>
          </div>
          
          <div class="bg-white p-6 rounded-xl shadow-lg border border-slate-200 max-w-2xl w-full flex flex-col items-center">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold shadow">A</div>
              <div class="h-1 w-16 bg-slate-300 relative">
                <span class="absolute -top-4 left-1/2 transform -translate-x-1/2 text-xs font-bold text-slate-500">5km</span>
              </div>
              <div class="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold">B</div>
              <div class="h-1 w-16 bg-slate-300 relative">
                <span class="absolute -top-4 left-1/2 transform -translate-x-1/2 text-xs font-bold text-slate-500">3km</span>
              </div>
              <div class="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold shadow">C</div>
            </div>
            <p class="text-sm text-slate-500 text-center">
              Objetivo: Encontrar el camino de costo mínimo desde un Origen a todos los demás nodos.
            </p>
          </div>
        </div>
      `
    },
    {
      id: 'pnn10-2-concept',
      title: 'La Estrategia de Exploración',
      notes: 'Explicación conceptual de Dijkstra.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full">
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-slate-800">¿Cómo piensa Dijkstra?</h3>
            <p class="text-slate-600">
              Es un algoritmo <strong>Voraz (Greedy)</strong>.
              En cada paso, elige el nodo no visitado que está <strong>más cerca</strong> del origen conocido hasta el momento.
            </p>
            
            <div class="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
              <h4 class="font-bold text-blue-900">Concepto Clave: Relajación</h4>
              <p class="text-sm text-blue-800 mt-2">
                Imagina que tienes una cuerda tensa entre dos puntos. Si encuentras un camino más corto, la cuerda se "relaja" (se destensa).
                <br>
                Matemáticamente:
                <br>
                <code>Si dist[u] + peso(u,v) < dist[v]</code>
                <br>
                Entonces actualizamos: <code>dist[v] = dist[u] + peso(u,v)</code>
              </p>
            </div>
          </div>

          <div class="bg-white p-6 rounded-xl shadow border border-slate-200 flex flex-col items-center justify-center">
            <h4 class="font-bold text-slate-700 mb-4">Visualización</h4>
            <div class="relative w-64 h-64">
              <!-- Centro -->
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold z-10">S</div>
              
              <!-- Ondas de expansión -->
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-green-300 rounded-full opacity-50"></div>
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-green-200 rounded-full opacity-30"></div>
              
              <!-- Nodos -->
              <div class="absolute top-10 left-10 w-8 h-8 bg-slate-300 rounded-full flex items-center justify-center text-xs">A</div>
              <div class="absolute bottom-10 right-10 w-8 h-8 bg-slate-300 rounded-full flex items-center justify-center text-xs">B</div>
            </div>
            <p class="mt-4 text-center text-slate-600 text-xs">
              Dijkstra explora en "ondas" de distancia creciente.
            </p>
          </div>
        </div>
      `
    },
    {
      id: 'pnn10-3-trace',
      title: 'Traza Paso a Paso',
      notes: 'Ejemplo numérico.',
      contentHtml: `
        <div class="flex flex-col h-full">
          <h3 class="text-xl font-bold text-slate-800 mb-4">Ejemplo: Origen A</h3>
          
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-white p-4 rounded border flex justify-center items-center">
               <!-- Grafo simple -->
               <div class="flex flex-col gap-4">
                 <div class="flex gap-8">
                   <div class="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">A</div>
                   <div class="flex flex-col items-center justify-center"><div class="h-0.5 w-12 bg-slate-400"></div><span class="text-xs">4</span></div>
                   <div class="w-10 h-10 bg-slate-200 text-slate-700 rounded-full flex items-center justify-center font-bold">B</div>
                 </div>
                 <div class="flex gap-8 ml-8">
                   <div class="flex flex-col items-center justify-center rotate-45"><div class="h-0.5 w-12 bg-slate-400"></div><span class="text-xs">2</span></div>
                   <div class="flex flex-col items-center justify-center -rotate-45"><div class="h-0.5 w-12 bg-slate-400"></div><span class="text-xs">1</span></div>
                 </div>
                 <div class="flex gap-8 justify-center">
                   <div class="w-10 h-10 bg-slate-200 text-slate-700 rounded-full flex items-center justify-center font-bold">C</div>
                 </div>
               </div>
            </div>

            <div class="space-y-2 text-sm">
              <div class="bg-slate-100 p-2 rounded border">
                <strong>Inicio:</strong>
                <br>dist(A)=0, dist(B)=∞, dist(C)=∞
                <br>PQ: [(0, A)]
              </div>
              <div class="bg-slate-100 p-2 rounded border">
                <strong>Paso 1 (Extraer A):</strong>
                <br>Vecinos de A: B(4), C(2).
                <br>dist(B) = min(∞, 0+4) = 4
                <br>dist(C) = min(∞, 0+2) = 2
                <br>PQ: [(2, C), (4, B)]
              </div>
              <div class="bg-slate-100 p-2 rounded border">
                <strong>Paso 2 (Extraer C - Mínimo):</strong>
                <br>Vecinos de C: B(1).
                <br>dist(B) = min(4, 2+1) = 3  <span class="text-green-600 font-bold">¡Mejora!</span>
                <br>PQ: [(3, B), (4, B_antiguo)]
              </div>
              <div class="bg-green-100 p-2 rounded border border-green-300 font-bold">
                Final: A=0, C=2, B=3.
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn10-4-code',
      title: 'Implementación (Python)',
      notes: 'Código con heapq.',
      contentHtml: `
        <div class="flex flex-col h-full">
          <div class="bg-yellow-500 text-white px-4 py-2 rounded-t-lg font-bold text-sm">Python (con heapq)</div>
          <div class="bg-slate-900 p-4 rounded-b-lg overflow-auto custom-scrollbar flex-1 text-xs font-mono text-yellow-100">
<pre><code class="language-python">import heapq

def dijkstra(grafo, origen):
    # Inicialización
    distancias = {nodo: float('inf') for nodo in grafo}
    distancias[origen] = 0
    pq = [(0, origen)] # (distancia, nodo)
    
    while pq:
        d_actual, u = heapq.heappop(pq)
        
        # Optimización: Si encontramos un camino más largo del ya conocido, ignorar
        if d_actual > distancias[u]:
            continue
            
        for vecino, peso in grafo[u].items():
            distancia = d_actual + peso
            
            # Relajación
            if distancia < distancias[vecino]:
                distancias[vecino] = distancia
                heapq.heappush(pq, (distancia, vecino))
                
    return distancias

# Grafo del ejemplo
g = {
    'A': {'B': 4, 'C': 2},
    'B': {},
    'C': {'B': 1}
}
print(dijkstra(g, 'A')) # {'A': 0, 'C': 2, 'B': 3}</code></pre>
          </div>
        </div>
      `
    },
    {
      id: 'pnn10-5-limitations',
      title: 'Limitaciones y Complejidad',
      notes: 'Pesos negativos y Big O.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full">
          <div class="bg-white p-6 rounded-xl shadow border-t-4 border-red-500">
            <h4 class="font-bold text-red-900 mb-4">¡Cuidado con los Negativos!</h4>
            <p class="text-slate-600 text-sm mb-4">
              Dijkstra <strong>NO funciona</strong> si hay aristas con peso negativo.
              <br>
              Una vez que Dijkstra marca un nodo como "visitado" (extraído del Heap), asume que ha encontrado el camino óptimo. Una arista negativa futura podría contradecir esto.
            </p>
            <p class="text-xs text-slate-500 italic">
              Solución: Algoritmo de Bellman-Ford.
            </p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow border-t-4 border-blue-500">
            <h4 class="font-bold text-blue-900 mb-4">Complejidad</h4>
            <div class="text-4xl font-mono font-bold text-blue-600 mb-2">O(E log V)</div>
            <p class="text-slate-600 text-sm">
              Usando un Min-Heap binario.
              <br>
              $E$: Número de aristas (relajaciones).
              <br>
              $\\log V$: Costo de actualizar el Heap.
            </p>
          </div>
        </div>
      `
    },
    {
      id: 'pnn10-6-summary',
      title: 'Resumen',
      notes: 'Conclusión.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center space-y-8">
          <h2 class="text-3xl font-bold text-slate-800">El Estándar de Oro</h2>
          <p class="text-xl text-slate-600 max-w-2xl">
            Dijkstra es uno de los algoritmos más importantes de la historia.
            Es eficiente, elegante y resuelve un problema omnipresente en la computación moderna.
          </p>
          <div class="mt-8">
            <p class="text-slate-500 italic">Próxima clase: Programación Dinámica (Rompiendo la maldición de la recursividad).</p>
          </div>
        </div>
      `
    }
  ]
};
