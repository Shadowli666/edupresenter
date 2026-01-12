import { Module } from '../../types';

export const PYTHON_MODULE_12: Module = {
  id: 'py-mod-12',
  title: '12. Cierre de Corte: Nivel Intermedio',
  description: 'Evaluación de competencias en Estructuras de Datos y Algoritmos.',
  evaluation: '100% - Cierre de Corte',
  slides: [
    {
      id: 'py12-1-summary',
      title: 'Logros Desbloqueados',
      notes: 'Resumen de competencias adquiridas.',
      contentHtml: `
        <div class="flex flex-col h-full items-center justify-center space-y-8">
          <h3 class="text-3xl font-bold text-slate-800">Resumen de Habilidades</h3>
          
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl">
            <!-- Skill 1 -->
            <div class="bg-white p-4 rounded-xl shadow-md border-b-4 border-blue-500 flex flex-col items-center gap-3 transform hover:-translate-y-1 transition-transform">
              <div class="text-4xl">📋</div>
              <div class="font-bold text-slate-700">Listas</div>
              <div class="text-xs text-center text-slate-500">Manejo de colecciones dinámicas.</div>
            </div>

            <!-- Skill 2 -->
            <div class="bg-white p-4 rounded-xl shadow-md border-b-4 border-purple-500 flex flex-col items-center gap-3 transform hover:-translate-y-1 transition-transform">
              <div class="text-4xl">🔢</div>
              <div class="font-bold text-slate-700">Matrices</div>
              <div class="text-xs text-center text-slate-500">Datos tabulares y coordenadas.</div>
            </div>

            <!-- Skill 3 -->
            <div class="bg-white p-4 rounded-xl shadow-md border-b-4 border-green-500 flex flex-col items-center gap-3 transform hover:-translate-y-1 transition-transform">
              <div class="text-4xl">🔍</div>
              <div class="font-bold text-slate-700">Búsqueda</div>
              <div class="text-xs text-center text-slate-500">Linear vs Binary Search.</div>
            </div>

            <!-- Skill 4 -->
            <div class="bg-white p-4 rounded-xl shadow-md border-b-4 border-orange-500 flex flex-col items-center gap-3 transform hover:-translate-y-1 transition-transform">
              <div class="text-4xl">⚡</div>
              <div class="font-bold text-slate-700">Ordenamiento</div>
              <div class="text-xs text-center text-slate-500">Bubble Sort y lógica de swap.</div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py12-2-project',
      title: 'Proyecto Final de Corte',
      notes: 'Requisitos del entregable.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full">
          <div class="bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-center space-y-6">
            <h3 class="text-2xl font-bold text-slate-800">Sistema de Gestión Académica</h3>
            <p class="text-slate-600">
              Desarrollar una aplicación de consola que integre todos los conceptos vistos.
            </p>
            
            <ul class="space-y-3">
              <li class="flex items-center gap-3">
                <span class="bg-green-100 text-green-700 p-1 rounded">✅</span>
                <span class="text-slate-700">Menú Principal (While True)</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="bg-green-100 text-green-700 p-1 rounded">✅</span>
                <span class="text-slate-700">CRUD de Estudiantes (Listas/Diccionarios)</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="bg-green-100 text-green-700 p-1 rounded">✅</span>
                <span class="text-slate-700">Reportes Ordenados (Bubble Sort)</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="bg-green-100 text-green-700 p-1 rounded">✅</span>
                <span class="text-slate-700">Búsqueda por Código (Binary Search)</span>
              </li>
            </ul>
          </div>

          <div class="bg-slate-900 p-6 rounded-xl font-mono text-xs text-slate-300 overflow-hidden relative">
            <div class="absolute top-0 right-0 bg-yellow-500 text-yellow-900 text-xs font-bold px-2 py-1 rounded-bl">Reto</div>
            <p class="text-green-400 mb-4"># Estructura sugerida</p>
            estudiantes = [<br>
            &nbsp;&nbsp;{"id": 101, "nombre": "Ana", "notas": [3.5, 4.0]},<br>
            &nbsp;&nbsp;{"id": 102, "nombre": "Luis", "notas": [2.0, 3.0]}<br>
            ]<br>
            <br>
            <span class="text-purple-400">while</span> <span class="text-blue-400">True</span>:<br>
            &nbsp;&nbsp;<span class="text-blue-400">print</span>("1. Agregar Estudiante")<br>
            &nbsp;&nbsp;<span class="text-blue-400">print</span>("2. Ver Reporte Ordenado")<br>
            &nbsp;&nbsp;<span class="text-blue-400">print</span>("3. Buscar por ID")<br>
            &nbsp;&nbsp;opcion = <span class="text-blue-400">input</span>("> ")
          </div>
        </div>
      `
    },
    {
      id: 'py12-3-next',
      title: 'Próximos Pasos',
      notes: 'Introducción al siguiente nivel.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full space-y-8 text-center">
          <h3 class="text-2xl font-bold text-slate-800">¿Qué sigue?</h3>
          <p class="text-slate-600 max-w-2xl">
            Hemos dominado la manipulación de datos en memoria. Ahora necesitamos estructurar mejor nuestro código y hacer que nuestros datos persistan.
          </p>

          <div class="flex gap-6">
            <div class="bg-blue-50 p-6 rounded-xl border border-blue-200 w-64">
              <div class="text-4xl mb-4">📦</div>
              <h4 class="font-bold text-blue-900 mb-2">Funciones</h4>
              <p class="text-xs text-blue-700">Dividir el código en bloques reutilizables y organizados.</p>
            </div>

            <div class="bg-purple-50 p-6 rounded-xl border border-purple-200 w-64 opacity-50">
              <div class="text-4xl mb-4">💾</div>
              <h4 class="font-bold text-purple-900 mb-2">Archivos</h4>
              <p class="text-xs text-purple-700">Guardar información en disco para que no se pierda.</p>
            </div>
          </div>
        </div>
      `
    }
  ]
};
