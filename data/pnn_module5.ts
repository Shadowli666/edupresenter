import { Module } from '../types';

export const PNN_MODULE_5: Module = {
  id: 'pnn-mod-5',
  title: '5. Quick Sort: Ordenamiento Rápido por Partición',
  description: 'Algoritmo Quicksort, análisis de eficiencia y estrategias de pivote.',
  evaluation: '20% - Prueba Escrita',
  slides: [
    {
      id: 'pnn5-1',
      title: 'Quick Sort: La Lógica del Algoritmo',
      notes: 'Introducción a Quicksort como algoritmo Divide y Conquista, enfatizando la partición.',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700 text-lg">
            <strong>Quicksort</strong> es uno de los algoritmos de ordenamiento más rápidos y utilizados en la práctica. También se basa en el paradigma <strong>Divide y Conquista</strong>. A diferencia de Merge Sort, Quicksort no utiliza memoria auxiliar extra para mezclar, sino que ordena "en el lugar" (in-place).
          </p>

          <div class="bg-white border rounded-xl p-6 shadow-sm">
            <h4 class="font-bold text-purple-800 mb-4">La Clave: El Pivote y la Partición</h4>
            <p class="text-sm text-slate-600 mb-4">
              El algoritmo selecciona un elemento del arreglo, llamado <strong>Pivote</strong>. Luego, <strong>particiona</strong> el resto del arreglo de modo que todos los elementos <strong>menores</strong> que el pivote queden a su izquierda y todos los <strong>mayores</strong> a su derecha.
            </p>
            <ul class="list-disc list-inside text-sm text-slate-700 space-y-2 bg-purple-50 p-4 rounded">
              <li>Después de la partición, el pivote está en su posición final ordenada.</li>
              <li>El proceso se aplica recursivamente a los sub-arreglos a la izquierda y derecha del pivote.</li>
            </ul>
          </div>
          <div class="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
             <h5 class="font-bold text-indigo-900 text-sm">Analogía: Dividir un Grupo</h5>
             <p class="text-xs text-indigo-800 mt-1">
               Imagina que tienes un grupo de personas y eliges a una como "líder". Luego, pides a todos los que son "más bajos" que la líder que se pongan a su izquierda y a los "más altos" a su derecha. La líder está ahora en su lugar correcto, y los dos subgrupos se ordenan de la misma manera.
             </p>
          </div>
        </div>
      `
    },
    {
      id: 'pnn5-2',
      title: 'Algoritmo: La Función <code>partition</code> (Esquema de Lomuto)',
      notes: 'Explicar la función de partición de Quicksort, que es crucial.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Organizando el Arreglo Alrededor del Pivote</h3>
        <p class="text-gray-600 mb-4">La función <code>partition</code> es la que realiza el trabajo de reordenar el arreglo. Usaremos el esquema de Lomuto, donde el último elemento se elige como pivote.</p>
        <ol class="list-decimal pl-5 text-sm space-y-2">
          <li>Se elige un pivote (ej. el último elemento).</li>
          <li>Se recorre el arreglo: si un elemento es menor o igual al pivote, se mueve a la parte izquierda.</li>
          <li>Al finalizar, se intercambia el pivote con el primer elemento de la parte derecha, colocándolo en su posición final.</li>
          <li>Devuelve el índice del pivote.</li>
        </ol>
        <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto mt-4">
          <h5 class="text-gray-400 mb-2">// Pseudocódigo para Partición (Lomuto)</h5>
          <pre><code>
FUNCIÓN partition(arr, bajo, alto):
  pivote = arr[alto]  // Elegimos el último elemento como pivote
  i = bajo - 1      // Índice del elemento más pequeño

  PARA j DESDE bajo HASTA alto - 1:
    SI arr[j] <= pivote:
      i++
      intercambiar(arr[i], arr[j])
  
  intercambiar(arr[i + 1], arr[alto]) // Colocar el pivote en su posición final
  RETORNAR i + 1 // Devolver el índice del pivote
          </code></pre>
        </div>
      `
    },
    {
      id: 'pnn5-3-partition-code',
      title: 'Implementación: Función <code>partition</code> (C++/Python)',
      notes: 'Código de la función de partición en C++ y Python.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4"><code>partition</code> en C++ y Python</h3>
        <p class="text-gray-600 mb-4">Aquí la implementación de la función <code>partition</code> usando el esquema de Lomuto.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <h5 class="text-gray-400 mb-2">// C++</h5>
            <pre><code class="language-cpp">
int partition(std::vector<int>& arr, int low, int high) {
    int pivot = arr[high]; // Pivote
    int i = (low - 1);     // Índice del elemento más pequeño

    for (int j = low; j <= high - 1; j++) {
        if (arr[j] <= pivot) {
            i++;
            std::swap(arr[i], arr[j]);
        }
    }
    std::swap(arr[i + 1], arr[high]);
    return (i + 1);
}
            </code></pre>
          </div>
          <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <h5 class="text-gray-400 mb-2"># Python</h5>
            <pre><code class="language-python">
def partition(arr, low, high):
    pivot = arr[high] # Pivote
    i = (low - 1)     # Índice del elemento más pequeño

    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i] # Swap
    
    arr[i + 1], arr[high] = arr[high], arr[i + 1] # Colocar pivote
    return (i + 1)
            </code></pre>
          </div>
        </div>
      `
    },
    {
      id: 'pnn5-4-quicksort-algo',
      title: 'Algoritmo: Quick Sort Recursivo',
      notes: 'Pseudocódigo de la función principal de Quicksort.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">La Función Principal de Quicksort</h3>
        <p class="text-gray-600 mb-4">La función <code>quickSort</code> usa recursividad para ordenar los sub-arreglos generados por la partición.</p>
        <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
           <h5 class="text-gray-400 mb-2">// Pseudocódigo</h5>
           <pre><code>
FUNCIÓN quickSort(arr, bajo, alto):
  SI bajo < alto:          // Caso Base: si el sub-arreglo tiene 1 o 0 elementos, ya está ordenado
    indice_pivote = partition(arr, bajo, alto) // Particionar
    quickSort(arr, bajo, indice_pivote - 1)    // Ordenar recursivamente la mitad izquierda
    quickSort(arr, indice_pivote + 1, alto)    // Ordenar recursivamente la mitad derecha
            </code></pre>
        </div>
        <p class="text-sm text-gray-700 mt-4">La eficiencia del algoritmo depende en gran medida de dónde se coloque el pivote en cada partición.</p>
      `
    },
    {
      id: 'pnn5-5-quicksort-full-code',
      title: 'Implementación: Quick Sort Completo (C++/Python)',
      notes: 'Código completo de Quicksort, incluyendo la función partition.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Quicksort Completo en Acción</h3>
        <p class="text-gray-600 mb-4">Aquí se combinan la lógica de partición y la función recursiva para ordenar el arreglo.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <h5 class="text-gray-400 mb-2">// C++ (Requiere la función partition de antes)</h5>
            <pre><code class="language-cpp">
// (Función partition de la slide anterior aquí)

void quickSort(std::vector<int>& arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high); // pi es el índice del pivote
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

// int main() {
//    std::vector<int> arr = {10, 7, 8, 9, 1, 5};
//    quickSort(arr, 0, arr.size() - 1);
//    // Imprimir arr
// }
            </code></pre>
          </div>
          <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <h5 class="text-gray-400 mb-2"># Python (Requiere la función partition de antes)</h5>
            <pre><code class="language-python">
# (Función partition de la slide anterior aquí)

def quick_sort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high) # pi es el índice del pivote
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)

# arr = [10, 7, 8, 9, 1, 5]
# quick_sort(arr, 0, len(arr) - 1)
# print(arr)
            </code></pre>
          </div>
        </div>
      `
    },
    {
      id: 'pnn5-6-trace',
      title: 'Quick Sort: Traza Visual de Ejecución',
      notes: 'Demostración paso a paso del algoritmo, enfatizando la partición y las llamadas recursivas.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">¿Cómo Particionar y Conquistar?</h3>
        <p class="text-gray-600 mb-4">Sigamos el camino de Quicksort con un ejemplo. Usaremos el último elemento como pivote.</p>
        <div class="flex flex-col items-center w-full overflow-x-auto pb-4">
          <div class="relative flex flex-col items-center gap-4 min-w-[700px] py-4">
            
            <strong class="text-sm">Arreglo inicial: <span class="font-mono bg-blue-100 p-1 rounded">[10, 7, 8, 9, 1, 5]</span></strong>

            <!-- Paso 1 -->
            <div class="bg-white p-3 rounded-lg border shadow-sm w-full animate-fade-in">
              <p class="font-bold text-xs">Llamada: <span class="font-mono">quickSort([10, 7, 8, 9, 1, 5], 0, 5)</span></p>
              <p class="text-xs">Pivote: 5. Resultado de partición: <span class="font-mono">[1, 5, 10, 7, 8, 9]</span>. Pivote en índice 1.</p>
              <p class="text-xs text-green-600">Subproblemas: <span class="font-mono">[1]</span> y <span class="font-mono">[10, 7, 8, 9]</span></p>
            </div>

            <!-- Paso 2 -->
            <div class="bg-white p-3 rounded-lg border shadow-sm w-full animate-fade-in delay-200">
              <p class="font-bold text-xs">Llamada: <span class="font-mono">quickSort([10, 7, 8, 9], 2, 5)</span></p>
              <p class="text-xs">Pivote: 9. Resultado de partición: <span class="font-mono">[7, 8, 9, 10]</span>. Pivote en índice 4.</p>
              <p class="text-xs text-green-600">Subproblemas: <span class="font-mono">[7, 8]</span> y <span class="font-mono">[ ]</span></p>
            </div>

            <!-- Paso 3 -->
            <div class="bg-white p-3 rounded-lg border shadow-sm w-full animate-fade-in delay-400">
              <p class="font-bold text-xs">Llamada: <span class="font-mono">quickSort([7, 8], 2, 3)</span></p>
              <p class="text-xs">Pivote: 8. Resultado de partición: <span class="font-mono">[7, 8]</span>. Pivote en índice 3.</p>
              <p class="text-xs text-green-600">Subproblemas: <span class="font-mono">[7]</span> y <span class="font-mono">[ ]</span></p>
            </div>

            <strong class="text-sm">Arreglo Final Ordenado: <span class="font-mono bg-green-100 p-1 rounded animate-pop-in">[1, 5, 7, 8, 9, 10]</span></strong>
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
            .delay-200 { animation-delay: 0.2s; }
            .delay-400 { animation-delay: 0.4s; }
          </style>
        </div>
      `
    },
    {
      id: 'pnn5-7-complexity',
      title: 'Análisis de Complejidad: Quick Sort',
      notes: 'Análisis detallado de la complejidad temporal y espacial en diferentes casos.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Eficiencia Variable: Depende del Pivote</h3>
        <div class="bg-blue-50 border-l-4 border-blue-600 p-4 rounded my-4">
            <h4 class="font-bold text-blue-900 mb-2">Relación de Recurrencia (Caso Promedio)</h4>
            <div class="text-center bg-slate-900 text-white px-4 py-2 rounded-lg font-mono text-lg shadow-lg mt-3">
              T(n) = <span class="text-yellow-400">2T(n/2)</span> + <span class="text-green-400">O(n)</span>
            </div>
            <p class="text-xs text-blue-800 mt-2">Similar a Merge Sort si la partición es balanceada (Divide el problema a la mitad).</p>
        </div>
        <div class="grid md:grid-cols-3 gap-6 mt-4">
            <div class="bg-slate-50 p-4 rounded border">
                <h5 class="font-bold text-slate-800">Mejor y Promedio</h5>
                <p class="text-3xl font-mono font-bold text-green-600">O(N log N)</p>
                <p class="text-xs text-gray-600">Cuando el pivote divide el arreglo de forma equilibrada.</p>
            </div>
            <div class="bg-slate-50 p-4 rounded border">
                <h5 class="font-bold text-slate-800">Peor Caso</h5>
                <p class="text-3xl font-mono font-bold text-red-600">O(N²)</p>
                <p class="text-xs text-gray-600">Cuando el pivote siempre es el elemento más pequeño o más grande. El arreglo queda casi sin dividir.</p>
            </div>
             <div class="bg-slate-50 p-4 rounded border">
                <h5 class="font-bold text-slate-800">Complejidad Espacial</h5>
                <p class="text-3xl font-mono font-bold text-orange-600">O(log N)</p>
                <p class="text-xs text-gray-600">Debido a la pila de llamadas recursivas (en el mejor y promedio caso).</p>
            </div>
        </div>
      `
    },
    {
      id: 'pnn5-8-pivot-strategy',
      title: 'Estrategias de Selección del Pivote',
      notes: 'Discutir cómo la elección del pivote impacta la eficiencia.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Evitando el Peor Caso: La Clave del Pivote</h3>
        <p class="text-gray-600 mb-4">La elección de un buen pivote es crucial para el rendimiento de Quicksort. Una mala elección puede llevar al peor caso O(N²).</p>
        <div class="space-y-4">
          <div class="bg-white p-4 border rounded-lg">
            <h5 class="font-bold text-blue-700">1. Primer o Último Elemento</h5>
            <p class="text-sm text-gray-600">Más fácil de implementar, pero muy vulnerable si el arreglo está ya ordenado o casi ordenado (lleva al peor caso).</p>
          </div>
          <div class="bg-white p-4 border rounded-lg">
            <h5 class="font-bold text-green-700">2. Pivote Aleatorio</h5>
            <p class="text-sm text-gray-600">Elegir un elemento al azar como pivote. Reduce la probabilidad del peor caso a ser muy baja.</p>
          </div>
          <div class="bg-white p-4 border rounded-lg">
            <h5 class="font-bold text-purple-700">3. Mediana de Tres</h5>
            <p class="text-sm text-gray-600">Elegir la mediana de los elementos en el inicio, medio y final del arreglo como pivote. Suele ser una excelente estrategia para asegurar un buen balance.</p>
          </div>
        </div>
      `
    },
    {
      id: 'pnn5-9-pros-cons',
      title: 'Ventajas y Desventajas de Quick Sort',
      notes: 'Resumen de los pros y contras.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">¿Cuándo Elegir Quick Sort?</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
             <h5 class="font-bold text-green-900">Ventajas</h5>
             <ul class="list-disc pl-5 text-sm text-green-800">
               <li><strong>Muy rápido en la práctica:</strong> A menudo más rápido que Merge Sort en el caso promedio.</li>
               <li><strong>"In-place":</strong> Requiere muy poco espacio adicional (solo la pila de llamadas recursivas).</li>
               <li>Bueno para arreglos muy grandes.</li>
             </ul>
          </div>
          <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
             <h5 class="font-bold text-red-900">Desventajas</h5>
             <ul class="list-disc pl-5 text-sm text-red-800">
               <li>Peor caso O(N²): Puede ser lento si el pivote se elige mal.</li>
               <li>No es un algoritmo de ordenamiento estable (el orden relativo de elementos iguales puede cambiar).</li>
             </ul>
          </div>
        </div>
      `
    },
    {
      id: 'pnn5-10-practice',
      title: 'Práctica: Implementa Quick Sort',
      notes: 'Ejercicio de codificación para implementar Quick Sort.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Ejercicio: Ordena un Arreglo de Precios</h3>
        <p class="text-gray-600 mb-4">Implementa el algoritmo <strong>Quick Sort</strong> en C++ o Python para ordenar una lista de números. Asegúrate de que tu implementación incluya la función <code>partition</code> y la función recursiva <code>quickSort</code>.</p>
        <div class="bg-white border rounded-lg p-6">
          <h4 class="font-bold text-slate-800 mb-2">Instrucciones</h4>
          <ul class="text-sm list-disc pl-5 text-gray-700">
              <li>Crea un arreglo de al menos 10 precios (números flotantes) desordenados.</li>
              <li>Imprime el arreglo original.</li>
              <li>Llama a tu función <code>quickSort</code> para ordenar el arreglo.</li>
              <li>Imprime el arreglo ordenado.</li>
          </ul>
        </div>
      `
    },
    {
      id: 'pnn5-11-resources',
      title: 'Herramientas Visuales y Recursos',
      notes: 'Proporcionar a los estudiantes herramientas externas para reforzar su aprendizaje.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Visualizando el Quick Sort</h3>
        <p class="text-gray-600 mb-4">Explora cómo Quick Sort particiona y ordena un arreglo paso a paso con simuladores interactivos:</p>
        <div class="bg-white border rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
          <h4 class="font-bold text-blue-700 text-lg">VisuAlgo - Quick Sort</h4>
          <p class="text-sm text-gray-600 my-2">Observa las fases de partición y las llamadas recursivas.</p>
          <a href="https://visualgo.net/es/sorting" target="_blank" class="text-blue-600 font-bold hover:underline">Ir a VisuAlgo (Sorting) &rarr;</a>
        </div>
      `
    },
    {
      id: 'pnn5-end-questions',
      title: '¿Preguntas?',
      notes: 'Espacio para dudas.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full">
          <h3 class="text-2xl font-bold text-slate-900 mb-4">¿Dudas sobre el Pivote, Partición o Complejidad?</h3>
        </div>
      `
    },
    {
      id: 'pnn5-end-thanks',
      title: 'Gracias y Próxima Clase',
      notes: 'Cierre y adelanto.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center">
          <h2 class="text-3xl font-bold text-slate-900 mb-4">Fin del Módulo 5</h2>
          <p class="text-gray-600 text-lg">Hemos cubierto los algoritmos de ordenamiento fundamentales. En la próxima clase, haremos un <b>Repaso General del Primer Corte</b>.</p>
        </div>
      `
    }
  ]
};