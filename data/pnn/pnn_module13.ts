import { Module } from '../../types';

export const PNN_MODULE_13: Module = {
  id: 'pnn-mod-13',
  title: '13. Programación Dinámica: Grafos Multietapa',
  description: 'Introducción a la Programación Dinámica y su aplicación en grafos por etapas.',
  evaluation: '0% - Práctica Guiada',
  slides: [
    {
      id: 'pnn13-1',
      title: 'Programación Dinámica: Idea Central',
      notes: 'Concepto base y motivación práctica.',
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
      id: 'pnn13-2-ingredients',
      title: 'Ingredientes de la DP',
      notes: 'Cuándo sí aplica y cuándo no.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full items-center">
          <div class="space-y-4">
            <div class="bg-indigo-50 p-5 rounded-xl border-l-4 border-indigo-500">
              <h3 class="text-lg font-bold text-indigo-900">Subproblemas superpuestos</h3>
              <p class="text-indigo-800 text-sm">El mismo cálculo aparece múltiples veces.</p>
            </div>
            <div class="bg-emerald-50 p-5 rounded-xl border-l-4 border-emerald-500">
              <h3 class="text-lg font-bold text-emerald-900">Óptima subestructura</h3>
              <p class="text-emerald-800 text-sm">La mejor solución global se construye con mejores soluciones parciales.</p>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <p class="text-xs text-slate-600">Si falla alguno, la DP no garantiza resultados.</p>
            </div>
          </div>
          <div class="bg-white p-6 rounded-xl shadow border border-slate-200">
            <h4 class="font-bold text-slate-700 mb-3">Checklist rápido</h4>
            <ul class="text-sm text-slate-700 list-disc list-inside space-y-2">
              <li>¿Se repiten cálculos?</li>
              <li>¿Puedo definir una recurrencia?</li>
              <li>¿Puedo almacenar resultados en una tabla?</li>
              <li>¿Hay un orden natural de resolución?</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'pnn13-3-multistage',
      title: 'Grafos Multietapa',
      notes: 'Estructura y contexto del problema.',
      contentHtml: `
        <div class="flex flex-col h-full">
          <h3 class="text-2xl font-bold text-slate-800 mb-4">El Problema de las Etapas</h3>
          <div class="grid md:grid-cols-2 gap-6 mb-6">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h4 class="font-bold text-slate-800 mb-2">Características</h4>
              <ul class="text-sm text-slate-700 list-disc list-inside space-y-2">
                <li>Los nodos están organizados en etapas (columnas).</li>
                <li>Solo puedes avanzar a la etapa siguiente. No puedes volver atrás ni saltar etapas (usualmente).</li>
              </ul>
            </div>
            <div class="bg-white p-4 rounded-xl border border-slate-200">
              <h4 class="font-bold text-slate-800 mb-2">El Problema</h4>
              <p class="text-sm text-slate-700">
                Queremos ir del inicio (S) al final (T) con el costo mínimo (gastando menos gasolina, dinero o tiempo).
              </p>
              <p class="text-xs text-slate-500 mt-3">
                Intuición: cada decisión que tomo ahora (ir por arriba o por abajo) afecta el costo final, pero no necesito mirar todo el mapa a la vez, solo el paso inmediato.
              </p>
            </div>
          </div>
          
          <div class="flex-1 bg-white p-4 rounded-xl shadow border border-slate-200">
            <div class="mermaid">
              graph LR
                subgraph Etapa_1
                  S((S))
                end
                subgraph Etapa_2
                  A((A))
                  B((B))
                end
                subgraph Etapa_3
                  C((C))
                  D((D))
                end
                subgraph Etapa_4
                  T((T))
                end

                S --> A
                S --> B
                A --> C
                A --> D
                B --> C
                B --> D
                C --> T
                D --> T
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn13-4-topo-order',
      title: 'Orden Topológico en DAG',
      notes: 'Base para aplicar DP en grafos.',
      contentHtml: `
        <div class="flex flex-col h-full">
          <h3 class="text-2xl font-bold text-slate-800 mb-4">¿Por qué importa el orden?</h3>
          <p class="text-slate-600 mb-6">
            En un DAG podemos calcular costos en un orden donde todos los predecesores ya están resueltos.
          </p>
          <div class="grid md:grid-cols-2 gap-8 flex-1">
            <div class="bg-white p-5 rounded-xl border border-slate-200">
              <h4 class="font-bold text-slate-700 mb-3">Paso a paso</h4>
              <ol class="list-decimal list-inside text-sm text-slate-700 space-y-2">
                <li>Identificar nodos sin predecesores.</li>
                <li>Eliminar y registrar.</li>
                <li>Repetir hasta vaciar.</li>
              </ol>
            </div>
            <div class="bg-slate-900 p-6 rounded-xl text-slate-200 font-mono text-sm shadow-inner">
              <span class="text-purple-400"># Resultado típico</span>
              <br>Orden: S → A → B → C → D → T
              <br><span class="text-gray-400"># Luego se calculan costos en ese orden</span>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn13-5-method',
      title: 'Backward Approach (Hacia Atrás)',
      notes: 'Recurrencia para costo mínimo.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full">
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-slate-800">Pensando al Revés</h3>
            <p class="text-slate-600">
              Para saber el camino óptimo a T, primero preguntamos:
              <br>
              "¿Cuál es el mejor camino desde la Etapa 3 hasta T?"
            </p>
            
            <div class="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
              <h4 class="font-bold text-blue-900">Relación de Recurrencia</h4>
              <p class="text-sm text-blue-800 mt-2 font-mono">
                cost(i, j) = min { c(j, l) + cost(i+1, l) }
              </p>
              <p class="text-xs text-blue-600 mt-2">
                Donde:<br>
                - j es un nodo en la etapa i.<br>
                - l es un vecino de j en la etapa i+1.<br>
                - c(j, l) es el peso de la arista.
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
                  <div class="w-14 h-10 bg-green-100 border border-green-500 rounded-full flex items-center justify-center text-xs">Cost:5</div>
                </div>
                <div class="flex items-center gap-2">
                  <div class="h-0.5 w-8 bg-slate-400"></div>
                  <span class="text-xs font-bold bg-white border px-1 rounded">7</span>
                  <div class="w-14 h-10 bg-red-100 border border-red-500 rounded-full flex items-center justify-center text-xs">Cost:1</div>
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
      id: 'pnn13-13-worked-example',
      title: 'Ejemplo Guiado: Tabla de Costos',
      notes: 'Resolver un grafo pequeño paso a paso.',
      contentHtml: `
        <div class="flex flex-col h-full">
          <h3 class="text-2xl font-bold text-slate-800 mb-4">Tabla de DP</h3>
          <p class="text-slate-600 mb-4">Completa la tabla desde la última etapa hacia la primera.</p>
          <div class="grid md:grid-cols-2 gap-8 flex-1">
            <div class="bg-white p-4 rounded-xl border border-slate-200">
              <table class="w-full text-sm text-left">
                <thead class="bg-slate-100">
                  <tr><th class="p-2">Nodo</th><th class="p-2">Costo a T</th><th class="p-2">Siguiente</th></tr>
                </thead>
                <tbody>
                  <tr class="border-b"><td>C</td><td>6</td><td>T</td></tr>
                  <tr class="border-b"><td>D</td><td>2</td><td>T</td></tr>
                  <tr class="border-b"><td>A</td><td>7</td><td>D</td></tr>
                  <tr><td>B</td><td>8</td><td>C</td></tr>
                </tbody>
              </table>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h4 class="font-bold text-slate-700 mb-2">Resultado</h4>
              <p class="text-sm text-slate-700">Ruta óptima: S → A → D → T</p>
              <p class="text-xs text-slate-500 mt-2">Observa cómo el mejor camino se arma con decisiones locales óptimas.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn13-7-path-recovery',
      title: 'Reconstrucción del Camino Óptimo',
      notes: 'Guardar decisiones para explicar la solución.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full items-center">
          <div class="space-y-4">
            <div class="bg-amber-50 p-5 rounded-xl border-l-4 border-amber-500">
              <h3 class="text-lg font-bold text-amber-900">Idea</h3>
              <p class="text-amber-800 text-sm">Además del costo, guarda el siguiente nodo elegido.</p>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <p class="text-xs text-slate-600">Permite mostrar la ruta óptima, no solo el valor.</p>
            </div>
          </div>
          <div class="bg-slate-900 p-6 rounded-xl text-slate-200 font-mono text-sm shadow-inner">
            next_node = [<span class="text-green-400">None</span>] * N
            <br><span class="text-purple-400">for</span> i <span class="text-purple-400">in</span> range(N-<span class="text-yellow-400">2</span>, -<span class="text-yellow-400">1</span>, -<span class="text-yellow-400">1</span>):
            <br>&nbsp;&nbsp;<span class="text-purple-400">for</span> v, w <span class="text-purple-400">in</span> graph[i]:
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">if</span> dist[v] + w &lt; dist[i]:
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dist[i] = dist[v] + w
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;next_node[i] = v
            <br><br><span class="text-gray-400"># Luego se sigue next_node desde S hasta T</span>
          </div>
        </div>
      `
    },
    {
      id: 'pnn13-8-memo-tab',
      title: 'Memoización vs Tabulación',
      notes: 'Dos enfoques para la misma recurrencia.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full items-center">
          <div class="bg-slate-900 p-6 rounded-xl text-slate-200 font-mono text-sm shadow-inner">
            <span class="text-purple-400"># Memoización (top-down)</span>
            <br><span class="text-purple-400">def</span> <span class="text-blue-400">f</span>(n, memo):
            <br>&nbsp;&nbsp;<span class="text-purple-400">if</span> n <span class="text-purple-400">in</span> memo: <span class="text-purple-400">return</span> memo[n]
            <br>&nbsp;&nbsp;<span class="text-purple-400">if</span> n &lt;= <span class="text-yellow-400">1</span>: <span class="text-purple-400">return</span> n
            <br>&nbsp;&nbsp;memo[n] = f(n-1, memo) + f(n-2, memo)
            <br>&nbsp;&nbsp;<span class="text-purple-400">return</span> memo[n]
          </div>
          <div class="bg-slate-900 p-6 rounded-xl text-slate-200 font-mono text-sm shadow-inner">
            <span class="text-purple-400"># Tabulación (bottom-up)</span>
            <br>dp = [<span class="text-yellow-400">0</span>] * (n+<span class="text-yellow-400">1</span>)
            <br>dp[<span class="text-yellow-400">0</span>] = <span class="text-yellow-400">0</span>
            <br>dp[<span class="text-yellow-400">1</span>] = <span class="text-yellow-400">1</span>
            <br><span class="text-purple-400">for</span> i <span class="text-purple-400">in</span> range(<span class="text-yellow-400">2</span>, n+<span class="text-yellow-400">1</span>):
            <br>&nbsp;&nbsp;dp[i] = dp[i-<span class="text-yellow-400">1</span>] + dp[i-<span class="text-yellow-400">2</span>]
          </div>
        </div>
      `
    },
    {
      id: 'pnn13-9-complexity',
      title: 'Complejidad y Escalabilidad',
      notes: 'Costos de tiempo y memoria.',
      contentHtml: `
        <div class="flex flex-col h-full items-center justify-center">
          <div class="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 max-w-4xl w-full">
            <h3 class="text-2xl font-bold text-slate-800 mb-6 text-center">Análisis rápido</h3>
            <div class="grid md:grid-cols-2 gap-6 text-sm text-slate-700">
              <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h4 class="font-bold text-slate-800 mb-2">Tiempo</h4>
                <p><code>O(V + E)</code> si cada arista se procesa una vez.</p>
              </div>
              <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h4 class="font-bold text-slate-800 mb-2">Memoria</h4>
                <p><code>O(V)</code> para distancias y decisiones.</p>
              </div>
              <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h4 class="font-bold text-slate-800 mb-2">Observación</h4>
                <p>Si el grafo es denso, el costo aumenta.</p>
              </div>
              <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h4 class="font-bold text-slate-800 mb-2">Optimización</h4>
                <p>Reducir estados y evitar recomputación.</p>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn13-10-code',
      title: 'Implementación (Python)',
      notes: 'Código completo y comprensible.',
      contentHtml: `
        <div class="flex flex-col h-full">
          <div class="bg-yellow-500 text-white px-4 py-2 rounded-t-lg font-bold text-sm">Python: Grafo Multietapa</div>
          <div class="bg-slate-900 p-4 rounded-b-lg overflow-auto custom-scrollbar flex-1 text-xs font-mono text-yellow-100">
<pre><code class="language-python">import sys

def shortest_dist(graph, N):
    # dist[i] almacenará la distancia mínima desde el nodo i hasta el destino (N-1)
    dist = [0] * N
    dist[N-1] = 0

    # Backward approach: calculamos desde el final hacia el inicio
    for i in range(N-2, -1, -1):
        dist[i] = sys.maxsize

        # Revisar todas las aristas que salen de i
        for v, weight in graph[i]:
            if dist[v] != sys.maxsize:
                dist[i] = min(dist[i], weight + dist[v])

    return dist[0]

# Grafo como lista de adyacencia
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
    },
    {
      id: 'pnn13-11-bst',
      title: 'BST Óptimos',
      notes: 'Minimizar costo esperado de búsqueda.',
      contentHtml: `
        <div class="flex flex-col h-full">
          <h3 class="text-xl font-bold text-slate-800 mb-4">Árboles de Búsqueda Óptimos</h3>
          <p class="text-slate-600 mb-4 text-sm">
            Si ciertos elementos se buscan más, deberían estar más cerca de la raíz.
            Esto reduce el costo esperado de búsqueda.
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
      id: 'pnn13-12-obst-details',
      title: 'BST Óptimo: Recurrencia',
      notes: 'Ecuación y costos acumulados.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full items-center">
          <div class="space-y-4">
            <div class="bg-rose-50 p-5 rounded-xl border-l-4 border-rose-500">
              <h3 class="text-lg font-bold text-rose-900">Idea central</h3>
              <p class="text-rose-800 text-sm">Elegir la raíz que minimiza el costo esperado.</p>
            </div>
            <div class="bg-slate-100 p-4 rounded-xl border border-slate-200">
              <p class="text-xs text-slate-600">Se suman frecuencias de subárboles y costo de niveles.</p>
            </div>
          </div>
          <div class="bg-slate-900 p-6 rounded-xl text-slate-200 font-mono text-sm shadow-inner">
            <span class="text-purple-400"># Recurrencia clásica</span>
            <br>cost(i, j) = min_r { cost(i, r-1) + cost(r+1, j) + sum(freq[i..j]) }
            <br><span class="text-gray-400"># r es la raíz candidata</span>
          </div>
        </div>
      `
    },
    {
      id: 'pnn13-13-variations',
      title: 'Variaciones de DP en Grafos',
      notes: 'Cambiar objetivo y restricciones.',
      contentHtml: `
        <div class="flex flex-col h-full items-center justify-center">
          <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 max-w-4xl w-full shadow-lg">
            <h3 class="text-2xl font-bold text-slate-800 mb-6 text-center">Casos frecuentes</h3>
            <div class="grid md:grid-cols-2 gap-6 text-sm text-slate-700">
              <div class="bg-white p-4 rounded-xl border border-slate-200">
                <h4 class="font-bold text-slate-800 mb-2">Camino más largo</h4>
                <p>En DAG se puede maximizar sin ciclos.</p>
              </div>
              <div class="bg-white p-4 rounded-xl border border-slate-200">
                <h4 class="font-bold text-slate-800 mb-2">Restricciones</h4>
                <p>Capacidad, presupuesto, número de saltos.</p>
              </div>
              <div class="bg-white p-4 rounded-xl border border-slate-200">
                <h4 class="font-bold text-slate-800 mb-2">Camino con penalización</h4>
                <p>Costo base + penalizaciones por etapa.</p>
              </div>
              <div class="bg-white p-4 rounded-xl border border-slate-200">
                <h4 class="font-bold text-slate-800 mb-2">Multiparámetro</h4>
                <p>Estados con más de una variable.</p>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn13-14-mini-activity',
      title: 'Mini Taller: Diseño de Etapas',
      notes: 'Actividad aplicada con un caso realista.',
      contentHtml: `
        <div class="flex flex-col h-full items-center justify-center">
          <div class="bg-indigo-50 p-8 rounded-2xl border border-indigo-200 max-w-4xl w-full shadow-lg">
            <h3 class="text-2xl font-bold text-indigo-900 mb-4 text-center">Planificación de Ruta</h3>
            <p class="text-indigo-800 text-sm mb-6 text-center">
              Diseña un grafo multietapa para un sistema de entregas.
            </p>
            <div class="grid md:grid-cols-2 gap-6 text-sm text-indigo-900">
              <div class="bg-white p-4 rounded-xl border border-indigo-200">
                <h4 class="font-bold mb-2">Etapas sugeridas</h4>
                <ul class="list-disc list-inside space-y-1">
                  <li>Centro de distribución</li>
                  <li>Hubs regionales</li>
                  <li>Centros locales</li>
                  <li>Destino final</li>
                </ul>
              </div>
              <div class="bg-white p-4 rounded-xl border border-indigo-200">
                <h4 class="font-bold mb-2">Objetivo</h4>
                <ul class="list-disc list-inside space-y-1">
                  <li>Definir costos</li>
                  <li>Aplicar DP</li>
                  <li>Explicar la ruta óptima</li>
                </ul>
              </div>
            </div>
            <div class="mt-6 text-xs text-indigo-700 text-center">
              Entrega: diagrama + tabla de costos.
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn13-15-review',
      title: 'Preguntas de Repaso',
      notes: 'Cierre y reflexión.',
      contentHtml: `
        <div class="flex flex-col h-full items-center justify-center">
          <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 max-w-4xl w-full shadow-lg">
            <h3 class="text-2xl font-bold text-slate-800 mb-6 text-center">¿Qué recuerdas?</h3>
            <ul class="text-sm text-slate-700 space-y-3 list-disc list-inside">
              <li>¿Qué condiciones deben cumplirse para usar DP?</li>
              <li>¿En qué se diferencian memoización y tabulación?</li>
              <li>¿Cómo se reconstruye el camino óptimo?</li>
              <li>¿Qué representa la suma de frecuencias en BST óptimo?</li>
              <li>¿Por qué el orden topológico es importante?</li>
            </ul>
          </div>
        </div>
      `
    }
  ]
};
