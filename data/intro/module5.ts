


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

          <ol class="relative border-l border-gray-200 ml-3">                  
            <li class="mb-10 ml-6">            
              <span class="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white">
                <span class="text-blue-800 font-bold">1</span>
              </span>
              <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900">Análisis del Problema</h3>
              <p class="mb-4 text-base font-normal text-gray-500">Es la fase más importante. Se debe comprender qué se pide. Identificar: Datos de entrada, proceso necesario y resultado esperado.</p>
            </li>
            <li class="mb-10 ml-6">            
              <span class="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white">
                <span class="text-blue-800 font-bold">2</span>
              </span>
              <h3 class="mb-1 text-lg font-semibold text-gray-900">Diseño del Algoritmo</h3>
              <p class="text-base font-normal text-gray-500">Crear la solución utilizando herramientas como Pseudocódigo o Diagramas de Flujo. Es una solución independiente del lenguaje.</p>
            </li>
            <li class="mb-10 ml-6">            
              <span class="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white">
                 <span class="text-blue-800 font-bold">3</span>
              </span>
              <h3 class="mb-1 text-lg font-semibold text-gray-900">Codificación</h3>
              <p class="text-base font-normal text-gray-500">Traducir el algoritmo diseñado a un lenguaje de programación específico (C, Java, Python, JS) siguiendo su sintaxis.</p>
            </li>
            <li class="mb-10 ml-6">            
              <span class="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white">
                 <span class="text-blue-800 font-bold">4</span>
              </span>
              <h3 class="mb-1 text-lg font-semibold text-gray-900">Prueba y Depuración</h3>
              <p class="text-base font-normal text-gray-500">Ejecutar el programa para detectar errores (bugs) de sintaxis o lógica y corregirlos.</p>
            </li>
          </ol>
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
          <div class="bg-white border rounded-lg p-6 shadow-sm">
            <h3 class="font-bold text-slate-900 mb-2">Caso 1: Cambio de Divisas</h3>
            <p class="text-sm text-gray-600 mb-4">Se requiere un programa que convierta una cantidad dada en Dólares a Pesos, sabiendo que 1 Dólar = 4000 Pesos.</p>
            
            <details class="bg-slate-50 p-4 rounded border border-slate-100">
              <summary class="text-sm font-semibold text-blue-600 cursor-pointer">Ver Análisis</summary>
              <div class="mt-3 space-y-2 text-sm text-slate-700">
                <p><strong>Entrada:</strong> Cantidad en Dólares.</p>
                <p><strong>Proceso:</strong> Multiplicar la cantidad de dólares por 4000.</p>
                <p><strong>Salida:</strong> Cantidad en Pesos.</p>
              </div>
            </details>
          </div>

          <!-- Case 2 -->
          <div class="bg-white border rounded-lg p-6 shadow-sm">
            <h3 class="font-bold text-slate-900 mb-2">Caso 2: Pintura para una Pared</h3>
            <p class="text-sm text-gray-600 mb-4">Calcular cuántos litros de pintura se necesitan para pintar una pared rectangular, sabiendo que 1 Litro cubre 10 metros cuadrados.</p>
            
            <details class="bg-slate-50 p-4 rounded border border-slate-100">
              <summary class="text-sm font-semibold text-blue-600 cursor-pointer">Ver Análisis</summary>
              <div class="mt-3 space-y-2 text-sm text-slate-700">
                <p><strong>Entrada:</strong> Alto de la pared, Ancho de la pared.</p>
                <p><strong>Proceso:</strong> <br>1. Calcular Area (Alto * Ancho).<br>2. Calcular Litros (Area / 10).</p>
                <p><strong>Salida:</strong> Cantidad de Litros.</p>
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
