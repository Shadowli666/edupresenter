import { Module } from '../../types';

export const PYTHON_MODULE_9: Module = {
  id: 'py-mod-9',
  title: '9. Algoritmos de Búsqueda',
  description: 'Encontrando la aguja en el pajar: Lineal vs Binaria.',
  evaluation: '10% - Prueba de Comprobación',
  slides: [
    {
      id: 'py9-0-agenda',
      title: 'Objetivos de la Clase',
      notes: `Marcar expectativas y estructura de la clase.`,
      contentHtml: `
        <div class="flex flex-col h-full space-y-8">
          <div class="text-center">
            <h1 class="text-3xl font-bold text-slate-900 mb-2">Algoritmos de Búsqueda</h1>
            <p class="text-slate-600">Qué buscar, cómo buscar y cómo medir el costo.</p>
          </div>

          <div class="grid md:grid-cols-2 gap-8 flex-1">
            <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 class="font-bold text-slate-800 mb-3">Al finalizar podrás:</h3>
              <ul class="text-sm text-slate-700 space-y-2">
                <li>Implementar <strong>búsqueda lineal</strong> y justificar su costo.</li>
                <li>Implementar <strong>búsqueda binaria</strong> y explicar su requisito de orden.</li>
                <li>Elegir entre <strong>in</strong>, <strong>index</strong>, lineal o binaria según el caso.</li>
                <li>Detectar casos borde: lista vacía, no encontrado, duplicados.</li>
              </ul>
            </div>

            <div class="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 class="font-bold text-slate-800 mb-3">Plan sugerido</h3>
              <div class="text-sm text-slate-700 space-y-2">
                <div class="flex items-center"><span>Conceptos + complejidad</span></div>
                <div class="flex items-center"><span>Lineal: implementación + trazado</span></div>
                <div class="flex items-center"><span>Binaria: implementación + trazado</span></div>
                <div class="flex items-center"><span>Casos borde + duplicados</span></div>
                <div class="flex items-center"><span>Práctica guiada + mini-evaluación</span></div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py9-1-linear',
      title: 'Búsqueda Lineal (Secuencial)',
      notes: 'Fuerza bruta.',
      contentHtml: `
        <div class="flex flex-col h-full space-y-8">
          <div class="text-center">
            <h3 class="text-2xl font-bold text-slate-800">Revisar uno por uno</h3>
            <p class="text-slate-600">El método más intuitivo: mirar cada elemento hasta encontrarlo.</p>
          </div>

          <div class="flex-1 flex flex-col items-center justify-center">
            <div class="text-sm font-bold text-slate-500 mb-4">Buscando: <span class="text-red-600 text-xl">42</span></div>

            <div class="flex gap-2">
              <!-- Elementos -->
              <div class="flex flex-col items-center gap-2">
                <div class="w-12 h-12 bg-slate-200 rounded flex items-center justify-center font-bold text-slate-400">10</div>
                <div class="text-xs text-red-500 font-bold">No</div>
              </div>
              <div class="flex flex-col items-center gap-2">
                <div class="w-12 h-12 bg-slate-200 rounded flex items-center justify-center font-bold text-slate-400">5</div>
                <div class="text-xs text-red-500 font-bold">No</div>
              </div>
              <div class="flex flex-col items-center gap-2">
                <div class="w-12 h-12 bg-slate-200 rounded flex items-center justify-center font-bold text-slate-400">99</div>
                <div class="text-xs text-red-500 font-bold">No</div>
              </div>
              <div class="flex flex-col items-center gap-2">
                <div class="w-12 h-12 bg-green-500 text-white rounded flex items-center justify-center font-bold shadow-lg scale-110 border-2 border-green-600">42</div>
                <div class="text-xs text-green-600 font-bold">¡Sí!</div>
              </div>
              <div class="flex flex-col items-center gap-2 opacity-50">
                <div class="w-12 h-12 bg-slate-100 rounded flex items-center justify-center font-bold text-slate-300">8</div>
                <div class="text-xs text-transparent">.</div>
              </div>
            </div>

            <div class="mt-8 w-full max-w-md bg-slate-100 rounded-full h-2 overflow-hidden">
              <div class="bg-blue-500 h-full w-4/5 animate-pulse"></div>
            </div>
            <p class="text-xs text-slate-400 mt-2">Eficiencia: O(n) - Lento para listas grandes.</p>
          </div>
        </div>
      `
    },
    {
      id: 'py9-2-binary-concept',
      title: 'Búsqueda Binaria: Divide y Vencerás',
      notes: 'Requiere orden.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full items-center">
          <div class="space-y-6">
            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <h3 class="font-bold text-yellow-800">Requisito Fundamental</h3>
              <p class="text-sm text-yellow-700">La lista DEBE estar <strong>ordenada</strong>.</p>
            </div>
            <p class="text-slate-600">
              En lugar de mirar uno por uno, miramos al medio.
              <br>Si el número buscado es menor, descartamos toda la mitad derecha.
              <br>Si es mayor, descartamos la izquierda.
            </p>
            <div class="bg-slate-900 p-4 rounded text-xs font-mono text-slate-300">
              <span class="text-purple-400">while</span> izq <= der:<br>
              &nbsp;&nbsp;medio = (izq + der) // <span class="text-blue-400">2</span><br>
              &nbsp;&nbsp;<span class="text-purple-400">if</span> lista[medio] == obj: <span class="text-green-400">return</span> medio<br>
              &nbsp;&nbsp;<span class="text-purple-400">elif</span> lista[medio] < obj:<br>
              &nbsp;&nbsp;&nbsp;&nbsp;izq = medio + <span class="text-blue-400">1</span><br>
              &nbsp;&nbsp;<span class="text-purple-400">else</span>:<br>
              &nbsp;&nbsp;&nbsp;&nbsp;der = medio - <span class="text-blue-400">1</span>
            </div>
          </div>

          <!-- Visualización Binaria -->
          <div class="flex flex-col items-center space-y-4">
            <div class="text-sm font-bold text-slate-500">Buscando: <span class="text-blue-600 text-xl">70</span></div>

            <!-- Paso 1 -->
            <div class="w-full bg-white p-2 rounded border shadow-sm">
              <div class="text-xs text-slate-400 mb-1">Paso 1: Medio es 50. 70 > 50. Descartar Izquierda.</div>
              <div class="flex justify-between gap-1">
                <div class="flex-1 bg-red-100 text-red-300 text-center text-xs py-1 rounded decoration-slice line-through">10</div>
                <div class="flex-1 bg-red-100 text-red-300 text-center text-xs py-1 rounded decoration-slice line-through">30</div>
                <div class="flex-1 bg-slate-200 text-slate-600 text-center text-xs py-1 rounded font-bold border-2 border-slate-400">50</div>
                <div class="flex-1 bg-blue-100 text-blue-800 text-center text-xs py-1 rounded">70</div>
                <div class="flex-1 bg-blue-100 text-blue-800 text-center text-xs py-1 rounded">90</div>
              </div>
            </div>

            <!-- Paso 2 -->
            <div class="w-full bg-white p-2 rounded border shadow-sm">
              <div class="text-xs text-slate-400 mb-1">Paso 2: Medio es 80 (aprox). 70 < 80. Descartar Derecha.</div>
              <div class="flex justify-between gap-1">
                <div class="flex-1 bg-slate-50 text-slate-200 text-center text-xs py-1 rounded">.</div>
                <div class="flex-1 bg-slate-50 text-slate-200 text-center text-xs py-1 rounded">.</div>
                <div class="flex-1 bg-slate-50 text-slate-200 text-center text-xs py-1 rounded">.</div>
                <div class="flex-1 bg-blue-100 text-blue-800 text-center text-xs py-1 rounded">70</div>
                <div class="flex-1 bg-red-100 text-red-300 text-center text-xs py-1 rounded decoration-slice line-through">90</div>
              </div>
            </div>

            <!-- Paso 3 -->
            <div class="w-full bg-white p-2 rounded border shadow-sm">
              <div class="text-xs text-slate-400 mb-1">Paso 3: ¡Encontrado!</div>
              <div class="flex justify-between gap-1">
                <div class="flex-1 bg-slate-50 text-slate-200 text-center text-xs py-1 rounded">.</div>
                <div class="flex-1 bg-slate-50 text-slate-200 text-center text-xs py-1 rounded">.</div>
                <div class="flex-1 bg-slate-50 text-slate-200 text-center text-xs py-1 rounded">.</div>
                <div class="flex-1 bg-green-500 text-white text-center text-xs py-1 rounded font-bold shadow-lg scale-110">70</div>
                <div class="flex-1 bg-slate-50 text-slate-200 text-center text-xs py-1 rounded">.</div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py9-3-complexity',
      title: 'Comparación de Eficiencia',
      notes: 'O(n) vs O(log n).',
      contentHtml: `
        <div class="flex flex-col h-full space-y-8">
          <div class="text-center">
            <h3 class="text-2xl font-bold text-slate-800">¿Por qué importa?</h3>
            <p class="text-slate-600">La diferencia es abismal en grandes volúmenes de datos.</p>
          </div>

          <div class="flex-1 grid md:grid-cols-2 gap-12 items-center">
            <!-- Gráfico Simplificado -->
            <div class="relative h-64 bg-white border-l-2 border-b-2 border-slate-400 p-4">
              <div class="absolute bottom-0 left-0 w-full h-full pointer-events-none">
                <!-- Lineal -->
                <svg class="w-full h-full overflow-visible">
                  <path d="M0 256 L 256 0" fill="none" stroke="#ef4444" stroke-width="3" />
                  <text x="260" y="10" class="text-xs fill-red-500 font-bold">Lineal O(n)</text>
                  
                  <!-- Logarítmica -->
                  <path d="M0 256 Q 50 250, 256 200" fill="none" stroke="#22c55e" stroke-width="3" />
                  <text x="260" y="200" class="text-xs fill-green-600 font-bold">Binaria O(log n)</text>
                </svg>
              </div>
              <div class="absolute -bottom-6 right-0 text-xs text-slate-500">Datos (n)</div>
              <div class="absolute top-0 -left-8 text-xs text-slate-500 -rotate-90">Tiempo</div>
            </div>

            <!-- Tabla de Datos -->
            <div class="bg-slate-50 p-6 rounded-xl shadow-inner">
              <table class="w-full text-sm text-left">
                <thead class="text-slate-500 border-b border-slate-200">
                  <tr>
                    <th class="pb-2">Elementos</th>
                    <th class="pb-2 text-red-500">Lineal (Pasos)</th>
                    <th class="pb-2 text-green-600">Binaria (Pasos)</th>
                  </tr>
                </thead>
                <tbody class="font-mono text-slate-700">
                  <tr>
                    <td class="py-2">10</td>
                    <td class="py-2">10</td>
                    <td class="py-2 font-bold">4</td>
                  </tr>
                  <tr>
                    <td class="py-2">100</td>
                    <td class="py-2">100</td>
                    <td class="py-2 font-bold">7</td>
                  </tr>
                  <tr>
                    <td class="py-2">1,000,000</td>
                    <td class="py-2">1,000,000</td>
                    <td class="py-2 font-bold text-green-600 text-lg">20</td>
                  </tr>
                </tbody>
              </table>
              <p class="text-xs text-slate-500 mt-4 italic">
                ¡Para buscar en un millón de datos, la binaria solo necesita 20 intentos!
              </p>
            </div>
          </div>
        </div>
      `
    }
    ,
    {
      id: 'py9-4-linear-code',
      title: 'Lineal en Python (Implementación)',
      notes: 'Mostrar retorno de índice y -1. Reforzar early return.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full items-center">
          <div class="space-y-6">
            <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 class="text-xl font-bold text-slate-800 mb-2">Patrón: recorrer y comparar</h3>
              <p class="text-sm text-slate-600">
                La búsqueda lineal funciona en cualquier lista (ordenada o no).
                <br>Si lo encuentras, retornas el índice. Si no, retornas <span class="font-mono">-1</span>.
              </p>
            </div>

            <div class="bg-slate-900 p-5 rounded-xl font-mono text-xs text-slate-300">
              <div class="text-slate-500 mb-2"># Lineal: devolver índice o -1</div>
              <span class="text-purple-400">def</span> <span class="text-yellow-300">linear_search</span>(arr, target):<br>
              &nbsp;&nbsp;<span class="text-purple-400">for</span> i, val <span class="text-purple-400">in</span> <span class="text-blue-400">enumerate</span>(arr):<br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">if</span> val == target:<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-green-400">return</span> i<br>
              &nbsp;&nbsp;<span class="text-green-400">return</span> -<span class="text-blue-400">1</span>
            </div>
          </div>

          <div class="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 class="font-bold text-slate-800 mb-4">Mini-trazado</h3>
            <div class="text-sm text-slate-700 space-y-3">
              <div class="bg-white p-4 rounded border">
                <div class="font-mono text-xs text-slate-500">arr = [7, 3, 9, 2], target = 9</div>
                <div class="mt-2 flex gap-2">
                  <div class="w-12 h-12 bg-slate-200 rounded flex items-center justify-center font-bold">7</div>
                  <div class="w-12 h-12 bg-slate-200 rounded flex items-center justify-center font-bold">3</div>
                  <div class="w-12 h-12 bg-green-500 text-white rounded flex items-center justify-center font-bold shadow-lg scale-110">9</div>
                  <div class="w-12 h-12 bg-slate-100 rounded flex items-center justify-center font-bold text-slate-400">2</div>
                </div>
                <div class="mt-3 text-xs text-slate-500">Comparaciones: 3 → índice 2</div>
              </div>

              <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <div class="text-sm text-yellow-800"><strong>Tip:</strong> Si esperas muchos “no encontrado”, piensa en estructuras como <span class="font-mono">set</span> o <span class="font-mono">dict</span> (búsqueda promedio O(1)).</div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py9-5-binary-code',
      title: 'Binaria en Python (Iterativa)',
      notes: 'Aterrizar el pseudocódigo. Subrayar precondición: orden.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full items-center">
          <div class="space-y-6">
            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <h3 class="font-bold text-yellow-800">Precondición</h3>
              <p class="text-sm text-yellow-700">La lista debe estar <strong>ordenada</strong> (ascendente).</p>
            </div>

            <div class="bg-slate-900 p-5 rounded-xl font-mono text-xs text-slate-300">
              <div class="text-slate-500 mb-2"># Binaria: devolver índice o -1</div>
              <span class="text-purple-400">def</span> <span class="text-yellow-300">binary_search</span>(arr, target):<br>
              &nbsp;&nbsp;left, right = <span class="text-blue-400">0</span>, <span class="text-blue-400">len</span>(arr) - <span class="text-blue-400">1</span><br>
              &nbsp;&nbsp;<span class="text-purple-400">while</span> left <= right:<br>
              &nbsp;&nbsp;&nbsp;&nbsp;mid = (left + right) // <span class="text-blue-400">2</span><br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">if</span> arr[mid] == target:<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-green-400">return</span> mid<br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">if</span> arr[mid] < target:<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;left = mid + <span class="text-blue-400">1</span><br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">else</span>:<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;right = mid - <span class="text-blue-400">1</span><br>
              &nbsp;&nbsp;<span class="text-green-400">return</span> -<span class="text-blue-400">1</span>
            </div>
          </div>

          <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 class="font-bold text-slate-800 mb-3">Ejemplo (trazado rápido)</h3>
            <div class="font-mono text-xs text-slate-600 mb-4">arr = [2, 5, 7, 9, 12, 20], target = 12</div>

            <div class="space-y-3">
              <div class="bg-slate-50 p-4 rounded border border-slate-200">
                <div class="text-xs text-slate-500 mb-2">Paso 1: mid=2 → 7 &lt; 12 → mover left</div>
                <div class="flex gap-1">
                  <div class="flex-1 bg-slate-100 text-center text-xs py-1 rounded">2</div>
                  <div class="flex-1 bg-slate-100 text-center text-xs py-1 rounded">5</div>
                  <div class="flex-1 bg-blue-200 text-blue-900 text-center text-xs py-1 rounded font-bold border border-blue-300">7</div>
                  <div class="flex-1 bg-slate-100 text-center text-xs py-1 rounded">9</div>
                  <div class="flex-1 bg-slate-100 text-center text-xs py-1 rounded">12</div>
                  <div class="flex-1 bg-slate-100 text-center text-xs py-1 rounded">20</div>
                </div>
              </div>

              <div class="bg-slate-50 p-4 rounded border border-slate-200">
                <div class="text-xs text-slate-500 mb-2">Paso 2: mid=4 → ¡12 encontrado!</div>
                <div class="flex gap-1">
                  <div class="flex-1 bg-slate-100 text-center text-xs py-1 rounded">2</div>
                  <div class="flex-1 bg-slate-100 text-center text-xs py-1 rounded">5</div>
                  <div class="flex-1 bg-slate-100 text-center text-xs py-1 rounded">7</div>
                  <div class="flex-1 bg-slate-100 text-center text-xs py-1 rounded">9</div>
                  <div class="flex-1 bg-green-500 text-white text-center text-xs py-1 rounded font-bold shadow">12</div>
                  <div class="flex-1 bg-slate-100 text-center text-xs py-1 rounded">20</div>
                </div>
              </div>
            </div>

            <p class="text-xs text-slate-500 mt-4">Costo: O(log n) comparaciones.</p>
          </div>
        </div>
      `
    },
    {
      id: 'py9-6-edge-cases',
      title: 'Casos Borde y Errores Comunes',
      notes: 'Lista vacía, no encontrado, duplicados, lista no ordenada.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full">
          <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 class="font-bold text-slate-800 mb-3">Casos borde a probar</h3>
            <ul class="text-sm text-slate-700 space-y-2">
              <li><strong>Lista vacía:</strong> devolver -1 sin romper.</li>
              <li><strong>No encontrado:</strong> terminar el ciclo correctamente.</li>
              <li><strong>Duplicados:</strong> binaria puede devolver “cualquier” índice válido.</li>
              <li><strong>Lista no ordenada:</strong> binaria da resultados incorrectos.</li>
            </ul>

            <div class="mt-6 bg-slate-900 p-4 rounded font-mono text-xs text-slate-300">
              <div class="text-slate-500 mb-2"># No uses binaria si no está ordenada</div>
              arr = [<span class="text-green-400">10</span>, <span class="text-green-400">2</span>, <span class="text-green-400">8</span>, <span class="text-green-400">4</span>]  <span class="text-gray-500"># desordenada</span><br>
              target = <span class="text-green-400">8</span>
            </div>
          </div>

          <div class="bg-red-50 p-6 rounded-xl border border-red-200">
            <h3 class="font-bold text-red-800 mb-3">Bug típico en binaria</h3>
            <p class="text-sm text-red-700">Si no mueves correctamente <span class="font-mono">left</span> o <span class="font-mono">right</span>, puedes caer en un bucle infinito.</p>

            <div class="mt-4 bg-white p-4 rounded border border-red-100">
              <div class="text-xs font-bold text-red-700 mb-2">Regla de oro</div>
              <div class="text-sm text-slate-700">En cada iteración debes <strong>reducir</strong> el rango: o <span class="font-mono">left = mid + 1</span> o <span class="font-mono">right = mid - 1</span>.</div>
            </div>

            <div class="mt-4 bg-white p-4 rounded border border-red-100">
              <div class="text-xs font-bold text-red-700 mb-2">Duplicados</div>
              <div class="text-sm text-slate-700">Si quieres el <strong>primer</strong> índice, necesitas una variante (seguir buscando a la izquierda).</div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py9-7-python-builtins',
      title: 'Herramientas Python: in, index y bisect',
      notes: 'Conectar con práctica real: membership, index y búsqueda en orden.',
      contentHtml: `
        <div class="flex flex-col h-full space-y-8">
          <div class="text-center">
            <h3 class="text-2xl font-bold text-slate-800">En la vida real… ¿qué usas?</h3>
            <p class="text-slate-600">A veces no necesitas re-implementar: necesitas elegir bien.</p>
          </div>

          <div class="grid md:grid-cols-3 gap-6 flex-1">
            <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h4 class="font-bold text-slate-800">Operador <span class="font-mono">in</span></h4>
              <p class="text-sm text-slate-600 mt-2">Verifica si existe. En listas es lineal.</p>
              <div class="mt-4 bg-slate-900 p-4 rounded font-mono text-xs text-slate-300">
                <span class="text-purple-400">if</span> <span class="text-green-400">42</span> <span class="text-purple-400">in</span> arr:<br>
                &nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"Está"</span>)
              </div>
            </div>

            <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h4 class="font-bold text-slate-800"><span class="font-mono">list.index()</span></h4>
              <p class="text-sm text-slate-600 mt-2">Devuelve índice, pero lanza error si no existe.</p>
              <div class="mt-4 bg-slate-900 p-4 rounded font-mono text-xs text-slate-300">
                <span class="text-purple-400">try</span>:<br>
                &nbsp;&nbsp;i = arr.index(<span class="text-green-400">42</span>)<br>
                <span class="text-purple-400">except</span> <span class="text-yellow-300">ValueError</span>:<br>
                &nbsp;&nbsp;i = -<span class="text-blue-400">1</span>
              </div>
            </div>

            <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h4 class="font-bold text-slate-800"><span class="font-mono">bisect</span> (ordenadas)</h4>
              <p class="text-sm text-slate-600 mt-2">Encuentra posición de inserción en O(log n).</p>
              <div class="mt-4 bg-slate-900 p-4 rounded font-mono text-xs text-slate-300">
                <span class="text-purple-400">import</span> bisect<br>
                i = bisect.bisect_left(arr, target)
              </div>
              <p class="text-xs text-slate-500 mt-3">Útil para mantener listas ordenadas.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py9-8-practice',
      title: 'Práctica Guiada',
      notes: 'En parejas o individual. Hacer trazado en papel y luego codificar.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full">
          <div class="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 class="font-bold text-slate-800 mb-3">Ejercicio 1: Lineal</h3>
            <p class="text-sm text-slate-700">Implementa una función que devuelva el índice del <strong>primer</strong> match.</p>
            <div class="mt-4 bg-white p-4 rounded border">
              <div class="text-xs text-slate-500">Entrada</div>
              <div class="font-mono text-sm">arr = [5, 1, 5, 9], target = 5</div>
              <div class="text-xs text-slate-500 mt-3">Salida esperada</div>
              <div class="font-mono text-sm">0</div>
            </div>
            <div class="mt-4 text-xs text-slate-500">Extra: contar comparaciones realizadas.</div>
          </div>

          <div class="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 class="font-bold text-slate-800 mb-3">Ejercicio 2: Binaria</h3>
            <p class="text-sm text-slate-700">Dada una lista ordenada, encuentra el índice o -1.</p>
            <div class="mt-4 bg-white p-4 rounded border">
              <div class="text-xs text-slate-500">Entrada</div>
              <div class="font-mono text-sm">arr = [1, 4, 7, 9, 11, 30], target = 8</div>
              <div class="text-xs text-slate-500 mt-3">Salida esperada</div>
              <div class="font-mono text-sm">-1</div>
            </div>
            <div class="mt-4 text-xs text-slate-500">Extra: imprimir left/right/mid en cada paso.</div>
          </div>
        </div>
      `
    },
    {
      id: 'py9-9-checklist',
      title: 'Checklist de Selección (Examen / Vida Real)',
      notes: 'Cerrar con criterio de decisión.',
      contentHtml: `
        <div class="flex flex-col h-full space-y-8">
          <div class="text-center">
            <h3 class="text-2xl font-bold text-slate-800">¿Cuál uso?</h3>
            <p class="text-slate-600">La respuesta depende del tipo de dato y de las operaciones.</p>
          </div>

          <div class="grid md:grid-cols-2 gap-8 flex-1">
            <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h4 class="font-bold text-slate-800 mb-3">Usa lineal si…</h4>
              <ul class="text-sm text-slate-700 space-y-2">
                <li>La lista es pequeña.</li>
                <li>Los datos cambian mucho y no vale la pena ordenar.</li>
                <li>No puedes garantizar orden.</li>
              </ul>
            </div>

            <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h4 class="font-bold text-slate-800 mb-3">Usa binaria si…</h4>
              <ul class="text-sm text-slate-700 space-y-2">
                <li>La lista está ordenada (o puedes ordenarla una vez).</li>
                <li>Harás <strong>muchas</strong> búsquedas sobre el mismo conjunto.</li>
                <li>Necesitas eficiencia en grandes volúmenes.</li>
              </ul>
            </div>
          </div>

          <div class="bg-slate-900 p-4 rounded-xl font-mono text-xs text-slate-300">
            <div class="text-slate-500 mb-2"># Regla práctica</div>
            <span class="text-gray-400"># Muchas búsquedas:</span> ordenar 1 vez → binaria muchas veces<br>
            <span class="text-gray-400"># Una búsqueda:</span> lineal suele ser suficiente
          </div>
        </div>
      `
    }
  ]
};
