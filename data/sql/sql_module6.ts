import { Module } from '../../types';

export const SQL_MODULE_6: Module = {
  id: 'sql-mod-6',
  title: '6. Repaso general: consultas y DML',
  description:
    'Semana 6 (jueves 29/10, sin laboratorio): repaso con teoría sólida de lo visto en S1–S5 (modelo relacional, DDL/DML/DQL, tipos y NULL, orden lógico de SELECT, agregación, GROUP BY/HAVING, INNER JOIN, INSERT/UPDATE/DELETE y errores comunes) y práctica en papel y pizarra: trazas de salida, detectar el error y escribir la consulta para un enunciado.',
  evaluation: '0%',
  slides: [
    {
      id: 'sql6-1',
      title: 'SQL · Semana 6',
      contentHtml: `
        <div class="space-y-6">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 bg-teal-600 rounded-xl flex items-center justify-center text-white text-3xl shadow-lg">🗄️</div>
            <div><h2 class="text-3xl font-bold text-slate-900">Semana 6 · Repaso general</h2>
            <p class="text-slate-500">Jueves 29/10 · 14:30–16:45 · Aula A-01 · Sección A</p></div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div class="bg-teal-50 border border-teal-200 rounded-xl p-4"><h4 class="font-bold text-teal-900">Hoy</h4><div class="text-sm text-slate-700 mt-2 space-y-1"><p>Repaso con teoría de todo lo visto</p><p>Consultas y DML en papel y pizarra</p></div></div>
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-4"><h4 class="font-bold text-amber-900">Modalidad</h4><div class="text-sm text-slate-700 mt-2 space-y-1"><p>Sin laboratorio</p><p>Trabajo individual y en parejas</p></div></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-4"><h4 class="font-bold text-slate-900">Evaluación</h4><div class="text-sm text-slate-700 mt-2 space-y-1"><p>Clase formativa (0 %)</p><p>Sin entrega</p></div></div>
          </div>
        </div>
      `,
      notes: 'Clase de 135 min (3 h académicas) sin laboratorio. Es un repaso decidido por el docente. El contenido de PGA S6 (transacciones, roles, funciones almacenadas, excepciones) queda pendiente para otra sesión; no mencionarlo como dictado. Tiempos: ver plan S06-contenido-clase-jueves.md.'
    },
    {
      id: 'sql6-2',
      title: 'Agenda de hoy',
      contentHtml: `
        <div class="space-y-3">
          <div class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-teal-700 w-28">Teoría</span><span>Modelo relacional, DDL/DML/DQL, tipos y NULL</span></div>
          <div class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-teal-700 w-28">Teoría</span><span>Orden lógico, agregación, GROUP BY y HAVING</span></div>
          <div class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-teal-700 w-28">Teoría</span><span>INNER JOIN, LEFT/RIGHT, INSERT, UPDATE, DELETE</span></div>
          <div class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-indigo-700 w-28">Práctica</span><span>Trazar la salida · Detectar el error · Escribir la consulta</span></div>
          <div class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-emerald-700 w-28">Cierre</span><span>Mini-quiz y mapa de lo visto</span></div>
        </div>
      `,
      notes: 'Tiempos internos (135 min): 0-10 encuadre; 10-50 teoría (40 min, ~30 %); 50-75 práctica guiada; 75-95 detectar el error; 95-120 práctica autónoma; 120-128 mini-quiz; 128-135 cierre. Si se atrasa, recortar LEFT/RIGHT (ampliación).'
    },
    {
      id: 'sql6-3',
      title: 'Mapa de lo visto · S1 a S5',
      contentHtml: `
        <div class="space-y-3">
          <table class="w-full text-sm border border-slate-200">
            <thead class="bg-slate-100"><tr><th class="p-2 text-left">Semana</th><th class="p-2 text-left">Qué vimos</th></tr></thead>
            <tbody>
              <tr class="border-t"><td class="p-2 font-bold">S1</td><td class="p-2">Base de datos, SGBD, modelo relacional, SELECT/FROM/WHERE/ORDER BY</td></tr>
              <tr class="border-t"><td class="p-2 font-bold">S3</td><td class="p-2">Tipos de datos, CREATE TABLE, INSERT, agregación, GROUP BY/HAVING, INNER JOIN</td></tr>
              <tr class="border-t"><td class="p-2 font-bold">S4</td><td class="p-2">DML: INSERT, UPDATE, DELETE y escritura segura</td></tr>
              <tr class="border-t"><td class="p-2 font-bold">S5</td><td class="p-2">Práctica DML individual (20 %)</td></tr>
            </tbody>
          </table>
          <p data-reveal class="text-sm text-slate-700">Hoy ordenamos todo en un solo hilo: <strong>modelo → escribir → leer → unir → modificar</strong>.</p>
        </div>
      `,
      notes: 'La sesión de S2 (01/10) no se dictó; su contenido (componentes de la base relacional, tipos de datos, CREATE TABLE, INSERT) se dio en S3 (08/10). Por eso la tabla agrupa S2 dentro de S3. S5 (22/10) fue la práctica DML individual para casa; fecha y medio de entrega: no se tratan hoy.'
    },
    {
      id: 'sql6-4',
      title: 'Modelo relacional · piezas y claves',
      contentHtml: `
        <div class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div class="bg-white border rounded-xl p-4 space-y-1"><h4 class="font-bold text-teal-800">Vocabulario</h4>
              <p><strong>Tabla</strong> (relación): conjunto de filas con la misma estructura.</p>
              <p><strong>Fila</strong> (registro): un hecho. <strong>Columna</strong> (campo): un atributo.</p>
            </div>
            <div class="bg-white border rounded-xl p-4 space-y-1"><h4 class="font-bold text-teal-800">Claves</h4>
              <p><strong>Clave primaria (PK):</strong> identifica cada fila; única y sin NULL.</p>
              <p><strong>Clave foránea (FK):</strong> columna que apunta a la PK de otra tabla.</p>
            </div>
          </div>
          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto"><p class="text-[10px] uppercase tracking-widest text-slate-400 mb-2">Esquema de la base rutas</p><pre class="text-xs font-mono leading-6">ruta(<u>id_ruta</u>, nombre, zona)
bus(<u>id_bus</u>, nombre, matricula)
pasaje(<u>id_pasaje</u>, id_ruta → ruta, id_bus → bus, fecha, monto)</pre></div>
          <p class="text-sm text-slate-700">Las FK son las que permiten <strong>unir</strong> tablas con JOIN.</p>
        </div>
      `,
      notes: 'Teoría breve. Preguntar: ¿por qué pasaje guarda id_ruta y no el nombre de la ruta? (evita repetir datos y mantiene un solo lugar donde corregirlos). En el esquema de S3 las columnas FK no se declaraban con FOREIGN KEY; aquí se nombran como FK por su función. Subrayado = PK.'
    },
    {
      id: 'sql6-5',
      title: 'Base de práctica · rutas (datos de hoy)',
      contentHtml: `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div><p class="font-bold mb-1">ruta</p>
            <table class="w-full border border-slate-200"><thead class="bg-slate-100"><tr><th class="p-1 text-left">id_ruta</th><th class="p-1 text-left">nombre</th><th class="p-1 text-left">zona</th></tr></thead><tbody>
              <tr class="border-t"><td class="p-1">1</td><td class="p-1">Ruta 1</td><td class="p-1">Norte</td></tr>
              <tr class="border-t"><td class="p-1">2</td><td class="p-1">Ruta 3</td><td class="p-1">Centro</td></tr>
              <tr class="border-t"><td class="p-1">3</td><td class="p-1">Ruta 5</td><td class="p-1">Sur</td></tr>
              <tr class="border-t"><td class="p-1">4</td><td class="p-1">Ruta 7</td><td class="p-1">Norte</td></tr>
            </tbody></table>
            <p class="font-bold mt-3 mb-1">bus</p>
            <table class="w-full border border-slate-200"><thead class="bg-slate-100"><tr><th class="p-1 text-left">id_bus</th><th class="p-1 text-left">nombre</th><th class="p-1 text-left">matricula</th></tr></thead><tbody>
              <tr class="border-t"><td class="p-1">1</td><td class="p-1">Bus 01</td><td class="p-1">ABC-123</td></tr>
              <tr class="border-t"><td class="p-1">2</td><td class="p-1">Bus 02</td><td class="p-1">DEF-456</td></tr>
            </tbody></table>
          </div>
          <div class="md:col-span-2"><p class="font-bold mb-1">pasaje</p>
            <table class="w-full border border-slate-200"><thead class="bg-slate-100"><tr><th class="p-1 text-left">id_pasaje</th><th class="p-1 text-left">id_ruta</th><th class="p-1 text-left">id_bus</th><th class="p-1 text-left">fecha</th><th class="p-1 text-left">monto</th></tr></thead><tbody>
              <tr class="border-t"><td class="p-1">1</td><td class="p-1">1</td><td class="p-1">1</td><td class="p-1">2026-10-08</td><td class="p-1">25.00</td></tr>
              <tr class="border-t"><td class="p-1">2</td><td class="p-1">1</td><td class="p-1">2</td><td class="p-1">2026-10-08</td><td class="p-1">25.00</td></tr>
              <tr class="border-t"><td class="p-1">3</td><td class="p-1">2</td><td class="p-1">1</td><td class="p-1">2026-10-09</td><td class="p-1">30.00</td></tr>
              <tr class="border-t"><td class="p-1">4</td><td class="p-1">2</td><td class="p-1">2</td><td class="p-1">2026-10-09</td><td class="p-1">30.00</td></tr>
              <tr class="border-t"><td class="p-1">5</td><td class="p-1">2</td><td class="p-1">1</td><td class="p-1">2026-10-10</td><td class="p-1 font-bold text-rose-600">NULL</td></tr>
              <tr class="border-t"><td class="p-1">6</td><td class="p-1">3</td><td class="p-1">2</td><td class="p-1">2026-10-10</td><td class="p-1">40.00</td></tr>
              <tr class="border-t"><td class="p-1">7</td><td class="p-1">1</td><td class="p-1">1</td><td class="p-1">2026-10-12</td><td class="p-1">25.00</td></tr>
            </tbody></table>
          </div>
        </div>
        <p class="text-xs text-slate-500 mt-3">Datos sintéticos de repaso. Cópienlos en el cuaderno: se usan en toda la práctica. Ojo con la fila 5 (monto NULL) y la Ruta 7 (sin pasajes).</p>
      `,
      notes: 'Versión reducida de la base rutas de S3 (datos nuevos para el repaso, verificados con sqlite3). Trampas intencionales: pasaje 5 con monto NULL y Ruta 7 sin pasajes. Dejar esta diapositiva visible o volver a ella durante toda la práctica.'
    },
    {
      id: 'sql6-6',
      title: 'Subconjuntos de SQL · DDL, DML y DQL',
      contentHtml: `
        <div class="space-y-4">
          <table class="w-full text-sm border border-slate-200">
            <thead class="bg-slate-100"><tr><th class="p-2 text-left">Subconjunto</th><th class="p-2 text-left">Qué hace</th><th class="p-2 text-left">Comandos</th></tr></thead>
            <tbody>
              <tr class="border-t"><td class="p-2 font-bold">DDL</td><td class="p-2">Define la <strong>estructura</strong></td><td class="p-2 font-mono">CREATE · ALTER · DROP</td></tr>
              <tr class="border-t"><td class="p-2 font-bold">DML</td><td class="p-2">Cambia las <strong>filas</strong></td><td class="p-2 font-mono">INSERT · UPDATE · DELETE</td></tr>
              <tr class="border-t"><td class="p-2 font-bold">DQL</td><td class="p-2"><strong>Lee</strong> sin cambiar nada</td><td class="p-2 font-mono">SELECT</td></tr>
            </tbody>
          </table>
          <div class="bg-teal-50 border border-teal-200 rounded-xl p-3 text-sm text-teal-950">Regla de bolsillo: <strong>DDL cambia la tabla, DML cambia los datos, DQL solo los mira.</strong></div>
          <p class="text-xs text-slate-500">DCL (permisos) y TCL (transacciones) existen, pero no se tratan hoy.</p>
        </div>
      `,
      notes: 'Pregunta rápida: ¿CREATE TABLE es DDL o DML? (DDL). ¿INSERT? (DML). Algunos autores incluyen SELECT dentro de DML; en este curso se separa como DQL (S4). DCL y TCL quedan pendientes (parte del contenido de PGA S6 que no se dicta hoy).'
    },
    {
      id: 'sql6-7',
      title: 'Tipos de datos y NULL',
      contentHtml: `
        <div class="space-y-4">
          <table class="w-full text-sm border border-slate-200">
            <thead class="bg-slate-100"><tr><th class="p-2 text-left">Categoría</th><th class="p-2 text-left">Tipos</th><th class="p-2 text-left">Ejemplo en rutas</th></tr></thead>
            <tbody>
              <tr class="border-t"><td class="p-2">Entero</td><td class="p-2 font-mono">INT</td><td class="p-2">id_ruta</td></tr>
              <tr class="border-t"><td class="p-2">Decimal exacto</td><td class="p-2 font-mono">DECIMAL(10,2)</td><td class="p-2">monto</td></tr>
              <tr class="border-t"><td class="p-2">Texto</td><td class="p-2 font-mono">VARCHAR(n)</td><td class="p-2">nombre, zona</td></tr>
              <tr class="border-t"><td class="p-2">Fecha</td><td class="p-2 font-mono">DATE</td><td class="p-2">fecha</td></tr>
            </tbody>
          </table>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div class="bg-white border-l-4 border-teal-500 rounded-xl p-3">Texto y fechas van entre <strong>comillas simples</strong>: <code>'Norte'</code>, <code>'2026-10-08'</code>. Los números, sin comillas.</div>
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-3 text-rose-950"><strong>NULL = dato desconocido o ausente.</strong> No es 0 ni cadena vacía.</div>
          </div>
        </div>
      `,
      notes: 'DECIMAL para dinero: exacto; FLOAT acumula errores de redondeo (visto en S3). La PK no admite NULL. Los tipos exactos pueden variar levemente entre motores (PostgreSQL, MySQL, SQLite).'
    },
    {
      id: 'sql6-8',
      title: 'NULL · cómo se comporta',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto"><p class="text-[10px] uppercase tracking-widest text-slate-400 mb-2">SQL</p><pre class="text-xs font-mono leading-6">SELECT id_pasaje FROM pasaje WHERE monto = NULL;    -- 0 filas (siempre)
SELECT id_pasaje FROM pasaje WHERE monto IS NULL;   -- el pasaje 5</pre></div>
          <div class="space-y-2">
            <div data-reveal class="bg-white border-l-4 border-rose-500 rounded-xl p-3 text-sm"><strong>Comparar con NULL</strong> nunca da verdadero: se usa <code>IS NULL</code> / <code>IS NOT NULL</code>.</div>
            <div data-reveal class="bg-white border-l-4 border-indigo-500 rounded-xl p-3 text-sm"><strong>Las agregaciones ignoran NULL</strong> (salvo <code>COUNT(*)</code>): <code>COUNT(monto)</code> cuenta 6, <code>COUNT(*)</code> cuenta 7.</div>
            <div data-reveal class="bg-white border-l-4 border-emerald-500 rounded-xl p-3 text-sm">El promedio de la Ruta 3 es 30.00, no 20.00: el NULL <strong>no entra</strong> a la cuenta.</div>
          </div>
        </div>
      `,
      notes: 'Verificado con sqlite3 sobre los datos de sql6-5: COUNT(*)=7, COUNT(monto)=6, SUM(monto)=175.00, AVG de la ruta 2 = 30.00 (dos montos no nulos 30 y 30). Si NULL contara como 0 sería (30+30+0)/3 = 20.00.'
    },
    {
      id: 'sql6-9',
      title: 'Orden lógico de una consulta',
      contentHtml: `
        <div class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto"><p class="text-[10px] uppercase tracking-widest text-slate-400 mb-2">Cómo se escribe</p><pre class="text-xs font-mono leading-6">SELECT columnas
FROM tabla
[JOIN ... ON ...]
WHERE filtro de filas
GROUP BY grupos
HAVING filtro de grupos
ORDER BY orden;</pre></div>
            <div class="bg-white border rounded-xl p-4"><p class="font-bold text-teal-800 text-sm mb-2">Cómo se evalúa</p>
              <ol class="list-decimal list-inside text-sm space-y-1">
                <li>FROM / JOIN</li><li>WHERE</li><li>GROUP BY</li><li>HAVING</li><li>SELECT</li><li>ORDER BY</li>
              </ol>
            </div>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-3 text-sm text-amber-950">Consecuencia: <strong>WHERE no puede usar agregaciones</strong> (aún no hay grupos); para eso existe HAVING.</div>
        </div>
      `,
      notes: 'Idea central del repaso: se escribe en un orden y se evalúa en otro. Explica por qué WHERE SUM(monto) > 60 es un error. ORDER BY sí puede usar el alias del SELECT porque se evalúa después. PostgreSQL no permite alias del SELECT en WHERE/HAVING.'
    },
    {
      id: 'sql6-10',
      title: 'Funciones de agregación',
      contentHtml: `
        <div class="space-y-4">
          <table class="w-full text-sm border border-slate-200">
            <thead class="bg-slate-100"><tr><th class="p-2 text-left">Función</th><th class="p-2 text-left">Devuelve</th><th class="p-2 text-left">Sobre pasaje (los 7 pasajes)</th></tr></thead>
            <tbody>
              <tr class="border-t"><td class="p-2 font-mono">COUNT(*)</td><td class="p-2">Cuántas filas</td><td class="p-2">7</td></tr>
              <tr class="border-t"><td class="p-2 font-mono">COUNT(monto)</td><td class="p-2">Cuántos no NULL</td><td class="p-2">6</td></tr>
              <tr class="border-t"><td class="p-2 font-mono">SUM(monto)</td><td class="p-2">Suma</td><td class="p-2">175.00</td></tr>
              <tr class="border-t"><td class="p-2 font-mono">MAX(monto) / MIN(monto)</td><td class="p-2">Mayor / menor</td><td class="p-2">40.00 / 25.00</td></tr>
            </tbody>
          </table>
          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto"><p class="text-[10px] uppercase tracking-widest text-slate-400 mb-2">SQL</p><pre class="text-xs font-mono leading-6">SELECT COUNT(*) AS filas, COUNT(monto) AS con_monto, SUM(monto) AS total
FROM pasaje;</pre></div>
          <p class="text-sm text-slate-700">Sin GROUP BY, una agregación <strong>resume toda la tabla en una sola fila</strong>.</p>
        </div>
      `,
      notes: 'Verificado: COUNT(*)=7, COUNT(monto)=6, SUM=175, MAX=40, MIN=25. AVG global = 175/6 = 29.1666...; en PostgreSQL se muestra 29.1666666666666667, por eso no se pide AVG global en pantalla.'
    },
    {
      id: 'sql6-11',
      title: 'GROUP BY y HAVING',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto"><p class="text-[10px] uppercase tracking-widest text-slate-400 mb-2">SQL</p><pre class="text-xs font-mono leading-6">SELECT id_ruta, COUNT(*) AS pasajes, SUM(monto) AS total
FROM pasaje
GROUP BY id_ruta
HAVING SUM(monto) &gt;= 60
ORDER BY id_ruta;</pre></div>
          <table class="w-full text-sm border border-slate-200">
            <thead class="bg-slate-100"><tr><th class="p-2 text-left">id_ruta</th><th class="p-2 text-left">pasajes</th><th class="p-2 text-left">total</th></tr></thead>
            <tbody>
              <tr class="border-t"><td class="p-2">1</td><td class="p-2">3</td><td class="p-2">75.00</td></tr>
              <tr class="border-t"><td class="p-2">2</td><td class="p-2">3</td><td class="p-2">60.00</td></tr>
            </tbody>
          </table>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div class="bg-white border-l-4 border-teal-500 rounded-xl p-3"><strong>WHERE</strong> filtra <strong>filas</strong>, antes de agrupar.</div>
            <div class="bg-white border-l-4 border-indigo-500 rounded-xl p-3"><strong>HAVING</strong> filtra <strong>grupos</strong>, después de agrupar.</div>
          </div>
          <p class="text-xs text-slate-500">Regla: toda columna del SELECT que no es agregación debe estar en el GROUP BY.</p>
        </div>
      `,
      notes: 'Salida verificada con sqlite3 (el grupo id_ruta 3, que suma 40, queda fuera por HAVING >= 60). Sin HAVING: ruta 1 = 3 pasajes y 75; ruta 2 = 3 pasajes y 60 (el NULL cuenta en COUNT(*) pero no en SUM); ruta 3 = 1 pasaje y 40. PostgreSQL rechaza SELECT id_ruta, SUM(monto) FROM pasaje sin GROUP BY.'
    },
    {
      id: 'sql6-12',
      title: 'INNER JOIN · unir tablas',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto"><p class="text-[10px] uppercase tracking-widest text-slate-400 mb-2">SQL</p><pre class="text-xs font-mono leading-6">SELECT r.zona, SUM(p.monto) AS total
FROM ruta r
INNER JOIN pasaje p ON p.id_ruta = r.id_ruta
GROUP BY r.zona
ORDER BY total DESC;</pre></div>
          <table class="w-full text-sm border border-slate-200">
            <thead class="bg-slate-100"><tr><th class="p-2 text-left">zona</th><th class="p-2 text-left">total</th></tr></thead>
            <tbody>
              <tr class="border-t"><td class="p-2">Norte</td><td class="p-2">75.00</td></tr>
              <tr class="border-t"><td class="p-2">Centro</td><td class="p-2">60.00</td></tr>
              <tr class="border-t"><td class="p-2">Sur</td><td class="p-2">40.00</td></tr>
            </tbody>
          </table>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
            <div class="bg-white border rounded-xl p-3"><strong>ON</strong> dice cómo se emparejan (PK = FK).</div>
            <div class="bg-white border rounded-xl p-3"><strong>Alias</strong> (<code>r</code>, <code>p</code>) acortan y desambiguan.</div>
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-3 text-rose-950"><strong>Solo coincidencias:</strong> la Ruta 7 (sin pasajes) no aparece.</div>
          </div>
        </div>
      `,
      notes: 'Verificado con sqlite3. Norte = 75 porque la Ruta 7 (también Norte) no tiene pasajes y el INNER JOIN la descarta, aunque no afecta la suma. Ver la pérdida con COUNT: la Ruta 7 no sale en un listado por ruta.'
    },
    {
      id: 'sql6-13',
      title: 'Ampliación · LEFT y RIGHT JOIN',
      contentHtml: `
        <div class="space-y-4">
          <table class="w-full text-sm border border-slate-200">
            <thead class="bg-slate-100"><tr><th class="p-2 text-left">Join</th><th class="p-2 text-left">Qué conserva</th></tr></thead>
            <tbody>
              <tr class="border-t"><td class="p-2 font-mono">INNER</td><td class="p-2">Solo las filas con pareja en ambas tablas</td></tr>
              <tr class="border-t"><td class="p-2 font-mono">LEFT</td><td class="p-2">Todas las de la tabla izquierda + coincidencias (sin pareja → NULL)</td></tr>
              <tr class="border-t"><td class="p-2 font-mono">RIGHT</td><td class="p-2">Todas las de la derecha + coincidencias</td></tr>
            </tbody>
          </table>
          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto"><p class="text-[10px] uppercase tracking-widest text-slate-400 mb-2">SQL · rutas sin pasajes</p><pre class="text-xs font-mono leading-6">SELECT r.nombre
FROM ruta r
LEFT JOIN pasaje p ON p.id_ruta = r.id_ruta
WHERE p.id_pasaje IS NULL;</pre></div>
          <p class="text-xs text-slate-500">Ampliación opcional: no forma parte de lo evaluable.</p>
        </div>
      `,
      notes: 'Resultado verificado: una fila, Ruta 7. Con LEFT JOIN + COUNT(p.id_pasaje) la Ruta 7 aparece con 0 (COUNT de columna ignora NULL; COUNT(*) daría 1). LEFT/RIGHT JOIN son ampliación, fuera del alcance evaluable. Si falta tiempo, omitir esta diapositiva.'
    },
    {
      id: 'sql6-14',
      title: 'DML · INSERT, UPDATE, DELETE y escritura segura',
      contentHtml: `
        <div class="space-y-3">
          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto"><p class="text-[10px] uppercase tracking-widest text-slate-400 mb-2">SQL</p><pre class="text-xs font-mono leading-6">INSERT INTO ruta (id_ruta, nombre, zona) VALUES (5, 'Ruta 9', 'Centro');
UPDATE ruta SET zona = 'Sur' WHERE id_ruta = 4;
DELETE FROM ruta WHERE zona = 'Centro';</pre></div>
          <div data-reveal class="flex gap-3 bg-white border-l-4 border-rose-500 rounded-xl p-3 text-sm"><span class="font-bold text-rose-600">1</span><p><strong>WHERE obligatorio</strong> en UPDATE y DELETE: sin él afectan <strong>todas</strong> las filas.</p></div>
          <div data-reveal class="flex gap-3 bg-white border-l-4 border-indigo-500 rounded-xl p-3 text-sm"><span class="font-bold text-indigo-600">2</span><p><strong>SELECT primero</strong>, con el mismo WHERE, para ver qué filas se tocarían.</p></div>
          <div data-reveal class="flex gap-3 bg-white border-l-4 border-emerald-500 rounded-xl p-3 text-sm"><span class="font-bold text-emerald-600">3</span><p><strong>Poder revertir:</strong> tener a mano el estado de reinicio de la tabla.</p></div>
          <div data-reveal class="flex gap-3 bg-white border-l-4 border-amber-500 rounded-xl p-3 text-sm"><span class="font-bold text-amber-600">4</span><p><strong>INSERT:</strong> nombrar las columnas y respetar tipos; la PK no se repite.</p></div>
        </div>
      `,
      notes: 'Repaso de S4 y de la práctica DML (S5). Las tres reglas son las de S4; la cuarta es el refuerzo del INSERT (valores en el mismo orden que las columnas, textos entre comillas simples, PK no duplicada). Recordar que sin transacciones no hay deshacer; las transacciones quedan para otra sesión.'
    },
    {
      id: 'sql6-15',
      title: 'Errores comunes · lista de control',
      contentHtml: `
        <div class="space-y-3">
          <table class="w-full text-sm border border-slate-200">
            <thead class="bg-slate-100"><tr><th class="p-2 text-left">Error</th><th class="p-2 text-left">Corrección</th></tr></thead>
            <tbody>
              <tr class="border-t"><td class="p-2 font-mono">WHERE monto = NULL</td><td class="p-2"><code>IS NULL</code></td></tr>
              <tr class="border-t"><td class="p-2 font-mono">WHERE SUM(monto) &gt; 60</td><td class="p-2">Mover a <code>HAVING</code></td></tr>
              <tr class="border-t"><td class="p-2 font-mono">SELECT id_ruta, SUM(monto) sin GROUP BY</td><td class="p-2">Agregar <code>GROUP BY id_ruta</code></td></tr>
              <tr class="border-t"><td class="p-2 font-mono">JOIN sin ON</td><td class="p-2">Falta la condición: sale el producto cartesiano</td></tr>
              <tr class="border-t"><td class="p-2 font-mono">UPDATE / DELETE sin WHERE</td><td class="p-2">Afecta toda la tabla: SELECT primero</td></tr>
              <tr class="border-t"><td class="p-2 font-mono">zona = Norte</td><td class="p-2">Texto entre comillas: <code>'Norte'</code></td></tr>
            </tbody>
          </table>
          <p class="text-sm text-slate-700">Guarden esta lista: es lo primero que se revisa antes de ejecutar.</p>
        </div>
      `,
      notes: 'Verificado: WHERE SUM(...) da error en el motor (aggregate en WHERE); ruta x pasaje sin ON produce 4 x 7 = 28 filas; = NULL devuelve 0 filas. SELECT con columna no agregada sin GROUP BY lo rechaza PostgreSQL (otros motores como SQLite lo permiten y devuelven un valor arbitrario). Fin de la teoría (~40 min, ~30 % del bloque).'
    },
    {
      id: 'sql6-16',
      title: 'Práctica guiada 1 · trazar la salida de una consulta',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white border rounded-xl p-4 text-sm"><strong>Sin computadora.</strong> Con las tablas de la diapositiva 5, escriban en su cuaderno qué devuelve la consulta, fila por fila.</div>
          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto"><p class="text-[10px] uppercase tracking-widest text-slate-400 mb-2">Consulta A</p><pre class="text-xs font-mono leading-6">SELECT r.zona, COUNT(*) AS n
FROM pasaje p
INNER JOIN ruta r ON r.id_ruta = p.id_ruta
WHERE p.monto IS NOT NULL
GROUP BY r.zona
HAVING COUNT(*) &gt;= 2
ORDER BY r.zona;</pre></div>
          <ol class="list-decimal list-inside text-sm text-slate-800 space-y-1">
            <li data-reveal>FROM/JOIN: ¿qué filas se emparejan?</li>
            <li data-reveal>WHERE: ¿qué filas se descartan?</li>
            <li data-reveal>GROUP BY y HAVING: ¿qué grupos quedan?</li>
          </ol>
        </div>
      `,
      notes: 'Respuesta (verificada con sqlite3): Centro 2 / Norte 3. Razonamiento: se descarta el pasaje 5 (NULL); Norte = pasajes 1, 2, 7 (3); Centro = 3 y 4 (2); Sur = pasaje 6 (1) queda fuera por HAVING. Ruta 7 no aparece (sin pasajes). Resolver la primera con el grupo en la pizarra, paso a paso, con la tabla intermedia dibujada.'
    },
    {
      id: 'sql6-17',
      title: 'Práctica guiada 2 · trazar el estado de la tabla (DML)',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white border rounded-xl p-4 text-sm">Partan de la tabla <strong>ruta</strong> tal como está en la diapositiva 5 y apliquen las sentencias <strong>en orden</strong>.</div>
          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto"><p class="text-[10px] uppercase tracking-widest text-slate-400 mb-2">Secuencia</p><pre class="text-xs font-mono leading-6">UPDATE ruta SET zona = 'Sur' WHERE id_ruta = 4;
DELETE FROM ruta WHERE zona = 'Centro';
INSERT INTO ruta VALUES (5, 'Ruta 9', 'Centro');

SELECT zona, COUNT(*) AS n
FROM ruta
GROUP BY zona
ORDER BY zona;</pre></div>
          <p class="text-sm text-slate-700">1) Dibujen la tabla después de cada sentencia. 2) Escriban la salida del SELECT final.</p>
        </div>
      `,
      notes: 'Estado final de ruta (verificado): 1 Ruta 1 Norte · 3 Ruta 5 Sur · 4 Ruta 7 Sur · 5 Ruta 9 Centro. Tras el UPDATE: la ruta 4 pasa a Sur. Tras el DELETE: desaparece la ruta 2 (Centro). Tras el INSERT: entra la ruta 9 en Centro. SELECT final: Centro 1 / Norte 1 / Sur 2. Error típico: olvidar que el DELETE ocurre antes del INSERT, de modo que la ruta 9 sobrevive.'
    },
    {
      id: 'sql6-18',
      title: 'Detecta el error',
      contentHtml: `
        <div class="space-y-3">
          <p class="text-sm text-slate-700">Cada consulta tiene <strong>un error</strong>. En parejas: ¿cuál es, por qué ocurre y cómo se corrige?</p>
          <div data-reveal class="bg-slate-900 text-slate-100 rounded-xl p-3 overflow-x-auto"><p class="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Caso 1 · pasajes sin monto</p><pre class="text-xs font-mono leading-6">SELECT id_pasaje FROM pasaje WHERE monto = NULL;</pre></div>
          <div data-reveal class="bg-slate-900 text-slate-100 rounded-xl p-3 overflow-x-auto"><p class="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Caso 2 · rutas con total de al menos 60</p><pre class="text-xs font-mono leading-6">SELECT id_ruta, SUM(monto) FROM pasaje
WHERE SUM(monto) &gt;= 60 GROUP BY id_ruta;</pre></div>
          <div data-reveal class="bg-slate-900 text-slate-100 rounded-xl p-3 overflow-x-auto"><p class="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Caso 3 · pasajes con el nombre de su ruta</p><pre class="text-xs font-mono leading-6">SELECT r.nombre, p.monto FROM ruta r, pasaje p;</pre></div>
          <div data-reveal class="bg-slate-900 text-slate-100 rounded-xl p-3 overflow-x-auto"><p class="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Caso 4 · pasar el bus 2 a la matrícula JKL-012</p><pre class="text-xs font-mono leading-6">UPDATE bus SET matricula = 'JKL-012';</pre></div>
        </div>
      `,
      notes: 'Respuestas. Caso 1: comparar con NULL con = nunca es verdadero, devuelve 0 filas; usar WHERE monto IS NULL (devuelve el pasaje 5). Caso 2: agregación en WHERE (aún no hay grupos): error del motor; mover a HAVING SUM(monto) >= 60 (devuelve ruta 1 con 75 y ruta 2 con 60). Caso 3: sin condición de unión sale el producto cartesiano, 4 x 7 = 28 filas (verificado); usar INNER JOIN pasaje p ON p.id_ruta = r.id_ruta (7 filas, la ruta 7 no aparece). Caso 4: UPDATE sin WHERE cambia la matrícula de los 2 buses; agregar WHERE id_bus = 2. Dar 4 min por caso y revelar uno a uno.'
    },
    {
      id: 'sql6-19',
      title: 'Práctica autónoma · escribe la consulta',
      contentHtml: `
        <div class="space-y-3">
          <p class="text-sm text-slate-700">Individual, en el cuaderno, con las tablas de la diapositiva 5. Escriban la sentencia; al final comparamos.</p>
          <div data-reveal class="bg-white border rounded-xl p-3 text-sm"><strong>A.</strong> Pasajes (id y monto) con monto de al menos 30, del mayor al menor monto.</div>
          <div data-reveal class="bg-white border rounded-xl p-3 text-sm"><strong>B.</strong> Nombre de cada ruta y su total recaudado, solo las rutas cuyo total sea de al menos 60, ordenadas por nombre.</div>
          <div data-reveal class="bg-white border rounded-xl p-3 text-sm"><strong>C.</strong> Nombre de cada bus y cuántos pasajes tiene registrados, ordenados por nombre de bus.</div>
          <div data-reveal class="bg-white border rounded-xl p-3 text-sm"><strong>D.</strong> Registrar un bus 3 llamado 'Bus 03' con matrícula 'GHI-789'; cambiar la matrícula del bus 2 a 'JKL-012'; eliminar los pasajes sin monto. Escribir también el SELECT que comprueba cada cambio.</div>
          <div data-reveal class="bg-amber-50 border border-amber-200 rounded-xl p-3 text-sm text-amber-950"><strong>Reto (ampliación):</strong> nombre de las rutas que no tienen ningún pasaje.</div>
        </div>
      `,
      notes: `Soluciones (verificadas con sqlite3). A: SELECT id_pasaje, monto FROM pasaje WHERE monto >= 30 ORDER BY monto DESC, id_pasaje; resultado 6 con 40.00, 3 con 30.00, 4 con 30.00. B: SELECT r.nombre, SUM(p.monto) AS total FROM ruta r INNER JOIN pasaje p ON p.id_ruta = r.id_ruta GROUP BY r.nombre HAVING SUM(p.monto) >= 60 ORDER BY r.nombre; resultado Ruta 1 con 75.00 y Ruta 3 con 60.00. C: SELECT b.nombre, COUNT(*) AS pasajes FROM bus b INNER JOIN pasaje p ON p.id_bus = b.id_bus GROUP BY b.nombre ORDER BY b.nombre; resultado Bus 01 con 4 y Bus 02 con 3. D: INSERT INTO bus VALUES (3, 'Bus 03', 'GHI-789'); UPDATE bus SET matricula = 'JKL-012' WHERE id_bus = 2; DELETE FROM pasaje WHERE monto IS NULL; comprobaciones SELECT * FROM bus ORDER BY id_bus (3 filas, bus 2 con JKL-012) y SELECT COUNT(*), SUM(monto) FROM pasaje (6 filas, 175.00). Reto: SELECT r.nombre FROM ruta r LEFT JOIN pasaje p ON p.id_ruta = r.id_ruta WHERE p.id_pasaje IS NULL; resultado Ruta 7. Criterio de revisión (sin nota): WHERE/HAVING bien ubicados, ON presente, GROUP BY coherente, comillas, WHERE en UPDATE/DELETE. Sin entrega: se revisa en clase.`
    },
    {
      id: 'sql6-20',
      title: 'Mini-quiz · comprobación rápida',
      contentHtml: `
        <div class="space-y-4">
          <div data-quiz class="bg-white border rounded-xl p-4 space-y-2">
            <p class="font-semibold">¿Cuál de estas sentencias es DDL?</p>
            <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">UPDATE ruta SET zona = 'Sur' WHERE id_ruta = 4;</button>
            <button data-option data-correct class="block w-full text-left border rounded-lg p-2 text-sm">CREATE TABLE bus (id_bus INT PRIMARY KEY);</button>
            <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">SELECT * FROM bus;</button>
            <p data-explain class="text-sm text-slate-600">CREATE define estructura (DDL). UPDATE es DML y SELECT es DQL.</p>
          </div>
          <div data-quiz class="bg-white border rounded-xl p-4 space-y-2">
            <p class="font-semibold">Con los datos de hoy, ¿cuánto devuelve COUNT(monto) sobre pasaje?</p>
            <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">7</button>
            <button data-option data-correct class="block w-full text-left border rounded-lg p-2 text-sm">6</button>
            <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">175</button>
            <p data-explain class="text-sm text-slate-600">COUNT(columna) ignora los NULL; COUNT(*) sí cuenta las 7 filas.</p>
          </div>
        </div>
      `,
      notes: 'Comprobación formativa (0 %), no evaluable. Respuestas: 1) CREATE TABLE; 2) 6 (COUNT(columna) ignora NULL). Continúa en las siguientes diapositivas.'
    },
    {
      id: 'sql6-20a',
      title: 'Mini-quiz · comprobación rápida (2)',
      contentHtml: `
        <div class="space-y-4">
          <div data-quiz class="bg-white border rounded-xl p-4 space-y-2">
            <p class="font-semibold">Para quedarte solo con los grupos cuyo total supera un valor, usas:</p>
            <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">WHERE</button>
            <button data-option data-correct class="block w-full text-left border rounded-lg p-2 text-sm">HAVING</button>
            <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">ORDER BY</button>
            <p data-explain class="text-sm text-slate-600">WHERE filtra filas antes de agrupar; HAVING filtra grupos ya agrupados.</p>
          </div>
        </div>
      `,
      notes: 'Respuesta: 3) HAVING (WHERE filtra filas antes de agrupar).'
    },
    {
      id: 'sql6-20b',
      title: 'Mini-quiz · comprobación rápida (3)',
      contentHtml: `
        <div class="space-y-4">
          <div data-quiz class="bg-white border rounded-xl p-4 space-y-2">
            <p class="font-semibold">¿Qué pierde un INNER JOIN entre ruta y pasaje?</p>
            <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">Los pasajes con monto NULL</button>
            <button data-option data-correct class="block w-full text-left border rounded-lg p-2 text-sm">Las rutas sin ningún pasaje (como la Ruta 7)</button>
            <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">Nada: trae todas las filas de las dos tablas</button>
            <p data-explain class="text-sm text-slate-600">Solo quedan las filas con pareja; para conservar la Ruta 7 se usa LEFT JOIN.</p>
          </div>
          <div data-quiz class="bg-white border rounded-xl p-4 space-y-2">
            <p class="font-semibold">Antes de ejecutar un DELETE con una condición, ¿qué haces?</p>
            <button data-option data-correct class="block w-full text-left border rounded-lg p-2 text-sm">Pruebo un SELECT con el mismo WHERE y reviso las filas</button>
            <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">Lo ejecuto; si falla, el motor lo deshace solo</button>
            <p data-explain class="text-sm text-slate-600">El SELECT con la misma condición muestra qué filas desaparecerían.</p>
          </div>
        </div>
      `,
      notes: 'Respuestas: 4) las rutas sin pasajes (como la Ruta 7); 5) SELECT con el mismo WHERE. Contar levantamiento de manos por opción para detectar qué tema reforzar.'
    },
    {
      id: 'sql6-21',
      title: 'Cierre · mapa de lo visto y anticipo',
      contentHtml: `
        <div class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-5 gap-2 text-center text-sm">
            <div class="bg-teal-50 border border-teal-200 rounded-xl p-3"><p class="font-bold text-teal-900">1 · Modelo</p><p class="text-xs text-slate-700 mt-1">Tablas, PK, FK, tipos, NULL</p></div>
            <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-3"><p class="font-bold text-indigo-900">2 · Leer</p><p class="text-xs text-slate-700 mt-1">SELECT, WHERE, ORDER BY</p></div>
            <div class="bg-violet-50 border border-violet-200 rounded-xl p-3"><p class="font-bold text-violet-900">3 · Resumir</p><p class="text-xs text-slate-700 mt-1">COUNT, SUM, GROUP BY, HAVING</p></div>
            <div class="bg-sky-50 border border-sky-200 rounded-xl p-3"><p class="font-bold text-sky-900">4 · Unir</p><p class="text-xs text-slate-700 mt-1">INNER JOIN (LEFT/RIGHT)</p></div>
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-3"><p class="font-bold text-rose-900">5 · Modificar</p><p class="text-xs text-slate-700 mt-1">INSERT, UPDATE, DELETE</p></div>
          </div>
          <div class="bg-white border rounded-xl p-4 text-sm"><h4 class="font-bold">Preguntas de salida</h4>
            <ol class="list-decimal list-inside space-y-1"><li>¿Qué diferencia hay entre WHERE y HAVING?</li><li>¿Por qué un INNER JOIN puede dejar fuera una fila?</li><li>¿Qué haces antes de un UPDATE o DELETE?</li></ol></div>
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-950"><strong>Anticipo:</strong> próxima sesión, contenido nuevo; el docente lo anunciará. Repasen en casa las diapositivas de hoy.</div>
        </div>
      `,
      notes: 'Respuestas: 1) WHERE filtra filas antes de agrupar, HAVING filtra grupos después; 2) porque solo conserva coincidencias (PK = FK); 3) SELECT con el mismo WHERE para ver las filas afectadas. Anticipo: el contenido de PGA S6 (transacciones, roles, funciones almacenadas, excepciones) quedó pendiente para otra sesión; fecha y tema de la próxima clase por confirmar con el docente. No anunciar fechas de entrega ni medio de entrega: no hay tarea evaluada hoy. SAIA no se usa.'
    },
    {
      id: 'sql6-21a',
      title: 'Informe del Corte I · qué se pide',
      contentHtml: `
        <div class="space-y-3">
          <div class="grid md:grid-cols-3 gap-3 text-sm">
            <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-3"><p class="font-bold text-indigo-900">Modalidad</p><p class="text-xs text-slate-700 mt-1">Grupos de 3 · un solo informe (Word o PDF) · sin computadora · 1 h 30 min a 2 h por integrante · <strong>20 %</strong> del Corte I.</p></div>
            <div class="bg-sky-50 border border-sky-200 rounded-xl p-3"><p class="font-bold text-sky-900">Entrega por correo</p><p class="text-xs text-slate-700 mt-1">Un integrante envía a 27758801@psm.edu.ve desde su correo institucional, con copia a los otros dos. Asunto: <code>Electiva II SQL - Informe Corte I - Apellidos</code>. Fecha límite: por confirmar.</p></div>
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-3"><p class="font-bold text-amber-900">Todos explican todo</p><p class="text-xs text-slate-700 mt-1">Misma nota para los 3, pero cada integrante debe saber explicar cualquier parte (puede haber preguntas orales).</p></div>
          </div>
          <div class="bg-white border rounded-xl p-3 text-xs space-y-1">
            <p class="font-bold text-sm">Estructura</p>
            <p><strong>Portada</strong> (3 integrantes, asignatura, sección, docente, fecha) · <strong>1. Introducción</strong>: base de datos, SGBD y SQL · <strong>2. Desarrollo</strong> (4 a 8 líneas por punto, con sus palabras):</p>
            <ul class="list-disc list-inside text-slate-700">
              <li><strong>2.1</strong> Modelo relacional: tabla, registro, campo, PK, FK; tipos de datos; DDL, DML y DQL.</li>
              <li><strong>2.2</strong> SELECT, FROM, WHERE, ORDER BY y funciones COUNT, SUM, AVG, MAX, MIN.</li>
              <li><strong>2.3</strong> GROUP BY y HAVING (frente a WHERE) e INNER JOIN.</li>
              <li><strong>2.4</strong> INSERT, UPDATE y DELETE; por qué llevan WHERE; NULL (IS NULL frente a = NULL).</li>
              <li><strong>2.5</strong> Dos ejemplos cortos con las tablas <strong>ruta, bus y pasaje</strong> de la diapositiva 5.</li>
            </ul>
            <p><strong>3. Cuadro comparativo</strong>: DDL / DML / DQL y WHERE / HAVING · <strong>4. Conclusiones</strong> (3 a 5 líneas) · <strong>5. Referencias</strong> en APA 7: apuntes de clase y una fuente adicional; citen en el texto como (Apellido, año).</p>
          </div>
          <div class="grid md:grid-cols-2 gap-3 text-xs">
            <div class="bg-slate-50 border rounded-xl p-3"><p class="font-bold text-sm">Ejemplo A</p><p class="mt-1">Tabla de salida de esta consulta y una línea que explique por qué la <strong>Ruta 7</strong> no aparece:</p><pre class="mt-1 whitespace-pre-wrap bg-white border rounded p-2">SELECT r.nombre, COUNT(*) AS viajes
FROM ruta r INNER JOIN pasaje p ON p.id_ruta = r.id_ruta
GROUP BY r.nombre ORDER BY r.nombre;</pre></div>
            <div class="bg-slate-50 border rounded-xl p-3"><p class="font-bold text-sm">Ejemplo B</p><p class="mt-1">Cómo queda la tabla <strong>ruta</strong> después de ejecutar, en orden:</p><pre class="mt-1 whitespace-pre-wrap bg-white border rounded p-2">INSERT INTO ruta VALUES (5, 'Ruta 9', 'Centro');
UPDATE ruta SET zona = 'Centro' WHERE nombre = 'Ruta 7';
DELETE FROM ruta WHERE id_ruta = 3;</pre></div>
          </div>
          <p class="text-xs text-slate-500">Se califica con 10 aspectos de 2 puntos (20 en total): presentación, organización, redacción, introducción, desarrollo, lenguaje técnico, citas en el texto, cuadro comparativo, conclusiones y referencias. 2 completo · 1 parcial · 0 ausente. Los ejemplos pueden escribirse en el documento o hacerse a mano y fotografiarse.</p>
        </div>
      `,
      notes: 'Solo docente. Respuestas: Ejemplo A: Ruta 1 = 3, Ruta 3 = 3, Ruta 5 = 1; la Ruta 7 no aparece porque el INNER JOIN descarta las rutas sin pasajes. Ejemplo B: queda (1 Ruta 1 Norte), (2 Ruta 3 Centro), (4 Ruta 7 Centro), (5 Ruta 9 Centro). 2.4: = NULL nunca es verdadero, se usa IS NULL (pasaje 5); sin WHERE, UPDATE y DELETE afectan todas las filas. Cuadro: DDL (CREATE/ALTER/DROP), DML (INSERT/UPDATE/DELETE), DQL (SELECT); WHERE filtra filas antes de agrupar y HAVING filtra grupos después. Misma nota para los 3 integrantes; si hay dudas de participación, verificar oralmente. Fecha límite por confirmar. Detalle en 04-Evaluaciones/ELECTIVA-II-SQL/Revisado-2026-2/INFORME-corte-I-sql-borrador-2026-10-30.md.'
    },
    {
      id: 'sql6-22',
      title: 'Fuentes',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-slate-50 border rounded-xl p-4 text-sm space-y-2">
            <p class="font-bold">Fuentes de esta sesión</p>
            <ul class="list-disc list-inside text-gray-600 space-y-1"><li>Módulos 1, 3 y 4 de esta asignatura (S1, S3 y S4).</li><li>PostgreSQL Documentation: SELECT, INSERT, UPDATE, DELETE.</li></ul>
          </div>
        </div>
      `,
      notes: 'Clase de repaso decidida por el docente (formativa, 0 %). Los datos de la base rutas de hoy son sintéticos y las salidas se verificaron con sqlite3; en PostgreSQL los decimales se muestran con dos cifras (25.00). No proyectar.'
    }
  ],
  tasks: [{
    id: 'sql6-t1',
    title: 'Informe técnico grupal: fundamentos de SQL (Corte I)',
    description: 'Informe en grupos de 3 sobre lo visto en el Corte I (S1 a S6), principalmente teórico, con dos ejemplos cortos que usan las tablas ruta, bus y pasaje de la diapositiva 5 de esta semana. Entrega por correo institucional; fecha por confirmar.',
    items: ['Informe en Word o PDF, un solo envío por grupo, desde correo institucional', 'Explicaciones breves de los puntos 2.1 a 2.4', 'Ejemplo A y Ejemplo B con las tablas de la Semana 6 (diapositiva 5)', 'Cuadro comparativo DDL/DML/DQL y WHERE/HAVING', 'Referencias en APA 7'],
    corte: 1,
    weight: '20 %',
    kind: 'evaluacion',
    slideId: 'sql6-21a',
  }],
};
