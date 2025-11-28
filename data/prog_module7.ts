import { Module } from '../types';

export const PROG_MODULE_7: Module = {
  id: 'prog-mod-7',
  title: '7. Listas Enlazadas Avanzadas',
  description: 'Listas Doblemente Enlazadas y Listas Circulares.',
  evaluation: '0% - Ejercicio Práctico',
  slides: [
    {
      id: 'p7-1',
      title: 'Parte 1: Listas Doblemente Enlazadas',
      notes: 'Introducir la necesidad de un recorrido bidireccional.',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
            <h3 class="text-xl font-bold text-indigo-900 mb-2">Más Allá de la Lista Simple</h3>
            <p class="text-indigo-800">En una lista simple, solo podemos avanzar. ¿Y si necesitamos retroceder? La <strong>Lista Doblemente Enlazada</strong> resuelve esto añadiendo un puntero al nodo <strong>anterior</strong>.</p>
          </div>
          <div class="flex justify-center my-4 bg-white p-6 rounded-xl shadow-sm border">
            <div class="mermaid">
              graph LR
                H[Head] --> A(10)
                T[Tail] --> C(30)
                subgraph Lista
                  N1[null] <-.-> A <--> B <--> C <-.-> N2[null]
                end
                style N1 stroke-dasharray: 5 5
                style N2 stroke-dasharray: 5 5
            </div>
          </div>
          <p class="text-center text-sm text-gray-500">Cada nodo conoce a su vecino de adelante y de atrás.</p>
        </div>
      `
    },
    {
      id: 'p7-2-node',
      title: 'El Nodo Doble en Código',
      notes: 'Mostrar la estructura del nodo con puntero previo.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">La Estructura del Nodo Bidireccional</h3>
        <p class="text-gray-600 mb-6">La única diferencia es la adición de un puntero <code>anterior</code> o <code>prev</code>.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
            <h5 class="text-gray-400 mb-2">// C++</h5>
            <pre class="font-mono text-sm"><code class="language-cpp">
struct NodoDoble {
    int dato;
    NodoDoble* siguiente;
    NodoDoble* anterior; // El nuevo puntero

    NodoDoble(int d) : 
      dato(d), siguiente(nullptr), anterior(nullptr) {}
};
            </code></pre>
          </div>
          <div class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
            <h5 class="text-gray-400 mb-2"># Python</h5>
            <pre class="font-mono text-sm"><code class="language-python">
class NodoDoble:
    def __init__(self, dato):
        self.dato = dato
        self.siguiente = None
        self.anterior = None # El nuevo puntero
            </code></pre>
          </div>
        </div>
      `
    },
    {
      id: 'p7-3-insert',
      title: 'Operación: Inserción en Lista Doble',
      notes: 'Explicar la complejidad de re-enlazar 4 punteros.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">El Baile de los Cuatro Punteros</h3>
        <p class="text-gray-600 mb-4">Insertar un nodo (ej. <code>N</code>) entre <code>A</code> y <code>B</code> es más complejo. Implica actualizar <strong>4 enlaces</strong> para mantener la integridad de la lista.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <ol class="list-decimal pl-5 text-sm space-y-3">
            <li>El <code>siguiente</code> de <code>N</code> apunta a <code>B</code>.</li>
            <li>El <code>anterior</code> de <code>N</code> apunta a <code>A</code>.</li>
            <li>El <code>siguiente</code> de <code>A</code> ahora apunta a <code>N</code>.</li>
            <li>El <code>anterior</code> de <code>B</code> ahora apunta a <code>N</code>.</li>
          </ol>
          <div class="bg-white p-4 border rounded-lg flex items-center justify-center">
            <div class="mermaid">
                graph LR
                A <--> N <--> B
                style A fill:#eff6ff,stroke:#2563eb
                style B fill:#eff6ff,stroke:#2563eb
                style N fill:#dcfce7,stroke:#16a34a,stroke-width:2px
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'p7-4-delete',
      title: 'Operación: Eliminación en Lista Doble',
      notes: 'Mostrar la ventaja de poder eliminar sin buscar el previo.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Eliminación Eficiente</h3>
        <p class="text-gray-600 mb-4">Si tenemos un puntero al nodo que queremos eliminar (ej. <code>B</code>), la eliminación es O(1). No necesitamos buscar su nodo anterior.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <ol class="list-decimal pl-5 text-sm space-y-3">
            <li>Hacemos que el <code>siguiente</code> del nodo <code>A</code> apunte al nodo <code>C</code>. <br><code>A.siguiente = C</code></li>
            <li>Hacemos que el <code>anterior</code> del nodo <code>C</code> apunte al nodo <code>A</code>. <br><code>C.anterior = A</code></li>
            <li>Liberamos la memoria del nodo <code>B</code>.</li>
          </ol>
           <div class="bg-white p-4 border rounded-lg flex items-center justify-center">
            <div class="mermaid">
                graph LR
                A <--> C
                subgraph " "
                 B
                end
                style B fill:#fee2e2,stroke:#ef4444,stroke-dasharray: 5 5
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'p7-5-practice-double',
      title: 'Práctica: Recorrido Inverso',
      notes: 'Un ejercicio para practicar el uso del puntero "anterior".',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Ejercicio: De Fin a Inicio</h3>
        <p class="text-gray-600 mb-4">En una lista doblemente enlazada, es trivial recorrerla en orden inverso. Implementa una función <code>mostrarInverso()</code>.</p>
        <ul class="list-disc pl-5 space-y-2 text-gray-700 mb-4 text-sm">
          <li>Tu clase <code>ListaDoble</code> debería tener un puntero a la <code>cabeza</code> y a la <code>cola</code>.</li>
          <li>La función debe empezar en la <code>cola</code>.</li>
          <li>Debe usar el puntero <code>anterior</code> para moverse hacia la cabeza, imprimiendo el dato de cada nodo.</li>
          <li>El bucle termina cuando el puntero auxiliar sea <code>None/nullptr</code>.</li>
        </ul>
      `
    },
     {
      id: 'p7-6',
      title: 'Parte 2: Listas Circulares',
      notes: 'Introducir el concepto de ciclo.',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
            <h3 class="text-xl font-bold text-purple-900 mb-2">Dando Vueltas en Círculo</h3>
            <p class="text-purple-800">Una <strong>Lista Circular</strong> es una lista enlazada (simple o doble) donde el último nodo no apunta a <code>NULL</code>, sino que apunta de nuevo al <strong>primer nodo</strong>.</p>
          </div>
          <div class="flex justify-center my-4 bg-white p-6 rounded-xl shadow-sm border">
            <div class="mermaid">
               graph TD
                 A --> B --> C --> A
                 style A fill:#f3e8ff,stroke:#9333ea,stroke-width:2px
                 style B fill:#f3e8ff,stroke:#9333ea,stroke-width:2px
                 style C fill:#f3e8ff,stroke:#9333ea,stroke-width:2px
            </div>
          </div>
          <p class="text-center text-sm text-gray-500"><strong>Aplicaciones:</strong> Round-robin en sistemas operativos, turnos en juegos, playlists en bucle.</p>
        </div>
      `
    },
    {
      id: 'p7-7-traverse-circular',
      title: 'Operación: Recorrido en Círculo',
      notes: 'El bucle "do-while" es ideal aquí.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">¿Cómo Paramos de Dar Vueltas?</h3>
        <p class="text-gray-600 mb-4">Un bucle <code>while (aux != cabeza)</code> no funcionaría para el primer elemento. Un bucle <code>do-while</code> es perfecto para esto, ya que ejecuta el cuerpo al menos una vez antes de comprobar la condición.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
            <h5 class="text-gray-400 mb-2">// C++ con do-while</h5>
            <pre class="font-mono text-sm"><code class="language-cpp">
void mostrar(Nodo* cabeza) {
    if (!cabeza) return;
    Nodo* aux = cabeza;
    do {
        std::cout << aux->dato << " ";
        aux = aux->siguiente;
    } while (aux != cabeza);
}
            </code></pre>
          </div>
          <div class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
            <h5 class="text-gray-400 mb-2"># Python con while y break</h5>
            <pre class="font-mono text-sm"><code class="language-python">
def mostrar(self):
    if not self.cabeza:
        return
    actual = self.cabeza
    while True:
        print(actual.dato)
        actual = actual.siguiente
        if actual == self.cabeza:
            break
            </code></pre>
          </div>
        </div>
      `
    },
    {
      id: 'p7-8-practice-josephus',
      title: 'Práctica: El Problema de Josephus',
      notes: 'Un problema clásico y divertido para listas circulares.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Ejercicio: El Último Sobreviviente</h3>
        <div class="bg-white border rounded-lg p-6">
          <h4 class="font-bold text-slate-800 mb-2">El Problema de Josephus</h4>
          <p class="text-sm text-slate-600 mb-4">
            Hay <strong>N</strong> personas en un círculo, numeradas de 1 a N. Empezando por la persona 1, se cuenta hasta <strong>k</strong> y se elimina a esa persona. El proceso se repite con el siguiente, contando de nuevo hasta k, hasta que solo queda una persona.
          </p>
          <p class="font-bold text-sm mb-2">Tu Tarea:</p>
          <ul class="text-sm list-disc pl-5 text-gray-700">
              <li>Crea una lista enlazada circular con N nodos (de 1 a N).</li>
              <li>Implementa una función que reciba N y k, y devuelva el número del último sobreviviente.</li>
          </ul>
        </div>
      `
    },
    {
      id: 'p7-end-questions',
      title: '¿Preguntas?',
      notes: 'Espacio para dudas.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full">
          <h3 class="text-2xl font-bold text-slate-900 mb-4">¿Dudas sobre Punteros Dobles o Bucles Infinitos?</h3>
        </div>
      `
    },
    {
      id: 'p7-end-thanks',
      title: 'Gracias y Próxima Clase',
      notes: 'Cierre y adelanto.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center">
          <h2 class="text-3xl font-bold text-slate-900 mb-4">Fin del Módulo 7</h2>
          <p class="text-gray-600 text-lg">Con esto cerramos el tema de listas. En la próxima clase, exploraremos dos nuevas estructuras lineales: <b>Pilas (Stacks)</b> y <b>Colas (Queues)</b>.</p>
        </div>
      `
    }
  ]
}
