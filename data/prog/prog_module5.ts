
import { Module } from '../../types';

export const PROG_MODULE_5: Module = {
  id: 'prog-mod-5',
  title: '5. Listas Enlazadas Simples',
  description: 'Estructuras dinámicas lineales: Definición, Nodos y Operaciones Básicas.',
  evaluation: '20% - Prueba Escrita',
  slides: [
    {
      id: 'p5-1',
      title: 'De Arreglos a Listas Enlazadas',
      notes: 'Motivar la necesidad de una estructura de datos dinámica más allá de std::vector.',
      contentHtml: `
        <div class="space-y-8">
          <div class="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
            <h3 class="text-xl font-bold text-indigo-900 mb-2">¿Por qué necesitamos algo más que arreglos?</h3>
            <p class="text-indigo-800">Los arreglos (y <code>std::vector</code>) son excelentes para acceso rápido por índice, pero <strong>insertar o eliminar elementos en el medio es costoso (O(N))</strong>, ya que requiere desplazar todos los elementos subsecuentes.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border-slate-200 text-sm shadow-sm">
             <h4 class="font-bold text-slate-800 mb-4 border-b pb-2">Lista Enlazada: Una Cadena de Nodos</h4>
             <p class="text-gray-600">Es una colección de <strong>Nodos</strong> donde cada nodo contiene datos y un <strong>puntero</strong> al siguiente nodo. No están contiguos en memoria.</p>
             <div class="grid md:grid-cols-2 gap-6 mt-4">
               <div>
                  <h5 class="font-bold text-green-700 mb-2">Ventajas</h5>
                  <ul class="list-disc pl-5 text-slate-600 space-y-1">
                    <li>Tamaño dinámico.</li>
                    <li>Inserción/eliminación rápida al principio (O(1)).</li>
                  </ul>
               </div>
               <div>
                  <h5 class="font-bold text-red-700 mb-2">Desventajas</h5>
                  <ul class="list-disc pl-5 text-slate-600 space-y-1">
                    <li>Acceso secuencial (O(N)) para encontrar un elemento.</li>
                    <li>Uso extra de memoria para los punteros.</li>
                  </ul>
               </div>
             </div>
          </div>
        </div>
      `
    },
    {
      id: 'p5-2',
      title: 'La Anatomía de un Nodo',
      notes: 'Visualizar el componente básico de una lista.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full">
            <div class="flex border-2 border-slate-800 rounded-lg bg-white shadow-[4px_4px_0px_0px_rgba(30,41,59,1)] overflow-hidden max-w-sm">
                <div class="p-6 bg-amber-50 border-r-2 border-slate-800 text-center"><span class="block text-xs uppercase font-bold">Dato</span><span class="text-3xl font-bold">15</span></div>
                <div class="p-6 bg-blue-50 text-center relative"><span class="block text-xs uppercase font-bold">Siguiente</span><span class="text-sm font-mono font-bold text-blue-600">0xAB1</span><div class="absolute w-3 h-3 bg-slate-800 rounded-full top-1/2 -right-1.5 -translate-y-1/2"></div></div>
            </div>
            <div class="flex gap-8 w-full mt-4 max-w-sm">
               <div class="flex-1 text-center text-xs text-gray-500">Información útil (entero, string, objeto, etc.).</div>
               <div class="flex-1 text-center text-xs text-gray-500">Dirección de memoria del siguiente nodo. Si es el último, apunta a <strong>NULL / None</strong>.</div>
            </div>
        </div>
      `
    },
    {
      id: 'p5-3',
      title: 'El Nodo en Código (C++ vs Python)',
      notes: 'Comparación directa de la implementación del nodo.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Definiendo el "Molde" para Nuestros Nodos</h3>
        <p class="text-gray-600 mb-6">En C++ usamos una <code>struct</code>, mientras que en Python usamos una <code>class</code>.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
            <h5 class="text-gray-400 mb-2">// C++ con struct y puntero</h5>
            <pre class="font-mono text-sm max-w-full overflow-x-auto"><code class="language-cpp">
struct Nodo {
    int dato;
    Nodo* siguiente;

    // Constructor para facilidad
    Nodo(int d) {
        dato = d;
        siguiente = nullptr;
    }
};
            </code></pre>
          </div>
          <div class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
            <h5 class="text-gray-400 mb-2"># Python con class y referencia</h5>
            <pre class="font-mono text-sm max-w-full overflow-x-auto"><code class="language-python">
class Nodo:
    def __init__(self, dato):
        self.dato = dato
        self.siguiente = None
            </code></pre>
          </div>
        </div>
      `
    },
    {
      id: 'p5-4-insert-head',
      title: 'Operación: Inserción al Inicio (O(1))',
      notes: 'La operación más eficiente de una lista enlazada.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">La Operación Estrella: Insertar al Inicio</h3>
        <p class="text-gray-600 mb-4">Esta es la operación más rápida y una de las grandes ventajas de las listas enlazadas. Solo requiere reasignar un par de punteros.</p>
        <ol class="list-decimal pl-5 text-sm space-y-2 mb-4">
          <li>Crear el nuevo nodo.</li>
          <li>Hacer que el puntero <code>siguiente</code> del nuevo nodo apunte a la cabeza (<code>head</code>) actual de la lista.</li>
          <li>Actualizar la cabeza de la lista para que ahora sea el nuevo nodo.</li>
        </ol>
          <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
          <h5 class="text-gray-400 mb-2">// Pseudocódigo</h5>
          <pre class="font-mono text-sm max-w-full overflow-x-auto"><code>
FUNCIÓN insertar_al_inicio(cabeza, valor):
  nuevo_nodo = crear_nodo(valor)
  nuevo_nodo.siguiente = cabeza
  cabeza = nuevo_nodo
  DEVOLVER cabeza
          </code></pre>
        </div>
      `
    },
    {
      id: 'p5-5-insert-tail',
      title: 'Operación: Inserción al Final (O(N))',
      notes: 'Operación común pero que requiere recorrer toda la lista.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Insertar al Final de la Cadena</h3>
        <p class="text-gray-600 mb-4">Para añadir un nodo al final, debemos recorrer la lista hasta encontrar el último nodo (el que apunta a <code>NULL/None</code>) y enlazarlo al nuevo.</p>
        <ol class="list-decimal pl-5 text-sm space-y-2 mb-4">
          <li>Crear el nuevo nodo.</li>
          <li>Si la lista está vacía, el nuevo nodo es la cabeza.</li>
          <li>Si no, usar un puntero auxiliar para recorrer la lista hasta el final.</li>
          <li>Enlazar el <code>siguiente</code> del último nodo al nuevo nodo.</li>
        </ol>
      <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
      <h5 class="text-gray-400 mb-2"># Python</h5>
      <pre class="font-mono text-sm max-w-full overflow-x-auto"><code class="language-python">
def insertar_al_final(self, dato):
    nuevo = Nodo(dato)
    if self.cabeza is None:
        self.cabeza = nuevo
        return
    
    ultimo = self.cabeza
    while ultimo.siguiente:
        ultimo = ultimo.siguiente
    
    ultimo.siguiente = nuevo
          </code></pre>
        </div>
      `
    },
    {
      id: 'p5-6-delete',
      title: 'Operación: Eliminar un Nodo',
      notes: 'La eliminación requiere cuidado con los punteros, especialmente el nodo anterior.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Eliminar un Eslabón de la Cadena</h3>
        <p class="text-gray-600 mb-4">Para eliminar un nodo con un valor específico, necesitamos encontrarlo y hacer que el nodo <strong>anterior</strong> apunte al <strong>siguiente</strong> del nodo a eliminar.</p>
        <ol class="list-decimal pl-5 text-sm space-y-2 mb-4">
          <li>Buscar el nodo a eliminar (<code>actual</code>) y mantener un puntero a su predecesor (<code>previo</code>).</li>
          <li>Caso especial: si el nodo a eliminar es la cabeza.</li>
          <li>Si se encuentra, hacer que <code>previo.siguiente</code> apunte a <code>actual.siguiente</code>.</li>
          <li>Liberar la memoria del nodo eliminado (en C++ con <code>delete</code>).</li>
        </ol>
        <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
          <h5 class="text-gray-400 mb-2">// Pseudocódigo para eliminar</h5>
          <pre class="font-mono text-sm max-w-full overflow-x-auto"><code>
// ... búsqueda para encontrar previo y actual ...
previo.siguiente = actual.siguiente
liberar_memoria(actual) // En C++: delete actual;
          </code></pre>
        </div>
      `
    },
    {
      id: 'p5-7-traverse',
      title: 'Operación: Recorrer la Lista',
      notes: 'Operación fundamental para leer o buscar.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Visitando Todos los Nodos</h3>
        <p class="text-gray-600 mb-4">Recorrer (traverse) la lista es la base para imprimirla, buscar un elemento o contar sus nodos. Se usa un puntero auxiliar que avanza de nodo en nodo.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
            <h5 class="text-gray-400 mb-2">// C++</h5>
            <pre class="font-mono text-sm max-w-full overflow-x-auto"><code class="language-cpp">
void mostrar(Nodo* cabeza) {
    Nodo* aux = cabeza;
    while (aux != nullptr) {
        std::cout << aux->dato << " -> ";
        aux = aux->siguiente;
    }
    std::cout << "NULL";
}
            </code></pre>
          </div>
          <div class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
            <h5 class="text-gray-400 mb-2"># Python</h5>
            <pre class="font-mono text-sm max-w-full overflow-x-auto"><code class="language-python">
def mostrar(self):
    actual = self.cabeza
    while actual:
        print(actual.dato, end=' -> ')
        actual = actual.siguiente
    print("None")
            </code></pre>
          </div>
        </div>
      `
    },
    {
      id: 'p5-8-class',
      title: 'Abstracción: La Clase ListaEnlazada',
      notes: 'Encapsular la lógica en una clase es una buena práctica.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Empaquetando la Lógica</h3>
        <p class="text-gray-600 mb-4">Es una buena práctica crear una clase que contenga la cabeza (<code>head</code>) y los métodos para manipular la lista (<code>insertar</code>, <code>eliminar</code>, <code>mostrar</code>, etc.).</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <h5 class="text-gray-400 mb-2">// C++ Class</h5>
            <pre><code class="language-cpp">
class ListaEnlazada {
private:
    Nodo* cabeza;

public:
    ListaEnlazada() {
        cabeza = nullptr;
    }
    // ~ListaEnlazada() { ... } // Destructor!
    void insertarInicio(int dato);
    void mostrar();
    // ... otros métodos
};
            </code></pre>
          </div>
          <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <h5 class="text-gray-400 mb-2"># Python Class</h5>
            <pre><code class="language-python">
class ListaEnlazada:
    def __init__(self):
        self.cabeza = None

    def insertar_inicio(self, dato):
        # ...
    
    def mostrar(self):
        # ...
            </code></pre>
          </div>
        </div>
      `
    },
    {
      id: 'p5-9-code-practice',
      title: 'Práctica: A Programar',
      notes: 'Ejercicio para implementar una función de búsqueda.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Ejercicio: Buscando un Tesoro</h3>
        <p class="text-gray-600 mb-4">Añade un método <code>buscar(valor)</code> a tu clase <code>ListaEnlazada</code> en C++ o Python.</p>
        <ul class="list-disc pl-5 space-y-2 text-gray-700 mb-4">
          <li>La función debe recorrer la lista.</li>
          <li>Si encuentra un nodo cuyo dato coincide con <code>valor</code>, debe devolver <code>true</code> (o el Nodo mismo).</li>
          <li>Si llega al final de la lista sin encontrar el valor, debe devolver <code>false</code>.</li>
        </ul>
        <p class="text-sm text-gray-500"><b>Reto extra:</b> Implementa una función <code>contar()</code> que devuelva el número total de nodos en la lista.</p>
      `
    },
    {
      id: 'p5-end-questions',
      title: '¿Preguntas?',
      notes: 'Espacio para dudas.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full">
          <h3 class="text-2xl font-bold text-slate-900 mb-4">¿Dudas sobre Nodos, Punteros o el Recorrido de la Lista?</h3>
        </div>
      `
    },
    {
      id: 'p5-end-thanks',
      title: 'Gracias y Próxima Clase',
      notes: 'Cierre y adelanto.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center">
          <h2 class="text-3xl font-bold text-slate-900 mb-4">Fin del Módulo 5</h2>
          <p class="text-gray-600 text-lg">Ahora que entendemos las listas simples, en la próxima clase exploraremos sus variantes: <b>Listas Doblemente Enlazadas y Listas Circulares</b>.</p>
        </div>
      `
    }
  ]
}
