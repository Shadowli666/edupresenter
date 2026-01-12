import { Module } from '../../types';

export const PYTHON_MODULE_9: Module = {
  id: 'py-mod-9',
  title: '9. Algoritmos de Búsqueda',
  description: 'Encontrando la aguja en el pajar: Lineal vs Binaria.',
  evaluation: '10% - Prueba de Comprobación',
  slides: [
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
  ]
};
