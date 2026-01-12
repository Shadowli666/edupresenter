import { Module } from '../../types';

export const PNN_MODULE_6: Module = {
  id: 'pnn-mod-6',
  title: '6. Repaso del Corte I: La Galería Algorítmica',
  description: 'Un recorrido visual por las estructuras y algoritmos dominados. Entrega de notas.',
  evaluation: 'Cierre de Corte',
  slides: [
    {
      id: 'pnn6-1',
      title: 'Bienvenido a la Galería',
      notes: 'Introducción al repaso con metáfora de museo.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full space-y-8">
          <div class="text-center max-w-4xl">
            <h1 class="text-4xl font-bold text-slate-900 mb-6">La Galería del Corte I</h1>
            <p class="text-xl text-slate-700 leading-relaxed">
              Hemos recorrido un largo camino, desde las estructuras jerárquicas hasta los algoritmos de ordenamiento más veloces.
              Hoy, pasearemos por esta galería para admirar nuestras herramientas antes de cerrar el capítulo.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl">
            <div class="bg-white p-4 rounded-xl shadow-md border-t-4 border-green-500 flex flex-col items-center transform hover:scale-105 transition-transform">
              <span class="text-4xl mb-2">🌳</span>
              <h3 class="font-bold text-slate-700">El Bosque</h3>
              <p class="text-xs text-slate-500 text-center">Árboles y Heaps</p>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-md border-t-4 border-blue-500 flex flex-col items-center transform hover:scale-105 transition-transform">
              <span class="text-4xl mb-2">⚔️</span>
              <h3 class="font-bold text-slate-700">La Estrategia</h3>
              <p class="text-xs text-slate-500 text-center">Divide y Conquista</p>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-md border-t-4 border-purple-500 flex flex-col items-center transform hover:scale-105 transition-transform">
              <span class="text-4xl mb-2">📚</span>
              <h3 class="font-bold text-slate-700">El Orden</h3>
              <p class="text-xs text-slate-500 text-center">Merge & Quick Sort</p>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-md border-t-4 border-yellow-500 flex flex-col items-center transform hover:scale-105 transition-transform">
              <span class="text-4xl mb-2">🏆</span>
              <h3 class="font-bold text-slate-700">El Logro</h3>
              <p class="text-xs text-slate-500 text-center">Tus Notas</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn6-2-trees-heaps',
      title: 'Sala 1: Jerarquías y Prioridades',
      notes: 'Repaso de Árboles y Heaps.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full">
          <div class="bg-green-50 p-8 rounded-xl border-2 border-green-200 flex flex-col items-center text-center">
             <div class="text-6xl mb-4">🌳</div>
             <h3 class="text-2xl font-bold text-green-900 mb-4">Árboles Binarios</h3>
             <p class="text-green-800 mb-4">
               La estructura fundamental para representar jerarquías.
             </p>
             <ul class="text-left text-sm text-green-900 space-y-2 bg-white p-4 rounded-lg shadow-sm w-full">
               <li>✅ <strong>Raíz, Nodos, Hojas:</strong> El vocabulario básico.</li>
               <li>✅ <strong>Recorridos:</strong> Pre-orden, In-orden, Post-orden.</li>
               <li>✅ <strong>Aplicación:</strong> Estructura de archivos, DOM HTML.</li>
             </ul>
          </div>

          <div class="bg-yellow-50 p-8 rounded-xl border-2 border-yellow-200 flex flex-col items-center text-center">
             <div class="text-6xl mb-4">👑</div>
             <h3 class="text-2xl font-bold text-yellow-900 mb-4">Heaps (Montículos)</h3>
             <p class="text-yellow-800 mb-4">
               Donde el "Jefe" (Max o Min) siempre está arriba.
             </p>
             <ul class="text-left text-sm text-yellow-900 space-y-2 bg-white p-4 rounded-lg shadow-sm w-full">
               <li>✅ <strong>Propiedad de Orden:</strong> Padre >= Hijo (Max-Heap).</li>
               <li>✅ <strong>Array Mágico:</strong> Se guarda en un arreglo simple.</li>
               <li>✅ <strong>Aplicación:</strong> Colas de Prioridad (Urgencias).</li>
             </ul>
          </div>
        </div>
      `
    },
    {
      id: 'pnn6-3-dnc',
      title: 'Sala 2: El Arte de la Guerra',
      notes: 'Repaso de Divide y Conquista.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full">
          <h3 class="text-3xl font-bold text-slate-800 mb-8">Divide y Conquista</h3>
          
          <div class="flex items-center gap-4 w-full max-w-4xl">
            
            <div class="flex-1 bg-blue-100 p-6 rounded-xl border-2 border-blue-300 text-center relative">
              <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">1</div>
              <h4 class="text-xl font-bold text-blue-900">Dividir</h4>
              <p class="text-sm text-blue-800 mt-2">Romper el problema grande en pedazos pequeños.</p>
              <div class="mt-4 flex justify-center gap-2">
                <div class="w-8 h-8 bg-blue-300 rounded"></div>
                <div class="w-8 h-8 bg-blue-300 rounded"></div>
              </div>
            </div>

            <div class="text-4xl text-slate-300">➡️</div>

            <div class="flex-1 bg-purple-100 p-6 rounded-xl border-2 border-purple-300 text-center relative">
              <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">2</div>
              <h4 class="text-xl font-bold text-purple-900">Conquistar</h4>
              <p class="text-sm text-purple-800 mt-2">Resolver recursivamente (Caso Base es clave).</p>
              <div class="mt-4 flex justify-center gap-2">
                <div class="w-8 h-8 bg-purple-400 rounded animate-pulse"></div>
                <div class="w-8 h-8 bg-purple-400 rounded animate-pulse"></div>
              </div>
            </div>

            <div class="text-4xl text-slate-300">➡️</div>

            <div class="flex-1 bg-green-100 p-6 rounded-xl border-2 border-green-300 text-center relative">
              <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">3</div>
              <h4 class="text-xl font-bold text-green-900">Combinar</h4>
              <p class="text-sm text-green-800 mt-2">Unir las soluciones pequeñas en la solución final.</p>
              <div class="mt-4 flex justify-center">
                <div class="w-16 h-8 bg-green-500 rounded shadow-lg"></div>
              </div>
            </div>

          </div>
        </div>
      `
    },
    {
      id: 'pnn6-4-sorting',
      title: 'Sala 3: El Duelo de Titanes',
      notes: 'Merge Sort vs Quick Sort.',
      contentHtml: `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
          
          <!-- Merge Sort -->
          <div class="bg-white p-6 rounded-xl shadow-lg border-t-8 border-indigo-500 h-full flex flex-col">
            <div class="flex items-center gap-4 mb-4">
              <span class="text-4xl">🤐</span>
              <div>
                <h3 class="text-2xl font-bold text-indigo-900">Merge Sort</h3>
                <span class="text-xs font-bold text-indigo-500 uppercase tracking-wide">El Bibliotecario</span>
              </div>
            </div>
            <ul class="space-y-3 text-slate-600 flex-1">
              <li class="flex items-start gap-2">
                <span class="text-green-500 font-bold">✓</span>
                <span><strong>Estable:</strong> Mantiene el orden original de iguales.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-500 font-bold">✓</span>
                <span><strong>Predecible:</strong> Siempre O(N log N).</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-500 font-bold">✗</span>
                <span><strong>Memoria:</strong> Usa O(N) extra (no es in-place).</span>
              </li>
            </ul>
            <div class="mt-4 bg-indigo-50 p-3 rounded text-center text-sm font-bold text-indigo-800">
              "Lento pero seguro."
            </div>
          </div>

          <!-- Quick Sort -->
          <div class="bg-white p-6 rounded-xl shadow-lg border-t-8 border-red-500 h-full flex flex-col">
            <div class="flex items-center gap-4 mb-4">
              <span class="text-4xl">⚡</span>
              <div>
                <h3 class="text-2xl font-bold text-red-900">Quick Sort</h3>
                <span class="text-xs font-bold text-red-500 uppercase tracking-wide">El Organizador</span>
              </div>
            </div>
            <ul class="space-y-3 text-slate-600 flex-1">
              <li class="flex items-start gap-2">
                <span class="text-green-500 font-bold">✓</span>
                <span><strong>Rápido:</strong> Muy veloz en la práctica (cache-friendly).</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-500 font-bold">✓</span>
                <span><strong>In-Place:</strong> Solo usa pila de recursión O(log N).</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-500 font-bold">✗</span>
                <span><strong>Riesgo:</strong> O(N²) si el pivote es malo.</span>
              </li>
            </ul>
            <div class="mt-4 bg-red-50 p-3 rounded text-center text-sm font-bold text-red-800">
              "Rápido y furioso."
            </div>
          </div>

        </div>
      `
    },
    {
      id: 'pnn6-5-challenge',
      title: 'Sala 4: Desafío Mental',
      notes: 'Mini-reto interactivo.',
      contentHtml: `
        <div class="flex flex-col h-full space-y-6">
          <h3 class="text-2xl font-bold text-slate-800">¿Qué herramienta usarías?</h3>
          
          <div class="grid gap-4">
            
            <div class="bg-white p-4 rounded-lg shadow border-l-4 border-slate-400 hover:border-blue-500 transition-colors group">
              <div class="flex justify-between items-center">
                <p class="font-semibold text-slate-700">1. Sala de Urgencias: Atender al paciente más grave.</p>
                <span class="opacity-0 group-hover:opacity-100 text-blue-600 font-bold transition-opacity">Max-Heap (Priority Queue)</span>
              </div>
            </div>

            <div class="bg-white p-4 rounded-lg shadow border-l-4 border-slate-400 hover:border-indigo-500 transition-colors group">
              <div class="flex justify-between items-center">
                <p class="font-semibold text-slate-700">2. Ordenar exámenes por nota, manteniendo orden de entrega.</p>
                <span class="opacity-0 group-hover:opacity-100 text-indigo-600 font-bold transition-opacity">Merge Sort (Estable)</span>
              </div>
            </div>

            <div class="bg-white p-4 rounded-lg shadow border-l-4 border-slate-400 hover:border-red-500 transition-colors group">
              <div class="flex justify-between items-center">
                <p class="font-semibold text-slate-700">3. Ordenar millones de datos en la memoria RAM lo más rápido posible.</p>
                <span class="opacity-0 group-hover:opacity-100 text-red-600 font-bold transition-opacity">Quick Sort (Rápido & In-Place)</span>
              </div>
            </div>

          </div>
          
          <p class="text-center text-sm text-slate-500 mt-8">
            (Pasa el mouse sobre las tarjetas para ver la respuesta)
          </p>
        </div>
      `
    },
    {
      id: 'pnn6-6-results',
      title: 'Sala 5: Resultados del Corte',
      notes: 'Entrega de notas.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full w-full">
           <div class="bg-white p-8 rounded-2xl shadow-xl w-full max-w-3xl border border-slate-200">
            <div class="flex items-center justify-between mb-6 border-b pb-4">
              <h3 class="text-2xl font-bold text-slate-800">Boletín Oficial: Corte I</h3>
              <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">Estado: Finalizado</span>
            </div>
            
            <table class="w-full text-left">
              <thead class="bg-slate-50 text-slate-500 text-xs uppercase font-bold">
                <tr>
                  <th class="p-4 rounded-l-lg">Actividad</th>
                  <th class="p-4">Tema</th>
                  <th class="p-4 text-right rounded-r-lg">Ponderación</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr class="hover:bg-slate-50 transition-colors">
                  <td class="p-4 font-medium text-slate-700">Taller Práctico</td>
                  <td class="p-4 text-slate-500">Divide y Conquista</td>
                  <td class="p-4 text-right font-bold text-blue-600">10%</td>
                </tr>
                <tr class="hover:bg-slate-50 transition-colors">
                  <td class="p-4 font-medium text-slate-700">Prueba Escrita</td>
                  <td class="p-4 text-slate-500">Ordenamiento (Merge & Quick)</td>
                  <td class="p-4 text-right font-bold text-blue-600">20%</td>
                </tr>
                <tr class="bg-slate-50">
                  <td class="p-4 font-bold text-slate-900" colspan="2">NOTA FINAL CORTE I</td>
                  <td class="p-4 text-right font-bold text-2xl text-indigo-600">30%</td>
                </tr>
              </tbody>
            </table>

            <div class="mt-6 text-center">
              <p class="text-sm text-slate-500">
                Por favor, acérquese al escritorio para revisar su nota individual.
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn6-7-next',
      title: 'Próxima Atracción: La Codicia',
      notes: 'Teaser del siguiente tema.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center space-y-6">
          <h2 class="text-3xl font-bold text-slate-800">Próximamente en el Corte II...</h2>
          
          <div class="bg-gradient-to-r from-emerald-500 to-teal-600 p-1 rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <div class="bg-white p-8 rounded-xl">
              <h3 class="text-2xl font-bold text-emerald-800 mb-2">Algoritmos Voraces (Greedy)</h3>
              <p class="text-slate-600 mb-4">
                ¿Es posible llegar a la mejor solución global tomando siempre la mejor decisión inmediata?
              </p>
              <div class="flex justify-center gap-4 text-4xl">
                <span>💰</span>
                <span>🏃</span>
                <span>🎒</span>
              </div>
            </div>
          </div>

          <p class="text-slate-500 mt-8">
            Prepárense para optimizar recursos, dar cambio y llenar mochilas.
          </p>
        </div>
      `
    }
  ]
};
