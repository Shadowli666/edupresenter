
import { Module } from '../types';

export const PNN_MODULE_9: Module = {
  id: 'pnn-mod-9',
  title: '9. Caminos Cortos',
  description: 'Algoritmos de camino más corto: Dijkstra y mención de Floyd-Warshall, con trazas prácticas.',
  evaluation: '10% - Implementación y Taller',
  slides: [
    {
      id: 'pnn9-1',
      title: 'El Problema del Camino Más Corto',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Dado un grafo ponderado, queremos encontrar la ruta con el menor costo total (suma de pesos) entre un nodo origen y un nodo destino (o todos los demás).
          </p>
          
          <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h4 class="font-bold text-yellow-900 mb-2">Aplicaciones Reales</h4>
            <ul class="grid grid-cols-2 gap-2 text-sm text-yellow-800">
              <li>📍 GPS y Mapas (Google Maps)</li>
              <li>🌐 Enrutamiento de redes (IP)</li>
              <li>🚚 Logística y distribución</li>
              <li>🎮 IA en Videojuegos (Pathfinding)</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'pnn9-2',
      title: 'Algoritmo de Dijkstra',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Algoritmo voraz (greedy) que resuelve el problema del camino más corto desde un origen único en grafos con pesos no negativos.
          </p>

          <div class="bg-white p-6 border rounded-xl shadow-sm">
            <h4 class="font-bold text-slate-800 mb-4">Pasos del Algoritmo</h4>
            <ol class="list-decimal list-inside space-y-3 text-sm text-slate-600">
              <li>Inicializar distancias: 0 para el origen, ∞ para el resto.</li>
              <li>Usar un conjunto de nodos no visitados (o cola de prioridad).</li>
              <li>Mientras haya nodos no visitados:
                <ul class="list-disc list-inside ml-6 mt-1 text-slate-500">
                  <li>Seleccionar el nodo con menor distancia actual.</li>
                  <li>Para cada vecino, calcular nueva distancia posible.</li>
                  <li>Si (distancia actual + peso arista) < distancia vecino, <strong>actualizar (relajar)</strong>.</li>
                  <li>Marcar nodo como visitado.</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      `
    },
    {
      id: 'pnn9-3',
      title: 'Traza de Dijkstra (Ejemplo)',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Consideremos el siguiente grafo ponderado y apliquemos Dijkstra desde el nodo A.
          </p>

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

            <div class="bg-white p-4 rounded-xl border text-xs font-mono">
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
              <div class="mt-3">
                <h5 class="font-bold text-slate-800 mb-2">Mini-traza detallada (relajaciones)</h5>
                <div class="overflow-x-auto">
                  <table class="text-[11px] w-full border">
                    <thead>
                      <tr class="bg-slate-100">
                        <th class="border px-2 py-1 text-left">Iteración</th>
                        <th class="border px-2 py-1 text-left">Nodo elegido</th>
                        <th class="border px-2 py-1 text-left">Relajaciones</th>
                        <th class="border px-2 py-1 text-left">distancias</th>
                        <th class="border px-2 py-1 text-left">predecesores</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="border px-2 py-1">Inicial</td>
                        <td class="border px-2 py-1">-</td>
                        <td class="border px-2 py-1">-</td>
                        <td class="border px-2 py-1">A:0, B:∞, C:∞, D:∞</td>
                        <td class="border px-2 py-1">A:-, B:-, C:-, D:-</td>
                      </tr>
                      <tr>
                        <td class="border px-2 py-1">1</td>
                        <td class="border px-2 py-1">A</td>
                        <td class="border px-2 py-1">relaja A→B (2), A→C (5)</td>
                        <td class="border px-2 py-1">A:0, B:2, C:5, D:∞</td>
                        <td class="border px-2 py-1">A:-, B:A, C:A, D:-</td>
                      </tr>
                      <tr>
                        <td class="border px-2 py-1">2</td>
                        <td class="border px-2 py-1">B</td>
                        <td class="border px-2 py-1">relaja B→C (2+1=3), B→D (2+4=6)</td>
                        <td class="border px-2 py-1">A:0, B:2, C:3, D:6</td>
                        <td class="border px-2 py-1">A:-, B:A, C:B, D:B</td>
                      </tr>
                      <tr>
                        <td class="border px-2 py-1">3</td>
                        <td class="border px-2 py-1">C</td>
                        <td class="border px-2 py-1">relaja C→D (3+1=4)</td>
                        <td class="border px-2 py-1">A:0, B:2, C:3, D:4</td>
                        <td class="border px-2 py-1">A:-, B:A, C:B, D:C</td>
                      </tr>
                      <tr>
                        <td class="border px-2 py-1">4</td>
                        <td class="border px-2 py-1">D</td>
                        <td class="border px-2 py-1">fin</td>
                        <td class="border px-2 py-1">A:0, B:2, C:3, D:4</td>
                        <td class="border px-2 py-1">A:-, B:A, C:B, D:C</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <p class="text-sm text-slate-600">
            En clase, se puede reconstruir paso a paso cómo se actualizan las distancias y predecesores.
          </p>
        </div>
      `
    },
    {
      id: 'pnn9-4',
      title: 'Mención: Algoritmo de Floyd-Warshall',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Cuando necesitamos caminos más cortos entre <strong>todos los pares de vértices</strong>, un algoritmo típico es <strong>Floyd-Warshall</strong>.
          </p>

          <div class="bg-indigo-50 p-4 rounded-lg border border-indigo-200 text-sm text-indigo-900">
            <ul class="list-disc list-inside space-y-1">
              <li>Trabaja con una matriz de distancias D[i][j].</li>
              <li>Intenta mejorar el camino entre i y j pasando por un vértice intermedio k.</li>
              <li>Triple ciclo anidado: for k, for i, for j.</li>
            </ul>
          </div>

          <p class="text-xs text-slate-500">
            En este curso nos enfocaremos más en Dijkstra para implementación, pero es importante conocer que existen algoritmos de todos-los-pares.
          </p>
        </div>
      `
    },
    {
      id: 'pnn9-5',
      title: 'Actividad Práctica: Diseña Rutas',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            En equipos, definan un pequeño mapa (4-6 nodos) que represente rutas entre edificios o paradas de bus, con pesos de distancia o tiempo.
          </p>

          <ol class="list-decimal list-inside text-sm text-slate-700 space-y-2 bg-white p-4 rounded-lg border">
            <li>Construyan la matriz de adyacencia con los pesos.</li>
            <li>Elijan un origen y apliquen Dijkstra a mano (o con apoyo de una tabla).</li>
            <li>Respondan: ¿cuál es el camino más corto a cada destino?, ¿qué sucede si se añade una nueva arista con menor peso?</li>
          </ol>

          <p class="text-xs text-slate-500">Tiempo sugerido: 20-25 minutos con puesta en común final.</p>
        </div>
      `
    },
    {
      id: 'pnn9-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="text-6xl font-bold text-indigo-600 mb-6 select-none">?</div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Caminos Mínimos</h3>
          <p class="text-center text-gray-600 max-w-md">
            ¿Hay dudas sobre la traza de Dijkstra, interpretación de las tablas de distancias o aplicaciones reales de estos algoritmos?
          </p>
        </div>
      `
    },
    {
      id: 'pnn9-end-thanks',
      title: 'Gracias por su atención',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">Fin de la Clase</h2>
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-indigo-500 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "Encontrar el mejor camino en un grafo es como optimizar decisiones en la vida: depende de los costos que definas." 
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
