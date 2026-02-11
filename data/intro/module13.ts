import { Module } from '../../types';

export const MODULE_13: Module = {
  id: 'mod-13',
  title: '13. Arreglos Unidimensionales (Vectores)',
  description: 'Introducción a las estructuras de datos estáticas: definición, declaración y recorrido de vectores.',
  evaluation: 'Ejercicios Prácticos',
  slides: [
    {
      id: 's13-1',
      title: '¿Qué es un Arreglo?',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700 text-lg">
            Un <strong>Arreglo (Array)</strong> o Vector es una estructura de datos que permite almacenar una colección de elementos del <strong>mismo tipo</strong> bajo un único nombre.
          </p>
          
          <div class="flex flex-col md:flex-row gap-6 items-center">
             <div class="bg-blue-50 border-l-4 border-blue-500 p-4 flex-1">
               <h4 class="font-bold text-blue-900 mb-2">Analogía del Casillero</h4>
               <p class="text-blue-800 text-sm">
                 Imagina un mueble con cajones numerados. Cada cajón guarda un objeto, pero todos los cajones pertenecen al mismo mueble.
               </p>
             </div>
             
             <div class="flex gap-1 p-4 bg-slate-100 rounded-xl shadow-inner">
               <div class="w-12 h-12 bg-white border-2 border-blue-400 rounded flex items-center justify-center font-bold text-blue-600 shadow-sm">10</div>
               <div class="w-12 h-12 bg-white border-2 border-blue-400 rounded flex items-center justify-center font-bold text-blue-600 shadow-sm">25</div>
               <div class="w-12 h-12 bg-white border-2 border-blue-400 rounded flex items-center justify-center font-bold text-blue-600 shadow-sm">8</div>
               <div class="w-12 h-12 bg-white border-2 border-blue-400 rounded flex items-center justify-center font-bold text-blue-600 shadow-sm">99</div>
               <div class="w-12 h-12 bg-white border-2 border-blue-400 rounded flex items-center justify-center font-bold text-blue-600 shadow-sm">...</div>
             </div>
          </div>
        </div>
      `,
    },
    {
      id: 's13-2',
      title: 'Características Principales',
      contentHtml: `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white p-4 rounded-xl border shadow-sm">
             <div class="text-3xl mb-2">👯</div>
             <h4 class="font-bold text-slate-800">Homogeneidad</h4>
             <p class="text-sm text-slate-600">Todos los datos deben ser del mismo tipo (ej. todos enteros, todos textos).</p>
          </div>
          
          <div class="bg-white p-4 rounded-xl border shadow-sm">
             <div class="text-3xl mb-2">📏</div>
             <h4 class="font-bold text-slate-800">Tamaño Fijo</h4>
             <p class="text-sm text-slate-600">Se define cuántos espacios tendrá al crearlo y no suele cambiar.</p>
          </div>

          <div class="bg-white p-4 rounded-xl border shadow-sm">
             <div class="text-3xl mb-2">🎯</div>
             <h4 class="font-bold text-slate-800">Acceso Directo</h4>
             <p class="text-sm text-slate-600">Llegas a cualquier elemento instantáneamente usando su índice.</p>
          </div>

          <div class="bg-white p-4 rounded-xl border shadow-sm">
             <div class="text-3xl mb-2">🧱</div>
             <h4 class="font-bold text-slate-800">Memoria Contigua</h4>
             <p class="text-sm text-slate-600">Ocupan bloques pegados uno al lado del otro en la RAM.</p>
          </div>
        </div>
      `,
    },
    {
      id: 's13-3',
      title: 'Índices y Posiciones',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Los elementos se identifican por su posición, llamada <strong>índice</strong>.
          </p>
          
          <div class="bg-yellow-50 border border-yellow-200 p-4 rounded-lg flex items-start gap-3">
            <div class="text-2xl">💣</div>
            <div>
              <p class="text-yellow-900 font-bold">¡La Trampa del Cero!</p>
              <p class="text-yellow-800 text-sm">
                En programación, casi siempre empezamos a contar desde <strong>0</strong>, no desde 1. El primer elemento es el índice 0.
              </p>
            </div>
          </div>

          <div class="flex flex-col items-center mt-6">
            <div class="flex">
              <!-- Index Row -->
              <div class="w-16 text-center text-xs text-gray-400 font-mono mb-1">Ind: 0</div>
              <div class="w-16 text-center text-xs text-gray-400 font-mono mb-1">Ind: 1</div>
              <div class="w-16 text-center text-xs text-gray-400 font-mono mb-1">Ind: 2</div>
              <div class="w-16 text-center text-xs text-gray-400 font-mono mb-1">Ind: 3</div>
              <div class="w-16 text-center text-xs text-gray-400 font-mono mb-1">Ind: 4</div>
            </div>
            
            <div class="flex shadow-lg rounded-lg overflow-hidden border-2 border-slate-300">
              <div class="w-16 h-16 bg-white flex items-center justify-center text-xl font-bold text-slate-700 border-r border-slate-200">10</div>
              <div class="w-16 h-16 bg-white flex items-center justify-center text-xl font-bold text-slate-700 border-r border-slate-200">45</div>
              <div class="w-16 h-16 bg-white flex items-center justify-center text-xl font-bold text-slate-700 border-r border-slate-200">12</div>
              <div class="w-16 h-16 bg-white flex items-center justify-center text-xl font-bold text-slate-700 border-r border-slate-200">7</div>
              <div class="w-16 h-16 bg-white flex items-center justify-center text-xl font-bold text-slate-700">99</div>
            </div>
            
            <div class="mt-2 text-sm text-blue-600 font-bold">
               vector[2] = 12
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 's13-4',
      title: 'Declaración en Pseudocódigo',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Para usar un arreglo, primero debemos declararlo indicando su tipo y tamaño.
          </p>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-slate-900 text-slate-300 p-5 rounded-xl font-mono text-sm shadow-lg">
              <span class="text-gray-500">// Sintaxis General</span><br>
              <span class="text-purple-400">Dimension</span> nombre[tamaño]<br>
              <br>
              <span class="text-gray-500">// Ejemplo Real</span><br>
              <span class="text-purple-400">Dimension</span> notas[5]<br>
              <span class="text-purple-400">Definir</span> notas <span class="text-purple-400">Como Entero</span>
            </div>
            
            <div class="flex items-center justify-center">
               <div class="mermaid">
                 graph TD
                   Decl[Declaración] --> Mem[Reserva Memoria]
                   Mem --> Esp[5 Espacios Vacíos]
                   style Decl fill:#dbeafe,stroke:#2563eb
                   style Esp fill:#f1f5f9,stroke:#64748b,stroke-dasharray: 5 5
               </div>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 's13-5',
      title: 'Operaciones Básicas: Asignación',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Guardar un valor en una posición específica usando el índice.
          </p>
          <div class="grid md:grid-cols-2 gap-6 items-center">
            <div class="bg-slate-900 text-slate-300 p-5 rounded-xl font-mono text-sm shadow-lg">
              <span class="text-gray-500">// Sintaxis</span><br>
              nombre[índice] = valor<br>
              <br>
              <span class="text-gray-500">// Ejemplo</span><br>
              notas[0] = 20<br>
              notas[2] = 15
            </div>
            
            <div class="flex flex-col items-center gap-2">
               <div class="flex shadow rounded overflow-hidden border border-slate-300 bg-white">
                 <div class="w-12 h-12 flex items-center justify-center border-r bg-green-100 font-bold text-green-800">20</div>
                 <div class="w-12 h-12 flex items-center justify-center border-r text-gray-300">?</div>
                 <div class="w-12 h-12 flex items-center justify-center border-r bg-green-100 font-bold text-green-800">15</div>
                 <div class="w-12 h-12 flex items-center justify-center border-r text-gray-300">?</div>
                 <div class="w-12 h-12 flex items-center justify-center text-gray-300">?</div>
               </div>
               <div class="flex w-full justify-between px-2 text-[10px] text-gray-500 font-mono">
                 <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span>
               </div>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 's13-6',
      title: 'Operaciones Básicas: Lectura',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Obtener el valor almacenado en una posición para usarlo en cálculos o mostrarlo.
          </p>
          <div class="bg-slate-900 text-slate-300 p-5 rounded-xl font-mono text-sm shadow-lg border-l-4 border-indigo-500">
            <span class="text-blue-400">Escribir</span> notas[0]  <span class="text-gray-500">// Muestra 20</span><br>
            <br>
            promedio = (notas[0] + notas[2]) / 2
          </div>
        </div>
      `,
    },
    {
      id: 's13-7',
      title: 'Recorrido de Arreglos',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Para procesar todos los elementos (ej. sumarlos, imprimirlos), usamos estructuras repetitivas como el ciclo <strong>Para (For)</strong>.
          </p>
          
          <div class="grid md:grid-cols-2 gap-6 items-center">
            <div class="bg-slate-900 text-slate-300 p-5 rounded-xl font-mono text-xs shadow-lg">
              <span class="text-purple-400">Para</span> i = 0 <span class="text-purple-400">Hasta</span> 4 <span class="text-purple-400">Hacer</span><br>
              &nbsp;&nbsp;<span class="text-blue-400">Escribir</span> "Nota ", i, ": ", notas[i]<br>
              <span class="text-purple-400">FinPara</span>
            </div>

            <div class="flex justify-center">
               <div class="mermaid">
                 flowchart TD
                   Start((Inicio)) --> Init["i = 0"]
                   Init --> Cond{"i <= 4?"}
                   Cond -->|V| Acc["Acceder notas[i]"]
                   Acc --> Inc["i = i + 1"]
                   Inc --> Cond
                   Cond -->|F| End((Fin))
                   style Acc fill:#dcfce7,stroke:#16a34a
                   style Init fill:#dbeafe,stroke:#2563eb
               </div>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 's13-8',
      title: 'Ejemplo: Suma de Elementos',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Algoritmo para sumar todos los valores de un vector de 5 números.
          </p>
          <div class="bg-slate-900 text-slate-300 p-5 rounded-xl font-mono text-xs shadow-lg overflow-x-auto">
            acumulador = 0<br>
            <span class="text-purple-400">Para</span> i = 0 <span class="text-purple-400">Hasta</span> 4 <span class="text-purple-400">Hacer</span><br>
            &nbsp;&nbsp;acumulador = acumulador + vector[i]<br>
            <span class="text-purple-400">FinPara</span><br>
            <span class="text-blue-400">Escribir</span> "La suma total es: ", acumulador
          </div>
        </div>
      `,
    },
    {
      id: 's13-9',
      title: 'Errores Comunes',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded shadow-sm">
            <h4 class="font-bold text-red-900 flex items-center gap-2">
              <span>🚫</span> Index Out of Bounds
            </h4>
            <p class="text-sm text-red-800 mt-1">
              Intentar acceder a la posición 5 en un arreglo de tamaño 5. ¡Recuerda que van de 0 a 4!
            </p>
          </div>

          <div class="bg-orange-50 border-l-4 border-orange-500 p-4 rounded shadow-sm">
            <h4 class="font-bold text-orange-900 flex items-center gap-2">
              <span>⚠️</span> Tipos Incorrectos
            </h4>
            <p class="text-sm text-orange-800 mt-1">
              Intentar guardar texto ("Hola") en un arreglo definido como Entero.
            </p>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded shadow-sm">
            <h4 class="font-bold text-yellow-900 flex items-center gap-2">
              <span>🗑️</span> No Inicializar
            </h4>
            <p class="text-sm text-yellow-800 mt-1">
              Leer valores del arreglo antes de haber guardado algo en ellos (pueden contener "basura" de la memoria).
            </p>
          </div>
        </div>
      `,
    },
    {
      id: 's13-10',
      title: 'Ventajas de los Arreglos',
      contentHtml: `
        <div class="space-y-6">
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-green-50 p-6 rounded-xl border border-green-100 text-center">
              <div class="text-4xl mb-3">🗂️</div>
              <h4 class="font-bold text-green-900 mb-2">Organización</h4>
              <p class="text-sm text-green-800">Permiten manejar grandes volúmenes de datos sin declarar cientos de variables (n1, n2, n3...).</p>
            </div>
            <div class="bg-blue-50 p-6 rounded-xl border border-blue-100 text-center">
              <div class="text-4xl mb-3">⚡</div>
              <h4 class="font-bold text-blue-900 mb-2">Velocidad</h4>
              <p class="text-sm text-blue-800">El acceso a los datos es extremadamente rápido gracias a la aritmética de punteros.</p>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 's13-11',
      title: 'Ejercicio en Clase',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-white p-6 rounded-xl border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-4">Problema Propuesto</h4>
            <p class="text-slate-600 mb-4">
              Crear un algoritmo que lea 10 números enteros, los guarde en un arreglo y luego muestre solo los números <strong>pares</strong>.
            </p>
            
            <details class="group">
              <summary class="flex items-center gap-2 text-sm font-bold text-blue-600 cursor-pointer hover:underline p-2 bg-blue-50 rounded">
                <span>💡 Ver Pista / Solución</span>
              </summary>
              <div class="mt-4 bg-slate-900 text-slate-300 p-4 rounded font-mono text-xs">
                <span class="text-purple-400">Dimension</span> nums[10]<br>
                <span class="text-gray-500">// 1. Llenar</span><br>
                <span class="text-purple-400">Para</span> i = 0 <span class="text-purple-400">Hasta</span> 9 <span class="text-purple-400">Hacer</span><br>
                &nbsp;&nbsp;Leer nums[i]<br>
                <span class="text-purple-400">FinPara</span><br>
                <br>
                <span class="text-gray-500">// 2. Mostrar Pares</span><br>
                <span class="text-purple-400">Para</span> i = 0 <span class="text-purple-400">Hasta</span> 9 <span class="text-purple-400">Hacer</span><br>
                &nbsp;&nbsp;<span class="text-purple-400">Si</span> (nums[i] % 2 == 0) <span class="text-purple-400">Entonces</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;Escribir nums[i]<br>
                &nbsp;&nbsp;<span class="text-purple-400">FinSi</span><br>
                <span class="text-purple-400">FinPara</span>
              </div>
            </details>
          </div>
        </div>
      `,
    },
    {
      id: 's13-12',
      title: 'Resumen',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center space-y-6">
          <div class="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-4xl">
            🏁
          </div>
          <h3 class="text-2xl font-bold text-slate-900">Fundamentos Sólidos</h3>
          <p class="text-gray-600 max-w-md">
            Los arreglos son la estructura de datos más básica. Entender cómo funcionan los <strong>índices (0 a N-1)</strong> y los recorridos con <strong>ciclos</strong> es esencial para temas futuros como matrices y ordenamiento.
          </p>
        </div>
      `,
    },
  ],
};
