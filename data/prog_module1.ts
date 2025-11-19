
import { Module } from '../types';

export const PROG_MODULE_1: Module = {
  id: 'prog-mod-1',
  title: '1. Datos, Información y Procesamiento',
  description: 'Diferencias fundamentales y tipos de procesamiento de datos.',
  evaluation: '0% - Prueba Diagnóstica',
  slides: [
    {
      id: 'p1-1',
      title: 'Datos vs. Información',
      contentHtml: `
        <div class="space-y-8">
          <p class="lead text-xl text-gray-600">Para programar eficientemente, primero debemos entender la materia prima con la que trabajamos.</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-white border-l-4 border-blue-500 p-6 rounded shadow-sm">
              <h3 class="text-xl font-bold text-blue-900 mb-2">Datos</h3>
              <p class="text-gray-600 text-sm mb-4">Son hechos crudos, símbolos, caracteres o números sin contexto procesado.</p>
              <div class="bg-slate-100 p-3 rounded font-mono text-xs text-slate-600">
                Ejemplos: <br>
                - 25<br>
                - "Juan"<br>
                - 03/12/2023
              </div>
            </div>
            
            <div class="bg-white border-l-4 border-green-500 p-6 rounded shadow-sm">
              <h3 class="text-xl font-bold text-green-900 mb-2">Información</h3>
              <p class="text-gray-600 text-sm mb-4">Son datos procesados, organizados y estructurados que tienen significado y utilidad.</p>
              <div class="bg-slate-100 p-3 rounded font-mono text-xs text-slate-600">
                Ejemplos: <br>
                - "Juan tiene 25 años"<br>
                - Reporte de ventas de Diciembre
              </div>
            </div>
          </div>

          <div class="flex items-center justify-center my-4">
             <div class="bg-slate-800 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                Proceso: Dato + Contexto = Información
             </div>
          </div>
        </div>
      `
    },
    {
      id: 'p1-2',
      title: 'Tipos de Procesamiento',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">El procesamiento de datos es la transformación de datos crudos en información útil. Existen varios modelos según cómo y cuándo se realiza esta transformación.</p>
          
          <div class="grid gap-4">
            <div class="bg-white p-5 border rounded-lg hover:shadow-md transition">
              <h4 class="font-bold text-indigo-700 mb-1">Procesamiento por Lotes (Batch)</h4>
              <p class="text-sm text-gray-600">Los datos se acumulan y se procesan en grupo en un momento específico (ej. Nómina de fin de mes).</p>
            </div>

            <div class="bg-white p-5 border rounded-lg hover:shadow-md transition">
              <h4 class="font-bold text-indigo-700 mb-1">Procesamiento en Tiempo Real</h4>
              <p class="text-sm text-gray-600">Los datos se procesan casi instantáneamente al ser recibidos (ej. Reservas de vuelos, Cajeros automáticos).</p>
            </div>

            <div class="bg-white p-5 border rounded-lg hover:shadow-md transition">
              <h4 class="font-bold text-indigo-700 mb-1">Procesamiento Distribuido</h4>
              <p class="text-sm text-gray-600">Varias computadoras conectadas en red se dividen la tarea de procesamiento.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'p1-3',
      title: 'Práctica: Diagnóstico',
      contentHtml: `
        <div class="space-y-6">
          <h3 class="text-lg font-bold text-slate-800 border-b pb-2">Evaluación de Conceptos</h3>

          <div class="space-y-4">
            <details class="group border border-slate-200 rounded-lg bg-white p-4">
              <summary class="cursor-pointer font-medium text-slate-700 flex justify-between">
                <span>1. ¿Un número telefónico anotado en una servilleta es Dato o Información?</span>
                <span class="text-slate-400 text-xs">▼</span>
              </summary>
              <div class="mt-3 text-sm text-slate-600 pt-3 border-t border-slate-100">
                <span class="font-bold text-blue-600">Respuesta:</span> Dato. 
                <p>Si no sé de quién es o para qué sirve, carece de contexto. Si dice "Teléfono de Emergencias: 911", entonces es información.</p>
              </div>
            </details>

            <details class="group border border-slate-200 rounded-lg bg-white p-4">
              <summary class="cursor-pointer font-medium text-slate-700 flex justify-between">
                <span>2. ¿Qué tipo de procesamiento usa Netflix al recomendarte una película?</span>
                <span class="text-slate-400 text-xs">▼</span>
              </summary>
              <div class="mt-3 text-sm text-slate-600 pt-3 border-t border-slate-100">
                <span class="font-bold text-blue-600">Respuesta:</span> Tiempo Real / Híbrido.
                <p>Analiza tu clic inmediatamente, aunque usa bases de datos procesadas anteriormente (batch) para el algoritmo de recomendación masivo.</p>
              </div>
            </details>
          </div>
        </div>
      `
    },
    {
      id: 'p1-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6 animate-bounce">
             <span class="text-6xl font-bold select-none">?</span>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Sesión de Dudas</h3>
          <p class="text-center text-gray-600 max-w-md">
            ¿Queda clara la distinción entre datos crudos e información procesada?
          </p>
        </div>
      `
    },
    {
      id: 'p1-end-thanks',
      title: 'Gracias por su atención',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">Fin de la Clase</h2>
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-blue-500 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "Los datos son el nuevo petróleo. Es valioso, pero si no se refina, no se puede usar."
            </p>
            <footer class="flex items-center justify-center gap-2">
              <div class="h-px w-8 bg-slate-300"></div>
              <cite class="not-italic font-bold text-slate-900">Clive Humby</cite>
            </footer>
          </blockquote>
        </div>
      `
    }
  ]
};
