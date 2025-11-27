
import { Module } from '../types';

export const PNN_MODULE_8: Module = {
  id: 'pnn-mod-8',
  title: '8. Representación y Recorridos',
  description: 'Matrices y listas de adyacencia, recorridos BFS y DFS con ejemplos prácticos.',
  evaluation: '10% - Taller de Grafos (Teoría y Laboratorio)',
  slides: [
    {
      id: 'pnn8-1',
      title: 'Representación de Grafos',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Para procesar grafos en una computadora, necesitamos estructuras de datos que los representen. Las dos más comunes son:
          </p>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-5 border rounded-lg shadow-sm">
              <h4 class="font-bold text-indigo-800 mb-2">Matriz de Adyacencia</h4>
              <p class="text-xs text-slate-600 mb-3">
                Una matriz cuadrada M donde M[i][j] indica si hay una arista entre el vértice i y el j (1 si existe, 0 si no, o el peso).
              </p>
              <div class="bg-slate-100 p-2 rounded font-mono text-xs text-center">
                &nbsp; A B C<br>
                A 0 1 1<br>
                B 1 0 0<br>
                C 1 0 0
              </div>
              <p class="text-xs text-red-500 mt-2">Desventaja: Ocupa mucha memoria O(V²) si el grafo es disperso.</p>
            </div>

            <div class="bg-white p-5 border rounded-lg shadow-sm">
              <h4 class="font-bold text-indigo-800 mb-2">Lista de Adyacencia</h4>
              <p class="text-xs text-slate-600 mb-3">
                Un arreglo de listas. Para cada vértice, se almacena una lista de los vértices a los que está conectado.
              </p>
              <div class="bg-slate-100 p-2 rounded font-mono text-xs">
                A -> [B, C]<br>
                B -> [A]<br>
                C -> [A]
              </div>
              <p class="text-xs text-green-600 mt-2">Ventaja: Ahorra espacio O(V+E). Ideal para grafos dispersos.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn8-2',
      title: 'Recorridos: BFS y DFS',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Algoritmos para visitar todos los nodos de un grafo de manera sistemática.
          </p>

          <div class="space-y-4">
            <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div class="flex items-center gap-2 mb-2">
                <span class="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">BFS</span>
                <h4 class="font-bold text-blue-900">Búsqueda en Anchura (Breadth-First Search)</h4>
              </div>
              <p class="text-sm text-blue-800 mb-2">
                Explora el grafo por niveles. Visita todos los vecinos de un nodo antes de pasar a los vecinos de los vecinos.
              </p>
              <ul class="list-disc list-inside text-xs text-blue-700">
                <li>Usa una <strong>Cola (Queue)</strong>.</li>
                <li>Útil para encontrar el camino más corto en grafos no ponderados.</li>
              </ul>
              <div class="bg-slate-900 text-slate-100 p-4 rounded-lg text-xs font-mono shadow-inner border border-slate-700 mt-3">
<pre>
<span class="text-emerald-300">// C++ (BFS con lista de adyacencia)</span>
<span class="text-purple-400">#include</span> &lt;iostream&gt;
<span class="text-purple-400">#include</span> &lt;vector&gt;
<span class="text-purple-400">#include</span> &lt;queue&gt;
<span class="text-purple-400">#include</span> &lt;unordered_map&gt;
<span class="text-purple-400">#include</span> &lt;unordered_set&gt;

<span class="text-blue-400">std::vector&lt;std::string&gt;</span> bfs(
  <span class="text-blue-400">const std::unordered_map&lt;std::string, std::vector&lt;std::string&gt;&gt;&</span> grafo,
  <span class="text-blue-400">const std::string&</span> origen
) {
  <span class="text-blue-400">std::unordered_set&lt;std::string&gt;</span> visitado;
  <span class="text-blue-400">std::queue&lt;std::string&gt;</span> q;
  <span class="text-blue-400">std::vector&lt;std::string&gt;</span> orden;

  visitado.insert(origen);
  q.push(origen);

  <span class="text-purple-400">while</span> (!q.empty()) {
    <span class="text-blue-400">auto</span> u = q.front(); q.pop();
    orden.push_back(u);
    <span class="text-purple-400">for</span> (<span class="text-blue-400">auto</span>& v : grafo.at(u)) {
      <span class="text-purple-400">if</span> (!visitado.count(v)) {
        visitado.insert(v);
        q.push(v);
      }
    }
  }
  <span class="text-purple-400">return</span> orden;
}

<span class="text-purple-400">int</span> main() {
  <span class="text-blue-400">std::unordered_map&lt;std::string, std::vector&lt;std::string&gt;&gt;</span> g = {
    {<span class="text-green-400">"A"</span>, {<span class="text-green-400">"B"</span>, <span class="text-green-400">"C"</span>}},
    {<span class="text-green-400">"B"</span>, {<span class="text-green-400">"D"</span>}},
    {<span class="text-green-400">"C"</span>, {<span class="text-green-400">"E"</span>}},
    {<span class="text-green-400">"D"</span>, {}},
    {<span class="text-green-400">"E"</span>, {}}
  };

  <span class="text-blue-400">auto</span> orden = bfs(g, <span class="text-green-400">"A"</span>);
  <span class="text-purple-400">for</span> (<span class="text-blue-400">auto</span>& x : orden) std::cout &lt;&lt; x &lt;&lt; <span class="text-green-400">" "</span>;
  std::cout &lt;&lt; std::endl;
}
</pre>
              </div>
              <div class="bg-white rounded-lg border p-4 mt-3">
                <h5 class="font-semibold text-slate-800 mb-2">BFS: paso a paso</h5>
                <ol class="list-decimal list-inside text-xs text-slate-700 space-y-1">
                  <li><strong>Estructuras</strong>: un conjunto <em>visitado</em> para no repetir nodos, una cola <em>q</em> para procesar por niveles, y un vector <em>orden</em> para registrar visitas.</li>
                  <li><strong>Inicialización</strong>: marcar <em>origen</em> como visitado y encolarlo.</li>
                  <li><strong>Bucle</strong>: mientras la cola no esté vacía, tomar el frente <em>u</em>, guardarlo en <em>orden</em>.</li>
                  <li><strong>Vecinos</strong>: para cada vecino <em>v</em> de <em>u</em>, si no está visitado, marcarlo y encolarlo.</li>
                  <li><strong>Niveles</strong>: gracias a la cola, primero se expanden los vecinos “más cercanos” (mismo nivel), luego los siguientes niveles.</li>
                  <li><strong>Salida</strong>: el vector <em>orden</em> devuelve el orden de visita por anchura.</li>
                </ol>
                <div class="mt-3">
                  <h6 class="font-semibold text-slate-700 mb-1">Mini-traza (grafo del ejemplo, origen=A)</h6>
                  <div class="overflow-x-auto">
                    <table class="text-[11px] w-full border">
                      <thead>
                        <tr class="bg-slate-100">
                          <th class="border px-2 py-1 text-left">Paso</th>
                          <th class="border px-2 py-1 text-left">Cola (Q)</th>
                          <th class="border px-2 py-1 text-left">Visitado</th>
                          <th class="border px-2 py-1 text-left">Orden</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="border px-2 py-1">Init</td>
                          <td class="border px-2 py-1">[A]</td>
                          <td class="border px-2 py-1">{A}</td>
                          <td class="border px-2 py-1">[]</td>
                        </tr>
                        <tr>
                          <td class="border px-2 py-1">1</td>
                          <td class="border px-2 py-1">[] → encolar B,C</td>
                          <td class="border px-2 py-1">{A, B, C}</td>
                          <td class="border px-2 py-1">[A]</td>
                        </tr>
                        <tr>
                          <td class="border px-2 py-1">2</td>
                          <td class="border px-2 py-1">[C] → encolar D</td>
                          <td class="border px-2 py-1">{A, B, C, D}</td>
                          <td class="border px-2 py-1">[A, B]</td>
                        </tr>
                        <tr>
                          <td class="border px-2 py-1">3</td>
                          <td class="border px-2 py-1">[D] → encolar E</td>
                          <td class="border px-2 py-1">{A, B, C, D, E}</td>
                          <td class="border px-2 py-1">[A, B, C]</td>
                        </tr>
                        <tr>
                          <td class="border px-2 py-1">4</td>
                          <td class="border px-2 py-1">[E]</td>
                          <td class="border px-2 py-1">{A, B, C, D, E}</td>
                          <td class="border px-2 py-1">[A, B, C, D]</td>
                        </tr>
                        <tr>
                          <td class="border px-2 py-1">5</td>
                          <td class="border px-2 py-1">[]</td>
                          <td class="border px-2 py-1">{A, B, C, D, E}</td>
                          <td class="border px-2 py-1">[A, B, C, D, E]</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <!-- Versión didáctica en Python -->
              <div class="bg-slate-50 rounded-lg border p-4 mt-3">
                <h5 class="font-semibold text-slate-800 mb-2">BFS en Python (más simple para aprender)</h5>
                <div class="bg-slate-900 text-slate-100 p-4 rounded-lg text-xs font-mono shadow-inner border border-slate-700">
<pre>
<span class="text-emerald-300"># BFS usando dict y deque</span>
<span class="text-purple-400">from</span> collections <span class="text-purple-400">import</span> deque

<span class="text-purple-400">def</span> <span class="text-blue-400">bfs</span>(grafo, origen):
    visitado = <span class="text-purple-400">set</span>()
    orden = []
    q = deque([origen])
    visitado.add(origen)
    <span class="text-purple-400">while</span> q:
        u = q.popleft()
        orden.append(u)
        <span class="text-purple-400">for</span> v <span class="text-purple-400">in</span> grafo[u]:
            <span class="text-purple-400">if</span> v <span class="text-purple-400">not in</span> visitado:
                visitado.add(v)
                q.append(v)
    <span class="text-purple-400">return</span> orden

grafo = {
  'A': ['B', 'C'],
  'B': ['D'],
  'C': ['E'],
  'D': [],
  'E': []
}
print(bfs(grafo, 'A'))  <span class="text-gray-500"># ['A','B','C','D','E']</span>
</pre>
                </div>
              </div>
            </div>

            <div class="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <div class="flex items-center gap-2 mb-2">
                <span class="bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">DFS</span>
                <h4 class="font-bold text-purple-900">Búsqueda en Profundidad (Depth-First Search)</h4>
              </div>
              <p class="text-sm text-purple-800 mb-2">
                Explora tanto como sea posible a lo largo de cada rama antes de retroceder (backtracking).
              </p>
              <ul class="list-disc list-inside text-xs text-purple-700">
                <li>Usa una <strong>Pila (Stack)</strong> o <strong>Recursividad</strong>.</li>
                <li>Útil para detectar ciclos, componentes conexas y laberintos.</li>
              </ul>
              <div class="bg-slate-900 text-slate-100 p-4 rounded-lg text-xs font-mono shadow-inner border border-slate-700 mt-3">
<pre>
<span class="text-emerald-300">// C++ (DFS recursivo)</span>
<span class="text-purple-400">#include</span> &lt;iostream&gt;
<span class="text-purple-400">#include</span> &lt;vector&gt;
<span class="text-purple-400">#include</span> &lt;unordered_map&gt;
<span class="text-purple-400">#include</span> &lt;unordered_set&gt;

<span class="text-purple-400">void</span> dfs_visit(
  <span class="text-blue-400">const std::unordered_map&lt;std::string, std::vector&lt;std::string&gt;&gt;&</span> grafo,
  <span class="text-blue-400">const std::string&</span> u,
  <span class="text-blue-400">std::unordered_set&lt;std::string&gt;&</span> visitado,
  <span class="text-blue-400">std::vector&lt;std::string&gt;&</span> orden
) {
  visitado.insert(u);
  orden.push_back(u);
  <span class="text-purple-400">for</span> (<span class="text-blue-400">auto</span>& v : grafo.at(u)) {
    <span class="text-purple-400">if</span> (!visitado.count(v)) dfs_visit(grafo, v, visitado, orden);
  }
}

<span class="text-blue-400">std::vector&lt;std::string&gt;</span> dfs(
  <span class="text-blue-400">const std::unordered_map&lt;std::string, std::vector&lt;std::string&gt;&gt;&</span> grafo,
  <span class="text-blue-400">const std::string&</span> origen
) {
  <span class="text-blue-400">std::unordered_set&lt;std::string&gt;</span> visitado;
  <span class="text-blue-400">std::vector&lt;std::string&gt;</span> orden;
  dfs_visit(grafo, origen, visitado, orden);
  <span class="text-purple-400">return</span> orden;
}

<span class="text-purple-400">int</span> main() {
  <span class="text-blue-400">std::unordered_map&lt;std::string, std::vector&lt;std::string&gt;&gt;</span> g = {
    {<span class="text-green-400">"A"</span>, {<span class="text-green-400">"B"</span>, <span class="text-green-400">"C"</span>}},
    {<span class="text-green-400">"B"</span>, {<span class="text-green-400">"D"</span>}},
    {<span class="text-green-400">"C"</span>, {<span class="text-green-400">"E"</span>}},
    {<span class="text-green-400">"D"</span>, {}},
    {<span class="text-green-400">"E"</span>, {}}
  };
  <span class="text-blue-400">auto</span> orden = dfs(g, <span class="text-green-400">"A"</span>);
  <span class="text-purple-400">for</span> (<span class="text-blue-400">auto</span>& x : orden) std::cout &lt;&lt; x &lt;&lt; <span class="text-green-400">" "</span>;
  std::cout &lt;&lt; std::endl;
}
</pre>
              </div>
              <div class="bg-white rounded-lg border p-4 mt-3">
                <h5 class="font-semibold text-slate-800 mb-2">DFS: paso a paso</h5>
                <ol class="list-decimal list-inside text-xs text-slate-700 space-y-1">
                  <li><strong>Estructuras</strong>: un conjunto <em>visitado</em> y un vector <em>orden</em> para registrar la secuencia.</li>
                  <li><strong>Recursión</strong>: la función <em>dfs_visit</em>(u) marca <em>u</em>, lo añade a <em>orden</em> y explora cada vecino <em>v</em> no visitado.</li>
                  <li><strong>Profundidad</strong>: se “hunde” por una rama hasta el final antes de retroceder (backtracking).</li>
                  <li><strong>Retroceso</strong>: cuando no hay vecinos sin visitar, retorna al último punto de decisión y continúa con el siguiente vecino.</li>
                  <li><strong>Salida</strong>: el vector <em>orden</em> refleja el orden de visita en profundidad.</li>
                </ol>
                <div class="mt-3">
                  <h6 class="font-semibold text-slate-700 mb-1">Mini-traza (grafo del ejemplo, origen=A)</h6>
                  <div class="overflow-x-auto">
                    <table class="text-[11px] w-full border">
                      <thead>
                        <tr class="bg-slate-100">
                          <th class="border px-2 py-1 text-left">Llamada</th>
                          <th class="border px-2 py-1 text-left">Acción</th>
                          <th class="border px-2 py-1 text-left">Visitado</th>
                          <th class="border px-2 py-1 text-left">Orden</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="border px-2 py-1">dfs(A)</td>
                          <td class="border px-2 py-1">marca A, explora B</td>
                          <td class="border px-2 py-1">{A}</td>
                          <td class="border px-2 py-1">[A]</td>
                        </tr>
                        <tr>
                          <td class="border px-2 py-1">dfs(B)</td>
                          <td class="border px-2 py-1">marca B, explora D</td>
                          <td class="border px-2 py-1">{A, B}</td>
                          <td class="border px-2 py-1">[A, B]</td>
                        </tr>
                        <tr>
                          <td class="border px-2 py-1">dfs(D)</td>
                          <td class="border px-2 py-1">marca D, sin vecinos; retorna</td>
                          <td class="border px-2 py-1">{A, B, D}</td>
                          <td class="border px-2 py-1">[A, B, D]</td>
                        </tr>
                        <tr>
                          <td class="border px-2 py-1">retorna a B</td>
                          <td class="border px-2 py-1">B sin más vecinos; retorna</td>
                          <td class="border px-2 py-1">{A, B, D}</td>
                          <td class="border px-2 py-1">[A, B, D]</td>
                        </tr>
                        <tr>
                          <td class="border px-2 py-1">retorna a A</td>
                          <td class="border px-2 py-1">explora C</td>
                          <td class="border px-2 py-1">{A, B, D, C}</td>
                          <td class="border px-2 py-1">[A, B, D, C]</td>
                        </tr>
                        <tr>
                          <td class="border px-2 py-1">dfs(C)</td>
                          <td class="border px-2 py-1">marca C, explora E</td>
                          <td class="border px-2 py-1">{A, B, D, C}</td>
                          <td class="border px-2 py-1">[A, B, D, C]</td>
                        </tr>
                        <tr>
                          <td class="border px-2 py-1">dfs(E)</td>
                          <td class="border px-2 py-1">marca E, sin vecinos; retorna</td>
                          <td class="border px-2 py-1">{A, B, D, C, E}</td>
                          <td class="border px-2 py-1">[A, B, D, C, E]</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <!-- Versión didáctica en Python -->
              <div class="bg-slate-50 rounded-lg border p-4 mt-3">
                <h5 class="font-semibold text-slate-800 mb-2">DFS en Python (recursivo y claro)</h5>
                <div class="bg-slate-900 text-slate-100 p-4 rounded-lg text-xs font-mono shadow-inner border border-slate-700">
<pre>
<span class="text-emerald-300"># DFS recursivo con dict</span>
<span class="text-purple-400">def</span> <span class="text-blue-400">dfs</span>(grafo, origen):
    visitado = <span class="text-purple-400">set</span>()
    orden = []
    <span class="text-purple-400">def</span> <span class="text-blue-400">explorar</span>(u):
        visitado.add(u)
        orden.append(u)
        <span class="text-purple-400">for</span> v <span class="text-purple-400">in</span> grafo[u]:
            <span class="text-purple-400">if</span> v <span class="text-purple-400">not in</span> visitado:
                explorar(v)
    explorar(origen)
    <span class="text-purple-400">return</span> orden

grafo = {
  'A': ['B', 'C'],
  'B': ['D'],
  'C': ['E'],
  'D': [],
  'E': []
}
print(dfs(grafo, 'A'))  <span class="text-gray-500"># ['A','B','D','C','E']</span>
</pre>
                </div>
              </div>

              <!-- Equivalencias útiles entre Python y C++ -->
              <div class="bg-white rounded-lg border p-4 mt-3">
                <h5 class="font-semibold text-slate-800 mb-2">Equivalencias Python ↔ C++</h5>
                <ul class="list-disc list-inside text-xs text-slate-700 space-y-1">
                  <li>Grafo (lista de adyacencia): <code>dict[str, list[str]]</code> ↔ <code>unordered_map<string, vector<string>></code></li>
                  <li>Cola para BFS: <code>collections.deque</code> ↔ <code>std::queue</code></li>
                  <li>Conjunto visitado: <code>set</code> ↔ <code>std::unordered_set</code></li>
                  <li>Recursión: funciones anidadas ↔ funciones auxiliares y parámetros por referencia</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn8-3',
      title: 'Pseudocódigo de BFS y DFS',
      contentHtml: `
        <div class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-slate-900 text-slate-100 p-4 rounded-lg text-xs font-mono shadow-lg">
              <p class="text-emerald-300 font-bold mb-2">BFS(G, s)</p>
<pre>
Crear cola Q
marcar s como visitado
encolar s en Q

mientras Q no esté vacía:
  u = desencolar(Q)
  para cada vecino v de u:
    si v no está visitado:
      marcar v
      encolar v en Q
</pre>
            </div>

            <div class="bg-slate-900 text-slate-100 p-4 rounded-lg text-xs font-mono shadow-lg">
              <p class="text-pink-300 font-bold mb-2">DFS(G, u)</p>
<pre>
marcar u como visitado
para cada vecino v de u:
  si v no está visitado:
    DFS(G, v)
</pre>
            </div>
          </div>

          <p class="text-xs text-slate-500">
            Estos algoritmos son la base para muchas aplicaciones: detección de ciclos, componentes conexas, caminos más cortos, etc.
          </p>
        </div>
      `
    },
    {
      id: 'pnn8-4',
      title: 'Actividad Práctica: Traza BFS/DFS',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Usando el grafo de la clase (o el diseñado por su equipo), realicen las siguientes tareas.
          </p>

          <ol class="list-decimal list-inside text-sm text-slate-700 space-y-2 bg-white p-4 rounded-lg border">
            <li>Elijan un nodo origen <strong>s</strong> y tracen el orden de visita de BFS.</li>
            <li>Repitan el proceso con DFS (versión recursiva).</li>
            <li>Comparen los órdenes de visita: ¿en qué se parecen?, ¿en qué se diferencian?</li>
            <li>Identifiquen si el grafo tiene ciclos usando DFS.</li>
          </ol>

          <p class="text-xs text-slate-500">Tiempo sugerido: 15-20 minutos con discusión guiada en plenario.</p>
        </div>
      `
    },
    {
      id: 'pnn8-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="text-6xl font-bold text-indigo-600 mb-6 select-none">?</div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Recorridos en Grafos</h3>
          <p class="text-center text-gray-600 max-w-md">
            ¿Preguntas sobre matrices/listas de adyacencia, o sobre cómo se comportan BFS y DFS en distintos grafos?
          </p>
        </div>
      `
    },
    {
      id: 'pnn8-end-thanks',
      title: 'Gracias por su atención',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">Fin de la Clase</h2>
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-indigo-500 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "Saber recorrer un grafo es el primer paso para entender cualquier red compleja." 
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
