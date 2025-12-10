import { Module } from '../../types';

export const PNN_MODULE_9: Module = {
  id: 'pnn-mod-9',
  title: '9. Algoritmos Voraces: Árbol de Recubrimiento Mínimo (MST)',
  description: 'Aplicación de algoritmos Greedy (Prim y Kruskal) para encontrar el MST en grafos.',
  evaluation: '10% - Implementación y Taller',
  slides: [
    {
      id: 'pnn9-1',
      title: '1. Repaso: Algoritmos Voraces y Grafos',
      notes: 'Repaso rápido de los conceptos de Greedy y la necesidad de representar grafos.',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700 text-lg">
            Hemos visto cómo los <strong>Algoritmos Voraces (Greedy)</strong> toman decisiones óptimas a nivel local. Hoy, aplicaremos esta estrategia a <strong>Grafos Ponderados</strong>.
          </p>
          <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
            <h5 class="font-bold text-blue-900">Recordando los Grafos</h5>
            <p class="text-sm text-blue-800 mt-2">
              Un grafo consta de <strong>vértices</strong> y <strong>aristas</strong>. Para MST, trabajamos con grafos <strong>no dirigidos</strong> y <strong>ponderados</strong> (las aristas tienen un "peso" o "costo").
            </p>
          </div>
          <p class="text-gray-700 mt-4">La clave es encontrar la mejor conexión o ruta entre los elementos del grafo.</p>
        </div>
      `
    },
    {
      id: 'pnn9-2',
      title: '2. Problema: Árbol de Recubrimiento Mínimo (MST)',
      notes: 'Definición formal del MST y sus aplicaciones.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Conectando Nodos al Menor Costo</h3>
        <p class="text-gray-600 mb-4">Dado un <strong>grafo conectado, no dirigido y ponderado</strong>, un <strong>Árbol de Recubrimiento Mínimo (Minimum Spanning Tree - MST)</strong> es un subgrafo que es un árbol, conecta todos los vértices del grafo original, y el peso total de sus aristas es el mínimo posible.</p>
        <div class="bg-purple-50 border-l-4 border-purple-500 p-4 my-4">
          <h5 class="font-bold text-purple-900">Aplicaciones</h5>
          <ul class="list-disc pl-5 text-sm text-purple-800 mt-2">
            <li>Diseño de redes de comunicación (fibra óptica, tendido eléctrico).</li>
            <li>Construcción de carreteras o ferrocarriles minimizando costos.</li>
            <li>Análisis de clústeres en bioinformática.</li>
            <li>Circuitos electrónicos, ductos.</li>
          </ul>
        </div>
        <div class="flex justify-center my-4"><div class="mermaid">graph LR; A--4-->B; B--2-->C; C--1-->D; D--3-->A;</div></div>
        <p class="text-sm text-gray-700 mt-4">El MST asegura que todos los puntos estén conectados con la menor "inversión" posible.</p>
      `
    },
    {
      id: 'pnn9-3',
      title: '3. Propiedades del MST',
      notes: 'Teoremas fundamentales que garantizan la optimalidad de los algoritmos Greedy.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">¿Por qué los Algoritmos Voraces Funcionan para MST?</h3>
        <p class="text-gray-600 mb-4">Los algoritmos de Prim y Kruskal encuentran el MST porque se basan en dos propiedades fundamentales:</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
            <h5 class="font-bold text-blue-900 mb-2">1. Propiedad del Corte (Cut Property)</h5>
            <p class="text-sm text-gray-700">Si cortamos (dividimos) el grafo en dos conjuntos de vértices, y elegimos la arista de menor peso que cruza ese corte, esa arista DEBE ser parte de algún MST del grafo. Los algoritmos Greedy explotan esta propiedad.</p>
          </div>
          <div class="bg-white p-4 rounded-lg border-l-4 border-green-500 shadow-sm">
            <h5 class="font-bold text-green-900 mb-2">2. Propiedad del Ciclo (Cycle Property)</h5>
            <p class="text-sm text-gray-700">Si en un grafo existe un ciclo, la arista de mayor peso dentro de ese ciclo NO puede ser parte de ningún MST. Esto nos ayuda a evitar aristas innecesarias.</p>
          </div>
        </div>
      `
    },
    {
      id: 'pnn9-4-prim',
      title: '4. Algoritmo de Prim: Creciendo el MST',
      notes: 'Explicación del algoritmo de Prim con ejemplo visual.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Construyendo el MST a Partir de un Vértice</h3>
        <p class="text-gray-600 mb-4">El Algoritmo de Prim construye el MST añadiendo iterativamente la arista de menor peso que conecta un vértice ya incluido en el MST a uno que aún no lo está.</p>
        <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 my-4">
          <h5 class="font-bold text-yellow-900">Pasos del Algoritmo</h5>
          <ol class="list-decimal pl-5 text-sm text-yellow-800 mt-2">
            <li>Comienza con un vértice arbitrario y lo añade al MST.</li>
            <li>Mantiene un conjunto de todas las aristas que conectan el MST con vértices fuera del MST.</li>
            <li>En cada paso, añade al MST la arista de menor peso de ese conjunto.</li>
            <li>Repite hasta que todos los vértices estén incluidos en el MST.</li>
          </ol>
        </div>
        <div class="flex justify-center my-4"><div class="mermaid">graph LR; A---(2)B; B---(1)C; C---(4)D; A---(3)D;</div></div>
        <p class="text-sm text-gray-700 mt-4">La implementación eficiente de Prim utiliza una <strong>cola de prioridad (Min-Heap)</strong> para seleccionar la arista más barata rápidamente.</p>
      `
    },
    {
      id: 'pnn9-5-prim-pseudo',
      title: '5. Algoritmo de Prim (Pseudocódigo)',
      notes: 'Pseudocódigo detallado de Prim para una mejor comprensión.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Codificando la Estrategia de Prim</h3>
        <p class="text-gray-600 mb-4">Aquí el pseudocódigo del algoritmo de Prim, que muestra el uso de la cola de prioridad.</p>
          <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
          <h5 class="text-gray-400 mb-2">// Pseudocódigo para el Algoritmo de Prim</h5>
          <pre class="font-mono text-sm max-w-full overflow-x-auto"><code>
FUNCIÓN prim(Grafo G, Vertice inicio):
  crear Min-Heap Q // Almacena aristas (peso, u, v)
  crear Conjunto MST_Vertices
  crear Arreglo costo_minimo[V] // Costo mínimo para conectar a MST
  crear Arreglo padre[V]       // Padre en el MST

  PARA cada vertice v en G:
    costo_minimo[v] = INFINITO
    padre[v] = NULO
  
  costo_minimo[inicio] = 0
  insertar(Q, (0, inicio, inicio)) // Insertar arista ficticia para el inicio
  
  MIENTRAS Q no está vacío:
    (peso_u, u_actual, v_actual) = extraer_min(Q)
    
    SI u_actual YA_ESTA_EN MST_Vertices: CONTINUAR
    
    agregar u_actual a MST_Vertices
    costo_MST = costo_MST + peso_u // Suma el peso de la arista agregada al MST

    PARA cada vecino v del u_actual:
      SI v NO_ESTA_EN MST_Vertices Y peso_arista(u_actual, v) < costo_minimo[v]:
        costo_minimo[v] = peso_arista(u_actual, v)
        padre[v] = u_actual
        insertar(Q, (costo_minimo[v], v, u_actual)) // arista (v, u_actual) con su peso
  
  RETORNAR MST_Vertices, padre, costo_MST
          </code></pre>
        </div>
      `
    },
    {
      id: 'pnn9-6-kruskal',
      title: '6. Algoritmo de Kruskal: Conectando lo Más Barato',
      notes: 'Explicación del algoritmo de Kruskal con ejemplo visual.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Construyendo el MST a Partir de las Aristas</h3>
        <p class="text-gray-600 mb-4">El Algoritmo de Kruskal construye el MST seleccionando las aristas de menor peso de todo el grafo, siempre que no formen un ciclo con las aristas ya seleccionadas.</p>
        <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 my-4">
          <h5 class="font-bold text-yellow-900">Pasos del Algoritmo</h5>
          <ol class="list-decimal pl-5 text-sm text-yellow-800 mt-2">
            <li>Crea una lista de todas las aristas del grafo.</li>
            <li>Ordena todas las aristas en orden ascendente por su peso.</li>
            <li>Inicializa una estructura de datos para detectar ciclos (Union-Find).</li>
            <li>Itera por las aristas ordenadas:
              <ul>
                <li>Si añadir la arista no forma un ciclo, añádela al MST.</li>
                <li>Si forma un ciclo, descártala.</li>
              </ul>
            </li>
            <li>Repite hasta que el MST contenga V-1 aristas (donde V es el número de vértices).</li>
          </ol>
        </div>
        <div class="flex justify-center my-4"><div class="mermaid">graph LR; A--4-->B; B--2-->C; C--1-->D; D--3-->A;</div></div>
        <p class="text-sm text-gray-700 mt-4">La implementación eficiente de Kruskal utiliza una estructura de datos <strong>Union-Find (Conjuntos Disjuntos)</strong> para la detección de ciclos.</p>
      `
    },
    {
      id: 'pnn9-7-union-find',
      title: '7. Estructura Auxiliar: Union-Find (Conjuntos Disjuntos)',
      notes: 'Explicar conceptualmente Union-Find, clave para Kruskal.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Detectando Ciclos con Eficiencia</h3>
        <p class="text-gray-600 mb-4">La estructura <strong>Union-Find</strong> (también conocida como Disjoint Set Union) es esencial para el algoritmo de Kruskal. Permite:</p>
        <div class="space-y-4">
          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
            <h5 class="font-bold text-blue-900">Operación <code>find(i)</code></h5>
            <p class="text-sm text-blue-800">Devuelve el representante (o "raíz") del conjunto al que pertenece el elemento <code>i</code>. Útil para saber si dos elementos están en el mismo conjunto.</p>
          </div>
          <div class="bg-white p-4 rounded-lg border-l-4 border-green-500 shadow-sm">
            <h5 class="font-bold text-green-900">Operación <code>union(i, j)</code></h5>
            <p class="text-sm text-green-800">Une los conjuntos a los que pertenecen <code>i</code> y <code>j</code> en un solo conjunto. Para Kruskal, si <code>find(u)</code> es diferente de <code>find(v)</code>, se pueden unir.</p>
          </div>
        </div>
  <p class="text-sm text-gray-700 mt-4">Si <code>find(u) == find(v)</code> para una arista <code>(u,v)</code>, significa que <code>u</code> y <code>v</code> ya están conectados en el mismo componente, y añadir la arista formaría un ciclo.</p>
      `
    },
    {
      id: 'pnn9-8-kruskal-pseudo',
      title: '8. Algoritmo de Kruskal (Pseudocódigo)',
      notes: 'Pseudocódigo detallado de Kruskal, incluyendo Union-Find.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Codificando la Estrategia de Kruskal</h3>
        <p class="text-gray-600 mb-4">Aquí el pseudocódigo del algoritmo de Kruskal, que destaca la importancia de ordenar y el uso de Union-Find.</p>
          <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
          <h5 class="text-gray-400 mb-2">// Pseudocódigo para el Algoritmo de Kruskal</h5>
          <pre class="font-mono text-sm max-w-full overflow-x-auto"><code>
FUNCIÓN kruskal(Grafo G):
  crear Lista Aristas_MST
  ordenar todas las aristas de G por peso ascendente
  
  crear estructura Union-Find para todos los vértices de G
  
  costo_MST = 0
  
  PARA cada arista (u, v, peso) en Aristas_ordenadas:
    SI find(u) != find(v): // Si u y v no están ya en el mismo componente
      union(u, v)          // Unir sus componentes
      agregar (u, v) a Aristas_MST
      costo_MST = costo_MST + peso
      
  RETORNAR Aristas_MST, costo_MST
          </code></pre>
        </div>
      `
    },
    {
      id: 'pnn9-9-complexity',
      title: '9. Análisis de Complejidad (Prim vs. Kruskal)',
      notes: 'Comparación de complejidad y elección entre algoritmos.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">¿Cuál Algoritmo es Mejor? Depende del Grafo</h3>
        <p class="text-gray-600 mb-4">La eficiencia de Prim y Kruskal depende de la representación del grafo y de la implementación de las estructuras de datos auxiliares.</p>
        <div class="grid md:grid-cols-2 gap-6 mt-4">
            <div class="bg-slate-50 p-4 rounded border">
                <h5 class="font-bold text-slate-800">Algoritmo de Prim</h5>
                <p class="text-3xl font-mono font-bold text-green-600">O(E log V) con Min-Heap</p>
                <p class="text-xs text-gray-600">Más eficiente para grafos <strong>densos</strong> (muchas aristas). E es el número de aristas, V es el número de vértices.</p>
            </div>
            <div class="bg-slate-50 p-4 rounded border">
                <h5 class="font-bold text-slate-800">Algoritmo de Kruskal</h5>
                <p class="text-3xl font-mono font-bold text-blue-600">O(E log E) o O(E log V)</p>
                <p class="text-xs text-gray-600">Más eficiente para grafos <strong>dispersos</strong> (pocas aristas). Dominado por el ordenamiento de aristas y operaciones Union-Find.</p>
            </div>
        </div>
      `
    },
    {
      id: 'pnn9-10-practice',
      title: '10. Práctica: Construyendo el MST',
      notes: 'Ejercicio de codificación para implementar MST.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Ejercicio: Diseñando una Red Óptima</h3>
        <p class="text-gray-600 mb-4">Dado un grafo representado como una lista de aristas con sus pesos, implementa uno de los algoritmos (Prim o Kruskal) para encontrar el MST.</p>
        <div class="bg-white border rounded-lg p-6">
          <h4 class="font-bold text-slate-800 mb-2">Grafo de Ejemplo</h4>
          <ul class="text-sm list-disc pl-5 text-gray-700">
              <li>Vértices: A, B, C, D, E</li>
              <li>Aristas: (A,B,2), (A,C,3), (B,C,1), (B,D,4), (C,D,5), (D,E,1)</li>
          </ul>
          <p class="text-sm mt-4 text-gray-500"><strong>Tu Tarea:</strong></p>
          <ul class="list-disc pl-5 text-sm text-gray-700">
              <li>Representa el grafo (lista de adyacencia o de aristas).</li>
              <li>Implementa el algoritmo de Prim o Kruskal.</li>
              <li>Imprime las aristas del MST y su costo total.</li>
          </ul>
        </div>
      `
    },
    {
      id: 'pnn9-11-resources',
      title: '11. Herramientas Visuales y Recursos',
      notes: 'Proporcionar recursos externos para visualización.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Visualizando Algoritmos de MST</h3>
        <p class="text-gray-600 mb-4">Observa cómo Prim y Kruskal construyen el MST paso a paso con estos simuladores:</p>
        <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white border rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <h4 class="font-bold text-blue-700 text-lg">VisuAlgo - MST</h4>
              <p class="text-sm text-gray-600 my-2">Visualiza Prim y Kruskal en acción con diferentes grafos.</p>
              <a href="https://visualgo.net/es/mst" target="_blank" class="text-blue-600 font-bold hover:underline">Ir a VisuAlgo (MST) &rarr;</a>
            </div>
            <div class="bg-white border rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <h4 class="font-bold text-green-700 text-lg">Programiz - Kruskal</h4>
              <p class="text-sm text-gray-600 my-2">Ejemplo interactivo del algoritmo de Kruskal.</p>
              <a href="https://www.programiz.com/dsa/kruskal-algorithm" target="_blank" class="text-green-600 font-bold hover:underline">Ver en Programiz &rarr;</a>
            </div>
        </div>
      `
    },
    {
      id: 'pnn9-end-questions',
      title: '¿Preguntas?',
      notes: 'Espacio para dudas.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full">
          <h3 class="text-2xl font-bold text-slate-900 mb-4">¿Dudas sobre Prim, Kruskal o MST?</h3>
        </div>
      `
    },
    {
      id: 'pnn9-end-thanks',
      title: 'Gracias y Próxima Clase',
      notes: 'Cierre y adelanto.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center">
          <h2 class="text-3xl font-bold text-slate-900 mb-4">Fin del Módulo 9</h2>
          <p class="text-gray-600 text-lg">Hemos optimizado la conexión de redes. En la próxima clase, continuaremos con grafos para encontrar los <b>Caminos Más Cortos</b> entre dos puntos con Dijkstra.</p>
        </div>
      `
    }
  ]
};