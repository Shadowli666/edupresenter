import { Module } from '../../types';

export const SQL_MODULE_3: Module = {
  id: 'sql-mod-3',
  title: '3. Consultas de lectura: funciones, operadores y joins',
  description:
    'Semana 3: activación breve de lo visto en S1 (modelo relacional, claves, tipos de datos) y desarrollo teórico de las consultas de lectura: operadores lógicos, funciones de agregación y NULL, GROUP BY/HAVING con su orden lógico de ejecución, WHERE vs HAVING, INNER JOIN con claves foráneas y alias. LEFT/RIGHT JOIN y LIMIT son ampliación opcional fuera de evaluación. Taller guiado en parejas sobre la base rutas, en papel; sirve también como material de repaso.',
  evaluation: '0%',
  slides: [
    {
      id: 'sql3-1',
      title: 'SQL · Semana 3',
      contentHtml: `
        <div class="space-y-7">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center text-white text-4xl shadow-lg">🗄️</div>
            <div>
              <p class="text-sm uppercase tracking-widest font-bold text-teal-700">Electiva II · Programación en SQL · Unidad I.2–I.4</p>
              <h2 class="text-3xl md:text-4xl font-bold text-slate-900">De la estructura a la consulta</h2>
              <p class="text-slate-500 mt-1">Agregación, GROUP BY / HAVING, joins y alias</p>
            </div>
          </div>
          <div class="bg-teal-50 border border-teal-200 rounded-xl p-5 text-teal-950">
            <p class="text-lg"><strong>Taller guiado:</strong> 6 consultas en parejas sobre la base <em>rutas</em> (3 tablas), resueltas en papel con los datos proyectados.</p>
          </div>
          <p class="text-sm text-slate-500">Jueves 08/10/2026 · 14:30–16:45 · Aula A-01 · Sección A · IUPSM — Extensión Ciudad Ojeda</p>
        </div>
      `
    },
    {
      id: 'sql3-2',
      title: 'Hoy: se activa lo visto y se avanza',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-slate-600 text-lg">La sesión del 01/10 no se dictó. Lo esencial (modelo relacional, claves y tipos) ya se vio en S1: hoy se <strong>activa en pocos minutos</strong> y el tiempo se dedica a la teoría nueva de consultas.</p>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-amber-50 border border-amber-200 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-amber-700">Activación breve (S1)</p><h3 class="text-xl font-bold text-amber-950 mt-2">Base relacional</h3><p class="text-sm text-amber-900 mt-2">Tabla, registro, campo, PK y FK · tipos de datos · la base <strong>rutas</strong> que usaremos.</p></div>
            <div class="bg-teal-50 border border-teal-200 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-teal-700">Lo nuevo</p><h3 class="text-xl font-bold text-teal-950 mt-2">Consultas de lectura</h3><p class="text-sm text-teal-900 mt-2">AND/OR/NOT · agregación y NULL · GROUP BY / HAVING · orden lógico de ejecución · INNER JOIN · alias.</p></div>
          </div>
          <div class="bg-slate-900 text-white rounded-2xl p-5">
            <p class="text-xs uppercase tracking-widest font-bold text-slate-300 mb-3">Ruta de trabajo (135 min)</p>
            <div class="flex flex-wrap gap-2 text-sm font-bold">
              <span class="bg-amber-600 rounded-full px-3 py-2">Activar</span><span class="text-slate-400 self-center">→</span>
              <span class="bg-teal-600 rounded-full px-3 py-2">Agregar y agrupar</span><span class="text-slate-400 self-center">→</span>
              <span class="bg-indigo-600 rounded-full px-3 py-2">Unir tablas</span><span class="text-slate-400 self-center">→</span>
              <span class="bg-emerald-600 rounded-full px-3 py-2">Taller en parejas</span>
            </div>
          </div>
        </div>
      `,
      notes: 'Guion orientativo (135 min): 0-8 encuadre y activacion; 8-22 activacion S1 + base rutas + micro-practica (compacto, no reexplicar); 22-32 consulta basica y operadores logicos; 32-55 agregacion/NULL, GROUP BY/HAVING, orden logico, WHERE vs HAVING; 55-75 JOIN y alias; 75-85 anticipar salidas (slide 15); 85-125 taller en parejas (40 min); 125-135 verificacion y cierre. Continuidad: S1 (24/09) dicto SELECT/WHERE/ORDER BY, comparadores, BETWEEN, IN, AS, LIKE, IS NULL, modelo relacional y tipos; hoy solo se activan. Nuevo hoy: AND/OR/NOT, agregacion, GROUP BY/HAVING, INNER JOIN, alias de tabla, base rutas. No hay laboratorio: todo se hace con pizarra, proyector y papel.'
    },
    {
      id: 'sql3-3',
      title: 'Objetivo y producto de aprendizaje',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-gradient-to-br from-teal-600 to-emerald-700 text-white p-6 rounded-2xl shadow-lg">
            <p class="text-xs uppercase tracking-widest font-bold text-teal-100">Objetivos I.2 · I.3 · I.4</p>
            <p class="text-2xl font-bold mt-2">Identificar los componentes de una base relacional, reconocer los tipos de datos y explicar los comandos, operadores, funciones y joins de SQL.</p>
          </div>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white border-2 border-teal-100 rounded-xl p-5"><h4 class="font-bold text-teal-900">Producto de hoy</h4><ul class="list-disc list-inside text-sm text-slate-700 mt-3 space-y-2"><li>Las 6 consultas del taller escritas por pareja en el cuaderno.</li><li>Salida esperada de cada consulta anticipada a partir de los datos proyectados.</li><li>Una explicación propia de WHERE vs HAVING y de qué pierde un INNER JOIN.</li></ul></div>
            <div class="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-5"><h4 class="font-bold text-emerald-900">Actividad formativa</h4><p class="text-sm text-emerald-950 mt-3">Taller guiado en parejas, en papel, con escala de estimación. Ponderación: 0 %. Prepara el taller de la semana 4, que será individual y para casa.</p></div>
          </div>
        </div>
      `
    },
    {
      id: 'sql3-4',
      title: 'Activación · modelo relacional, claves y tipos (S1)',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-amber-600 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-amber-100">Activación de S1 · 3 minutos, sin reexplicar</p><h3 class="text-xl font-bold mt-1">Lo mínimo que necesitamos para consultar</h3></div>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-blue-50 border border-blue-200 rounded-xl p-4"><h4 class="font-bold text-blue-900">Tabla · registro · campo</h4><p class="text-blue-950 mt-1">Una tabla guarda una entidad; cada fila es una ocurrencia; cada columna, una característica.</p></div>
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-4"><h4 class="font-bold text-rose-900">PK y FK</h4><p class="text-rose-950 mt-1">La <strong>clave primaria</strong> identifica cada fila; la <strong>clave foránea</strong> es esa clave copiada en otra tabla (id_ruta en pasaje) y es lo que permite unir.</p></div>
          </div>
          <div class="overflow-x-auto border border-slate-200 rounded-xl">
            <div class="min-w-[560px] text-sm">
              <div class="grid grid-cols-3 bg-slate-900 text-white text-xs font-bold"><div class="p-3">Categoría</div><div class="p-3">Tipos</div><div class="p-3">Ejemplo en rutas</div></div>
              <div class="divide-y divide-slate-200">
                <div class="grid grid-cols-3"><div class="p-3 text-blue-800 font-semibold">Entero</div><div class="p-3">INT</div><div class="p-3">id_ruta</div></div>
                <div class="grid grid-cols-3 bg-slate-50"><div class="p-3 text-blue-800 font-semibold">Decimal</div><div class="p-3">DECIMAL(10,2)</div><div class="p-3">monto</div></div>
                <div class="grid grid-cols-3"><div class="p-3 text-violet-800 font-semibold">Texto</div><div class="p-3">VARCHAR(n)</div><div class="p-3">nombre, zona</div></div>
                <div class="grid grid-cols-3 bg-slate-50"><div class="p-3 text-emerald-800 font-semibold">Fecha</div><div class="p-3">DATE</div><div class="p-3">fecha</div></div>
              </div>
            </div>
          </div>
        </div>
      `,
      notes: 'Activacion de 3 min con preguntas rapidas, no clase: que es una FK y para que sirve; por que el monto es DECIMAL y no FLOAT (redondeo acumulado). Si el grupo responde bien, saltar a la siguiente.'
    },
    {
      id: 'sql3-5',
      title: 'Tipificación aplicada · ¿qué tipo para cada campo de pasaje?',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-teal-600 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-teal-100">Aplicación · en el cuaderno, 2 minutos</p><h3 class="text-xl font-bold mt-1">Decide el tipo antes de crear la tabla</h3></div>
          <div class="overflow-x-auto border border-slate-200 rounded-xl">
            <div class="min-w-[520px] text-sm">
              <div class="grid grid-cols-3 bg-slate-900 text-white text-xs font-bold"><div class="p-3">Campo de pasaje</div><div class="p-3">Se suma / compara / describe / ubica en el tiempo</div><div class="p-3">Tu tipo</div></div>
              <div class="divide-y divide-slate-200">
                <div class="grid grid-cols-3"><div class="p-3 font-mono">id_pasaje</div><div class="p-3 text-slate-600">identifica</div><div class="p-3 text-slate-400">?</div></div>
                <div class="grid grid-cols-3 bg-slate-50"><div class="p-3 font-mono">id_ruta, id_bus</div><div class="p-3 text-slate-600">referencian a otra tabla (FK)</div><div class="p-3 text-slate-400">?</div></div>
                <div class="grid grid-cols-3"><div class="p-3 font-mono">fecha</div><div class="p-3 text-slate-600">ubica en el tiempo</div><div class="p-3 text-slate-400">?</div></div>
                <div class="grid grid-cols-3 bg-slate-50"><div class="p-3 font-mono">monto</div><div class="p-3 text-slate-600">se suma y se promedia (dinero)</div><div class="p-3 text-slate-400">?</div></div>
              </div>
            </div>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-950"><strong>Por qué importa para hoy:</strong> SUM y AVG solo funcionan sobre columnas numéricas, y un FK debe tener el mismo tipo que la PK a la que apunta, o el join no empareja.</div>
        </div>
      `,
      notes: 'Respuestas: id_pasaje INT (PK); id_ruta e id_bus INT, mismo tipo que las PK de ruta y bus; fecha DATE; monto DECIMAL(10,2). Una fecha guardada como texto no se compara bien con BETWEEN y un monto como texto no se suma.'
    },
    {
      id: 'sql3-6',
      title: 'Base rutas · CREATE TABLE con claves foráneas',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-slate-900 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-slate-300">Esquema de la base del taller</p><h3 class="text-xl font-bold mt-1">3 tablas: ruta, bus y pasaje (pasaje las conecta)</h3></div>
          <div class="bg-slate-950 border border-slate-800 rounded-xl p-5">
            <p class="text-xs font-bold text-emerald-400 mb-3">SQL</p>
            <pre class="font-mono text-xs md:text-sm text-slate-100 leading-relaxed whitespace-pre-wrap">CREATE TABLE ruta (
  id_ruta   INT PRIMARY KEY,
  nombre    VARCHAR(30),
  zona      VARCHAR(20)
);
CREATE TABLE bus (
  id_bus    INT PRIMARY KEY,
  nombre    VARCHAR(30),
  matricula VARCHAR(10)
);
CREATE TABLE pasaje (
  id_pasaje INT PRIMARY KEY,
  id_ruta   INT,
  id_bus    INT,
  fecha     DATE,
  monto     DECIMAL(10,2),
  FOREIGN KEY (id_ruta) REFERENCES ruta(id_ruta),
  FOREIGN KEY (id_bus)  REFERENCES bus(id_bus)
);</pre>
          </div>
          <p class="text-sm text-slate-600"><strong>Lo nuevo:</strong> las dos líneas FOREIGN KEY declaran la relación; son las mismas columnas que usaremos en el <code>ON</code> de los joins.</p>
        </div>
      `,
      notes: 'CREATE TABLE ya se dicto en S1: aqui solo se muestra el esquema de la base del taller y se resalta FOREIGN KEY. No se ejecuta en el aula (no hay laboratorio): se proyecta. El esquema se verifico en sqlite3 con estos datos.'
    },
    {
      id: 'sql3-7',
      title: 'Datos del taller · INSERT de la base rutas',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-slate-900 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-slate-300">Datos proyectados · cópialos en tu cuaderno</p><h3 class="text-xl font-bold mt-1">5 rutas, 3 buses y 9 pasajes</h3></div>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-slate-950 border border-slate-800 rounded-xl p-4">
              <p class="text-xs font-bold text-emerald-400 mb-2">SQL · ruta y bus</p>
              <pre class="font-mono text-xs text-slate-100 leading-relaxed whitespace-pre-wrap">INSERT INTO ruta VALUES (1, 'Ruta 1', 'Norte');
INSERT INTO ruta VALUES (2, 'Ruta 2', 'Norte');
INSERT INTO ruta VALUES (3, 'Ruta 3', 'Centro');
INSERT INTO ruta VALUES (4, 'Ruta 4', 'Centro');
INSERT INTO ruta VALUES (5, 'Ruta 5', 'Sur');

INSERT INTO bus VALUES (1, 'Bus 01', 'ABC-123');
INSERT INTO bus VALUES (2, 'Bus 02', 'DEF-456');
INSERT INTO bus VALUES (3, 'Bus 03', 'GHI-789');</pre>
            </div>
            <div class="bg-slate-950 border border-slate-800 rounded-xl p-4">
              <p class="text-xs font-bold text-emerald-400 mb-2">SQL · pasaje (id, ruta, bus, fecha, monto)</p>
              <pre class="font-mono text-xs text-slate-100 leading-relaxed whitespace-pre-wrap">INSERT INTO pasaje VALUES (1, 1, 1, '2026-10-05', 25.00);
INSERT INTO pasaje VALUES (2, 1, 2, '2026-10-06', 30.00);
INSERT INTO pasaje VALUES (3, 2, 1, '2026-10-06', 45.00);
INSERT INTO pasaje VALUES (4, 2, 2, '2026-10-07', 50.00);
INSERT INTO pasaje VALUES (5, 2, 3, '2026-10-08', 40.00);
INSERT INTO pasaje VALUES (6, 3, 1, '2026-10-05', 30.00);
INSERT INTO pasaje VALUES (7, 4, 2, '2026-10-08', 20.00);
INSERT INTO pasaje VALUES (8, 4, 3, '2026-10-08', 25.00);
INSERT INTO pasaje VALUES (9, 1, 3, '2026-10-08', 28.00);</pre>
            </div>
          </div>
          <div class="bg-teal-50 border border-teal-200 rounded-xl p-3 text-sm text-teal-950"><strong>Observa:</strong> la Ruta 5 (zona Sur) no tiene ningún pasaje. Guarda ese dato: nos servirá para entender qué hace un join.</div>
        </div>
      `,
      notes: "Datos verificados en sqlite3 (python3). Resultados esperados del taller con estos datos: Consulta 1: Ruta 3 y Ruta 4 (Centro), Ruta 1 y Ruta 2 (Norte), Ruta 5 (Sur) si se ordena por zona, nombre. Consulta 2 (BETWEEN '2026-10-06' AND '2026-10-07'): pasajes 2, 3 y 4 (3 filas). Consulta 3 (total y promedio por ruta): Ruta 1 = 83.00 y 27.67; Ruta 2 = 135.00 y 45.00; Ruta 3 = 30.00 y 30.00; Ruta 4 = 45.00 y 22.50 (Ruta 5 no aparece). Totales por zona sin HAVING: Centro 75, Norte 218. Consulta 4 (zonas con total >= 80): solo Norte = 218 (Centro 75 queda fuera). Consulta 5 (rutas con promedio >= 40): solo Ruta 2 = 45.00. Consulta 6 (join de 3 tablas): 9 filas, una por pasaje, con ruta y matricula. Reto opcional (LEFT JOIN + IS NULL): Ruta 5. Ejemplo HAVING COUNT(*) > 1 sobre ruta por zona: Centro 2 y Norte 2 (Sur con 1 queda fuera). Totales generales: COUNT(*) = 9, SUM = 293, AVG = 32.56, MAX = 50, MIN = 20. Los INSERT se proyectan; si se prefiere, dictarlos de la pizarra."
    },
    {
      id: 'sql3-8',
      title: 'Micro-práctica · tu tabla propia en el cuaderno',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-emerald-600 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-emerald-100">Micro-práctica · 5 minutos, individual</p><h3 class="text-xl font-bold">Escribe el SQL de una tabla propia</h3></div>
          <ol class="space-y-3 text-sm">
            <li class="flex gap-3 bg-white border rounded-xl p-4"><span class="font-bold text-emerald-700">1</span><span>Inventa una entidad sencilla (un estudiante, un producto, una cita...).</span></li>
            <li class="flex gap-3 bg-white border rounded-xl p-4"><span class="font-bold text-emerald-700">2</span><span>Escribe su <code>CREATE TABLE</code> con <strong>4 campos de tipos distintos</strong> (entero, decimal, texto y fecha) y su PRIMARY KEY.</span></li>
            <li class="flex gap-3 bg-white border rounded-xl p-4"><span class="font-bold text-emerald-700">3</span><span>Escribe <strong>2 sentencias INSERT</strong> con valores en el mismo orden que los campos.</span></li>
            <li class="flex gap-3 bg-white border rounded-xl p-4"><span class="font-bold text-emerald-700">4</span><span>Intercambia con tu compañero y revisa: tipos, comillas en texto y fechas, y coma final.</span></li>
          </ol>
        </div>
      `,
      notes: "Meta del docente (no proyectar): tipos correctos, clave primaria definida, texto y fecha entre comillas simples, numeros sin comillas. Se hace en papel (sin laboratorio). Si el grupo lo resuelve sin ayuda, avanzar al taller sin extender."
    },
    {
      id: 'sql3-9',
      title: 'Activación · recordamos la consulta básica',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-teal-600 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-teal-100">Activación · repaso del 24/09</p><h3 class="text-xl font-bold mt-1">La consulta de lectura en 4 piezas</h3></div>
          <div class="bg-slate-950 border border-slate-800 rounded-xl p-5">
            <pre class="font-mono text-xs md:text-sm text-slate-100 leading-relaxed whitespace-pre-wrap">SELECT columnas FROM tabla WHERE condicion ORDER BY campo ASC|DESC;</pre>
          </div>
          <div class="space-y-3 text-sm">
            <div class="bg-white border rounded-xl p-4"><strong>1.</strong> ¿Qué filtra <code>WHERE</code>: filas o columnas?</div>
            <div class="bg-white border rounded-xl p-4"><strong>2.</strong> ¿Qué hace <code>ORDER BY</code> y cuál es su valor por defecto?</div>
            <div class="bg-white border rounded-xl p-4"><strong>3.</strong> ¿Qué proyecta <code>SELECT</code>?</div>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-950"><strong>No se reenseña hoy:</strong> esto ya se dictó el 24/09. Lo activamos en 2–3 minutos y pasamos a lo nuevo.</div>
        </div>
      `,
      notes: 'Activacion breve (2-3 min), no reexplicacion. Respuestas esperadas: 1) WHERE filtra FILAS antes de proyectar; 2) ORDER BY ordena el resultado final, ASC por defecto (DESC es opcional); 3) SELECT proyecta COLUMNAS. Si el grupo no recuerda, recordar con una consulta de ejemplo en pantalla, sin volver a dar teoria.'
    },
    {
      id: 'sql3-10',
      title: 'Operadores lógicos · AND, OR, NOT y comillas',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-teal-600 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-teal-100">Lo nuevo de hoy</p><h3 class="text-xl font-bold mt-1">Combinar condiciones en WHERE</h3></div>
          <div class="grid md:grid-cols-3 gap-3 text-sm">
            <div class="bg-white border-2 border-teal-200 rounded-xl p-3"><p class="font-mono font-bold text-teal-800">AND</p><p class="text-teal-950 mt-1">ambas condiciones deben cumplirse</p></div>
            <div class="bg-white border-2 border-indigo-200 rounded-xl p-3"><p class="font-mono font-bold text-indigo-800">OR</p><p class="text-indigo-950 mt-1">basta que una se cumpla</p></div>
            <div class="bg-white border-2 border-rose-200 rounded-xl p-3"><p class="font-mono font-bold text-rose-800">NOT</p><p class="text-rose-950 mt-1">niega la condición</p></div>
          </div>
          <div class="bg-slate-950 border border-slate-800 rounded-xl p-4">
            <pre class="font-mono text-xs md:text-sm text-slate-100 leading-relaxed whitespace-pre-wrap">-- AND: monto en un rango (equivale a BETWEEN 25 AND 45)
SELECT * FROM pasaje WHERE monto &gt;= 25 AND monto &lt;= 45;

-- OR: montos extremos (muy bajos o muy altos)
SELECT * FROM pasaje WHERE monto &lt; 25 OR monto &gt; 45;

-- NOT: todas las rutas que no son de la zona Norte
SELECT * FROM ruta WHERE NOT zona = 'Norte';

-- Comillas: texto y fecha con comillas simples, números sin ellas
SELECT * FROM pasaje WHERE fecha = '2026-10-08' AND id_ruta = 4;</pre>
          </div>
          <div class="bg-slate-50 border rounded-xl p-3 text-sm text-slate-700"><strong>Precedencia:</strong> <code>NOT</code> se evalúa antes que <code>AND</code>, y <code>AND</code> antes que <code>OR</code>; usa paréntesis cuando mezcles. <strong>Ya visto en S1:</strong> <code>= &lt;&gt; &lt; &gt; &lt;= &gt;=</code>, <code>BETWEEN</code> e <code>IN</code>.</div>
        </div>
      `,
      notes: 'Resultados verificados con la base rutas: AND (25 a 45) devuelve 7 pasajes; OR (menor a 25 o mayor a 45) devuelve 2 pasajes (el 4 con 50.00 y el 7 con 20.00); NOT zona = Norte devuelve Ruta 3, Ruta 4 y Ruta 5; fecha = 2026-10-08 AND id_ruta = 4 devuelve los pasajes 7 y 8. Error tipico de comillas: WHERE zona = Norte (sin comillas) hace que SQL busque una columna llamada Norte; y comillas dobles en algunos SGBD significan nombre de columna.'
    },
    {
      id: 'sql3-11',
      title: 'Funciones de agregación y NULL',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-teal-600 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-teal-100">Resumen a partir de muchos valores</p><h3 class="text-xl font-bold">Muchas filas entran, una fila sale</h3></div>
          <div class="grid md:grid-cols-3 gap-3 text-sm">
            <div class="bg-teal-50 border border-teal-200 rounded-xl p-3"><p class="font-mono font-bold text-teal-800">COUNT(*)</p><p class="text-teal-950 mt-1">cuenta filas (todas)</p></div>
            <div class="bg-teal-50 border border-teal-200 rounded-xl p-3"><p class="font-mono font-bold text-teal-800">COUNT(campo)</p><p class="text-teal-950 mt-1">cuenta valores <strong>no nulos</strong></p></div>
            <div class="bg-teal-50 border border-teal-200 rounded-xl p-3"><p class="font-mono font-bold text-teal-800">SUM(monto)</p><p class="text-teal-950 mt-1">suma total</p></div>
            <div class="bg-teal-50 border border-teal-200 rounded-xl p-3"><p class="font-mono font-bold text-teal-800">AVG(monto)</p><p class="text-teal-950 mt-1">promedio</p></div>
            <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-3"><p class="font-mono font-bold text-indigo-800">MAX(monto)</p><p class="text-indigo-950 mt-1">valor máximo</p></div>
            <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-3"><p class="font-mono font-bold text-indigo-800">MIN(monto)</p><p class="text-indigo-950 mt-1">valor mínimo</p></div>
          </div>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-4 text-rose-950"><strong>NULL = dato desconocido o ausente</strong> (no es 0 ni vacío). Las funciones de agregación <strong>ignoran los NULL</strong>, salvo <code>COUNT(*)</code>, que cuenta la fila completa.</div>
            <div class="bg-slate-950 border border-slate-800 rounded-xl p-3"><pre class="font-mono text-xs text-slate-100 whitespace-pre-wrap">-- columna x con valores: 10, 20, NULL
COUNT(*)   -- ?
COUNT(x)   -- ?
SUM(x)     -- ?
AVG(x)     -- ?</pre></div>
          </div>
          <p class="text-sm text-slate-600"><strong>Para pensar:</strong> con esos tres valores, ¿AVG(x) es 10 o 15? ¿Y qué devolvería <code>WHERE x = NULL</code>? (pista: se usa <code>IS NULL</code>).</p>
        </div>
      `,
      notes: 'Respuestas verificadas en sqlite3 con x = 10, 20, NULL: COUNT(*) = 3; COUNT(x) = 2; SUM(x) = 30; AVG(x) = 15 (NULL ignorado: 30 / 2, no 30 / 3 = 10). WHERE x = NULL nunca es verdadero (comparar con NULL da desconocido): se escribe x IS NULL (visto en S1). Sobre la tabla pasaje (sin NULL): COUNT(*) = 9, SUM(monto) = 293, AVG(monto) = 32.56, MAX = 50, MIN = 20. Aclarar: una funcion de agregacion colapsa el conjunto en un solo valor; por eso no se mezcla con una columna normal en SELECT sin GROUP BY.'
    },
    {
      id: 'sql3-12',
      title: 'GROUP BY y HAVING · orden lógico de ejecución',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-slate-600">Agregan resultados <strong>por grupo</strong>, no sobre toda la tabla. Ejemplo sobre la base rutas: zonas con más de una ruta.</p>
          <div class="bg-slate-950 border border-slate-800 rounded-xl p-4">
            <pre class="font-mono text-xs md:text-sm text-slate-100 leading-relaxed whitespace-pre-wrap">SELECT zona, COUNT(*) AS total_rutas
FROM ruta
GROUP BY zona
HAVING COUNT(*) &gt; 1;</pre>
          </div>
          <div class="grid md:grid-cols-3 gap-3 text-sm">
            <div class="bg-teal-50 border border-teal-200 rounded-xl p-3"><p class="font-bold text-teal-900">WHERE</p><p class="text-teal-950 mt-1">filtra <strong>filas</strong> <em>antes</em> de agrupar</p></div>
            <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-3"><p class="font-bold text-indigo-900">GROUP BY</p><p class="text-indigo-950 mt-1">define los <strong>grupos</strong> sobre los que se agregan</p></div>
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-3"><p class="font-bold text-rose-900">HAVING</p><p class="text-rose-950 mt-1">filtra <strong>grupos</strong> <em>después</em> de agregar</p></div>
          </div>
          <div class="bg-slate-900 text-white rounded-xl p-4">
            <p class="text-xs uppercase tracking-widest font-bold text-slate-300 mb-2">Orden lógico de ejecución (no es el orden en que se escribe)</p>
            <div class="flex flex-wrap gap-2 text-xs font-bold items-center">
              <span class="bg-slate-600 rounded-full px-3 py-1">1 FROM / JOIN</span><span class="text-slate-400">→</span>
              <span class="bg-teal-600 rounded-full px-3 py-1">2 WHERE</span><span class="text-slate-400">→</span>
              <span class="bg-indigo-600 rounded-full px-3 py-1">3 GROUP BY</span><span class="text-slate-400">→</span>
              <span class="bg-rose-600 rounded-full px-3 py-1">4 HAVING</span><span class="text-slate-400">→</span>
              <span class="bg-amber-600 rounded-full px-3 py-1">5 SELECT</span><span class="text-slate-400">→</span>
              <span class="bg-emerald-600 rounded-full px-3 py-1">6 ORDER BY</span>
            </div>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-3 text-sm text-amber-950"><strong>Regla:</strong> todo campo del SELECT que no esté dentro de una función de agregación debe aparecer en el GROUP BY.</div>
        </div>
      `,
      notes: 'Resultado verificado del ejemplo: Centro = 2 y Norte = 2 (Sur tiene 1 ruta y queda fuera por HAVING COUNT(*) > 1). Sin HAVING saldrian tres filas: Centro 2, Norte 2, Sur 1. Explicar con el orden: primero se arman los grupos (FROM, GROUP BY), se calcula COUNT por grupo y despues HAVING descarta los grupos que no cumplen. Consecuencia del orden: WHERE no puede usar funciones de agregacion porque aun no existen grupos; el alias definido en SELECT no esta disponible en WHERE/HAVING en SQL estandar, pero ORDER BY si lo ve porque se ejecuta despues.'
    },
    {
      id: 'sql3-20',
      title: 'WHERE vs HAVING · mismo dato, distinto momento',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-rose-600 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-rose-100">Repaso conceptual</p><h3 class="text-xl font-bold mt-1">¿En qué momento se filtra?</h3></div>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white border-2 border-teal-200 rounded-xl p-4">
              <p class="font-bold text-teal-900">WHERE · sobre filas</p>
              <pre class="font-mono text-xs text-slate-800 bg-slate-50 rounded-lg p-3 mt-2 whitespace-pre-wrap">SELECT id_ruta, COUNT(*) AS n
FROM pasaje
WHERE monto &gt;= 25
GROUP BY id_ruta;</pre>
              <p class="text-sm text-teal-950 mt-2">Descarta primero los pasajes menores de 25; después cuenta los que quedan por ruta.</p>
            </div>
            <div class="bg-white border-2 border-rose-200 rounded-xl p-4">
              <p class="font-bold text-rose-900">HAVING · sobre grupos</p>
              <pre class="font-mono text-xs text-slate-800 bg-slate-50 rounded-lg p-3 mt-2 whitespace-pre-wrap">SELECT id_ruta, COUNT(*) AS n
FROM pasaje
GROUP BY id_ruta
HAVING COUNT(*) &gt;= 3;</pre>
              <p class="text-sm text-rose-950 mt-2">Cuenta todos los pasajes por ruta; después conserva solo las rutas con 3 o más.</p>
            </div>
          </div>
          <div class="bg-slate-900 text-white rounded-xl p-4 text-sm"><strong>Criterio:</strong> si la condición habla de una <em>fila</em> (monto, fecha, zona), va en <code>WHERE</code>. Si habla de un <em>resultado agregado</em> (COUNT, SUM, AVG), va en <code>HAVING</code>. Se pueden usar los dos en la misma consulta.</div>
          <p class="text-sm text-slate-600"><strong>Anticipa:</strong> ¿qué filas devuelve cada una con los datos de pasaje proyectados?</p>
        </div>
      `,
      notes: 'Resultados verificados con la base rutas. WHERE monto >= 25 AND GROUP BY id_ruta: Ruta 1 = 3 (25, 30, 28), Ruta 2 = 3 (45, 50, 40), Ruta 3 = 1 (30), Ruta 4 = 1 (25; el pasaje de 20 se descarta). HAVING COUNT(*) >= 3: Ruta 1 = 3 y Ruta 2 = 3 (Ruta 3 y Ruta 4 quedan fuera). Combinados sobre zona con join: SELECT r.zona, COUNT(*) FROM ruta r INNER JOIN pasaje p ON p.id_ruta = r.id_ruta WHERE p.monto >= 25 GROUP BY r.zona HAVING COUNT(*) >= 3 devuelve solo Norte = 6. Error tipico a mostrar: WHERE COUNT(*) >= 3 produce error porque aun no hay grupos.'
    },
    {
      id: 'sql3-13',
      title: 'JOINs · unir tablas con claves foráneas',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-indigo-600 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-indigo-100">Unir tablas · FK = PK</p><h3 class="text-xl font-bold mt-1">El JOIN empareja filas donde la FK coincide con la PK</h3></div>
          <div class="bg-slate-950 border border-slate-800 rounded-xl p-4">
            <pre class="font-mono text-xs md:text-sm text-slate-100 leading-relaxed whitespace-pre-wrap">FROM pasaje p
INNER JOIN ruta r ON p.id_ruta = r.id_ruta
--                   FK (pasaje)  =  PK (ruta)</pre>
          </div>
          <div class="overflow-x-auto border border-slate-200 rounded-xl">
            <div class="min-w-[620px]">
              <div class="grid grid-cols-3 bg-slate-900 text-white text-xs font-bold"><div class="p-3">Join</div><div class="p-3">Qué trae</div><div class="p-3">Qué se pierde</div></div>
              <div class="divide-y divide-slate-200 text-sm">
                <div class="grid grid-cols-3 bg-emerald-50"><div class="p-3 font-mono font-bold text-indigo-800">INNER JOIN <span class="text-xs font-sans text-emerald-700">· se evalúa</span></div><div class="p-3 text-slate-700">solo las filas que tienen pareja en ambas tablas</div><div class="p-3 text-slate-700">las filas sin pareja en la otra tabla (de cualquiera de las dos)</div></div>
                <div class="grid grid-cols-3 bg-slate-50"><div class="p-3 font-mono font-bold text-teal-800">LEFT JOIN <span class="text-xs font-sans text-slate-500">· ampliación</span></div><div class="p-3 text-slate-700">todo de la tabla izquierda, más las coincidencias</div><div class="p-3 text-slate-700">las de la derecha que no tienen pareja</div></div>
                <div class="grid grid-cols-3"><div class="p-3 font-mono font-bold text-violet-800">RIGHT JOIN <span class="text-xs font-sans text-slate-500">· ampliación</span></div><div class="p-3 text-slate-700">todo de la tabla derecha, más las coincidencias</div><div class="p-3 text-slate-700">las de la izquierda que no tienen pareja</div></div>
              </div>
            </div>
          </div>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-emerald-950"><strong>Verificación:</strong> en nuestros datos, ¿qué ruta no aparecería en un INNER JOIN entre ruta y pasaje, y por qué?</div>
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-3 text-amber-950"><strong>Alcance:</strong> la evaluación solo pide <code>INNER JOIN</code>. LEFT/RIGHT se muestran como ampliación opcional.</div>
          </div>
        </div>
      `,
      notes: 'Respuesta a la verificacion: la Ruta 5 (zona Sur) no tiene pasajes, por eso no tiene pareja en pasaje y desaparece con INNER JOIN; con LEFT JOIN desde ruta aparecera con valores NULL del lado de pasaje. Verificado: SELECT r.nombre FROM ruta r LEFT JOIN pasaje p ON p.id_ruta = r.id_ruta WHERE p.id_pasaje IS NULL devuelve Ruta 5. Tambien: un pasaje cuya FK no existiera en ruta se perderia por el otro lado; con FOREIGN KEY declarada eso no deberia ocurrir. LEFT/RIGHT JOIN no se evaluan: el PGA de S3 y la evaluacion solo listan INNER JOIN; mostrarlos solo si queda tiempo. Error tipico: olvidar el ON (producto cartesiano) o unir por columnas que no son PK/FK.'
    },
    {
      id: 'sql3-14',
      title: 'Alias y ejemplo tipo · INNER JOIN con GROUP BY',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-slate-900 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-slate-300">Ejemplo tipo · base DISTINTA a la del taller</p><h3 class="text-xl font-bold mt-1">Préstamos por libro (biblioteca)</h3></div>
          <div class="bg-slate-950 border border-slate-800 rounded-xl p-4">
            <pre class="font-mono text-xs md:text-sm text-slate-100 leading-relaxed whitespace-pre-wrap">SELECT l.titulo, COUNT(p.id_prestamo) AS prestamos
FROM libro l
INNER JOIN prestamo p ON p.id_libro = l.id_libro
GROUP BY l.id_libro, l.titulo
ORDER BY prestamos DESC;</pre>
          </div>
          <div class="grid md:grid-cols-3 gap-3 text-sm">
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-3"><p class="font-bold text-amber-900">Alias de tabla</p><p class="text-amber-950 mt-1"><code>FROM libro l</code> permite escribir <code>l.titulo</code>: menos texto y sin ambigüedad cuando dos tablas tienen una columna con el mismo nombre.</p></div>
            <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-3"><p class="font-bold text-indigo-900">Alias de columna</p><p class="text-indigo-950 mt-1"><code>AS prestamos</code> nombra el resultado calculado; <code>ORDER BY</code> sí lo reconoce.</p></div>
            <div class="bg-teal-50 border border-teal-200 rounded-xl p-3"><p class="font-bold text-teal-900">Agrupar por la clave</p><p class="text-teal-950 mt-1">Se agrupa por <code>id_libro</code> (identifica al libro); dos libros con el mismo título no se mezclan. Se añade <code>titulo</code> para poder mostrarlo.</p></div>
          </div>
          <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-sm text-emerald-950"><strong>Traslada el patrón, no copies el texto:</strong> en rutas serían ruta / pasaje, agrupando por <code>id_ruta</code>.</div>
        </div>
      `,
      notes: 'Modelo de solucion del taller (NO mostrar; solo para el docente). Consulta 3: SELECT r.id_ruta, r.nombre, SUM(p.monto) AS total, AVG(p.monto) AS promedio FROM ruta r INNER JOIN pasaje p ON p.id_ruta = r.id_ruta GROUP BY r.id_ruta, r.nombre; resultado: Ruta 1 83.00 / 27.67; Ruta 2 135.00 / 45.00; Ruta 3 30.00 / 30.00; Ruta 4 45.00 / 22.50. Consulta 4: SELECT r.zona, SUM(p.monto) AS total FROM ruta r INNER JOIN pasaje p ON p.id_ruta = r.id_ruta GROUP BY r.zona HAVING SUM(p.monto) >= 80; resultado: Norte 218.00 (Centro 75.00 queda fuera). Consulta 5: SELECT r.nombre, ROUND(AVG(p.monto),2) AS promedio FROM ruta r INNER JOIN pasaje p ON p.id_ruta = r.id_ruta GROUP BY r.id_ruta, r.nombre HAVING AVG(p.monto) >= 40; resultado: Ruta 2 con 45.00. Ejemplo biblioteca verificado en sqlite3 con 3 libros y 3 prestamos (2 del libro 1, 1 del libro 2, 0 del libro 3): devuelve Bases de Datos 2 y Algoritmos 1; el libro sin prestamos no aparece (INNER JOIN). Nota: algunos SGBD aceptan agrupar solo por titulo, pero agrupar por la clave es la practica correcta.'
    },
    {
      id: 'sql3-15',
      title: 'Anticipa la salida · 3 consultas sobre la base rutas',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-fuchsia-600 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-fuchsia-100">Predicción antes de ver el resultado</p><h3 class="text-xl font-bold">Con los datos proyectados, ¿qué devuelve cada consulta?</h3></div>
          <ol class="space-y-3 text-sm">
            <li class="flex gap-3 bg-white border rounded-xl p-4"><span class="font-bold text-fuchsia-700">1 · Filtros</span><span class="flex-1">SELECT * FROM pasaje WHERE monto BETWEEN 25 AND 45; — ¿cuántas filas esperas?</span></li>
            <li class="flex gap-3 bg-white border rounded-xl p-4"><span class="font-bold text-fuchsia-700">2 · Agregación</span><span class="flex-1">SELECT COUNT(*), AVG(monto) FROM pasaje; — ¿qué devuelve cada columna?</span></li>
            <li class="flex gap-3 bg-white border rounded-xl p-4"><span class="font-bold text-fuchsia-700">3 · Join</span><span class="flex-1">SELECT r.nombre, b.matricula FROM pasaje p INNER JOIN ruta r ON p.id_ruta = r.id_ruta INNER JOIN bus b ON p.id_bus = b.id_bus; — ¿cuántas filas y qué trae cada una?</span></li>
          </ol>
          <div class="bg-fuchsia-50 border border-fuchsia-200 rounded-xl p-4 text-sm text-fuchsia-950"><strong>Cómo se hace:</strong> escribe tu predicción en el cuaderno, compárala con un compañero y luego la contrastamos en la pizarra.</div>
        </div>
      `,
      notes: 'Salidas esperadas (verificadas en sqlite3): 1) 7 filas (pasajes 1, 2, 3, 5, 6, 8 y 9; quedan fuera el 4 con 50.00 y el 7 con 20.00). 2) COUNT(*) = 9 y AVG(monto) = 32.56 (293 / 9; mostrar 32.5555...). 3) 9 filas, una por pasaje: Ruta 1 con ABC-123, DEF-456 y GHI-789; Ruta 2 con ABC-123, DEF-456 y GHI-789; Ruta 3 con ABC-123; Ruta 4 con DEF-456 y GHI-789. Cada fila combina datos de tres tablas porque pasaje contiene las dos FK. Sin laboratorio: el docente escribe el resultado en la pizarra tras la prediccion del grupo.'
    },
    {
      id: 'sql3-16',
      title: 'Taller guiado · 6 consultas en parejas (40 min)',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-emerald-600 text-white rounded-xl p-4 flex items-center justify-between"><div><p class="text-xs uppercase tracking-widest font-bold text-emerald-100">Taller guiado · base rutas · en papel</p><h3 class="text-xl font-bold">Las 6 consultas del taller</h3></div><span class="text-3xl">🧭</span></div>
          <ol class="space-y-2 text-sm">
            <li class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-emerald-700">1</span><span>Lista de rutas con su zona <span class="text-slate-500">(SELECT + ORDER BY)</span></span></li>
            <li class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-emerald-700">2</span><span>Pasajes entre el 06/10 y el 07/10 <span class="text-slate-500">(WHERE con BETWEEN)</span></span></li>
            <li class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-emerald-700">3</span><span>Monto total y promedio por ruta <span class="text-slate-500">(SUM, AVG + GROUP BY)</span></span></li>
            <li class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-emerald-700">4</span><span>Zonas con monto total de al menos 80 <span class="text-slate-500">(GROUP BY + HAVING)</span></span></li>
            <li class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-emerald-700">5</span><span>Rutas con monto promedio de al menos 40 <span class="text-slate-500">(GROUP BY + HAVING)</span></span></li>
            <li class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-emerald-700">6</span><span>Pasajes con datos de bus y ruta <span class="text-slate-500">(INNER JOIN de tres tablas)</span></span></li>
          </ol>
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-3 text-sm text-amber-950"><strong>★ Reto opcional (ampliación, no evaluada):</strong> listar las rutas sin ningún pasaje usando <code>LEFT JOIN ... IS NULL</code>.</div>
          <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-sm text-emerald-950"><strong>Cómo trabajar:</strong> escribe cada consulta en el cuaderno y anota debajo la salida que esperas con los datos proyectados. Sin imprimir. En las consultas evaluables no se usa <code>LIMIT</code> ni <code>LEFT/RIGHT JOIN</code>.</div>
        </div>
      `,
      notes: 'Soluciones y salidas esperadas en las notas de las diapositivas sql3-7 y sql3-14. Resumen de salidas: C2 = pasajes 2, 3 y 4; C3 = Ruta 1 83.00/27.67, Ruta 2 135.00/45.00, Ruta 3 30.00/30.00, Ruta 4 45.00/22.50; C4 = solo Norte con 218.00 (Centro suma 75.00 y no pasa); C5 = solo Ruta 2 con 45.00; C6 = 9 filas. Reto: Ruta 5. Los umbrales 80 y 40 se verificaron con estos datos y dan resultados no triviales (algunas filas pasan y otras no). Si el tiempo no alcanza, dejar 5 y 6 para la casa; la 4 es la que mejor prepara el taller de la semana 4. Revision: 2 consultas por pareja sobre el cuaderno, con la escala de la slide siguiente.'
    },
    {
      id: 'sql3-17',
      title: 'Verificación del taller',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-cyan-700 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-cyan-100">Verificación formativa · revisión de 2 consultas por pareja</p><h3 class="text-xl font-bold mt-1">Niveles de logro y qué se te dirá</h3></div>
          <div class="overflow-x-auto border border-slate-200 rounded-xl">
            <div class="min-w-[640px]">
              <div class="grid grid-cols-3 bg-slate-900 text-white text-xs font-bold"><div class="p-3">Nivel</div><div class="p-3">Qué se observa</div><div class="p-3">Retroalimentación para ti</div></div>
              <div class="divide-y divide-slate-200 text-sm">
                <div class="grid grid-cols-3"><div class="p-3 font-bold text-emerald-800">4 · Logrado</div><div class="p-3 text-slate-700">Consulta completa; join, filtro y agregación correctos; la salida anotada coincide.</div><div class="p-3 text-slate-700">Se confirma lo que está bien y se propone una variante (otro umbral u otro agrupamiento).</div></div>
                <div class="grid grid-cols-3 bg-slate-50"><div class="p-3 font-bold text-blue-800">3 · En proceso</div><div class="p-3 text-slate-700">Casi correcta: falta una pieza (GROUP BY incompleto, ON sin condición, HAVING en lugar de WHERE).</div><div class="p-3 text-slate-700">Se señala la pieza faltante sin darla hecha; corriges y reintentas.</div></div>
                <div class="grid grid-cols-3"><div class="p-3 font-bold text-amber-800">2 · Básico</div><div class="p-3 text-slate-700">Estructura reconocible pero la salida esperada es incorrecta (tipo de join o función equivocados).</div><div class="p-3 text-slate-700">Se compara tu salida anotada con los datos y se busca dónde cambia el resultado.</div></div>
                <div class="grid grid-cols-3 bg-slate-50"><div class="p-3 font-bold text-rose-800">1 · No logrado</div><div class="p-3 text-slate-700">Sin consulta o con errores de sintaxis básicos.</div><div class="p-3 text-slate-700">Se reconstruye con tu pareja siguiendo el orden: FROM, JOIN, WHERE, GROUP BY, HAVING, SELECT, ORDER BY.</div></div>
              </div>
            </div>
          </div>
          <p class="text-xs text-slate-500">Verificación formativa: 0 %; prepara el taller de la semana 4.</p>
        </div>
      `,
      notes: 'Escala de estimacion de 4 niveles, ponderacion 0 %. Revisar 2 consultas por pareja (priorizar la 4 y la 3). Dar la retroalimentacion oralmente y en el cuaderno, nombrando la pieza que falta sin escribir la respuesta completa. Registrar solo observaciones cualitativas; no hay nota en deathnote.'
    },
    {
      id: 'sql3-18',
      title: 'Cierre · preguntas de salida, tarea y anticipos',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-gradient-to-br from-slate-900 to-teal-900 text-white p-6 rounded-2xl"><p class="text-xs uppercase tracking-widest font-bold text-teal-200">Antes de cerrar</p><h3 class="text-2xl font-bold mt-2">Tres preguntas de salida</h3></div>
          <div class="space-y-3">
            <div class="flex gap-4 bg-white border-l-4 border-teal-500 rounded-xl p-4"><span class="font-bold text-teal-600">1</span><p class="text-slate-800">¿Dónde filtra WHERE y dónde HAVING?</p></div>
            <div class="flex gap-4 bg-white border-l-4 border-indigo-500 rounded-xl p-4"><span class="font-bold text-indigo-600">2</span><p class="text-slate-800">¿Qué pierde un INNER JOIN?</p></div>
            <div class="flex gap-4 bg-white border-l-4 border-rose-500 rounded-xl p-4"><span class="font-bold text-rose-600">3</span><p class="text-slate-800">Si una columna tiene los valores 10, 20 y NULL, ¿cuánto dan COUNT(*), COUNT(columna) y AVG(columna)?</p></div>
            <div class="flex gap-4 bg-amber-50 border-l-4 border-amber-400 rounded-xl p-4"><span class="font-bold text-amber-600">★</span><p class="text-slate-800"><strong>Ampliación opcional:</strong> ¿cómo pido solo las rutas que no tienen pasajes? <span class="text-slate-500">(fuera de evaluación)</span></p></div>
          </div>
          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-teal-50 border border-teal-200 rounded-xl p-4 text-sm text-teal-950"><strong>Tarea (individual, para casa):</strong> escribir las 6 consultas con su salida esperada y traer una consulta propia con JOIN + GROUP BY. Medio y fecha de entrega: por confirmar.</div>
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-950"><strong>Anticipos:</strong> semana 4 → taller (10 %), individual y para casa; jue 22/10 → práctica DML (20 %), individual y para casa. Fechas de entrega por confirmar.</div>
          </div>
        </div>
      `,
      notes: 'Respuestas: 1) WHERE filtra filas antes de agrupar; HAVING filtra grupos despues de agregar. 2) Las filas sin pareja en la otra tabla (por ejemplo, la Ruta 5 sin pasajes). 3) COUNT(*) = 3, COUNT(columna) = 2, AVG(columna) = 15. Ampliacion opcional: LEFT JOIN desde ruta hacia pasaje con WHERE p.id_pasaje IS NULL, resultado Ruta 5. Desde el 15/10 el taller S4 (10 %) y la practica DML del 22/10 (20 %) son individuales y para casa; sin laboratorio y sin SAIA; el medio de entrega queda por confirmar.'
    },
    {
      id: 'sql3-21',
      title: 'Resumen de repaso · consulta de lectura completa',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-slate-900 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-slate-300">Hoja de repaso</p><h3 class="text-xl font-bold mt-1">Todo en una sola consulta</h3></div>
          <div class="bg-slate-950 border border-slate-800 rounded-xl p-4">
            <pre class="font-mono text-xs md:text-sm text-slate-100 leading-relaxed whitespace-pre-wrap">SELECT   r.zona, SUM(p.monto) AS total      -- 5 · qué mostrar
FROM     ruta r                              -- 1 · de dónde
INNER JOIN pasaje p ON p.id_ruta = r.id_ruta -- 1 · cómo se unen (FK = PK)
WHERE    p.monto &gt; 0                         -- 2 · filtra filas
GROUP BY r.zona                              -- 3 · arma grupos
HAVING   SUM(p.monto) &gt;= 80                  -- 4 · filtra grupos
ORDER BY total DESC;                         -- 6 · ordena el resultado</pre>
          </div>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-teal-50 border border-teal-200 rounded-xl p-3 text-teal-950"><strong>Agregación:</strong> COUNT, SUM, AVG, MAX, MIN; ignoran NULL salvo COUNT(*).</div>
            <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-3 text-indigo-950"><strong>JOIN:</strong> INNER trae solo coincidencias; pierde las filas sin pareja.</div>
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-3 text-rose-950"><strong>WHERE vs HAVING:</strong> filas antes de agrupar frente a grupos después de agregar.</div>
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-3 text-amber-950"><strong>Alias:</strong> l.titulo (tabla) y AS total (columna); ORDER BY ve el alias de columna.</div>
          </div>
        </div>
      `,
      notes: 'Resultado verificado de la consulta con los datos de rutas: Norte = 218.00 (Centro = 75.00 no pasa el HAVING). Los numeros 1 a 6 en los comentarios indican el orden logico de ejecucion, no el orden de escritura. Usar como material de repaso para el taller de la semana 4.'
    },
    {
      id: 'sql3-19',
      title: 'Fuentes',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-slate-50 border border-slate-200 rounded-2xl p-5">
            <p class="font-bold text-slate-900">Para ampliar</p>
            <ul class="list-disc list-inside text-sm text-slate-700 mt-3 space-y-2">
              <li>Programa analítico de ELECTIVA II (PROGRAMACIÓN EN SQL), Unidad I, objetivos I.2, I.3 e I.4.</li>
              <li>Banco de contenidos de la asignatura, módulo de consultas.</li>
              <li>José Juan Sánchez. <em>Bases de Datos</em> (apuntes didácticos), consultas SQL, funciones de agregación y joins.</li>
            </ul>
          </div>
          <p class="text-xs text-slate-400 text-center">La base rutas y sus datos son de práctica para el aula.</p>
        </div>
      `,
      notes: "Actividad PGA de la semana (solo docente): taller guiado de consultas con funciones, operadores y joins sobre un modelo de más de una tabla · instrumento: escala de estimación · 0 %."
    }
  ]
};
