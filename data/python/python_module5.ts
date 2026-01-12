import { Module } from '../../types';

export const PYTHON_MODULE_5: Module = {
  id: 'py-mod-5',
  title: '5. Taller de Integración',
  description: 'Combinando todo: Validaciones, Menús y Algoritmos.',
  evaluation: '20% - Taller Práctico',
  slides: [
    {
      id: 'py5-1-validation',
      title: 'Patrón: Validación de Entrada',
      notes: 'El bucle infinito controlado.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full items-center">
          <div class="space-y-6">
            <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 class="text-xl font-bold text-slate-800 mb-2">El Guardián de la Puerta</h3>
              <p class="text-slate-600">
                No podemos confiar en el usuario. Usamos un bucle <code>while True</code> para insistir hasta obtener un dato válido.
              </p>
            </div>

            <div class="bg-slate-900 p-6 rounded-xl font-mono text-sm text-slate-300">
              <span class="text-purple-400">while</span> <span class="text-blue-400">True</span>:<br>
              &nbsp;&nbsp;edad = <span class="text-purple-400">int</span>(<span class="text-blue-400">input</span>(<span class="text-green-400">"Edad: "</span>))<br>
              <br>
              &nbsp;&nbsp;<span class="text-purple-400">if</span> edad > <span class="text-blue-400">0</span>:<br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">break</span> <span class="text-gray-500"># ¡Válido! Salimos.</span><br>
              <br>
              &nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"Error: Debe ser positiva."</span>)
            </div>
          </div>

          <!-- Diagrama de Flujo Circular -->
          <div class="relative h-80 bg-white rounded-xl border border-slate-200 shadow-lg flex flex-col items-center justify-center p-4">
            
            <!-- Input Box -->
            <div class="bg-blue-100 border-2 border-blue-500 px-6 py-3 rounded-lg font-bold text-blue-900 mb-8 z-10">
              Pedir Dato
            </div>

            <!-- Decision Diamond -->
            <div class="w-32 h-32 bg-yellow-100 border-2 border-yellow-500 transform rotate-45 flex items-center justify-center z-10 mb-8">
              <div class="transform -rotate-45 font-bold text-yellow-900 text-sm text-center">¿Es<br>Válido?</div>
            </div>

            <!-- Success Path -->
            <div class="absolute bottom-4 bg-green-100 border-2 border-green-500 px-6 py-2 rounded-lg font-bold text-green-900">
              Continuar
            </div>

            <!-- Arrows (SVG) -->
            <svg class="absolute inset-0 w-full h-full pointer-events-none">
              <!-- Input -> Decision -->
              <line x1="50%" y1="90" x2="50%" y2="110" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)" />
              
              <!-- Decision -> Success -->
              <line x1="50%" y1="240" x2="50%" y2="270" stroke="#16a34a" stroke-width="2" marker-end="url(#arrow)" />
              
              <!-- Decision -> Loop Back -->
              <path d="M 260 175 L 320 175 L 320 50 L 160 50 L 160 60" fill="none" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow)" />
              
              <!-- Labels -->
              <text x="52%" y="260" class="text-xs font-bold fill-green-600">Sí (Break)</text>
              <text x="270" y="170" class="text-xs font-bold fill-red-600">No (Error)</text>
            </svg>
          </div>
        </div>
      `
    },
    {
      id: 'py5-2-menu',
      title: 'Patrón: Menú de Opciones',
      notes: 'Estructura de aplicación CLI.',
      contentHtml: `
        <div class="flex flex-col h-full space-y-6">
          <div class="text-center">
            <h3 class="text-xl font-bold text-slate-800">La Columna Vertebral de una App</h3>
            <p class="text-slate-600 text-sm">Un bucle infinito que muestra opciones y actúa según la elección.</p>
          </div>

          <div class="flex-1 grid md:grid-cols-2 gap-8">
            <!-- Visualización CLI -->
            <div class="bg-black p-4 rounded-xl font-mono text-xs text-green-400 shadow-2xl border-4 border-slate-700 flex flex-col">
              <div class="border-b border-green-900 pb-2 mb-2">Terminal</div>
              <div class="flex-1 space-y-1">
                <div>--- MENÚ PRINCIPAL ---</div>
                <div>1. Saludar</div>
                <div>2. Calcular Suma</div>
                <div>3. Salir</div>
                <div class="text-white">Opción: <span class="animate-pulse">_</span></div>
              </div>
            </div>

            <!-- Código -->
            <div class="bg-slate-900 p-4 rounded-xl font-mono text-xs text-slate-300 overflow-auto custom-scrollbar">
              <span class="text-purple-400">while</span> <span class="text-blue-400">True</span>:<br>
              &nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"1. Saludar"</span>)<br>
              &nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"2. Salir"</span>)<br>
              &nbsp;&nbsp;op = <span class="text-blue-400">input</span>(<span class="text-green-400">"> "</span>)<br>
              <br>
              &nbsp;&nbsp;<span class="text-purple-400">if</span> op == <span class="text-green-400">"1"</span>:<br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"Hola!"</span>)<br>
              &nbsp;&nbsp;<span class="text-purple-400">elif</span> op == <span class="text-green-400">"2"</span>:<br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"Adiós"</span>)<br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">break</span><br>
              &nbsp;&nbsp;<span class="text-purple-400">else</span>:<br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"Opción inválida"</span>)
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py5-3-game',
      title: 'Proyecto: Adivina el Número',
      notes: 'Lógica del juego.',
      contentHtml: `
        <div class="flex flex-col h-full space-y-6">
          <div class="bg-purple-600 text-white px-4 py-2 rounded-t-lg font-bold text-sm flex justify-between items-center">
            <span>juego.py</span>
            <span class="text-xs bg-purple-700 px-2 py-1 rounded">Lógica Completa</span>
          </div>
          
          <div class="grid md:grid-cols-2 gap-0 flex-1 border border-slate-200 rounded-b-lg overflow-hidden">
            <!-- Código -->
            <div class="bg-slate-900 p-4 overflow-auto custom-scrollbar text-xs font-mono text-purple-100">
<pre><code class="language-python">import random

secreto = random.randint(1, 100)
intentos = 0

print("¡Adivina el número (1-100)!")

while True:
    try:
        num = int(input("Tu intento: "))
        intentos += 1

        if num == secreto:
            print(f"¡Ganaste en {intentos} intentos!")
            break
        elif num < secreto:
            print("Es mayor 🔼")
        else:
            print("Es menor 🔽")
            
    except ValueError:
        print("Por favor, ingresa un número.")</code></pre>
            </div>

            <!-- Visualización Lógica -->
            <div class="bg-purple-50 p-6 flex flex-col items-center justify-center space-y-4">
              <div class="w-full bg-white p-4 rounded shadow text-center">
                <div class="text-xs text-slate-500 uppercase font-bold mb-1">Secreto</div>
                <div class="text-3xl font-bold text-purple-600">?</div>
              </div>

              <div class="flex gap-2 w-full">
                <div class="flex-1 bg-blue-100 p-2 rounded text-center text-xs text-blue-800">
                  <strong>Menor</strong><br>Pista: "Es Mayor"
                </div>
                <div class="flex-1 bg-green-100 p-2 rounded text-center text-xs text-green-800 border-2 border-green-400">
                  <strong>Igual</strong><br>¡Ganaste!
                </div>
                <div class="flex-1 bg-red-100 p-2 rounded text-center text-xs text-red-800">
                  <strong>Mayor</strong><br>Pista: "Es Menor"
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    }
  ]
};
