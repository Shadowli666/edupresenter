
import { Module } from '../types';

export const PROG_MODULE_11: Module = {
  id: 'prog-mod-11',
  title: '11. Tipos de Colas y Proyecto',
  description: 'Colas Circulares, Prioridad y asignación del Proyecto Final.',
  evaluation: '20% - Proyecto Estructuras',
  slides: [
    {
      id: 'p11-1',
      title: 'Repaso: Cola Circular',
      notes: 'Recordar la solución al problema de los arreglos en colas.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Recordando la Cola Circular</h3>
        <p class="text-gray-600 mb-4">En el módulo anterior, vimos que una implementación de cola con un arreglo simple es ineficiente por el espacio que se desperdicia. La <strong>Cola Circular</strong> resuelve esto tratando el arreglo como un círculo.</p>
        <div class="flex justify-center my-4">
            <div class="relative w-40 h-40 border-8 border-slate-200 rounded-full flex items-center justify-center">
              <div class="text-center">
                <span class="block text-xs text-gray-400">Fórmula Clave:</span>
                <code class="text-sm font-bold text-blue-800">pos = (pos + 1) % N</code>
              </div>
            </div>
        </div>
        <p class="text-sm text-gray-600 text-center bg-slate-50 p-2 rounded">El operador módulo (<code>%</code>) nos permite "dar la vuelta" al llegar al final del arreglo, reutilizando los espacios del inicio.</p>
      `
    },
    {
      id: 'p11-2',
      title: 'Colas de Prioridad',
      notes: 'Introducir el concepto de que no todo es FIFO.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">¿Y si Hay Clientes VIP? Colas de Prioridad</h3>
        <div class="bg-amber-50 border-l-4 border-amber-500 p-4">
          <p class="text-amber-800 text-sm">En una cola normal, el primero que llega es el primero en salir (FIFO). En una <strong>Cola de Prioridad</strong>, el orden de salida no depende de la llegada, sino de la <strong>prioridad</strong> asignada a cada elemento.</p>
        </div>
        <div class="mt-4 space-y-2">
            <div class="flex items-center justify-between bg-white p-3 rounded shadow-sm border border-red-200">
              <p><span class="font-bold text-red-700">[Prioridad 1]</span> Paciente con infarto</p><span class="text-xs text-gray-400">Sale #1</span>
            </div>
            <div class="flex items-center justify-between bg-white p-3 rounded shadow-sm border border-yellow-200">
              <p><span class="font-bold text-yellow-700">[Prioridad 2]</span> Paciente con fractura</p><span class="text-xs text-gray-400">Sale #3</span>
            </div>
             <div class="flex items-center justify-between bg-white p-3 rounded shadow-sm border border-green-200">
              <p><span class="font-bold text-green-700">[Prioridad 3]</span> Paciente con gripe</p><span class="text-xs text-gray-400">Sale #2</span>
            </div>
        </div>
        <p class="text-xs text-gray-500 mt-2">El orden de llegada no importa, solo la urgencia.</p>
      `
    },
    {
      id: 'p11-3-cpp-pq',
      title: 'Práctica: std::priority_queue en C++',
      notes: 'Mostrar la implementación estándar de C++.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Colas de Prioridad en C++</h3>
        <p class="text-gray-600 mb-4">C++ nos da <code>std::priority_queue</code> en la librería <code>&lt;queue&gt;</code>. Por defecto, funciona como un "max-heap": el elemento mayor tiene la mayor prioridad.</p>
        <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
          <pre class="font-mono text-sm max-w-full overflow-x-auto"><code class="language-cpp">
#include &lt;iostream&gt;
#include &lt;queue&gt;

int main() {
    // Por defecto, el mayor número es la mayor prioridad
    std::priority_queue&lt;int&gt; pq;

    pq.push(10); // Prioridad 10
    pq.push(30); // Prioridad 30
    pq.push(20); // Prioridad 20

    while (!pq.empty()) {
        std::cout << pq.top() << " "; // .top() para ver el de mayor prioridad
        pq.pop();
    }
    // Salida: 30 20 10
}
          </code></pre>
        </div>
      `
    },
    {
      id: 'p11-4-python-heapq',
      title: 'Práctica: heapq en Python',
      notes: 'Mostrar la implementación estándar de Python, que es un min-heap.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Colas de Prioridad en Python</h3>
        <p class="text-gray-600 mb-4">Python usa el módulo <code>heapq</code>. Funciona sobre una lista normal y, por defecto, la trata como un "min-heap": el elemento <strong>más pequeño</strong> tiene la mayor prioridad.</p>
        <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
          <pre class="font-mono text-sm max-w-full overflow-x-auto"><code class="language-python">
import heapq

# heapq trabaja sobre una lista normal
pq = []

heapq.heappush(pq, 10)
heapq.heappush(pq, 30)
heapq.heappush(pq, 20)

print("Cola de prioridad (min-heap):", pq)
# Salida: [10, 30, 20] (El orden interno no es intuitivo)

while pq:
    # heappop siempre saca el elemento más pequeño
    print(heapq.heappop(pq), end=' ')

# Salida final: 10 20 30
          </code></pre>
        </div>
      `
    },
    {
      id: 'p11-5-heap-concept',
      title: '¿Cómo Funciona? El Heap',
      notes: 'Una vista conceptual del heap como un árbol.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">La Magia Detrás de la Prioridad: El Heap</h3>
        <p class="text-gray-600 mb-4">Las colas de prioridad suelen implementarse con una estructura de datos tipo árbol llamada <strong>Heap</strong>. Un Heap garantiza que el elemento raíz del árbol es siempre el de mayor prioridad (el máximo o el mínimo).</p>
        <div class="grid md:grid-cols-2 gap-6 items-center">
            <div class="prose prose-sm">
                <h5>Propiedades del Heap</h5>
                <ul>
                    <li>Es un árbol binario "casi completo".</li>
                    <li>Cada nodo padre tiene una prioridad mayor (o menor) que sus hijos.</li>
                    <li>Insertar (push) y eliminar (pop) son operaciones muy eficientes, típicamente <strong>O(log N)</strong>.</li>
                </ul>
                <p>No necesitas saber implementar un heap ahora, pero es bueno saber qué estructura le da su poder a la cola de prioridad.</p>
            </div>
             <div class="bg-white p-4 border rounded-lg flex items-center justify-center">
                 <div class="mermaid">
                    graph TD
                        A(30) --> B(20)
                        A --> C(10)
                 </div>
            </div>
        </div>
      `
    },
    {
      id: 'p11-6-project',
      title: 'Taller Práctico: Proyecto Final (20%)',
      notes: 'Presentar formalmente el proyecto final.',
      contentHtml: `
        <div class="bg-slate-900 text-white p-6 rounded-xl shadow-lg">
          <h3 class="text-xl font-bold mb-2 text-blue-400">Sistema de Gestión de Triaje Hospitalario</h3>
          <p class="text-slate-300 text-sm mb-6">Desarrolle una aplicación de consola en C++ o Python que simule la sala de emergencias de un hospital, usando las estructuras de datos vistas en clase.</p>
          <div class="space-y-3 text-sm border-t border-slate-700 pt-4">
              <p><strong>Requisito 1:</strong> Usar una <strong>Cola de Prioridad</strong> para la sala de espera. La prioridad será el nivel de triaje (1-Urgente, 2-Moderado, 3-Leve).</p>
              <p><strong>Requisito 2:</strong> Usar una <strong>Lista Enlazada</strong> para almacenar un registro de los pacientes a medida que son atendidos.</p>
              <p><strong>Requisito 3:</strong> Usar una <strong>Pila</strong> para una función "Deshacer último ingreso", que elimine al último paciente registrado por error.</p>
          </div>
        </div>
      `
    },
    {
      id: 'p11-7-project-struct',
      title: 'Proyecto: Estructura del Paciente',
      notes: 'Darles un punto de partida con la estructura de datos principal.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Definiendo al Paciente</h3>
        <p class="text-gray-600 mb-6">Para empezar, necesitan una estructura que represente a un paciente.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
            <h5 class="text-gray-400 mb-2">// C++</h5>
            <pre class="font-mono text-sm max-w-full overflow-x-auto"><code class="language-cpp">
struct Paciente {
    std::string nombre;
    int id;
    int prioridad; // 1-Alta, 2-Media, 3-Baja

    // Para la cola de prioridad de C++
    // necesitamos sobrecargar el operador <
    bool operator<(const Paciente& otro) const {
        // Mayor prioridad si el número es MENOR
        return prioridad > otro.prioridad;
    }
};
            </code></pre>
          </div>
          <div class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
            <h5 class="text-gray-400 mb-2"># Python</h5>
            <pre class="font-mono text-sm max-w-full overflow-x-auto"><code class="language-python">
import itertools

class Paciente:
    id_iter = itertools.count()
    def __init__(self, nombre, prioridad):
        self.nombre = nombre
        self.prioridad = prioridad
        self.id = next(self.id_iter)

    # Para la cola de prioridad de Python
    # necesitamos sobrecargar el operador <
    def __lt__(self, otro):
        return self.prioridad < otro.prioridad
            </code></pre>
          </div>
        </div>
      `
    },
    {
      id: 'p11-8-project-skeleton-cpp',
      title: 'Proyecto: Esqueleto de Aplicación (C++)',
      notes: 'Proporcionar un main loop para que no empiecen de cero.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Esqueleto en C++</h3>
        <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
          <pre class="font-mono text-sm max-w-full overflow-x-auto"><code class="language-cpp">
#include <iostream>
#include <queue>
#include <list>
#include <stack>

// ... struct Paciente aquí ...

void mostrar_menu() {
    std::cout << "\n1. Registrar Paciente\n";
    std::cout << "2. Atender Siguiente Paciente\n";
    std::cout << "3. Deshacer último registro\n";
    std::cout << "4. Salir\n";
}

int main() {
    std::priority_queue<Paciente> sala_espera;
    std::list<Paciente> historial;
    std::stack<Paciente> ingresos_recientes;
    int opcion;

    do {
        mostrar_menu();
        std::cin >> opcion;
        // switch (opcion) { ... }
    } while (opcion != 4);

    return 0;
}
          </code></pre>
        </div>
      `
    },
    {
      id: 'p11-9-project-skeleton-python',
      title: 'Proyecto: Esqueleto de Aplicación (Python)',
      notes: 'Proporcionar un main loop para que no empiecen de cero.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Esqueleto en Python</h3>
        <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
          <pre class="font-mono text-sm max-w-full overflow-x-auto"><code class="language-python">
import heapq
from collections import deque

# ... clase Paciente aquí ...

def mostrar_menu():
    print("\n1. Registrar Paciente")
    print("2. Atender Siguiente Paciente")
    print("3. Deshacer último registro")
    print("4. Salir")

def main():
    sala_espera = [] # Usar con heapq
    historial = deque() # Una lista enlazada doble
    ingresos_recientes = [] # Usar como pila

    while True:
        mostrar_menu()
        opcion = input("> ")
        if opcion == '1':
            # ... lógica ...
        elif opcion == '2':
            # ... lógica ...
        elif opcion == '4':
            break

if __name__ == "__main__":
    main()
          </code></pre>
        </div>
      `
    },
    {
      id: 'p11-end-questions',
      title: '¿Preguntas sobre el Proyecto?',
      notes: 'Aclarar cualquier duda sobre el proyecto.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full">
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Este es su reto final del corte.</h3>
          <p class="text-center text-gray-600 max-w-md">¿Dudas sobre cómo interactúan las estructuras, el manejo de la prioridad o la lógica del menú?</p>
        </div>
      `
    },
    {
      id: 'p11-end-thanks',
      title: '¡A Programar!',
      notes: 'Motivación para el cierre.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center">
          <h2 class="text-3xl font-bold text-slate-900 mb-4">Fin del Módulo 11</h2>
          <p class="text-gray-600 text-lg">Tienen todas las herramientas necesarias. ¡Mucho éxito con el proyecto!</p>
        </div>
      `
    }
  ]
}
