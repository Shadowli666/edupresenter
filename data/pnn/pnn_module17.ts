
import { Module } from '../../types';

export const PNN_MODULE_17: Module = {
  id: 'pnn-mod-17',
  title: '17. Suma de Subconjuntos y Proyecto',
  description: 'Problema de Suma de Subconjuntos con Programación Dinámica y lineamientos del Proyecto Final.',
  evaluation: '20% - Proyecto Final (Reto Algorítmico)',
  slides: [
    {
      id: 'pnn17-1',
      title: 'Suma de Subconjuntos',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            <strong>Problema:</strong> Dado un conjunto de enteros y un número objetivo <em>S</em>, determinar si existe algún subconjunto cuya suma sea exactamente <em>S</em>.
          </p>
          <div class="bg-slate-100 p-4 rounded border border-slate-200 font-mono text-sm">
            Conjunto = {3, 34, 4, 12, 5, 2}<br>
            Objetivo = 9<br>
            <span class="text-green-600 font-bold">Solución: {4, 5}</span>
          </div>
        </div>
      `
    },
    {
      id: 'pnn17-2',
      title: 'Tabla de Programación Dinámica',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Una forma clásica de resolver Suma de Subconjuntos es usar una tabla DP donde DP[i][s] indica si es posible lograr suma <strong>s</strong> usando los primeros <strong>i</strong> elementos.
          </p>
          <div class="bg-white p-4 rounded-xl border text-xs font-mono inline-block">
<pre>
Ejemplo pequeño: conjunto = {3, 5, 2}, objetivo S = 5

Filas: i = 0..3 (número de elementos considerados)
Columnas: s = 0..5 (suma objetivo parcial)

DP[0][0] = true, DP[0][s>0] = false

Transición:
  DP[i][s] = DP[i-1][s] OR (s >= a_i AND DP[i-1][s - a_i])

Relleno parcial:
  i=1 (a_1=3): DP[1][0]=true, DP[1][3]=true
  i=2 (a_2=5): DP[2][0]=true, DP[2][3]=true, DP[2][5]=true
  i=3 (a_3=2): DP[3][0]=true, DP[3][2]=true, DP[3][3]=true, DP[3][5]=true

Reconstrucción del subconjunto objetivo (s=5): tomar a_2 = 5
</pre>
          </div>
          
        </div>
      `
    },
    {
      id: 'pnn17-3',
      title: 'Actividad: Completa la Tabla DP',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            En parejas o individual, completen la tabla DP para el ejemplo {3, 5, 2} y objetivo S = 5.
          </p>
          <ol class="list-decimal list-inside text-sm text-slate-700 space-y-2 bg-slate-50 p-4 rounded-lg border">
            <li>Inicializar la fila i = 0.</li>
            <li>Aplicar la transición: DP[i][s] = DP[i-1][s] OR DP[i-1][s - a_i] si s ≥ a_i.</li>
            <li>Responder: ¿existe subconjunto que sume 5? ¿Cuál es?</li>
          </ol>
          
        </div>
      `
    },
    {
      id: 'pnn17-4',
      title: 'Proyecto Final: Reto Algorítmico',
      contentHtml: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-lg text-white shadow-lg">
            <h3 class="text-2xl font-bold mb-2">Defensa de Proyecto</h3>
            <p class="opacity-90">
              Implementación y análisis de un problema complejo utilizando las técnicas vistas (Greedy, Dinámica o Backtracking).
            </p>
          </div>

          <div class="bg-white p-6 border rounded-xl shadow-sm">
            <h4 class="font-bold text-slate-800 mb-4">Criterios de Evaluación</h4>
            <ul class="space-y-2 text-sm text-slate-600">
              <li>• Correctitud del algoritmo.</li>
              <li>• Eficiencia y análisis de complejidad.</li>
              <li>• Calidad del código y estructura.</li>
              <li>• Presentación oral y defensa.</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'pnn17-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="text-6xl font-bold text-indigo-600 mb-6 select-none">?</div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Suma de Subconjuntos y Proyecto</h3>
          <p class="text-center text-gray-600 max-w-md">
            Espacio para aclarar dudas sobre la tabla DP, reconstrucción del subconjunto solución o alineación del proyecto con los temas del curso.
          </p>
        </div>
      `
    },
    {
      id: 'pnn17-end-thanks',
      title: 'Gracias por su atención',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">Fin de la Clase</h2>
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-indigo-500 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "Muchos problemas de decisión se esconden detrás de una simple pregunta: ¿existe un subconjunto que cumpla esta condición?" 
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
