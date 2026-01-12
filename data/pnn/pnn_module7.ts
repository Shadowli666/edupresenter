import { Module } from '../../types';

export const PNN_MODULE_7: Module = {
  id: 'pnn-mod-7',
  title: '7. Algoritmos Voraces: El Estratega Impaciente',
  description: 'Aprende a tomar decisiones óptimas locales para resolver problemas globales. Cambio de monedas y selección de actividades.',
  evaluation: '0% - Introducción Magistral',
  slides: [
    {
      id: 'pnn7-1',
      title: 'La Filosofía de la Inmediatez',
      notes: 'Introducción al concepto Greedy.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full space-y-8">
          <div class="text-center max-w-4xl">
            <h1 class="text-4xl font-bold text-emerald-900 mb-6">Algoritmos Voraces (Greedy)</h1>
            <p class="text-xl text-slate-700 leading-relaxed">
              Imagina que estás en un buffet y tienes un plato pequeño.
              La estrategia <strong>Voraz</strong> consiste en tomar siempre la comida más deliciosa que tengas enfrente <em>en este momento</em>,
              sin pensar si eso te dejará sin espacio para el postre más tarde.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl items-center">
            <div class="bg-white p-8 rounded-xl shadow-lg border-t-8 border-emerald-500 flex flex-col items-center">
              <span class="text-6xl mb-4">😋</span>
              <h3 class="text-2xl font-bold text-emerald-800">El Lema Greedy</h3>
              <p class="text-center text-slate-600 mt-4 italic">
                "Toma la mejor decisión posible AHORA MISMO."
              </p>
            </div>
            
            <div class="bg-slate-100 p-6 rounded-xl border-2 border-slate-300">
              <h4 class="font-bold text-slate-700 mb-2">¿Cómo funciona?</h4>
              <ol class="list-decimal list-inside space-y-2 text-slate-600">
                <li>Analiza las opciones disponibles.</li>
                <li>Elige la que parece mejor (Óptimo Local).</li>
                <li>Nunca mires atrás (Irrevocable).</li>
                <li>Repite hasta terminar.</li>
              </ol>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn7-2-coins',
      title: 'El Cajero Voraz',
      notes: 'Ejemplo del cambio de monedas.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full">
          <div class="flex flex-col justify-center space-y-6">
            <h3 class="text-2xl font-bold text-slate-800">Problema del Cambio</h3>
            <p class="text-slate-600">
              Tienes que dar <strong>37¢</strong> de cambio usando la menor cantidad de monedas posible.
              <br>Monedas disponibles: 25¢, 10¢, 5¢, 1¢.
            </p>
            
            <div class="bg-yellow-50 p-6 rounded-xl border-2 border-yellow-400">
              <h4 class="font-bold text-yellow-900 mb-4">Algoritmo:</h4>
              <p class="text-yellow-800 mb-2">Mientras falte dinero:</p>
              <p class="font-mono text-sm bg-white p-2 rounded border border-yellow-200">
                1. Toma la moneda más grande que quepa.<br>
                2. Resta su valor.<br>
                3. Repite.
              </p>
            </div>
          </div>

          <div class="bg-slate-900 p-8 rounded-xl shadow-2xl flex flex-col items-center justify-center relative">
            <div class="text-white text-4xl font-bold mb-8">Objetivo: 37¢</div>
            
            <div class="flex flex-col gap-4 w-full">
              <!-- Paso 1 -->
              <div class="flex items-center justify-between bg-slate-800 p-3 rounded border border-slate-700">
                <div class="flex items-center gap-2">
                  <div class="w-12 h-12 rounded-full bg-yellow-400 border-4 border-yellow-600 flex items-center justify-center font-bold text-yellow-900 shadow-lg">25</div>
                  <span class="text-green-400 font-bold">¡Cabe!</span>
                </div>
                <span class="text-slate-400">Faltan: 12¢</span>
              </div>

              <!-- Paso 2 -->
              <div class="flex items-center justify-between bg-slate-800 p-3 rounded border border-slate-700">
                <div class="flex items-center gap-2">
                  <div class="w-10 h-10 rounded-full bg-slate-300 border-4 border-slate-400 flex items-center justify-center font-bold text-slate-700 shadow-lg">10</div>
                  <span class="text-green-400 font-bold">¡Cabe!</span>
                </div>
                <span class="text-slate-400">Faltan: 2¢</span>
              </div>

              <!-- Paso 3 -->
              <div class="flex items-center justify-between bg-slate-800 p-3 rounded border border-slate-700">
                <div class="flex items-center gap-2">
                  <div class="w-8 h-8 rounded-full bg-orange-400 border-4 border-orange-600 flex items-center justify-center font-bold text-white shadow-lg">1</div>
                  <span class="text-green-400 font-bold">¡Cabe!</span>
                </div>
                <span class="text-slate-400">Faltan: 1¢</span>
              </div>

              <!-- Paso 4 -->
              <div class="flex items-center justify-between bg-slate-800 p-3 rounded border border-slate-700">
                <div class="flex items-center gap-2">
                  <div class="w-8 h-8 rounded-full bg-orange-400 border-4 border-orange-600 flex items-center justify-center font-bold text-white shadow-lg">1</div>
                  <span class="text-green-400 font-bold">¡Cabe!</span>
                </div>
                <span class="text-green-500 font-bold">¡LISTO!</span>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn7-3-trap',
      title: 'La Trampa de la Codicia',
      notes: 'Contraejemplo donde Greedy falla.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full space-y-6">
          <div class="bg-red-100 p-6 rounded-xl border-l-8 border-red-500 max-w-4xl w-full">
            <h3 class="text-2xl font-bold text-red-900 mb-2">¡Cuidado! No siempre funciona</h3>
            <p class="text-red-800">
              Greedy es rápido, pero a veces miope. Si cambiamos las reglas (las monedas), puede fallar.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl">
            <!-- Escenario -->
            <div class="bg-white p-6 rounded-xl shadow-md border border-slate-200">
              <h4 class="font-bold text-slate-700 mb-4 border-b pb-2">El Escenario</h4>
              <ul class="space-y-2 text-slate-600">
                <li><strong>Objetivo:</strong> 6¢</li>
                <li><strong>Monedas:</strong> 4¢, 3¢, 1¢</li>
              </ul>
            </div>

            <!-- Comparación -->
            <div class="space-y-4">
              
              <!-- Greedy -->
              <div class="bg-red-50 p-4 rounded-lg border border-red-200 opacity-75">
                <h5 class="font-bold text-red-800 text-sm uppercase">Estrategia Greedy</h5>
                <div class="flex items-center gap-2 mt-2">
                  <div class="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center font-bold text-xs">4</div>
                  <span>+</span>
                  <div class="w-6 h-6 rounded-full bg-orange-300 flex items-center justify-center font-bold text-xs">1</div>
                  <span>+</span>
                  <div class="w-6 h-6 rounded-full bg-orange-300 flex items-center justify-center font-bold text-xs">1</div>
                </div>
                <p class="text-right text-red-600 font-bold mt-2">3 Monedas 😞</p>
              </div>

              <!-- Óptimo -->
              <div class="bg-green-50 p-4 rounded-lg border border-green-200 shadow-lg transform scale-105">
                <h5 class="font-bold text-green-800 text-sm uppercase">Estrategia Óptima</h5>
                <div class="flex items-center gap-2 mt-2">
                  <div class="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center font-bold text-xs">3</div>
                  <span>+</span>
                  <div class="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center font-bold text-xs">3</div>
                </div>
                <p class="text-right text-green-600 font-bold mt-2">2 Monedas 🏆</p>
              </div>

            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn7-4-activity',
      title: 'El Ejecutivo Ocupado',
      notes: 'Selección de actividades.',
      contentHtml: `
        <div class="flex flex-col h-full space-y-6">
          <h3 class="text-2xl font-bold text-slate-800">Selección de Actividades</h3>
          <p class="text-slate-600">
            Tienes muchas reuniones posibles, pero solo una sala. ¿Cómo metes la mayor cantidad de reuniones?
            <br><strong>Estrategia Greedy:</strong> Elige siempre la que <em>termine primero</em> (para dejar la sala libre lo antes posible).
          </p>

          <div class="relative w-full h-48 bg-slate-100 rounded-xl border border-slate-300 overflow-hidden mt-8">
            <!-- Línea de tiempo -->
            <div class="absolute top-1/2 w-full h-1 bg-slate-300 transform -translate-y-1/2"></div>
            
            <!-- Actividades -->
            <!-- A1: 1-3 (Seleccionada) -->
            <div class="absolute top-4 left-[10%] w-[20%] h-12 bg-green-500 rounded shadow-lg flex items-center justify-center text-white font-bold text-xs z-10">
              A1 (1-3) ✅
            </div>

            <!-- A2: 2-5 (Conflicto) -->
            <div class="absolute bottom-4 left-[20%] w-[30%] h-12 bg-red-300 rounded shadow opacity-50 flex items-center justify-center text-white font-bold text-xs">
              A2 (2-5) ❌
            </div>

            <!-- A3: 4-7 (Seleccionada) -->
            <div class="absolute top-4 left-[40%] w-[30%] h-12 bg-green-500 rounded shadow-lg flex items-center justify-center text-white font-bold text-xs z-10">
              A3 (4-7) ✅
            </div>

            <!-- A4: 6-9 (Conflicto) -->
            <div class="absolute bottom-4 left-[60%] w-[30%] h-12 bg-red-300 rounded shadow opacity-50 flex items-center justify-center text-white font-bold text-xs">
              A4 (6-9) ❌
            </div>
             
             <!-- A5: 8-10 (Seleccionada) -->
            <div class="absolute top-4 left-[80%] w-[15%] h-12 bg-green-500 rounded shadow-lg flex items-center justify-center text-white font-bold text-xs z-10">
              A5 ✅
            </div>
          </div>
          
          <div class="text-center text-sm text-slate-500">
            Al elegir la que termina antes (A1), liberamos espacio para A3, y luego para A5.
          </div>
        </div>
      `
    },
    {
      id: 'pnn7-5-code',
      title: 'Código: Selección de Actividades',
      notes: 'Implementación en Python.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-6 h-full">
          <div class="flex flex-col justify-center space-y-4">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 class="font-bold text-blue-900">La Clave</h4>
              <p class="text-sm text-blue-800">
                <code>act.sort(key=lambda x: x[1])</code>
                <br>Ordenar por tiempo de finalización es el paso mágico.
              </p>
            </div>
            <div class="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <h4 class="font-bold text-slate-700">Complejidad</h4>
              <p class="text-sm text-slate-600">
                <strong>O(N log N)</strong> por el ordenamiento.
                <br>El bucle es lineal O(N).
              </p>
            </div>
          </div>

          <div class="flex flex-col h-full">
            <div class="bg-yellow-500 text-white px-4 py-2 rounded-t-lg font-bold text-sm">Python</div>
            <div class="bg-slate-900 p-4 rounded-b-lg overflow-auto custom-scrollbar flex-1 text-xs font-mono text-yellow-100">
<pre><code class="language-python">def seleccion_actividades(actividades):
    # actividades = [(inicio, fin), ...]
    
    # 1. Ordenar por tiempo de fin (x[1])
    actividades.sort(key=lambda x: x[1])
    
    seleccionadas = []
    ultimo_fin = -1
    
    for inicio, fin in actividades:
        # 2. Si la actividad empieza después 
        # de que termine la última elegida...
        if inicio >= ultimo_fin:
            seleccionadas.append((inicio, fin))
            ultimo_fin = fin
            
    return seleccionadas

# Ejemplo
reuniones = [(1,4), (3,5), (0,6), (5,7), (3,8), (5,9), (6,10), (8,11)]
print(seleccion_actividades(reuniones))
# Output: [(1, 4), (5, 7), (8, 11)]</code></pre>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn7-6-summary',
      title: 'Resumen Voraz',
      notes: 'Conclusión.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center space-y-8">
          <h2 class="text-3xl font-bold text-slate-800">¿Cuándo ser Voraz?</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            <div class="bg-green-50 p-6 rounded-xl border-2 border-green-200">
              <span class="text-4xl">✅</span>
              <h3 class="text-xl font-bold text-green-900 mt-4">Úsalo cuando...</h3>
              <p class="text-green-800 mt-2 text-sm">
                El problema tiene "subestructura óptima" y la "propiedad de elección voraz" (demostrable matemáticamente).
                Ej: Cambio de monedas (sistemas estándar), Kruskal, Prim, Dijkstra.
              </p>
            </div>

            <div class="bg-red-50 p-6 rounded-xl border-2 border-red-200">
              <span class="text-4xl">🛑</span>
              <h3 class="text-xl font-bold text-red-900 mt-4">Evítalo cuando...</h3>
              <p class="text-red-800 mt-2 text-sm">
                Las decisiones futuras afectan la validez de las decisiones actuales.
                Ej: Problema de la Mochila (0/1 Knapsack), Cambio de monedas (sistemas raros).
              </p>
            </div>
          </div>

          <div class="mt-8">
            <p class="text-slate-500 italic">Próxima clase: Llenaremos mochilas con objetos fraccionables.</p>
          </div>
        </div>
      `
    }
  ]
};
