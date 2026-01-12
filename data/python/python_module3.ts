import { Module } from '../../types';

export const PYTHON_MODULE_3: Module = {
  id: 'py-mod-3',
  title: '3. Control de Flujo',
  description: 'Toma de decisiones con if, else, elif y lógica booleana.',
  evaluation: '0% - Práctica Guiada',
  slides: [
    {
      id: 'py3-1-flow',
      title: 'El Flujo de Ejecución',
      notes: 'Diagrama de flujo básico.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full space-y-8">
          <div class="text-center max-w-3xl">
            <h1 class="text-3xl font-bold text-slate-900 mb-4">Bifurcaciones en el Camino</h1>
            <p class="text-lg text-slate-700">
              El código no siempre es una línea recta. A veces necesitamos tomar desvíos basados en condiciones.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-12 w-full max-w-5xl items-center">
            <!-- Diagrama de Flujo -->
            <div class="relative h-80 bg-white rounded-xl border border-slate-200 shadow-lg p-6 flex flex-col items-center">
              <!-- Start -->
              <div class="w-24 h-10 bg-slate-200 rounded-full flex items-center justify-center text-xs font-bold border border-slate-400">Inicio</div>
              <div class="h-8 w-0.5 bg-slate-400"></div>
              
              <!-- Condition -->
              <div class="w-32 h-16 bg-yellow-100 transform rotate-0 flex items-center justify-center text-xs font-bold border border-yellow-400 relative" style="clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);">
                <span class="z-10">¿Llueve?</span>
              </div>
              
              <!-- Paths -->
              <div class="absolute top-[110px] w-full flex justify-between px-12 pointer-events-none">
                <div class="flex flex-col items-center -ml-8">
                  <div class="text-green-600 text-xs font-bold mb-1">True</div>
                  <div class="w-0.5 h-8 bg-green-500"></div>
                </div>
                <div class="flex flex-col items-center -mr-8">
                  <div class="text-red-600 text-xs font-bold mb-1">False</div>
                  <div class="w-0.5 h-8 bg-red-500"></div>
                </div>
              </div>

              <!-- Actions -->
              <div class="flex justify-between w-full mt-8 gap-4">
                <div class="w-28 h-12 bg-blue-100 rounded flex items-center justify-center text-xs text-center border border-blue-300 shadow-sm">
                  Llevar<br>Paraguas
                </div>
                <div class="w-28 h-12 bg-gray-100 rounded flex items-center justify-center text-xs text-center border border-gray-300 shadow-sm opacity-50">
                  (Nada)
                </div>
              </div>

              <!-- Merge -->
              <div class="absolute bottom-6 w-full flex justify-center">
                 <div class="w-24 h-10 bg-slate-200 rounded-full flex items-center justify-center text-xs font-bold border border-slate-400">Salir</div>
              </div>
            </div>

            <!-- Código Python -->
            <div class="bg-slate-900 p-6 rounded-xl shadow-lg font-mono text-sm text-slate-300">
              <div class="mb-2 text-gray-500"># La indentación define el bloque</div>
              <div class="mb-4">
                <span class="text-purple-400">if</span> esta_lloviendo:
              </div>
              <div class="pl-8 mb-4 bg-slate-800 rounded py-1 border-l-4 border-yellow-400">
                <span class="text-blue-400">print</span>(<span class="text-green-400">"Lleva paraguas ☔"</span>)<br>
                <span class="text-blue-400">print</span>(<span class="text-green-400">"Y botas..."</span>)
              </div>
              <div>
                <span class="text-blue-400">print</span>(<span class="text-green-400">"Salir de casa"</span>)
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py3-2-logic',
      title: 'Lógica Booleana',
      notes: 'Tablas de verdad visuales.',
      contentHtml: `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
          <!-- AND -->
          <div class="bg-blue-50 p-4 rounded-xl border border-blue-200 flex flex-col">
            <h3 class="text-xl font-bold text-blue-800 mb-4 text-center">AND</h3>
            <p class="text-xs text-center text-blue-600 mb-4">Ambos deben ser True</p>
            <div class="flex-1 flex items-center justify-center">
              <div class="grid grid-cols-3 gap-2 text-xs font-mono">
                <div class="font-bold">A</div><div class="font-bold">B</div><div class="font-bold">A and B</div>
                <div class="text-red-500">F</div><div class="text-red-500">F</div><div class="bg-red-100 text-center rounded">False</div>
                <div class="text-red-500">F</div><div class="text-green-600">V</div><div class="bg-red-100 text-center rounded">False</div>
                <div class="text-green-600">V</div><div class="text-red-500">F</div><div class="bg-red-100 text-center rounded">False</div>
                <div class="text-green-600">V</div><div class="text-green-600">V</div><div class="bg-green-200 text-center rounded font-bold">True</div>
              </div>
            </div>
          </div>

          <!-- OR -->
          <div class="bg-purple-50 p-4 rounded-xl border border-purple-200 flex flex-col">
            <h3 class="text-xl font-bold text-purple-800 mb-4 text-center">OR</h3>
            <p class="text-xs text-center text-purple-600 mb-4">Al menos uno es True</p>
            <div class="flex-1 flex items-center justify-center">
              <div class="grid grid-cols-3 gap-2 text-xs font-mono">
                <div class="font-bold">A</div><div class="font-bold">B</div><div class="font-bold">A or B</div>
                <div class="text-red-500">F</div><div class="text-red-500">F</div><div class="bg-red-100 text-center rounded">False</div>
                <div class="text-red-500">F</div><div class="text-green-600">V</div><div class="bg-green-200 text-center rounded font-bold">True</div>
                <div class="text-green-600">V</div><div class="text-red-500">F</div><div class="bg-green-200 text-center rounded font-bold">True</div>
                <div class="text-green-600">V</div><div class="text-green-600">V</div><div class="bg-green-200 text-center rounded font-bold">True</div>
              </div>
            </div>
          </div>

          <!-- NOT -->
          <div class="bg-orange-50 p-4 rounded-xl border border-orange-200 flex flex-col">
            <h3 class="text-xl font-bold text-orange-800 mb-4 text-center">NOT</h3>
            <p class="text-xs text-center text-orange-600 mb-4">Invierte el valor</p>
            <div class="flex-1 flex items-center justify-center">
              <div class="grid grid-cols-2 gap-4 text-xs font-mono">
                <div class="font-bold">A</div><div class="font-bold">not A</div>
                <div class="text-red-500">False</div><div class="bg-green-200 text-center rounded font-bold">True</div>
                <div class="text-green-600">True</div><div class="bg-red-100 text-center rounded">False</div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py3-3-elif',
      title: 'Múltiples Caminos: ELIF',
      notes: 'Estructura if-elif-else.',
      contentHtml: `
        <div class="flex flex-col h-full space-y-6">
          <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 class="text-lg font-bold text-slate-800 mb-2">La Escalera de Decisiones</h3>
            <p class="text-slate-600 text-sm">
              Python evalúa las condiciones en orden. Apenas una es verdadera, ejecuta su bloque y <strong>salta al final</strong>.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-8 flex-1">
            <div class="bg-slate-900 p-6 rounded-xl font-mono text-sm text-slate-300 overflow-hidden relative">
              <div class="absolute top-0 right-0 bg-slate-800 text-xs px-2 py-1 rounded-bl text-slate-400">calificaciones.py</div>
              
              <div class="space-y-1">
                <div>nota = 85</div>
                <br>
                <div class="group hover:bg-slate-800 p-1 rounded transition-colors cursor-pointer">
                  <span class="text-purple-400">if</span> nota >= 90:<br>
                  &nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"Excelente A"</span>)
                </div>
                
                <div class="group hover:bg-slate-800 p-1 rounded transition-colors cursor-pointer border-l-2 border-yellow-500 bg-slate-800/50">
                  <span class="text-purple-400">elif</span> nota >= 80: <span class="text-gray-500"># <-- Entra aquí</span><br>
                  &nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"Muy bien B"</span>)
                </div>

                <div class="group hover:bg-slate-800 p-1 rounded transition-colors cursor-pointer opacity-50">
                  <span class="text-purple-400">elif</span> nota >= 70:<br>
                  &nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"Bien C"</span>)
                </div>

                <div class="group hover:bg-slate-800 p-1 rounded transition-colors cursor-pointer opacity-50">
                  <span class="text-purple-400">else</span>:<br>
                  &nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"Estudia más"</span>)
                </div>
              </div>
            </div>

            <div class="flex flex-col justify-center space-y-4">
              <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded shadow-sm">
                <h4 class="font-bold text-yellow-800 text-sm">Importante</h4>
                <p class="text-xs text-yellow-700 mt-1">
                  Si usaras múltiples <code>if</code> independientes en lugar de <code>elif</code>, Python evaluaría TODAS las condiciones, lo cual podría ser incorrecto o ineficiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py3-4-practice',
      title: 'Práctica: Sistema de Login',
      notes: 'Ejercicio práctico.',
      contentHtml: `
        <div class="flex flex-col h-full">
          <div class="bg-blue-600 text-white px-4 py-2 rounded-t-lg font-bold text-sm flex justify-between items-center">
            <span>login.py</span>
            <span class="text-xs bg-blue-700 px-2 py-1 rounded">Ejercicio</span>
          </div>
          <div class="bg-slate-900 p-4 rounded-b-lg overflow-auto custom-scrollbar flex-1 text-xs font-mono text-blue-100">
<pre><code class="language-python"># Base de datos simulada
USUARIO_REAL = "admin"
CLAVE_REAL = "1234"

print("--- SISTEMA DE ACCESO ---")

usuario = input("Usuario: ")
clave = input("Contraseña: ")

# Lógica de validación
if usuario == USUARIO_REAL and clave == CLAVE_REAL:
    print("✅ Acceso Concedido")
    print(f"Bienvenido, {usuario}")

elif usuario == USUARIO_REAL and clave != CLAVE_REAL:
    print("❌ Contraseña Incorrecta")

elif usuario != USUARIO_REAL:
    print("❌ Usuario no encontrado")

else:
    # Este caso teóricamente no se alcanza con la lógica anterior,
    # pero es buena práctica tener un catch-all.
    print("❌ Error desconocido")</code></pre>
          </div>
        </div>
      `
    }
  ]
};

