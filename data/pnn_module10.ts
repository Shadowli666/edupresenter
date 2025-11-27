
import { Module } from '../types';

export const PNN_MODULE_10: Module = {
  id: 'pnn-mod-10',
  title: '10. Árboles de Expansión Mínima',
  description: 'Minimum Spanning Tree (MST) y construcción mediante Prim y Kruskal con ejemplos.',
  evaluation: '0% - Práctica Guiada',
  slides: [
    {
      id: 'pnn10-1',
      title: 'Minimum Spanning Tree (MST)',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Un <strong>Árbol de Expansión Mínima</strong> de un grafo conexo y ponderado es un subconjunto de aristas que:
          </p>
          <ul class="list-disc list-inside text-sm text-slate-700 bg-slate-50 p-4 rounded border">
            <li>Conecta todos los vértices del grafo.</li>
            <li>No forma ciclos (es un árbol).</li>
            <li>La suma total de los pesos de las aristas es la mínima posible.</li>
          </ul>

          <div class="flex justify-center my-4">
             <div class="mermaid">
               graph TD
                 A((A)) ---|1| B((B))
                 B ---|2| C((C))
                 A ---|10| C((C))
                 style A fill:#e0e7ff
                 style B fill:#e0e7ff
                 style C fill:#e0e7ff
                 linkStyle 0 stroke:green,stroke-width:4px
                 linkStyle 1 stroke:green,stroke-width:4px
                 linkStyle 2 stroke:gray,stroke-width:1px,stroke-dasharray: 5 5
             </div>
          </div>
          <p class="text-center text-xs text-slate-500">Las líneas verdes forman el MST (Costo total = 3). La arista de peso 10 se descarta.</p>
        </div>
      `
    },
    {
      id: 'pnn10-2',
      title: 'Prim vs Kruskal',
      contentHtml: `
        <div class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-indigo-50 p-5 rounded-lg border border-indigo-100">
              <h4 class="font-bold text-indigo-900 mb-2">Algoritmo de Prim</h4>
              <p class="text-sm text-indigo-800 mb-3">
                Crece el árbol desde un nodo inicial. En cada paso, añade la arista más barata que conecta un nodo del árbol con uno fuera de él.
              </p>
              <span class="text-xs font-bold bg-indigo-200 text-indigo-800 px-2 py-1 rounded">Similar a Dijkstra</span>
            </div>

            <div class="bg-teal-50 p-5 rounded-lg border border-teal-100">
              <h4 class="font-bold text-teal-900 mb-2">Algoritmo de Kruskal</h4>
              <p class="text-sm text-teal-800 mb-3">
                Ordena todas las aristas por peso. Añade las aristas de menor a mayor, siempre que no formen un ciclo.
              </p>
              <span class="text-xs font-bold bg-teal-200 text-teal-800 px-2 py-1 rounded">Usa Union-Find</span>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn10-3',
      title: 'Ejemplo Guiado: Aplicando Prim',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Apliquemos el algoritmo de Prim paso a paso sobre un grafo sencillo.
          </p>

          <div class="grid md:grid-cols-2 gap-6 items-start">
            <div class="bg-slate-50 p-4 rounded-xl border flex justify-center">
              <div class="mermaid">
                graph LR
                  A((A)) --2--> B((B))
                  A --3--> C((C))
                  B --1--> C
                  B --4--> D((D))
                  C --5--> D
              </div>
            </div>

            <div class="bg-white p-4 rounded-xl border text-xs font-mono">
              <p class="font-bold mb-2">Construcción del MST (iniciando en A)</p>
              <pre>
Paso 1: MST = {A}, aristas candidatas: (A,B,2), (A,C,3)
Paso 2: Tomar (A,B,2)  -> MST = {A,B}
        Candidatas: (A,C,3), (B,C,1), (B,D,4)
Paso 3: Tomar (B,C,1)  -> MST = {A,B,C}
        Candidatas: (B,D,4), (C,D,5)
Paso 4: Tomar (B,D,4)  -> MST = {A,B,C,D}
        FIN (todos los nodos conectados)
              </pre>
              <div class="mt-3">
                <h5 class="font-bold text-slate-800 mb-2">Mini-traza (candidatas y elección)</h5>
                <div class="overflow-x-auto">
                  <table class="text-[11px] w-full border">
                    <thead>
                      <tr class="bg-slate-100">
                        <th class="border px-2 py-1 text-left">Paso</th>
                        <th class="border px-2 py-1 text-left">MST</th>
                        <th class="border px-2 py-1 text-left">Candidatas</th>
                        <th class="border px-2 py-1 text-left">Elegida</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="border px-2 py-1">1</td>
                        <td class="border px-2 py-1">{A}</td>
                        <td class="border px-2 py-1">(A,B,2), (A,C,3)</td>
                        <td class="border px-2 py-1">(A,B,2)</td>
                      </tr>
                      <tr>
                        <td class="border px-2 py-1">2</td>
                        <td class="border px-2 py-1">{A,B}</td>
                        <td class="border px-2 py-1">(A,C,3), (B,C,1), (B,D,4)</td>
                        <td class="border px-2 py-1">(B,C,1)</td>
                      </tr>
                      <tr>
                        <td class="border px-2 py-1">3</td>
                        <td class="border px-2 py-1">{A,B,C}</td>
                        <td class="border px-2 py-1">(B,D,4), (C,D,5)</td>
                        <td class="border px-2 py-1">(B,D,4)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn10-4',
      title: 'Ejemplo Guiado: Aplicando Kruskal',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Ahora, sobre el mismo grafo, construyamos el MST usando Kruskal.
          </p>

          <div class="bg-white p-4 rounded-xl border text-xs font-mono max-w-xl mx-auto">
            <p class="font-bold mb-2">Ordenando aristas por peso</p>
            <pre>
Lista de aristas ordenadas:
  (B,C,1), (A,B,2), (A,C,3), (B,D,4), (C,D,5)

Paso 1: Tomar (B,C,1)   -> no forma ciclo  -> INCLUÍR
Paso 2: Tomar (A,B,2)   -> no forma ciclo  -> INCLUÍR
Paso 3: Tomar (A,C,3)   -> forma ciclo A-B-C-A -> DESCARTAR
Paso 4: Tomar (B,D,4)   -> no forma ciclo  -> INCLUÍR
Resultado: MST con aristas {(B,C,1), (A,B,2), (B,D,4)}
            </pre>
            <div class="mt-3">
              <h5 class="font-bold text-slate-800 mb-2">Mini-traza (Union-Find)</h5>
              <div class="overflow-x-auto">
                <table class="text-[11px] w-full border">
                  <thead>
                    <tr class="bg-slate-100">
                      <th class="border px-2 py-1 text-left">Paso</th>
                      <th class="border px-2 py-1 text-left">Arista</th>
                      <th class="border px-2 py-1 text-left">Find(u), Find(v)</th>
                      <th class="border px-2 py-1 text-left">Acción</th>
                      <th class="border px-2 py-1 text-left">MST</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border px-2 py-1">1</td>
                      <td class="border px-2 py-1">(B,C,1)</td>
                      <td class="border px-2 py-1">B, C</td>
                      <td class="border px-2 py-1">Union(B,C)</td>
                      <td class="border px-2 py-1">{(B,C,1)}</td>
                    </tr>
                    <tr>
                      <td class="border px-2 py-1">2</td>
                      <td class="border px-2 py-1">(A,B,2)</td>
                      <td class="border px-2 py-1">A, B</td>
                      <td class="border px-2 py-1">Union(A,B)</td>
                      <td class="border px-2 py-1">{(B,C,1),(A,B,2)}</td>
                    </tr>
                    <tr>
                      <td class="border px-2 py-1">3</td>
                      <td class="border px-2 py-1">(A,C,3)</td>
                      <td class="border px-2 py-1">Find(A)=Find(B), Find(C)=Find(B)</td>
                      <td class="border px-2 py-1">Ciclo → DESCARTAR</td>
                      <td class="border px-2 py-1">{(B,C,1),(A,B,2)}</td>
                    </tr>
                    <tr>
                      <td class="border px-2 py-1">4</td>
                      <td class="border px-2 py-1">(B,D,4)</td>
                      <td class="border px-2 py-1">Find(B)=Find(A), Find(D)=D</td>
                      <td class="border px-2 py-1">Union(B,D)</td>
                      <td class="border px-2 py-1">{(B,C,1),(A,B,2),(B,D,4)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn10-5',
      title: 'Actividad Práctica: Diseña un MST',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Diseñen un grafo ponderado con al menos 5 nodos y 7 aristas. Luego:
          </p>
          <ol class="list-decimal list-inside text-sm text-slate-700 space-y-2 bg-slate-50 p-4 rounded-lg border">
            <li>Construyan el MST con Prim escogiendo un nodo inicial.</li>
            <li>Construyan el MST con Kruskal.</li>
            <li>Verifiquen que el costo total en ambos casos sea el mismo.</li>
            <li>Discutan: ¿en cuál algoritmo fue más fácil detectar ciclos?</li>
          </ol>
          
        </div>
      `
    },
    {
      id: 'pnn10-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="text-6xl font-bold text-indigo-600 mb-6 select-none">?</div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Árboles de Expansión Mínima</h3>
          <p class="text-center text-gray-600 max-w-md">
            ¿Dudas sobre cómo aplicar Prim y Kruskal, o sobre la interpretación del costo de un MST en problemas reales?
          </p>
        </div>
      `
    },
    {
      id: 'pnn10-end-thanks',
      title: 'Gracias por su atención',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">Fin de la Clase</h2>
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-indigo-500 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "Encontrar un árbol de expansión mínima es como construir la red más barata que lo conecta todo." 
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
