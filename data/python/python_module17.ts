import { Module } from '../../types';

export const PYTHON_MODULE_17: Module = {
  id: 'py-mod-17',
  title: '17. Bases de Datos (SQLite)',
  description: 'Persistencia estructurada y consultas SQL.',
  evaluation: 'Taller Práctico',
  slides: [
    {
      id: 'py17-1-why-db',
      title: 'Archivos vs Bases de Datos',
      notes: '¿Cuándo usar SQL?',
      contentHtml: `
        <div class="flex flex-col h-full items-center justify-center space-y-8">
          <div class="grid md:grid-cols-2 gap-12 w-full max-w-4xl">
            <!-- Text Files -->
            <div class="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col items-center text-center opacity-60">
              <div class="text-6xl mb-4">📄</div>
              <h3 class="text-xl font-bold text-slate-600">Archivos de Texto</h3>
              <ul class="text-xs text-slate-500 mt-4 text-left list-disc pl-4 space-y-2">
                <li>Lectura secuencial (lento si es grande).</li>
                <li>Sin tipos de datos estrictos.</li>
                <li>Difícil de relacionar datos.</li>
              </ul>
            </div>

            <!-- Database -->
            <div class="bg-blue-50 p-6 rounded-xl border-2 border-blue-500 flex flex-col items-center text-center transform scale-105 shadow-xl">
              <div class="text-6xl mb-4">🗄️</div>
              <h3 class="text-xl font-bold text-blue-900">Base de Datos (SQL)</h3>
              <ul class="text-xs text-blue-700 mt-4 text-left list-disc pl-4 space-y-2">
                <li>Búsquedas instantáneas (Índices).</li>
                <li>Relaciones entre tablas (Foreign Keys).</li>
                <li>Integridad de datos y transacciones.</li>
              </ul>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py17-2-sqlite-workflow',
      title: 'Flujo de Trabajo SQLite',
      notes: 'Connect, Cursor, Execute, Commit.',
      contentHtml: `
        <div class="flex flex-col h-full space-y-6">
          <div class="flex-1 grid md:grid-cols-2 gap-8 items-center">
            <!-- Code -->
            <div class="bg-slate-900 p-6 rounded-xl font-mono text-xs text-slate-300 overflow-auto custom-scrollbar shadow-inner">
              <span class="text-purple-400">import</span> sqlite3<br>
              <br>
              <span class="text-gray-500"># 1. Conectar (o crear)</span><br>
              conn = sqlite3.connect(<span class="text-green-400">"tienda.db"</span>)<br>
              <br>
              <span class="text-gray-500"># 2. Crear Cursor (el mensajero)</span><br>
              cursor = conn.cursor()<br>
              <br>
              <span class="text-gray-500"># 3. Ejecutar SQL</span><br>
              cursor.execute(<span class="text-green-400">"CREATE TABLE..."</span>)<br>
              cursor.execute(<span class="text-green-400">"INSERT INTO..."</span>)<br>
              <br>
              <span class="text-gray-500"># 4. Guardar Cambios</span><br>
              conn.commit()<br>
              <br>
              <span class="text-gray-500"># 5. Cerrar</span><br>
              conn.close()
            </div>

            <!-- Visual Flow -->
            <div class="flex flex-col gap-4">
              <div class="flex items-center gap-4">
                <div class="bg-blue-100 p-3 rounded-full font-bold text-blue-800 w-10 h-10 flex items-center justify-center">1</div>
                <div class="bg-white p-3 rounded shadow border border-slate-200 flex-1">
                  <span class="font-bold text-slate-700">Conexión</span>
                  <p class="text-xs text-slate-500">Abre el túnel al archivo .db</p>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <div class="bg-blue-100 p-3 rounded-full font-bold text-blue-800 w-10 h-10 flex items-center justify-center">2</div>
                <div class="bg-white p-3 rounded shadow border border-slate-200 flex-1">
                  <span class="font-bold text-slate-700">Cursor</span>
                  <p class="text-xs text-slate-500">El obrero que ejecuta las órdenes.</p>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <div class="bg-yellow-100 p-3 rounded-full font-bold text-yellow-800 w-10 h-10 flex items-center justify-center">3</div>
                <div class="bg-white p-3 rounded shadow border border-slate-200 flex-1">
                  <span class="font-bold text-slate-700">Execute</span>
                  <p class="text-xs text-slate-500">Envía comandos SQL (INSERT, SELECT).</p>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <div class="bg-green-100 p-3 rounded-full font-bold text-green-800 w-10 h-10 flex items-center justify-center">4</div>
                <div class="bg-white p-3 rounded shadow border border-slate-200 flex-1">
                  <span class="font-bold text-slate-700">Commit</span>
                  <p class="text-xs text-slate-500">¡Guardar! Sin esto, se pierden los cambios.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py17-3-sql-basics',
      title: 'SQL Básico',
      notes: 'CRUD en SQL.',
      contentHtml: `
        <div class="grid grid-cols-2 gap-6 h-full">
          <!-- Create -->
          <div class="bg-white p-4 rounded-xl shadow border-l-4 border-blue-500">
            <h4 class="font-bold text-blue-900 mb-2">CREATE TABLE</h4>
            <div class="bg-slate-900 p-2 rounded text-xs font-mono text-slate-300">
              CREATE TABLE usuarios (<br>
              &nbsp;&nbsp;id INTEGER PRIMARY KEY,<br>
              &nbsp;&nbsp;nombre TEXT,<br>
              &nbsp;&nbsp;edad INTEGER<br>
              )
            </div>
          </div>

          <!-- Insert -->
          <div class="bg-white p-4 rounded-xl shadow border-l-4 border-green-500">
            <h4 class="font-bold text-green-900 mb-2">INSERT</h4>
            <div class="bg-slate-900 p-2 rounded text-xs font-mono text-slate-300">
              INSERT INTO usuarios VALUES<br>
              (1, 'Ana', 25)
            </div>
          </div>

          <!-- Select -->
          <div class="bg-white p-4 rounded-xl shadow border-l-4 border-purple-500">
            <h4 class="font-bold text-purple-900 mb-2">SELECT</h4>
            <div class="bg-slate-900 p-2 rounded text-xs font-mono text-slate-300">
              SELECT * FROM usuarios<br>
              WHERE edad > 18
            </div>
          </div>

          <!-- Delete -->
          <div class="bg-white p-4 rounded-xl shadow border-l-4 border-red-500">
            <h4 class="font-bold text-red-900 mb-2">DELETE</h4>
            <div class="bg-slate-900 p-2 rounded text-xs font-mono text-slate-300">
              DELETE FROM usuarios<br>
              WHERE id = 1
            </div>
          </div>
        </div>
      `
    }
  ]
};
