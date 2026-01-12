import { Module } from '../../types';

export const PNN_MODULE_2: Module = {
  id: 'pnn-mod-2',
  title: '2. Heaps: Estructura y Algoritmos Fundamentales',
  description: 'Propiedades de los Heaps, representación en arreglos e implementación de las operaciones básicas (Insertar, Heapify).',
  evaluation: '0% - Ejercicios',
  slides: [
    {
      id: 'pnn2-1',
      title: 'Repaso: Matemáticas de Árboles',
      notes: 'Recordar las propiedades matemáticas básicas de los árboles binarios.',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-600">Antes de construir montañas, revisemos los cimientos matemáticos.</p>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-6 rounded-xl border-2 border-blue-100 shadow-sm relative overflow-hidden">
              <div class="absolute top-0 right-0 bg-blue-100 text-blue-600 p-2 rounded-bl-xl text-2xl">📈</div>
              <h4 class="font-bold text-blue-900 mb-2">Límite de Población</h4>
              <p class="text-xs text-gray-500 mb-4">¿Cuántos nodos caben en una altura <em>h</em>?</p>
              <div class="text-center">
                <span class="text-3xl font-bold text-slate-800">N = 2<sup>h+1</sup> - 1</span>
                <p class="text-[10px] text-gray-400 mt-1">Ej: Altura 3 -> 15 nodos máx.</p>
              </div>
            </div>

            <div class="bg-white p-6 rounded-xl border-2 border-purple-100 shadow-sm relative overflow-hidden">
              <div class="absolute top-0 right-0 bg-purple-100 text-purple-600 p-2 rounded-bl-xl text-2xl">🔗</div>
              <h4 class="font-bold text-purple-900 mb-2">Ley de Conexiones</h4>
              <p class="text-xs text-gray-500 mb-4">Relación entre Nodos (N) y Aristas (E).</p>
              <div class="text-center">
                <span class="text-3xl font-bold text-slate-800">E = N - 1</span>
                <p class="text-[10px] text-gray-400 mt-1">Siempre hay una entrada para todos, menos la raíz.</p>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn2-2',
      title: 'El HEAP: La Pirámide del Poder',
      notes: 'Introducir la definición de Heap y sus propiedades clave.',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-600">
            Un Heap no es solo un árbol. Es una <strong>Jerarquía Estricta</strong>.
          </p>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-red-50 p-5 rounded-xl border border-red-200 shadow-sm">
              <div class="flex items-center gap-3 mb-3">
                <span class="text-3xl">👑</span>
                <h4 class="font-bold text-red-900">Max-Heap (El Reino)</h4>
              </div>
              <p class="text-sm text-red-800 mb-2">
                <strong>La Regla del Rey:</strong> Ningún hijo puede ser más grande que su padre.
              </p>
              <div class="bg-white/50 p-2 rounded text-center font-mono text-xs text-red-700">
                Padre >= Hijos
              </div>
            </div>

            <div class="bg-green-50 p-5 rounded-xl border border-green-200 shadow-sm">
              <div class="flex items-center gap-3 mb-3">
                <span class="text-3xl">🪶</span>
                <h4 class="font-bold text-green-900">Min-Heap (La Ligereza)</h4>
              </div>
              <p class="text-sm text-green-800 mb-2">
                <strong>La Regla de la Pluma:</strong> Lo más ligero flota arriba. Ningún hijo es más pequeño que su padre.
              </p>
              <div class="bg-white/50 p-2 rounded text-center font-mono text-xs text-green-700">
                Padre <= Hijos
              </div>
            </div>
          </div>
          
          <div class="bg-yellow-50 p-3 rounded-lg border border-yellow-200 text-xs text-yellow-800 text-center">
            ⚠️ <strong>Requisito Estructural:</strong> Debe ser un Árbol Completo (llenar de izq a der). ¡Sin huecos!
          </div>
        </div>
      `
    },
    {
      id: 'pnn2-3-visual-heap',
      title: 'Anatomía de un Max-Heap',
      notes: 'Ejemplo visual de un Max-Heap.',
      contentHtml: `
        <div class="space-y-6">
          <div class="flex justify-center items-center gap-4">
             <div class="text-center">
               <span class="text-4xl font-bold text-red-600">100</span>
               <p class="text-xs text-gray-400">El Jefe Supremo</p>
             </div>
          </div>

          <div class="flex justify-center bg-white p-6 rounded-xl border shadow-sm">
            <div class="mermaid">
              graph TD
                A((100)) --- B((80))
                A --- C((90))
                B --- D((40))
                B --- E((70))
                C --- F((85))
                C --- G((75))
                
                style A fill:#fee2e2,stroke:#ef4444,stroke-width:4px
                style B fill:#fff,stroke:#ef4444
                style C fill:#fff,stroke:#ef4444
                style D fill:#f8fafc,stroke:#94a3b8
                style E fill:#f8fafc,stroke:#94a3b8
                style F fill:#f8fafc,stroke:#94a3b8
                style G fill:#f8fafc,stroke:#94a3b8
            </div>
          </div>
          
          <p class="text-center text-xs text-gray-500">
            Nota cómo 90 es mayor que 80, pero está en el mismo nivel. <br>
            En un Heap, <strong>no importa el orden entre hermanos</strong>, solo Padre vs Hijo.
          </p>
        </div>
      `
    },
    {
      id: 'pnn2-4-array-rep',
      title: 'Aplanando la Pirámide',
      notes: 'Explicar cómo un Heap se almacena eficientemente en un arreglo.',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-600">
            Los punteros son costosos. Los Heaps usan un truco matemático para vivir dentro de un simple <strong>Array</strong>.
          </p>

          <div class="bg-slate-900 text-white p-4 rounded-xl shadow-lg font-mono text-sm flex justify-center gap-2 overflow-x-auto">
             <div class="flex flex-col items-center"><span class="text-gray-500 text-[10px]">0</span><div class="border border-gray-600 p-2 w-10 text-center bg-red-900">100</div></div>
             <div class="flex flex-col items-center"><span class="text-gray-500 text-[10px]">1</span><div class="border border-gray-600 p-2 w-10 text-center">80</div></div>
             <div class="flex flex-col items-center"><span class="text-gray-500 text-[10px]">2</span><div class="border border-gray-600 p-2 w-10 text-center">90</div></div>
             <div class="flex flex-col items-center"><span class="text-gray-500 text-[10px]">3</span><div class="border border-gray-600 p-2 w-10 text-center">40</div></div>
             <div class="flex flex-col items-center"><span class="text-gray-500 text-[10px]">4</span><div class="border border-gray-600 p-2 w-10 text-center">70</div></div>
             <div class="flex flex-col items-center"><span class="text-gray-500 text-[10px]">5</span><div class="border border-gray-600 p-2 w-10 text-center">85</div></div>
             <div class="flex flex-col items-center"><span class="text-gray-500 text-[10px]">6</span><div class="border border-gray-600 p-2 w-10 text-center">75</div></div>
          </div>

          <div class="grid grid-cols-3 gap-4 text-center">
             <div class="bg-blue-50 p-3 rounded-lg border border-blue-200">
               <h5 class="font-bold text-blue-900 text-xs">Hijo Izquierdo</h5>
               <code class="text-blue-700 font-bold text-lg">2*i + 1</code>
             </div>
             <div class="bg-purple-50 p-3 rounded-lg border border-purple-200">
               <h5 class="font-bold text-purple-900 text-xs">Padre</h5>
               <code class="text-purple-700 font-bold text-lg">(i-1) / 2</code>
             </div>
             <div class="bg-blue-50 p-3 rounded-lg border border-blue-200">
               <h5 class="font-bold text-blue-900 text-xs">Hijo Derecho</h5>
               <code class="text-blue-700 font-bold text-lg">2*i + 2</code>
             </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn2-5-insert',
      title: 'Insertar: El Ascenso Corporativo',
      notes: 'Algoritmo de inserción y "flotar" un elemento.',
      contentHtml: `
        <div class="space-y-6">
          <div class="flex items-center gap-4 bg-green-50 p-4 rounded-xl border border-green-200">
             <div class="text-4xl">🧗</div>
             <div>
               <h4 class="font-bold text-green-900">Sift-Up (Flotar)</h4>
               <p class="text-xs text-green-800">Entras como el último empleado (al final del array) y subes de puesto si eres mejor que tu jefe.</p>
             </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded-xl border shadow-sm">
               <h5 class="font-bold text-slate-700 mb-2">Pasos:</h5>
               <ol class="list-decimal list-inside text-sm text-gray-600 space-y-2">
                 <li>Insertar al <strong>final</strong> (para mantener la forma completa).</li>
                 <li>Comparar con el <strong>Padre</strong>.</li>
                 <li>¿Soy mayor? <strong>Intercambiar</strong>.</li>
                 <li>Repetir hasta ser menor que el padre o llegar a la cima (Raíz).</li>
               </ol>
            </div>
            <div class="bg-slate-900 text-slate-300 p-4 rounded-xl font-mono text-[10px] shadow-lg">
              while (i > 0 && arr[i] > arr[parent(i)]) {<br>
              &nbsp;&nbsp;swap(arr[i], arr[parent(i)]);<br>
              &nbsp;&nbsp;i = parent(i);<br>
              }
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn2-6-extract-max',
      title: 'Extraer Máximo: La Sucesión',
      notes: 'Algoritmo para extraer el máximo y "hundir" un elemento.',
      contentHtml: `
        <div class="space-y-6">
          <div class="flex items-center gap-4 bg-red-50 p-4 rounded-xl border border-red-200">
             <div class="text-4xl">📉</div>
             <div>
               <h4 class="font-bold text-red-900">Sift-Down (Hundir)</h4>
               <p class="text-xs text-red-800">El Rey se va. Un plebeyo (el último nodo) toma el trono temporalmente y luego baja hasta encontrar su lugar.</p>
             </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded-xl border shadow-sm">
               <h5 class="font-bold text-slate-700 mb-2">Pasos:</h5>
               <ol class="list-decimal list-inside text-sm text-gray-600 space-y-2">
                 <li>Sacar la <strong>Raíz</strong> (Máximo).</li>
                 <li>Mover el <strong>último elemento</strong> a la Raíz.</li>
                 <li>Comparar con los <strong>Hijos</strong>.</li>
                 <li>¿Algún hijo es mayor? Intercambiar con el <strong>mayor</strong> de los hijos.</li>
                 <li>Repetir hasta ser mayor que los hijos o ser hoja.</li>
               </ol>
            </div>
            <div class="bg-slate-900 text-slate-300 p-4 rounded-xl font-mono text-[10px] shadow-lg">
              max = i;<br>
              if (L < N && arr[L] > arr[max]) max = L;<br>
              if (R < N && arr[R] > arr[max]) max = R;<br>
              if (max != i) {<br>
              &nbsp;&nbsp;swap(arr[i], arr[max]);<br>
              &nbsp;&nbsp;siftDown(max);<br>
              }
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn2-7-heapify',
      title: 'Heapify: Construcción Eficiente',
      notes: 'Algoritmo eficiente para construir un Heap desde un arreglo desordenado.',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-600">
            ¿Cómo convertir un caos en orden? No insertes uno por uno (Lento: O(N log N)). Usa <strong>Heapify</strong> (Rápido: O(N)).
          </p>

          <div class="bg-indigo-50 p-6 rounded-xl border border-indigo-200 text-center">
             <h4 class="font-bold text-indigo-900 text-lg mb-2">Estrategia "Bottom-Up"</h4>
             <p class="text-sm text-indigo-800 mb-4">
               Empieza desde los últimos padres y arréglalos hacia abajo. Como corregir una pirámide desde la base hacia la punta.
             </p>
             <div class="flex justify-center gap-2">
                <div class="bg-white px-3 py-1 rounded border text-xs">Nivel 3 (Hojas) ✅</div>
                <span class="text-gray-400">→</span>
                <div class="bg-white px-3 py-1 rounded border text-xs font-bold text-indigo-600">Nivel 2 (Arreglar)</div>
                <span class="text-gray-400">→</span>
                <div class="bg-white px-3 py-1 rounded border text-xs font-bold text-indigo-600">Nivel 1 (Arreglar)</div>
             </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn2-8-app-priority-queue',
      title: 'Aplicación: La Cola VIP',
      notes: 'Conectar Heaps con Colas de Prioridad.',
      contentHtml: `
        <div class="space-y-6">
          <div class="flex items-center gap-4 bg-yellow-50 p-4 rounded-xl border border-yellow-200">
             <div class="text-4xl">🎟️</div>
             <div>
               <h4 class="font-bold text-yellow-900">Priority Queue</h4>
               <p class="text-xs text-yellow-800">No es FIFO (First-In, First-Out). Es "El más importante pasa primero".</p>
             </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-slate-900 text-slate-300 p-4 rounded-xl font-mono text-xs shadow-lg relative">
              <div class="absolute top-0 right-0 bg-blue-600 text-white text-[10px] px-2 py-1 rounded-bl-lg font-bold">C++</div>
              <span class="text-gray-500">// Max-Heap por defecto</span><br>
              std::priority_queue&lt;int&gt; pq;<br>
              pq.push(10);<br>
              pq.push(50); <span class="text-green-400">// ¡VIP!</span><br>
              cout << pq.top(); <span class="text-gray-500">// 50</span>
            </div>
            <div class="bg-slate-900 text-slate-300 p-4 rounded-xl font-mono text-xs shadow-lg relative">
              <div class="absolute top-0 right-0 bg-yellow-600 text-white text-[10px] px-2 py-1 rounded-bl-lg font-bold">Python</div>
              <span class="text-gray-500"># Min-Heap por defecto</span><br>
              import heapq<br>
              heapq.heappush(pq, 10) <span class="text-green-400"># ¡VIP!</span><br>
              heapq.heappush(pq, 50)<br>
              print(pq[0]) <span class="text-gray-500"># 10</span>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn2-9-app-heap-sort',
      title: 'Heap Sort: Ordenando con Estilo',
      notes: 'Introducir Heap Sort como un algoritmo eficiente.',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-600">
            Si puedes extraer el máximo eficientemente, ¡puedes ordenar!
          </p>

          <div class="flex flex-col gap-4">
             <div class="flex items-center gap-4 p-3 border rounded-lg bg-gray-50">
               <div class="bg-slate-800 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold">1</div>
               <div class="text-sm">Construye un Max-Heap con todos los datos. <span class="text-xs text-gray-500">(El mayor sube a la cima)</span></div>
             </div>
             <div class="flex items-center gap-4 p-3 border rounded-lg bg-gray-50">
               <div class="bg-slate-800 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold">2</div>
               <div class="text-sm">Intercambia la Cima con el Final. <span class="text-xs text-gray-500">(El mayor ya está ordenado al fondo)</span></div>
             </div>
             <div class="flex items-center gap-4 p-3 border rounded-lg bg-gray-50">
               <div class="bg-slate-800 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold">3</div>
               <div class="text-sm">Reduce el tamaño del Heap y repara (Sift-Down). <span class="text-xs text-gray-500">(Repite)</span></div>
             </div>
          </div>
          
          <div class="text-center mt-2">
            <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">Complejidad: O(N log N) siempre</span>
          </div>
        </div>
      `
    },
    {
      id: 'pnn2-10-practice',
      title: 'Reto: El Arquitecto de Montículos',
      notes: 'Ejercicio de codificación para implementar un Max-Heap.',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-indigo-600 text-white p-4 rounded-xl shadow-lg flex justify-between items-center">
            <div>
              <h3 class="font-bold text-lg">Misión: Clase MaxHeap</h3>
              <p class="text-indigo-200 text-xs">Implementa la estructura desde cero usando un array.</p>
            </div>
            <div class="text-3xl">🏗️</div>
          </div>

          <div class="bg-white p-4 border rounded-xl shadow-sm">
             <h5 class="font-bold text-slate-700 mb-2 text-sm">Requisitos:</h5>
             <ul class="list-disc list-inside text-xs text-gray-600 space-y-2 font-mono">
               <li>vector&lt;int&gt; almacenamiento;</li>
               <li>void insertar(int val); // Usa Sift-Up</li>
               <li>int extraerMax(); // Usa Sift-Down</li>
               <li>void mostrar(); // Imprime el array</li>
             </ul>
          </div>
          
          <p class="text-center text-xs text-gray-500">
            Tip: Recuerda las fórmulas de índices: <code>2*i+1</code> y <code>2*i+2</code>.
          </p>
        </div>
      `
    },
    {
      id: 'pnn2-11-resources',
      title: 'Caja de Herramientas',
      notes: 'Proporcionar a los estudiantes herramientas externas para reforzar su aprendizaje.',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-600">Verlo en movimiento es entenderlo.</p>
          
          <div class="grid md:grid-cols-2 gap-4">
            <a href="https://visualgo.net/es/heap" target="_blank" class="group block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-blue-500 transition-colors">
              <h4 class="font-bold text-slate-800 group-hover:text-blue-600">VisuAlgo: Heap ↗</h4>
              <p class="text-xs text-gray-500 mt-1">Mira cómo los elementos "flotan" y se "hunden" en tiempo real.</p>
            </a>
            
            <a href="https://visualgo.net/es/sorting" target="_blank" class="group block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-green-500 transition-colors">
              <h4 class="font-bold text-slate-800 group-hover:text-green-600">VisuAlgo: Sorting ↗</h4>
              <p class="text-xs text-gray-500 mt-1">Selecciona "Heap Sort" y disfruta del espectáculo.</p>
            </a>
          </div>
        </div>
      `
    },
    {
      id: 'pnn2-end-questions',
      title: '¿Preguntas?',
      notes: 'Espacio para dudas.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full space-y-4">
          <div class="text-6xl">🤔</div>
          <h3 class="text-2xl font-bold text-slate-900">¿Dudas sobre la Pirámide?</h3>
          <p class="text-gray-500">¿Sift-Up vs Sift-Down? ¿Índices del array?</p>
        </div>
      `
    },
    {
      id: 'pnn2-end-thanks',
      title: 'Próxima Clase: Divide y Vencerás',
      notes: 'Cierre y adelanto.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center space-y-6">
          <div class="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-4xl">
            ⚔️
          </div>
          <div>
            <h2 class="text-3xl font-bold text-slate-900">Fin del Módulo 2</h2>
            <p class="text-gray-600 mt-2">
              Próxima parada: <strong>Divide y Conquista</strong>.<br>
              Aprenderemos a romper problemas grandes en pedazos pequeños (Merge Sort, Quick Sort).
            </p>
          </div>
        </div>
      `
    }
  ]
};