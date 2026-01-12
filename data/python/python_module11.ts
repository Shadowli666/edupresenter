import { Module } from '../../types';

export const PYTHON_MODULE_11: Module = {
  id: 'py-mod-11',
  title: '11. Taller Integrador II',
  description: 'Aplicando Listas, Matrices y Algoritmos en problemas reales.',
  evaluation: '20% - Taller Práctico',
  slides: [
    {
      id: 'py11-1-inventory',
      title: 'Caso 1: Sistema de Inventario',
      notes: 'Listas de Diccionarios.',
      contentHtml: `
        <div class="flex flex-col h-full space-y-6">
          <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex justify-between items-center">
            <div>
              <h3 class="text-xl font-bold text-slate-800">Gestión de Productos</h3>
              <p class="text-slate-600 text-sm">Estructura: Lista de Diccionarios.</p>
            </div>
            <div class="bg-blue-100 text-blue-800 px-3 py-1 rounded text-xs font-bold">CRUD Básico</div>
          </div>

          <div class="flex-1 grid md:grid-cols-2 gap-8">
            <!-- Visualización UI -->
            <div class="bg-slate-100 p-4 rounded-xl border border-slate-300 flex flex-col gap-4">
              <div class="flex justify-between items-center bg-white p-3 rounded shadow-sm">
                <span class="font-bold text-slate-700">Laptop Gamer</span>
                <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">$1200</span>
              </div>
              <div class="flex justify-between items-center bg-white p-3 rounded shadow-sm">
                <span class="font-bold text-slate-700">Mouse Óptico</span>
                <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">$25</span>
              </div>
              <div class="flex justify-between items-center bg-white p-3 rounded shadow-sm opacity-50">
                <span class="font-bold text-slate-700">Teclado Mecánico</span>
                <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">$80</span>
              </div>
              <div class="border-2 border-dashed border-slate-300 rounded p-3 flex items-center justify-center text-slate-400 text-sm">
                + Agregar Producto
              </div>
            </div>

            <!-- Código -->
            <div class="bg-slate-900 p-4 rounded-xl font-mono text-xs text-slate-300 overflow-auto custom-scrollbar">
              inventario = [<br>
              &nbsp;&nbsp;{<span class="text-green-400">"nombre"</span>: <span class="text-green-400">"Laptop"</span>, <span class="text-green-400">"precio"</span>: <span class="text-blue-400">1200</span>},<br>
              &nbsp;&nbsp;{<span class="text-green-400">"nombre"</span>: <span class="text-green-400">"Mouse"</span>, <span class="text-green-400">"precio"</span>: <span class="text-blue-400">25</span>}<br>
              ]<br>
              <br>
              <span class="text-purple-400">def</span> <span class="text-yellow-400">agregar</span>(nombre, precio):<br>
              &nbsp;&nbsp;nuevo = {<span class="text-green-400">"nombre"</span>: nombre, <span class="text-green-400">"precio"</span>: precio}<br>
              &nbsp;&nbsp;inventario.append(nuevo)
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py11-2-sorting',
      title: 'Ordenando el Inventario',
      notes: 'Bubble Sort con Diccionarios.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full items-center">
          <div class="space-y-6">
            <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 class="text-xl font-bold text-slate-800 mb-2">Ordenar por Precio</h3>
              <p class="text-slate-600 text-sm">
                Al comparar, no comparamos el diccionario entero, sino la clave <code>["precio"]</code>.
              </p>
            </div>

            <div class="bg-slate-900 p-4 rounded-xl font-mono text-xs text-slate-300">
              <span class="text-purple-400">if</span> lista[j][<span class="text-green-400">"precio"</span>] > lista[j+<span class="text-blue-400">1</span>][<span class="text-green-400">"precio"</span>]:<br>
              &nbsp;&nbsp;<span class="text-gray-500"># Swap completo</span><br>
              &nbsp;&nbsp;lista[j], lista[j+<span class="text-blue-400">1</span>] = lista[j+<span class="text-blue-400">1</span>], lista[j]
            </div>
          </div>

          <!-- Visualización Swap -->
          <div class="flex flex-col gap-4 items-center bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div class="text-xs font-bold text-slate-400 mb-2">Comparando Precios...</div>
            
            <div class="flex flex-col gap-2 w-full max-w-xs relative">
              <!-- Item 1 -->
              <div class="bg-white p-3 rounded shadow border border-red-400 flex justify-between items-center transform translate-y-16 transition-transform duration-1000 z-10">
                <span>Laptop</span>
                <span class="font-bold text-red-600">$1200</span>
              </div>

              <!-- Flecha Swap -->
              <div class="absolute left-[-30px] top-4 h-16 w-8 border-l-2 border-slate-400 rounded-l flex items-center justify-center">
                <span class="text-xs bg-white px-1 text-slate-500 rotate-90">Swap</span>
              </div>

              <!-- Item 2 -->
              <div class="bg-white p-3 rounded shadow border border-green-400 flex justify-between items-center transform -translate-y-16 transition-transform duration-1000 z-0">
                <span>Mouse</span>
                <span class="font-bold text-green-600">$25</span>
              </div>
            </div>
            
            <p class="text-xs text-slate-500 mt-4 text-center">
              El objeto completo se mueve, basado en el valor del precio.
            </p>
          </div>
        </div>
      `
    },
    {
      id: 'py11-3-grades',
      title: 'Caso 2: Matriz de Notas',
      notes: 'Análisis de datos 2D.',
      contentHtml: `
        <div class="flex flex-col h-full space-y-6">
          <div class="text-center">
            <h3 class="text-xl font-bold text-slate-800">Hoja de Cálculo en Python</h3>
            <p class="text-slate-600 text-sm">Filas = Estudiantes, Columnas = Cortes.</p>
          </div>

          <div class="flex-1 overflow-hidden bg-white rounded-xl shadow border border-slate-200 relative">
            <!-- Header -->
            <div class="grid grid-cols-5 bg-slate-100 border-b border-slate-300 text-xs font-bold text-slate-600 p-2 text-center">
              <div class="col-span-2 text-left pl-4">Estudiante</div>
              <div>C1</div>
              <div>C2</div>
              <div>C3</div>
            </div>

            <!-- Rows -->
            <div class="divide-y divide-slate-100 text-sm">
              <div class="grid grid-cols-5 p-2 hover:bg-blue-50 transition-colors">
                <div class="col-span-2 pl-4 font-medium">Ana Pérez</div>
                <div class="text-center">3.5</div>
                <div class="text-center">4.0</div>
                <div class="text-center">4.5</div>
              </div>
              <div class="grid grid-cols-5 p-2 hover:bg-blue-50 transition-colors">
                <div class="col-span-2 pl-4 font-medium">Beto Gil</div>
                <div class="text-center text-red-500 font-bold">2.0</div>
                <div class="text-center">3.0</div>
                <div class="text-center">3.2</div>
              </div>
              <div class="grid grid-cols-5 p-2 hover:bg-blue-50 transition-colors">
                <div class="col-span-2 pl-4 font-medium">Carla Diaz</div>
                <div class="text-center">5.0</div>
                <div class="text-center">5.0</div>
                <div class="text-center">4.8</div>
              </div>
            </div>

            <!-- Analysis Overlay -->
            <div class="absolute bottom-0 left-0 w-full bg-slate-900 text-white p-4 text-xs font-mono flex justify-around">
              <div>
                <span class="text-purple-400">def</span> <span class="text-yellow-400">prom_est</span>(fila):<br>
                &nbsp;&nbsp;<span class="text-green-400">return</span> sum(fila)/len(fila)
              </div>
              <div class="border-l border-slate-700 pl-4">
                <span class="text-purple-400">def</span> <span class="text-yellow-400">prom_corte</span>(col):<br>
                &nbsp;&nbsp;<span class="text-gray-500"># Recorrer filas fijando col</span>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py11-4-search',
      title: 'Búsqueda en el Sistema',
      notes: 'Interfaz de búsqueda.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full space-y-8">
          <div class="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg border border-slate-200">
            <h3 class="text-2xl font-bold text-slate-800 mb-6 text-center">Buscador de Productos</h3>
            
            <!-- Search Bar -->
            <div class="flex gap-2 mb-8">
              <div class="flex-1 relative">
                <input type="text" value="Mouse" class="w-full border-2 border-blue-500 rounded-lg px-4 py-2 text-slate-700 focus:outline-none" readonly>
                <div class="absolute right-3 top-2.5 text-blue-500">🔍</div>
              </div>
              <button class="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold shadow-md hover:bg-blue-700">Buscar</button>
            </div>

            <!-- Logic Visualization -->
            <div class="grid grid-cols-2 gap-4 text-sm">
              <div class="bg-slate-50 p-4 rounded border border-slate-200">
                <div class="font-bold text-slate-700 mb-2">Búsqueda Lineal</div>
                <p class="text-slate-500 text-xs mb-2">Si el inventario está desordenado por nombre.</p>
                <div class="w-full bg-slate-200 h-2 rounded overflow-hidden">
                  <div class="bg-red-500 h-full w-full animate-pulse"></div>
                </div>
                <div class="text-right text-xs text-red-500 mt-1">Lento O(n)</div>
              </div>

              <div class="bg-slate-50 p-4 rounded border border-slate-200">
                <div class="font-bold text-slate-700 mb-2">Búsqueda Binaria</div>
                <p class="text-slate-500 text-xs mb-2">Si ordenamos previamente por nombre.</p>
                <div class="w-full bg-slate-200 h-2 rounded overflow-hidden">
                  <div class="bg-green-500 h-full w-1/4 ml-auto"></div>
                </div>
                <div class="text-right text-xs text-green-600 mt-1">Rápido O(log n)</div>
              </div>
            </div>
          </div>
        </div>
      `
    }
  ]
};
