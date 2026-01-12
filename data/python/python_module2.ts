import { Module } from '../../types';

export const PYTHON_MODULE_2: Module = {
  id: 'py-mod-2',
  title: '2. Variables y Tipos de Datos',
  description: 'El sistema de tipos de Python, variables como referencias y operadores fundamentales.',
  evaluation: '0% - Práctica Guiada',
  slides: [
    {
      id: 'py2-1',
      title: 'Variables: Etiquetas, no Cajas',
      notes: 'Modelo de memoria de Python.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full space-y-6">
          <div class="text-center max-w-4xl">
            <h1 class="text-3xl font-bold text-slate-900 mb-4">Variables en Python</h1>
            <p class="text-lg text-slate-700">
              En muchos lenguajes (C, Java), una variable es una "caja" donde guardas un valor.
              En Python, una variable es una <strong>etiqueta</strong> (referencia) que pegas a un objeto en memoria.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-12 w-full max-w-4xl items-center">
            <!-- Código -->
            <div class="bg-slate-900 p-6 rounded-xl shadow-lg font-mono text-sm">
              <div class="mb-4">
                <span class="text-purple-400">a</span> = <span class="text-blue-400">10</span>
              </div>
              <div class="mb-4">
                <span class="text-purple-400">b</span> = <span class="text-purple-400">a</span>
              </div>
              <div>
                <span class="text-purple-400">a</span> = <span class="text-green-400">"Hola"</span>
              </div>
            </div>

            <!-- Visualización Memoria -->
            <div class="bg-white p-6 rounded-xl border border-slate-200 h-64 relative">
              <div class="absolute top-2 left-2 text-xs text-slate-400 font-bold">MEMORIA (HEAP)</div>
              
              <!-- Objeto 10 -->
              <div class="absolute top-10 right-10 w-16 h-16 bg-blue-100 border-2 border-blue-500 rounded-full flex items-center justify-center font-bold text-blue-800 shadow-md">
                10
              </div>
              
              <!-- Objeto "Hola" -->
              <div class="absolute bottom-10 right-10 w-20 h-12 bg-green-100 border-2 border-green-500 rounded-lg flex items-center justify-center font-bold text-green-800 shadow-md">
                "Hola"
              </div>

              <!-- Etiquetas -->
              <div class="absolute top-10 left-10 bg-yellow-200 p-2 shadow rotate-[-5deg] border border-yellow-400 font-handwriting font-bold text-slate-800">
                a
              </div>
              <div class="absolute top-24 left-10 bg-yellow-200 p-2 shadow rotate-[5deg] border border-yellow-400 font-handwriting font-bold text-slate-800">
                b
              </div>

              <!-- Flechas (SVG) -->
              <svg class="absolute inset-0 w-full h-full pointer-events-none">
                <!-- a -> "Hola" -->
                <path d="M60 60 C 100 60, 100 180, 200 180" fill="none" stroke="#334155" stroke-width="2" marker-end="url(#arrow)" stroke-dasharray="5,5" />
                <!-- b -> 10 -->
                <path d="M60 110 C 100 110, 100 60, 200 60" fill="none" stroke="#334155" stroke-width="2" marker-end="url(#arrow)" />
              </svg>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py2-2-types',
      title: 'Tipos Primitivos',
      notes: 'Los bloques básicos.',
      contentHtml: `
        <div class="grid grid-cols-2 gap-6 h-full">
          <!-- Int -->
          <div class="bg-blue-50 p-6 rounded-xl border border-blue-200 flex flex-col items-center justify-center hover:scale-105 transition-transform">
            <div class="text-4xl font-bold text-blue-600 mb-2">int</div>
            <p class="text-sm text-blue-800 text-center">Enteros de precisión arbitraria.</p>
            <code class="mt-4 bg-white px-2 py-1 rounded text-xs text-slate-600">x = 2**100</code>
          </div>

          <!-- Float -->
          <div class="bg-green-50 p-6 rounded-xl border border-green-200 flex flex-col items-center justify-center hover:scale-105 transition-transform">
            <div class="text-4xl font-bold text-green-600 mb-2">float</div>
            <p class="text-sm text-green-800 text-center">Punto flotante (IEEE 754).</p>
            <code class="mt-4 bg-white px-2 py-1 rounded text-xs text-slate-600">pi = 3.14159</code>
          </div>

          <!-- Str -->
          <div class="bg-yellow-50 p-6 rounded-xl border border-yellow-200 flex flex-col items-center justify-center hover:scale-105 transition-transform">
            <div class="text-4xl font-bold text-yellow-600 mb-2">str</div>
            <p class="text-sm text-yellow-800 text-center">Texto Unicode inmutable.</p>
            <code class="mt-4 bg-white px-2 py-1 rounded text-xs text-slate-600">s = "Python 🐍"</code>
          </div>

          <!-- Bool -->
          <div class="bg-purple-50 p-6 rounded-xl border border-purple-200 flex flex-col items-center justify-center hover:scale-105 transition-transform">
            <div class="text-4xl font-bold text-purple-600 mb-2">bool</div>
            <p class="text-sm text-purple-800 text-center">Lógica binaria.</p>
            <code class="mt-4 bg-white px-2 py-1 rounded text-xs text-slate-600">is_valid = True</code>
          </div>
        </div>
      `
    },
    {
      id: 'py2-3-operators',
      title: 'Operadores Aritméticos',
      notes: 'Matemáticas básicas.',
      contentHtml: `
        <div class="flex flex-col h-full space-y-6">
          <h3 class="text-2xl font-bold text-slate-800">Más allá de la suma</h3>
          
          <div class="flex-1 bg-white rounded-xl shadow overflow-hidden border border-slate-200">
            <table class="w-full text-sm text-left">
              <thead class="bg-slate-100 text-slate-700">
                <tr>
                  <th class="p-4">Símbolo</th>
                  <th class="p-4">Operación</th>
                  <th class="p-4">Ejemplo</th>
                  <th class="p-4">Resultado</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr>
                  <td class="p-4 font-mono font-bold text-blue-600">+ - * /</td>
                  <td class="p-4">Estándar</td>
                  <td class="p-4 font-mono text-xs">10 / 3</td>
                  <td class="p-4 font-mono text-xs">3.3333... (float)</td>
                </tr>
                <tr class="bg-yellow-50">
                  <td class="p-4 font-mono font-bold text-purple-600">//</td>
                  <td class="p-4 font-bold">División Entera</td>
                  <td class="p-4 font-mono text-xs">10 // 3</td>
                  <td class="p-4 font-mono text-xs">3 (int)</td>
                </tr>
                <tr>
                  <td class="p-4 font-mono font-bold text-purple-600">%</td>
                  <td class="p-4 font-bold">Módulo (Resto)</td>
                  <td class="p-4 font-mono text-xs">10 % 3</td>
                  <td class="p-4 font-mono text-xs">1</td>
                </tr>
                <tr class="bg-yellow-50">
                  <td class="p-4 font-mono font-bold text-purple-600">**</td>
                  <td class="p-4 font-bold">Potencia</td>
                  <td class="p-4 font-mono text-xs">2 ** 3</td>
                  <td class="p-4 font-mono text-xs">8</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="text-xs text-slate-500 text-center">
            Nota: En Python 2, <code>/</code> era división entera. En Python 3, siempre retorna float.
          </p>
        </div>
      `
    },
    {
      id: 'py2-4-input',
      title: 'Entrada y Conversión (Casting)',
      notes: 'La trampa del input.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full">
          <div class="bg-red-50 p-6 rounded-xl border border-red-200 flex flex-col">
            <h3 class="font-bold text-red-800 mb-4">El Error Clásico</h3>
            <div class="bg-slate-900 p-4 rounded text-xs font-mono text-slate-300 mb-4">
              edad = input("Edad: ") <span class="text-gray-500"># Ingresa 20</span><br>
              print(edad + 1)
            </div>
            <div class="bg-red-200 text-red-900 p-2 rounded text-xs font-mono">
              TypeError: can only concatenate str (not "int") to str
            </div>
            <p class="mt-4 text-sm text-red-800">
              <code>input()</code> <strong>SIEMPRE</strong> devuelve un string ("20"), no un número (20).
            </p>
          </div>

          <div class="bg-green-50 p-6 rounded-xl border border-green-200 flex flex-col">
            <h3 class="font-bold text-green-800 mb-4">La Solución: Casting</h3>
            <p class="text-sm text-green-700 mb-4">
              Debemos convertir explícitamente el tipo de dato.
            </p>
            <div class="bg-slate-900 p-4 rounded text-xs font-mono text-slate-300">
              edad_str = input("Edad: ")<br>
              edad_int = <span class="text-yellow-400">int</span>(edad_str)<br>
              <br>
              <span class="text-gray-500"># O en una línea:</span><br>
              precio = <span class="text-yellow-400">float</span>(input("Precio: "))
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py2-5-code',
      title: 'Práctica: Calculadora de IMC',
      notes: 'Código completo.',
      contentHtml: `
        <div class="flex flex-col h-full">
          <div class="bg-yellow-500 text-white px-4 py-2 rounded-t-lg font-bold text-sm">Python: Script Completo</div>
          <div class="bg-slate-900 p-4 rounded-b-lg overflow-auto custom-scrollbar flex-1 text-xs font-mono text-yellow-100">
<pre><code class="language-python"># Calculadora de Índice de Masa Corporal (IMC)

print("--- Calculadora IMC ---")

# 1. Entrada de datos (con casting)
peso = float(input("Ingresa tu peso en kg: "))
altura = float(input("Ingresa tu altura en metros: "))

# 2. Procesamiento
# Fórmula: peso / altura^2
imc = peso / (altura ** 2)

# 3. Salida (f-strings para formateo)
print(f"Tu IMC es: {imc:.2f}")

# Tipos de datos usados
print("-" * 20)
print(f"Tipo de peso: {type(peso)}")
print(f"Tipo de imc: {type(imc)}")</code></pre>
          </div>
        </div>
      `
    }
  ]
};
