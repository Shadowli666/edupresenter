
import { Module } from '../types';

export const PNN_MODULE_7: Module = {
  id: 'pnn-mod-7',
  title: '7. Teoría de Grafos',
  description: 'Introducción a los grafos, definiciones, tipos y primeras aplicaciones.',
  evaluation: '0% - Introducción Magistral',
  slides: [
    {
      id: 'pnn7-1',
      title: '¿Qué es un Grafo?',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700 text-lg">
            Un <strong>Grafo</strong> es una estructura de datos no lineal que consta de un conjunto finito de nodos (llamados <strong>vértices</strong>) y un conjunto de líneas que los conectan (llamadas <strong>aristas</strong> o arcos).
          </p>

          <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex justify-center">
            <div class="mermaid">
              graph LR
                A((A)) --- B((B))
                B --- C((C))
                A --- C((C))
                C --- D((D))
                
                style A fill:#fef3c7,stroke:#d97706,stroke-width:2px
                style B fill:#fef3c7,stroke:#d97706,stroke-width:2px
                style C fill:#fef3c7,stroke:#d97706,stroke-width:2px
                style D fill:#fef3c7,stroke:#d97706,stroke-width:2px
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div class="bg-slate-50 p-4 rounded border">
               <strong class="block text-slate-800 mb-1">Vértices (V)</strong>
               <span class="text-slate-600">Son los puntos o nodos del grafo. Representan entidades.</span>
            </div>
            <div class="bg-slate-50 p-4 rounded border">
               <strong class="block text-slate-800 mb-1">Aristas (E)</strong>
               <span class="text-slate-600">Son las líneas que unen los vértices. Representan relaciones.</span>
            </div>
          </div>
          
          <p class="text-sm text-gray-500 italic">
            Matemáticamente, un grafo G se define como un par ordenado G = (V, E).
          </p>
        </div>
      `
    },
    {
      id: 'pnn7-2',
      title: 'Tipos de Grafos',
      contentHtml: `
        <div class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-blue-50 p-5 rounded-lg border border-blue-100">
              <h4 class="font-bold text-blue-900 mb-2">Grafo Dirigido (Dígrafo)</h4>
              <p class="text-sm text-blue-800 mb-3">
                Las aristas tienen una dirección específica (flechas). La relación va de un nodo origen a un nodo destino.
              </p>
              <div class="mermaid">
                graph LR
                  A((A)) --> B((B))
                  B --> C((C))
                  C --> A((A))
              </div>
            </div>

            <div class="bg-green-50 p-5 rounded-lg border border-green-100">
              <h4 class="font-bold text-green-900 mb-2">Grafo No Dirigido</h4>
              <p class="text-sm text-green-800 mb-3">
                Las aristas no tienen dirección. La relación es bidireccional por defecto.
              </p>
              <div class="mermaid">
                graph LR
                  X((X)) --- Y((Y))
                  Y --- Z((Z))
                  Z --- X((X))
              </div>
            </div>
          </div>

          <div class="bg-purple-50 p-5 rounded-lg border border-purple-100 mt-4">
             <h4 class="font-bold text-purple-900 mb-2">Grafo Ponderado</h4>
             <p class="text-sm text-purple-800">
               Es aquel donde cada arista tiene asignado un valor o <strong>peso</strong> (costo, distancia, tiempo).
             </p>
             <div class="flex justify-center mt-2">
                <div class="mermaid">
                  graph LR
                    A((A)) -- 5 --> B((B))
                    B -- 10 --> C((C))
                    A -- 3 --> C((C))
                </div>
             </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn7-3',
      title: 'Ejemplo Guiado: Red de Amigos',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Imaginemos una pequeña red social con 4 personas: Ana (A), Beto (B), Carla (C) y Diego (D).
          </p>

          <div class="grid md:grid-cols-2 gap-6 items-start">
            <div class="bg-white p-5 rounded-xl border shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">Relaciones de amistad</h4>
              <ul class="list-disc list-inside text-sm text-slate-700 space-y-1">
                <li>A es amigo de B y C.</li>
                <li>B es amigo de C.</li>
                <li>C es amiga de D.</li>
              </ul>
              <p class="mt-3 text-sm text-slate-600">
                Podemos modelar esto con un grafo no dirigido donde los vértices son personas y las aristas son amistades.
              </p>
              <p class="mt-3 text-xs text-slate-500">
                En notación de conjuntos: V = {A, B, C, D} y E = {AB, AC, BC, CD}.
              </p>
            </div>

            <div class="bg-slate-50 p-4 rounded-xl border flex justify-center">
              <div class="mermaid">
                graph LR
                  A((Ana)) --- B((Beto))
                  A --- C((Carla))
                  B --- C
                  C --- D((Diego))
              </div>
            </div>
          </div>

          <div class="bg-indigo-50 p-4 rounded-lg border border-indigo-200 text-sm text-indigo-900">
            <p class="font-bold mb-2">Para discutir en clase</p>
            <ul class="list-disc list-inside space-y-1">
              <li>¿Cuál es el conjunto de vértices V?</li>
              <li>¿Cuál es el conjunto de aristas E?</li>
              <li>¿Qué cambia si consideramos que la amistad es dirigida (A sigue a B pero B no sigue a A)?</li>
            </ul>
            
          </div>
        </div>
      `
    },
    {
      id: 'pnn7-4',
      title: 'Actividad Práctica: Modela tu Propia Red',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            En esta actividad cada estudiante (o pareja en sala de grupo pequeño) modelará una pequeña situación real usando grafos.
          </p>

          <div class="bg-white p-5 rounded-xl border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-3">Ideas de escenarios</h4>
            <ul class="list-disc list-inside text-sm text-slate-700 space-y-1">
              <li>Red de aulas conectadas por pasillos dentro de la universidad.</li>
              <li>Mapa simplificado de paradas de autobús de su ciudad.</li>
              <li>Relaciones "sigue a" en una red social entre 5 usuarios.</li>
            </ul>
          </div>

          <ol class="list-decimal list-inside text-sm text-slate-700 space-y-2 bg-slate-50 p-4 rounded-lg border">
            <li>Definan claramente qué será un vértice y qué representará una arista.</li>
            <li>Escriban los conjuntos V y E.</li>
            <li>Dibujen el grafo en sus cuadernos, tablet o herramienta online (por ejemplo, Jamboard o Excalidraw).</li>
            <li>Clasifiquen su grafo: ¿dirigido o no dirigido?, ¿ponderado o no ponderado?</li>
          </ol>

          
        </div>
      `
    },
    {
      id: 'pnn7-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="text-6xl font-bold text-indigo-600 mb-6 select-none">?</div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Fundamentos de Grafos</h3>
          <p class="text-center text-gray-600 max-w-md">
            ¿Dudas sobre vértices, aristas, tipos de grafos o cómo modelar problemas reales con grafos?
          </p>
        </div>
      `
    },
    {
      id: 'pnn7-end-thanks',
      title: 'Gracias por su atención',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">Fin de la Clase</h2>
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-indigo-500 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "Antes de programar con grafos, aprende a ver el mundo como un conjunto de nodos y conexiones." 
            </p>
            <footer class="flex items-center justify-center gap-2">
              <div class="h-px w-8 bg-slate-300"></div>
              <cite class="not-italic font-bold text-slate-900">Programación No Numérica II</cite>
            </footer>
          </blockquote>
        </div>
      `
    }
  ]
};
