import { Module } from '../../types';

export const PYTHON_MODULE_7: Module = {
  id: 'py-mod-7',
  title: '7. Listas y Arreglos 1D',
  description: 'Estructuras de datos secuenciales: Creación, Acceso y Manipulación.',
  evaluation: '0% - Práctica Guiada',
  slides: [
    {
      id: 'py7-1-memory',
      title: 'Anatomía de una Lista',
      notes: 'Modelo mental de índices.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full space-y-8">
          <div class="text-center max-w-3xl">
            <h1 class="text-3xl font-bold text-slate-900 mb-4">Colecciones Ordenadas</h1>
            <p class="text-lg text-slate-700">
              Una lista es como un tren con vagones numerados. Cada vagón puede llevar cualquier tipo de carga.
            </p>
          </div>

          <div class="w-full max-w-5xl">
            <!-- Código -->
            <div class="text-center mb-6 font-mono text-xl">
              <span class="text-purple-600">frutas</span> = [<span class="text-green-600">"Manzana"</span>, <span class="text-green-600">"Banana"</span>, <span class="text-green-600">"Cereza"</span>, <span class="text-green-600">"Durazno"</span>]
            </div>

            <!-- Visualización Tren -->
            <div class="flex justify-center items-end space-x-1 overflow-x-auto p-4">
              
              <!-- Elemento 0 -->
              <div class="flex flex-col items-center group">
                <div class="w-24 h-24 bg-red-100 border-2 border-red-400 rounded-lg flex items-center justify-center shadow-md group-hover:-translate-y-2 transition-transform relative">
                  <span class="text-2xl">🍎</span>
                  <div class="absolute top-1 right-1 text-[10px] text-red-400 font-mono">str</div>
                </div>
                <div class="h-8 w-0.5 bg-slate-300"></div>
                <div class="w-8 h-8 bg-slate-800 rounded-full text-white flex items-center justify-center font-mono text-sm font-bold">0</div>
                <div class="text-xs text-slate-400 mt-1">-4</div>
              </div>

              <!-- Conector -->
              <div class="w-4 h-2 bg-slate-400 mb-16 rounded-full"></div>

              <!-- Elemento 1 -->
              <div class="flex flex-col items-center group">
                <div class="w-24 h-24 bg-yellow-100 border-2 border-yellow-400 rounded-lg flex items-center justify-center shadow-md group-hover:-translate-y-2 transition-transform relative">
                  <span class="text-2xl">🍌</span>
                  <div class="absolute top-1 right-1 text-[10px] text-yellow-600 font-mono">str</div>
                </div>
                <div class="h-8 w-0.5 bg-slate-300"></div>
                <div class="w-8 h-8 bg-slate-800 rounded-full text-white flex items-center justify-center font-mono text-sm font-bold">1</div>
                <div class="text-xs text-slate-400 mt-1">-3</div>
              </div>

              <!-- Conector -->
              <div class="w-4 h-2 bg-slate-400 mb-16 rounded-full"></div>

              <!-- Elemento 2 -->
              <div class="flex flex-col items-center group">
                <div class="w-24 h-24 bg-pink-100 border-2 border-pink-400 rounded-lg flex items-center justify-center shadow-md group-hover:-translate-y-2 transition-transform relative">
                  <span class="text-2xl">🍒</span>
                  <div class="absolute top-1 right-1 text-[10px] text-pink-600 font-mono">str</div>
                </div>
                <div class="h-8 w-0.5 bg-slate-300"></div>
                <div class="w-8 h-8 bg-slate-800 rounded-full text-white flex items-center justify-center font-mono text-sm font-bold">2</div>
                <div class="text-xs text-slate-400 mt-1">-2</div>
              </div>

              <!-- Conector -->
              <div class="w-4 h-2 bg-slate-400 mb-16 rounded-full"></div>

              <!-- Elemento 3 -->
              <div class="flex flex-col items-center group">
                <div class="w-24 h-24 bg-orange-100 border-2 border-orange-400 rounded-lg flex items-center justify-center shadow-md group-hover:-translate-y-2 transition-transform relative">
                  <span class="text-2xl">🍑</span>
                  <div class="absolute top-1 right-1 text-[10px] text-orange-600 font-mono">str</div>
                </div>
                <div class="h-8 w-0.5 bg-slate-300"></div>
                <div class="w-8 h-8 bg-slate-800 rounded-full text-white flex items-center justify-center font-mono text-sm font-bold">3</div>
                <div class="text-xs text-slate-400 mt-1">-1</div>
              </div>

            </div>
            
            <p class="text-center text-sm text-slate-500 mt-4">
              Los índices positivos empiezan en 0. Los negativos cuentan desde el final (-1).
            </p>
          </div>
        </div>
      `
    },
    {
      id: 'py7-2-methods',
      title: 'Métodos Principales',
      notes: 'Append, Pop, Insert.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full">
          <!-- Append -->
          <div class="bg-blue-50 p-6 rounded-xl border border-blue-200 flex flex-col">
            <div class="flex items-center justify-between mb-4">
              <h3 class="font-bold text-blue-800 text-lg">.append(x)</h3>
              <span class="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded">O(1)</span>
            </div>
            <p class="text-sm text-blue-700 mb-4">Agrega un elemento al <strong>final</strong> de la lista.</p>
            
            <div class="flex-1 flex items-center gap-2 bg-white p-4 rounded border border-blue-100 overflow-hidden">
              <div class="w-10 h-10 bg-slate-200 rounded flex items-center justify-center text-xs">A</div>
              <div class="w-10 h-10 bg-slate-200 rounded flex items-center justify-center text-xs">B</div>
              <div class="text-blue-500 font-bold">→</div>
              <div class="w-10 h-10 bg-blue-500 text-white rounded flex items-center justify-center text-xs font-bold shadow-lg animate-bounce">C</div>
            </div>
            <code class="mt-2 text-xs bg-slate-900 text-slate-300 p-2 rounded block">lista.append("C")</code>
          </div>

          <!-- Pop -->
          <div class="bg-red-50 p-6 rounded-xl border border-red-200 flex flex-col">
            <div class="flex items-center justify-between mb-4">
              <h3 class="font-bold text-red-800 text-lg">.pop()</h3>
              <span class="bg-red-200 text-red-800 text-xs px-2 py-1 rounded">O(1)</span>
            </div>
            <p class="text-sm text-red-700 mb-4">Elimina y retorna el <strong>último</strong> elemento.</p>
            
            <div class="flex-1 flex items-center gap-2 bg-white p-4 rounded border border-red-100 overflow-hidden">
              <div class="w-10 h-10 bg-slate-200 rounded flex items-center justify-center text-xs">A</div>
              <div class="w-10 h-10 bg-slate-200 rounded flex items-center justify-center text-xs">B</div>
              <div class="w-10 h-10 bg-red-500 text-white rounded flex items-center justify-center text-xs font-bold shadow-lg opacity-50">C</div>
              <div class="text-red-500 font-bold">→ 🗑️</div>
            </div>
            <code class="mt-2 text-xs bg-slate-900 text-slate-300 p-2 rounded block">ultimo = lista.pop()</code>
          </div>

          <!-- Insert -->
          <div class="bg-yellow-50 p-6 rounded-xl border border-yellow-200 flex flex-col md:col-span-2">
            <div class="flex items-center justify-between mb-4">
              <h3 class="font-bold text-yellow-800 text-lg">.insert(i, x)</h3>
              <span class="bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded">O(n) - Costoso</span>
            </div>
            <p class="text-sm text-yellow-700 mb-4">Inserta un elemento en la posición <code>i</code>, desplazando los demás a la derecha.</p>
            
            <div class="flex items-center gap-2 bg-white p-4 rounded border border-yellow-100 justify-center">
              <div class="w-10 h-10 bg-slate-200 rounded flex items-center justify-center text-xs">A</div>
              <div class="w-2 h-10 bg-yellow-400 rounded animate-pulse"></div>
              <div class="w-10 h-10 bg-yellow-500 text-white rounded flex items-center justify-center text-xs font-bold shadow-lg">New</div>
              <div class="text-slate-400 text-xs">>></div>
              <div class="w-10 h-10 bg-slate-200 rounded flex items-center justify-center text-xs">B</div>
              <div class="w-10 h-10 bg-slate-200 rounded flex items-center justify-center text-xs">C</div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py7-3-slicing',
      title: 'Slicing (Rebanadas)',
      notes: 'Sublistas.',
      contentHtml: `
        <div class="flex flex-col h-full space-y-8">
          <div class="text-center">
            <h3 class="text-2xl font-bold text-slate-800">Cortando Listas</h3>
            <p class="text-slate-600 font-mono bg-slate-100 inline-block px-2 py-1 rounded mt-2">lista[inicio : fin : paso]</p>
          </div>

          <div class="bg-slate-900 p-8 rounded-xl shadow-2xl relative overflow-hidden">
            <!-- Regla Visual -->
            <div class="flex justify-between mb-2 text-slate-500 font-mono text-xs px-4">
              <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </div>
            
            <div class="flex gap-1 mb-8">
              <div class="flex-1 h-12 bg-slate-700 rounded flex items-center justify-center text-slate-400 font-bold">0</div>
              <div class="flex-1 h-12 bg-slate-700 rounded flex items-center justify-center text-slate-400 font-bold">1</div>
              
              <!-- Selección -->
              <div class="flex-[3] flex gap-1 relative">
                <div class="absolute -top-6 left-0 w-full text-center text-green-400 text-xs font-bold">lista[2:5]</div>
                <div class="absolute -inset-1 border-2 border-green-500 rounded-lg z-10 pointer-events-none"></div>
                <div class="flex-1 h-12 bg-green-900/50 rounded flex items-center justify-center text-green-400 font-bold">2</div>
                <div class="flex-1 h-12 bg-green-900/50 rounded flex items-center justify-center text-green-400 font-bold">3</div>
                <div class="flex-1 h-12 bg-green-900/50 rounded flex items-center justify-center text-green-400 font-bold">4</div>
              </div>

              <div class="flex-1 h-12 bg-slate-700 rounded flex items-center justify-center text-slate-400 font-bold">5</div>
              <div class="flex-1 h-12 bg-slate-700 rounded flex items-center justify-center text-slate-400 font-bold">6</div>
              <div class="flex-1 h-12 bg-slate-700 rounded flex items-center justify-center text-slate-400 font-bold">7</div>
              <div class="flex-1 h-12 bg-slate-700 rounded flex items-center justify-center text-slate-400 font-bold">8</div>
              <div class="flex-1 h-12 bg-slate-700 rounded flex items-center justify-center text-slate-400 font-bold">9</div>
            </div>

            <div class="grid grid-cols-2 gap-4 text-xs font-mono text-slate-300">
              <div class="bg-slate-800 p-2 rounded">
                <span class="text-purple-400">lista</span>[:<span class="text-blue-400">3</span>] <span class="text-gray-500"># Primeros 3</span>
              </div>
              <div class="bg-slate-800 p-2 rounded">
                <span class="text-purple-400">lista</span>[<span class="text-blue-400">-1</span>] <span class="text-gray-500"># Último</span>
              </div>
              <div class="bg-slate-800 p-2 rounded">
                <span class="text-purple-400">lista</span>[::<span class="text-blue-400">-1</span>] <span class="text-gray-500"># Invertir</span>
              </div>
              <div class="bg-slate-800 p-2 rounded">
                <span class="text-purple-400">lista</span>[<span class="text-blue-400">1</span>::<span class="text-blue-400">2</span>] <span class="text-gray-500"># Impares (índice)</span>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py7-4-comprehension',
      title: 'List Comprehensions',
      notes: 'Pythonic way.',
      contentHtml: `
        <div class="flex flex-col h-full space-y-6">
          <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 class="text-xl font-bold text-slate-800 mb-2">La forma "Pythonica"</h3>
            <p class="text-slate-600 text-sm">Crear listas nuevas a partir de otras en una sola línea.</p>
          </div>

          <div class="flex-1 grid md:grid-cols-2 gap-8 items-center">
            <!-- Tradicional -->
            <div class="bg-slate-100 p-4 rounded-xl border border-slate-300 opacity-70">
              <div class="text-xs font-bold text-slate-500 mb-2 uppercase">Tradicional</div>
              <div class="font-mono text-xs text-slate-700">
                cuadrados = []<br>
                <span class="text-purple-600">for</span> x <span class="text-purple-600">in</span> <span class="text-blue-600">range</span>(10):<br>
                &nbsp;&nbsp;cuadrados.append(x**2)
              </div>
            </div>

            <!-- Comprehension -->
            <div class="bg-green-50 p-4 rounded-xl border border-green-300 shadow-md transform scale-105">
              <div class="text-xs font-bold text-green-600 mb-2 uppercase">Comprehension</div>
              <div class="font-mono text-sm text-slate-800">
                cuadrados = [<span class="text-blue-600 font-bold">x**2</span> <span class="text-purple-600">for</span> x <span class="text-purple-600">in</span> <span class="text-blue-600">range</span>(10)]
              </div>
            </div>
          </div>

          <!-- Visual Flow -->
          <div class="bg-slate-900 p-4 rounded-xl flex items-center justify-around text-white text-xs font-bold">
            <div class="flex flex-col items-center">
              <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mb-1">1</div>
              <span>Input</span>
            </div>
            <div class="text-slate-500">→</div>
            <div class="flex flex-col items-center">
              <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mb-1">x²</div>
              <span>Transform</span>
            </div>
            <div class="text-slate-500">→</div>
            <div class="flex flex-col items-center">
              <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mb-1">1</div>
              <span>Output</span>
            </div>
          </div>
        </div>
      `
    }
  ]
};
