
import { Module } from '../../types';

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
        <div class="space-y-6">
          <p class="text-gray-700 text-lg">El hardware representa la parte física y tangible de un sistema informático. Es todo lo que puedes tocar.</p>
          
          <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center">
             <h4 class="font-bold text-slate-800 mb-4 border-b pb-2">Arquitectura de Von Neumann</h4>
             <div class="mermaid">
               graph TD
                 CPU[Unidad Central de Proceso (CPU)]
                 MEM[Memoria Principal (RAM)]
                 IO[Dispositivos E/S]
                 
                 CPU <-->|Bus de Datos| MEM
                 CPU -->|Control| IO
                 IO -->|Interrupciones| CPU
                 
                 style CPU fill:#dbeafe,stroke:#2563eb,stroke-width:2px
                 style MEM fill:#dcfce7,stroke:#16a34a,stroke-width:2px
                 style IO fill:#f3e8ff,stroke:#9333ea,stroke-width:2px
             </div>
          </div>
          
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div class="p-4 border rounded text-center bg-gray-50">
              <div class="text-2xl mb-2">🧠</div>
              <div class="font-bold text-gray-900">CPU</div>
              <div class="text-xs text-gray-500">Cerebro del sistema</div>
            </div>
            <div class="p-4 border rounded text-center bg-gray-50">
              <div class="text-2xl mb-2">💾</div>
              <div class="font-bold text-gray-900">Memoria</div>
              <div class="text-xs text-gray-500">RAM (Volátil) / ROM (Fija)</div>
            </div>
            <div class="p-4 border rounded text-center bg-gray-50">
              <div class="text-2xl mb-2">💿</div>
              <div class="font-bold text-gray-900">Almacenamiento</div>
              <div class="text-xs text-gray-500">HDD, SSD (Persistente)</div>
            </div>
            <div class="p-4 border rounded text-center bg-gray-50">
              <div class="text-2xl mb-2">⌨️</div>
              <div class="font-bold text-gray-900">Periféricos</div>
              <div class="text-xs text-gray-500">Entrada/Salida</div>
            </div>
          </div>

          <table class="w-full text-sm text-left text-gray-600 border rounded-lg overflow-hidden">
            <thead class="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th class="px-6 py-3 border-b">Tipo</th>
                <th class="px-6 py-3 border-b">Función</th>
                <th class="px-6 py-3 border-b">Ejemplos</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b hover:bg-slate-50">
                <td class="px-6 py-4 font-medium text-slate-900">Entrada</td>
                <td class="px-6 py-4">Introducir datos</td>
                <td class="px-6 py-4">Teclado, Mouse, Escáner</td>
              </tr>
              <tr class="bg-white border-b hover:bg-slate-50">
                <td class="px-6 py-4 font-medium text-slate-900">Salida</td>
                <td class="px-6 py-4">Mostrar resultados</td>
                <td class="px-6 py-4">Monitor, Impresora</td>
              </tr>
              <tr class="bg-white hover:bg-slate-50">
                <td class="px-6 py-4 font-medium text-slate-900">E/S (Mixtos)</td>
                <td class="px-6 py-4">Ambas funciones</td>
                <td class="px-6 py-4">Pantalla táctil, Router</td>
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
          <p class="text-lg text-gray-700">Soporte lógico de un sistema informático. Son las instrucciones que le dicen al hardware qué hacer.</p>
          
          <!-- Layered View Visualization -->
          <div class="flex flex-col items-center justify-center my-6 space-y-1 w-full max-w-md mx-auto">
            <p class="text-xs text-gray-500 mb-2 w-full text-center">Capas de Abstracción</p>
            <!-- User Layer -->
            <div class="w-full bg-purple-100 border-2 border-purple-300 text-purple-900 p-3 rounded-t-xl text-center font-bold relative z-30 shadow-sm transform hover:-translate-y-1 transition-transform">
              👤 Usuario
            </div>
            <!-- App Layer -->
            <div class="w-[95%] bg-green-100 border-2 border-green-300 text-green-900 p-3 text-center font-bold relative z-20 shadow-sm -mt-2 pt-4 transform hover:-translate-y-1 transition-transform">
              📱 Software de Aplicación
              <div class="text-xs font-normal text-green-700">(Word, Chrome, Juegos)</div>
            </div>
            <!-- System Layer -->
            <div class="w-[90%] bg-blue-100 border-2 border-blue-300 text-blue-900 p-3 text-center font-bold relative z-10 shadow-sm -mt-2 pt-4 transform hover:-translate-y-1 transition-transform">
              ⚙️ Software de Sistema (OS)
              <div class="text-xs font-normal text-blue-700">(Windows, Linux, Drivers)</div>
            </div>
            <!-- Hardware Layer -->
            <div class="w-[85%] bg-slate-800 border-2 border-slate-600 text-slate-200 p-3 rounded-b-xl text-center font-bold relative z-0 shadow-sm -mt-2 pt-4">
              🖥️ Hardware
              <div class="text-xs font-normal text-slate-400">(CPU, RAM, Disco)</div>
            </div>
          </div>

          <div class="flex justify-center bg-slate-50 p-6 rounded-xl border border-slate-200 mb-6">
             <div class="mermaid">
               graph TD
                 SW[Software] --> SYS[De Sistema]
                 SW --> APP[De Aplicación]
                 SW --> DEV[De Programación]
                 
                 SYS --> OS[Sistemas Operativos]
                 SYS --> DRV[Drivers/Controladores]
                 
                 APP --> OFI[Ofimática (Word)]
                 APP --> NAV[Navegadores]
                 
                 DEV --> IDE[IDEs (VS Code)]
                 DEV --> COMP[Compiladores]
                 
                 style SW fill:#1e293b,color:#fff,stroke:#0f172a
                 style SYS fill:#dbeafe,stroke:#2563eb
                 style APP fill:#f3e8ff,stroke:#9333ea
                 style DEV fill:#dcfce7,stroke:#16a34a
             </div>
          </div>

          <div class="space-y-4">
            <div class="flex flex-col md:flex-row border border-l-4 border-l-blue-500 rounded overflow-hidden">
              <div class="bg-blue-50 p-4 md:w-48 flex-shrink-0 font-bold text-blue-800 flex items-center justify-center md:justify-start">
                De Sistema
              </div>
              <div class="p-4 bg-white flex-grow">
                <p class="text-gray-700 mb-1 font-medium">Gestiona el hardware y provee base para otros programas.</p>
                <p class="text-xs text-gray-500 font-mono">Ej: Windows 11, Linux Ubuntu, Android, iOS.</p>
              </div>
            </div>

            <div class="flex flex-col md:flex-row border border-l-4 border-l-purple-500 rounded overflow-hidden">
              <div class="bg-purple-50 p-4 md:w-48 flex-shrink-0 font-bold text-purple-800 flex items-center justify-center md:justify-start">
                De Aplicación
              </div>
              <div class="p-4 bg-white flex-grow">
                <p class="text-gray-700 mb-1 font-medium">Herramientas para tareas específicas del usuario final.</p>
                <p class="text-xs text-gray-500 font-mono">Ej: Excel, WhatsApp, Spotify, Photoshop.</p>
              </div>
            </div>

            <div class="flex flex-col md:flex-row border border-l-4 border-l-green-500 rounded overflow-hidden">
              <div class="bg-green-50 p-4 md:w-48 flex-shrink-0 font-bold text-green-800 flex items-center justify-center md:justify-start">
                De Programación
              </div>
              <div class="p-4 bg-white flex-grow">
                <p class="text-gray-700 mb-1 font-medium">Permite crear nuevo software.</p>
                <p class="text-xs text-gray-500 font-mono">Ej: Python, C++, Visual Studio Code, Git.</p>
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
                  <summary class="cursor-pointer text-blue-600 text-xs font-bold">Ver Respuesta</summary>
                  <span class="text-green-600 font-bold block mt-1">Entrada</span>
                </details>
              </div>
              <div class="flex justify-between items-center p-2 bg-slate-50 rounded">
                <span>Proyector</span>
                <details class="text-right">
                  <summary class="cursor-pointer text-blue-600 text-xs font-bold">Ver Respuesta</summary>
                  <span class="text-green-600 font-bold block mt-1">Salida</span>
                </details>
              </div>
              <div class="flex justify-between items-center p-2 bg-slate-50 rounded">
                <span>Pen Drive (USB)</span>
                <details class="text-right">
                  <summary class="cursor-pointer text-blue-600 text-xs font-bold">Ver Respuesta</summary>
                  <span class="text-green-600 font-bold block mt-1">E/S (Almacenamiento)</span>
                </details>
              </div>
              <div class="flex justify-between items-center p-2 bg-slate-50 rounded">
                <span>Joystick / Control</span>
                <details class="text-right">
                  <summary class="cursor-pointer text-blue-600 text-xs font-bold">Ver Respuesta</summary>
                  <span class="text-green-600 font-bold block mt-1">Entrada</span>
                </details>
              </div>
            </div>
          </div>

          <!-- Software Identification -->
          <div class="bg-white border rounded-lg p-6 shadow-sm">
            <h3 class="font-bold text-lg text-slate-900 mb-4">Ejercicio 2: Tipo de Software</h3>
            <p class="text-xs text-gray-500 mb-4">Determine si es Software de Sistema, Aplicación o Programación.</p>
            
            <div class="space-y-2">
               <details class="group bg-gray-50 rounded px-4 py-2 cursor-pointer border border-transparent hover:border-purple-200">
                 <summary class="text-sm font-medium text-slate-700 flex justify-between">
                   <span>Windows 11</span>
                   <span class="text-slate-400 text-xs">▼</span>
                 </summary>
                 <p class="text-xs mt-2 text-blue-700 font-bold bg-blue-50 p-2 rounded">Software de Sistema</p>
               </details>

               <details class="group bg-gray-50 rounded px-4 py-2 cursor-pointer border border-transparent hover:border-purple-200">
                 <summary class="text-sm font-medium text-slate-700 flex justify-between">
                   <span>Compilador GCC</span>
                   <span class="text-slate-400 text-xs">▼</span>
                 </summary>
                 <p class="text-xs mt-2 text-green-700 font-bold bg-green-50 p-2 rounded">Software de Programación</p>
               </details>

               <details class="group bg-gray-50 rounded px-4 py-2 cursor-pointer border border-transparent hover:border-purple-200">
                 <summary class="text-sm font-medium text-slate-700 flex justify-between">
                   <span>Microsoft Excel</span>
                   <span class="text-slate-400 text-xs">▼</span>
                 </summary>
                 <p class="text-xs mt-2 text-purple-700 font-bold bg-purple-50 p-2 rounded">Software de Aplicación</p>
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
              "El hardware es la parte de la computadora que puedes patear, el software es la parte que solo puedes maldecir."
            </p>
            <footer class="flex items-center justify-center gap-2">
              <div class="h-px w-8 bg-slate-300"></div>
              <cite class="not-italic font-bold text-slate-900">Dicho popular</cite>
            </footer>
          </blockquote>
        </div>
      `
    }
  ]
};
