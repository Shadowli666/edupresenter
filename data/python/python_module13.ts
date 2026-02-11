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
    ,
    {
      id: 'py13-5-attrs-methods',
      title: 'Atributos y Métodos',
      notes: 'Estado vs comportamiento: qué vive dentro del objeto.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full items-center">
          <div class="space-y-4">
            <div class="bg-indigo-50 p-5 rounded-xl border-l-4 border-indigo-500">
              <h3 class="text-lg font-bold text-indigo-900">Atributos (estado)</h3>
              <p class="text-indigo-700 text-sm">Datos que describen al objeto: nombre, saldo, posición, etc.</p>
            </div>
            <div class="bg-emerald-50 p-5 rounded-xl border-l-4 border-emerald-500">
              <h3 class="text-lg font-bold text-emerald-900">Métodos (comportamiento)</h3>
              <p class="text-emerald-700 text-sm">Acciones que el objeto puede realizar: depositar, mover, calcular.</p>
            </div>
            <div class="bg-slate-50 p-5 rounded-xl border border-slate-200">
              <p class="text-xs text-slate-600">Regla práctica: si cambia el estado, probablemente es un método.</p>
            </div>
          </div>
          <div class="bg-slate-900 p-6 rounded-xl text-slate-200 font-mono text-sm shadow-inner">
            <span class="text-purple-400">class</span> <span class="text-yellow-400">Cuenta</span>:
            <br>&nbsp;&nbsp;<span class="text-purple-400">def</span> <span class="text-blue-400">__init__</span>(<span class="text-red-400">self</span>, titular, saldo):
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-red-400">self</span>.titular = titular
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-red-400">self</span>.saldo = saldo
            <br><br>&nbsp;&nbsp;<span class="text-purple-400">def</span> <span class="text-blue-400">depositar</span>(<span class="text-red-400">self</span>, monto):
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-red-400">self</span>.saldo += monto
            <br><br><span class="text-gray-400"># estado: titular, saldo</span>
            <br><span class="text-gray-400"># comportamiento: depositar</span>
          </div>
        </div>
      `
    },
    {
      id: 'py13-6-instance-class',
      title: 'Atributos de Instancia y de Clase',
      notes: 'No todos los atributos viven en cada objeto.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full items-center">
          <div class="space-y-4">
            <div class="bg-orange-50 p-5 rounded-xl border-l-4 border-orange-500">
              <h3 class="text-lg font-bold text-orange-900">Atributos de instancia</h3>
              <p class="text-orange-800 text-sm">Propios de cada objeto. Cambian de uno a otro.</p>
            </div>
            <div class="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-500">
              <h3 class="text-lg font-bold text-blue-900">Atributos de clase</h3>
              <p class="text-blue-800 text-sm">Compartidos por todas las instancias.</p>
            </div>
            <div class="bg-slate-100 p-4 rounded-xl border border-slate-200">
              <p class="text-xs text-slate-600">Útiles para constantes: tasa, IVA, contador global.</p>
            </div>
          </div>
          <div class="bg-slate-900 p-6 rounded-xl text-slate-200 font-mono text-sm shadow-inner">
            <span class="text-purple-400">class</span> <span class="text-yellow-400">Estudiante</span>:
            <br>&nbsp;&nbsp;universidad = <span class="text-green-400">"UPR"</span>
            <br>&nbsp;&nbsp;<span class="text-purple-400">def</span> <span class="text-blue-400">__init__</span>(<span class="text-red-400">self</span>, nombre):
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-red-400">self</span>.nombre = nombre
            <br><br>ana = <span class="text-yellow-400">Estudiante</span>(<span class="text-green-400">"Ana"</span>)
            <br>luis = <span class="text-yellow-400">Estudiante</span>(<span class="text-green-400">"Luis"</span>)
            <br><br><span class="text-gray-400"># ana.nombre es distinto</span>
            <br><span class="text-gray-400"># Estudiante.universidad es compartido</span>
          </div>
        </div>
      `
    },
    {
      id: 'py13-7-encapsulation',
      title: 'Encapsulamiento y Validación',
      notes: 'Controlar el acceso a los datos con métodos.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full items-center">
          <div class="space-y-4">
            <div class="bg-purple-50 p-5 rounded-xl border-l-4 border-purple-500">
              <h3 class="text-lg font-bold text-purple-900">Idea clave</h3>
              <p class="text-purple-700 text-sm">El objeto protege su estado y expone una interfaz segura.</p>
            </div>
            <ul class="text-sm text-slate-700 space-y-2 list-disc list-inside">
              <li>Prefiere métodos para modificar valores sensibles.</li>
              <li>Usa validaciones en un solo lugar.</li>
              <li>Evita estados inválidos (saldo negativo, edad < 0).</li>
            </ul>
          </div>
          <div class="bg-slate-900 p-6 rounded-xl text-slate-200 font-mono text-sm shadow-inner">
            <span class="text-purple-400">class</span> <span class="text-yellow-400">Cuenta</span>:
            <br>&nbsp;&nbsp;<span class="text-purple-400">def</span> <span class="text-blue-400">__init__</span>(<span class="text-red-400">self</span>, saldo):
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-red-400">self</span>._saldo = saldo
            <br><br>&nbsp;&nbsp;<span class="text-purple-400">def</span> <span class="text-blue-400">retirar</span>(<span class="text-red-400">self</span>, monto):
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">if</span> monto &lt;= <span class="text-red-400">self</span>._saldo:
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-red-400">self</span>._saldo -= monto
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">else</span>:
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">raise</span> <span class="text-yellow-400">ValueError</span>(<span class="text-green-400">"Saldo insuficiente"</span>)
          </div>
        </div>
      `
    },
    {
      id: 'py13-8-properties',
      title: 'Propiedades (@property)',
      notes: 'Acceso controlado sin cambiar la forma de uso.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full items-center">
          <div class="space-y-4">
            <div class="bg-cyan-50 p-5 rounded-xl border-l-4 border-cyan-500">
              <h3 class="text-lg font-bold text-cyan-900">¿Por qué propiedades?</h3>
              <p class="text-cyan-800 text-sm">Permiten validar lecturas/escrituras sin cambiar cómo se accede al atributo.</p>
            </div>
            <div class="bg-slate-50 p-5 rounded-xl border border-slate-200">
              <p class="text-xs text-slate-600">Se ve como atributo, funciona como método.</p>
            </div>
          </div>
          <div class="bg-slate-900 p-6 rounded-xl text-slate-200 font-mono text-sm shadow-inner">
            <span class="text-purple-400">class</span> <span class="text-yellow-400">Producto</span>:
            <br>&nbsp;&nbsp;<span class="text-purple-400">def</span> <span class="text-blue-400">__init__</span>(<span class="text-red-400">self</span>, precio):
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-red-400">self</span>._precio = precio
            <br><br>&nbsp;&nbsp;<span class="text-purple-400">@property</span>
            <br>&nbsp;&nbsp;<span class="text-purple-400">def</span> <span class="text-blue-400">precio</span>(<span class="text-red-400">self</span>):
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">return</span> <span class="text-red-400">self</span>._precio
            <br><br>&nbsp;&nbsp;<span class="text-purple-400">@precio</span>.setter
            <br>&nbsp;&nbsp;<span class="text-purple-400">def</span> <span class="text-blue-400">precio</span>(<span class="text-red-400">self</span>, valor):
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">if</span> valor &lt; <span class="text-yellow-400">0</span>:
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">raise</span> <span class="text-yellow-400">ValueError</span>
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-red-400">self</span>._precio = valor
          </div>
        </div>
      `
    },
    {
      id: 'py13-9-class-static',
      title: 'Métodos de Clase y Estáticos',
      notes: 'Alternativas al constructor clásico.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full items-center">
          <div class="space-y-4">
            <div class="bg-lime-50 p-5 rounded-xl border-l-4 border-lime-500">
              <h3 class="text-lg font-bold text-lime-900">@classmethod</h3>
              <p class="text-lime-800 text-sm">Recibe <strong>cls</strong>, útil para crear instancias con lógica alternativa.</p>
            </div>
            <div class="bg-amber-50 p-5 rounded-xl border-l-4 border-amber-500">
              <h3 class="text-lg font-bold text-amber-900">@staticmethod</h3>
              <p class="text-amber-800 text-sm">No usa self ni cls. Función agrupada dentro de la clase.</p>
            </div>
          </div>
          <div class="bg-slate-900 p-6 rounded-xl text-slate-200 font-mono text-sm shadow-inner">
            <span class="text-purple-400">class</span> <span class="text-yellow-400">Fecha</span>:
            <br>&nbsp;&nbsp;<span class="text-purple-400">def</span> <span class="text-blue-400">__init__</span>(<span class="text-red-400">self</span>, dia, mes, anio):
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-red-400">self</span>.dia = dia
            <br><br>&nbsp;&nbsp;<span class="text-purple-400">@classmethod</span>
            <br>&nbsp;&nbsp;<span class="text-purple-400">def</span> <span class="text-blue-400">desde_texto</span>(<span class="text-red-400">cls</span>, texto):
            <br>&nbsp;&nbsp;&nbsp;&nbsp;dia, mes, anio = texto.split(<span class="text-green-400">"/"</span>)
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">return</span> <span class="text-red-400">cls</span>(<span class="text-yellow-400">int</span>(dia), <span class="text-yellow-400">int</span>(mes), <span class="text-yellow-400">int</span>(anio))
            <br><br>&nbsp;&nbsp;<span class="text-purple-400">@staticmethod</span>
            <br>&nbsp;&nbsp;<span class="text-purple-400">def</span> <span class="text-blue-400">es_bisiesto</span>(anio):
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">return</span> anio % <span class="text-yellow-400">4</span> == <span class="text-yellow-400">0</span>
          </div>
        </div>
      `
    },
    {
      id: 'py13-10-inheritance',
      title: 'Herencia',
      notes: 'Reutilizar y extender comportamiento.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full items-center">
          <div class="space-y-4">
            <div class="bg-rose-50 p-5 rounded-xl border-l-4 border-rose-500">
              <h3 class="text-lg font-bold text-rose-900">Concepto</h3>
              <p class="text-rose-800 text-sm">Una clase hija hereda atributos y métodos de una clase padre.</p>
            </div>
            <ul class="text-sm text-slate-700 space-y-2 list-disc list-inside">
              <li>Evita duplicación de código.</li>
              <li>Permite especializar comportamientos.</li>
              <li>Usa <code>super()</code> para reutilizar.</li>
            </ul>
          </div>
          <div class="bg-slate-900 p-6 rounded-xl text-slate-200 font-mono text-sm shadow-inner">
            <span class="text-purple-400">class</span> <span class="text-yellow-400">Empleado</span>:
            <br>&nbsp;&nbsp;<span class="text-purple-400">def</span> <span class="text-blue-400">__init__</span>(<span class="text-red-400">self</span>, nombre):
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-red-400">self</span>.nombre = nombre
            <br><br><span class="text-purple-400">class</span> <span class="text-yellow-400">Developer</span>(<span class="text-yellow-400">Empleado</span>):
            <br>&nbsp;&nbsp;<span class="text-purple-400">def</span> <span class="text-blue-400">__init__</span>(<span class="text-red-400">self</span>, nombre, stack):
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-yellow-400">super</span>().__init__(nombre)
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-red-400">self</span>.stack = stack
          </div>
        </div>
      `
    },
    {
      id: 'py13-11-polymorphism',
      title: 'Polimorfismo',
      notes: 'Mismo método, diferentes comportamientos.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full items-center">
          <div class="space-y-4">
            <div class="bg-teal-50 p-5 rounded-xl border-l-4 border-teal-500">
              <h3 class="text-lg font-bold text-teal-900">Idea</h3>
              <p class="text-teal-800 text-sm">Diferentes clases pueden responder a la misma interfaz.</p>
            </div>
            <div class="bg-slate-100 p-4 rounded-xl border border-slate-200">
              <p class="text-xs text-slate-600">Se apoya en la herencia o en el “duck typing”.</p>
            </div>
          </div>
          <div class="bg-slate-900 p-6 rounded-xl text-slate-200 font-mono text-sm shadow-inner">
            <span class="text-purple-400">class</span> <span class="text-yellow-400">Gato</span>:
            <br>&nbsp;&nbsp;<span class="text-purple-400">def</span> <span class="text-blue-400">hablar</span>(<span class="text-red-400">self</span>):
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">return</span> <span class="text-green-400">"Miau"</span>
            <br><br><span class="text-purple-400">class</span> <span class="text-yellow-400">Perro</span>:
            <br>&nbsp;&nbsp;<span class="text-purple-400">def</span> <span class="text-blue-400">hablar</span>(<span class="text-red-400">self</span>):
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">return</span> <span class="text-green-400">"Guau"</span>
            <br><br><span class="text-purple-400">def</span> <span class="text-blue-400">saludar</span>(animal):
            <br>&nbsp;&nbsp;<span class="text-purple-400">return</span> animal.hablar()
          </div>
        </div>
      `
    },
    {
      id: 'py13-12-composition',
      title: 'Composición',
      notes: 'Objetos que contienen otros objetos.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full items-center">
          <div class="space-y-4">
            <div class="bg-sky-50 p-5 rounded-xl border-l-4 border-sky-500">
              <h3 class="text-lg font-bold text-sky-900">Preferir composición</h3>
              <p class="text-sky-800 text-sm">Cuando la relación es “tiene un”, no “es un”.</p>
            </div>
            <ul class="text-sm text-slate-700 space-y-2 list-disc list-inside">
              <li>Más flexible que la herencia.</li>
              <li>Permite cambiar piezas sin romper todo.</li>
            </ul>
          </div>
          <div class="bg-slate-900 p-6 rounded-xl text-slate-200 font-mono text-sm shadow-inner">
            <span class="text-purple-400">class</span> <span class="text-yellow-400">Motor</span>:
            <br>&nbsp;&nbsp;<span class="text-purple-400">def</span> <span class="text-blue-400">encender</span>(<span class="text-red-400">self</span>):
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">return</span> <span class="text-green-400">"Motor activo"</span>
            <br><br><span class="text-purple-400">class</span> <span class="text-yellow-400">Auto</span>:
            <br>&nbsp;&nbsp;<span class="text-purple-400">def</span> <span class="text-blue-400">__init__</span>(<span class="text-red-400">self</span>):
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-red-400">self</span>.motor = <span class="text-yellow-400">Motor</span>()
            <br><br>auto = <span class="text-yellow-400">Auto</span>()
            <br>auto.motor.encender()
          </div>
        </div>
      `
    },
    {
      id: 'py13-13-dunder',
      title: 'Métodos Especiales (dunder)',
      notes: 'Hacer que tus objetos se comporten como los tipos nativos.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full items-center">
          <div class="space-y-4">
            <div class="bg-fuchsia-50 p-5 rounded-xl border-l-4 border-fuchsia-500">
              <h3 class="text-lg font-bold text-fuchsia-900">Ejemplos útiles</h3>
              <p class="text-fuchsia-800 text-sm">__str__, __repr__, __len__, __eq__, __add__.</p>
            </div>
            <div class="bg-slate-100 p-4 rounded-xl border border-slate-200">
              <p class="text-xs text-slate-600">Mejoran legibilidad, depuración y compatibilidad.</p>
            </div>
          </div>
          <div class="bg-slate-900 p-6 rounded-xl text-slate-200 font-mono text-sm shadow-inner">
            <span class="text-purple-400">class</span> <span class="text-yellow-400">Vector</span>:
            <br>&nbsp;&nbsp;<span class="text-purple-400">def</span> <span class="text-blue-400">__init__</span>(<span class="text-red-400">self</span>, x, y):
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-red-400">self</span>.x = x
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-red-400">self</span>.y = y
            <br><br>&nbsp;&nbsp;<span class="text-purple-400">def</span> <span class="text-blue-400">__str__</span>(<span class="text-red-400">self</span>):
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">return</span> <span class="text-green-400">f"({self.x}, {self.y})"</span>
            <br><br>&nbsp;&nbsp;<span class="text-purple-400">def</span> <span class="text-blue-400">__add__</span>(<span class="text-red-400">self</span>, otro):
            <br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">return</span> <span class="text-yellow-400">Vector</span>(<span class="text-red-400">self</span>.x + otro.x, <span class="text-red-400">self</span>.y + otro.y)
          </div>
        </div>
      `
    },
    {
      id: 'py13-14-dataclasses',
      title: 'Dataclasses',
      notes: 'Menos código repetitivo para modelos de datos.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full items-center">
          <div class="space-y-4">
            <div class="bg-emerald-50 p-5 rounded-xl border-l-4 border-emerald-500">
              <h3 class="text-lg font-bold text-emerald-900">¿Qué resuelven?</h3>
              <p class="text-emerald-800 text-sm">Generan automáticamente __init__, __repr__, __eq__.</p>
            </div>
            <div class="bg-slate-100 p-4 rounded-xl border border-slate-200">
              <p class="text-xs text-slate-600">Ideales para estructuras de datos simples.</p>
            </div>
          </div>
          <div class="bg-slate-900 p-6 rounded-xl text-slate-200 font-mono text-sm shadow-inner">
            <span class="text-purple-400">from</span> dataclasses <span class="text-purple-400">import</span> dataclass
            <br><br><span class="text-purple-400">@dataclass</span>
            <br><span class="text-purple-400">class</span> <span class="text-yellow-400">Libro</span>:
            <br>&nbsp;&nbsp;titulo: <span class="text-yellow-400">str</span>
            <br>&nbsp;&nbsp;autor: <span class="text-yellow-400">str</span>
            <br>&nbsp;&nbsp;paginas: <span class="text-yellow-400">int</span>
            <br><br>libro = <span class="text-yellow-400">Libro</span>(<span class="text-green-400">"1984"</span>, <span class="text-green-400">"Orwell"</span>, <span class="text-yellow-400">328</span>)
          </div>
        </div>
      `
    },
    {
      id: 'py13-15-design',
      title: 'Buenas Prácticas de Diseño',
      notes: 'Reglas simples para clases claras.',
      contentHtml: `
        <div class="flex flex-col h-full items-center justify-center">
          <div class="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 max-w-4xl w-full">
            <h3 class="text-2xl font-bold text-slate-800 mb-6 text-center">Checklist rápido</h3>
            <div class="grid md:grid-cols-2 gap-6 text-sm text-slate-700">
              <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h4 class="font-bold text-slate-800 mb-2">Responsabilidad única</h4>
                <p>Una clase, un propósito claro.</p>
              </div>
              <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h4 class="font-bold text-slate-800 mb-2">Nombres expresivos</h4>
                <p>Métodos que describan la acción.</p>
              </div>
              <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h4 class="font-bold text-slate-800 mb-2">Evitar acoplamiento</h4>
                <p>Reducir dependencias innecesarias.</p>
              </div>
              <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h4 class="font-bold text-slate-800 mb-2">API mínima</h4>
                <p>Exponer solo lo necesario.</p>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py13-16-workshop',
      title: 'Mini Taller: Modelar un Sistema',
      notes: 'Actividad guiada para aplicar POO.',
      contentHtml: `
        <div class="flex flex-col h-full items-center justify-center">
          <div class="bg-indigo-50 p-8 rounded-2xl border border-indigo-200 max-w-4xl w-full shadow-lg">
            <h3 class="text-2xl font-bold text-indigo-900 mb-4 text-center">Sistema de Biblioteca</h3>
            <p class="text-indigo-800 text-sm mb-6 text-center">Define clases, atributos y métodos clave.</p>
            <div class="grid md:grid-cols-2 gap-6 text-sm text-indigo-900">
              <div class="bg-white p-4 rounded-xl border border-indigo-200">
                <h4 class="font-bold mb-2">Clases sugeridas</h4>
                <ul class="list-disc list-inside space-y-1">
                  <li>Libro</li>
                  <li>Usuario</li>
                  <li>Prestamo</li>
                </ul>
              </div>
              <div class="bg-white p-4 rounded-xl border border-indigo-200">
                <h4 class="font-bold mb-2">Métodos posibles</h4>
                <ul class="list-disc list-inside space-y-1">
                  <li>prestar(), devolver()</li>
                  <li>esta_disponible()</li>
                  <li>calcular_multa()</li>
                </ul>
              </div>
            </div>
            <div class="mt-6 text-xs text-indigo-700 text-center">
              Meta: diseñar la API antes de escribir código.
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py13-17-qa',
      title: 'Preguntas de Repaso',
      notes: 'Consolidar conceptos clave.',
      contentHtml: `
        <div class="flex flex-col h-full items-center justify-center">
          <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 max-w-4xl w-full shadow-lg">
            <h3 class="text-2xl font-bold text-slate-800 mb-6 text-center">¿Qué recuerdas?</h3>
            <ul class="text-sm text-slate-700 space-y-3 list-disc list-inside">
              <li>¿Cuál es la diferencia entre clase y objeto?</li>
              <li>¿Para qué sirve <code>self</code>?</li>
              <li>¿Cuándo usar herencia vs composición?</li>
              <li>¿Qué ventajas tiene <code>@property</code>?</li>
              <li>Menciona dos métodos dunder útiles.</li>
            </ul>
          </div>
        </div>
      `
    }
  ]
};
