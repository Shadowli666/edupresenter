import { Module } from '../../types';

export const PNN_MODULE_4: Module = {
  id: 'pnn-mod-4',
  title: '4. Merge Sort: El Arte de la Fusión Ordenada',
  description: 'Domina el algoritmo de ordenamiento estable por excelencia y su aplicación en Big Data.',
  evaluation: '10% - Implementación y Análisis',
  slides: [
    {
      id: 'pnn4-1',
      title: 'Merge Sort: Divide y Vencerás',
      notes: 'Introducción al Merge Sort con metáfora visual.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full space-y-8">
          <div class="text-center max-w-4xl">
            <h1 class="text-4xl font-bold text-indigo-900 mb-6">Merge Sort: El Bibliotecario Metódico</h1>
            <p class="text-xl text-slate-700 leading-relaxed">
              Imagina que tienes una pila desordenada de 1000 expedientes. ¿Cómo los ordenas?
              <br>
              La estrategia de <strong>Merge Sort</strong> es simple: no intentes ordenar todo a la vez.
              Divide la pila en dos, luego en cuatro, hasta que tengas pilas de 1 solo expediente (que ya están "ordenadas").
              Luego, simplemente <strong>fusiona</strong> (merge) las pilas ordenadas pares en pilas más grandes.
            </p>
          </div>

          <div class="grid grid-cols-3 gap-8 w-full max-w-5xl">
            <div class="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500 transform hover:-translate-y-1 transition-transform">
              <div class="text-5xl mb-4 text-center">🔪</div>
              <h3 class="text-xl font-bold text-slate-800 text-center mb-2">1. Dividir</h3>
              <p class="text-slate-600 text-center text-sm">
                Cortar el problema por la mitad recursivamente hasta llegar a la unidad indivisible.
              </p>
            </div>
            
            <div class="bg-white p-6 rounded-xl shadow-lg border-t-4 border-purple-500 transform hover:-translate-y-1 transition-transform">
              <div class="text-5xl mb-4 text-center">👑</div>
              <h3 class="text-xl font-bold text-slate-800 text-center mb-2">2. Conquistar</h3>
              <p class="text-slate-600 text-center text-sm">
                El caso base es trivial: una lista de 1 elemento ya está ordenada. ¡No hay nada que hacer!
              </p>
            </div>

            <div class="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500 transform hover:-translate-y-1 transition-transform">
              <div class="text-5xl mb-4 text-center">🤐</div>
              <h3 class="text-xl font-bold text-slate-800 text-center mb-2">3. Combinar</h3>
              <p class="text-slate-600 text-center text-sm">
                La magia ocurre aquí: entrelazar dos listas ordenadas en una nueva lista ordenada (como barajar cartas).
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn4-2',
      title: 'Anatomía del Algoritmo',
      notes: 'Explicación visual del flujo recursivo.',
      contentHtml: `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full items-center">
          <div class="space-y-6">
            <div class="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
              <h3 class="text-xl font-bold text-indigo-900 mb-4">La Estructura Recursiva</h3>
              <p class="text-indigo-800 mb-4">
                Merge Sort delega el trabajo a sus "hijos" recursivos y solo trabaja realmente cuando estos regresan.
                Es un recorrido <strong>Post-Orden</strong>: primero procesa los hijos, luego la raíz hace el trabajo (merge).
              </p>
              <div class="font-mono text-sm bg-white p-4 rounded border border-indigo-200 shadow-inner">
                <span class="text-purple-600">function</span> <span class="text-blue-600">mergeSort</span>(arr):<br>
                &nbsp;&nbsp;<span class="text-slate-500">// Caso Base</span><br>
                &nbsp;&nbsp;<span class="text-purple-600">if</span> length(arr) <= 1: <span class="text-purple-600">return</span> arr<br><br>
                &nbsp;&nbsp;<span class="text-slate-500">// Dividir</span><br>
                &nbsp;&nbsp;mid = length(arr) / 2<br>
                &nbsp;&nbsp;left = <span class="text-blue-600">mergeSort</span>(arr[0..mid])<br>
                &nbsp;&nbsp;right = <span class="text-blue-600">mergeSort</span>(arr[mid..end])<br><br>
                &nbsp;&nbsp;<span class="text-slate-500">// Combinar (La magia)</span><br>
                &nbsp;&nbsp;<span class="text-purple-600">return</span> <span class="text-red-600">merge</span>(left, right)
              </div>
            </div>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-lg border border-slate-200 flex flex-col items-center justify-center min-h-[400px]">
            <h4 class="font-bold text-slate-500 mb-6 uppercase tracking-wider">Visualización del Árbol de Llamadas</h4>
            <div class="relative w-full max-w-md aspect-video bg-slate-50 rounded-lg border border-slate-200 p-4 flex items-center justify-center">
              <!-- Diagrama simplificado con CSS -->
              <div class="flex flex-col items-center gap-4 w-full">
                <div class="w-3/4 h-8 bg-blue-500 rounded shadow flex items-center justify-center text-white font-mono text-xs">Input Desordenado</div>
                <div class="flex w-full justify-center gap-4">
                  <div class="w-1/2 h-16 border-l-2 border-t-2 border-slate-300 rounded-tl-lg"></div>
                  <div class="w-1/2 h-16 border-r-2 border-t-2 border-slate-300 rounded-tr-lg"></div>
                </div>
                <div class="flex w-full justify-between px-8 -mt-16">
                   <div class="w-1/3 h-6 bg-blue-400 rounded shadow flex items-center justify-center text-white font-mono text-[10px]">Mitad Izq</div>
                   <div class="w-1/3 h-6 bg-blue-400 rounded shadow flex items-center justify-center text-white font-mono text-[10px]">Mitad Der</div>
                </div>
                <div class="mt-8 text-center">
                  <div class="text-2xl animate-bounce">⬇️</div>
                  <span class="text-xs text-slate-400 font-bold">RECURSIÓN PROFUNDA</span>
                </div>
                <div class="w-full h-10 bg-green-500 rounded shadow flex items-center justify-center text-white font-bold animate-pulse mt-2">
                  MERGE: Fusión Ordenada
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn4-3',
      title: 'El Corazón: La Función Merge',
      notes: 'Detalle de la lógica de mezcla.',
      contentHtml: `
        <div class="flex flex-col h-full">
          <div class="mb-6">
            <h2 class="text-3xl font-bold text-slate-800">La Cremallera (Zipper)</h2>
            <p class="text-lg text-slate-600 mt-2">
              La función <code>merge</code> actúa como una cremallera. Tiene dos listas de entrada (ya ordenadas) y un puntero en cada una.
              En cada paso, compara los dos elementos apuntados, toma el <strong>menor</strong>, lo añade a la salida y avanza ese puntero.
            </p>
          </div>

          <div class="flex-1 bg-slate-900 rounded-xl p-6 overflow-hidden relative shadow-2xl">
            <div class="absolute top-0 right-0 bg-slate-800 text-slate-400 px-4 py-2 rounded-bl-xl text-xs font-mono">Lógica de Fusión</div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
              <!-- Código -->
              <div class="font-mono text-sm text-green-400 overflow-y-auto custom-scrollbar">
<pre><code class="language-python">def merge(left, right):
    result = []
    i = 0  # Puntero Izquierda
    j = 0  # Puntero Derecha

    # Mientras haya elementos en ambas
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    # Recoger los sobrantes (si quedan)
    result.extend(left[i:])
    result.extend(right[j:])
    
    return result</code></pre>
              </div>

              <!-- Visualización Zipper -->
              <div class="flex flex-col items-center justify-center space-y-4">
                <div class="flex gap-8 items-end">
                  <div class="flex flex-col gap-2 items-center">
                    <span class="text-slate-400 text-xs">Izquierda (Ordenada)</span>
                    <div class="flex flex-col gap-1">
                      <div class="w-12 h-8 bg-blue-600 text-white flex items-center justify-center rounded font-bold border-2 border-yellow-400">2</div>
                      <div class="w-12 h-8 bg-blue-800 text-slate-400 flex items-center justify-center rounded">5</div>
                      <div class="w-12 h-8 bg-blue-900 text-slate-600 flex items-center justify-center rounded">8</div>
                    </div>
                  </div>
                  
                  <div class="flex flex-col gap-2 items-center">
                    <span class="text-slate-400 text-xs">Derecha (Ordenada)</span>
                    <div class="flex flex-col gap-1">
                      <div class="w-12 h-8 bg-purple-600 text-white flex items-center justify-center rounded font-bold">3</div>
                      <div class="w-12 h-8 bg-purple-800 text-slate-400 flex items-center justify-center rounded">6</div>
                      <div class="w-12 h-8 bg-purple-900 text-slate-600 flex items-center justify-center rounded">9</div>
                    </div>
                  </div>
                </div>

                <div class="text-2xl text-white animate-bounce">⬇️</div>

                <div class="w-full max-w-[200px] h-12 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold shadow-[0_0_20px_rgba(22,163,74,0.5)]">
                  Resultado: [2, ...]
                </div>
                <p class="text-xs text-slate-400 text-center max-w-[200px]">
                  Compara 2 vs 3. <br>2 es menor -> Pasa al resultado. <br>Avanza puntero izquierdo.
                </p>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn4-4-trace',
      title: 'Traza Visual: El Baile de los Números',
      notes: 'Animación paso a paso del algoritmo.',
      contentHtml: `
        <div class="flex flex-col items-center w-full h-full overflow-y-auto custom-scrollbar">
          <h3 class="text-2xl font-bold text-slate-800 mb-6">Ejemplo: [38, 27, 43, 3]</h3>
          
          <div class="relative flex flex-col items-center gap-8 w-full max-w-4xl py-8">
            
            <!-- Fase de División -->
            <div class="w-full flex flex-col items-center gap-4 opacity-80 hover:opacity-100 transition-opacity">
              <div class="bg-slate-200 px-6 py-3 rounded-lg font-mono font-bold shadow-sm border border-slate-300">
                [38, 27, 43, 3]
              </div>
              <div class="flex w-full justify-center gap-16">
                 <div class="h-8 w-px bg-slate-300"></div>
                 <div class="h-8 w-px bg-slate-300"></div>
              </div>
              <div class="flex justify-center gap-8 w-full">
                 <div class="bg-blue-50 px-4 py-2 rounded font-mono text-sm border border-blue-200">[38, 27]</div>
                 <div class="bg-blue-50 px-4 py-2 rounded font-mono text-sm border border-blue-200">[43, 3]</div>
              </div>
              <div class="flex w-full justify-center gap-32">
                 <div class="flex gap-4">
                    <div class="h-6 w-px bg-slate-300"></div>
                    <div class="h-6 w-px bg-slate-300"></div>
                 </div>
                 <div class="flex gap-4">
                    <div class="h-6 w-px bg-slate-300"></div>
                    <div class="h-6 w-px bg-slate-300"></div>
                 </div>
              </div>
              <div class="flex justify-center gap-4 w-full text-xs font-bold">
                  <span class="bg-yellow-100 px-3 py-1 rounded border border-yellow-300">38</span>
                  <span class="bg-yellow-100 px-3 py-1 rounded border border-yellow-300">27</span>
                  <div class="w-8"></div>
                  <span class="bg-yellow-100 px-3 py-1 rounded border border-yellow-300">43</span>
                  <span class="bg-yellow-100 px-3 py-1 rounded border border-yellow-300">3</span>
              </div>
            </div>

            <!-- Separador -->
            <div class="w-full border-t-2 border-dashed border-slate-300 relative my-2">
               <span class="absolute top-[-12px] left-1/2 -translate-x-1/2 bg-white px-2 text-xs text-slate-400 font-bold uppercase tracking-widest">Punto de Inflexión</span>
            </div>

            <!-- Fase de Conquista (Merge) -->
            <div class="w-full flex flex-col items-center gap-4">
              <div class="flex justify-center gap-4 w-full text-xs font-bold">
                  <div class="bg-green-50 px-3 py-2 rounded font-mono border border-green-300 shadow-sm flex items-center gap-2">
                    <span class="text-slate-400 line-through text-[10px]">38,27</span>
                    <span class="text-green-700 font-bold">[27, 38]</span>
                  </div>
                  <div class="w-8"></div>
                  <div class="bg-green-50 px-3 py-2 rounded font-mono border border-green-300 shadow-sm flex items-center gap-2">
                    <span class="text-slate-400 line-through text-[10px]">43,3</span>
                    <span class="text-green-700 font-bold">[3, 43]</span>
                  </div>
              </div>

              <div class="flex w-full justify-center gap-16">
                 <div class="h-8 w-px bg-green-300"></div>
                 <div class="h-8 w-px bg-green-300"></div>
              </div>

              <div class="bg-green-600 text-white px-8 py-4 rounded-xl font-mono text-xl font-bold shadow-xl border-4 border-green-700 animate-pulse">
                [3, 27, 38, 43]
              </div>
            </div>

          </div>
        </div>
      `
    },
    {
      id: 'pnn4-5-complexity',
      title: 'El Costo de la Perfección',
      notes: 'Análisis de complejidad O(N log N).',
      contentHtml: `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
          <div class="bg-white p-8 rounded-xl shadow-lg border-l-8 border-blue-600 flex flex-col justify-center">
            <h3 class="text-2xl font-bold text-slate-800 mb-4">Tiempo: Consistencia Absoluta</h3>
            <div class="text-5xl font-mono font-bold text-blue-600 mb-2">O(N log N)</div>
            <p class="text-slate-600 mb-6">
              A diferencia de Quick Sort, Merge Sort <strong>siempre</strong> tarda lo mismo, sin importar si la lista está ordenada, invertida o aleatoria.
            </p>
            <ul class="space-y-3">
              <li class="flex items-center gap-3 text-slate-700">
                <span class="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold">log N</span>
                <span>Niveles de división (profundidad del árbol).</span>
              </li>
              <li class="flex items-center gap-3 text-slate-700">
                <span class="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold">N</span>
                <span>Trabajo de fusión en cada nivel.</span>
              </li>
            </ul>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-lg border-l-8 border-orange-500 flex flex-col justify-center">
            <h3 class="text-2xl font-bold text-slate-800 mb-4">Espacio: El Precio a Pagar</h3>
            <div class="text-5xl font-mono font-bold text-orange-500 mb-2">O(N)</div>
            <p class="text-slate-600 mb-6">
              Merge Sort no es "in-place". Necesita memoria auxiliar para crear las sublistas temporales durante la fusión.
            </p>
            <div class="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <p class="text-sm text-orange-800 italic">
                "Si tienes poca memoria RAM, Merge Sort podría no ser tu mejor amigo. Pero si necesitas estabilidad y predictibilidad, es el rey."
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn4-6-external',
      title: 'Merge Sort en el Mundo Real: Big Data',
      notes: 'Aplicación en ordenamiento externo.',
      contentHtml: `
        <div class="flex flex-col h-full space-y-6">
          <div class="bg-slate-800 text-white p-6 rounded-xl shadow-lg">
            <h3 class="text-2xl font-bold mb-2">El Problema del Almacén Gigante</h3>
            <p class="text-slate-300">
              Imagina que tienes que ordenar <strong>100 Terabytes</strong> de datos, pero tu computadora solo tiene <strong>16 Gigabytes</strong> de RAM.
              ¡No puedes cargar todo en memoria! Aquí es donde Merge Sort brilla con su variante: <strong>External Merge Sort</strong>.
            </p>
          </div>

          <div class="grid grid-cols-3 gap-4 flex-1">
            <!-- Paso 1 -->
            <div class="bg-white border-2 border-slate-200 rounded-xl p-4 flex flex-col items-center text-center">
              <div class="text-4xl mb-2">📦</div>
              <h4 class="font-bold text-slate-700">1. Chunks (Runs)</h4>
              <p class="text-xs text-slate-500 mt-2">
                Lee bloques de 16GB del disco, ordénalos en RAM (con cualquier algoritmo rápido) y guárdalos de nuevo en disco como "archivos temporales ordenados".
              </p>
            </div>

            <!-- Paso 2 -->
            <div class="bg-white border-2 border-slate-200 rounded-xl p-4 flex flex-col items-center text-center relative">
              <div class="absolute top-1/2 -left-6 transform -translate-y-1/2 text-slate-300 text-2xl">➡️</div>
              <div class="text-4xl mb-2">🏗️</div>
              <h4 class="font-bold text-slate-700">2. K-Way Merge</h4>
              <p class="text-xs text-slate-500 mt-2">
                Abre todos los archivos temporales simultáneamente (como streams). Lee el primer elemento de cada uno, elige el menor y escríbelo al archivo final.
              </p>
            </div>

            <!-- Paso 3 -->
            <div class="bg-white border-2 border-slate-200 rounded-xl p-4 flex flex-col items-center text-center relative">
              <div class="absolute top-1/2 -left-6 transform -translate-y-1/2 text-slate-300 text-2xl">➡️</div>
              <div class="text-4xl mb-2">💾</div>
              <h4 class="font-bold text-slate-700">3. Resultado</h4>
              <p class="text-xs text-slate-500 mt-2">
                Obtienes un archivo de 100TB completamente ordenado sin haber cargado nunca más de 16GB a la vez.
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn4-7-code',
      title: 'Código Fuente (Referencia)',
      notes: 'Implementación en C++ y Python.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-6 h-full overflow-hidden">
          <div class="flex flex-col h-full">
            <div class="bg-blue-600 text-white px-4 py-2 rounded-t-lg font-bold text-sm flex justify-between items-center">
              <span>C++ (STL Style)</span>
              <span class="text-xs opacity-75">std::vector</span>
            </div>
            <div class="bg-slate-900 p-4 rounded-b-lg overflow-auto custom-scrollbar flex-1 text-xs font-mono text-blue-100">
<pre><code class="language-cpp">void merge(vector<int>& arr, int l, int m, int r) {
    int n1 = m - l + 1;
    int n2 = r - m;
    vector<int> L(n1), R(n2);

    for(int i=0; i<n1; i++) L[i] = arr[l + i];
    for(int j=0; j<n2; j++) R[j] = arr[m + 1 + j];

    int i=0, j=0, k=l;
    while(i < n1 && j < n2) {
        if(L[i] <= R[j]) arr[k++] = L[i++];
        else arr[k++] = R[j++];
    }
    while(i < n1) arr[k++] = L[i++];
    while(j < n2) arr[k++] = R[j++];
}

void mergeSort(vector<int>& arr, int l, int r) {
    if(l >= r) return;
    int m = l + (r-l)/2;
    mergeSort(arr, l, m);
    mergeSort(arr, m+1, r);
    merge(arr, l, m, r);
}</code></pre>
            </div>
          </div>

          <div class="flex flex-col h-full">
            <div class="bg-yellow-500 text-white px-4 py-2 rounded-t-lg font-bold text-sm flex justify-between items-center">
              <span>Python</span>
              <span class="text-xs opacity-75">List Slicing</span>
            </div>
            <div class="bg-slate-900 p-4 rounded-b-lg overflow-auto custom-scrollbar flex-1 text-xs font-mono text-yellow-100">
<pre><code class="language-python">def merge_sort(arr):
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
            
    result.extend(left[i:])
    result.extend(right[j:])
    return result</code></pre>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn4-8-summary',
      title: 'Resumen y Próximos Pasos',
      notes: 'Conclusión del módulo.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center space-y-8">
          <div class="bg-green-100 p-6 rounded-full shadow-lg mb-4">
            <span class="text-6xl">✅</span>
          </div>
          <h2 class="text-4xl font-bold text-slate-800">Módulo 4 Completado</h2>
          <p class="text-xl text-slate-600 max-w-2xl">
            Has dominado el arte de <strong>Dividir y Conquistar</strong> aplicado al ordenamiento.
            Merge Sort es robusto, estable y fundamental para el procesamiento de datos a gran escala.
          </p>
          <div class="grid grid-cols-2 gap-4 w-full max-w-lg mt-8">
            <div class="bg-white p-4 rounded border shadow-sm">
              <span class="block text-sm text-slate-400 uppercase font-bold">Complejidad</span>
              <span class="text-lg font-mono text-blue-600">O(N log N)</span>
            </div>
            <div class="bg-white p-4 rounded border shadow-sm">
              <span class="block text-sm text-slate-400 uppercase font-bold">Próximo Tema</span>
              <span class="text-lg font-bold text-purple-600">Quick Sort ⚡</span>
            </div>
          </div>
        </div>
      `
    }
  ]
};
