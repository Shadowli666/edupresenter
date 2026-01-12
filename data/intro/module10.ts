import { Module } from '../../types';

export const MODULE_10: Module = {
  id: 'mod-10',
  title: '10. Estructuras de Repetición (Mientras)',
  description: 'Ciclos condicionales, Pruebas de Escritorio y Depuración manual.',
  evaluation: '0% - Práctica',
  slides: [
    {
      id: 's10-1',
      title: 'Ciclo Mientras (While)',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Estructura que repite un bloque de instrucciones <strong>mientras una condición sea Verdadera</strong>. Es ideal cuando <strong>no sabemos</strong> cuántas veces se repetirá el proceso (ej. validar una contraseña).
          </p>

          <div class="grid md:grid-cols-2 gap-6 items-center">
            <div class="bg-white p-4 border rounded shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">Sintaxis y Anatomía</h4>
              <div class="font-mono text-sm bg-slate-100 p-3 rounded text-slate-700">
                <span class="text-gray-500">// 1. Inicialización</span><br>
                i = 1<br>
                <span class="text-purple-600 font-bold">Mientras</span> (i <= 5) <span class="text-purple-600 font-bold">Hacer</span> <span class="text-gray-500">// 2. Condición</span><br>
                &nbsp;&nbsp;Escribir i<br>
                &nbsp;&nbsp;<span class="text-green-600 font-bold">i = i + 1</span> <span class="text-gray-500">// 3. Actualización</span><br>
                <span class="text-purple-600 font-bold">FinMientras</span>
              </div>
              <ul class="mt-3 text-xs text-slate-600 space-y-1">
                 <li><strong>1. Inicialización:</strong> Dar valor a la variable de control antes del ciclo.</li>
                 <li><strong>2. Condición:</strong> Se evalúa antes de cada iteración.</li>
                 <li><strong>3. Actualización:</strong> Modificar la variable para evitar un ciclo infinito.</li>
              </ul>
            </div>
            
            <div class="flex flex-col gap-4">
               <div class="mermaid flex justify-center">
                 flowchart TD
                   Start([Inicio]) --> Init[i = 1]
                   Init --> Cond{¿i <= 5?}
                   Cond -- V --> Instr[Escribir i]
                   Instr --> Upd[i = i + 1]
                   Upd --> Cond
                   Cond -- F --> End([Fin])
                   style Cond fill:#dbeafe,stroke:#2563eb,stroke-width:2px
                   style Instr fill:#dcfce7,stroke:#16a34a,stroke-width:2px
                   style Upd fill:#fef9c3,stroke:#ca8a04,stroke-width:2px
               </div>
               
               <!-- Visual Metaphor -->
               <div class="bg-blue-50 p-3 rounded border border-blue-100 text-sm text-blue-800 flex items-center gap-3">
                 <div class="text-2xl">🚧</div>
                 <div>
                   <strong>Metáfora del Peaje:</strong><br>
                   El "Mientras" es como un peaje. Antes de pasar (ejecutar), debes mostrar tu ticket (condición verdadera). Si no tienes ticket, no pasas ni una vez.
                 </div>
               </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 's10-2',
      title: 'Metodología: Prueba de Escritorio',
      contentHtml: `
        <div class="space-y-6">
           <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-4 flex justify-between items-center">
             <div>
               <h4 class="font-bold text-indigo-900">¿Qué es una Prueba de Escritorio?</h4>
               <p class="text-sm text-indigo-800">Es una técnica manual para simular la ejecución del algoritmo línea por línea, registrando cómo cambian los valores de las variables en cada paso.</p>
             </div>
             <div class="text-4xl opacity-50">📝</div>
           </div>
           
           <div class="flex flex-col lg:flex-row gap-6">
             <!-- Code -->
             <div class="flex-1">
               <strong class="block text-slate-700 mb-2">Algoritmo</strong>
               <div class="font-mono text-xs bg-slate-900 text-slate-300 p-4 rounded shadow-lg leading-relaxed">
                 <span class="text-gray-500">1.</span> X = 2<br>
                 <span class="text-gray-500">2.</span> Y = 0<br>
                 <span class="text-gray-500">3.</span> <span class="text-purple-400">Mientras</span> (X <= 8) <span class="text-purple-400">Hacer</span><br>
                 <span class="text-gray-500">4.</span> &nbsp;&nbsp;X = X * 2<br>
                 <span class="text-gray-500">5.</span> &nbsp;&nbsp;Y = Y + 1<br>
                 <span class="text-gray-500">6.</span> &nbsp;&nbsp;<span class="text-blue-400">Escribir</span> X, Y<br>
                 <span class="text-gray-500">7.</span> <span class="text-purple-400">FinMientras</span>
               </div>
             </div>

             <!-- Trace Table -->
             <div class="flex-1">
               <strong class="block text-slate-700 mb-2">Tabla de Trazado</strong>
               <div class="bg-white border rounded shadow-sm overflow-hidden text-sm">
                 <table class="w-full text-center">
                   <thead class="bg-slate-100 text-slate-800 border-b">
                     <tr>
                       <th class="py-2">Paso</th>
                       <th class="py-2 text-blue-600">Var X</th>
                       <th class="py-2 text-green-600">Var Y</th>
                       <th class="py-2 text-purple-600">¿X <= 8?</th>
                       <th class="py-2">Pantalla</th>
                     </tr>
                   </thead>
                   <tbody class="text-slate-600">
                     <tr class="border-b hover:bg-slate-50"><td>Inicio</td><td>2</td><td>0</td><td>-</td><td>-</td></tr>
                     <tr class="border-b hover:bg-slate-50"><td>Iter 1</td><td><span class="text-blue-600 font-bold">4</span></td><td><span class="text-green-600 font-bold">1</span></td><td>V (2<=8)</td><td>4, 1</td></tr>
                     <tr class="border-b hover:bg-slate-50"><td>Iter 2</td><td><span class="text-blue-600 font-bold">8</span></td><td><span class="text-green-600 font-bold">2</span></td><td>V (4<=8)</td><td>8, 2</td></tr>
                     <tr class="border-b hover:bg-slate-50"><td>Iter 3</td><td><span class="text-blue-600 font-bold">16</span></td><td><span class="text-green-600 font-bold">3</span></td><td>V (8<=8)</td><td>16, 3</td></tr>
                     <tr class="bg-red-50"><td>Fin</td><td>16</td><td>3</td><td><span class="text-red-600 font-bold">F (16>8)</span></td><td>-</td></tr>
                   </tbody>
                 </table>
               </div>
             </div>
           </div>
        </div>
      `
    },
    {
      id: 's10-3',
      title: 'Peligro: El Ciclo Infinito',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full space-y-6">
          <div class="bg-red-100 text-red-800 p-6 rounded-full text-6xl animate-pulse">
            ♾️
          </div>
          
          <h3 class="text-2xl font-bold text-red-700">¡Cuidado con el Ciclo Infinito!</h3>
          
          <p class="text-center text-gray-700 max-w-2xl">
            Si olvidas <strong>actualizar la variable de control</strong> dentro del ciclo, la condición nunca se volverá falsa y el programa se quedará "colgado" para siempre.
          </p>

          <div class="grid grid-cols-2 gap-8 w-full max-w-3xl mt-4">
            <div class="border-2 border-red-300 bg-red-50 p-4 rounded-xl relative">
              <div class="absolute -top-3 -right-3 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">MAL</div>
              <h4 class="font-bold text-red-800 mb-2">Código Incorrecto</h4>
              <div class="font-mono text-sm text-red-900">
                i = 1<br>
                Mientras (i <= 5) Hacer<br>
                &nbsp;&nbsp;Escribir i<br>
                &nbsp;&nbsp;<span class="bg-red-200 font-bold px-1">MISSING!</span><br>
                FinMientras
              </div>
              <p class="text-xs text-red-600 mt-2">'i' siempre será 1. 1 <= 5 es siempre Verdad.</p>
            </div>

            <div class="border-2 border-green-300 bg-green-50 p-4 rounded-xl relative">
              <div class="absolute -top-3 -right-3 bg-green-500 text-white px-2 py-1 text-xs font-bold rounded">BIEN</div>
              <h4 class="font-bold text-green-800 mb-2">Código Correcto</h4>
              <div class="font-mono text-sm text-green-900">
                i = 1<br>
                Mientras (i <= 5) Hacer<br>
                &nbsp;&nbsp;Escribir i<br>
                &nbsp;&nbsp;<span class="bg-green-200 font-bold px-1">i = i + 1</span><br>
                FinMientras
              </div>
              <p class="text-xs text-green-600 mt-2">Eventualmente 'i' será 6 y el ciclo terminará.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 's10-4',
      title: 'Errores Comunes',
      contentHtml: `
        <div class="space-y-8">
          <p class="text-gray-700">Detectar estos errores a tiempo te ahorrará horas de depuración.</p>

          <div class="grid md:grid-cols-2 gap-6">
            <!-- Infinite Loop -->
            <div class="bg-red-50 p-5 rounded-xl border border-red-200">
              <h4 class="font-bold text-red-900 mb-2 flex items-center">
                <span class="text-xl mr-2">♾️</span> Bucle Infinito
              </h4>
              <p class="text-xs text-red-800 mb-3">Ocurre cuando la condición nunca se vuelve Falsa.</p>
              <div class="bg-white p-3 rounded border border-red-100 font-mono text-xs">
                i = 1<br>
                Mientras (i < 10):<br>
                &nbsp;&nbsp;Escribir i<br>
                <span class="text-gray-400 text-[10px] italic">// Error: Falta i = i + 1</span>
              </div>
            </div>

            <!-- Initialization Error -->
            <div class="bg-orange-50 p-5 rounded-xl border border-orange-200">
              <h4 class="font-bold text-orange-900 mb-2 flex items-center">
                <span class="text-xl mr-2">🏁</span> Mala Inicialización
              </h4>
              <p class="text-xs text-orange-800 mb-3">La variable de control tiene un valor incorrecto al inicio, impidiendo que el ciclo arranque o termine bien.</p>
              <div class="bg-white p-3 rounded border border-orange-100 font-mono text-xs">
                i = 20 <span class="text-orange-600 font-bold">// Mal</span><br>
                Mientras (i < 10): <span class="text-gray-400 text-[10px] italic">// 20 < 10 es Falso.</span><br>
                &nbsp;&nbsp;Escribir "Hola" <span class="text-gray-400 text-[10px] italic">// Nunca entra</span>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 's10-5',
      title: 'Taller Guiado en Clase',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-slate-600 mb-4">Resuelva los siguientes ejercicios en pseudocódigo. Haga clic para ver la solución sugerida.</p>

          <!-- Ex 1 -->
          <div class="bg-white border rounded-lg shadow-sm overflow-hidden">
            <div class="p-4 bg-blue-50 border-b border-blue-100">
              <h4 class="font-bold text-blue-900">Ejercicio 1: Contador Simple</h4>
              <p class="text-sm text-blue-800">Imprimir los números del 1 al 10.</p>
            </div>
            <details class="group">
              <summary class="p-4 cursor-pointer text-sm font-bold text-slate-600 hover:bg-slate-50 flex justify-between items-center">
                <span>Ver Pseudocódigo</span>
                <span class="transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div class="p-4 bg-slate-900 text-green-400 font-mono text-xs">
                Inicio<br>
                &nbsp;&nbsp;Definir cont Como Entero;<br>
                &nbsp;&nbsp;cont = 1; <span class="text-gray-500">// Inicialización</span><br>
                &nbsp;&nbsp;Mientras (cont <= 10) Hacer<br>
                &nbsp;&nbsp;&nbsp;&nbsp;Escribir cont;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;cont = cont + 1; <span class="text-gray-500">// Actualización</span><br>
                &nbsp;&nbsp;FinMientras<br>
                Fin
              </div>
            </details>
          </div>

          <!-- Ex 2 -->
          <div class="bg-white border rounded-lg shadow-sm overflow-hidden">
            <div class="p-4 bg-purple-50 border-b border-purple-100">
              <h4 class="font-bold text-purple-900">Ejercicio 2: Validación de Entrada</h4>
              <p class="text-sm text-purple-800">Pedir una nota al usuario. Seguir pidiendo MIENTRAS la nota sea menor a 0 o mayor a 20.</p>
            </div>
            <details class="group">
              <summary class="p-4 cursor-pointer text-sm font-bold text-slate-600 hover:bg-slate-50 flex justify-between items-center">
                <span>Ver Pseudocódigo</span>
                <span class="transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div class="p-4 bg-slate-900 text-green-400 font-mono text-xs">
                Inicio<br>
                &nbsp;&nbsp;Definir nota Como Entero;<br>
                &nbsp;&nbsp;Escribir "Ingrese nota (0-20):";<br>
                &nbsp;&nbsp;Leer nota; <span class="text-gray-500">// Primera lectura</span><br>
                &nbsp;&nbsp;Mientras (nota < 0 O nota > 20) Hacer <span class="text-gray-500">// Condición de Error</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;Escribir "Error. Ingrese nota nuevamente:";<br>
                &nbsp;&nbsp;&nbsp;&nbsp;Leer nota; <span class="text-gray-500">// Actualización (Volver a pedir)</span><br>
                &nbsp;&nbsp;FinMientras<br>
                &nbsp;&nbsp;Escribir "Nota válida:", nota;<br>
                Fin
              </div>
            </details>
          </div>

          <!-- Ex 3 -->
          <div class="bg-white border rounded-lg shadow-sm overflow-hidden">
            <div class="p-4 bg-green-50 border-b border-green-100">
              <h4 class="font-bold text-green-900">Ejercicio 3: Acumulador (Suma)</h4>
              <p class="text-sm text-green-800">Pedir números al usuario y sumarlos. El programa se detiene cuando el usuario ingresa un 0.</p>
            </div>
            <details class="group">
              <summary class="p-4 cursor-pointer text-sm font-bold text-slate-600 hover:bg-slate-50 flex justify-between items-center">
                <span>Ver Pseudocódigo</span>
                <span class="transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div class="p-4 bg-slate-900 text-green-400 font-mono text-xs">
                Inicio<br>
                &nbsp;&nbsp;Definir num, suma Como Entero;<br>
                &nbsp;&nbsp;suma = 0;<br>
                &nbsp;&nbsp;Escribir "Ingrese numero (0 para salir):";<br>
                &nbsp;&nbsp;Leer num;<br>
                &nbsp;&nbsp;Mientras (num != 0) Hacer<br>
                &nbsp;&nbsp;&nbsp;&nbsp;suma = suma + num; <span class="text-gray-500">// Acumular</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;Escribir "Ingrese otro:";<br>
                &nbsp;&nbsp;&nbsp;&nbsp;Leer num; <span class="text-gray-500">// Actualizar variable de control</span><br>
                &nbsp;&nbsp;FinMientras<br>
                &nbsp;&nbsp;Escribir "Total suma:", suma;<br>
                Fin
              </div>
            </details>
          </div>

        </div>
      `
    },
    {
      id: 's10-6',
      title: 'Ejercicios Propuestos (Tarea)',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-gradient-to-r from-slate-100 to-slate-200 p-6 rounded-xl text-center">
            <h3 class="text-2xl font-bold text-slate-800 mb-2">Desafío Semanal</h3>
            <p class="text-slate-600">Resuelva los siguientes ejercicios para la próxima clase. Debe presentar el Diagrama de Flujo y Pseudocódigo.</p>
          </div>

          <div class="grid md:grid-cols-3 gap-6">
            <!-- Tarea 1 -->
            <div class="bg-white p-6 border rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl mb-4">1</div>
              <h4 class="font-bold text-slate-900 mb-2">Cuenta Regresiva</h4>
              <p class="text-sm text-slate-600">
                Diseñe un algoritmo que imprima los números del 10 al 1 en orden descendente y al final imprima "¡Despegue!".
              </p>
            </div>

            <!-- Tarea 2 -->
            <div class="bg-white p-6 border rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div class="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold text-xl mb-4">2</div>
              <h4 class="font-bold text-slate-900 mb-2">Tabla de Multiplicar</h4>
              <p class="text-sm text-slate-600">
                Solicite un número N al usuario. Utilizando un ciclo <em>Mientras</em>, muestre su tabla de multiplicar del 1 al 12.
              </p>
            </div>

            <!-- Tarea 3 -->
            <div class="bg-white p-6 border rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div class="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold text-xl mb-4">3</div>
              <h4 class="font-bold text-slate-900 mb-2">Suma de Pares</h4>
              <p class="text-sm text-slate-600">
                Calcule la suma de todos los números pares entre 1 y 100. (Tip: Use una variable contador que aumente de 2 en 2).
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 's10-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 animate-spin-slow">
             <span class="text-6xl font-bold select-none">?</span>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Depuración Manual</h3>
          <p class="text-center text-gray-600 max-w-md">
            Hacer pruebas de escritorio es la única forma de "ver" lo que piensa la computadora. ¿Dudas con la tabla?
          </p>
        </div>
      `
    },
    {
      id: 's10-end-thanks',
      title: 'Gracias por su atención',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">Fin de la Clase</h2>
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-green-500 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "Locura es hacer lo mismo una y otra vez esperando resultados diferentes."
            </p>
            <footer class="flex items-center justify-center gap-2">
              <div class="h-px w-8 bg-slate-300"></div>
              <cite class="not-italic font-bold text-slate-900">Albert Einstein (Aplicable a ciclos infinitos)</cite>
            </footer>
          </blockquote>
        </div>
      `
    }
  ]
};
