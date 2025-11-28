import { Module } from '../types';

export const PROG_MODULE_10: Module = {
  id: 'prog-mod-10',
  title: '10. Colas (Queues)',
  description: 'Concepto FIFO, operaciones y diferencias con pilas.',
  evaluation: '0% - Introducción',
  slides: [
    {
      id: 'p10-1',
      title: '¿Qué es una Cola (Queue)?',
      notes: 'Introducción al concepto FIFO con una analogía visual.',
      contentHtml: `
        <div class="space-y-8">
          <div class="flex flex-col md:flex-row gap-8 items-center">
            <div class="flex-1">
              <h3 class="text-2xl font-bold text-slate-900 mb-4">FIFO: El Primero en Entrar, es el Primero en Salir</h3>
              <p class="text-gray-600">Imagina la fila para comprar café. La primera persona que llega es la primera en ser atendida. Los nuevos se forman al final. Esta es la esencia de una cola.</p>
            </div>
            <div class="flex items-center gap-2 p-4 bg-slate-100 rounded-xl border overflow-x-auto">
               <div class="text-xs font-bold uppercase mr-2">Sale<br>(Frente)</div>
               <div class="w-12 h-12 bg-green-500 rounded text-white flex items-center justify-center font-bold shadow-sm flex-shrink-0 animate-pulse">1º</div>
               <div class="w-12 h-12 bg-green-400 rounded text-white flex items-center justify-center font-bold shadow-sm flex-shrink-0">2º</div>
               <div class="w-12 h-12 bg-green-300 rounded text-white flex items-center justify-center font-bold shadow-sm flex-shrink-0">3º</div>
               <div class="text-xs font-bold uppercase ml-2">Entra<br>(Final)</div>
            </div>
          </div>
          <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 text-sm text-yellow-900">
            <strong>Restricción Clave:</strong> Solo se puede insertar por el <strong>final</strong> (final) y eliminar por el <strong>frente</strong> (frente).
          </div>
        </div>
      `
    },
    {
      id: 'p10-2',
      title: 'Operaciones Fundamentales',
      notes: 'Enqueue, Dequeue y Front son las operaciones canónicas.',
      contentHtml: `
        <div class="grid md:grid-cols-3 gap-6 text-center">
          <div class="bg-white border rounded-lg p-6 shadow-sm">
            <h4 class="text-xl font-bold text-blue-700 mb-2">Enqueue (Encolar)</h4>
            <p class="text-sm text-gray-600">Añade un elemento al <strong>final</strong> de la cola.</p>
          </div>
          <div class="bg-white border rounded-lg p-6 shadow-sm">
            <h4 class="text-xl font-bold text-orange-700 mb-2">Dequeue (Desencolar)</h4>
            <p class="text-sm text-gray-600">Elimina y devuelve el elemento del <strong>frente</strong>.</p>
          </div>
          <div class="bg-white border rounded-lg p-6 shadow-sm">
            <h4 class="text-xl font-bold text-teal-700 mb-2">Front / Peek</h4>
            <p class="text-sm text-gray-600">Devuelve el elemento del frente sin eliminarlo.</p>
          </div>
        </div>
      `
    },
    {
      id: 'p10-3-list-impl',
      title: 'Implementación 1: Con Listas Enlazadas',
      notes: 'La implementación más flexible. Requiere puntero al final.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Una Cola Dinámica con Listas Enlazadas</h3>
        <p class="text-gray-600 mb-4">Para que sea eficiente (O(1)), necesitamos dos punteros: <code>frente</code> (head) y <code>final</code> (tail).</p>
        <div class="grid md:grid-cols-2 gap-6">
           <div class="prose prose-sm">
            <ul>
              <li><code>enqueue(valor)</code> añade un nuevo nodo después del <code>final</code> y actualiza el puntero <code>final</code>.</li>
              <li><code>dequeue()</code> elimina el nodo <code>frente</code> y actualiza el puntero <code>frente</code> (similar al pop de una pila basada en lista).</li>
            </ul>
            <p>Ambas operaciones son <strong>O(1)</strong>.</p>
          </div>
          <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <pre><code class="language-cpp">
class Cola {
private:
    Nodo* frente;
    Nodo* final;
public:
    Cola() : frente(nullptr), final(nullptr) {}

    void enqueue(int valor) {
        Nodo* nuevo = new Nodo(valor);
        if (final == nullptr) { // Cola vacía
            frente = final = nuevo;
            return;
        }
        final->siguiente = nuevo;
        final = nuevo;
    }
    // ... dequeue ...
};
            </code></pre>
          </div>
        </div>
      `
    },
    {
      id: 'p10-4-array-problem',
      title: 'Implementación 2: El Problema de los Arreglos',
      notes: 'Explicar por qué una implementación simple con arreglos es ineficiente.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">El Dilema de los Arreglos</h3>
        <p class="text-gray-600 mb-4">Si usamos un arreglo simple con índices <code>frente</code> y <code>final</code>, nos encontramos con un problema.</p>
        <div class="bg-white p-4 border rounded-lg">
            <p class="text-sm">Imagina que encolamos 3 elementos y desencolamos 2. El índice <code>frente</code> avanza, dejando espacio desperdiciado al inicio del arreglo que no podemos volver a usar.</p>
            <div class="font-mono text-center text-xs mt-4">
                <p>[ <span class="text-red-500">X</span>, <span class="text-red-500">X</span>, C, D, E, ... ]</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;^</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Frente</p>
                <p class="text-sm text-gray-500 mt-2">Estos espacios no se pueden rellenar. Eventualmente, <code>final</code> llegará al final del arreglo, causando un overflow falso aunque haya espacio libre.</p>
            </div>
        </div>
      `
    },
    {
      id: 'p10-5-circular-queue',
      title: 'Solución: La Cola Circular',
      notes: 'Introducir la cola circular como la solución al problema del arreglo.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Conectando el Final con el Inicio</h3>
        <p class="text-gray-600 mb-4">Una <strong>cola circular</strong> resuelve el problema tratando el arreglo como un círculo. Cuando el índice <code>frente</code> o <code>final</code> llega al final, simplemente "da la vuelta" y continúa desde el inicio (<code>0</code>). Esto se logra con el operador módulo (<code>%</code>).</p>
        <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
              <pre><code class="language-cpp">
class ColaCircular {
private:
    int datos[MAX_SIZE];
    int frente, final;
public:
    // ...
    void enqueue(int valor) {
        // ... verificar si está llena ...
        final = (final + 1) % MAX_SIZE;
        datos[final] = valor;
    }
    int dequeue() {
        // ... verificar si está vacía ...
        int valor = datos[frente];
        frente = (frente + 1) % MAX_SIZE;
        return valor;
    }
};
              </code></pre>
            </div>
            <div class="bg-white p-4 border rounded-lg flex items-center justify-center">
                 <div class="mermaid">
                    graph TD
                        A[0] --> B[1] --> C[2] --> D[3] --> E[4] --> A
                 </div>
            </div>
        </div>
      `
    },
    {
      id: 'p10-6-library',
      title: 'La Vía Rápida: Bibliotecas Estándar',
      notes: 'Enseñar a usar las herramientas ya existentes.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Usa las Herramientas del Lenguaje</h3>
        <p class="text-gray-600 mb-6">Al igual que con las pilas, es raro que necesites implementar una cola desde cero. Las bibliotecas estándar nos ofrecen soluciones robustas y eficientes.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
            <h5 class="text-gray-400 mb-2">// C++: std::queue</h5>
            <pre class="font-mono text-sm"><code class="language-cpp">
#include &lt;queue&gt;
std::queue&lt;int&gt; mi_cola;

mi_cola.push(10); // Enqueue
mi_cola.push(20);
mi_cola.pop();    // Dequeue (saca el 10)
// mi_cola.front() para ver el 20
            </code></pre>
          </div>
          <div class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
            <h5 class="text-gray-400 mb-2"># Python: collections.deque</h5>
            <pre class="font-mono text-sm"><code class="language-python">
from collections import deque
mi_cola = deque()

mi_cola.append(10)      # Enqueue
mi_cola.append(20)
valor = mi_cola.popleft() # Dequeue (valor es 10)
            </code></pre>
          </div>
        </div>
      `
    },
    {
      id: 'p10-7-app-bfs',
      title: 'Aplicación: Búsqueda por Anchura (BFS)',
      notes: 'La aplicación algorítmica más importante de las colas.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Explorando un Laberinto Nivel por Nivel</h3>
        <p class="text-gray-600 mb-4">El algoritmo de <strong>Búsqueda por Anchura (Breadth-First Search, BFS)</strong> se usa para encontrar el camino más corto en grafos no ponderados. Utiliza una cola para explorar los nodos "vecinos" de un nivel antes de pasar al siguiente.</p>
        <div class="bg-white p-4 rounded-lg border">
            <h5 class="font-bold text-sm mb-2">Algoritmo Conceptual de BFS</h5>
            <ol class="list-decimal pl-5 text-sm space-y-1">
                <li>Añadir el nodo inicial a la cola y marcarlo como visitado.</li>
                <li>Mientras la cola no esté vacía:
                    <ol class="list-alpha pl-4">
                        <li>Hacer <strong>dequeue</strong> para obtener el nodo actual.</li>
                        <li>Para cada vecino no visitado del nodo actual: marcarlo como visitado y hacer <strong>enqueue</strong>.</li>
                    </ol>
                </li>
            </ol>
        </div>
      `
    },
    {
      id: 'p10-8-priority-queue',
      title: 'Variante: Colas de Prioridad',
      notes: 'Introducir esta variante importante, que se verá en detalle más adelante.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">¿Qué Pasa si Hay VIPs?</h3>
        <p class="text-gray-600 mb-4">Una <strong>Cola de Prioridad</strong> es una estructura abstracta similar a una cola, pero cada elemento tiene una "prioridad". Los elementos con mayor prioridad son atendidos antes que los de menor prioridad.</p>
        <ul class="list-disc pl-5 text-sm space-y-2">
            <li>No sigue estrictamente el principio FIFO.</li>
            <li><strong>Aplicaciones:</strong> Planificador de procesos en un SO (los procesos importantes se ejecutan antes), servicios de urgencias en un hospital.</li>
            <li>En C++, se implementa con <code>std::priority_queue</code>. En Python, con el módulo <code>heapq</code>.</li>
            <li>Generalmente se construyen usando una estructura llamada <strong>Heap</strong>, que veremos más adelante.</li>
        </ul>
      `
    },
    {
      id: 'p10-9-code-practice',
      title: 'Práctica: Simulador de "Hot Potato"',
      notes: 'Un ejercicio clásico y divertido que usa colas circulares.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Ejercicio: El Juego de la Papa Caliente</h3>
        <p class="text-gray-600 mb-4">Este juego es una perfecta simulación de una cola circular.</p>
        <div class="bg-white border rounded-lg p-6">
          <h4 class="font-bold text-slate-800 mb-2">Reglas</h4>
          <ol class="text-sm list-decimal pl-5 text-gray-700 space-y-2">
              <li>Un grupo de <strong>N</strong> niños se sientan en círculo.</li>
              <li>Se pasan una "papa caliente". Cada <strong>M</strong> pases, el niño que tiene la papa es eliminado.</li>
              <li>El juego continúa hasta que solo queda un niño.</li>
          </ol>
          <p class="font-bold text-sm mt-4 mb-2">Tu Tarea:</p>
          <p class="text-sm">Escribe un programa en Python o C++ que reciba una lista de nombres y el número <code>M</code>. Usa una cola (<code>deque</code> o <code>std::queue</code>) para simular el juego y devolver el nombre del ganador.</p>
          <p class="font-mono text-xs mt-2 bg-gray-100 p-2 rounded"><strong>Pista:</strong> Para simular el pase, puedes hacer <code>dequeue</code> y luego <code>enqueue</code> del mismo elemento M-1 veces.</p>
        </div>
      `
    },
    {
      id: 'p10-end-questions',
      title: '¿Preguntas?',
      notes: 'Espacio para dudas.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full">
          <h3 class="text-2xl font-bold text-slate-900 mb-4">¿Dudas sobre FIFO, Colas Circulares o BFS?</h3>
        </div>
      `
    },
    {
      id: 'p10-end-thanks',
      title: 'Gracias y Próxima Clase',
      notes: 'Cierre y adelanto.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center">
          <h2 class="text-3xl font-bold text-slate-900 mb-4">Fin del Módulo 10</h2>
          <p class="text-gray-600 text-lg">Hemos cubierto las principales estructuras de datos lineales. En las próximas clases, nos adentraremos en el mundo no lineal con los <b>Árboles</b>.</p>
        </div>
      `
    }
  ]
}
