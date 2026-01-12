import { Module } from '../../types';

export const PNN_MODULE_8: Module = {
  id: 'pnn-mod-8',
  title: '8. Aplicaciones Voraces: Mochila y Fusión',
  description: 'Aplicación de estrategias Greedy a problemas clásicos: Mochila Fraccional e Intercalación Óptima.',
  evaluation: '0% - Ejercicios',
  slides: [
    {
      id: 'pnn8-1',
      title: 'Repaso: La Estrategia Voraz',
      notes: 'Breve recordatorio del concepto Greedy.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full space-y-6">
          <div class="text-center max-w-4xl">
            <h1 class="text-3xl font-bold text-slate-900 mb-4">Algoritmos Voraces (Greedy)</h1>
            <p class="text-lg text-slate-700">
              Recordemos que un algoritmo voraz construye una solución paso a paso, eligiendo siempre la opción que ofrece el beneficio inmediato más alto (óptimo local).
            </p>
          </div>
          
          <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 max-w-3xl w-full">
            <h3 class="font-bold text-blue-900 mb-2">Componentes Clave</h3>
            <ul class="list-disc list-inside text-blue-800 space-y-1">
              <li><strong>Criterio de Selección:</strong> ¿Qué define "lo mejor" en este momento?</li>
              <li><strong>Factibilidad:</strong> ¿La elección respeta las restricciones?</li>
              <li><strong>Solución:</strong> ¿Hemos alcanzado el objetivo?</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'pnn8-2-knapsack-def',
      title: 'Problema: La Mochila Fraccional',
      notes: 'Definición formal del problema.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full">
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-slate-800">Definición del Problema</h3>
            <p class="text-slate-600">
              Dado un conjunto de <i>n</i> objetos, donde cada objeto <i>i</i> tiene un peso <i>w<sub>i</sub></i> y un valor <i>v<sub>i</sub></i>, y una mochila con capacidad máxima <i>W</i>.
            </p>
            <div class="bg-slate-100 p-4 rounded border border-slate-300">
              <h4 class="font-bold text-slate-700 mb-2">Objetivo</h4>
              <p class="text-sm text-slate-600">
                Maximizar el valor total &sum; <i>x<sub>i</sub> v<sub>i</sub></i> sujeto a &sum; <i>x<sub>i</sub> w<sub>i</sub></i> &le; <i>W</i>, donde 0 &le; <i>x<sub>i</sub></i> &le; 1 es la fracción del objeto <i>i</i> que tomamos.
              </p>
            </div>
            <p class="text-sm text-slate-500 italic">
              Nota: En la versión "Fraccional", podemos romper los objetos (como polvo de oro). En la versión "0/1" (lingotes), no podemos, y Greedy no funciona.
            </p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-lg border border-slate-200 flex flex-col items-center justify-center">
            <div class="w-full max-w-xs bg-slate-200 h-48 rounded-lg border-2 border-slate-400 relative flex items-end justify-center overflow-hidden">
              <span class="absolute top-2 right-2 text-xs font-bold text-slate-500">Capacidad W</span>
              <div class="w-full bg-yellow-400 h-1/3 border-t border-yellow-500 flex items-center justify-center text-xs font-bold text-yellow-900">Objeto A (100%)</div>
              <div class="w-full bg-blue-400 h-1/4 border-t border-blue-500 flex items-center justify-center text-xs font-bold text-blue-900">Objeto B (100%)</div>
              <div class="w-full bg-red-400 h-1/6 border-t border-red-500 flex items-center justify-center text-xs font-bold text-red-900">Objeto C (50%)</div>
            </div>
            <p class="mt-4 text-center text-slate-600 text-sm">
              Podemos llenar los huecos con fracciones de objetos.
            </p>
          </div>
        </div>
      `
    },
    {
      id: 'pnn8-3-strategy',
      title: 'Estrategia: Densidad de Valor',
      notes: 'Explicación del criterio de selección Greedy.',
      contentHtml: `
        <div class="flex flex-col h-full space-y-6">
          <h3 class="text-2xl font-bold text-slate-800">El Criterio de Selección</h3>
          <p class="text-slate-600">
            Para maximizar el beneficio, no debemos mirar solo el valor total (<i>v<sub>i</sub></i>) ni solo el peso (<i>w<sub>i</sub></i>). Debemos mirar la <strong>proporción</strong>.
          </p>
          
          <div class="flex justify-center gap-8 my-4">
            <div class="bg-white p-6 rounded-lg shadow border-t-4 border-green-500 text-center">
              <span class="text-4xl font-mono font-bold text-green-600">Ratio = <i>v<sub>i</sub></i> / <i>w<sub>i</sub></i></span>
              <p class="text-sm text-slate-500 mt-2">Valor por unidad de peso (ej. $/kg)</p>
            </div>
          </div>

          <div class="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <h4 class="font-bold text-slate-700 mb-4">Algoritmo Paso a Paso</h4>
            <ol class="list-decimal list-inside space-y-2 text-slate-700">
              <li><strong>Calcular Ratios:</strong> Obtener <i>r<sub>i</sub> = v<sub>i</sub> / w<sub>i</sub></i> para cada objeto.</li>
              <li><strong>Ordenar:</strong> Organizar los objetos de mayor a menor ratio (descendente).</li>
              <li><strong>Selección Voraz:</strong> Iterar por la lista ordenada:
                <ul class="list-disc list-inside ml-6 text-sm text-slate-600 mt-1">
                  <li>Si el objeto cabe completo, tómalo todo.</li>
                  <li>Si no cabe completo, toma la fracción necesaria para llenar la mochila y termina.</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      `
    },
    {
      id: 'pnn8-4-example',
      title: 'Ejemplo Numérico',
      notes: 'Traza del algoritmo.',
      contentHtml: `
        <div class="flex flex-col h-full">
          <h3 class="text-xl font-bold text-slate-800 mb-4">Traza: Capacidad W = 50</h3>
          
          <table class="w-full text-sm text-left border-collapse mb-6">
            <thead class="bg-slate-100 text-slate-700">
              <tr>
                <th class="p-2 border">Objeto</th>
                <th class="p-2 border">Peso (<i>w<sub>i</sub></i>)</th>
                <th class="p-2 border">Valor (<i>v<sub>i</sub></i>)</th>
                <th class="p-2 border bg-yellow-50">Ratio (<i>v<sub>i</sub>/w<sub>i</sub></i>)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2 border">A</td><td class="p-2 border">10</td><td class="p-2 border">60</td><td class="p-2 border font-bold text-green-600">6.0</td></tr>
              <tr><td class="p-2 border">B</td><td class="p-2 border">20</td><td class="p-2 border">100</td><td class="p-2 border font-bold text-green-600">5.0</td></tr>
              <tr><td class="p-2 border">C</td><td class="p-2 border">30</td><td class="p-2 border">120</td><td class="p-2 border font-bold text-green-600">4.0</td></tr>
            </tbody>
          </table>

          <div class="space-y-2 font-mono text-sm bg-slate-900 text-green-400 p-4 rounded-lg">
            <p>> Orden: A (6.0) -> B (5.0) -> C (4.0)</p>
            <p>> Capacidad Restante: 50</p>
            <p class="text-white">1. Tomar A (Peso 10). Restante: 40. Valor: 60.</p>
            <p class="text-white">2. Tomar B (Peso 20). Restante: 20. Valor: 60 + 100 = 160.</p>
            <p class="text-yellow-300">3. Objeto C pesa 30, pero solo queda espacio para 20.</p>
            <p class="text-yellow-300">   Tomar fracción: 20/30 = 2/3 de C.</p>
            <p class="text-yellow-300">   Valor añadido: 120 * (2/3) = 80.</p>
            <p>> TOTAL VALOR: 60 + 160 + 80 = 240.</p>
          </div>
        </div>
      `
    },
    {
      id: 'pnn8-4b-counterexample',
      title: '¿Por qué falla en 0/1?',
      notes: 'Contraejemplo para mochila 0/1.',
      contentHtml: `
        <div class="flex flex-col h-full space-y-6">
          <div class="bg-red-50 border-l-4 border-red-500 p-4">
            <h3 class="font-bold text-red-900">Limitación del Enfoque Voraz</h3>
            <p class="text-red-800 text-sm">
              Si NO podemos fraccionar objetos (Mochila 0/1), elegir por densidad puede llevarnos a un callejón sin salida donde desperdiciamos espacio valioso.
            </p>
          </div>

          <div class="grid grid-cols-2 gap-8">
            <div>
              <h4 class="font-bold text-slate-700 mb-2">Selección Voraz (Incorrecta)</h4>
              <div class="bg-slate-100 p-4 rounded text-sm space-y-2">
                <p>1. Elige A (Peso 10, Val 60). <br><span class="text-xs text-gray-500">Espacio: 40</span></p>
                <p>2. Elige B (Peso 20, Val 100). <br><span class="text-xs text-gray-500">Espacio: 20</span></p>
                <p class="text-red-600">3. C (Peso 30) NO CABE.</p>
                <hr class="border-slate-300">
                <p class="font-bold">Total: 160</p>
              </div>
            </div>
            
            <div>
              <h4 class="font-bold text-slate-700 mb-2">Solución Óptima</h4>
              <div class="bg-green-50 p-4 rounded text-sm space-y-2 border border-green-200">
                <p>1. Ignora A.</p>
                <p>2. Elige B (Peso 20, Val 100).</p>
                <p>3. Elige C (Peso 30, Val 120).</p>
                <p class="text-green-600">Suma Pesos: 20+30 = 50 (Lleno)</p>
                <hr class="border-green-300">
                <p class="font-bold text-green-700">Total: 220</p>
              </div>
            </div>
          </div>
          
          <p class="text-center text-xs text-slate-500 italic mt-4">
            Para resolver la Mochila 0/1 correctamente, necesitamos <strong>Programación Dinámica</strong> (próximas clases).
          </p>
        </div>
      `
    },
    {
      id: 'pnn8-5-code',
      title: 'Implementación Paso a Paso',
      notes: 'Código Python explicado con múltiples casos.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-4 h-full">
          <div class="bg-slate-900 p-4 rounded-lg overflow-auto custom-scrollbar text-xs font-mono text-blue-100">
<pre><code class="language-python">class Objeto:
    def __init__(self, nombre, peso, valor):
        self.nombre = nombre
        self.peso = peso
        self.valor = valor
        self.ratio = valor / peso

def knapsack_fraccional(capacidad, objetos):
    # 1. Ordenar por ratio descendente
    objetos.sort(key=lambda x: x.ratio, reverse=True)
    
    valor_total = 0.0
    peso_actual = 0
    
    print(f"--- Mochila Capacidad: {capacidad} ---")
    
    for obj in objetos:
        if peso_actual + obj.peso <= capacidad:
            # Cabe completo
            peso_actual += obj.peso
            valor_total += obj.valor
            print(f"Tomar {obj.nombre} (100%)")
        else:
            # Fracción
            restante = capacidad - peso_actual
            fraccion = restante / obj.peso
            valor_total += obj.valor * fraccion
            print(f"Tomar {obj.nombre} ({fraccion:.2%})")
            peso_actual = capacidad
            break 
            
    return valor_total

# --- CASOS DE PRUEBA ---
items = [
    Objeto("A", 10, 60), 
    Objeto("B", 20, 100), 
    Objeto("C", 30, 120)
]

# Caso 1: Ejemplo de clase
print(f"Total: {knapsack_fraccional(50, items.copy())}")

# Caso 2: Mochila pequeña
print(f"Total: {knapsack_fraccional(15, items.copy())}")

# Caso 3: Todo cabe
print(f"Total: {knapsack_fraccional(100, items.copy())}")
</code></pre>
          </div>
          
          <div class="space-y-4 overflow-y-auto">
            <div class="bg-blue-50 p-3 rounded border-l-4 border-blue-500">
              <h4 class="font-bold text-blue-900 text-sm">1. Estructura de Datos</h4>
              <p class="text-xs text-blue-800">Usamos una clase para mantener juntos el peso, valor y ratio. El nombre ayuda a la depuración.</p>
            </div>
            
            <div class="bg-purple-50 p-3 rounded border-l-4 border-purple-500">
              <h4 class="font-bold text-purple-900 text-sm">2. Casos de Prueba</h4>
              <ul class="list-disc list-inside text-xs text-purple-800">
                <li><strong>Caso 1 (W=50):</strong> Toma A, B y 2/3 de C. Total 240.</li>
                <li><strong>Caso 2 (W=15):</strong> Toma A completo y 1/4 de B. Total 60 + 25 = 85.</li>
                <li><strong>Caso 3 (W=100):</strong> Toma todo (A, B, C). Sobra espacio. Total 280.</li>
              </ul>
            </div>

            <div class="bg-green-50 p-3 rounded border-l-4 border-green-500">
              <h4 class="font-bold text-green-900 text-sm">3. Importancia de .copy()</h4>
              <p class="text-xs text-green-800">
                Al pasar listas en Python, se pasan por referencia. Usamos <code>items.copy()</code> para que el ordenamiento de una prueba no afecte el orden original para la siguiente (aunque en este algoritmo siempre ordenamos al inicio, es buena práctica).
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn8-6-merge-pattern',
      title: 'Intercalación Óptima (Optimal Merge Pattern)',
      notes: 'Definición del segundo problema.',
      contentHtml: `
        <div class="flex flex-col h-full space-y-6">
          <h3 class="text-2xl font-bold text-slate-800">Minimizando el Costo de Fusión</h3>
          <p class="text-slate-600">
            Problema: Tienes <i>N</i> archivos ordenados de diferentes tamaños. Quieres unirlos en uno solo.
            El costo de unir dos archivos de tamaño <i>A</i> y <i>B</i> es <i>A + B</i>.
            ¿En qué orden debes unirlos para minimizar el costo total?
          </p>

          <div class="bg-white p-6 rounded-lg shadow border-l-4 border-purple-500">
            <h4 class="font-bold text-purple-900 mb-2">Estrategia Greedy</h4>
            <p class="text-purple-800">
              En cada paso, fusiona los <strong>dos archivos más pequeños</strong> disponibles.
            </p>
          </div>

          <div class="bg-slate-100 p-4 rounded border border-slate-300">
            <h4 class="font-bold text-slate-700 mb-2">Estructura de Datos</h4>
            <p class="text-sm text-slate-600">
              Para encontrar eficientemente el mínimo repetidamente, usamos un <strong>Min-Heap</strong> (Cola de Prioridad).
            </p>
          </div>
        </div>
      `
    },
    {
      id: 'pnn8-7-merge-trace',
      title: 'Traza: Intercalación Óptima',
      notes: 'Ejemplo visual con Heap.',
      contentHtml: `
        <div class="flex flex-col items-center h-full space-y-8">
          <h3 class="text-xl font-bold text-slate-800">Archivos: [2, 3, 4, 5, 7]</h3>
          
          <div class="flex flex-col gap-4 w-full max-w-2xl">
            
            <!-- Paso 1 -->
            <div class="flex items-center gap-4 bg-white p-3 rounded shadow-sm border">
              <div class="bg-slate-200 px-2 py-1 rounded text-xs font-mono">Heap: [2, 3, 4, 5, 7]</div>
              <span class="text-slate-400">-></span>
              <div class="text-sm">Extraer 2 y 3. Costo = 5. Insertar 5.</div>
            </div>

            <!-- Paso 2 -->
            <div class="flex items-center gap-4 bg-white p-3 rounded shadow-sm border">
              <div class="bg-slate-200 px-2 py-1 rounded text-xs font-mono">Heap: [4, 5, 5, 7]</div>
              <span class="text-slate-400">-></span>
              <div class="text-sm">Extraer 4 y 5. Costo = 9. Insertar 9.</div>
            </div>

            <!-- Paso 3 -->
            <div class="flex items-center gap-4 bg-white p-3 rounded shadow-sm border">
              <div class="bg-slate-200 px-2 py-1 rounded text-xs font-mono">Heap: [5, 7, 9]</div>
              <span class="text-slate-400">-></span>
              <div class="text-sm">Extraer 5 y 7. Costo = 12. Insertar 12.</div>
            </div>

            <!-- Paso 4 -->
            <div class="flex items-center gap-4 bg-white p-3 rounded shadow-sm border">
              <div class="bg-slate-200 px-2 py-1 rounded text-xs font-mono">Heap: [9, 12]</div>
              <span class="text-slate-400">-></span>
              <div class="text-sm">Extraer 9 y 12. Costo = 21. Fin.</div>
            </div>

            <div class="bg-green-100 text-green-900 p-4 rounded font-bold text-center mt-4">
              Costo Total = 5 + 9 + 12 + 21 = 47
            </div>

          </div>
        </div>
      `
    },
    {
      id: 'pnn8-7b-merge-code',
      title: 'Implementación con Heap (Python)',
      notes: 'Código Python para Optimal Merge Pattern con casos.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-4 h-full">
          <div class="bg-slate-900 p-4 rounded-lg overflow-auto custom-scrollbar text-xs font-mono text-purple-100">
<pre><code class="language-python">import heapq

def optimal_merge_pattern(files):
    if not files:
        return 0
        
    # 1. Convertir lista en Min-Heap
    # O(N)
    heapq.heapify(files)
    
    total_cost = 0
    
    print(f"--- Iniciando Fusión: {files} ---")
    
    # 2. Mientras haya más de 1 archivo
    while len(files) > 1:
        # Extraer los 2 más pequeños
        first = heapq.heappop(files)
        second = heapq.heappop(files)
        
        # Costo de fusión
        temp_cost = first + second
        total_cost += temp_cost
        
        # Insertar resultado de vuelta
        heapq.heappush(files, temp_cost)
        
        print(f"Fusionar {first} y {second} -> Costo {temp_cost}")
        
    return total_cost

# --- CASOS DE PRUEBA ---

# Caso 1: Ejemplo Estándar
archivos1 = [2, 3, 4, 5, 7]
print(f"Costo Total: {optimal_merge_pattern(archivos1)}\\n")

# Caso 2: Pocos archivos
archivos2 = [10, 20]
print(f"Costo Total: {optimal_merge_pattern(archivos2)}\\n")

# Caso 3: Un solo archivo (Costo 0)
archivos3 = [50]
print(f"Costo Total: {optimal_merge_pattern(archivos3)}")
</code></pre>
          </div>
          
          <div class="space-y-4">
            <div class="bg-white p-4 rounded border border-slate-200 shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">Análisis de Casos</h4>
              <ul class="list-disc list-inside text-sm text-slate-600 space-y-2">
                <li><strong>Caso 1:</strong> El ejemplo clásico. El orden importa mucho. Si fusionamos 5 y 7 primero, el costo se dispara.</li>
                <li><strong>Caso 2:</strong> Con solo dos archivos, solo hay una fusión posible. Costo = 10 + 20 = 30.</li>
                <li><strong>Caso 3:</strong> Si ya tenemos un solo archivo, no hay que hacer nada. Costo = 0.</li>
              </ul>
            </div>
            
            <div class="bg-purple-50 p-4 rounded border border-purple-200">
              <h4 class="font-bold text-purple-900 mb-2">Complejidad</h4>
              <ul class="list-disc list-inside text-sm text-purple-800">
                <li>Construir Heap: <i>O(N)</i></li>
                <li>Extracciones/Inserciones: <i>2(N-1)</i> operaciones.</li>
                <li>Costo por operación: <i>O(log N)</i></li>
                <li><strong>Total: <i>O(N log N)</i></strong></li>
              </ul>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn8-8-complexity',
      title: 'Análisis de Complejidad',
      notes: 'Resumen técnico.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full">
          <div class="bg-white p-6 rounded-xl shadow border-t-4 border-blue-500">
            <h4 class="font-bold text-slate-700 mb-4">Knapsack Fraccional</h4>
            <div class="text-4xl font-mono font-bold text-blue-600 mb-2">O(N log N)</div>
            <p class="text-sm text-slate-500">
              Dominado por el ordenamiento inicial de los objetos (<i>N log N</i>). El bucle de selección es lineal <i>O(N)</i>.
            </p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow border-t-4 border-purple-500">
            <h4 class="font-bold text-slate-700 mb-4">Intercalación Óptima</h4>
            <div class="text-4xl font-mono font-bold text-purple-600 mb-2">O(N log N)</div>
            <p class="text-sm text-slate-500">
              Realizamos <i>N-1</i> operaciones de extracción e inserción en un Heap. Cada operación cuesta <i>O(log N)</i>.
            </p>
          </div>
        </div>
      `
    }
  ]
};
