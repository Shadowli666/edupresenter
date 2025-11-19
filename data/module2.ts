
import { Module } from '../types';

export const MODULE_2: Module = {
  id: 'mod-2',
  title: '2. Hardware y Software',
  description: 'Distinción de elementos y sus aplicaciones.',
  evaluation: '0% - Ejercicio',
  slides: [
    {
      id: 's2-1',
      title: 'Hardware',
      contentHtml: `
        <div class="prose max-w-none">
          <p>El hardware representa la parte física y tangible de un sistema informático.</p>
          
          <h4 class="mt-6 mb-4 font-bold text-gray-800">Arquitectura Básica (Von Neumann)</h4>
          
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div class="p-4 border rounded text-center bg-gray-50">
              <div class="text-2xl mb-2">🧠</div>
              <div class="font-bold text-gray-900">CPU</div>
              <div class="text-xs text-gray-500">Cerebro del sistema</div>
            </div>
            <div class="p-4 border rounded text-center bg-gray-50">
              <div class="text-2xl mb-2">💾</div>
              <div class="font-bold text-gray-900">Memoria</div>
              <div class="text-xs text-gray-500">RAM (Trabajo) / ROM (Arranque)</div>
            </div>
            <div class="p-4 border rounded text-center bg-gray-50">
              <div class="text-2xl mb-2">💿</div>
              <div class="font-bold text-gray-900">Storage</div>
              <div class="text-xs text-gray-500">Discos Duros, SSD</div>
            </div>
            <div class="p-4 border rounded text-center bg-gray-50">
              <div class="text-2xl mb-2">⌨️</div>
              <div class="font-bold text-gray-900">Periféricos</div>
              <div class="text-xs text-gray-500">Entrada/Salida</div>
            </div>
          </div>

          <table class="w-full text-sm text-left text-gray-600 border">
            <thead class="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th class="px-6 py-3 border-b">Tipo</th>
                <th class="px-6 py-3 border-b">Función</th>
                <th class="px-6 py-3 border-b">Ejemplos</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b">
                <td class="px-6 py-4 font-medium text-gray-900">Entrada</td>
                <td class="px-6 py-4">Introducir datos</td>
                <td class="px-6 py-4">Teclado, Mouse, Escáner, Micrófono</td>
              </tr>
              <tr class="bg-white border-b">
                <td class="px-6 py-4 font-medium text-gray-900">Salida</td>
                <td class="px-6 py-4">Mostrar resultados</td>
                <td class="px-6 py-4">Monitor, Impresora, Parlantes</td>
              </tr>
              <tr class="bg-white">
                <td class="px-6 py-4 font-medium text-gray-900">E/S (Mixtos)</td>
                <td class="px-6 py-4">Ambas funciones</td>
                <td class="px-6 py-4">Pantalla táctil, Modem, USB</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: 's2-2',
      title: 'Software',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-lg text-gray-700">Soporte lógico de un sistema informático, que comprende el conjunto de los componentes lógicos necesarios que hacen posible la realización de tareas específicas.</p>
          
          <div class="space-y-4">
            <div class="flex flex-col md:flex-row border border-l-4 border-l-blue-500 rounded overflow-hidden">
              <div class="bg-blue-50 p-4 md:w-48 flex-shrink-0 font-bold text-blue-800 flex items-center justify-center md:justify-start">
                De Sistema
              </div>
              <div class="p-4 bg-white flex-grow">
                <p class="text-gray-700 mb-1 font-medium">Gestiona el hardware y provee servicios a otros programas.</p>
                <p class="text-sm text-gray-500">Ejemplos: Windows, Linux (Ubuntu, Debian), macOS, Android, iOS.</p>
              </div>
            </div>

            <div class="flex flex-col md:flex-row border border-l-4 border-l-purple-500 rounded overflow-hidden">
              <div class="bg-purple-50 p-4 md:w-48 flex-shrink-0 font-bold text-purple-800 flex items-center justify-center md:justify-start">
                De Aplicación
              </div>
              <div class="p-4 bg-white flex-grow">
                <p class="text-gray-700 mb-1 font-medium">Permite al usuario realizar una o varias tareas específicas.</p>
                <p class="text-sm text-gray-500">Ejemplos: Microsoft Word, Google Chrome, Spotify, Photoshop.</p>
              </div>
            </div>

            <div class="flex flex-col md:flex-row border border-l-4 border-l-green-500 rounded overflow-hidden">
              <div class="bg-green-50 p-4 md:w-48 flex-shrink-0 font-bold text-green-800 flex items-center justify-center md:justify-start">
                De Programación
              </div>
              <div class="p-4 bg-white flex-grow">
                <p class="text-gray-700 mb-1 font-medium">Herramientas que permiten al desarrollador escribir nuevos programas.</p>
                <p class="text-sm text-gray-500">Ejemplos: Visual Studio Code, Python, Compiladores C++.</p>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 's2-3',
      title: 'Práctica: Hardware y Software',
      contentHtml: `
        <div class="space-y-8">
          <p class="text-gray-600">Ponga a prueba sus conocimientos distinguiendo componentes físicos y lógicos.</p>

          <!-- Peripherals Identification -->
          <div class="bg-white border rounded-lg p-6 shadow-sm">
            <h3 class="font-bold text-lg text-slate-900 mb-4">Ejercicio 1: Clasificación de Periféricos</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div class="flex justify-between items-center p-2 bg-slate-50 rounded">
                <span>Webcam</span>
                <details class="text-right">
                  <summary class="cursor-pointer text-blue-600 text-xs">Ver Respuesta</summary>
                  <span class="text-green-600 font-bold">Entrada</span>
                </details>
              </div>
              <div class="flex justify-between items-center p-2 bg-slate-50 rounded">
                <span>Proyector (VideoBeam)</span>
                <details class="text-right">
                  <summary class="cursor-pointer text-blue-600 text-xs">Ver Respuesta</summary>
                  <span class="text-green-600 font-bold">Salida</span>
                </details>
              </div>
              <div class="flex justify-between items-center p-2 bg-slate-50 rounded">
                <span>Memoria USB</span>
                <details class="text-right">
                  <summary class="cursor-pointer text-blue-600 text-xs">Ver Respuesta</summary>
                  <span class="text-green-600 font-bold">E/S (Almacenamiento)</span>
                </details>
              </div>
              <div class="flex justify-between items-center p-2 bg-slate-50 rounded">
                <span>Joystick</span>
                <details class="text-right">
                  <summary class="cursor-pointer text-blue-600 text-xs">Ver Respuesta</summary>
                  <span class="text-green-600 font-bold">Entrada</span>
                </details>
              </div>
            </div>
          </div>

          <!-- Software Identification -->
          <div class="bg-white border rounded-lg p-6 shadow-sm">
            <h3 class="font-bold text-lg text-slate-900 mb-4">Ejercicio 2: Tipo de Software</h3>
            <p class="text-xs text-gray-500 mb-4">Determine si es Software de Sistema, Aplicación o Programación.</p>
            
            <div class="space-y-2">
               <details class="group bg-gray-50 rounded px-4 py-2 cursor-pointer">
                 <summary class="text-sm font-medium text-slate-700 flex justify-between">
                   <span>Windows 11</span>
                   <span class="text-gray-400 text-xs">?</span>
                 </summary>
                 <p class="text-xs mt-2 text-purple-700 font-bold">Software de Sistema</p>
               </details>

               <details class="group bg-gray-50 rounded px-4 py-2 cursor-pointer">
                 <summary class="text-sm font-medium text-slate-700 flex justify-between">
                   <span>Compilador de Java</span>
                   <span class="text-gray-400 text-xs">?</span>
                 </summary>
                 <p class="text-xs mt-2 text-purple-700 font-bold">Software de Programación</p>
               </details>

               <details class="group bg-gray-50 rounded px-4 py-2 cursor-pointer">
                 <summary class="text-sm font-medium text-slate-700 flex justify-between">
                   <span>Excel</span>
                   <span class="text-gray-400 text-xs">?</span>
                 </summary>
                 <p class="text-xs mt-2 text-purple-700 font-bold">Software de Aplicación</p>
               </details>
            </div>
          </div>

        </div>
      `
    },
    {
      id: 's2-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-6 animate-pulse">
             <span class="text-6xl font-bold select-none">?</span>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Consultas sobre el Tema</h3>
          <p class="text-center text-gray-600 max-w-md">
            Hardware y Software son la base de todo. ¿Alguna duda sobre sus diferencias o clasificaciones?
          </p>
        </div>
      `
    },
    {
      id: 's2-end-thanks',
      title: 'Gracias por su atención',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">Fin de la Clase</h2>
          
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-purple-500 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "El hardware es la parte de la computadora que puedes patear."
            </p>
            <footer class="flex items-center justify-center gap-2">
              <div class="h-px w-8 bg-slate-300"></div>
              <cite class="not-italic font-bold text-slate-900">Jeff Pesis</cite>
            </footer>
          </blockquote>
        </div>
      `
    }
  ]
};
