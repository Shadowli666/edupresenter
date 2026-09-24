import { Module } from '../../types';

export const PNN_MODULE_1: Module = {
  id: 'pnn-mod-1',
  title: '1. Introducción a Árboles y Optimización',
  description: 'Semana 1 (jueves + viernes): problemas de optimización (función objetivo y restricciones), terminología y métricas de árboles, y taller práctico con prueba diagnóstica (Unidad I, objetivos I.1 y I.2).',
  evaluation: '0% — Diagnóstica (viernes)',
  slides: [
    {
      id: 'pnn1-1',
      title: 'Programación No Numérica II — Bienvenida',
      contentHtml: `
        <div class="space-y-6">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 bg-orange-700 rounded-xl flex items-center justify-center text-white text-3xl shadow-lg">🌳</div>
            <div>
              <h2 class="text-3xl font-bold text-slate-900">Programación No Numérica II</h2>
              <p class="text-slate-500">Ing. Luis Felipe Moreno Oropeza · Jueves y viernes · Aula A-06</p>
            </div>
          </div>

          <p class="text-gray-700 text-lg">
            No solo resolver problemas: resolverlos de la manera <strong>más eficiente posible</strong>.
          </p>

          <div class="grid grid-cols-2 md:grid-cols-5 gap-2 text-center">
            <div class="bg-orange-50 border border-orange-200 rounded-xl p-3"><div class="text-2xl">🌲</div><p class="text-xs font-bold text-orange-900 mt-1">I. Estructuras elementales</p></div>
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-3"><div class="text-2xl">✂️</div><p class="text-xs font-bold text-amber-900 mt-1">II. Divide y conquista</p></div>
            <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-3"><div class="text-2xl">💰</div><p class="text-xs font-bold text-yellow-900 mt-1">III. Adquisición (greedy)</p></div>
            <div class="bg-lime-50 border border-lime-200 rounded-xl p-3"><div class="text-2xl">🧮</div><p class="text-xs font-bold text-lime-900 mt-1">IV. Programación dinámica</p></div>
            <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-3"><div class="text-2xl">↩️</div><p class="text-xs font-bold text-emerald-900 mt-1">V. Ir hacia atrás</p></div>
          </div>

          <div class="grid grid-cols-3 gap-2 text-center text-xs font-mono">
            <div class="bg-slate-100 border rounded-lg py-2">Corte I · 30%</div>
            <div class="bg-slate-100 border rounded-lg py-2">Corte II · 30%</div>
            <div class="bg-slate-100 border rounded-lg py-2">Corte III · 40%</div>
          </div>

          <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800">
            📝 La <strong>prueba diagnóstica (0%)</strong> se aplica el <strong>viernes</strong>. Hoy solo sondeo oral.
          </div>
        </div>
      `
    },
    {
      id: 'pnn1-2',
      title: 'Saberes previos',
      contentHtml: `
        <div class="space-y-5">
          <div class="flex items-center gap-3 bg-orange-50 border border-orange-200 rounded-xl p-3">
            <span class="text-3xl">💬</span>
            <p class="text-sm text-orange-900">Antes de construir montañas, revisemos qué traemos de <strong>PNN I</strong>.</p>
          </div>

          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-white border rounded-lg p-3 shadow-sm">¿Qué es un <strong>algoritmo</strong>? ¿Qué mide su eficiencia?</div>
            <div class="bg-white border rounded-lg p-3 shadow-sm">¿Qué es la <strong>recursividad</strong>? Da un ejemplo.</div>
            <div class="bg-white border rounded-lg p-3 shadow-sm">¿Qué <strong>estructuras de datos</strong> conocen? (arreglos, listas, pilas, colas)</div>
            <div class="bg-white border rounded-lg p-3 shadow-sm">¿Qué significa <strong>optimizar</strong>? Da un ejemplo cotidiano.</div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn1-3',
      title: '¿Qué es un problema de optimización?',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-gradient-to-r from-orange-700 to-amber-700 text-white p-5 rounded-2xl shadow-lg">
            <p class="text-lg">Maximizar o minimizar una <strong>función objetivo</strong> sujeta a <strong>restricciones</strong>.</p>
          </div>

          <div class="flex justify-center bg-white p-5 rounded-xl border shadow-sm">
            <div class="mermaid">
              graph LR
                V["Variables de decisión<br/>¿qué elegir?"] --> O["Función objetivo<br/>¿qué maximizar/minimizar?"]
                R["Restricciones<br/>¿qué no se puede violar?"] --> O
                O --> S["Solución óptima"]
                style O fill:#c2410c,stroke:#c2410c,color:#fff
                style R fill:#fee2e2,stroke:#ef4444
                style V fill:#fff7ed,stroke:#fdba74
            </div>
          </div>

          <div class="grid grid-cols-3 gap-3 text-center text-xs">
            <div class="bg-orange-50 border border-orange-200 rounded-lg p-2"><strong>Variables</strong><br/>qué elegir</div>
            <div class="bg-red-50 border border-red-200 rounded-lg p-2"><strong>Restricciones</strong><br/>qué no violar</div>
            <div class="bg-amber-50 border border-amber-200 rounded-lg p-2"><strong>Objetivo</strong><br/>qué mejorar</div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn1-4',
      title: 'Ejemplos de optimización',
      contentHtml: `
        <div class="space-y-5">
          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-white border rounded-xl p-4 shadow-sm"><div class="text-3xl">🛣️</div><h4 class="font-bold text-slate-800 mt-1">Ruta más corta</h4><p class="text-xs text-gray-500">Minimizar distancia entre dos ciudades.</p></div>
            <div class="bg-white border rounded-xl p-4 shadow-sm"><div class="text-3xl">🎒</div><h4 class="font-bold text-slate-800 mt-1">La mochila</h4><p class="text-xs text-gray-500">Maximizar valor sin exceder el peso.</p></div>
            <div class="bg-white border rounded-xl p-4 shadow-sm"><div class="text-3xl">📅</div><h4 class="font-bold text-slate-800 mt-1">Asignación de horarios</h4><p class="text-xs text-gray-500">Sin choques de aulas ni solapes.</p></div>
            <div class="bg-white border rounded-xl p-4 shadow-sm"><div class="text-3xl">🚚</div><h4 class="font-bold text-slate-800 mt-1">Vendedor viajero</h4><p class="text-xs text-gray-500">Recorrer todas las ciudades al menor costo.</p></div>
          </div>

          <div class="bg-slate-50 border rounded-lg p-3 text-sm text-slate-700 text-center">
            🧠 Todos comparten la misma forma: <strong>elegir</strong> algo para <strong>optimizar</strong> algo, bajo <strong>límites</strong>.
          </div>
        </div>
      `
    },
    {
      id: 'pnn1-5',
      title: 'Fuerza bruta vs. estrategias eficientes',
      contentHtml: `
        <div class="space-y-5">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-rose-50 border-2 border-rose-200 rounded-xl p-5">
              <h4 class="font-bold text-rose-900">🐢 Fuerza bruta</h4>
              <p class="text-sm text-rose-800 mt-2">Probar <strong>todas</strong> las combinaciones. Correcto, pero no escala.</p>
              <p class="text-xs text-rose-700 mt-2 font-mono">n objetos → 2ⁿ combinaciones</p>
            </div>
            <div class="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-5">
              <h4 class="font-bold text-emerald-900">🚀 Estrategias eficientes</h4>
              <p class="text-sm text-emerald-800 mt-2">Explotar la estructura del problema. Menos cómputo, misma solución.</p>
              <p class="text-xs text-emerald-700 mt-2 font-mono">divide y conquista · greedy · PD · backtracking</p>
            </div>
          </div>

          <div class="grid grid-cols-4 gap-2 text-center text-xs">
            <div class="bg-slate-100 rounded p-2"><span class="font-mono">n=10</span><br/>1.024</div>
            <div class="bg-slate-100 rounded p-2"><span class="font-mono">n=20</span><br/>1 millón</div>
            <div class="bg-amber-100 rounded p-2"><span class="font-mono">n=30</span><br/>mil millones</div>
            <div class="bg-rose-100 rounded p-2"><span class="font-mono">n=50</span><br/>1e15 😱</div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn1-6',
      title: 'Formulación: la mochila',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-white border rounded-xl p-4 shadow-sm overflow-x-auto">
            <p class="text-xs text-gray-500 mb-2">Mochila <strong>0/1</strong> (cada objeto se lleva o no) con capacidad de <strong>10 kg</strong></p>
            <table class="w-full text-sm border-collapse text-center">
              <thead><tr class="bg-orange-700 text-white"><th class="p-2 border">Objeto</th><th class="p-2 border">Peso</th><th class="p-2 border">Valor</th></tr></thead>
              <tbody class="text-gray-700">
                <tr><td class="p-2 border font-bold">A</td><td class="p-2 border">4</td><td class="p-2 border">30</td></tr>
                <tr class="bg-slate-50"><td class="p-2 border font-bold">B</td><td class="p-2 border">5</td><td class="p-2 border">40</td></tr>
                <tr><td class="p-2 border font-bold">C</td><td class="p-2 border">6</td><td class="p-2 border">50</td></tr>
              </tbody>
            </table>
          </div>

          <div class="grid md:grid-cols-3 gap-3 text-sm">
            <div class="bg-orange-50 border border-orange-200 rounded-lg p-3"><strong>Variables:</strong> ¿llevo A, B, C?</div>
            <div class="bg-red-50 border border-red-200 rounded-lg p-3"><strong>Restricción:</strong> peso total ≤ 10</div>
            <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-3"><strong>Objetivo:</strong> maximizar valor</div>
          </div>

          <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-900 text-center">
            🤔 ¿Conviene llevar los 3? ¿Por qué no?
          </div>
        </div>
      `
    },
    {
      id: 'pnn1-7',
      title: 'Árboles: la estructura jerárquica',
      contentHtml: `
        <div class="space-y-5">
          <p class="text-gray-700">
            A diferencia de las estructuras <strong>lineales</strong> (listas, pilas, colas) —como una fila de personas—, un <strong>árbol</strong> es una estructura <strong>no lineal y jerárquica</strong>.
          </p>
          <div class="bg-slate-50 border rounded-lg p-3 text-xs text-slate-600">
            📐 <strong>Definición formal:</strong> un árbol es un <strong>grafo conexo y acíclico</strong>. De ahí que con N nodos tenga siempre N−1 aristas y exista un único camino entre dos nodos.
          </div>

          <div class="flex justify-center bg-white p-5 rounded-xl border shadow-sm">
            <div class="mermaid">
              graph TD
                R((Raíz)) --> H1((Hijo))
                R --> H2((Hijo))
                H1 --> N1((Nieto))
                H1 --> N2((Nieto))
                H2 --> N3((Nieto))
                style R fill:#fdba74,stroke:#ea580c,stroke-width:3px
            </div>
          </div>

          <div class="bg-orange-50 border border-orange-200 rounded-lg p-3 text-sm text-orange-900 text-center">
            📂 Como un árbol real: raíces, ramas y hojas… pero crece <strong>hacia abajo</strong>.
          </div>
        </div>
      `
    },
    {
      id: 'pnn1-8',
      title: 'Terminología esencial',
      contentHtml: `
        <div class="space-y-4">
          <div class="overflow-x-auto">
            <table class="w-full text-sm border-collapse">
              <thead><tr class="bg-slate-100 text-slate-700"><th class="p-2 text-left border">Término</th><th class="p-2 text-left border">Significado</th></tr></thead>
              <tbody class="text-gray-600">
                <tr><td class="p-2 border font-semibold">Raíz</td><td class="p-2 border">Nodo sin padre</td></tr>
                <tr class="bg-slate-50"><td class="p-2 border font-semibold">Hoja (externa)</td><td class="p-2 border">Nodo sin hijos</td></tr>
                <tr><td class="p-2 border font-semibold">Nodo interno</td><td class="p-2 border">Con al menos un hijo</td></tr>
                <tr class="bg-slate-50"><td class="p-2 border font-semibold">Padre / hijo / hermanos</td><td class="p-2 border">Los hermanos comparten padre</td></tr>
                <tr><td class="p-2 border font-semibold">Nivel</td><td class="p-2 border">Aristas desde la raíz (raíz = nivel 0)</td></tr>
                <tr class="bg-slate-50"><td class="p-2 border font-semibold">Altura</td><td class="p-2 border">N.º de aristas del camino más largo de la raíz a una hoja (raíz = nivel 0 ⇒ altura = nivel máximo)</td></tr>
                <tr><td class="p-2 border font-semibold">Grado</td><td class="p-2 border">N.º de hijos; grado del árbol = máximo</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 'pnn1-9',
      title: 'Ejemplo guiado de métricas',
      contentHtml: `
        <div class="space-y-5">
          <div class="flex justify-center bg-white p-5 rounded-xl border shadow-sm">
            <div class="mermaid">
              graph TD
                A((A)) --> B((B))
                A --> C((C))
                B --> D((D))
                B --> E((E))
                C --> F((F))
                style A fill:#fdba74,stroke:#ea580c
            </div>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
            <div class="bg-orange-50 border border-orange-200 rounded-lg p-3"><strong>Raíz:</strong> A</div>
            <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-3"><strong>Hojas:</strong> D, E, F</div>
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-3"><strong>Internos:</strong> A, B, C</div>
            <div class="bg-violet-50 border border-violet-200 rounded-lg p-3"><strong>Hermanos:</strong> B–C, D–E</div>
          </div>

          <div class="bg-slate-50 border rounded-lg p-3 text-xs text-slate-600">
            ✏️ Calcula ahora: <strong>altura</strong> del árbol · <strong>nivel</strong> de cada nodo · <strong>grado</strong> de cada nodo y <strong>grado del árbol</strong>.
          </div>
        </div>
      `
    },
    {
      id: 'pnn1-10',
      title: 'Propiedades clave',
      contentHtml: `
        <div class="space-y-5">
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-white border-2 border-orange-100 rounded-xl p-4 text-center shadow-sm"><p class="text-sm text-gray-500">Nodos y aristas</p><p class="text-2xl font-bold text-orange-700 mt-1">E = N − 1</p></div>
            <div class="bg-white border-2 border-amber-100 rounded-xl p-4 text-center shadow-sm"><p class="text-sm text-gray-500">Caminos entre dos nodos</p><p class="text-2xl font-bold text-amber-700 mt-1">único</p></div>
            <div class="bg-white border-2 border-red-100 rounded-xl p-4 text-center shadow-sm"><p class="text-sm text-gray-500">Ciclos</p><p class="text-2xl font-bold text-red-700 mt-1">0</p></div>
          </div>

          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 text-sm">
            💡 Un árbol con <strong>12 nodos</strong> tiene <strong>11 aristas</strong>. Si tuviera un ciclo, ya no sería un árbol.
          </div>
        </div>
      `
    },
    {
      id: 'pnn1-11',
      title: 'Árboles en el mundo real',
      contentHtml: `
        <div class="space-y-5">
          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-white border rounded-xl p-4 shadow-sm"><div class="text-3xl">🗂️</div><h4 class="font-bold text-slate-800 mt-1">Sistema de archivos</h4><p class="text-xs text-gray-500">Carpetas y archivos anidados.</p></div>
            <div class="bg-white border rounded-xl p-4 shadow-sm"><div class="text-3xl">🌐</div><h4 class="font-bold text-slate-800 mt-1">DOM de HTML</h4><p class="text-xs text-gray-500">Etiquetas anidadas de una página.</p></div>
            <div class="bg-white border rounded-xl p-4 shadow-sm"><div class="text-3xl">🏢</div><h4 class="font-bold text-slate-800 mt-1">Organigrama</h4><p class="text-xs text-gray-500">Jerarquía de una empresa.</p></div>
            <div class="bg-white border rounded-xl p-4 shadow-sm"><div class="text-3xl">➗</div><h4 class="font-bold text-slate-800 mt-1">Expresiones aritméticas</h4><p class="text-xs text-gray-500">Cómo se representan operaciones.</p></div>
          </div>

          <div class="bg-indigo-50 border border-indigo-200 rounded-lg p-3 text-sm text-indigo-900">
            🔗 Las métricas que practicamos hoy son la base del <strong>HEAP</strong> (semana 2) y del análisis de eficiencia.
          </div>
        </div>
      `
    },
    {
      id: 'pnn1-12',
      title: 'Práctica autónoma (jueves)',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-orange-700 text-white rounded-xl p-4 flex justify-between items-center">
            <div><h4 class="font-bold text-lg">🖊️ Práctica de árboles</h4><p class="text-orange-50 text-xs">Individual / parejas · usa el borrador</p></div>
            <span class="text-3xl">✏️</span>
          </div>
          <ol class="space-y-2 text-sm">
            <li class="bg-white border rounded-lg p-3 shadow-sm"><strong>1.</strong> Identifica raíz, hojas, nodos internos, hermanos y subárboles.</li>
            <li class="bg-white border rounded-lg p-3 shadow-sm"><strong>2.</strong> Calcula la altura y el nivel de cada nodo.</li>
            <li class="bg-white border rounded-lg p-3 shadow-sm"><strong>3.</strong> Calcula el grado de cada nodo y el grado del árbol.</li>
            <li class="bg-white border rounded-lg p-3 shadow-sm"><strong>4.</strong> Dibuja un árbol con <strong>altura 3</strong>, <strong>4 hojas</strong> y <strong>grado 3</strong>.</li>
            <li class="bg-white border rounded-lg p-3 shadow-sm"><strong>5.</strong> ¿Cuántas aristas tiene un árbol de 12 nodos? Justifica.</li>
            <li class="bg-amber-50 border border-amber-200 rounded-lg p-3 shadow-sm"><strong>6. Reto:</strong> escribe un problema cotidiano que implique minimizar tiempo o costo (objetivo + restricción).</li>
          </ol>
          <p class="text-xs text-gray-500 text-center">🔁 Verificación cruzada entre parejas (5 min).</p>
        </div>
      `
    },
    {
      id: 'pnn1-13',
      title: 'Sesión 2 (viernes): diagnóstica y taller',
      contentHtml: `
        <div class="space-y-6">
          <div class="flex items-center gap-3">
            <span class="bg-orange-700 text-white text-xs font-bold px-3 py-1 rounded-full">SESIÓN 2 · VIERNES</span>
            <span class="text-sm text-gray-500">Práctica + diagnóstica 0%</span>
          </div>

          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <h4 class="font-bold text-amber-900 mb-2">⚡ Repaso relámpago</h4>
            <ol class="list-decimal list-inside text-sm text-amber-900 space-y-1">
              <li>¿Qué dos cosas definen un problema de optimización?</li>
              <li>¿Diferencia entre nivel y altura?</li>
              <li>¿Cuántas aristas tiene un árbol de N nodos?</li>
            </ol>
          </div>

          <div class="bg-slate-900 text-white rounded-xl p-4">
            <h4 class="font-bold text-lg">📝 Prueba diagnóstica (0%, no califica)</h4>
            <p class="text-slate-300 text-sm mt-1">Valoración conceptual, procedimental y actitudinal.</p>
          </div>

          <div class="bg-white border rounded-xl p-4 shadow-sm">
            <h4 class="font-bold text-slate-800 text-sm mb-2">🛠️ Taller práctico (parejas)</h4>
            <p class="text-xs text-gray-600">7 ejercicios: métricas de árboles, dibujar con condiciones, aristas de un árbol de 15 nodos, aplicación a la mochila y representar la jerarquía de carpetas de un proyecto.</p>
          </div>
        </div>
      `
    },
    {
      id: 'pnn1-14',
      title: 'Cierre: hacia el HEAP',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-gradient-to-r from-orange-700 to-amber-700 text-white p-4 rounded-xl">
            <p class="text-lg font-semibold">Optimización = objetivo + restricciones · Árboles = jerarquía + métricas.</p>
          </div>
          <div class="bg-white border rounded-xl p-4 shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">📚 Tarea</h4>
            <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>Terminar el taller de árboles.</li>
              <li>Repasar recursividad (Joyanes) para la Unidad II.</li>
              <li>Traer cuaderno de ejercicios a cada clase.</li>
            </ul>
          </div>
          <div class="bg-orange-50 border border-orange-200 rounded-lg p-3 text-sm text-orange-900 text-center">
            ⏭️ <strong>Semana 2:</strong> algoritmos <strong>INSERTAR</strong> y <strong>HEAPIFY</strong>.
          </div>
        </div>
      `
    },
    {
      id: 'pnn1-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full space-y-4">
          <div class="text-6xl">🤔</div>
          <h3 class="text-2xl font-bold text-slate-900">¿Dudas sobre optimización y árboles?</h3>
          <p class="text-gray-500">¿Altura vs. nivel? ¿Grado del árbol? ¿Función objetivo?</p>
        </div>
      `
    },
    {
      id: 'pnn1-end-thanks',
      title: 'Gracias',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center space-y-6">
          <div class="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-4xl">🌳</div>
          <div>
            <h2 class="text-3xl font-bold text-slate-900">Fin del Módulo 1</h2>
            <p class="text-gray-600 mt-2">Próxima parada: <strong>Heaps y los algoritmos INSERTAR y HEAPIFY</strong>.</p>
          </div>
        </div>
      `
    }
  ]
};
