import { Module } from '../../types';

export const MODULE_18: Module = {
  id: 'mod-18',
  title: '18. Cierre y Proyecto Final',
  description: 'Repaso general, entrega de notas finales y cierre del curso.',
  evaluation: '100% - Cierre de Semestre',
  slides: [
    {
      id: 's18-1',
      title: 'Fin del Camino',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700 text-lg text-center">
            Hemos completado el curso de <strong>Introducción a la Computación</strong>.
          </p>
          
          <div class="relative py-8">
            <div class="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10"></div>
            <div class="flex justify-between items-center">
              <div class="flex flex-col items-center">
                <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">1</div>
                <span class="text-xs font-bold text-green-700 mt-2">Lógica</span>
              </div>
              <div class="flex flex-col items-center">
                <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">2</div>
                <span class="text-xs font-bold text-green-700 mt-2">Bucles</span>
              </div>
              <div class="flex flex-col items-center">
                <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">3</div>
                <span class="text-xs font-bold text-green-700 mt-2">Arreglos</span>
              </div>
              <div class="flex flex-col items-center">
                <div class="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold shadow-xl border-4 border-white transform scale-110">🏁</div>
                <span class="text-xs font-bold text-yellow-600 mt-2">Proyecto</span>
              </div>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 's18-2',
      title: 'Proyecto Final',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-white border-2 border-indigo-100 rounded-xl shadow-lg overflow-hidden">
            <div class="bg-indigo-600 p-4 text-white flex justify-between items-center">
              <h3 class="text-lg font-bold">Misión: Sistema de Inventario</h3>
              <span class="bg-indigo-800 text-xs px-2 py-1 rounded uppercase tracking-wider">Top Secret</span>
            </div>
            <div class="p-6 space-y-4">
              <p class="text-gray-600 text-sm">
                Desarrollar un programa que gestione el inventario de una tienda de tecnología.
              </p>
              
              <div class="grid grid-cols-2 gap-4">
                <div class="bg-indigo-50 p-3 rounded border border-indigo-100">
                  <h4 class="font-bold text-indigo-900 text-xs mb-2">Requisitos Técnicos</h4>
                  <ul class="text-xs text-indigo-800 list-disc list-inside space-y-1">
                    <li>Arreglos de Registros (Structs)</li>
                    <li>Funciones para cada opción</li>
                    <li>Validación de entradas</li>
                  </ul>
                </div>
                <div class="bg-indigo-50 p-3 rounded border border-indigo-100">
                  <h4 class="font-bold text-indigo-900 text-xs mb-2">Funcionalidad</h4>
                  <ul class="text-xs text-indigo-800 list-disc list-inside space-y-1">
                    <li>Agregar Producto</li>
                    <li>Buscar por Código</li>
                    <li>Listar Todo</li>
                    <li>Vender (Restar Stock)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 's18-3',
      title: 'Criterios de Evaluación',
      contentHtml: `
        <div class="space-y-6">
          <div class="space-y-4">
            <div>
              <div class="flex justify-between text-sm font-bold text-gray-700 mb-1">
                <span>Funcionalidad (Funciona correctamente)</span>
                <span>50%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-green-600 h-2.5 rounded-full" style="width: 50%"></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between text-sm font-bold text-gray-700 mb-1">
                <span>Uso de Estructuras (Structs, Arreglos)</span>
                <span>30%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-blue-600 h-2.5 rounded-full" style="width: 30%"></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between text-sm font-bold text-gray-700 mb-1">
                <span>Calidad de Código (Orden, Comentarios)</span>
                <span>20%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-purple-600 h-2.5 rounded-full" style="width: 20%"></div>
              </div>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 's18-4',
      title: 'Próximos Pasos',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700 text-center">
            ¿Qué sigue en tu carrera como desarrollador?
          </p>
          
          <div class="flex flex-col gap-3">
            <div class="flex items-center p-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl mr-4">💻</div>
              <div>
                <h4 class="font-bold text-gray-800 text-sm">Programación I</h4>
                <p class="text-xs text-gray-500">Lenguajes reales (C++, Java, Python) y POO.</p>
              </div>
            </div>

            <div class="flex items-center p-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-xl mr-4">🌳</div>
              <div>
                <h4 class="font-bold text-gray-800 text-sm">Estructuras de Datos</h4>
                <p class="text-xs text-gray-500">Listas enlazadas, árboles, grafos, eficiencia.</p>
              </div>
            </div>

            <div class="flex items-center p-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-xl mr-4">🗄️</div>
              <div>
                <h4 class="font-bold text-gray-800 text-sm">Bases de Datos</h4>
                <p class="text-xs text-gray-500">SQL, modelado de datos, persistencia.</p>
              </div>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 's18-5',
      title: 'Despedida',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 space-y-8">
          <blockquote class="text-xl italic font-serif text-gray-600 text-center max-w-lg border-l-4 border-gray-300 pl-4">
            "Todo el mundo debería aprender a programar un ordenador, porque te enseña a pensar."
            <footer class="text-sm font-sans text-gray-400 mt-2 not-italic">- Steve Jobs</footer>
          </blockquote>
          
          <div class="text-center">
            <p class="text-slate-800 font-bold text-lg">¡Éxito en sus futuros semestres!</p>
            <p class="text-slate-500 text-sm">Nunca dejen de aprender.</p>
          </div>
        </div>
      `,
    },
    {
      id: 's18-6',
      title: 'Fin',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-64 bg-slate-900 rounded-xl text-white">
          <div class="text-6xl mb-4">🎉</div>
          <h1 class="text-4xl font-bold tracking-widest uppercase">Level Complete</h1>
          <p class="text-slate-400 mt-2 text-sm">Introducción a la Computación</p>
        </div>
      `,
    },
  ],
};
