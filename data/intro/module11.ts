
import { Module } from '../../types';

export const MODULE_11: Module = {
  id: 'mod-11',
  title: '11. Ciclos Repetir y Para',
  description: 'Repetir Hasta, Para, Contadores, Acumuladores y Criterios de Selección.',
  evaluation: '0% - Práctica',
  slides: [
    {
      id: 's11-1',
      title: 'Ciclo Repetir (Repeat Until)',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Similar al Mientras, pero evalúa la condición <strong>al final</strong>. Esto garantiza que el bloque de instrucciones se ejecute <strong>al menos una vez</strong>.
          </p>

          <div class="grid md:grid-cols-2 gap-6 items-center">
            <div class="bg-white p-4 border rounded shadow-sm">
               <h4 class="font-bold text-slate-800 mb-2">Sintaxis</h4>
               <div class="font-mono text-sm bg-slate-100 p-3 rounded text-slate-700">
                 <span class="text-purple-600 font-bold">Repetir</span><br>
                 &nbsp;&nbsp;Instrucciones...<br>
                 &nbsp;&nbsp;Leer opcion;<br>
                 <span class="text-purple-600 font-bold">Hasta Que</span> (opcion == 0)
               </div>
            </div>

            <div class="flex justify-center">
               <div class="mermaid">
                 flowchart TD
                   Start([Inicio]) --> Instr[Instrucciones]
                   Instr --> Cond{¿Condición?}
                   Cond -- F --> Instr
                   Cond -- V --> End([Fin])
                   style Instr fill:#dcfce7,stroke:#16a34a,stroke-width:2px
                   style Cond fill:#ffedd5,stroke:#ea580c,stroke-width:2px
               </div>
            </div>
          </div>
          
          <div class="bg-orange-50 border-l-4 border-orange-400 p-4 text-xs text-orange-900 mt-4">
            <strong>Diferencia Clave:</strong><br>
            Mientras: Puede ejecutarse 0 veces (si la condición empieza falsa).<br>
            Repetir: Se ejecuta mínimo 1 vez.
          </div>
        </div>
      `
    },
    {
      id: 's11-2',
      title: 'Ciclo Para (For)',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Se utiliza cuando <strong>sabemos de antemano cuántas veces</strong> queremos repetir el ciclo. Maneja automáticamente la inicialización, condición y aumento de la variable.
          </p>

          <div class="grid md:grid-cols-2 gap-6 items-center">
            <div class="bg-white p-4 border rounded shadow-sm">
               <h4 class="font-bold text-slate-800 mb-2">Sintaxis</h4>
               <div class="font-mono text-sm bg-slate-100 p-3 rounded text-slate-700">
                 <span class="text-purple-600 font-bold">Para</span> i = 1 <span class="text-purple-600 font-bold">Hasta</span> 10 <span class="text-purple-600 font-bold">Con Paso</span> 1 <span class="text-purple-600 font-bold">Hacer</span><br>
                 &nbsp;&nbsp;Escribir i;<br>
                 <span class="text-purple-600 font-bold">FinPara</span>
               </div>
            </div>

            <div class="flex justify-center">
               <div class="mermaid">
                 flowchart TD
                   Start([Inicio]) --> Init[i = 1]
                   Init --> Cond{i <= 10?}
                   Cond -- V --> Instr[Escribir i]
                   Instr --> Inc[i = i + 1]
                   Inc --> Cond
                   Cond -- F --> End([Fin])
                   style Init fill:#dbeafe,stroke:#2563eb,stroke-width:2px
                   style Inc fill:#dbeafe,stroke:#2563eb,stroke-width:2px
               </div>
            </div>
          </div>
          
          <div class="flex gap-4 mt-4 text-xs text-slate-500 justify-center">
             <span class="bg-gray-100 px-2 py-1 rounded">i = Variable de control</span>
             <span class="bg-gray-100 px-2 py-1 rounded">1 = Inicio</span>
             <span class="bg-gray-100 px-2 py-1 rounded">10 = Límite</span>
             <span class="bg-gray-100 px-2 py-1 rounded">1 = Incremento</span>
          </div>
        </div>
      `
    },
    {
      id: 's11-3',
      title: 'Herramientas: Contadores y Acumuladores',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-blue-50 p-5 rounded-xl border border-blue-100 relative overflow-hidden">
            <div class="absolute top-0 right-0 bg-blue-200 text-blue-800 text-[10px] px-2 py-1 font-bold">Cuenta Sucesos</div>
            <h3 class="text-lg font-bold text-blue-900 mb-2">Contador</h3>
            <p class="text-sm text-blue-800 mb-3">Variable que se incrementa en un valor <strong>constante</strong> (generalmente +1).</p>
            <div class="bg-white p-2 rounded border border-blue-200 text-xs font-mono text-center">
               c = c + 1
            </div>
            <ul class="text-[10px] mt-3 text-slate-600 list-disc list-inside">
               <li>Contar alumnos aprobados.</li>
               <li>Contar intentos fallidos de login.</li>
               <li>Contar vueltas de una carrera.</li>
            </ul>
          </div>

          <div class="bg-green-50 p-5 rounded-xl border border-green-100 relative overflow-hidden">
            <div class="absolute top-0 right-0 bg-green-200 text-green-800 text-[10px] px-2 py-1 font-bold">Suma Valores</div>
            <h3 class="text-lg font-bold text-green-900 mb-2">Acumulador</h3>
            <p class="text-sm text-green-800 mb-3">Variable que se incrementa en un valor <strong>variable</strong>.</p>
            <div class="bg-white p-2 rounded border border-green-200 text-xs font-mono text-center">
               suma = suma + precio
            </div>
            <ul class="text-[10px] mt-3 text-slate-600 list-disc list-inside">
               <li>Sumar el total de ventas del día.</li>
               <li>Sumar las notas para sacar promedio.</li>
               <li>Calcular el peso total de una carga.</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 's11-4',
      title: 'Matriz de Decisión: ¿Qué ciclo usar?',
      contentHtml: `
        <div class="space-y-8">
          <p class="text-gray-700">Elegir el ciclo correcto hace el código más limpio y menos propenso a errores.</p>

          <div class="bg-white border rounded-xl overflow-hidden shadow-sm">
            <table class="w-full text-sm text-left">
              <thead class="bg-slate-800 text-white">
                <tr>
                  <th class="px-4 py-3">Pregunta Clave</th>
                  <th class="px-4 py-3">Ciclo Recomendado</th>
                  <th class="px-4 py-3">Ejemplo</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 text-slate-700">
                <tr class="bg-blue-50">
                  <td class="px-4 py-3 font-medium">¿Sé exactamente cuántas veces debo repetir?</td>
                  <td class="px-4 py-3"><strong class="text-blue-700">PARA (For)</strong></td>
                  <td class="px-4 py-3 text-xs">Imprimir los números del 1 al 100. Recorrer un vector de tamaño 10.</td>
                </tr>
                <tr>
                  <td class="px-4 py-3 font-medium">¿Depende de un evento externo o condición?</td>
                  <td class="px-4 py-3"><strong class="text-purple-700">MIENTRAS (While)</strong></td>
                  <td class="px-4 py-3 text-xs">Avanzar el personaje mientras no choque con la pared. Leer archivo mientras no sea fin.</td>
                </tr>
                <tr class="bg-orange-50">
                  <td class="px-4 py-3 font-medium">¿Debo garantizar que se ejecute al menos una vez?</td>
                  <td class="px-4 py-3"><strong class="text-orange-700">REPETIR (Do-While)</strong></td>
                  <td class="px-4 py-3 text-xs">Mostrar menú de opciones y pedir selección (validar entrada).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 's11-5',
      title: 'Taller Práctico: Ciclos Básicos',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-slate-600 mb-4">Resuelva los siguientes ejercicios utilizando las estructuras <strong>Repetir</strong> y <strong>Para</strong>.</p>

          <!-- Exercise 1: Repeat Until -->
          <div class="bg-white border rounded-lg shadow-sm overflow-hidden">
            <div class="p-4 border-b bg-orange-50">
               <h4 class="font-bold text-orange-900">1. Validación de Contraseña (Repetir)</h4>
            </div>
            <div class="p-4 text-sm text-slate-600">
               <p class="mb-3">Diseñe un algoritmo que solicite una clave al usuario y no le permita avanzar hasta que ingrese "1234".</p>
               <details class="group">
                 <summary class="text-xs font-bold text-blue-600 cursor-pointer hover:underline">Ver Solución</summary>
                 <div class="mt-2 bg-slate-900 text-slate-300 p-3 rounded font-mono text-xs">
                   Inicio<br>
                   &nbsp;&nbsp;Definir clave Como Caracter;<br>
                   &nbsp;&nbsp;<span class="text-purple-400">Repetir</span><br>
                   &nbsp;&nbsp;&nbsp;&nbsp;Escribir "Ingrese clave:";<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;Leer clave;<br>
                   &nbsp;&nbsp;<span class="text-purple-400">Hasta Que</span> (clave == "1234")<br>
                   &nbsp;&nbsp;Escribir "Acceso Concedido";<br>
                   Fin
                 </div>
               </details>
            </div>
          </div>

          <!-- Exercise 2: For Loop -->
          <div class="bg-white border rounded-lg shadow-sm overflow-hidden">
            <div class="p-4 border-b bg-blue-50">
               <h4 class="font-bold text-blue-900">2. Promedio de 5 Notas (Para)</h4>
            </div>
            <div class="p-4 text-sm text-slate-600">
               <p class="mb-3">Solicite 5 notas al usuario utilizando un ciclo <strong>Para</strong>, acumule la suma y al final muestre el promedio.</p>
               <details class="group">
                 <summary class="text-xs font-bold text-blue-600 cursor-pointer hover:underline">Ver Solución</summary>
                 <div class="mt-2 bg-slate-900 text-slate-300 p-3 rounded font-mono text-xs">
                   Inicio<br>
                   &nbsp;&nbsp;Definir suma, nota, prom Como Real;<br>
                   &nbsp;&nbsp;suma = 0;<br>
                   &nbsp;&nbsp;<span class="text-purple-400">Para</span> i = 1 <span class="text-purple-400">Hasta</span> 5 <span class="text-purple-400">Hacer</span><br>
                   &nbsp;&nbsp;&nbsp;&nbsp;Escribir "Ingrese nota ", i;<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;Leer nota;<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;suma = suma + nota; <span class="text-gray-500">// Acumulador</span><br>
                   &nbsp;&nbsp;<span class="text-purple-400">FinPara</span><br>
                   &nbsp;&nbsp;prom = suma / 5;<br>
                   &nbsp;&nbsp;Escribir "El promedio es:", prom;<br>
                   Fin
                 </div>
               </details>
            </div>
          </div>

          <!-- Exercise 3: Factorial (For) -->
          <div class="bg-white border rounded-lg shadow-sm overflow-hidden">
            <div class="p-4 border-b bg-green-50">
               <h4 class="font-bold text-green-900">3. Calculadora de Factorial (Para)</h4>
            </div>
            <div class="p-4 text-sm text-slate-600">
               <p class="mb-3">Calcule el factorial de un número N ingresado (Ej: 5! = 1*2*3*4*5 = 120).</p>
               <details class="group">
                 <summary class="text-xs font-bold text-blue-600 cursor-pointer hover:underline">Ver Solución</summary>
                 <div class="mt-2 bg-slate-900 text-slate-300 p-3 rounded font-mono text-xs">
                   Inicio<br>
                   &nbsp;&nbsp;Definir N, fact, i Como Entero;<br>
                   &nbsp;&nbsp;Escribir "Ingrese numero:";<br>
                   &nbsp;&nbsp;Leer N;<br>
                   &nbsp;&nbsp;fact = 1; <span class="text-gray-500">// Inicializar en 1 (Neutro multiplicativo)</span><br>
                   &nbsp;&nbsp;<span class="text-purple-400">Para</span> i = 1 <span class="text-purple-400">Hasta</span> N <span class="text-purple-400">Hacer</span><br>
                   &nbsp;&nbsp;&nbsp;&nbsp;fact = fact * i;<br>
                   &nbsp;&nbsp;<span class="text-purple-400">FinPara</span><br>
                   &nbsp;&nbsp;Escribir "El factorial es:", fact;<br>
                   Fin
                 </div>
               </details>
            </div>
          </div>

        </div>
      `
    },
    {
      id: 's11-6',
      title: 'Desafíos Avanzados (Ciclos Anidados)',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Un ciclo anidado es un ciclo dentro de otro. Son fundamentales para trabajar con matrices, tablas o relojes.
          </p>

          <div class="grid md:grid-cols-2 gap-6">
            
            <!-- Exercise 4: Reloj -->
            <div class="bg-white border rounded-lg shadow-sm overflow-hidden flex flex-col h-full">
              <div class="p-4 border-b bg-indigo-50">
                 <h4 class="font-bold text-indigo-900">4. Simulación de Reloj Digital</h4>
              </div>
              <div class="p-4 text-sm text-slate-600 flex-1 flex flex-col">
                 <p class="mb-3">
                   Muestre todas las horas, minutos y segundos de un día (00:00:00 a 23:59:59) usando 3 ciclos anidados.
                 </p>
                 <details class="group mt-auto">
                   <summary class="text-xs font-bold text-indigo-600 cursor-pointer hover:underline mb-2">Ver Solución</summary>
                   <div class="bg-slate-900 text-slate-300 p-3 rounded font-mono text-[10px]">
                     <span class="text-purple-400">Para</span> h = 0 <span class="text-purple-400">Hasta</span> 23 <span class="text-purple-400">Hacer</span><br>
                     &nbsp;&nbsp;<span class="text-purple-400">Para</span> m = 0 <span class="text-purple-400">Hasta</span> 59 <span class="text-purple-400">Hacer</span><br>
                     &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">Para</span> s = 0 <span class="text-purple-400">Hasta</span> 59 <span class="text-purple-400">Hacer</span><br>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Escribir h, ":", m, ":", s;<br>
                     &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">FinPara</span><br>
                     &nbsp;&nbsp;<span class="text-purple-400">FinPara</span><br>
                     <span class="text-purple-400">FinPara</span>
                   </div>
                 </details>
              </div>
            </div>

            <!-- Exercise 5: Tablas -->
            <div class="bg-white border rounded-lg shadow-sm overflow-hidden flex flex-col h-full">
              <div class="p-4 border-b bg-teal-50">
                 <h4 class="font-bold text-teal-900">5. Tablas de Multiplicar (1 al 9)</h4>
              </div>
              <div class="p-4 text-sm text-slate-600 flex-1 flex flex-col">
                 <p class="mb-3">
                   Genere las tablas de multiplicar del 1 al 9 completas (ej: 1x1... 1x9, 2x1... 2x9).
                 </p>
                 <details class="group mt-auto">
                   <summary class="text-xs font-bold text-teal-600 cursor-pointer hover:underline mb-2">Ver Solución</summary>
                   <div class="bg-slate-900 text-slate-300 p-3 rounded font-mono text-[10px]">
                     <span class="text-purple-400">Para</span> i = 1 <span class="text-purple-400">Hasta</span> 9 <span class="text-purple-400">Hacer</span><br>
                     &nbsp;&nbsp;Escribir "Tabla del ", i;<br>
                     &nbsp;&nbsp;<span class="text-purple-400">Para</span> j = 1 <span class="text-purple-400">Hasta</span> 10 <span class="text-purple-400">Hacer</span><br>
                     &nbsp;&nbsp;&nbsp;&nbsp;res = i * j;<br>
                     &nbsp;&nbsp;&nbsp;&nbsp;Escribir i, " x ", j, " = ", res;<br>
                     &nbsp;&nbsp;<span class="text-purple-400">FinPara</span><br>
                     <span class="text-purple-400">FinPara</span>
                   </div>
                 </details>
              </div>
            </div>

          </div>
          
          <!-- Exercise 6: Cuadrado -->
          <div class="bg-white border rounded-lg shadow-sm overflow-hidden mt-4">
              <div class="p-4 border-b bg-gray-50 flex justify-between items-center">
                 <h4 class="font-bold text-gray-800">6. Dibujar Cuadrado de Asteriscos</h4>
                 <span class="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">Gráfico</span>
              </div>
              <div class="p-4 text-sm text-slate-600 flex flex-col md:flex-row gap-6">
                 <div class="flex-1">
                   <p class="mb-2">Solicite un número N y dibuje un cuadrado de N x N asteriscos en pantalla.</p>
                   <p class="text-xs text-gray-500 mb-2">Ejemplo N=3:<br>***<br>***<br>***</p>
                 </div>
                 <div class="flex-1">
                   <details class="group">
                     <summary class="text-xs font-bold text-blue-600 cursor-pointer hover:underline mb-2">Ver Solución</summary>
                     <div class="bg-slate-900 text-slate-300 p-3 rounded font-mono text-[10px]">
                       Leer N;<br>
                       <span class="text-purple-400">Para</span> i = 1 <span class="text-purple-400">Hasta</span> N <span class="text-purple-400">Hacer</span><br>
                       &nbsp;&nbsp;linea = "";<br>
                       &nbsp;&nbsp;<span class="text-purple-400">Para</span> j = 1 <span class="text-purple-400">Hasta</span> N <span class="text-purple-400">Hacer</span><br>
                       &nbsp;&nbsp;&nbsp;&nbsp;linea = linea + "*";<br>
                       &nbsp;&nbsp;<span class="text-purple-400">FinPara</span><br>
                       &nbsp;&nbsp;Escribir linea;<br>
                       <span class="text-purple-400">FinPara</span>
                     </div>
                   </details>
                 </div>
              </div>
          </div>

        </div>
      `
    },
    {
      id: 's11-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mb-6 animate-bounce">
             <span class="text-6xl font-bold select-none">?</span>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Dominando Ciclos</h3>
          <p class="text-center text-gray-600 max-w-md">
            ¿Queda clara la diferencia entre un contador (cuenta veces) y un acumulador (suma cantidades)?
          </p>
        </div>
      `
    },
    {
      id: 's11-end-thanks',
      title: 'Gracias por su atención',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">Fin de la Clase</h2>
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-teal-500 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "El primer paso de la ignorancia es presumir de saber, y muchos sabrían si no pensaran que saben."
            </p>
            <footer class="flex items-center justify-center gap-2">
              <div class="h-px w-8 bg-slate-300"></div>
              <cite class="not-italic font-bold text-slate-900">Baltasar Gracián</cite>
            </footer>
          </blockquote>
        </div>
      `
    }
  ]
};
