




import { Module } from '../../types';

export const MODULE_4: Module = {
  id: 'mod-4',
  title: '4. Expresiones y Representación',
  description: 'Operadores, jerarquía, pseudocódigo y diagramas de flujo.',
  evaluation: '10% - Guía de Ejercicios',
  slides: [
    {
      id: 's4-1',
      title: 'Operadores y Jerarquía',
      contentHtml: `
        <div class="space-y-8">
          <div class="prose max-w-none">
            <p class="text-slate-600 text-lg">Las expresiones son combinaciones de constantes, variables y operadores que son evaluados para obtener un resultado. Para evaluarlas correctamente, debemos respetar la <strong>Jerarquía de Operadores</strong>.</p>
          </div>

          <div class="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <table class="min-w-full text-sm text-left text-slate-700">
              <thead class="bg-slate-800 text-white font-bold uppercase text-xs">
                <tr>
                  <th class="px-6 py-3">Prioridad</th>
                  <th class="px-6 py-3">Tipo</th>
                  <th class="px-6 py-3">Operador</th>
                  <th class="px-6 py-3">Descripción</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white text-slate-600">
                <tr class="hover:bg-blue-50 transition-colors duration-200">
                  <td class="px-6 py-4 font-bold text-center bg-slate-50 text-slate-800">1</td>
                  <td class="px-6 py-4 font-medium text-slate-900">Agrupación</td>
                  <td class="px-6 py-4 font-mono text-lg font-bold text-blue-600">( )</td>
                  <td class="px-6 py-4">Paréntesis (desde el más interno).</td>
                </tr>
                <tr class="hover:bg-blue-50 transition-colors duration-200">
                  <td class="px-6 py-4 font-bold text-center bg-slate-50 text-slate-800">2</td>
                  <td class="px-6 py-4 font-medium text-slate-900">Aritmético</td>
                  <td class="px-6 py-4 font-mono text-lg font-bold text-indigo-600">^, rad</td>
                  <td class="px-6 py-4">Potencia y Radicación.</td>
                </tr>
                <tr class="hover:bg-blue-50 transition-colors duration-200">
                  <td class="px-6 py-4 font-bold text-center bg-slate-50 text-slate-800">3</td>
                  <td class="px-6 py-4 font-medium text-slate-900">Aritmético</td>
                  <td class="px-6 py-4 font-mono text-lg font-bold text-indigo-600">*, /, % (mod)</td>
                  <td class="px-6 py-4">Multiplicación, División, Módulo.</td>
                </tr>
                <tr class="hover:bg-blue-50 transition-colors duration-200">
                  <td class="px-6 py-4 font-bold text-center bg-slate-50 text-slate-800">4</td>
                  <td class="px-6 py-4 font-medium text-slate-900">Aritmético</td>
                  <td class="px-6 py-4 font-mono text-lg font-bold text-indigo-600">+, -</td>
                  <td class="px-6 py-4">Suma y Resta.</td>
                </tr>
                <tr class="hover:bg-blue-50 transition-colors duration-200">
                  <td class="px-6 py-4 font-bold text-center bg-slate-50 text-slate-800">5</td>
                  <td class="px-6 py-4 font-medium text-slate-900">Relacional</td>
                  <td class="px-6 py-4 font-mono font-bold text-purple-600">>, <, >=, <=, ==, !=</td>
                  <td class="px-6 py-4">Comparaciones (Devuelven Verdadero/Falso).</td>
                </tr>
                <tr class="hover:bg-blue-50 transition-colors duration-200">
                  <td class="px-6 py-4 font-bold text-center bg-slate-50 text-slate-800">6</td>
                  <td class="px-6 py-4 font-medium text-slate-900">Lógico</td>
                  <td class="px-6 py-4 font-mono font-bold text-green-600">NOT, AND, OR</td>
                  <td class="px-6 py-4">Operadores Booleanos.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 text-blue-900 shadow-sm hover:shadow-md transition-all">
            <h4 class="font-bold text-blue-800 mb-2 flex items-center gap-2">
              <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              Ejemplo de Evaluación
            </h4>
            <p class="font-mono text-2xl mb-4 text-slate-800 bg-white/50 inline-block px-4 py-2 rounded">x = 5 + 2 * 3</p>
            <ul class="space-y-2 text-sm">
              <li class="flex items-center gap-2">
                <span class="bg-blue-200 text-blue-800 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">1</span>
                <span>Primero se evalúa la multiplicación: <span class="font-mono font-bold text-slate-700">2 * 3 = 6</span></span>
              </li>
              <li class="flex items-center gap-2">
                <span class="bg-blue-200 text-blue-800 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">2</span>
                <span>Luego la suma: <span class="font-mono font-bold text-slate-700">5 + 6 = 11</span></span>
              </li>
            </ul>
            <div class="mt-4 text-xs text-blue-600 border-t border-blue-200 pt-2">
               Nota: Si fuera <span class="font-mono font-bold">(5 + 2) * 3</span>, el resultado sería <span class="font-mono font-bold">21</span> porque el paréntesis tiene prioridad 1.
            </div>
          </div>
        </div>
      `
    },
    {
      id: 's4-2',
      title: 'Instrucciones Primitivas',
      contentHtml: `
        <div class="grid md:grid-cols-3 gap-6">
          <!-- Asignación -->
          <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col hover:border-indigo-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div class="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-500 mb-4">
              <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
            </div>
            <h3 class="font-bold text-lg mb-2 text-slate-900">Asignación</h3>
            <p class="text-sm text-gray-600 mb-4 flex-1">Consiste en dar un valor a una variable. Es una operación destructiva (se pierde el valor anterior).</p>
            <div class="bg-slate-50 p-3 rounded font-mono text-xs text-slate-700 border border-slate-200">
              variable <span class="text-red-500 font-bold">=</span> expresión;<br>
              <span class="text-gray-400 block mt-1">// Ejemplo</span>
              <span class="text-slate-600">contador = 0;</span>
            </div>
          </div>

          <!-- Entrada -->
          <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col hover:border-green-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
             <div class="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-500 mb-4">
              <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path></svg>
            </div>
            <h3 class="font-bold text-lg mb-2 text-slate-900">Entrada (Leer)</h3>
            <p class="text-sm text-gray-600 mb-4 flex-1">Recepción de datos desde el exterior (teclado) hacia la memoria del computador.</p>
            <div class="bg-slate-50 p-3 rounded font-mono text-xs text-slate-700 border border-slate-200">
              Leer(variable);<br>
              <span class="text-gray-400 block mt-1">// Ejemplo</span>
              <span class="text-slate-600">Leer(edad);</span>
            </div>
          </div>

          <!-- Salida -->
          <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col hover:border-orange-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
             <div class="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center text-orange-500 mb-4">
              <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"></path></svg>
            </div>
            <h3 class="font-bold text-lg mb-2 text-slate-900">Salida (Escribir)</h3>
            <p class="text-sm text-gray-600 mb-4 flex-1">Envío de resultados desde la memoria hacia un dispositivo de salida (pantalla).</p>
            <div class="bg-slate-50 p-3 rounded font-mono text-xs text-slate-700 border border-slate-200">
              Escribir("Texto", variable);<br>
              <span class="text-gray-400 block mt-1">// Ejemplo</span>
              <span class="text-slate-600">Escribir("Hola");</span>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 's4-3',
      title: 'Pseudocódigo: Estructura y Declaración',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">El pseudocódigo es un lenguaje mixto que permite describir algoritmos. Antes de usar una variable en pseudocódigo (especialmente en entornos como PSeInt), es fundamental declararla.</p>

          <!-- Sección: Explicación de DEFINIR -->
          <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h4 class="text-lg font-bold text-yellow-900 mb-3 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Declaración de Variables (Definir)
            </h4>
            <p class="text-sm text-yellow-800 mb-4">
              La instrucción <strong>Definir</strong> se utiliza para indicarle al computador que reserve espacio en memoria para una variable y especifique qué <strong>tipo de dato</strong> almacenará.
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-white p-3 rounded border border-yellow-300 shadow-sm">
                <p class="text-xs font-bold text-gray-500 uppercase mb-1">Sintaxis General</p>
                <code class="text-sm font-mono text-slate-800">
                  <span class="text-blue-600 font-bold">Definir</span> &lt;nombre&gt; <span class="text-blue-600 font-bold">Como</span> &lt;tipo&gt;;
                </code>
              </div>
              
              <div class="bg-slate-900 p-3 rounded border border-slate-700 font-mono text-xs text-slate-300 shadow-inner">
                <p class="mb-1"><span class="text-blue-400">Definir</span> edad <span class="text-blue-400">Como</span> <span class="text-green-400">Entero</span>;</p>
                <p class="mb-1"><span class="text-blue-400">Definir</span> promedio <span class="text-blue-400">Como</span> <span class="text-green-400">Real</span>;</p>
                <p class="mb-1"><span class="text-blue-400">Definir</span> nombre <span class="text-blue-400">Como</span> <span class="text-green-400">Caracter</span>;</p>
                <p class="mb-0"><span class="text-blue-400">Definir</span> esAprobado <span class="text-blue-400">Como</span> <span class="text-green-400">Logico</span>;</p>
              </div>
            </div>
          </div>

          <!-- Tabla de Palabras Clave -->
          <div class="mt-8">
            <h4 class="font-bold text-slate-800 mb-4 border-b pb-2">Diccionario de Palabras Clave</h4>
            
            <div class="overflow-hidden border border-gray-200 rounded-lg shadow-sm">
              <table class="min-w-full text-sm">
                <thead class="bg-slate-50 text-slate-700 border-b border-gray-200">
                  <tr>
                    <th class="px-4 py-3 text-left w-32">Palabra</th>
                    <th class="px-4 py-3 text-left">Definición</th>
                    <th class="px-4 py-3 text-left w-1/3">Ejemplo</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100 bg-white">
                  <tr class="group hover:bg-slate-50 transition-colors">
                    <td class="px-4 py-2 font-mono font-bold text-purple-700">Inicio</td>
                    <td class="px-4 py-2 text-slate-600">Marca el punto de partida de la ejecución.</td>
                    <td class="px-4 py-2 font-mono text-xs text-slate-500">Inicio</td>
                  </tr>
                  <tr class="group hover:bg-slate-50 transition-colors">
                    <td class="px-4 py-2 font-mono font-bold text-blue-600">Definir</td>
                    <td class="px-4 py-2 text-slate-600">Declara una variable y reserva memoria.</td>
                    <td class="px-4 py-2 font-mono text-xs text-slate-500">Definir x Como Entero;</td>
                  </tr>
                  <tr class="group hover:bg-slate-50 transition-colors">
                    <td class="px-4 py-2 font-mono font-bold text-green-600">Leer</td>
                    <td class="px-4 py-2 text-slate-600">Recibe un valor desde el teclado.</td>
                    <td class="px-4 py-2 font-mono text-xs text-slate-500">Leer nombre;</td>
                  </tr>
                  <tr class="group hover:bg-slate-50 transition-colors">
                    <td class="px-4 py-2 font-mono font-bold text-orange-600">Escribir</td>
                    <td class="px-4 py-2 text-slate-600">Muestra información en pantalla.</td>
                    <td class="px-4 py-2 font-mono text-xs text-slate-500">Escribir "Hola";</td>
                  </tr>
                   <tr class="group hover:bg-slate-50 transition-colors">
                    <td class="px-4 py-2 font-mono font-bold text-purple-600">Si</td>
                    <td class="px-4 py-2 text-slate-600">Inicio de una estructura condicional.</td>
                    <td class="px-4 py-2 font-mono text-xs text-slate-500">Si edad >= 18 ...</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Nota sobre Concatenación movida aquí -->
            <div class="mt-6 bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg shadow-sm flex items-start gap-3 hover:bg-orange-100 transition-colors">
              <div class="text-orange-500 mt-1">
                 <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div>
                 <h4 class="font-bold text-orange-900 text-sm">💡 Tip Pro: Concatenación en 'Escribir'</h4>
                 <p class="text-xs text-orange-800 mt-1 mb-2">
                   Utilice comas (,) para unir texto estático con el valor de las variables en una sola línea.
                 </p>
                 <div class="font-mono bg-white p-2 rounded border border-orange-200 text-slate-600 text-xs shadow-sm">
                    Escribir "La hora es: ", H, ":", M, ":", S;
                 </div>
                 <p class="mt-1 text-[10px] text-orange-700">Si H=10, M=30, S=59, imprime: <span class="font-bold">La hora es: 10:30:59</span></p>
              </div>
            </div>

          </div>
        </div>
      `
    },
    {
      id: 's4-4',
      title: 'Diagramas de Flujo (Simbología)',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">Representación gráfica del algoritmo. Utiliza símbolos estandarizados (normas ANSI/ISO) conectados por flechas de flujo.</p>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <!-- Terminal -->
            <div class="flex items-center p-4 border rounded-lg bg-white hover:shadow-lg hover:border-yellow-300 transition-all duration-300 group">
              <div class="w-24 h-10 border-2 border-slate-800 rounded-full flex items-center justify-center text-xs font-bold bg-yellow-100 mr-4 flex-shrink-0 text-slate-900 group-hover:scale-110 transition-transform">
                Inicio/Fin
              </div>
              <div>
                <h5 class="font-bold text-slate-900 group-hover:text-yellow-700 transition-colors">Terminal</h5>
                <p class="text-xs text-gray-500">Marca el punto inicial o final del algoritmo.</p>
              </div>
            </div>

            <!-- Proceso -->
            <div class="flex items-center p-4 border rounded-lg bg-white hover:shadow-lg hover:border-blue-300 transition-all duration-300 group">
              <div class="w-24 h-10 border-2 border-slate-800 flex items-center justify-center text-xs font-bold bg-blue-100 mr-4 flex-shrink-0 text-slate-900 group-hover:scale-110 transition-transform">
                Proceso
              </div>
              <div>
                <h5 class="font-bold text-slate-900 group-hover:text-blue-700 transition-colors">Proceso</h5>
                <p class="text-xs text-gray-500">Cualquier operación de cálculo o asignación (ej. a = b + c).</p>
              </div>
            </div>

            <!-- Entrada/Salida -->
            <div class="flex items-center p-4 border rounded-lg bg-white hover:shadow-lg hover:border-green-300 transition-all duration-300 group">
              <div class="w-24 h-10 border-2 border-slate-800 transform -skew-x-12 flex items-center justify-center text-xs font-bold bg-green-100 mr-4 flex-shrink-0 skew-x-0 text-slate-900 group-hover:scale-110 transition-transform">
                <div class="transform skew-x-12">Entrada/Salida</div>
              </div>
              <div>
                <h5 class="font-bold text-slate-900 group-hover:text-green-700 transition-colors">Datos (I/O)</h5>
                <p class="text-xs text-gray-500">Lectura de datos o impresión de resultados.</p>
              </div>
            </div>

            <!-- Decisión -->
            <div class="flex items-center p-4 border rounded-lg bg-white hover:shadow-lg hover:border-purple-300 transition-all duration-300 group">
              <div class="w-16 h-16 border-2 border-slate-800 transform rotate-45 flex items-center justify-center bg-purple-100 mr-8 ml-4 flex-shrink-0 text-slate-900 group-hover:scale-110 transition-transform">
                <div class="transform -rotate-45 text-xs font-bold">Si/No</div>
              </div>
              <div>
                <h5 class="font-bold text-slate-900 group-hover:text-purple-700 transition-colors">Decisión</h5>
                <p class="text-xs text-gray-500">Evalúa una condición. Tiene dos salidas (Verdadero/Falso).</p>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 's4-5',
      title: 'Ejemplo Práctico Comparativo',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-slate-100 p-4 rounded text-slate-800 border border-slate-200 flex items-center gap-3">
            <span class="bg-slate-800 text-white px-2 py-1 rounded text-xs font-bold">Objetivo</span>
            <span>Calcular el área de un triángulo dada su base y su altura.</span>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Pseudocódigo -->
            <div class="border p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-all">
              <h3 class="font-bold text-lg mb-4 text-center text-indigo-700 border-b pb-2">Pseudocódigo</h3>
              <div class="font-mono text-sm space-y-2 text-slate-700">
                <p><span class="font-bold bg-purple-100 px-1 rounded text-purple-800">Inicio</span></p>
                <p class="pl-4 text-gray-400 italic">// Declaración de Variables</p>
                <p class="pl-4"><span class="text-blue-600 font-bold">Definir</span> base, altura, area <span class="text-blue-600 font-bold">Como</span> <span class="text-green-600">Real</span>;</p>
                <br>
                <p class="pl-4 text-blue-600">Escribir "Ingrese base"</p>
                <p class="pl-4 text-green-600">Leer base</p>
                <p class="pl-4 text-blue-600">Escribir "Ingrese altura"</p>
                <p class="pl-4 text-green-600">Leer altura</p>
                <div class="pl-4 my-2 bg-yellow-50 p-1 rounded border-l-2 border-yellow-400 w-fit">
                  area = (base * altura) / 2
                </div>
                <p class="pl-4 text-blue-600">Escribir "El área es:", area</p>
                <p><span class="font-bold bg-purple-100 px-1 rounded text-purple-800">Fin</span></p>
              </div>
            </div>

            <!-- Diagrama Real con Mermaid -->
            <div class="border p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-all flex flex-col items-center">
              <h3 class="font-bold text-lg mb-2 text-center text-indigo-700 border-b pb-2 w-full">Diagrama de Flujo</h3>
              <div class="mermaid">
                flowchart TD
                  A([Inicio]) --> B[/Leer base, altura/]
                  B --> C[area = base * altura / 2]
                  C --> D[/Escribir area/]
                  D --> E([Fin])
                  style A fill:#fef9c3,stroke:#eab308,stroke-width:2px
                  style E fill:#fef9c3,stroke:#eab308,stroke-width:2px
                  style B fill:#dcfce7,stroke:#16a34a,stroke-width:2px
                  style D fill:#dcfce7,stroke:#16a34a,stroke-width:2px
                  style C fill:#dbeafe,stroke:#2563eb,stroke-width:2px
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 's4-6',
      title: 'Banco de Ejercicios (10 Prácticas)',
      contentHtml: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 p-4 rounded-lg shadow-sm">
            <p class="text-yellow-800 text-sm font-medium"><strong>Instrucciones:</strong> Lea el desafío, analícelo e intente resolverlo en papel. Luego haga clic en "Mostrar Código" para verificar su lógica.</p>
          </div>

          <div class="space-y-4">
            
            <!-- 1. Suma -->
            <details class="group border rounded-lg bg-white shadow-sm open:ring-2 open:ring-blue-100 p-0 overflow-hidden transition-all">
              <summary class="cursor-pointer font-bold text-slate-800 p-4 hover:bg-slate-50 transition-colors flex justify-between items-center select-none">
                <span>1. Suma de dos números</span>
                <span class="text-slate-400 text-xs group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <div class="p-4 pt-0 text-sm border-t border-slate-100 bg-slate-50 animate-fade-in">
                <div class="mb-4 mt-4">
                  <strong class="block text-slate-700 mb-1">Desafío:</strong>
                  <p class="text-slate-600">Desarrolle un algoritmo que solicite al usuario dos números enteros y muestre en pantalla el resultado de la suma de ambos.</p>
                </div>
                <details class="bg-white border border-slate-200 rounded overflow-hidden">
                   <summary class="px-4 py-2 text-xs font-bold text-blue-600 cursor-pointer hover:bg-blue-50 select-none border-b border-slate-100">Mostrar Código de Solución</summary>
                   <div class="p-4 bg-slate-900 text-green-400 font-mono text-xs leading-relaxed">
                    <p>Inicio</p>
                    <p class="pl-4 text-gray-500">Definir A, B, Suma Como Entero;</p>
                    <p class="pl-4">Leer A, B</p>
                    <p class="pl-4">Suma = A + B</p>
                    <p class="pl-4">Escribir Suma</p>
                    <p>Fin</p>
                   </div>
                </details>
              </div>
            </details>

            <!-- 2. Promedio -->
            <details class="group border rounded-lg bg-white shadow-sm open:ring-2 open:ring-blue-100 p-0 overflow-hidden transition-all">
              <summary class="cursor-pointer font-bold text-slate-800 p-4 hover:bg-slate-50 transition-colors flex justify-between items-center select-none">
                <span>2. Promedio de notas</span>
                <span class="text-slate-400 text-xs group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <div class="p-4 pt-0 text-sm border-t border-slate-100 bg-slate-50 animate-fade-in">
                <div class="mb-4 mt-4">
                  <strong class="block text-slate-700 mb-1">Desafío:</strong>
                  <p class="text-slate-600">Calcule el promedio de un estudiante ingresando sus 3 calificaciones (pueden tener decimales).</p>
                </div>
                <details class="bg-white border border-slate-200 rounded overflow-hidden">
                   <summary class="px-4 py-2 text-xs font-bold text-blue-600 cursor-pointer hover:bg-blue-50 select-none border-b border-slate-100">Mostrar Código de Solución</summary>
                   <div class="p-4 bg-slate-900 text-green-400 font-mono text-xs leading-relaxed">
                    <p>Inicio</p>
                    <p class="pl-4 text-gray-500">Definir N1, N2, N3, Prom Como Real;</p>
                    <p class="pl-4">Leer N1, N2, N3</p>
                    <p class="pl-4">Prom = (N1 + N2 + N3) / 3</p>
                    <p class="pl-4">Escribir Prom</p>
                    <p>Fin</p>
                   </div>
                </details>
              </div>
            </details>

            <!-- 3. Cuadrado -->
            <details class="group border rounded-lg bg-white shadow-sm open:ring-2 open:ring-blue-100 p-0 overflow-hidden transition-all">
              <summary class="cursor-pointer font-bold text-slate-800 p-4 hover:bg-slate-50 transition-colors flex justify-between items-center select-none">
                <span>3. Potencia Cuadrada</span>
                <span class="text-slate-400 text-xs group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <div class="p-4 pt-0 text-sm border-t border-slate-100 bg-slate-50 animate-fade-in">
                <div class="mb-4 mt-4">
                  <strong class="block text-slate-700 mb-1">Desafío:</strong>
                  <p class="text-slate-600">Lea un número entero ingresado por teclado y muestre su valor elevado al cuadrado (multiplicado por sí mismo).</p>
                </div>
                <details class="bg-white border border-slate-200 rounded overflow-hidden">
                   <summary class="px-4 py-2 text-xs font-bold text-blue-600 cursor-pointer hover:bg-blue-50 select-none border-b border-slate-100">Mostrar Código de Solución</summary>
                   <div class="p-4 bg-slate-900 text-green-400 font-mono text-xs leading-relaxed">
                    <p>Inicio</p>
                    <p class="pl-4 text-gray-500">Definir Num, Res Como Entero;</p>
                    <p class="pl-4">Leer Num</p>
                    <p class="pl-4">Res = Num * Num</p>
                    <p class="pl-4">Escribir Res</p>
                    <p>Fin</p>
                   </div>
                </details>
              </div>
            </details>

            <!-- 4. Conversion -->
             <details class="group border rounded-lg bg-white shadow-sm open:ring-2 open:ring-blue-100 p-0 overflow-hidden transition-all">
              <summary class="cursor-pointer font-bold text-slate-800 p-4 hover:bg-slate-50 transition-colors flex justify-between items-center select-none">
                <span>4. Conversor de Longitud</span>
                <span class="text-slate-400 text-xs group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <div class="p-4 pt-0 text-sm border-t border-slate-100 bg-slate-50 animate-fade-in">
                <div class="mb-4 mt-4">
                  <strong class="block text-slate-700 mb-1">Desafío:</strong>
                  <p class="text-slate-600">Cree un algoritmo que convierta una medida dada en metros a centímetros (1m = 100cm).</p>
                </div>
                <details class="bg-white border border-slate-200 rounded overflow-hidden">
                   <summary class="px-4 py-2 text-xs font-bold text-blue-600 cursor-pointer hover:bg-blue-50 select-none border-b border-slate-100">Mostrar Código de Solución</summary>
                   <div class="p-4 bg-slate-900 text-green-400 font-mono text-xs leading-relaxed">
                    <p>Inicio</p>
                    <p class="pl-4 text-gray-500">Definir M, Cm Como Real;</p>
                    <p class="pl-4">Escribir "Ingrese metros"</p>
                    <p class="pl-4">Leer M</p>
                    <p class="pl-4">Cm = M * 100</p>
                    <p class="pl-4">Escribir Cm</p>
                    <p>Fin</p>
                   </div>
                </details>
              </div>
            </details>

            <!-- 5. Rectangulo -->
            <details class="group border rounded-lg bg-white shadow-sm open:ring-2 open:ring-blue-100 p-0 overflow-hidden transition-all">
              <summary class="cursor-pointer font-bold text-slate-800 p-4 hover:bg-slate-50 transition-colors flex justify-between items-center select-none">
                <span>5. Geometría Básica</span>
                <span class="text-slate-400 text-xs group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <div class="p-4 pt-0 text-sm border-t border-slate-100 bg-slate-50 animate-fade-in">
                <div class="mb-4 mt-4">
                  <strong class="block text-slate-700 mb-1">Desafío:</strong>
                  <p class="text-slate-600">Calcule el área de un rectángulo, solicitando al usuario los valores de la Base y la Altura.</p>
                </div>
                <details class="bg-white border border-slate-200 rounded overflow-hidden">
                   <summary class="px-4 py-2 text-xs font-bold text-blue-600 cursor-pointer hover:bg-blue-50 select-none border-b border-slate-100">Mostrar Código de Solución</summary>
                   <div class="p-4 bg-slate-900 text-green-400 font-mono text-xs leading-relaxed">
                    <p>Inicio</p>
                    <p class="pl-4 text-gray-500">Definir Base, Altura, Area Como Real;</p>
                    <p class="pl-4">Leer Base, Altura</p>
                    <p class="pl-4">Area = Base * Altura</p>
                    <p class="pl-4">Escribir Area</p>
                    <p>Fin</p>
                   </div>
                </details>
              </div>
            </details>

             <!-- 6. Salario -->
            <details class="group border rounded-lg bg-white shadow-sm open:ring-2 open:ring-blue-100 p-0 overflow-hidden transition-all">
              <summary class="cursor-pointer font-bold text-slate-800 p-4 hover:bg-slate-50 transition-colors flex justify-between items-center select-none">
                <span>6. Cálculo Salarial</span>
                <span class="text-slate-400 text-xs group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <div class="p-4 pt-0 text-sm border-t border-slate-100 bg-slate-50 animate-fade-in">
                <div class="mb-4 mt-4">
                  <strong class="block text-slate-700 mb-1">Desafío:</strong>
                  <p class="text-slate-600">Determine el salario semanal de un trabajador solicitando las Horas Trabajadas y el Precio por Hora.</p>
                </div>
                <details class="bg-white border border-slate-200 rounded overflow-hidden">
                   <summary class="px-4 py-2 text-xs font-bold text-blue-600 cursor-pointer hover:bg-blue-50 select-none border-b border-slate-100">Mostrar Código de Solución</summary>
                   <div class="p-4 bg-slate-900 text-green-400 font-mono text-xs leading-relaxed">
                    <p>Inicio</p>
                    <p class="pl-4 text-gray-500">Definir Horas, Precio, Salario Como Real;</p>
                    <p class="pl-4">Leer Horas, Precio</p>
                    <p class="pl-4">Salario = Horas * Precio</p>
                    <p class="pl-4">Escribir Salario</p>
                    <p>Fin</p>
                   </div>
                </details>
              </div>
            </details>

            <!-- 7. Edad Futura -->
            <details class="group border rounded-lg bg-white shadow-sm open:ring-2 open:ring-blue-100 p-0 overflow-hidden transition-all">
              <summary class="cursor-pointer font-bold text-slate-800 p-4 hover:bg-slate-50 transition-colors flex justify-between items-center select-none">
                <span>7. Proyección de Edad</span>
                <span class="text-slate-400 text-xs group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <div class="p-4 pt-0 text-sm border-t border-slate-100 bg-slate-50 animate-fade-in">
                <div class="mb-4 mt-4">
                  <strong class="block text-slate-700 mb-1">Desafío:</strong>
                  <p class="text-slate-600">Lea la edad actual de una persona y calcule cuántos años tendrá dentro de una década (10 años).</p>
                </div>
                <details class="bg-white border border-slate-200 rounded overflow-hidden">
                   <summary class="px-4 py-2 text-xs font-bold text-blue-600 cursor-pointer hover:bg-blue-50 select-none border-b border-slate-100">Mostrar Código de Solución</summary>
                   <div class="p-4 bg-slate-900 text-green-400 font-mono text-xs leading-relaxed">
                    <p>Inicio</p>
                    <p class="pl-4 text-gray-500">Definir EdadActual, EdadFutura Como Entero;</p>
                    <p class="pl-4">Leer EdadActual</p>
                    <p class="pl-4">EdadFutura = EdadActual + 10</p>
                    <p class="pl-4">Escribir EdadFutura</p>
                    <p>Fin</p>
                   </div>
                </details>
              </div>
            </details>

            <!-- 8. Intercambio -->
            <details class="group border rounded-lg bg-white shadow-sm open:ring-2 open:ring-orange-200 p-0 overflow-hidden ring-1 ring-orange-100 transition-all">
              <summary class="cursor-pointer font-bold text-orange-800 p-4 hover:bg-orange-50 transition-colors flex justify-between items-center select-none">
                <span>8. Intercambio de Valores (Swap)</span>
                <span class="text-orange-400 text-xs group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <div class="p-4 pt-0 text-sm border-t border-slate-100 bg-slate-50 animate-fade-in">
                <div class="mb-4 mt-4">
                  <strong class="block text-slate-700 mb-1">Desafío Lógico:</strong>
                  <p class="text-slate-600">Lea dos variables A y B. Intercambie sus valores (que A valga lo que vale B y viceversa) usando una variable auxiliar.</p>
                </div>
                <details class="bg-white border border-slate-200 rounded overflow-hidden">
                   <summary class="px-4 py-2 text-xs font-bold text-blue-600 cursor-pointer hover:bg-blue-50 select-none border-b border-slate-100">Mostrar Código de Solución</summary>
                   <div class="p-4 bg-slate-900 text-green-400 font-mono text-xs leading-relaxed">
                    <p>Inicio</p>
                    <p class="pl-4 text-gray-500">Definir A, B, Aux Como Entero;</p>
                    <p class="pl-4">Leer A, B</p>
                    <p class="pl-4 font-bold text-orange-400">Aux = A</p>
                    <p class="pl-4 font-bold text-orange-400">A = B</p>
                    <p class="pl-4 font-bold text-orange-400">B = Aux</p>
                    <p class="pl-4">Escribir A, B</p>
                    <p>Fin</p>
                   </div>
                </details>
              </div>
            </details>

            <!-- 9. Calculo Tiempo -->
            <details class="group border rounded-lg bg-white shadow-sm open:ring-2 open:ring-orange-200 p-0 overflow-hidden ring-1 ring-orange-100 transition-all">
              <summary class="cursor-pointer font-bold text-orange-800 p-4 hover:bg-orange-50 transition-colors flex justify-between items-center select-none">
                <span>9. Conversor de Segundos (Módulo)</span>
                <span class="text-orange-400 text-xs group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <div class="p-4 pt-0 text-sm border-t border-slate-100 bg-slate-50 animate-fade-in">
                <div class="mb-4 mt-4">
                  <strong class="block text-slate-700 mb-1">Desafío Matemático:</strong>
                  <p class="text-slate-600">Dada una cantidad total de segundos, calcule cuántas Horas, Minutos y Segundos son. (Use operadores de división entera y residuo).</p>
                </div>
                <details class="bg-white border border-slate-200 rounded overflow-hidden">
                   <summary class="px-4 py-2 text-xs font-bold text-blue-600 cursor-pointer hover:bg-blue-50 select-none border-b border-slate-100">Mostrar Código de Solución</summary>
                   <div class="p-4 bg-slate-900 text-green-400 font-mono text-xs leading-relaxed">
                    <p>Inicio</p>
                    <p class="pl-4 text-gray-500">Definir TSeg, H, M, S, Resto Como Entero;</p>
                    <p class="pl-4">Leer TSeg</p>
                    <p class="pl-4 font-bold text-orange-400">H = trunc(TSeg / 3600)</p>
                    <p class="pl-4 font-bold text-orange-400">Resto = TSeg % 3600</p>
                    <p class="pl-4 font-bold text-orange-400">M = trunc(Resto / 60)</p>
                    <p class="pl-4 font-bold text-orange-400">S = Resto % 60</p>
                    <p class="pl-4">Escribir H, ":", M, ":", S</p>
                    <p>Fin</p>
                   </div>
                </details>
              </div>
            </details>

            <!-- 10. Calculo Descuento -->
            <details class="group border rounded-lg bg-white shadow-sm open:ring-2 open:ring-orange-200 p-0 overflow-hidden ring-1 ring-orange-100 transition-all">
              <summary class="cursor-pointer font-bold text-orange-800 p-4 hover:bg-orange-50 transition-colors flex justify-between items-center select-none">
                <span>10. Cálculo de Descuento y Precio Final</span>
                <span class="text-orange-400 text-xs group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <div class="p-4 pt-0 text-sm border-t border-slate-100 bg-slate-50 animate-fade-in">
                <div class="mb-4 mt-4">
                  <strong class="block text-slate-700 mb-1">Desafío Matemático:</strong>
                  <p class="text-slate-600">Una tienda ofrece un 15% de descuento sobre el precio base. Solicite el precio, calcule el monto del descuento y el precio final a pagar.</p>
                </div>
                <details class="bg-white border border-slate-200 rounded overflow-hidden">
                   <summary class="px-4 py-2 text-xs font-bold text-blue-600 cursor-pointer hover:bg-blue-50 select-none border-b border-slate-100">Mostrar Código de Solución</summary>
                   <div class="p-4 bg-slate-900 text-green-400 font-mono text-xs leading-relaxed">
                    <p>Inicio</p>
                    <p class="pl-4 text-gray-500">Definir Precio, Desc, Total Como Real;</p>
                    <p class="pl-4">Escribir "Ingrese precio:";</p>
                    <p class="pl-4">Leer Precio;</p>
                    <p class="pl-4 font-bold text-orange-400">Desc = Precio * 0.15</p>
                    <p class="pl-4 font-bold text-orange-400">Total = Precio - Desc</p>
                    <p class="pl-4">Escribir "Descuento: ", Desc</p>
                    <p class="pl-4">Escribir "A pagar: ", Total</p>
                    <p>Fin</p>
                   </div>
                </details>
              </div>
            </details>

          </div>
        </div>
      `
    },
    {
      id: 's4-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-6 animate-bounce">
             <span class="text-6xl font-bold select-none">?</span>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Espacio de Dudas</h3>
          <p class="text-center text-gray-600 max-w-md">
            La lógica de programación requiere práctica. ¿Dudas con el pseudocódigo o los diagramas?
          </p>
        </div>
      `
    },
    {
      id: 's4-end-thanks',
      title: 'Gracias por su atención',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">Fin de la Clase</h2>
          
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-indigo-500 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "Hablar es barato. Enséñame el código."
            </p>
            <footer class="flex items-center justify-center gap-2">
              <div class="h-px w-8 bg-slate-300"></div>
              <cite class="not-italic font-bold text-slate-900">Linus Torvalds</cite>
            </footer>
          </blockquote>
        </div>
      `
    }
  ]
};
