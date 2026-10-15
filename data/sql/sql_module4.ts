import { Module } from '../../types';

export const SQL_MODULE_4 : Module = {
  id: 'sql-mod-4',
  title: '4. Taller de consultas (casa) + DML: INSERT, UPDATE y DELETE',
  description:
    'Semana 4 (jueves 15/10, sin laboratorio): asignación individual para casa del taller de consultas (10 %) y, en clase, introducción a DML (INSERT, UPDATE, DELETE) en papel y en pizarra, para preparar la práctica DML del 22/10.',
  evaluation: '10% — Taller de consultas (para casa)',
  slides: [
    {
      id: 'sql4-1',
      title: "SQL · Semana 4",
      contentHtml: `

        <div class="space-y-6">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 bg-teal-600 rounded-xl flex items-center justify-center text-white text-3xl shadow-lg">🗄️</div>
            <div><h2 class="text-3xl font-bold text-slate-900">Semana 4 · Consultas y DML</h2>
            <p class="text-slate-500">Jueves 15/10 · 14:30–16:45 · Aula A-01 · Sección A</p></div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div class="bg-teal-50 border border-teal-200 rounded-xl p-4"><h4 class="font-bold text-teal-900">Hoy</h4><div class="text-sm text-slate-700 mt-2 space-y-1"><p>Asignación del taller (10 %) para casa</p><p>Teoría y práctica de DML en papel</p></div></div>
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-4"><h4 class="font-bold text-amber-900">Modalidad</h4><div class="text-sm text-slate-700 mt-2 space-y-1"><p>Sin laboratorio</p><p>Trabajo individual</p></div></div>
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-4"><h4 class="font-bold text-rose-900">Anticipo</h4><div class="text-sm text-slate-700 mt-2 space-y-1"><p>Jue 22/10: práctica DML evaluada (20 %), individual y para casa</p></div></div>
          </div>
        </div>
      
      `,
      notes: "Clase de 135 min sin laboratorio. El taller S4 (10 %) se asigna para casa, individual. Fecha de entrega por confirmar con el docente."
    },
    {
      id: 'sql4-2',
      title: "Agenda de hoy",
      contentHtml: `

        <div class="space-y-3">
          <div class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-teal-700 w-20">20 min</span><span>Encuadre: taller de casa y dudas sobre la consigna</span></div>
          <div class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-teal-700 w-20">20 min</span><span>Teoría breve de DML (INSERT, UPDATE, DELETE)</span></div>
          <div class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-teal-700 w-20">20 min</span><span>Demostración en pizarra y proyector</span></div>
          <div class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-teal-700 w-20">50 min</span><span>Práctica guiada y autónoma en papel</span></div>
          <div class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-teal-700 w-20">15 min</span><span>Asignación para casa y cierre</span></div>
        </div>
      
      `
    },
    {
      id: 'sql4-3',
      title: "Cambio de modalidad",
      contentHtml: `

        <div class="space-y-4">
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-950"><strong>No hay laboratorio de computación.</strong> Todas las asignaciones de la asignatura son individuales y para casa.</div>
          <div class="bg-white border rounded-xl p-4 text-sm">📥 La consigna se entrega en la guía impresa o por SAIA.</div>
          <div class="bg-white border rounded-xl p-4 text-sm">📅 La fecha de entrega se confirma en clase y en SAIA.</div>
        </div>
      
      `,
      notes: "Fecha de entrega del taller S4: por confirmar con el docente."
    },
    {
      id: 'sql4-4',
      title: "Taller práctico individual (10 %) · alcance",
      contentHtml: `

        <div class="space-y-4">
          <div class="bg-amber-600 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-amber-100">Evaluación · 10 % · 20 puntos · para casa</p><h3 class="text-xl font-bold mt-1">Consultas de recuperación</h3></div>
          <div class="bg-white border rounded-xl p-4 text-sm"><strong>Construcciones:</strong> SELECT, FROM, WHERE, ORDER BY, INNER JOIN, GROUP BY y HAVING.</div>
          <div class="bg-white border rounded-xl p-4 text-sm"><strong>No se usa:</strong> LIMIT ni DML (INSERT, UPDATE, DELETE).</div>
          <div class="bg-white border rounded-xl p-4 text-sm"><strong>Trabajo individual</strong> en PostgreSQL, en casa. Respuestas en S04_consultas.sql.</div>
        </div>
      
      `,
      notes: "La consigna completa y los datos de preparación están en 04-Evaluaciones/ELECTIVA-II-SQL/Revisado-2026-2/S04-taller-consultas-10pct-2026-10-15.md. NO proyectar las preguntas: en pantalla solo este alcance."
    },
    {
      id: 'sql4-5',
      title: "Entregar el taller",
      contentHtml: `

        <div class="space-y-3">
          <div class="bg-white border rounded-xl p-4 text-sm">1. Cada consulta comentada con su número.</div>
          <div class="bg-white border rounded-xl p-4 text-sm">2. Resultados que coincidan con las salidas esperadas de la guía.</div>
          <div class="bg-white border rounded-xl p-4 text-sm">3. Archivo <code>S04_consultas.sql</code> enviado por SAIA.</div>
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-950"><strong>Fecha de entrega:</strong> por confirmar.</div>
        </div>
      
      `
    },
    {
      id: 'sql4-6',
      title: "DML · de leer datos a modificarlos",
      contentHtml: `

        <div class="space-y-4">
          <table class="w-full text-sm border border-slate-200">
            <thead class="bg-slate-100"><tr><th class="p-2 text-left">Subconjunto</th><th class="p-2 text-left">Qué hace</th><th class="p-2 text-left">Comandos</th></tr></thead>
            <tbody>
              <tr class="border-t"><td class="p-2 font-bold">DQL (leer)</td><td class="p-2">Recupera datos sin cambiarlos</td><td class="p-2 font-mono">SELECT</td></tr>
              <tr class="border-t"><td class="p-2 font-bold">DML (escribir)</td><td class="p-2">Cambia las filas de la tabla</td><td class="p-2 font-mono">INSERT · UPDATE · DELETE</td></tr>
            </tbody>
          </table>
        </div>
      
      `
    },
    {
      id: 'sql4-7',
      title: "INSERT · agregar filas (reactivación)",
      contentHtml: `

        <div class="space-y-4">
          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto"><p class="text-[10px] uppercase tracking-widest text-slate-400 mb-2">SQL</p><pre class="text-xs font-mono leading-6">INSERT INTO ruta_dml (id_ruta, nombre, zona) VALUES (4, 'Ruta 7', 'Norte');</pre></div>
          <p class="text-sm text-slate-700">Visto en S3. Agrega una fila nueva.</p>
        </div>
      
      `
    },
    {
      id: 'sql4-8',
      title: "UPDATE · cambiar filas (nuevo)",
      contentHtml: `

        <div class="space-y-4">
          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto"><p class="text-[10px] uppercase tracking-widest text-slate-400 mb-2">SQL</p><pre class="text-xs font-mono leading-6">UPDATE ruta_dml SET zona = 'Norte' WHERE id_ruta = 2;</pre></div>
          <div class="bg-rose-50 border border-rose-200 rounded-lg p-3 text-sm text-rose-900">⚠️ Sin <code>WHERE</code> cambia <strong>todas</strong> las filas.</div>
        </div>
      
      `
    },
    {
      id: 'sql4-9',
      title: "DELETE · eliminar filas (nuevo)",
      contentHtml: `

        <div class="space-y-4">
          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto"><p class="text-[10px] uppercase tracking-widest text-slate-400 mb-2">SQL</p><pre class="text-xs font-mono leading-6">DELETE FROM ruta_dml WHERE id_ruta = 3;</pre></div>
          <div class="bg-rose-50 border border-rose-200 rounded-lg p-3 text-sm text-rose-900">⚠️ Sin <code>WHERE</code> borra <strong>todas</strong> las filas.</div>
        </div>
      
      `
    },
    {
      id: 'sql4-10',
      title: "Escritura segura · tres reglas",
      contentHtml: `

        <div class="space-y-3">
          <div class="flex gap-3 bg-white border-l-4 border-rose-500 rounded-xl p-4"><span class="font-bold text-rose-600">1</span><p><strong>WHERE es obligatorio</strong> en UPDATE y DELETE.</p></div>
          <div class="flex gap-3 bg-white border-l-4 border-indigo-500 rounded-xl p-4"><span class="font-bold text-indigo-600">2</span><p><strong>Probar con SELECT primero</strong>: usa la misma condición y verifica las filas.</p></div>
          <div class="flex gap-3 bg-white border-l-4 border-emerald-500 rounded-xl p-4"><span class="font-bold text-emerald-600">3</span><p><strong>Poder revertir</strong>: vuelve a crear la tabla con el estado de reinicio.</p></div>
        </div>
      
      `
    },
    {
      id: 'sql4-11',
      title: "Demostración · ruta_dml",
      contentHtml: `

        <div class="space-y-4">
          <table class="w-full text-sm border border-slate-200">
            <thead class="bg-slate-100"><tr><th class="p-2 text-left">id_ruta</th><th class="p-2 text-left">nombre</th><th class="p-2 text-left">zona</th></tr></thead>
            <tbody>
              <tr class="border-t"><td class="p-2">1</td><td class="p-2">Ruta 1</td><td class="p-2">Norte</td></tr>
              <tr class="border-t"><td class="p-2">2</td><td class="p-2">Ruta 3</td><td class="p-2">Centro</td></tr>
              <tr class="border-t"><td class="p-2">3</td><td class="p-2">Ruta 5</td><td class="p-2">Sur</td></tr>
            </tbody>
          </table>
          <ol class="list-decimal list-inside text-sm text-slate-800 space-y-1">
            <li>INSERT la Ruta 7 (Norte) → 4 filas</li>
            <li>UPDATE la Ruta 3 a zona Norte</li>
            <li>DELETE la Ruta 5</li>
          </ol>
          <p class="text-xs text-slate-500">Antes de cada paso, anticipen en voz alta las filas que cambian.</p>
        </div>
      
      `,
      notes: "Demostración en el equipo del docente (o trazada en pizarra si no conecta). Verificar antes de clase."
    },
    {
      id: 'sql4-12',
      title: "Práctica en papel · trazar las tablas",
      contentHtml: `

        <div class="space-y-4">
          <div class="bg-white border rounded-xl p-4 text-sm"><strong>Sin computadora.</strong> Tracen en papel el estado de la tabla después de cada sentencia.</div>
          <div class="bg-white border rounded-xl p-4 text-sm"><strong>Guiada:</strong> agregar la Ruta 9 (zona Sur) y dibujar la tabla resultante.</div>
          <div class="bg-white border rounded-xl p-4 text-sm"><strong>Autónoma (en parejas):</strong><br>1. INSERT la ruta 4, 'Ruta 7', 'Norte'.<br>2. UPDATE la zona de la ruta 2 a 'Norte'.<br>3. DELETE la ruta 3.</div>
        </div>
      
      `,
      notes: "Salidas esperadas para comparar (docente): tras el INSERT: 1 Ruta 1 Norte · 2 Ruta 3 Centro · 3 Ruta 5 Sur · 4 Ruta 7 Norte. Tras el UPDATE: 2 queda Norte. Tras el DELETE: sin la fila 3."
    },
    {
      id: 'sql4-13',
      title: "Asignación para casa",
      contentHtml: `

        <div class="space-y-4">
          <div class="bg-white border rounded-xl p-4 text-sm"><strong>1.</strong> Taller práctico S4 (10 %), individual, con la guía del estudiante.</div>
          <div class="bg-white border rounded-xl p-4 text-sm"><strong>2.</strong> Repasar los tres ejercicios DML en PostgreSQL y traer una consulta de comprobación (SELECT) para cada uno.</div>
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-950"><strong>Entrega:</strong> por SAIA, fecha por confirmar.</div>
        </div>
      
      `
    },
    {
      id: 'sql4-14',
      title: "Cierre · preguntas, tarea y anticipo",
      contentHtml: `

        <div class="space-y-4">
          <div class="bg-white border rounded-xl p-4 text-sm"><h4 class="font-bold">Preguntas de salida</h4>
            <ol class="list-decimal list-inside space-y-1"><li>¿Cuál es la diferencia entre DQL y DML?</li><li>¿Qué pasa con DELETE FROM ruta_dml; sin WHERE?</li><li>¿Qué debes hacer antes de convertir un SELECT en UPDATE?</li></ol></div>
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-950"><strong>Anticipo:</strong> jue 22/10 → práctica DML evaluada (20 %), individual y para casa.</div>
        </div>
      
      `,
      notes: "Respuestas: 1) DQL lee, DML escribe; 2) se borran todas las filas; 3) probar el SELECT con la misma condición."
    },
    {
      id: 'sql4-15',
      title: "Fuentes",
      contentHtml: `

        <div class="space-y-4">
          <div class="bg-slate-50 border rounded-xl p-4 text-sm space-y-2">
            <p class="font-bold">Fuentes de esta sesión</p>
            <ul class="list-disc list-inside text-gray-600 space-y-1"><li>PostgreSQL Documentation (sintaxis de DML).</li></ul>
          </div>
          <div class="bg-teal-50 border border-teal-200 rounded-xl p-4 text-sm text-teal-950"><strong>Actividad PGA de la semana:</strong> taller práctico individual (10 %) para casa + introducción a DML · escala de estimación · 10 %.</div>
        </div>
      
      `
    }
  ]
};
