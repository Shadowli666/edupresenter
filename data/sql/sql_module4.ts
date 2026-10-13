import { Module } from '../../types';

export const SQL_MODULE_4: Module = {
  id: 'sql-mod-4',
  title: '4. Evaluación de consultas + DML: INSERT, UPDATE y DELETE',
  description:
    'Semana 4: taller práctico individual (10 %) sobre SELECT, FROM, WHERE, ORDER BY, INNER JOIN, GROUP BY y HAVING (sin LIMIT ni DML), seguido de la introducción formativa (0 %) a INSERT, UPDATE y DELETE con datos de prueba, para preparar la práctica DML del 22/10.',
  evaluation: '10%',
  slides: [
    {
      id: 'sql4-1',
      title: 'SQL · Semana 4',
      contentHtml: `
        <div class="space-y-7">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center text-white text-4xl shadow-lg">🗄️</div>
            <div>
              <p class="text-sm uppercase tracking-widest font-bold text-teal-700">Electiva II · Programación en SQL · Unidad II.2–II.5</p>
              <h2 class="text-3xl md:text-4xl font-bold text-slate-900">Evaluar y modificar datos</h2>
              <p class="text-slate-500 mt-1">Taller de consultas (10 %) + DML: INSERT, UPDATE y DELETE</p>
            </div>
          </div>
          <div class="bg-teal-50 border border-teal-200 rounded-xl p-5 text-teal-950">
            <p class="text-lg"><strong>Hoy:</strong> taller práctico individual de consultas (10 %) y, después, introducción formativa a DML.</p>
          </div>
          <p class="text-sm text-slate-500">Jueves 15/10/2026 · 14:30–16:45 · Aula A-01 · Sección A · IUPSM — Extensión Ciudad Ojeda</p>
        </div>
      `
    },
    {
      id: 'sql4-2',
      title: 'Hoy: primero evalúas, luego escribes',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-slate-600 text-lg">Dos bloques: primero demuestras lo aprendido en S3; luego aprendes a <strong>modificar</strong> datos.</p>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-amber-50 border border-amber-200 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-amber-700">Bloque 1 · 90 min</p><h3 class="text-xl font-bold text-amber-950 mt-2">Taller práctico individual (10 %)</h3><p class="text-sm text-amber-900 mt-2">Consultas de lectura: SELECT / FROM / WHERE / ORDER BY · INNER JOIN · GROUP BY / HAVING. Sin LIMIT ni DML.</p></div>
            <div class="bg-teal-50 border border-teal-200 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-teal-700">Bloque 2 · 40 min (+5 de transición)</p><h3 class="text-xl font-bold text-teal-950 mt-2">DML (formativo, 0 %)</h3><p class="text-sm text-teal-900 mt-2">INSERT, UPDATE y DELETE con datos de prueba. Prepara la práctica DML del 22/10.</p></div>
          </div>
          <div class="bg-slate-900 text-white rounded-2xl p-5">
            <p class="text-xs uppercase tracking-widest font-bold text-slate-300 mb-3">Ruta de trabajo (135 min)</p>
            <div class="flex flex-wrap gap-2 text-sm font-bold">
              <span class="bg-amber-600 rounded-full px-3 py-2">Taller (10 %)</span><span class="text-slate-400 self-center">→</span>
              <span class="bg-teal-600 rounded-full px-3 py-2">Teoría DML</span><span class="text-slate-400 self-center">→</span>
              <span class="bg-indigo-600 rounded-full px-3 py-2">Demostración</span><span class="text-slate-400 self-center">→</span>
              <span class="bg-emerald-600 rounded-full px-3 py-2">Práctica DML</span>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'sql4-3',
      title: 'Objetivo y producto de aprendizaje',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-gradient-to-br from-teal-600 to-emerald-700 text-white p-6 rounded-2xl shadow-lg">
            <p class="text-xs uppercase tracking-widest font-bold text-teal-100">Objetivo S4 · Unidad II.2, II.4 y II.5</p>
            <p class="text-2xl font-bold mt-2">Aplicar consultas de recuperación y manipulación de datos en tablas relacionales.</p>
          </div>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white border-2 border-teal-100 rounded-xl p-5"><h4 class="font-bold text-teal-900">Producto de hoy</h4><ul class="list-disc list-inside text-sm text-slate-700 mt-3 space-y-2"><li>Archivo S04_consultas.sql del taller (individual).</li><li>Base de práctica ruta modificada con INSERT, UPDATE y DELETE.</li></ul></div>
            <div class="bg-amber-50 border-2 border-amber-200 rounded-xl p-5"><h4 class="font-bold text-amber-900">Evaluación</h4><p class="text-sm text-amber-950 mt-3">Taller práctico individual (10 %, 20 puntos, escala de estimación). El bloque DML es formativo (0 %).</p></div>
          </div>
        </div>
      `
    },
    {
      id: 'sql4-4',
      title: 'Taller práctico individual (10 %) · alcance',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-amber-600 text-white rounded-xl p-4 flex items-center justify-between"><div><p class="text-xs uppercase tracking-widest font-bold text-amber-100">Evaluación · 10 % · 20 puntos · 90 min</p><h3 class="text-xl font-bold mt-1">Taller práctico individual de consultas</h3></div><span class="text-3xl">📝</span></div>
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p class="font-bold text-amber-900 mb-2">Alcance (lo que ya practicaste en S3):</p>
            <ul class="list-disc list-inside text-sm text-amber-950 space-y-1">
              <li>SELECT, FROM, WHERE y ORDER BY</li>
              <li>INNER JOIN</li>
              <li>GROUP BY y HAVING</li>
            </ul>
          </div>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-white border rounded-xl p-4"><strong>No se usa:</strong> LIMIT ni DML (INSERT/UPDATE/DELETE).</div>
            <div class="bg-white border rounded-xl p-4"><strong>Trabajo individual</strong> en PostgreSQL.</div>
            <div class="bg-white border rounded-xl p-4"><strong>Guarda</strong> tus respuestas en <code>S04_consultas.sql</code>.</div>
            <div class="bg-white border rounded-xl p-4"><strong>Verifica</strong> que tu salida coincida con la esperada.</div>
          </div>
          <p class="text-xs text-slate-500">La consigna y los datos de preparación se entregan en la guía del estudiante.</p>
        </div>
      `,
      notes: `La consigna completa y los datos de preparación están en el borrador 04-Evaluaciones/ELECTIVA-II-SQL/Revisado-2026-2/S04-taller-consultas-10pct-2026-10-15.md. NO proyectar las preguntas: en pantalla solo este alcance. Distribuir la guía del estudiante impresa o por SAIA (es la evaluación aprobada, se permite imprimir). Tiempo: hasta 90 min. La escala de estimación (20 puntos) y las soluciones están en el borrador (Parte B).`
    },
    {
      id: 'sql4-5',
      title: 'Antes de empezar el taller · checklist',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-emerald-600 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-emerald-100">Antes de escribir tu primera consulta</p><h3 class="text-xl font-bold mt-1">Lista de verificación</h3></div>
          <ol class="space-y-3 text-sm">
            <li class="flex gap-3 bg-white border rounded-xl p-4"><span class="font-bold text-emerald-700">1</span><span>Crea la base y ejecuta la <strong>preparación de datos</strong> tal como está en la guía.</span></li>
            <li class="flex gap-3 bg-white border rounded-xl p-4"><span class="font-bold text-emerald-700">2</span><span>Lee la tarea completa antes de escribir; respeta <strong>columnas, filtros, agrupación y orden</strong>.</span></li>
            <li class="flex gap-3 bg-white border rounded-xl p-4"><span class="font-bold text-emerald-700">3</span><span>En las consultas que pidan agrupación usa <strong>GROUP BY</strong>; si filtran el resultado agregado, usa <strong>HAVING</strong>.</span></li>
            <li class="flex gap-3 bg-white border rounded-xl p-4"><span class="font-bold text-emerald-700">4</span><span>Guarda cada consulta numerada en <strong>S04_consultas.sql</strong> y compárala con la salida esperada.</span></li>
          </ol>
          <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-sm text-emerald-950"><strong>Recuerda:</strong> se califica la lógica y la salida correctas, no la velocidad.</div>
        </div>
      `
    },
    {
      id: 'sql4-6',
      title: 'DML · de leer datos a modificarlos',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-teal-600 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-teal-100">Lo nuevo de hoy</p><h3 class="text-xl font-bold mt-1">De leer datos a modificarlos</h3></div>
          <p class="text-slate-600 text-lg">Hasta ahora tus consultas <strong>leían</strong> la base. Hoy aprendes a <strong>escribir</strong> en ella.</p>
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div class="bg-white border-2 border-teal-200 rounded-xl p-5"><p class="font-bold text-teal-900 text-lg">DQL — leer</p><p class="text-slate-700 mt-2"><code>SELECT</code>: recupera datos sin cambiarlos. Ya lo dominas de S1 y S3.</p></div>
            <div class="bg-white border-2 border-indigo-200 rounded-xl p-5"><p class="font-bold text-indigo-900 text-lg">DML — escribir</p><p class="text-slate-700 mt-2"><code>INSERT</code>, <code>UPDATE</code> y <code>DELETE</code>: cambian las filas de la tabla.</p></div>
          </div>
          <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-700"><strong>Idea clave:</strong> leer es seguro; escribir modifica la base. Por eso toda escritura se verifica con un <code>SELECT</code>.</div>
        </div>
      `
    },
    {
      id: 'sql4-7',
      title: 'INSERT · agregar filas (reactivación)',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-teal-600 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-teal-100">INSERT · ya lo viste en S3 (reactivación)</p><h3 class="text-xl font-bold mt-1">Agregar una fila nueva</h3></div>
          <div class="bg-slate-950 border border-slate-800 rounded-xl p-5">
            <p class="text-xs font-bold text-emerald-400 mb-3">SQL</p>
            <pre class="font-mono text-xs md:text-sm text-slate-100 leading-relaxed whitespace-pre-wrap">INSERT INTO ruta (id_ruta, nombre, zona)
VALUES (4, 'Ruta 7', 'Norte');</pre>
          </div>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-4"><strong>Los valores van en el mismo orden</strong> que las columnas listadas.</div>
            <div class="bg-teal-50 border border-teal-200 rounded-xl p-4"><strong>El texto va entre comillas simples</strong> ('Norte'); los números sin ellas (4).</div>
          </div>
          <div class="bg-slate-50 border rounded-xl p-4 text-sm text-slate-700"><strong>Verifica con:</strong> <code>SELECT * FROM ruta ORDER BY id_ruta;</code></div>
        </div>
      `
    },
    {
      id: 'sql4-8',
      title: 'UPDATE · cambiar filas (nuevo)',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-indigo-600 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-indigo-100">UPDATE · nuevo</p><h3 class="text-xl font-bold mt-1">Cambiar filas existentes</h3></div>
          <div class="bg-slate-950 border border-slate-800 rounded-xl p-5">
            <p class="text-xs font-bold text-emerald-400 mb-3">SQL</p>
            <pre class="font-mono text-xs md:text-sm text-slate-100 leading-relaxed whitespace-pre-wrap">UPDATE ruta
SET zona = 'Norte'
WHERE id_ruta = 2;</pre>
          </div>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-4"><strong>SET</strong> indica la columna y su nuevo valor.</div>
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-4"><strong>WHERE elige la fila</strong>. ¡Sin WHERE cambias TODAS las filas!</div>
          </div>
          <div class="bg-slate-50 border rounded-xl p-4 text-sm text-slate-700"><strong>Regla de oro:</strong> primero <code>SELECT ... WHERE</code> para ver qué filas tocarías; luego cambia SELECT por UPDATE.</div>
        </div>
      `
    },
    {
      id: 'sql4-9',
      title: 'DELETE · eliminar filas (nuevo)',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-rose-600 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-rose-100">DELETE · nuevo</p><h3 class="text-xl font-bold mt-1">Eliminar filas</h3></div>
          <div class="bg-slate-950 border border-slate-800 rounded-xl p-5">
            <p class="text-xs font-bold text-emerald-400 mb-3">SQL</p>
            <pre class="font-mono text-xs md:text-sm text-slate-100 leading-relaxed whitespace-pre-wrap">DELETE FROM ruta_dml
WHERE id_ruta = 3;</pre>
          </div>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-4"><strong>DELETE FROM</strong> borra filas, no la tabla.</div>
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-4"><strong>Sin WHERE</strong> borrarías TODA la tabla (aunque la estructura queda).</div>
          </div>
          <div class="bg-slate-50 border rounded-xl p-4 text-sm text-slate-700"><strong>Misma regla:</strong> prueba la condición con un <code>SELECT</code> antes de borrar.</div>
        </div>
      `
    },
    {
      id: 'sql4-10',
      title: 'Escritura segura · tres reglas',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-slate-900 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-slate-300">Hábitos de escritura segura</p><h3 class="text-xl font-bold mt-1">Tres reglas antes de escribir</h3></div>
          <div class="space-y-3 text-sm">
            <div class="flex gap-3 bg-white border-l-4 border-teal-500 rounded-xl p-4"><span class="font-bold text-teal-600">1</span><p class="text-slate-800"><strong>WHERE obligatorio</strong> en UPDATE y DELETE: elige solo las filas que quieres.</p></div>
            <div class="flex gap-3 bg-white border-l-4 border-indigo-500 rounded-xl p-4"><span class="font-bold text-indigo-600">2</span><p class="text-slate-800"><strong>Prueba con SELECT primero</strong>: convierte tu SELECT en UPDATE/DELETE recién cuando la salida sea la esperada.</p></div>
            <div class="flex gap-3 bg-white border-l-4 border-rose-500 rounded-xl p-4"><span class="font-bold text-rose-600">3</span><p class="text-slate-800"><strong>Poder revertir</strong>: vuelve a ejecutar el bloque de reinicio y la tabla vuelve a su estado inicial.</p></div>
          </div>
          <div class="bg-teal-50 border border-teal-200 rounded-xl p-4 text-sm text-teal-950"><strong>En la práctica de hoy</strong> cada ejercicio empieza desde el estado inicial, así puedes repetirlo cuantas veces quieras.</div>
        </div>
      `
    },
    {
      id: 'sql4-11',
      title: 'Demostración en vivo · INSERT/UPDATE/DELETE sobre ruta_dml',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-fuchsia-600 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-fuchsia-100">Demostración en el SGBD</p><h3 class="text-xl font-bold mt-1">Un INSERT, un UPDATE y un DELETE sobre ruta_dml</h3></div>
          <div class="bg-slate-950 border border-slate-800 rounded-xl p-5">
            <p class="text-xs font-bold text-emerald-400 mb-2">Estado inicial (3 rutas)</p>
            <pre class="font-mono text-xs md:text-sm text-slate-100 leading-relaxed whitespace-pre-wrap">1 | Ruta 1 | Norte
2 | Ruta 3 | Centro
3 | Ruta 5 | Sur</pre>
          </div>
          <ol class="space-y-2 text-sm">
            <li class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-fuchsia-700">1 · INSERT</span><span>Agregamos la Ruta 7 (Norte).</span></li>
            <li class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-fuchsia-700">2 · UPDATE</span><span>La Ruta 3 pasa a zona Norte.</span></li>
            <li class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-fuchsia-700">3 · DELETE</span><span>Eliminamos la Ruta 5.</span></li>
          </ol>
          <div class="bg-fuchsia-50 border border-fuchsia-200 rounded-xl p-4 text-sm text-fuchsia-950"><strong>Antes de cada paso:</strong> di en voz alta qué filas esperas cambiar y comprueba con SELECT.</div>
        </div>
      `,
      notes: `Estado inicial de ruta_dml: (1, Ruta 1, Norte), (2, Ruta 3, Centro), (3, Ruta 5, Sur). Paso 1 INSERT: INSERT INTO ruta_dml (id_ruta, nombre, zona) VALUES (4, 'Ruta 7', 'Norte'); → 4 filas. Paso 2 UPDATE: UPDATE ruta_dml SET zona = 'Norte' WHERE id_ruta = 2; → Ruta 3 pasa de Centro a Norte. Paso 3 DELETE: DELETE FROM ruta_dml WHERE id_ruta = 3; → quedan las filas 1, 2 y 4. Antes de cada paso, proyectar el SELECT que anticipa las filas afectadas y dejar que el grupo diga qué espera ver.`
    },
    {
      id: 'sql4-12',
      title: 'Práctica DML · tres operaciones sobre la base ruta_dml',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-emerald-600 text-white rounded-xl p-4 flex items-center justify-between"><div><p class="text-xs uppercase tracking-widest font-bold text-emerald-100">Práctica DML · formativa (0 %)</p><h3 class="text-xl font-bold mt-1">Tres operaciones sobre la base ruta_dml</h3></div><span class="text-3xl">🧪</span></div>
          <div class="bg-slate-950 border border-slate-800 rounded-xl p-5">
            <p class="text-xs font-bold text-emerald-400 mb-2">Reinicio (solo toca ruta_dml; no afecta las tablas del taller)</p>
            <pre class="font-mono text-xs text-slate-100 leading-relaxed whitespace-pre-wrap">DROP TABLE IF EXISTS ruta_dml;
CREATE TABLE ruta_dml (id_ruta INTEGER PRIMARY KEY,
  nombre VARCHAR(30) NOT NULL, zona VARCHAR(20) NOT NULL);
INSERT INTO ruta_dml VALUES (1,'Ruta 1','Norte'),
  (2,'Ruta 3','Centro'), (3,'Ruta 5','Sur');</pre>
          </div>
          <ol class="space-y-2 text-sm">
            <li class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-emerald-700">1</span><span><strong>INSERT:</strong> agrega la ruta 4, nombre 'Ruta 7', zona 'Norte'.</span></li>
            <li class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-emerald-700">2</span><span><strong>UPDATE:</strong> cambia la zona de la ruta 2 a 'Norte'.</span></li>
            <li class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-emerald-700">3</span><span><strong>DELETE:</strong> elimina la ruta 3.</span></li>
          </ol>
          <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-sm text-emerald-950"><strong>Verifica cada paso</strong> con <code>SELECT * FROM ruta_dml ORDER BY id_ruta;</code> y compáralo con la salida esperada.</div>
        </div>
      `,
      notes: `Soluciones y salidas esperadas (docente). Reinicio: DROP TABLE IF EXISTS ruta_dml; CREATE TABLE ruta_dml (id_ruta INTEGER PRIMARY KEY, nombre VARCHAR(30) NOT NULL, zona VARCHAR(20) NOT NULL); INSERT INTO ruta_dml VALUES (1,'Ruta 1','Norte'), (2,'Ruta 3','Centro'), (3,'Ruta 5','Sur');. Ejercicio 1 (INSERT): INSERT INTO ruta_dml (id_ruta, nombre, zona) VALUES (4, 'Ruta 7', 'Norte'); SELECT * FROM ruta_dml ORDER BY id_ruta; → (1 Ruta 1 Norte), (2 Ruta 3 Centro), (3 Ruta 5 Sur), (4 Ruta 7 Norte). Ejercicio 2 (UPDATE): UPDATE ruta_dml SET zona = 'Norte' WHERE id_ruta = 2; SELECT * FROM ruta_dml ORDER BY id_ruta; → (1 Ruta 1 Norte), (2 Ruta 3 Norte), (3 Ruta 5 Sur), (4 Ruta 7 Norte). Ejercicio 3 (DELETE): DELETE FROM ruta_dml WHERE id_ruta = 3; SELECT * FROM ruta_dml ORDER BY id_ruta; → (1 Ruta 1 Norte), (2 Ruta 3 Norte), (4 Ruta 7 Norte). Para revertir, vuelve a ejecutar el bloque de reinicio. Transacciones (BEGIN/COMMIT/ROLLBACK) se verán en S6; no adelantarlas aquí.`
    },
    {
      id: 'sql4-13',
      title: 'Cierre · preguntas, tarea y anticipos',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-gradient-to-br from-slate-900 to-teal-900 text-white p-6 rounded-2xl"><p class="text-xs uppercase tracking-widest font-bold text-teal-200">Antes de cerrar</p><h3 class="text-2xl font-bold mt-2">Tres preguntas de salida</h3></div>
          <div class="space-y-3">
            <div class="flex gap-4 bg-white border-l-4 border-teal-500 rounded-xl p-4"><span class="font-bold text-teal-600">1</span><p class="text-slate-800">¿Qué pasa si ejecutas un UPDATE sin WHERE?</p></div>
            <div class="flex gap-4 bg-white border-l-4 border-indigo-500 rounded-xl p-4"><span class="font-bold text-indigo-600">2</span><p class="text-slate-800">¿Cómo sabes, antes de borrar, qué filas eliminará tu DELETE?</p></div>
            <div class="flex gap-4 bg-white border-l-4 border-rose-500 rounded-xl p-4"><span class="font-bold text-rose-600">3</span><p class="text-slate-800">¿En qué se diferencian SELECT (DQL) e INSERT/UPDATE/DELETE (DML)?</p></div>
          </div>
          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-teal-50 border border-teal-200 rounded-xl p-4 text-sm text-teal-950"><strong>Tarea:</strong> repasa INSERT, UPDATE y DELETE en la base ruta_dml y prepara una consulta de comprobación para cada uno.</div>
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-950"><strong>Anticipo:</strong> jue 22/10 → práctica DML evaluada (20 %).</div>
          </div>
        </div>
      `,
      notes: `Respuestas de salida: 1) UPDATE sin WHERE cambia TODAS las filas de la tabla (por eso WHERE es obligatorio). 2) Ejecuto primero SELECT ... WHERE con la misma condición y observo las filas que devuelve; solo si son las correctas lo convierto en DELETE. 3) SELECT (DQL) solo lee y devuelve datos sin cambiarlos; INSERT/UPDATE/DELETE (DML) escriben y modifican el contenido de la tabla.`
    },
    {
      id: 'sql4-14',
      title: 'Fuentes',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-slate-50 border border-slate-200 rounded-2xl p-5">
            <p class="font-bold text-slate-900">Para ampliar</p>
            <ul class="list-disc list-inside text-sm text-slate-700 mt-3 space-y-2">
              <li>Programa analítico de ELECTIVA II (PROGRAMACIÓN EN SQL), Unidad II, objetivos II.2, II.4 y II.5.</li>
              <li>Banco de contenidos de la asignatura, módulo de manipulación de datos (DML).</li>
              <li>José Juan Sánchez. <em>Bases de Datos</em> (apuntes didácticos), DML: INSERT, UPDATE y DELETE.</li>
              <li>PostgreSQL Documentation (sintaxis de DML).</li>
            </ul>
          </div>
          <div class="bg-teal-50 border border-teal-200 rounded-xl p-4 text-sm text-teal-950"><strong>Actividad PGA de la semana:</strong> taller práctico individual (10 %) + introducción formativa a DML · escala de estimación · 10 %.</div>
          <p class="text-xs text-slate-400 text-center">La base ruta_dml y sus datos son de práctica para el aula.</p>
        </div>
      `
    }
  ]
};
