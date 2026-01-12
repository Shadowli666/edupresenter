import { Module } from '../../types';

export const PYTHON_MODULE_18: Module = {
  id: 'py-mod-18',
  title: '18. Proyecto Final de Curso',
  description: 'Integración total: POO + SQL + Lógica.',
  evaluation: '100% - Proyecto Final',
  slides: [
    {
      id: 'py18-1-architecture',
      title: 'Arquitectura del Proyecto',
      notes: 'MVC Simplificado.',
      contentHtml: `
        <div class="flex flex-col h-full items-center justify-center space-y-8">
          <h3 class="text-3xl font-bold text-slate-800">Sistema de Gestión Escolar</h3>
          
          <div class="flex gap-8 items-center w-full max-w-5xl">
            <!-- Database -->
            <div class="flex flex-col items-center gap-2">
              <div class="bg-slate-800 p-6 rounded-xl shadow-lg border-2 border-slate-600 text-white text-center w-40">
                <div class="text-4xl mb-2">🗄️</div>
                <div class="font-bold">SQLite</div>
                <div class="text-xs text-slate-400">escuela.db</div>
              </div>
            </div>

            <!-- Arrow -->
            <div class="text-2xl text-slate-400">↔️</div>

            <!-- Models -->
            <div class="flex flex-col items-center gap-2">
              <div class="bg-blue-100 p-6 rounded-xl shadow-lg border-2 border-blue-500 text-blue-900 text-center w-40">
                <div class="text-4xl mb-2">🧩</div>
                <div class="font-bold">Modelos</div>
                <div class="text-xs text-blue-700">Clases POO<br>(Alumno, Curso)</div>
              </div>
            </div>

            <!-- Arrow -->
            <div class="text-2xl text-slate-400">↔️</div>

            <!-- Controller -->
            <div class="flex flex-col items-center gap-2">
              <div class="bg-purple-100 p-6 rounded-xl shadow-lg border-2 border-purple-500 text-purple-900 text-center w-40">
                <div class="text-4xl mb-2">⚙️</div>
                <div class="font-bold">Lógica</div>
                <div class="text-xs text-purple-700">Controlador<br>(CRUD)</div>
              </div>
            </div>

            <!-- Arrow -->
            <div class="text-2xl text-slate-400">↔️</div>

            <!-- View -->
            <div class="flex flex-col items-center gap-2">
              <div class="bg-green-100 p-6 rounded-xl shadow-lg border-2 border-green-500 text-green-900 text-center w-40">
                <div class="text-4xl mb-2">🖥️</div>
                <div class="font-bold">Vista</div>
                <div class="text-xs text-green-700">Menú<br>(Console UI)</div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py18-2-requirements',
      title: 'Requerimientos Funcionales',
      notes: '¿Qué debe hacer el sistema?',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full">
          <div class="bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-center space-y-6">
            <h3 class="text-2xl font-bold text-slate-800">Funcionalidades Clave</h3>
            
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <span class="bg-blue-100 text-blue-700 p-1 rounded mt-1">1️⃣</span>
                <div>
                  <span class="font-bold text-slate-700 block">Gestión de Alumnos</span>
                  <span class="text-sm text-slate-500">Crear, listar y buscar alumnos. Guardar en DB.</span>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="bg-blue-100 text-blue-700 p-1 rounded mt-1">2️⃣</span>
                <div>
                  <span class="font-bold text-slate-700 block">Inscripción a Cursos</span>
                  <span class="text-sm text-slate-500">Relacionar un alumno con una materia.</span>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="bg-blue-100 text-blue-700 p-1 rounded mt-1">3️⃣</span>
                <div>
                  <span class="font-bold text-slate-700 block">Registro de Notas</span>
                  <span class="text-sm text-slate-500">Asignar calificación (0.0 - 5.0).</span>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="bg-blue-100 text-blue-700 p-1 rounded mt-1">4️⃣</span>
                <div>
                  <span class="font-bold text-slate-700 block">Reportes</span>
                  <span class="text-sm text-slate-500">Mostrar promedio por estudiante.</span>
                </div>
              </li>
            </ul>
          </div>

          <div class="bg-slate-900 p-6 rounded-xl font-mono text-xs text-slate-300 overflow-hidden relative">
            <div class="absolute top-0 right-0 bg-green-500 text-green-900 text-xs font-bold px-2 py-1 rounded-bl">SQL Schema</div>
            <p class="text-purple-400 mb-2">-- Tablas Sugeridas</p>
            CREATE TABLE alumnos (<br>
            &nbsp;&nbsp;id INTEGER PRIMARY KEY,<br>
            &nbsp;&nbsp;nombre TEXT,<br>
            &nbsp;&nbsp;email TEXT<br>
            );<br>
            <br>
            CREATE TABLE notas (<br>
            &nbsp;&nbsp;id INTEGER PRIMARY KEY,<br>
            &nbsp;&nbsp;alumno_id INTEGER,<br>
            &nbsp;&nbsp;curso TEXT,<br>
            &nbsp;&nbsp;valor REAL,<br>
            &nbsp;&nbsp;FOREIGN KEY(alumno_id) REFERENCES alumnos(id)<br>
            );
          </div>
        </div>
      `
    },
    {
      id: 'py18-3-congrats',
      title: '¡Felicidades!',
      notes: 'Cierre del curso.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full space-y-8 text-center">
          <div class="text-8xl animate-bounce">🎓</div>
          <h3 class="text-4xl font-bold text-slate-800">¡Curso Completado!</h3>
          <p class="text-xl text-slate-600 max-w-2xl">
            Has pasado de <code>print("Hola Mundo")</code> a construir aplicaciones con bases de datos y objetos.
          </p>

          <div class="grid grid-cols-3 gap-6 mt-8">
            <div class="bg-yellow-100 p-4 rounded-xl border border-yellow-300">
              <div class="font-bold text-yellow-800">Lógica</div>
              <div class="text-xs text-yellow-700">Algoritmos sólidos</div>
            </div>
            <div class="bg-blue-100 p-4 rounded-xl border border-blue-300">
              <div class="font-bold text-blue-800">Python</div>
              <div class="text-xs text-blue-700">Sintaxis y POO</div>
            </div>
            <div class="bg-green-100 p-4 rounded-xl border border-green-300">
              <div class="font-bold text-green-800">Datos</div>
              <div class="text-xs text-green-700">Persistencia SQL</div>
            </div>
          </div>
          
          <p class="text-sm text-slate-400 mt-8">
            El viaje apenas comienza. ¡Sigue programando!
          </p>
        </div>
      `
    }
  ]
};
