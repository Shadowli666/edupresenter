import { Module } from '../types';

export const PNN_MODULE_4: Module = {
  id: 'pnn-mod-4',
  title: '4. Merge Sort: El Poder de Dividir y Conquistar',
  description: 'Algoritmo de ordenamiento eficiente, análisis de complejidad y aplicaciones.',
  evaluation: '10% - Ejecución de Algoritmos',
  slides: [
    {
      id: 'pnn4-1',
      title: 'Merge Sort: Fundamentos del Algoritmo',
      notes: 'Introducción al Merge Sort como un algoritmo Divide y Conquista.',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg shadow-sm">
            <h3 class="text-xl font-bold text-amber-900 mb-2">Definición</h3>
            <p class="text-amber-800 text-lg">
              Merge Sort es un algoritmo de ordenamiento que sigue el paradigma <strong>Divide y Conquista</strong>. Funciona dividiendo repetidamente una lista en sublistas hasta que cada una tiene un solo elemento, y luego las fusiona (combina) de forma ordenada hasta obtener la lista completamente ordenada.
            </p>
          </div>

          <div class="bg-white p-6 border rounded-xl shadow-sm">
             <h4 class="font-bold text-slate-800 mb-4 text-lg border-b pb-2">Recordando Divide y Conquista</h4>
             <div class="grid md:grid-cols-3 gap-6 text-center">
                <div class="p-4 bg-blue-50 rounded-lg">
                   <div class="text-3xl mb-2">🔪</div>
                   <strong class="block text-blue-900 mb-2">1. Dividir</strong>
                   <p class="text-sm text-blue-800">Partir el arreglo en dos mitades aproximadamente iguales.</p>
                </div>
                <div class="p-4 bg-purple-50 rounded-lg">
                   <div class="text-3xl mb-2">⚔️</div>
                   <strong class="block text-purple-900 mb-2">2. Conquistar</strong>
                   <p class="text-sm text-purple-800">Ordenar recursivamente cada una de las dos mitades.</p>
                </div>
                <div class="p-4 bg-green-50 rounded-lg">
                   <div class="text-3xl mb-2">🔗</div>
                   <strong class="block text-green-900 mb-2">3. Combinar (Merge)</strong>
                   <p class="text-sm text-green-800">Mezclar las dos mitades ordenadas para producir un arreglo final ordenado.</p>
                </div>
             </div>
          </div>
          <div class="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
             <h5 class="font-bold text-indigo-900 text-sm">Analogía: Post-Orden</h5>
             <p class="text-xs text-indigo-800 mt-1">
               El flujo de ejecución de Merge Sort se parece a un recorrido <strong>Post-Orden</strong> en un árbol binario. Primero se resuelven los subproblemas izquierdo y derecho (conquistar), y luego se combinan (raíz).
             </p>
          </div>
        </div>
      `
    },
    {
      id: 'pnn4-2',
      title: 'Merge Sort: Algoritmo Principal',
      notes: 'Pseudocódigo del algoritmo mergeSort recursivo.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">La Función <code>mergeSort</code></h3>
        <p class="text-gray-600 mb-4">Esta función recursiva es la que implementa la lógica de Divide y Conquista.</p>
        <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
           <h5 class="text-gray-400 mb-2">// Pseudocódigo</h5>
           <pre class="font-mono text-sm max-w-full overflow-x-auto"><code>
FUNCIÓN mergeSort(arr, bajo, alto):
  SI bajo < alto:             // Caso Base: si hay más de un elemento
    medio = (bajo + alto) / 2
    mergeSort(arr, bajo, medio)     // Dividir y Conquistar (parte izquierda)
    mergeSort(arr, medio + 1, alto) // Dividir y Conquistar (parte derecha)
    merge(arr, bajo, medio, alto)   // Combinar (mezclar las dos mitades)
            </code></pre>
        </div>
        <p class="text-sm text-gray-700 mt-4">El verdadero "trabajo" del ordenamiento ocurre en la función <code>merge</code>.</p>
      `
    },
    {
      id: 'pnn4-3',
      title: 'Función <code>merge</code>: El Corazón del Algoritmo',
      notes: 'Detallar la función merge con pseudocódigo y ejemplo.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Uniendo Sublistas Ordenadas</h3>
        <p class="text-gray-600 mb-4">La función <code>merge</code> toma dos sub-arreglos que ya están ordenados y los combina en un único arreglo ordenado.</p>
        <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 my-4">
          <h5 class="font-bold text-blue-900">Pasos Clave de <code>merge</code></h5>
          <ol class="list-decimal pl-5 text-sm text-blue-800 mt-2">
            <li>Se crean dos arreglos temporales para las mitades.</li>
            <li>Se comparan los elementos de las dos mitades, colocando el menor en el arreglo original.</li>
            <li>Se copian los elementos restantes de cualquiera de las mitades al arreglo original.</li>
          </ol>
        </div>
        <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
          <h5 class="text-gray-400 mb-2">// Pseudocódigo simplificado de <code>merge</code></h5>
           <pre class="font-mono text-sm max-w-full overflow-x-auto"><code>
FUNCIÓN merge(arr, bajo, medio, alto):
  n1 = medio - bajo + 1
  n2 = alto - medio
  
  // Crear arreglos temporales L[] y R[]
  L[] = arr[bajo...medio]
  R[] = arr[medio+1...alto]

  // Mezclar L[] y R[] de vuelta en arr[]
  i = 0, j = 0, k = bajo
  MIENTRAS i < n1 Y j < n2:
    SI L[i] <= R[j]:
      arr[k] = L[i]; i++
    SINO:
      arr[k] = R[j]; j++
    k++
  // Copiar elementos restantes de L[] o R[]
  MIENTRAS i < n1: arr[k] = L[i]; i++; k++
  MIENTRAS j < n2: arr[k] = R[j]; j++; k++
            </code></pre>
        </div>
      `
    },
    {
      id: 'pnn4-4-trace',
      title: 'Merge Sort: Traza Visual de Ejecución',
      notes: 'Demostración paso a paso del algoritmo.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">¿Cómo se Ordena un Arreglo?</h3>
        <p class="text-gray-600 mb-4">Sigamos el camino de Merge Sort con un ejemplo: <code>[38, 27, 43, 3, 9, 82, 10]</code>.</p>
        <div class="flex flex-col items-center w-full overflow-x-auto pb-4">
          <div class="relative flex flex-col items-center gap-6 min-w-[700px] py-4">
                
                <!-- Nivel 0 -->
                <div class="bg-slate-200 px-4 py-2 rounded font-mono text-sm font-bold shadow-sm border border-slate-300 animate-fade-in">
                  [38, 27, 43, 3, 9, 82, 10]
                </div>
                <div class="h-4 w-px bg-slate-300"></div>

                <!-- Nivel 1 (División) -->
                <div class="flex justify-around w-full">
                   <div class="bg-blue-50 px-3 py-2 rounded font-mono text-sm border border-blue-100 animate-slide-in-left">[38, 27, 43, 3]</div>
                   <div class="bg-blue-50 px-3 py-2 rounded font-mono text-sm border border-blue-100 animate-slide-in-right">[9, 82, 10]</div>
                </div>

                <!-- Nivel 2 (División) -->
                <div class="flex justify-around w-full">
                    <div class="flex justify-around w-1/2">
                       <div class="bg-white px-2 py-1 rounded font-mono text-xs border border-slate-200 shadow-sm animate-fade-in">[38, 27]</div>
                       <div class="bg-white px-2 py-1 rounded font-mono text-xs border border-slate-200 shadow-sm animate-fade-in">[43, 3]</div>
                    </div>
                    <div class="flex justify-around w-1/2">
                       <div class="bg-white px-2 py-1 rounded font-mono text-xs border border-slate-200 shadow-sm animate-fade-in">[9, 82]</div>
                       <div class="bg-white px-2 py-1 rounded font-mono text-xs border border-slate-200 shadow-sm animate-fade-in">[10]</div>
                    </div>
                </div>

                <!-- Nivel 3 (División - Atomic) -->
                <div class="flex justify-around w-full text-xs font-bold">
                    <span class="bg-yellow-100 px-1 rounded border border-yellow-300 animate-pop-in">38</span>
                    <span class="bg-yellow-100 px-1 rounded border border-yellow-300 animate-pop-in">27</span>
                    <span class="bg-yellow-100 px-1 rounded border border-yellow-300 animate-pop-in">43</span>
                    <span class="bg-yellow-100 px-1 rounded border border-yellow-300 animate-pop-in">3</span>
                    <div class="w-4"></div>
                    <span class="bg-yellow-100 px-1 rounded border border-yellow-300 animate-pop-in">9</span>
                    <span class="bg-yellow-100 px-1 rounded border border-yellow-300 animate-pop-in">82</span>
                    <span class="bg-yellow-100 px-1 rounded border border-yellow-300 animate-pop-in">10</span>
                </div>

                <div class="w-full border-t-2 border-dashed border-slate-400 my-4 relative">
                   <span class="absolute top-[-15px] left-1/2 -translate-x-1/2 bg-white px-3 text-sm text-slate-600 font-bold">Fase de Combinación (Merge)</span>
                </div>

                <!-- Nivel 3 (Combinación) -->
                <div class="flex justify-around w-full text-xs font-bold">
                    <div class="bg-green-50 px-2 py-1 rounded font-mono border border-green-200 animate-pop-in">[27, 38]</div>
                    <div class="bg-green-50 px-2 py-1 rounded font-mono border border-green-200 animate-pop-in">[3, 43]</div>
                    <div class="w-4"></div>
                    <div class="bg-green-50 px-2 py-1 rounded font-mono border border-green-200 animate-pop-in">[9, 82]</div>
                    <div class="bg-green-50 px-2 py-1 rounded font-mono border border-green-200 animate-pop-in">[10]</div>
                </div>

                <!-- Nivel 2 (Combinación) -->
                <div class="flex justify-around w-full">
                    <div class="bg-green-100 px-3 py-2 rounded font-mono text-sm border border-green-300 animate-slide-in-left">[3, 27, 38, 43]</div>
                    <div class="bg-green-100 px-3 py-2 rounded font-mono text-sm border border-green-300 animate-slide-in-right">[9, 10, 82]</div>
                </div>

                <!-- Nivel 1 (Combinación - Final) -->
                <div class="bg-green-600 text-white px-5 py-3 rounded-lg font-mono text-base font-bold shadow-lg border border-green-700 animate-pop-in">
                  [3, 9, 10, 27, 38, 43, 82]
                </div>

             </div>
          </div>
          <style>
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            @keyframes slideInLeft { from { transform: translateX(-20px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
            @keyframes slideInRight { from { transform: translateX(20px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
            @keyframes popIn { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
            .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
            .animate-slide-in-left { animation: slideInLeft 0.5s ease-out forwards; }
            .animate-slide-in-right { animation: slideInRight 0.5s ease-out forwards; }
            .animate-pop-in { animation: popIn 0.3s ease-out forwards; }
          </style>
        </div>
      `
    },
    {
      id: 'pnn4-5-merge-code',
      title: 'Implementación: La Función <code>merge</code> (C++/Python)',
      notes: 'Código de la función merge para C++ y Python.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Cómo Unir Dos Arreglos Ordenados</h3>
        <p class="text-gray-600 mb-4">Esta es la función auxiliar clave que se encarga de combinar las sublistas ordenadas.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <h5 class="text-gray-400 mb-2">// C++</h5>
            <pre class="font-mono text-sm max-w-full overflow-x-auto"><code class="language-cpp">
void merge(std::vector<int>& arr, int low, int mid, int high) {
    int n1 = mid - low + 1;
    int n2 = high - mid;

    std::vector<int> L(n1), R(n2);
    for (int i = 0; i < n1; ++i) L[i] = arr[low + i];
    for (int j = 0; j < n2; ++j) R[j] = arr[mid + 1 + j];

    int i = 0, j = 0, k = low;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k++] = L[i++];
        } else {
            arr[k++] = R[j++];
        }
    }
    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];
}
            </code></pre>
          </div>
          <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <h5 class="text-gray-400 mb-2"># Python</h5>
            <pre class="font-mono text-sm max-w-full overflow-x-auto"><code class="language-python">
def merge(izquierda, derecha):
    resultado = []
    i = j = 0
    while i < len(izquierda) and j < len(derecha):
        if izquierda[i] < derecha[j]:
            resultado.append(izquierda[i])
            i += 1
        else:
            resultado.append(derecha[j])
            j += 1
    resultado.extend(izquierda[i:])
    resultado.extend(derecha[j:])
    return resultado
            </code></pre>
          </div>
        </div>
      `
    },
    {
      id: 'pnn4-6-mergesort-full-code',
      title: 'Implementación: Merge Sort Completo (C++/Python)',
      notes: 'Código completo del Merge Sort para C++ y Python.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Uniendo Todo: El Algoritmo Completo</h3>
        <p class="text-gray-600 mb-4">Aquí se muestra el algoritmo Merge Sort recursivo junto con su función <code>merge</code> auxiliar.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <h5 class="text-gray-400 mb-2">// C++</h5>
            <pre class="font-mono text-sm max-w-full overflow-x-auto"><code class="language-cpp">
#include <iostream>
#include <vector>
#include <algorithm> // For std::min, std::max if needed

// (La función merge de la slide anterior iría aquí)

void mergeSort(std::vector<int>& arr, int low, int high) {
    if (low < high) {
        int mid = low + (high - low) / 2; // Prevenir overflow
        mergeSort(arr, low, mid);
        mergeSort(arr, mid + 1, high);
        merge(arr, low, mid, high);
    }
}

// int main() {
//    std::vector<int> arr = {38, 27, 43, 3, 9, 82, 10};
//    mergeSort(arr, 0, arr.size() - 1);
//    // Imprimir arr
// }
            </code></pre>
          </div>
          <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <h5 class="text-gray-400 mb-2"># Python</h5>
            <pre class="font-mono text-sm max-w-full overflow-x-auto"><code class="language-python">
# (La función merge de la slide anterior iría aquí)

def merge_sort(lista):
    if len(lista) <= 1:
        return lista
    
    medio = len(lista) // 2
    izquierda = merge_sort(lista[:medio])
    derecha = merge_sort(lista[medio:])
    
    return merge(izquierda, derecha)

# lista = [38, 27, 43, 3, 9, 82, 10]
# print(merge_sort(lista))
            </code></pre>
          </div>
        </div>
      `
    },
    {
      id: 'pnn4-7-complexity',
      title: 'Análisis de Complejidad: Merge Sort',
      notes: 'Análisis de tiempo y espacio, usando la relación de recurrencia.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Eficiencia Garantizada: O(N log N)</h3>
        <div class="bg-blue-50 border-l-4 border-blue-600 p-4 rounded my-4">
            <h4 class="font-bold text-blue-900 mb-2">Relación de Recurrencia</h4>
            <p class="text-sm text-blue-800">El tiempo de ejecución de Merge Sort se describe mediante la relación:</p>
            <div class="text-center bg-slate-900 text-white px-4 py-2 rounded-lg font-mono text-lg shadow-lg mt-3">
              T(n) = <span class="text-yellow-400">2T(n/2)</span> + <span class="text-green-400">O(n)</span>
            </div>
            <p class="text-xs text-blue-800 mt-2">Donde <code>2T(n/2)</code> es por las dos llamadas recursivas y <code>O(n)</code> es por el tiempo de la función <code>merge</code>.</p>
        </div>
        <div class="grid md:grid-cols-2 gap-6 mt-4">
            <div class="bg-slate-50 p-4 rounded border">
                <h5 class="font-bold text-slate-800">Complejidad Temporal</h5>
                <p class="text-3xl font-mono font-bold text-green-600">θ(N log N)</p>
                <p class="text-xs text-gray-600">En el mejor, promedio y peor caso. Muy consistente.</p>
            </div>
            <div class="bg-slate-50 p-4 rounded border">
                <h5 class="font-bold text-slate-800">Complejidad Espacial</h5>
                <p class="text-3xl font-mono font-bold text-orange-600">O(N)</p>
                <p class="text-xs text-gray-600">Debido a los arreglos temporales que usa la función <code>merge</code>.</p>
            </div>
        </div>
      `
    },
    {
      id: 'pnn4-8-external-sort',
      title: 'Merge Sort 2: Ordenamiento Externo',
      notes: 'Explicar la aplicación de Merge Sort para datos grandes (Sortmerge 2).',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Manejando Datos Masivos Fuera de la RAM</h3>
        <p class="text-gray-600 mb-4">El Merge Sort es ideal para el <strong>Ordenamiento Externo</strong> (External Sorting), que es cuando los datos a ordenar son tan grandes que no caben en la memoria RAM y deben residir en almacenamiento secundario (como un disco duro).</p>
        <div class="bg-green-50 border-l-4 border-green-500 p-4 my-4">
          <h5 class="font-bold text-green-900">¿Cómo Funciona el Ordenamiento Externo?</h5>
          <ol class="list-decimal pl-5 text-sm text-green-800 mt-2">
            <li><strong>Dividir en "runs":</strong> La lista se divide en bloques que sí caben en memoria, se ordenan internamente (con Merge Sort o Quick Sort), y se escriben en disco.</li>
            <li><strong>Fusionar "runs":</strong> Se leen varios bloques ordenados del disco y se fusionan (usando la lógica de <code>merge</code>) en un bloque ordenado más grande, que se vuelve a escribir en disco. Esto se repite hasta que todos los bloques se hayan fusionado en uno solo.</li>
          </ol>
        </div>
        <p class="text-sm text-gray-700 mt-4">Esta es la "Merge Sort 2" mencionada en el temario, un proceso clave en bases de datos y procesamiento de Big Data.</p>
      `
    },
    {
      id: 'pnn4-9-pros-cons',
      title: 'Ventajas y Desventajas de Merge Sort',
      notes: 'Resumir los pros y contras del algoritmo.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">¿Cuándo Elegir Merge Sort?</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
             <h5 class="font-bold text-green-900">Ventajas</h5>
             <ul class="list-disc pl-5 text-sm text-green-800">
               <li><strong>Estable:</strong> Mantiene el orden relativo de elementos iguales.</li>
               <li><strong>Rendimiento Consistente:</strong> O(N log N) en todos los casos (mejor, promedio, peor).</li>
               <li>Ideal para <strong>ordenamiento externo</strong>.</li>
               <li>Fácil de paralelizar.</li>
             </ul>
          </div>
          <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
             <h5 class="font-bold text-red-900">Desventajas</h5>
             <ul class="list-disc pl-5 text-sm text-red-800">
               <li>No es "in-place": Requiere <strong>O(N) de espacio adicional</strong> para los arreglos temporales.</li>
               <li>Puede ser más lento que Quick Sort en el caso promedio debido a la sobrecarga de copiar a arreglos temporales.</li>
             </ul>
          </div>
        </div>
      `
    },
    {
      id: 'pnn4-10-practice',
      title: 'Práctica: Implementa Merge Sort',
      notes: 'Ejercicio de codificación para implementar Merge Sort.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Ejercicio: Ordena una Lista de Tareas</h3>
        <p class="text-gray-600 mb-4">Implementa el algoritmo <strong>Merge Sort</strong> en C++ o Python para ordenar una lista de números enteros. Asegúrate de que tu implementación incluya tanto la función recursiva <code>mergeSort</code> como la función auxiliar <code>merge</code>.</p>
        <div class="bg-white border rounded-lg p-6">
          <h4 class="font-bold text-slate-800 mb-2">Instrucciones</h4>
          <ul class="text-sm list-disc pl-5 text-gray-700">
              <li>Crea una lista de al menos 10 números aleatorios.</li>
              <li>Imprime la lista original.</li>
              <li>Llama a tu función <code>mergeSort</code> para ordenar la lista.</li>
              <li>Imprime la lista ordenada.</li>
          </ul>
        </div>
      `
    },
    {
      id: 'pnn4-11-resources',
      title: 'Herramientas Visuales y Recursos',
      notes: 'Proporcionar a los estudiantes herramientas externas para reforzar su aprendizaje.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Visualizando el Merge Sort</h3>
        <p class="text-gray-600 mb-4">Explora cómo Merge Sort divide y combina el arreglo paso a paso con simuladores interactivos:</p>
        <div class="bg-white border rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
          <h4 class="font-bold text-blue-700 text-lg">VisuAlgo - Merge Sort</h4>
          <p class="text-sm text-gray-600 my-2">Observa las fases de división y fusión de este algoritmo de ordenamiento.</p>
          <a href="https://visualgo.net/es/sorting" target="_blank" class="text-blue-600 font-bold hover:underline">Ir a VisuAlgo (Sorting) &rarr;</a>
        </div>
      `
    },
    {
      id: 'pnn4-end-questions',
      title: '¿Preguntas?',
      notes: 'Espacio para dudas.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full">
          <h3 class="text-2xl font-bold text-slate-900 mb-4">¿Dudas sobre Divide, Conquista o Merge?</h3>
        </div>
      `
    },
    {
      id: 'pnn4-end-thanks',
      title: 'Gracias y Próxima Clase',
      notes: 'Cierre y adelanto.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center">
          <h2 class="text-3xl font-bold text-slate-900 mb-4">Fin del Módulo 4</h2>
          <p class="text-gray-600 text-lg">Hemos cubierto Merge Sort. En la próxima clase, veremos otro algoritmo fundamental de Divide y Conquista: <b>Quick Sort</b>.</p>
        </div>
      `
    }
  ]
};