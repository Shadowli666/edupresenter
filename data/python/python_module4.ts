
import { Module } from '../../types';

export const PYTHON_MODULE_4: Module = {
  id: 'py-mod-4',
  title: '4. Bucles y Ciclos (Iteración)',
  description: 'Estructuras repetitivas: While, For, Bucles Anidados y Algoritmos Cíclicos.',
  evaluation: '20% - Taller de Algoritmos',
  slides: [
    {
      id: 'py4-1',
      title: '1. Introducción a la Iteración',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700 text-lg">
            Los bucles nos permiten ejecutar un bloque de código repetidas veces sin tener que escribirlo múltiples veces. Son la base de la automatización en programación.
          </p>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-6 border rounded-xl shadow-sm">
              <h4 class="font-bold text-indigo-800 mb-4">Tipos de Bucles en Python</h4>
              <ul class="space-y-4">
                <li class="flex items-start gap-3">
                  <span class="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs font-bold font-mono">while</span>
                  <div>
                    <strong class="text-sm text-slate-800">Indeterminado</strong>
                    <p class="text-xs text-slate-600">Se repite <em>mientras</em> una condición sea verdadera. No sabemos cuándo terminará exactamente (ej. esperar input del usuario).</p>
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <span class="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs font-bold font-mono">for</span>
                  <div>
                    <strong class="text-sm text-slate-800">Determinado</strong>
                    <p class="text-xs text-slate-600">Se repite una cantidad definida de veces o sobre una colección de elementos (Listas, Rangos, Strings).</p>
                  </div>
                </li>
              </ul>
            </div>

            <div class="bg-slate-900 p-5 rounded-xl flex items-center justify-center">
               <div class="text-center">
                 <div class="text-slate-500 text-xs mb-2 font-mono"># Sin Bucles</div>
                 <div class="text-slate-400 text-xs font-mono">print(1)</div>
                 <div class="text-slate-400 text-xs font-mono">print(2)</div>
                 <div class="text-slate-400 text-xs font-mono">print(3)</div>
                 <div class="text-slate-600 text-xs font-mono my-2">... (1000 líneas más) ...</div>
                 
                 <div class="mt-4 pt-4 border-t border-slate-700">
                    <div class="text-green-400 text-xs mb-2 font-mono"># Con Bucles</div>
                    <div class="text-blue-300 text-xs font-mono">
                      <span class="text-purple-400">for</span> i <span class="text-purple-400">in</span> <span class="text-blue-400">range</span>(<span class="text-blue-400">1000</span>):<br>
                      &nbsp;&nbsp;<span class="text-blue-400">print</span>(i)
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py4-2',
      title: '2. El Bucle While (Mientras)',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Evalúa una condición booleana antes de cada iteración. Si es <code>True</code>, entra. Si es <code>False</code>, termina.
          </p>

          <div class="grid md:grid-cols-2 gap-6 items-center">
             <!-- Standard Logic -->
             <div class="bg-white border p-4 rounded-lg shadow-sm">
                <h4 class="font-bold text-slate-800 mb-2">Lógica Estándar</h4>
                <div class="bg-slate-900 p-3 rounded font-mono text-xs text-slate-300">
                  contador = <span class="text-blue-400">5</span><br>
                  <span class="text-purple-400">while</span> contador > <span class="text-blue-400">0</span>:<br>
                  &nbsp;&nbsp;<span class="text-blue-400">print</span>(f<span class="text-green-400">"Despegue en {contador}"</span>)<br>
                  &nbsp;&nbsp;contador -= <span class="text-blue-400">1</span> <span class="text-gray-500"># Decremento</span><br>
                  <span class="text-blue-400">print</span>(<span class="text-green-400">"¡Fuego!"</span>)
                </div>
             </div>

             <!-- Flowchart -->
             <div class="flex justify-center bg-white p-4 rounded-lg border border-slate-200">
               <div class="mermaid">
                 flowchart TD
                   Start([Inicio]) --> Cond{¿Cont > 0?}
                   Cond -- True --> Print[/Print/]
                   Print --> Dec[Cont -= 1]
                   Dec --> Cond
                   Cond -- False --> End([Fin])
                   style Cond fill:#dcfce7,stroke:#16a34a
               </div>
             </div>
          </div>

          <div class="bg-red-50 border-l-4 border-red-500 p-4 text-sm text-red-800">
            <strong>¡Cuidado con los Ciclos Infinitos!</strong><br>
            Si olvidas modificar la variable de control dentro del bucle (ej. <code>contador -= 1</code>), la condición nunca será False y el programa se congelará.
          </div>
        </div>
      `
    },
    {
      id: 'py4-3',
      title: '3. El Bucle For (Para)',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            En Python, <code>for</code> itera sobre elementos de una secuencia (lista, string, tupla) o un generador numérico.
          </p>

          <div class="grid md:grid-cols-2 gap-6 items-center">
             <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
               <h4 class="font-bold text-blue-900 mb-2 font-mono text-lg">range(start, stop, step)</h4>
               <ul class="list-disc list-inside text-sm text-blue-800 space-y-1">
                 <li><code>range(5)</code>: 0, 1, 2, 3, 4 (Hasta n-1)</li>
                 <li><code>range(2, 6)</code>: 2, 3, 4, 5</li>
                 <li><code>range(0, 10, 2)</code>: 0, 2, 4, 6, 8 (Saltos de 2)</li>
               </ul>
             </div>

             <div class="flex justify-center bg-white p-4 rounded-lg border border-slate-200">
               <div class="mermaid">
                 flowchart TD
                   Start([Inicio]) --> GetNext{¿Hay items?}
                   GetNext -- Sí --> Assign[i = Siguiente]
                   Assign --> Block[Ejecutar Bloque]
                   Block --> GetNext
                   GetNext -- No --> End([Fin])
                   style GetNext fill:#dbeafe,stroke:#2563eb
               </div>
             </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6 mt-4">
            <div class="bg-white border rounded p-4 shadow-sm">
              <strong class="block text-slate-800 mb-2 text-sm">Iterar Strings</strong>
              <div class="bg-slate-900 p-3 rounded font-mono text-xs text-slate-300">
                palabra = <span class="text-green-400">"Python"</span><br>
                <span class="text-purple-400">for</span> letra <span class="text-purple-400">in</span> palabra:<br>
                &nbsp;&nbsp;<span class="text-blue-400">print</span>(letra) <span class="text-gray-500"># Imprime P, y, t...</span>
              </div>
            </div>
            <div class="bg-white border rounded p-4 shadow-sm">
              <strong class="block text-slate-800 mb-2 text-sm">Sumatoria (Acumulador)</strong>
              <div class="bg-slate-900 p-3 rounded font-mono text-xs text-slate-300">
                total = <span class="text-blue-400">0</span><br>
                <span class="text-purple-400">for</span> num <span class="text-purple-400">in</span> <span class="text-blue-400">range</span>(<span class="text-blue-400">1</span>, <span class="text-blue-400">6</span>):<br>
                &nbsp;&nbsp;total += num<br>
                <span class="text-blue-400">print</span>(total) <span class="text-gray-500"># 1+2+3+4+5 = 15</span>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py4-4',
      title: '4. Control de Flujo (Break, Continue)',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            A veces necesitamos alterar el comportamiento normal del ciclo.
          </p>

          <div class="grid md:grid-cols-3 gap-4">
            <!-- Break -->
            <div class="bg-red-50 p-4 rounded border border-red-200">
               <h4 class="text-red-900 font-bold font-mono mb-2">break</h4>
               <p class="text-xs text-red-800 mb-3">Rompe el bucle inmediatamente. Sale de la estructura.</p>
               <div class="bg-white p-2 rounded border border-red-100 font-mono text-[10px]">
                 <span class="text-purple-400">for</span> i <span class="text-purple-400">in</span> <span class="text-blue-400">range</span>(10):<br>
                 &nbsp;&nbsp;<span class="text-purple-400">if</span> i == 5: <span class="text-purple-400">break</span><br>
                 &nbsp;&nbsp;<span class="text-blue-400">print</span>(i)
               </div>
               <p class="text-[10px] text-red-600 mt-1">Imprime 0, 1, 2, 3, 4</p>
            </div>

            <!-- Continue -->
            <div class="bg-blue-50 p-4 rounded border border-blue-200">
               <h4 class="text-blue-900 font-bold font-mono mb-2">continue</h4>
               <p class="text-xs text-blue-800 mb-3">Salta la iteración actual y pasa a la siguiente.</p>
               <div class="bg-white p-2 rounded border border-blue-100 font-mono text-[10px]">
                 <span class="text-purple-400">for</span> i <span class="text-purple-400">in</span> <span class="text-blue-400">range</span>(5):<br>
                 &nbsp;&nbsp;<span class="text-purple-400">if</span> i == 2: <span class="text-purple-400">continue</span><br>
                 &nbsp;&nbsp;<span class="text-blue-400">print</span>(i)
               </div>
               <p class="text-[10px] text-blue-600 mt-1">Imprime 0, 1, 3, 4</p>
            </div>

            <!-- Pass -->
            <div class="bg-gray-50 p-4 rounded border border-gray-200">
               <h4 class="text-gray-900 font-bold font-mono mb-2">pass</h4>
               <p class="text-xs text-gray-800 mb-3">Operación nula. Se usa como marcador de posición (To Do).</p>
               <div class="bg-white p-2 rounded border border-gray-200 font-mono text-[10px]">
                 <span class="text-purple-400">if</span> x > 5:<br>
                 &nbsp;&nbsp;<span class="text-purple-400">pass</span> <span class="text-gray-400"># Pendiente</span><br>
                 <span class="text-purple-400">else</span>:<br>
                 &nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"Ok"</span>)
               </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py4-5',
      title: '5. Bucles Anidados',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">Un bucle dentro de otro. El ciclo interno completa todas sus iteraciones por cada iteración del ciclo externo. Es fundamental para trabajar con matrices o tablas.</p>

          <div class="bg-white border rounded-xl p-6 shadow-sm">
             <h4 class="font-bold text-slate-800 mb-4">Ejemplo: Tabla de Multiplicar</h4>
             <div class="grid md:grid-cols-2 gap-8 items-center">
                <div class="bg-slate-900 p-4 rounded font-mono text-xs text-slate-300">
                   <span class="text-purple-400">for</span> i <span class="text-purple-400">in</span> <span class="text-blue-400">range</span>(1, 4): <span class="text-gray-500"># Externo: 1, 2, 3</span><br>
                   &nbsp;&nbsp;<span class="text-purple-400">for</span> j <span class="text-purple-400">in</span> <span class="text-blue-400">range</span>(1, 4): <span class="text-gray-500"># Interno: 1, 2, 3</span><br>
                   &nbsp;&nbsp;&nbsp;&nbsp;res = i * j<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">print</span>(f<span class="text-green-400">"{i}x{j} = {res}"</span>)
                </div>
                
                <div class="text-xs text-slate-600 font-mono border bg-slate-50 p-2 rounded h-32 overflow-y-auto">
                   1x1 = 1<br>1x2 = 2<br>1x3 = 3<br>
                   2x1 = 2<br>2x2 = 4<br>2x3 = 6<br>
                   3x1 = 3<br>3x2 = 6<br>3x3 = 9
                </div>
             </div>
          </div>
        </div>
      `
    },
    {
      id: 'py4-workshop',
      title: '6. Taller de Algoritmos',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-purple-50 p-4 rounded-lg border border-purple-200 mb-4">
             <p class="text-purple-800 font-bold">Práctica Intensiva</p>
             <p class="text-purple-700 text-sm">Estos ejercicios requieren lógica matemática y bucles. Intente resolverlos sin ver la solución.</p>
          </div>

          <!-- Ex 1: Factorial -->
          <div class="bg-white border rounded-lg shadow-sm">
            <div class="p-4 border-b bg-slate-50">
               <h4 class="font-bold text-slate-800">1. Factorial de un Número</h4>
            </div>
            <div class="p-4 text-sm text-slate-600">
               <p class="mb-4">Calcule el factorial de N (Ej: 5! = 1*2*3*4*5 = 120).</p>
               
               <details class="group">
                 <summary class="inline-flex items-center cursor-pointer text-xs font-bold text-blue-600 bg-blue-50 px-3 py-2 rounded hover:bg-blue-100 transition-colors">
                    <span>Mostrar Solución</span>
                    <svg class="w-4 h-4 ml-1 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                 </summary>
                 <div class="mt-3 bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-300 overflow-x-auto">
                   n = <span class="text-purple-400">int</span>(<span class="text-blue-400">input</span>(<span class="text-green-400">"Numero: "</span>))<br>
                   fact = <span class="text-blue-400">1</span><br>
                   <br>
                   <span class="text-purple-400">for</span> i <span class="text-purple-400">in</span> <span class="text-blue-400">range</span>(<span class="text-blue-400">1</span>, n + <span class="text-blue-400">1</span>):<br>
                   &nbsp;&nbsp;fact = fact * i<br>
                   <br>
                   <span class="text-blue-400">print</span>(f<span class="text-green-400">"El factorial de {n} es {fact}"</span>)
                 </div>
               </details>
            </div>
          </div>

          <!-- Ex 2: Fibonacci -->
          <div class="bg-white border rounded-lg shadow-sm">
            <div class="p-4 border-b bg-slate-50">
               <h4 class="font-bold text-slate-800">2. Sucesión de Fibonacci</h4>
            </div>
            <div class="p-4 text-sm text-slate-600">
               <p class="mb-4">Muestre los primeros N términos de la serie: 0, 1, 1, 2, 3, 5, 8, 13... (Cada número es la suma de los dos anteriores).</p>
               
               <details class="group">
                 <summary class="inline-flex items-center cursor-pointer text-xs font-bold text-blue-600 bg-blue-50 px-3 py-2 rounded hover:bg-blue-100 transition-colors">
                    <span>Mostrar Solución</span>
                    <svg class="w-4 h-4 ml-1 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                 </summary>
                 <div class="mt-3 bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-300 overflow-x-auto">
                   n = <span class="text-purple-400">int</span>(<span class="text-blue-400">input</span>(<span class="text-green-400">"Cuántos términos?: "</span>))<br>
                   a, b = <span class="text-blue-400">0</span>, <span class="text-blue-400">1</span><br>
                   <br>
                   <span class="text-purple-400">for</span> _ <span class="text-purple-400">in</span> <span class="text-blue-400">range</span>(n):<br>
                   &nbsp;&nbsp;<span class="text-blue-400">print</span>(a, end=<span class="text-green-400">", "</span>)<br>
                   &nbsp;&nbsp;temp = a + b<br>
                   &nbsp;&nbsp;a = b<br>
                   &nbsp;&nbsp;b = temp
                 </div>
               </details>
            </div>
          </div>

          <!-- Ex 3: Prime Number -->
          <div class="bg-white border rounded-lg shadow-sm">
            <div class="p-4 border-b bg-slate-50">
               <h4 class="font-bold text-slate-800">3. Detección de Números Primos</h4>
            </div>
            <div class="p-4 text-sm text-slate-600">
               <p class="mb-4">Determine si un número ingresado es primo (divisible solo por 1 y por sí mismo).</p>
               
               <details class="group">
                 <summary class="inline-flex items-center cursor-pointer text-xs font-bold text-blue-600 bg-blue-50 px-3 py-2 rounded hover:bg-blue-100 transition-colors">
                    <span>Mostrar Solución</span>
                    <svg class="w-4 h-4 ml-1 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                 </summary>
                 <div class="mt-3 bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-300 overflow-x-auto">
                   num = <span class="text-purple-400">int</span>(<span class="text-blue-400">input</span>(<span class="text-green-400">"Numero: "</span>))<br>
                   es_primo = <span class="text-blue-400">True</span><br>
                   <br>
                   <span class="text-purple-400">if</span> num < 2:<br>
                   &nbsp;&nbsp;es_primo = <span class="text-blue-400">False</span><br>
                   <span class="text-purple-400">else</span>:<br>
                   &nbsp;&nbsp;<span class="text-gray-500"># Probamos hasta la mitad del número</span><br>
                   &nbsp;&nbsp;<span class="text-purple-400">for</span> i <span class="text-purple-400">in</span> <span class="text-blue-400">range</span>(2, num // 2 + 1):<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">if</span> num % i == 0:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;es_primo = <span class="text-blue-400">False</span><br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">break</span> <span class="text-gray-500"># Si divide, ya no es primo, salimos</span><br>
                   <br>
                   <span class="text-purple-400">if</span> es_primo:<br>
                   &nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"Es Primo"</span>)<br>
                   <span class="text-purple-400">else</span>:<br>
                   &nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"No es Primo"</span>)
                 </div>
               </details>
            </div>
          </div>

          <!-- Ex 4: Pyramid -->
          <div class="bg-white border rounded-lg shadow-sm">
            <div class="p-4 border-b bg-slate-50">
               <h4 class="font-bold text-slate-800">4. Patrón de Pirámide (Anidados)</h4>
            </div>
            <div class="p-4 text-sm text-slate-600">
               <p class="mb-4">Imprima una pirámide de asteriscos de altura N. Ejemplo N=3:<br>*<br>**<br>***</p>
               
               <details class="group">
                 <summary class="inline-flex items-center cursor-pointer text-xs font-bold text-blue-600 bg-blue-50 px-3 py-2 rounded hover:bg-blue-100 transition-colors">
                    <span>Mostrar Solución</span>
                    <svg class="w-4 h-4 ml-1 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                 </summary>
                 <div class="mt-3 bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-300 overflow-x-auto">
                   altura = <span class="text-purple-400">int</span>(<span class="text-blue-400">input</span>(<span class="text-green-400">"Altura: "</span>))<br>
                   <br>
                   <span class="text-purple-400">for</span> i <span class="text-purple-400">in</span> <span class="text-blue-400">range</span>(1, altura + 1):<br>
                   &nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"*"</span> * i) <span class="text-gray-500"># Truco de Python: Multiplicar strings</span>
                 </div>
               </details>
            </div>
          </div>

          <!-- Ex 5: Collatz -->
          <div class="bg-white border rounded-lg shadow-sm">
            <div class="p-4 border-b bg-slate-50">
               <h4 class="font-bold text-slate-800">5. Conjetura de Collatz</h4>
            </div>
            <div class="p-4 text-sm text-slate-600">
               <p class="mb-4">
                 Dado un número N: si es par, divídelo entre 2; si es impar, multiplícalo por 3 y suma 1. Repite hasta llegar a 1.
               </p>
               
               <details class="group">
                 <summary class="inline-flex items-center cursor-pointer text-xs font-bold text-blue-600 bg-blue-50 px-3 py-2 rounded hover:bg-blue-100 transition-colors">
                    <span>Mostrar Solución</span>
                    <svg class="w-4 h-4 ml-1 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                 </summary>
                 <div class="mt-3 bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-300 overflow-x-auto">
                   n = <span class="text-purple-400">int</span>(<span class="text-blue-400">input</span>(<span class="text-green-400">"Numero inicial: "</span>))<br>
                   pasos = <span class="text-blue-400">0</span><br>
                   <br>
                   <span class="text-purple-400">while</span> n > <span class="text-blue-400">1</span>:<br>
                   &nbsp;&nbsp;<span class="text-blue-400">print</span>(n, end=<span class="text-green-400">" -> "</span>)<br>
                   &nbsp;&nbsp;<span class="text-purple-400">if</span> n % 2 == 0:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;n = n // 2<br>
                   &nbsp;&nbsp;<span class="text-purple-400">else</span>:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;n = (3 * n) + 1<br>
                   &nbsp;&nbsp;pasos += 1<br>
                   <br>
                   <span class="text-blue-400">print</span>(<span class="text-blue-400">1</span>)<br>
                   <span class="text-blue-400">print</span>(f<span class="text-green-400">"Terminado en {pasos} pasos."</span>)
                 </div>
               </details>
            </div>
          </div>

        </div>
      `
    },
    {
      id: 'py4-6',
      title: '7. Cláusula else en for/while',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">En Python, los bucles pueden tener <code>else</code>. Se ejecuta cuando el bucle termina <em>sin</em> encontrar un <code>break</code>.</p>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded border shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">Ejemplo con for</h4>
              <pre class="font-mono text-xs max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
nums = [2, 4, 6, 8]
for n in nums:
    if n % 2 == 1:
        print("Impar encontrado")
        break
else:
    print("No hay impares")  # Se ejecuta porque no hubo break
              </pre>
            </div>
            <div class="bg-blue-50 p-4 rounded border border-blue-200 text-sm">
              <h4 class="font-bold text-blue-900 mb-2">Útil para</h4>
              <ul class="list-disc list-inside text-blue-800 text-xs space-y-1">
                <li>Búsquedas con verificación de éxito/fracaso.</li>
                <li>Validaciones en colecciones.</li>
              </ul>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py4-7',
      title: '8. enumerate, range avanzado y zip',
      contentHtml: `
        <div class="space-y-6">
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-white p-4 rounded border shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">enumerate</h4>
              <pre class="font-mono text-xs max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
frutas = ["manzana","pera","uva"]
for i, f in enumerate(frutas, start=1):
    print(i, f)
              </pre>
            </div>
            <div class="bg-white p-4 rounded border shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">range paso negativo</h4>
              <pre class="font-mono text-xs max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
for i in range(10, 0, -2):
    print(i)  # 10, 8, 6, ...
              </pre>
            </div>
            <div class="bg-white p-4 rounded border shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">zip</h4>
              <pre class="font-mono text-xs max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
nombres = ["Ana","Luis"]
edades = [20, 21]
for n, e in zip(nombres, edades):
    print(n, e)
              </pre>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py4-8',
      title: '9. Errores comunes en bucles',
      contentHtml: `
        <div class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded border shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">Off-by-one</h4>
              <pre class="font-mono text-xs max-w-full overflow-x-auto bg-slate-900 text-red-200 p-3 rounded">
# Esperas 1..5
for i in range(1, 5):
    print(i)  # 1..4 (hasta n-1)
              </pre>
              <p class="text-xs text-slate-600">Recuerda que <code>range(stop)</code> no incluye el tope.</p>
            </div>
            <div class="bg-white p-4 rounded border shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">Ciclo infinito</h4>
              <pre class="font-mono text-xs max-w-full overflow-x-auto bg-slate-900 text-red-200 p-3 rounded">
i = 0
while i < 3:
    print(i)
    # i += 1  # Olvidado -> bucle infinito
              </pre>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py4-9',
      title: '10. List Comprehensions (introducción)',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">Ahorra código para construir listas a partir de iteraciones y filtros.</p>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded border shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">Ejemplo</h4>
              <pre class="font-mono text-xs max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
cuadrados = [x*x for x in range(1,6)]  # [1,4,9,16,25]
pares = [x for x in range(10) if x % 2 == 0]
              </pre>
            </div>
            <div class="bg-blue-50 p-4 rounded border border-blue-200 text-sm">
              <h4 class="font-bold text-blue-900 mb-2">Cuándo evitar</h4>
              <ul class="list-disc list-inside text-blue-800 text-xs space-y-1">
                <li>Cuando la lógica es extensa (prefiere un bucle normal).</li>
                <li>Evita anidar demasiados niveles por legibilidad.</li>
              </ul>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py4-10',
      title: '11. Mini Quiz de Bucles',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">1) ¿Qué imprime?</h4>
            <pre class="font-mono text-xs max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
for i in range(3):
    if i == 1:
        continue
    print(i)
            </pre>
            <details class="mt-2">
              <summary class="text-xs text-blue-600 font-bold cursor-pointer">Respuesta</summary>
              <p class="text-sm">Imprime 0, 2.</p>
            </details>
          </div>
        </div>
      `
    },
    {
      id: 'py4-qa',
      title: '12. Preguntas y Respuestas',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center space-y-4">
          <h2 class="text-3xl font-bold text-slate-900">¿Dudas de bucles?</h2>
          <p class="text-slate-600">Repasamos while/for, break/continue/else y comprensiones.</p>
        </div>
      `
    },
    {
      id: 'py4-end',
      title: '13. ¡Gracias!',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-16 text-center">
          <div class="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
            <svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-2">Fin del Módulo 4</h3>
          <p class="text-slate-600">A continuación: Taller de Integración.</p>
        </div>
      `
    }
  ]
};
