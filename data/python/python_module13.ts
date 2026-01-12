import { Module } from '../../types';

export const PYTHON_MODULE_13: Module = {
  id: 'py-mod-13',
  title: '13. Programación Orientada a Objetos',
  description: 'El paradigma que domina el desarrollo de software moderno.',
  evaluation: 'Taller Práctico',
  slides: [
    {
      id: 'py13-1-paradigm',
      title: 'Cambio de Paradigma',
      notes: 'De verbos (funciones) a sustantivos (objetos).',
      contentHtml: `
        <div class="flex flex-col h-full items-center justify-center space-y-8">
          <div class="grid md:grid-cols-2 gap-12 w-full max-w-5xl">
            <!-- Estructurada -->
            <div class="bg-slate-50 p-6 rounded-xl border border-slate-200 opacity-60">
              <h3 class="text-xl font-bold text-slate-600 mb-4 text-center">Programación Estructurada</h3>
              <div class="flex flex-col gap-2">
                <div class="bg-white p-3 rounded shadow-sm border border-slate-300 text-center">Datos (Variables)</div>
                <div class="text-center text-2xl">⬇️</div>
                <div class="bg-blue-100 p-3 rounded shadow-sm border border-blue-300 text-center font-mono text-sm">Función(Datos)</div>
              </div>
              <p class="text-xs text-center mt-4 text-slate-500">Los datos y la lógica están separados.</p>
            </div>

            <!-- POO -->
            <div class="bg-white p-6 rounded-xl shadow-lg border-2 border-purple-500 transform scale-105">
              <h3 class="text-xl font-bold text-purple-700 mb-4 text-center">Orientada a Objetos</h3>
              <div class="bg-purple-50 p-6 rounded-full border-4 border-purple-200 flex flex-col items-center justify-center aspect-square w-48 mx-auto relative">
                <span class="font-bold text-purple-900">OBJETO</span>
                <div class="absolute top-2 right-8 text-xs bg-white px-2 py-1 rounded shadow text-slate-600">Datos</div>
                <div class="absolute bottom-4 left-8 text-xs bg-blue-600 text-white px-2 py-1 rounded shadow">Métodos</div>
              </div>
              <p class="text-xs text-center mt-4 text-purple-600 font-bold">Encapsulamiento: Todo en uno.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py13-2-class-obj',
      title: 'Clase vs Objeto',
      notes: 'La analogía del plano y la casa.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full items-center">
          <!-- Concepto -->
          <div class="space-y-6">
            <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
              <h3 class="text-lg font-bold text-blue-900">La Clase (Class)</h3>
              <p class="text-blue-800 text-sm">Es el <strong>plano</strong> o molde. Define qué atributos y comportamientos tendrán los objetos. No ocupa memoria real de datos.</p>
            </div>
            <div class="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
              <h3 class="text-lg font-bold text-green-900">El Objeto (Instance)</h3>
              <p class="text-green-800 text-sm">Es la <strong>casa construida</strong>. Es una instancia concreta de la clase. Ocupa memoria y tiene sus propios valores.</p>
            </div>
          </div>

          <!-- Visualización -->
          <div class="flex flex-col items-center gap-4">
            <!-- Blueprint -->
            <div class="bg-blue-600 p-4 rounded shadow-lg w-40 text-white text-center text-xs font-mono border-2 border-white border-dashed">
              <div class="font-bold border-b border-blue-400 mb-2 pb-1">class Casa</div>
              color: ?<br>
              pisos: ?
            </div>

            <div class="text-3xl text-slate-400">⬇️ Instanciación</div>

            <div class="flex gap-4">
              <!-- House 1 -->
              <div class="bg-red-100 p-4 rounded-xl border-2 border-red-400 w-32 text-center shadow-md">
                <div class="text-2xl">🏠</div>
                <div class="font-bold text-red-800 text-sm">Casa 1</div>
                <div class="text-xs text-red-600 mt-1">Rojo, 2 pisos</div>
              </div>
              <!-- House 2 -->
              <div class="bg-yellow-100 p-4 rounded-xl border-2 border-yellow-400 w-32 text-center shadow-md">
                <div class="text-2xl">🏡</div>
                <div class="font-bold text-yellow-800 text-sm">Casa 2</div>
                <div class="text-xs text-yellow-600 mt-1">Verde, 1 piso</div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py13-3-syntax',
      title: 'Sintaxis en Python',
      notes: 'Definiendo clases y el constructor __init__.',
      contentHtml: `
        <div class="flex flex-col h-full space-y-6">
          <div class="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
            <h3 class="text-xl font-bold text-slate-800">El Constructor <code>__init__</code></h3>
            <p class="text-slate-600 text-sm">Es el método especial que se ejecuta automáticamente al crear un nuevo objeto. Aquí inicializamos los atributos.</p>
          </div>

          <div class="flex-1 grid md:grid-cols-2 gap-8">
            <!-- Código -->
            <div class="bg-slate-900 p-6 rounded-xl font-mono text-sm text-slate-300 overflow-auto custom-scrollbar shadow-inner">
              <span class="text-purple-400">class</span> <span class="text-yellow-400">Perro</span>:<br>
              &nbsp;&nbsp;<span class="text-gray-500"># Constructor</span><br>
              &nbsp;&nbsp;<span class="text-purple-400">def</span> <span class="text-blue-400">__init__</span>(<span class="text-red-400">self</span>, nombre, raza):<br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-red-400">self</span>.nombre = nombre<br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-red-400">self</span>.raza = raza<br>
              <br>
              &nbsp;&nbsp;<span class="text-purple-400">def</span> <span class="text-blue-400">ladrar</span>(<span class="text-red-400">self</span>):<br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"Guau!"</span>)<br>
              <br>
              <span class="text-gray-500"># Instanciación</span><br>
              firulais = <span class="text-yellow-400">Perro</span>(<span class="text-green-400">"Firulais"</span>, <span class="text-green-400">"Labrador"</span>)
            </div>

            <!-- Explicación Visual -->
            <div class="flex flex-col gap-4 justify-center">
              <div class="bg-red-50 p-4 rounded border-l-4 border-red-400">
                <span class="font-bold text-red-700">self</span>
                <p class="text-xs text-red-600">Referencia al objeto actual. Es como decir "mi nombre", "mi raza".</p>
              </div>
              <div class="bg-yellow-50 p-4 rounded border-l-4 border-yellow-400">
                <span class="font-bold text-yellow-700">Atributos</span>
                <p class="text-xs text-yellow-600">Variables que viven DENTRO del objeto (self.nombre).</p>
              </div>
              <div class="bg-blue-50 p-4 rounded border-l-4 border-blue-400">
                <span class="font-bold text-blue-700">Métodos</span>
                <p class="text-xs text-blue-600">Funciones que pertenecen a la clase. Siempre reciben self como primer parámetro.</p>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py13-4-memory',
      title: 'Modelo de Memoria',
      notes: 'Referencias y objetos en el Heap.',
      contentHtml: `
        <div class="grid grid-cols-3 gap-4 h-full">
          <!-- Stack -->
          <div class="col-span-1 bg-slate-100 p-4 rounded-xl border border-slate-300 flex flex-col">
            <h4 class="text-center font-bold text-slate-700 mb-4 border-b border-slate-300 pb-2">Stack (Variables)</h4>
            <div class="flex-1 flex flex-col gap-2">
              <div class="bg-white p-2 rounded shadow flex justify-between items-center">
                <span class="font-mono text-xs">firulais</span>
                <span class="text-xs text-blue-500">Ref #3A1</span>
              </div>
              <div class="bg-white p-2 rounded shadow flex justify-between items-center">
                <span class="font-mono text-xs">rex</span>
                <span class="text-xs text-blue-500">Ref #9B2</span>
              </div>
            </div>
          </div>

          <!-- Heap -->
          <div class="col-span-2 bg-slate-50 p-4 rounded-xl border border-slate-300 relative overflow-hidden">
            <h4 class="text-center font-bold text-slate-700 mb-4 border-b border-slate-300 pb-2">Heap (Objetos)</h4>
            
            <!-- Object 1 -->
            <div class="absolute top-16 left-8 bg-yellow-100 p-3 rounded-lg border-2 border-yellow-400 w-48 shadow-lg">
              <div class="text-xs text-slate-400 absolute -top-3 right-2 bg-white px-1">#3A1</div>
              <div class="font-bold text-yellow-800 text-sm mb-2">Objeto: Perro</div>
              <div class="text-xs font-mono text-slate-700">
                nombre: "Firulais"<br>
                raza: "Labrador"
              </div>
            </div>

            <!-- Object 2 -->
            <div class="absolute bottom-16 right-8 bg-yellow-100 p-3 rounded-lg border-2 border-yellow-400 w-48 shadow-lg">
              <div class="text-xs text-slate-400 absolute -top-3 right-2 bg-white px-1">#9B2</div>
              <div class="font-bold text-yellow-800 text-sm mb-2">Objeto: Perro</div>
              <div class="text-xs font-mono text-slate-700">
                nombre: "Rex"<br>
                raza: "Pastor"
              </div>
            </div>

            <!-- Arrows (SVG) -->
            <svg class="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
                </marker>
              </defs>
              <!-- Lines would be drawn here in a real render, simulating pointers -->
            </svg>
          </div>
        </div>
      `
    }
  ]
};
