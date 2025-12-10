import { Module } from '../../types';

export const PNN_MODULE_7: Module = {
  id: 'pnn-mod-7',
  title: '7. Algoritmos Voraces: La Elección Óptima Local',
  description: 'Introducción a los algoritmos Greedy con foco en el problema del cambio y otro caso práctico en Python.',
  evaluation: '0% - Introducción Magistral',
  slides: [
    {
      id: 'pnn7-1',
      title: '1. Concepto: Algoritmos Voraces (Greedy)',
      notes: 'Definición de algoritmos Greedy, cuándo funcionan y cuándo no.',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700 text-lg">
            Un <strong>Algoritmo Voraz</strong> es un paradigma algorítmico que construye una solución paso a paso. En cada etapa, elige la opción que parece "mejor" o "más óptima" en ese momento (a nivel local), sin considerar las consecuencias futuras de esta elección.
          </p>
          <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
            <h5 class="font-bold text-blue-900">La Filosofía del Voraz</h5>
            <p class="text-blue-800 text-sm mt-2">
              "Toma la mejor decisión posible en este instante, esperando que eso te lleve a la mejor solución global."
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-white p-4 rounded-lg shadow-sm border">
               <strong class="block text-green-700 mb-1">Cuándo Funcionan</strong>
               <p class="text-xs text-green-600">Cuando la elección localmente óptima conduce a una solución globalmente óptima (requiere prueba matemática).</p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-sm border">
               <strong class="block text-red-700 mb-1">Cuándo NO Funcionan</strong>
               <p class="text-xs text-red-600">Cuando la elección localmente óptima impide encontrar la solución globalmente óptima.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn7-2',
      title: '2. Componentes de un Algoritmo Voraz',
      notes: 'Describir la estructura de un algoritmo Greedy.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Anatomía de un Algoritmo Greedy</h3>
        <p class="text-gray-600 mb-4">Todo algoritmo voraz se puede descomponer en los siguientes componentes:</p>
        <div class="space-y-4">
          <div class="bg-white p-4 rounded-lg border-l-4 border-purple-500 shadow-sm">
            <h5 class="font-bold text-purple-900">1. Conjunto de Candidatos</h5>
            <p class="text-sm text-gray-700">Los elementos de los que se construye la solución.</p>
          </div>
          <div class="bg-white p-4 rounded-lg border-l-4 border-purple-500 shadow-sm">
            <h5 class="font-bold text-purple-900">2. Función de Selección</h5>
            <p class="text-sm text-gray-700">Elige el "mejor" candidato de los restantes para añadir a la solución.</p>
          </div>
          <div class="bg-white p-4 rounded-lg border-l-4 border-purple-500 shadow-sm">
            <h5 class="font-bold text-purple-900">3. Función de Factibilidad</h5>
            <p class="text-sm text-gray-700">Verifica si un candidato puede ser parte de la solución actual.</p>
          </div>
          <div class="bg-white p-4 rounded-lg border-l-4 border-purple-500 shadow-sm">
            <h5 class="font-bold text-purple-900">4. Función Objetivo</h5>
            <p class="text-sm text-gray-700">Calcula el valor (óptimo) de la solución parcial o final.</p>
          </div>
          <div class="bg-white p-4 rounded-lg border-l-4 border-purple-500 shadow-sm">
            <h5 class="font-bold text-purple-900">5. Función Solución</h5>
            <p class="text-sm text-gray-700">Determina si un conjunto de candidatos forma una solución completa.</p>
          </div>
        </div>
      `
    },
    {
      id: 'pnn7-3',
      title: '3. Ejemplo Intuitivo: El Problema del Cambio',
      notes: 'Ilustrar el Greedy con un ejemplo sencillo y cotidiano.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Devolviendo el Cambio con Menos Monedas</h3>
        <p class="text-gray-600 mb-4">Imagina que tienes que dar cambio (por ejemplo, 37 céntimos) usando la menor cantidad de monedas posible (1, 5, 10, 25 céntimos).</p>
        <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 my-4">
          <h5 class="font-bold text-yellow-900">Estrategia Greedy</h5>
          <p class="text-sm text-yellow-800">En cada paso, elige la moneda de mayor valor que sea menor o igual al cambio restante.</p>
        </div>
        <div class="space-y-3">
          <p class="bg-white p-3 rounded shadow-sm text-sm">Cambio = 37 céntimos</p>
          <p class="bg-white p-3 rounded shadow-sm text-sm">Elige 25 céntimos (Cambio restante = 12)</p>
          <p class="bg-white p-3 rounded shadow-sm text-sm">Elige 10 céntimos (Cambio restante = 2)</p>
          <p class="bg-white p-3 rounded shadow-sm text-sm">Elige 1 céntimo (Cambio restante = 1)</p>
          <p class="bg-white p-3 rounded shadow-sm text-sm">Elige 1 céntimo (Cambio restante = 0)</p>
          <p class="bg-green-50 p-3 rounded shadow-sm font-bold text-green-900 text-sm">Resultado: 25, 10, 1, 1 (4 monedas)</p>
        </div>
        <p class="text-sm text-gray-700 mt-4">Para el sistema de monedas estándar, este algoritmo Greedy SIEMPRE da la solución óptima. Pero no funciona para todos los sistemas de monedas.</p>
      `
    },
    {
      id: 'pnn7-4',
      title: '4. Problema del Cambio: Planteamiento',
      notes: 'Definir entradas y objetivo del problema del cambio.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Dar cambio con el menor número de monedas</h3>
        <p class="text-gray-600 mb-4">Entrada: un monto <code>M</code> y un sistema de monedas <code>[m1, m2, ..., md]</code>. Objetivo: usar la menor cantidad de monedas para sumar exactamente <code>M</code>.</p>
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg my-4">
          <h5 class="font-bold text-blue-900">Estrategia Greedy</h5>
          <p class="text-sm text-blue-800 mt-2">Ordena las monedas de mayor a menor y toma repetidamente la mayor ≤ restante.</p>
        </div>
        <p class="text-sm text-gray-700">Para sistemas canónicos (como 1,5,10,25) esta estrategia es óptima.</p>
      `
    },
    {
      id: 'pnn7-5',
      title: '5. Estrategia Voraz para el Almacenamiento',
      notes: 'Proponer la estrategia Greedy y justificar su optimalidad.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">La Elección Intuitiva y Óptima</h3>
        <p class="text-gray-600 mb-4">Para minimizar el MRT, la estrategia voraz es simple y, en este caso, ¡demostrablemente óptima!</p>
        <div class="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg my-4">
          <h5 class="font-bold text-green-900">Estrategia Greedy: Ordenar por Longitud Ascendente</h5>
          <p class="text-sm text-green-800 mt-2">
            Almacena los programas en la cinta en orden de <strong>longitud creciente</strong> (del más corto al más largo).
          </p>
        </div>
        <p class="text-sm text-gray-700">
          <strong>Justificación:</strong> Colocar los programas más cortos al principio de la cinta reduce su tiempo de recuperación (y el de todos los programas posteriores) más que si colocáramos un programa más largo. Esto minimiza el tiempo de espera acumulado.
        </p>
        <div class="bg-white p-4 rounded-lg shadow-sm border mt-4">
          <h4 class="font-bold text-slate-800 mb-2">Mini-actividad</h4>
          <p class="text-sm text-gray-700">Calcula el MRT para <code>[5, 10, 3]</code> ordenados como <code>[3, 5, 10]</code>.</p>
          <ul class="list-disc list-inside text-xs text-gray-600 mt-2">
            <li>P1 (3): T = 3</li>
            <li>P2 (5): T = 3 + 5 = 8</li>
            <li>P3 (10): T = 3 + 5 + 10 = 18</li>
            <li>MRT = (3 + 8 + 18) / 3 = 29 / 3 ≈ 9.67</li>
          </ul>
        </div>
      `
    },
    {
      id: 'pnn7-5a',
      title: '5. Código Python: Cambio Greedy',
      notes: 'Implementación del cambio en Python con trazas.',
      contentHtml: `
        <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
          <h5 class="text-gray-400 mb-2"># Python</h5>
          <pre class="font-mono text-sm max-w-full overflow-x-auto"><code class="language-python">from typing import List

def cambio_greedy(monto: int, monedas: List[int]) -> List[int]:
    # Ordenar de mayor a menor
    monedas = sorted(monedas, reverse=True)
    resultado = []
    restante = monto
    for m in monedas:
        while restante >= m:
            resultado.append(m)
            restante -= m
    return resultado

print(cambio_greedy(37, [25,10,5,1]))  # [25, 10, 1, 1]
          </code></pre>
        </div>
      `
    },
    {
      id: 'pnn7-6',
      title: '6. Cambio: Paso a paso',
      notes: 'Trazas manuales con montos distintos.',
      contentHtml: `
        <div class="space-y-3">
          <p class="bg-white p-3 rounded shadow-sm text-sm">Monto 63 → [25, 25, 10, 1, 1, 1]</p>
          <p class="bg-white p-3 rounded shadow-sm text-sm">Monto 99 → [25, 25, 25, 10, 10, 1, 1, 1, 1]</p>
          <p class="bg-white p-3 rounded shadow-sm text-sm">Monto 32 → [25, 5, 1, 1]</p>
        </div>
      `
    },
    {
      id: 'pnn7-7',
      title: '7. Segundo ejemplo práctico: Selección de actividades (Python)',
      notes: 'Caso clásico Greedy en Python.',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-gray-700">Dado un conjunto de actividades (inicio, fin), selecciona el máximo número de actividades compatibles ordenando por tiempo de fin.</p>
          <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <h5 class="text-gray-400 mb-2"># Python</h5>
            <pre class="font-mono text-sm max-w-full overflow-x-auto"><code class="language-python">from typing import List, Tuple

def seleccionar_actividades(act: List[Tuple[int,int]]) -> List[Tuple[int,int]]:
    act = sorted(act, key=lambda x: x[1])  # ordenar por fin
    res: List[Tuple[int,int]] = []
    fin_actual = -10**9
    for inicio, fin in act:
        if inicio >= fin_actual:
            res.append((inicio, fin))
            fin_actual = fin
    return res

print(seleccionar_actividades([(1,4),(3,5),(0,6),(5,7),(8,9)]))
            </code></pre>
          </div>
        </div>
      `
    },
    {
      id: 'pnn7-8',
      title: '8. Análisis de Complejidad',
      notes: 'Análisis de tiempo y espacio del algoritmo Greedy.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Eficiencia del Algoritmo Greedy</h3>
        <p class="text-gray-600 mb-4">La complejidad de los ejemplos vistos está dominada por el ordenamiento.</p>
        <div class="grid md:grid-cols-2 gap-6 mt-4">
            <div class="bg-slate-50 p-4 rounded border">
                <h5 class="font-bold text-slate-800">Complejidad Temporal</h5>
                <p class="text-3xl font-mono font-bold text-green-600">O(N log N)</p>
                <p class="text-xs text-gray-600">Debido al ordenamiento (ej. con sort). Los bucles son O(N).</p>
            </div>
            <div class="bg-slate-50 p-4 rounded border">
                <h5 class="font-bold text-slate-800">Complejidad Espacial</h5>
                <p class="text-3xl font-mono font-bold text-blue-600">O(1) o O(N)</p>
                <p class="text-xs text-gray-600">Depende del algoritmo de ordenamiento y estructura auxiliar usada.</p>
            </div>
        </div>
      `
    },
    {
      id: 'pnn7-9-contr',
      title: '9. Contraejemplo: Monedas no canónicas',
      notes: 'Mostrar que Greedy puede fallar en ciertos sistemas de monedas.',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-gray-700">Sistema de monedas: <code>[10, 9, 1]</code>; monto: <code>18</code>.</p>
          <div class="bg-white p-4 rounded border shadow-sm">
            <p class="text-sm text-slate-700"><strong>Greedy</strong>: toma 10 y luego ocho monedas de 1 → total <strong>9</strong> monedas.</p>
            <p class="text-sm text-slate-700"><strong>Óptimo</strong>: 9 + 9 → total <strong>2</strong> monedas.</p>
          </div>
          <p class="text-sm text-slate-600">Lección: Greedy es óptimo en sistemas canónicos, pero no en cualquier conjunto de denominaciones. Si no puedes probar optimalidad, considera DP.</p>
        </div>
      `
    },
    {
      id: 'pnn7-9',
      title: '9. Ventajas y Desventajas de los Algoritmos Voraces',
      notes: 'Resumen de los pros y contras de la estrategia Greedy.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">¿Cuándo Usar Greedy?</h3>
        <p class="text-gray-600 mb-4">Los algoritmos voraces son atractivos por su simplicidad, pero no siempre funcionan.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
             <h5 class="font-bold text-green-900">Ventajas</h5>
             <ul class="list-disc pl-5 text-sm text-green-800">
               <li><strong>Simples de entender e implementar.</strong></li>
               <li>Suelen ser <strong>muy eficientes</strong> computacionalmente.</li>
               <li>Si funcionan, son la mejor opción.</li>
             </ul>
          </div>
          <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
             <h5 class="font-bold text-red-900">Desventajas</h5>
             <ul class="list-disc pl-5 text-sm text-red-800">
               <li><strong>No siempre garantizan la solución óptima global.</strong></li>
               <li>Requieren una prueba de optimalidad para asegurar que funcionan correctamente.</li>
               <li>A veces, una "mejor" elección local puede llevar a un callejón sin salida.</li>
             </ul>
          </div>
        </div>
      `
    },
    
    {
      id: 'pnn7-end-questions',
      title: '¿Preguntas?',
      notes: 'Espacio para dudas.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full">
          <h3 class="text-2xl font-bold text-slate-900 mb-4">¿Dudas sobre Greedy o Almacenamiento Óptimo?</h3>
        </div>
      `
    },
    {
      id: 'pnn7-end-thanks',
      title: 'Gracias y Próxima Clase',
      notes: 'Cierre y adelanto.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center">
          <h2 class="text-3xl font-bold text-slate-900 mb-4">Fin del Módulo 7</h2>
          <p class="text-gray-600 text-lg">Hemos introducido los algoritmos voraces. En la próxima clase, aplicaremos esta estrategia a otros problemas clásicos de optimización: la <b>Mochila Fraccional</b> y la <b>Intercalación Óptima</b>.</p>
        </div>
      `
    }
  ]
};