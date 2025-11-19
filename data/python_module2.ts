
import { Module } from '../types';

export const PYTHON_MODULE_2: Module = {
  id: 'py-mod-2',
  title: '2. Sintaxis y Datos',
  description: 'Variables, tipos de datos y operadores aritméticos.',
  evaluation: '0% - Ejercicio Práctico',
  slides: [
    {
      id: 'py2-1',
      title: 'Variables y Tipado Dinámico',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Una variable es un nombre que se refiere a un valor en memoria. En Python, el tipo de dato se infiere automáticamente al asignar el valor (Tipado Dinámico).
          </p>

          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-slate-900 p-5 rounded-xl text-slate-300 font-mono text-sm shadow-lg">
              <span class="text-gray-500"># Asignación</span><br>
              x = <span class="text-blue-400">10</span><br>
              nombre = <span class="text-green-400">"Ana"</span><br>
              precio = <span class="text-blue-400">15.5</span><br>
              <br>
              <span class="text-gray-500"># Reasignación (Cambio de tipo)</span><br>
              x = <span class="text-green-400">"Ahora soy texto"</span>
            </div>

            <div class="flex flex-col justify-center space-y-4">
              <div class="bg-blue-50 p-3 rounded border border-blue-100">
                <strong class="text-blue-900 text-sm">Reglas de Nombres</strong>
                <ul class="list-disc list-inside text-xs text-blue-800 mt-1">
                  <li>Pueden contener letras, números y guion bajo (_).</li>
                  <li>NO pueden empezar con números.</li>
                  <li>Case-sensitive (Edad != edad).</li>
                  <li>Python usa <code>snake_case</code> por convención.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py2-2',
      title: 'Tipos de Datos Fundamentales',
      contentHtml: `
        <div class="space-y-8">
          <div class="grid grid-cols-2 gap-4">
            <!-- Integers -->
            <div class="bg-white p-4 rounded border shadow-sm hover:shadow-md transition">
              <h4 class="font-bold text-slate-800 mb-1">int (Enteros)</h4>
              <p class="text-xs text-gray-500 mb-2">Números sin decimales. Precisión ilimitada en Python 3.</p>
              <code class="bg-slate-100 px-2 py-1 rounded text-xs text-slate-700">edad = 25</code>
            </div>

            <!-- Floats -->
            <div class="bg-white p-4 rounded border shadow-sm hover:shadow-md transition">
              <h4 class="font-bold text-slate-800 mb-1">float (Flotantes)</h4>
              <p class="text-xs text-gray-500 mb-2">Números con punto decimal.</p>
              <code class="bg-slate-100 px-2 py-1 rounded text-xs text-slate-700">pi = 3.14159</code>
            </div>

            <!-- Strings -->
            <div class="bg-white p-4 rounded border shadow-sm hover:shadow-md transition">
              <h4 class="font-bold text-slate-800 mb-1">str (Cadenas)</h4>
              <p class="text-xs text-gray-500 mb-2">Texto entre comillas simples o dobles.</p>
              <code class="bg-slate-100 px-2 py-1 rounded text-xs text-slate-700">msg = "Hola"</code>
            </div>

            <!-- Booleans -->
            <div class="bg-white p-4 rounded border shadow-sm hover:shadow-md transition">
              <h4 class="font-bold text-slate-800 mb-1">bool (Booleanos)</h4>
              <p class="text-xs text-gray-500 mb-2">Valor de verdad (True/False). Nota la mayúscula inicial.</p>
              <code class="bg-slate-100 px-2 py-1 rounded text-xs text-slate-700">activo = True</code>
            </div>
          </div>
          
          <div class="bg-yellow-50 p-3 rounded text-xs text-yellow-800 text-center border border-yellow-200">
            Usa la función <code>type(variable)</code> para saber qué tipo de dato almacena una variable.
          </div>
        </div>
      `
    },
    {
      id: 'py2-3',
      title: 'Operadores Aritméticos',
      contentHtml: `
        <div class="space-y-6">
          <table class="w-full text-sm text-left text-slate-600 border rounded overflow-hidden shadow-sm">
            <thead class="bg-slate-100 text-slate-800 uppercase font-bold text-xs">
              <tr>
                <th class="px-4 py-2">Operador</th>
                <th class="px-4 py-2">Descripción</th>
                <th class="px-4 py-2">Ejemplo</th>
                <th class="px-4 py-2">Resultado</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr>
                <td class="px-4 py-2 font-mono font-bold bg-slate-50">+</td>
                <td class="px-4 py-2">Suma</td>
                <td class="px-4 py-2 font-mono">5 + 3</td>
                <td class="px-4 py-2">8</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-mono font-bold bg-slate-50">-</td>
                <td class="px-4 py-2">Resta</td>
                <td class="px-4 py-2 font-mono">10 - 2</td>
                <td class="px-4 py-2">8</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-mono font-bold bg-slate-50">*</td>
                <td class="px-4 py-2">Multiplicación</td>
                <td class="px-4 py-2 font-mono">4 * 2</td>
                <td class="px-4 py-2">8</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-mono font-bold bg-slate-50">/</td>
                <td class="px-4 py-2">División (Siempre float)</td>
                <td class="px-4 py-2 font-mono">16 / 2</td>
                <td class="px-4 py-2">8.0</td>
              </tr>
               <tr>
                <td class="px-4 py-2 font-mono font-bold bg-slate-50 text-purple-600">//</td>
                <td class="px-4 py-2 font-bold text-purple-700">División Entera</td>
                <td class="px-4 py-2 font-mono">17 // 2</td>
                <td class="px-4 py-2">8</td>
              </tr>
               <tr>
                <td class="px-4 py-2 font-mono font-bold bg-slate-50 text-purple-600">%</td>
                <td class="px-4 py-2 font-bold text-purple-700">Módulo (Residuo)</td>
                <td class="px-4 py-2 font-mono">18 % 10</td>
                <td class="px-4 py-2">8</td>
              </tr>
               <tr>
                <td class="px-4 py-2 font-mono font-bold bg-slate-50 text-purple-600">**</td>
                <td class="px-4 py-2 font-bold text-purple-700">Potencia</td>
                <td class="px-4 py-2 font-mono">2 ** 3</td>
                <td class="px-4 py-2">8</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    }
  ]
};
