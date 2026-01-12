import { Module } from '../../types';

export const PYTHON_MODULE_8: Module = {
  id: 'py-mod-8',
  title: '8. Matrices y Arreglos 2D',
  description: 'Listas de listas: Tablas, Coordenadas y Recorridos.',
  evaluation: '0% - Práctica Guiada',
  slides: [
    {
      id: 'py8-1-concept',
      title: 'Listas de Listas',
      notes: 'Estructura matricial.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full space-y-8">
          <div class="text-center max-w-3xl">
            <h1 class="text-3xl font-bold text-slate-900 mb-4">El Mundo en 2 Dimensiones</h1>
            <p class="text-lg text-slate-700">
              Una matriz en Python no es más que una lista donde cada elemento es, a su vez, otra lista.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-12 w-full max-w-5xl items-center">
            <!-- Código -->
            <div class="bg-slate-900 p-6 rounded-xl shadow-lg font-mono text-sm text-slate-300">
              <div class="mb-2 text-gray-500"># Matriz 3x3</div>
              <div>matriz = [</div>
              <div class="pl-4 text-green-400">[1, 2, 3], <span class="text-gray-500"># Fila 0</span></div>
              <div class="pl-4 text-green-400">[4, 5, 6], <span class="text-gray-500"># Fila 1</span></div>
              <div class="pl-4 text-green-400">[7, 8, 9]  <span class="text-gray-500"># Fila 2</span></div>
              <div>]</div>
              <br>
              <div><span class="text-blue-400">print</span>(matriz[<span class="text-purple-400">1</span>][<span class="text-purple-400">2</span>]) <span class="text-gray-500"># Fila 1, Col 2 -> 6</span></div>
            </div>

            <!-- Visualización Grid -->
            <div class="relative bg-white p-8 rounded-xl border border-slate-200 shadow-lg">
              <!-- Indices Columnas -->
              <div class="flex justify-between pl-8 mb-2 text-xs font-bold text-slate-400 font-mono">
                <div class="w-12 text-center">0</div>
                <div class="w-12 text-center">1</div>
                <div class="w-12 text-center text-purple-600">2</div>
              </div>

              <div class="flex flex-col gap-2">
                <!-- Fila 0 -->
                <div class="flex items-center gap-2">
                  <div class="w-6 text-xs font-bold text-slate-400 font-mono">0</div>
                  <div class="w-12 h-12 bg-slate-100 rounded flex items-center justify-center border border-slate-300">1</div>
                  <div class="w-12 h-12 bg-slate-100 rounded flex items-center justify-center border border-slate-300">2</div>
                  <div class="w-12 h-12 bg-slate-100 rounded flex items-center justify-center border border-slate-300">3</div>
                </div>
                <!-- Fila 1 -->
                <div class="flex items-center gap-2">
                  <div class="w-6 text-xs font-bold text-purple-600 font-mono">1</div>
                  <div class="w-12 h-12 bg-slate-100 rounded flex items-center justify-center border border-slate-300">4</div>
                  <div class="w-12 h-12 bg-slate-100 rounded flex items-center justify-center border border-slate-300">5</div>
                  <div class="w-12 h-12 bg-purple-100 text-purple-900 font-bold rounded flex items-center justify-center border-2 border-purple-500 shadow-lg transform scale-110">6</div>
                </div>
                <!-- Fila 2 -->
                <div class="flex items-center gap-2">
                  <div class="w-6 text-xs font-bold text-slate-400 font-mono">2</div>
                  <div class="w-12 h-12 bg-slate-100 rounded flex items-center justify-center border border-slate-300">7</div>
                  <div class="w-12 h-12 bg-slate-100 rounded flex items-center justify-center border border-slate-300">8</div>
                  <div class="w-12 h-12 bg-slate-100 rounded flex items-center justify-center border border-slate-300">9</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py8-2-traversal',
      title: 'Recorridos',
      notes: 'Filas vs Columnas.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full">
          <!-- Por Filas -->
          <div class="bg-blue-50 p-6 rounded-xl border border-blue-200 flex flex-col">
            <h3 class="font-bold text-blue-800 mb-4">Recorrido por Filas (Estándar)</h3>
            <p class="text-sm text-blue-700 mb-4">Iteramos cada lista interna.</p>
            
            <div class="bg-white p-4 rounded border border-blue-100 mb-4 flex flex-col gap-2">
              <div class="flex gap-1">
                <div class="flex-1 h-8 bg-blue-500 text-white rounded flex items-center justify-center text-xs animate-pulse">→</div>
                <div class="flex-1 h-8 bg-blue-500 text-white rounded flex items-center justify-center text-xs animate-pulse delay-75">→</div>
                <div class="flex-1 h-8 bg-blue-500 text-white rounded flex items-center justify-center text-xs animate-pulse delay-150">→</div>
              </div>
              <div class="flex gap-1 opacity-50">
                <div class="flex-1 h-8 bg-blue-200 rounded"></div>
                <div class="flex-1 h-8 bg-blue-200 rounded"></div>
                <div class="flex-1 h-8 bg-blue-200 rounded"></div>
              </div>
            </div>

            <div class="bg-slate-900 p-4 rounded text-xs font-mono text-slate-300 flex-1">
              <span class="text-purple-400">for</span> fila <span class="text-purple-400">in</span> matriz:<br>
              &nbsp;&nbsp;<span class="text-purple-400">for</span> elem <span class="text-purple-400">in</span> fila:<br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">print</span>(elem)
            </div>
          </div>

          <!-- Por Columnas -->
          <div class="bg-green-50 p-6 rounded-xl border border-green-200 flex flex-col">
            <h3 class="font-bold text-green-800 mb-4">Recorrido por Columnas</h3>
            <p class="text-sm text-green-700 mb-4">Requiere acceso por índices <code>[i][j]</code>.</p>
            
            <div class="bg-white p-4 rounded border border-green-100 mb-4 flex gap-2 justify-center">
              <div class="flex flex-col gap-1">
                <div class="w-8 h-8 bg-green-500 text-white rounded flex items-center justify-center text-xs animate-bounce">↓</div>
                <div class="w-8 h-8 bg-green-500 text-white rounded flex items-center justify-center text-xs animate-bounce delay-75">↓</div>
                <div class="w-8 h-8 bg-green-500 text-white rounded flex items-center justify-center text-xs animate-bounce delay-150">↓</div>
              </div>
              <div class="flex flex-col gap-1 opacity-50">
                <div class="w-8 h-8 bg-green-200 rounded"></div>
                <div class="w-8 h-8 bg-green-200 rounded"></div>
                <div class="w-8 h-8 bg-green-200 rounded"></div>
              </div>
            </div>

            <div class="bg-slate-900 p-4 rounded text-xs font-mono text-slate-300 flex-1">
              <span class="text-purple-400">for</span> c <span class="text-purple-400">in</span> <span class="text-blue-400">range</span>(cols):<br>
              &nbsp;&nbsp;<span class="text-purple-400">for</span> f <span class="text-purple-400">in</span> <span class="text-blue-400">range</span>(filas):<br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">print</span>(matriz[f][c])
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py8-3-creation',
      title: 'Creación Dinámica',
      notes: 'Input anidado.',
      contentHtml: `
        <div class="flex flex-col h-full space-y-6">
          <div class="text-center">
            <h3 class="text-xl font-bold text-slate-800">Construyendo la Matriz</h3>
            <p class="text-slate-600 text-sm">Patrón común: Crear fila vacía, llenarla, y agregarla a la matriz.</p>
          </div>

          <div class="flex-1 grid md:grid-cols-2 gap-8 items-center">
            <div class="bg-slate-900 p-6 rounded-xl font-mono text-xs text-slate-300">
              matriz = []<br>
              <span class="text-purple-400">for</span> i <span class="text-purple-400">in</span> <span class="text-blue-400">range</span>(filas):<br>
              &nbsp;&nbsp;fila = [] <span class="text-gray-500"># Nueva fila vacía</span><br>
              &nbsp;&nbsp;<span class="text-purple-400">for</span> j <span class="text-purple-400">in</span> <span class="text-blue-400">range</span>(cols):<br>
              &nbsp;&nbsp;&nbsp;&nbsp;val = <span class="text-blue-400">input</span>(f<span class="text-green-400">"[{i},{j}]: "</span>)<br>
              &nbsp;&nbsp;&nbsp;&nbsp;fila.append(val)<br>
              &nbsp;&nbsp;matriz.append(fila) <span class="text-gray-500"># Guardar fila</span>
            </div>

            <!-- Visualización Proceso -->
            <div class="flex flex-col gap-4">
              <div class="bg-white p-4 rounded-xl shadow border border-slate-200">
                <div class="text-xs font-bold text-slate-400 mb-2">Paso 1: Llenar Fila</div>
                <div class="flex gap-2">
                  <div class="w-10 h-10 bg-yellow-100 border border-yellow-400 rounded flex items-center justify-center text-xs font-bold">5</div>
                  <div class="w-10 h-10 bg-yellow-100 border border-yellow-400 rounded flex items-center justify-center text-xs font-bold">8</div>
                  <div class="w-10 h-10 bg-slate-100 border border-slate-300 border-dashed rounded flex items-center justify-center text-xs text-slate-400">?</div>
                </div>
              </div>

              <div class="flex justify-center text-slate-400">⬇️</div>

              <div class="bg-white p-4 rounded-xl shadow border border-slate-200">
                <div class="text-xs font-bold text-slate-400 mb-2">Paso 2: Agregar a Matriz</div>
                <div class="flex flex-col gap-2 opacity-50">
                  <div class="h-8 bg-slate-200 rounded w-full"></div>
                </div>
                <div class="flex gap-2 mt-2 p-1 bg-yellow-50 border border-yellow-200 rounded">
                  <div class="w-8 h-8 bg-yellow-200 rounded"></div>
                  <div class="w-8 h-8 bg-yellow-200 rounded"></div>
                  <div class="w-8 h-8 bg-yellow-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py8-4-references',
      title: 'La Trampa de la Multiplicación',
      notes: 'Referencias de memoria compartida.',
      contentHtml: `
        <div class="flex flex-col h-full space-y-6">
            <div class="text-center">
                <h3 class="text-2xl font-bold text-red-600">¡Cuidado con las Copias!</h3>
                <p class="text-slate-600">Un error muy común al inicializar matrices en Python.</p>
            </div>

            <div class="grid md:grid-cols-2 gap-8">
                <!-- La Forma Incorrecta -->
                <div class="bg-red-50 p-6 rounded-xl border border-red-200">
                    <h4 class="font-bold text-red-800 mb-2">❌ La Trampa</h4>
                    <div class="bg-slate-900 p-4 rounded text-xs font-mono text-slate-300 mb-4">
                        matriz = [[0] * 3] * 3<br>
                        matriz[0][0] = <span class="text-yellow-400">5</span><br>
                        <span class="text-blue-400">print</span>(matriz)
                    </div>
                    <div class="text-sm text-red-700 mb-2">Resultado:</div>
                    <div class="font-mono text-sm bg-white p-2 rounded border border-red-100">
                        [[<span class="text-red-600 font-bold">5</span>, 0, 0],<br>
                         [<span class="text-red-600 font-bold">5</span>, 0, 0], <span class="text-xs text-gray-400"><- ¡Se repite!</span><br>
                         [<span class="text-red-600 font-bold">5</span>, 0, 0]]
                    </div>
                    <p class="mt-4 text-xs text-red-600">
                        <strong>¿Por qué?</strong> Estás copiando la <em>referencia</em> de la misma lista 3 veces. Si cambias una, cambian todas.
                    </p>
                </div>

                <!-- La Forma Correcta -->
                <div class="bg-green-50 p-6 rounded-xl border border-green-200">
                    <h4 class="font-bold text-green-800 mb-2">✅ La Solución</h4>
                    <div class="bg-slate-900 p-4 rounded text-xs font-mono text-slate-300 mb-4">
                        matriz = [[0] * 3 <span class="text-purple-400">for</span> _ <span class="text-purple-400">in</span> <span class="text-blue-400">range</span>(3)]<br>
                        matriz[0][0] = <span class="text-yellow-400">5</span><br>
                        <span class="text-blue-400">print</span>(matriz)
                    </div>
                    <div class="text-sm text-green-700 mb-2">Resultado:</div>
                    <div class="font-mono text-sm bg-white p-2 rounded border border-green-100">
                        [[<span class="text-green-600 font-bold">5</span>, 0, 0],<br>
                         [0, 0, 0],<br>
                         [0, 0, 0]]
                    </div>
                    <p class="mt-4 text-xs text-green-600">
                        <strong>Correcto:</strong> Usamos un ciclo (comprensión de listas) para crear una <em>nueva</em> lista en cada fila.
                    </p>
                </div>
            </div>
        </div>
      `
    },
    {
      id: 'py8-5-diagonals',
      title: 'Geometría: Diagonales',
      notes: 'Principal y Secundaria.',
      contentHtml: `
        <div class="flex flex-col items-center h-full space-y-6">
            <h3 class="text-2xl font-bold text-slate-800">Las Diagonales</h3>
            
            <div class="grid md:grid-cols-2 gap-12 w-full max-w-4xl items-center">
                <!-- Visualización -->
                <div class="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                    <div class="grid grid-cols-3 gap-2 w-48 mx-auto">
                        <!-- Fila 0 -->
                        <div class="h-14 bg-blue-100 border-2 border-blue-500 flex items-center justify-center font-bold text-blue-700 rounded relative">
                            (0,0)
                            <div class="absolute top-0 left-0 w-2 h-2 bg-blue-500 rounded-full"></div>
                            <div class="absolute top-0 right-0 w-2 h-2 bg-orange-500 rounded-full"></div>
                        </div>
                        <div class="h-14 bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-400 rounded">(0,1)</div>
                        <div class="h-14 bg-orange-100 border-2 border-orange-500 flex items-center justify-center font-bold text-orange-700 rounded relative">
                            (0,2)
                            <div class="absolute top-0 right-0 w-2 h-2 bg-orange-500 rounded-full"></div>
                        </div>

                        <!-- Fila 1 -->
                        <div class="h-14 bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-400 rounded">(1,0)</div>
                        <div class="h-14 bg-purple-100 border-2 border-purple-500 flex items-center justify-center font-bold text-purple-700 rounded relative">
                            (1,1)
                            <div class="absolute top-0 left-0 w-2 h-2 bg-blue-500 rounded-full"></div>
                            <div class="absolute top-0 right-0 w-2 h-2 bg-orange-500 rounded-full"></div>
                        </div>
                        <div class="h-14 bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-400 rounded">(1,2)</div>

                        <!-- Fila 2 -->
                        <div class="h-14 bg-orange-100 border-2 border-orange-500 flex items-center justify-center font-bold text-orange-700 rounded relative">
                            (2,0)
                            <div class="absolute top-0 right-0 w-2 h-2 bg-orange-500 rounded-full"></div>
                        </div>
                        <div class="h-14 bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-400 rounded">(2,1)</div>
                        <div class="h-14 bg-blue-100 border-2 border-blue-500 flex items-center justify-center font-bold text-blue-700 rounded relative">
                            (2,2)
                            <div class="absolute top-0 left-0 w-2 h-2 bg-blue-500 rounded-full"></div>
                        </div>
                    </div>
                    <div class="flex justify-center gap-4 mt-4 text-xs font-bold">
                        <div class="flex items-center gap-1"><div class="w-3 h-3 bg-blue-500 rounded-full"></div> Principal</div>
                        <div class="flex items-center gap-1"><div class="w-3 h-3 bg-orange-500 rounded-full"></div> Secundaria</div>
                    </div>
                </div>

                <!-- Lógica -->
                <div class="space-y-4">
                    <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                        <h4 class="font-bold text-blue-800">Diagonal Principal</h4>
                        <p class="text-sm text-blue-600 mb-2">Los índices son iguales.</p>
                        <code class="bg-white px-2 py-1 rounded text-xs font-mono border border-blue-200">if i == j:</code>
                    </div>

                    <div class="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                        <h4 class="font-bold text-orange-800">Diagonal Secundaria</h4>
                        <p class="text-sm text-orange-600 mb-2">Los índices suman N-1.</p>
                        <code class="bg-white px-2 py-1 rounded text-xs font-mono border border-orange-200">if i + j == n - 1:</code>
                    </div>
                </div>
            </div>
        </div>
      `
    },
    {
      id: 'py8-6-flatten',
      title: 'Aplanando Matrices',
      notes: 'De 2D a 1D.',
      contentHtml: `
        <div class="flex flex-col h-full space-y-6">
            <div class="text-center">
                <h3 class="text-2xl font-bold text-slate-800">Aplanando la Matriz</h3>
                <p class="text-slate-600">Convertir una estructura 2D en una lista simple 1D.</p>
            </div>

            <div class="bg-slate-900 p-6 rounded-xl shadow-lg font-mono text-sm text-slate-300 max-w-3xl mx-auto w-full">
                <div class="mb-4">
                    <span class="text-gray-500"># Matriz Original</span><br>
                    matriz = [<br>
                    &nbsp;&nbsp;[1, 2],<br>
                    &nbsp;&nbsp;[3, 4]<br>
                    ]
                </div>

                <div class="mb-4">
                    <span class="text-gray-500"># Forma Tradicional</span><br>
                    plana = []<br>
                    <span class="text-purple-400">for</span> fila <span class="text-purple-400">in</span> matriz:<br>
                    &nbsp;&nbsp;<span class="text-purple-400">for</span> num <span class="text-purple-400">in</span> fila:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;plana.append(num)
                </div>

                <div class="border-t border-slate-700 my-4 pt-4">
                    <span class="text-gray-500"># Forma Pythonic (List Comprehension)</span><br>
                    plana = [num <span class="text-purple-400">for</span> fila <span class="text-purple-400">in</span> matriz <span class="text-purple-400">for</span> num <span class="text-purple-400">in</span> fila]
                </div>

                <div>
                    <span class="text-blue-400">print</span>(plana) <span class="text-green-400"># [1, 2, 3, 4]</span>
                </div>
            </div>
            
            <div class="flex justify-center items-center gap-4 opacity-80">
                <div class="grid grid-cols-2 gap-1 scale-75">
                    <div class="w-8 h-8 bg-slate-300 rounded"></div><div class="w-8 h-8 bg-slate-300 rounded"></div>
                    <div class="w-8 h-8 bg-slate-300 rounded"></div><div class="w-8 h-8 bg-slate-300 rounded"></div>
                </div>
                <div class="text-2xl text-slate-400">➔</div>
                <div class="flex gap-1">
                    <div class="w-8 h-8 bg-blue-500 rounded animate-pulse"></div>
                    <div class="w-8 h-8 bg-blue-500 rounded animate-pulse delay-75"></div>
                    <div class="w-8 h-8 bg-blue-500 rounded animate-pulse delay-150"></div>
                    <div class="w-8 h-8 bg-blue-500 rounded animate-pulse delay-200"></div>
                </div>
            </div>
        </div>
      `
    }
  ]
};
