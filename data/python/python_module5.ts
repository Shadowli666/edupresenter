

import { Module } from '../../types';

export const PYTHON_MODULE_5: Module = {
  id: 'py-mod-5',
  title: '5. Taller de Integración',
  description: 'Combinación de Bucles y Condicionales: Validaciones, Menús y Juegos.',
  evaluation: '20% - Taller Práctico',
  slides: [
    {
      id: 'py5-1',
      title: '1. Estrategia de Integración',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700 text-lg">
            Los programas reales rara vez usan una sola estructura. La potencia de la programación radica en <strong>anidar</strong> estas estructuras: Bucles que contienen Condicionales, y Condicionales que contienen Bucles.
          </p>

          <div class="grid md:grid-cols-2 gap-6">
             <div class="bg-white p-5 rounded-xl border border-indigo-100 shadow-sm">
                <h4 class="font-bold text-indigo-800 mb-2">Patrón: Validación de Entrada</h4>
                <p class="text-sm text-slate-600 mb-3">Usar un bucle <code>while</code> infinito que solo se rompe (<code>break</code>) si el usuario cumple una condición <code>if</code>.</p>
                <div class="bg-slate-900 p-3 rounded font-mono text-xs text-slate-300">
                  <span class="text-purple-400">while</span> <span class="text-blue-400">True</span>:<br>
                  &nbsp;&nbsp;n = <span class="text-purple-400">int</span>(<span class="text-blue-400">input</span>(<span class="text-green-400">"Edad: "</span>))<br>
                  &nbsp;&nbsp;<span class="text-purple-400">if</span> n > <span class="text-blue-400">0</span>:<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">break</span><br>
                  &nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"Error, intenta de nuevo"</span>)
                </div>
             </div>

             <div class="bg-white p-5 rounded-xl border border-indigo-100 shadow-sm">
                <h4 class="font-bold text-indigo-800 mb-2">Patrón: Procesamiento de Datos</h4>
                <p class="text-sm text-slate-600 mb-3">Usar un bucle <code>for</code> para recorrer datos y un <code>if</code> para filtrar o contar información específica.</p>
                <div class="bg-slate-900 p-3 rounded font-mono text-xs text-slate-300">
                  pares = <span class="text-blue-400">0</span><br>
                  <span class="text-purple-400">for</span> num <span class="text-purple-400">in</span> lista_numeros:<br>
                  &nbsp;&nbsp;<span class="text-purple-400">if</span> num % <span class="text-blue-400">2</span> == <span class="text-blue-400">0</span>:<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;pares += <span class="text-blue-400">1</span>
                </div>
             </div>
          </div>
        </div>
      `
    },
    {
      id: 'py5-6',
      title: '5.1 Diseño de Menú (Diagrama)',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">Flujo del sistema de menú</h4>
            <div class="mermaid">
              flowchart TD
                A[Inicio] --> B[Mostrar Menú]
                B --> C{Opción}
                C -- 1 --> S[Mostrar saldo]
                C -- 2 --> R[Retirar]
                C -- 3 --> D[Depositar]
                C -- 4 --> E[Salir]
                S --> B
                R --> B
                D --> B
                E --> F[Fin]
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py5-7',
      title: '6. Entrada robusta (opcional try/except)',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">Para entradas numéricas, es común validar y manejar errores con <code>try/except</code> (opcional).</p>
          <div class="bg-slate-900 p-3 rounded font-mono text-xs text-slate-300">
            <span class="text-gray-500"># Convierte y valida que sea positivo</span><br>
            <span class="text-purple-400">def</span> leer_monto():<br>
            &nbsp;&nbsp;<span class="text-purple-400">while</span> <span class="text-blue-400">True</span>:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">try</span>:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;m = <span class="text-purple-400">float</span>(<span class="text-blue-400">input</span>(<span class="text-green-400">"Monto: "</span>))<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">if</span> m > <span class="text-blue-400">0</span>: <span class="text-purple-400">return</span> m<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"Debe ser positivo"</span>)<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">except</span> <span class="text-blue-400">ValueError</span>:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"Entrada inválida"</span>)
          </div>
        </div>
      `
    },
    {
      id: 'py5-8',
      title: '7. Mini-Proyecto: Gestor de Tareas',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">Construye un gestor simple con una lista en memoria. Opciones: agregar, listar, completar, eliminar, salir.</p>
          <details class="group">
            <summary class="inline-flex items-center cursor-pointer text-xs font-bold text-blue-600 bg-blue-50 px-3 py-2 rounded hover:bg-blue-100 transition-colors">Mostrar solución</summary>
            <div class="mt-3 bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-300 overflow-x-auto max-h-72 overflow-y-auto">
              tareas = []<br>
              <br>
              <span class="text-purple-400">while</span> <span class="text-blue-400">True</span>:<br>
              &nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"\n1) Agregar  2) Listar  3) Completar  4) Eliminar  5) Salir"</span>)<br>
              &nbsp;&nbsp;op = <span class="text-blue-400">input</span>(<span class="text-green-400">"Elige: "</span>)<br>
              &nbsp;&nbsp;<span class="text-purple-400">if</span> op == <span class="text-green-400">"1"</span>:<br>
              &nbsp;&nbsp;&nbsp;&nbsp;txt = <span class="text-blue-400">input</span>(<span class="text-green-400">"Tarea: "</span>)<br>
              &nbsp;&nbsp;&nbsp;&nbsp;tareas.append({<span class="text-green-400">"t"</span>: txt, <span class="text-green-400">"done"</span>: <span class="text-blue-400">False</span>})<br>
              &nbsp;&nbsp;<span class="text-purple-400">elif</span> op == <span class="text-green-400">"2"</span>:<br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">for</span> i, t <span class="text-purple-400">in</span> <span class="text-blue-400">enumerate</span>(tareas, start=<span class="text-blue-400">1</span>):<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;estado = <span class="text-green-400">"✔"</span> <span class="text-purple-400">if</span> t[<span class="text-green-400">"done"</span>] <span class="text-purple-400">else</span> <span class="text-green-400">"✘"</span><br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">print</span>(f<span class="text-green-400">"{i}. [{estado}] {t['t']}"</span>)<br>
              &nbsp;&nbsp;<span class="text-purple-400">elif</span> op == <span class="text-green-400">"3"</span>:<br>
              &nbsp;&nbsp;&nbsp;&nbsp;idx = <span class="text-purple-400">int</span>(<span class="text-blue-400">input</span>(<span class="text-green-400">"Número: "</span>)) - <span class="text-blue-400">1</span><br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">if</span> <span class="text-blue-400">0</span> <= idx < <span class="text-blue-400">len</span>(tareas):<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tareas[idx][<span class="text-green-400">"done"</span>] = <span class="text-blue-400">True</span><br>
              &nbsp;&nbsp;<span class="text-purple-400">elif</span> op == <span class="text-green-400">"4"</span>:<br>
              &nbsp;&nbsp;&nbsp;&nbsp;idx = <span class="text-purple-400">int</span>(<span class="text-blue-400">input</span>(<span class="text-green-400">"Número: "</span>)) - <span class="text-blue-400">1</span><br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">if</span> <span class="text-blue-400">0</span> <= idx < <span class="text-blue-400">len</span>(tareas):<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tareas.pop(idx)
            </div>
          </details>
        </div>
      `
    },
    {
      id: 'py5-9',
      title: '8. Mini-Proyecto: Generador de Contraseñas',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">Pide longitud y genera una contraseña con letras y dígitos.</p>
          <details class="group">
            <summary class="inline-flex items-center cursor-pointer text-xs font-bold text-blue-600 bg-blue-50 px-3 py-2 rounded hover:bg-blue-100 transition-colors">Mostrar solución</summary>
            <div class="mt-3 bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-300 overflow-x-auto">
              <span class="text-gray-500"># Nota: para aleatorio, usa el módulo random</span><br>
              <span class="text-purple-400">import</span> random, string<br>
              n = <span class="text-purple-400">int</span>(<span class="text-blue-400">input</span>(<span class="text-green-400">"Longitud: "</span>))<br>
              alfabeto = string.ascii_letters + string.digits
              pwd = <span class="text-blue-400">""</span>.join(random.choice(alfabeto) <span class="text-purple-400">for</span> _ <span class="text-purple-400">in</span> <span class="text-blue-400">range</span>(n))<br>
              <span class="text-blue-400">print</span>(pwd)
            </div>
          </details>
        </div>
      `
    },
    {
      id: 'py5-10',
      title: '9. Mini Quiz de Integración',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">1) ¿Qué imprime el siguiente menú si el usuario elige 4?</h4>
            <p class="text-sm text-slate-600">Debe terminar el programa con un mensaje de despedida.</p>
          </div>
        </div>
      `
    },
    {
      id: 'py5-qa',
      title: '10. Preguntas y Respuestas',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center space-y-4">
          <h2 class="text-3xl font-bold text-slate-900">¿Dudas de integración?</h2>
          <p class="text-slate-600">Vemos validaciones, menús, juegos y mini-proyectos.</p>
        </div>
      `
    },
    {
      id: 'py5-end',
      title: '11. ¡Gracias!',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-16 text-center">
          <div class="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
            <svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-2">Fin del Módulo 5</h3>
          <p class="text-slate-600">Cerramos el corte con la entrega de notas.</p>
        </div>
      `
    },
    {
      id: 'py5-2',
      title: '2. Práctica: Validador Robusto',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-white border rounded-lg shadow-sm">
            <div class="p-4 border-b bg-slate-50">
               <h4 class="font-bold text-slate-800">Ejercicio 1: Validación de Rango</h4>
            </div>
            <div class="p-4 text-sm text-slate-600">
               <p class="mb-4">Solicite al usuario una nota entre 0 y 20. Si ingresa un valor fuera de rango, muestre un error y vuelva a pedirlo. Repita hasta que sea válido.</p>
               
               <details class="group">
                 <summary class="inline-flex items-center cursor-pointer text-xs font-bold text-blue-600 bg-blue-50 px-3 py-2 rounded hover:bg-blue-100 transition-colors">
                    <span>Mostrar Solución</span>
                    <svg class="w-4 h-4 ml-1 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                 </summary>
                 <div class="mt-3 bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-300 overflow-x-auto">
                   <span class="text-purple-400">while</span> <span class="text-blue-400">True</span>:<br>
                   &nbsp;&nbsp;nota = <span class="text-purple-400">int</span>(<span class="text-blue-400">input</span>(<span class="text-green-400">"Ingrese nota (0-20): "</span>))<br>
                   &nbsp;&nbsp;<span class="text-purple-400">if</span> <span class="text-blue-400">0</span> <= nota <= <span class="text-blue-400">20</span>:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">print</span>(f<span class="text-green-400">"Nota registrada: {nota}"</span>)<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">break</span> <span class="text-gray-500"># Sale del ciclo solo si es válido</span><br>
                   &nbsp;&nbsp;<span class="text-purple-400">else</span>:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"Error: Valor fuera de rango."</span>)
                 </div>
               </details>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py5-3',
      title: '3. Práctica: Analizador Estadístico',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-white border rounded-lg shadow-sm">
            <div class="p-4 border-b bg-slate-50">
               <h4 class="font-bold text-slate-800">Ejercicio 2: Estadísticas de N Números</h4>
            </div>
            <div class="p-4 text-sm text-slate-600">
               <p class="mb-4">
                 1. Pregunte al usuario cuántos números va a ingresar (N).<br>
                 2. Use un bucle <code>for</code> para pedir esos N números.<br>
                 3. Al final, muestre:
               </p>
               <ul class="list-disc list-inside mb-4 text-xs ml-2">
                 <li>Promedio de los números.</li>
                 <li>Cantidad de números positivos.</li>
                 <li>Cantidad de ceros ingresados.</li>
               </ul>
               
               <details class="group">
                 <summary class="inline-flex items-center cursor-pointer text-xs font-bold text-blue-600 bg-blue-50 px-3 py-2 rounded hover:bg-blue-100 transition-colors">
                    <span>Mostrar Solución</span>
                    <svg class="w-4 h-4 ml-1 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                 </summary>
                 <div class="mt-3 bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-300 overflow-x-auto">
                   n = <span class="text-purple-400">int</span>(<span class="text-blue-400">input</span>(<span class="text-green-400">"Cantidad de datos: "</span>))<br>
                   suma = <span class="text-blue-400">0</span><br>
                   positivos = <span class="text-blue-400">0</span><br>
                   ceros = <span class="text-blue-400">0</span><br>
                   <br>
                   <span class="text-purple-400">for</span> i <span class="text-purple-400">in</span> <span class="text-blue-400">range</span>(n):<br>
                   &nbsp;&nbsp;num = <span class="text-purple-400">float</span>(<span class="text-blue-400">input</span>(f<span class="text-green-400">"Valor {i+1}: "</span>))<br>
                   &nbsp;&nbsp;suma += num<br>
                   &nbsp;&nbsp;<span class="text-purple-400">if</span> num > <span class="text-blue-400">0</span>:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;positivos += <span class="text-blue-400">1</span><br>
                   &nbsp;&nbsp;<span class="text-purple-400">elif</span> num == <span class="text-blue-400">0</span>:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;ceros += <span class="text-blue-400">1</span><br>
                   <br>
                   prom = suma / n <span class="text-purple-400">if</span> n > <span class="text-blue-400">0</span> <span class="text-purple-400">else</span> <span class="text-blue-400">0</span><br>
                   <span class="text-blue-400">print</span>(f<span class="text-green-400">"Promedio: {prom}"</span>)<br>
                   <span class="text-blue-400">print</span>(f<span class="text-green-400">"Positivos: {positivos}"</span>)<br>
                   <span class="text-blue-400">print</span>(f<span class="text-green-400">"Ceros: {ceros}"</span>)
                 </div>
               </details>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py5-4',
      title: '4. Práctica: Menú Interactivo',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-white border rounded-lg shadow-sm">
            <div class="p-4 border-b bg-slate-50">
               <h4 class="font-bold text-slate-800">Ejercicio 3: Sistema de Menú (Cajero Simple)</h4>
            </div>
            <div class="p-4 text-sm text-slate-600">
               <p class="mb-4">
                 Inicie con un saldo de $1000. Cree un menú repetitivo con las opciones:
                 <br>1. Consultar Saldo
                 <br>2. Retirar (Validar que tenga saldo suficiente)
                 <br>3. Depositar (Validar monto positivo)
                 <br>4. Salir
                 <br>El programa no debe terminar hasta que el usuario elija la opción 4.
               </p>
               
               <details class="group">
                 <summary class="inline-flex items-center cursor-pointer text-xs font-bold text-blue-600 bg-blue-50 px-3 py-2 rounded hover:bg-blue-100 transition-colors">
                    <span>Mostrar Solución</span>
                    <svg class="w-4 h-4 ml-1 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                 </summary>
                 <div class="mt-3 bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-300 overflow-x-auto max-h-64 overflow-y-auto">
                   saldo = <span class="text-blue-400">1000</span><br>
                   <br>
                   <span class="text-purple-400">while</span> <span class="text-blue-400">True</span>:<br>
                   &nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"\n--- BANCO ---"</span>)<br>
                   &nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"1. Saldo  2. Retiro  3. Deposito  4. Salir"</span>)<br>
                   &nbsp;&nbsp;opc = <span class="text-blue-400">input</span>(<span class="text-green-400">"Elija: "</span>)<br>
                   <br>
                   &nbsp;&nbsp;<span class="text-purple-400">if</span> opc == <span class="text-green-400">"1"</span>:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">print</span>(f<span class="text-green-400">"Saldo actual: {saldo}"</span>)<br>
                   <br>
                   &nbsp;&nbsp;<span class="text-purple-400">elif</span> opc == <span class="text-green-400">"2"</span>:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;monto = <span class="text-purple-400">float</span>(<span class="text-blue-400">input</span>(<span class="text-green-400">"Monto a retirar: "</span>))<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">if</span> monto > saldo:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"Saldo insuficiente."</span>)<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">elif</span> monto <= <span class="text-blue-400">0</span>:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"Monto inválido."</span>)<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">else</span>:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;saldo -= monto<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"Retiro exitoso."</span>)<br>
                   <br>
                   &nbsp;&nbsp;<span class="text-purple-400">elif</span> opc == <span class="text-green-400">"3"</span>:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;monto = <span class="text-purple-400">float</span>(<span class="text-blue-400">input</span>(<span class="text-green-400">"Monto a depositar: "</span>))<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">if</span> monto > <span class="text-blue-400">0</span>:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;saldo += monto<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"Deposito exitoso."</span>)<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">else</span>:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"Debe ser positivo."</span>)<br>
                   <br>
                   &nbsp;&nbsp;<span class="text-purple-400">elif</span> opc == <span class="text-green-400">"4"</span>:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"Gracias por usar el banco."</span>)<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">break</span><br>
                   <br>
                   &nbsp;&nbsp;<span class="text-purple-400">else</span>:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"Opción no reconocida."</span>)
                 </div>
               </details>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py5-5',
      title: '5. Práctica: Adivina el Número (Juego)',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-white border rounded-lg shadow-sm">
            <div class="p-4 border-b bg-slate-50">
               <h4 class="font-bold text-slate-800">Ejercicio 4: Adivinanza con Pistas</h4>
            </div>
            <div class="p-4 text-sm text-slate-600">
               <p class="mb-4">
                 1. Define un número secreto (ej. 42).<br>
                 2. Da al usuario 5 intentos para adivinarlo.<br>
                 3. En cada intento, si falla, dile si el número secreto es "Mayor" o "Menor" que el ingresado.<br>
                 4. Si acierta, felicítalo y rompe el ciclo.<br>
                 5. Si se acaban los intentos, muestra "Game Over".
               </p>
               
               <details class="group">
                 <summary class="inline-flex items-center cursor-pointer text-xs font-bold text-blue-600 bg-blue-50 px-3 py-2 rounded hover:bg-blue-100 transition-colors">
                    <span>Mostrar Solución</span>
                    <svg class="w-4 h-4 ml-1 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                 </summary>
                 <div class="mt-3 bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-300 overflow-x-auto">
                   SECRETO = <span class="text-blue-400">42</span><br>
                   intentos = <span class="text-blue-400">5</span><br>
                   <br>
                   <span class="text-purple-400">print</span>(f<span class="text-green-400">"Tienes {intentos} vidas."</span>)<br>
                   <br>
                   <span class="text-purple-400">while</span> intentos > <span class="text-blue-400">0</span>:<br>
                   &nbsp;&nbsp;num = <span class="text-purple-400">int</span>(<span class="text-blue-400">input</span>(<span class="text-green-400">"Tu número: "</span>))<br>
                   <br>
                   &nbsp;&nbsp;<span class="text-purple-400">if</span> num == SECRETO:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"¡GANASTE!"</span>)<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">break</span><br>
                   <br>
                   &nbsp;&nbsp;<span class="text-purple-400">elif</span> num < SECRETO:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"El secreto es MAYOR."</span>)<br>
                   &nbsp;&nbsp;<span class="text-purple-400">else</span>:<br>
                   &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"El secreto es MENOR."</span>)<br>
                   <br>
                   &nbsp;&nbsp;intentos -= <span class="text-blue-400">1</span><br>
                   &nbsp;&nbsp;<span class="text-blue-400">print</span>(f<span class="text-green-400">"Te quedan {intentos} intentos."</span>)<br>
                   <br>
                   <span class="text-purple-400">else</span>:<br>
                   &nbsp;&nbsp;<span class="text-gray-500"># Este else pertenece al while (se ejecuta si no hubo break)</span><br>
                   &nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"GAME OVER. El número era 42."</span>)
                 </div>
               </details>
            </div>
          </div>
        </div>
      `
    }
  ]
};
