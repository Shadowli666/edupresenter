import { Module } from '../../types';

export const PNN_MODULE_18: Module = {
  id: 'pnn-mod-18',
  title: '18. Proyecto Final y Cierre',
  description: 'Integración de conocimientos: Selección de la técnica adecuada para problemas complejos.',
  evaluation: '30% - Proyecto Final de Semestre',
  slides: [
    {
      id: 'pnn18-1',
      title: 'El Mapa del Algoritmista',
      notes: 'Resumen del curso.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full space-y-8">
          <div class="text-center max-w-4xl">
            <h1 class="text-4xl font-bold text-slate-900 mb-6">Maestría en Algoritmos</h1>
            <p class="text-xl text-slate-700">
              Hemos completado el viaje desde las estructuras básicas hasta las técnicas de optimización más avanzadas.
            </p>
          </div>
          
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl">
            <div class="bg-white p-4 rounded-xl shadow border-t-4 border-blue-500">
              <h3 class="font-bold text-slate-800">Divide y Vencerás</h3>
              <p class="text-xs text-slate-500 mt-1">MergeSort, QuickSort</p>
              <div class="mt-2 text-blue-600 text-xs font-bold">O(n log n)</div>
            </div>
            <div class="bg-white p-4 rounded-xl shadow border-t-4 border-green-500">
              <h3 class="font-bold text-slate-800">Voraces (Greedy)</h3>
              <p class="text-xs text-slate-500 mt-1">Dijkstra, Prim, Huffman</p>
              <div class="mt-2 text-green-600 text-xs font-bold">Rápido y Local</div>
            </div>
            <div class="bg-white p-4 rounded-xl shadow border-t-4 border-yellow-500">
              <h3 class="font-bold text-slate-800">Prog. Dinámica</h3>
              <p class="text-xs text-slate-500 mt-1">Floyd, Knapsack, TSP</p>
              <div class="mt-2 text-yellow-600 text-xs font-bold">Óptimo Global</div>
            </div>
            <div class="bg-white p-4 rounded-xl shadow border-t-4 border-purple-500">
              <h3 class="font-bold text-slate-800">Backtracking</h3>
              <p class="text-xs text-slate-500 mt-1">N-Reinas, Sudoku</p>
              <div class="mt-2 text-purple-600 text-xs font-bold">Exhaustivo</div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn18-2-decision',
      title: 'Matriz de Decisión',
      notes: '¿Qué algoritmo usar?',
      contentHtml: `
        <div class="flex flex-col h-full space-y-6">
          <h3 class="text-2xl font-bold text-slate-800">¿Qué herramienta uso?</h3>
          
          <div class="flex-1 bg-white p-6 rounded-xl shadow border border-slate-200 overflow-auto">
            <table class="w-full text-sm text-left border-collapse">
              <thead>
                <tr class="bg-slate-100 text-slate-700">
                  <th class="p-3 border">Característica del Problema</th>
                  <th class="p-3 border">Técnica Recomendada</th>
                  <th class="p-3 border">¿Por qué?</th>
                </tr>
              </thead>
              <tbody class="text-slate-600">
                <tr class="border-b hover:bg-slate-50">
                  <td class="p-3">Subproblemas independientes</td>
                  <td class="p-3 font-bold text-blue-600">Divide y Vencerás</td>
                  <td class="p-3">Se pueden resolver por separado y combinar.</td>
                </tr>
                <tr class="border-b hover:bg-slate-50">
                  <td class="p-3">Optimización, propiedad de selección voraz</td>
                  <td class="p-3 font-bold text-green-600">Greedy</td>
                  <td class="p-3">La mejor opción local lleva a la global.</td>
                </tr>
                <tr class="border-b hover:bg-slate-50">
                  <td class="p-3">Optimización, subproblemas solapados</td>
                  <td class="p-3 font-bold text-yellow-600">Programación Dinámica</td>
                  <td class="p-3">Evita recalcular lo mismo (Memoization).</td>
                </tr>
                <tr class="border-b hover:bg-slate-50">
                  <td class="p-3">Búsqueda de todas las soluciones / Restricciones</td>
                  <td class="p-3 font-bold text-purple-600">Backtracking</td>
                  <td class="p-3">Explora el espacio de estados y poda ramas.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 'pnn18-3-project',
      title: 'Proyecto Final',
      notes: 'Especificaciones.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full">
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-slate-800">El Reto Final</h3>
            <p class="text-slate-600">
              Desarrollar una aplicación que resuelva un problema de optimización complejo combinando al menos dos de las técnicas vistas.
            </p>
            
            <div class="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <h4 class="font-bold text-slate-700 mb-2">Ejemplos de Temas</h4>
              <ul class="list-disc list-inside space-y-2 text-sm text-slate-600">
                <li>Sistema de Rutas de Reparto (TSP + Greedy).</li>
                <li>Planificador de Horarios (Graph Coloring + Backtracking).</li>
                <li>Compresor de Archivos (Huffman + Árboles).</li>
                <li>IA para Juegos de Tablero (Minimax/Backtracking).</li>
              </ul>
            </div>
          </div>

          <div class="bg-white p-6 rounded-xl shadow border border-slate-200">
            <h4 class="font-bold text-slate-700 mb-4">Entregables</h4>
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600">1</div>
                <p class="text-sm text-slate-600">Código Fuente (Repositorio Git).</p>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600">2</div>
                <p class="text-sm text-slate-600">Informe Técnico (Análisis de Complejidad).</p>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600">3</div>
                <p class="text-sm text-slate-600">Video de Sustentación (5 min).</p>
              </div>
            </div>
            
            <div class="mt-8 p-4 bg-red-50 border border-red-200 rounded text-xs text-red-800 text-center">
              Fecha Límite: Semana 16 - 23:59
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn18-4-farewell',
      title: 'Conclusión',
      notes: 'Despedida.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center space-y-8">
          <h2 class="text-3xl font-bold text-slate-800">¡Felicidades!</h2>
          <p class="text-xl text-slate-600 max-w-2xl">
            Has completado el curso de Programación No Numérica.
            <br>
            Ahora tienes las herramientas para enfrentar problemas computacionales difíciles con confianza y rigor.
          </p>
          <div class="mt-8">
            <p class="text-slate-500 italic">"Los algoritmos son la poesía de la computación." - Francis Sullivan</p>
          </div>
        </div>
      `
    }
  ]
};
