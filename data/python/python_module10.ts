import { Module } from '../../types';

export const PYTHON_MODULE_10: Module = {
  id: 'py-mod-10',
  title: '10. Algoritmos de Ordenación',
  description: 'Poniendo orden en el caos: Burbuja, Selección e Inserción + sort() en Python.',
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
    ,
    {
      id: 'py10-5-bubble-walkthrough',
      title: 'Burbuja: Ejemplo Paso a Paso',
      notes: 'Mostrar una pasada completa y el concepto de “el mayor se va a la derecha”.',
      contentHtml: `
        <div class="flex flex-col h-full space-y-6">
          <div class="text-center">
            <h3 class="text-2xl font-bold text-slate-800">Ejemplo: [5, 1, 4, 2, 8]</h3>
            <p class="text-slate-600">En cada comparación, intercambiamos si están al revés.</p>
          </div>

          <div class="grid md:grid-cols-2 gap-8 items-start">
            <div class="bg-slate-900 p-6 rounded-xl font-mono text-xs text-slate-200">
              <div class="text-slate-400 mb-3"># 1 pasada (i = 0)</div>
              <div>arr = [5, 1, 4, 2, 8]</div>
              <div class="mt-2">(5,1) → swap → [1, 5, 4, 2, 8]</div>
              <div>(5,4) → swap → [1, 4, 5, 2, 8]</div>
              <div>(5,2) → swap → [1, 4, 2, 5, 8]</div>
              <div>(5,8) → ok   → [1, 4, 2, 5, 8]</div>
              <div class="mt-3 text-green-400"># Al final: 8 ya está en su lugar</div>
            </div>

            <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div class="text-xs font-bold text-slate-400 mb-4">Visualización de la 1ra pasada</div>
              <div class="space-y-3">
                <div class="flex items-center gap-2">
                  <div class="text-xs text-slate-500 w-24">Inicio</div>
                  <div class="flex gap-2">
                    <div class="w-10 h-10 rounded bg-slate-100 flex items-center justify-center border">5</div>
                    <div class="w-10 h-10 rounded bg-slate-100 flex items-center justify-center border">1</div>
                    <div class="w-10 h-10 rounded bg-slate-100 flex items-center justify-center border">4</div>
                    <div class="w-10 h-10 rounded bg-slate-100 flex items-center justify-center border">2</div>
                    <div class="w-10 h-10 rounded bg-green-500 text-white flex items-center justify-center border border-green-600 font-bold">8</div>
                  </div>
                </div>

                <div class="flex items-center gap-2">
                  <div class="text-xs text-slate-500 w-24">Resultado</div>
                  <div class="flex gap-2">
                    <div class="w-10 h-10 rounded bg-blue-100 text-blue-900 flex items-center justify-center border border-blue-300 font-bold">1</div>
                    <div class="w-10 h-10 rounded bg-slate-100 flex items-center justify-center border">4</div>
                    <div class="w-10 h-10 rounded bg-slate-100 flex items-center justify-center border">2</div>
                    <div class="w-10 h-10 rounded bg-slate-100 flex items-center justify-center border">5</div>
                    <div class="w-10 h-10 rounded bg-green-500 text-white flex items-center justify-center border border-green-600 font-bold">8</div>
                  </div>
                </div>
              </div>

              <div class="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div class="font-bold text-blue-800">Idea clave</div>
                <div class="text-sm text-blue-700">Cada pasada “empuja” el mayor al final. Luego ignoramos esa parte ya ordenada.</div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py10-6-bubble-optimized',
      title: 'Burbuja Optimizada (Corte Temprano)',
      notes: 'Agregar bandera swapped para salir si ya está ordenado.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full items-center">
          <div class="space-y-6">
            <div class="bg-green-50 border border-green-200 p-5 rounded-xl">
              <h3 class="text-xl font-bold text-green-800">Mejora práctica</h3>
              <p class="text-sm text-green-700">
                Si en una pasada no hubo intercambios, la lista ya está ordenada y podemos detenernos.
              </p>
            </div>

            <div class="bg-slate-900 p-5 rounded-xl font-mono text-xs text-slate-300">
              <span class="text-purple-400">for</span> i <span class="text-purple-400">in</span> <span class="text-blue-400">range</span>(n-<span class="text-blue-400">1</span>):<br>
              &nbsp;&nbsp;swapped = <span class="text-red-300">False</span><br>
              &nbsp;&nbsp;<span class="text-purple-400">for</span> j <span class="text-purple-400">in</span> <span class="text-blue-400">range</span>(n-<span class="text-blue-400">1</span>-i):<br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">if</span> arr[j] > arr[j+<span class="text-blue-400">1</span>]:<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[j], arr[j+<span class="text-blue-400">1</span>] = arr[j+<span class="text-blue-400">1</span>], arr[j]<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;swapped = <span class="text-green-300">True</span><br>
              &nbsp;&nbsp;<span class="text-purple-400">if</span> <span class="text-red-300">not</span> swapped:<br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-green-400">break</span>
            </div>
          </div>

          <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-lg">
            <h4 class="font-bold text-slate-800 mb-3">¿Qué cambia en la práctica?</h4>
            <div class="grid grid-cols-2 gap-4 text-sm">
              <div class="bg-slate-50 p-4 rounded-lg border">
                <div class="font-bold text-slate-700">Caso casi ordenado</div>
                <p class="text-slate-600">La burbuja optimizada puede acercarse a <span class="font-mono font-bold">O(n)</span>.</p>
              </div>
              <div class="bg-red-50 p-4 rounded-lg border border-red-200">
                <div class="font-bold text-red-700">Caso peor</div>
                <p class="text-red-700">Sigue siendo <span class="font-mono font-bold">O(n²)</span>.</p>
              </div>
            </div>

            <div class="mt-6 bg-slate-100 rounded-lg p-4">
              <div class="text-xs text-slate-500 mb-2 font-bold">Mini-ejemplo</div>
              <div class="text-sm text-slate-700">
                Lista: <span class="font-mono">[1,2,3,4,5,6,7,0]</span><br>
                Con corte temprano: la segunda pasada detecta “sin swaps” y termina.
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py10-7-selection-walkthrough',
      title: 'Selección: Ejemplo Paso a Paso',
      notes: 'Enfatizar: menos swaps, mismas comparaciones.',
      contentHtml: `
        <div class="flex flex-col h-full space-y-6">
          <div class="text-center">
            <h3 class="text-2xl font-bold text-slate-800">Ejemplo: [64, 25, 12, 22, 11]</h3>
            <p class="text-slate-600">Buscamos el mínimo y lo colocamos al inicio.</p>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-slate-900 p-6 rounded-xl font-mono text-xs text-slate-200">
              <div class="text-slate-400 mb-3"># i = 0</div>
              <div>arr = [64, 25, 12, 22, 11]</div>
              <div class="mt-2">min = 11 (último elemento)</div>
              <div>swap(64, 11) → [11, 25, 12, 22, 64]</div>
              <div class="mt-4 text-slate-400"># i = 1</div>
              <div>min = 12</div>
              <div>swap(25, 12) → [11, 12, 25, 22, 64]</div>
            </div>

            <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div class="text-xs font-bold text-slate-400 mb-4">Interpretación</div>

              <div class="space-y-4">
                <div class="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg p-4">
                  <div>
                    <div class="font-bold text-green-800">Zona ordenada</div>
                    <div class="text-sm text-green-700">Crece desde la izquierda.</div>
                  </div>
                  <div class="flex gap-2">
                    <div class="w-10 h-10 rounded bg-green-500 text-white flex items-center justify-center font-bold">11</div>
                    <div class="w-10 h-10 rounded bg-green-500 text-white flex items-center justify-center font-bold">12</div>
                  </div>
                </div>

                <div class="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div>
                    <div class="font-bold text-blue-800">Zona no ordenada</div>
                    <div class="text-sm text-blue-700">Aquí buscamos el mínimo.</div>
                  </div>
                  <div class="flex gap-2">
                    <div class="w-10 h-10 rounded bg-slate-100 border flex items-center justify-center">25</div>
                    <div class="w-10 h-10 rounded bg-slate-100 border flex items-center justify-center">22</div>
                    <div class="w-10 h-10 rounded bg-slate-100 border flex items-center justify-center">64</div>
                  </div>
                </div>
              </div>

              <p class="mt-5 text-sm text-slate-600">
                Selección hace pocas escrituras (swaps), útil cuando mover datos es caro.
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py10-8-insertion-concept',
      title: 'Insertion Sort (Inserción)',
      notes: 'Muy bueno para listas pequeñas o casi ordenadas.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full items-center">
          <div class="space-y-6">
            <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 class="text-xl font-bold text-slate-800 mb-2">Ordenar como cartas</h3>
              <p class="text-slate-600 text-sm">
                Recorre la lista y va “insertando” cada elemento en su posición correcta dentro de la parte ya ordenada.
                <br>Es estable y suele ser rápido cuando la lista ya está casi ordenada.
              </p>
            </div>

            <div class="bg-slate-900 p-4 rounded-xl font-mono text-xs text-slate-300">
              <span class="text-purple-400">for</span> i <span class="text-purple-400">in</span> <span class="text-blue-400">range</span>(<span class="text-blue-400">1</span>, n):<br>
              &nbsp;&nbsp;key = arr[i]<br>
              &nbsp;&nbsp;j = i - <span class="text-blue-400">1</span><br>
              &nbsp;&nbsp;<span class="text-purple-400">while</span> j >= <span class="text-blue-400">0</span> <span class="text-purple-400">and</span> arr[j] > key:<br>
              &nbsp;&nbsp;&nbsp;&nbsp;arr[j+<span class="text-blue-400">1</span>] = arr[j]<br>
              &nbsp;&nbsp;&nbsp;&nbsp;j -= <span class="text-blue-400">1</span><br>
              &nbsp;&nbsp;arr[j+<span class="text-blue-400">1</span>] = key
            </div>
          </div>

          <div class="bg-amber-50 border border-amber-200 p-6 rounded-xl">
            <h4 class="font-bold text-amber-900 mb-3">¿Cuándo conviene?</h4>
            <ul class="text-sm text-amber-900 space-y-2">
              <li><strong>Listas pequeñas</strong>: overhead bajo, simple.</li>
              <li><strong>Casi ordenadas</strong>: pocos desplazamientos → muy rápido.</li>
              <li><strong>Estabilidad</strong>: conserva el orden de iguales.</li>
            </ul>
            <div class="mt-4 text-xs text-amber-800 bg-white/70 rounded p-3">
              Complejidad: peor caso <span class="font-mono font-bold">O(n²)</span>, mejor caso (ya ordenada) <span class="font-mono font-bold">O(n)</span>.
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py10-9-insertion-example',
      title: 'Inserción: Mini Ejemplo',
      notes: 'Visualizar “zona ordenada” y elemento key moviéndose.',
      contentHtml: `
        <div class="flex flex-col h-full space-y-6">
          <div class="text-center">
            <h3 class="text-2xl font-bold text-slate-800">Ejemplo: [4, 3, 2, 10, 12]</h3>
            <p class="text-slate-600">Insertamos el elemento actual en la parte izquierda ya ordenada.</p>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div class="text-xs font-bold text-slate-400 mb-4">Estado (i = 1, key = 3)</div>
              <div class="flex gap-2 items-center">
                <div class="flex gap-2">
                  <div class="w-12 h-12 bg-green-500 text-white rounded flex items-center justify-center font-bold">4</div>
                </div>
                <div class="text-slate-300">|</div>
                <div class="w-12 h-12 bg-yellow-200 border-2 border-yellow-400 rounded flex items-center justify-center font-bold">3</div>
                <div class="w-12 h-12 bg-slate-100 border rounded flex items-center justify-center">2</div>
                <div class="w-12 h-12 bg-slate-100 border rounded flex items-center justify-center">10</div>
                <div class="w-12 h-12 bg-slate-100 border rounded flex items-center justify-center">12</div>
              </div>

              <div class="mt-5 bg-slate-100 p-4 rounded-lg text-sm text-slate-700">
                Como 4 &gt; 3, desplazamos 4 a la derecha y colocamos 3 en su lugar.
              </div>
            </div>

            <div class="bg-slate-900 p-6 rounded-xl font-mono text-xs text-slate-200">
              <div class="text-slate-400 mb-3"># i = 1</div>
              <div>arr = [4, 3, 2, 10, 12]</div>
              <div>key = 3</div>
              <div>shift 4 → [4, 4, 2, 10, 12]</div>
              <div>insert 3 → <span class="text-green-400">[3, 4, 2, 10, 12]</span></div>
              <div class="mt-4 text-slate-400"># i = 2 (key = 2)</div>
              <div>shift 4, shift 3 → insert 2 → <span class="text-green-400">[2, 3, 4, 10, 12]</span></div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py10-10-comparison-table',
      title: 'Resumen: ¿Cuál usar?',
      notes: 'Comparar burbuja, selección, inserción y mencionar n log n.',
      contentHtml: `
        <div class="flex flex-col h-full space-y-6">
          <div class="text-center">
            <h3 class="text-2xl font-bold text-slate-800">Comparación Rápida</h3>
            <p class="text-slate-600">Los tres son educativos; en producción solemos usar <strong>Timsort</strong> (Python) u O(n log n).</p>
          </div>

          <div class="bg-slate-50 p-6 rounded-xl shadow-inner">
            <table class="w-full text-sm text-left">
              <thead class="text-slate-500 border-b border-slate-200">
                <tr>
                  <th class="pb-2">Algoritmo</th>
                  <th class="pb-2">Mejor</th>
                  <th class="pb-2">Promedio</th>
                  <th class="pb-2">Peor</th>
                  <th class="pb-2">Estable</th>
                </tr>
              </thead>
              <tbody class="font-mono text-slate-700">
                <tr class="border-b border-slate-100">
                  <td class="py-2 font-sans font-bold">Burbuja (opt.)</td>
                  <td class="py-2">O(n)</td>
                  <td class="py-2">O(n²)</td>
                  <td class="py-2">O(n²)</td>
                  <td class="py-2 text-green-700 font-bold">Sí</td>
                </tr>
                <tr class="border-b border-slate-100">
                  <td class="py-2 font-sans font-bold">Selección</td>
                  <td class="py-2">O(n²)</td>
                  <td class="py-2">O(n²)</td>
                  <td class="py-2">O(n²)</td>
                  <td class="py-2 text-red-600 font-bold">No</td>
                </tr>
                <tr>
                  <td class="py-2 font-sans font-bold">Inserción</td>
                  <td class="py-2">O(n)</td>
                  <td class="py-2">O(n²)</td>
                  <td class="py-2">O(n²)</td>
                  <td class="py-2 text-green-700 font-bold">Sí</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white border border-slate-200 rounded-xl p-5">
              <div class="font-bold text-slate-800">Regla de oro</div>
              <p class="text-sm text-slate-600">Si no es un ejercicio, usa <span class="font-mono font-bold">sorted()</span> o <span class="font-mono font-bold">list.sort()</span>.</p>
            </div>
            <div class="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <div class="font-bold text-blue-800">¿Por qué?</div>
              <p class="text-sm text-blue-700">Python usa <strong>Timsort</strong>: eficiente, estable y optimizado para datos reales.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py10-11-python-sorted',
      title: 'Python: sorted() y list.sort()',
      notes: 'Diferencias: retorna nueva lista vs in-place, key, reverse, estabilidad.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full items-center">
          <div class="space-y-6">
            <div class="bg-slate-900 p-6 rounded-xl font-mono text-xs text-slate-200">
              <div class="text-slate-400 mb-2"># sorted(): devuelve nueva lista</div>
              <div>nums = [3, 1, 2]</div>
              <div>ordenada = <span class="text-blue-400">sorted</span>(nums)</div>
              <div><span class="text-blue-400">print</span>(nums, ordenada)</div>
              <br>
              <div class="text-slate-400 mb-2"># list.sort(): ordena in-place</div>
              <div>nums.sort()</div>
              <div><span class="text-blue-400">print</span>(nums)</div>
              <br>
              <div class="text-slate-400 mb-2"># key= y reverse=</div>
              <div>personas = [{"nombre":"Ana","edad":20},{"nombre":"Luis","edad":18}]</div>
              <div>por_edad = <span class="text-blue-400">sorted</span>(personas, key=<span class="text-blue-400">lambda</span> p: p["edad"])</div>
              <div>desc = <span class="text-blue-400">sorted</span>(nums, reverse=<span class="text-red-300">True</span>)</div>
            </div>
          </div>

          <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h4 class="font-bold text-slate-800 mb-4">Puntos clave</h4>
            <div class="space-y-3 text-sm text-slate-700">
              <div class="flex gap-3">
                <div class="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                <div><span class="font-mono font-bold">sorted(x)</span> no modifica <span class="font-mono">x</span>.</div>
              </div>
              <div class="flex gap-3">
                <div class="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                <div><span class="font-mono font-bold">x.sort()</span> modifica la lista y retorna <span class="font-mono">None</span>.</div>
              </div>
              <div class="flex gap-3">
                <div class="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                <div>El parámetro <span class="font-mono font-bold">key</span> evita comparaciones complejas y hace el código más limpio.</div>
              </div>
              <div class="flex gap-3">
                <div class="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                <div>La ordenación de Python es <strong>estable</strong>: si dos claves son iguales, conserva el orden original.</div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py10-12-practice',
      title: 'Práctica Guiada y Mini-Quiz',
      notes: 'Consolidar con ejercicios cortos y preguntas rápidas.',
      contentHtml: `
        <div class="flex flex-col h-full space-y-8">
          <div class="text-center">
            <h3 class="text-2xl font-bold text-slate-800">Consolidación</h3>
            <p class="text-slate-600">Practica con datos reales y revisa conceptos clave.</p>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-white border border-slate-200 rounded-xl p-6">
              <h4 class="font-bold text-slate-800 mb-3">Ejercicios</h4>
              <ol class="list-decimal pl-5 text-sm text-slate-700 space-y-2">
                <li>Implementa <strong>burbuja optimizada</strong> y cuenta cuántas pasadas hace en una lista casi ordenada.</li>
                <li>Implementa <strong>selección</strong> y cuenta cuántos swaps realiza para una lista aleatoria.</li>
                <li>Implementa <strong>inserción</strong> para ordenar una lista de palabras por longitud usando <span class="font-mono">key=len</span> (con <span class="font-mono">sorted</span>).</li>
              </ol>
              <div class="mt-4 bg-slate-100 rounded-lg p-4 text-xs text-slate-600">
                Tip: compara resultados con <span class="font-mono font-bold">sorted()</span> para validar tu algoritmo.
              </div>
            </div>

            <div class="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h4 class="font-bold text-slate-800 mb-3">Mini-Quiz (rápido)</h4>
              <div class="space-y-3 text-sm text-slate-700">
                <div class="bg-white border border-slate-200 rounded-lg p-4">
                  <div class="font-bold">1) ¿Cuál requiere menos swaps?</div>
                  <div class="text-slate-600">Selección (normalmente).</div>
                </div>
                <div class="bg-white border border-slate-200 rounded-lg p-4">
                  <div class="font-bold">2) ¿Cuál es muy bueno si ya está casi ordenado?</div>
                  <div class="text-slate-600">Inserción (y burbuja optimizada).</div>
                </div>
                <div class="bg-white border border-slate-200 rounded-lg p-4">
                  <div class="font-bold">3) ¿Qué devuelve <span class="font-mono">list.sort()</span>?</div>
                  <div class="text-slate-600"><span class="font-mono">None</span> (ordena la lista en el sitio).</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    }
  ]
};
