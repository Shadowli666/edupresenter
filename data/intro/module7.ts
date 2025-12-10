import { Module } from '../types';

export const MODULE_7: Module = {
  id: 'mod-7',
  title: '7. Lógica Condicional',
  description: 'Toma de decisiones en algoritmos: De lo secuencial a lo condicional.',
  evaluation: '0% - Taller en Clase',
  slides: [
    {
      id: 's7-1',
      title: 'Secuencial vs. Condicional',
      contentHtml: `
        <div class="space-y-8">
          <p class="text-gray-700 text-lg">
            Hasta ahora, nuestros algoritmos seguían una línea recta. Hoy aprenderemos a crear bifurcaciones en el camino.
          </p>

          <div class="grid md:grid-cols-2 gap-8 items-center">
            <!-- Sequential -->
            <div class="bg-white p-6 rounded-xl border-l-4 border-blue-400 shadow-sm opacity-70 hover:opacity-100 transition-opacity">
              <h4 class="font-bold text-blue-900 mb-4 flex items-center gap-2">
                <span class="text-2xl">➡️</span> Estructura Secuencial
              </h4>
              <p class="text-sm text-slate-600 mb-4">
                Las instrucciones se ejecutan una tras otra, sin excepción. Es un camino único.
              </p>
              <div class="mermaid">
                flowchart LR
                  A[Entrada] --> B[Proceso] --> C[Salida]
              </div>
            </div>

            <!-- Conditional -->
            <div class="bg-white p-6 rounded-xl border-l-4 border-purple-500 shadow-lg transform scale-105">
              <h4 class="font-bold text-purple-900 mb-4 flex items-center gap-2">
                <span class="text-2xl">🔀</span> Estructura Condicional
              </h4>
              <p class="text-sm text-slate-600 mb-4">
                El flujo se divide. Se evalúa una condición lógica y se elige un camino u otro.
              </p>
              <div class="mermaid">
                flowchart TD
                  A[Entrada] --> B{¿Condición?}
                  B -- V --> C[Camino A]
                  B -- F --> D[Camino B]
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 's7-2',
      title: 'Tipos de Condicionales (Código vs Diagrama)',
      contentHtml: `
        <div class="space-y-12">
          
          <!-- Simple -->
          <div class="grid md:grid-cols-2 gap-6 bg-white p-5 rounded-lg border shadow-sm">
            <div>
                <div class="flex justify-between items-center mb-3 border-b pb-2">
                    <h4 class="font-bold text-slate-800">1. Condicional Simple (Si)</h4>
                    <span class="bg-blue-100 text-blue-800 text-[10px] px-2 py-1 rounded font-mono">IF</span>
                </div>
                <p class="text-xs text-slate-600 mb-3">Si la condición es verdadera, se ejecuta la acción. Si es falsa, se salta.</p>
                <div class="bg-slate-900 p-3 rounded font-mono text-[10px] text-slate-300 shadow-inner">
                    <span class="text-purple-400">Si</span> (llueve) <span class="text-purple-400">Entonces</span><br>
                    &nbsp;&nbsp;Llevar paraguas<br>
                    <span class="text-purple-400">Fin Si</span>
                </div>
            </div>
            <div class="flex flex-col items-center justify-center border-l border-slate-100 pl-4 w-full">
                <span class="text-[10px] font-bold text-slate-400 mb-2 uppercase">Diagrama de Flujo</span>
                <div class="mermaid">
                  flowchart TD
                    Start((Inicio)) --> Cond{¿Llueve?}
                    Cond -- Sí --> Acc[Llevar Paraguas]
                    Acc --> End((Fin))
                    Cond -- No --> End
                </div>
            </div>
          </div>

          <!-- Double -->
          <div class="grid md:grid-cols-2 gap-6 bg-white p-5 rounded-lg border shadow-sm">
            <div>
                <div class="flex justify-between items-center mb-3 border-b pb-2">
                    <h4 class="font-bold text-slate-800">2. Condicional Doble (Si-Sino)</h4>
                    <span class="bg-orange-100 text-orange-800 text-[10px] px-2 py-1 rounded font-mono">IF-ELSE</span>
                </div>
                <p class="text-xs text-slate-600 mb-3">Caminos excluyentes: Se hace A (Verdadero) o se hace B (Falso).</p>
                <div class="bg-slate-900 p-3 rounded font-mono text-[10px] text-slate-300 shadow-inner">
                    <span class="text-purple-400">Si</span> (aprobado) <span class="text-purple-400">Entonces</span><br>
                    &nbsp;&nbsp;Celebrar<br>
                    <span class="text-purple-400">Sino</span><br>
                    &nbsp;&nbsp;Estudiar<br>
                    <span class="text-purple-400">Fin Si</span>
                </div>
            </div>
            <div class="flex flex-col items-center justify-center border-l border-slate-100 pl-4 w-full">
                <span class="text-[10px] font-bold text-slate-400 mb-2 uppercase">Diagrama de Flujo</span>
                <div class="mermaid">
                  flowchart TD
                    Start((Inicio)) --> Cond{¿Aprobó?}
                    Cond -- Sí --> A[Celebrar]
                    Cond -- No --> B[Estudiar]
                    A --> End((Fin))
                    B --> End
                </div>
            </div>
          </div>

        </div>
      `
    },
    {
      id: 's7-3',
      title: 'Elementos de una Condición',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">Para que un "Si" funcione, necesita una expresión lógica que resulte en <strong>Verdadero</strong> o <strong>Falso</strong>.</p>

          <div class="grid md:grid-cols-2 gap-6">
             <div class="bg-blue-50 p-4 rounded-lg">
               <h4 class="font-bold text-blue-900 mb-2 border-b border-blue-200 pb-1">Operadores Relacionales</h4>
               <p class="text-xs text-blue-800 mb-3">Comparan dos valores.</p>
               <ul class="text-sm space-y-1 font-mono text-slate-700">
                 <li><span class="font-bold text-blue-600">==</span> Igual que (a == b)</li>
                 <li><span class="font-bold text-blue-600">!=</span> Diferente de (a != b)</li>
                 <li><span class="font-bold text-blue-600">></span> Mayor que</li>
                 <li><span class="font-bold text-blue-600"><</span> Menor que</li>
                 <li><span class="font-bold text-blue-600">>=</span> Mayor o igual</li>
               </ul>
             </div>

             <div class="bg-green-50 p-4 rounded-lg">
               <h4 class="font-bold text-green-900 mb-2 border-b border-green-200 pb-1">Operadores Lógicos</h4>
               <p class="text-xs text-green-800 mb-3">Unen o invierten condiciones.</p>
               <ul class="text-sm space-y-2 font-mono text-slate-700">
                 <li>
                   <span class="font-bold text-green-600">Y (AND)</span>
                   <span class="block text-xs text-gray-500 font-sans">Ambos deben ser verdaderos. (edad > 18 Y tiene_cedula)</span>
                 </li>
                 <li>
                   <span class="font-bold text-green-600">O (OR)</span>
                   <span class="block text-xs text-gray-500 font-sans">Basta con que uno sea verdadero. (efectivo O tarjeta)</span>
                 </li>
                 <li>
                   <span class="font-bold text-green-600">NO (NOT)</span>
                   <span class="block text-xs text-gray-500 font-sans">Invierte el valor. (NO esta_lloviendo)</span>
                 </li>
               </ul>
             </div>
          </div>
        </div>
      `
    },
    {
      id: 's7-case-study',
      title: 'Caso de Estudio Resuelto',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg shadow-sm">
            <h3 class="text-xl font-bold text-indigo-900 mb-2">Caso: Taquilla de Cine</h3>
            <p class="text-indigo-800">
              Un cine cobra diferentes tarifas según la edad del cliente.
            </p>
            <ul class="mt-4 list-disc list-inside text-sm text-indigo-700 space-y-1">
              <li><strong>Niños (menores de 12 años):</strong> $5</li>
              <li><strong>Adultos Mayores (60 años o más):</strong> $6</li>
              <li><strong>Adultos (resto):</strong> $10</li>
            </ul>
          </div>

          <div class="grid md:grid-cols-2 gap-8 items-start">
            <!-- Pseudocódigo -->
            <div>
                <h4 class="font-bold text-slate-800 mb-2 text-sm border-b pb-1">Pseudocódigo</h4>
                <div class="bg-slate-900 p-5 rounded-xl font-mono text-xs text-slate-300 shadow-lg">
                  <span class="text-gray-500">// 1. Entrada</span><br>
                  Leer edad<br><br>
                  <span class="text-gray-500">// 2. Lógica Anidada</span><br>
                  <span class="text-purple-400">Si</span> edad < 12 <span class="text-purple-400">Entonces</span><br>
                  &nbsp;&nbsp;precio = 5<br>
                  <span class="text-purple-400">Sino</span><br>
                  &nbsp;&nbsp;<span class="text-gray-500">// Anidamiento</span><br>
                  &nbsp;&nbsp;<span class="text-purple-400">Si</span> edad >= 60 <span class="text-purple-400">Entonces</span><br>
                  &nbsp;&nbsp;&nbsp;&nbsp;precio = 6<br>
                  &nbsp;&nbsp;<span class="text-purple-400">Sino</span><br>
                  &nbsp;&nbsp;&nbsp;&nbsp;precio = 10<br>
                  &nbsp;&nbsp;<span class="text-purple-400">Fin Si</span><br>
                  <span class="text-purple-400">Fin Si</span><br><br>
                  <span class="text-gray-500">// 3. Salida</span><br>
                  Escribir precio
                </div>
            </div>

            <!-- Diagrama de Flujo -->
            <div>
               <h4 class="font-bold text-slate-800 mb-2 text-sm border-b pb-1">Diagrama de Flujo</h4>
               <div class="mermaid">
                 flowchart TD
                    Start([Inicio]) --> Input[/Leer Edad/]
                    Input --> C1{Edad < 12?}
                    C1 -- Sí --> P1[Precio = $5]
                    C1 -- No --> C2{Edad >= 60?}
                    C2 -- Sí --> P2[Precio = $6]
                    C2 -- No --> P3[Precio = $10]
                    P1 --> Output[/Escribir Precio/]
                    P2 --> Output
                    P3 --> Output
                    Output --> End([Fin])
               </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 's7-4',
      title: 'Taller Práctico: Decisiones',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-600 mb-4">Resuelva los siguientes problemas utilizando pseudocódigo y lógica condicional.</p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Ejercicio 1 -->
            <div class="bg-white border p-4 rounded-lg shadow-sm">
               <h5 class="font-bold text-slate-800 text-sm mb-2">1. Calculadora Básica</h5>
               <p class="text-xs text-gray-600 mb-2">Pedir 2 números y un operador (+, -, *, /). Realizar la operación.</p>
               <details>
                 <summary class="text-[10px] font-bold text-blue-600 cursor-pointer">Solución</summary>
                 <pre class="bg-slate-900 text-green-400 p-2 rounded mt-1 text-[10px] overflow-x-auto">
Leer N1, N2, Op
Si Op == "+" Entonces
   R = N1 + N2
Sino Si Op == "-" Entonces
   R = N1 - N2
...
Escribir R</pre>
               </details>
            </div>

            <!-- Ejercicio 2 -->
            <div class="bg-white border p-4 rounded-lg shadow-sm">
               <h5 class="font-bold text-slate-800 text-sm mb-2">2. Sistema de Descuentos</h5>
               <p class="text-xs text-gray-600 mb-2">Si compra > $100, aplicar 10% descuento. Mostrar total.</p>
               <details>
                 <summary class="text-[10px] font-bold text-blue-600 cursor-pointer">Solución</summary>
                 <pre class="bg-slate-900 text-green-400 p-2 rounded mt-1 text-[10px] overflow-x-auto">
Leer monto
Si monto > 100 Entonces
   desc = monto * 0.10
   total = monto - desc
Sino
   total = monto
Fin Si
Escribir total</pre>
               </details>
            </div>

            <!-- Ejercicio 3 -->
            <div class="bg-white border p-4 rounded-lg shadow-sm">
               <h5 class="font-bold text-slate-800 text-sm mb-2">3. Clasificación de Triángulos</h5>
               <p class="text-xs text-gray-600 mb-2">Pedir 3 lados. Decir si es Equilátero, Isósceles o Escaleno.</p>
               <details>
                 <summary class="text-[10px] font-bold text-blue-600 cursor-pointer">Solución</summary>
                 <pre class="bg-slate-900 text-green-400 p-2 rounded mt-1 text-[10px] overflow-x-auto">
Leer L1, L2, L3
Si L1==L2 Y L2==L3 Entonces
   Escribir "Equilátero"
Sino Si L1==L2 O L1==L3 O L2==L3
   Escribir "Isósceles"
Sino
   Escribir "Escaleno"
Fin Si</pre>
               </details>
            </div>

            <!-- Ejercicio 4 -->
            <div class="bg-white border p-4 rounded-lg shadow-sm">
               <h5 class="font-bold text-slate-800 text-sm mb-2">4. Año Bisiesto</h5>
               <p class="text-xs text-gray-600 mb-2">Divisible por 4. NO por 100 (salvo que sea por 400).</p>
               <details>
                 <summary class="text-[10px] font-bold text-blue-600 cursor-pointer">Solución</summary>
                 <pre class="bg-slate-900 text-green-400 p-2 rounded mt-1 text-[10px] overflow-x-auto">
Leer año
Si (año % 4 == 0 Y año % 100 != 0) O (año % 400 == 0) Entonces
   Escribir "Es Bisiesto"
Sino
   Escribir "No es Bisiesto"
Fin Si</pre>
               </details>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 's7-5',
      title: 'Integración y Errores',
      contentHtml: `
        <div class="space-y-8">
          <div class="bg-red-50 p-4 rounded border border-red-200">
             <h4 class="font-bold text-red-800 mb-2 flex items-center">
               <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
               Errores Comunes en Condicionales
             </h4>
             <ul class="list-disc list-inside text-sm text-red-700 space-y-1">
               <li><strong>Asignación vs Comparación:</strong> Usar <code>=</code> en lugar de <code>==</code>.</li>
               <li><strong>Huecos Lógicos:</strong> No cubrir todas las posibilidades con el <code>Sino</code>.</li>
               <li><strong>Condiciones Redundantes:</strong> Preguntar <code>Si x > 10</code> y luego adentro preguntar <code>Si x > 5</code> (obviamente lo es).</li>
             </ul>
          </div>

          <div class="bg-white p-6 border rounded-xl shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">Conclusión</h4>
            <p class="text-sm text-slate-600">
              Las estructuras condicionales son el "cerebro" básico del programa. Sin ellas, una computadora solo sería una calculadora rápida. Con ellas, puede reaccionar a diferentes situaciones.
            </p>
          </div>
        </div>
      `
    },
    {
      id: 's7-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-6 animate-bounce">
             <span class="text-6xl font-bold select-none">?</span>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Condicionales y Lógica</h3>
          <p class="text-center text-gray-600 max-w-md">
            ¿Tienen dudas sobre cuándo usar <strong>Si-Sino</strong> o cómo combinar condiciones con <strong>Y / O</strong>?
          </p>
        </div>
      `
    },
    {
      id: 's7-end-thanks',
      title: 'Gracias por su atención',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">Fin de la Clase</h2>
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-purple-500 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "La lógica te llevará de A a B. La imaginación te llevará a cualquier parte."
            </p>
            <footer class="flex items-center justify-center gap-2">
              <div class="h-px w-8 bg-slate-300"></div>
              <cite class="not-italic font-bold text-slate-900">Albert Einstein</cite>
            </footer>
          </blockquote>
        </div>
      `
    }
  ]
};