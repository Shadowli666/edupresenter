
import { Module } from '../types';

export const PNN_MODULE_4: Module = {
  id: 'pnn-mod-4',
  title: '4. Ordenamiento: Sortmerge',
  description: 'Algoritmo Merge Sort: Teoría, Traza, Código y Ejemplos.',
  evaluation: '10% - Ejecución de Algoritmos',
  slides: [
    {
      id: 'pnn4-1',
      title: '1. Fundamentos Teóricos',
      contentHtml: `
        <div class="space-y-8">
          <div class="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg shadow-sm">
            <h3 class="text-xl font-bold text-amber-900 mb-2">Definición Formal</h3>
            <p class="text-amber-800 text-lg italic font-serif">
              "Merge Sort es un algoritmo de ordenamiento recursivo que divide repetidamente una lista en sublistas hasta que cada una contiene un solo elemento (problema pequeño), para luego mezclarlas ordenadamente (solución) hasta reconstruir la lista completa."
            </p>
          </div>

          <div class="bg-white p-6 border rounded-xl shadow-sm">
             <h4 class="font-bold text-slate-800 mb-4 text-lg border-b pb-2">Estrategia: Divide y Vencerás</h4>
             <div class="grid md:grid-cols-3 gap-6 text-center">
                <div class="p-4 bg-blue-50 rounded-lg">
                   <div class="text-3xl mb-2">🔪</div>
                   <strong class="block text-blue-900 mb-2">1. Dividir</strong>
                   <p class="text-sm text-blue-800">Partir el problema grande en dos subproblemas (n/2).</p>
                </div>
                <div class="p-4 bg-purple-50 rounded-lg">
                   <div class="text-3xl mb-2">⚔️</div>
                   <strong class="block text-purple-900 mb-2">2. Conquistar</strong>
                   <p class="text-sm text-purple-800">Llamada recursiva. Si n=1, está resuelto (Caso Base).</p>
                </div>
                <div class="p-4 bg-green-50 rounded-lg">
                   <div class="text-3xl mb-2">🔗</div>
                   <strong class="block text-green-900 mb-2">3. Combinar (Merge)</strong>
                   <p class="text-sm text-green-800">La función 'Mezclar' une dos listas ordenadas en una sola.</p>
                </div>
             </div>
          </div>

          <div class="bg-indigo-50 p-4 rounded-lg border border-indigo-200 flex gap-4 items-center">
             <div class="bg-indigo-100 p-2 rounded text-indigo-600 font-bold text-xl">🧠</div>
             <div>
               <h5 class="font-bold text-indigo-900 text-sm">Conexión con Árboles: Recorrido Post-Orden</h5>
               <p class="text-xs text-indigo-800 mt-1">
                 El flujo de ejecución del Merge Sort es idéntico a un recorrido <strong>Post-Orden</strong> (LRN) en un árbol binario: 
                 Primero resuelve la Izquierda (Left), luego la Derecha (Right), y finalmente Mezcla (Root/Node).
               </p>
             </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn4-2',
      title: '2. Algoritmo y Traza',
      contentHtml: `
        <div class="space-y-6">
          
          <!-- Pseudocódigo -->
          <div class="bg-white p-4 border rounded-lg shadow-sm mb-6">
             <h4 class="font-bold text-slate-800 mb-2 flex items-center gap-2">
               <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
               Lógica del Algoritmo
             </h4>
             
             <div class="bg-blue-50 p-3 rounded border border-blue-100 text-xs text-blue-800 mb-3 flex gap-4">
                <div><span class="font-bold">arr:</span> Arreglo a ordenar.</div>
                <div><span class="font-bold">low:</span> Índice inicial (Izquierda).</div>
                <div><span class="font-bold">high:</span> Índice final (Derecha).</div>
             </div>

             <div class="font-mono text-xs bg-slate-900 text-gray-300 p-4 rounded border border-slate-700">
               <span class="text-purple-400">Funcion</span> mergeSort(arr, low, high)<br>
               &nbsp;&nbsp;<span class="text-blue-400">Si</span> low < high <span class="text-blue-400">Entonces</span> <span class="text-gray-500">// Si hay más de 1 elemento (Validación)</span><br>
               &nbsp;&nbsp;&nbsp;&nbsp;mid = (low + high) / 2<br>
               &nbsp;&nbsp;&nbsp;&nbsp;mergeSort(arr, low, mid) &nbsp;&nbsp;&nbsp;<span class="text-gray-500">// 1. Recursión Izquierda</span><br>
               &nbsp;&nbsp;&nbsp;&nbsp;mergeSort(arr, mid+1, high) <span class="text-gray-500">// 2. Recursión Derecha</span><br>
               &nbsp;&nbsp;&nbsp;&nbsp;merge(arr, low, mid, high) <span class="text-gray-500">// 3. Combinar (Post-Orden)</span><br>
               &nbsp;&nbsp;<span class="text-blue-400">FinSi</span><br>
               <span class="text-purple-400">FinFuncion</span>
             </div>
          </div>

          <!-- Traza Visual -->
          <div class="flex flex-col items-center w-full overflow-x-auto pb-4">
             <h4 class="font-bold text-slate-800 mb-6 sticky left-0 bg-white px-2">Traza de Ejecución: [38, 27, 43, 3, 9, 82, 10]</h4>
             
             <div class="relative flex flex-col items-center gap-6 min-w-[600px]">
                
                <!-- Fase de División -->
                <div class="flex flex-col items-center gap-4 w-full">
                   
                   <!-- Nivel 0 -->
                   <div class="bg-slate-200 px-3 py-1 rounded font-mono text-xs font-bold shadow-sm border border-slate-300">
                     [38, 27, 43, 3, 9, 82, 10]
                   </div>
                   <div class="h-4 w-px bg-slate-300"></div>

                   <!-- Nivel 1 -->
                   <div class="flex justify-between w-3/4">
                      <div class="bg-blue-50 px-2 py-1 rounded font-mono text-xs border border-blue-100">[38, 27, 43, 3]</div>
                      <div class="bg-blue-50 px-2 py-1 rounded font-mono text-xs border border-blue-100">[9, 82, 10]</div>
                   </div>

                   <!-- Nivel 2 -->
                   <div class="flex justify-between w-full px-4 relative">
                      <div class="flex gap-4">
                         <div class="bg-white px-2 py-1 rounded font-mono text-[10px] border border-slate-200 shadow-sm">[38, 27]</div>
                         <div class="bg-white px-2 py-1 rounded font-mono text-[10px] border border-slate-200 shadow-sm">[43, 3]</div>
                      </div>
                      <div class="flex gap-4">
                         <div class="bg-white px-2 py-1 rounded font-mono text-[10px] border border-slate-200 shadow-sm">[9, 82]</div>
                         <div class="bg-white px-2 py-1 rounded font-mono text-[10px] border border-slate-200 shadow-sm">[10]</div>
                      </div>
                   </div>

                   <!-- Nivel 3 (Atomico) -->
                   <div class="flex justify-between w-full gap-2 px-2">
                      <span class="bg-yellow-100 px-1 rounded border border-yellow-300 text-[10px] font-bold">38</span>
                      <span class="bg-yellow-100 px-1 rounded border border-yellow-300 text-[10px] font-bold">27</span>
                      <span class="bg-yellow-100 px-1 rounded border border-yellow-300 text-[10px] font-bold">43</span>
                      <span class="bg-yellow-100 px-1 rounded border border-yellow-300 text-[10px] font-bold">3</span>
                      <div class="w-4"></div>
                      <span class="bg-yellow-100 px-1 rounded border border-yellow-300 text-[10px] font-bold">9</span>
                      <span class="bg-yellow-100 px-1 rounded border border-yellow-300 text-[10px] font-bold">82</span>
                      <span class="bg-yellow-100 px-1 rounded border border-yellow-300 text-[10px] font-bold">10</span>
                   </div>
                </div>

                <div class="w-full border-t border-dashed border-slate-300 my-2 relative">
                   <span class="absolute top-[-10px] left-1/2 -translate-x-1/2 bg-white px-2 text-[10px] text-slate-400 font-bold">Fase de Mezcla (Sort)</span>
                </div>

                <!-- Fase de Mezcla -->
                <div class="flex flex-col items-center gap-4 w-full">
                   <!-- Mezcla 1 -->
                   <div class="flex justify-between w-full px-4 text-green-800 font-bold">
                      <div class="flex gap-4">
                         <div class="bg-green-50 px-2 py-1 rounded font-mono text-[10px] border border-green-200">[27, 38]</div>
                         <div class="bg-green-50 px-2 py-1 rounded font-mono text-[10px] border border-green-200">[3, 43]</div>
                      </div>
                      <div class="flex gap-4">
                         <div class="bg-green-50 px-2 py-1 rounded font-mono text-[10px] border border-green-200">[9, 82]</div>
                         <div class="bg-green-50 px-2 py-1 rounded font-mono text-[10px] border border-green-200">[10]</div>
                      </div>
                   </div>

                   <!-- Mezcla 2 -->
                   <div class="flex justify-between w-3/4 text-green-800 font-bold">
                      <div class="bg-green-100 px-2 py-1 rounded font-mono text-xs border border-green-300">[3, 27, 38, 43]</div>
                      <div class="bg-green-100 px-2 py-1 rounded font-mono text-xs border border-green-300">[9, 10, 82]</div>
                   </div>

                   <!-- Final -->
                   <div class="bg-green-600 text-white px-4 py-2 rounded font-mono text-sm font-bold shadow-lg border border-green-700 transform scale-110">
                     [3, 9, 10, 27, 38, 43, 82]
                   </div>
                </div>

             </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn4-3',
      title: '3. Análisis de Complejidad',
      contentHtml: `
        <div class="space-y-8">
           <div class="bg-white border-l-4 border-blue-600 p-6 rounded shadow-sm">
             <h3 class="text-xl font-bold text-blue-900 mb-4">Relación de Recurrencia</h3>
             <p class="text-gray-700 mb-4 text-sm">
               Para calcular el tiempo que toma el algoritmo <span class="font-mono font-bold text-blue-800">T(n)</span>, sumamos el tiempo de sus partes. Asumiendo que el tiempo base es constante:
             </p>
             
             <div class="flex justify-center mb-6">
                <div class="bg-slate-900 text-white px-6 py-3 rounded-lg font-mono text-lg shadow-lg">
                  T(n) = <span class="text-yellow-400">2T(n/2)</span> + <span class="text-green-400">n</span>
                </div>
             </div>

             <div class="grid grid-cols-2 gap-4 text-sm">
               <div class="bg-yellow-50 p-3 rounded border border-yellow-200">
                 <strong class="text-yellow-800 block mb-1">2T(n/2)</strong>
                 <p class="text-slate-600">El algoritmo se llama a sí mismo 2 veces, cada vez con la mitad de los datos (Izquierda y Derecha).</p>
               </div>
               <div class="bg-green-50 p-3 rounded border border-green-200">
                 <strong class="text-green-800 block mb-1">n</strong>
                 <p class="text-slate-600">El tiempo que toma la función <code>merge</code> en combinar los datos es lineal (recorre los n elementos).</p>
               </div>
             </div>
           </div>

           <div class="grid md:grid-cols-2 gap-8">
             <div class="bg-slate-50 p-4 rounded border border-slate-200">
               <h4 class="font-bold text-slate-800 mb-2 border-b pb-1">Resultado (Teorema Maestro)</h4>
               <div class="text-3xl font-mono font-bold text-green-600 mb-2">θ(n log n)</div>
               <p class="text-xs text-gray-600">
                 Aplicando el Caso 2 del Teorema Maestro.
                 <br>El árbol tiene una altura de <strong>log n</strong> y en cada nivel se hace un trabajo de <strong>n</strong>.
               </p>
             </div>
             <div class="bg-slate-50 p-4 rounded border border-slate-200">
               <h4 class="font-bold text-slate-800 mb-2 border-b pb-1">Espacio (Space)</h4>
               <div class="text-3xl font-mono font-bold text-orange-600 mb-2">O(n)</div>
               <p class="text-xs text-gray-600">
                 Requiere memoria adicional para los arreglos temporales durante la mezcla. No es "in-place".
               </p>
             </div>
           </div>
        </div>
      `
    },
    {
      id: 'pnn4-4',
      title: '4. Implementación (Código)',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-gray-600 mb-2">A continuación, la implementación estándar en <strong>Python</strong>. Observe las dos funciones principales: la recursiva y la de mezcla.</p>
          
          <div class="bg-slate-900 text-slate-300 p-6 rounded-xl font-mono text-xs overflow-x-auto shadow-lg border border-slate-700">
<pre>
<span class="text-purple-400">def</span> <span class="text-blue-400">merge_sort</span>(lista):
    <span class="text-gray-500"># 1. Caso Base: Si la lista tiene 0 o 1 elemento, ya está ordenada</span>
    <span class="text-purple-400">if</span> <span class="text-blue-400">len</span>(lista) <= 1:
        <span class="text-purple-400">return</span> lista
    
    <span class="text-gray-500"># 2. Dividir</span>
    medio = <span class="text-blue-400">len</span>(lista) // 2
    izquierda = merge_sort(lista[:medio])
    derecha = merge_sort(lista[medio:])
    
    <span class="text-gray-500"># 3. Combinar (Llamada a función auxiliar)</span>
    <span class="text-purple-400">return</span> mezclar(izquierda, derecha)

<span class="text-purple-400">def</span> <span class="text-blue-400">mezclar</span>(lista_izq, lista_der):
    resultado = []
    i = 0
    j = 0
    
    <span class="text-gray-500"># Comparar elementos de ambas sublistas</span>
    <span class="text-purple-400">while</span> i < <span class="text-blue-400">len</span>(lista_izq) <span class="text-purple-400">and</span> j < <span class="text-blue-400">len</span>(lista_der):
        <span class="text-purple-400">if</span> lista_izq[i] < lista_der[j]:
            resultado.append(lista_izq[i])
            i += 1
        <span class="text-purple-400">else</span>:
            resultado.append(lista_der[j])
            j += 1
            
    <span class="text-gray-500"># Agregar elementos restantes (si quedan)</span>
    resultado.extend(lista_izq[i:])
    resultado.extend(lista_der[j:])
    <span class="text-purple-400">return</span> resultado

<span class="text-gray-500"># --- Prueba ---</span>
lista = [38, 27, 43, 3, 9, 82, 10]
print(<span class="text-green-400">f"Original: {lista}"</span>)
print(<span class="text-green-400">f"Ordenada: {merge_sort(lista)}"</span>)
</pre>
          </div>
        </div>
      `
    },
    {
      id: 'pnn4-5',
      title: '5. Ejemplos y Aplicaciones',
      contentHtml: `
        <div class="space-y-10">
          
          <!-- Analogía Visual -->
          <div class="bg-white p-6 border rounded-xl shadow-sm">
             <h3 class="font-bold text-indigo-800 mb-6 flex items-center gap-2 border-b pb-2">
                <span class="text-2xl">🃏</span> Analogía Visual: Mazo de Cartas
             </h3>
             
             <div class="flex flex-col items-center gap-8">
                <!-- Step A -->
                <div class="flex flex-col items-center">
                   <span class="text-xs text-slate-400 uppercase font-bold mb-2">1. Dividir el Mazo</span>
                   <div class="flex gap-8">
                      <div class="flex -space-x-6">
                         <div class="w-12 h-16 bg-white border-2 border-slate-300 rounded-lg shadow flex items-center justify-center font-bold text-slate-800">8</div>
                         <div class="w-12 h-16 bg-white border-2 border-slate-300 rounded-lg shadow flex items-center justify-center font-bold text-slate-800 z-10">3</div>
                      </div>
                      <div class="text-slate-300 text-2xl">/</div>
                      <div class="flex -space-x-6">
                         <div class="w-12 h-16 bg-white border-2 border-slate-300 rounded-lg shadow flex items-center justify-center font-bold text-slate-800">5</div>
                         <div class="w-12 h-16 bg-white border-2 border-slate-300 rounded-lg shadow flex items-center justify-center font-bold text-slate-800 z-10">1</div>
                      </div>
                   </div>
                </div>

                <!-- Step B -->
                <div class="flex flex-col items-center w-full">
                   <span class="text-xs text-slate-400 uppercase font-bold mb-2">2. Mezclar Ordenadamente (Merge)</span>
                   <div class="bg-green-50 w-full p-4 rounded-lg border border-green-100 flex justify-center gap-2">
                      <!-- Result Cards -->
                      <div class="w-12 h-16 bg-white border-2 border-green-500 rounded-lg shadow-md flex items-center justify-center font-bold text-green-700">1</div>
                      <div class="w-12 h-16 bg-white border-2 border-green-500 rounded-lg shadow-md flex items-center justify-center font-bold text-green-700">3</div>
                      <div class="w-12 h-16 bg-white border-2 border-green-500 rounded-lg shadow-md flex items-center justify-center font-bold text-green-700">5</div>
                      <div class="w-12 h-16 bg-white border-2 border-green-500 rounded-lg shadow-md flex items-center justify-center font-bold text-green-700">8</div>
                   </div>
                </div>
             </div>
          </div>

          <!-- Aplicaciones Reales -->
          <div class="bg-slate-50 p-6 rounded-xl border border-slate-200">
             <h3 class="font-bold text-slate-800 mb-4 border-b pb-2 flex items-center gap-2">
               <span class="text-2xl">🌍</span> Casos de Uso en el Mundo Real
             </h3>
             
             <div class="grid md:grid-cols-2 gap-4">
                 <div class="bg-white p-4 rounded border hover:shadow-md transition-all">
                   <strong class="block text-slate-900 mb-1">🎵 Listas de Reproducción (MP3)</strong>
                   <p class="text-xs text-gray-600">Cuando ordenas canciones por "Artista" y luego por "Álbum", Merge Sort mantiene el orden previo (Estabilidad), algo que QuickSort no garantiza.</p>
                 </div>

                 <div class="bg-white p-4 rounded border hover:shadow-md transition-all">
                   <strong class="block text-slate-900 mb-1">🛒 E-Commerce</strong>
                   <p class="text-xs text-gray-600">Mostrar miles de productos ordenados por "Precio: Menor a Mayor" requiere un algoritmo predecible y rápido como este.</p>
                 </div>

                 <div class="bg-white p-4 rounded border hover:shadow-md transition-all">
                   <strong class="block text-slate-900 mb-1">💾 Bases de Datos (External Sorting)</strong>
                   <p class="text-xs text-gray-600">Para ordenar Terabytes de datos que no caben en la RAM. Merge Sort puede mezclar bloques leídos desde el disco duro eficientemente.</p>
                 </div>
                 
                 <div class="bg-white p-4 rounded border hover:shadow-md transition-all">
                   <strong class="block text-slate-900 mb-1">🔍 Google PageRank</strong>
                   <p class="text-xs text-gray-600">Los motores de búsqueda lo utilizan para ordenar los resultados por relevancia de forma masiva.</p>
                 </div>
             </div>
          </div>

        </div>
      `
    },
    {
      id: 'pnn4-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="text-6xl font-bold text-slate-300 mb-6 select-none">?</div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Sobre Merge Sort</h3>
          <p class="text-center text-gray-600 max-w-md">
            Es una pieza fundamental de la ingeniería de software. ¿Dudas sobre la recursión o la mezcla?
          </p>
        </div>
      `
    },
    {
      id: 'pnn4-end-thanks',
      title: 'Gracias por su atención',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">Fin de la Clase</h2>
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-indigo-500 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "Organizar es lo que haces antes de hacer algo, para que cuando lo hagas, no esté todo hecho un lío."
            </p>
            <footer class="flex items-center justify-center gap-2">
              <div class="h-px w-8 bg-slate-300"></div>
              <cite class="not-italic font-bold text-slate-900">A.A. Milne</cite>
            </footer>
          </blockquote>
        </div>
      `
    }
  ]
};
