
import { Module } from '../../types';

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
              
              <!-- Visual Analogy -->
              <div class="grid grid-cols-[1fr_auto_1fr] gap-2 items-center text-center mb-4">
                <div class="p-2 bg-yellow-50 rounded border border-yellow-200">
                  <div class="text-2xl mb-1">🥚🌾</div>
                  <div class="font-bold text-xs text-yellow-800">Datos</div>
                  <div class="text-[10px] text-yellow-700 leading-tight">Materia prima<br>(Sin contexto)</div>
                </div>
                <div class="text-slate-400 text-xl">➜</div>
                <div class="p-2 bg-green-50 rounded border border-green-200">
                  <div class="text-2xl mb-1">🎂</div>
                  <div class="font-bold text-xs text-green-800">Información</div>
                  <div class="text-[10px] text-green-700 leading-tight">Resultado útil<br>(Con significado)</div>
                </div>
              </div>

              <ul class="space-y-2 text-gray-600 text-sm">
                <li class="flex items-start"><span class="font-semibold text-gray-800 w-16 flex-shrink-0">Dato:</span> <span>Símbolo aislado (ej. "25", "Rojo").</span></li>
                <li class="flex items-start"><span class="font-semibold text-gray-800 w-16 flex-shrink-0">Info:</span> <span>Datos procesados (ej. "Temperatura: 25°C").</span></li>
              </ul>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex flex-col items-center">
             <h4 class="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Ciclo de Procesamiento de Información</h4>
             <div class="mermaid">
               flowchart LR
                 A["📥 Entrada\n(Datos)"] -->|Procesar| B["⚙️ Proceso\n(CPU)"]
                 B -->|Generar| C["📤 Salida\n(Información)"]
                 B -.->|Guardar| D[("💾 Almacenamiento")]
                 style A fill:#f1f5f9,stroke:#64748b,stroke-width:2px
                 style B fill:#dbeafe,stroke:#2563eb,stroke-width:2px
                 style C fill:#dcfce7,stroke:#16a34a,stroke-width:2px
                 style D fill:#fff7ed,stroke:#ea580c,stroke-width:2px
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
                <dd class="mt-1 text-sm text-slate-900">Software dañino que se infiltra sin permiso.</dd>
              </div>
              <div class="bg-white px-4 py-3 rounded border border-slate-200">
                <dt class="text-sm font-medium text-slate-500">Informática</dt>
                <dd class="mt-1 text-sm text-slate-900">Ciencia del tratamiento automático de la información.</dd>
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
        <div class="space-y-6">
          <p class="text-gray-600 text-sm">La historia se divide en generaciones según el componente electrónico principal.</p>
          
          <div class="relative border-l-4 border-blue-100 ml-4 space-y-6 py-2">
            <!-- Gen 1 -->
            <div class="ml-6 relative bg-white p-4 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <span class="absolute -left-10 top-4 flex items-center justify-center w-8 h-8 bg-slate-600 rounded-full ring-4 ring-white text-white font-bold text-sm">1</span>
              <div class="flex justify-between items-start">
                  <h3 class="text-base font-bold text-slate-800">1ª Generación (1940-56)</h3>
                  <span class="text-2xl" title="Tubos de Vacío">💡</span>
              </div>
              <p class="text-xs font-mono text-blue-600 mb-1">Tecnología: Tubos de Vacío</p>
              <p class="text-gray-600 text-xs">Gigantescas, mucho calor, lenguaje máquina. <br><span class="italic text-slate-400">Ej: ENIAC</span></p>
            </div>

            <!-- Gen 2 -->
            <div class="ml-6 relative bg-white p-4 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <span class="absolute -left-10 top-4 flex items-center justify-center w-8 h-8 bg-slate-600 rounded-full ring-4 ring-white text-white font-bold text-sm">2</span>
              <div class="flex justify-between items-start">
                  <h3 class="text-base font-bold text-slate-800">2ª Generación (1956-63)</h3>
                  <span class="text-2xl" title="Transistor">📻</span>
              </div>
              <p class="text-xs font-mono text-blue-600 mb-1">Tecnología: Transistores</p>
              <p class="text-gray-600 text-xs">Más pequeñas y rápidas. Lenguajes simbólicos (Assembly).</p>
            </div>

            <!-- Gen 3 -->
            <div class="ml-6 relative bg-white p-4 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <span class="absolute -left-10 top-4 flex items-center justify-center w-8 h-8 bg-slate-600 rounded-full ring-4 ring-white text-white font-bold text-sm">3</span>
              <div class="flex justify-between items-start">
                  <h3 class="text-base font-bold text-slate-800">3ª Generación (1964-71)</h3>
                  <span class="text-2xl" title="Chip">💾</span>
              </div>
              <p class="text-xs font-mono text-blue-600 mb-1">Tecnología: Circuitos Integrados (Chips)</p>
              <p class="text-gray-600 text-xs">Miniaturización. Nacen los Sistemas Operativos, teclados y monitores.</p>
            </div>

            <!-- Gen 4 -->
            <div class="ml-6 relative bg-blue-50 p-4 rounded-lg border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
              <span class="absolute -left-10 top-4 flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full ring-4 ring-white text-white font-bold text-sm">4</span>
              <div class="flex justify-between items-start">
                  <h3 class="text-base font-bold text-blue-900">4ª Generación (1971-Hoy)</h3>
                  <span class="text-2xl" title="Microprocesador">💻</span>
              </div>
              <p class="text-xs font-mono text-blue-600 mb-1">Tecnología: Microprocesadores</p>
              <p class="text-gray-700 text-xs">CPU en un chip. Nace la PC, Internet y la computación moderna.</p>
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
