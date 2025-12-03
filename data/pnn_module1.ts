import { Module } from '../types';

export const PNN_MODULE_1: Module = {
  id: 'pnn-mod-1',
  title: '1. Introducción a Árboles y Optimización',
  description: 'Conceptos fundamentales de árboles, terminología, y su relevancia en la optimización.',
  evaluation: '0% - Diagnóstico',
  slides: [
    {
      id: 'pnn1-1',
      title: 'Concepto de Árbol: Una Estructura Jerárquica',
      notes: 'Introducción al árbol como estructura no lineal, contrastando con las lineales.',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700 text-lg">
            A diferencia de las estructuras lineales (listas, pilas, colas), un <strong>Árbol</strong> es una estructura de datos no lineal y jerárquica. Es ideal para representar relaciones de tipo "padre-hijo" o "uno a muchos".
          </p>
          <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
            <h5 class="font-bold text-indigo-900">Aplicaciones Comunes</h5>
            <ul class="list-disc list-inside text-indigo-800 text-sm mt-2">
              <li>Sistemas de archivos (carpetas y subcarpetas).</li>
              <li>Árboles genealógicos.</li>
              <li>Estructura de documentos (HTML DOM, XML).</li>
              <li>Organigramas de empresas.</li>
            </ul>
          </div>
          <div class="bg-white p-6 rounded-xl border shadow-sm flex justify-center">
            <div class="mermaid">
              graph TD
                A((Raíz)) --- B((Hijo))
                A --- C((Hijo))
                B --- D((Hijo))
                B --- E((Hijo))
                C --- F((Hoja))
                
                style A fill:#4f46e5,color:#fff,stroke:#312e81,stroke-width:2px
                style B fill:#e0e7ff,stroke:#4f46e5,stroke-width:2px
                style C fill:#e0e7ff,stroke:#4f46e5,stroke-width:2px
                style D fill:#f5f3ff,stroke:#818cf8
                style E fill:#f5f3ff,stroke:#818cf8
                style F fill:#f5f3ff,stroke:#818cf8
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn1-2',
      title: 'Terminología Esencial del Árbol (Visual)',
      notes: 'Usar un diagrama para que los estudiantes asocien los términos visualmente y consolidar el vocabulario.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4 text-center">Anatomía de un Árbol</h3>
        <div class="flex justify-center items-center bg-white p-4 rounded-lg border">
          <div class="mermaid" style="transform: scale(0.9);">
            graph TD
                subgraph "Altura: 3"
                    A(Raíz) --> B(Padre);
                    A --> C(Padre);
                    B --> D(Hijo);
                    B --> E(Hoja);
                    C --> F(Hoja);
                    subgraph "Sub-árbol de B"
                        B; D; E;
                    end
                end
                linkStyle 0 stroke-width:2px,fill:none,stroke:green;
                linkStyle 1 stroke-width:2px,fill:none,stroke:green;
                style A fill:#e0f2fe,stroke:#0ea5e9,stroke-width:2px;
                style D fill:#f5f3ff,stroke:#818cf8;
                style E fill:#f5f3ff,stroke:#818cf8;
                style F fill:#f5f3ff,stroke:#818cf8;
          </div>
          <ul class="text-xs space-y-2 ml-4">
              <li><strong>Raíz (A):</strong> Nodo superior.</li>
              <li><strong>Padre:</strong> Nodo con hijos (A, B, C).</li>
              <li><strong>Hijo:</strong> Nodo descendiente.</li>
              <li><strong>Hoja (E, F, D):</strong> Nodo sin hijos.</li>
              <li><strong>Arista:</strong> Conexión entre nodos.</li>
              <li><strong>Nivel:</strong> Distancia de la raíz.</li>
              <li><strong>Altura del Árbol:</strong> Nivel máx. de las hojas.</li>
              <li><strong>Grado del Nodo:</strong> Cantidad de hijos.</li>
          </ul>
        </div>
      `
    },
    {
      id: 'pnn1-3',
      title: 'Árboles Binarios: La Base para la Optimización',
      notes: 'Introducir los árboles binarios como un tipo fundamental para muchos algoritmos.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Un Tipo Especial: El Árbol Binario</h3>
        <p class="text-gray-700">Un <strong>Árbol Binario</strong> es un árbol donde cada nodo puede tener como máximo <strong>dos hijos</strong>, a los que llamamos hijo izquierdo y hijo derecho.</p>
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <h5 class="font-bold text-blue-900">¿Por qué son importantes para la optimización?</h5>
          <p class="text-blue-800 text-sm mt-2">La restricción de dos hijos simplifica el diseño de algoritmos de búsqueda y ordenamiento. Muchos algoritmos eficientes se basan en la estructura binaria.</p>
        </div>
        <div class="grid md:grid-cols-2 gap-6 text-center">
            <div class="p-2 border rounded-lg bg-white"><p class="font-bold mb-2">Árbol Binario Válido</p><div class="mermaid">graph TD; 8-->3; 8-->10; 3-->1; 3-->6; 10-->14;</div></div>
            <div class="p-2 border rounded-lg bg-white"><p class="font-bold mb-2">Árbol Binario Inválido</p><div class="mermaid">graph TD; 8-->3; 8-->10; 3-->6; 3-->9; 3-->12; style 12 stroke:#f00,stroke-width:2px;</div><p class="text-xs text-red-600">Error: El nodo 3 tiene 3 hijos.</p></div>
        </div>
      `
    },
    {
      id: 'pnn1-4-node-code',
      title: 'El Nodo de Árbol Binario en Código',
      notes: 'Representación fundamental del nodo en C++ y Python.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Modelando el Componente Básico</h3>
        <p class="text-gray-600 mb-6">Cada nodo de un árbol binario contendrá un dato y referencias (punteros) a sus hijos izquierdo y derecho. Si un hijo no existe, la referencia será 
nullptr (C++) o 
None (Python).</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
            <h5 class="text-gray-400 mb-2">// C++ con struct</h5>
            <pre class="font-mono text-sm max-w-full overflow-x-auto"><code class="language-cpp">
struct NodoArbol {
    int dato;
    NodoArbol* izquierdo;
    NodoArbol* derecho;

    // Constructor para inicializar
    NodoArbol(int d) : dato(d), 
      izquierdo(nullptr), derecho(nullptr) {}
};
            </code></pre>
          </div>
          <div class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
            <h5 class="text-gray-400 mb-2"># Python con class</h5>
            <pre class="font-mono text-sm max-w-full overflow-x-auto"><code class="language-python">
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
      id: 'pnn1-5-traversals-intro',
      title: 'Recorridos de Árboles: ¿Cómo los Leemos?',
      notes: 'Introducir los recorridos como métodos sistemáticos para visitar nodos.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Visitando Cada Nodo de Manera Ordenada</h3>
        <p class="text-gray-600 mb-6">A diferencia de las estructuras lineales, donde hay un orden obvio, en los árboles existen múltiples formas de visitar cada nodo. Los "recorridos" (traversals) son algoritmos que nos permiten hacer esto de forma sistemática.</p>
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h5 class="font-bold text-blue-900">Importancia para la Optimización</h5>
            <p class="text-blue-800 text-sm mt-2">El tipo de recorrido que elijamos dependerá de la tarea que queramos optimizar (ej. obtener elementos ordenados, copiar el árbol, evaluar expresiones).</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mt-4">
            <div class="bg-white p-3 border rounded-lg shadow-sm"><h5 class="font-bold">Pre-orden</h5><p class="text-sm font-mono text-blue-600">Raíz &rarr; Izq &rarr; Der</p></div>
            <div class="bg-white p-3 border rounded-lg shadow-sm"><h5 class="font-bold">In-orden</h5><p class="text-sm font-mono text-purple-600">Izq &rarr; Raíz &rarr; Der</p></div>
            <div class="bg-white p-3 border rounded-lg shadow-sm"><h5 class="font-bold">Post-orden</h5><p class="text-sm font-mono text-red-600">Izq &rarr; Der &rarr; Raíz</p></div>
        </div>
      `
    },
    {
      id: 'pnn1-6-preorder',
      title: 'Recorrido: Pre-orden (Raíz, Izquierda, Derecha)',
      notes: 'Explicar Pre-orden con código y un ejemplo simple.',
      contentHtml: `
        <h3 class="text-xl font-bold text-blue-700 mb-4">Pre-orden: Copiando Estructuras</h3>
        <p class="text-gray-600 mb-4">Se visita la raíz, luego el sub-árbol izquierdo, y finalmente el derecho. Es útil para crear una copia completa del árbol.</p>
        <div class="grid md:grid-cols-2 gap-6 items-center">
            <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto"><pre><code class="language-cpp">
void preorden(NodoArbol* nodo) {
    if (nodo == nullptr) return;
    std::cout << nodo->dato << " "; // Visita
    preorden(nodo->izquierdo);     // Izquierda
    preorden(nodo->derecho);      // Derecha
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
      id: 'pnn1-7-inorder',
      title: 'Recorrido: In-orden (Izquierda, Raíz, Derecha)',
      notes: 'Explicar In-orden. Destacar su uso para ordenamiento en BSTs.',
      contentHtml: `
        <h3 class="text-xl font-bold text-purple-700 mb-4">In-orden: Obteniendo Elementos Ordenados</h3>
        <p class="text-gray-600 mb-4">Se visita el sub-árbol izquierdo, luego la raíz, y finalmente el sub-árbol derecho. Si el árbol es un Árbol Binario de Búsqueda (BST), este recorrido devuelve los elementos en <strong>orden ascendente</strong>.</p>
        <div class="grid md:grid-cols-2 gap-6 items-center">
            <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto"><pre><code class="language-cpp">
void inorden(NodoArbol* nodo) {
    if (nodo == nullptr) return;
    inorden(nodo->izquierdo);      // Izquierda
    std::cout << nodo->dato << " "; // Visita
    inorden(nodo->derecho);       // Derecha
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
      id: 'pnn1-8-postorder',
      title: 'Recorrido: Post-orden (Izquierda, Derecha, Raíz)',
      notes: 'Explicar Post-orden. Destacar su uso para eliminar árboles.',
      contentHtml: `
        <h3 class="text-xl font-bold text-red-700 mb-4">Post-orden: Eliminación Segura</h3>
        <p class="text-gray-600 mb-4">Se visitan los sub-árboles izquierdo y derecho, y al final la raíz. Es ideal para <strong>eliminar un árbol</strong>, ya que garantiza que los hijos se eliminen antes que su padre, evitando punteros colgantes.</p>
        <div class="grid md:grid-cols-2 gap-6 items-center">
            <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto"><pre><code class="language-cpp">
void postorden(NodoArbol* nodo) {
    if (nodo == nullptr) return;
    postorden(nodo->izquierdo);      // Izquierda
    postorden(nodo->derecho);       // Derecha
    std::cout << nodo->dato << " "; // Visita
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
      id: 'pnn1-9-types',
      title: 'Tipos de Árboles Binarios (Revisión)',
      notes: 'Repasar clasificaciones de árboles relevantes para la eficiencia.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Clasificando Nuestros Árboles</h3>
        <p class="text-gray-600 mb-4">La forma de un árbol impacta directamente la eficiencia de los algoritmos de optimización. Un árbol puede ser:</p>
        <div class="grid md:grid-cols-3 gap-4 text-center">
            <div class="p-4 bg-white border rounded-lg shadow-sm">
                <h5 class="font-bold">Lleno (Full)</h5>
                <p class="text-xs text-gray-600">Cada nodo tiene 0 o 2 hijos.</p>
            </div>
            <div class="p-4 bg-white border rounded-lg shadow-sm">
                <h5 class="font-bold">Completo (Complete)</h5>
                <p class="text-xs text-gray-600">Todos los niveles están llenos, excepto quizás el último, que se llena de izquierda a derecha.</p>
            </div>
            <div class="p-4 bg-white border rounded-lg shadow-sm">
                <h5 class="font-bold">Balanceado (Balanced)</h5>
                <p class="text-xs text-gray-600">La altura de los sub-árboles izquierdo y derecho de cualquier nodo no difiere en más de 1. ¡Clave para la optimización!</p>
            </div>
        </div>
      `
    },
    {
      id: 'pnn1-10-optimization',
      title: 'Árboles y Optimización: La Altura Importa',
      notes: 'Conectar directamente las propiedades del árbol con la eficiencia algorítmica y la optimización.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">El Impacto de la Altura en la Eficiencia</h3>
        <p class="text-gray-600 mb-4">En estructuras como los árboles binarios de búsqueda (BST), la mayoría de las operaciones (búsqueda, inserción, eliminación) tienen una complejidad que depende de la <strong>altura (h)</strong> del árbol: <strong>O(h)</strong>.</p>
        <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h5 class="font-bold text-green-900">Árbol Balanceado</h5>
                <p class="text-sm text-green-800 mt-1">Si el árbol está balanceado, su altura es <strong>logarítmica</strong> (h ≈ log N). Las operaciones son <strong>O(log N)</strong>, ¡muy eficientes!</p>
            </div>
            <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <h5 class="font-bold text-red-900">Árbol Desbalanceado</h5>
                <p class="text-sm text-red-800 mt-1">Si el árbol está desbalanceado (parece una lista), su altura es <strong>lineal</strong> (h ≈ N). Las operaciones son <strong>O(N)</strong>, tan lentas como en una lista enlazada.</p>
            </div>
        </div>
        <p class="text-sm text-gray-700 mt-4"><strong>Conclusión para la Optimización:</strong> Mantener los árboles balanceados es un objetivo clave en el diseño de algoritmos eficientes.</p>
      `
    },
    {
      id: 'pnn1-11-practice',
      title: 'Práctica: Implementando un Nodo y Recorridos',
      notes: 'Un ejercicio para que implementen lo básico de nodos y los 3 recorridos recursivos.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Ejercicio: Nodos y Recorridos Básicos</h3>
        <p class="text-gray-600 mb-4">Crea una estructura (C++) o clase (Python) para un <strong>Nodo de Árbol Binario</strong>. Luego, construye el siguiente árbol de forma manual y usa tu código para realizar los tres recorridos (pre-orden, in-orden, post-orden).</p>
        <div class="flex justify-center bg-white p-4 border rounded-lg my-4">
            <div class="mermaid">
                graph TD
                    A(F) --> B(B);
                    A --> C(G);
                    B --> D(A);
                    B --> E(D);
                    C --> F2(I);
                    E --> G(C);
                    E --> H(E);
                    F2 --> I(H);
            </div>
        </div>
        <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <h5 class="text-gray-400 mb-2">Salidas Esperadas:</h5>
              <pre class="font-mono text-sm max-w-full overflow-x-auto"><code>Pre-orden: F B A D C E G I H
In-orden: A B C D E F G H I
Post-orden: A C E D B H I G F</code></pre>
            </div>
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h5 class="font-bold text-blue-900">Reto Extra</h5>
                <p class="text-sm text-blue-800">Implementa una función para calcular la <strong>altura</strong> de tu árbol.</p>
            </div>
        </div>
      `
    },
    {
      id: 'pnn1-12-resources',
      title: 'Herramientas Visuales y Recursos',
      notes: 'Proporcionar a los estudiantes herramientas externas para reforzar su aprendizaje.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Explora y Visualiza</h3>
        <p class="text-gray-600 mb-4">Para profundizar tu comprensión y ver los árboles y sus recorridos en acción, te recomendamos estas herramientas interactivas:</p>
        <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white border rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <h4 class="font-bold text-blue-700 text-lg">VisuAlgo</h4>
              <p class="text-sm text-gray-600 my-2">Excelente simulador interactivo para árboles binarios, BST y sus recorridos.</p>
              <a href="https://visualgo.net/es/bst" target="_blank" class="text-blue-600 font-bold hover:underline">Visitar VisuAlgo &rarr;</a>
            </div>
            <div class="bg-white border rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <h4 class="font-bold text-green-700 text-lg">Online Tree Traversals</h4>
              <p class="text-sm text-gray-600 my-2">Ingresa tu propio árbol y visualiza los recorridos paso a paso.</p>
              <a href="https://www.cs.usfca.edu/~galles/visualization/BST.html" target="_blank" class="text-green-600 font-bold hover:underline">Visitar USFCA &rarr;</a>
            </div>
        </div>
      `
    },
    {
      id: 'pnn1-end-questions',
      title: '¿Preguntas?',
      notes: 'Espacio para dudas.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full">
          <h3 class="text-2xl font-bold text-slate-900 mb-4">¿Dudas sobre Conceptos, Terminología o Recorridos?</h3>
        </div>
      `
    },
    {
      id: 'pnn1-end-thanks',
      title: 'Gracias y Próxima Clase',
      notes: 'Cierre y adelanto.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center">
          <h2 class="text-3xl font-bold text-slate-900 mb-4">Fin del Módulo 1</h2>
          <p class="text-gray-600 text-lg">Hemos sentado las bases de los árboles. En la próxima clase, profundizaremos en un tipo especial de árbol binario: el <b>Heap</b>, fundamental para algoritmos de optimización.</p>
        </div>
      `
    }
  ]
};