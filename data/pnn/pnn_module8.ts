import { Module } from '../../types';

export const PNN_MODULE_8: Module = {
  id: 'pnn-mod-8',
  title: '8. Algoritmos Voraces: Knapsack Fraccional e Intercalación Óptima',
  description: 'Aplicación de estrategias Greedy a problemas de la mochila fraccional y fusión óptima.',
  evaluation: '0% - Ejercicios',
  slides: [
    {
      id: 'pnn8-1',
      title: '1. Repaso: Algoritmos Voraces (Greedy)',
      notes: 'Recordar el concepto de Greedy y sus componentes.',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700 text-lg">
            Recordemos que un <strong>Algoritmo Voraz</strong> toma la decisión localmente óptima en cada paso, esperando que esto conduzca a una solución globalmente óptima.
          </p>
          <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
            <h5 class="font-bold text-blue-900">Componentes Clave</h5>
            <ul class="list-disc pl-5 text-sm text-blue-800 mt-2">
              <li><strong>Función de Selección:</strong> Elige el mejor candidato.</li>
              <li><strong>Función de Factibilidad:</strong> Verifica si el candidato es válido.</li>
              <li><strong>Función Solución:</strong> Determina si la solución es completa.</li>
            </ul>
          </div>
          <p class="text-gray-700 mt-4">La clave es probar la <strong>optimalidad</strong> del enfoque voraz para el problema específico.</p>
        </div>
      `
    },
    {
      id: 'pnn8-2',
      title: '2. Problema: La Mochila Fraccional (Fractional Knapsack)',
      notes: 'Descripción del problema de la mochila fraccional.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Maximizando el Valor en un Espacio Limitado</h3>
        <p class="text-gray-600 mb-4">Imagina que tienes una mochila con una capacidad máxima (<code>W</code>) y una lista de objetos. Cada objeto tiene un <strong>peso</strong> (<code>wi</code>) y un <strong>valor</strong> (<code>vi</code>).</p>
        <div class="bg-orange-50 border-l-4 border-orange-500 p-4 my-4">
          <h5 class="font-bold text-orange-900">Objetivo</h5>
          <p class="text-sm text-orange-800 mt-2">Llenar la mochila de tal manera que la suma de los pesos no exceda <code>W</code> y la suma de los valores sea la máxima posible.</p>
        </div>
        <p class="text-gray-700">La variante <strong>Fraccional</strong> del problema permite tomar fracciones de un objeto. Esto es crucial, ya que si no se permite fraccionar, el problema se vuelve mucho más complejo (Programación Dinámica).</p>
        <div class="flex justify-center my-4"><div class="mermaid">graph LR; A[Objeto 1: P=10, V=60] --> B[Objeto 2: P=20, V=100]; A --> C[Objeto 3: P=30, V=120];</div></div>
      `
    },
    {
      id: 'pnn8-3',
      title: '3. Estrategia Voraz para Knapsack Fraccional',
      notes: 'Explicar la estrategia Greedy y justificar su optimalidad.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">La Elección Más Lógica: Lo que "Rinde Más"</h3>
        <p class="text-gray-600 mb-4">Para la versión fraccional del Knapsack, una estrategia voraz SIEMPRE conduce a la solución óptima.</p>
        <div class="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg my-4">
          <h5 class="font-bold text-green-900">Estrategia Greedy</h5>
          <ol class="list-decimal pl-5 text-sm text-green-800 mt-2">
            <li>Calcula la <strong>relación valor/peso</strong> (<code>vi/wi</code>) para cada objeto.</li>
            <li><strong>Ordena</strong> los objetos en orden <strong>descendente</strong> según su relación valor/peso.</li>
            <li>Itera por los objetos ordenados, añadiéndolos a la mochila:
              <ul>
                <li>Si el objeto cabe completo, añádelo y reduce la capacidad restante.</li>
                <li>Si no cabe completo, toma la fracción que quepa y la mochila estará llena.</li>
              </ul>
            </li>
          </ol>
        </div>
        <p class="text-sm text-gray-700 mt-4">Esta estrategia garantiza maximizar el valor total porque siempre prioriza los objetos que aportan más valor por cada unidad de peso.</p>
      `
    },
    {
      id: 'pnn8-4-knapsack-pseudo',
      title: '4. Algoritmo: Knapsack Fraccional (Pseudocódigo)',
      notes: 'Pseudocódigo del algoritmo Greedy para Knapsack Fraccional.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Paso a Paso hacia la Mochila Más Valiosa</h3>
        <p class="text-gray-600 mb-4">Aquí el pseudocódigo que implementa la estrategia voraz para el problema de la mochila fraccional.</p>
        <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
          <h5 class="text-gray-400 mb-2">// Pseudocódigo Knapsack Fraccional</h5>
          <pre><code>
FUNCIÓN knapsack_fraccional(capacidad_W, objetos):
  // Cada objeto tiene (peso, valor)
  
  // Paso 1: Calcular relación valor/peso para cada objeto
  PARA cada objeto en objetos:
    objeto.ratio = objeto.valor / objeto.peso

  // Paso 2: Ordenar objetos por ratio descendente
  ordenar_descendente(objetos, por_ratio)
  
  valor_total = 0
  peso_actual = 0
  
  // Paso 3: Iterar y llenar la mochila
  PARA cada objeto en objetos:
    SI peso_actual + objeto.peso <= capacidad_W:
      peso_actual = peso_actual + objeto.peso
      valor_total = valor_total + objeto.valor
    SINO:
      // Si el objeto no cabe completo, tomar una fracción
      fraccion = (capacidad_W - peso_actual) / objeto.peso
      valor_total = valor_total + (objeto.valor * fraccion)
      peso_actual = capacidad_W // Mochila llena
      ROMPER
      
  RETORNAR valor_total
          </code></pre>
        </div>
      `
    },
    {
      id: 'pnn8-5-knapsack-code',
      title: '5. Práctica: Knapsack Fraccional (C++/Python)',
      notes: 'Implementación del algoritmo en C++ y Python.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Implementando la Solución Greedy</h3>
        <p class="text-gray-600 mb-4">Aquí el código para resolver el problema de la mochila fraccional.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <h5 class="text-gray-400 mb-2">// C++</h5>
            <pre><code class="language-cpp">
#include <iostream>
#include <vector>
#include <algorithm> // Para std::sort

struct Objeto {
    int peso;
    int valor;
    double ratio; // valor/peso

    bool operator<(const Objeto& otro) const {
        return ratio > otro.ratio; // Orden descendente por ratio
    }
};

double knapsackFraccional(int capacidad, std::vector<Objeto>& objetos) {
    for (auto& obj : objetos) {
        obj.ratio = static_cast<double>(obj.valor) / obj.peso;
    }
    std::sort(objetos.begin(), objetos.end()); // Ordena por ratio

    double valorTotal = 0.0;
    int pesoActual = 0;

    for (const auto& obj : objetos) {
        if (pesoActual + obj.peso <= capacidad) {
            pesoActual += obj.peso;
            valorTotal += obj.valor;
        } else {
            double fraccion = static_cast<double>(capacidad - pesoActual) / obj.peso;
            valorTotal += obj.valor * fraccion;
            break;
        }
    }
    return valorTotal;
}

// int main() {
//    std::vector<Objeto> items = {{10, 60}, {20, 100}, {30, 120}};
//    int W = 50;
//    std::cout << knapsackFraccional(W, items); // Salida: 240
// }
            </code></pre>
          </div>
          <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <h5 class="text-gray-400 mb-2"># Python</h5>
            <pre><code class="language-python">
class Objeto:
    def __init__(self, peso, valor):
        self.peso = peso
        self.valor = valor
        self.ratio = valor / peso

def knapsack_fraccional(capacidad, objetos):
    # Ordenar objetos por relación valor/peso descendente
    objetos.sort(key=lambda x: x.ratio, reverse=True)
    
    valor_total = 0.0
    peso_actual = 0
    
    for obj in objetos:
        if peso_actual + obj.peso <= capacidad:
            peso_actual += obj.peso
            valor_total += obj.valor
        else:
            fraccion = (capacidad - peso_actual) / obj.peso
            valor_total += obj.valor * fraccion
            break
            
    return valor_total

# items = [Objeto(10, 60), Objeto(20, 100), Objeto(30, 120)]
# W = 50
# print(knapsack_fraccional(W, items)) # Salida: 240.0
            </code></pre>
          </div>
        </div>
      `
    },
    {
      id: 'pnn8-6',
      title: '6. Problema: Intercalación Óptima (Optimal Merge Pattern)',
      notes: 'Descripción del problema de fusión óptima de archivos/listas.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Fusionando Datos de Manera Eficiente</h3>
        <p class="text-gray-600 mb-4">Imagina que tienes una colección de <strong>N archivos ordenados</strong> con diferentes tamaños (o listas ordenadas). Quieres fusionarlos todos en un único archivo grande y ordenado.</p>
        <div class="bg-purple-50 border-l-4 border-purple-500 p-4 my-4">
          <h5 class="font-bold text-purple-900">Objetivo</h5>
          <p class="text-sm text-purple-800 mt-2">Minimizar el número total de comparaciones (o el costo total de fusionar) al combinar todos los archivos.</p>
        </div>
        <p class="text-gray-700">El costo de fusionar dos archivos de tamaño <code>A</code> y <code>B</code> es <code>A + B</code>. Queremos elegir las fusiones en un orden que minimice el costo acumulado.</p>
        <div class="flex justify-center my-4"><div class="mermaid">graph TD; A[F1:10] --- B[F2:20]; A --- C[F3:5]; B --- C;</div></div>
      `
    },
    {
      id: 'pnn8-7',
      title: '7. Estrategia Voraz para Intercalación Óptima',
      notes: 'Proponer la estrategia Greedy usando un Min-Heap.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Fusionando lo Más Pequeño Primero</h3>
        <p class="text-gray-600 mb-4">Para la intercalación óptima, la estrategia voraz también es la solución correcta. Y aquí, ¡los Heaps (Min-Heaps) son nuestra mejor herramienta!</p>
        <div class="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg my-4">
          <h5 class="font-bold text-green-900">Estrategia Greedy con Min-Heap</h5>
          <ol class="list-decimal pl-5 text-sm text-green-800 mt-2">
            <li>Coloca el tamaño de todos los archivos en un <strong>Min-Heap</strong>.</li>
            <li>Mientras haya más de un elemento en el Heap:
              <ul>
                <li>Extrae los dos archivos (tamaños) más pequeños del Heap.</li>
                <li>Fusiónalos (sumando sus tamaños) y añade este costo al total.</li>
                <li>Inserta el tamaño del archivo fusionado de nuevo en el Heap.</li>
              </ul>
            </li>
          </ol>
        </div>
        <p class="text-sm text-gray-700 mt-4">Esta estrategia minimiza el costo porque las fusiones más grandes (y caras) se realizan con los tamaños más grandes que ya se han acumulado, mientras que las más pequeñas se hacen al principio, cuando el costo por fusión es menor.</p>
      `
    },
    {
      id: 'pnn8-8-merge-pseudo',
      title: '8. Algoritmo: Intercalación Óptima (Pseudocódigo)',
      notes: 'Pseudocódigo del algoritmo con Min-Heap.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Paso a Paso con un Min-Heap</h3>
        <p class="text-gray-600 mb-4">El algoritmo para la intercalación óptima utiliza un Min-Heap para seleccionar eficientemente los archivos más pequeños a fusionar.</p>
        <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
          <h5 class="text-gray-400 mb-2">// Pseudocódigo Intercalación Óptima</h5>
          <pre><code>
FUNCIÓN intercalacion_optima(tamaños_archivos):
  // Paso 1: Inicializar un Min-Heap con todos los tamaños de archivos
  min_heap = crear_MinHeap(tamaños_archivos)
  
  costo_total = 0
  
  // Paso 2: Fusionar archivos hasta que quede uno solo
  MIENTRAS min_heap.tamaño() > 1:
    // Extraer los dos archivos más pequeños
    archivo1_tamaño = min_heap.extraer_min()
    archivo2_tamaño = min_heap.extraer_min()
    
    // Calcular el costo de esta fusión
    costo_fusion = archivo1_tamaño + archivo2_tamaño
    costo_total = costo_total + costo_fusion
    
    // Insertar el archivo fusionado de nuevo en el heap
    min_heap.insertar(costo_fusion)
  
  RETORNAR costo_total
          </code></pre>
        </div>
      `
    },
    {
      id: 'pnn8-9-merge-code',
      title: '9. Práctica: Intercalación Óptima (C++/Python)',
      notes: 'Implementación del algoritmo en C++ y Python.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Implementando la Fusión Óptima con Heaps</h3>
  <p class="text-gray-600 mb-4">Utilizaremos las librerías estándar para Min-Heaps en C++ (con <code>priority_queue</code> adaptado) y Python (<code>heapq</code>).</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <h5 class="text-gray-400 mb-2">// C++</h5>
            <pre><code class="language-cpp">
#include <iostream>
#include <vector>
#include <queue> // Para std::priority_queue

int intercalacionOptima(std::vector<int>& tamanios) {
    // std::priority_queue es un Max-Heap por defecto.
    // Para un Min-Heap, usamos std::greater<int>.
    std::priority_queue<int, std::vector<int>, std::greater<int>> minHeap;

    for (int t : tamanios) {
        minHeap.push(t);
    }

    int costoTotal = 0;
    while (minHeap.size() > 1) {
        int t1 = minHeap.top(); minHeap.pop();
        int t2 = minHeap.top(); minHeap.pop();

        int costoFusion = t1 + t2;
        costoTotal += costoFusion;
        minHeap.push(costoFusion);
    }
    return costoTotal;
}

// int main() {
//    std::vector<int> files = {10, 20, 5, 15};
//    std::cout << intercalacionOptima(files); // Salida: 65
// }
            </code></pre>
          </div>
          <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <h5 class="text-gray-400 mb-2"># Python</h5>
            <pre><code class="language-python">
import heapq

def intercalacion_optima(tamanios):
    # heapq.heapify convierte la lista en un min-heap
    heapq.heapify(tamanios)
    
    costo_total = 0
    while len(tamanios) > 1:
        t1 = heapq.heappop(tamanios)
        t2 = heapq.heappop(tamanios)
        
        costo_fusion = t1 + t2
        costo_total += costo_fusion
        heapq.heappush(tamanios, costo_fusion)
        
    return costo_total

# files = [10, 20, 5, 15]
# print(intercalacion_optima(files)) # Salida: 65
            </code></pre>
          </div>
        </div>
      `
    },
    {
      id: 'pnn8-10-complexity',
      title: '10. Análisis de Complejidad',
      notes: 'Análisis de tiempo y espacio para ambos algoritmos Greedy.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Eficiencia de los Algoritmos Greedy Vistos</h3>
        <div class="grid md:grid-cols-2 gap-6 mt-4">
            <div class="bg-slate-50 p-4 rounded border">
                <h5 class="font-bold text-slate-800">Knapsack Fraccional</h5>
                <p class="text-3xl font-mono font-bold text-green-600">O(N log N)</p>
                <p class="text-xs text-gray-600">Dominado por el tiempo de ordenamiento de los objetos por su ratio valor/peso.</p>
            </div>
            <div class="bg-slate-50 p-4 rounded border">
                <h5 class="font-bold text-slate-800">Intercalación Óptima</h5>
                <p class="text-3xl font-mono font-bold text-orange-600">O(N log N)</p>
                <p class="text-xs text-gray-600">Cada operación de Heap (insertar, extraer) es O(log N), y se realizan N-1 fusiones, lo que da O(N log N).</p>
            </div>
        </div>
      `
    },
    {
      id: 'pnn8-11-practice',
      title: '11. Ejercicio Práctico',
      notes: 'Ejercicio para aplicar Knapsack Fraccional.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Problema de la Mochila Fraccional</h3>
        <p class="text-gray-600 mb-4">Un ladrón entra a una tienda y encuentra los siguientes objetos:</p>
        <ul class="list-disc pl-5 text-gray-700 mb-4">
            <li>Reloj: Peso = 4kg, Valor = $12</li>
            <li>Cuadro: Peso = 2kg, Valor = $10</li>
            <li>Joyería: Peso = 6kg, Valor = $100</li>
        </ul>
        <p class="text-gray-600 mb-4">La mochila del ladrón puede llevar un máximo de <strong>10kg</strong>.</p>
        <div class="bg-white border rounded-lg p-6">
          <h4 class="font-bold text-slate-800 mb-2">Tu Tarea:</h4>
          <p class="text-sm text-gray-700">Utiliza el algoritmo de la mochila fraccional para determinar qué objetos (o fracciones) debe llevar el ladrón para maximizar el valor total. Implementa la solución en C++ o Python.</p>
        </div>
      `
    },
    {
      id: 'pnn8-12-resources',
      title: '12. Herramientas Visuales y Recursos',
      notes: 'Proporcionar recursos externos para visualización.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Visualizando Algoritmos Greedy</h3>
        <p class="text-gray-600 mb-4">Para profundizar tu comprensión de estos algoritmos, puedes explorar simuladores interactivos:</p>
        <div class="bg-white border rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
          <h4 class="font-bold text-blue-700 text-lg">VisuAlgo - Knapsack Fraccional</h4>
          <p class="text-sm text-gray-600 my-2">Simula el llenado de la mochila con la estrategia Greedy.</p>
          <a href="https://visualgo.net/en/greedy" target="_blank" class="text-blue-600 font-bold hover:underline">Ir a VisuAlgo (Knapsack) &rarr;</a>
        </div>
      `
    },
    {
      id: 'pnn8-end-questions',
      title: '¿Preguntas?',
      notes: 'Espacio para dudas.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full">
          <h3 class="text-2xl font-bold text-slate-900 mb-4">¿Dudas sobre Knapsack Fraccional o Intercalación?</h3>
        </div>
      `
    },
    {
      id: 'pnn8-end-thanks',
      title: 'Gracias y Próxima Clase',
      notes: 'Cierre y adelanto.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center">
          <h2 class="text-3xl font-bold text-slate-900 mb-4">Fin del Módulo 8</h2>
          <p class="text-gray-600 text-lg">Hemos aplicado la estrategia Greedy a problemas de optimización. En la próxima clase, continuaremos con Greedy, pero esta vez en el contexto de los <b>Grafos</b>, para encontrar Árboles de Costo Mínimo.</p>
        </div>
      `
    }
  ]
};