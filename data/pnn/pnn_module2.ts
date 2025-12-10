import { Module } from '../../types';

export const PNN_MODULE_2: Module = {
  id: 'pnn-mod-2',
  title: '2. Heaps: Estructura y Algoritmos Fundamentales',
  description: 'Propiedades de los Heaps, representación en arreglos e implementación de las operaciones básicas (Insertar, Heapify).',
  evaluation: '0% - Ejercicios',
  slides: [
    {
      id: 'pnn2-1',
      title: 'Repaso: Teoremas de Árboles Binarios',
      notes: 'Recordar las propiedades matemáticas básicas de los árboles binarios.',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700 text-lg">Las propiedades matemáticas de los árboles binarios nos dan una idea de su eficiencia y capacidad.</p>

          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white p-5 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 class="font-bold text-blue-800 mb-1">Teorema I: Cantidad Máxima de Nodos</h4>
              <p class="text-sm text-slate-600 mb-2">El número máximo de nodos (N) en un árbol binario de altura <em>h</em> (donde la raíz es nivel 0) es:</p>
              <div class="bg-slate-100 p-2 rounded text-center font-mono font-bold text-lg text-slate-800">
                N = 2<sup>h+1</sup> - 1
              </div>
            </div>

            <div class="bg-white p-5 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 class="font-bold text-blue-800 mb-1">Teorema II: Relación Nodos/Aristas</h4>
              <p class="text-sm text-slate-600 mb-2">En cualquier árbol con N nodos, el número de aristas (E) que los conectan es siempre uno menos que el número de nodos.</p>
              <div class="bg-slate-100 p-2 rounded text-center font-mono font-bold text-lg text-slate-800">
                E = N - 1
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn2-2',
      title: 'El HEAP (Montículo): Una Base para la Optimización',
      notes: 'Introducir la definición de Heap y sus propiedades clave.',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700 text-lg">Un <strong>Heap</strong> (montículo) es un tipo especial de <strong>Árbol Binario Completo</strong> que satisface la propiedad de orden del montículo.</p>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <h4 class="font-bold text-red-900 mb-2">Propiedad de Orden del Max-Heap</h4>
              <p class="text-sm text-red-800">El valor de cada nodo es <strong>mayor o igual</strong> que el valor de sus hijos. Esto implica que el elemento más grande siempre estará en la raíz.</p>
            </div>

            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 class="font-bold text-green-900 mb-2">Propiedad de Orden del Min-Heap</h4>
              <p class="text-sm text-green-800">El valor de cada nodo es <strong>menor o igual</strong> que el valor de sus hijos. Esto implica que el elemento más pequeño siempre estará en la raíz.</p>
            </div>
          </div>
          <p class="text-sm text-gray-700 mt-4">La forma "Completa" del árbol binario y la propiedad de orden del montículo son claves para su eficiencia en algoritmos de optimización.</p>
        </div>
      `
    },
    {
      id: 'pnn2-3-visual-heap',
      title: 'Visualizando un Max-Heap',
      notes: 'Ejemplo visual de un Max-Heap.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Ejemplo de Max-Heap</h3>
        <p class="text-gray-600 mb-4">Observa cómo el valor de cada padre es siempre mayor que el de sus hijos.</p>
        <div class="flex justify-center my-8 bg-white p-6 rounded-xl border shadow-sm">
          <div class="mermaid">
            graph TD
              A((100)) --- B((80))
              A --- C((90))
              B --- D((40))
              B --- E((70))
              C --- F((85))
              C --- G((75))
              
              style A fill:#fecaca,stroke:#ef4444,stroke-width:2px,transform:scale(1.1)
              style B fill:#fff,stroke:#ef4444
              style C fill:#fff,stroke:#ef4444
              style D fill:#f5f3ff,stroke:#ef4444
              style E fill:#f5f3ff,stroke:#ef4444
              style F fill:#f5f3ff,stroke:#ef4444
              style G fill:#f5f3ff,stroke:#ef4444
          </div>
        </div>
      `
    },
    {
      id: 'pnn2-4-array-rep',
      title: 'Representación del Heap: ¡Como un Arreglo!',
      notes: 'Explicar cómo un Heap se almacena eficientemente en un arreglo.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">La Magia del Árbol Binario Completo</h3>
        <p class="text-gray-600 mb-4">Gracias a que un Heap es un Árbol Binario Completo, podemos almacenarlo de manera muy eficiente en un <strong>arreglo</strong>, sin usar punteros explícitos. Esto ahorra memoria y mejora el rendimiento.</p>
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <h5 class="font-bold text-blue-900">Calculando Padres e Hijos (Base 0)</h5>
          <ul class="list-disc list-inside text-blue-800 text-sm mt-2">
            <li>Padre de un nodo en índice <code>i</code>: <code>(i - 1) / 2</code> (división entera).</li>
            <li>Hijo izquierdo de un nodo en índice <code>i</code>: <code>2 * i + 1</code>.</li>
            <li>Hijo derecho de un nodo en índice <code>i</code>: <code>2 * i + 2</code>.</li>
          </ul>
        </div>
        <div class="flex justify-center my-4 bg-white p-6 rounded-xl border shadow-sm">
          <div class="mermaid">
            graph TD
              A((0)) --- B((1))
              A --- C((2))
              B --- D((3))
              B --- E((4))
              C --- F((5))
              C --- G((6))
          </div>
          <pre class="font-mono text-xs bg-gray-100 p-2 rounded ml-4">Arreglo: [A, B, C, D, E, F, G]</pre>
        </div>
      `
    },
    {
      id: 'pnn2-5-insert',
      title: 'Operación: Insertar en un Heap (Sift-Up)',
      notes: 'Algoritmo de inserción y "flotar" un elemento.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Añadiendo un Nuevo Elemento al Heap</h3>
        <p class="text-gray-600 mb-4">Para insertar un elemento en un Heap (Max-Heap):</p>
        <ol class="list-decimal pl-5 text-sm space-y-2">
          <li>Inserta el nuevo elemento en la <strong>siguiente posición libre</strong> del arreglo (manteniendo la propiedad de árbol binario completo).</li>
          <li>Realiza la operación <strong>"Sift-Up"</strong> (o "Flotar"):
            <ul><li>Compara el nuevo elemento con su padre. Si es mayor, intercámbialos.</li><li>Repite este proceso recursivamente (o iterativamente) hasta que el elemento sea menor o igual que su padre, o hasta que llegue a la raíz.</li></ul>
          </li>
        </ol>
        <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto mt-4">
          <h5 class="text-gray-400 mb-2">// Pseudocódigo para Sift-Up (Max-Heap)</h5>
          <pre class="font-mono text-sm max-w-full overflow-x-auto"><code>
FUNCIÓN sift_up(arreglo, indice):
  PADRE_INDICE = (indice - 1) / 2
  MIENTRAS indice > 0 Y arreglo[indice] > arreglo[PADRE_INDICE]:
    intercambiar(arreglo[indice], arreglo[PADRE_INDICE])
    indice = PADRE_INDICE
    PADRE_INDICE = (indice - 1) / 2
          </code></pre>
        </div>
      `
    },
    {
      id: 'pnn2-6-extract-max',
      title: 'Operación: Extraer Máximo (Sift-Down)',
      notes: 'Algoritmo para extraer el máximo y "hundir" un elemento.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Obteniendo el Elemento de Mayor Prioridad</h3>
        <p class="text-gray-600 mb-4">Para extraer el elemento máximo (de la raíz en un Max-Heap):</p>
        <ol class="list-decimal pl-5 text-sm space-y-2">
          <li>El elemento máximo es la raíz. Retíralo.</li>
          <li>Mueve el <strong>último elemento del Heap</strong> a la posición de la raíz.</li>
          <li>Realiza la operación <strong>"Sift-Down"</strong> (o "Hundir"):
            <ul><li>Compara el nuevo elemento de la raíz con sus hijos. Si es menor que alguno, intercámbialo con el hijo más grande.</li><li>Repite este proceso hasta que el elemento sea mayor o igual que sus hijos, o sea una hoja.</li></ul>
          </li>
        </ol>
        <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto mt-4">
          <h5 class="text-gray-400 mb-2">// Pseudocódigo para Sift-Down (Max-Heap)</h5>
          <pre class="font-mono text-sm max-w-full overflow-x-auto"><code>
FUNCIÓN sift_down(arreglo, indice, tamaño_heap):
  MIENTRAS VERDADERO:
    IZQUIERDA_INDICE = 2 * indice + 1
    DERECHA_INDICE = 2 * indice + 2
    MAXIMO_INDICE = indice

    SI IZQUIERDA_INDICE < tamaño_heap Y arreglo[IZQUIERDA_INDICE] > arreglo[MAXIMO_INDICE]:
      MAXIMO_INDICE = IZQUIERDA_INDICE

    SI DERECHA_INDICE < tamaño_heap Y arreglo[DERECHA_INDICE] > arreglo[MAXIMO_INDICE]:
      MAXIMO_INDICE = DERECHA_INDICE

    SI MAXIMO_INDICE == indice:
      ROMPER // El elemento ya está en su posición correcta
    
    intercambiar(arreglo[indice], arreglo[MAXIMO_INDICE])
    indice = MAXIMO_INDICE
          </code></pre>
        </div>
      `
    },
    {
      id: 'pnn2-7-heapify',
      title: 'Algoritmo: Heapify (Construyendo el Heap)',
      notes: 'Algoritmo eficiente para construir un Heap desde un arreglo desordenado.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Convirtiendo un Arreglo en un Heap Eficientemente</h3>
        <p class="text-gray-600 mb-4">El algoritmo <strong>Heapify</strong> toma un arreglo desordenado y lo transforma en un Heap en tiempo <strong>O(N)</strong>, lo cual es muy eficiente.</p>
        <ol class="list-decimal pl-5 text-sm space-y-2">
          <li>Itera desde el último nodo no-hoja hacia la raíz (es decir, desde <code>(N/2) - 1</code> hasta <code>0</code>).</li>
          <li>Para cada uno de estos nodos, aplica la operación <strong>"Sift-Down"</strong> para asegurar que el sub-árbol enraizado en ese nodo cumple la propiedad del Heap.</li>
        </ol>
        <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto mt-4">
          <h5 class="text-gray-400 mb-2">// Pseudocódigo para Heapify (Max-Heap)</h5>
          <pre class="font-mono text-sm max-w-full overflow-x-auto"><code>
FUNCIÓN build_heap(arreglo):
  N = tamaño del arreglo
  PARA i DESDE N/2 - 1 HASTA 0 (de forma descendente):
    sift_down(arreglo, i, N) // Asegura que el sub-árbol en i sea un Heap
          </code></pre>
        </div>
      `
    },
    {
      id: 'pnn2-8-app-priority-queue',
      title: 'Aplicación: Colas de Prioridad',
      notes: 'Conectar Heaps con Colas de Prioridad.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">La Implementación Secreta de las Colas de Prioridad</h3>
        <p class="text-gray-600 mb-4">Como vimos en el módulo de Colas, las <strong>Colas de Prioridad</strong> son estructuras donde los elementos son atendidos según su prioridad, no por su orden de llegada. La forma más eficiente de implementar una Cola de Prioridad es usando un <strong>Heap</strong>.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
            <h5 class="text-gray-400 mb-2">// C++: std::priority_queue (Max-Heap por defecto)</h5>
            <pre class="font-mono text-sm max-w-full overflow-x-auto"><code class="language-cpp">
#include &lt;queue&gt;
std::priority_queue&lt;int&gt; pq; // Max-Heap
pq.push(10); pq.push(30); pq.push(20);
std::cout &lt;&lt; pq.top(); // Imprime 30
            </code></pre>
          </div>
          <div class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
            <h5 class="text-gray-400 mb-2"># Python: heapq (Min-Heap)</h5>
            <pre class="font-mono text-sm max-w-full overflow-x-auto"><code class="language-python">
import heapq
pq = [] // Lista se usa como heap
heapq.heappush(pq, 10); heapq.heappush(pq, 30); heapq.heappush(pq, 20);
print(pq[0]) // Imprime 10 (el más pequeño)
            </code></pre>
          </div>
        </div>
      `
    },
    {
      id: 'pnn2-9-app-heap-sort',
      title: 'Aplicación: Heap Sort (Ordenamiento por Montículos)',
      notes: 'Introducir Heap Sort como un algoritmo eficiente.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Un Algoritmo de Ordenamiento Eficiente: Heap Sort</h3>
        <p class="text-gray-600 mb-4">Heap Sort es un algoritmo de ordenamiento por comparación, eficiente y en el lugar (in-place), que utiliza la estructura de Heap.</p>
        <ol class="list-decimal pl-5 text-sm space-y-2">
          <li><strong>Fase de Construcción (Heapify):</strong> Primero, convierte el arreglo de entrada en un Max-Heap (usando el algoritmo Heapify que vimos). Esto coloca el elemento más grande en la raíz.</li>
          <li><strong>Fase de Extracción:</strong>
            <ul><li>Intercambia la raíz (el elemento más grande) con el último elemento del Heap.</li><li>Reduce el tamaño del Heap en uno.</li><li>Aplica "Sift-Down" a la nueva raíz para restablecer la propiedad del Heap.</li><li>Repite hasta que el Heap esté vacío. Los elementos extraídos y colocados al final del arreglo estarán ahora ordenados.</li></ul>
          </li>
        </ol>
        <p class="text-sm text-gray-700 mt-4">La complejidad temporal de Heap Sort es <strong>O(N log N)</strong> en el peor, promedio y mejor caso.</p>
      `
    },
    {
      id: 'pnn2-10-practice',
      title: 'Práctica: Implementa tu propio Max-Heap',
      notes: 'Ejercicio de codificación para implementar un Max-Heap.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Ejercicio: Construyendo un Max-Heap desde Cero</h3>
        <p class="text-gray-600 mb-4">Implementa una clase <code>MaxHeap</code> en C++ o Python que use un arreglo (o lista) como almacenamiento interno. Tu clase debe incluir al menos los siguientes métodos:</p>
        <ul class="list-disc pl-5 space-y-2 text-gray-700">
            <li><code>insertar(valor)</code>: Añade un elemento al Heap.</li>
            <li><code>extraer_max()</code>: Elimina y devuelve el elemento máximo.</li>
            <li><code>construir_heap(arreglo_desordenado)</code>: Un método para construir el heap a partir de un arreglo dado.</li>
            <li><code>mostrar()</code>: Para ver el contenido actual del arreglo (no el árbol visual).</li>
        </ul>
        <p class="text-sm text-gray-500 mt-4"><b>Reto extra:</b> Implementa el algoritmo Heap Sort usando tu clase MaxHeap.</p>
      `
    },
    {
      id: 'pnn2-11-resources',
      title: 'Herramientas Visuales y Recursos',
      notes: 'Proporcionar a los estudiantes herramientas externas para reforzar su aprendizaje.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Visualizando el Heap y Heap Sort</h3>
        <p class="text-gray-600 mb-4">Explora estos simuladores para ver las operaciones de Heap y Heap Sort paso a paso:</p>
        <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white border rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <h4 class="font-bold text-blue-700 text-lg">VisuAlgo - Heap</h4>
              <p class="text-sm text-gray-600 my-2">Visualiza las operaciones de inserción y extracción en un Heap.</p>
              <a href="https://visualgo.net/es/heap" target="_blank" class="text-blue-600 font-bold hover:underline">Ir a VisuAlgo (Heap) &rarr;</a>
            </div>
            <div class="bg-white border rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <h4 class="font-bold text-green-700 text-lg">VisuAlgo - Heap Sort</h4>
              <p class="text-sm text-gray-600 my-2">Observa cómo funciona el algoritmo Heap Sort.</p>
              <a href="https://visualgo.net/es/sorting" target="_blank" class="text-green-600 font-bold hover:underline">Ir a VisuAlgo (Sorting) &rarr;</a>
            </div>
        </div>
      `
    },
    {
      id: 'pnn2-end-questions',
      title: '¿Preguntas?',
      notes: 'Espacio para dudas.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full">
          <h3 class="text-2xl font-bold text-slate-900 mb-4">¿Dudas sobre Heaps, Heapify o Sift-Up/Down?</h3>
        </div>
      `
    },
    {
      id: 'pnn2-end-thanks',
      title: 'Gracias y Próxima Clase',
      notes: 'Cierre y adelanto.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center">
          <h2 class="text-3xl font-bold text-slate-900 mb-4">Fin del Módulo 2</h2>
          <p class="text-gray-600 text-lg">Hemos visto cómo los Heaps optimizan el acceso al máximo/mínimo. En la próxima clase, exploraremos una potente estrategia algorítmica: <b>Divide y Conquista</b>.</p>
        </div>
      `
    }
  ]
};