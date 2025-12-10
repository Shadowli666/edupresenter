
import { Module } from '../types';

export const PNN_MODULE_12: Module = {
  id: 'pnn-mod-12',
  title: '12. Proyecto Final y Cierre',
  description: 'Defensa de proyecto, planificación del trabajo y entrega de notas finales.',
  evaluation: '20% - Proyecto Final (Integrador)',
  slides: [
    {
      id: 'pnn12-1',
      title: 'Proyecto Final de Curso',
      contentHtml: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 rounded-lg text-white shadow-lg">
            <h3 class="text-2xl font-bold mb-2">Sistema de Rutas Óptimas</h3>
            <p class="opacity-90">
              Desarrollar una aplicación que utilice grafos para modelar un sistema de transporte o red de comunicaciones.
            </p>
          </div>

          <div class="bg-white p-6 border rounded-xl shadow-sm">
            <h4 class="font-bold text-slate-800 mb-4">Requerimientos</h4>
            <ul class="space-y-3 text-sm text-slate-600">
              <li class="flex items-start gap-2">
                <span class="text-green-500 font-bold">✓</span>
                Implementar grafos usando Listas de Adyacencia.
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-500 font-bold">✓</span>
                Permitir agregar nodos y aristas con pesos.
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-500 font-bold">✓</span>
                Calcular la ruta más corta usando Dijkstra.
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-500 font-bold">✓</span>
                Visualización gráfica del grafo (opcional pero recomendado).
              </li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'pnn12-2',
      title: 'Planificación del Proyecto',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            El proyecto final está pensado para desarrollarse a lo largo de varias semanas. Una planificación básica podría ser:
          </p>
          <ol class="list-decimal list-inside text-sm text-slate-700 space-y-2 bg-slate-50 p-4 rounded-lg border">
            <li><strong>Semana 1:</strong> Definición del problema, especificación de requerimientos y diseño de la estructura de datos principal.</li>
            <li><strong>Semana 2:</strong> Implementación de las estructuras de datos (grafos, colas, pilas, etc.).</li>
            <li><strong>Semana 3:</strong> Implementación de los algoritmos (Dijkstra, MST, Backtracking, etc.).</li>
            <li><strong>Semana 4:</strong> Pruebas, validación de casos extremos y preparación de la presentación.</li>
          </ol>
        </div>
      `
    },
    {
      id: 'pnn12-3',
      title: 'Checklist de Entrega',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-white p-6 border rounded-xl shadow-sm">
            <h4 class="font-bold text-slate-800 mb-4">Antes de entregar, verifica:</h4>
            <ul class="space-y-2 text-sm text-slate-700">
              <li>• El código compila y corre sin errores.</li>
              <li>• Hay casos de prueba que demuestran el funcionamiento correcto.</li>
              <li>• El informe/documentación explica las decisiones de diseño algorítmico.</li>
              <li>• La presentación está estructurada (problema, solución, demo, conclusiones).</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'pnn12-end-questions',
      title: '¿Preguntas sobre el Proyecto?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="text-6xl font-bold text-indigo-600 mb-6 select-none">?</div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Proyecto Final</h3>
          <p class="text-center text-gray-600 max-w-md">
            Espacio para aclarar dudas sobre alcance, criterios de evaluación, entregables y fechas importantes del proyecto integrador.
          </p>
        </div>
      `
    },
    {
      id: 'pnn12-end-thanks',
      title: 'Cierre del Curso',
      contentHtml: `
        <div class="space-y-6 text-center">
          <h3 class="text-2xl font-bold text-slate-800 mb-2">¡Felicidades!</h3>
          <p class="text-gray-600 max-w-md mx-auto">
            Has completado el contenido de Programación No Numérica II. Ahora dominas estructuras de datos avanzadas fundamentales para la ingeniería de software.
          </p>
          
          <div class="grid grid-cols-3 gap-4 max-w-lg mx-auto mt-8">
             <div class="p-4 bg-slate-50 rounded border">
               <div class="text-2xl mb-1">🌳</div>
               <span class="text-xs font-bold text-slate-700">Árboles</span>
             </div>
             <div class="p-4 bg-slate-50 rounded border">
               <div class="text-2xl mb-1">⚡</div>
               <span class="text-xs font-bold text-slate-700">Ordenamiento</span>
             </div>
             <div class="p-4 bg-slate-50 rounded border">
               <div class="text-2xl mb-1">🕸️</div>
               <span class="text-xs font-bold text-slate-700">Grafos</span>
             </div>
          </div>
        </div>
      `
    }
  ]
};
