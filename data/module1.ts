
import { Module } from '../types';

export const MODULE_1: Module = {
  id: 'mod-1',
  title: '1. Conceptos Básicos',
  description: 'Definiciones fundamentales, unidades de información, tipos y evolución de computadoras.',
  evaluation: '0% - Prueba Diagnóstica',
  slides: [
    {
      id: 's1-1',
      title: 'Definiciones Fundamentales',
      contentHtml: `
        <div class="space-y-8">
          <p class="lead text-xl text-gray-600">Introducción a los conceptos pilares de la informática y la computación.</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 class="text-lg font-bold text-gray-900 mb-2 border-b pb-2">Computador</h3>
              <p class="text-gray-600">Dispositivo electrónico capaz de recibir, procesar, producir y almacenar datos de forma rápida y automática.</p>
            </div>
            <div class="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 class="text-lg font-bold text-gray-900 mb-2 border-b pb-2">Datos vs. Información</h3>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-start"><span class="font-semibold text-gray-800 w-24 flex-shrink-0">Dato:</span> <span>Representación simbólica (numérica, alfabética) sin contexto.</span></li>
                <li class="flex items-start"><span class="font-semibold text-gray-800 w-24 flex-shrink-0">Información:</span> <span>Conjunto organizado de datos procesados que constituyen un mensaje.</span></li>
              </ul>
            </div>
          </div>

          <div class="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <h3 class="text-lg font-bold text-slate-800 mb-4">Conceptos Relacionados</h3>
            <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div class="bg-white px-4 py-3 rounded border border-slate-200">
                <dt class="text-sm font-medium text-slate-500">Redes</dt>
                <dd class="mt-1 text-sm text-slate-900">Conexión de equipos para compartir recursos.</dd>
              </div>
              <div class="bg-white px-4 py-3 rounded border border-slate-200">
                <dt class="text-sm font-medium text-slate-500">Virus (Malware)</dt>
                <dd class="mt-1 text-sm text-slate-900">Software diseñado para infiltrarse o dañar un sistema sin consentimiento.</dd>
              </div>
              <div class="bg-white px-4 py-3 rounded border border-slate-200">
                <dt class="text-sm font-medium text-slate-500">Informática</dt>
                <dd class="mt-1 text-sm text-slate-900">Ciencia que estudia el tratamiento automático de la información.</dd>
              </div>
            </dl>
          </div>
        </div>
      `
    },
    {
      id: 's1-2',
      title: 'Evolución de las Computadoras',
      contentHtml: `
        <div class="space-y-8">
          <p class="text-gray-600">La historia de la computación se divide en generaciones, marcadas por el componente electrónico principal utilizado.</p>
          
          <div class="relative border-l-2 border-gray-200 ml-4 space-y-10">
            <div class="ml-8 relative">
              <span class="absolute -left-11 top-1 flex items-center justify-center w-6 h-6 bg-slate-200 rounded-full ring-4 ring-white font-bold text-xs text-slate-600">1</span>
              <h3 class="text-lg font-bold text-gray-900">1ª Generación (1940-1956)</h3>
              <p class="text-gray-500 mb-2 font-mono text-sm">Tecnología: Tubos de Vacío</p>
              <p class="text-gray-700">Máquinas gigantescas que ocupaban habitaciones enteras (ej. ENIAC). Consumían mucha electricidad y generaban mucho calor. Se programaban en lenguaje máquina.</p>
            </div>

            <div class="ml-8 relative">
              <span class="absolute -left-11 top-1 flex items-center justify-center w-6 h-6 bg-slate-200 rounded-full ring-4 ring-white font-bold text-xs text-slate-600">2</span>
              <h3 class="text-lg font-bold text-gray-900">2ª Generación (1956-1963)</h3>
              <p class="text-gray-500 mb-2 font-mono text-sm">Tecnología: Transistores</p>
              <p class="text-gray-700">El transistor reemplaza al tubo de vacío. Computadoras más pequeñas, rápidas y eficientes. Surgen los lenguajes simbólicos (Assembly) y de alto nivel (COBOL, FORTRAN).</p>
            </div>

            <div class="ml-8 relative">
              <span class="absolute -left-11 top-1 flex items-center justify-center w-6 h-6 bg-slate-200 rounded-full ring-4 ring-white font-bold text-xs text-slate-600">3</span>
              <h3 class="text-lg font-bold text-gray-900">3ª Generación (1964-1971)</h3>
              <p class="text-gray-500 mb-2 font-mono text-sm">Tecnología: Circuitos Integrados</p>
              <p class="text-gray-700">Miniaturización de componentes en chips de silicio. Nacen los Sistemas Operativos y la interacción mediante teclados y monitores.</p>
            </div>

             <div class="ml-8 relative">
              <span class="absolute -left-11 top-1 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full ring-4 ring-white font-bold text-xs text-white">4</span>
              <h3 class="text-lg font-bold text-gray-900">4ª Generación (1971-Presente)</h3>
              <p class="text-gray-500 mb-2 font-mono text-sm">Tecnología: Microprocesadores</p>
              <p class="text-gray-700">Todos los componentes básicos en un solo chip (CPU). Nace la Computadora Personal (PC), las redes de computadoras e Internet.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 's1-3',
      title: 'Tipos de Computadoras',
      contentHtml: `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white p-6 rounded border border-gray-200">
                <h4 class="font-bold text-lg text-slate-800 mb-2">Supercomputadoras</h4>
                <p class="text-gray-600 text-sm">Sistemas de cómputo más potentes y rápidos del mundo. Usados para ciencia de datos, clima, simulaciones nucleares.</p>
            </div>
             <div class="bg-white p-6 rounded border border-gray-200">
                <h4 class="font-bold text-lg text-slate-800 mb-2">Mainframes</h4>
                <p class="text-gray-600 text-sm">Computadoras centrales diseñadas para procesar millones de transacciones comerciales (Bancos, Aerolíneas).</p>
            </div>
             <div class="bg-white p-6 rounded border border-gray-200">
                <h4 class="font-bold text-lg text-slate-800 mb-2">Estaciones de Trabajo (Workstations)</h4>
                <p class="text-gray-600 text-sm">PCs de alto rendimiento para tareas especializadas como diseño gráfico (CAD), edición de video o ingeniería.</p>
            </div>
             <div class="bg-white p-6 rounded border border-gray-200">
                <h4 class="font-bold text-lg text-slate-800 mb-2">Microcomputadoras</h4>
                <p class="text-gray-600 text-sm">Equipos de uso personal. Incluye:</p>
                <ul class="list-disc list-inside text-gray-500 text-sm mt-2 ml-2">
                  <li>Desktops (Escritorio)</li>
                  <li>Laptops (Portátiles)</li>
                  <li>Tablets y Smartphones</li>
                </ul>
            </div>
        </div>
      `
    },
    {
      id: 's1-4',
      title: 'Práctica: Conceptos Generales',
      contentHtml: `
        <div class="space-y-8">
          <div class="bg-blue-50 p-4 rounded-lg text-blue-800 text-sm mb-6">
            <strong>Instrucciones:</strong> Intente responder antes de hacer clic para ver la solución.
          </div>

          <!-- Quiz Section -->
          <h3 class="font-bold text-lg text-slate-800 border-b pb-2">Quiz Rápido</h3>
          
          <div class="space-y-4">
            <details class="group border border-slate-200 rounded-lg bg-white open:ring-2 open:ring-blue-100">
              <summary class="flex items-center justify-between p-4 cursor-pointer font-medium text-slate-700 list-none">
                <span>1. ¿Qué tecnología definió la 2da generación de computadoras?</span>
                <span class="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div class="p-4 pt-0 text-slate-600 text-sm border-t border-slate-100 mt-2">
                <p class="font-bold text-green-600">Respuesta: El Transistor.</p>
                <p>Reemplazó a los tubos de vacío, permitiendo computadoras más pequeñas y eficientes.</p>
              </div>
            </details>

            <details class="group border border-slate-200 rounded-lg bg-white open:ring-2 open:ring-blue-100">
              <summary class="flex items-center justify-between p-4 cursor-pointer font-medium text-slate-700 list-none">
                <span>2. ¿Cuál es la diferencia principal entre Dato e Información?</span>
                <span class="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div class="p-4 pt-0 text-slate-600 text-sm border-t border-slate-100 mt-2">
                <p class="font-bold text-green-600">Respuesta: El Contexto.</p>
                <p>Un dato es un símbolo aislado (ej. "25"). Información son datos procesados con significado (ej. "Temperatura: 25°C").</p>
              </div>
            </details>
          </div>

          <!-- Exercise Section -->
          <h3 class="font-bold text-lg text-slate-800 border-b pb-2 mt-8">Ejercicio de Clasificación</h3>
          <p class="text-sm text-gray-600 mb-4">Indique qué tipo de computadora sería ideal para cada caso:</p>
          
          <div class="space-y-3">
             <div class="flex flex-col sm:flex-row sm:items-center justify-between border-b border-dashed pb-2">
                <span class="text-slate-700">Un estudiante universitario para sus tareas.</span>
                <span class="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-500 mt-1 sm:mt-0">Microcomputadora (Laptop)</span>
             </div>
             <div class="flex flex-col sm:flex-row sm:items-center justify-between border-b border-dashed pb-2">
                <span class="text-slate-700">Predecir el clima mundial.</span>
                <span class="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-500 mt-1 sm:mt-0">Supercomputadora</span>
             </div>
             <div class="flex flex-col sm:flex-row sm:items-center justify-between border-b border-dashed pb-2">
                <span class="text-slate-700">Gestionar las cuentas de 5 millones de clientes de un banco.</span>
                <span class="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-500 mt-1 sm:mt-0">Mainframe</span>
             </div>
          </div>

        </div>
      `
    },
    {
      id: 's1-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6 animate-bounce">
             <span class="text-6xl font-bold select-none">?</span>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Espacio de Dudas</h3>
          <p class="text-center text-gray-600 max-w-md">
            ¿Hay algún concepto sobre los tipos de computadoras o su evolución que no haya quedado claro?
          </p>
        </div>
      `
    },
    {
      id: 's1-end-thanks',
      title: 'Gracias por su atención',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">Fin de la Clase</h2>
          
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-blue-500 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "La informática no trata sobre ordenadores más de lo que la astronomía trata sobre telescopios."
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
