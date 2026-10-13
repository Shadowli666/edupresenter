import { Module } from '../../types';

export const SQL_MODULE_3: Module = {
  id: 'sql-mod-3',
  title: '3. Consultas de lectura: funciones, operadores y joins',
  description:
    'Semana 3: recuperación del contenido del 01/10 (componentes de la base relacional, tipos de datos, CREATE TABLE e INSERT) y desarrollo de consultas de lectura con funciones de agregación, GROUP BY/HAVING e INNER JOIN. SELECT/WHERE/ORDER BY y operadores de comparación ya se dictaron en S1: solo se activan. LEFT/RIGHT JOIN y LIMIT quedan fuera del alcance evaluable (el PGA solo pide INNER JOIN). Taller guiado sobre la base rutas.',
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
              <p class="text-slate-500 mt-1">Recuperación previa + SELECT, funciones y joins</p>
            </div>
          </div>
          <div class="bg-teal-50 border border-teal-200 rounded-xl p-5 text-teal-950">
            <p class="text-lg"><strong>Taller guiado:</strong> 6 consultas sobre una base real de 3 tablas, construida hoy mismo en clase.</p>
          </div>
          <p class="text-sm text-slate-500">Jueves 08/10/2026 · 14:30–16:45 · Aula A-01 · Sección A · IUPSM — Extensión Ciudad Ojeda</p>
        </div>
      `
    },
    {
      id: 'sql3-2',
      title: 'Hoy: se recupera y se avanza',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-slate-600 text-lg">La sesión del 01/10 no se dictó (ausencia del docente). Hoy la <strong>recuperamos</strong> y además desarrollamos el contenido previsto de esta semana.</p>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-amber-50 border border-amber-200 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-amber-700">Recuperación del 01/10</p><h3 class="text-xl font-bold text-amber-950 mt-2">Base relacional</h3><p class="text-sm text-amber-900 mt-2">Tabla, registro, campo y clave primaria · tipos de datos · CREATE TABLE · INSERT.</p></div>
            <div class="bg-teal-50 border border-teal-200 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-teal-700">Contenido previsto</p><h3 class="text-xl font-bold text-teal-950 mt-2">Consultas de lectura</h3><p class="text-sm text-teal-900 mt-2">Repaso de <strong>SELECT / WHERE / ORDER BY</strong> (visto el 24/09) · operadores lógicos · funciones de agregación · GROUP BY / HAVING · INNER JOIN.</p></div>
          </div>
          <div class="bg-slate-900 text-white rounded-2xl p-5">
            <p class="text-xs uppercase tracking-widest font-bold text-slate-300 mb-3">Ruta de trabajo (135 min)</p>
            <div class="flex flex-wrap gap-2 text-sm font-bold">
              <span class="bg-amber-600 rounded-full px-3 py-2">Recuperar la base</span><span class="text-slate-400 self-center">→</span>
              <span class="bg-teal-600 rounded-full px-3 py-2">Consultar</span><span class="text-slate-400 self-center">→</span>
              <span class="bg-indigo-600 rounded-full px-3 py-2">Unir tablas</span><span class="text-slate-400 self-center">→</span>
              <span class="bg-emerald-600 rounded-full px-3 py-2">Taller en parejas</span>
            </div>
          </div>
        </div>
      `
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
            <div class="bg-white border-2 border-teal-100 rounded-xl p-5"><h4 class="font-bold text-teal-900">Producto de hoy</h4><ul class="list-disc list-inside text-sm text-slate-700 mt-3 space-y-2"><li>La base rutas creada y cargada en el SGBD.</li><li>6 consultas funcionando por pareja.</li><li>Entrega del archivo .sql del taller.</li></ul></div>
            <div class="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-5"><h4 class="font-bold text-emerald-900">Actividad formativa</h4><p class="text-sm text-emerald-950 mt-3">Taller guiado en el SGBD del aula, evaluado con escala de estimación. Ponderación: 0 % (prepara la evaluación del 15/10).</p></div>
          </div>
        </div>
      `
    },
    {
      id: 'sql3-4',
      title: 'Recuperación · componentes de la base relacional',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-amber-600 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-amber-100">Recuperación del 01/10 · vocabulario mínimo</p><h3 class="text-xl font-bold mt-1">Una base relacional es un conjunto de tablas relacionadas</h3></div>
          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-blue-50 border border-blue-200 rounded-xl p-4"><h4 class="font-bold text-blue-900">Tabla</h4><p class="text-sm text-blue-950 mt-1">Estructura que guarda un tipo de entidad. Ej: la tabla ruta guarda las rutas.</p></div>
            <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-4"><h4 class="font-bold text-indigo-900">Registro (fila)</h4><p class="text-sm text-indigo-950 mt-1">Una ocurrencia de la entidad. Ej: la ruta 1 con nombre Ruta 1 y zona Norte.</p></div>
            <div class="bg-violet-50 border border-violet-200 rounded-xl p-4"><h4 class="font-bold text-violet-900">Campo (columna)</h4><p class="text-sm text-violet-950 mt-1">Una característica del registro. Ej: nombre, zona, monto.</p></div>
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-4"><h4 class="font-bold text-rose-900">Clave primaria</h4><p class="text-sm text-rose-950 mt-1">Identifica de forma única cada registro y permite relacionar tablas.</p></div>
          </div>
          <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-700"><strong>Cómo se relacionan:</strong> la clave primaria de una tabla se copia como clave foránea (id_ruta) en otra tabla (pasaje), y así se conectan los datos.</div>
        </div>
      `
    },
    {
      id: 'sql3-5',
      title: 'Recuperación · tipos de datos',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-amber-600 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-amber-100">Recuperación del 01/10</p><h3 class="text-xl font-bold mt-1">Tipos de datos en SQL</h3></div>
          <div class="overflow-x-auto border border-slate-200 rounded-xl">
            <div class="min-w-[640px]">
              <div class="grid grid-cols-3 bg-slate-900 text-white text-xs font-bold"><div class="p-3">Categoría</div><div class="p-3">Tipos</div><div class="p-3">Uso típico</div></div>
              <div class="divide-y divide-slate-200 text-sm">
                <div class="grid grid-cols-3"><div class="p-3 font-semibold text-blue-800">Numéricos exactos</div><div class="p-3 text-slate-700">INT, BIGINT</div><div class="p-3 text-slate-700">cantidades, identificadores</div></div>
                <div class="grid grid-cols-3 bg-slate-50"><div class="p-3 font-semibold text-blue-800">Decimales</div><div class="p-3 text-slate-700">DECIMAL, FLOAT</div><div class="p-3 text-slate-700">montos</div></div>
                <div class="grid grid-cols-3"><div class="p-3 font-semibold text-violet-800">Texto</div><div class="p-3 text-slate-700">CHAR(n), VARCHAR(n)</div><div class="p-3 text-slate-700">nombres de ruta, matrícula</div></div>
                <div class="grid grid-cols-3 bg-slate-50"><div class="p-3 font-semibold text-emerald-800">Fecha / hora</div><div class="p-3 text-slate-700">DATE, DATETIME</div><div class="p-3 text-slate-700">fecha del pasaje</div></div>
              </div>
            </div>
          </div>
          <div class="bg-teal-50 border border-teal-200 rounded-xl p-4 text-sm text-teal-950"><strong>Regla práctica de tipado:</strong> si el dato se suma o se compara, es numérico; si describe con palabras, es texto; si ubica en el tiempo, es fecha. Para dinero usa DECIMAL, no FLOAT.</div>
        </div>
      `
    },
    {
      id: 'sql3-6',
      title: 'Demostración · CREATE TABLE de la base rutas',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-slate-900 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-slate-300">Demostración en vivo</p><h3 class="text-xl font-bold mt-1">Creamos la base rutas delante del grupo (3 tablas)</h3></div>
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
  monto     DECIMAL(10,2)
);</pre>
          </div>
          <p class="text-sm text-slate-600"><strong>Mira la lógica:</strong> id_ruta e id_bus dentro de pasaje son las claves foráneas que conectarán las tablas.</p>
        </div>
      `
    },
    {
      id: 'sql3-7',
      title: 'Demostración · INSERT de filas de ejemplo',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-slate-900 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-slate-300">Demostración en vivo</p><h3 class="text-xl font-bold mt-1">Cargamos los datos: INSERT</h3></div>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-slate-950 border border-slate-800 rounded-xl p-5">
              <p class="text-xs font-bold text-emerald-400 mb-3">SQL</p>
              <pre class="font-mono text-xs text-slate-100 leading-relaxed whitespace-pre-wrap">INSERT INTO ruta VALUES (1, 'Ruta 1', 'Norte');
INSERT INTO ruta VALUES (2, 'Ruta 3', 'Centro');

INSERT INTO bus VALUES (1, 'Bus 01', 'ABC-123');

INSERT INTO pasaje VALUES (1, 1, 1, '2026-10-08', 25.00);
INSERT INTO pasaje VALUES (2, 2, 1, '2026-10-08', 30.00);</pre>
            </div>
            <div class="space-y-3">
              <div class="bg-teal-50 border border-teal-200 rounded-xl p-4 text-sm text-teal-950"><strong>Cuidado con el orden:</strong> los valores van en el mismo orden que los campos declarados en CREATE TABLE.</div>
              <div class="bg-rose-50 border border-rose-200 rounded-xl p-4 text-sm text-rose-950"><strong>Errores de hoy que explican tipado:</strong> coma de más, texto sin comillas, fecha mal formada.</div>
              <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-950"><strong>Diferencia clave:</strong> CREATE TABLE define la estructura; INSERT carga filas en esa estructura.</div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'sql3-8',
      title: 'Micro-práctica de recuperación · tu tabla propia',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-emerald-600 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-emerald-100">Micro-práctica · integrada en los minutos de recuperación</p><h3 class="text-xl font-bold">Crea tu propia tabla en el SGBD</h3></div>
          <ol class="space-y-3 text-sm">
            <li class="flex gap-3 bg-white border rounded-xl p-4"><span class="font-bold text-emerald-700">1</span><span>Inventa una entidad sencilla (un estudiante, un producto, una cita...).</span></li>
            <li class="flex gap-3 bg-white border rounded-xl p-4"><span class="font-bold text-emerald-700">2</span><span>Crea la tabla con <strong>4 campos de tipos distintos</strong>: uno numérico, uno decimal, uno de texto y uno de fecha, además de su clave primaria con PRIMARY KEY.</span></li>
            <li class="flex gap-3 bg-white border rounded-xl p-4"><span class="font-bold text-emerald-700">3</span><span>Carga <strong>2 registros</strong> con INSERT.</span></li>
            <li class="flex gap-3 bg-white border rounded-xl p-4"><span class="font-bold text-emerald-700">4</span><span>Comprueba con SELECT * FROM tu_tabla; que todo se muestre bien.</span></li>
          </ol>
          <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-sm text-emerald-950"><strong>Meta del docente:</strong> que los tipos estén correctos y la clave primaria definida. Si todos logran sin ayuda, pasamos más rápido al taller.</div>
        </div>
      `
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
      notes: 'Activación breve (2–3 min), no reexplicación. Respuestas esperadas: 1) WHERE filtra FILAS antes de proyectar; 2) ORDER BY ordena el resultado final, ASC por defecto (DESC es opcional); 3) SELECT proyecta COLUMNAS. Si el grupo no recuerda, recordar con una consulta de ejemplo en pantalla, sin volver a dar teoría.'
    },
    {
      id: 'sql3-10',
      title: 'Operadores lógicos · AND, OR, NOT',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-teal-600 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-teal-100">Lo nuevo de hoy</p><h3 class="text-xl font-bold mt-1">Combinar condiciones en WHERE</h3></div>
          <div class="grid md:grid-cols-3 gap-3 text-sm">
            <div class="bg-white border-2 border-teal-200 rounded-xl p-4"><p class="font-mono font-bold text-teal-800">AND</p><p class="text-teal-950 mt-1">ambas condiciones deben cumplirse</p></div>
            <div class="bg-white border-2 border-indigo-200 rounded-xl p-4"><p class="font-mono font-bold text-indigo-800">OR</p><p class="text-indigo-950 mt-1">basta que una se cumpla</p></div>
            <div class="bg-white border-2 border-rose-200 rounded-xl p-4"><p class="font-mono font-bold text-rose-800">NOT</p><p class="text-rose-950 mt-1">niega la condición</p></div>
          </div>
          <div class="bg-slate-950 border border-slate-800 rounded-xl p-5">
            <pre class="font-mono text-xs md:text-sm text-slate-100 leading-relaxed whitespace-pre-wrap">SELECT * FROM pasaje
WHERE monto &gt;= 25 AND monto &lt;= 45;
-- equivalente a: WHERE monto BETWEEN 25 AND 45</pre>
          </div>
          <div class="bg-slate-50 border rounded-xl p-4 text-sm text-slate-700"><strong>Ya visto el 24/09:</strong> los comparadores <code>= &lt;&gt; &lt; &gt; &lt;= &gt;=</code>, <code>BETWEEN</code> e <code>IN</code>. Hoy solo sumamos los lógicos <code>AND</code>/<code>OR</code>/<code>NOT</code> y la trampa de las comillas: texto con comillas simples ('Norte'), números sin ellas.</div>
        </div>
      `
    },
    {
      id: 'sql3-11',
      title: 'Funciones de agregación',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-teal-600 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-teal-100">Resumen a partir de muchos valores</p><h3 class="text-xl font-bold">Cinco funciones que agregan columnas numéricas y conteos</h3></div>
          <div class="grid md:grid-cols-3 gap-3">
            <div class="bg-teal-50 border border-teal-200 rounded-xl p-4"><p class="font-mono font-bold text-teal-800">COUNT(*)</p><p class="text-sm text-teal-950 mt-1">cuenta filas</p></div>
            <div class="bg-teal-50 border border-teal-200 rounded-xl p-4"><p class="font-mono font-bold text-teal-800">SUM(monto)</p><p class="text-sm text-teal-950 mt-1">suma total</p></div>
            <div class="bg-teal-50 border border-teal-200 rounded-xl p-4"><p class="font-mono font-bold text-teal-800">AVG(monto)</p><p class="text-sm text-teal-950 mt-1">promedio</p></div>
            <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-4"><p class="font-mono font-bold text-indigo-800">MAX(monto)</p><p class="text-sm text-indigo-950 mt-1">valor máximo</p></div>
            <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-4"><p class="font-mono font-bold text-indigo-800">MIN(monto)</p><p class="text-sm text-indigo-950 mt-1">valor mínimo</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-700"><strong>Pregunta clave:</strong> ¿cuál usarías para saber cuántos pasajes vendió una ruta?</div>
          </div>
          <p class="text-xs text-slate-500">Cada pareja escribirá las cinco en el taller sobre la columna monto y la tabla pasaje.</p>
        </div>
      `
    },
    {
      id: 'sql3-12',
      title: 'GROUP BY y HAVING · agrupar y filtrar grupos',
      contentHtml: `
        <div class="space-y-5">
          <p class="text-slate-600 text-lg">Agregan resultados <strong>por grupo</strong>, no sobre toda la tabla.</p>
          <div class="bg-slate-950 border border-slate-800 rounded-xl p-5">
            <pre class="font-mono text-xs md:text-sm text-slate-100 leading-relaxed whitespace-pre-wrap">SELECT zona, COUNT(*) AS total_rutas
FROM ruta
GROUP BY zona
HAVING COUNT(*) &gt; 1;</pre>
          </div>
          <div class="grid md:grid-cols-3 gap-3 text-sm">
            <div class="bg-teal-50 border border-teal-200 rounded-xl p-4"><p class="font-bold text-teal-900">WHERE</p><p class="text-teal-950 mt-1">filtra <strong>filas</strong> <em>antes</em> de agrupar</p></div>
            <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-4"><p class="font-bold text-indigo-900">GROUP BY</p><p class="text-indigo-950 mt-1">define los <strong>grupos</strong> sobre los que se agregan</p></div>
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-4"><p class="font-bold text-rose-900">HAVING</p><p class="text-rose-950 mt-1">filtra <strong>grupos</strong> <em>después</em> de agregar</p></div>
          </div>
          <div class="bg-slate-900 text-white rounded-xl p-4 text-sm"><strong>Orden mental:</strong> WHERE (filas) → GROUP BY (grupos) → HAVING (grupos que pasan) → ORDER BY (resultado final).</div>
        </div>
      `
    },
    {
      id: 'sql3-13',
      title: 'JOINs · INNER JOIN como núcleo, LEFT/RIGHT como ampliación',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-indigo-600 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-indigo-100">Unir tablas · claves foráneas</p><h3 class="text-xl font-bold mt-1">INNER JOIN es lo que se evalúa; LEFT/RIGHT son ampliación</h3></div>
          <div class="overflow-x-auto border border-slate-200 rounded-xl">
            <div class="min-w-[620px]">
              <div class="grid grid-cols-3 bg-slate-900 text-white text-xs font-bold"><div class="p-3">Join</div><div class="p-3">Qué trae</div><div class="p-3">Qué se pierde</div></div>
              <div class="divide-y divide-slate-200 text-sm">
                <div class="grid grid-cols-3 bg-emerald-50"><div class="p-3 font-mono font-bold text-indigo-800">INNER JOIN <span class="text-xs font-sans text-emerald-700">· se evalúa</span></div><div class="p-3 text-slate-700">solo las filas que coinciden en ambas tablas</div><div class="p-3 text-slate-700">las que no coinciden en ninguna de las dos</div></div>
                <div class="grid grid-cols-3 bg-slate-50"><div class="p-3 font-mono font-bold text-teal-800">LEFT JOIN <span class="text-xs font-sans text-slate-500">· opcional</span></div><div class="p-3 text-slate-700">todo de la tabla izquierda, mas las coincidencias</div><div class="p-3 text-slate-700">las de la derecha que no tienen pareja</div></div>
                <div class="grid grid-cols-3"><div class="p-3 font-mono font-bold text-violet-800">RIGHT JOIN <span class="text-xs font-sans text-slate-500">· opcional</span></div><div class="p-3 text-slate-700">todo de la tabla derecha, mas las coincidencias</div><div class="p-3 text-slate-700">las de la izquierda que no tienen pareja</div></div>
              </div>
            </div>
          </div>
          <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-sm text-emerald-950"><strong>Pregunta de verificación:</strong> ¿qué pasaría con una ruta sin pasajes al usar un INNER JOIN?</div>
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-950"><strong>Alcance según el PGA:</strong> la evaluación del 15/10 solo pide <code>INNER JOIN</code>. <code>LEFT</code>/<code>RIGHT JOIN</code> se muestran como ampliación opcional, fuera de evaluación.</div>
        </div>
      `,
      notes: 'LEFT/RIGHT JOIN no se evalúan en S4: el PGA de S3 solo lista INNER JOIN y la evaluación del 15/10 usa únicamente INNER JOIN. Mostrar LEFT/RIGHT solo si el grupo domina INNER y queda tiempo (ampliación opcional). Respuesta a la verificación: con INNER JOIN la ruta sin pasajes desaparece del resultado.'
    },
    {
      id: 'sql3-14',
      title: 'Ejemplo tipo del taller · INNER JOIN con GROUP BY',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-slate-900 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-slate-300">Ejemplo tipo del taller · base DISTINTA a la del taller</p><h3 class="text-xl font-bold mt-1">Préstamos por libro (biblioteca)</h3></div>
          <div class="bg-slate-950 border border-slate-800 rounded-xl p-5">
            <pre class="font-mono text-xs md:text-sm text-slate-100 leading-relaxed whitespace-pre-wrap">SELECT l.titulo, COUNT(p.id_prestamo) AS prestamos
FROM libro l
INNER JOIN prestamo p ON p.id_libro = l.id_libro
GROUP BY l.titulo
ORDER BY prestamos DESC;</pre>
          </div>
          <div class="grid md:grid-cols-3 gap-3 text-sm">
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-4"><p class="font-bold text-amber-900">Apodo de tabla</p><p class="text-amber-950 mt-1">FROM libro <strong>l</strong> permite escribir l.titulo: menos texto, más claridad.</p></div>
            <div class="bg-teal-50 border border-teal-200 rounded-xl p-4"><p class="font-bold text-teal-900">INNER JOIN</p><p class="text-teal-950 mt-1">Solo los libros que tienen al menos un préstamo.</p></div>
            <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-4"><p class="font-bold text-indigo-900">Alias calculado</p><p class="text-indigo-950 mt-1">AS prestamos da nombre a la columna contada y lo usamos al ordenar.</p></div>
          </div>
          <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-sm text-emerald-950"><strong>Base distinta a propósito:</strong> es una biblioteca, no la base <code>rutas</code> del taller. Traslada el patrón, no copies el texto.</div>
        </div>
      `,
      notes: 'Modelo de solución del taller (NO mostrar; solo para el docente). Consulta 3: SELECT r.nombre, SUM(p.monto) AS total, AVG(p.monto) AS promedio FROM ruta r INNER JOIN pasaje p ON p.id_ruta = r.id_ruta GROUP BY r.nombre;. Consulta 4: SELECT r.zona, SUM(p.monto) AS total FROM ruta r INNER JOIN pasaje p ON p.id_ruta = r.id_ruta GROUP BY r.zona HAVING SUM(p.monto) >= 80;. Consulta 5: SELECT r.nombre, ROUND(AVG(p.monto),2) AS promedio FROM ruta r INNER JOIN pasaje p ON p.id_ruta = r.id_ruta GROUP BY r.nombre HAVING AVG(p.monto) >= 40;.'
    },
    {
      id: 'sql3-15',
      title: 'Demostración en vivo · 3 consultas sobre la base rutas',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-fuchsia-600 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-fuchsia-100">Demostración en el SGBD</p><h3 class="text-xl font-bold">El docente ejecuta, el grupo anticipa la salida</h3></div>
          <ol class="space-y-3 text-sm">
            <li class="flex gap-3 bg-white border rounded-xl p-4"><span class="font-bold text-fuchsia-700">1 · Filtros</span><span class="flex-1">SELECT * FROM pasaje WHERE monto BETWEEN 25 AND 45; — ¿cuántas filas esperas?</span></li>
            <li class="flex gap-3 bg-white border rounded-xl p-4"><span class="font-bold text-fuchsia-700">2 · Agregación</span><span class="flex-1">SELECT COUNT(*), AVG(monto) FROM pasaje; — ¿qué devuelve cada columna?</span></li>
            <li class="flex gap-3 bg-white border rounded-xl p-4"><span class="font-bold text-fuchsia-700">3 · Join</span><span class="flex-1">SELECT r.nombre, b.matricula FROM pasaje p INNER JOIN ruta r ON p.id_ruta = r.id_ruta INNER JOIN bus b ON p.id_bus = b.id_bus; — ¿qué trae cada fila?</span></li>
          </ol>
          <div class="bg-fuchsia-50 border border-fuchsia-200 rounded-xl p-4 text-sm text-fuchsia-950"><strong>Antes de ejecutar cada una:</strong> di en voz alta qué salida esperas; luego comparamos con la real.</div>
        </div>
      `
    },
    {
      id: 'sql3-16',
      title: 'Taller guiado · 6 consultas en parejas (30 min)',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-emerald-600 text-white rounded-xl p-4 flex items-center justify-between"><div><p class="text-xs uppercase tracking-widest font-bold text-emerald-100">Taller guiado · base rutas</p><h3 class="text-xl font-bold">Las 6 consultas del taller</h3></div><span class="text-3xl">🧭</span></div>
          <ol class="space-y-2 text-sm">
            <li class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-emerald-700">1</span><span>Lista de rutas con su zona <span class="text-slate-500">(SELECT + ORDER BY)</span></span></li>
            <li class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-emerald-700">2</span><span>Pasajes de una fecha dada o rango <span class="text-slate-500">(WHERE con BETWEEN)</span></span></li>
            <li class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-emerald-700">3</span><span>Monto total y promedio por ruta <span class="text-slate-500">(SUM, AVG + GROUP BY)</span></span></li>
            <li class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-emerald-700">4</span><span>Zonas con monto total de al menos 80 <span class="text-slate-500">(GROUP BY + HAVING)</span></span></li>
            <li class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-emerald-700">5</span><span>Rutas con monto promedio de al menos 40 <span class="text-slate-500">(GROUP BY + HAVING)</span></span></li>
            <li class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-emerald-700">6</span><span>Pasajes con datos de bus y ruta <span class="text-slate-500">(INNER JOIN de tres tablas)</span></span></li>
          </ol>
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-950"><strong>★ Reto opcional (ampliación, no evaluada):</strong> listar las rutas sin ningún pasaje en octubre usando <code>LEFT JOIN ... IS NULL</code>. Es formativa, pero el PGA y la evaluación del 15/10 solo exigen <code>INNER JOIN</code>.</div>
          <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-sm text-emerald-950"><strong>Entrega:</strong> cada pareja guarda las 6 consultas en un archivo .sql y el docente revisa en el SGBD. No se imprime nada: lees las consultas de la pantalla y las resuelves en el SGBD. En las consultas evaluables no se usa <code>LIMIT</code> ni <code>LEFT/RIGHT JOIN</code>.</div>
        </div>
      `,
      notes: 'Las 6 consultas usan solo INNER JOIN, GROUP BY y HAVING (alcance del PGA de S3). El reto opcional (LEFT JOIN + IS NULL) no se evalúa. Los umbrales 80 y 40 se ajustan a los datos realmente cargados en clase; la habilidad evaluada es GROUP BY + HAVING. Si el tiempo no alcanza, dejar las consultas 5 y 6 como tarea; la 4 (HAVING por zona) es la que mejor prepara la evaluación del 15/10.'
    },
    {
      id: 'sql3-17',
      title: 'Verificación con escala de estimación',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-cyan-700 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-cyan-100">Verificación del taller · revisión de 2 consultas por pareja</p><h3 class="text-xl font-bold mt-1">Escala de estimación</h3></div>
          <div class="overflow-x-auto border border-slate-200 rounded-xl">
            <div class="min-w-[560px]">
              <div class="grid grid-cols-4 bg-slate-900 text-white text-xs font-bold"><div class="p-3">Nivel</div><div class="p-3">Significado</div><div class="p-3">Síntoma en la consulta</div><div class="p-3">Retroalimentación</div></div>
              <div class="divide-y divide-slate-200 text-sm">
                <div class="grid grid-cols-4"><div class="p-3 font-bold text-emerald-800">4 · Logrado</div><div class="p-3 text-slate-700">La consulta ejecuta y responde exactamente lo pedido</div><div class="p-3 text-slate-700">join, filtro y agregación correctos</div><div class="p-3 text-slate-700">solicita el registro siguiente</div></div>
                <div class="grid grid-cols-4 bg-slate-50"><div class="p-3 font-bold text-blue-800">3 · En proceso</div><div class="p-3 text-slate-700">Ejecuta con ajustes menores</div><div class="p-3 text-slate-700">GROUP BY u ON incompleto</div><div class="p-3 text-slate-700">indica la pieza faltante y reintenta</div></div>
                <div class="grid grid-cols-4"><div class="p-3 font-bold text-amber-800">2 · Básico</div><div class="p-3 text-slate-700">Devuelve filas incorrectas</div><div class="p-3 text-slate-700">tipo de JOIN equivocado</div><div class="p-3 text-slate-700">compara con la salida esperada</div></div>
                <div class="grid grid-cols-4 bg-slate-50"><div class="p-3 font-bold text-rose-800">1 · No logrado</div><div class="p-3 text-slate-700">No ejecuta o no aparece</div><div class="p-3 text-slate-700">sintaxis o tabla equivocada</div><div class="p-3 text-slate-700">guía paso a paso la estructura</div></div>
              </div>
            </div>
          </div>
          <p class="text-xs text-slate-500">Verificación formativa: 0 %; prepara la evaluación del 15/10.</p>
        </div>
      `
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
            <div class="flex gap-4 bg-white border-l-4 border-rose-500 rounded-xl p-4"><span class="font-bold text-rose-600">3</span><p class="text-slate-800">¿Cómo pido solo las rutas que no tienen pasajes?</p></div>
          </div>
          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-teal-50 border border-teal-200 rounded-xl p-4 text-sm text-teal-950"><strong>Tarea:</strong> escribir las 6 consultas en un archivo y traer una consulta propia con JOIN + GROUP BY.</div>
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-950"><strong>Anticipos:</strong> jue 15/10 → taller práctico evaluado (10 %); jue 22/10 → evaluación (20 %) sobre DML.</div>
          </div>
        </div>
      `
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
          <div class="bg-teal-50 border border-teal-200 rounded-xl p-4 text-sm text-teal-950"><strong>Actividad PGA de la semana:</strong> taller guiado de consultas con funciones, operadores y joins sobre un modelo de más de una tabla · escala de estimación · 0 %.</div>
          <p class="text-xs text-slate-400 text-center">La base rutas y sus datos son de práctica para el aula.</p>
        </div>
      `
    }
  ]
};
