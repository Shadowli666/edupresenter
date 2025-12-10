

import { Module } from '../types';

export const PYTHON_MODULE_3: Module = {
  id: 'py-mod-3',
  title: '3. Control de Flujo y Lógica Condicional',
  description: 'Domina la toma de decisiones en Python: if, else, elif y operadores lógicos.',
  evaluation: '0% - Taller Práctico',
  slides: [
    {
      id: 'py3-1',
      title: '1. Introducción al Control de Flujo',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700 text-lg">
            Por defecto, un programa ejecuta instrucciones línea por línea. El <strong>Control de Flujo</strong> nos permite alterar ese orden para tomar decisiones, tal como lo hacemos en la vida real.
          </p>

          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div class="bg-white p-6 border rounded-xl shadow-sm">
              <h4 class="font-bold text-indigo-800 mb-4 border-b pb-2">Analogía Cotidiana</h4>
              <div class="flex items-start gap-3">
                 <div class="text-3xl">☔</div>
                 <div>
                   <p class="text-sm text-slate-600 italic">"Si está lloviendo, entonces llevo un paraguas."</p>
                   <p class="text-xs text-slate-400 mt-1">Si la condición (lluvia) es Falsa, simplemente salgo sin paraguas.</p>
                 </div>
              </div>
            </div>

            <div class="bg-slate-900 p-5 rounded-xl font-mono text-sm text-slate-300 shadow-lg">
              <p class="text-gray-500"># Sintaxis Básica</p>
              <p><span class="text-purple-400">if</span> condicion:</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500"># Bloque indentado</span></p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"Se cumple"</span>)</p>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
             <h5 class="font-bold text-yellow-900 text-sm">⚠️ La Regla de Oro de Python: Indentación</h5>
             <p class="text-xs text-yellow-800">
               A diferencia de C++ o Java que usan llaves <code>{}</code>, Python usa la <strong>sangría (espacios)</strong> para definir qué código pertenece al bloque <code>if</code>.
             </p>
          </div>
        </div>
      `
    },
    {
      id: 'py3-6',
      title: '6. match-case (Python 3.10+ opcional)',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700"><code>match</code> permite un enrutamiento por patrones similar a <em>switch</em> de otros lenguajes, con más poder.</p>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded border shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">Sintaxis básica</h4>
              <pre class="font-mono text-xs max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
cmd = input("Comando: ")
match cmd:
    case "saludar":
        print("Hola!")
    case "salir":
        print("Adiós")
    case _:
        print("Comando desconocido")
              </pre>
            </div>
            <div class="bg-blue-50 p-4 rounded border border-blue-200 text-sm">
              <h4 class="font-bold text-blue-900 mb-2">Cuándo usarlo</h4>
              <ul class="list-disc list-inside text-blue-800 text-xs space-y-1">
                <li>Cuando hay muchas ramas <code>elif</code> por igualdad.</li>
                <li>Para mejorar legibilidad en menús simples.</li>
                <li>No reemplaza lógica compleja; úsalo con moderación.</li>
              </ul>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py3-7',
      title: '7. Patrones y Buenas Prácticas',
      contentHtml: `
        <div class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded border shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">Guard Clauses (salidas tempranas)</h4>
              <pre class="font-mono text-xs max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
def dividir(a, b):
    if b == 0:
        return "Error: división por 0"
    return a / b
              </pre>
              <p class="text-xs text-slate-600 mt-2">Evitan indentaciones profundas y facilitan la lectura.</p>
            </div>
            <div class="bg-white p-4 rounded border shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">Membership y rangos</h4>
              <pre class="font-mono text-xs max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
vocales = {'a','e','i','o','u'}
ch = input("Letra: ")
if ch.lower() in vocales:
    print("Vocal")
              </pre>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py3-8',
      title: '8. Mini-Quiz de Condicionales',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">1) ¿Cuál imprime "Sí"?</h4>
            <pre class="font-mono text-xs max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
x = 0
if x:
    print("Sí")
            </pre>
            <details class="mt-2">
              <summary class="text-xs text-blue-600 font-bold cursor-pointer">Respuesta</summary>
              <p class="text-sm">Ninguna, <code>0</code> es falsy; no imprime nada.</p>
            </details>
          </div>
          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">2) Resultado</h4>
            <pre class="font-mono text-xs max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
nota = 85
print("A") if nota >= 90 else print("B") if nota >= 80 else print("C")
            </pre>
            <details class="mt-2">
              <summary class="text-xs text-blue-600 font-bold cursor-pointer">Respuesta</summary>
              <p class="text-sm">Imprime <code>B</code>.</p>
            </details>
          </div>
        </div>
      `
    },
    {
      id: 'py3-2',
      title: '2. Sentencia IF y Operadores',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            La sentencia <code>if</code> evalúa una expresión booleana. Si es <code>True</code>, ejecuta el código. Usamos <strong>Operadores de Comparación</strong> para crear estas expresiones.
          </p>

          <!-- Operators Grid -->
          <div class="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
             <div class="bg-white p-2 border rounded text-center"><span class="font-mono font-bold text-blue-600">==</span> Igual a</div>
             <div class="bg-white p-2 border rounded text-center"><span class="font-mono font-bold text-blue-600">!=</span> No igual a</div>
             <div class="bg-white p-2 border rounded text-center"><span class="font-mono font-bold text-blue-600">></span> Mayor que</div>
             <div class="bg-white p-2 border rounded text-center"><span class="font-mono font-bold text-blue-600"><</span> Menor que</div>
             <div class="bg-white p-2 border rounded text-center"><span class="font-mono font-bold text-blue-600">>=</span> Mayor o igual</div>
             <div class="bg-white p-2 border rounded text-center"><span class="font-mono font-bold text-blue-600"><=</span> Menor o igual</div>
          </div>

          <!-- Examples -->
          <div class="grid md:grid-cols-2 gap-6 mt-4">
            <div class="bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-300">
               <strong class="block text-slate-500 mb-2"># Ej 1: Verificación de Edad</strong>
               edad = <span class="text-purple-400">int</span>(<span class="text-blue-400">input</span>(<span class="text-green-400">"Tu edad: "</span>))<br>
               <span class="text-purple-400">if</span> edad >= <span class="text-blue-400">18</span>:<br>
               &nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"Eres mayor de edad."</span>)
            </div>

            <div class="bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-300">
               <strong class="block text-slate-500 mb-2"># Ej 2: Adivinar Número</strong>
               secreto = <span class="text-blue-400">7</span><br>
               intento = <span class="text-purple-400">int</span>(<span class="text-blue-400">input</span>(<span class="text-green-400">"Adivina (1-10): "</span>))<br>
               <span class="text-purple-400">if</span> intento == secreto:<br>
               &nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"¡Ganaste!"</span>)
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py3-3',
      title: '3. Rutas Alternativas: ELSE y ELIF',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Rara vez la vida es solo "Si". A menudo necesitamos un "Si no..." (else) o múltiples opciones (elif).
          </p>

          <div class="space-y-4">
             <!-- ELSE Example -->
             <div class="flex flex-col md:flex-row gap-4 border rounded-lg p-4 bg-white shadow-sm">
                <div class="flex-1">
                   <h4 class="font-bold text-purple-800 mb-2">Cláusula ELSE (Si no)</h4>
                   <p class="text-xs text-slate-600 mb-2">Se ejecuta cuando la condición del <code>if</code> es Falsa.</p>
                   <div class="bg-slate-900 p-3 rounded font-mono text-xs text-slate-300">
                      num = <span class="text-purple-400">int</span>(<span class="text-blue-400">input</span>())<br>
                      <span class="text-purple-400">if</span> num % <span class="text-blue-400">2</span> == <span class="text-blue-400">0</span>:<br>
                      &nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"Par"</span>)<br>
                      <span class="text-purple-400">else</span>:<br>
                      &nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"Impar"</span>)
                   </div>
                </div>
             </div>

             <!-- ELIF Example -->
             <div class="flex flex-col md:flex-row gap-4 border rounded-lg p-4 bg-white shadow-sm">
                <div class="flex-1">
                   <h4 class="font-bold text-blue-800 mb-2">Cláusula ELIF (Else If - Si no, si...)</h4>
                   <p class="text-xs text-slate-600 mb-2">Evalúa múltiples condiciones en secuencia. Se detiene en la primera verdadera.</p>
                   <div class="bg-slate-900 p-3 rounded font-mono text-xs text-slate-300">
                      nota = <span class="text-purple-400">int</span>(<span class="text-blue-400">input</span>(<span class="text-green-400">"Nota (0-100): "</span>))<br>
                      <span class="text-purple-400">if</span> nota >= <span class="text-blue-400">90</span>: <span class="text-blue-400">print</span>(<span class="text-green-400">"A"</span>)<br>
                      <span class="text-purple-400">elif</span> nota >= <span class="text-blue-400">80</span>: <span class="text-blue-400">print</span>(<span class="text-green-400">"B"</span>)<br>
                      <span class="text-purple-400">elif</span> nota >= <span class="text-blue-400">70</span>: <span class="text-blue-400">print</span>(<span class="text-green-400">"C"</span>)<br>
                      <span class="text-purple-400">else</span>: <span class="text-blue-400">print</span>(<span class="text-green-400">"F"</span>)
                   </div>
                </div>
             </div>
          </div>
        </div>
      `
    },
    {
      id: 'py3-4',
      title: '4. Lógica Avanzada',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Podemos combinar condiciones usando <strong>Operadores Lógicos</strong> o anidando sentencias <code>if</code>.
          </p>

          <div class="grid md:grid-cols-3 gap-4 text-center text-sm mb-4">
             <div class="bg-blue-50 p-3 rounded border border-blue-200">
               <span class="block font-mono font-bold text-blue-700 text-lg">and</span>
               Ambas deben ser True
             </div>
             <div class="bg-blue-50 p-3 rounded border border-blue-200">
               <span class="block font-mono font-bold text-blue-700 text-lg">or</span>
               Al menos una es True
             </div>
             <div class="bg-blue-50 p-3 rounded border border-blue-200">
               <span class="block font-mono font-bold text-blue-700 text-lg">not</span>
               Invierte el valor
             </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
             <!-- Nested -->
             <div class="bg-white border p-4 rounded-lg shadow-sm">
               <h4 class="font-bold text-slate-800 mb-2">Condicionales Anidados</h4>
               <p class="text-xs text-gray-500 mb-2">Un if dentro de otro if.</p>
               <div class="bg-slate-900 p-3 rounded font-mono text-[10px] text-slate-300">
                  <span class="text-purple-400">if</span> edad >= <span class="text-blue-400">12</span>:<br>
                  &nbsp;&nbsp;<span class="text-purple-400">if</span> altura >= <span class="text-blue-400">140</span>:<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"Pasa"</span>)<br>
                  &nbsp;&nbsp;<span class="text-purple-400">else</span>:<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"Muy bajo"</span>)<br>
                  <span class="text-purple-400">else</span>:<br>
                  &nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"Muy joven"</span>)
               </div>
             </div>

             <!-- Logical Operators -->
             <div class="bg-white border p-4 rounded-lg shadow-sm relative overflow-hidden">
               <div class="absolute top-0 right-0 bg-green-500 text-white text-xs px-2 py-1 rounded-bl font-bold">Recomendado</div>
               <h4 class="font-bold text-slate-800 mb-2">Con Operador Lógico</h4>
               <p class="text-xs text-gray-500 mb-2">Más limpio y legible.</p>
               <div class="bg-slate-900 p-3 rounded font-mono text-[10px] text-slate-300 h-full">
                  <span class="text-purple-400">if</span> edad >= <span class="text-blue-400">12</span> <span class="text-purple-400">and</span> altura >= <span class="text-blue-400">140</span>:<br>
                  &nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"Pasa"</span>)<br>
                  <span class="text-purple-400">else</span>:<br>
                  &nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"No cumples requisitos"</span>)
               </div>
             </div>
          </div>
        </div>
      `
    },
    {
      id: 'py3-5-extra',
      title: '5. Listas, Strings y Operador Ternario',
      contentHtml: `
        <div class="space-y-6">
          <!-- Membership Operators -->
          <div class="bg-white border rounded-lg p-4 shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">Operadores de Pertenencia (Listas y Strings)</h4>
            <p class="text-sm text-slate-600 mb-3">El operador <code>in</code> verifica si un valor existe dentro de una secuencia (Lista, Tupla, String).</p>
            
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-slate-900 p-3 rounded font-mono text-xs text-slate-300">
                <span class="text-gray-500"># En Listas</span><br>
                invitados = [<span class="text-green-400">"Ana"</span>, <span class="text-green-400">"Luis"</span>]<br>
                <span class="text-purple-400">if</span> <span class="text-green-400">"Pepe"</span> <span class="text-purple-400">not in</span> invitados:<br>
                &nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"No invitado"</span>)
              </div>
              <div class="bg-slate-900 p-3 rounded font-mono text-xs text-slate-300">
                <span class="text-gray-500"># En Strings</span><br>
                email = <span class="text-green-400">"usuario@gmail.com"</span><br>
                <span class="text-purple-400">if</span> <span class="text-green-400">"@"</span> <span class="text-purple-400">in</span> email:<br>
                &nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"Válido"</span>)
              </div>
            </div>
          </div>

          <!-- Ternary Operator -->
          <div class="bg-purple-50 border border-purple-200 rounded-lg p-4 shadow-sm">
            <div class="flex justify-between items-start">
              <div>
                <h4 class="font-bold text-purple-900 mb-2">Operador Ternario (If en una línea)</h4>
                <p class="text-sm text-purple-800 mb-2">Permite asignar valores condicionales en una sola línea de código. Es ideal para asignaciones simples.</p>
              </div>
              <span class="bg-purple-200 text-purple-800 text-[10px] px-2 py-1 rounded font-bold uppercase">Pythonic</span>
            </div>
            
            <div class="bg-white p-3 rounded border border-purple-100 font-mono text-xs text-slate-700 mt-2">
              <span class="text-gray-500"># Estructura: valor_si_true if condicion else valor_si_false</span><br>
              edad = 20<br>
              status = <span class="text-green-400">"Mayor"</span> <span class="text-purple-400">if</span> edad >= 18 <span class="text-purple-400">else</span> <span class="text-green-400">"Menor"</span><br>
              <span class="text-blue-400">print</span>(status) <span class="text-gray-500"># Imprime "Mayor"</span>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py3-5',
      title: '6. Taller Práctico',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-indigo-50 p-4 rounded-lg border border-indigo-200 mb-4">
             <p class="text-indigo-800 font-bold">Instrucciones</p>
             <p class="text-indigo-700 text-sm">Intente resolver estos ejercicios en su editor antes de ver la solución.</p>
          </div>

          <!-- Exercise 1 -->
          <div class="bg-white border rounded-lg shadow-sm">
            <div class="p-4 border-b bg-slate-50">
               <h4 class="font-bold text-slate-800">1. Calculadora de Descuentos</h4>
            </div>
            <div class="p-4 text-sm text-slate-600">
               <p class="mb-4">Pide al usuario el monto total de una compra. Si el monto es mayor a 100, aplica un descuento del 10%. Si es mayor a 50, aplica un 5%. De lo contrario, no hay descuento. Muestra el total a pagar.</p>
               
               <details class="group">
                 <summary class="inline-flex items-center cursor-pointer text-xs font-bold text-blue-600 bg-blue-50 px-3 py-2 rounded hover:bg-blue-100 transition-colors">
                    <span>Mostrar Solución</span>
                    <svg class="w-4 h-4 ml-1 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                 </summary>
                 <div class="mt-3 bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-300 overflow-x-auto">
                   monto = <span class="text-purple-400">float</span>(<span class="text-blue-400">input</span>(<span class="text-green-400">"Monto de compra: "</span>))<br>
                   <br>
                   <span class="text-purple-400">if</span> monto > <span class="text-blue-400">100</span>:<br>
                   &nbsp;&nbsp;descuento = <span class="text-blue-400">0.10</span><br>
                   <span class="text-purple-400">elif</span> monto > <span class="text-blue-400">50</span>:<br>
                   &nbsp;&nbsp;descuento = <span class="text-blue-400">0.05</span><br>
                   <span class="text-purple-400">else</span>:<br>
                   &nbsp;&nbsp;descuento = <span class="text-blue-400">0</span><br>
                   <br>
                   total = monto - (monto * descuento)<br>
                   <span class="text-blue-400">print</span>(f<span class="text-green-400">"Total a pagar: \${total}"</span>)
                 </div>
               </details>
            </div>
          </div>

          <!-- Exercise 2 -->
          <div class="bg-white border rounded-lg shadow-sm">
            <div class="p-4 border-b bg-slate-50">
               <h4 class="font-bold text-slate-800">2. Año Bisiesto</h4>
            </div>
            <div class="p-4 text-sm text-slate-600">
               <p class="mb-4">Pide al usuario que ingrese un año. Determina si es bisiesto (divisible por 4, excepto si es divisible por 100 pero no por 400).</p>
               
               <details class="group">
                 <summary class="inline-flex items-center cursor-pointer text-xs font-bold text-blue-600 bg-blue-50 px-3 py-2 rounded hover:bg-blue-100 transition-colors">
                    <span>Mostrar Solución</span>
                    <svg class="w-4 h-4 ml-1 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                 </summary>
                 <div class="mt-3 bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-300 overflow-x-auto">
                   year = <span class="text-purple-400">int</span>(<span class="text-blue-400">input</span>(<span class="text-green-400">"Ingrese el año: "</span>))<br>
                   <br>
                   <span class="text-purple-400">if</span> (year % <span class="text-blue-400">4</span> == <span class="text-blue-400">0</span> <span class="text-purple-400">and</span> year % <span class="text-blue-400">100</span> != <span class="text-blue-400">0</span>) <span class="text-purple-400">or</span> (year % <span class="text-blue-400">400</span> == <span class="text-blue-400">0</span>):<br>
                   &nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"Es un año bisiesto."</span>)<br>
                   <span class="text-purple-400">else</span>:<br>
                   &nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"No es bisiesto."</span>)
                 </div>
               </details>
            </div>
          </div>

          <!-- Exercise 3 -->
          <div class="bg-white border rounded-lg shadow-sm">
            <div class="p-4 border-b bg-slate-50">
               <h4 class="font-bold text-slate-800">3. Clasificación de Triángulos</h4>
            </div>
            <div class="p-4 text-sm text-slate-600">
               <p class="mb-4">Pide las longitudes de los 3 lados. Determina si es Equilátero (3 iguales), Isósceles (2 iguales) o Escaleno (ninguno igual).</p>
               
               <details class="group">
                 <summary class="inline-flex items-center cursor-pointer text-xs font-bold text-blue-600 bg-blue-50 px-3 py-2 rounded hover:bg-blue-100 transition-colors">
                    <span>Mostrar Solución</span>
                    <svg class="w-4 h-4 ml-1 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                 </summary>
                 <div class="mt-3 bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-300 overflow-x-auto">
                   l1 = <span class="text-purple-400">float</span>(<span class="text-blue-400">input</span>(<span class="text-green-400">"Lado 1: "</span>))<br>
                   l2 = <span class="text-purple-400">float</span>(<span class="text-blue-400">input</span>(<span class="text-green-400">"Lado 2: "</span>))<br>
                   l3 = <span class="text-purple-400">float</span>(<span class="text-blue-400">input</span>(<span class="text-green-400">"Lado 3: "</span>))<br>
                   <br>
                   <span class="text-purple-400">if</span> l1 == l2 == l3:<br>
                   &nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"Equilátero"</span>)<br>
                   <span class="text-purple-400">elif</span> l1 == l2 <span class="text-purple-400">or</span> l1 == l3 <span class="text-purple-400">or</span> l2 == l3:<br>
                   &nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"Isósceles"</span>)<br>
                   <span class="text-purple-400">else</span>:<br>
                   &nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"Escaleno"</span>)
                 </div>
               </details>
            </div>
          </div>

           <!-- Exercise 4 -->
          <div class="bg-white border rounded-lg shadow-sm">
            <div class="p-4 border-b bg-slate-50">
               <h4 class="font-bold text-slate-800">4. Inicio de Sesión</h4>
            </div>
            <div class="p-4 text-sm text-slate-600">
               <p class="mb-4">Define un usuario y contraseña correctos. Pide credenciales al usuario y verifica si coinciden para dar la bienvenida o mostrar error.</p>
               
               <details class="group">
                 <summary class="inline-flex items-center cursor-pointer text-xs font-bold text-blue-600 bg-blue-50 px-3 py-2 rounded hover:bg-blue-100 transition-colors">
                    <span>Mostrar Solución</span>
                    <svg class="w-4 h-4 ml-1 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                 </summary>
                 <div class="mt-3 bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-300 overflow-x-auto">
                   USER_DB = <span class="text-green-400">"admin"</span><br>
                   PASS_DB = <span class="text-green-400">"secret123"</span><br>
                   <br>
                   usuario = <span class="text-blue-400">input</span>(<span class="text-green-400">"Usuario: "</span>)<br>
                   password = <span class="text-blue-400">input</span>(<span class="text-green-400">"Contraseña: "</span>)<br>
                   <br>
                   <span class="text-purple-400">if</span> usuario == USER_DB <span class="text-purple-400">and</span> password == PASS_DB:<br>
                   &nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"¡Acceso concedido!"</span>)<br>
                   <span class="text-purple-400">else</span>:<br>
                   &nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"Credenciales incorrectas"</span>)
                 </div>
               </details>
            </div>
          </div>

          <!-- Exercise 5 (New) -->
          <div class="bg-white border rounded-lg shadow-sm">
            <div class="p-4 border-b bg-slate-50">
               <h4 class="font-bold text-slate-800">5. Calculadora de IMC (Lógica Matemática)</h4>
            </div>
            <div class="p-4 text-sm text-slate-600">
               <p class="mb-4">
                 Pida peso (kg) y altura (m). Calcule el IMC = $Peso / Altura^2$.<br>
                 Clasifique: < 18.5 (Bajo peso), 18.5-24.9 (Normal), 25-29.9 (Sobrepeso), >= 30 (Obesidad).
               </p>
               
               <details class="group">
                 <summary class="inline-flex items-center cursor-pointer text-xs font-bold text-blue-600 bg-blue-50 px-3 py-2 rounded hover:bg-blue-100 transition-colors">
                    <span>Mostrar Solución</span>
                    <svg class="w-4 h-4 ml-1 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                 </summary>
                 <div class="mt-3 bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-300 overflow-x-auto">
                   peso = <span class="text-purple-400">float</span>(<span class="text-blue-400">input</span>(<span class="text-green-400">"Peso (kg): "</span>))<br>
                   altura = <span class="text-purple-400">float</span>(<span class="text-blue-400">input</span>(<span class="text-green-400">"Altura (m): "</span>))<br>
                   imc = peso / (altura ** <span class="text-blue-400">2</span>)<br>
                   <span class="text-blue-400">print</span>(f<span class="text-green-400">"IMC: {imc:.2f}"</span>)<br>
                   <br>
                   <span class="text-purple-400">if</span> imc < <span class="text-blue-400">18.5</span>: <span class="text-blue-400">print</span>(<span class="text-green-400">"Bajo peso"</span>)<br>
                   <span class="text-purple-400">elif</span> imc < <span class="text-blue-400">25</span>: <span class="text-blue-400">print</span>(<span class="text-green-400">"Peso Normal"</span>)<br>
                   <span class="text-purple-400">elif</span> imc < <span class="text-blue-400">30</span>: <span class="text-blue-400">print</span>(<span class="text-green-400">"Sobrepeso"</span>)<br>
                   <span class="text-purple-400">else</span>: <span class="text-blue-400">print</span>(<span class="text-green-400">"Obesidad"</span>)
                 </div>
               </details>
            </div>
          </div>

          <!-- Exercise 6 (New) -->
          <div class="bg-white border rounded-lg shadow-sm">
            <div class="p-4 border-b bg-slate-50">
               <h4 class="font-bold text-slate-800">6. Cuadrantes del Plano (Lógica AND)</h4>
            </div>
            <div class="p-4 text-sm text-slate-600">
               <p class="mb-4">
                 Pida coordenadas X e Y. Determine en qué cuadrante está el punto (I, II, III, IV), si está en el origen (0,0) o sobre un eje.
                 <br><span class="text-xs text-gray-500 italic">Tip: Cuadrante I es X>0 y Y>0.</span>
               </p>
               
               <details class="group">
                 <summary class="inline-flex items-center cursor-pointer text-xs font-bold text-blue-600 bg-blue-50 px-3 py-2 rounded hover:bg-blue-100 transition-colors">
                    <span>Mostrar Solución</span>
                    <svg class="w-4 h-4 ml-1 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                 </summary>
                 <div class="mt-3 bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-300 overflow-x-auto">
                   x = <span class="text-purple-400">float</span>(<span class="text-blue-400">input</span>(<span class="text-green-400">"X: "</span>))<br>
                   y = <span class="text-purple-400">float</span>(<span class="text-blue-400">input</span>(<span class="text-green-400">"Y: "</span>))<br>
                   <br>
                   <span class="text-purple-400">if</span> x == <span class="text-blue-400">0</span> <span class="text-purple-400">and</span> y == <span class="text-blue-400">0</span>: <span class="text-blue-400">print</span>(<span class="text-green-400">"Origen"</span>)<br>
                   <span class="text-purple-400">elif</span> x == <span class="text-blue-400">0</span> <span class="text-purple-400">or</span> y == <span class="text-blue-400">0</span>: <span class="text-blue-400">print</span>(<span class="text-green-400">"Sobre un eje"</span>)<br>
                   <span class="text-purple-400">elif</span> x > <span class="text-blue-400">0</span> <span class="text-purple-400">and</span> y > <span class="text-blue-400">0</span>: <span class="text-blue-400">print</span>(<span class="text-green-400">"Cuadrante I"</span>)<br>
                   <span class="text-purple-400">elif</span> x < <span class="text-blue-400">0</span> <span class="text-purple-400">and</span> y > <span class="text-blue-400">0</span>: <span class="text-blue-400">print</span>(<span class="text-green-400">"Cuadrante II"</span>)<br>
                   <span class="text-purple-400">elif</span> x < <span class="text-blue-400">0</span> <span class="text-purple-400">and</span> y < <span class="text-blue-400">0</span>: <span class="text-blue-400">print</span>(<span class="text-green-400">"Cuadrante III"</span>)<br>
                   <span class="text-purple-400">else</span>: <span class="text-blue-400">print</span>(<span class="text-green-400">"Cuadrante IV"</span>)
                 </div>
               </details>
            </div>
          </div>

          <!-- Exercise 7 (New) -->
          <div class="bg-white border rounded-lg shadow-sm">
            <div class="p-4 border-b bg-slate-50">
               <h4 class="font-bold text-slate-800">7. Ecuación Cuadrática (Discriminante)</h4>
            </div>
            <div class="p-4 text-sm text-slate-600">
               <p class="mb-4">
                 Dada una ecuación $ax^2 + bx + c = 0$, calcule el discriminante $D = b^2 - 4ac$.<br>
                 Determine la naturaleza de sus raíces:
                 <br>- Si D > 0: Dos raíces reales diferentes.
                 <br>- Si D = 0: Una raíz real única.
                 <br>- Si D < 0: No tiene raíces reales (Complejas).
               </p>
               
               <details class="group">
                 <summary class="inline-flex items-center cursor-pointer text-xs font-bold text-blue-600 bg-blue-50 px-3 py-2 rounded hover:bg-blue-100 transition-colors">
                    <span>Mostrar Solución</span>
                    <svg class="w-4 h-4 ml-1 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                 </summary>
                 <div class="mt-3 bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-300 overflow-x-auto">
                   a = <span class="text-purple-400">float</span>(<span class="text-blue-400">input</span>(<span class="text-green-400">"a: "</span>))<br>
                   b = <span class="text-purple-400">float</span>(<span class="text-blue-400">input</span>(<span class="text-green-400">"b: "</span>))<br>
                   c = <span class="text-purple-400">float</span>(<span class="text-blue-400">input</span>(<span class="text-green-400">"c: "</span>))<br>
                   <br>
                   discriminante = (b**<span class="text-blue-400">2</span>) - (<span class="text-blue-400">4</span>*a*c)<br>
                   <br>
                   <span class="text-purple-400">if</span> discriminante > <span class="text-blue-400">0</span>:<br>
                   &nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"2 Raíces Reales Distintas"</span>)<br>
                   <span class="text-purple-400">elif</span> discriminante == <span class="text-blue-400">0</span>:<br>
                   &nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"1 Raíz Real Única (Doble)"</span>)<br>
                   <span class="text-purple-400">else</span>:<br>
                   &nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"Raíces Complejas (Imaginarias)"</span>)
                 </div>
               </details>
            </div>
          </div>

          <!-- Exercise 8 (New) -->
          <div class="bg-white border rounded-lg shadow-sm">
            <div class="p-4 border-b bg-slate-50">
               <h4 class="font-bold text-slate-800">8. Factura de Electricidad (Tarifa Escalonada)</h4>
            </div>
            <div class="p-4 text-sm text-slate-600">
               <p class="mb-4">
                 Calcule el costo total de electricidad según el consumo en kWh:
                 <br>- Primeros 100 kWh: $0.50 c/u
                 <br>- Siguientes 200 kWh (de 101 a 300): $0.75 c/u
                 <br>- Exceso sobre 300 kWh: $1.00 c/u
                 <br><span class="italic text-xs">Ej: 350 kWh = (100*0.5) + (200*0.75) + (50*1.0)</span>
               </p>
               
               <details class="group">
                 <summary class="inline-flex items-center cursor-pointer text-xs font-bold text-blue-600 bg-blue-50 px-3 py-2 rounded hover:bg-blue-100 transition-colors">
                    <span>Mostrar Solución</span>
                    <svg class="w-4 h-4 ml-1 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                 </summary>
                 <div class="mt-3 bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-300 overflow-x-auto">
                   kwh = <span class="text-purple-400">int</span>(<span class="text-blue-400">input</span>(<span class="text-green-400">"Consumo kWh: "</span>))<br>
                   total = <span class="text-blue-400">0</span><br>
                   <br>
                   <span class="text-purple-400">if</span> kwh <= <span class="text-blue-400">100</span>:<br>
                   &nbsp;&nbsp;total = kwh * <span class="text-blue-400">0.50</span><br>
                   <span class="text-purple-400">elif</span> kwh <= <span class="text-blue-400">300</span>:<br>
                   &nbsp;&nbsp;<span class="text-gray-500"># 100 primeros + resto</span><br>
                   &nbsp;&nbsp;total = (<span class="text-blue-400">100</span> * <span class="text-blue-400">0.50</span>) + ((kwh - <span class="text-blue-400">100</span>) * <span class="text-blue-400">0.75</span>)<br>
                   <span class="text-purple-400">else</span>:<br>
                   &nbsp;&nbsp;<span class="text-gray-500"># 100 primeros + 200 siguientes + exceso</span><br>
                   &nbsp;&nbsp;total = (<span class="text-blue-400">100</span> * <span class="text-blue-400">0.50</span>) + (<span class="text-blue-400">200</span> * <span class="text-blue-400">0.75</span>) + ((kwh - <span class="text-blue-400">300</span>) * <span class="text-blue-400">1.0</span>)<br>
                   <br>
                   <span class="text-blue-400">print</span>(f<span class="text-green-400">"Total a pagar: \${total:.2f}"</span>)
                 </div>
               </details>
            </div>
          </div>

        </div>
      `
    },
    {
      id: 'py3-end',
      title: '7. Conclusiones',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-6">
             <svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
          </div>
          
          <h3 class="text-2xl font-bold text-slate-900 mb-6">Resumen</h3>
          
          <div class="grid md:grid-cols-3 gap-4 max-w-4xl w-full">
             <div class="bg-white p-4 border rounded shadow-sm">
               <strong class="block text-slate-800 mb-2">Estructuras</strong>
               <p class="text-sm text-gray-600">Dominamos <code>if</code>, <code>elif</code> y <code>else</code> para crear caminos alternativos.</p>
             </div>
             <div class="bg-white p-4 border rounded shadow-sm">
               <strong class="block text-slate-800 mb-2">Lógica</strong>
               <p class="text-sm text-gray-600">Usamos <code>and/or/not</code> para evitar anidamientos profundos y código sucio.</p>
             </div>
             <div class="bg-white p-4 border rounded shadow-sm">
               <strong class="block text-slate-800 mb-2">Siguiente Paso</strong>
               <p class="text-sm text-gray-600">En el próximo módulo veremos <strong>Bucles</strong> para repetir estas decisiones automáticamente.</p>
             </div>
          </div>
        </div>
      `
    }
    ,
    {
      id: 'py3-qa',
      title: '8. Preguntas y Respuestas',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center space-y-4">
          <h2 class="text-3xl font-bold text-slate-900">¿Dudas con if/elif/else?</h2>
          <p class="text-slate-600">Revisamos casos límite, anidamiento, y operadores lógicos.</p>
        </div>
      `
    },
    {
      id: 'py3-thanks',
      title: '9. ¡Gracias!',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-16 text-center">
          <div class="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
            <svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-2">Fin del Módulo 3</h3>
          <p class="text-slate-600">Siguiente: Bucles y Ciclos.</p>
        </div>
      `
    }
  ]
};

