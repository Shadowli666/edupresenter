import { Module } from '../../types';

export const MODULE_15: Module = {
  id: 'mod-15',
  title: '15. Funciones y Procedimientos',
  description: 'Programación Modular: dividir problemas grandes en subprogramas reutilizables.',
  evaluation: 'Ejercicios Prácticos',
  slides: [
    {
      id: 's15-1',
      title: 'Divide y Vencerás',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700 text-lg">
            Hasta ahora, nuestros programas han sido un solo bloque largo de código.
          </p>
          
          <div class="flex flex-col md:flex-row gap-6 items-center">
            <div class="bg-green-50 border-l-4 border-green-500 p-4 flex-1">
              <h4 class="font-bold text-green-900 mb-2">Programación Modular</h4>
              <p class="text-green-800 text-sm">
                Consiste en dividir un problema complejo en partes más pequeñas y manejables llamadas <strong>Subprogramas</strong> (Funciones o Procedimientos).
              </p>
            </div>
            
            <div class="flex flex-col items-center gap-2 opacity-80">
               <div class="flex gap-1">
                 <div class="w-8 h-8 bg-blue-400 rounded"></div>
                 <div class="w-8 h-8 bg-red-400 rounded"></div>
               </div>
               <div class="flex gap-1">
                 <div class="w-8 h-8 bg-yellow-400 rounded"></div>
                 <div class="w-8 h-8 bg-green-400 rounded"></div>
               </div>
               <span class="text-xs font-bold text-slate-500">Bloques LEGO®</span>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 's15-2',
      title: 'Ventajas de la Modularidad',
      contentHtml: `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white p-4 rounded-xl border shadow-sm">
             <div class="text-3xl mb-2">♻️</div>
             <h4 class="font-bold text-slate-800">Reutilización</h4>
             <p class="text-sm text-slate-600">Escribes el código una vez y lo usas muchas veces (ej. <code>CalcularIVA</code>).</p>
          </div>
          
          <div class="bg-white p-4 rounded-xl border shadow-sm">
             <div class="text-3xl mb-2">📖</div>
             <h4 class="font-bold text-slate-800">Legibilidad</h4>
             <p class="text-sm text-slate-600">Es más fácil leer <code>OrdenarLista()</code> que 50 líneas de bucles complejos.</p>
          </div>

          <div class="bg-white p-4 rounded-xl border shadow-sm">
             <div class="text-3xl mb-2">🔧</div>
             <h4 class="font-bold text-slate-800">Mantenimiento</h4>
             <p class="text-sm text-slate-600">Si hay un error en el cálculo, solo lo arreglas en un lugar y se corrige en todo el programa.</p>
          </div>

          <div class="bg-white p-4 rounded-xl border shadow-sm">
             <div class="text-3xl mb-2">🤝</div>
             <h4 class="font-bold text-slate-800">Trabajo en Equipo</h4>
             <p class="text-sm text-slate-600">Cada programador puede trabajar en una función distinta sin estorbarse.</p>
          </div>
        </div>
      `,
    },
    {
      id: 's15-3',
      title: 'Procedimientos vs Funciones',
      contentHtml: `
        <div class="space-y-6">
          <div class="grid grid-cols-2 gap-6">
            <div class="bg-white border-2 border-indigo-100 p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
              <div class="text-5xl mb-4">🤖</div>
              <h4 class="font-bold text-indigo-900 mb-2">Procedimiento</h4>
              <p class="text-xs text-gray-600">Realiza una <strong>acción</strong> (ej. limpiar pantalla, mostrar menú) pero <strong>no devuelve</strong> un valor.</p>
              <span class="mt-3 bg-indigo-100 text-indigo-800 text-[10px] font-bold px-2 py-1 rounded">Void / SubProceso</span>
            </div>
            
            <div class="bg-white border-2 border-green-100 p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
              <div class="text-5xl mb-4">🧮</div>
              <h4 class="font-bold text-green-900 mb-2">Función</h4>
              <p class="text-xs text-gray-600">Realiza un cálculo y <strong>retorna</strong> un resultado (ej. raíz cuadrada, suma) para usarlo.</p>
              <span class="mt-3 bg-green-100 text-green-800 text-[10px] font-bold px-2 py-1 rounded">Return / Retorno</span>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 's15-4',
      title: 'Estructura de una Función',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-slate-900 text-slate-300 p-5 rounded-xl font-mono text-sm shadow-lg">
            <span class="text-purple-400">Funcion</span> resultado <- <span class="text-yellow-400">NombreFuncion</span>(arg1, arg2)<br>
            &nbsp;&nbsp;<span class="text-gray-500">// Bloque de instrucciones</span><br>
            &nbsp;&nbsp;resultado <- arg1 + arg2<br>
            <span class="text-purple-400">FinFuncion</span>
          </div>
          
          <div class="bg-gray-100 p-3 rounded border border-gray-200 text-xs text-gray-600 font-mono">
            <span class="font-bold text-gray-800">C / Java:</span><br>
            int sumar(int a, int b) { return a + b; }
          </div>
        </div>
      `,
    },
    {
      id: 's15-5',
      title: 'Parámetros y Argumentos',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Son los datos que le enviamos a la función para que trabaje.
          </p>
          
          <div class="flex flex-col gap-4">
            <div class="bg-blue-50 p-4 rounded border-l-4 border-blue-400">
              <h4 class="font-bold text-blue-900 text-sm">Parámetros Formales (El Molde)</h4>
              <p class="text-xs text-blue-800">Las variables declaradas en la definición de la función.</p>
              <code class="text-xs bg-white px-1 rounded mt-1 block w-fit">Funcion Sumar(a, b)</code>
            </div>

            <div class="bg-green-50 p-4 rounded border-l-4 border-green-400">
              <h4 class="font-bold text-green-900 text-sm">Parámetros Reales (El Relleno)</h4>
              <p class="text-xs text-green-800">Los valores reales que enviamos al llamar la función.</p>
              <code class="text-xs bg-white px-1 rounded mt-1 block w-fit">Sumar(5, 10)</code>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 's15-6',
      title: 'Paso por Valor vs Referencia',
      contentHtml: `
        <div class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
              <div class="flex justify-between items-start mb-2">
                <h4 class="font-bold text-yellow-900">Paso por Valor</h4>
                <span class="text-2xl">📄</span>
              </div>
              <p class="text-xs text-yellow-800 mb-2">La función recibe una <strong>FOTOCOPIA</strong> del dato.</p>
              <ul class="text-[10px] text-yellow-900 list-disc list-inside">
                <li>Si rayas la fotocopia, el original NO cambia.</li>
                <li>Más seguro, usa más memoria.</li>
              </ul>
            </div>

            <div class="bg-red-50 p-4 rounded-xl border border-red-200">
              <div class="flex justify-between items-start mb-2">
                <h4 class="font-bold text-red-900">Paso por Referencia</h4>
                <span class="text-2xl">🔗</span>
              </div>
              <p class="text-xs text-red-800 mb-2">La función recibe el <strong>ORIGINAL</strong> (dirección de memoria).</p>
              <ul class="text-[10px] text-red-900 list-disc list-inside">
                <li>Si modificas el dato, el original SÍ cambia.</li>
                <li>Eficiente, pero peligroso (efectos secundarios).</li>
              </ul>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 's15-7',
      title: 'Ámbito de Variables (Scope)',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            ¿Dónde "vive" y es visible una variable?
          </p>
          
          <div class="relative h-48 bg-green-100 rounded-xl border-2 border-green-300 p-4 overflow-hidden">
            <span class="absolute top-2 right-2 text-green-700 font-bold text-xs uppercase">Ámbito Global (Parque Público)</span>
            <div class="text-center mt-2 text-green-800 font-mono text-xs">Variable Global = Visible para todos</div>
            
            <div class="absolute bottom-4 left-4 w-32 h-24 bg-white border-2 border-slate-400 rounded shadow-lg p-2">
               <span class="text-[10px] font-bold text-slate-600 block border-b mb-1">Función A (Casa)</span>
               <span class="text-[10px] text-slate-500">Var Local A</span>
            </div>

            <div class="absolute bottom-4 right-4 w-32 h-24 bg-white border-2 border-slate-400 rounded shadow-lg p-2">
               <span class="text-[10px] font-bold text-slate-600 block border-b mb-1">Función B (Casa)</span>
               <span class="text-[10px] text-slate-500">Var Local B</span>
            </div>
          </div>
          
          <p class="text-xs text-gray-500 text-center">
            Las variables locales son privadas de su función. Las globales son públicas (¡Cuidado!).
          </p>
        </div>
      `,
    },
    {
      id: 's15-8',
      title: 'Ejemplo Práctico',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">Función para calcular el área de un círculo.</p>
          <div class="bg-slate-900 text-slate-300 p-5 rounded-xl font-mono text-xs shadow-lg">
            <span class="text-purple-400">Funcion</span> a <- <span class="text-yellow-400">AreaCirculo</span>(radio)<br>
            &nbsp;&nbsp;<span class="text-purple-400">Definir</span> a <span class="text-purple-400">Como Real</span><br>
            &nbsp;&nbsp;a <- 3.1416 * radio * radio<br>
            <span class="text-purple-400">FinFuncion</span><br>
            <br>
            <span class="text-purple-400">Algoritmo</span> Principal<br>
            &nbsp;&nbsp;<span class="text-blue-400">Escribir</span> "El área es: ", <span class="text-yellow-400">AreaCirculo</span>(5)<br>
            <span class="text-purple-400">FinAlgoritmo</span>
          </div>
        </div>
      `,
    },
    {
      id: 's15-9',
      title: 'Resumen',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center space-y-6">
          <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-4xl">
            🧩
          </div>
          <h3 class="text-2xl font-bold text-slate-900">Código Profesional</h3>
          <p class="text-gray-600 max-w-md">
            La modularidad es el primer paso hacia la ingeniería de software. Aprender a encapsular lógica en funciones hace que el código sea más limpio, seguro y fácil de depurar.
          </p>
        </div>
      `,
    },
  ],
};
