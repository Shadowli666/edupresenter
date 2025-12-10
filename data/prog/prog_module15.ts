
import { Module } from '../types';

export const PROG_MODULE_15: Module = {
  id: 'prog-mod-15',
  title: '15. Árboles Binarios de Búsqueda (BST)',
  description: 'Operaciones de inserción, búsqueda y eliminación en Árboles Binarios de Búsqueda.',
  evaluation: '20% - Cuadro Comparativo',
  slides: [
    {
      id: 'p15-1',
      title: '¿Qué es un Árbol Binario de Búsqueda (BST)?',
      notes: 'Definir la propiedad fundamental del BST.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">El Árbol Inteligente: BST</h3>
        <p class="text-gray-700">Un Árbol Binario de Búsqueda (BST) es un árbol binario con una regla estricta que permite búsquedas muy eficientes.</p>
        <div class="bg-green-50 border-l-4 border-green-500 p-4 my-4">
          <h5 class="font-bold text-green-800">La Propiedad del BST</h5>
          <ul class="list-disc list-inside text-green-700 text-sm mt-2">
            <li>Para cualquier nodo <code>N</code>, todos los valores en su sub-árbol <strong>izquierdo</strong> son <strong>menores</strong> que <code>N.dato</code>.</li>
            <li>Todos los valores en su sub-árbol <strong>derecho</strong> son <strong>mayores</strong> que <code>N.dato</code>.</li>
            <li>Ambos sub-árboles (izquierdo y derecho) también son BST.</li>
          </ul>
        </div>
        <div class="grid md:grid-cols-2 gap-6 text-center">
            <div class="p-2 border rounded-lg bg-white"><p class="font-bold mb-2">BST Válido</p><div class="mermaid">graph TD; 8-->3; 8-->10; 3-->1; 3-->6; 10-->14;</div></div>
            <div class="p-2 border rounded-lg bg-white"><p class="font-bold mb-2">BST Inválido</p><div class="mermaid">graph TD; 8-->3; 8-->10; 3-->1; 3-->9; style 9 stroke:#f00,stroke-width:2px;</div><p class="text-xs text-red-600">Error: 9 es mayor que 8 pero está a la izquierda.</p></div>
        </div>
      `
    },
    {
      id: 'p15-2',
      title: 'Operación: Búsqueda (O(log N))',
      notes: 'Explicar el algoritmo de búsqueda, que es la base de todo.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Buscando un Valor</h3>
        <p class="text-gray-600 mb-4">La propiedad del BST hace que la búsqueda sea muy rápida. En cada paso, descartamos la mitad del árbol restante.</p>
        <div class="grid md:grid-cols-2 gap-6 items-center">
          <ol class="list-decimal pl-5 text-sm space-y-2">
            <li>Empieza en la raíz.</li>
            <li>Si el valor buscado es igual al del nodo actual, ¡lo encontraste!</li>
            <li>Si el valor es <strong>menor</strong>, te mueves al hijo <strong>izquierdo</strong>.</li>
            <li>Si el valor es <strong>mayor</strong>, te mueves al hijo <strong>derecho</strong>.</li>
            <li>Si llegas a un puntero nulo, el valor no existe en el árbol.</li>
          </ol>
          <div class="bg-white p-2 border rounded-lg flex justify-center"><div class="mermaid">graph TD; 8-->3; 8-->10; 3-->1; 3-->6; 10-->14; classDef path fill:#dbeafe,stroke:#2563eb,stroke-width:2px; class 8,10,14 path;</div><p class="text-xs text-center mt-2">Buscando el 14: 8 -> 10 -> 14. ¡Encontrado!</p></div>
        </div>
      `
    },
    {
      id: 'p15-3-search-code',
      title: 'Práctica: Código de Búsqueda',
      notes: 'Implementación recursiva de la búsqueda.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Código de Búsqueda en BST</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs">
            <h5 class="text-gray-400 mb-2">// C++ (Recursivo)</h5>
            <pre><code class="language-cpp">
bool buscar(NodoArbol* nodo, int valor) {
    if (nodo == nullptr) return false;

    if (valor == nodo->dato) {
        return true;
    } else if (valor < nodo->dato) {
        return buscar(nodo->izquierdo, valor);
    } else {
        return buscar(nodo->derecho, valor);
    }
}
            </code></pre>
          </div>
          <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs">
            <h5 class="text-gray-400 mb-2"># Python (Recursivo)</h5>
            <pre><code class="language-python">
def buscar(self, nodo, valor):
    if nodo is None:
        return False
    
    if valor == nodo.dato:
        return True
    elif valor < nodo.dato:
        return self.buscar(nodo.izquierdo, valor)
    else:
        return self.buscar(nodo.derecho, valor)
            </code></pre>
          </div>
        </div>
      `
    },
    {
      id: 'p15-4',
      title: 'Operación: Inserción (O(log N))',
      notes: 'Explicar la inserción como una búsqueda que termina en un enlace.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Insertando un Nuevo Valor</h3>
        <p class="text-gray-600 mb-4">La inserción es una "búsqueda para encontrar un espacio vacío". Se busca el valor como siempre. Cuando se llega a un puntero <code>null</code> o <code>None</code>, ahí es donde se debe insertar el nuevo nodo.</p>
        <div class="grid md:grid-cols-2 gap-6 items-center">
            <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs">
              <h5 class="text-gray-400 mb-2"># Pseudocódigo de Inserción</h5>
              <pre><code>
FUNCIÓN insertar(nodo, valor):
  SI nodo es nulo:
    DEVOLVER nuevo_nodo(valor)
  
  SI valor < nodo.dato:
    nodo.izquierdo = insertar(nodo.izquierdo, valor)
  SINO SI valor > nodo.dato:
    nodo.derecho = insertar(nodo.derecho, valor)
    
  DEVOLVER nodo // Devuelve el nodo sin cambios
              </code></pre>
            </div>
            <div class="bg-white p-2 border rounded-lg flex justify-center"><div class="mermaid">graph TD; 8-->3; 8-->10; 3-->1; 3-->6; 10-->14; 6-->7((7)); style 7 stroke:#16a34a,stroke-width:2px,stroke-dasharray: 5 5;</div><p class="text-xs text-center mt-2">Insertando el 7: 8 -> 3 -> 6 -> (derecha)</p></div>
        </div>
      `
    },
    {
      id: 'p15-5',
      title: 'La Magia del In-Orden en un BST',
      notes: 'Recordar la propiedad del recorrido in-orden en un BST.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Una Propiedad Extraordinaria</h3>
        <p class="text-gray-600 mb-4">Como mencionamos en la clase de recorridos, si aplicas un recorrido <strong>In-Orden (Izquierda, Raíz, Derecha)</strong> a un Árbol Binario de Búsqueda, obtendrás todos sus elementos en <strong>orden ascendente</strong>, de forma gratuita.</p>
        <div class="flex justify-center bg-white p-4 border rounded-lg">
            <div class="mermaid">graph TD; 8-->3; 8-->10; 3-->1; 3-->6; 10-->14;</div>
        </div>
        <p class="text-center font-mono mt-4 bg-gray-100 p-2 rounded">Salida In-orden: <strong>1 3 6 8 10 14</strong></p>
      `
    },
    {
      id: 'p15-6',
      title: 'Operación: Eliminación - Caso 1 (Hoja)',
      notes: 'El caso más simple de eliminación.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Eliminación: El Caso Fácil (Nodo Hoja)</h3>
        <p class="text-gray-600 mb-4">Si el nodo a eliminar es una hoja (no tiene hijos), simplemente se elimina y se establece el puntero correspondiente de su padre a <code>nullptr</code>.</p>
        <div class="grid md:grid-cols-2 gap-6 items-center">
            <div class="prose prose-sm"><h5>Algoritmo</h5><ol><li>Encontrar el nodo a eliminar.</li><li>Encontrar a su padre.</li><li>Establecer el puntero del padre (izquierdo o derecho) a nulo.</li><li>Liberar la memoria del nodo hoja.</li></ol></div>
            <div class="bg-white p-2 border rounded-lg flex justify-center"><div class="mermaid">graph TD; P(Padre)-->N(Nodo a Eliminar); style N stroke:#f00,stroke-width:2px,stroke-dasharray: 5 5;</div></div>
        </div>
      `
    },
    {
      id: 'p15-7',
      title: 'Eliminación - Caso 2 (Un Hijo)',
      notes: 'Caso intermedio: bypass.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Eliminación: El Caso Intermedio (Un Hijo)</h3>
        <p class="text-gray-600 mb-4">Si el nodo a eliminar tiene un solo hijo (izquierdo o derecho), se "salta" el nodo, conectando a su padre directamente con su único hijo.</p>
        <div class="grid md:grid-cols-2 gap-6 items-center">
            <div class="prose prose-sm"><h5>Algoritmo</h5><ol><li>Encontrar el nodo a eliminar (<code>N</code>) y su padre (<code>P</code>).</li><li>Hacer que el puntero de <code>P</code> que apuntaba a <code>N</code>, apunte ahora al único hijo de <code>N</code>.</li><li>Liberar la memoria de <code>N</code>.</li></ol></div>
            <div class="bg-white p-2 border rounded-lg flex justify-center"><div class="mermaid">graph TD; P(Padre)-->N(Nodo); N-->H(Hijo); linkStyle 0 stroke:#f00,stroke-width:2px,stroke-dasharray: 5 5; P-.->H; style H fill:#dcfce7;</div></div>
        </div>
      `
    },
    {
      id: 'p15-8',
      title: 'Eliminación - Caso 3 (Dos Hijos)',
      notes: 'El caso más complejo, usando el sucesor in-orden.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Eliminación: El Caso Complejo (Dos Hijos)</h3>
        <p class="text-gray-600 mb-4">Si el nodo a eliminar tiene dos hijos, no podemos simplemente eliminarlo. El truco es:</p>
        <div class="grid md:grid-cols-2 gap-6 items-center">
            <ol class="list-decimal pl-5 text-sm space-y-2">
                <li>Encontrar el <strong>sucesor in-orden</strong> del nodo. Este es el nodo más pequeño en el sub-árbol derecho (ir a la derecha una vez, y luego todo a la izquierda).</li>
                <li><strong>Copiar el valor</strong> del sucesor al nodo que queremos "eliminar".</li>
                <li>Ahora, el problema se reduce a eliminar el nodo sucesor, que es un caso mucho más fácil (tendrá 0 o 1 hijo).</li>
            </ol>
            <div class="bg-white p-2 border rounded-lg flex justify-center"><div class="mermaid">graph TD; N(8)-->Li(3); N-->Ld(15); Ld-->S(10); S-->S2(12); style S fill:#dcfce7,stroke:#16a34a,stroke-width:2px;</div><p class="text-xs text-center mt-2">Para eliminar el 8, encontramos su sucesor (10), copiamos '10' en el nodo raíz y luego eliminamos el nodo que contenía el 10.</p></div>
        </div>
      `
    },
    {
      id: 'p15-9-practice',
      title: 'Práctica: Implementar BST',
      notes: 'Ejercicio para implementar las funciones básicas.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Ejercicio: Construye tu Propio BST</h3>
        <p class="text-gray-600 mb-4">Crea una clase <code>BST</code> en C++ o Python. Debe tener una raíz privada. Implementa los siguientes métodos:</p>
        <ul class="list-disc pl-5 space-y-2 text-gray-700">
            <li><code>insertar(valor)</code>: Añade un nuevo valor al árbol, manteniendo la propiedad del BST.</li>
            <li><code>buscar(valor)</code>: Devuelve <code>true</code> si el valor existe, <code>false</code> si no.</li>
            <li><code>mostrarEnOrden()</code>: Imprime los valores del árbol en orden ascendente usando un recorrido in-orden.</li>
        </ul>
        <p class="text-sm mt-4 text-gray-500"><strong>Reto extra:</strong> Implementa el método <code>eliminar(valor)</code>, manejando los tres casos.</p>
      `
    },
    {
      id: 'p15-11-interactive',
      title: 'Visualizador Interactivo de BST',
      notes: 'Una demostración práctica para que los estudiantes puedan ver la inserción en un BST en tiempo real.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Visualizador de Inserción en BST</h3>
        <p class="text-gray-600 mb-4">Introduce un número y haz clic en "Insertar" para ver cómo se añade al árbol. Los números duplicados se ignoran.</p>
        <div class="flex items-center space-x-2 mb-4">
            <input type="number" id="bst-input-value" class="border rounded p-2 w-32" placeholder="Ej: 50">
            <button id="bst-insert-button" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Insertar</button>
            <button id="bst-reset-button" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Reset</button>
        </div>
        <style>
            #bst-visualizer-container { position: relative; min-height: 300px; border: 1px solid #e2e8f0; background-color: #f8fafc; border-radius: 0.5rem; overflow: hidden; }
            .bst-node {
                position: absolute;
                background-color: white;
                border: 2px solid #0ea5e9;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                font-size: 0.875rem;
                transition: all 0.3s ease;
                transform: translate(-50%, -50%);
            }
            .bst-line {
                position: absolute;
                background-color: #94a3b8;
                height: 2px;
                transform-origin: left center;
            }
        </style>
        <div id="bst-visualizer-container"></div>
        <script>
        (() => {
            class Node {
                constructor(value) {
                    this.value = value;
                    this.left = null;
                    this.right = null;
                    this.x = 0;
                    this.y = 0;
                    this.level = 0;
                }
            }

            class BST {
                constructor() { this.root = null; }
                insert(value) {
                    const newNode = new Node(value);
                    if (!this.root) {
                        this.root = newNode;
                        return;
                    }
                    let current = this.root;
                    while (true) {
                        if (value === current.value) return; // No duplicates
                        if (value < current.value) {
                            if (!current.left) { current.left = newNode; return; }
                            current = current.left;
                        } else {
                            if (!current.right) { current.right = newNode; return; }
                            current = current.right;
                        }
                    }
                }
            }

            const bst = new BST();
            const container = document.getElementById('bst-visualizer-container');
            const input = document.getElementById('bst-input-value');
            const insertBtn = document.getElementById('bst-insert-button');
            const resetBtn = document.getElementById('bst-reset-button');
            
            const render = () => {
                if (!container) return;
                container.innerHTML = '';
                if (!bst.root) return;

                const queue = [{ node: bst.root, x: container.offsetWidth / 2, y: 30, level: 0, parentX: null, parentY: null }];
                const positions = [];

                while(queue.length > 0) {
                    const { node, x, y, level, parentX, parentY } = queue.shift();
                    node.x = x;
                    node.y = y;
                    node.level = level;

                    positions.push({ x, y, value: node.value, parentX, parentY });

                    const horizontalGap = container.offsetWidth / Math.pow(2, level + 2);

                    if (node.left) queue.push({ node: node.left, x: x - horizontalGap, y: y + 50, level: level + 1, parentX: x, parentY: y });
                    if (node.right) queue.push({ node: node.right, x: x + horizontalGap, y: y + 50, level: level + 1, parentX: x, parentY: y });
                }

                positions.forEach(pos => {
                    // Draw line from parent
                    if (pos.parentX !== null) {
                        const line = document.createElement('div');
                        line.className = 'bst-line';
                        const dx = pos.x - pos.parentX;
                        const dy = pos.y - pos.parentY;
                        const distance = Math.sqrt(dx*dx + dy*dy);
                        const angle = Math.atan2(dy, dx) * 180 / Math.PI;

                        line.style.width = distance + 'px';
                        line.style.left = pos.parentX + 'px';
                        line.style.top = pos.parentY + 'px';
                        line.style.transform = \`rotate(\${angle}deg)\`;
                        container.appendChild(line);
                    }
                });

                positions.forEach(pos => {
                    const nodeEl = document.createElement('div');
                    nodeEl.className = 'bst-node';
                    nodeEl.textContent = pos.value;
                    nodeEl.style.left = pos.x + 'px';
                    nodeEl.style.top = pos.y + 'px';
                    container.appendChild(nodeEl);
                });
            };

            const handleInsert = () => {
                const value = parseInt(input.value, 10);
                if (isNaN(value)) return;
                bst.insert(value);
                input.value = '';
                render();
            };

            const handleReset = () => {
                bst.root = null;
                render();
            };

            insertBtn.addEventListener('click', handleInsert);
            input.addEventListener('keypress', (e) => e.key === 'Enter' && handleInsert());
            resetBtn.addEventListener('click', handleReset);
            
            // Initial render with some default values
            [50, 30, 70, 20, 40, 60, 80].forEach(v => bst.insert(v));
            render();
        })();
        </script>
      `
    },
    {
      id: 'p15-10-evaluation',
      title: 'Evaluación: Cuadro Comparativo (20%)',
      notes: 'Ejercicio de análisis de complejidad.',
      contentHtml: `
        <div class="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
            <h3 class="font-bold text-yellow-900 mb-2">Análisis de Complejidad (Big O)</h3>
            <p class="text-yellow-800 text-sm">Crea una tabla que compare la complejidad temporal (Mejor, Promedio y Peor Caso) de las operaciones <strong>Búsqueda, Inserción y Eliminación</strong> para las siguientes estructuras:</p>
            <ul class="list-disc list-inside text-yellow-700 mt-2 font-semibold">
                <li>Arreglo (desordenado)</li>
                <li>Lista Enlazada (simple)</li>
                <li>Árbol Binario de Búsqueda (BST)</li>
            </ul>
            <p class="text-xs text-yellow-600 mt-2">Presta especial atención a por qué el peor caso de un BST es O(N).</p>
        </div>
      `
    },
    {
      id: 'p15-end-questions',
      title: '¿Preguntas?',
      notes: 'Espacio para dudas.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full">
          <h3 class="text-2xl font-bold text-slate-900 mb-4">¿Dudas sobre Inserción, Búsqueda o los Casos de Eliminación?</h3>
        </div>
      `
    },
    {
      id: 'p15-end-thanks',
      title: 'Gracias y Próxima Clase',
      notes: 'Cierre y adelanto.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center">
          <h2 class="text-3xl font-bold text-slate-900 mb-4">Fin del Módulo 15</h2>
          <p class="text-gray-600 text-lg">Un BST es rápido, pero su rendimiento depende de que esté balanceado. En la próxima clase, veremos los <b>Árboles AVL</b>, un tipo de BST auto-balanceable.</p>
        </div>
      `
    }
  ]
};
