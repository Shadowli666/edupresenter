import { Module } from '../types';

export const PROG_MODULE_7: Module = {
  id: 'prog-mod-7',
  title: '7. Listas Enlazadas Avanzadas',
  description: 'Listas Doblemente Enlazadas, Aplicaciones Reales y Listas Circulares.',
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
            <pre class="font-mono text-sm max-w-full overflow-x-auto"><code class="language-cpp">struct NodoDoble {
    int dato;
    NodoDoble* siguiente;
    NodoDoble* anterior; // El nuevo puntero

    NodoDoble(int d) : 
      dato(d), siguiente(nullptr), anterior(nullptr) {}
};</code></pre>
          </div>
          <div class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
            <h5 class="text-gray-400 mb-2"># Python</h5>
  <pre class="font-mono text-sm max-w-full overflow-x-auto"><code class="language-python">class NodoDoble:
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
        <p class="text-gray-600 mb-4">Insertar un nodo (ej. <code>N</code>) entre <code>A</code> y <code>B</code> requiere cuidado. Debemos actualizar <strong>4 enlaces</strong>.</p>
        
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4 text-sm text-yellow-800">
            <strong>¡Cuidado con el orden!</strong> Primero conecta el nuevo nodo (N) a sus vecinos (A y B). Solo después desconecta A y B entre sí. Si rompes el enlace antes de tiempo, perderás el resto de la lista.
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <ol class="list-decimal pl-5 text-sm space-y-3">
            <li><code>N.siguiente = B</code></li>
            <li><code>N.anterior = A</code></li>
            <li><code>A.siguiente = N</code> (Ahora A apunta a N)</li>
            <li><code>B.anterior = N</code> (Ahora B apunta atrás a N)</li>
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
      id: 'p7-3a-insert-mermaid',
      title: 'Inserción: Protocolo de Seguridad (Mermaid)',
      notes: 'Contenido removido por problemas de sintaxis en Mermaid.',
      contentHtml: `
        <div class="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <p class="text-sm text-amber-800">El diagrama Mermaid fue retirado temporalmente por inconsistencias de sintaxis. Mantén el orden seguro: configurar N (next, prev) y luego re-enlazar A y B.</p>
        </div>
      `
    },
    {
      id: 'p7-3b-insert-completo',
      title: 'Inserción: Código C++ (sin Mermaid)',
      notes: 'Ejemplo de inserción entre dos nodos con el orden seguro de punteros.',
      contentHtml: `
        <div class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
          <h5 class="text-gray-400 mb-2">// C++: Inserción entre dos nodos</h5>
          <pre class="font-mono text-sm max-w-full overflow-x-auto"><code class="language-cpp">struct Nodo {
    int dato; Nodo* siguiente; Nodo* anterior;
    Nodo(int d): dato(d), siguiente(nullptr), anterior(nullptr) {}
};

void insertarDespuesDe(Nodo*& cabeza, Nodo*& cola, int valorRef, int valor){
    Nodo* actual = cabeza;
    while(actual && actual->dato != valorRef) actual = actual->siguiente;
    if(!actual) return; // no encontrado
    if(actual == cola){ // insertar al final
        Nodo* nuevo = new Nodo(valor);
        cola->siguiente = nuevo; nuevo->anterior = cola; cola = nuevo; return;
    }
    Nodo* nuevo = new Nodo(valor);
    Nodo* sig = actual->siguiente;
    nuevo->siguiente = sig; nuevo->anterior = actual; // configurar nuevo
    actual->siguiente = nuevo; sig->anterior = nuevo;  // re-enlazar vecinos
}
          </code></pre>
        </div>
      `
    },
    {
      id: 'p7-4-delete',
      title: 'Operación: Eliminación en Lista Doble',
      notes: 'Mostrar la ventaja de poder eliminar sin buscar el previo.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Eliminación Eficiente (O(1))</h3>
        <p class="text-gray-600 mb-4">Si tenemos un puntero directo al nodo a eliminar (<code>B</code>), no necesitamos recorrer la lista para encontrar el anterior (como en listas simples). ¡Ya tenemos el puntero <code>anterior</code>!</p>
        <div class="grid md:grid-cols-2 gap-6">
          <ol class="list-decimal pl-5 text-sm space-y-3">
            <li>Accedemos al nodo anterior: <code>A = B.anterior</code></li>
            <li>Accedemos al nodo siguiente: <code>C = B.siguiente</code></li>
            <li>Conectamos A con C: <code>A.siguiente = C</code></li>
            <li>Conectamos C con A: <code>C.anterior = A</code></li>
            <li>Borramos <code>B</code>.</li>
          </ol>
           <div class="bg-white p-4 border rounded-lg flex items-center justify-center">
            <div class="mermaid">
                graph LR
                A <--> C
                subgraph "Eliminado"
                 B
                end
                style B fill:#fee2e2,stroke:#ef4444,stroke-dasharray: 5 5
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'p7-4a-delete-mermaid',
      title: 'Eliminación: Puenteo (Mermaid)',
      notes: 'Contenido removido por problemas de sintaxis en Mermaid.',
      contentHtml: `
        <div class="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <p class="text-sm text-amber-800">El diagrama Mermaid fue retirado temporalmente. Recuerda: enlaza A.next=C y C.prev=A, luego libera B.</p>
        </div>
      `
    },
    {
      id: 'p7-4b-delete-completo',
      title: 'Eliminación: Estrategia Visual + Código C++',
      notes: 'Diagrama Mermaid y código C++ que puentea A y C para eliminar B.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Eliminar B conectando A↔C</h3>
        <div class="bg-white p-4 border rounded-lg mb-4">
          <div class="mermaid">
graph LR
    subgraph "Lista Original"
    A1[A] <--> B1[B] <--> C1[C]
    style B1 fill:#fee2e2,stroke:#ef4444
    end

    subgraph "Resultado en Memoria"
    A[A]
    C[C]
    B[B (A eliminar)]

    style B fill:#fee2e2,stroke:#ef4444,stroke-dasharray: 5 5

    %% El Puente
    A -- "next" --> C
    C -- "prev" --> A
    
    %% Nodos huerfanos
    B -.-> A
    B -.-> C
    end
          </div>
        </div>
        <div class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
          <h5 class="text-gray-400 mb-2">// C++: Eliminación de nodo por valor</h5>
          <pre class="font-mono text-sm max-w-full overflow-x-auto"><code class="language-cpp">void eliminar(Nodo*& cabeza, Nodo*& cola, int valor){
    if(!cabeza) return; Nodo* b = cabeza;
    while(b && b->dato != valor) b = b->siguiente;
    if(!b) return; // no encontrado

    if(b->anterior) b->anterior->siguiente = b->siguiente; else cabeza = b->siguiente;
    if(b->siguiente) b->siguiente->anterior = b->anterior; else cola = b->anterior;
    delete b;
}
          </code></pre>
        </div>
      `
    },
    {
      id: 'p7-4c-delete-main',
      title: 'Caso de Prueba: Historia en main()',
      notes: 'Construir, insertar, recorrer y eliminar con salida explicativa.',
      contentHtml: `
        <div class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
          <h5 class="text-gray-400 mb-2">// C++: main con narrativa</h5>
          <pre class="font-mono text-sm max-w-full overflow-x-auto"><code class="language-cpp">int main(){
    Nodo* cabeza = nullptr; Nodo* cola = nullptr;

    auto insertarFinal = [&](int v){
        Nodo* n = new Nodo(v);
        if(!cabeza){cabeza = cola = n; return;} 
        cola->siguiente = n; n->anterior = cola; cola = n;
    };

    std::cout << "--- 1. Construyendo Lista ---\n";
    insertarFinal(10); insertarFinal(30); insertarFinal(40);
    // imprimir adelante
    {
      std::cout << "Inicio -> Fin: ";
      for(Nodo* t=cabeza; t; t=t->siguiente) std::cout << "["<<t->dato<<"] <-> ";
      std::cout << "NULL\n";
    }

    std::cout << "\n--- 2. Insertando 20 entre 10 y 30 ---\n";
    insertarDespuesDe(cabeza, cola, 10, 20);
    {
      std::cout << "Inicio -> Fin: ";
      for(Nodo* t=cabeza; t; t=t->siguiente) std::cout << "["<<t->dato<<"] <-> ";
      std::cout << "NULL\n";
    }
    // recorrido inverso
    {
      std::cout << "Fin -> Inicio: ";
      for(Nodo* t=cola; t; t=t->anterior) std::cout << "["<<t->dato<<"] <-> ";
      std::cout << "NULL\n";
    }

    std::cout << "\n--- 3. Eliminando el nodo 30 (El Puente) ---\n";
    eliminar(cabeza, cola, 30);
    {
      std::cout << "Inicio -> Fin: ";
      for(Nodo* t=cabeza; t; t=t->siguiente) std::cout << "["<<t->dato<<"] <-> ";
      std::cout << "NULL\n";
    }
    return 0;
}
          </code></pre>
        </div>
      `
    },
    {
      id: 'p7-5-real-world',
      title: 'Caso de Uso: Historial del Navegador',
      notes: 'Ejemplo práctico de Back/Forward.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">¿Cómo funcionan los botones "Atrás" y "Adelante"?</h3>
        <p class="text-gray-600 mb-4">El historial de tu navegador es una aplicación clásica de una <strong>Lista Doblemente Enlazada</strong>. Cada página visitada es un nodo.</p>
        
        <div class="grid md:grid-cols-2 gap-6 mb-6">
            <div class="bg-white p-4 border rounded-lg shadow-sm">
                <div class="mermaid">
                    graph LR
                    G[Google] <--> W[Wikipedia] <--> Y[YouTube]
                    style Y fill:#dbeafe,stroke:#2563eb,stroke-width:2px
                    linkStyle 2,3 stroke-width:2px,fill:none,stroke:blue;
                </div>
                <p class="text-xs text-center mt-2 text-gray-500">Estás en YouTube. 'prev' es Wikipedia.</p>
            </div>
            <div class="space-y-2 text-sm">
                <div class="flex items-center gap-2">
                    <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded font-mono text-xs">Atrás</span>
                    <span>Mueve el puntero <code>actual</code> a <code>actual.anterior</code>.</span>
                </div>
                <div class="flex items-center gap-2">
                    <span class="bg-green-100 text-green-800 px-2 py-1 rounded font-mono text-xs">Adelante</span>
                    <span>Mueve el puntero <code>actual</code> a <code>actual.siguiente</code>.</span>
                </div>
                <div class="flex items-center gap-2">
                    <span class="bg-purple-100 text-purple-800 px-2 py-1 rounded font-mono text-xs">Visitar</span>
                    <span>Elimina todo lo que esté adelante (si hubo 'Atrás') y añade nuevo nodo.</span>
                </div>
            </div>
        </div>

        <div class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
            <h5 class="text-gray-400 mb-2 text-xs">// Lógica simplificada del botón "Atrás"</h5>
            <pre class="font-mono text-sm max-w-full overflow-x-auto"><code class="language-cpp">void Navegador::irAtras() {
    if (paginaActual && paginaActual->anterior) {
        paginaActual = paginaActual->anterior;
        renderizarPagina(paginaActual->url);
    }
}</code></pre>
        </div>
      `
    },
    {
      id: 'p7-6-practice-double',
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
      id: 'p7-7',
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
          <p class="text-center text-sm text-gray-500"><strong>Aplicaciones:</strong> Round-robin en sistemas operativos (turnos de CPU), playlists en bucle, buffers circulares.</p>
        </div>
      `
    },
    {
      id: 'p7-7a-circular-mermaid',
      title: 'Visualización: Lista Doble Circular (Mermaid)',
      notes: 'Contenido removido por problemas de sintaxis en Mermaid.',
      contentHtml: `
        <div class="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <p class="text-sm text-amber-800">El diagrama Mermaid de lista doble circular fue retirado. Concepto: tail.next = head y head.prev = tail.</p>
        </div>
      `
    },
    {
      id: 'p7-8-traverse-circular',
      title: 'Operación: Recorrido en Círculo',
      notes: 'El bucle "do-while" es ideal aquí.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">¿Cómo Paramos de Dar Vueltas?</h3>
        <p class="text-gray-600 mb-4">Un bucle <code>while (aux != cabeza)</code> no funcionaría para el primer elemento (porque al inicio son iguales). Un bucle <code>do-while</code> es perfecto.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
            <h5 class="text-gray-400 mb-2">// C++ con do-while</h5>
  <pre class="font-mono text-sm max-w-full overflow-x-auto"><code class="language-cpp">void mostrar(Nodo* cabeza) {
  if (!cabeza) return;
  Nodo* aux = cabeza;
  do {
    std::cout << aux->dato << " ";
    aux = aux->siguiente;
  } while (aux != cabeza);
}</code></pre>
          </div>
          <div class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
            <h5 class="text-gray-400 mb-2"># Python con while y break</h5>
  <pre class="font-mono text-sm max-w-full overflow-x-auto"><code class="language-python">def mostrar(self):
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
      id: 'p7-9-practice-josephus',
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
