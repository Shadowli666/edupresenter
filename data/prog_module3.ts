
import { Module } from '../types';

export const PROG_MODULE_3: Module = {
  id: 'prog-mod-3',
  title: '3. Memoria Dinámica y Punteros',
  description: 'Gestión eficiente de la memoria y estructuras de referencia.',
  evaluation: '0% - Ejercicio Teórico/Práctico',
  slides: [
    {
      id: 'p3-1',
      title: 'Memoria Estática vs. Dinámica',
      notes: 'Establecer la diferencia fundamental entre Stack y Heap.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white border rounded-lg p-6">
            <h3 class="text-lg font-bold text-slate-800 mb-2">Memoria Estática (Stack)</h3>
            <p class="text-sm text-gray-600 mb-4">Reservada en <strong>tiempo de compilación</strong>. El tamaño es fijo y conocido.</p>
            <ul class="text-xs text-gray-500 space-y-2 mb-4">
              <li>- Rápida, organizada y gestionada automáticamente (LIFO).</li>
              <li>- Limitada en tamaño.</li>
              <li>- Ideal para variables locales de funciones.</li>
              <li>- <strong>Ejemplo en C++:</strong> <code>int mi_array[100];</code></li>
            </ul>
          </div>

          <div class="bg-white border border-blue-200 rounded-lg p-6">
            <h3 class="text-lg font-bold text-blue-800 mb-2">Memoria Dinámica (Heap)</h3>
            <p class="text-sm text-gray-600 mb-4">Reservada en <strong>tiempo de ejecución</strong>. Flexible y de gran tamaño.</p>
            <ul class="text-xs text-gray-500 space-y-2 mb-4">
              <li>- Más lenta que el Stack.</li>
              <li>- No tiene una organización predefinida.</li>
              <li>- <strong>Debe ser gestionada manualmente en C++.</strong></li>
              <li>- <strong>Ejemplo en C++:</strong> <code>int* mi_array_dinamico = new int[N];</code></li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'p3-2',
      title: 'Punteros: El Mapa de la Memoria',
      notes: 'Introducción visual al concepto de puntero como una dirección.',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
            <h3 class="text-xl font-bold text-purple-900">¿Qué es un puntero?</h3>
            <p class="text-purple-800 mt-2">Es una variable que almacena la <strong>dirección de memoria</strong> de otra variable.</p>
          </div>
          <div class="flex flex-col items-center py-4">
            <div class="flex gap-8 items-center">
              <div class="text-center">
                <p class="text-xs text-gray-500 mb-1">Dirección: 0x7ffc...a1b4</p>
                <div class="w-24 h-24 border-2 bg-white flex items-center justify-center text-2xl font-bold rounded">42</div>
                <p class="font-mono mt-2">int edad;</p>
              </div>
              <div class="text-2xl text-gray-400">&larr;</div>
              <div class="text-center">
                <p class="text-xs text-gray-500 mb-1">Dirección: 0x7ffc...a1b8</p>
                <div class="w-28 h-24 border-2 border-purple-400 bg-purple-50 flex items-center justify-center text-sm font-mono font-bold text-purple-900 rounded">0x7ffc...a1b4</div>
                <p class="font-mono mt-2 text-purple-700">int* p_edad;</p>
              </div>
            </div>
          </div>
          <p class="text-sm text-gray-500 text-center italic">"El puntero <code>p_edad</code> sabe dónde vive la variable <code>edad</code>."</p>
        </div>
      `
    },
    {
      id: 'p3-3-cpp-ops',
      title: 'Operadores de Punteros en C++',
      notes: 'Sintaxis fundamental: & (dirección de) y * (contenido de).',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">La Sintaxis Clave en C++</h3>
        <div class="space-y-4">
          <div class="bg-white p-4 border rounded-lg">
            <h4 class="font-mono font-bold text-blue-700 text-lg">Operador & (Address-of)</h4>
            <p class="text-sm text-gray-600">Obtiene la dirección de memoria de una variable.</p>
            <div class="bg-gray-800 text-white p-2 rounded mt-2 font-mono text-xs overflow-x-auto">
              <pre><code class="language-cpp">int edad = 42;
int* p_edad = &edad; // p_edad ahora contiene la dirección de 'edad'</code></pre>
            </div>
          </div>
          <div class="bg-white p-4 border rounded-lg">
            <h4 class="font-mono font-bold text-purple-700 text-lg">Operador * (Dereferencia)</h4>
            <p class="text-sm text-gray-600">Accede al <strong>valor</strong> almacenado en la dirección a la que apunta el puntero.</p>
            <div class="bg-gray-800 text-white p-2 rounded mt-2 font-mono text-xs overflow-x-auto">
              <pre><code class="language-cpp">std::cout &lt;&lt; *p_edad; // Imprime 42
*p_edad = 25; // Cambia el valor de 'edad' a 25</code></pre>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'p3-4-cpp-action',
      title: 'Práctica: Punteros en Acción (C++)',
      notes: 'Un ejemplo completo que une los conceptos.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Ejemplo Completo en C++</h3>
        <p class="text-gray-600 mb-4">Observa cómo un puntero puede leer y modificar una variable.</p>
        <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
          <pre><code class="language-cpp">
#include &lt;iostream&gt;

int main() {
    int numero = 10;
    int* p_numero = &numero; // p_numero apunta a 'numero'

    std::cout &lt;&lt; "Valor original: " &lt;&lt; numero &lt;&lt; std::endl;
    std::cout &lt;&lt; "Valor a través del puntero: " &lt;&lt; *p_numero &lt;&lt; std::endl;

    // Modificamos el valor usando el puntero
    *p_numero = 99;

    std::cout &lt;&lt; "Valor después de modificar con el puntero: " &lt;&lt; numero &lt;&lt; std::endl;

    return 0;
}
// Salida:
// Valor original: 10
// Valor a través del puntero: 10
// Valor después de modificar con el puntero: 99
          </code></pre>
        </div>
      `
    },
    {
      id: 'p3-5-cpp-new-delete',
      title: 'Práctica: Memoria Dinámica (C++)',
      notes: 'Introducir new y delete para un solo elemento.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4"><code>new</code> y <code>delete</code>: El Poder y la Responsabilidad</h3>
        <p class="text-gray-600 mb-4">Así pedimos y liberamos memoria en el Heap para una sola variable.</p>
        <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
          <pre><code class="language-cpp">
// 1. Pedimos memoria para un entero en el Heap.
int* p_dinamico = new int;

// 2. Usamos esa memoria.
*p_dinamico = 75;
std::cout &lt;&lt; "Valor dinámico: " &lt;&lt; *p_dinamico &lt;&lt; std::endl;

// 3. ¡CRUCIAL! Liberamos la memoria cuando ya no la necesitamos.
delete p_dinamico;

// El puntero ahora es un "dangling pointer" (apunta a memoria liberada).
// Es buena práctica asignarlo a nullptr para evitar errores.
p_dinamico = nullptr;
          </code></pre>
        </div>
      `
    },
    {
      id: 'p3-6-cpp-dyn-array',
      title: 'Práctica: Arreglos Dinámicos (C++)',
      notes: 'Mostrar new[] y delete[], la forma de manejar arreglos de tamaño variable.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Arreglos de Tamaño Variable</h3>
        <p class="text-gray-600 mb-4">La principal ventaja de la memoria dinámica: crear arreglos cuyo tamaño se conoce en tiempo de ejecución.</p>
        <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
          <pre><code class="language-cpp">
int N;
std::cout &lt;&lt; "Introduce el tamaño del arreglo: ";
std::cin &gt;&gt; N;

// 1. Pedimos memoria para N enteros.
int* arreglo_dinamico = new int[N];

// 2. Usamos el arreglo.
for (int i = 0; i &lt; N; ++i) {
    arreglo_dinamico[i] = i * 10;
}

// 3. ¡CRUCIAL! Usamos delete[] para liberar arreglos.
delete[] arreglo_dinamico;
arreglo_dinamico = nullptr;
          </code></pre>
        </div>
      `
    },
    {
      id: 'p3-7-memory-leak',
      title: 'El Peligro: Fugas de Memoria',
      notes: 'Concepto crítico. Mostrar un ejemplo claro de un memory leak.',
      contentHtml: `
        <h3 class="text-xl font-bold text-red-700 mb-4">¿Qué es una Fuga de Memoria (Memory Leak)?</h3>
        <p class="text-gray-600 mb-4">Ocurre cuando se solicita memoria en el Heap (con <code>new</code>) pero nunca se libera (con <code>delete</code>). El programa "pierde" esa memoria y no puede volver a usarla.</p>
        <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
          <pre><code class="language-cpp">
// Ejemplo de fuga de memoria en un bucle
void funcion_con_fuga() {
    // En cada llamada, reservamos 4 bytes que NUNCA se liberan.
    int* p_numero = new int; 
    *p_numero = 5;
    
    // ERROR: Deberíamos llamar a 'delete p_numero;' aquí.
}

int main() {
    for (int i = 0; i < 1000000; ++i) {
        funcion_con_fuga(); // Llamamos 1 millón de veces
    }
    // ¡Hemos perdido aprox. 4MB de memoria!
    return 0;
}
          </code></pre>
        </div>
      `
    },
    {
      id: 'p3-8-python-world',
      title: 'El Mundo sin Punteros: Memoria en Python',
      notes: 'Mostrar el contraste con Python, donde la gestión es automática.',
      contentHtml: `
        <h3 class="text-xl font-bold text-green-700 mb-4">¿Y cómo lo hace Python?</h3>
        <p class="text-gray-600 mb-4">Python abstrae la gestión manual de memoria. No usamos punteros, sino <strong>referencias</strong>. El <strong>Recolector de Basura (Garbage Collector)</strong> se encarga de liberar la memoria automáticamente.</p>
        <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
          <pre><code class="language-python">
# En Python, las variables son 'nombres' que apuntan a objetos.
# Esto es conceptualmente similar a un puntero, pero gestionado por Python.
x = [10, 20] # Python reserva memoria para una lista
y = x        # 'y' ahora referencia al MISMO objeto lista que 'x'

y.append(30)

print(x) # Salida: [10, 20, 30]

# No hay 'delete'. El Garbage Collector liberará la memoria
# cuando el objeto lista ya no tenga ninguna referencia apuntándolo.
          </code></pre>
        </div>
      `
    },
    {
      id: 'p3-9-conceptual-practice',
      title: 'Práctica: ¿Estático o Dinámico?',
      notes: 'Ejercicio rápido para afianzar cuándo usar cada tipo de memoria.',
      contentHtml: `
         <div class="bg-white border p-6 rounded shadow-sm">
             <h4 class="font-bold text-slate-800 mb-4">Ejercicio Conceptual</h4>
             <p class="text-sm text-gray-600 mb-4">Para cada caso, decide si la estructura de datos principal debería usar memoria estática o dinámica.</p>
             <ul class="text-sm list-disc pl-5 space-y-3">
              <li>Guardar los nombres de los 7 días de la semana. <span class="text-green-600 font-bold ml-2">(Estática)</span></li>
              <li>Almacenar la lista de amigos de un usuario en una red social. <span class="text-blue-600 font-bold ml-2">(Dinámica)</span></li>
              <li>Un buffer para leer los bytes de un archivo de imagen (cuyo tamaño se conoce tras abrirlo). <span class="text-blue-600 font-bold ml-2">(Dinámica)</span></li>
              <li>Una matriz 8x8 para un tablero de ajedrez. <span class="text-green-600 font-bold ml-2">(Estática)</span></li>
             </ul>
        </div>
      `
    },
    {
      id: 'p3-10-code-practice',
      title: 'Práctica: A Programar (C++)',
      notes: 'Ejercicio de programación para aplicar new[] y delete[].',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Ejercicio: Promedio de Calificaciones</h3>
        <p class="text-gray-600 mb-4">Escribe un programa en C++ que:</p>
        <ol class="list-decimal pl-5 space-y-2 text-gray-700 mb-4">
          <li>Pregunte al usuario cuántas calificaciones va a introducir.</li>
          <li>Cree un arreglo dinámico de tipo <code>float</code> de ese tamaño.</li>
          <li>Pida al usuario que introduzca cada una de las calificaciones.</li>
          <li>Calcule y muestre el promedio de las calificaciones.</li>
          <li><strong>Libere la memoria</strong> usada por el arreglo dinámico.</li>
        </ol>
        <p class="text-sm text-gray-500"><b>Reto extra:</b> Después de liberar la memoria, asigna <code>nullptr</code> al puntero y comprueba si es nulo antes de intentar usarlo de nuevo (para demostrar la seguridad).</p>
      `
    },
    {
      id: 'p3-end-questions',
      title: '¿Preguntas?',
      notes: 'Este tema genera muchas dudas. Dejar tiempo suficiente.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full">
          <h3 class="text-2xl font-bold text-slate-900 mb-4">¿Dudas sobre Punteros, <code>new</code>, <code>delete</code> o Fugas de Memoria?</h3>
        </div>
      `
    },
    {
      id: 'p3-end-thanks',
      title: 'Gracias y Próxima Clase',
      notes: 'Cierre y adelanto del siguiente tema.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center">
          <h2 class="text-3xl font-bold text-slate-900 mb-4">Fin del Módulo 3</h2>
          <p class="text-gray-600 text-lg">Hemos sentado las bases del manejo de memoria. En la próxima clase, usaremos punteros y memoria dinámica para construir nuestra primera <b>Estructura de Datos Dinámica: La Lista Enlazada</b>.</p>
        </div>
      `
    }
  ]
}
