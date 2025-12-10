import { Module } from '../../types';

export const PNN_MODULE_10: Module = {
  id: 'pnn-mod-10',
  title: '10. Algoritmos Voraces: Caminos Más Cortos (Dijkstra)',
  description: 'Aplicación del algoritmo de Dijkstra para encontrar el camino más corto desde un origen único en grafos.',
  evaluation: '0% - Práctica Guiada',
  slides: [
    {
      id: 'pnn10-1',
      title: '1. Repaso: Algoritmos Voraces y Grafos Ponderados',
      notes: 'Recordar los conceptos de Greedy y grafos ponderados como base para Dijkstra.',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700 text-lg">
            Hemos explorado los <strong>Algoritmos Voraces (Greedy)</strong>, que toman decisiones localmente óptimas. Hoy, aplicaremos esta poderosa estrategia a un problema fundamental en <strong>Grafos Ponderados</strong>: encontrar los caminos más cortos.
          </p>
          <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
            <h5 class="font-bold text-blue-900">Grafos Ponderados</h5>
            <p class="text-sm text-blue-800 mt-2">
              Un grafo ponderado es aquel donde cada arista tiene un "peso" o "costo" asociado (ej. distancia, tiempo, precio). Queremos minimizar la suma de estos pesos en un camino.
            </p>
          </div>
          <p class="text-gray-700 mt-4">La clave es encontrar la secuencia de aristas que conectan dos nodos con el menor costo total.</p>
        </div>
      `
    },
    {
      id: 'pnn10-2',
      title: '2. Problema: El Camino Más Corto desde un Origen Único (SSSP)',
      notes: 'Definición del problema y sus aplicaciones.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">La Ruta Óptima en un Laberinto de Costos</h3>
        <p class="text-gray-600 mb-4">El problema del <strong>Camino Más Corto desde un Origen Único (SSSP - Single Source Shortest Path)</strong> consiste en encontrar la ruta con el menor costo total desde un vértice de origen dado a todos los demás vértices accesibles en un grafo.</p>
        <div class="bg-green-50 border-l-4 border-green-500 p-4 my-4">
          <h5 class="font-bold text-green-900">Aplicaciones Reales</h5>
          <ul class="list-disc pl-5 text-sm text-green-800 mt-2">
            <li><strong>GPS y Mapas:</strong> Encontrar la ruta más rápida o más corta entre dos puntos.</li>
            <li><strong>Enrutamiento de Redes:</strong> Determinar la mejor ruta para paquetes de datos en internet.</li>
            <li><strong>Logística:</strong> Optimizar rutas de entrega.</li>
            <li><strong>Inteligencia Artificial:</strong> Planificación de movimientos en juegos.</li>
          </ul>
        </div>
        <div class="flex justify-center my-4"><div class="mermaid">graph LR; A[Origen] --4--> B[Nodo 1]; A --2--> C[Nodo 2]; B --1--> D[Destino]; C --5--> D;</div></div>
        <p class="text-sm text-gray-700 mt-4">El reto es considerar todas las rutas posibles y elegir la de menor peso.</p>
      `
    },
    {
      id: 'pnn10-3',
      title: '3. Algoritmo de Dijkstra: Estrategia Voraz',
      notes: 'Explicación de Dijkstra como algoritmo Greedy y sus características.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">La Elección del Nodo Más Cercano</h3>
        <p class="text-gray-600 mb-4">El <strong>Algoritmo de Dijkstra</strong> es un algoritmo voraz que resuelve el problema SSSP para grafos con <strong>pesos de aristas no negativos</strong>.</p>
        <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 my-4">
          <h5 class="font-bold text-yellow-900">¿Cómo Funciona?</h5>
          <p class="text-sm text-yellow-800 mt-2">
            Comienza en el nodo origen y expande la búsqueda al nodo más cercano aún no visitado. En cada paso, "relaja" (actualiza) las distancias a los vecinos del nodo seleccionado si encuentra un camino más corto.
          </p>
        </div>
        <div class="space-y-3">
          <div class="bg-white p-3 rounded shadow-sm text-sm">Usa una <strong>Cola de Prioridad (Min-Heap)</strong> para seleccionar eficientemente el nodo con la menor distancia actual.</div>
          <div class="bg-white p-3 rounded shadow-sm text-sm">Necesita mantener un registro de la distancia más corta encontrada hasta ahora para cada nodo, y su predecesor.</div>
        </div>
        <p class="text-sm text-red-700 mt-4"><strong>Limitación:</strong> No funciona correctamente con aristas de peso negativo.</p>
      `
    },
    {
      id: 'pnn10-4',
      title: '4. Dijkstra: Inicialización y Relajación',
      notes: 'Detallar los pasos fundamentales del algoritmo.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Preparación y Actualización de Distancias</h3>
        <p class="text-gray-600 mb-4">Antes de empezar a explorar el grafo, necesitamos inicializar algunas estructuras, y el corazón del algoritmo es la "relajación" de aristas.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
            <h5 class="font-bold text-blue-900 mb-2">Paso 1: Inicialización</h5>
            <ul class="list-disc pl-5 text-sm text-blue-800">
              <li>Para el nodo origen <code>s</code>: <code>dist[s] = 0</code>.</li>
              <li>Para todos los demás nodos <code>v</code>: <code>dist[v] = Infinito</code>.</li>
              <li><code>prev[v] = null</code> para todos los nodos.</li>
              <li>Añadir todos los nodos a un conjunto de "no visitados" o a una cola de prioridad.</li>
            </ul>
          </div>
          <div class="bg-white p-4 rounded-lg border-l-4 border-green-500 shadow-sm">
            <h5 class="font-bold text-green-900 mb-2">Paso 2: Relajación de Aristas</h5>
            <p class="text-sm text-green-800">
              Cuando visitamos un nodo <code>u</code> y exploramos una arista <code>(u, v)</code> con peso <code>w</code>:
            </p>
            <div class="bg-slate-100 p-2 rounded text-xs font-mono mt-2">
              <pre><code>
SI dist[u] + w < dist[v]:
  dist[v] = dist[u] + w
  prev[v] = u
              </code></pre>
            </div>
            <p class="text-xs text-green-800 mt-2">Esta es la actualización clave que busca caminos más cortos.</p>
          </div>
        </div>
      `
    },
    {
      id: 'pnn10-5',
      title: '5. Algoritmo de Dijkstra (Pseudocódigo)',
      notes: 'Pseudocódigo del algoritmo, destacando el uso de la cola de prioridad.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Dijkstra: Paso a Paso</h3>
        <p class="text-gray-600 mb-4">El algoritmo principal utiliza una cola de prioridad para extraer siempre el nodo con la distancia más corta conocida.</p>
        <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
          <h5 class="text-gray-400 mb-2">// Pseudocódigo para el Algoritmo de Dijkstra</h5>
          <pre><code>
FUNCIÓN dijkstra(Grafo G, Vertice origen):
  crear Min-Heap Q // Almacena pares (distancia, vertice)
  crear Mapa distancias // distancias[v] = dist más corta a v
  crear Mapa predecesores // predecesores[v] = vertice anterior en el camino

  PARA cada vertice v en G:
    distancias[v] = INFINITO
    predecesores[v] = NULO
  
  distancias[origen] = 0
  insertar(Q, (0, origen)) // Insertar origen con distancia 0
  
  MIENTRAS Q no está vacío:
    (dist_u, u) = extraer_min(Q) // Extraer el vertice con la menor distancia actual
    
    SI dist_u > distancias[u]: // Si ya encontramos un camino más corto, ignorar
      CONTINUAR
      
    PARA cada vecino v de u Y peso_arista(u, v):
      distancia_alternativa = distancias[u] + peso_arista(u, v)
      
      SI distancia_alternativa < distancias[v]:
        distancias[v] = distancia_alternativa
        predecesores[v] = u
        insertar(Q, (distancias[v], v)) // Actualizar distancia en Q
          
  RETORNAR distancias, predecesores
          </code></pre>
        </div>
      `
    },
    {
      id: 'pnn10-6',
      title: '6. Traza de Dijkstra (Ejemplo Visual)',
      notes: 'Demostración paso a paso del algoritmo de Dijkstra.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Siguiendo la Ruta más Corta</h3>
        <p class="text-gray-600 mb-4">Apliquemos Dijkstra desde el nodo A en este grafo. Las distancias iniciales son A=0, B=∞, C=∞, D=∞.</p>
        <div class="grid md:grid-cols-2 gap-6 items-start">
            <div class="bg-slate-50 p-4 rounded-xl border flex justify-center">
              <div class="mermaid">
                graph LR
                  A((A)) --2--> B((B))
                  A --5--> C((C))
                  B --1--> C
                  B --4--> D((D))
                  C --1--> D
              </div>
            </div>

            <div class="bg-white p-4 rounded-xl border text-xs font-mono overflow-x-auto">
              <p class="font-bold mb-2">Tabla de distancias (resumen)</p>
              <pre>
Iteración | Nodo elegido | dist(A) dist(B) dist(C) dist(D)
----------------------------------------------------------
Inicial   |    -         |   0      ∞       ∞       ∞
1         |    A         |   0      2       5       ∞
2         |    B         |   0      2       3       6
3         |    C         |   0      2       3       4
4         |    D         |   0      2       3       4
              </pre>
            </div>
        </div>
        <div class="bg-white rounded-lg border p-4 mt-3">
          <h5 class="font-semibold text-slate-800 mb-2">Caminos Más Cortos Resultantes</h5>
          <ul class="list-disc list-inside text-xs text-slate-700">
            <li>A &rarr; A: 0</li>
            <li>A &rarr; B: A &rarr; B (costo 2)</li>
            <li>A &rarr; C: A &rarr; B &rarr; C (costo 3)</li>
            <li>A &rarr; D: A &rarr; B &rarr; C &rarr; D (costo 4)</li>
          </ul>
        </div>
      `
    },
    {
      id: 'pnn10-7',
      title: '7. Práctica: Implementación de Dijkstra (C++/Python)',
      notes: 'Código completo para Dijkstra.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Implementando el Algoritmo de Dijkstra</h3>
        <p class="text-gray-600 mb-4">Aquí se muestra una implementación de Dijkstra utilizando estructuras de datos estándar.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <h5 class="text-gray-400 mb-2">// C++</h5>
            <pre><code class="language-cpp">
#include <iostream>
#include <vector>
#include <queue>    // Para std::priority_queue
#include <limits>   // Para std::numeric_limits

const int INF = std::numeric_limits<int>::max();

void dijkstra(const std::vector<std::vector<std::pair<int, int>>>& adj, int origen) {
    int V = adj.size();
    std::vector<int> dist(V, INF);
    std::vector<int> pred(V, -1); // Predecesores para reconstruir camino
    
    // Cola de prioridad: pair<distancia, vertice>
    std::priority_queue<std::pair<int, int>, 
                        std::vector<std::pair<int, int>>, 
                        std::greater<std::pair<int, int>>> pq;
    
    dist[origen] = 0;
    pq.push({0, origen});

    while (!pq.empty()) {
        int d_u = pq.top().first;
        int u = pq.top().second;
        pq.pop();

        if (d_u > dist[u]) continue; // Ya encontramos un camino más corto

        for (const auto& arista : adj[u]) {
            int v = arista.first;
            int peso = arista.second;
            
            if (dist[u] + peso < dist[v]) {
                dist[v] = dist[u] + peso;
                pred[v] = u;
                pq.push({dist[v], v});
            }
        }
    }
    // (Código para imprimir distancias y caminos iría aquí)
}
// int main() {
//    // Grafo del ejemplo: A=0, B=1, C=2, D=3
//    std::vector<std::vector<std::pair<int, int>>> adj = {
//        {{1, 2}, {2, 5}}, // A
//        {{0, 2}, {2, 1}, {3, 4}}, // B
//        {{0, 5}, {1, 1}, {3, 1}}, // C
//        {{1, 4}, {2, 1}}  // D
//    };
//    dijkstra(adj, 0); // Desde A
// }
            </code></pre>
          </div>
          <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <h5 class="text-gray-400 mb-2"># Python</h5>
            <pre><code class="language-python">
import heapq

def dijkstra(grafo, origen):
    distancias = {nodo: float('infinity') for nodo in grafo}
    distancias[origen] = 0
    predecesores = {nodo: None for nodo in grafo}
    
    pq = [(0, origen)] # Cola de prioridad: (distancia, nodo)

    while pq:
        dist_u, u = heapq.heappop(pq)

        if dist_u > distancias[u]:
            continue

        for vecino, peso in grafo[u].items():
            distancia_alternativa = distancias[u] + peso
            
            if distancia_alternativa < distancias[vecino]:
                distancias[vecino] = distancia_alternativa
                predecesores[vecino] = u
                heapq.heappush(pq, (distancia_alternativa, vecino))
                
    return distancias, predecesores

# grafo = {
#    'A': {'B': 2, 'C': 5},
#    'B': {'A': 2, 'C': 1, 'D': 4},
#    'C': {'A': 5, 'B': 1, 'D': 1},
#    'D': {'B': 4, 'C': 1}
# }
# dist, pred = dijkstra(grafo, 'A')
# print(dist) # {'A': 0, 'B': 2, 'C': 3, 'D': 4}
            </code></pre>
          </div>
        </div>
      `
    },
    {
      id: 'pnn10-8',
      title: '8. Análisis de Complejidad de Dijkstra',
      notes: 'Análisis de tiempo y espacio, enfatizando la importancia de la cola de prioridad.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Eficiencia del Buscador de Rutas</h3>
        <p class="text-gray-600 mb-4">La complejidad de Dijkstra depende en gran medida de cómo se implementa la cola de prioridad y de la representación del grafo.</p>
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <h5 class="font-bold text-blue-900">Con Cola de Prioridad (Min-Heap) y Lista de Adyacencia</h5>
          <p class="text-sm text-blue-800 mt-2">
            La complejidad temporal es típicamente <strong>O(E log V)</strong> o <strong>O(E + V log V)</strong>. Donde <code>E</code> es el número de aristas y <code>V</code> es el número de vértices.
          </p>
        </div>
        <div class="grid md:grid-cols-2 gap-6 mt-4">
            <div class="bg-slate-50 p-4 rounded border">
                <h5 class="font-bold text-slate-800">Temporal</h5>
                <p class="text-3xl font-mono font-bold text-green-600">O(E log V)</p>
                <p class="text-xs text-gray-600">Cada relajación de arista (E) puede implicar una operación de actualización en el Heap (log V).</p>
            </div>
            <div class="bg-slate-50 p-4 rounded border">
                <h5 class="font-bold text-slate-800">Espacial</h5>
                <p class="text-3xl font-mono font-bold text-orange-600">O(V + E)</p>
                <p class="text-xs text-gray-600">Para almacenar el grafo (lista de adyacencia), distancias, predecesores y la cola de prioridad.</p>
            </div>
        </div>
      `
    },
    {
      id: 'pnn10-9',
      title: '9. Limitaciones de Dijkstra: Pesos Negativos',
      notes: 'Explicar por qué Dijkstra falla con pesos negativos y mencionar alternativas.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Cuando los "Caminos Baratos" Son Demasiado Baratos</h3>
        <p class="text-gray-600 mb-4">Dijkstra asume que el camino más corto a un nodo no puede ser "mejorado" una vez que ese nodo ha sido "visitado" (su distancia finalizada). Esto no es cierto si existen <strong>aristas de peso negativo</strong>.</p>
        <div class="bg-red-50 border-l-4 border-red-500 p-4 my-4">
          <h5 class="font-bold text-red-900">El Problema con los Pesos Negativos</h5>
          <p class="text-sm text-red-800 mt-2">
            Una arista negativa puede hacer que un camino que inicialmente parecía más largo se convierta en el más corto después de pasar por esa arista. Dijkstra no puede retroceder y reevaluar nodos ya visitados.
          </p>
        </div>
        <p class="text-sm text-gray-700 mt-4">Para grafos con aristas de peso negativo (y sin ciclos negativos), se utiliza el <strong>Algoritmo de Bellman-Ford</strong>, que veremos en futuras clases.</p>
      `
    },
    {
      id: 'pnn10-10-practice',
      title: '10. Práctica: Diseñando un Sistema de Rutas',
      notes: 'Ejercicio de implementación de Dijkstra.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Ejercicio: Planificador de Rutas Sencillo</h3>
        <p class="text-gray-600 mb-4">Implementa el algoritmo de <strong>Dijkstra</strong> en C++ o Python. Puedes representar el grafo usando una lista de adyacencia (mapa de mapas o diccionario de diccionarios para los pesos).</p>
        <div class="bg-white border rounded-lg p-6">
          <h4 class="font-bold text-slate-800 mb-2">Instrucciones</h4>
          <ul class="text-sm list-disc pl-5 text-gray-700">
              <li>Define un grafo ponderado con al menos 5 nodos y 7 aristas (con pesos positivos).</li>
              <li>Elige un nodo de origen.</li>
              <li>Ejecuta Dijkstra y muestra las distancias más cortas a todos los demás nodos.</li>
              <li>(Opcional): Reconstruye e imprime el camino más corto a un nodo destino específico usando los predecesores.</li>
          </ul>
        </div>
      `
    },
    {
      id: 'pnn10-11-resources',
      title: '11. Herramientas Visuales y Recursos',
      notes: 'Proporcionar recursos externos para visualización.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Visualizando el Algoritmo de Dijkstra</h3>
        <p class="text-gray-600 mb-4">Observa cómo Dijkstra explora el grafo y encuentra los caminos más cortos paso a paso con simuladores interactivos:</p>
        <div class="bg-white border rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
          <h4 class="font-bold text-blue-700 text-lg">VisuAlgo - Dijkstra</h4>
          <p class="text-sm text-gray-600 my-2">Simula el algoritmo de Dijkstra en diferentes grafos.</p>
          <a href="https://visualgo.net/es/sssp" target="_blank" class="text-blue-600 font-bold hover:underline">Ir a VisuAlgo (SSSP) &rarr;</a>
        </div>
      `
    },
    {
      id: 'pnn10-end-questions',
      title: '¿Preguntas?',
      notes: 'Espacio para dudas.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full">
          <h3 class="text-2xl font-bold text-slate-900 mb-4">¿Dudas sobre Dijkstra, Relajación o Colas de Prioridad?</h3>
        </div>
      `
    },
    {
      id: 'pnn10-end-thanks',
      title: 'Gracias y Próxima Clase',
      notes: 'Cierre y adelanto.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center">
          <h2 class="text-3xl font-bold text-slate-900 mb-4">Fin del Módulo 10</h2>
          <p class="text-gray-600 text-lg">Hemos optimizado la búsqueda de caminos en grafos. En la próxima clase, exploraremos una estrategia algorítmica fundamental para problemas de optimización complejos: la <b>Programación Dinámica</b>.</p>
        </div>
      `
    }
  ]
};