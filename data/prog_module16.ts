
import { Module } from '../types';

export const PROG_MODULE_16: Module = {
  id: 'prog-mod-16',
  title: '16. Algoritmos en Árboles',
  description: 'Aplicación de algoritmos de búsqueda y ordenamiento en árboles.',
  evaluation: 'Ejercicio Teórico y Práctico',
  slides: [
    {
      id: 'p16-1',
      title: 'El Problema del Desbalance en BST',
      notes: 'Motivar la necesidad de árboles auto-balanceables.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">La Debilidad de un BST Simple</h3>
        <p class="text-gray-600 mb-4">Un Árbol Binario de Búsqueda es increíblemente rápido (O(log N)) solo si está <strong>balanceado</strong>. Si insertamos elementos en orden (ej. 1, 2, 3, 4, 5), el árbol degenera en una simple lista enlazada.</p>
        <div class="grid md:grid-cols-2 gap-8 text-center">
            <div class="p-2 border rounded-lg bg-white">
                <p class="font-bold mb-2">BST Balanceado (O(log N))</p>
                <div class="mermaid">graph TD; 4-->2; 4-->6; 2-->1; 2-->3; 6-->5; 6-->7;</div>
            </div>
            <div class="p-2 border rounded-lg bg-white">
                <p class="font-bold mb-2 text-red-600">BST Desbalanceado (O(N))</p>
                <div class="mermaid">graph TD; 1-->2-->3-->4-->5;</div>
            </div>
        </div>
        <p class="text-center text-red-600 bg-red-50 p-2 rounded mt-4">En el peor de los casos, ¡una búsqueda en un BST es tan lenta como en una lista enlazada!</p>
      `
    },
    {
      id: 'p16-2',
      title: 'Árboles AVL: El BST Auto-Balanceable',
      notes: 'Introducir el concepto y la propiedad del AVL.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">La Solución: Árboles AVL</h3>
        <p class="text-gray-600 mb-4">Un Árbol AVL (nombrado por sus inventores, Adelson-Velsky y Landis) es un BST que se <strong>balancea automáticamente</strong> después de cada inserción o eliminación que rompa su equilibrio.</p>
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
          <h5 class="font-bold text-blue-800">La Propiedad AVL: El Factor de Equilibrio</h5>
          <p class="text-blue-700 text-sm mt-2">Para cada nodo en el árbol, la diferencia de altura entre su sub-árbol izquierdo y su sub-árbol derecho (el "factor de equilibrio") solo puede ser <strong>-1, 0, o 1</strong>.</p>
        </div>
        <p class="text-sm text-gray-500 mt-4">Si una operación causa que el factor de equilibrio de un nodo sea -2 o 2, el árbol se considera "roto" y debe repararse.</p>
      `
    },
    {
      id: 'p16-3',
      title: 'Calculando el Factor de Equilibrio',
      notes: 'Mostrar cómo se calcula el FE y se detecta un desbalance.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Detectando el Desbalance</h3>
        <p class="text-gray-600 mb-4">El Factor de Equilibrio (FE) se calcula como: <strong>FE = Altura(Sub-árbol Izquierdo) - Altura(Sub-árbol Derecho)</strong>.</p>
        <div class="grid md:grid-cols-2 gap-6 items-center">
            <div class="bg-white p-2 border rounded-lg flex justify-center"><div class="mermaid">graph TD; A(50); B(30); C(70); D(80); A-- FE=0 -->B; A-- FE=-2 -->C; C-- FE=-1 -->D;</div><p class="text-xs text-center mt-2">En este ejemplo, la altura del sub-árbol izquierdo de 50 es 1. La altura del derecho es 3. FE = 1 - 3 = -2. ¡El nodo 50 está desbalanceado!</p></div>
            <div class="prose prose-sm"><h5>Altura de un nodo</h5><ul><li>Altura de una hoja = 1.</li><li>Altura de un nodo = 1 + max(Altura(hijo izq), Altura(hijo der)).</li></ul></div>
        </div>
      `
    },
    {
      id: 'p16-4',
      title: 'La Solución: Rotaciones de Árbol',
      notes: 'Introducir las rotaciones como el mecanismo de reparación.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Reparando el Árbol con Rotaciones</h3>
        <p class="text-gray-600 mb-4">Cuando se detecta un desbalance, el árbol realiza "rotaciones" para reordenar los nodos y restaurar la propiedad AVL. Hay 4 tipos de desbalances que requieren 4 tipos de rotaciones.</p>
        <div class="grid grid-cols-2 gap-4 text-center">
            <div class="p-4 bg-white border rounded-lg shadow-sm"><h5 class="font-bold">Rotación Simple</h5><p class="text-xs font-mono text-blue-600">Izquierda (RR) o Derecha (LL)</p></div>
            <div class="p-4 bg-white border rounded-lg shadow-sm"><h5 class="font-bold">Rotación Doble</h5><p class="text-xs font-mono text-purple-600">Izquierda-Derecha (LR) o Derecha-Izquierda (RL)</p></div>
        </div>
        <p class="text-sm text-gray-500 mt-4">Estas rotaciones son operaciones locales que se realizan en tiempo constante <strong>O(1)</strong>.</p>
      `
    },
    {
      id: 'p16-5',
      title: 'Rotación Simple a la Derecha (Caso LL)',
      notes: 'Visualizar la rotación LL.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Caso LL: Desbalance Izquierda-Izquierda</h3>
        <p class="text-gray-600 mb-4">Ocurre cuando se inserta un nuevo nodo en el sub-árbol <strong>izquierdo</strong> del hijo <strong>izquierdo</strong> del nodo desbalanceado. Se arregla con una <strong>Rotación Simple a la Derecha</strong>.</p>
        <div class="grid md:grid-cols-2 gap-6 items-center">
            <div class="bg-white p-2 border rounded-lg"><p class="text-xs font-bold text-center mb-2">Antes (Nodo C está desbalanceado)</p><div class="mermaid">graph TD; C-->B; B-->A;</div></div>
            <div class="bg-white p-2 border rounded-lg"><p class="text-xs font-bold text-center mb-2">Después (Rotación a la Derecha en C)</p><div class="mermaid">graph TD; B-->A; B-->C;</div></div>
        </div>
        <p class="text-sm text-center text-gray-500 mt-4">El nodo <code>B</code> "sube" para convertirse en la nueva raíz, y <code>C</code> se convierte en su hijo derecho.</p>
      `
    },
    {
      id: 'p16-6',
      title: 'Rotación Simple a la Izquierda (Caso RR)',
      notes: 'Visualizar la rotación RR.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Caso RR: Desbalance Derecha-Derecha</h3>
        <p class="text-gray-600 mb-4">Ocurre cuando se inserta un nuevo nodo en el sub-árbol <strong>derecho</strong> del hijo <strong>derecho</strong> del nodo desbalanceado. Se arregla con una <strong>Rotación Simple a la Izquierda</strong>.</p>
        <div class="grid md:grid-cols-2 gap-6 items-center">
            <div class="bg-white p-2 border rounded-lg"><p class="text-xs font-bold text-center mb-2">Antes (Nodo A está desbalanceado)</p><div class="mermaid">graph TD; A-->B; B-->C;</div></div>
            <div class="bg-white p-2 border rounded-lg"><p class="text-xs font-bold text-center mb-2">Después (Rotación a la Izquierda en A)</p><div class="mermaid">graph TD; B-->A; B-->C;</div></div>
        </div>
        <p class="text-sm text-center text-gray-500 mt-4">El nodo <code>B</code> "sube" para convertirse en la nueva raíz, y <code>A</code> se convierte en su hijo izquierdo.</p>
      `
    },
    {
      id: 'p16-7',
      title: 'Rotaciones Dobles (Casos LR y RL)',
      notes: 'Explicar conceptualmente las rotaciones dobles.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Casos Cruzados: Rotaciones Dobles</h3>
        <p class="text-gray-600 mb-4">Ocurren cuando la inserción es en el sub-árbol "interno".</p>
        <div class="grid md:grid-cols-2 gap-8">
            <div>
                <h5 class="font-bold">Caso LR (Izquierda-Derecha)</h5>
                <p class="text-sm text-gray-600 mb-2">Desbalance en el hijo <strong>izquierdo</strong>, pero en su sub-árbol <strong>derecho</strong>.</p>
                <div class="bg-white p-2 border rounded-lg"><div class="mermaid">graph TD; C-->A; A-->B;</div></div>
                <p class="text-xs mt-2"><strong>Solución:</strong> Primero una rotación a la izquierda en <code>A</code>, y luego una rotación a la derecha en <code>C</code>.</p>
            </div>
            <div>
                <h5 class="font-bold">Caso RL (Derecha-Izquierda)</h5>
                <p class="text-sm text-gray-600 mb-2">Desbalance en el hijo <strong>derecho</strong>, pero en su sub-árbol <strong>izquierdo</strong>.</p>
                <div class="bg-white p-2 border rounded-lg"><div class="mermaid">graph TD; A-->C; C-->B;</div></div>
                <p class="text-xs mt-2"><strong>Solución:</strong> Primero una rotación a la derecha en <code>C</code>, y luego una rotación a la izquierda en <code>A</code>.</p>
            </div>
        </div>
      `
    },
    {
      id: 'p16-8',
      title: 'Práctica: Taller de Rotaciones',
      notes: 'Un ejercicio para aplicar las rotaciones en papel.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">A Rotar se ha Dicho</h3>
        <p class="text-gray-600 mb-4">Para cada uno de los siguientes árboles (donde el nodo rojo está desbalanceado), identifica el tipo de caso (LL, RR, LR, RL) y dibuja el árbol resultante después de la(s) rotación(es) correspondiente(s).</p>
        <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 border rounded-lg"><p class="font-bold text-center mb-2">Ejercicio 1</p><div class="mermaid">graph TD; A(50, FE=-2)-->B(70); B-->C(80); style A stroke:#f00,stroke-width:2px;</div></div>
            <div class="bg-white p-4 border rounded-lg"><p class="font-bold text-center mb-2">Ejercicio 2</p><div class="mermaid">graph TD; A(50, FE=2)-->B(30); B-->C(20); style A stroke:#f00,stroke-width:2px;</div></div>
            <div class="bg-white p-4 border rounded-lg"><p class="font-bold text-center mb-2">Ejercicio 3</p><div class="mermaid">graph TD; A(50, FE=2)-->B(20); B-->C(30); style A stroke:#f00,stroke-width:2px;</div></div>
            <div class="bg-white p-4 border rounded-lg"><p class="font-bold text-center mb-2">Ejercicio 4</p><div class="mermaid">graph TD; A(50, FE=-2)-->B(80); B-->C(70); style A stroke:#f00,stroke-width:2px;</div></div>
        </div>
      `
    },
    {
      id: 'p16-9',
      title: 'AVL vs. BST: El Trade-off',
      notes: 'Comparar ventajas y desventajas.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4 text-center">¿Entonces, Siempre Uso AVL?</h3>
        <p class="text-gray-600 mb-4 text-center">No necesariamente. La elección depende de la aplicación.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
             <h5 class="font-bold text-green-900">Cuándo usar AVL</h5>
             <ul class="list-disc pl-5 text-sm text-green-800">
               <li>Cuando las <strong>búsquedas son mucho más frecuentes</strong> que las inserciones y eliminaciones.</li>
               <li>Cuando necesitas un rendimiento de búsqueda <strong>garantizado</strong> de O(log N).</li>
               <li>Aplicaciones de solo lectura o "lookup-heavy".</li>
             </ul>
          </div>
          <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
             <h5 class="font-bold text-yellow-900">Cuándo un BST Simple puede ser mejor</h5>
             <ul class="list-disc pl-5 text-sm text-yellow-800">
               <li>Cuando las <strong>inserciones y eliminaciones son muy frecuentes</strong> y el costo de las rotaciones puede ser un problema.</li>
               <li>Si los datos de entrada son aleatorios (tienden a crear árboles naturalmente balanceados).</li>
               <li>Cuando la simplicidad de la implementación es importante.</li>
             </ul>
          </div>
        </div>
      `
    },
    {
      id: 'p16-end-questions',
      title: '¿Preguntas?',
      notes: 'Espacio para dudas.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full">
          <h3 class="text-2xl font-bold text-slate-900 mb-4">¿Dudas sobre Factores de Equilibrio o Rotaciones?</h3>
        </div>
      `
    },
    {
      id: 'p16-end-thanks',
      title: 'Gracias y Próxima Clase',
      notes: 'Cierre y adelanto.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center">
          <h2 class="text-3xl font-bold text-slate-900 mb-4">Fin del Módulo 16</h2>
          <p class="text-gray-600 text-lg">Los árboles AVL son solo un tipo de árbol auto-balanceable. En la próxima clase, veremos otra alternativa popular: los <b>Árboles Rojo-Negro</b>.</p>
        </div>
      `
    }
  ]
};
