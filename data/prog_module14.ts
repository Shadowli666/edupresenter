import { Module } from '../types';

export const PROG_MODULE_14: Module = {
  id: 'prog-mod-14',
  title: '14. Recorridos de Árboles',
  description: 'Análisis de la estructura de árbol y sus recorridos: preorden, inorden y postorden.',
  evaluation: '20% - Guía de Ejercicios',
  slides: [
    {
      id: 'p14-1',
      title: 'Repaso: Estrategias de Recorrido',
      notes: 'Recordar los recorridos DFS y presentar formalmente BFS.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Formas de Explorar un Árbol</h3>
        <p class="text-gray-600 mb-6">En la clase anterior vimos los recorridos por profundidad. Hoy exploraremos una estrategia diferente y profundizaremos en sus implementaciones y usos.</p>
        <div class="grid md:grid-cols-2 gap-6 text-center">
          <div class="bg-white p-4 border rounded-lg shadow-sm">
            <h5 class="font-bold text-purple-700">Búsqueda por Profundidad (DFS)</h5>
            <p class="text-sm text-gray-600 mt-2">Intenta ir lo más profundo posible por una rama antes de retroceder. Usa una Pila (implícita en la recursión).</p>
            <p class="font-mono text-xs mt-2">Pre-orden, In-orden, Post-orden</p>
          </div>
          <div class="bg-white p-4 border rounded-lg shadow-sm">
            <h5 class="font-bold text-sky-700">Búsqueda por Anchura (BFS)</h5>
            <p class="text-sm text-gray-600 mt-2">Explora todos los nodos de un nivel antes de pasar al siguiente. Usa una Cola.</p>
            <p class="font-mono text-xs mt-2">Recorrido por Niveles</p>
          </div>
        </div>
      `
    },
    {
      id: 'p14-2',
      title: 'Aplicaciones Prácticas de los Recorridos',
      notes: 'Conectar cada recorrido con un caso de uso real.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Cada Recorrido Tiene su Propósito</h3>
        <ul class="space-y-3">
            <li class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded"><strong>Pre-orden (Raíz-Izq-Der):</strong> Ideal para <strong>copiar un árbol</strong>. Al leer un nodo, lo creas, y luego llamas recursivamente para sus hijos.</li>
            <li class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded"><strong>In-orden (Izq-Raíz-Der):</strong> Su uso estrella es en los <strong>Árboles Binarios de Búsqueda (BST)</strong>, ya que devuelve los elementos en <strong>orden ascendente</strong>.</li>
            <li class="p-3 bg-red-50 border-l-4 border-red-500 rounded"><strong>Post-orden (Izq-Der-Raíz):</strong> Perfecto para <strong>eliminar un árbol</strong>. Se eliminan los hijos antes de eliminar al padre, evitando dejar punteros huérfanos.</li>
            <li class="p-3 bg-sky-50 border-l-4 border-sky-500 rounded"><strong>Por Niveles (BFS):</strong> Se usa para encontrar el <strong>camino más corto</strong> entre dos nodos en un árbol no ponderado.</li>
        </ul>
      `
    },
    {
      id: 'p14-3-bfs',
      title: 'Recorrido por Anchura (BFS)',
      notes: 'Explicar el algoritmo de BFS con una cola.',
      contentHtml: `
        <h3 class="text-xl font-bold text-sky-700 mb-4">BFS: Recorrido por Niveles</h3>
        <p class="text-gray-600 mb-4">Este algoritmo explora el árbol nivel por nivel, usando una Cola para llevar un registro de los nodos que debe visitar.</p>
        <div class="grid md:grid-cols-2 gap-6 items-center">
            <ol class="list-decimal pl-5 text-sm space-y-2">
                <li>Crear una cola y encolar el nodo raíz.</li>
                <li>Mientras la cola no esté vacía:
                    <ol class="list-alpha pl-4">
                        <li>Hacer <strong>dequeue</strong> para obtener el nodo actual.</li>
                        <li>"Visitar" el nodo actual (ej. imprimir su valor).</li>
                        <li>Si tiene hijo izquierdo, hacer <strong>enqueue</strong>.</li>
                        <li>Si tiene hijo derecho, hacer <strong>enqueue</strong>.</li>
                    </ol>
                </li>
            </ol>
            <div class="bg-white p-2 border rounded-lg flex justify-center"><div class="mermaid">
                graph TD; A(1)-->B(2); A-->C(3); B-->D(4); B-->E(5);
            </div></div>
        </div>
        <p class="text-center font-mono mt-4 bg-gray-100 p-2 rounded">Salida BFS: <strong>1 2 3 4 5</strong></p>
      `
    },
    {
      id: 'p14-4-bfs-code',
      title: 'Práctica: Implementación de BFS',
      notes: 'Mostrar código para BFS en C++ y Python.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">BFS en Código</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <h5 class="text-gray-400 mb-2">// C++ con std::queue</h5>
            <pre><code class="language-cpp">
void bfs(NodoArbol* raiz) {
    if (raiz == nullptr) return;
    std::queue&lt;NodoArbol*&gt; cola;
    cola.push(raiz);

    while (!cola.empty()) {
        NodoArbol* actual = cola.front();
        cola.pop();
        std::cout << actual->dato << " ";

        if (actual->izquierdo) cola.push(actual->izquierdo);
        if (actual->derecho) cola.push(actual->derecho);
    }
}
            </code></pre>
          </div>
          <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <h5 class="text-gray-400 mb-2"># Python con collections.deque</h5>
            <pre><code class="language-python">
from collections import deque

def bfs(raiz):
    if not raiz: return
    cola = deque([raiz])

    while cola:
        actual = cola.popleft()
        print(actual.dato, end=' ')

        if actual.izquierdo:
            cola.append(actual.izquierdo)
        if actual.derecho:
            cola.append(actual.derecho)
            </code></pre>
          </div>
        </div>
      `
    },
    {
      id: 'p14-5-iterative',
      title: 'El Límite de la Recursión',
      notes: 'Motivar la necesidad de recorridos iterativos.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">¿Por Qué No Usar Siempre Recursión?</h3>
        <p class="text-gray-600 mb-4">Los recorridos recursivos son elegantes y fáciles de escribir, pero tienen un costo oculto: cada llamada a función consume memoria en el <strong>Call Stack</strong>.</p>
        <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <strong class="text-red-800">Problema:</strong> En un árbol muy profundo o desbalanceado (básicamente una lista enlazada), la recursión puede anidarse tantas veces que desborda la memoria del Call Stack, causando un error de <strong>Stack Overflow</strong>.
        </div>
        <p class="text-gray-600 mt-4">La solución es implementar los recorridos de forma <strong>iterativa</strong>, usando nuestra propia pila explícita para simular la recursión.</p>
      `
    },
    {
      id: 'p14-6-iterative-inorder',
      title: 'Práctica: In-orden Iterativo',
      notes: 'Mostrar el código de un recorrido iterativo, un problema común de entrevistas.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">In-orden Iterativo con una Pila</h3>
        <p class="text-gray-600 mb-4">El algoritmo simula la recursión: va a la izquierda todo lo que puede apilando los nodos, luego desapila, visita, y se mueve a la derecha.</p>
        <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
              <h5 class="text-gray-400 mb-2">// C++</h5>
              <pre><code class="language-cpp">
void inorden_iter(NodoArbol* raiz) {
    std::stack&lt;NodoArbol*&gt; pila;
    NodoArbol* actual = raiz;

    while (actual != nullptr || !pila.empty()) {
        while (actual != nullptr) {
            pila.push(actual);
            actual = actual->izquierdo;
        }
        actual = pila.top();
        pila.pop();
        std::cout << actual->dato << " ";
        actual = actual->derecho;
    }
}
              </code></pre>
            </div>
            <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
              <h5 class="text-gray-400 mb-2"># Python</h5>
              <pre><code class="language-python">
def inorden_iter(raiz):
    pila = []
    actual = raiz

    while actual or pila:
        while actual:
            pila.append(actual)
            actual = actual.izquierdo
        
        actual = pila.pop()
        print(actual.dato, end=' ')
        actual = actual.derecho
              </code></pre>
            </div>
        </div>
      `
    },
    {
      id: 'p14-7-practice-reconstruct',
      title: 'Práctica Avanzada: Reconstruir un Árbol',
      notes: 'Un ejercicio clásico que requiere una profunda comprensión de los recorridos.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Ejercicio: De Recorridos a Árbol</h3>
        <p class="text-gray-600 mb-4">Un árbol binario puede ser reconstruido de forma única si se conocen sus recorridos <strong>In-orden</strong> y <strong>Pre-orden</strong> (o Post-orden).</p>
        <div class="bg-white border rounded-lg p-6">
          <h4 class="font-bold text-slate-800 mb-2">Algoritmo</h4>
          <ol class="text-sm list-decimal pl-5 text-gray-700 space-y-2">
              <li>El primer elemento del recorrido <strong>Pre-orden</strong> es siempre la <strong>raíz</strong> del árbol (o sub-árbol) actual.</li>
              <li>Encuentra esa raíz en el recorrido <strong>In-orden</strong>. Todos los elementos a su izquierda pertenecen al sub-árbol izquierdo, y todos a su derecha, al sub-árbol derecho.</li>
              <li>Usa esta información para dividir los arreglos de Pre-orden e In-orden y llama recursivamente para construir los sub-árboles izquierdo y derecho.</li>
          </ol>
          <p class="text-xs text-gray-500 mt-4">Este es un problema de entrevista común. ¡Intenta implementarlo!</p>
        </div>
      `
    },
    {
      id: 'p14-end-questions',
      title: '¿Preguntas?',
      notes: 'Espacio para dudas.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full">
          <h3 class="text-2xl font-bold text-slate-900 mb-4">¿Dudas sobre BFS, Recorridos Iterativos o Reconstrucción?</h3>
        </div>
      `
    },
    {
      id: 'p14-end-thanks',
      title: 'Gracias y Próxima Clase',
      notes: 'Cierre y adelanto.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center">
          <h2 class="text-3xl font-bold text-slate-900 mb-4">Fin del Módulo 14</h2>
          <p class="text-gray-600 text-lg">Ahora que dominamos los recorridos, estamos listos para el tipo de árbol más famoso: el <b>Árbol Binario de Búsqueda (BST)</b>.</p>
        </div>
      `
    }
  ]
}
