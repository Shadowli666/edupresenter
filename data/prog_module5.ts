
import { Module } from '../types';

export const PROG_MODULE_5: Module = {
  id: 'prog-mod-5',
  title: '5. Listas Enlazadas Simples',
  description: 'Estructuras dinámicas lineales: Definición, Nodos y Operaciones Básicas.',
  evaluation: '20% - Prueba Escrita',
  slides: [
    {
      id: 'p5-1',
      title: '1. Definición y Estructura',
      contentHtml: `
        <div class="space-y-8">
          <div class="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
            <h3 class="text-xl font-bold text-indigo-900 mb-2">¿Qué es una Lista Enlazada?</h3>
            <p class="text-indigo-800 text-lg">
              Es una colección lineal de elementos llamados <strong>Nodos</strong>. A diferencia de los vectores (arrays), los nodos no ocupan posiciones contiguas en la memoria; cada nodo conoce la ubicación del siguiente.
            </p>
          </div>

          <!-- Comparison Table -->
          <div class="bg-white p-5 rounded-xl border border-slate-200 text-sm shadow-sm">
             <h4 class="font-bold text-slate-800 mb-4 border-b pb-2">Lista Enlazada vs. Arreglo (Vector)</h4>
             <div class="grid md:grid-cols-2 gap-6">
               <div>
                  <h5 class="font-bold text-green-700 mb-2">Ventajas de la Lista</h5>
                  <ul class="space-y-2">
                    <li class="flex items-start gap-2">
                      <span class="text-green-600 font-bold">✓</span>
                      <span class="text-slate-600"><strong>Dinámica:</strong> Crece indefinidamente según se necesite (no tiene tamaño fijo).</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-green-600 font-bold">✓</span>
                      <span class="text-slate-600"><strong>Gestión de Memoria:</strong> Optimiza el uso del Heap.</span>
                    </li>
                  </ul>
               </div>
               <div>
                  <h5 class="font-bold text-red-700 mb-2">Desventajas</h5>
                  <ul class="space-y-2">
                    <li class="flex items-start gap-2">
                      <span class="text-red-500 font-bold">✗</span>
                      <span class="text-slate-600"><strong>Acceso Secuencial:</strong> No existe acceso directo (ej. <code>lista[4]</code>). Para llegar al 5to elemento, debes pasar por los 4 anteriores.</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-red-500 font-bold">✗</span>
                      <span class="text-slate-600"><strong>Memoria Extra:</strong> Cada dato requiere un puntero adicional.</span>
                    </li>
                  </ul>
               </div>
             </div>
          </div>
        </div>
      `
    },
    {
      id: 'p5-2',
      title: '2. Ejemplo Visual',
      contentHtml: `
        <div class="space-y-8 flex flex-col items-center">
          
          <!-- Visual Node Anatomy -->
          <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm w-full max-w-2xl">
             <h4 class="font-bold text-slate-800 mb-6 text-sm uppercase tracking-wider text-center border-b pb-2">1. Anatomía de un Nodo</h4>
             
             <div class="flex flex-col items-center">
                <div class="flex border-2 border-slate-800 rounded-lg bg-white shadow-[4px_4px_0px_0px_rgba(30,41,59,1)] overflow-hidden">
                    <!-- Data Part -->
                    <div class="p-6 bg-amber-50 border-r-2 border-slate-800 min-w-[100px] text-center">
                        <span class="block text-[10px] text-amber-700 uppercase font-bold mb-1">Dato</span>
                        <span class="text-3xl font-bold text-slate-900">15</span>
                    </div>
                    <!-- Pointer Part -->
                    <div class="p-6 bg-blue-50 min-w-[120px] text-center relative flex flex-col justify-center">
                        <span class="block text-[10px] text-blue-700 uppercase font-bold mb-1">Puntero (Next)</span>
                        <span class="text-xs font-mono font-bold text-blue-600">0xAB1</span>
                        <div class="absolute w-3 h-3 bg-slate-800 rounded-full top-1/2 -right-1.5 -translate-y-1/2 border border-white"></div>
                    </div>
                </div>
                <div class="flex gap-8 w-full mt-4 px-8">
                   <div class="flex-1 text-center text-xs text-gray-500">Información útil (Entero, String, Objeto)</div>
                   <div class="flex-1 text-center text-xs text-gray-500">Dirección de memoria del siguiente nodo</div>
                </div>
             </div>
          </div>

          <!-- Visual Linked List -->
          <div class="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm w-full">
             <h4 class="font-bold text-slate-800 mb-6 text-sm uppercase tracking-wider text-center border-b pb-2">2. Estructura de la Lista Enlazada</h4>
             
             <div class="flex justify-center">
                <div class="mermaid">
                  graph LR
                    H[Cabeza] --> N1(10)
                    N1 -->|0x200| N2(20)
                    N2 -->|0x300| N3(30)
                    N3 -->|NULL| E[Fin]
                    
                    style H fill:#f3e8ff,stroke:#9333ea,stroke-width:2px
                    style N1 fill:#fff,stroke:#334155,stroke-width:2px
                    style N2 fill:#fff,stroke:#334155,stroke-width:2px
                    style N3 fill:#fff,stroke:#334155,stroke-width:2px
                    style E fill:#fecaca,stroke:#ef4444,stroke-width:2px,stroke-dasharray: 5 5
                </div>
             </div>
             <p class="text-center text-xs text-slate-500 mt-2">El último nodo siempre apunta a <strong>NULL</strong> (Tierra/Vacío) para indicar el fin.</p>
          </div>

        </div>
      `
    },
    {
      id: 'p5-3',
      title: '3. Estructura del Nodo en Código',
      contentHtml: `
        <div class="space-y-8">
          <p class="text-gray-700">
            En C++, definimos un nodo utilizando una estructura (<code>struct</code>). Es como crear nuestro propio tipo de dato.
          </p>

          <div class="grid md:grid-cols-2 gap-8 items-center">
            <!-- Code Block -->
            <div class="bg-slate-900 text-slate-300 p-6 rounded-xl font-mono text-sm shadow-lg border border-slate-700">
<pre>
<span class="text-purple-400">struct</span> <span class="text-yellow-400">Nodo</span> {
    <span class="text-purple-400">int</span> dato;        <span class="text-gray-500">// La información</span>
    <span class="text-yellow-400">Nodo</span>* siguiente; <span class="text-gray-500">// El enlace</span>
};
</pre>
            </div>

            <!-- Explanation -->
            <div class="space-y-4">
              <div class="bg-amber-50 p-4 rounded border-l-4 border-amber-500">
                <strong class="text-amber-900 block mb-1">int dato;</strong>
                <p class="text-sm text-amber-800">
                   Es el valor que queremos guardar. Puede ser un entero, un float, un char o incluso otro objeto (ej. <code>Estudiante alumno;</code>).
                </p>
              </div>

              <div class="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
                <strong class="text-blue-900 block mb-1">Nodo* siguiente;</strong>
                <p class="text-sm text-blue-800">
                   Es un <strong>Puntero Recursivo</strong>. Apunta a otro objeto del mismo tipo <code>Nodo</code>. Almacena la dirección de memoria del próximo eslabón de la cadena.
                </p>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'p5-4',
      title: '4. Operación: Inserción al Final',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Insertar un nodo al final implica recorrer toda la lista para encontrar el último elemento (aquel que apunta a <code>NULL</code>) y hacer que apunte al nuevo nodo.
          </p>

          <div class="grid md:grid-cols-2 gap-6">
             <!-- Steps -->
             <div class="space-y-3">
               <div class="bg-white p-3 border-l-4 border-blue-500 rounded shadow-sm">
                  <h4 class="font-bold text-blue-900 text-sm">1. Crear Nodo</h4>
                  <p class="text-xs text-slate-600">Reservar memoria y asignar dato. <code>next = NULL</code>.</p>
               </div>
               <div class="bg-white p-3 border-l-4 border-purple-500 rounded shadow-sm">
                  <h4 class="font-bold text-purple-900 text-sm">2. ¿Lista Vacía?</h4>
                  <p class="text-xs text-slate-600">Si <code>cabeza == NULL</code>, el nuevo nodo es la cabeza.</p>
               </div>
               <div class="bg-white p-3 border-l-4 border-orange-500 rounded shadow-sm">
                  <h4 class="font-bold text-orange-900 text-sm">3. Recorrer</h4>
                  <p class="text-xs text-slate-600">Si no, avanzar con un auxiliar hasta que <code>aux->next == NULL</code>.</p>
               </div>
               <div class="bg-white p-3 border-l-4 border-green-500 rounded shadow-sm">
                  <h4 class="font-bold text-green-900 text-sm">4. Enlazar</h4>
                  <p class="text-xs text-slate-600">Hacer <code>aux->next = nuevo</code>.</p>
               </div>
             </div>

             <!-- Diagram -->
             <div class="flex items-center justify-center bg-white rounded-lg border border-slate-200">
                <div class="mermaid">
                  flowchart TD
                    Start([Inicio]) --> Create[Crear Nuevo Nodo]
                    Create --> Empty{¿Cabeza NULL?}
                    Empty -- Sí --> LinkHead[Cabeza = Nuevo]
                    Empty -- No --> Loop{¿Aux->sig == NULL?}
                    Loop -- No --> Advance[Aux = Aux->sig]
                    Advance --> Loop
                    Loop -- Sí --> Link[Aux->sig = Nuevo]
                    LinkHead --> End([Fin])
                    Link --> End
                    style Start fill:#fef9c3,stroke:#eab308
                    style End fill:#fef9c3,stroke:#eab308
                    style Create fill:#dbeafe,stroke:#2563eb
                    style Link fill:#dcfce7,stroke:#16a34a
                </div>
             </div>
          </div>

          <!-- Code -->
          <div class="bg-slate-900 text-slate-300 p-4 rounded-lg font-mono text-xs border border-slate-700 overflow-x-auto">
             <span class="text-gray-500">// 1. Crear el nuevo nodo</span><br>
             Nodo* nuevo = <span class="text-purple-400">new</span> Nodo();<br>
             nuevo->dato = valor;<br>
             nuevo->siguiente = <span class="text-purple-400">NULL</span>;<br>
             <br>
             <span class="text-gray-500">// 2. Verificar si está vacía</span><br>
             <span class="text-purple-400">if</span> (cabeza == <span class="text-purple-400">NULL</span>) {<br>
             &nbsp;&nbsp;cabeza = nuevo;<br>
             } <span class="text-purple-400">else</span> {<br>
             &nbsp;&nbsp;<span class="text-gray-500">// 3. Recorrer hasta el final</span><br>
             &nbsp;&nbsp;Nodo* aux = cabeza;<br>
             &nbsp;&nbsp;<span class="text-purple-400">while</span> (aux->siguiente != <span class="text-purple-400">NULL</span>) {<br>
             &nbsp;&nbsp;&nbsp;&nbsp;aux = aux->siguiente;<br>
             &nbsp;&nbsp;}<br>
             &nbsp;&nbsp;<span class="text-gray-500">// 4. Enlazar</span><br>
             &nbsp;&nbsp;aux->siguiente = nuevo;<br>
             }
          </div>
        </div>
      `
    },
    {
      id: 'p5-5',
      title: '5. Operación: Recorrer Lista',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Recorrer (Traversal) consiste en visitar cada nodo desde el inicio hasta que el puntero sea NULL. Es necesario para imprimir o buscar datos.
          </p>

          <!-- Logic Diagram -->
          <div class="flex justify-center bg-white p-6 border rounded-xl shadow-sm">
             <div class="mermaid">
               flowchart LR
                 Start([Inicio]) --> Init[Aux = Cabeza]
                 Init --> Check{¿Aux != NULL?}
                 Check -- Sí --> Print[/Imprimir Aux->dato/]
                 Print --> Next[Aux = Aux->siguiente]
                 Next --> Check
                 Check -- No --> End([Fin])
                 
                 style Check fill:#ffedd5,stroke:#ea580c,stroke-width:2px
                 style Print fill:#dcfce7,stroke:#16a34a,stroke-width:2px
                 style Next fill:#dbeafe,stroke:#2563eb,stroke-width:2px
             </div>
          </div>

          <!-- Code Snippet -->
          <div class="bg-slate-900 text-slate-300 p-5 rounded-lg font-mono text-xs border border-slate-700 shadow-lg">
             <span class="text-purple-400">void</span> mostrarLista(Nodo* cabeza) {<br>
             &nbsp;&nbsp;Nodo* aux = cabeza; <span class="text-gray-500">// IMPORTANTE: No mover 'cabeza' directamente</span><br>
             <br>
             &nbsp;&nbsp;<span class="text-purple-400">while</span> (aux != <span class="text-purple-400">NULL</span>) { <span class="text-gray-500">// Mientras no sea el fin</span><br>
             &nbsp;&nbsp;&nbsp;&nbsp;cout << aux->dato << " -> ";<br>
             &nbsp;&nbsp;&nbsp;&nbsp;aux = aux->siguiente; <span class="text-green-400">// Avanzar al vecino</span><br>
             &nbsp;&nbsp;}<br>
             }
          </div>
        </div>
      `
    },
    {
      id: 'p5-6',
      title: '6. Código Completo en C++',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-gray-600 text-sm mb-2">
             Implementación completa para copiar, pegar y probar en su IDE.
          </p>
          
          <div class="bg-slate-900 text-slate-300 p-6 rounded-xl font-mono text-xs overflow-x-auto shadow-lg border border-slate-700 max-h-[60vh] overflow-y-auto custom-scrollbar">
<pre>
<span class="text-purple-400">#include</span> &lt;iostream&gt;
<span class="text-purple-400">using namespace</span> std;

<span class="text-gray-500">// --- 1. ESTRUCTURA ---</span>
<span class="text-purple-400">struct</span> <span class="text-yellow-400">Nodo</span> {
    <span class="text-purple-400">int</span> dato;
    <span class="text-yellow-400">Nodo</span>* siguiente;
};

<span class="text-gray-500">// --- 2. FUNCION INSERTAR ---</span>
<span class="text-purple-400">void</span> insertar(<span class="text-yellow-400">Nodo</span>*& cabeza, <span class="text-purple-400">int</span> valor) {
    <span class="text-gray-500">// Crear nodo nuevo</span>
    <span class="text-yellow-400">Nodo</span>* nuevo = <span class="text-purple-400">new</span> <span class="text-yellow-400">Nodo</span>();
    nuevo->dato = valor;
    nuevo->siguiente = <span class="text-purple-400">NULL</span>;

    <span class="text-purple-400">if</span> (cabeza == <span class="text-purple-400">NULL</span>) {
        cabeza = nuevo; <span class="text-gray-500">// Caso Lista Vacía</span>
    } <span class="text-purple-400">else</span> {
        <span class="text-yellow-400">Nodo</span>* aux = cabeza;
        <span class="text-gray-500">// Recorrer hasta el último</span>
        <span class="text-purple-400">while</span> (aux->siguiente != <span class="text-purple-400">NULL</span>) {
            aux = aux->siguiente;
        }
        aux->siguiente = nuevo; <span class="text-gray-500">// Enlazar</span>
    }
    cout << <span class="text-green-400">"Insertado: "</span> << valor << endl;
}

<span class="text-gray-500">// --- 3. FUNCION MOSTRAR ---</span>
<span class="text-purple-400">void</span> mostrar(<span class="text-yellow-400">Nodo</span>* cabeza) {
    <span class="text-yellow-400">Nodo</span>* aux = cabeza;
    cout << <span class="text-green-400">"Lista: "</span>;
    <span class="text-purple-400">while</span> (aux != <span class="text-purple-400">NULL</span>) {
        cout << aux->dato << <span class="text-green-400">" -> "</span>;
        aux = aux->siguiente;
    }
    cout << <span class="text-green-400">"NULL"</span> << endl;
}

<span class="text-purple-400">int</span> main() {
    <span class="text-yellow-400">Nodo</span>* lista = <span class="text-purple-400">NULL</span>; <span class="text-gray-500">// Inicializar en NULL es vital</span>
    
    insertar(lista, 10);
    insertar(lista, 20);
    insertar(lista, 30);
    
    mostrar(lista);
    
    <span class="text-purple-400">return</span> 0;
}
</pre>
          </div>
        </div>
      `
    },
    {
      id: 'p5-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="text-6xl font-bold text-indigo-600 mb-6 select-none">?</div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Punteros y Enlaces</h3>
          <p class="text-center text-gray-600 max-w-md">
            La lógica de "siguiente" es clave. ¿Entienden la diferencia entre el nodo y el puntero al nodo?
          </p>
        </div>
      `
    },
    {
      id: 'p5-end-thanks',
      title: 'Gracias por su atención',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">Fin de la Clase</h2>
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-indigo-500 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "Los programas deben ser escritos para que la gente los lea, y solo incidentalmente para que las máquinas los ejecuten."
            </p>
            <footer class="flex items-center justify-center gap-2">
              <div class="h-px w-8 bg-slate-300"></div>
              <cite class="not-italic font-bold text-slate-900">Harold Abelson</cite>
            </footer>
          </blockquote>
        </div>
      `
    }
  ]
};
