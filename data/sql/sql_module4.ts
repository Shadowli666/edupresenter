import { Module } from '../../types';

export const SQL_MODULE_4 : Module = {
  id: 'sql-mod-4',
  title: '4. Taller de consultas (casa) + DML: INSERT, UPDATE y DELETE',
  description:
    'Semana 4 (jueves 15/10, sin laboratorio): asignación individual para casa del taller de consultas (10 %) y, en clase, teoría de DML (INSERT, UPDATE, DELETE, efecto de WHERE, integridad referencial y NULL) trazada en papel y en pizarra, como repaso para la práctica DML del 22/10.',
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
      notes: "Clase de 135 min (3 h académicas) sin laboratorio. El taller S4 (10 %) se asigna para casa, individual. Fecha y medio de entrega: por confirmar con el docente. Continuidad: en S3 se dictaron CREATE TABLE, INSERT, operadores lógicos, agregaciones, GROUP BY/HAVING e INNER JOIN. Hoy no se redicta: avanza el DML de escritura (UPDATE, DELETE), el efecto de WHERE, la integridad referencial y NULL. Transacciones (BEGIN/COMMIT/ROLLBACK) quedan para S6."
    },
    {
      id: 'sql4-2',
      title: "Agenda de hoy",
      contentHtml: `

        <div class="space-y-3">
          <div class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-teal-700 w-20">20 min</span><span>Encuadre: taller de casa y dudas sobre la consigna</span></div>
          <div class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-teal-700 w-20">20 min</span><span>Teoría de DML (INSERT, UPDATE, DELETE, WHERE, integridad, NULL)</span></div>
          <div class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-teal-700 w-20">20 min</span><span>Demostración en pizarra y proyector</span></div>
          <div class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-teal-700 w-20">60 min</span><span>Práctica guiada y autónoma en papel</span></div>
          <div class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-teal-700 w-20">15 min</span><span>Asignación para casa y cierre</span></div>
        </div>

      `,
      notes: "Suma 135 min (20 + 20 + 20 + 60 + 15). Los 10 min añadidos respecto al borrador de 125 van a la práctica en papel: 15 min de práctica guiada (INSERT Ruta 9, id 5) + 25 min de trazas guiadas (UPDATE con SET múltiple y efecto de WHERE) + 20 min autónoma en parejas (sql4-12b) = 60 min. Si el tiempo aprieta, la práctica autónoma pasa a casa; no recortar UPDATE ni la regla del WHERE."
    },
    {
      id: 'sql4-3',
      title: "Cambio de modalidad",
      contentHtml: `

        <div class="space-y-4">
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-950"><strong>No hay laboratorio de computación.</strong> Todas las asignaciones de la asignatura son individuales y para casa.</div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
            <div class="bg-white border rounded-xl p-3"><strong>En clase</strong><p class="text-slate-700 mt-1">Pizarra y proyector. La práctica se hace en papel: se traza el estado de la tabla.</p></div>
            <div class="bg-white border rounded-xl p-3"><strong>En casa</strong><p class="text-slate-700 mt-1">Cada estudiante ejecuta sus consultas en PostgreSQL y compara con las salidas esperadas.</p></div>
            <div class="bg-white border rounded-xl p-3"><strong>Sin imprimir</strong><p class="text-slate-700 mt-1">La guía es digital; se copia a mano lo necesario o se trabaja en hoja propia.</p></div>
          </div>
        </div>

      `,
      notes: "Cambio de modalidad (2026-10-15): sin laboratorio; todas las asignaciones son individuales y para casa. Operativo (no proyectar): la consigna del taller S4 se entrega al estudiante en la guía digital, no se imprime. Fecha y medio de entrega: por confirmar con el docente (SAIA no se usa; no mencionarla como medio). Si alguien no tiene PostgreSQL en casa, anotarlo y resolverlo individualmente con el docente; no improvisar otro medio en clase."
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
          <div class="bg-white border rounded-xl p-4 text-sm"><strong>Se califica</strong> por la lógica de cada consulta y por una salida que coincida con la esperada, no por la velocidad. Instrumento: escala de estimación.</div>
        </div>

      `,
      notes: "La consigna completa y los datos de preparación están en 04-Evaluaciones/ELECTIVA-II-SQL/Revisado-2026-2/S04-taller-consultas-10pct-2026-10-15.md. NO proyectar las preguntas: en pantalla solo este alcance. Aclarar solo forma y alcance, sin resolver ítems. Distribuir la Parte A (consigna y datos); la Parte B (escala y soluciones) queda con el docente."
    },
    {
      id: 'sql4-5',
      title: "Entregar el taller",
      contentHtml: `

        <div class="space-y-3">
          <div class="bg-white border rounded-xl p-4 text-sm">1. Cada consulta comentada con su número.</div>
          <div class="bg-white border rounded-xl p-4 text-sm">2. Resultados que coincidan con las salidas esperadas de la guía.</div>
          <div class="bg-white border rounded-xl p-4 text-sm">3. Archivo <code>S04_consultas.sql</code> con todas las consultas.</div>
          <div class="bg-teal-50 border border-teal-200 rounded-xl p-4 text-sm text-teal-950"><strong>Antes de entregar:</strong> ejecuta el archivo completo de arriba abajo en una base limpia y comprueba que no da errores. Una consulta que falla al ejecutarse no suma.</div>
        </div>

      `,
      notes: "Entregables del taller S4 (10 %). Fecha de entrega y medio: por confirmar con el docente (no mostrar en pantalla; SAIA no se usa). Lista de cotejo docente: comentarios con número, archivo único, ejecución sin errores, salida coincidente."
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
              <tr class="border-t"><td class="p-2 font-bold">DML (escribir)</td><td class="p-2">Cambia las <strong>filas</strong> de la tabla</td><td class="p-2 font-mono">INSERT · UPDATE · DELETE</td></tr>
              <tr class="border-t"><td class="p-2 font-bold">DDL (definir)</td><td class="p-2">Cambia la <strong>estructura</strong> (la tabla misma)</td><td class="p-2 font-mono">CREATE · ALTER · DROP</td></tr>
            </tbody>
          </table>
          <p class="text-sm text-slate-700">Pregunta guía para cada sentencia: <strong>¿cambia filas o cambia la tabla?</strong></p>
        </div>

      `,
      notes: "Transición: «hasta S3 leíamos; ahora escribimos». La fila DDL se muestra solo para contrastar con DML (lo usa DELETE vs DROP más adelante); CREATE TABLE ya se vio en S3. TRUNCATE se clasifica como DDL en muchos textos; se trata en sql4-9."
    },
    {
      id: 'sql4-7',
      title: "INSERT · con y sin lista de columnas",
      contentHtml: `

        <div class="space-y-4">
          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto"><p class="text-[10px] uppercase tracking-widest text-slate-400 mb-2">Con lista de columnas (recomendado)</p><pre class="text-xs font-mono leading-6">INSERT INTO ruta_dml (id_ruta, nombre, zona)
VALUES (4, 'Ruta 7', 'Norte');</pre></div>
          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto"><p class="text-[10px] uppercase tracking-widest text-slate-400 mb-2">Sin lista de columnas</p><pre class="text-xs font-mono leading-6">INSERT INTO ruta_dml
VALUES (4, 'Ruta 7', 'Norte');</pre></div>
          <ul class="list-disc list-inside text-sm text-slate-700 space-y-1">
            <li>Sin lista, los valores deben ir <strong>en el orden y la cantidad exactos</strong> de las columnas de la tabla.</li>
            <li>Con lista, el orden lo fijas tú y puedes <strong>omitir</strong> columnas (reciben su valor por defecto o NULL).</li>
            <li>Texto y fechas van entre comillas simples; los números, no.</li>
          </ul>
        </div>

      `,
      notes: "Reactivación breve de S3 (INSERT ya se dictó): lo nuevo es comparar las dos formas y sus riesgos. Ambas sentencias producen el mismo resultado sobre ruta_dml (id_ruta, nombre, zona): fila 4 Ruta 7 Norte. La forma sin lista se rompe si alguien agrega o reordena columnas con ALTER TABLE; por eso se recomienda la lista. Error típico: valores en distinto orden que las columnas (por ejemplo ('Ruta 7', 4, 'Norte') falla por tipo). Dato: omitir una columna NOT NULL sin valor por defecto produce error (ver sql4-7b)."
    },
    {
      id: 'sql4-7b',
      title: "INSERT · qué rechaza el motor",
      contentHtml: `

        <div class="space-y-4">
          <p class="text-sm text-slate-700">Tabla <code>ruta_dml</code>: <code>id_ruta</code> es <strong>PRIMARY KEY</strong>; <code>nombre</code> y <code>zona</code> son <strong>NOT NULL</strong>. Estado actual: ids 1, 2 y 3.</p>
          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto"><pre class="text-xs font-mono leading-6">INSERT INTO ruta_dml (id_ruta, nombre, zona) VALUES (2, 'Ruta 8', 'Sur');
INSERT INTO ruta_dml (id_ruta, nombre) VALUES (6, 'Ruta 8');
INSERT INTO ruta_dml (id_ruta, nombre, zona) VALUES (7, 'Ruta 8', NULL);</pre></div>
          <div class="space-y-2 text-sm">
            <div data-reveal class="bg-rose-50 border border-rose-200 rounded-lg p-3"><strong>1.º</strong> ¿Entra o falla? ¿Por qué?</div>
            <div data-reveal class="bg-rose-50 border border-rose-200 rounded-lg p-3"><strong>2.º</strong> ¿Qué valor recibe <code>zona</code> al omitirla?</div>
            <div data-reveal class="bg-rose-50 border border-rose-200 rounded-lg p-3"><strong>3.º</strong> ¿Qué diferencia hay entre omitir la columna y escribir NULL?</div>
          </div>
        </div>

      `,
      notes: `Respuestas (solo docente). 1.º Falla: la clave primaria 2 ya existe (PRIMARY KEY no admite duplicados); la tabla queda con las mismas 3 filas. 2.º Al omitir zona recibe NULL (no tiene valor por defecto) y como es NOT NULL la fila se rechaza; tabla sin cambios. 3.º Ninguna en este caso: omitir equivale a NULL y ambos chocan con NOT NULL. Regla: una sentencia que falla no cambia nada (se rechaza completa). Traza esperada: antes 1 Ruta 1 Norte · 2 Ruta 3 Centro · 3 Ruta 5 Sur; después de las tres sentencias fallidas: igual. Dibujar la tabla en pizarra antes y después para que vean que no cambió.`
    },
    {
      id: 'sql4-8',
      title: "UPDATE · cambiar filas, uno o varios campos",
      contentHtml: `

        <div class="space-y-4">
          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto"><p class="text-[10px] uppercase tracking-widest text-slate-400 mb-2">Un campo</p><pre class="text-xs font-mono leading-6">UPDATE ruta_dml SET zona = 'Norte' WHERE id_ruta = 2;</pre></div>
          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto"><p class="text-[10px] uppercase tracking-widest text-slate-400 mb-2">SET múltiple (separado por comas)</p><pre class="text-xs font-mono leading-6">UPDATE ruta_dml
SET nombre = 'Ruta 4', zona = 'Sur'
WHERE id_ruta = 2;</pre></div>
          <ul class="list-disc list-inside text-sm text-slate-700 space-y-1">
            <li>Orden de lectura: <strong>qué tabla → qué columnas cambian (SET) → en qué filas (WHERE)</strong>.</li>
            <li>Una sola coma entre asignaciones; <strong>no</strong> se repite la palabra SET.</li>
          </ul>
          <div class="bg-rose-50 border border-rose-200 rounded-lg p-3 text-sm text-rose-900">⚠️ Sin <code>WHERE</code> cambia <strong>todas</strong> las filas.</div>
        </div>

      `,
      notes: `Trazas esperadas desde el estado de reinicio (1 Ruta 1 Norte · 2 Ruta 3 Centro · 3 Ruta 5 Sur). Primer UPDATE: la fila con id_ruta = 2 queda 2 Ruta 3 Norte (antes Centro); filas 1 y 3 intactas. SET múltiple sobre esa misma fila (desde reinicio): queda 2 Ruta 4 Sur (cambian nombre y zona; id_ruta no se toca). Errores a anticipar: escribir SET dos veces, olvidar la coma entre asignaciones, usar AND en lugar de coma en SET, comillas faltantes en texto. Contraste: en WHERE sí se usa AND; en SET se usa coma.`
    },
    {
      id: 'sql4-8b',
      title: "El efecto de WHERE · trazar antes y después",
      contentHtml: `

        <div class="space-y-4">
          <p class="text-sm text-slate-700">Estado de partida (ids 1, 2 y 3). Misma intención, dos sentencias:</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div class="bg-white border rounded-xl p-3 space-y-2"><div class="bg-slate-900 text-slate-100 rounded-lg p-2"><pre class="text-xs font-mono">UPDATE ruta_dml
SET zona = 'Norte';</pre></div><p><strong>Sin WHERE:</strong> ¿cuántas filas cambian?</p></div>
            <div class="bg-white border rounded-xl p-3 space-y-2"><div class="bg-slate-900 text-slate-100 rounded-lg p-2"><pre class="text-xs font-mono">UPDATE ruta_dml
SET zona = 'Norte'
WHERE id_ruta = 2;</pre></div><p><strong>Con WHERE:</strong> ¿cuántas filas cambian?</p></div>
          </div>
          <div data-reveal class="bg-teal-50 border border-teal-200 rounded-lg p-3 text-sm text-teal-950">WHERE actúa como un filtro: solo las filas para las que la condición es verdadera se modifican. Una condición sobre una columna que se repite (por ejemplo <code>zona</code>) puede afectar <strong>varias</strong> filas; sobre la PRIMARY KEY, a lo sumo una.</div>
        </div>

      `,
      notes: `Trazas (cada una desde el estado de reinicio). Sin WHERE: las 3 filas quedan en Norte: 1 Ruta 1 Norte · 2 Ruta 3 Norte · 3 Ruta 5 Norte (se perdió la información de zona de las filas 2 y 3). Con WHERE id_ruta = 2: 1 Ruta 1 Norte · 2 Ruta 3 Norte · 3 Ruta 5 Sur (cambia 1 fila). Variante para preguntar: WHERE zona = 'Sur' cambia solo la fila 3 en este estado, pero podría cambiar varias si la zona se repitiera. Cierre: el motor responde con el conteo de filas afectadas (UPDATE 3 frente a UPDATE 1): leerlo es la primera verificación. Procedimiento de pizarra: dibujar la tabla, marcar con color las filas que cumplen el WHERE y solo entonces reescribirlas.`
    },
    {
      id: 'sql4-9',
      title: "DELETE, TRUNCATE y DROP · tres cosas distintas",
      contentHtml: `

        <div class="space-y-4">
          <table class="w-full text-sm border border-slate-200">
            <thead class="bg-slate-100"><tr><th class="p-2 text-left">Sentencia</th><th class="p-2 text-left">Qué quita</th><th class="p-2 text-left">¿WHERE?</th><th class="p-2 text-left">¿Queda la tabla?</th></tr></thead>
            <tbody>
              <tr class="border-t"><td class="p-2 font-mono">DELETE FROM ruta_dml WHERE id_ruta = 3;</td><td class="p-2">Las filas que cumplen la condición</td><td class="p-2">Sí</td><td class="p-2">Sí</td></tr>
              <tr class="border-t"><td class="p-2 font-mono">DELETE FROM ruta_dml;</td><td class="p-2">Todas las filas</td><td class="p-2">No se puso</td><td class="p-2">Sí, vacía</td></tr>
              <tr class="border-t"><td class="p-2 font-mono">TRUNCATE TABLE ruta_dml;</td><td class="p-2">Todas las filas, de golpe</td><td class="p-2">No admite</td><td class="p-2">Sí, vacía</td></tr>
              <tr class="border-t"><td class="p-2 font-mono">DROP TABLE ruta_dml;</td><td class="p-2">La tabla completa (estructura y datos)</td><td class="p-2">No aplica</td><td class="p-2">No</td></tr>
            </tbody>
          </table>
          <div class="bg-rose-50 border border-rose-200 rounded-lg p-3 text-sm text-rose-900">⚠️ Sin <code>WHERE</code>, <code>DELETE</code> borra <strong>todas</strong> las filas. <code>DROP</code> no borra filas: borra la tabla.</div>
        </div>

      `,
      notes: `Trazas desde el estado de reinicio. DELETE ... WHERE id_ruta = 3: quedan 1 Ruta 1 Norte · 2 Ruta 3 Centro (la fila 3 desaparece; la tabla conserva su estructura). DELETE FROM ruta_dml; y TRUNCATE TABLE ruta_dml;: la tabla queda con 0 filas pero existe (un SELECT * devuelve vacío; un INSERT posterior funciona). DROP TABLE: la tabla ya no existe; un SELECT * devuelve error de relación inexistente y hay que volver a ejecutar CREATE TABLE. Matiz: TRUNCATE no admite WHERE; muchos textos lo ubican en DDL; si la tabla es referenciada por una llave foránea, TRUNCATE exige CASCADE o falla (no desarrollar hoy). Error frecuente a corregir: confundir DROP TABLE (estructura) con DELETE FROM (filas). Los comandos destructivos nunca se ejecutan en clase sobre la base de la práctica sin tener el bloque de reinicio listo.`
    },
    {
      id: 'sql4-9b',
      title: "Integridad referencial · PK y FK al insertar y borrar",
      contentHtml: `

        <div class="space-y-4">
          <p class="text-sm text-slate-700">Ejemplo ilustrativo: una tabla hija <code>parada_dml</code> cuya columna <code>id_ruta</code> es <strong>FOREIGN KEY</strong> hacia <code>ruta_dml(id_ruta)</code>.</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <table class="w-full border border-slate-200"><caption class="text-left font-bold p-1">ruta_dml (padre)</caption><thead class="bg-slate-100"><tr><th class="p-1 text-left">id_ruta</th><th class="p-1 text-left">nombre</th><th class="p-1 text-left">zona</th></tr></thead><tbody><tr class="border-t"><td class="p-1">1</td><td class="p-1">Ruta 1</td><td class="p-1">Norte</td></tr><tr class="border-t"><td class="p-1">2</td><td class="p-1">Ruta 3</td><td class="p-1">Centro</td></tr><tr class="border-t"><td class="p-1">3</td><td class="p-1">Ruta 5</td><td class="p-1">Sur</td></tr></tbody></table>
            <table class="w-full border border-slate-200"><caption class="text-left font-bold p-1">parada_dml (hija)</caption><thead class="bg-slate-100"><tr><th class="p-1 text-left">id_parada</th><th class="p-1 text-left">nombre</th><th class="p-1 text-left">id_ruta (FK)</th></tr></thead><tbody><tr class="border-t"><td class="p-1">10</td><td class="p-1">Terminal</td><td class="p-1">1</td></tr><tr class="border-t"><td class="p-1">11</td><td class="p-1">Plaza</td><td class="p-1">2</td></tr></tbody></table>
          </div>
          <ul class="list-disc list-inside text-sm text-slate-700 space-y-1">
            <li><strong>PK:</strong> no admite repetidos ni NULL, en cualquier INSERT o UPDATE.</li>
            <li><strong>Al insertar en la hija:</strong> el <code>id_ruta</code> debe existir en el padre.</li>
            <li><strong>Al borrar en el padre:</strong> no puede tener hijas que lo referencien.</li>
            <li>Orden seguro: <strong>insertar primero el padre, borrar primero la hija</strong>.</li>
          </ul>
        </div>

      `,
      notes: `Ejemplo ilustrativo del docente para explicar el concepto: parada_dml NO es una tabla de la base de S3 (que tenía 3 tablas con otros nombres); solo se traza en pizarra, no se usa en la práctica ni en la evaluación del 22/10 (tabla única). Casos para preguntar y respuesta esperada. a) INSERT INTO parada_dml VALUES (12, 'Muelle', 9): falla, la ruta 9 no existe en el padre; la hija queda con las 2 filas. b) INSERT INTO parada_dml VALUES (12, 'Muelle', 3): entra; la ruta 3 existe. c) DELETE FROM ruta_dml WHERE id_ruta = 1: falla, la parada 10 la referencia; el padre queda con 3 filas. d) DELETE FROM ruta_dml WHERE id_ruta = 3: entra solo si ninguna parada la usa (en el estado inicial, sí; si ya se hizo b), falla). e) Para borrar la ruta 1: primero DELETE FROM parada_dml WHERE id_parada = 10; luego DELETE FROM ruta_dml WHERE id_ruta = 1. Matiz: ON DELETE CASCADE existe pero no se desarrolla hoy; por defecto el motor rechaza. Una sentencia rechazada no cambia ninguna fila.`
    },
    {
      id: 'sql4-9c',
      title: "NULL · el valor desconocido",
      contentHtml: `

        <div class="space-y-4">
          <div class="bg-white border rounded-xl p-4 text-sm space-y-2">
            <p><strong>NULL no es 0 ni texto vacío:</strong> significa «sin valor / desconocido».</p>
            <p>No se compara con <code>=</code>: se pregunta con <code>IS NULL</code> o <code>IS NOT NULL</code>.</p>
          </div>
          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto"><pre class="text-xs font-mono leading-6">-- Dejar una columna sin valor (solo si no es NOT NULL)
UPDATE parada_dml SET id_ruta = NULL WHERE id_parada = 11;

-- Buscar las filas sin valor
SELECT * FROM parada_dml WHERE id_ruta IS NULL;</pre></div>
          <div data-quiz class="bg-white border rounded-xl p-4 space-y-2 text-sm">
            <p class="font-semibold">¿Qué devuelve <code>WHERE id_ruta = NULL</code>?</p>
            <button data-option class="block w-full text-left border rounded-lg p-2">Las filas cuyo id_ruta es NULL</button>
            <button data-option data-correct class="block w-full text-left border rounded-lg p-2">Ninguna fila: la comparación con NULL nunca es verdadera</button>
            <p data-explain class="text-slate-600">Para encontrar NULL hay que usar IS NULL.</p>
          </div>
        </div>

      `,
      notes: `Trazas. Partiendo de parada_dml con 10 Terminal 1 y 11 Plaza 2: tras UPDATE ... SET id_ruta = NULL WHERE id_parada = 11 queda 11 Plaza NULL (una FK nullable admite NULL: una parada sin ruta asignada es válida) y el SELECT con IS NULL devuelve solo esa fila; con = NULL devuelve 0 filas. En ruta_dml, en cambio, nombre y zona son NOT NULL: UPDATE ruta_dml SET zona = NULL WHERE id_ruta = 2 falla y la fila queda igual. Recordar: NULL en una PK nunca es válido. Esto sirve de repaso para la práctica del 22/10: la verificación posterior al DML se hace siempre con SELECT.`
    },
    {
      id: 'sql4-10',
      title: "Escritura segura · cuatro reglas",
      contentHtml: `

        <div class="space-y-3">
          <div data-reveal class="flex gap-3 bg-white border-l-4 border-rose-500 rounded-xl p-4"><span class="font-bold text-rose-600">1</span><p><strong>WHERE es obligatorio</strong> en UPDATE y DELETE.</p></div>
          <div data-reveal class="flex gap-3 bg-white border-l-4 border-indigo-500 rounded-xl p-4"><span class="font-bold text-indigo-600">2</span><p><strong>Probar con SELECT primero</strong>: usa la misma condición y verifica las filas.</p></div>
          <div data-reveal class="flex gap-3 bg-white border-l-4 border-emerald-500 rounded-xl p-4"><span class="font-bold text-emerald-600">3</span><p><strong>Poder revertir</strong>: vuelve a crear la tabla con el estado de reinicio.</p></div>
          <div data-reveal class="flex gap-3 bg-white border-l-4 border-amber-500 rounded-xl p-4"><span class="font-bold text-amber-600">4</span><p><strong>Verificar después</strong> con un SELECT y leer el conteo de filas afectadas que informa el motor.</p></div>
        </div>

      `,
      notes: "Flujo que se usará el 22/10: SELECT previo con el mismo WHERE -> INSERT/UPDATE/DELETE -> SELECT de verificación. Señalarlo en voz alta para conectar la práctica de hoy con la evaluación de la próxima semana. Transacciones (BEGIN/COMMIT/ROLLBACK) son S6: hoy el «revertir» es solo el bloque de reinicio."
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
            <li data-reveal>INSERT (id_ruta 4, nombre 'Ruta 7', zona 'Norte') → 4 filas</li>
            <li data-reveal>UPDATE con <code>WHERE id_ruta = 2</code>: zona pasa a 'Norte'</li>
            <li data-reveal>DELETE con <code>WHERE id_ruta = 3</code></li>
            <li data-reveal>SELECT * FROM ruta_dml ORDER BY id_ruta; para verificar</li>
          </ol>
          <p class="text-xs text-slate-500">Antes de cada paso, anticipen en voz alta las filas que cambian. Se identifica la fila por su <strong>id_ruta</strong>, no por el nombre.</p>
        </div>

      `,
      notes: `Demostración en el equipo del docente (o trazada en pizarra si no conecta). Verificar antes de clase. Trazas paso a paso, con el estado esperado después de cada sentencia. Estado inicial: 1 Ruta 1 Norte · 2 Ruta 3 Centro · 3 Ruta 5 Sur. Paso 1, INSERT INTO ruta_dml (id_ruta, nombre, zona) VALUES (4, 'Ruta 7', 'Norte'): 1 Ruta 1 Norte · 2 Ruta 3 Centro · 3 Ruta 5 Sur · 4 Ruta 7 Norte (4 filas). Paso 2, UPDATE ruta_dml SET zona = 'Norte' WHERE id_ruta = 2: 1 Ruta 1 Norte · 2 Ruta 3 Norte · 3 Ruta 5 Sur · 4 Ruta 7 Norte (la Ruta 3 tiene id_ruta 2; no confundir nombre con id). Paso 3, DELETE FROM ruta_dml WHERE id_ruta = 3: quedan 1 Ruta 1 Norte · 2 Ruta 3 Norte · 4 Ruta 7 Norte (se fue la Ruta 5, que tenía id 3). Paso 4, SELECT: devuelve esas 3 filas. Error provocado opcional (base desechable): UPDATE ruta_dml SET zona = 'Norte'; sin WHERE cambia las 3 filas; revertir con el bloque de reinicio: DROP TABLE IF EXISTS ruta_dml; CREATE TABLE ruta_dml (id_ruta INTEGER PRIMARY KEY, nombre VARCHAR(30) NOT NULL, zona VARCHAR(20) NOT NULL); INSERT INTO ruta_dml VALUES (1,'Ruta 1','Norte'), (2,'Ruta 3','Centro'), (3,'Ruta 5','Sur');`
    },
    {
      id: 'sql4-12',
      title: "Práctica en papel · trazar las tablas",
      contentHtml: `

        <div class="space-y-4">
          <div class="bg-white border rounded-xl p-4 text-sm"><strong>Sin computadora.</strong> Tracen en papel el estado de la tabla después de cada sentencia. Cada ejercicio parte del estado de reinicio (ids 1, 2 y 3).</div>
          <div class="bg-white border rounded-xl p-4 text-sm"><strong>Guiada:</strong> agregar la Ruta 9 en zona Sur con <code>id_ruta = 5</code>:<br><code>INSERT INTO ruta_dml (id_ruta, nombre, zona) VALUES (5, 'Ruta 9', 'Sur');</code><br>Dibujar la tabla resultante.</div>
          <div class="bg-white border rounded-xl p-4 text-sm"><strong>Autónoma (en parejas):</strong><br>1. INSERT con <code>id_ruta = 4</code>, nombre 'Ruta 7', zona 'Norte'.<br>2. UPDATE de la zona a 'Norte' donde <code>id_ruta = 2</code>.<br>3. DELETE donde <code>id_ruta = 3</code>.</div>
        </div>

      `,
      notes: `Salidas esperadas para comparar (docente). Guiada, desde reinicio: INSERT (5, 'Ruta 9', 'Sur') -> 1 Ruta 1 Norte · 2 Ruta 3 Centro · 3 Ruta 5 Sur · 5 Ruta 9 Sur (4 filas; el id 4 queda sin usar y no pasa nada). Ejercicio 1, desde reinicio: INSERT (4, 'Ruta 7', 'Norte') -> 1 Ruta 1 Norte · 2 Ruta 3 Centro · 3 Ruta 5 Sur · 4 Ruta 7 Norte. Ejercicio 2, desde reinicio: UPDATE ... WHERE id_ruta = 2 -> 1 Ruta 1 Norte · 2 Ruta 3 Norte (antes Centro) · 3 Ruta 5 Sur. Ejercicio 3, desde reinicio: DELETE ... WHERE id_ruta = 3 -> 1 Ruta 1 Norte · 2 Ruta 3 Centro. Si se encadenan los tres ejercicios (como en la demostración) el final es 1 Ruta 1 Norte · 2 Ruta 3 Norte · 4 Ruta 7 Norte. Tiempos: guiada 15 min, trazas guiadas 25 min (sql4-8b y sql4-12b), autónoma 20 min. Práctica formativa (0 %).`
    },
    {
      id: 'sql4-12b',
      title: "Práctica en papel · repaso en parejas",
      contentHtml: `

        <div class="space-y-4">
          <p class="text-sm text-slate-700">Desde el estado de reinicio, tracen la tabla tras cada sentencia. <strong>Si una sentencia falla, escriban «error» y por qué; la tabla no cambia.</strong></p>
          <div class="bg-white border rounded-xl p-4 text-sm space-y-2">
            <p><strong>A.</strong> <code>UPDATE ruta_dml SET nombre = 'Ruta 4', zona = 'Sur' WHERE id_ruta = 1;</code></p>
            <p><strong>B.</strong> <code>INSERT INTO ruta_dml VALUES (3, 'Ruta 8', 'Centro');</code></p>
            <p><strong>C.</strong> <code>DELETE FROM ruta_dml WHERE zona = 'Sur';</code></p>
            <p><strong>D.</strong> <code>INSERT INTO ruta_dml (id_ruta, nombre) VALUES (6, 'Ruta 2');</code></p>
          </div>
          <p class="text-xs text-slate-500">Redacten por escrito: ¿qué habría pasado en C sin el WHERE?</p>
        </div>

      `,
      notes: `Respuestas y trazas (cada letra parte del estado de reinicio salvo que se indique; también se puede encadenar A, B, C, D en ese orden). A: 1 Ruta 4 Sur · 2 Ruta 3 Centro · 3 Ruta 5 Sur (SET múltiple, una fila). B: error, la clave primaria 3 ya existe; tabla sin cambios. C: se elimina la fila 3 (única con zona Sur en el reinicio): quedan 1 Ruta 1 Norte · 2 Ruta 3 Centro; si se encadena después de A, la zona Sur coincide con las filas 1 y 3 y se borran ambas: queda solo 2 Ruta 3 Centro (buen momento para comentar que WHERE sobre un campo no clave puede afectar varias filas). Sin WHERE en C: tabla vacía (0 filas, la estructura permanece). D: error, zona es NOT NULL y se omitió (recibiría NULL); tabla sin cambios. Cierre: pedir a 2 parejas que lean su traza de C encadenado vs C aislado.`
    },
    {
      id: 'sql4-13',
      title: "Asignación para casa",
      contentHtml: `

        <div class="space-y-4">
          <div class="bg-white border rounded-xl p-4 text-sm"><strong>1.</strong> Taller práctico S4 (10 %), individual, con la guía del estudiante.</div>
          <div class="bg-white border rounded-xl p-4 text-sm"><strong>2.</strong> Repasar los tres ejercicios DML en PostgreSQL y traer una consulta de comprobación (SELECT) para cada uno.</div>
        </div>

      `,
      notes: "Asignación para casa (individual). Taller S4 (10 %): fecha y medio de entrega por confirmar con el docente (SAIA no se usa). La práctica DML señalada es formativa (0 %). Sugerencia: crear la tabla con el bloque de reinicio en una base de prueba propia y comprobar cada ejercicio con un SELECT antes y después."
    },
    {
      id: 'sql4-13b',
      title: "Comprobación rápida · ¿qué pasa si…?",
      contentHtml: `

        <div class="space-y-5">
          <div data-quiz class="bg-white border rounded-xl p-4 space-y-2">
            <p class="font-semibold">Ejecutas <code>DELETE FROM ruta_dml;</code> sin WHERE. ¿Qué ocurre?</p>
            <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">Se borra solo la última fila</button>
            <button data-option data-correct class="block w-full text-left border rounded-lg p-2 text-sm">Se borran todas las filas de la tabla</button>
            <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">El motor pide confirmar y no borra nada</button>
            <p data-explain class="text-sm text-slate-600">Sin WHERE la condición no filtra: DELETE y UPDATE afectan a toda la tabla.</p>
          </div>
          <div data-quiz class="bg-white border rounded-xl p-4 space-y-2">
            <p class="font-semibold">Antes de convertir un SELECT en UPDATE, ¿qué haces?</p>
            <button data-option data-correct class="block w-full text-left border rounded-lg p-2 text-sm">Pruebo el SELECT con la misma condición y reviso las filas</button>
            <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">Lo ejecuto directamente para ahorrar tiempo</button>
            <p data-explain class="text-sm text-slate-600">El SELECT con el mismo WHERE muestra qué filas cambiarían.</p>
          </div>
        </div>

      `,
      notes: "Comprobación formativa (0 %), no evaluable. Respuestas: 1) todas las filas; 2) SELECT con el mismo WHERE. Continúa en la siguiente diapositiva."
    },
    {
      id: 'sql4-13c',
      title: 'Comprobación rápida · ¿qué pasa si…? (2)',
      contentHtml: `

        <div class="space-y-5">
          <div data-quiz class="bg-white border rounded-xl p-4 space-y-2">
            <p class="font-semibold">¿Qué sentencia elimina la tabla y no solo sus filas?</p>
            <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">DELETE FROM ruta_dml;</button>
            <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">TRUNCATE TABLE ruta_dml;</button>
            <button data-option data-correct class="block w-full text-left border rounded-lg p-2 text-sm">DROP TABLE ruta_dml;</button>
            <p data-explain class="text-sm text-slate-600">DELETE y TRUNCATE vacían la tabla; DROP elimina también su estructura.</p>
          </div>
          <div data-quiz class="bg-white border rounded-xl p-4 space-y-2">
            <p class="font-semibold">Una tabla hija tiene una parada de la ruta 1. ¿Qué pasa con <code>DELETE FROM ruta_dml WHERE id_ruta = 1;</code>?</p>
            <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">Se borra la ruta y la parada queda huérfana</button>
            <button data-option data-correct class="block w-full text-left border rounded-lg p-2 text-sm">El motor lo rechaza por la llave foránea y no cambia nada</button>
            <p data-explain class="text-sm text-slate-600">La integridad referencial impide borrar un padre que aún tiene hijas (salvo reglas especiales como CASCADE).</p>
          </div>
        </div>

      `,
      notes: "Respuestas: 3) DROP TABLE; 4) rechazo por FK, tabla sin cambios. Si hay dudas en la 4, volver a la traza de sql4-9b. Si hay poco tiempo, pasar a tarea."
    },
    {
      id: 'sql4-14',
      title: "Cierre · preguntas, tarea y anticipo",
      contentHtml: `

        <div class="space-y-4">
          <div class="bg-white border rounded-xl p-4 text-sm"><h4 class="font-bold">Preguntas de salida</h4>
            <ol class="list-decimal list-inside space-y-1"><li>¿Cuál es la diferencia entre DQL y DML?</li><li>¿Qué pasa con DELETE FROM ruta_dml; sin WHERE?</li><li>¿Qué debes hacer antes de convertir un SELECT en UPDATE?</li><li>¿En qué se diferencian DELETE y DROP TABLE?</li><li>¿Qué pasa al insertar un id_ruta que ya existe, o un NULL en una columna NOT NULL?</li></ol></div>
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-950"><strong>Anticipo:</strong> jue 22/10 → práctica DML evaluada (20 %), individual y para casa.</div>
        </div>

      `,
      notes: "Respuestas: 1) DQL lee, DML escribe; 2) se borran todas las filas; 3) probar el SELECT con la misma condición; 4) DELETE quita filas y deja la tabla, DROP TABLE elimina la tabla completa; 5) el motor rechaza la sentencia (PK duplicada / NOT NULL) y la tabla no cambia. La práctica del 22/10 usa una sola tabla con el flujo SELECT previo -> DML -> SELECT de verificación."
    },
    {
      id: 'sql4-15',
      title: "Fuentes",
      contentHtml: `

        <div class="space-y-4">
          <div class="bg-slate-50 border rounded-xl p-4 text-sm space-y-2">
            <p class="font-bold">Fuentes de esta sesión</p>
            <ul class="list-disc list-inside text-gray-600 space-y-1"><li>PostgreSQL Documentation (sintaxis de INSERT, UPDATE, DELETE, TRUNCATE y restricciones).</li></ul>
          </div>
        </div>

      `,
      notes: "Actividad PGA de la semana (solo docente): taller práctico individual (10 %) para casa + introducción a DML · instrumento: escala de estimación · 10 %. No proyectar."
    }
  ]
};
