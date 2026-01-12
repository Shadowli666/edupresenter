import { Module } from '../../types';

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
            A diferencia de las estructuras lineales (listas, pilas, colas) que son como una fila de personas, un <strong>Árbol</strong> es una estructura jerárquica.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div class="bg-indigo-50 p-4 rounded-xl border border-indigo-200">
              <h4 class="font-bold text-indigo-900 mb-2 flex items-center gap-2">
                <span class="text-2xl">🌳</span> Metáfora Natural
              </h4>
              <p class="text-sm text-indigo-800">
                Igual que un árbol real tiene raíces, ramas y hojas, en computación usamos estos mismos términos. La única diferencia: ¡Nuestros árboles crecen hacia abajo!
              </p>
            </div>

            <div class="bg-white p-4 rounded-xl border shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2 text-sm border-b pb-1">Ejemplo: Sistema de Archivos</h4>
              <div class="font-mono text-xs text-slate-600 space-y-1">
                <div class="flex items-center gap-1"><span class="text-yellow-500">📁</span> / (Raíz)</div>
                <div class="flex items-center gap-1 pl-4"><span class="text-yellow-500">📁</span> home</div>
                <div class="flex items-center gap-1 pl-8"><span class="text-yellow-500">📁</span> usuario</div>
                <div class="flex items-center gap-1 pl-12"><span class="text-blue-400">📄</span> documentos.txt</div>
                <div class="flex items-center gap-1 pl-12"><span class="text-blue-400">📄</span> foto.jpg</div>
                <div class="flex items-center gap-1 pl-4"><span class="text-yellow-500">📁</span> bin</div>
              </div>
            </div>
          </div>

          <div class="bg-white p-4 rounded-xl border shadow-sm flex justify-center">
            <div class="mermaid">
              graph TD
                A((Raíz)) --- B((Rama))
                A --- C((Rama))
                B --- D((Hoja))
                B --- E((Hoja))
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
      title: 'Anatomía de un Árbol',
      notes: 'Usar un diagrama para que los estudiantes asocien los términos visualmente y consolidar el vocabulario.',
      contentHtml: `
        <div class="space-y-6">
          <div class="flex justify-center items-center bg-white p-4 rounded-xl border shadow-sm relative">
            <div class="absolute top-2 right-2 bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded">Altura: 3</div>
            <div class="mermaid" style="transform: scale(0.9);">
              graph TD
                  A(Raíz) --> B(Padre);
                  A --> C(Padre);
                  B --> D(Hijo);
                  B --> E(Hoja);
                  C --> F(Hoja);
                  
                  style A fill:#e0f2fe,stroke:#0ea5e9,stroke-width:2px;
                  style B fill:#f0f9ff,stroke:#bae6fd;
                  style C fill:#f0f9ff,stroke:#bae6fd;
                  style D fill:#f5f3ff,stroke:#818cf8;
                  style E fill:#dcfce7,stroke:#22c55e;
                  style F fill:#dcfce7,stroke:#22c55e;
            </div>
          </div>
          
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="bg-blue-50 p-2 rounded border border-blue-100">
              <span class="block font-bold text-blue-900 text-xs">Raíz</span>
              <span class="text-[10px] text-blue-800">El único nodo sin padre. El inicio de todo.</span>
            </div>
            <div class="bg-green-50 p-2 rounded border border-green-100">
              <span class="block font-bold text-green-900 text-xs">Hoja</span>
              <span class="text-[10px] text-green-800">Nodo sin hijos. El final del camino.</span>
            </div>
            <div class="bg-purple-50 p-2 rounded border border-purple-100">
              <span class="block font-bold text-purple-900 text-xs">Nivel</span>
              <span class="text-[10px] text-purple-800">Distancia desde la raíz (Raíz = Nivel 0).</span>
            </div>
            <div class="bg-orange-50 p-2 rounded border border-orange-100">
              <span class="block font-bold text-orange-900 text-xs">Grado</span>
              <span class="text-[10px] text-orange-800">Número de hijos que tiene un nodo.</span>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn1-3',
      title: 'Árboles Binarios: La Regla del Dos',
      notes: 'Introducir los árboles binarios como un tipo fundamental para muchos algoritmos.',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Un <strong>Árbol Binario</strong> es un club exclusivo donde cada nodo puede tener <strong>máximo dos hijos</strong>: Izquierdo y Derecho.
          </p>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-4 rounded-xl border-2 border-green-200 flex flex-col items-center">
              <h4 class="font-bold text-green-900 mb-2">✅ Válido</h4>
              <div class="mermaid">
                graph TD
                  A((8)) --> B((3))
                  A --> C((10))
                  B --> D((1))
                  B --> E((6))
                  C --> F((14))
                  style A fill:#dcfce7,stroke:#16a34a
              </div>
              <p class="text-xs text-green-800 mt-2 text-center">Nadie tiene más de 2 hijos.</p>
            </div>

            <div class="bg-red-50 p-4 rounded-xl border-2 border-red-200 flex flex-col items-center">
              <h4 class="font-bold text-red-900 mb-2">❌ Inválido</h4>
              <div class="mermaid">
                graph TD
                  A((8)) --> B((3))
                  A --> C((10))
                  B --> D((6))
                  B --> E((9))
                  B --> F((12))
                  style B fill:#fee2e2,stroke:#ef4444,stroke-width:2px
                  style F fill:#fee2e2,stroke:#ef4444
              </div>
              <p class="text-xs text-red-800 mt-2 text-center">¡Error! El nodo 3 tiene 3 hijos.</p>
            </div>
          </div>
          
          <div class="bg-blue-50 p-3 rounded text-center text-sm text-blue-800">
            <strong>¿Por qué Binarios?</strong> Son la base de la búsqueda eficiente. Como dividir un libro por la mitad repetidamente.
          </div>
        </div>
      `
    },
    {
      id: 'pnn1-4-node-code',
      title: 'El Nodo: El Ladrillo Fundamental',
      notes: 'Representación fundamental del nodo en C++ y Python.',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-600">
            Cada nodo es un contenedor con tres compartimentos: El Dato, y dos "Flechas" (Punteros) a sus hijos.
          </p>
          
          <div class="flex justify-center mb-4">
             <div class="flex border-2 border-slate-800 rounded-lg overflow-hidden shadow-lg bg-white">
                <div class="bg-red-100 p-3 border-r border-slate-300 flex flex-col items-center w-20">
                   <span class="text-[10px] text-red-800 font-bold">Izquierdo</span>
                   <span class="text-2xl">↙️</span>
                </div>
                <div class="bg-yellow-100 p-3 border-r border-slate-300 flex flex-col items-center w-24">
                   <span class="text-[10px] text-yellow-800 font-bold">Dato</span>
                   <span class="text-2xl font-bold text-slate-800">42</span>
                </div>
                <div class="bg-blue-100 p-3 flex flex-col items-center w-20">
                   <span class="text-[10px] text-blue-800 font-bold">Derecho</span>
                   <span class="text-2xl">↘️</span>
                </div>
             </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-slate-900 text-slate-300 p-4 rounded-xl font-mono text-xs shadow-lg relative">
              <div class="absolute top-0 right-0 bg-blue-600 text-white text-[10px] px-2 py-1 rounded-bl-lg font-bold">C++</div>
              <span class="text-purple-400">struct</span> <span class="text-yellow-400">NodoArbol</span> {<br>
              &nbsp;&nbsp;<span class="text-blue-400">int</span> dato;<br>
              &nbsp;&nbsp;NodoArbol* izquierdo;<br>
              &nbsp;&nbsp;NodoArbol* derecho;<br>
              };
            </div>
            <div class="bg-slate-900 text-slate-300 p-4 rounded-xl font-mono text-xs shadow-lg relative">
              <div class="absolute top-0 right-0 bg-yellow-600 text-white text-[10px] px-2 py-1 rounded-bl-lg font-bold">Python</div>
              <span class="text-purple-400">class</span> <span class="text-yellow-400">NodoArbol</span>:<br>
              &nbsp;&nbsp;<span class="text-purple-400">def</span> <span class="text-blue-400">__init__</span>(self, dato):<br>
              &nbsp;&nbsp;&nbsp;&nbsp;self.dato = dato<br>
              &nbsp;&nbsp;&nbsp;&nbsp;self.izquierdo = <span class="text-purple-400">None</span><br>
              &nbsp;&nbsp;&nbsp;&nbsp;self.derecho = <span class="text-purple-400">None</span>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn1-5-traversals-intro',
      title: 'Recorridos: El GPS del Árbol',
      notes: 'Introducir los recorridos como métodos sistemáticos para visitar nodos.',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-600">
            En una lista, solo hay un camino (adelante). En un árbol, hay muchas intersecciones. ¿Qué ruta tomamos?
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-white p-4 rounded-xl border-2 border-blue-100 shadow-sm hover:border-blue-300 transition-colors">
               <div class="text-3xl mb-2">🥇</div>
               <h4 class="font-bold text-blue-900">Pre-orden</h4>
               <p class="text-xs text-gray-500 mb-2">"Yo primero"</p>
               <div class="bg-blue-50 p-2 rounded text-center font-mono text-xs font-bold text-blue-700">
                 Raíz &rarr; Izq &rarr; Der
               </div>
            </div>

            <div class="bg-white p-4 rounded-xl border-2 border-purple-100 shadow-sm hover:border-purple-300 transition-colors">
               <div class="text-3xl mb-2">🥈</div>
               <h4 class="font-bold text-purple-900">In-orden</h4>
               <p class="text-xs text-gray-500 mb-2">"Yo en medio"</p>
               <div class="bg-purple-50 p-2 rounded text-center font-mono text-xs font-bold text-purple-700">
                 Izq &rarr; Raíz &rarr; Der
               </div>
            </div>

            <div class="bg-white p-4 rounded-xl border-2 border-red-100 shadow-sm hover:border-red-300 transition-colors">
               <div class="text-3xl mb-2">🥉</div>
               <h4 class="font-bold text-red-900">Post-orden</h4>
               <p class="text-xs text-gray-500 mb-2">"Yo al final"</p>
               <div class="bg-red-50 p-2 rounded text-center font-mono text-xs font-bold text-red-700">
                 Izq &rarr; Der &rarr; Raíz
               </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn1-6-preorder',
      title: 'Pre-orden (Raíz -> Izq -> Der)',
      notes: 'Explicar Pre-orden con código y un ejemplo simple.',
      contentHtml: `
        <div class="space-y-6">
          <div class="flex items-center gap-4 bg-blue-50 p-4 rounded-xl border border-blue-200">
             <div class="text-4xl">📸</div>
             <div>
               <h4 class="font-bold text-blue-900">Ideal para Copiar</h4>
               <p class="text-xs text-blue-800">Visita la raíz antes de explorar. Útil para clonar un árbol tal cual es.</p>
             </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6 items-center">
            <div class="bg-slate-900 text-slate-300 p-4 rounded-xl font-mono text-xs shadow-lg">
              <span class="text-purple-400">void</span> preorden(nodo) {<br>
              &nbsp;&nbsp;<span class="text-purple-400">if</span> (!nodo) <span class="text-purple-400">return</span>;<br>
              &nbsp;&nbsp;<span class="text-green-400">print</span>(nodo->dato); <span class="text-gray-500">// 1. Visita</span><br>
              &nbsp;&nbsp;preorden(nodo->izq);  <span class="text-gray-500">// 2. Izquierda</span><br>
              &nbsp;&nbsp;preorden(nodo->der);  <span class="text-gray-500">// 3. Derecha</span><br>
              }
            </div>
            <div class="flex flex-col items-center bg-white p-4 rounded-xl border shadow-sm">
               <div class="mermaid">
                  graph TD
                    A((1)) --> B((2))
                    A --> C((3))
                    B --> D((4))
                    B --> E((5))
                    style A fill:#bfdbfe,stroke:#2563eb
               </div>
               <div class="mt-2 font-mono text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded">
                 1 &rarr; 2 &rarr; 4 &rarr; 5 &rarr; 3
               </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn1-7-inorder',
      title: 'In-orden (Izq -> Raíz -> Der)',
      notes: 'Explicar In-orden. Destacar su uso para ordenamiento en BSTs.',
      contentHtml: `
        <div class="space-y-6">
          <div class="flex items-center gap-4 bg-purple-50 p-4 rounded-xl border border-purple-200">
             <div class="text-4xl">🔢</div>
             <div>
               <h4 class="font-bold text-purple-900">Ideal para Ordenar</h4>
               <p class="text-xs text-purple-800">Si el árbol es de búsqueda (BST), este recorrido te da los números de menor a mayor.</p>
             </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6 items-center">
            <div class="bg-slate-900 text-slate-300 p-4 rounded-xl font-mono text-xs shadow-lg">
              <span class="text-purple-400">void</span> inorden(nodo) {<br>
              &nbsp;&nbsp;<span class="text-purple-400">if</span> (!nodo) <span class="text-purple-400">return</span>;<br>
              &nbsp;&nbsp;inorden(nodo->izq);   <span class="text-gray-500">// 1. Izquierda</span><br>
              &nbsp;&nbsp;<span class="text-green-400">print</span>(nodo->dato); <span class="text-gray-500">// 2. Visita</span><br>
              &nbsp;&nbsp;inorden(nodo->der);   <span class="text-gray-500">// 3. Derecha</span><br>
              }
            </div>
            <div class="flex flex-col items-center bg-white p-4 rounded-xl border shadow-sm">
               <div class="mermaid">
                  graph TD
                    A((1)) --> B((2))
                    A --> C((3))
                    B --> D((4))
                    B --> E((5))
                    style A fill:#e9d5ff,stroke:#9333ea
               </div>
               <div class="mt-2 font-mono text-sm font-bold text-purple-600 bg-purple-50 px-3 py-1 rounded">
                 4 &rarr; 2 &rarr; 5 &rarr; 1 &rarr; 3
               </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn1-8-postorder',
      title: 'Post-orden (Izq -> Der -> Raíz)',
      notes: 'Explicar Post-orden. Destacar su uso para eliminar árboles.',
      contentHtml: `
        <div class="space-y-6">
          <div class="flex items-center gap-4 bg-red-50 p-4 rounded-xl border border-red-200">
             <div class="text-4xl">💣</div>
             <div>
               <h4 class="font-bold text-red-900">Ideal para Eliminar</h4>
               <p class="text-xs text-red-800">Elimina a los hijos antes que al padre. ¡Seguridad ante todo!</p>
             </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6 items-center">
            <div class="bg-slate-900 text-slate-300 p-4 rounded-xl font-mono text-xs shadow-lg">
              <span class="text-purple-400">void</span> postorden(nodo) {<br>
              &nbsp;&nbsp;<span class="text-purple-400">if</span> (!nodo) <span class="text-purple-400">return</span>;<br>
              &nbsp;&nbsp;postorden(nodo->izq);  <span class="text-gray-500">// 1. Izquierda</span><br>
              &nbsp;&nbsp;postorden(nodo->der);  <span class="text-gray-500">// 2. Derecha</span><br>
              &nbsp;&nbsp;<span class="text-green-400">print</span>(nodo->dato); <span class="text-gray-500">// 3. Visita</span><br>
              }
            </div>
            <div class="flex flex-col items-center bg-white p-4 rounded-xl border shadow-sm">
               <div class="mermaid">
                  graph TD
                    A((1)) --> B((2))
                    A --> C((3))
                    B --> D((4))
                    B --> E((5))
                    style A fill:#fecaca,stroke:#dc2626
               </div>
               <div class="mt-2 font-mono text-sm font-bold text-red-600 bg-red-50 px-3 py-1 rounded">
                 4 &rarr; 5 &rarr; 2 &rarr; 3 &rarr; 1
               </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn1-9-types',
      title: 'Tipos de Árboles Binarios',
      notes: 'Repasar clasificaciones de árboles relevantes para la eficiencia.',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-600">La forma importa. Un árbol "feo" es lento.</p>
          
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-white p-4 rounded-xl border shadow-sm text-center">
                <div class="text-2xl mb-2">🌕</div>
                <h5 class="font-bold text-slate-800">Lleno (Full)</h5>
                <p class="text-xs text-gray-500 mt-1">Todo padre tiene 0 o 2 hijos. Nadie tiene hijo único.</p>
            </div>
            <div class="bg-white p-4 rounded-xl border shadow-sm text-center">
                <div class="text-2xl mb-2">📐</div>
                <h5 class="font-bold text-slate-800">Completo (Complete)</h5>
                <p class="text-xs text-gray-500 mt-1">Lleno de arriba a abajo, izquierda a derecha. Como llenar un álbum.</p>
            </div>
            <div class="bg-white p-4 rounded-xl border-2 border-green-200 shadow-sm text-center transform scale-105">
                <div class="text-2xl mb-2">⚖️</div>
                <h5 class="font-bold text-green-800">Balanceado</h5>
                <p class="text-xs text-green-700 mt-1">La altura de izquierda y derecha es casi igual. ¡El más rápido!</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn1-10-optimization',
      title: 'Árboles y Optimización',
      notes: 'Conectar directamente las propiedades del árbol con la eficiencia algorítmica y la optimización.',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            ¿Por qué nos importa la forma? Porque la <strong>Altura (h)</strong> define la velocidad.
          </p>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-4 rounded-xl border border-green-200">
                <div class="flex justify-between items-center mb-2">
                  <h5 class="font-bold text-green-900">Balanceado (Bajo y Gordo)</h5>
                  <span class="text-2xl">🚀</span>
                </div>
                <p class="text-xs text-green-800">
                  Altura = <strong>log(N)</strong>.<br>
                  Buscar en 1 millón de datos toma solo ~20 pasos.
                </p>
            </div>
            <div class="bg-red-50 p-4 rounded-xl border border-red-200">
                <div class="flex justify-between items-center mb-2">
                  <h5 class="font-bold text-red-900">Desbalanceado (Alto y Flaco)</h5>
                  <span class="text-2xl">🐌</span>
                </div>
                <p class="text-xs text-red-800">
                  Altura = <strong>N</strong>.<br>
                  Buscar en 1 millón de datos toma 1 millón de pasos. (Igual que una lista).
                </p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn1-11-practice',
      title: 'Reto de Código',
      notes: 'Un ejercicio para que implementen lo básico de nodos y los 3 recorridos recursivos.',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-indigo-600 text-white p-4 rounded-xl shadow-lg flex justify-between items-center">
            <div>
              <h3 class="font-bold text-lg">Misión: El Explorador</h3>
              <p class="text-indigo-200 text-xs">Implementa los 3 recorridos para este árbol.</p>
            </div>
            <div class="text-3xl">🧭</div>
          </div>

          <div class="flex justify-center bg-white p-4 border rounded-xl shadow-sm">
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
          
          <div class="bg-gray-100 p-3 rounded border text-xs font-mono text-gray-600">
            <strong>Salida Esperada (In-orden):</strong> A B C D E F G H I
          </div>
        </div>
      `
    },
    {
      id: 'pnn1-12-resources',
      title: 'Caja de Herramientas',
      notes: 'Proporcionar a los estudiantes herramientas externas para reforzar su aprendizaje.',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-600">No confíes solo en tu mente. ¡Visualiza!</p>
          
          <div class="grid md:grid-cols-2 gap-4">
            <a href="https://visualgo.net/es/bst" target="_blank" class="group block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-blue-500 transition-colors">
              <h4 class="font-bold text-slate-800 group-hover:text-blue-600">VisuAlgo ↗</h4>
              <p class="text-xs text-gray-500 mt-1">Animaciones paso a paso de inserción y búsqueda.</p>
            </a>
            
            <a href="https://www.cs.usfca.edu/~galles/visualization/BST.html" target="_blank" class="group block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-green-500 transition-colors">
              <h4 class="font-bold text-slate-800 group-hover:text-green-600">USFCA Visualization ↗</h4>
              <p class="text-xs text-gray-500 mt-1">Crea tu propio árbol y ve cómo crece.</p>
            </a>
          </div>
        </div>
      `
    },
    {
      id: 'pnn1-end-questions',
      title: '¿Preguntas?',
      notes: 'Espacio para dudas.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full space-y-4">
          <div class="text-6xl">🤔</div>
          <h3 class="text-2xl font-bold text-slate-900">¿Dudas sobre la Jerarquía?</h3>
          <p class="text-gray-500">Recuerda: En árboles, la recursividad es tu mejor amiga.</p>
        </div>
      `
    },
    {
      id: 'pnn1-end-thanks',
      title: 'Próxima Clase: Heaps',
      notes: 'Cierre y adelanto.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center space-y-6">
          <div class="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-4xl">
            ⛰️
          </div>
          <div>
            <h2 class="text-3xl font-bold text-slate-900">Fin del Módulo 1</h2>
            <p class="text-gray-600 mt-2">
              Próxima parada: <strong>Heaps (Montículos)</strong>.<br>
              Descubriremos cómo un árbol puede comportarse como una cola de prioridad.
            </p>
          </div>
        </div>
      `
    }
  ]
};