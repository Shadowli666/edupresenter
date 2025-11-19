
import { Module } from '../types';

export const PROG_MODULE_4: Module = {
  id: 'prog-mod-4',
  title: '4. Arreglos y Vectores',
  description: 'Estructuras de datos estáticas: Vectores, Matrices y Algoritmos en C++.',
  evaluation: '10% - Taller de Codificación',
  slides: [
    {
      id: 'p4-1',
      title: 'Vectores (Unidimensionales)',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">Un vector (Array) es una estructura de memoria estática que almacena múltiples elementos del <strong>mismo tipo</strong> en bloques contiguos.</p>
          
          <!-- Visual Array -->
          <div class="bg-white p-6 rounded-xl border shadow-sm overflow-x-auto flex flex-col items-center">
            <p class="font-mono font-bold text-slate-500 mb-2 self-start">int notas[5];</p>
            <div class="flex">
              <div class="text-center mr-1 group">
                <div class="w-12 h-12 border-2 border-slate-400 bg-slate-50 group-hover:bg-blue-50 group-hover:border-blue-400 transition-colors flex items-center justify-center font-bold text-slate-800">18</div>
                <span class="text-xs text-slate-400 font-mono group-hover:text-blue-600">[0]</span>
              </div>
              <div class="text-center mr-1 group">
                <div class="w-12 h-12 border-2 border-slate-400 bg-slate-50 group-hover:bg-blue-50 group-hover:border-blue-400 transition-colors flex items-center justify-center font-bold text-slate-800">20</div>
                <span class="text-xs text-slate-400 font-mono group-hover:text-blue-600">[1]</span>
              </div>
              <div class="text-center mr-1 group">
                <div class="w-12 h-12 border-2 border-slate-400 bg-slate-50 group-hover:bg-blue-50 group-hover:border-blue-400 transition-colors flex items-center justify-center font-bold text-slate-800">15</div>
                <span class="text-xs text-slate-400 font-mono group-hover:text-blue-600">[2]</span>
              </div>
              <div class="text-center mr-1 group">
                <div class="w-12 h-12 border-2 border-slate-400 bg-slate-50 group-hover:bg-blue-50 group-hover:border-blue-400 transition-colors flex items-center justify-center font-bold text-slate-800">12</div>
                <span class="text-xs text-slate-400 font-mono group-hover:text-blue-600">[3]</span>
              </div>
              <div class="text-center group">
                <div class="w-12 h-12 border-2 border-slate-400 bg-slate-50 group-hover:bg-blue-50 group-hover:border-blue-400 transition-colors flex items-center justify-center font-bold text-slate-800">19</div>
                <span class="text-xs text-slate-400 font-mono group-hover:text-blue-600">[4]</span>
              </div>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
             <div class="bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-300">
               <p class="text-green-400 mb-2">// Declaración en C++</p>
               <p><span class="text-purple-400">int</span> numeros[10]; <span class="text-gray-500">// Vacío</span></p>
               <p><span class="text-purple-400">float</span> precios[] = {10.5, 20.0}; <span class="text-gray-500">// Inicializado</span></p>
               <p class="mt-2"><span class="text-green-400">// Acceso</span></p>
               <p>numeros[0] = 5;</p>
               <p>cout << precios[1];</p>
             </div>

             <div class="bg-blue-50 p-4 rounded border-l-4 border-blue-500 text-sm text-blue-900 flex flex-col justify-center">
                <strong>Características Clave:</strong>
                <ul class="list-disc list-inside mt-2 space-y-1 text-blue-800">
                  <li>Tamaño fijo (no crece en ejecución).</li>
                  <li>Acceso directo O(1) vía índice.</li>
                  <li>Los índices siempre empiezan en 0.</li>
                </ul>
             </div>
          </div>
        </div>
      `
    },
    {
      id: 'p4-2',
      title: 'Matrices (Bidimensionales)',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">Una matriz es un "vector de vectores". Se utiliza para representar tablas, mapas de juego o imágenes.</p>

          <div class="flex justify-center">
             <div class="bg-white p-4 rounded border shadow-sm inline-block relative">
               <span class="absolute top-2 right-2 text-xs font-mono text-slate-400">mat[3][2]</span>
               <div class="grid grid-cols-3 gap-1 text-center font-mono text-sm">
                 <!-- Headers -->
                 <div></div>
                 <div class="text-xs text-gray-400 font-bold">Col 0</div>
                 <div class="text-xs text-gray-400 font-bold">Col 1</div>
                 
                 <!-- Row 0 -->
                 <div class="text-xs text-gray-400 flex items-center justify-end pr-2 font-bold">Fila 0</div>
                 <div class="w-12 h-12 border bg-indigo-50 flex items-center justify-center font-bold text-indigo-900">0,0</div>
                 <div class="w-12 h-12 border bg-indigo-50 flex items-center justify-center font-bold text-indigo-900">0,1</div>

                 <!-- Row 1 -->
                 <div class="text-xs text-gray-400 flex items-center justify-end pr-2 font-bold">Fila 1</div>
                 <div class="w-12 h-12 border bg-indigo-50 flex items-center justify-center font-bold text-indigo-900">1,0</div>
                 <div class="w-12 h-12 border bg-indigo-50 flex items-center justify-center font-bold text-indigo-900">1,1</div>
                 
                 <!-- Row 2 -->
                 <div class="text-xs text-gray-400 flex items-center justify-end pr-2 font-bold">Fila 2</div>
                 <div class="w-12 h-12 border bg-indigo-50 flex items-center justify-center font-bold text-indigo-900">2,0</div>
                 <div class="w-12 h-12 border bg-indigo-50 flex items-center justify-center font-bold text-indigo-900">2,1</div>
               </div>
             </div>
          </div>

          <div class="bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-300">
             <p class="text-green-400 mb-2">// Recorrido en C++ (Bucles Anidados)</p>
             <p><span class="text-purple-400">int</span> mat[3][2];</p>
             <p><span class="text-purple-400">for</span>(<span class="text-purple-400">int</span> i=0; i&lt;3; i++) { <span class="text-gray-500">// Recorre Filas</span></p>
             <p>&nbsp;&nbsp;<span class="text-purple-400">for</span>(<span class="text-purple-400">int</span> j=0; j&lt;2; j++) { <span class="text-gray-500">// Recorre Columnas</span></p>
             <p>&nbsp;&nbsp;&nbsp;&nbsp;cin >> mat[i][j];</p>
             <p>&nbsp;&nbsp;}</p>
             <p>}</p>
          </div>
        </div>
      `
    },
    {
      id: 'p4-3',
      title: 'Banco de Ejercicios en C++',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100 text-sm">
            <p class="text-blue-900 font-medium"><strong>Instrucciones:</strong> Intente implementar la solución en su IDE (Dev-C++, VS Code) antes de desplegar la respuesta. Los ejercicios están ordenados por dificultad.</p>
          </div>

          <div class="space-y-4">
            
            <!-- Nivel 1: Básicos -->
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mt-6 mb-2">Nivel 1: Recorrido y Acumulación</h4>
            
            <!-- Ex 1 -->
            <details class="group border border-slate-200 rounded-lg bg-white shadow-sm">
              <summary class="cursor-pointer p-4 font-bold text-slate-800 hover:bg-slate-50 flex justify-between items-center">
                <span>1. Suma y Promedio</span>
                <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Fácil</span>
              </summary>
              <div class="p-4 border-t bg-slate-50 text-sm text-slate-600">
                <p class="mb-3">Declarar un arreglo de 5 enteros, pedir los valores al usuario y mostrar la suma total y el promedio.</p>
                <details>
                  <summary class="text-xs text-blue-600 font-bold cursor-pointer mb-2">Ver Código C++</summary>
                  <div class="bg-slate-900 text-slate-300 p-3 rounded font-mono text-xs">
                    <span class="text-purple-400">int</span> nums[5], sum = 0;<br>
                    <span class="text-purple-400">for</span>(<span class="text-purple-400">int</span> i=0; i&lt;5; i++) {<br>
                    &nbsp;&nbsp;cin >> nums[i];<br>
                    &nbsp;&nbsp;sum += nums[i];<br>
                    }<br>
                    cout << "Suma: " << sum << endl;<br>
                    cout << "Promedio: " << (sum/5.0);
                  </div>
                </details>
              </div>
            </details>

            <!-- Ex 2 -->
            <details class="group border border-slate-200 rounded-lg bg-white shadow-sm">
              <summary class="cursor-pointer p-4 font-bold text-slate-800 hover:bg-slate-50 flex justify-between items-center">
                <span>2. Contar Pares e Impares</span>
                <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Fácil</span>
              </summary>
              <div class="p-4 border-t bg-slate-50 text-sm text-slate-600">
                <p class="mb-3">Llenar un vector de 10 posiciones. Contar cuántos números son pares y cuántos impares.</p>
                <details>
                  <summary class="text-xs text-blue-600 font-bold cursor-pointer mb-2">Ver Código C++</summary>
                  <div class="bg-slate-900 text-slate-300 p-3 rounded font-mono text-xs">
                    <span class="text-purple-400">int</span> pares=0, impares=0;<br>
                    <span class="text-purple-400">for</span>(<span class="text-purple-400">int</span> i=0; i&lt;10; i++) {<br>
                    &nbsp;&nbsp;<span class="text-purple-400">if</span>(vec[i] % 2 == 0) pares++;<br>
                    &nbsp;&nbsp;<span class="text-purple-400">else</span> impares++;<br>
                    }
                  </div>
                </details>
              </div>
            </details>

            <!-- Nivel 2: Búsqueda y Modificación -->
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mt-6 mb-2">Nivel 2: Lógica y Búsqueda</h4>

            <!-- Ex 3 -->
            <details class="group border border-slate-200 rounded-lg bg-white shadow-sm">
              <summary class="cursor-pointer p-4 font-bold text-slate-800 hover:bg-slate-50 flex justify-between items-center">
                <span>3. Buscar el Mayor (Max)</span>
                <span class="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Medio</span>
              </summary>
              <div class="p-4 border-t bg-slate-50 text-sm text-slate-600">
                <p class="mb-3">Dado un arreglo precargado, encontrar e imprimir el número más grande.</p>
                <details>
                  <summary class="text-xs text-blue-600 font-bold cursor-pointer mb-2">Ver Código C++</summary>
                  <div class="bg-slate-900 text-slate-300 p-3 rounded font-mono text-xs">
                    <span class="text-purple-400">int</span> max = vec[0]; <span class="text-gray-500">// Asumir el primero es mayor</span><br>
                    <span class="text-purple-400">for</span>(<span class="text-purple-400">int</span> i=1; i&lt;tam; i++) {<br>
                    &nbsp;&nbsp;<span class="text-purple-400">if</span>(vec[i] > max) {<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;max = vec[i];<br>
                    &nbsp;&nbsp;}<br>
                    }
                  </div>
                </details>
              </div>
            </details>

            <!-- Ex 4 -->
            <details class="group border border-slate-200 rounded-lg bg-white shadow-sm">
              <summary class="cursor-pointer p-4 font-bold text-slate-800 hover:bg-slate-50 flex justify-between items-center">
                <span>4. Búsqueda Lineal</span>
                <span class="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Medio</span>
              </summary>
              <div class="p-4 border-t bg-slate-50 text-sm text-slate-600">
                <p class="mb-3">Pedir un número X al usuario. Buscar si X existe en el arreglo e imprimir su posición (índice) o un mensaje si no existe.</p>
                <details>
                  <summary class="text-xs text-blue-600 font-bold cursor-pointer mb-2">Ver Código C++</summary>
                  <div class="bg-slate-900 text-slate-300 p-3 rounded font-mono text-xs">
                    <span class="text-purple-400">bool</span> found = <span class="text-purple-400">false</span>;<br>
                    <span class="text-purple-400">for</span>(<span class="text-purple-400">int</span> i=0; i&lt;N; i++) {<br>
                    &nbsp;&nbsp;<span class="text-purple-400">if</span>(arr[i] == x) {<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;cout << "Posición: " << i;<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;found = <span class="text-purple-400">true</span>;<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">break</span>;<br>
                    &nbsp;&nbsp;}<br>
                    }<br>
                    <span class="text-purple-400">if</span>(!found) cout << "No encontrado";
                  </div>
                </details>
              </div>
            </details>

            <!-- Ex 5 -->
            <details class="group border border-slate-200 rounded-lg bg-white shadow-sm">
              <summary class="cursor-pointer p-4 font-bold text-slate-800 hover:bg-slate-50 flex justify-between items-center">
                <span>5. Invertir Arreglo (Swap)</span>
                <span class="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Medio</span>
              </summary>
              <div class="p-4 border-t bg-slate-50 text-sm text-slate-600">
                <p class="mb-3">Invertir el orden de los elementos de un vector (ej: [1,2,3] -> [3,2,1]) <strong>sin</strong> usar un vector auxiliar.</p>
                <details>
                  <summary class="text-xs text-blue-600 font-bold cursor-pointer mb-2">Ver Código C++</summary>
                  <div class="bg-slate-900 text-slate-300 p-3 rounded font-mono text-xs">
                    <span class="text-purple-400">int</span> n = 5;<br>
                    <span class="text-purple-400">for</span>(<span class="text-purple-400">int</span> i=0; i &lt; n/2; i++) {<br>
                    &nbsp;&nbsp;<span class="text-purple-400">int</span> temp = arr[i];<br>
                    &nbsp;&nbsp;arr[i] = arr[n-1-i];<br>
                    &nbsp;&nbsp;arr[n-1-i] = temp;<br>
                    }
                  </div>
                </details>
              </div>
            </details>

             <!-- Ex 6 -->
            <details class="group border border-slate-200 rounded-lg bg-white shadow-sm">
              <summary class="cursor-pointer p-4 font-bold text-slate-800 hover:bg-slate-50 flex justify-between items-center">
                <span>6. Palíndromo (Strings)</span>
                <span class="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Medio</span>
              </summary>
              <div class="p-4 border-t bg-slate-50 text-sm text-slate-600">
                <p class="mb-3">Determinar si una palabra (cadena de caracteres) se lee igual al derecho y al revés (ej: "radar", "ala").</p>
                <details>
                  <summary class="text-xs text-blue-600 font-bold cursor-pointer mb-2">Ver Código C++</summary>
                  <div class="bg-slate-900 text-slate-300 p-3 rounded font-mono text-xs">
                    string s = "radar";<br>
                    <span class="text-purple-400">int</span> ini = 0, fin = s.length()-1;<br>
                    <span class="text-purple-400">bool</span> esPalin = <span class="text-purple-400">true</span>;<br>
                    <span class="text-purple-400">while</span>(ini < fin) {<br>
                    &nbsp;&nbsp;<span class="text-purple-400">if</span>(s[ini] != s[fin]) esPalin = <span class="text-purple-400">false</span>;<br>
                    &nbsp;&nbsp;ini++; fin--;<br>
                    }
                  </div>
                </details>
              </div>
            </details>

             <!-- Nivel 3: Matrices -->
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mt-6 mb-2">Nivel 3: Matrices</h4>

             <!-- Ex 7 -->
            <details class="group border border-slate-200 rounded-lg bg-white shadow-sm">
              <summary class="cursor-pointer p-4 font-bold text-slate-800 hover:bg-slate-50 flex justify-between items-center">
                <span>7. Suma Diagonal Principal</span>
                <span class="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">Difícil</span>
              </summary>
              <div class="p-4 border-t bg-slate-50 text-sm text-slate-600">
                <p class="mb-3">Dada una matriz cuadrada de 3x3, sumar los elementos de la diagonal principal (donde fila == columna).</p>
                <details>
                  <summary class="text-xs text-blue-600 font-bold cursor-pointer mb-2">Ver Código C++</summary>
                  <div class="bg-slate-900 text-slate-300 p-3 rounded font-mono text-xs">
                    <span class="text-purple-400">int</span> suma = 0;<br>
                    <span class="text-purple-400">for</span>(<span class="text-purple-400">int</span> i=0; i&lt;3; i++) {<br>
                    &nbsp;&nbsp;<span class="text-gray-500">// Solo necesitamos un ciclo porque fila=columna</span><br>
                    &nbsp;&nbsp;suma += matriz[i][i];<br>
                    }
                  </div>
                </details>
              </div>
            </details>

            <!-- Ex 8 -->
            <details class="group border border-slate-200 rounded-lg bg-white shadow-sm">
              <summary class="cursor-pointer p-4 font-bold text-slate-800 hover:bg-slate-50 flex justify-between items-center">
                <span>8. Suma de Matrices</span>
                <span class="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">Difícil</span>
              </summary>
              <div class="p-4 border-t bg-slate-50 text-sm text-slate-600">
                <p class="mb-3">Sumar dos matrices A y B de 2x2 y guardar el resultado en una matriz C.</p>
                <details>
                  <summary class="text-xs text-blue-600 font-bold cursor-pointer mb-2">Ver Código C++</summary>
                  <div class="bg-slate-900 text-slate-300 p-3 rounded font-mono text-xs">
                     <span class="text-purple-400">for</span>(<span class="text-purple-400">int</span> i=0; i&lt;2; i++) {<br>
                     &nbsp;&nbsp;<span class="text-purple-400">for</span>(<span class="text-purple-400">int</span> j=0; j&lt;2; j++) {<br>
                     &nbsp;&nbsp;&nbsp;&nbsp;C[i][j] = A[i][j] + B[i][j];<br>
                     &nbsp;&nbsp;}<br>
                     }
                  </div>
                </details>
              </div>
            </details>

          </div>
        </div>
      `
    },
    {
      id: 'p4-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 animate-bounce">
             <span class="text-6xl font-bold select-none">?</span>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Estructuras Estáticas</h3>
          <p class="text-center text-gray-600 max-w-md">
            ¿Queda claro cómo se comportan los índices en memoria? Recuerde: <code>arr[5]</code> accede a la posición 6 y causa un desbordamiento.
          </p>
        </div>
      `
    },
    {
      id: 'p4-end-thanks',
      title: 'Gracias por su atención',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">Fin de la Clase</h2>
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-green-500 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "Un array es una estructura de datos que permite a los programadores cometer errores 'Off-by-one' (fuera por uno) más rápido que nunca."
            </p>
            <footer class="flex items-center justify-center gap-2">
              <div class="h-px w-8 bg-slate-300"></div>
              <cite class="not-italic font-bold text-slate-900">Anónimo</cite>
            </footer>
          </blockquote>
        </div>
      `
    }
  ]
};
