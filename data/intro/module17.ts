import { Module } from '../../types';

export const MODULE_17: Module = {
  id: 'mod-17',
  title: '17. Registros y Estructuras',
  description: 'Datos compuestos heterogéneos: definición y uso de Structs.',
  evaluation: 'Ejercicios Prácticos',
  slides: [
    {
      id: 's17-1',
      title: 'Limitaciones de los Arreglos',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Los arreglos son geniales, pero tienen un defecto: solo guardan datos del <strong>mismo tipo</strong>.
          </p>
          
          <div class="grid grid-cols-2 gap-6">
            <div class="bg-red-50 p-4 rounded-xl border border-red-200 opacity-60">
              <h4 class="font-bold text-red-900 mb-2">Arreglo (Cartón de Huevos)</h4>
              <div class="flex gap-1 justify-center">
                <div class="w-8 h-8 bg-white rounded-full border border-gray-300"></div>
                <div class="w-8 h-8 bg-white rounded-full border border-gray-300"></div>
                <div class="w-8 h-8 bg-white rounded-full border border-gray-300"></div>
              </div>
              <p class="text-xs text-center mt-2 text-red-800">Solo caben huevos (Enteros).</p>
            </div>

            <div class="bg-green-50 p-4 rounded-xl border border-green-200 shadow-md transform scale-105">
              <h4 class="font-bold text-green-900 mb-2">Registro (Lonchera)</h4>
              <div class="flex gap-2 justify-center items-center bg-white p-2 rounded border border-green-100">
                <div class="w-8 h-8 bg-orange-200 rounded flex items-center justify-center text-xs">🥪</div>
                <div class="w-8 h-8 bg-red-200 rounded-full flex items-center justify-center text-xs">🍎</div>
                <div class="w-6 h-10 bg-blue-200 rounded flex items-center justify-center text-xs">🧃</div>
              </div>
              <p class="text-xs text-center mt-2 text-green-800">Caben cosas distintas (Texto, Entero, Real).</p>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 's17-2',
      title: '¿Qué es un Registro (Struct)?',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700 text-lg">
            Un <strong>Registro</strong> es una estructura de datos que agrupa variables de <strong>diferentes tipos</strong> bajo un mismo nombre.
          </p>
          
          <div class="flex justify-center">
            <div class="bg-white w-64 rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div class="bg-blue-600 h-16 flex items-center px-4">
                <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold">👤</div>
                <span class="text-white font-bold ml-3">ID CARD</span>
              </div>
              <div class="p-4 space-y-3">
                <div>
                  <span class="text-[10px] text-gray-400 uppercase font-bold">Nombre (String)</span>
                  <div class="text-sm font-bold text-gray-800">Juan Perez</div>
                </div>
                <div class="flex gap-4">
                  <div>
                    <span class="text-[10px] text-gray-400 uppercase font-bold">Edad (Int)</span>
                    <div class="text-sm font-bold text-gray-800">20</div>
                  </div>
                  <div>
                    <span class="text-[10px] text-gray-400 uppercase font-bold">Promedio (Float)</span>
                    <div class="text-sm font-bold text-gray-800">18.5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <p class="text-xs text-gray-500 text-center">
            Cada dato dentro del registro se llama <strong>Campo</strong>.
          </p>
        </div>
      `,
    },
    {
      id: 's17-3',
      title: 'Declaración',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-slate-900 text-slate-300 p-5 rounded-xl font-mono text-sm shadow-lg">
            <span class="text-purple-400">Estructura</span> <span class="text-yellow-400">Estudiante</span><br>
            &nbsp;&nbsp;nombre <span class="text-purple-400">Como Caracter</span><br>
            &nbsp;&nbsp;edad <span class="text-purple-400">Como Entero</span><br>
            &nbsp;&nbsp;promedio <span class="text-purple-400">Como Real</span><br>
            <span class="text-purple-400">FinEstructura</span><br>
            <br>
            <span class="text-gray-500">// Crear una variable de ese tipo</span><br>
            <span class="text-purple-400">Definir</span> alumno1 <span class="text-purple-400">Como</span> <span class="text-yellow-400">Estudiante</span>
          </div>
        </div>
      `,
    },
    {
      id: 's17-4',
      title: 'Acceso a los Campos',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Usamos el operador punto (<code>.</code>) para acceder a los datos internos.
          </p>
          
          <div class="flex items-center justify-center gap-4 font-mono text-lg">
            <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded">alumno1</span>
            <span class="text-slate-400 font-bold">.</span>
            <span class="bg-green-100 text-green-800 px-2 py-1 rounded">nombre</span>
            <span class="text-slate-400">=</span>
            <span class="text-orange-600">"Juan"</span>
          </div>

          <div class="bg-gray-50 p-4 rounded border-l-4 border-green-500 font-mono text-xs text-gray-600 mt-4">
            alumno1.edad = 20<br>
            Escribir "El alumno es: ", alumno1.nombre
          </div>
        </div>
      `,
    },
    {
      id: 's17-5',
      title: 'Arreglos de Registros',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            La combinación más poderosa: Un arreglo donde cada casilla es un Registro.
          </p>
          
          <div class="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
            <table class="min-w-full text-xs text-left">
              <thead class="bg-slate-100 font-bold text-slate-600">
                <tr>
                  <th class="p-2">Índice</th>
                  <th class="p-2">.nombre</th>
                  <th class="p-2">.edad</th>
                  <th class="p-2">.promedio</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                <tr class="bg-white">
                  <td class="p-2 font-mono text-slate-400">[0]</td>
                  <td class="p-2">"Ana"</td>
                  <td class="p-2">19</td>
                  <td class="p-2">18.5</td>
                </tr>
                <tr class="bg-slate-50">
                  <td class="p-2 font-mono text-slate-400">[1]</td>
                  <td class="p-2">"Beto"</td>
                  <td class="p-2">20</td>
                  <td class="p-2">15.0</td>
                </tr>
                <tr class="bg-white">
                  <td class="p-2 font-mono text-slate-400">[2]</td>
                  <td class="p-2">"Carla"</td>
                  <td class="p-2">19</td>
                  <td class="p-2">19.2</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p class="text-xs text-gray-500 text-center">
            Esto es básicamente una base de datos en memoria.
          </p>
        </div>
      `,
    },
    {
      id: 's17-6',
      title: 'Ejemplo: Agenda Telefónica',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Estructura Contacto: Nombre, Telefono, Email.
          </p>
          <div class="bg-slate-900 text-slate-300 p-5 rounded-xl font-mono text-xs shadow-lg">
            <span class="text-purple-400">Para</span> i <- 0 <span class="text-purple-400">Hasta</span> N-1 <span class="text-purple-400">Hacer</span><br>
            &nbsp;&nbsp;<span class="text-blue-400">Escribir</span> "Ingrese nombre:"<br>
            &nbsp;&nbsp;<span class="text-blue-400">Leer</span> agenda[i].nombre<br>
            &nbsp;&nbsp;<span class="text-blue-400">Escribir</span> "Ingrese telefono:"<br>
            &nbsp;&nbsp;<span class="text-blue-400">Leer</span> agenda[i].telefono<br>
            <span class="text-purple-400">FinPara</span>
          </div>
        </div>
      `,
    },
    {
      id: 's17-7',
      title: 'Resumen',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center space-y-6">
          <div class="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-4xl">
            🏗️
          </div>
          <h3 class="text-2xl font-bold text-slate-900">Modelando la Realidad</h3>
          <p class="text-gray-600 max-w-md">
            Los registros nos permiten modelar objetos del mundo real (Personas, Productos, Vehículos) de manera más fiel. Son el precursor directo de las <strong>Clases y Objetos</strong>.
          </p>
        </div>
      `,
    },
  ],
};
