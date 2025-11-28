
import { Module } from '../types';

export const PROG_MODULE_13: Module = {
  id: 'prog-mod-13',
  title: '13. Árboles: Conceptos Fundamentales',
  description: 'Definición, terminología y árboles binarios.',
  evaluation: 'Ejercicio Teórico y Práctico',
  slides: [
    {
      id: 'p13-1',
      title: 'De lo Lineal a lo Jerárquico: Árboles',
      notes: 'Introducir los árboles como la primera estructura no lineal.',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700 text-lg">Hasta ahora, todas nuestras estructuras (listas, pilas, colas) han sido <strong>lineales</strong>. Los <strong>árboles</strong> son nuestra primera estructura de datos <strong>no lineal</strong> y jerárquica.</p>
          <p class="text-gray-600">Son ideales para modelar relaciones de dependencia, como sistemas de archivos, árboles genealógicos, o el Document Object Model (DOM) de una página web.</p>
          <div class="bg-green-50 border border-green-200 p-4 rounded-lg text-center">
            <h3 class="text-lg font-bold text-green-800">Un árbol es una colección de nodos conectados por aristas, con un nodo especial llamado raíz.</h3>
          </div>
        </div>
      `
    },
    {
      id: 'p13-2',
      title: 'Terminología Esencial (Visual)',
      notes: 'Usar un diagrama para que los estudiantes asocien los términos visualmente.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4 text-center">Anatomía de un Árbol</h3>
        <div class="flex justify-center items-center bg-white p-4 rounded-lg border">
          <div class="mermaid" style="transform: scale(0.9);">
            graph TD
                subgraph "Altura: 3"
                    A(Raíz) --> B(Hijo Izq);
                    A --> C(Hijo Der);
                    B --> D(Hoja);
                    B --> E;
                    C --> F(Hoja);
                    subgraph "Sub-árbol Izquierdo"
                        B; D; E;
                    end
                end
                linkStyle 0 stroke-width:2px,fill:none,stroke:green;
                linkStyle 1 stroke-width:2px,fill:none,stroke:green;
                style A fill:#e0f2fe,stroke:#0ea5e9,stroke-width:2px;
          </div>
          <ul class="text-xs space-y-2 ml-4">
              <li><strong>Raíz (A):</strong> El nodo superior.</li>
              <li><strong>Padre de D:</strong> B.</li>
              <li><strong>Hijos de B:</strong> D, E.</li>
              <li><strong>Hojas:</strong> D, E, F (nodos sin hijos).</li>
              <li><strong>Arista:</strong> Línea que conecta dos nodos (ej. A-B).</li>
              <li><strong>Profundidad de C:</strong> 1 (un paso desde la raíz).</li>
              <li><strong>Altura del Árbol:</strong> 2 (el camino más largo de la raíz a una hoja).</li>
          </ul>
        </div>
      `
    },
    {
      id: 'p13-3',
      title: 'Árboles Binarios',
      notes: 'Introducir el tipo de árbol más común.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">El Tipo de Árbol Más Común: Binario</h3>
        <div class="space-y-6">
          <p class="text-gray-700">Un <strong>Árbol Binario</strong> es un árbol donde cada nodo puede tener como máximo <strong>dos hijos</strong>, a los que nos referimos como hijo izquierdo e hijo derecho.</p>
          <div class="bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <h5 class="font-bold text-blue-800">Propiedades Clave</h5>
            <ul class="list-disc list-inside text-blue-700 mt-2 text-sm">
              <li>Un nodo puede tener 0, 1 o 2 hijos.</li>
              <li>El hijo izquierdo y el derecho son distintos.</li>
              <li>Son la base para los eficientes <strong>Árboles Binarios de Búsqueda (BST)</strong>.</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'p13-4-node',
      title: 'El Nodo de Árbol en Código',
      notes: 'Comparación directa de la implementación del nodo.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Modelando la Jerarquía</h3>
        <p class="text-gray-600 mb-6">La estructura del nodo es recursiva: contiene datos y punteros a otros nodos del mismo tipo.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
            <h5 class="text-gray-400 mb-2">// C++</h5>
            <pre class="font-mono text-sm"><code class="language-cpp">
struct NodoArbol {
    int dato;
    NodoArbol* izquierdo;
    NodoArbol* derecho;

    NodoArbol(int d) : dato(d), 
      izquierdo(nullptr), derecho(nullptr) {}
};
            </code></pre>
          </div>
          <div class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
            <h5 class="text-gray-400 mb-2"># Python</h5>
            <pre class="font-mono text-sm"><code class="language-python">
class NodoArbol:
    def __init__(self, dato):
        self.dato = dato
        self.izquierdo = None
        self.derecho = None
            </code></pre>
          </div>
        </div>
      `
    },
    {
      id: 'p13-5-traversals',
      title: '¿Cómo "Leemos" un Árbol?: Recorridos',
      notes: 'Introducir los 3 recorridos principales.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Recorriendo una Estructura No Lineal</h3>
        <p class="text-gray-600 mb-6">A diferencia de una lista, no hay una única forma de visitar todos los nodos. Los tres recorridos más comunes se definen por el momento en que se "visita" il nodo raíz en relación con sus sub-árboles.</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div class="bg-white p-4 border rounded-lg shadow-sm"><h5 class="font-bold">Pre-orden</h5><p class="text-sm font-mono text-blue-600">Raíz &rarr; Izq &rarr; Der</p></div>
            <div class="bg-white p-4 border rounded-lg shadow-sm"><h5 class="font-bold">In-orden</h5><p class="text-sm font-mono text-purple-600">Izq &rarr; Raíz &rarr; Der</p></div>
            <div class="bg-white p-4 border rounded-lg shadow-sm"><h5 class="font-bold">Post-orden</h5><p class="text-sm font-mono text-red-600">Izq &rarr; Der &rarr; Raíz</p></div>
        </div>
      `
    },
    {
      id: 'p13-6-preorder',
      title: 'Recorrido: Pre-orden',
      notes: 'Explicar Pre-orden con código y visualización.',
      contentHtml: `
        <h3 class="text-xl font-bold text-blue-700 mb-4">Pre-orden: Raíz, Izquierda, Derecha</h3>
        <p class="text-gray-600 mb-4">Se visita la raíz primero, luego se recorre recursivamente todo el sub-árbol izquierdo, y finalmente todo el sub-árbol derecho. Útil para copiar árboles.</p>
        <div class="grid md:grid-cols-2 gap-6 items-center">
            <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto"><pre><code class="language-cpp">
void preorden(NodoArbol* nodo) {
    if (nodo == nullptr) return;

    std::cout << nodo->dato << " "; // Visita Raíz
    preorden(nodo->izquierdo);     // Recorre Izquierda
    preorden(nodo->derecho);      // Recorre Derecha
}
            </code></pre></div>
            <div class="bg-white p-2 border rounded-lg flex justify-center"><div class="mermaid">
                graph TD; A(1)-->B(2); A-->C(3); B-->D(4); B-->E(5);
            </div></div>
        </div>
        <p class="text-center font-mono mt-4 bg-gray-100 p-2 rounded">Salida Pre-orden: <strong>1 2 4 5 3</strong></p>
      `
    },
    {
      id: 'p13-7-inorder',
      title: 'Recorrido: In-orden',
      notes: 'Explicar In-orden. Destacar su importancia para BST.',
      contentHtml: `
        <h3 class="text-xl font-bold text-purple-700 mb-4">In-orden: Izquierda, Raíz, Derecha</h3>
        <p class="text-gray-600 mb-4">Se recorre recursivamente el sub-árbol izquierdo, se visita la raíz, y luego se recorre el sub-árbol derecho. <strong>En un Árbol Binario de Búsqueda, este recorrido devuelve los elementos en orden ascendente.</strong></p>
        <div class="grid md:grid-cols-2 gap-6 items-center">
            <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto"><pre><code class="language-cpp">
void inorden(NodoArbol* nodo) {
    if (nodo == nullptr) return;

    inorden(nodo->izquierdo);      // Recorre Izquierda
    std::cout << nodo->dato << " "; // Visita Raíz
    inorden(nodo->derecho);       // Recorre Derecha
}
            </code></pre></div>
            <div class="bg-white p-2 border rounded-lg flex justify-center"><div class="mermaid">
                graph TD; A(1)-->B(2); A-->C(3); B-->D(4); B-->E(5);
            </div></div>
        </div>
        <p class="text-center font-mono mt-4 bg-gray-100 p-2 rounded">Salida In-orden: <strong>4 2 5 1 3</strong></p>
      `
    },
    {
      id: 'p13-8-postorder',
      title: 'Recorrido: Post-orden',
      notes: 'Explicar Post-orden. Destacar su uso para eliminar nodos.',
      contentHtml: `
        <h3 class="text-xl font-bold text-red-700 mb-4">Post-orden: Izquierda, Derecha, Raíz</h3>
        <p class="text-gray-600 mb-4">Se recorren recursivamente los sub-árboles izquierdo y derecho primero, y al final se visita la raíz. Es muy útil para <strong>eliminar un árbol de forma segura</strong>, ya que se eliminan los hijos antes que el padre.</p>
        <div class="grid md:grid-cols-2 gap-6 items-center">
            <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto"><pre><code class="language-cpp">
void postorden(NodoArbol* nodo) {
    if (nodo == nullptr) return;

    postorden(nodo->izquierdo);      // Recorre Izquierda
    postorden(nodo->derecho);       // Recorre Derecha
    std::cout << nodo->dato << " "; // Visita Raíz
}
            </code></pre></div>
            <div class="bg-white p-2 border rounded-lg flex justify-center"><div class="mermaid">
                graph TD; A(1)-->B(2); A-->C(3); B-->D(4); B-->E(5);
            </div></div>
        </div>
        <p class="text-center font-mono mt-4 bg-gray-100 p-2 rounded">Salida Post-orden: <strong>4 5 2 3 1</strong></p>
      `
    },
    {
      id: 'p13-9-tree-types',
      title: 'Tipos de Árboles Binarios',
      notes: 'Introducir clasificaciones importantes de árboles.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">El Zoológico de los Árboles Binarios</h3>
        <div class="grid md:grid-cols-3 gap-4 text-center">
            <div class="p-4 bg-white border rounded-lg">
                <h5 class="font-bold">Lleno</h5>
                <p class="text-xs text-gray-600">Cada nodo tiene 0 o 2 hijos.</p>
            </div>
            <div class="p-4 bg-white border rounded-lg">
                <h5 class="font-bold">Completo</h5>
                <p class="text-xs text-gray-600">Todos los niveles están llenos, excepto quizás el último, que se llena de izquierda a derecha.</p>
            </div>
            <div class="p-4 bg-white border rounded-lg">
                <h5 class="font-bold">Balanceado</h5>
                <p class="text-xs text-gray-600">La altura de los sub-árboles izquierdo y derecho de cualquier nodo no difiere en más de 1.</p>
            </div>
        </div>
        <p class="text-sm text-gray-500 mt-4">Un árbol balanceado es crucial para que las operaciones de búsqueda, inserción y eliminación mantengan una complejidad de <strong>O(log N)</strong>.</p>
      `
    },
    {
      id: 'p13-11-resources',
      title: 'Herramientas Visuales y Recursos',
      notes: 'Proporcionar a los estudiantes herramientas externas para reforzar su aprendizaje.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Experimenta por tu Cuenta</h3>
        <p class="text-gray-600 mb-4">La mejor forma de entender los recorridos y las estructuras de datos es verlos en acción. Te recomendamos explorar simuladores online para visualizar estos conceptos.</p>
        <div class="bg-white border rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
          <h4 class="font-bold text-blue-700 text-lg">VisuAlgo</h4>
          <p class="text-sm text-gray-600 my-2">Una excelente herramienta que visualiza una gran cantidad de algoritmos y estructuras de datos, incluyendo árboles binarios y sus recorridos.</p>
          <a href="https://visualgo.net/es/bst" target="_blank" class="text-blue-600 font-bold hover:underline">Ir a VisuAlgo &rarr;</a>
        </div>
      `
    },
    {
      id: 'p13-10-practice',
      title: 'Práctica: Recorridos',
      notes: 'Un ejercicio para implementar los 3 recorridos.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Ejercicio: Recorriendo un Árbol</h3>
        <p class="text-gray-600 mb-4">Dado el siguiente árbol binario, implementa las 3 funciones de recorrido en C++ o Python y verifica que la salida coincida con la que vimos en clase.</p>
        <div class="flex justify-center bg-white p-4 border rounded-lg">
            <div class="mermaid">
                graph TD
                    A(10) --> B(5);
                    A --> C(15);
                    B --> D(3);
                    B --> E(7);
                    C --> F(18);
            </div>
        </div>
        <div class="mt-4 text-sm space-y-1">
            <p><strong>Salida Pre-orden esperada:</strong> <span class="font-mono">10 5 3 7 15 18</span></p>
            <p><strong>Salida In-orden esperada:</strong> <span class="font-mono">3 5 7 10 15 18</span></p>
            <p><strong>Salida Post-orden esperada:</strong> <span class="font-mono">3 7 5 18 15 10</span></p>
        </div>
      `
    },
    {
      id: 'p13-end-questions',
      title: '¿Preguntas?',
      notes: 'Espacio para dudas.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full">
          <h3 class="text-2xl font-bold text-slate-900 mb-4">¿Dudas sobre Jerarquías, Nodos o Recorridos Recursivos?</h3>
        </div>
      `
    },
    {
      id: 'p13-end-thanks',
      title: 'Gracias y Próxima Clase',
      notes: 'Cierre y adelanto.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center">
          <h2 class="text-3xl font-bold text-slate-900 mb-4">Fin del Módulo 13</h2>
          <p class="text-gray-600 text-lg">Ahora que entendemos qué es un árbol y cómo recorrerlo, en la próxima clase le daremos un superpoder: la búsqueda. Veremos los <b>Árboles Binarios de Búsqueda (BST)</b>.</p>
        </div>
      `
    }
  ]
};
