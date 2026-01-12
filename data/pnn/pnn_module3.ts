
import { Module } from '../../types';

export const PNN_MODULE_3: Module = {
  id: 'pnn-mod-3',
  title: '3. Divide y Conquista: Estrategias Eficientes',
  description: 'Paradigma algorítmico, recursividad, búsqueda binaria y optimización de min/max.',
  evaluation: '10% - Práctica',
  slides: [
    {
      id: 'pnn3-1',
      title: 'Divide y Conquista: La Estrategia del General',
      notes: 'Introducir la filosofía de resolver problemas complejos dividiéndolos.',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-600">
            ¿Cómo te comes un elefante? <strong>A mordiscos pequeños.</strong><br>
            Esa es la esencia de Divide y Conquista.
          </p>

          <div class="flex flex-col md:flex-row gap-4 justify-center text-center my-6">
            <div class="bg-blue-50 p-4 rounded-xl border border-blue-200 flex-1 shadow-sm transform hover:-translate-y-1 transition-transform">
              <div class="text-4xl mb-2">🔪</div>
              <h4 class="font-bold text-blue-900">1. Dividir</h4>
              <p class="text-xs text-blue-800 mt-2">Rompe el problema grande en pedazos manejables.</p>
            </div>
            <div class="bg-purple-50 p-4 rounded-xl border border-purple-200 flex-1 shadow-sm transform hover:-translate-y-1 transition-transform">
              <div class="text-4xl mb-2">⚔️</div>
              <h4 class="font-bold text-purple-900">2. Conquistar</h4>
              <p class="text-xs text-purple-800 mt-2">Resuelve cada pedazo (recursivamente). Si es pequeño, ¡resuelvelo ya!</p>
            </div>
            <div class="bg-green-50 p-4 rounded-xl border border-green-200 flex-1 shadow-sm transform hover:-translate-y-1 transition-transform">
              <div class="text-4xl mb-2">🧩</div>
              <h4 class="font-bold text-green-900">3. Combinar</h4>
              <p class="text-xs text-green-800 mt-2">Une las soluciones pequeñas para formar la solución gigante.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn3-2',
      title: 'Recursividad: Las Muñecas Rusas',
      notes: 'Explicar recursividad con un ejemplo clásico (Factorial).',
      contentHtml: `
        <div class="space-y-6">
          <div class="flex items-center gap-4 bg-yellow-50 p-4 rounded-xl border border-yellow-200">
             <div class="text-4xl">🪆</div>
             <div>
               <h4 class="font-bold text-yellow-900">El Principio Matryoshka</h4>
               <p class="text-xs text-yellow-800">Una función que se abre a sí misma para encontrar una versión más pequeña de sí misma.</p>
             </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded-xl border shadow-sm">
               <h5 class="font-bold text-slate-700 mb-2">Anatomía de una Función Recursiva</h5>
               <ul class="space-y-3 text-sm">
                 <li class="flex items-start gap-2">
                   <span class="bg-red-100 text-red-800 px-2 rounded font-bold text-xs mt-1">STOP</span>
                   <span class="text-gray-600"><strong>Caso Base:</strong> La muñeca más pequeña (sólida). Detiene la locura. Sin esto -> Stack Overflow.</span>
                 </li>
                 <li class="flex items-start gap-2">
                   <span class="bg-blue-100 text-blue-800 px-2 rounded font-bold text-xs mt-1">LOOP</span>
                   <span class="text-gray-600"><strong>Caso Recursivo:</strong> Abrir la muñeca actual y llamar a la siguiente más pequeña.</span>
                 </li>
               </ul>
            </div>
            <div class="bg-slate-900 text-slate-300 p-4 rounded-xl font-mono text-xs shadow-lg flex flex-col justify-center">
              <span class="text-purple-400">def</span> <span class="text-yellow-400">abrir_muñeca</span>(tamaño):<br>
              &nbsp;&nbsp;<span class="text-purple-400">if</span> tamaño == 1: <span class="text-gray-500"># Caso Base</span><br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">return</span> "Fin"<br>
              &nbsp;&nbsp;<span class="text-purple-400">else</span>: <span class="text-gray-500"># Recursión</span><br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">return</span> abrir_muñeca(tamaño - 1)
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn3-3-fact-code',
      title: 'Ejemplo Clásico: Factorial (!)',
      notes: 'Mostrar el código real del Factorial recursivo.',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-600">5! = 5 * 4 * 3 * 2 * 1. ¿Cómo lo programamos?</p>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-slate-900 text-slate-300 p-4 rounded-xl font-mono text-xs shadow-lg relative">
              <div class="absolute top-0 right-0 bg-blue-600 text-white text-[10px] px-2 py-1 rounded-bl-lg font-bold">C++</div>
              <span class="text-purple-400">int</span> factorial(<span class="text-purple-400">int</span> n) {<br>
              &nbsp;&nbsp;<span class="text-purple-400">if</span> (n == 0) <span class="text-purple-400">return</span> 1;<br>
              &nbsp;&nbsp;<span class="text-purple-400">return</span> n * factorial(n - 1);<br>
              }
            </div>
            <div class="bg-slate-900 text-slate-300 p-4 rounded-xl font-mono text-xs shadow-lg relative">
              <div class="absolute top-0 right-0 bg-yellow-600 text-white text-[10px] px-2 py-1 rounded-bl-lg font-bold">Python</div>
              <span class="text-purple-400">def</span> <span class="text-yellow-400">factorial</span>(n):<br>
              &nbsp;&nbsp;<span class="text-purple-400">if</span> n == 0: <span class="text-purple-400">return</span> 1<br>
              &nbsp;&nbsp;<span class="text-purple-400">return</span> n * factorial(n - 1)
            </div>
          </div>
          
          <div class="flex justify-center gap-2 text-xs font-mono text-gray-500 mt-2">
             <div class="bg-gray-100 px-2 py-1 rounded">fact(3)</div>
             <span>→</span>
             <div class="bg-gray-100 px-2 py-1 rounded">3 * fact(2)</div>
             <span>→</span>
             <div class="bg-gray-100 px-2 py-1 rounded">3 * 2 * fact(1)</div>
             <span>→</span>
             <div class="bg-gray-100 px-2 py-1 rounded">3 * 2 * 1 * fact(0)</div>
             <span>→</span>
             <div class="bg-green-100 text-green-800 px-2 py-1 rounded font-bold">6</div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn3-4-rec-vs-iter',
      title: 'Recursividad vs Iteración',
      notes: 'Discutir los pros y contras de la recursividad frente a soluciones iterativas.',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-600">No todo lo que brilla es oro. La recursividad es elegante, pero costosa.</p>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-4 rounded-xl border border-green-200">
               <div class="flex items-center gap-2 mb-2">
                 <span class="text-2xl">✨</span>
                 <h5 class="font-bold text-green-900">Recursividad (Elegancia)</h5>
               </div>
               <ul class="list-disc pl-5 text-xs text-green-800 space-y-1">
                 <li>Código limpio y corto.</li>
                 <li>Ideal para árboles y grafos.</li>
                 <li>Refleja la definición matemática.</li>
               </ul>
            </div>
            <div class="bg-orange-50 p-4 rounded-xl border border-orange-200">
               <div class="flex items-center gap-2 mb-2">
                 <span class="text-2xl">⚙️</span>
                 <h5 class="font-bold text-orange-900">Iteración (Eficiencia)</h5>
               </div>
               <ul class="list-disc pl-5 text-xs text-orange-800 space-y-1">
                 <li>Más rápida (sin overhead de llamadas).</li>
                 <li>Menos memoria (sin Call Stack).</li>
                 <li>Sin riesgo de Stack Overflow.</li>
               </ul>
            </div>
          </div>
          <p class="text-center text-xs text-gray-500 italic">"Usa recursividad para pensar, iteración para optimizar."</p>
        </div>
      `
    },
    {
      id: 'pnn3-5-binary-search-algo',
      title: 'Búsqueda Binaria: El Francotirador',
      notes: 'Detallar el algoritmo de Búsqueda Binaria como ejemplo de D&C.',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-600">
            Imagina buscar un nombre en una guía telefónica. ¿Empiezas por la 'A'? ¡No! Abres por la mitad.
          </p>

          <div class="bg-white p-4 rounded-xl border shadow-sm">
             <div class="flex justify-center items-center gap-1 mb-4">
                <div class="w-8 h-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-400">1</div>
                <div class="w-8 h-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-400">3</div>
                <div class="w-8 h-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-400">5</div>
                <div class="w-8 h-8 bg-blue-600 text-white rounded font-bold flex items-center justify-center text-xs scale-125 shadow-lg z-10">8</div>
                <div class="w-8 h-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-400">12</div>
                <div class="w-8 h-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-400">15</div>
                <div class="w-8 h-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-400">20</div>
             </div>
             
             <ol class="list-decimal list-inside text-sm text-gray-600 space-y-2">
               <li>Calcula el <strong>Centro</strong>.</li>
               <li>¿Es el objetivo? ¡Genial!</li>
               <li>¿Es menor? Descarta toda la mitad derecha.</li>
               <li>¿Es mayor? Descarta toda la mitad izquierda.</li>
             </ol>
          </div>
          
          <div class="text-center">
            <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold">Complejidad: O(log N)</span>
          </div>
        </div>
      `
    },
    {
      id: 'pnn3-6-binary-search-code',
      title: 'Código: Búsqueda Binaria',
      notes: 'Implementación iterativa de la búsqueda binaria.',
      contentHtml: `
        <div class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-slate-900 text-slate-300 p-4 rounded-xl font-mono text-[10px] shadow-lg relative">
              <div class="absolute top-0 right-0 bg-blue-600 text-white px-2 py-1 rounded-bl-lg font-bold">C++</div>
              while (low <= high) {<br>
              &nbsp;&nbsp;int mid = low + (high - low) / 2;<br>
              &nbsp;&nbsp;if (arr[mid] == target) return mid;<br>
              &nbsp;&nbsp;if (arr[mid] < target)<br>
              &nbsp;&nbsp;&nbsp;&nbsp;low = mid + 1;<br>
              &nbsp;&nbsp;else<br>
              &nbsp;&nbsp;&nbsp;&nbsp;high = mid - 1;<br>
              }<br>
              return -1;
            </div>
            <div class="bg-slate-900 text-slate-300 p-4 rounded-xl font-mono text-[10px] shadow-lg relative">
              <div class="absolute top-0 right-0 bg-yellow-600 text-white px-2 py-1 rounded-bl-lg font-bold">Python</div>
              while low <= high:<br>
              &nbsp;&nbsp;mid = (low + high) // 2<br>
              &nbsp;&nbsp;if arr[mid] == target: return mid<br>
              &nbsp;&nbsp;elif arr[mid] < target:<br>
              &nbsp;&nbsp;&nbsp;&nbsp;low = mid + 1<br>
              &nbsp;&nbsp;else:<br>
              &nbsp;&nbsp;&nbsp;&nbsp;high = mid - 1<br>
              return -1
            </div>
          </div>
          <div class="bg-yellow-50 p-2 rounded border border-yellow-200 text-center text-xs text-yellow-800">
            ⚠️ <strong>Requisito:</strong> El arreglo DEBE estar ordenado previamente.
          </div>
        </div>
      `
    },
    {
      id: 'pnn3-7-min-max-algo',
      title: 'El Torneo: Min y Max',
      notes: 'Aplicar D&C para encontrar Max/Min en O(N).',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-600">
            ¿Cómo encontrar al campeón y al perdedor? Organiza un torneo.
          </p>

          <div class="flex justify-center">
             <div class="mermaid">
               graph TD
                 A[12, 3, 1, 8] --> B[12, 3]
                 A --> C[1, 8]
                 B --> D[Min:3, Max:12]
                 C --> E[Min:1, Max:8]
                 D --> F[Min Global: 1]
                 E --> F
                 D --> G[Max Global: 12]
                 E --> G
                 
                 style F fill:#dcfce7,stroke:#16a34a
                 style G fill:#fee2e2,stroke:#dc2626
             </div>
          </div>
          
          <p class="text-xs text-gray-500 text-center">
            Dividimos el arreglo hasta tener parejas. Comparamos parejas y subimos a los ganadores (Max) y perdedores (Min).
          </p>
        </div>
      `
    },
    {
      id: 'pnn3-8-min-max-code',
      title: 'Código: MinMax Recursivo',
      notes: 'Código para el algoritmo Max/Min con D&C.',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-slate-900 text-slate-300 p-4 rounded-xl font-mono text-[10px] shadow-lg">
            <span class="text-purple-400">def</span> <span class="text-yellow-400">find_min_max</span>(arr, low, high):<br>
            &nbsp;&nbsp;<span class="text-gray-500"># Caso Base: 1 elemento</span><br>
            &nbsp;&nbsp;<span class="text-purple-400">if</span> low == high: <span class="text-purple-400">return</span> arr[low], arr[low]<br>
            <br>
            &nbsp;&nbsp;<span class="text-gray-500"># Caso Base: 2 elementos</span><br>
            &nbsp;&nbsp;<span class="text-purple-400">if</span> high == low + 1:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">return</span> (min(arr[low], arr[high]), max(arr[low], arr[high]))<br>
            <br>
            &nbsp;&nbsp;<span class="text-gray-500"># Divide</span><br>
            &nbsp;&nbsp;mid = (low + high) // 2<br>
            &nbsp;&nbsp;min1, max1 = find_min_max(arr, low, mid)<br>
            &nbsp;&nbsp;min2, max2 = find_min_max(arr, mid + 1, high)<br>
            <br>
            &nbsp;&nbsp;<span class="text-gray-500"># Combina</span><br>
            &nbsp;&nbsp;<span class="text-purple-400">return</span> min(min1, min2), max(max1, max2)
          </div>
        </div>
      `
    },
    {
      id: 'pnn3-9-pros-cons',
      title: 'La Balanza del General',
      notes: 'Resumir los beneficios y desafíos del paradigma D&C.',
      contentHtml: `
        <div class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded-xl border-t-4 border-green-500 shadow-sm">
               <h5 class="font-bold text-green-900 mb-2">A Favor 👍</h5>
               <ul class="list-disc pl-5 text-xs text-gray-600 space-y-2">
                 <li><strong>Eficiencia:</strong> Reduce problemas O(N) a O(log N) o O(N log N).</li>
                 <li><strong>Paralelismo:</strong> Los subproblemas son independientes, ¡ideal para procesadores multi-núcleo!</li>
                 <li><strong>Caché:</strong> Trabaja con subconjuntos de datos que caben en memoria rápida.</li>
               </ul>
            </div>
            <div class="bg-white p-4 rounded-xl border-t-4 border-red-500 shadow-sm">
               <h5 class="font-bold text-red-900 mb-2">En Contra 👎</h5>
               <ul class="list-disc pl-5 text-xs text-gray-600 space-y-2">
                 <li><strong>Complejidad:</strong> Pensar recursivamente puede ser difícil al principio.</li>
                 <li><strong>Memoria:</strong> La recursión consume pila (stack).</li>
                 <li><strong>Overhead:</strong> Para problemas muy pequeños, la iteración simple es más rápida.</li>
               </ul>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn3-10-practice-final',
      title: 'Reto: Potencia Recursiva',
      notes: 'Ejercicio de codificación final para afianzar D&C y recursividad.',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-indigo-600 text-white p-4 rounded-xl shadow-lg flex justify-between items-center">
            <div>
              <h3 class="font-bold text-lg">Misión: Exponenciación Rápida</h3>
              <p class="text-indigo-200 text-xs">Calcula x^n en tiempo O(log n).</p>
            </div>
            <div class="text-3xl">⚡</div>
          </div>

          <div class="bg-white p-4 border rounded-xl shadow-sm">
             <h5 class="font-bold text-slate-700 mb-2 text-sm">La Estrategia:</h5>
             <p class="text-xs text-gray-600 mb-2">No multipliques x por sí mismo n veces. ¡Divide!</p>
             <ul class="list-disc list-inside text-xs text-gray-600 space-y-2 font-mono">
               <li>Si n es par: x^n = (x^(n/2)) * (x^(n/2))</li>
               <li>Si n es impar: x^n = x * (x^(n-1))</li>
               <li>Caso base: x^0 = 1</li>
             </ul>
          </div>
        </div>
      `
    },
    {
      id: 'pnn3-11-resources',
      title: 'Caja de Herramientas',
      notes: 'Proporcionar a los estudiantes herramientas externas para reforzar su aprendizaje.',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-600">Visualiza la división del espacio.</p>
          
          <div class="grid md:grid-cols-1 gap-4">
            <a href="https://visualgo.net/es/bnsearch" target="_blank" class="group block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-blue-500 transition-colors">
              <h4 class="font-bold text-slate-800 group-hover:text-blue-600">VisuAlgo: Búsqueda Binaria ↗</h4>
              <p class="text-xs text-gray-500 mt-1">Mira cómo el rango de búsqueda se reduce a la mitad en cada paso.</p>
            </a>
          </div>
        </div>
      `
    },
    {
      id: 'pnn3-end-questions',
      title: '¿Preguntas?',
      notes: 'Espacio para dudas.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full space-y-4">
          <div class="text-6xl">🤔</div>
          <h3 class="text-2xl font-bold text-slate-900">¿Dudas sobre la Estrategia?</h3>
          <p class="text-gray-500">¿Recursión vs Iteración? ¿Casos base?</p>
        </div>
      `
    },
    {
      id: 'pnn3-end-thanks',
      title: 'Próxima Clase: Ordenamiento',
      notes: 'Cierre y adelanto.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center space-y-6">
          <div class="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-4xl">
            📶
          </div>
          <div>
            <h2 class="text-3xl font-bold text-slate-900">Fin del Módulo 3</h2>
            <p class="text-gray-600 mt-2">
              Próxima parada: <strong>Algoritmos de Ordenamiento</strong>.<br>
              Usaremos Divide y Conquista para ordenar datos a la velocidad del rayo (Merge Sort, Quick Sort).
            </p>
          </div>
        </div>
      `
    }
  ]
};
