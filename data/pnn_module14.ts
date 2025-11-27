
import { Module } from '../types';

export const PNN_MODULE_14: Module = {
  id: 'pnn-mod-14',
  title: '14. Vendedor Viajero (TSP)',
  description: 'El problema del Agente Viajero (TSP) y su resolución con Programación Dinámica.',
  evaluation: '0% - Práctica Guiada',
  slides: [
    {
      id: 'pnn14-1',
      title: 'Traveling Salesperson Problem (TSP)',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            <strong>Problema:</strong> Un vendedor debe visitar <em>n</em> ciudades exactamente una vez y regresar a la ciudad de origen. ¿Cuál es la ruta más corta posible?
          </p>

          <div class="bg-red-50 p-5 rounded-lg border border-red-100">
            <h4 class="font-bold text-red-900 mb-2">Complejidad</h4>
            <p class="text-sm text-red-800 mb-3">
              Es un problema <strong>NP-Hard</strong>. La fuerza bruta requiere $O(n!)$, lo cual es inviable para muchos nodos.
            </p>
            <h4 class="font-bold text-red-900 mb-2">Solución Dinámica</h4>
            <p class="text-sm text-red-800">
              Reduce la complejidad a $O(n^2 2^n)$. Sigue siendo exponencial, pero mucho mejor que el factorial.
            </p>
            <div class="bg-white p-2 mt-2 rounded border border-red-200 font-mono text-xs">
              g(i, S) = min { c(i, j) + g(j, S-{j}) }
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn14-2',
      title: 'Ejemplo Pequeño de TSP',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Consideremos 4 ciudades: A, B, C y D, con la siguiente matriz de costos (distancias):
          </p>
          <div class="bg-white p-4 rounded-xl border text-xs font-mono inline-block">
<pre>
     A  B  C  D
A | 0  2  9  10
B | 1  0  6   4
C | 15 7  0   8
D | 6  3 12   0
</pre>
          </div>
          <div class="bg-slate-50 p-4 rounded-xl border text-xs font-mono">
            <p class="font-bold mb-2">Explorando estados g(i, S) (inicio A)</p>
            <pre>
Definición: g(i, S) = costo mínimo para partir desde i y visitar S (subconjunto restante), regresando al origen al final.

Ejemplo:
  g(A, {B, C}) = min{ c(A,B) + g(B,{C}),  c(A,C) + g(C,{B}) }
                = min{ 2 + g(B,{C}),      9 + g(C,{B}) }

  g(B,{C}) = c(B,C) + c(C,A) = 6 + 15 = 21
  g(C,{B}) = c(C,B) + c(B,A) = 7 + 1  = 8

Por tanto:
  g(A,{B,C}) = min{ 2 + 21, 9 + 8 } = min{23,17} = 17
Ruta parcial preferida: A -> C -> B -> A
            </pre>
          </div>
          
        </div>
      `
    },
    {
      id: 'pnn14-3',
      title: 'Actividad Práctica: Subconjuntos y Estados',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            En grupos pequeños o individual, definan los estados g(i, S) para un ejemplo de 4 ciudades y rellenen una parte de la tabla de DP.
          </p>
          <ol class="list-decimal list-inside text-sm text-slate-700 space-y-2 bg-slate-50 p-4 rounded-lg border">
            <li>Elijan una ciudad de inicio (por ejemplo A).</li>
            <li>Listar todos los subconjuntos S posibles de ciudades intermedias.</li>
            <li>Calcular g(A, {B, C}) y g(A, {B, D}) siguiendo la fórmula.</li>
          </ol>
          
        </div>
      `
    },
    {
      id: 'pnn14-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="text-6xl font-bold text-indigo-600 mb-6 select-none">?</div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">TSP y Programación Dinámica</h3>
          <p class="text-center text-gray-600 max-w-md">
            ¿Dudas sobre la formulación del TSP, la explosión combinatoria o la interpretación de los estados g(i, S)?
          </p>
        </div>
      `
    },
    {
      id: 'pnn14-end-thanks',
      title: 'Gracias por su atención',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">Fin de la Clase</h2>
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-indigo-500 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "El TSP nos recuerda que algunas soluciones requieren ser creativos para evitar probarlo todo." 
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
