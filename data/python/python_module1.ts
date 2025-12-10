
import { Module } from '../../types';

export const PYTHON_MODULE_1: Module = {
  id: 'py-mod-1',
  title: '1. Fundamentos de Python',
  description: 'Introducción al lenguaje, algoritmos, paquetes y resolución de problemas.',
  evaluation: '10% - Guía de Ejercicios',
  slides: [
    {
      id: 'py1-1',
      title: 'Introducción a Python',
      contentHtml: `
        <div class="space-y-6">
          <div class="flex items-center gap-4 mb-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python Logo" class="w-16 h-16" />
            <div>
              <h3 class="text-2xl font-bold text-slate-900">¿Qué es Python?</h3>
              <p class="text-gray-600">Un lenguaje de programación de alto nivel, interpretado y multipropósito.</p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-blue-50 p-5 rounded-xl border border-blue-100">
              <h4 class="font-bold text-blue-900 mb-2">Características Clave</h4>
              <ul class="list-disc list-inside text-sm text-blue-800 space-y-1">
                <li><strong>Legible:</strong> Sintaxis limpia, similar al inglés.</li>
                <li><strong>Interpretado:</strong> No necesita compilación previa.</li>
                <li><strong>Tipado Dinámico:</strong> No requiere declarar tipos de variables.</li>
                <li><strong>Multiplatforma:</strong> Corre en Windows, Mac, Linux.</li>
              </ul>
            </div>

            <div class="bg-yellow-50 p-5 rounded-xl border border-yellow-100">
              <h4 class="font-bold text-yellow-900 mb-2">Diferencias con C++/Java</h4>
              <div class="space-y-3 text-xs font-mono">
                <div class="bg-white p-2 rounded border border-yellow-200">
                  <span class="text-slate-400">// C++</span><br>
                  <span class="text-purple-600">int</span> main() { cout << "Hola"; }
                </div>
                <div class="bg-white p-2 rounded border border-yellow-200">
                  <span class="text-slate-400"># Python</span><br>
                  <span class="text-blue-600">print</span>(<span class="text-green-600">"Hola"</span>)
                </div>
              </div>
              <p class="text-xs text-yellow-800 mt-2">¡Adiós a los puntos y comas (;) y a las llaves {}!</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py1-2',
      title: 'Algoritmos y Resolución de Problemas',
      contentHtml: `
        <div class="space-y-8">
          <p class="text-gray-700">Antes de programar, debemos entender el problema. Python es solo la herramienta para expresar la solución.</p>

          <div class="relative border-l-4 border-slate-200 ml-4 pl-8 py-2 space-y-8">
            <div class="relative">
              <div class="absolute -left-[42px] bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
              <h4 class="font-bold text-slate-800">Entender el Problema</h4>
              <p class="text-sm text-slate-600">¿Qué datos entran? ¿Qué resultado se espera? (Análisis).</p>
            </div>
            <div class="relative">
              <div class="absolute -left-[42px] bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
              <h4 class="font-bold text-slate-800">Diseñar el Algoritmo</h4>
              <p class="text-sm text-slate-600">Pasos lógicos secuenciales (Pseudocódigo o Diagrama de Flujo).</p>
            </div>
            <div class="relative">
              <div class="absolute -left-[42px] bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
              <h4 class="font-bold text-slate-800">Codificar (Scripting)</h4>
              <p class="text-sm text-slate-600">Traducir la lógica a sintaxis Python (.py).</p>
            </div>
            <div class="relative">
              <div class="absolute -left-[42px] bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
              <h4 class="font-bold text-slate-800">Depurar (Debugging)</h4>
              <p class="text-sm text-slate-600">Corregir errores de sintaxis o lógica.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py1-3',
      title: 'Paquetes y Entorno',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-white p-6 rounded-xl border shadow-sm">
            <h3 class="font-bold text-slate-800 mb-4 border-b pb-2">Gestión de Paquetes (PIP)</h3>
            <p class="text-gray-700 mb-4 text-sm">
              Python destaca por su inmensa comunidad. Un <strong>paquete</strong> es un directorio con scripts de Python que ofrecen funcionalidades extra (ej. NumPy para matemáticas, Pandas para datos).
            </p>
            <div class="bg-slate-900 text-green-400 font-mono text-xs p-4 rounded">
              $ pip install pandas<br>
              $ pip list<br>
              $ pip uninstall numpy
            </div>
            <p class="text-xs text-slate-500 mt-2">
              <strong>PyPI</strong> (Python Package Index) es el repositorio oficial de software.
            </p>
          </div>

          <div class="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
            <h3 class="font-bold text-indigo-900 mb-2">Modo Interactivo vs Script</h3>
            <div class="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong class="block text-indigo-800 mb-1">Modo Interactivo (REPL)</strong>
                <p class="text-indigo-700 text-xs">Escribes una línea y se ejecuta al instante. Ideal para pruebas rápidas en la consola.</p>
                <code class="block bg-white px-2 py-1 mt-1 rounded text-xs">>>> 2 + 2<br>4</code>
              </div>
              <div>
                <strong class="block text-indigo-800 mb-1">Modo Script</strong>
                <p class="text-indigo-700 text-xs">Escribes todo el código en un archivo <code>.py</code> y lo ejecutas completo.</p>
                <code class="block bg-white px-2 py-1 mt-1 rounded text-xs">python main.py</code>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py1-4',
      title: 'Práctica: Hola Mundo y Variables',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-green-50 border border-green-200 p-4 rounded-lg mb-4">
            <p class="text-green-800 font-bold">Evaluación (10%): Primeros Scripts</p>
            <p class="text-green-700 text-sm">Cree un archivo <code>practica1.py</code> y resuelva los siguientes ejercicios.</p>
          </div>

          <div class="space-y-4">
             <!-- Ejercicio 1 -->
             <div class="bg-white p-4 border rounded shadow-sm">
               <h4 class="font-bold text-slate-800 mb-2">1. Saludo Personalizado</h4>
               <p class="text-sm text-slate-600 mb-3">Use <code>input()</code> para pedir el nombre y <code>print()</code> para saludar.</p>
               <details>
                 <summary class="text-xs text-blue-600 cursor-pointer font-bold">Ver Código</summary>
                 <div class="bg-slate-900 text-slate-300 p-3 rounded font-mono text-xs mt-2">
                   nombre = <span class="text-blue-400">input</span>(<span class="text-green-400">"¿Cómo te llamas? "</span>)<br>
                   <span class="text-blue-400">print</span>(<span class="text-green-400">"Hola "</span> + nombre)
                 </div>
               </details>
             </div>

             <!-- Ejercicio 2 -->
             <div class="bg-white p-4 border rounded shadow-sm">
               <h4 class="font-bold text-slate-800 mb-2">2. Suma Simple</h4>
               <p class="text-sm text-slate-600 mb-3">Pida dos números y muestre la suma. ¡Cuidado con los tipos de datos!</p>
               <details>
                 <summary class="text-xs text-blue-600 cursor-pointer font-bold">Ver Código</summary>
                 <div class="bg-slate-900 text-slate-300 p-3 rounded font-mono text-xs mt-2">
                   n1 = <span class="text-purple-400">int</span>(<span class="text-blue-400">input</span>(<span class="text-green-400">"Num 1: "</span>))<br>
                   n2 = <span class="text-purple-400">int</span>(<span class="text-blue-400">input</span>(<span class="text-green-400">"Num 2: "</span>))<br>
                   <span class="text-blue-400">print</span>(n1 + n2)
                 </div>
               </details>
             </div>
          </div>
        </div>
      `
    }
    ,
    {
      id: 'py1-5',
      title: 'Entrada/Salida y f-strings',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">La entrada y salida de datos en Python se hace con <code>input()</code> y <code>print()</code>. Para formatear textos, usa <strong>f-strings</strong> (cadenas con prefijo <code>f</code>).</p>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded border shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">Lectura y escritura</h4>
              <pre class="font-mono text-sm max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
nombre = input("Nombre: ")
edad = int(input("Edad: "))
print("Hola", nombre, "tienes", edad, "años")
              </pre>
            </div>

            <div class="bg-white p-4 rounded border shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">f-strings (recomendado)</h4>
              <pre class="font-mono text-sm max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
nombre = "Ana"
edad = 21
print(f"Hola {nombre}, tienes {edad} años")

# Formateo numérico
pi = 3.1415926
print(f"pi = {pi:.2f}")  # pi = 3.14
              </pre>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py1-6',
      title: 'Comentarios, Docstrings y Estilo (PEP 8)',
      contentHtml: `
        <div class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded border shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">Comentarios</h4>
              <p class="text-sm text-slate-600">Usa <code>#</code> para explicar por qué (no qué) hace el código.</p>
              <pre class="font-mono text-sm max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
# Calcular el precio final con impuesto
precio_base = 100
IVA = 0.18  # 18%
precio_final = precio_base * (1 + IVA)
              </pre>
            </div>

            <div class="bg-white p-4 rounded border shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">Docstrings</h4>
              <p class="text-sm text-slate-600">Documenta funciones y módulos con <code>"""triple comillas"""</code>.</p>
              <pre class="font-mono text-sm max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
def area_circulo(r):
    """Devuelve el área de un círculo dado su radio r."""
    from math import pi
    return pi * (r ** 2)
              </pre>
            </div>
          </div>

          <div class="bg-indigo-50 p-4 rounded border border-indigo-200 text-sm">
            <h4 class="font-bold text-indigo-900 mb-1">Guía de Estilo PEP 8 (resumen)</h4>
            <ul class="list-disc list-inside text-indigo-800 text-xs space-y-1">
              <li>Usa <strong>snake_case</strong> para variables y funciones.</li>
              <li>4 espacios por nivel de indentación.</li>
              <li>Líneas de máximo ~79 caracteres.</li>
              <li>Nombres descriptivos, evita abreviaturas crípticas.</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'py1-7',
      title: 'Errores comunes y Tracebacks',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">Los errores en Python muestran un <strong>traceback</strong> indicando dónde falló el programa.</p>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-white p-4 rounded border shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">NameError</h4>
              <pre class="font-mono text-sm max-w-full overflow-x-auto bg-slate-900 text-red-200 p-3 rounded">
print(nombre)  # nombre no definido
# NameError: name 'nombre' is not defined
              </pre>
            </div>
            <div class="bg-white p-4 rounded border shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">TypeError</h4>
              <pre class="font-mono text-sm max-w-full overflow-x-auto bg-slate-900 text-red-200 p-3 rounded">
edad = 20
print("Edad: " + edad)
# TypeError: can only concatenate str (not "int") to str
              </pre>
            </div>
            <div class="bg-white p-4 rounded border shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">IndentationError</h4>
              <pre class="font-mono text-sm max-w-full overflow-x-auto bg-slate-900 text-red-200 p-3 rounded">
if True:
print("Hola")  # Falta indentación
# IndentationError: expected an indented block
              </pre>
            </div>
          </div>

          <div class="bg-yellow-50 p-3 rounded border border-yellow-200 text-xs text-yellow-900">
            Tip: convierte números a texto con <code>str()</code> o usa <code>f-strings</code>.
          </div>
        </div>
      `
    },
    {
      id: 'py1-8',
      title: 'Ejecución en VS Code y Terminal',
      contentHtml: `
        <div class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded border shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">Terminal</h4>
              <pre class="font-mono text-sm max-w-full overflow-x-auto bg-slate-900 text-green-400 p-3 rounded">
$ python --version
Python 3.x.x

$ python hola.py
Hola mundo
              </pre>
              <p class="text-xs text-slate-600 mt-2">Asegúrate de tener Python en el PATH. En Linux/Mac puede ser <code>python3</code>.</p>
            </div>

            <div class="bg-white p-4 rounded border shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">VS Code</h4>
              <ul class="list-disc list-inside text-sm text-slate-700 space-y-1">
                <li>Instala la extensión "Python" de Microsoft.</li>
                <li>Selecciona el intérprete (barra de estado).</li>
                <li>Ejecuta con el botón ▶ o usa el depurador para poner breakpoints.</li>
              </ul>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py1-9',
      title: 'Ejercicios Rápidos',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">1) Conversor de Unidades</h4>
            <p class="text-sm text-slate-600">Pide metros y conviértelos a centímetros y milímetros.</p>
            <details class="mt-2">
              <summary class="text-xs text-blue-600 font-bold cursor-pointer">Ver pista</summary>
              <pre class="font-mono text-sm max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded mt-2">
m = float(input("Metros: "))
print(f"cm = {m*100}")
print(f"mm = {m*1000}")
              </pre>
            </details>
          </div>

          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">2) Calculadora de Propina</h4>
            <p class="text-sm text-slate-600">Pide total y porcentaje de propina. Imprime el monto de propina y total final.</p>
          </div>

          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">3) Repetición de Mensaje</h4>
            <p class="text-sm text-slate-600">Pide un texto y un número <em>n</em>. Muestra el texto repetido <em>n</em> veces (una por línea).</p>
          </div>
        </div>
      `
    },
    {
      id: 'py1-10',
      title: 'Mini Quiz (autoevaluación)',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">1) ¿Cuál de estas es una salida válida?</h4>
            <ul class="list-disc list-inside text-sm text-slate-700 space-y-1">
              <li>print("Hola" + 3)</li>
              <li>print(2 + 3)</li>
              <li>print(nombre)  <span class="text-xs text-slate-500">(sin haber definido nombre)</span></li>
            </ul>
            <details class="mt-2">
              <summary class="text-xs text-blue-600 font-bold cursor-pointer">Respuesta</summary>
              <p class="text-sm">La segunda: <code>print(2 + 3)</code>.</p>
            </details>
          </div>

          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">2) ¿Qué imprime?</h4>
            <pre class="font-mono text-sm max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
nombre = "Ana"
print(f"Hola {nombre}")
            </pre>
            <details class="mt-2">
              <summary class="text-xs text-blue-600 font-bold cursor-pointer">Respuesta</summary>
              <p class="text-sm">Imprime: <code>Hola Ana</code></p>
            </details>
          </div>

          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">3) Verdadero/Falso</h4>
            <p class="text-sm">Python requiere declarar el tipo de una variable antes de usarla.</p>
            <details class="mt-2">
              <summary class="text-xs text-blue-600 font-bold cursor-pointer">Respuesta</summary>
              <p class="text-sm">Falso. El tipado es dinámico.</p>
            </details>
          </div>
        </div>
      `
    },
    {
      id: 'py1-qa',
      title: 'Preguntas y Respuestas',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center space-y-4">
          <h2 class="text-3xl font-bold text-slate-900">¿Dudas o comentarios?</h2>
          <p class="text-slate-600">Abrimos espacio para preguntas sobre instalación, sintaxis básica o los ejercicios.</p>
          <div class="mt-4 grid md:grid-cols-3 gap-4 text-sm max-w-3xl w-full">
            <div class="bg-slate-50 p-3 rounded border">¿Cómo instalo Python?</div>
            <div class="bg-slate-50 p-3 rounded border">¿Cuál editor recomiendan?</div>
            <div class="bg-slate-50 p-3 rounded border">¿Cómo formateo números?</div>
          </div>
        </div>
      `
    },
    {
      id: 'py1-end',
      title: '¡Gracias!',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-16 text-center">
          <div class="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
            <svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-2">Fin del Módulo 1</h3>
          <p class="text-slate-600">En el siguiente módulo profundizaremos en tipos de datos y operadores.</p>
        </div>
      `
    }
  ]
};
