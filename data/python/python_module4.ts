import { Module } from '../../types';

export const PYTHON_MODULE_4: Module = {
  id: 'py-mod-4',
  title: '4. Bucles y Ciclos',
  description: 'Automatización de tareas repetitivas con while y for.',
  evaluation: '0% - Práctica Guiada',
  slides: [
    {
      id: 'py4-1-intro',
      title: 'El Poder de la Repetición',
      notes: 'Concepto de iteración.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full space-y-8">
          <div class="text-center max-w-3xl">
            <h1 class="text-3xl font-bold text-slate-900 mb-4">No te repitas (DRY)</h1>
            <p class="text-lg text-slate-700">
              En lugar de copiar y pegar código, usamos <strong>bucles</strong> para repetir acciones.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-12 w-full max-w-4xl items-center">
            <!-- Sin Bucles -->
            <div class="bg-red-50 p-6 rounded-xl border border-red-200 shadow-sm opacity-70">
              <h3 class="text-red-800 font-bold mb-2 text-center">Sin Bucles</h3>
              <div class="bg-white p-4 rounded font-mono text-xs text-slate-500 h-48 overflow-hidden relative">
                print("Hola")<br>
                print("Hola")<br>
                print("Hola")<br>
                print("Hola")<br>
                print("Hola")<br>
                print("Hola")<br>
                <div class="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent"></div>
              </div>
              <p class="text-xs text-center text-red-600 mt-2">Difícil de mantener y propenso a errores.</p>
            </div>

            <!-- Con Bucles -->
            <div class="bg-green-50 p-6 rounded-xl border border-green-200 shadow-lg transform scale-105">
              <h3 class="text-green-800 font-bold mb-2 text-center">Con Bucles</h3>
              <div class="bg-slate-900 p-4 rounded font-mono text-sm text-slate-300 h-48 flex flex-col justify-center">
                <div>
                  <span class="text-purple-400">for</span> i <span class="text-purple-400">in</span> <span class="text-blue-400">range</span>(<span class="text-blue-400">1000</span>):
                </div>
                <div class="pl-4 mt-2">
                  <span class="text-blue-400">print</span>(<span class="text-green-400">"Hola"</span>)
                </div>
              </div>
              <p class="text-xs text-center text-green-600 mt-2">Elegante, escalable y eficiente.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py4-2-while',
      title: 'Bucle While (Mientras)',
      notes: 'Ciclo basado en condición.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full items-center">
          <div class="space-y-6">
            <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 class="text-xl font-bold text-slate-800 mb-2">Repetir mientras sea verdad</h3>
              <p class="text-slate-600">
                El bucle <code>while</code> es como un <code>if</code> que se repite. Verifica la condición, ejecuta el bloque, y vuelve a verificar.
              </p>
            </div>

            <div class="bg-slate-900 p-6 rounded-xl font-mono text-sm text-slate-300">
              <div class="text-gray-500 mb-2"># Cuenta regresiva</div>
              <div>n = <span class="text-blue-400">5</span></div>
              <br>
              <div><span class="text-purple-400">while</span> n > <span class="text-blue-400">0</span>:</div>
              <div class="pl-4 text-green-400">print(n)</div>
              <div class="pl-4">n = n - <span class="text-blue-400">1</span> <span class="text-gray-500"># Importante!</span></div>
              <br>
              <div class="text-green-400">print("¡Despegue!")</div>
            </div>
          </div>

          <!-- Diagrama Circular -->
          <div class="relative h-80 bg-white rounded-xl border border-slate-200 shadow-lg flex items-center justify-center p-8">
            <div class="relative w-64 h-64">
              <!-- Ciclo SVG -->
              <svg class="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                <path d="M 50 10 A 40 40 0 1 1 10 50" fill="none" stroke="#3b82f6" stroke-width="4" stroke-linecap="round" />
                <path d="M 10 50 L 5 40 M 10 50 L 20 45" fill="none" stroke="#3b82f6" stroke-width="4" stroke-linecap="round" />
              </svg>
              
              <!-- Centro -->
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="bg-yellow-100 w-24 h-24 rounded-full flex items-center justify-center border-4 border-yellow-400 z-10 text-center p-2 shadow-sm">
                  <span class="text-xs font-bold text-yellow-800">¿n > 0?</span>
                </div>
              </div>

              <!-- Salida -->
              <div class="absolute bottom-0 right-0 transform translate-x-4 translate-y-4">
                <div class="bg-red-100 px-4 py-2 rounded-lg border border-red-400 text-xs font-bold text-red-800 shadow-sm">
                  False -> Salir
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py4-3-for',
      title: 'Bucle For y Range',
      notes: 'Iteración definida.',
      contentHtml: `
        <div class="flex flex-col h-full space-y-8">
          <div class="text-center">
            <h3 class="text-2xl font-bold text-slate-800">Iterando sobre secuencias</h3>
            <p class="text-slate-600">El bucle <code>for</code> en Python recorre elementos de una colección.</p>
          </div>

          <!-- Visualización Range -->
          <div class="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <h4 class="font-mono text-lg text-blue-600 mb-6 text-center">range(0, 5)</h4>
            
            <div class="flex justify-between items-center relative">
              <!-- Línea base -->
              <div class="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -z-10"></div>

              <!-- Pasos -->
              <div class="flex flex-col items-center">
                <div class="w-10 h-10 bg-blue-500 rounded-full text-white flex items-center justify-center font-bold shadow-lg mb-2">0</div>
                <span class="text-xs text-slate-500">i=0</span>
              </div>
              <div class="flex flex-col items-center">
                <div class="w-10 h-10 bg-blue-500 rounded-full text-white flex items-center justify-center font-bold shadow-lg mb-2">1</div>
                <span class="text-xs text-slate-500">i=1</span>
              </div>
              <div class="flex flex-col items-center">
                <div class="w-10 h-10 bg-blue-500 rounded-full text-white flex items-center justify-center font-bold shadow-lg mb-2">2</div>
                <span class="text-xs text-slate-500">i=2</span>
              </div>
              <div class="flex flex-col items-center">
                <div class="w-10 h-10 bg-blue-500 rounded-full text-white flex items-center justify-center font-bold shadow-lg mb-2">3</div>
                <span class="text-xs text-slate-500">i=3</span>
              </div>
              <div class="flex flex-col items-center">
                <div class="w-10 h-10 bg-blue-500 rounded-full text-white flex items-center justify-center font-bold shadow-lg mb-2">4</div>
                <span class="text-xs text-slate-500">i=4</span>
              </div>
              
              <!-- Excluido -->
              <div class="flex flex-col items-center opacity-30">
                <div class="w-10 h-10 bg-red-200 rounded-full text-red-800 flex items-center justify-center font-bold border border-red-400 mb-2">5</div>
                <span class="text-xs text-red-500">Stop (Excluido)</span>
              </div>
            </div>
          </div>

          <div class="bg-slate-900 p-4 rounded-xl font-mono text-sm text-slate-300 text-center">
            <span class="text-purple-400">for</span> i <span class="text-purple-400">in</span> <span class="text-blue-400">range</span>(<span class="text-blue-400">5</span>): <span class="text-gray-500"># 0, 1, 2, 3, 4</span>
          </div>
        </div>
      `
    },
    {
      id: 'py4-4-control',
      title: 'Control del Bucle: Break y Continue',
      notes: 'Alterando el flujo.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full">
          <!-- Break -->
          <div class="bg-red-50 p-6 rounded-xl border border-red-200 flex flex-col">
            <div class="flex items-center gap-3 mb-4">
              <div class="bg-red-500 text-white p-2 rounded-lg font-bold text-xs">BREAK</div>
              <h3 class="font-bold text-red-800">Romper el ciclo</h3>
            </div>
            <p class="text-sm text-red-700 mb-4">Termina el bucle inmediatamente y salta afuera.</p>
            
            <div class="bg-slate-900 p-4 rounded text-xs font-mono text-slate-300 flex-1">
              <span class="text-purple-400">while</span> <span class="text-blue-400">True</span>:<br>
              &nbsp;&nbsp;linea = <span class="text-blue-400">input</span>("> ")<br>
              &nbsp;&nbsp;<span class="text-purple-400">if</span> linea == <span class="text-green-400">"fin"</span>:<br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-red-400">break</span><br>
              &nbsp;&nbsp;<span class="text-blue-400">print</span>(linea)<br>
              <span class="text-gray-500"># Salta aquí al romper</span>
            </div>
          </div>

          <!-- Continue -->
          <div class="bg-yellow-50 p-6 rounded-xl border border-yellow-200 flex flex-col">
            <div class="flex items-center gap-3 mb-4">
              <div class="bg-yellow-500 text-white p-2 rounded-lg font-bold text-xs">CONTINUE</div>
              <h3 class="font-bold text-yellow-800">Saltar iteración</h3>
            </div>
            <p class="text-sm text-yellow-700 mb-4">Salta el resto del código y vuelve al inicio del bucle.</p>
            
            <div class="bg-slate-900 p-4 rounded text-xs font-mono text-slate-300 flex-1">
              <span class="text-purple-400">for</span> i <span class="text-purple-400">in</span> <span class="text-blue-400">range</span>(<span class="text-blue-400">10</span>):<br>
              &nbsp;&nbsp;<span class="text-purple-400">if</span> i % <span class="text-blue-400">2</span> == <span class="text-blue-400">0</span>:<br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-yellow-400">continue</span> <span class="text-gray-500"># Salta pares</span><br>
              &nbsp;&nbsp;<span class="text-blue-400">print</span>(i)
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py4-5-nested',
      title: 'Bucles Anidados',
      notes: 'Tablas y matrices.',
      contentHtml: `
        <div class="flex flex-col h-full space-y-6">
          <div class="text-center">
            <h3 class="text-xl font-bold text-slate-800">Un bucle dentro de otro</h3>
            <p class="text-slate-600 text-sm">Útil para trabajar con coordenadas, tablas o matrices.</p>
          </div>

          <div class="flex-1 grid md:grid-cols-2 gap-8 items-center">
            <div class="bg-slate-900 p-6 rounded-xl font-mono text-xs text-slate-300">
              <span class="text-purple-400">for</span> fila <span class="text-purple-400">in</span> <span class="text-blue-400">range</span>(<span class="text-blue-400">3</span>):<br>
              &nbsp;&nbsp;<span class="text-purple-400">for</span> col <span class="text-purple-400">in</span> <span class="text-blue-400">range</span>(<span class="text-blue-400">3</span>):<br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">print</span>(f<span class="text-green-400">"({fila},{col})"</span>)
            </div>

            <!-- Grid Visual -->
            <div class="bg-white p-4 rounded-xl shadow border border-slate-200 grid grid-cols-3 gap-2">
              <!-- Fila 0 -->
              <div class="bg-blue-100 p-2 rounded text-center text-xs font-bold text-blue-800 border border-blue-300">0,0</div>
              <div class="bg-blue-100 p-2 rounded text-center text-xs font-bold text-blue-800 border border-blue-300">0,1</div>
              <div class="bg-blue-100 p-2 rounded text-center text-xs font-bold text-blue-800 border border-blue-300">0,2</div>
              
              <!-- Fila 1 -->
              <div class="bg-purple-100 p-2 rounded text-center text-xs font-bold text-purple-800 border border-purple-300">1,0</div>
              <div class="bg-purple-100 p-2 rounded text-center text-xs font-bold text-purple-800 border border-purple-300">1,1</div>
              <div class="bg-purple-100 p-2 rounded text-center text-xs font-bold text-purple-800 border border-purple-300">1,2</div>

              <!-- Fila 2 -->
              <div class="bg-green-100 p-2 rounded text-center text-xs font-bold text-green-800 border border-green-300">2,0</div>
              <div class="bg-green-100 p-2 rounded text-center text-xs font-bold text-green-800 border border-green-300">2,1</div>
              <div class="bg-green-100 p-2 rounded text-center text-xs font-bold text-green-800 border border-green-300">2,2</div>
            </div>
          </div>
        </div>
      `
    }
  ]
};
