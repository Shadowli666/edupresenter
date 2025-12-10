
import { Module } from '../types';

export const PYTHON_MODULE_2: Module = {
  id: 'py-mod-2',
  title: '2. Sintaxis y Datos',
  description: 'Variables, tipos de datos y operadores aritméticos.',
  evaluation: '0% - Ejercicio Práctico',
  slides: [
    {
      id: 'py2-1',
      title: 'Variables y Tipado Dinámico',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Una variable es un nombre que se refiere a un valor en memoria. En Python, el tipo de dato se infiere automáticamente al asignar el valor (Tipado Dinámico).
          </p>

          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-slate-900 p-5 rounded-xl text-slate-300 font-mono text-sm shadow-lg">
              <span class="text-gray-500"># Asignación</span><br>
              x = <span class="text-blue-400">10</span><br>
              nombre = <span class="text-green-400">"Ana"</span><br>
              precio = <span class="text-blue-400">15.5</span><br>
              <br>
              <span class="text-gray-500"># Reasignación (Cambio de tipo)</span><br>
              x = <span class="text-green-400">"Ahora soy texto"</span>
            </div>

            <div class="flex flex-col justify-center space-y-4">
              <div class="bg-blue-50 p-3 rounded border border-blue-100">
                <strong class="text-blue-900 text-sm">Reglas de Nombres</strong>
                <ul class="list-disc list-inside text-xs text-blue-800 mt-1">
                  <li>Pueden contener letras, números y guion bajo (_).</li>
                  <li>NO pueden empezar con números.</li>
                  <li>Case-sensitive (Edad != edad).</li>
                  <li>Python usa <code>snake_case</code> por convención.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py2-4',
      title: 'Conversión de Tipos (Casting)',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">Convierte entre <code>str</code>, <code>int</code>, <code>float</code> y <code>bool</code> para operar correctamente con los datos.</p>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded border shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">Ejemplos</h4>
              <pre class="font-mono text-sm max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
# str -> int / float
edad = int("20")          # 20
precio = float("12.5")    # 12.5

# int/float -> str
mensaje = "Tienes " + str(edad) + " años"

# bool
bool(0)     # False
bool(1)     # True
bool("")   # False
bool("x")  # True
              </pre>
            </div>

            <div class="bg-yellow-50 p-4 rounded border border-yellow-200 text-sm">
              <h4 class="font-bold text-yellow-900 mb-2">Tips</h4>
              <ul class="list-disc list-inside text-yellow-800 text-xs space-y-1">
                <li>Usa <code>int()</code> solo con cadenas numéricas enteras.</li>
                <li>Usa <code>float()</code> para números con decimales.</li>
                <li>No puedes sumar <code>str</code> con <code>int</code> directamente.</li>
              </ul>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py2-5',
      title: 'Strings: Operaciones y Slicing',
      contentHtml: `
        <div class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6 items-start">
            <div class="bg-white p-4 rounded border shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">Concatenación y Repetición</h4>
              <pre class="font-mono text-sm max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
nombre = "Ana"
saludo = "Hola " + nombre      # "Hola Ana"
eco = "ha" * 3                # "hahaha"
              </pre>
            </div>
            <div class="bg-white p-4 rounded border shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">Slicing (rebanado)</h4>
              <pre class="font-mono text-sm max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
texto = "Python"
texto[0]      # 'P'
texto[1:4]    # 'yth'
texto[:3]     # 'Pyt'
texto[3:]     # 'hon'
texto[-1]     # 'n'
              </pre>
            </div>
          </div>

          <div class="bg-blue-50 p-4 rounded border border-blue-200">
            <h4 class="font-bold text-blue-900 mb-2">Métodos útiles</h4>
            <pre class="font-mono text-sm max-w-full overflow-x-auto bg-white text-slate-800 p-3 rounded border">
msg = "  Hola Mundo  "
msg.strip()        # "Hola Mundo"
msg.lower()        # "  hola mundo  "
msg.upper()        # "  HOLA MUNDO  "
len(msg)           # 14
            </pre>
          </div>
        </div>
      `
    },
    {
      id: 'py2-6',
      title: 'Booleans, Comparación y Truthiness',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">Comparar valores produce booleanos (<code>True/False</code>). En Python, valores vacíos/0 se consideran <em>falsy</em>.</p>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded border shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">Comparadores</h4>
              <pre class="font-mono text-sm max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
5 == 5   # True
5 != 3   # True
7 > 2    # True
2 <= 1   # False
              </pre>
            </div>
            <div class="bg-white p-4 rounded border shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">Truthiness</h4>
              <pre class="font-mono text-sm max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
bool(0), bool(0.0), bool("")   # False, False, False
bool([]), bool({}), bool(None)  # False, False, False
bool(1), bool("hola")           # True, True
              </pre>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py2-7',
      title: 'Mutabilidad e Identidad',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">Las <strong>cadenas</strong> son inmutables; las <strong>listas</strong> son mutables. La identidad se compara con <code>is</code>.</p>
          <div class="grid md:grid-cols-2 gap-6 items-start">
            <div class="bg-white p-4 rounded border shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">Inmutabilidad de strings</h4>
              <pre class="font-mono text-sm max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
s = "hola"
# s[0] = 'H'  # Error: TypeError (no se puede reasignar)
s = "H" + s[1:]   # "Hola"
              </pre>
            </div>
            <div class="bg-white p-4 rounded border shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">Identidad vs igualdad</h4>
              <pre class="font-mono text-sm max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
a = [1,2]
b = [1,2]
a == b   # True (contenido)
a is b   # False (identidad/objeto)
              </pre>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py2-8',
      title: 'Práctica I: Strings y Números',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">1) Normalizador de Nombre</h4>
            <p class="text-sm text-slate-600">Pide nombre con espacios y mayúsculas/minúsculas aleatorias. Devuélvelo con capitalización correcta y sin espacios extremos.</p>
            <details class="mt-2">
              <summary class="text-xs text-blue-600 font-bold cursor-pointer">Ver pista</summary>
              <pre class="font-mono text-sm max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded mt-2">
nombre = input("Nombre: ")
limpio = nombre.strip().lower()
print(limpio.capitalize())
              </pre>
            </details>
          </div>

          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">2) Sumador de Dígitos</h4>
            <p class="text-sm text-slate-600">Pide un número de 3 cifras como texto y suma sus dígitos.</p>
          </div>

          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">3) Calculadora Simple</h4>
            <p class="text-sm text-slate-600">Pide dos números y muestra suma, resta, multiplicación y división con 2 decimales.</p>
          </div>
        </div>
      `
    },
    {
      id: 'py2-9',
      title: 'Práctica II: Formateo y Comparación',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">4) Formateo de Recibo</h4>
            <p class="text-sm text-slate-600">Pide producto, cantidad y precio unitario. Imprime un recibo alineado usando f-strings.</p>
          </div>

          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">5) Comparador de Palabras</h4>
            <p class="text-sm text-slate-600">Pide dos palabras e indica si son iguales ignorando mayúsculas/minúsculas.</p>
          </div>
        </div>
      `
    },
    {
      id: 'py2-10',
      title: 'Mini Quiz',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">1) ¿Cuál es el tipo?</h4>
            <pre class="font-mono text-sm max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">type("5")</pre>
            <details class="mt-2">
              <summary class="text-xs text-blue-600 font-bold cursor-pointer">Respuesta</summary>
              <p class="text-sm"><code>str</code></p>
            </details>
          </div>

          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">2) ¿Qué imprime?</h4>
            <pre class="font-mono text-sm max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">print("ha" * 2 + "! ")</pre>
            <details class="mt-2">
              <summary class="text-xs text-blue-600 font-bold cursor-pointer">Respuesta</summary>
              <p class="text-sm">Imprime: <code>haha! </code></p>
            </details>
          </div>
        </div>
      `
    },
    {
      id: 'py2-qa',
      title: 'Preguntas y Respuestas',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center space-y-4">
          <h2 class="text-3xl font-bold text-slate-900">¿Dudas sobre tipos y operadores?</h2>
          <p class="text-slate-600">Resolvemos preguntas sobre casting, strings, y comparación.</p>
          <div class="mt-4 grid md:grid-cols-3 gap-4 text-sm max-w-3xl w-full">
            <div class="bg-slate-50 p-3 rounded border">¿Cuándo usar int vs float?</div>
            <div class="bg-slate-50 p-3 rounded border">¿Cómo alinear textos con f-strings?</div>
            <div class="bg-slate-50 p-3 rounded border">¿Qué es truthiness?</div>
          </div>
        </div>
      `
    },
    {
      id: 'py2-end',
      title: '¡Gracias!',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-16 text-center">
          <div class="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
            <svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-2">Fin del Módulo 2</h3>
          <p class="text-slate-600">Seguimos con control de flujo en el módulo 3.</p>
        </div>
      `
    },
    {
      id: 'py2-2',
      title: 'Tipos de Datos Fundamentales',
      contentHtml: `
        <div class="space-y-8">
          <div class="grid grid-cols-2 gap-4">
            <!-- Integers -->
            <div class="bg-white p-4 rounded border shadow-sm hover:shadow-md transition">
              <h4 class="font-bold text-slate-800 mb-1">int (Enteros)</h4>
              <p class="text-xs text-gray-500 mb-2">Números sin decimales. Precisión ilimitada en Python 3.</p>
              <code class="bg-slate-100 px-2 py-1 rounded text-xs text-slate-700">edad = 25</code>
            </div>

            <!-- Floats -->
            <div class="bg-white p-4 rounded border shadow-sm hover:shadow-md transition">
              <h4 class="font-bold text-slate-800 mb-1">float (Flotantes)</h4>
              <p class="text-xs text-gray-500 mb-2">Números con punto decimal.</p>
              <code class="bg-slate-100 px-2 py-1 rounded text-xs text-slate-700">pi = 3.14159</code>
            </div>

            <!-- Strings -->
            <div class="bg-white p-4 rounded border shadow-sm hover:shadow-md transition">
              <h4 class="font-bold text-slate-800 mb-1">str (Cadenas)</h4>
              <p class="text-xs text-gray-500 mb-2">Texto entre comillas simples o dobles.</p>
              <code class="bg-slate-100 px-2 py-1 rounded text-xs text-slate-700">msg = "Hola"</code>
            </div>

            <!-- Booleans -->
            <div class="bg-white p-4 rounded border shadow-sm hover:shadow-md transition">
              <h4 class="font-bold text-slate-800 mb-1">bool (Booleanos)</h4>
              <p class="text-xs text-gray-500 mb-2">Valor de verdad (True/False). Nota la mayúscula inicial.</p>
              <code class="bg-slate-100 px-2 py-1 rounded text-xs text-slate-700">activo = True</code>
            </div>
          </div>
          
          <div class="bg-yellow-50 p-3 rounded text-xs text-yellow-800 text-center border border-yellow-200">
            Usa la función <code>type(variable)</code> para saber qué tipo de dato almacena una variable.
          </div>
        </div>
      `
    },
    {
      id: 'py2-3',
      title: 'Operadores Aritméticos',
      contentHtml: `
        <div class="space-y-6">
          <table class="w-full text-sm text-left text-slate-600 border rounded overflow-hidden shadow-sm">
            <thead class="bg-slate-100 text-slate-800 uppercase font-bold text-xs">
              <tr>
                <th class="px-4 py-2">Operador</th>
                <th class="px-4 py-2">Descripción</th>
                <th class="px-4 py-2">Ejemplo</th>
                <th class="px-4 py-2">Resultado</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr>
                <td class="px-4 py-2 font-mono font-bold bg-slate-50">+</td>
                <td class="px-4 py-2">Suma</td>
                <td class="px-4 py-2 font-mono">5 + 3</td>
                <td class="px-4 py-2">8</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-mono font-bold bg-slate-50">-</td>
                <td class="px-4 py-2">Resta</td>
                <td class="px-4 py-2 font-mono">10 - 2</td>
                <td class="px-4 py-2">8</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-mono font-bold bg-slate-50">*</td>
                <td class="px-4 py-2">Multiplicación</td>
                <td class="px-4 py-2 font-mono">4 * 2</td>
                <td class="px-4 py-2">8</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-mono font-bold bg-slate-50">/</td>
                <td class="px-4 py-2">División (Siempre float)</td>
                <td class="px-4 py-2 font-mono">16 / 2</td>
                <td class="px-4 py-2">8.0</td>
              </tr>
               <tr>
                <td class="px-4 py-2 font-mono font-bold bg-slate-50 text-purple-600">//</td>
                <td class="px-4 py-2 font-bold text-purple-700">División Entera</td>
                <td class="px-4 py-2 font-mono">17 // 2</td>
                <td class="px-4 py-2">8</td>
              </tr>
               <tr>
                <td class="px-4 py-2 font-mono font-bold bg-slate-50 text-purple-600">%</td>
                <td class="px-4 py-2 font-bold text-purple-700">Módulo (Residuo)</td>
                <td class="px-4 py-2 font-mono">18 % 10</td>
                <td class="px-4 py-2">8</td>
              </tr>
               <tr>
                <td class="px-4 py-2 font-mono font-bold bg-slate-50 text-purple-600">**</td>
                <td class="px-4 py-2 font-bold text-purple-700">Potencia</td>
                <td class="px-4 py-2 font-mono">2 ** 3</td>
                <td class="px-4 py-2">8</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    }
  ]
};
