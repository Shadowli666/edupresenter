import { Module } from '../../types';

export const SQL_MODULE_7: Module = {
  id: 'sql-mod-7',
  title: '7. Dependencias funcionales y formas normales',
  description:
    'Semana 7 (jueves 05/11, sin laboratorio): vocabulario formal del modelo relacional y jerarquía de claves, redundancia y anomalías, dependencias funcionales (completa, parcial y transitiva) y criterios para identificar 1FN, 2FN y 3FN. Práctica en papel y pizarra con ficha individual formativa. Unidad III, objetivos III.1 y III.2.',
  evaluation: '0%',
  slides: [
    {
      id: 'sql7-1',
      title: 'SQL · Semana 7',
      contentHtml: `
        <div class="space-y-7">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-4xl shadow-lg">🧩</div>
            <div>
              <p class="text-sm uppercase tracking-widest font-bold text-indigo-700">Electiva II · Programación en SQL · Unidad III</p>
              <h2 class="text-3xl md:text-4xl font-bold text-slate-900">Dependencias funcionales y formas normales</h2>
              <p class="text-slate-500 mt-1">De «la tabla funciona» a «la tabla está bien diseñada»</p>
            </div>
          </div>
          <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-5 text-indigo-950">
            <p class="text-lg"><strong>Objetivo:</strong> identificar los conceptos relacionales y las formas normales hasta la tercera forma normal (3FN).</p>
          </div>
          <p class="text-sm text-slate-500">Jueves 05/11/2026 · 14:30–16:45 · Aula A-01 · Sección A · IUPSM — Extensión Ciudad Ojeda</p>
        </div>
      `,
      notes: 'Inicio (8 min en total con diap. 2 y 3). Recordar el informe grupal del Corte I: entrega por correo institucional, fecha por confirmar (sql6-t1); no mencionar SAIA. Hoy no hay laboratorio: todo en cuaderno y pizarra.'
    },
    {
      id: 'sql7-2',
      title: 'Ruta de hoy',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-slate-600 text-lg">Hasta ahora escribimos consultas sobre tablas ya diseñadas. Hoy evaluamos <strong>el diseño de la tabla</strong>.</p>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-indigo-50 border border-indigo-200 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-indigo-700">Teoría</p><h3 class="text-lg font-bold text-indigo-950 mt-2">Claves, anomalías y DF</h3><p class="text-sm text-indigo-900 mt-2">Vocabulario formal, dependencias funcionales y las tres primeras formas normales.</p></div>
            <div class="bg-sky-50 border border-sky-200 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-sky-700">Demostración</p><h3 class="text-lg font-bold text-sky-950 mt-2">Taller mecánico</h3><p class="text-sm text-sky-900 mt-2">Una relación con todos los problemas, analizada paso a paso.</p></div>
            <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-emerald-700">Práctica</p><h3 class="text-lg font-bold text-emerald-950 mt-2">Parejas y ficha individual</h3><p class="text-sm text-emerald-900 mt-2">Consulta veterinaria en parejas; dos relaciones en la ficha.</p></div>
          </div>
          <div class="bg-slate-900 text-white rounded-2xl p-5">
            <div class="flex flex-wrap gap-2 text-sm font-bold">
              <span class="bg-indigo-600 rounded-full px-3 py-2">Claves</span><span class="text-slate-400 self-center">→</span>
              <span class="bg-indigo-600 rounded-full px-3 py-2">Anomalías</span><span class="text-slate-400 self-center">→</span>
              <span class="bg-indigo-600 rounded-full px-3 py-2">Dependencias</span><span class="text-slate-400 self-center">→</span>
              <span class="bg-sky-600 rounded-full px-3 py-2">1FN · 2FN · 3FN</span><span class="text-slate-400 self-center">→</span>
              <span class="bg-emerald-600 rounded-full px-3 py-2">Ficha</span>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'sql7-3',
      title: 'La tabla funciona… ¿o no?',
      contentHtml: `
        <div class="space-y-5">
          <p class="text-slate-600">El taller mecánico «Motor Lago» registra todo en una sola tabla:</p>
          <div class="overflow-x-auto"><table class="w-full text-xs border">
            <thead class="bg-slate-100"><tr><th class="p-1 border">nro_orden</th><th class="p-1 border">fecha</th><th class="p-1 border">placa</th><th class="p-1 border">modelo</th><th class="p-1 border">ced_cliente</th><th class="p-1 border">nombre_cliente</th><th class="p-1 border">cod_servicio</th><th class="p-1 border">nombre_servicio</th><th class="p-1 border">precio_base</th></tr></thead>
            <tbody>
              <tr><td class="p-1 border">101</td><td class="p-1 border">2026-11-02</td><td class="p-1 border">AB123CD</td><td class="p-1 border">Corolla</td><td class="p-1 border">V-111</td><td class="p-1 border">Rosa Paz</td><td class="p-1 border">S1</td><td class="p-1 border">Cambio de aceite</td><td class="p-1 border">25</td></tr>
              <tr><td class="p-1 border">101</td><td class="p-1 border">2026-11-02</td><td class="p-1 border">AB123CD</td><td class="p-1 border">Corolla</td><td class="p-1 border">V-111</td><td class="p-1 border">Rosa Paz</td><td class="p-1 border">S2</td><td class="p-1 border">Alineación</td><td class="p-1 border">30</td></tr>
              <tr><td class="p-1 border">102</td><td class="p-1 border">2026-11-03</td><td class="p-1 border">XY987ZW</td><td class="p-1 border">Aveo</td><td class="p-1 border">V-222</td><td class="p-1 border">Juan Gil</td><td class="p-1 border">S1</td><td class="p-1 border">Cambio de aceite</td><td class="p-1 border">25</td></tr>
              <tr><td class="p-1 border">103</td><td class="p-1 border">2026-11-04</td><td class="p-1 border">AB123CD</td><td class="p-1 border">Corolla</td><td class="p-1 border">V-111</td><td class="p-1 border">Rosa Paz</td><td class="p-1 border">S3</td><td class="p-1 border">Frenos</td><td class="p-1 border">60</td></tr>
            </tbody>
          </table></div>
          <div class="bg-gradient-to-br from-slate-900 to-indigo-900 text-white p-6 rounded-2xl">
            <p class="text-xs uppercase tracking-widest font-bold text-indigo-300">Pregunta de partida</p>
            <p class="text-xl font-bold mt-2">Todas las consultas de S1–S6 funcionan sobre esta tabla. ¿Qué podría salir mal al <strong>modificarla</strong>?</p>
          </div>
          <p class="text-sm text-slate-500">Copia la tabla en tu cuaderno: se usa en toda la clase.</p>
        </div>
      `,
      notes: 'Pregunta detonante: dejar 2 min de respuestas libres. Respuestas esperables: datos repetidos (Rosa Paz y su Corolla tres veces; precio de S1 dos veces), riesgo de contradicciones. No dar todavía los nombres de las anomalías.'
    },
    {
      id: 'sql7-4',
      title: 'Vocabulario formal y claves',
      contentHtml: `
        <div class="space-y-5">
          <div class="overflow-x-auto"><table class="w-full text-sm border">
            <thead class="bg-indigo-50"><tr><th class="p-2 border text-left">Informal</th><th class="p-2 border text-left">Formal</th><th class="p-2 border text-left">En la tabla del taller</th></tr></thead>
            <tbody>
              <tr><td class="p-2 border">Tabla</td><td class="p-2 border font-bold">Relación</td><td class="p-2 border">reparacion</td></tr>
              <tr><td class="p-2 border">Fila</td><td class="p-2 border font-bold">Tupla</td><td class="p-2 border">(101, 2026-11-02, AB123CD, …)</td></tr>
              <tr><td class="p-2 border">Columna</td><td class="p-2 border font-bold">Atributo (con su dominio)</td><td class="p-2 border">placa ∈ placas válidas</td></tr>
              <tr><td class="p-2 border">N.º de columnas / de filas</td><td class="p-2 border font-bold">Grado / cardinalidad</td><td class="p-2 border">grado 9 · cardinalidad 4</td></tr>
            </tbody>
          </table></div>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-white border-l-4 border-indigo-500 rounded-xl p-3" data-reveal><strong>Superclave:</strong> conjunto de atributos cuyo valor no se repite en dos tuplas.</div>
            <div class="bg-white border-l-4 border-indigo-500 rounded-xl p-3" data-reveal><strong>Clave candidata:</strong> superclave <strong>mínima</strong>: si se le quita un atributo, deja de identificar.</div>
            <div class="bg-white border-l-4 border-indigo-500 rounded-xl p-3" data-reveal><strong>Clave primaria:</strong> la clave candidata elegida. <strong>Atributo primo:</strong> forma parte de alguna clave candidata.</div>
            <div class="bg-white border-l-4 border-indigo-500 rounded-xl p-3" data-reveal><strong>Clave foránea:</strong> atributo que referencia la clave primaria de otra relación.</div>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-900" data-reveal>¿(nro_orden, cod_servicio, fecha) es superclave? ¿Es clave candidata?</div>
        </div>
      `,
      notes: 'Teoría 1 (10 min). Lo informal ya se vio en S1 y S6; lo nuevo es la jerarquía de claves. Respuesta: es superclave, pero no candidata, porque fecha sobra; la candidata es (nro_orden, cod_servicio). Fuente: Elmasri, cap. 10 §10.2–10.3.'
    },
    {
      id: 'sql7-5',
      title: 'Redundancia y anomalías',
      contentHtml: `
        <div class="space-y-5">
          <p class="text-slate-600">Cuando un mismo hecho se guarda en varias tuplas aparecen tres <strong>anomalías</strong>:</p>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-rose-50 border border-rose-200 rounded-2xl p-4" data-reveal><p class="text-xs uppercase font-bold text-rose-700">Inserción</p><p class="text-sm text-rose-950 mt-2">No se puede registrar un servicio nuevo (S4, Batería) hasta que una orden lo use: nro_orden forma parte de la clave.</p></div>
            <div class="bg-amber-50 border border-amber-200 rounded-2xl p-4" data-reveal><p class="text-xs uppercase font-bold text-amber-700">Actualización</p><p class="text-sm text-amber-950 mt-2">El precio de S1 está escrito dos veces. Si se cambia en una sola fila, la base se contradice.</p></div>
            <div class="bg-violet-50 border border-violet-200 rounded-2xl p-4" data-reveal><p class="text-xs uppercase font-bold text-violet-700">Eliminación</p><p class="text-sm text-violet-950 mt-2">Al borrar la orden 102 se pierde que Juan Gil es cliente y que tiene un Aveo.</p></div>
          </div>
          <div class="bg-slate-50 border rounded-xl p-4 text-sm text-slate-700"><strong>Diseño deseado:</strong> esquemas en los que no se presenten anomalías de inserción, borrado ni actualización (Elmasri, §10.1.2).</div>
        </div>
      `,
      notes: 'Teoría 2, primera parte. Pedir que encuentren en la tabla copiada cada anomalía antes de revelar la tarjeta.'
    },
    {
      id: 'sql7-6',
      title: 'Demostración · la anomalía en SQL',
      contentHtml: `
        <div class="space-y-4">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto"><p class="text-[10px] uppercase tracking-widest text-slate-400 mb-2">SQL</p><pre class="text-xs font-mono leading-6">UPDATE reparacion SET precio_base = 28
WHERE nro_orden = 102 AND cod_servicio = 'S1';

SELECT DISTINCT cod_servicio, nombre_servicio, precio_base
FROM reparacion
ORDER BY cod_servicio, precio_base;</pre></div>
            <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4" data-reveal><p class="text-xs font-bold text-emerald-900 mb-1">Salida</p><pre class="text-xs font-mono text-emerald-950">S1 | Cambio de aceite | 25
S1 | Cambio de aceite | 28
S2 | Alineación       | 30
S3 | Frenos           | 60</pre><p class="text-sm text-rose-700 mt-2 font-bold">El mismo servicio tiene dos precios.</p></div>
          </div>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto"><pre class="text-xs font-mono leading-6">DELETE FROM reparacion WHERE nro_orden = 102;

SELECT COUNT(*) AS filas_de_juan
FROM reparacion WHERE ced_cliente = 'V-222';</pre></div>
            <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4" data-reveal><p class="text-xs font-bold text-emerald-900 mb-1">Salida</p><pre class="text-xs font-mono text-emerald-950">filas_de_juan
0</pre><p class="text-sm text-rose-700 mt-2 font-bold">El cliente desapareció junto con su orden.</p></div>
          </div>
        </div>
      `,
      notes: 'Salidas verificadas con sqlite3 sobre las 4 filas de la diap. 3 (el UPDATE se aplica antes del DELETE). Pregunta: ¿qué precio se cobra hoy por S1? No hay respuesta correcta: ese es el problema. El SQL solo ilustra la anomalía; no se repasa DML.'
    },
    {
      id: 'sql7-7',
      title: 'Dependencias funcionales',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-indigo-600 text-white rounded-2xl p-5">
            <p class="text-2xl font-bold font-mono">X → Y</p>
            <p class="mt-2">«X determina funcionalmente a Y»: dos tuplas con el mismo valor de X tienen siempre el mismo valor de Y.</p>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-900">Las DF salen de las <strong>reglas del negocio</strong>, no de unas pocas filas: los datos de ejemplo solo pueden <strong>refutar</strong> una DF.</div>
          <div class="grid md:grid-cols-3 gap-3 text-sm">
            <div class="bg-white border rounded-xl p-3" data-reveal><p class="font-bold text-emerald-700">Completa</p><p>Y depende de <strong>toda</strong> la clave compuesta.</p></div>
            <div class="bg-white border rounded-xl p-3" data-reveal><p class="font-bold text-amber-700">Parcial</p><p>Y depende solo de <strong>una parte</strong> de la clave.</p></div>
            <div class="bg-white border rounded-xl p-3" data-reveal><p class="font-bold text-rose-700">Transitiva</p><p>clave → A → Y, con A <strong>no clave</strong>.</p></div>
          </div>
          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 text-sm font-mono leading-7" data-reveal>
            nro_orden → fecha, placa<br/>
            placa → modelo, ced_cliente<br/>
            ced_cliente → nombre_cliente<br/>
            cod_servicio → nombre_servicio, precio_base
          </div>
        </div>
      `,
      notes: 'Teoría 3 (10 min). Antes de revelar las DF del taller, pedir que las propongan. Clasificación: nro_orden → fecha y cod_servicio → precio_base son parciales respecto de la clave (nro_orden, cod_servicio); placa → modelo es transitiva. Fuente: Elmasri §10.2.1, p. 291.'
    },
    {
      id: 'sql7-8',
      title: '1FN, 2FN y 3FN',
      contentHtml: `
        <div class="space-y-4">
          <div class="overflow-x-auto"><table class="w-full text-sm border">
            <thead class="bg-indigo-50"><tr><th class="p-2 border text-left">Forma</th><th class="p-2 border text-left">Condición</th><th class="p-2 border text-left">Se viola cuando…</th></tr></thead>
            <tbody>
              <tr><td class="p-2 border font-bold">1FN</td><td class="p-2 border">Cada atributo tiene un solo valor atómico</td><td class="p-2 border">Hay listas o grupos repetidos: telefonos = '0414-…, 0261-…'</td></tr>
              <tr><td class="p-2 border font-bold">2FN</td><td class="p-2 border">1FN y cada atributo no primo depende de <strong>toda</strong> la clave</td><td class="p-2 border">Hay una DF parcial (solo es posible con clave compuesta)</td></tr>
              <tr><td class="p-2 border font-bold">3FN</td><td class="p-2 border">2FN y ningún atributo no primo depende de otro atributo no primo</td><td class="p-2 border">Hay una DF transitiva</td></tr>
            </tbody>
          </table></div>
          <div class="bg-gradient-to-br from-slate-900 to-indigo-900 text-white p-5 rounded-2xl text-center">
            <p class="text-lg">Cada atributo depende <strong>de la clave</strong>, <strong>de toda la clave</strong> y <strong>de nada más que la clave</strong>.</p>
          </div>
          <p class="text-xs text-slate-500">Elmasri y Navathe, cap. 10, §10.3.</p>
        </div>
      `,
      notes: 'Teoría 4 (10 min con la diap. 9). La frase final es la regla mnemónica clásica atribuida a W. Kent. Insistir: las formas son acumulativas (3FN exige 2FN y 1FN).'
    },
    {
      id: 'sql7-9',
      title: 'Prueba de las tres preguntas',
      contentHtml: `
        <div class="space-y-5">
          <div data-diagram data-steps="P1 | P1>N1, N1 | P1>P2, P2 | P2>N2, N2 | P2>P3, P3 | P3>N3, N3 | P3>OK, OK" data-flow>
flowchart LR
  P1{"¿Valores atómicos?"} -->|sí| P2{"¿Todo depende de toda la clave?"}
  P2 -->|sí| P3{"¿Nada depende de un no clave?"}
  P3 -->|sí| OK["Está en 3FN"]
  P1 -->|no| N1["No está en 1FN"]
  P2 -->|no| N2["Está en 1FN, no en 2FN"]
  P3 -->|no| N3["Está en 2FN, no en 3FN"]
          </div>
          <div class="bg-sky-50 border border-sky-200 rounded-lg p-3 text-sm text-sky-900">Para justificar una respuesta, nombra la pregunta que falla y la dependencia que lo demuestra.</div>
        </div>
      `,
      notes: 'Dejar las tres preguntas escritas en una esquina de la pizarra durante toda la práctica (sugerencia didáctica 2).'
    },
    {
      id: 'sql7-10',
      title: 'Demostración 1 · claves y DF del taller',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-slate-600">Agregamos a la relación del taller un atributo más: <span class="font-mono">telefonos</span> del cliente, con valores como <span class="font-mono">'0414-1234567, 0261-7654321'</span>.</p>
          <ol class="space-y-3">
            <li class="bg-white border-l-4 border-indigo-500 rounded-xl p-3" data-reveal><strong>1. Clave candidata:</strong> (nro_orden, cod_servicio): una orden incluye varios servicios y un servicio aparece en varias órdenes.</li>
            <li class="bg-white border-l-4 border-indigo-500 rounded-xl p-3" data-reveal><strong>2. Atributos primos:</strong> nro_orden y cod_servicio. Todos los demás son no primos.</li>
            <li class="bg-white border-l-4 border-indigo-500 rounded-xl p-3" data-reveal><strong>3. DF:</strong> las cuatro de la diapositiva 7, más ced_cliente → telefonos.</li>
          </ol>
        </div>
      `,
      notes: 'Demostración (22 min en total con diap. 11 y 12). Pedir cada paso a un estudiante distinto antes de revelar.'
    },
    {
      id: 'sql7-11',
      title: 'Demostración 2 · dónde falla cada forma',
      contentHtml: `
        <div class="space-y-3">
          <div class="bg-rose-50 border border-rose-200 rounded-xl p-4" data-reveal><p class="font-bold text-rose-800">1FN ✗</p><p class="text-sm text-rose-950">telefonos guarda una lista. Los teléfonos pasan a una relación aparte: (ced_cliente, telefono).</p></div>
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4" data-reveal><p class="font-bold text-amber-800">2FN ✗</p><p class="text-sm text-amber-950">fecha y placa dependen solo de nro_orden; nombre_servicio y precio_base solo de cod_servicio. Son DF <strong>parciales</strong>.</p></div>
          <div class="bg-violet-50 border border-violet-200 rounded-xl p-4" data-reveal><p class="font-bold text-violet-800">3FN ✗</p><p class="text-sm text-violet-950">nro_orden → placa → modelo, ced_cliente y ced_cliente → nombre_cliente. Son DF <strong>transitivas</strong>.</p></div>
        </div>
      `,
      notes: 'Conclusión: la relación original no está ni en 1FN (por telefonos). Sin telefonos estaría en 1FN y fallaría 2FN.'
    },
    {
      id: 'sql7-12',
      title: 'Demostración 3 · vistazo al resultado',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-slate-600">Si cada hecho se guarda una sola vez, el taller queda en seis relaciones (la técnica para llegar aquí se trabaja la próxima semana):</p>
          <div class="grid md:grid-cols-3 gap-3 text-sm font-mono">
            <div class="bg-white border rounded-xl p-3">CLIENTE(<u>ced_cliente</u>, nombre_cliente)</div>
            <div class="bg-white border rounded-xl p-3">TELEFONO_CLIENTE(<u>ced_cliente, telefono</u>)</div>
            <div class="bg-white border rounded-xl p-3">VEHICULO(<u>placa</u>, modelo, ced_cliente)</div>
            <div class="bg-white border rounded-xl p-3">ORDEN(<u>nro_orden</u>, fecha, placa)</div>
            <div class="bg-white border rounded-xl p-3">SERVICIO(<u>cod_servicio</u>, nombre_servicio, precio_base)</div>
            <div class="bg-white border rounded-xl p-3">DETALLE_ORDEN(<u>nro_orden, cod_servicio</u>)</div>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-900" data-reveal>Vuelve a las tres anomalías de la diapositiva 5: ¿siguen ocurriendo? ¿Por qué?</div>
        </div>
      `,
      notes: 'Respuesta: ninguna ocurre; el servicio S4 se inserta en SERVICIO sin orden, el precio está una sola vez y borrar la orden 102 no borra al cliente. No desarrollar la descomposición: es contenido de S8.'
    },
    {
      id: 'sql7-13',
      title: 'Práctica guiada · consulta veterinaria',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 text-sm font-mono">consulta_veterinaria(nro_consulta, fecha, id_mascota, nombre_mascota, especie, ced_dueno, nombre_dueno, cod_vet, nombre_vet)</div>
          <div class="bg-sky-50 border border-sky-200 rounded-lg p-3 text-sm text-sky-900"><strong>Reglas:</strong> cada consulta es de una mascota y la atiende un veterinario; cada mascota tiene un solo dueño registrado.</div>
          <p class="font-bold text-slate-800">En parejas, en el cuaderno:</p>
          <ol class="list-decimal list-inside text-slate-700 space-y-1">
            <li>Clave candidata.</li>
            <li>Cuatro dependencias funcionales.</li>
            <li>¿Está en 2FN? ¿Por qué?</li>
            <li>¿Qué dependencias violan la 3FN?</li>
            <li>Una anomalía con un ejemplo concreto.</li>
          </ol>
        </div>
      `,
      notes: 'Práctica guiada (20 min; plenaria a los 12). Respuestas: (1) nro_consulta. (2) nro_consulta → fecha, id_mascota, cod_vet; id_mascota → nombre_mascota, especie, ced_dueno; ced_dueno → nombre_dueno; cod_vet → nombre_vet. (3) Sí: con clave simple no puede haber DF parcial, así que 1FN implica 2FN. (4) Transitivas: nro_consulta → id_mascota → nombre_mascota, especie, ced_dueno → nombre_dueno; nro_consulta → cod_vet → nombre_vet. (5) Borrar la única consulta de un veterinario pierde su nombre; cambiar el nombre del dueño exige modificar todas sus consultas. Contraejemplo sugerido: proponer la DF falsa especie → ced_dueno y pedir que la refuten con una fila inventada.'
    },
    {
      id: 'sql7-14',
      title: 'Ficha individual · relación A',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-emerald-600 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-emerald-100">Ficha de trabajo individual · formativa</p><p class="mt-1">Resuelve en tu cuaderno o en una hoja propia. Para cada relación responde:</p></div>
          <ol class="list-decimal list-inside text-slate-800 space-y-1 text-sm">
            <li>Clave candidata.</li>
            <li>Al menos tres dependencias funcionales.</li>
            <li>Una anomalía, con un ejemplo de fila.</li>
            <li>Forma normal más alta que cumple, justificada con la pregunta que falla.</li>
          </ol>
          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 text-sm font-mono"><p class="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Relación A</p>turno_guardia(ced_empleado, fecha_turno, nombre_empleado, cod_area, nombre_area, horas)</div>
          <div class="bg-sky-50 border border-sky-200 rounded-lg p-3 text-sm text-sky-900"><strong>Reglas:</strong> un empleado cumple como máximo un turno por día; en cada turno se le asigna un área; cada área tiene un nombre.</div>
        </div>
      `,
      notes: 'Ficha (30 min con la diap. 15; avisos a 15 y 5 min). Clave A: (1) (ced_empleado, fecha_turno). (2) ced_empleado → nombre_empleado (parcial); (ced_empleado, fecha_turno) → cod_area, horas (completa); cod_area → nombre_area (transitiva). (3) Un área nueva sin turnos no se puede registrar; cambiar el nombre de un empleado obliga a modificar todas sus filas. (4) Está en 1FN y no en 2FN por la DF parcial (también tiene una transitiva). Criterios formativos: INSTRUMENTOS-FORMATIVOS-0pct.md, fila S7.'
    },
    {
      id: 'sql7-15',
      title: 'Ficha individual · relación B',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 text-sm font-mono"><p class="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Relación B</p>proyecto_ti(cod_proyecto, nombre_proyecto, ced_lider, nombre_lider, tecnologias)</div>
          <div class="bg-white border rounded-xl p-3 text-sm"><strong>Ejemplo de tupla:</strong> <span class="font-mono">(P07, 'Portal de citas', V-555, 'Luis Rey', 'SQL, Python, React')</span></div>
          <div class="bg-sky-50 border border-sky-200 rounded-lg p-3 text-sm text-sky-900"><strong>Reglas:</strong> cada proyecto tiene un solo líder; un líder puede dirigir varios proyectos.</div>
          <p class="text-sm text-slate-600">Responde las mismas cuatro preguntas de la relación A.</p>
        </div>
      `,
      notes: 'Clave B: (1) cod_proyecto. (2) cod_proyecto → nombre_proyecto, ced_lider; ced_lider → nombre_lider; tecnologias es multivalor. (3) Cambiar el nombre de un líder con tres proyectos exige tres modificaciones; borrar el único proyecto de un líder lo elimina. (4) No está en 1FN (tecnologias no es atómico). Separadas las tecnologías quedaría en 2FN (clave simple) y fallaría 3FN por cod_proyecto → ced_lider → nombre_lider.'
    },
    {
      id: 'sql7-16',
      title: 'Plenaria',
      contentHtml: `
        <div class="space-y-5">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white border rounded-2xl p-5"><p class="font-bold text-slate-900">Relación A</p><ul class="list-disc list-inside text-sm text-slate-700 mt-2 space-y-1"><li>¿Qué parte de la clave determina nombre_empleado?</li><li>¿Qué atributo no clave determina a otro?</li></ul></div>
            <div class="bg-white border rounded-2xl p-5"><p class="font-bold text-slate-900">Relación B</p><ul class="list-disc list-inside text-sm text-slate-700 mt-2 space-y-1"><li>¿Por qué tecnologias impide la 1FN?</li><li>¿Puede esta relación violar la 2FN? ¿Por qué?</li></ul></div>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-900">Al responder, nombra la pregunta que falla y la dependencia que lo demuestra.</div>
        </div>
      `,
      notes: 'Plenaria (8 min). Una pregunta a estudiantes distintos; el resto vota de acuerdo / en desacuerdo con la mano. Anotar los 2–3 errores más frecuentes para abrir la S8.'
    },
    {
      id: 'sql7-17',
      title: 'Comprobación rápida',
      contentHtml: `
        <div class="space-y-3">
          <div data-quiz class="bg-white border rounded-xl p-4 space-y-2">
            <p class="font-semibold">Una relación en 1FN tiene clave primaria simple. Entonces…</p>
            <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">puede violar la 2FN por una DF parcial</button>
            <button data-option data-correct class="block w-full text-left border rounded-lg p-2 text-sm">está en 2FN, aunque puede violar la 3FN</button>
            <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">está necesariamente en 3FN</button>
            <p data-explain class="text-sm text-slate-600">Sin clave compuesta no hay «parte de la clave», así que no hay DF parcial; las transitivas siguen siendo posibles.</p>
          </div>
          <div data-quiz class="bg-white border rounded-xl p-4 space-y-2">
            <p class="font-semibold">En cuatro filas de ejemplo, todos los clientes de Maracaibo tienen el mismo vendedor. ¿Se concluye ciudad → vendedor?</p>
            <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">Sí, los datos lo demuestran</button>
            <button data-option data-correct class="block w-full text-left border rounded-lg p-2 text-sm">No: una DF sale de las reglas del negocio</button>
            <p data-explain class="text-sm text-slate-600">Los datos pueden refutar una DF, pero no demostrarla.</p>
          </div>
          <div data-quiz class="bg-white border rounded-xl p-4 space-y-2">
            <p class="font-semibold">clave → A y A → B, con A y B no primos. ¿Qué forma normal se viola?</p>
            <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">1FN</button>
            <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">2FN</button>
            <button data-option data-correct class="block w-full text-left border rounded-lg p-2 text-sm">3FN</button>
            <p data-explain class="text-sm text-slate-600">Es una dependencia transitiva.</p>
          </div>
        </div>
      `,
      notes: 'Cierre (5 min con la diap. 18). Votación a mano alzada antes de revelar cada respuesta.'
    },
    {
      id: 'sql7-18',
      title: 'Cierre y próximas semanas',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-gradient-to-br from-slate-900 to-indigo-900 text-white p-6 rounded-2xl">
            <p class="text-xs uppercase tracking-widest font-bold text-indigo-300">Ticket de salida</p>
            <p class="text-xl font-bold mt-2">Escribe una dependencia transitiva de una relación de tu vida diaria.</p>
          </div>
          <div class="space-y-3">
            <div class="flex gap-4 bg-white border-l-4 border-sky-500 rounded-xl p-4"><span class="font-bold text-sky-600">S8</span><p class="text-slate-800"><strong>Jueves 12/11:</strong> caso cooperativo: comparar descomposiciones y producir un esquema relacional hasta 3FN.</p></div>
            <div class="flex gap-4 bg-white border-l-4 border-rose-500 rounded-xl p-4"><span class="font-bold text-rose-600">S9</span><p class="text-slate-800"><strong>Taller individual de normalización hasta 3FN</strong>, para resolver en casa · <strong>10 %</strong> del Corte II. Fecha y medio de entrega por confirmar.</p></div>
          </div>
        </div>
      `,
      notes: 'Fecha del taller S9 según PGA: jueves 19/11/2026 (en pantalla se deja por confirmar, regla de cátedra 3quater). Medio de entrega por confirmar (no SAIA). Pendiente del docente: reubicar transacciones, roles, funciones almacenadas y excepciones (PGA S6).'
    },
    {
      id: 'sql7-19',
      title: 'Fuentes',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-slate-50 border border-slate-200 rounded-2xl p-5">
            <p class="font-bold text-slate-900">Para ampliar</p>
            <ul class="list-disc list-inside text-sm text-slate-700 mt-3 space-y-2">
              <li><strong>Elmasri, R. y Navathe, S.</strong> <em>Fundamentos de sistemas de bases de datos</em> (5.ª ed.). Pearson. Cap. 10: dependencias funcionales y normalización, §10.1–10.3.</li>
              <li><strong>Sánchez, J. J.</strong> <em>Bases de Datos</em> (curso en línea, CC BY-NC-SA 4.0). josejuansanchez.org/bd</li>
              <li><strong>Silberschatz, A., Korth, H. y Sudarshan, S.</strong> <em>Fundamentos de bases de datos</em>. McGraw-Hill.</li>
            </ul>
          </div>
          <p class="text-xs text-slate-400 text-center">Material adaptado con fines docentes; se citan las fuentes originales. Casos y datos sintéticos.</p>
        </div>
      `
    }
  ],
  tasks: [{
    id: 'sql7-t1',
    title: 'Ficha individual: claves, dependencias y formas normales',
    description: 'Ficha de trabajo individual en clase sobre las relaciones turno_guardia y proyecto_ti: clave candidata, dependencias funcionales, anomalía y forma normal más alta. Se resuelve en el cuaderno.',
    items: ['Relación A: cuatro respuestas', 'Relación B: cuatro respuestas'],
    due: '2026-11-05',
    corte: 2,
    weight: '0 % (formativa)',
    kind: 'tarea',
    slideId: 'sql7-14',
  }],
};
