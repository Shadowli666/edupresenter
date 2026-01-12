import { Module } from '../../types';

export const PYTHON_MODULE_10: Module = {
  id: 'py-mod-10',
  title: '10. Algoritmos de Ordenación',
  description: 'Poniendo orden en el caos: Burbuja y Selección.',
  evaluation: '20% - Prueba Escrita',
  slides: [
    {
      id: 'py10-1-intro',
      title: 'El Arte de Ordenar',
      notes: 'Importancia del orden.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full space-y-8">
          <div class="text-center max-w-3xl">
            <h1 class="text-3xl font-bold text-slate-900 mb-4">Orden = Eficiencia</h1>
            <p class="text-lg text-slate-700">
              Ordenar datos es uno de los problemas más estudiados en computación.
              <br>Sin orden, no hay búsqueda binaria, ni índices eficientes.
            </p>
          </div>

          <div class="flex gap-8 items-center">
            <div class="bg-red-50 p-6 rounded-xl border border-red-200 opacity-70">
              <h3 class="text-red-800 font-bold mb-2 text-center">Caos</h3>
              <div class="flex gap-1">
                <div class="w-8 h-12 bg-red-300 rounded-t"></div>
                <div class="w-8 h-4 bg-red-300 rounded-t"></div>
                <div class="w-8 h-16 bg-red-300 rounded-t"></div>
                <div class="w-8 h-8 bg-red-300 rounded-t"></div>
              </div>
            </div>

            <div class="text-2xl text-slate-400">→</div>

            <div class="bg-green-50 p-6 rounded-xl border border-green-200 shadow-lg transform scale-110">
              <h3 class="text-green-800 font-bold mb-2 text-center">Orden</h3>
              <div class="flex gap-1 items-end">
                <div class="w-8 h-4 bg-green-500 rounded-t"></div>
                <div class="w-8 h-8 bg-green-500 rounded-t"></div>
                <div class="w-8 h-12 bg-green-500 rounded-t"></div>
                <div class="w-8 h-16 bg-green-500 rounded-t"></div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py10-2-bubble',
      title: 'Bubble Sort (Burbuja)',
      notes: 'Intercambio adyacente.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full items-center">
          <div class="space-y-6">
            <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 class="text-xl font-bold text-slate-800 mb-2">La Burbuja Sube</h3>
              <p class="text-slate-600 text-sm">
                Compara pares adyacentes. Si están mal, los intercambia.
                <br>En cada pasada completa, el elemento más grande "burbujea" hasta su posición final a la derecha.
              </p>
            </div>

            <div class="bg-slate-900 p-4 rounded-xl font-mono text-xs text-slate-300">
              <span class="text-purple-400">for</span> i <span class="text-purple-400">in</span> <span class="text-blue-400">range</span>(n-<span class="text-blue-400">1</span>):<br>
              &nbsp;&nbsp;<span class="text-purple-400">for</span> j <span class="text-purple-400">in</span> <span class="text-blue-400">range</span>(n-<span class="text-blue-400">1</span>-i):<br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">if</span> arr[j] > arr[j+<span class="text-blue-400">1</span>]:<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500"># Swap</span><br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[j], arr[j+<span class="text-blue-400">1</span>] = arr[j+<span class="text-blue-400">1</span>], arr[j]
            </div>
          </div>

          <!-- Visualización Burbuja -->
          <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-lg flex flex-col items-center">
            <div class="text-xs font-bold text-slate-400 mb-4">Pasada Actual</div>
            
            <div class="flex gap-2 items-end h-32 mb-4">
              <!-- Elementos -->
              <div class="flex flex-col items-center">
                <div class="w-10 bg-blue-200 border border-blue-400 rounded-t flex items-end justify-center pb-1 text-xs font-bold" style="height: 40px">4</div>
              </div>
              
              <!-- Par Comparado -->
              <div class="relative p-1 border-2 border-red-500 rounded-lg bg-red-50 flex gap-2 items-end">
                <div class="absolute -top-6 left-0 w-full text-center text-red-500 text-[10px] font-bold">Swap! 8 > 2</div>
                <div class="w-10 bg-blue-500 text-white border border-blue-600 rounded-t flex items-end justify-center pb-1 text-xs font-bold" style="height: 80px">8</div>
                <div class="w-10 bg-blue-200 border border-blue-400 rounded-t flex items-end justify-center pb-1 text-xs font-bold" style="height: 20px">2</div>
              </div>

              <div class="flex flex-col items-center">
                <div class="w-10 bg-green-200 border border-green-400 rounded-t flex items-end justify-center pb-1 text-xs font-bold opacity-50" style="height: 60px">6</div>
              </div>
              
              <!-- Ya ordenado -->
              <div class="flex flex-col items-center">
                <div class="w-10 bg-green-500 text-white border border-green-600 rounded-t flex items-end justify-center pb-1 text-xs font-bold shadow-lg" style="height: 90px">9</div>
                <div class="text-[10px] text-green-600 font-bold mt-1">Listo</div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py10-3-selection',
      title: 'Selection Sort (Selección)',
      notes: 'Buscar el mínimo.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full items-center">
          <div class="space-y-6">
            <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 class="text-xl font-bold text-slate-800 mb-2">El Francotirador</h3>
              <p class="text-slate-600 text-sm">
                Busca el elemento más pequeño de toda la lista desordenada y lo coloca al principio.
                <br>Menos intercambios que la burbuja, pero mismas comparaciones.
              </p>
            </div>

            <div class="bg-slate-900 p-4 rounded-xl font-mono text-xs text-slate-300">
              <span class="text-purple-400">for</span> i <span class="text-purple-400">in</span> <span class="text-blue-400">range</span>(n):<br>
              &nbsp;&nbsp;min_idx = i<br>
              &nbsp;&nbsp;<span class="text-purple-400">for</span> j <span class="text-purple-400">in</span> <span class="text-blue-400">range</span>(i+<span class="text-blue-400">1</span>, n):<br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">if</span> arr[j] < arr[min_idx]:<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;min_idx = j<br>
              &nbsp;&nbsp;<span class="text-gray-500"># Swap al final</span><br>
              &nbsp;&nbsp;arr[i], arr[min_idx] = arr[min_idx], arr[i]
            </div>
          </div>

          <!-- Visualización Selección -->
          <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-lg flex flex-col items-center">
            <div class="text-xs font-bold text-slate-400 mb-4">Buscando Mínimo</div>
            
            <div class="flex gap-2 items-end h-32 mb-4 w-full justify-center">
              <!-- Ordenados -->
              <div class="flex gap-1 border-r-2 border-slate-300 pr-2 mr-2">
                <div class="w-8 bg-green-500 text-white rounded-t flex items-end justify-center pb-1 text-xs font-bold" style="height: 20px">1</div>
                <div class="w-8 bg-green-500 text-white rounded-t flex items-end justify-center pb-1 text-xs font-bold" style="height: 30px">3</div>
              </div>

              <!-- Desordenados -->
              <div class="flex gap-1 relative">
                <!-- Candidato actual -->
                <div class="w-8 bg-blue-200 rounded-t flex items-end justify-center pb-1 text-xs font-bold opacity-50" style="height: 80px">8</div>
                
                <!-- Mínimo encontrado -->
                <div class="relative">
                  <div class="absolute -top-8 left-0 w-full flex flex-col items-center">
                    <span class="text-xs font-bold text-purple-600">Min</span>
                    <div class="w-0.5 h-4 bg-purple-600"></div>
                  </div>
                  <div class="w-8 bg-purple-500 text-white rounded-t flex items-end justify-center pb-1 text-xs font-bold shadow-lg ring-2 ring-purple-300" style="height: 40px">4</div>
                </div>

                <div class="w-8 bg-blue-200 rounded-t flex items-end justify-center pb-1 text-xs font-bold opacity-50" style="height: 60px">6</div>
                
                <!-- Escaneando -->
                <div class="w-8 bg-yellow-200 border-2 border-yellow-400 rounded-t flex items-end justify-center pb-1 text-xs font-bold" style="height: 50px">5</div>
              </div>
            </div>
            
            <div class="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">
              Escaneando... ¿5 < 4? No.
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py10-4-complexity',
      title: 'Complejidad Cuadrática',
      notes: 'O(n^2).',
      contentHtml: `
        <div class="flex flex-col h-full space-y-8">
          <div class="text-center">
            <h3 class="text-2xl font-bold text-slate-800">El Precio del Orden</h3>
            <p class="text-slate-600">Ambos algoritmos son <span class="font-mono font-bold text-red-600">O(n²)</span>.</p>
          </div>

          <div class="flex-1 flex items-center justify-center">
            <div class="relative w-full max-w-2xl h-64 bg-white border-l-2 border-b-2 border-slate-400 p-4">
              <div class="absolute bottom-0 left-0 w-full h-full pointer-events-none">
                <!-- Curva Cuadrática -->
                <svg class="w-full h-full overflow-visible">
                  <path d="M0 256 Q 100 250, 256 0" fill="none" stroke="#ef4444" stroke-width="4" />
                  <text x="150" y="100" class="text-sm fill-red-600 font-bold">O(n²) - Muy Lento</text>
                  
                  <!-- Referencia Lineal -->
                  <path d="M0 256 L 256 200" fill="none" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="5,5" />
                  <text x="260" y="200" class="text-xs fill-slate-400">O(n)</text>
                </svg>
              </div>
              
              <div class="absolute top-4 right-4 bg-white/90 p-4 rounded shadow border border-slate-200 text-xs">
                <div class="font-bold mb-2">Para 10,000 datos:</div>
                <div class="grid grid-cols-2 gap-x-4 gap-y-1">
                  <div class="text-slate-500">O(n)</div>
                  <div class="font-mono">10,000 ops</div>
                  <div class="text-red-600 font-bold">O(n²)</div>
                  <div class="font-mono text-red-600 font-bold">100,000,000 ops</div>
                </div>
              </div>
            </div>
          </div>
          
          <p class="text-center text-sm text-slate-500">
            Para listas pequeñas son aceptables. Para Big Data, usamos <strong>Quicksort</strong> o <strong>Mergesort</strong> (O(n log n)).
          </p>
        </div>
      `
    }
  ]
};
