
import { Module } from '../types';

export const PROG_MODULE_4: Module = {
  id: 'prog-mod-4',
  title: '4. Arreglos y Vectores',
  description: 'Estructuras de datos estáticas: Vectores, Matrices y Algoritmos en C++.',
  evaluation: '10% - Taller de Codificación',
  slides: [
    {
      id: 'p4-1',
      title: 'Arreglos Primitivos en C++',
      notes: 'Concepto de arreglo estático C-style. Contigüidad en memoria.',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">Un arreglo es una colección de elementos del <strong>mismo tipo</strong> almacenados en memoria <strong>contigua</strong>. Su tamaño es <strong>fijo</strong> y se define en tiempo de compilación.</p>
          <div class="bg-white p-4 rounded-xl border shadow-sm flex flex-col items-center">
            <p class="font-mono font-bold text-slate-500 mb-2 self-start">int notas[5];</p>
            <div class="flex">
              <div class="text-center group p-1"><div class="w-12 h-12 border-2 flex items-center justify-center font-bold">18</div><span class="text-xs font-mono">[0]</span></div>
              <div class="text-center group p-1"><div class="w-12 h-12 border-2 flex items-center justify-center font-bold">20</div><span class="text-xs font-mono">[1]</span></div>
              <div class="text-center group p-1"><div class="w-12 h-12 border-2 flex items-center justify-center font-bold">15</div><span class="text-xs font-mono">[2]</span></div>
              <div class="text-center group p-1"><div class="w-12 h-12 border-2 flex items-center justify-center font-bold">12</div><span class="text-xs font-mono">[3]</span></div>
              <div class="text-center group p-1"><div class="w-12 h-12 border-2 flex items-center justify-center font-bold">19</div><span class="text-xs font-mono">[4]</span></div>
            </div>
            <p class="text-xs text-gray-500 mt-2">Acceso a un elemento por su índice: <code>notas[2]</code> (valor: 15). El acceso es O(1).</p>
          </div>
          <p class="text-sm text-center text-red-600 bg-red-50 p-2 rounded"><strong>¡Cuidado!</strong> C++ no verifica los límites. Acceder a <code>notas[5]</code> es un error grave (buffer overflow).</p>
        </div>
      `
    },
    {
      id: 'p4-2-vector',
      title: 'El Contenedor Moderno: std::vector',
      notes: 'Introducir std::vector como la forma preferida de manejar arreglos en C++ moderno.',
      contentHtml: `
        <h3 class="text-xl font-bold text-blue-700 mb-4">El Camino de C++ Moderno: <code>std::vector</code></h3>
        <p class="text-gray-600 mb-4">Aunque los arreglos primitivos existen, la forma estándar y más segura de trabajar es con <code>std::vector</code> de la librería <code>&lt;vector&gt;</code>.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
             <h5 class="font-bold text-blue-900">Ventajas de <code>std::vector</code></h5>
             <ul class="list-disc list-inside mt-2 space-y-1 text-sm text-blue-800">
               <li><strong>Tamaño dinámico:</strong> Crece y decrece automáticamente.</li>
               <li><strong>Seguridad:</strong> Puede verificar límites con <code>.at()</code>.</li>
               <li><strong>Funciones útiles:</strong> <code>.push_back()</code>, <code>.pop_back()</code>, <code>.size()</code>, <code>.clear()</code>, etc.</li>
               <li>Gestiona su propia memoria.</li>
             </ul>
          </div>
          <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <pre><code class="language-cpp">
#include &lt;vector&gt;
#include &lt;iostream&gt;

int main() {
    std::vector&lt;int&gt; notas; // Tamaño 0 al inicio

    notas.push_back(18); // Añade al final -> {18}
    notas.push_back(20); // -> {18, 20}
    notas.push_back(15); // -> {18, 20, 15}

    std::cout &lt;&lt; "La nota en el índice 1 es: " &lt;&lt; notas[1]; // 20
    
    // Acceso seguro
    // std::cout &lt;&lt; notas.at(5); // Lanzaría una excepción

    std::cout &lt;&lt; "El tamaño es: " &lt;&lt; notas.size(); // 3
    return 0;
}
            </code></pre>
          </div>
        </div>
      `
    },
    {
      id: 'p4-3-python-list',
      title: 'El "Arreglo" de Python: La Lista',
      notes: 'Presentar la lista de Python como el equivalente súper flexible.',
      contentHtml: `
        <h3 class="text-xl font-bold text-green-700 mb-4">Python lo hace simple: <code>list</code></h3>
        <p class="text-gray-600 mb-4">En Python, la estructura de datos más parecida a un arreglo es la <strong>lista</strong>. Son extremadamente flexibles.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
             <h5 class="font-bold text-green-900">Características de la Lista de Python</h5>
             <ul class="list-disc list-inside mt-2 space-y-1 text-sm text-green-800">
               <li><strong>Totalmente dinámica:</strong> Crece, decrece, inserta, elimina.</li>
               <li><strong>Tipos mixtos:</strong> Puede contener enteros, strings, objetos, etc., a la vez.</li>
               <li><strong>Funciones muy ricas:</strong> <code>.append()</code>, <code>.pop()</code>, <code>.sort()</code>, slicing (<code>[:]</code>), etc.</li>
               <li>Gestiona toda la memoria por ti.</li>
             </ul>
          </div>
          <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <pre><code class="language-python">
# Creación de una lista
notas = [18, 20, 15]

# Añadir un elemento
notas.append(12) # -> [18, 20, 15, 12]

# Acceso
print(f"La nota en el índice 2 es: {notas[2]}") # 15

# Slicing
ultimos_dos = notas[2:] # -> [15, 12]

# Tipos mixtos
mixta = [1, "hola", True, 3.14]
print(mixta)
            </code></pre>
          </div>
        </div>
      `
    },
    {
      id: 'p4-4-matrices',
      title: 'Matrices (Arreglos Bidimensionales)',
      notes: 'Cómo representar tablas de datos. Ejemplo en C++ y Python.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Representando Tablas: Matrices</h3>
        <p class="text-gray-600 mb-4">Una matriz no es más que un "arreglo de arreglos", ideal para representar datos en 2D como tableros, imágenes o tablas.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
             <h5 class="text-gray-400 mb-2">// Matriz 3x2 en C++ (con std::vector)</h5>
            <pre><code class="language-cpp">
std::vector&lt;std::vector&lt;int&gt;&gt; matriz = {
    {1, 2},
    {3, 4},
    {5, 6}
};

// Acceder al elemento en fila 1, columna 0
int valor = matriz[1][0]; // valor = 3

// Recorrer la matriz
for (int i = 0; i < matriz.size(); ++i) {
    for (int j = 0; j < matriz[i].size(); ++j) {
        std::cout << matriz[i][j] << " ";
    }
    std::cout << std::endl;
}
            </code></pre>
          </div>
          <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <h5 class="text-gray-400 mb-2"># Matriz 3x2 en Python (con listas anidadas)</h5>
            <pre><code class="language-python">
matriz = [
    [1, 2],
    [3, 4],
    [5, 6]
]

# Acceder al elemento en fila 1, columna 0
valor = matriz[1][0] # valor = 3

# Recorrer la matriz
for fila in matriz:
    for valor in fila:
        print(valor, end=' ')
    print()
            </code></pre>
          </div>
        </div>
      `
    },
    {
      id: 'p4-5-linear-search',
      title: 'Algoritmo: Búsqueda Lineal',
      notes: 'El algoritmo de búsqueda más simple. Explicar complejidad.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Buscando un Elemento: Búsqueda Lineal</h3>
        <p class="text-gray-600 mb-4">Es el método más simple: recorrer el arreglo elemento por elemento desde el inicio hasta encontrar el valor buscado o llegar al final.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="prose">
            <h5>Características</h5>
            <ul>
              <li>Funciona en arreglos <strong>ordenados y desordenados</strong>.</li>
              <li>Fácil de implementar.</li>
              <li><strong>Complejidad Temporal:</strong> O(N). En el peor caso, hay que recorrer todo el arreglo.</li>
            </ul>
          </div>
          <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <h5 class="text-gray-400 mb-2"># Pseudocódigo de Búsqueda Lineal</h5>
            <pre><code>
FUNCIÓN busqueda_lineal(arreglo, valor_buscado):
  PARA cada elemento en el arreglo:
    SI elemento == valor_buscado:
      DEVOLVER "Encontrado en la posición" + indice_actual
  
  DEVOLVER "No encontrado"
            </code></pre>
          </div>
        </div>
      `
    },
    {
      id: 'p4-6-binary-search',
      title: 'Algoritmo: Búsqueda Binaria',
      notes: 'Un algoritmo mucho más eficiente, pero con un prerrequisito clave.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Una Búsqueda Inteligente: Búsqueda Binaria</h3>
        <p class="text-gray-600 mb-4">Este método divide repetidamente el arreglo a la mitad para encontrar el valor. Es extremadamente rápido.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="prose">
            <h5>Características</h5>
            <ul>
              <li><strong>REQUISITO:</strong> El arreglo <strong>DEBE</strong> estar ordenado.</li>
              <li>Compara el valor buscado con el elemento del medio. Si es mayor, busca en la mitad derecha; si es menor, en la izquierda.</li>
              <li><strong>Complejidad Temporal:</strong> O(log N). Mucho más eficiente que O(N) para arreglos grandes.</li>
            </ul>
          </div>
          <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <h5 class="text-gray-400 mb-2"># Pseudocódigo de Búsqueda Binaria</h5>
            <pre><code>
FUNCIÓN busqueda_binaria(arreglo_ordenado, valor_buscado):
  inicio = 0
  fin = longitud(arreglo_ordenado) - 1

  MIENTRAS inicio <= fin:
    medio = (inicio + fin) / 2
    SI arreglo_ordenado[medio] == valor_buscado:
      DEVOLVER "Encontrado en la posición " + medio
    SINO SI arreglo_ordenado[medio] < valor_buscado:
      inicio = medio + 1 // Buscar en la mitad derecha
    SINO:
      fin = medio - 1 // Buscar en la mitad izquierda
      
  DEVOLVER "No encontrado"
            </code></pre>
          </div>
        </div>
      `
    },
    {
      id: 'p4-7-bubble-sort',
      title: 'Algoritmo: Ordenamiento Burbuja',
      notes: 'El algoritmo de ordenamiento más simple de entender y visualizar.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Ordenando Elementos: Método de la Burbuja</h3>
        <p class="text-gray-600 mb-4">Compara repetidamente pares de elementos adyacentes y los intercambia si están en el orden incorrecto. Los elementos más grandes "burbujean" hacia el final del arreglo.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="prose">
            <h5>Características</h5>
            <ul>
              <li>Fácil de implementar y entender.</li>
              <li><strong>Muy ineficiente</strong> para la mayoría de los casos.</li>
              <li><strong>Complejidad Temporal:</strong> O(N²). No es práctico para arreglos grandes.</li>
            </ul>
          </div>
          <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <h5 class="text-gray-400 mb-2"># Pseudocódigo de Ordenamiento Burbuja</h5>
            <pre><code>
FUNCIÓN ordenamiento_burbuja(arreglo):
  n = longitud(arreglo)
  PARA i DESDE 0 HASTA n-1:
    PARA j DESDE 0 HASTA n-i-2:
      SI arreglo[j] > arreglo[j+1]:
        intercambiar(arreglo[j], arreglo[j+1])
            </code></pre>
          </div>
        </div>
      `
    },
    {
      id: 'p4-8-bank',
      title: 'Banco de Ejercicios',
      notes: 'Ejercicios rápidos para practicar en clase.',
      contentHtml: `
        <div class="space-y-4 max-h-96 overflow-y-auto pr-2">
            <details class="group border rounded-lg bg-white shadow-sm">
              <summary class="cursor-pointer p-3 font-bold text-slate-800 flex justify-between">1. Suma y Promedio (C++) <span class="text-xs bg-green-100 px-2 py-1 rounded">Fácil</span></summary>
              <div class="p-3 border-t bg-slate-50 text-xs"><p>Dado un <code>std::vector&lt;int&gt;</code>, calcula la suma y el promedio de sus elementos.</p></div>
            </details>
            <details class="group border rounded-lg bg-white shadow-sm">
              <summary class="cursor-pointer p-3 font-bold text-slate-800 flex justify-between">2. Encontrar el Máximo (Python) <span class="text-xs bg-green-100 px-2 py-1 rounded">Fácil</span></summary>
              <div class="p-3 border-t bg-slate-50 text-xs"><p>Dada una lista de números, encuentra el valor más grande. Pista: <code>max()</code> o un bucle manual.</p></div>
            </details>
             <details class="group border rounded-lg bg-white shadow-sm">
              <summary class="cursor-pointer p-3 font-bold text-slate-800 flex justify-between">3. Invertir un Arreglo (C++) <span class="text-xs bg-yellow-100 px-2 py-1 rounded">Medio</span></summary>
              <div class="p-3 border-t bg-slate-50 text-xs"><p>Invierte los elementos de un <code>std::vector</code> en el lugar (sin crear un segundo vector). Pista: usa dos punteros/índices, uno al inicio y otro al final.</p></div>
            </details>
            <details class="group border rounded-lg bg-white shadow-sm">
              <summary class="cursor-pointer p-3 font-bold text-slate-800 flex justify-between">4. Comprobar Palíndromo (Python) <span class="text-xs bg-yellow-100 px-2 py-1 rounded">Medio</span></summary>
              <div class="p-3 border-t bg-slate-50 text-xs"><p>Dada una palabra (string), comprueba si es un palíndromo. Pista: el slicing <code>[::-1]</code> puede ser útil.</p></div>
            </details>
            <details class="group border rounded-lg bg-white shadow-sm">
              <summary class="cursor-pointer p-3 font-bold text-slate-800 flex justify-between">5. Suma de Diagonal de Matriz (C++/Python) <span class="text-xs bg-red-100 px-2 py-1 rounded">Difícil</span></summary>
              <div class="p-3 border-t bg-slate-50 text-xs"><p>Dada una matriz cuadrada, calcula la suma de los elementos de la diagonal principal (donde <code>i == j</code>).</p></div>
            </details>
        </div>
      `
    },
    {
      id: 'p4-9-code-practice',
      title: 'Práctica: A Programar',
      notes: 'Ejercicio para implementar un algoritmo de búsqueda.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Ejercicio: Implementar Búsqueda Binaria</h3>
        <p class="text-gray-600 mb-4">Escribe una función en C++ y/o Python que implemente el algoritmo de <strong>Búsqueda Binaria</strong>.</p>
        <ol class="list-decimal pl-5 space-y-2 text-gray-700 mb-4">
          <li>La función debe recibir un <strong>arreglo/lista ordenada</strong> y un valor a buscar.</li>
          <li>Debe devolver el <strong>índice</strong> del elemento si lo encuentra.</li>
          <li>Debe devolver <strong>-1</strong> (o <code>None</code> en Python) si no lo encuentra.</li>
          <li>Prueba tu función con un arreglo de ejemplo y busca un valor que exista y otro que no.</li>
        </ol>
        <p class="text-sm text-gray-500"><b>Reto extra (C++):</b> Usa plantillas (templates) para que tu función de búsqueda binaria funcione con cualquier tipo de dato (<code>int</code>, <code>float</code>, <code>double</code>, etc.).</p>
      `
    },
    {
      id: 'p4-end-questions',
      title: '¿Preguntas?',
      notes: 'Espacio para dudas.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full">
          <h3 class="text-2xl font-bold text-slate-900 mb-4">¿Dudas sobre Arreglos, Vectores, Listas, Búsqueda u Ordenamiento?</h3>
        </div>
      `
    },
    {
      id: 'p4-end-thanks',
      title: 'Gracias y Próxima Clase',
      notes: 'Cierre y adelanto.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center">
          <h2 class="text-3xl font-bold text-slate-900 mb-4">Fin del Módulo 4</h2>
          <p class="text-gray-600 text-lg">Ahora que dominamos los arreglos, estamos listos para explorar estructuras de datos más complejas y flexibles. En la próxima clase: <b>Listas Enlazadas</b>.</p>
        </div>
      `
    }
  ]
}
