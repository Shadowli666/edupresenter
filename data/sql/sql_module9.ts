import { Module } from '../../types';

export const SQL_MODULE_9: Module = {
  id: 'sql-mod-9',
  title: '9. Repaso activo y taller de normalización',
  description:
    'Semana 9: recuperación de las tres condiciones de una descomposición sin volver a explicarlas, procedimiento de seis pasos con dos pruebas manuales (propiedad NJB y reparto de filas), entrenamiento con la relación ferretería y asignación del taller individual de normalización del 10 %.',
  evaluation: '10% — Taller individual de normalización',
  slides: [
    {
      id: 'sql9-1',
      title: 'Semana 9 · Repaso activo y taller de normalización',
      contentHtml: `
        <div class="space-y-7">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-4xl shadow-lg">🧩</div>
            <div>
              <p class="text-sm uppercase tracking-widest font-bold text-indigo-700">Electiva II (Programación en SQL) · Unidad III</p>
              <h2 class="text-3xl md:text-4xl font-bold text-slate-900">Repaso activo y taller de normalización</h2>
              <p class="text-slate-500 mt-1">Seis pasos y dos pruebas manuales</p>
            </div>
          </div>
          <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-5 text-indigo-950">
            <p class="text-lg"><strong>Objetivo:</strong> resolver problemas de diseño en una base de datos existente mediante normalización.</p>
          </div>
          <p class="text-sm text-slate-500">Jueves 19/11/2026 · 14:30–16:45 · Aula A-01 · Sección A · IUPSM — Extensión Ciudad Ojeda</p>
        </div>
      `,
      notes: 'Construye hacia: taller individual del 10 % (se asigna hoy) y práctica-proyecto del 20 % del 03/12. Sin laboratorio: toda la verificación es manual, en el cuaderno.'
    },
    {
      id: 'sql9-2',
      title: 'Ruta de hoy',
      contentHtml: `
        <div class="space-y-5">
          <p class="text-slate-600 text-lg">Hoy no hay teoría nueva: se recupera lo de las semanas 7 y 8, se convierte en <strong>procedimiento</strong> y se entrena una vez antes del taller.</p>
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div class="bg-indigo-50 border border-indigo-200 rounded-2xl p-4">
              <p class="text-xs uppercase tracking-wider font-bold text-indigo-700">Repaso activo · 20 min</p>
              <p class="text-indigo-950 mt-1">Tres preguntas sobre las tres condiciones y el teorema de Heath.</p>
            </div>
            <div class="bg-white border border-slate-200 rounded-2xl p-4">
              <p class="text-xs uppercase tracking-wider font-bold text-slate-700">Seis pasos · 15 min</p>
              <p class="text-slate-800 mt-1">El procedimiento que se califica en el taller y las dos pruebas manuales.</p>
            </div>
            <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
              <p class="text-xs uppercase tracking-wider font-bold text-emerald-700">Entrenamiento · 60 min</p>
              <p class="text-emerald-950 mt-1">Relación de ferretería: en parejas y luego individual, en el cuaderno.</p>
            </div>
            <div class="bg-rose-50 border border-rose-200 rounded-2xl p-4">
              <p class="text-xs uppercase tracking-wider font-bold text-rose-700">Taller del 10 % · 20 min</p>
              <p class="text-rose-950 mt-1">Relación, entregables, escala y condiciones de entrega.</p>
            </div>
          </div>
          <p class="text-sm text-slate-600">La relación del taller no se resuelve en clase: el entrenamiento usa otra relación.</p>
        </div>
      `,
      notes: 'Tiempos reales: inicio 6, repaso 20, pasos y pruebas 15, entrenamiento 60 (20 en parejas, 25 individual y 15 de corrección guiada), taller 20, cierre 14. Total 135 min.'
    },
    {
      id: 'sql9-3',
      title: 'Recuperación · tres preguntas',
      contentHtml: `
        <div class="space-y-4">
          <div data-quiz class="bg-white border-l-4 border-indigo-600 rounded-xl p-4">
            <p class="font-bold text-slate-900">1 · Se parte <code>R(A, B, C)</code> con <code>A → B</code> en <code>R₁(A, B)</code> y <code>R₂(A, C)</code>. ¿Qué se puede afirmar?</p>
            <button data-option>Se pierden filas al recomponer</button>
            <button data-option data-correct>Es sin pérdida: la intersección <code>A</code> es clave de <code>R₁</code></button>
            <button data-option>Se pierde la dependencia <code>A → B</code></button>
            <p data-explain class="text-sm text-slate-600 mt-2">La intersección es clave de una de las dos partes: propiedad NJB.</p>
          </div>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <p class="font-bold text-slate-900">2 · ¿Cuáles son las tres condiciones de una descomposición válida?</p>
              <p class="text-slate-600 mt-1">Respondan en una línea, sin mirar los apuntes.</p>
            </div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <p class="font-bold text-slate-900">3 · Si cada tabla del esquema está en 3FN, ¿el esquema es correcto?</p>
              <p class="text-slate-600 mt-1">Justifiquen con un caso concreto.</p>
            </div>
          </div>
          <p class="text-sm text-slate-600">Se responden de viva voz; no se vuelve a explicar el tema.</p>
        </div>
      `,
      notes: 'Respuestas: 1 es la segunda opción. 2 conservación de atributos, reunión sin pérdida y conservación de dependencias. 3 no: EMP_LOCS está en BCNF y produce tuplas falsas al recomponer con EMP_PROY; la forma normal se juzga sobre el conjunto de relaciones. Si la respuesta 2 llega incompleta, se completa con la pregunta y se pasa a la tabla siguiente.'
    },
    {
      id: 'sql9-4',
      title: 'Mini-tabla de decisión',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-slate-700">Las tres condiciones se convierten en <strong>tres preguntas</strong> y <strong>tres pruebas manuales</strong>. Esta tabla queda en la pizarra toda la clase.</p>
          <table class="w-full text-sm border-collapse">
            <thead><tr class="bg-indigo-700 text-white"><th class="p-2 border text-left">Condición</th><th class="p-2 border text-left">Pregunta que se hace</th><th class="p-2 border text-left">Prueba manual</th></tr></thead>
            <tbody>
              <tr data-reveal><td class="p-2 border font-bold">Atributos</td><td class="p-2 border">¿Cada atributo de la relación original aparece en alguna tabla?</td><td class="p-2 border">Tachar la lista de atributos, uno por uno</td></tr>
              <tr data-reveal><td class="p-2 border font-bold">Reunión sin pérdida</td><td class="p-2 border">¿La intersección de cada corte es clave de al menos una de las dos partes?</td><td class="p-2 border">NJB corte por corte y reparto de filas con los datos</td></tr>
              <tr data-reveal><td class="p-2 border font-bold">Dependencias</td><td class="p-2 border">¿Cada DF de la lista cabe completa en alguna tabla?</td><td class="p-2 border">Recorrer la lista de DF y marcar dónde vive cada una</td></tr>
            </tbody>
          </table>
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-950">
            Sin pérdida <strong>no</strong> es lo mismo que bien normalizado: un esquema puede reunirse exactamente y seguir repitiendo un dato.
          </div>
        </div>
      `,
      notes: 'Se completa con las respuestas de los estudiantes, no se dicta. La advertencia final se dice una sola vez y se retoma al cerrar el paso 5 del entrenamiento.'
    },
    {
      id: 'sql9-5',
      title: 'Los seis pasos del taller',
      contentHtml: `
        <div class="space-y-4">
          <ol class="space-y-2 text-sm">
            <li data-reveal class="bg-white border border-slate-200 rounded-xl p-3"><strong>0 · Preparar</strong> — los atributos multivaluados salen a una tabla aparte; la relación se enuncia ya en 1FN.</li>
            <li data-reveal class="bg-white border border-slate-200 rounded-xl p-3"><strong>1 · Clave</strong> — una sola clave candidata, mínima, con una línea que justifique por qué ningún atributo sobra.</li>
            <li data-reveal class="bg-white border border-slate-200 rounded-xl p-3"><strong>2 · Dependencias</strong> — las DF salen de las reglas del negocio; se añade una DF que no se cumple y la fila que la refuta.</li>
            <li data-reveal class="bg-white border border-slate-200 rounded-xl p-3"><strong>3 · Diagnóstico</strong> — 1FN, 2FN y 3FN: qué DF concreta se viola y en qué fila se ve.</li>
            <li data-reveal class="bg-white border border-slate-200 rounded-xl p-3"><strong>4 · Descomposición</strong> — los cortes en orden, y al final el esquema con PK subrayada y FK con flecha.</li>
            <li data-reveal class="bg-white border border-slate-200 rounded-xl p-3"><strong>5 · Verificación</strong> — tres líneas: atributos, reunión con datos y dependencias.</li>
          </ol>
          <div class="bg-indigo-50 border border-indigo-300 rounded-xl p-4 text-sm text-indigo-950">
            <strong>Orden de los cortes:</strong> primero las tablas de catálogo, dejando su clave en la tabla de hechos; al final, la tabla de hechos se parte en cabecera y detalle.
          </div>
        </div>
      `,
      notes: 'Cada casilla de la plantilla es un criterio observable del taller; el orden de las casillas es el orden del procedimiento. El orden de los cortes es un error de procedimiento, no de concepto: se detecta mirando el orden de la hoja.'
    },
    {
      id: 'sql9-6',
      title: 'Prueba manual 1 · propiedad NJB',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-slate-900 to-indigo-900 text-white p-6 rounded-2xl">
            <p class="text-xs uppercase tracking-widest font-bold text-indigo-300">Prueba estructural</p>
            <p class="text-xl md:text-2xl font-bold mt-2 leading-snug">Un corte es sin pérdida si la intersección de las dos partes es clave de al menos una de ellas.</p>
          </div>
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
              <p class="font-bold text-emerald-950">Corte que se sostiene</p>
              <p class="mt-1 text-emerald-900"><code>R₁(A, B)</code> y <code>R₂(A, C)</code> con <code>A → B</code>: la intersección <code>A</code> es clave de <code>R₁</code>.</p>
            </div>
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-4">
              <p class="font-bold text-rose-950">Corte que no se sostiene</p>
              <p class="mt-1 text-rose-900">Intersección que no es clave de ninguna parte: al recomponer aparecen tuplas que no existían.</p>
            </div>
          </div>
          <p class="text-sm text-slate-600">Se verifica <strong>corte por corte</strong>: si cada corte lo cumple, el conjunto final también (Afirmación 2 de Elmasri). Así no hace falta aplicar la matriz completa del algoritmo.</p>
        </div>
      `,
      notes: 'Fuente: Elmasri y Navathe, §11.1.4, propiedad NJB (p. 322) y Afirmación 2 (§11.1.5). Insistir en que la prueba es sobre la intersección, no sobre si las tablas comparten algún atributo.'
    },
    {
      id: 'sql9-7',
      title: 'Prueba manual 2 · reparto de filas',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-slate-700">La prueba que se escribe en el cuaderno: se toma <strong>una fila</strong>, se reparte en las tablas, se vuelve a unir y se cuenta.</p>
          <div class="grid md:grid-cols-3 gap-3 text-sm text-center">
            <div class="bg-white border border-slate-200 rounded-xl p-4"><p class="text-xs uppercase font-bold text-slate-500">Relación original</p><p class="text-3xl font-bold text-slate-900 mt-1">5</p><p class="text-slate-600">filas</p></div>
            <div class="bg-indigo-50 border border-indigo-300 rounded-xl p-4"><p class="text-xs uppercase font-bold text-indigo-700">Repartir y reunir</p><p class="text-3xl font-bold text-indigo-900 mt-1">JOIN</p><p class="text-indigo-800">por las claves de cada corte</p></div>
            <div class="bg-emerald-50 border border-emerald-300 rounded-xl p-4"><p class="text-xs uppercase font-bold text-emerald-700">Resultado</p><p class="text-3xl font-bold text-emerald-900 mt-1">5</p><p class="text-emerald-800">las mismas filas</p></div>
          </div>
          <div class="bg-white border rounded-xl p-4 text-sm">
            <p class="font-bold text-slate-900">Cómo se escribe en la hoja</p>
            <p class="mt-1 font-mono text-xs bg-slate-100 rounded p-2">filas originales 5 / filas al reunir 5 → sin pérdida: sí</p>
            <p class="text-slate-600 mt-2">Si el conteo sube, alguna intersección no era clave y el corte inventó combinaciones.</p>
          </div>
          <p class="text-sm text-slate-600">Ejemplo trabajado: los cortes por catálogo de la relación de farmacia, con sus cinco tuplas.</p>
        </div>
      `,
      notes: 'El ejemplo de farmacia está en la investigación de la semana 9; la relación del taller no se usa para esto. La fila del conteo es la que se califica en el criterio de verificación: no basta escribir «sí».'
    },
    {
      id: 'sql9-8',
      title: 'El corte que pierde información · 5 se vuelven 15',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-slate-700">Se enuncia el corte completo: <code>R₁</code> = la relación completa <strong>sin</strong> <code>cod_medicamento</code> ni <code>cod_laboratorio</code>; <code>R₂</code> = <code>(cod_medicamento, cod_laboratorio)</code>. La intersección queda <strong>vacía</strong>: no puede ser clave de ninguna de las dos partes.</p>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white border-2 border-rose-300 rounded-2xl p-5 text-center">
              <p class="text-xs uppercase font-bold text-rose-700">Al recomponer</p>
              <p class="text-2xl font-bold text-rose-900 mt-2">5 × 3 = 15</p>
              <p class="text-sm text-rose-800 mt-1">tuplas que nunca existieron</p>
            </div>
            <div class="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-sm">
              <p class="font-bold text-slate-900">Por qué se multiplica</p>
              <p class="text-slate-700 mt-1">Cada una de las cinco tuplas se combina con las tres que no le corresponden: no hay clave común que limite la unión.</p>
            </div>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-950">
            <strong>La señal en la hoja:</strong> el esquema «se ve bien», pero la reunión devuelve más filas que la relación original. Se detecta con la prueba 2, no mirando las tablas.
          </div>
        </div>
      `,
      notes: 'Dato comprobado sobre las cinco tuplas de la relación de farmacia (investigación de la semana 9): 5 filas de R1 × 3 pares de R2 = 15. Si R1 conservara cod_medicamento, el corte sería incluso sin pérdida (cod_medicamento → cod_laboratorio); por eso el corte se enuncia completo antes de contar. El conteo convence más que la definición: escribir 5 y 15 en la pizarra, uno al lado del otro.'
    },
    {
      id: 'sql9-9',
      title: 'Entrenamiento · la relación de partida',
      contentHtml: `
        <div class="space-y-3">
          <div class="bg-indigo-50 border border-indigo-300 rounded-xl p-4 font-mono text-xs md:text-sm leading-relaxed text-indigo-950">
nota_entrega(nro_nota, fecha, rif_cliente, razon_social, telefono_cliente,
             cod_articulo, nombre_articulo, unidad_medida, precio_lista,
             cod_proveedor, nombre_proveedor, ciudad_proveedor,
             cantidad, cod_vendedor, nombre_vendedor)
          </div>
          <div class="bg-white border rounded-xl p-4 text-sm text-slate-700">
            <p class="font-bold text-slate-900 mb-1">Reglas del negocio</p>
            <ul class="space-y-1 list-disc list-inside">
              <li data-reveal>Cada nota la hace un cliente y la atiende un vendedor; una nota incluye varios artículos.</li>
              <li data-reveal>Cada cliente tiene una razón social y un teléfono.</li>
              <li data-reveal>Cada artículo tiene nombre, unidad de medida y un precio de lista, y lo suministra un proveedor.</li>
              <li data-reveal>Cada proveedor tiene nombre y ciudad. La cantidad es de la línea.</li>
            </ul>
          </div>
          <p class="text-sm text-slate-600">Se copia en el cuaderno: copiar la relación y las reglas es parte del ejercicio.</p>
        </div>
      `,
      notes: 'Relación de entrenamiento (ferretería), distinta de la del taller. La copia a mano obliga a leer los atributos y evita analizar una tabla que no se ha entendido.'
    },
    {
      id: 'sql9-10',
      title: 'Entrenamiento · datos de la relación',
      contentHtml: `
        <div class="space-y-3">
          <table class="w-full text-[11px] border-collapse">
            <thead><tr class="bg-slate-700 text-white"><th class="p-1 border text-left">Atributo</th><th class="p-1 border">t1</th><th class="p-1 border">t2</th><th class="p-1 border">t3</th><th class="p-1 border">t4</th><th class="p-1 border">t5</th></tr></thead>
            <tbody>
              <tr><td class="p-1 border font-mono">nro_nota</td><td class="p-1 border">N-2001</td><td class="p-1 border">N-2001</td><td class="p-1 border">N-2002</td><td class="p-1 border">N-2003</td><td class="p-1 border">N-2003</td></tr>
              <tr><td class="p-1 border font-mono">fecha</td><td class="p-1 border">09/11/2026</td><td class="p-1 border">09/11/2026</td><td class="p-1 border">09/11/2026</td><td class="p-1 border">10/11/2026</td><td class="p-1 border">10/11/2026</td></tr>
              <tr><td class="p-1 border font-mono">rif_cliente</td><td class="p-1 border">J-30555444-1</td><td class="p-1 border">J-30555444-1</td><td class="p-1 border">J-30777888-9</td><td class="p-1 border">J-30555444-1</td><td class="p-1 border">J-30555444-1</td></tr>
              <tr><td class="p-1 border font-mono">razon_social</td><td class="p-1 border">Ferretería El Tornillo</td><td class="p-1 border">Ferretería El Tornillo</td><td class="p-1 border">Construcciones Mara</td><td class="p-1 border">Ferretería El Tornillo</td><td class="p-1 border">Ferretería El Tornillo</td></tr>
              <tr><td class="p-1 border font-mono">telefono_cliente</td><td class="p-1 border">0261-5551234</td><td class="p-1 border">0261-5551234</td><td class="p-1 border">0424-3332211</td><td class="p-1 border">0261-5551234</td><td class="p-1 border">0261-5551234</td></tr>
              <tr><td class="p-1 border font-mono">cod_articulo</td><td class="p-1 border">A-101</td><td class="p-1 border">A-205</td><td class="p-1 border">A-101</td><td class="p-1 border">A-310</td><td class="p-1 border">A-205</td></tr>
              <tr><td class="p-1 border font-mono">nombre_articulo</td><td class="p-1 border">Tornillo 1"</td><td class="p-1 border">Disco de corte</td><td class="p-1 border">Tornillo 1"</td><td class="p-1 border">Taladro 600 W</td><td class="p-1 border">Disco de corte</td></tr>
              <tr><td class="p-1 border font-mono">unidad_medida</td><td class="p-1 border">Caja x 100</td><td class="p-1 border">Unidad</td><td class="p-1 border">Caja x 100</td><td class="p-1 border">Unidad</td><td class="p-1 border">Unidad</td></tr>
              <tr><td class="p-1 border font-mono">precio_lista</td><td class="p-1 border">4,20</td><td class="p-1 border">1,80</td><td class="p-1 border">4,20</td><td class="p-1 border">38,00</td><td class="p-1 border">1,80</td></tr>
              <tr><td class="p-1 border font-mono">cod_proveedor</td><td class="p-1 border">P-11</td><td class="p-1 border">P-14</td><td class="p-1 border">P-11</td><td class="p-1 border">P-18</td><td class="p-1 border">P-14</td></tr>
              <tr><td class="p-1 border font-mono">nombre_proveedor</td><td class="p-1 border">Aceros Zulia</td><td class="p-1 border">Ferramentas Lara</td><td class="p-1 border">Aceros Zulia</td><td class="p-1 border">Importadora Andina</td><td class="p-1 border">Ferramentas Lara</td></tr>
              <tr><td class="p-1 border font-mono">ciudad_proveedor</td><td class="p-1 border">Maracaibo</td><td class="p-1 border">Barquisimeto</td><td class="p-1 border">Maracaibo</td><td class="p-1 border">Caracas</td><td class="p-1 border">Barquisimeto</td></tr>
              <tr><td class="p-1 border font-mono">cantidad</td><td class="p-1 border">10</td><td class="p-1 border">25</td><td class="p-1 border">6</td><td class="p-1 border">2</td><td class="p-1 border">4</td></tr>
              <tr><td class="p-1 border font-mono">cod_vendedor</td><td class="p-1 border">V-02</td><td class="p-1 border">V-02</td><td class="p-1 border">V-03</td><td class="p-1 border">V-02</td><td class="p-1 border">V-02</td></tr>
              <tr><td class="p-1 border font-mono">nombre_vendedor</td><td class="p-1 border">Ana Colina</td><td class="p-1 border">Ana Colina</td><td class="p-1 border">Pedro Nava</td><td class="p-1 border">Ana Colina</td><td class="p-1 border">Ana Colina</td></tr>
            </tbody>
          </table>
          <p class="text-xs text-slate-500">Datos sintéticos con formato venezolano; no corresponden a personas ni empresas reales. Se copian en el cuaderno antes de empezar.</p>
        </div>
      `,
      notes: 'Las cinco tuplas son las de la investigación de la semana 9. Se proyectan mientras los estudiantes copian; el docente no las comenta: la lectura de los datos es parte del paso 0 y del paso 3. Si falta tiempo, se copian solo nro_nota, cod_articulo, precio_lista, cantidad y las columnas de catálogo.'
    },
    {
      id: 'sql9-11',
      title: 'Pasos 0 a 3 · en parejas',
      contentHtml: `
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <p class="text-sm uppercase tracking-widest font-bold text-indigo-700">Plantilla · se copia en el cuaderno</p>
            <span class="text-sm font-bold bg-indigo-600 text-white rounded-full px-3 py-1">20 min</span>
          </div>
          <div class="space-y-2 text-sm">
            <div class="bg-white border border-slate-300 rounded-xl p-3">
              <p class="font-bold text-slate-900">Paso 0 · Atributos multivaluados</p>
              <p class="text-slate-500">¿Hay listas en alguna celda? Si las hay: tabla aparte con ______________________</p>
            </div>
            <div class="bg-white border border-slate-300 rounded-xl p-3">
              <p class="font-bold text-slate-900">Paso 1 · Clave candidata</p>
              <p class="text-slate-500">( ______ , ______ ) — ¿por qué es mínima? ______________________________</p>
            </div>
            <div class="bg-white border border-slate-300 rounded-xl p-3">
              <p class="font-bold text-slate-900">Paso 2 · Dependencias funcionales</p>
              <p class="text-slate-500">DF1: ______ → ______ · DF2: ______ → ______ · DF3: ______ → ______</p>
              <p class="text-slate-500">Una DF que no se cumple y la fila que la refuta: ______________________</p>
            </div>
            <div class="bg-white border border-slate-300 rounded-xl p-3">
              <p class="font-bold text-slate-900">Paso 3 · Diagnóstico</p>
              <p class="text-slate-500">1FN cumple / no cumple porque ______ · 2FN ______ · 3FN ______ (nombre la DF y la fila)</p>
            </div>
          </div>
          <p class="text-sm text-slate-600">En parejas: uno escribe y el otro audita la notación. Todavía no se descompone.</p>
        </div>
      `,
      notes: 'El compañero audita con la mini-tabla de decisión. Pista que se escribe en la pizarra a los 12 min para quien esté trabado: «quite un atributo a su clave y diga qué deja de determinarse». No se dicta la clave.'
    },
    {
      id: 'sql9-12',
      title: 'Pasos 4 y 5 · individual',
      contentHtml: `
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <p class="text-sm uppercase tracking-widest font-bold text-indigo-700">La misma plantilla, en individual</p>
            <span class="text-sm font-bold bg-indigo-600 text-white rounded-full px-3 py-1">25 min</span>
          </div>
          <div class="space-y-2 text-sm">
            <div class="bg-white border border-slate-300 rounded-xl p-3">
              <p class="font-bold text-slate-900">Paso 4 · Descomposición (cortes en orden)</p>
              <p class="text-slate-500">Corte 1: R → ______(______) + ______(______) — intersección: ______ · ¿clave de alguna parte? sí / no</p>
              <p class="text-slate-500">Corte 2: … · Esquema final: TABLA( PK subrayada , atributos, FK → TABLA )</p>
            </div>
            <div class="bg-white border border-slate-300 rounded-xl p-3">
              <p class="font-bold text-slate-900">Paso 5 · Verificación</p>
              <p class="text-slate-500">(a) atributos: ____ de ____ colocados</p>
              <p class="text-slate-500">(b) reunión: filas originales ____ / filas al reunir ____ → sin pérdida: sí / no</p>
              <p class="text-slate-500">(c) dependencias: ____ de ____ DF viven completas en una tabla</p>
            </div>
            <div class="bg-white border border-slate-300 rounded-xl p-3">
              <p class="font-bold text-slate-900">Consulta de control</p>
              <p class="text-slate-500">Escriban el SELECT que devuelve el total por nota sobre el esquema final. Se escribe a mano, no se ejecuta.</p>
            </div>
          </div>
          <p class="text-sm text-slate-600">Al terminar, apliquen la lista de comprobación de la diapositiva de cierre.</p>
        </div>
      `,
      notes: 'El paso 4 exige el orden de los cortes: catálogos primero, cabecera y detalle al final. El paso 5 se escribe con números, no con «sí»: es lo que se califica. La consulta se revisa en la corrección guiada.'
    },
    {
      id: 'sql9-13',
      title: 'Corrección guiada · clave y dependencias',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-slate-700">Se corrige <strong>por pasos</strong>, no por hojas. Tres puntos de control, en este orden:</p>
          <div class="space-y-2 text-sm">
            <div data-reveal class="bg-white border-l-4 border-indigo-600 rounded-xl p-3">
              <p class="font-bold text-slate-900">1 · La clave: una y mínima</p>
              <p class="text-slate-600 mt-1">Si sobra un atributo, la prueba es quitarlo y decir qué deja de determinarse. Una superclave cómoda no es una clave.</p>
            </div>
            <div data-reveal class="bg-white border-l-4 border-indigo-600 rounded-xl p-3">
              <p class="font-bold text-slate-900">2 · Las dependencias: de las reglas, no de las filas</p>
              <p class="text-slate-600 mt-1">Se cuenta cuántas DF permiten las reglas. Una DF que solo se apoya en que las cinco filas coinciden no es una DF.</p>
            </div>
            <div data-reveal class="bg-white border-l-4 border-indigo-600 rounded-xl p-3">
              <p class="font-bold text-slate-900">3 · El diagnóstico: la DF y la fila</p>
              <p class="text-slate-600 mt-1">«No cumple 2FN» sin nombrar la dependencia parcial ni la fila donde se ve no es un diagnóstico.</p>
            </div>
          </div>
          <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-4 text-sm text-indigo-950">
            Los tres errores se anotan en la pizarra tal como aparecieron en las hojas: son los mismos que se califican en el taller.
          </div>
        </div>
      `,
      notes: 'Solución del entrenamiento, solo docente: clave (nro_nota, cod_articulo). DF: nro_nota → fecha, rif_cliente, cod_vendedor; rif_cliente → razon_social, telefono_cliente; cod_articulo → nombre_articulo, unidad_medida, precio_lista, cod_proveedor; cod_proveedor → nombre_proveedor, ciudad_proveedor; cod_vendedor → nombre_vendedor; (nro_nota, cod_articulo) → cantidad. DF que no se cumple: nombre_proveedor → ciudad_proveedor (refutada con una segunda sede del mismo proveedor). Diagnóstico: 1FN sí; 2FN no por las parciales de nro_nota y de cod_articulo; 3FN no por cod_articulo → cod_proveedor → nombre_proveedor, ciudad_proveedor.'
    },
    {
      id: 'sql9-14',
      title: 'Corrección guiada · esquema y verificación',
      contentHtml: `
        <div class="space-y-4">
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div class="bg-white border border-slate-200 rounded-xl p-4">
              <p class="font-bold text-slate-900">Cómo se lee el esquema final</p>
              <ul class="mt-1 space-y-1 text-slate-700">
                <li data-reveal>Un nombre de tabla por hecho del negocio.</li>
                <li data-reveal>La PK subrayada; la FK con flecha a la tabla que la origina.</li>
                <li data-reveal>Toda tabla debe poder llegar a la tabla de hechos por sus FK.</li>
              </ul>
            </div>
            <div class="bg-white border border-slate-200 rounded-xl p-4">
              <p class="font-bold text-slate-900">Las tres líneas de la verificación</p>
              <ul class="mt-1 space-y-1 text-slate-700">
                <li data-reveal>(a) 15 de 15 atributos colocados.</li>
                <li data-reveal>(b) 5 filas al reunir con una clave común en cada corte.</li>
                <li data-reveal>(c) 6 de 6 dependencias completas en alguna tabla.</li>
              </ul>
            </div>
          </div>
          <div class="bg-rose-50 border border-rose-200 rounded-xl p-4 text-sm text-rose-950">
            <strong>Dos errores que se ven en la hoja:</strong> una tabla que no aporta atributos nuevos (descomposición de más) y un catálogo que queda aislado porque se cortó primero la tabla de hechos.
          </div>
          <p class="text-sm text-slate-600">Con el esquema corregido se resuelve la consulta de control en la pizarra.</p>
        </div>
      `,
      notes: 'Salida de la corrección guiada (paso 5): proyectar SOLO durante la corrección; los tres conteos revelan el paso 5 si se muestra antes. Esquema, solo docente: CLIENTE(rif_cliente, razon_social, telefono_cliente); VENDEDOR(cod_vendedor, nombre_vendedor); PROVEEDOR(cod_proveedor, nombre_proveedor, ciudad_proveedor); ARTICULO(cod_articulo, nombre_articulo, unidad_medida, precio_lista, cod_proveedor); NOTA_ENTREGA(nro_nota, fecha, rif_cliente, cod_vendedor); DETALLE_NOTA(nro_nota, cod_articulo, cantidad). Consulta: SELECT n.nro_nota, SUM(d.cantidad * a.precio_lista) AS total FROM nota_entrega AS n JOIN detalle_nota AS d ON d.nro_nota = n.nro_nota JOIN articulo AS a ON a.cod_articulo = d.cod_articulo GROUP BY n.nro_nota ORDER BY n.nro_nota. Salida: N-2001 = 87,00; N-2002 = 25,20; N-2003 = 83,20. Todas las tablas quedan en BCNF.'
    },
    {
      id: 'sql9-15',
      title: 'Taller 10 % · relación y entregables',
      contentHtml: `
        <div class="space-y-3">
          <div class="bg-rose-50 border border-rose-300 rounded-xl p-4 font-mono text-xs md:text-sm leading-relaxed text-rose-950">
INSCRIPCION_LEGADA(id_estudiante, nombre_estudiante, correo_estudiante,
                  codigo_asignatura, nombre_asignatura,
                  id_docente, nombre_docente, nota)
          </div>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-white border rounded-xl p-3"><p class="font-bold text-slate-900">1 · Los seis pasos</p><p class="text-slate-600 mt-1">Justificados como comentarios del archivo.</p></div>
            <div class="bg-white border rounded-xl p-3"><p class="font-bold text-slate-900">2 · Esquema final</p><p class="text-slate-600 mt-1">CREATE TABLE con PK y FK.</p></div>
            <div class="bg-white border rounded-xl p-3"><p class="font-bold text-slate-900">3 · Verificación</p><p class="text-slate-600 mt-1">Atributos, reunión con una fila concreta y dependencias.</p></div>
            <div class="bg-white border rounded-xl p-3"><p class="font-bold text-slate-900">4 · Consulta de control</p><p class="text-slate-600 mt-1">Con su salida completa pegada.</p></div>
          </div>
          <p class="text-sm text-slate-600">Todo en un archivo <code>S09_normalizacion.sql</code>, en el PostgreSQL propio del estudiante (para casa). La relación, los datos y las reglas están en el instrumento del taller. Esta relación no se trabaja en clase.</p>
        </div>
      `,
      notes: 'Asignación del taller: individual, para casa. La relación es la del instrumento vigente (opción A). Pendiente del docente: medio de entrega y plazo (propuesta: jueves 26/11) y formato oficial. Si se cambiara a la relación de farmacia, hay que regenerar el instrumento.'
    },
    {
      id: 'sql9-16',
      title: 'Taller 10 % · escala y condiciones de entrega',
      contentHtml: `
        <div class="space-y-4">
          <table class="w-full text-sm border-collapse">
            <thead><tr class="bg-rose-700 text-white"><th class="p-2 border text-left">Criterio</th><th class="p-2 border text-right">Pts</th></tr></thead>
            <tbody>
              <tr><td class="p-2 border">Clave candidata y dependencias funcionales válidas</td><td class="p-2 border text-right">4</td></tr>
              <tr><td class="p-2 border">Diagnóstico de formas normales y anomalías</td><td class="p-2 border text-right">4</td></tr>
              <tr><td class="p-2 border">Descomposición relacional correcta hasta 3FN</td><td class="p-2 border text-right">4</td></tr>
              <tr><td class="p-2 border">DDL con PK/FK y datos cargados sin pérdida</td><td class="p-2 border text-right">4</td></tr>
              <tr><td class="p-2 border">Consulta de verificación y salida exacta</td><td class="p-2 border text-right">4</td></tr>
              <tr class="bg-rose-50 font-bold"><td class="p-2 border">Total</td><td class="p-2 border text-right">20</td></tr>
            </tbody>
          </table>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <p class="font-bold text-slate-900">Condiciones</p>
              <ul class="mt-1 space-y-1 text-slate-700">
                <li>Individual y para casa (PostgreSQL propio del estudiante).</li>
                <li>Un archivo <code>S09_normalizacion.sql</code> con la salida pegada.</li>
                <li>Sin consulta entre compañeros.</li>
              </ul>
            </div>
            <div class="bg-amber-50 border border-amber-300 rounded-xl p-4">
              <p class="font-bold text-amber-950">Medio de entrega y plazo</p>
              <p class="text-amber-900 mt-1">Por confirmar. Fecha propuesta: jueves 26/11.</p>
            </div>
          </div>
          <p class="text-sm text-slate-600">Escala del instrumento: cinco criterios de 4 puntos sobre 20.</p>
        </div>
      `,
      notes: 'Escala del instrumento vigente: cinco criterios de 4 puntos (clave y DFs; diagnóstico; descomposición; DDL con PK/FK y carga; consulta y salida). La alternativa manuscrita con escala 13/7 queda en §5 del plan como opción B. Pendiente con el docente: medio de entrega, plazo y formato oficial (8.5 reinterpretado u 8.1 + escala). Anunciar antes de aplicar.'
    },
    {
      id: 'sql9-17',
      title: 'Cierre · ticket de salida y anuncios',
      contentHtml: `
        <div class="space-y-4">
          <div data-quiz class="bg-white border-l-4 border-indigo-600 rounded-xl p-4">
            <p class="font-bold text-slate-900">Un corte deja dos tablas cuya intersección no es clave de ninguna de las dos. Al recomponer…</p>
            <button data-option>No ocurre nada: los atributos están todos</button>
            <button data-option>Se pierden filas de la relación original</button>
            <button data-option data-correct>Aparecen tuplas que no existían</button>
            <p data-explain class="text-sm text-slate-600 mt-2">Con los datos de clase, cinco filas pueden volverse quince.</p>
          </div>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-3">
              <p class="font-bold text-rose-950">Taller del 10 %</p>
              <p class="text-rose-900 mt-1">Asignado hoy. Medio de entrega y plazo, por confirmar (propuesta: 26/11).</p>
            </div>
            <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-3">
              <p class="font-bold text-emerald-950">Jueves 26/11 y jueves 03/12</p>
              <p class="text-emerald-900 mt-1">DDL y restricciones en la próxima sesión; práctica-proyecto del 20 % el 03/12.</p>
            </div>
          </div>
          <p class="text-sm text-slate-600">Antes de entregar: ¿mi clave es una y quitarle un atributo la rompe? ¿nombré la DF que viola cada forma? ¿conté las filas al reunir?</p>
        </div>
      `,
      notes: 'Respuesta correcta del ticket: la tercera. Antes de cerrar se leen en voz alta las tres preguntas de la lista de comprobación. El plazo del taller queda por confirmar con el docente.'
    },
    {
      id: 'sql9-18',
      title: 'Fuentes',
      contentHtml: `
        <div class="space-y-4 text-sm">
          <h3 class="text-xl font-bold text-slate-900">Fuentes de la semana</h3>
          <ul class="space-y-2 text-slate-700">
            <li>Elmasri, R. y Navathe, S. B. (2007). <em>Fundamentos de sistemas de bases de datos</em> (5.ª ed.), §10.3–10.5 y §11.1. Pearson Educación.</li>
            <li>Universidad de Sevilla. (2022). <em>Bases de Datos — Relación 6: Normalización</em>. https://www.cs.us.es/cursos/bd-2022/problemas/BD_problemas_6.pdf</li>
            <li>Universidad de Granada. (s. f.). <em>Ejercicio de normalización propuesto: solución propuesta</em>. https://ccia.ugr.es/~cdemesa/pbd/docs/ejercicio_normalizacion_propuesto.pdf</li>
            <li>Slonka, K. J. y Bhatnagar, N. (2024). Teaching database normalization: do prerequisites matter? <em>Issues in Information Systems, 25</em>(1), 128–135. https://doi.org/10.48009/1_iis_2024_111</li>
            <li>Imbulpitiya, A., Whalley, J. y Senapathi, M. (2024). A qualitative study of novice experiences with database normalisation. <em>ACE '24</em>. https://doi.org/10.1145/3636243.3636254</li>
            <li>Köhnen, C., Heuer, U., Zumbrägel, J. y Scherzinger, S. (2025). Making a case for visual feedback in teaching database schema normalization. <em>DataEd '25</em>. https://doi.org/10.1145/3735091.3737528</li>
            <li>Sánchez Hernández, J. J. (2026). <em>Bases de datos: Unidad 03</em>. CC BY-NC-SA 4.0. https://josejuansanchez.org/bd/unidad-03/</li>
          </ul>
          <p class="text-xs text-slate-500">Programa analítico de la Unidad III, PGA 2026-2 y formatos oficiales de evaluación.</p>
        </div>
      `,
      notes: 'Las páginas de Elmasri corresponden al ejemplar de la biblioteca del docente (5.ª ed., Pearson). Los datos de las relaciones son sintéticos.'
    }
  ],
  tasks: [
    {
      id: 'sql9-t1',
      title: 'Taller individual: normalización hasta 3FN (10 %)',
      description: 'Asignación individual para casa: analizar y normalizar una relación existente hasta la tercera forma normal, con el procedimiento de seis pasos y verificación manual. Se asigna el 19/11; medio de entrega y plazo por confirmar (fecha propuesta: 26/11).',
      items: [
        'Paso 0 a 3: multivaluados, clave candidata justificada, dependencias funcionales y diagnóstico de 1FN, 2FN y 3FN con la DF y la fila',
        'Paso 4: descomposición en orden, con el esquema final y las claves primarias y foráneas señaladas',
        'Paso 5: verificación de las tres condiciones, con el conteo de filas al reunir',
        'Consulta de control escrita a mano sobre el esquema final'
      ],
      due: '2026-11-26',
      corte: 2,
      weight: '10 %',
      kind: 'evaluacion',
      slideId: 'sql9-15'
    }
  ]
};
