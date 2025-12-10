
import { Module } from '../../types';

export const PNN_MODULE_3: Module = {
  id: 'pnn-mod-3',
  title: '3. Divide y Conquista: Estrategias Eficientes',
  description: 'Paradigma algorítmico, recursividad, búsqueda binaria y optimización de min/max.',
  evaluation: '10% - Práctica',
  slides: [
    {
      id: 'pnn3-1',
      title: 'Paradigma: Divide y Conquista (Divide and Conquer)',
      notes: 'Introducir la filosofía de resolver problemas complejos dividiéndolos.',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700 text-lg">
            El paradigma <strong>Divide y Conquista</strong> es una potente estrategia para diseñar algoritmos. Consiste en descomponer un problema grande en subproblemas más pequeños y fáciles de resolver.
          </p>

          <div class="flex flex-col md:flex-row gap-4 justify-center text-center my-6">
            <div class="bg-blue-50 p-4 rounded-lg border border-blue-200 flex-1">
              <div class="text-2xl mb-2">🔪</div>
              <h4 class="font-bold text-blue-900">1. Dividir</h4>
              <p class="text-xs text-blue-800">Partir el problema original en subproblemas independientes y más pequeños.</p>
            </div>
            <div class="bg-purple-50 p-4 rounded-lg border border-purple-200 flex-1">
              <div class="text-2xl mb-2">⚔️</div>
              <h4 class="font-bold text-purple-900">2. Conquistar</h4>
              <p class="text-xs text-purple-800">Resolver los subproblemas de forma recursiva. Si son triviales, se resuelven directamente.</p>
            </div>
            <div class="bg-green-50 p-4 rounded-lg border border-green-200 flex-1">
              <div class="text-2xl mb-2">🔗</div>
              <h4 class="font-bold text-green-900">3. Combinar</h4>
              <p class="text-xs text-green-800">Juntar las soluciones de los subproblemas para obtener la solución al problema original.</p>
            </div>
          </div>
          <p class="text-sm text-gray-700 mt-4">Esta estrategia suele conducir a algoritmos muy eficientes, especialmente para grandes volúmenes de datos.</p>
        </div>
      `
    },
    {
      id: 'pnn3-2',
      title: 'Herramienta Clave: La Recursividad',
      notes: 'Explicar recursividad con un ejemplo clásico (Factorial).',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700 text-lg">
            La <strong>Recursividad</strong> es la técnica fundamental para implementar algoritmos de Divide y Conquista. Una función es recursiva si se llama a sí misma para resolver una versión más pequeña del mismo problema.
          </p>
          <div class="bg-yellow-50 p-4 border-l-4 border-yellow-400 text-sm text-yellow-900">
            <strong>Regla de Oro:</strong> Todo algoritmo recursivo DEBE tener un <strong>Caso Base</strong> que detenga la recursión. Sin él, la función se llamaría infinitamente, causando un Stack Overflow.
          </div>
          <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto mt-4">
            <h5 class="text-gray-400 mb-2">// Pseudocódigo para Factorial</h5>
            <pre class="font-mono text-sm max-w-full overflow-x-auto"><code>
FUNCIÓN Factorial(n):
  SI n == 0:        // Caso Base
    RETORNAR 1
  SINO:              // Paso Recursivo
    RETORNAR n * Factorial(n - 1)
            </code></pre>
          </div>
        </div>
      `
    },
    {
      id: 'pnn3-3-fact-code',
      title: 'Recursividad en Acción: Factorial (C++/Python)',
      notes: 'Mostrar el código real del Factorial recursivo.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Implementando el Factorial Recursivo</h3>
        <p class="text-gray-600 mb-4">Veamos cómo se traduce el pseudocódigo del factorial a C++ y Python.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <h5 class="text-gray-400 mb-2">// C++</h5>
            <pre class="font-mono text-sm max-w-full overflow-x-auto"><code class="language-cpp">
int factorial(int n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// int main() {
//   std::cout << factorial(5); // Salida: 120
// }
            </code></pre>
          </div>
          <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <h5 class="text-gray-400 mb-2"># Python</h5>
            <pre class="font-mono text-sm max-w-full overflow-x-auto"><code class="language-python">
def factorial(n):
    if n == 0: # Caso Base
        return 1
    else:      # Paso Recursivo
        return n * factorial(n - 1)

# print(factorial(5)) # Salida: 120
            </code></pre>
          </div>
        </div>
      `
    },
    {
      id: 'pnn3-4-rec-vs-iter',
      title: 'Recursividad vs. Iteración: El Dilema',
      notes: 'Discutir los pros y contras de la recursividad frente a soluciones iterativas.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">¿Cuándo Usar Recursividad?</h3>
        <p class="text-gray-600 mb-4">La recursividad puede ser elegante y simplificar el código para problemas inherentemente recursivos, pero tiene implicaciones de rendimiento y memoria.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
             <h5 class="font-bold text-green-900">Ventajas de la Recursividad</h5>
             <ul class="list-disc pl-5 text-sm text-green-800">
               <li>Código más conciso y legible para ciertos problemas (ej. recorridos de árboles).</li>
               <li>Refleja mejor la definición matemática de algunos problemas.</li>
             </ul>
          </div>
          <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
             <h5 class="font-bold text-red-900">Desventajas</h5>
             <ul class="list-disc pl-5 text-sm text-red-800">
               <li>Mayor consumo de memoria (por el Call Stack).</li>
               <li>Puede ser más lenta que la iteración.</li>
               <li>Riesgo de <strong>Stack Overflow</strong> para recursiones profundas.</li>
             </ul>
          </div>
        </div>
        <p class="text-sm text-gray-700 mt-4">Para muchos problemas, una solución iterativa es posible y puede ser más eficiente.</p>
      `
    },
    {
      id: 'pnn3-5-binary-search-algo',
      title: 'Aplicación: Búsqueda Binaria (Algoritmo)',
      notes: 'Detallar el algoritmo de Búsqueda Binaria como ejemplo de D&C.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Búsqueda Binaria: Divide y Vencerás en un Arreglo Ordenado</h3>
        <p class="text-gray-600 mb-4">La búsqueda binaria es un algoritmo que encuentra la posición de un valor objetivo dentro de un arreglo <strong>ordenado</strong>. Su eficiencia es <strong>O(log N)</strong>.</p>
        <ol class="list-decimal pl-5 text-sm space-y-2">
          <li><strong>Dividir:</strong> Se compara el valor objetivo con el elemento central del arreglo.</li>
          <li><strong>Conquistar:</strong>
            <ul><li>Si el objetivo coincide con el medio, se encuentra.</li><li>Si el objetivo es menor, el problema se reduce a la mitad izquierda del arreglo.</li><li>Si el objetivo es mayor, el problema se reduce a la mitad derecha del arreglo.</li></ul>
          </li>
          <li><strong>Combinar:</strong> No se requiere combinación, ya que el resultado es un único índice.</li>
        </ol>
        <div class="flex justify-center gap-1 my-4">
             <div class="w-8 h-8 bg-gray-200 flex items-center justify-center text-xs text-gray-400">1</div>
             <div class="w-8 h-8 bg-gray-200 flex items-center justify-center text-xs text-gray-400">3</div>
             <div class="w-8 h-8 bg-gray-200 flex items-center justify-center text-xs text-gray-400">5</div>
             <div class="w-8 h-8 bg-blue-600 text-white font-bold flex items-center justify-center text-xs scale-110 shadow-lg animate-pulse">8</div>
             <div class="w-8 h-8 bg-gray-200 flex items-center justify-center text-xs text-gray-400">12</div>
             <div class="w-8 h-8 bg-gray-200 flex items-center justify-center text-xs text-gray-400">15</div>
             <div class="w-8 h-8 bg-gray-200 flex items-center justify-center text-xs text-gray-400">20</div>
          </div>
          <p class="text-center text-xs text-slate-500">En cada paso, el espacio de búsqueda se reduce a la mitad.</p>
      `
    },
    {
      id: 'pnn3-6-binary-search-code',
      title: 'Práctica: Búsqueda Binaria (C++/Python)',
      notes: 'Implementación iterativa de la búsqueda binaria.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Implementando la Búsqueda Binaria</h3>
        <p class="text-gray-600 mb-4">Aquí una implementación iterativa de la búsqueda binaria.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <h5 class="text-gray-400 mb-2">// C++</h5>
            <pre><code class="language-cpp">
int busquedaBinaria(const std::vector<int>& arr, int objetivo) {
    int bajo = 0;
    int alto = arr.size() - 1;
    while (bajo <= alto) {
        int medio = bajo + (alto - bajo) / 2;
        if (arr[medio] == objetivo) {
            return medio;
        } else if (arr[medio] < objetivo) {
            bajo = medio + 1;
        } else {
            alto = medio - 1;
        }
    }
    return -1; // No encontrado
}
            </code></pre>
          </div>
          <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <h5 class="text-gray-400 mb-2"># Python</h5>
            <pre><code class="language-python">
def busqueda_binaria(arr, objetivo):
    bajo = 0
    alto = len(arr) - 1
    while bajo <= alto:
        medio = (bajo + alto) // 2
        if arr[medio] == objetivo:
            return medio
        elif arr[medio] < objetivo:
            bajo = medio + 1
        else:
            alto = medio - 1
    return -1 # No encontrado
            </code></pre>
          </div>
        </div>
      `
    },
    {
      id: 'pnn3-7-min-max-algo',
      title: 'Aplicación: Encontrar Máximo y Mínimo',
      notes: 'Aplicar D&C para encontrar Max/Min en O(N).',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Optimización: Máximos y Mínimos con Divide y Conquista</h3>
        <p class="text-gray-600 mb-4">Podemos encontrar el elemento máximo y mínimo en un arreglo de forma más eficiente comparando los resultados de subproblemas. El algoritmo directo es O(N), pero este enfoque ilustra la filosofía D&C.</p>
        <ol class="list-decimal pl-5 text-sm space-y-2">
          <li><strong>Dividir:</strong> Partir el arreglo en dos mitades.</li>
          <li><strong>Conquistar:</strong> Encontrar recursivamente el máximo y mínimo en cada mitad.</li>
          <li><strong>Combinar:</strong> Comparar los máximos de ambas mitades para obtener el máximo global, y lo mismo para los mínimos.</li>
        </ol>
        <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto mt-4">
          <h5 class="text-gray-400 mb-2">// Pseudocódigo (Max y Min a la vez)</h5>
            <pre class="font-mono text-sm max-w-full overflow-x-auto"><code>
FUNCIÓN encontrar_min_max(arr, bajo, alto):
  SI bajo == alto: // Caso Base: un solo elemento
    RETORNAR (arr[bajo], arr[bajo])
  
  SI alto == bajo + 1: // Caso Base: dos elementos
    SI arr[bajo] < arr[alto]:
      RETORNAR (arr[bajo], arr[alto])
    SINO:
      RETORNAR (arr[alto], arr[bajo])
      
  // Dividir y Conquistar
  medio = (bajo + alto) / 2
  (min1, max1) = encontrar_min_max(arr, bajo, medio)
  (min2, max2) = encontrar_min_max(arr, medio + 1, alto)
  
  // Combinar
  min_global = MIN(min1, min2)
  max_global = MAX(max1, max2)
  RETORNAR (min_global, max_global)
          </code></pre>
        </div>
      `
    },
    {
      id: 'pnn3-8-min-max-code',
      title: 'Práctica: Implementación de Máx/Mín (C++/Python)',
      notes: 'Código para el algoritmo Max/Min con D&C.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Código para Encontrar Máx/Mín con D&C</h3>
        <p class="text-gray-600 mb-4">Una implementación eficiente de encontrar el máximo y mínimo en un arreglo.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <h5 class="text-gray-400 mb-2">// C++</h5>
            <pre class="font-mono text-sm max-w-full overflow-x-auto"><code class="language-cpp">
struct MinMax { int min_val, max_val; };

MinMax findMinMax(const std::vector<int>& arr, int low, int high) {
    MinMax result, left, right;
    if (low == high) {
        result.min_val = arr[low]; result.max_val = arr[low];
        return result;
    }
    if (high == low + 1) {
        if (arr[low] < arr[high]) {
            result.min_val = arr[low]; result.max_val = arr[high];
        } else {
            result.min_val = arr[high]; result.max_val = arr[low];
        }
        return result;
    }
    int mid = low + (high - low) / 2;
    left = findMinMax(arr, low, mid);
    right = findMinMax(arr, mid + 1, high);
    result.min_val = std::min(left.min_val, right.min_val);
    result.max_val = std::max(left.max_val, right.max_val);
    return result;
}
            </code></pre>
          </div>
          <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <h5 class="text-gray-400 mb-2"># Python</h5>
            <pre class="font-mono text-sm max-w-full overflow-x-auto"><code class="language-python">
def find_min_max(arr, low, high):
    if low == high: # Caso Base: un elemento
        return arr[low], arr[low]
    
    if high == low + 1: # Caso Base: dos elementos
        return (arr[low], arr[high]) if arr[low] < arr[high] else (arr[high], arr[low])
    
    # Dividir y Conquistar
    mid = (low + high) // 2
    min1, max1 = find_min_max(arr, low, mid)
    min2, max2 = find_min_max(arr, mid + 1, high)
    
    # Combinar
    return min(min1, min2), max(max1, max2)

# arr = [12, 3, 1, 8, 15, 20]
# min_val, max_val = find_min_max(arr, 0, len(arr) - 1)
# print(f"Min: {min_val}, Max: {max_val}") # Min: 1, Max: 20
            </code></pre>
          </div>
        </div>
      `
    },
    {
      id: 'pnn3-9-pros-cons',
      title: 'Ventajas y Desventajas de Divide y Conquista',
      notes: 'Resumir los beneficios y desafíos del paradigma D&C.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">¿Cuándo Conviene Usar Divide y Conquista?</h3>
        <p class="text-gray-600 mb-4">Es una estrategia poderosa, pero no siempre es la mejor opción.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
             <h5 class="font-bold text-green-900">Ventajas</h5>
             <ul class="list-disc pl-5 text-sm text-green-800">
               <li>Resolución eficiente de problemas complejos (O(N log N) o O(log N)).</li>
               <li>Adecuado para procesamiento paralelo (subproblemas independientes).</li>
               <li>Mejora la eficiencia en el uso de memoria caché.</li>
             </ul>
          </div>
          <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
             <h5 class="font-bold text-red-900">Desventajas</h5>
             <ul class="list-disc pl-5 text-sm text-red-800">
               <li>Mayor complejidad de implementación para algunos problemas.</li>
               <li>Sobrecarga de llamadas a funciones recursivas (consumo de stack).</li>
               <li>Puede ser menos eficiente para problemas muy pequeños.</li>
             </ul>
          </div>
        </div>
      `
    },
    {
      id: 'pnn3-10-practice-final',
      title: 'Práctica Final: Implementa un Algoritmo Recursivo',
      notes: 'Ejercicio de codificación final para afianzar D&C y recursividad.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Ejercicio: Potencia Recursiva</h3>
  <p class="text-gray-600 mb-4">Implementa una función recursiva para calcular <code>x</code> elevado a la potencia <code>n</code> (<code>x^n</code>). Puedes usar la estrategia de Divide y Conquista para hacerlo de forma más eficiente.</p>
        <div class="bg-white border rounded-lg p-6">
          <h4 class="font-bold text-slate-800 mb-2">Pista de D&C</h4>
          <ul class="text-sm list-disc pl-5 text-gray-700">
              <li>Caso base: <code>x^0 = 1</code>.</li>
              <li>Si <code>n</code> es par, <code>x^n = (x^(n/2)) * (x^(n/2))</code>.</li>
              <li>Si <code>n</code> es impar, <code>x^n = x * (x^((n-1)/2)) * (x^((n-1)/2))</code>.</li>
          </ul>
          <p class="text-xs text-gray-500 mt-4">Esto reduce el número de multiplicaciones significativamente, especialmente para <code>n</code> grandes.</p>
        </div>
      `
    },
    {
      id: 'pnn3-11-resources',
      title: 'Herramientas Visuales y Recursos',
      notes: 'Proporcionar a los estudiantes herramientas externas para reforzar su aprendizaje.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Visualizando Divide y Conquista</h3>
        <p class="text-gray-600 mb-4">Explora cómo funcionan los algoritmos de Divide y Conquista paso a paso con simuladores interactivos:</p>
        <div class="bg-white border rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
          <h4 class="font-bold text-blue-700 text-lg">VisuAlgo - Búsqueda Binaria</h4>
          <p class="text-sm text-gray-600 my-2">Observa la división del espacio de búsqueda en cada iteración.</p>
          <a href="https://visualgo.net/es/bnsearch" target="_blank" class="text-blue-600 font-bold hover:underline">Ir a VisuAlgo (Búsqueda Binaria) &rarr;</a>
        </div>
      `
    },
    {
      id: 'pnn3-end-questions',
      title: '¿Preguntas?',
      notes: 'Espacio para dudas.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full">
          <h3 class="text-2xl font-bold text-slate-900 mb-4">¿Dudas sobre Divide y Conquista o Recursividad?</h3>
        </div>
      `
    },
    {
      id: 'pnn3-end-thanks',
      title: 'Gracias y Próxima Clase',
      notes: 'Cierre y adelanto.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center">
          <h2 class="text-3xl font-bold text-slate-900 mb-4">Fin del Módulo 3</h2>
          <p class="text-gray-600 text-lg">Hemos cubierto la base de Divide y Conquista. En la próxima clase, aplicaremos esta poderosa estrategia a uno de los problemas fundamentales en computación: los <b>Algoritmos de Ordenamiento</b>.</p>
        </div>
      `
    }
  ]
};
