


import { Module } from '../../types';

export const MODULE_5: Module = {
  id: 'mod-5',
  title: '5. Resolución de Problemas',
  description: 'Metodología de resolución de problemas y sus fases.',
  evaluation: '20% - Prueba Escrita',
  slides: [
    {
      id: 's5-1',
      title: 'Fases de Resolución',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">Para que una computadora resuelva un problema, el programador debe seguir una metodología rigurosa.</p>
          
          <!-- Visual Cycle -->
          <div class="flex justify-center mb-8">
             <div class="mermaid">
               flowchart TD
                 A[1. Análisis del Problema] --> B[2. Diseño del Algoritmo]
                 B --> C[3. Codificación]
                 C --> D{4. Prueba y Depuración}
                 D -->|Errores| B
                 D -->|Éxito| E((Fin))
                 style A fill:#dbeafe,stroke:#2563eb,stroke-width:2px
                 style B fill:#f3e8ff,stroke:#9333ea,stroke-width:2px
                 style C fill:#dcfce7,stroke:#16a34a,stroke-width:2px
                 style D fill:#fef9c3,stroke:#eab308,stroke-width:2px
             </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Phase 1 -->
            <div class="bg-white p-4 rounded-lg border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow">
              <div class="flex items-center gap-3 mb-2">
                <span class="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
                <h3 class="font-bold text-slate-800">Análisis</h3>
              </div>
              <p class="text-sm text-gray-600"><strong>¿Qué me piden?</strong><br>Identificar Entradas, Procesos y Salidas. Es la fase de comprensión.</p>
            </div>

            <!-- Phase 2 -->
            <div class="bg-white p-4 rounded-lg border-l-4 border-purple-500 shadow-sm hover:shadow-md transition-shadow">
              <div class="flex items-center gap-3 mb-2">
                <span class="bg-purple-100 text-purple-800 w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span>
                <h3 class="font-bold text-slate-800">Diseño</h3>
              </div>
              <p class="text-sm text-gray-600"><strong>¿Cómo lo resuelvo?</strong><br>Crear el plan lógico usando Pseudocódigo o Diagramas de Flujo.</p>
            </div>

            <!-- Phase 3 -->
            <div class="bg-white p-4 rounded-lg border-l-4 border-green-500 shadow-sm hover:shadow-md transition-shadow">
              <div class="flex items-center gap-3 mb-2">
                <span class="bg-green-100 text-green-800 w-8 h-8 rounded-full flex items-center justify-center font-bold">3</span>
                <h3 class="font-bold text-slate-800">Codificación</h3>
              </div>
              <p class="text-sm text-gray-600"><strong>Traducir</strong><br>Escribir el algoritmo en un lenguaje real (Python, C++, Java).</p>
            </div>

            <!-- Phase 4 -->
            <div class="bg-white p-4 rounded-lg border-l-4 border-yellow-500 shadow-sm hover:shadow-md transition-shadow">
              <div class="flex items-center gap-3 mb-2">
                <span class="bg-yellow-100 text-yellow-800 w-8 h-8 rounded-full flex items-center justify-center font-bold">4</span>
                <h3 class="font-bold text-slate-800">Prueba</h3>
              </div>
              <p class="text-sm text-gray-600"><strong>Verificar</strong><br>Buscar errores (bugs) y corregirlos. Probar con casos extremos.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 's5-2',
      title: 'Práctica: Análisis de Problemas',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-600 mb-6">Lea los siguientes enunciados y realice la <strong>Fase 1: Análisis</strong> (Definir Entrada, Proceso y Salida).</p>

          <!-- Case 1 -->
          <div class="bg-white border rounded-lg p-6 shadow-sm group hover:border-blue-300 transition-colors">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span class="text-2xl">💱</span> Caso 1: Cambio de Divisas
                </h3>
                <p class="text-sm text-gray-600 mb-4">Se requiere un programa que convierta una cantidad dada en Dólares a Pesos, sabiendo que 1 Dólar = 4000 Pesos.</p>
              </div>
            </div>
            
            <details class="bg-slate-50 p-4 rounded border border-slate-100 group-open:bg-blue-50 group-open:border-blue-100 transition-colors">
              <summary class="text-sm font-semibold text-blue-600 cursor-pointer select-none">Ver Análisis</summary>
              <div class="mt-3 grid grid-cols-3 gap-4 text-sm text-slate-700 text-center">
                <div class="bg-white p-2 rounded shadow-sm">
                  <div class="font-bold text-xs text-slate-400 uppercase">Entrada</div>
                  <div>Cantidad ($)</div>
                </div>
                <div class="bg-white p-2 rounded shadow-sm">
                  <div class="font-bold text-xs text-slate-400 uppercase">Proceso</div>
                  <div>$ * 4000</div>
                </div>
                <div class="bg-white p-2 rounded shadow-sm">
                  <div class="font-bold text-xs text-slate-400 uppercase">Salida</div>
                  <div>Total (COP)</div>
                </div>
              </div>
            </details>
          </div>

          <!-- Case 2 -->
          <div class="bg-white border rounded-lg p-6 shadow-sm group hover:border-orange-300 transition-colors">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span class="text-2xl">🎨</span> Caso 2: Pintura para Pared
                </h3>
                <p class="text-sm text-gray-600 mb-4">Calcular cuántos litros de pintura se necesitan para pintar una pared rectangular, sabiendo que 1 Litro cubre 10 metros cuadrados.</p>
              </div>
            </div>
            
            <details class="bg-slate-50 p-4 rounded border border-slate-100 group-open:bg-orange-50 group-open:border-orange-100 transition-colors">
              <summary class="text-sm font-semibold text-blue-600 cursor-pointer select-none">Ver Análisis</summary>
              <div class="mt-3 grid grid-cols-3 gap-4 text-sm text-slate-700 text-center">
                <div class="bg-white p-2 rounded shadow-sm">
                  <div class="font-bold text-xs text-slate-400 uppercase">Entrada</div>
                  <div>Alto, Ancho</div>
                </div>
                <div class="bg-white p-2 rounded shadow-sm">
                  <div class="font-bold text-xs text-slate-400 uppercase">Proceso</div>
                  <div class="text-xs">1. Area = Alto * Ancho<br>2. Litros = Area / 10</div>
                </div>
                <div class="bg-white p-2 rounded shadow-sm">
                  <div class="font-bold text-xs text-slate-400 uppercase">Salida</div>
                  <div>Litros</div>
                </div>
              </div>
            </details>
          </div>
            </details>
          </div>

        </div>
      `
    },
    {
      id: 's5-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6 animate-bounce">
             <span class="text-6xl font-bold select-none">?</span>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Espacio de Dudas</h3>
          <p class="text-center text-gray-600 max-w-md">
            El análisis es crucial. ¿Alguna duda sobre cómo abordar un problema desde cero?
          </p>
        </div>
      `
    },
    {
      id: 's5-end-thanks',
      title: 'Gracias por su atención',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">Fin del Curso</h2>
          
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-blue-500 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "Si depurar es el proceso de eliminar errores de software, entonces programar debe ser el proceso de ponerlos."
            </p>
            <footer class="flex items-center justify-center gap-2">
              <div class="h-px w-8 bg-slate-300"></div>
              <cite class="not-italic font-bold text-slate-900">Edsger W. Dijkstra</cite>
            </footer>
          </blockquote>
        </div>
      `
    }
  ]
};
