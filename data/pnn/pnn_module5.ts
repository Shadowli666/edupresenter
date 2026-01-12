import { Module } from '../../types';

export const PNN_MODULE_5: Module = {
  id: 'pnn-mod-5',
  title: '5. Quick Sort: La Velocidad del Caos Controlado',
  description: 'Domina el algoritmo de ordenamiento más rápido en la práctica y sus estrategias de pivote.',
  evaluation: '20% - Prueba Escrita',
  slides: [
    {
      id: 'pnn5-1',
      title: 'Quick Sort: El Organizador Veloz',
      notes: 'Introducción a Quicksort con metáfora visual.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full space-y-8">
          <div class="text-center max-w-4xl">
            <h1 class="text-4xl font-bold text-purple-900 mb-6">Quick Sort: Divide y Vencerás (Versión Turbo)</h1>
            <p class="text-xl text-slate-700 leading-relaxed">
              A diferencia de Merge Sort que divide "perfectamente" a la mitad, <strong>Quick Sort</strong> es más agresivo.
              Elige un elemento al azar (el <strong>Pivote</strong>) y lanza todo lo menor a su izquierda y todo lo mayor a su derecha.
              Es como organizar una foto escolar: "¡Tú, Juan, ponte aquí! ¡Más bajos a la izquierda, más altos a la derecha!"
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl items-center">
            <div class="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 text-center opacity-75">
              <h3 class="text-lg font-bold text-blue-800">Menores</h3>
              <div class="flex justify-center gap-2 mt-2">
                <div class="w-8 h-8 bg-blue-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                <div class="w-6 h-6 bg-blue-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
              </div>
            </div>
            
            <div class="bg-yellow-100 p-8 rounded-full border-4 border-yellow-400 text-center shadow-xl z-10 transform scale-110">
              <div class="text-4xl mb-2">👑</div>
              <h3 class="text-xl font-bold text-yellow-800">EL PIVOTE</h3>
              <p class="text-xs text-yellow-700">El punto de referencia</p>
            </div>

            <div class="bg-red-50 p-6 rounded-xl border-2 border-red-200 text-center opacity-75">
              <h3 class="text-lg font-bold text-red-800">Mayores</h3>
              <div class="flex justify-center gap-2 mt-2">
                <div class="w-10 h-10 bg-red-400 rounded-full animate-bounce" style="animation-delay: 0.3s"></div>
                <div class="w-12 h-12 bg-red-400 rounded-full animate-bounce" style="animation-delay: 0.4s"></div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn5-2',
      title: 'La Partición: El Corazón del Algoritmo',
      notes: 'Explicación visual de la función partition.',
      contentHtml: `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
          <div class="space-y-6">
            <div class="bg-purple-50 p-6 rounded-xl border border-purple-100">
              <h3 class="text-xl font-bold text-purple-900 mb-4">¿Cómo funciona <code>partition</code>?</h3>
              <p class="text-purple-800 mb-4">
                El objetivo es colocar el <strong>Pivote</strong> en su posición final correcta.
                Recorremos el arreglo y si encontramos alguien menor que el pivote, lo intercambiamos hacia la zona de "menores".
              </p>
              <ol class="list-decimal list-inside space-y-2 text-sm text-purple-900 bg-white p-4 rounded shadow-sm">
                <li>Elegir Pivote (ej. el último elemento).</li>
                <li>Índice <code>i</code> marca el final de la zona de "menores".</li>
                <li>Recorrer con <code>j</code>. Si <code>arr[j] < pivote</code>, incrementar <code>i</code> e intercambiar <code>arr[i]</code> con <code>arr[j]</code>.</li>
                <li>Al final, poner el Pivote en <code>i + 1</code>.</li>
              </ol>
            </div>
          </div>

          <div class="bg-slate-900 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center relative overflow-hidden">
            <!-- Visualización de Partición -->
            <div class="flex items-end gap-2 mb-12">
              <!-- Zona Menores -->
              <div class="flex gap-1 p-2 border-b-4 border-blue-500 relative">
                <span class="absolute -bottom-8 left-0 text-blue-400 text-xs font-bold">Menores (i)</span>
                <div class="w-8 h-12 bg-blue-600 text-white flex items-center justify-center rounded">2</div>
                <div class="w-8 h-20 bg-blue-600 text-white flex items-center justify-center rounded">4</div>
              </div>
              
              <!-- Zona Desconocida / Mayores -->
              <div class="flex gap-1 p-2 border-b-4 border-red-500 relative">
                <span class="absolute -bottom-8 right-0 text-red-400 text-xs font-bold">Mayores (j)</span>
                <div class="w-8 h-24 bg-red-600 text-white flex items-center justify-center rounded">9</div>
                <div class="w-8 h-16 bg-red-600 text-white flex items-center justify-center rounded">7</div>
                <div class="w-8 h-10 bg-slate-600 text-slate-400 flex items-center justify-center rounded border-2 border-yellow-400">3?</div>
              </div>

              <!-- Pivote -->
              <div class="ml-4 flex flex-col items-center">
                <div class="w-10 h-14 bg-yellow-500 text-black font-bold flex items-center justify-center rounded shadow-[0_0_15px_rgba(234,179,8,0.6)]">5</div>
                <span class="text-yellow-500 text-xs mt-2 font-bold">PIVOTE</span>
              </div>
            </div>

            <div class="bg-slate-800 p-4 rounded text-green-400 font-mono text-xs w-full">
              > Comparando 3 con Pivote(5)...<br>
              > 3 < 5: ¡Es menor!<br>
              > Swap(9, 3) -> Mover 3 a zona azul.
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn5-3-code',
      title: 'Código: Partition (Lomuto)',
      notes: 'Implementación de la partición.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-6 h-full">
          <div class="flex flex-col h-full">
            <div class="bg-blue-600 text-white px-4 py-2 rounded-t-lg font-bold text-sm">C++</div>
            <div class="bg-slate-900 p-4 rounded-b-lg overflow-auto custom-scrollbar flex-1 text-xs font-mono text-blue-100">
<pre><code class="language-cpp">int partition(vector<int>& arr, int low, int high) {
    int pivot = arr[high]; // Pivote al final
    int i = (low - 1);     // Índice del menor elemento

    for (int j = low; j <= high - 1; j++) {
        // Si el elemento actual es menor que el pivote
        if (arr[j] < pivot) {
            i++; // Incrementar índice del menor
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return (i + 1);
}

void quickSort(vector<int>& arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}</code></pre>
            </div>
          </div>

          <div class="flex flex-col h-full">
            <div class="bg-yellow-500 text-white px-4 py-2 rounded-t-lg font-bold text-sm">Python</div>
            <div class="bg-slate-900 p-4 rounded-b-lg overflow-auto custom-scrollbar flex-1 text-xs font-mono text-yellow-100">
<pre><code class="language-python">def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    
    for j in range(low, high):
        if arr[j] < pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
            
    arr[i+1], arr[high] = arr[high], arr[i+1]
    return i + 1

def quick_sort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)</code></pre>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn5-4-trace',
      title: 'Traza Visual: El Árbol de Particiones',
      notes: 'Animación paso a paso.',
      contentHtml: `
        <div class="flex flex-col items-center w-full h-full overflow-y-auto custom-scrollbar">
          <h3 class="text-2xl font-bold text-slate-800 mb-6">Ejemplo: [10, 7, 8, 9, 1, 5]</h3>
          
          <div class="relative flex flex-col items-center gap-8 w-full max-w-4xl py-8">
            
            <!-- Nivel 0 -->
            <div class="flex flex-col items-center gap-2">
              <div class="bg-slate-200 px-6 py-3 rounded-lg font-mono font-bold shadow-sm border border-slate-300 flex gap-2">
                <span>10</span> <span>7</span> <span>8</span> <span>9</span> <span>1</span> <span class="bg-yellow-200 px-1 rounded border border-yellow-400">5 (P)</span>
              </div>
              <div class="text-xs text-slate-500">Pivote = 5</div>
            </div>

            <div class="h-8 w-px bg-slate-300"></div>

            <!-- Nivel 1 -->
            <div class="flex w-full justify-center gap-16">
               <!-- Izquierda (Menores que 5) -->
               <div class="flex flex-col items-center gap-2">
                 <div class="bg-blue-50 px-4 py-2 rounded font-mono text-sm border border-blue-200 flex gap-2">
                   <span class="bg-yellow-200 px-1 rounded border border-yellow-400">1 (P)</span>
                 </div>
                 <div class="text-[10px] text-blue-500">Menores</div>
               </div>

               <!-- Pivote Colocado -->
               <div class="bg-green-500 text-white px-3 py-2 rounded font-bold shadow-lg transform scale-110">5</div>

               <!-- Derecha (Mayores que 5) -->
               <div class="flex flex-col items-center gap-2">
                 <div class="bg-red-50 px-4 py-2 rounded font-mono text-sm border border-red-200 flex gap-2">
                   <span>10</span> <span>7</span> <span>8</span> <span class="bg-yellow-200 px-1 rounded border border-yellow-400">9 (P)</span>
                 </div>
                 <div class="text-[10px] text-red-500">Mayores</div>
               </div>
            </div>

            <div class="flex w-full justify-center gap-32">
               <div class="w-px h-8"></div> <!-- Spacer -->
               <div class="flex gap-8">
                  <div class="h-8 w-px bg-slate-300"></div>
                  <div class="h-8 w-px bg-slate-300"></div>
               </div>
            </div>

            <!-- Nivel 2 (Solo lado derecho) -->
            <div class="flex w-full justify-end pr-32 gap-8">
               <div class="bg-blue-50 px-2 py-1 rounded text-xs border border-blue-200">[7, 8]</div>
               <div class="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">9</div>
               <div class="bg-red-50 px-2 py-1 rounded text-xs border border-red-200">[10]</div>
            </div>

            <div class="mt-8 bg-green-100 border-2 border-green-500 text-green-800 px-6 py-3 rounded-full font-bold shadow-lg animate-pulse">
              Resultado: [1, 5, 7, 8, 9, 10]
            </div>

          </div>
        </div>
      `
    },
    {
      id: 'pnn5-5-complexity',
      title: 'El Riesgo del Pivote',
      notes: 'Análisis de complejidad O(N log N) vs O(N^2).',
      contentHtml: `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
          <div class="bg-white p-8 rounded-xl shadow-lg border-l-8 border-green-500 flex flex-col">
            <h3 class="text-2xl font-bold text-slate-800 mb-2">El Sueño (Caso Promedio)</h3>
            <div class="text-4xl font-mono font-bold text-green-600 mb-2">O(N log N)</div>
            <p class="text-slate-600 mb-4 text-sm">
              Si el pivote divide el arreglo más o menos a la mitad cada vez, el árbol de recursión es equilibrado (log N niveles).
            </p>
            <div class="flex justify-center mt-4">
               <div class="flex flex-col items-center gap-1">
                 <div class="w-4 h-4 bg-green-500 rounded-full"></div>
                 <div class="flex gap-4">
                   <div class="w-4 h-4 bg-green-400 rounded-full"></div>
                   <div class="w-4 h-4 bg-green-400 rounded-full"></div>
                 </div>
                 <div class="flex gap-2">
                   <div class="w-2 h-2 bg-green-300 rounded-full"></div>
                   <div class="w-2 h-2 bg-green-300 rounded-full"></div>
                   <div class="w-2 h-2 bg-green-300 rounded-full"></div>
                   <div class="w-2 h-2 bg-green-300 rounded-full"></div>
                 </div>
               </div>
            </div>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-lg border-l-8 border-red-600 flex flex-col">
            <h3 class="text-2xl font-bold text-slate-800 mb-2">La Pesadilla (Peor Caso)</h3>
            <div class="text-4xl font-mono font-bold text-red-600 mb-2">O(N²)</div>
            <p class="text-slate-600 mb-4 text-sm">
              Si el arreglo ya está ordenado y eliges siempre el último elemento como pivote, ¡no divides nada! Creas una "escalera" de N niveles.
            </p>
            <div class="flex justify-center mt-4">
               <div class="flex flex-col items-start gap-1">
                 <div class="w-4 h-4 bg-red-500 rounded-full"></div>
                 <div class="w-4 h-4 bg-red-400 rounded-full ml-4"></div>
                 <div class="w-4 h-4 bg-red-300 rounded-full ml-8"></div>
                 <div class="w-4 h-4 bg-red-200 rounded-full ml-12"></div>
               </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn5-6-strategies',
      title: 'Estrategias: Eligiendo al Líder',
      notes: 'Cómo evitar el peor caso.',
      contentHtml: `
        <div class="flex flex-col h-full space-y-6">
          <h3 class="text-2xl font-bold text-slate-800">¿Cómo evitar la catástrofe O(N²)?</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-white p-6 rounded-xl shadow border-t-4 border-red-400 opacity-60">
              <div class="text-3xl mb-2">❌</div>
              <h4 class="font-bold text-slate-700">Ingenuo</h4>
              <p class="text-sm text-slate-500 mt-2">
                Elegir siempre el primero o el último.
                <br><span class="text-red-500 font-bold">Peligro:</span> Falla si el input ya está ordenado.
              </p>
            </div>

            <div class="bg-white p-6 rounded-xl shadow border-t-4 border-blue-500">
              <div class="text-3xl mb-2">🎲</div>
              <h4 class="font-bold text-slate-700">Aleatorio (Random)</h4>
              <p class="text-sm text-slate-500 mt-2">
                Elegir un índice al azar.
                <br><span class="text-blue-600 font-bold">Bueno:</span> Hace que el peor caso sea estadísticamente imposible.
              </p>
            </div>

            <div class="bg-white p-6 rounded-xl shadow border-t-4 border-purple-500">
              <div class="text-3xl mb-2">⚖️</div>
              <h4 class="font-bold text-slate-700">Mediana de 3</h4>
              <p class="text-sm text-slate-500 mt-2">
                Mirar el primero, el del medio y el último. Elegir la mediana.
                <br><span class="text-purple-600 font-bold">Excelente:</span> Balancea casi siempre.
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn5-7-summary',
      title: 'Resumen y Próximos Pasos',
      notes: 'Conclusión del módulo.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center space-y-8">
          <div class="bg-purple-100 p-6 rounded-full shadow-lg mb-4">
            <span class="text-6xl">⚡</span>
          </div>
          <h2 class="text-4xl font-bold text-slate-800">Módulo 5 Completado</h2>
          <p class="text-xl text-slate-600 max-w-2xl">
            Ahora tienes en tu arsenal a <strong>Quick Sort</strong>, el algoritmo de ordenamiento de propósito general más utilizado en el mundo real (C++ <code>std::sort</code> lo usa).
          </p>
          <div class="grid grid-cols-2 gap-4 w-full max-w-lg mt-8">
            <div class="bg-white p-4 rounded border shadow-sm">
              <span class="block text-sm text-slate-400 uppercase font-bold">Velocidad</span>
              <span class="text-lg font-mono text-green-600">Muy Alta (In-Place)</span>
            </div>
            <div class="bg-white p-4 rounded border shadow-sm">
              <span class="block text-sm text-slate-400 uppercase font-bold">Próxima Clase</span>
              <span class="text-lg font-bold text-indigo-600">Repaso Primer Corte 📝</span>
            </div>
          </div>
        </div>
      `
    }
  ]
};
