
import { Module } from '../../types';

export const PNN_MODULE_13: Module = {
  id: 'pnn-mod-13',
  title: '13. Grafos Multietapa y BST Óptimos',
  description: 'Aplicaciones de Programación Dinámica en grafos multietapa y árboles de búsqueda óptimos.',
  evaluation: '0% - Ejercicios Guiados',
  slides: [
    {
      id: 'pnn13-1',
      title: 'Gráficos de Múltiples Etapas',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Un <strong>Grafo Multietapa</strong> es un grafo dirigido donde los vértices están divididos en <em>k</em> etapas disjuntas. El objetivo es encontrar el camino de costo mínimo desde el origen (etapa 1) hasta el destino (etapa k).
          </p>

          <div class="bg-white p-5 border rounded-xl shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">Enfoque Dinámico</h4>
            <p class="text-sm text-slate-600">
              Podemos resolverlo avanzando (Forward) o retrocediendo (Backward).
            </p>
            <div class="bg-slate-100 p-3 mt-3 rounded font-mono text-xs text-slate-700">
              Cost(i, j) = min { c(j, l) + Cost(i+1, l) } <br>
              para todo l conectado desde j.
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn13-2',
      title: 'Ejemplo de Grafo Multietapa',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Considera un grafo con 3 etapas (1, 2 y 3) donde queremos ir del nodo S al nodo T con costo mínimo.
          </p>
          <div class="bg-slate-50 p-4 rounded-xl border flex justify-center">
            <div class="mermaid">
              graph LR
                S((S)) --> A((A))
                S --> B((B))
                A --> C((C))
                A --> D((D))
                B --> D
                C --> T((T))
                D --> T
            </div>
          </div>
          <div class="bg-white p-4 rounded-xl border text-xs font-mono">
            <p class="font-bold mb-2">Tabla de costos (ejemplo numérico)</p>
            <pre>
Costos de aristas:
  S->A = 4, S->B = 2
  A->C = 3, A->D = 6
  B->D = 4
  C->T = 5, D->T = 2

Backward (desde la última etapa):
  Cost(T) = 0
  Cost(C) = min{ C->T + Cost(T) } = 5
  Cost(D) = min{ D->T + Cost(T) } = 2
  Cost(A) = min{ A->C + Cost(C), A->D + Cost(D) } = min{3+5, 6+2} = 8
  Cost(B) = min{ B->D + Cost(D) } = 4 + 2 = 6
  Cost(S) = min{ S->A + Cost(A), S->B + Cost(B) } = min{4+8, 2+6} = 8

Camino óptimo: S -> B -> D -> T (costo total = 8)
            </pre>
          </div>
          
        </div>
      `
    },
    {
      id: 'pnn13-3',
      title: 'Árboles Binarios de Búsqueda Óptimos (OBST)',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Dado un conjunto de claves con diferentes <strong>frecuencias de búsqueda</strong>, queremos construir un BST tal que el costo promedio de búsqueda sea mínimo.
          </p>
          
          <div class="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
            <p class="text-sm text-indigo-900">
              Los elementos más buscados deben estar cerca de la raíz. La programación dinámica nos permite probar todas las posibles raíces y subárboles de manera eficiente.
            </p>
          </div>

          <div class="bg-white p-4 rounded-xl border text-xs font-mono">
<pre>
Ejemplo sencillo:
Claves: a, b, c
Probabilidades: p(a)=0.5, p(b)=0.3, p(c)=0.2

Idea: Probar como raíz a, luego b, luego c,
      y quedarnos con el árbol de menor costo esperado.
</pre>
          </div>
        </div>
      `
    },
    {
      id: 'pnn13-4',
      title: 'Actividad: Diseña un Grafo Multietapa',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            En formato individual o parejas (según tu plataforma), diseñen un pequeño grafo multietapa y definan los costos de cada arista.
          </p>
          <ol class="list-decimal list-inside text-sm text-slate-700 space-y-2 bg-slate-50 p-4 rounded-lg border">
            <li>Dividan los nodos en al menos 3 etapas.</li>
            <li>Definan un nodo inicial S y un nodo final T.</li>
            <li>Resuelvan el camino de costo mínimo usando programación dinámica (trabajando hacia atrás).</li>
          </ol>
          
        </div>
      `
    },
    {
      id: 'pnn13-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="text-6xl font-bold text-indigo-600 mb-6 select-none">?</div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Programación Dinámica en Grafos y Árboles</h3>
          <p class="text-center text-gray-600 max-w-md">
            ¿Preguntas sobre formulación de subproblemas, tablas de costos o sobre la intuición detrás de los OBST?
          </p>
        </div>
      `
    },
    {
      id: 'pnn13-end-thanks',
      title: 'Gracias por su atención',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">Fin de la Clase</h2>
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-indigo-500 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "La programación dinámica nos enseña a no recalcular lo que ya sabemos." 
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
