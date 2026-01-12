import { Module } from '../../types';

export const PYTHON_MODULE_14: Module = {
  id: 'py-mod-14',
  title: '14. POO: Herencia',
  description: 'Jerarquías de clases y reutilización de código.',
  evaluation: 'Taller Práctico',
  slides: [
    {
      id: 'py14-1-concept',
      title: 'El Poder de la Herencia',
      notes: 'No te repitas (DRY).',
      contentHtml: `
        <div class="flex flex-col h-full items-center justify-center space-y-8">
          <div class="text-center max-w-2xl">
            <h3 class="text-3xl font-bold text-slate-800 mb-4">No reinventes la rueda</h3>
            <p class="text-slate-600">
              La herencia nos permite crear nuevas clases basadas en otras ya existentes. 
              La clase hija obtiene <strong>automáticamente</strong> todos los atributos y métodos del padre.
            </p>
          </div>

          <div class="flex gap-8 items-start">
            <!-- Parent -->
            <div class="flex flex-col items-center">
              <div class="bg-blue-100 p-6 rounded-xl border-2 border-blue-500 w-48 text-center shadow-lg z-10">
                <div class="text-4xl mb-2">🐾</div>
                <div class="font-bold text-blue-900">Animal</div>
                <div class="text-xs text-blue-700 mt-2 border-t border-blue-300 pt-2">
                  - edad<br>
                  - comer()<br>
                  - dormir()
                </div>
              </div>
            </div>

            <!-- Arrow -->
            <div class="mt-12 text-4xl text-slate-300">
              ⬇️ <span class="text-xs block text-center font-mono">extends</span>
            </div>

            <!-- Child -->
            <div class="flex flex-col items-center">
              <div class="bg-green-100 p-6 rounded-xl border-2 border-green-500 w-48 text-center shadow-lg relative">
                <div class="absolute -top-3 -right-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full shadow">Hereda todo!</div>
                <div class="text-4xl mb-2">🐶</div>
                <div class="font-bold text-green-900">Perro</div>
                <div class="text-xs text-green-700 mt-2 border-t border-green-300 pt-2">
                  <span class="opacity-50">- edad (Heredado)</span><br>
                  <span class="font-bold text-green-800">+ raza (Nuevo)</span><br>
                  <span class="font-bold text-green-800">+ ladrar() (Nuevo)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py14-2-syntax',
      title: 'Sintaxis y super()',
      notes: 'Cómo implementar herencia en Python.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full">
          <!-- Code -->
          <div class="bg-slate-900 p-6 rounded-xl font-mono text-sm text-slate-300 overflow-auto custom-scrollbar shadow-inner">
            <span class="text-purple-400">class</span> <span class="text-yellow-400">Animal</span>:<br>
            &nbsp;&nbsp;<span class="text-purple-400">def</span> <span class="text-blue-400">__init__</span>(<span class="text-red-400">self</span>, nombre):<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-red-400">self</span>.nombre = nombre<br>
            <br>
            <span class="text-gray-500"># Sintaxis: class Hija(Padre):</span><br>
            <span class="text-purple-400">class</span> <span class="text-yellow-400">Perro</span>(<span class="text-yellow-400">Animal</span>):<br>
            &nbsp;&nbsp;<span class="text-purple-400">def</span> <span class="text-blue-400">__init__</span>(<span class="text-red-400">self</span>, nombre, raza):<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500"># Llamar al constructor del padre</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">super</span>().__init__(nombre)<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-red-400">self</span>.raza = raza<br>
            <br>
            &nbsp;&nbsp;<span class="text-purple-400">def</span> <span class="text-blue-400">ladrar</span>(<span class="text-red-400">self</span>):<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"Guau!"</span>)
          </div>

          <!-- Explanation -->
          <div class="flex flex-col justify-center space-y-6">
            <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 class="text-xl font-bold text-slate-800 mb-2">La función <code>super()</code></h3>
              <p class="text-slate-600 text-sm">
                Es mágica. Nos permite acceder a los métodos de la clase padre. 
                Es crucial en el <code>__init__</code> para asegurarnos de que la parte "Animal" del "Perro" se inicialice correctamente (ej. asignar el nombre).
              </p>
            </div>

            <div class="bg-yellow-50 p-4 rounded-xl border-l-4 border-yellow-500 text-sm text-yellow-800">
              <strong>Nota:</strong> Si no defines <code>__init__</code> en la hija, Python usará automáticamente el del padre. Pero si lo defines, ¡sobreescribes el del padre y debes llamarlo manualmente con super!
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py14-3-polymorphism',
      title: 'Polimorfismo (Intro)',
      notes: 'Mismo método, diferente comportamiento.',
      contentHtml: `
        <div class="flex flex-col h-full space-y-6">
          <div class="text-center">
            <h3 class="text-2xl font-bold text-slate-800">Polimorfismo</h3>
            <p class="text-slate-600">"Muchas formas". Tratar objetos diferentes de manera uniforme.</p>
          </div>

          <div class="flex-1 grid grid-cols-3 gap-4">
            <!-- Gato -->
            <div class="bg-white p-4 rounded-xl shadow border border-slate-200 flex flex-col items-center">
              <div class="text-4xl mb-2">🐱</div>
              <div class="font-bold text-slate-700">Gato</div>
              <div class="bg-slate-100 w-full p-2 mt-2 rounded text-xs font-mono text-center">
                hablar() -> "Miau"
              </div>
            </div>

            <!-- Perro -->
            <div class="bg-white p-4 rounded-xl shadow border border-slate-200 flex flex-col items-center">
              <div class="text-4xl mb-2">🐶</div>
              <div class="font-bold text-slate-700">Perro</div>
              <div class="bg-slate-100 w-full p-2 mt-2 rounded text-xs font-mono text-center">
                hablar() -> "Guau"
              </div>
            </div>

            <!-- Vaca -->
            <div class="bg-white p-4 rounded-xl shadow border border-slate-200 flex flex-col items-center">
              <div class="text-4xl mb-2">🐮</div>
              <div class="font-bold text-slate-700">Vaca</div>
              <div class="bg-slate-100 w-full p-2 mt-2 rounded text-xs font-mono text-center">
                hablar() -> "Muu"
              </div>
            </div>
          </div>

          <div class="bg-slate-900 p-4 rounded-xl font-mono text-sm text-slate-300">
            <span class="text-gray-500"># Función que acepta CUALQUIER animal</span><br>
            <span class="text-purple-400">def</span> <span class="text-yellow-400">hacer_ruido</span>(animal):<br>
            &nbsp;&nbsp;animal.hablar() <span class="text-gray-500"># No importa qué sea, si tiene hablar(), funciona.</span>
          </div>
        </div>
      `
    }
  ]
};
