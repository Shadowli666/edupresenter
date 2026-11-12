import { Module } from '../../types';

export const SQL_MODULE_8: Module = {
  id: 'sql-mod-8',
  title: '8. Descomposición y diseño relacional hasta 3FN',
  description:
    'Semana 8: descomponer no es partir. Conservación de atributos, reunión sin pérdida y conservación de dependencias; comparación de descomposiciones (3FN frente a BCNF); del esquema lógico a las claves foráneas; caso cooperativo de la relación venta hasta 3FN (ficha grupal, 0 %). Prepara el taller individual del 10 % del 19/11.',
  evaluation: '0%',
  slides: [
    {
      id: 'sql8-1',
      title: 'Semana 8 · Descomposición y diseño hasta 3FN',
      contentHtml: `
        <div class="space-y-7">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 bg-cyan-700 rounded-2xl flex items-center justify-center text-white text-4xl shadow-lg">🧩</div>
            <div>
              <p class="text-sm uppercase tracking-widest font-bold text-cyan-700">Electiva II (Programación en SQL) · Unidad III</p>
              <h2 class="text-3xl md:text-4xl font-bold text-slate-900">Descomposición y diseño hasta 3FN</h2>
              <p class="text-slate-500 mt-1">Partir bien no es partir en muchas tablas</p>
            </div>
          </div>
          <div class="bg-cyan-50 border border-cyan-200 rounded-xl p-5 text-cyan-950">
            <p class="text-lg"><strong>Objetivo:</strong> diseñar una base de datos relacional para una aplicación específica aplicando las formas normales.</p>
          </div>
          <p class="text-sm text-slate-500">Jueves 12/11/2026 · 14:30–16:45 · Aula A-01 · Sección A · IUPSM — Extensión Ciudad Ojeda</p>
        </div>
      `,
      notes: 'Sin laboratorio (decisión de cátedra): la verificación de las descomposiciones es manual. Caso cooperativo hoy (0 %); taller individual del 10 % el jueves 19/11.'
    },
    {
      id: 'sql8-2',
      title: 'Ruta de hoy',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-slate-600 text-lg">La S7 enseñó a <strong>diagnosticar</strong> en qué forma normal está una relación. Hoy aprendemos a <strong>corregirla sin romper nada</strong>.</p>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-cyan-50 border border-cyan-200 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-cyan-700">Teoría</p><h3 class="text-lg font-bold text-cyan-950 mt-2">Tres condiciones</h3><p class="text-sm text-cyan-900 mt-2">Atributos, reunión sin pérdida y dependencias.</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-slate-700">Demostración</p><h3 class="text-lg font-bold text-slate-950 mt-2">Dos caminos</h3><p class="text-sm text-slate-700 mt-2">La misma relación, dos descomposiciones, una se descarta.</p></div>
            <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-emerald-700">Caso cooperativo</p><h3 class="text-lg font-bold text-emerald-950 mt-2">Relación venta</h3><p class="text-sm text-emerald-900 mt-2">Esquema completo, PK, FK y verificación.</p></div>
          </div>
        </div>
      `
    },
    {
      id: 'sql8-3',
      title: 'Lo que ya sabemos… y lo que falta',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-gradient-to-br from-slate-900 to-cyan-900 text-white p-6 rounded-2xl">
            <p class="text-xs uppercase tracking-widest font-bold text-cyan-300">Punto de partida</p>
            <p class="text-xl md:text-2xl font-bold mt-2 leading-snug">Sabemos detectar que una tabla está mal. ¿Basta con cortarla en dos para que quede bien?</p>
          </div>
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4"><p class="font-bold text-emerald-950">Ya visto (S7)</p><p class="text-emerald-900 mt-1">Claves, dependencias funcionales, anomalías y las tres preguntas de 1FN, 2FN y 3FN.</p></div>
            <div class="bg-cyan-50 border border-cyan-200 rounded-xl p-4"><p class="font-bold text-cyan-950">Nuevo hoy</p><p class="text-cyan-900 mt-1">Cómo se descompone <strong>sin perder información</strong>, cómo se comparan dos descomposiciones válidas y cómo se declara el resultado en tablas.</p></div>
          </div>
          <p class="text-sm text-slate-600">Las tres preguntas de la S7 no se repiten: se usan como herramienta de trabajo.</p>
        </div>
      `,
      notes: 'Devolución de 60 s: los dos errores más frecuentes de la ficha S7 (DF inventadas a partir de cuatro filas; confundir el objetivo de 2FN con el de 3FN). No volver a explicarlos.'
    },
    {
      id: 'sql8-4',
      title: 'Descomponer no es partir',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-slate-700">Descomponer <code class="bg-slate-100 px-1 rounded">R</code> en <code class="bg-slate-100 px-1 rounded">R₁ … Rₘ</code> solo es correcto si se cumplen <strong>tres condiciones</strong>:</p>
          <div class="grid md:grid-cols-3 gap-3 text-sm">
            <div class="bg-white border-2 border-cyan-300 rounded-2xl p-4" data-reveal><p class="font-bold text-cyan-800">1 · Atributos</p><p class="text-slate-700 mt-2">Todo atributo de <code>R</code> aparece en al menos una <code>Rᵢ</code>.</p><p class="text-xs text-rose-700 mt-2">Si falta uno, se perdió.</p></div>
            <div class="bg-white border-2 border-cyan-300 rounded-2xl p-4" data-reveal><p class="font-bold text-cyan-800">2 · Reunión sin pérdida</p><p class="text-slate-700 mt-2">Al recomponer con <code>JOIN</code> natural se recuperan <strong>exactamente</strong> las tuplas originales.</p><p class="text-xs text-rose-700 mt-2">Si aparecen tuplas falsas, se perdió información.</p></div>
            <div class="bg-white border-2 border-cyan-300 rounded-2xl p-4" data-reveal><p class="font-bold text-cyan-800">3 · Dependencias</p><p class="text-slate-700 mt-2">Cada DF queda en alguna <code>Rᵢ</code> o se infiere de las que quedan.</p><p class="text-xs text-rose-700 mt-2">Si se pierde, no se puede vigilar la regla sin recomponer.</p></div>
          </div>
          <div class="bg-slate-900 text-white rounded-xl p-4 text-sm">
            <p class="text-xs uppercase tracking-widest font-bold text-cyan-300">Antítesis a combatir</p>
            <p class="text-lg font-semibold mt-1">«Está en 3FN, luego está bien.» Falso: una tabla en BCNF también puede producir tuplas falsas.</p>
          </div>
        </div>
      `,
      notes: 'Base: Elmasri y Navathe, §11.1. La condición 3 (conservación de dependencias) es la que más se olvida. Insistir: las tres se verifican sobre el conjunto de tablas, no sobre una tabla aislada.'
    },
    {
      id: 'sql8-5',
      title: 'Reunión sin pérdida · tuplas falsas',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-slate-700">La prueba práctica que usaremos todo el bloque:</p>
          <div class="bg-cyan-50 border-2 border-cyan-400 rounded-2xl p-5">
            <p class="text-cyan-950 font-semibold">La intersección de las dos partes debe ser <strong>superclave de al menos una</strong> de ellas.</p>
            <p class="text-sm text-cyan-900 mt-2">Si se cumple, el corte es sin pérdida (teorema de Heath, descomposición binaria).</p>
          </div>
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div class="bg-white border rounded-xl p-4">
              <p class="font-bold text-emerald-700">Corte correcto</p>
              <p class="mt-1 text-slate-700"><code>R(A, B, C)</code> con <code>A → B</code>:</p>
              <p class="mt-1 font-mono text-xs bg-slate-100 rounded p-2">R₁(A, B) · R₂(A, C)</p>
              <p class="mt-1 text-slate-600">La intersección es <code>A</code>, que es clave de R₁. <strong>Sin pérdida.</strong></p>
            </div>
            <div class="bg-white border rounded-xl p-4">
              <p class="font-bold text-rose-700">Corte con pérdida</p>
              <p class="mt-1 text-slate-700"><code>R(A, B, C)</code> sin DF que lo respalde:</p>
              <p class="mt-1 font-mono text-xs bg-slate-100 rounded p-2">R₁(A, B) · R₂(B, C)</p>
              <p class="mt-1 text-slate-600">La intersección es <code>B</code>, que no es clave. El <code>JOIN</code> <strong>inventa</strong> combinaciones.</p>
            </div>
          </div>
          <p class="text-sm text-slate-600">Cada corte se verifica <strong>uno por uno</strong>: una descomposición en varias tablas es sin pérdida si lo es cada paso.</p>
        </div>
      `,
      notes: 'Cuidado con el ejemplo: en R(A,B,C) sin DF, cortar en (A,B) y (B,C) pierde; en (A,B) y (A,C) con A→B no. La diferencia no se ve mirando las tablas, se ve mirando la intersección.'
    },
    {
      id: 'sql8-6',
      title: 'Conservación de dependencias',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-slate-700">Cada DF representa una <strong>restricción del negocio</strong>. Si la DF no vive en ninguna tabla, la restricción no se puede vigilar sin recomponer.</p>
          <div class="bg-white border rounded-xl p-4 text-sm">
            <p class="font-bold text-slate-800">Ejemplo</p>
            <p class="mt-1 text-slate-700">Si <code>cod_servicio → precio_base</code> y, al descomponer, <code>precio_base</code> queda en una tabla donde <code>cod_servicio</code> ya no es clave, la regla «un precio por servicio» deja de poder imponerse.</p>
          </div>
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4"><p class="font-bold text-emerald-950">Cómo se verifica</p><p class="text-emerald-900 mt-1">Recorrer la lista de DF y comprobar que cada una cabe completa en alguna tabla final.</p></div>
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-4"><p class="font-bold text-amber-950">Qué pasa si se pierde</p><p class="text-amber-900 mt-1">La base «funciona», pero nada impide que dos filas contradigan la regla. El error se descubre meses después.</p></div>
          </div>
        </div>
      `,
      notes: 'Elmasri §11.1.2: la proyección de F sobre cada Ri; la unión de las proyecciones debe ser equivalente a F. No hace falta formalizarlo con clausura: basta la comprobación tabla por tabla.'
    },
    {
      id: 'sql8-7',
      title: 'Dos descomposiciones, un criterio',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-slate-700">La misma relación admite <strong>varias descomposiciones válidas</strong>. Se comparan con estos criterios, en este orden:</p>
          <ol class="space-y-2 text-sm text-slate-700">
            <li data-reveal class="bg-white border rounded-xl p-3"><strong>1. Reunión sin pérdida:</strong> obligatorio. Si falla, se descarta.</li>
            <li data-reveal class="bg-white border rounded-xl p-3"><strong>2. Conservación de dependencias:</strong> obligatorio en 3FN; no siempre posible al pasar a BCNF.</li>
            <li data-reveal class="bg-white border rounded-xl p-3"><strong>3. Forma normal alcanzada:</strong> 3FN como objetivo del curso.</li>
            <li data-reveal class="bg-white border rounded-xl p-3"><strong>4. Número de tablas y <code>JOIN</code>s:</strong> cada tabla extra se paga en cada consulta.</li>
            <li data-reveal class="bg-white border rounded-xl p-3"><strong>5. Claridad del modelo:</strong> ¿una tabla = un hecho del negocio?</li>
          </ol>
          <p class="text-sm text-slate-600">Los dos primeros son condiciones; los tres últimos son <strong>criterios de elección</strong> entre alternativas que ya cumplen.</p>
        </div>
      `,
      notes: 'Insistir en la jerarquía: 1 y 2 no se negocian; 3, 4 y 5 se ponderan. En el taller del 19/11 se pide justificar con esta lista.'
    },
    {
      id: 'sql8-8',
      title: 'El caso PARCELAS · 3FN frente a BCNF',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-slate-700">De <code>PARCELAS1A</code>, que ya está en <strong>3FN</strong>, la normalización a BCNF produce <code>PARCELAS1AX</code> y <code>PARCELAS1AY</code>…</p>
          <table class="w-full text-sm border-collapse">
            <thead><tr class="bg-slate-700 text-white"><th class="p-2 border text-left"></th><th class="p-2 border text-left">Descomposición a 3FN</th><th class="p-2 border text-left">Descomposición a BCNF</th></tr></thead>
            <tbody>
              <tr data-reveal><td class="p-2 border font-bold">Forma normal</td><td class="p-2 border">3FN</td><td class="p-2 border">BCNF (más estricta)</td></tr>
              <tr data-reveal><td class="p-2 border font-bold">Reunión sin pérdida</td><td class="p-2 border">Sí</td><td class="p-2 border">Sí</td></tr>
              <tr data-reveal><td class="p-2 border font-bold">Conserva dependencias</td><td class="p-2 border text-emerald-700 font-bold">Sí</td><td class="p-2 border text-rose-700 font-bold">No: se pierde DF2</td></tr>
              <tr data-reveal><td class="p-2 border font-bold">Consecuencia</td><td class="p-2 border">La restricción se vigila en una tabla</td><td class="p-2 border">Hay que recomponer para verificarla</td></tr>
            </tbody>
          </table>
          <div class="bg-cyan-50 border border-cyan-200 rounded-xl p-4 text-sm text-cyan-950">
            <strong>Por eso el curso se detiene en 3FN:</strong> siempre existe una descomposición en 3FN que conserva las dependencias (Elmasri, Afirmación 1, §11.1.2).
          </div>
        </div>
      `,
      notes: 'Fuente: Elmasri y Navathe, §10.4.2–10.5, pp. 306–308. La DF2 son los atributos que dejan de convivir tras el corte. No entrar en la definición formal de BCNF: solo en el efecto sobre las dependencias.'
    },
    {
      id: 'sql8-9',
      title: 'Del esquema al modelo físico',
      contentHtml: `
        <div class="space-y-4">
          <table class="w-full text-sm border-collapse">
            <thead><tr class="bg-cyan-700 text-white"><th class="p-2 border text-left">Concepto</th><th class="p-2 border text-left">Regla</th><th class="p-2 border text-left">En el esquema de venta</th></tr></thead>
            <tbody>
              <tr data-reveal><td class="p-2 border font-bold">PK</td><td class="p-2 border">Una clave candidata elegida</td><td class="p-2 border"><code>VENTA(cod_venta)</code></td></tr>
              <tr data-reveal><td class="p-2 border font-bold">FK</td><td class="p-2 border">Se copia la PK del lado «uno» en el lado «muchos»</td><td class="p-2 border"><code>DETALLE_VENTA(cod_venta)</code> → <code>VENTA</code></td></tr>
              <tr data-reveal><td class="p-2 border font-bold">Integridad referencial</td><td class="p-2 border">No puede existir una FK sin su PK</td><td class="p-2 border">No hay detalle sin venta</td></tr>
              <tr data-reveal><td class="p-2 border font-bold">Dato derivado</td><td class="p-2 border">No se almacena si se calcula</td><td class="p-2 border">El total se calcula con <code>SUM</code></td></tr>
            </tbody>
          </table>
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4"><p class="font-bold text-emerald-950">Cuándo parar</p><p class="text-emerald-900 mt-1">En 3FN, salvo que una DF exija más. Ir a 4FN o 5FN agrega <code>JOIN</code>s sin beneficio práctico.</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-4"><p class="font-bold text-slate-900">Sin laboratorio</p><p class="text-slate-700 mt-1">El esquema se entrega en papel: tablas, PK subrayada, FK con flecha. En el taller se transcribe a <code>CREATE TABLE</code>.</p></div>
          </div>
        </div>
      `,
      notes: 'Regla práctica de la cátedra: se normaliza hasta 3FN y se detiene. Si alguien propone más tablas «porque es más puro», pedirle la consulta que las une.'
    },
    {
      id: 'sql8-10',
      title: 'Demostración · tuplas falsas en EMP_LOCS',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-slate-900 text-white rounded-xl p-5">
            <p class="text-xs uppercase tracking-widest font-bold text-cyan-300">Caso · Elmasri §11.1.1</p>
            <p class="text-lg font-semibold mt-1"><code>EMP_LOCS(NombreE, UbicaciónProyecto)</code> está en <strong>BCNF</strong>. Y aun así falla.</p>
          </div>
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div class="bg-white border rounded-xl p-4">
              <p class="font-bold text-slate-900">EMP_LOCS</p>
              <table class="w-full text-xs mt-2 border-collapse">
                <thead><tr class="bg-slate-100"><th class="p-1 border text-left">NombreE</th><th class="p-1 border text-left">UbicaciónProyecto</th></tr></thead>
                <tbody>
                  <tr><td class="p-1 border">Rosa</td><td class="p-1 border">Maracaibo</td></tr>
                  <tr><td class="p-1 border">Rosa</td><td class="p-1 border">Cabimas</td></tr>
                  <tr><td class="p-1 border">Juan</td><td class="p-1 border">Maracaibo</td></tr>
                </tbody>
              </table>
            </div>
            <div class="bg-white border rounded-xl p-4">
              <p class="font-bold text-slate-900">Problema al concatenar</p>
              <p class="mt-2 text-slate-700">La tabla dice que Rosa está en Maracaibo y en Cabimas <strong>sin decir en qué proyecto</strong>. Al unirla con <code>EMP_PROY</code>, aparecen combinaciones empleado–proyecto–ubicación que ninguna tupla original respaldaba.</p>
            </div>
          </div>
          <div class="bg-rose-50 border border-rose-200 rounded-xl p-4 text-sm text-rose-950">
            <strong>Moraleja:</strong> la forma normal se juzga sobre el <strong>conjunto</strong> de relaciones, no sobre una tabla aislada.
          </div>
        </div>
      `,
      notes: 'Datos ilustrativos con nombres venezolanos; la estructura es la del ejemplo de Elmasri. La pregunta que fija el concepto: «¿de qué proyecto es la ubicación Cabimas?».'
    },
    {
      id: 'sql8-11',
      title: 'Demostración · reparación, opción A',
      contentHtml: `
        <div class="space-y-3">
          <div class="bg-white border rounded-xl p-3 text-xs font-mono bg-slate-50 leading-relaxed">
reparacion(nro_orden, fecha, placa, modelo, ced_cliente, nombre_cliente,
           cod_servicio, nombre_servicio, precio_base, telefonos)
PK = (nro_orden, cod_servicio)
          </div>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-3">
              <p class="font-bold text-emerald-950">Seis tablas</p>
              <ul class="font-mono text-xs mt-1 space-y-1 text-emerald-900">
                <li>CLIENTE(ced_cliente, nombre_cliente)</li>
                <li>TELEFONO_CLIENTE(ced_cliente, telefono)</li>
                <li>VEHICULO(placa, modelo, ced_cliente)</li>
                <li>ORDEN(nro_orden, fecha, placa)</li>
                <li>SERVICIO(cod_servicio, nombre_servicio, precio_base)</li>
                <li>DETALLE_ORDEN(nro_orden, cod_servicio)</li>
              </ul>
            </div>
            <div class="space-y-2 text-sm">
              <div class="bg-white border rounded-xl p-3" data-reveal><strong>1.</strong> <code>nro_orden</code> es clave de <code>ORDEN</code> → corte sin pérdida.</div>
              <div class="bg-white border rounded-xl p-3" data-reveal><strong>2.</strong> <code>placa</code> es clave de <code>VEHICULO</code> → sin pérdida.</div>
              <div class="bg-white border rounded-xl p-3" data-reveal><strong>3.</strong> <code>ced_cliente</code> y <code>cod_servicio</code> son claves de sus tablas → sin pérdida.</div>
              <div class="bg-white border rounded-xl p-3" data-reveal><strong>4.</strong> Las cinco DF viven completas en alguna tabla → dependencias conservadas.</div>
            </div>
          </div>
        </div>
      `,
      notes: 'Los cinco pasos se escriben en la pizarra, no se leen de la diapositiva. Preguntar antes de revelar cada uno: «¿cuál es la clave que comparten las dos partes?».'
    },
    {
      id: 'sql8-12',
      title: 'Demostración · reparación, opción B (se descarta)',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white border-2 border-rose-300 rounded-2xl p-4">
            <p class="text-xs uppercase font-bold text-rose-700">Opción B · cuatro tablas (agrupada)</p>
            <p class="mt-2 font-mono text-xs bg-slate-50 rounded p-2">ORDEN(nro_orden, fecha, placa, cod_servicio, precio_base)</p>
            <p class="text-sm text-slate-700 mt-2">Se intenta «ahorrar» una tabla metiendo la referencia al servicio dentro de la orden.</p>
          </div>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-3"><strong>Lo que sí cumple:</strong> reunión sin pérdida (la intersección sigue siendo clave). Los atributos están todos.</div>
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-3"><strong>Lo que falla:</strong> <code>cod_servicio → nombre_servicio</code> queda fuera de todas las tablas, y <code>precio_base</code> se repite por cada orden.</div>
          </div>
          <div class="bg-slate-900 text-white rounded-xl p-4">
            <p class="text-xs uppercase tracking-widest font-bold text-cyan-300">Veredicto</p>
            <p class="text-lg font-semibold mt-1">Se descarta: no está en 3FN y pierde una dependencia. Ahorrar una tabla costó una restricción.</p>
          </div>
          <p class="text-sm text-slate-600">Menos tablas no es mejor diseño: es <strong>menos control</strong> sobre los datos.</p>
        </div>
      `,
      notes: 'Este es el contraejemplo que hace visible que la descomposición tiene condiciones. Si alguien defiende la opción B, pedirle que escriba la consulta que detecta un precio_base contradictorio: necesita un JOIN y no puede garantizarlo.'
    },
    {
      id: 'sql8-13',
      title: 'Práctica guiada · de la veterinaria a la 3FN',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white border rounded-xl p-4 font-mono text-xs md:text-sm bg-slate-50 leading-relaxed">
consulta_veterinaria(nro_consulta, fecha, id_mascota, nombre_mascota, especie,
                     ced_dueno, nombre_dueno, cod_vet, nombre_vet)
Reglas: cada consulta es de una mascota y la atiende un veterinario;
        cada mascota tiene un solo dueño registrado.
          </div>
          <div class="grid md:grid-cols-2 gap-3 text-sm text-slate-700">
            <div class="bg-white border rounded-xl p-3"><strong>1.</strong> Clave candidata.</div>
            <div class="bg-white border rounded-xl p-3"><strong>2.</strong> Las cuatro DF, a partir de las reglas (no de los datos).</div>
            <div class="bg-white border rounded-xl p-3"><strong>3.</strong> Descomponga hasta 3FN.</div>
            <div class="bg-white border rounded-xl p-3"><strong>4.</strong> Verifique: ¿sin pérdida? ¿conserva las DF?</div>
          </div>
          <p class="text-sm text-slate-600">15 min en parejas. Se corrige en la pizarra, no se dicta la solución.</p>
        </div>
      `,
      notes: 'Respuesta: 1. nro_consulta. 2. nro_consulta → fecha, id_mascota, cod_vet; id_mascota → nombre_mascota, especie, ced_dueno; ced_dueno → nombre_dueno; cod_vet → nombre_vet. 3. MASCOTA(id_mascota, nombre_mascota, especie, ced_dueno), DUENO(ced_dueno, nombre_dueno), VETERINARIO(cod_vet, nombre_vet), CONSULTA(nro_consulta, fecha, id_mascota, cod_vet). 4. Cada corte comparte una clave; cada DF vive completa en una tabla.'
    },
    {
      id: 'sql8-14',
      title: 'Caso cooperativo · relación venta',
      contentHtml: `
        <div class="space-y-3">
          <div class="bg-cyan-50 border border-cyan-300 rounded-xl p-4 font-mono text-xs md:text-sm leading-relaxed text-cyan-950">
venta(cod_venta, fecha, ced_cliente, nombre_cliente, telefono_cliente,
      porcentaje_descuento, cod_vendedor, nombre_vendedor,
      cod_articulo, nombre_articulo, precio_unitario, cantidad)
          </div>
          <div class="bg-white border rounded-xl p-4 text-sm text-slate-700">
            <p class="font-bold text-slate-900 mb-1">Reglas del negocio</p>
            <ul class="space-y-1 list-disc list-inside">
              <li data-reveal>Cada venta la hace un cliente y la atiende un vendedor; puede incluir varios artículos.</li>
              <li data-reveal>Un cliente puede tener varios teléfonos y tiene asignado un porcentaje de descuento.</li>
              <li data-reveal>Cada artículo tiene nombre y precio unitario; se vende en muchas ventas.</li>
              <li data-reveal>El total de la venta <strong>no</strong> se guarda: se calcula.</li>
            </ul>
          </div>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-cyan-700 text-white rounded-xl p-3"><p class="font-bold">Grupos de 3</p><p class="text-xs mt-1 text-cyan-100">Formación en clase · 34 min de trabajo</p></div>
            <div class="bg-slate-100 border rounded-xl p-3 text-slate-800"><p class="font-bold">Esto es la ficha grupal (0 %)</p><p class="text-xs mt-1">Se resuelve en el cuaderno, no se imprime.</p></div>
          </div>
        </div>
      `,
      notes: 'Grupos de 3 formados en clase. Si el aula no permite mover mobiliario: tríos con los compañeros de adelante y atrás. No usar en clase la relación del taller del 19/11.'
    },
    {
      id: 'sql8-15',
      title: 'Caso cooperativo · entregable y verificación',
      contentHtml: `
        <div class="space-y-3">
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-white border rounded-xl p-4"><p class="font-bold text-slate-900">1 · Dependencias</p><p class="text-slate-700 mt-1">Clave candidata de <code>venta</code> y todas las DF que se deducen de las reglas.</p></div>
            <div class="bg-white border rounded-xl p-4"><p class="font-bold text-slate-900">2 · Esquema final</p><p class="text-slate-700 mt-1">Tablas con atributos, <strong>PK subrayada</strong> y <strong>FK con flecha</strong>.</p></div>
            <div class="bg-white border rounded-xl p-4"><p class="font-bold text-slate-900">3 · Verificación</p><p class="text-slate-700 mt-1">Atributos, reunión sin pérdida y dependencias conservadas.</p></div>
            <div class="bg-white border rounded-xl p-4"><p class="font-bold text-slate-900">4 · Una consulta</p><p class="text-slate-700 mt-1">Total por venta, en SQL, sobre el esquema final.</p></div>
          </div>
          <div class="bg-slate-900 text-white rounded-xl p-4">
            <p class="text-xs uppercase tracking-widest font-bold text-cyan-300">Antes de empezar</p>
            <p class="text-sm mt-1">El formato del entregable queda escrito en la pizarra: <strong>tablas, PK subrayada, FK con flecha, verificación de tres líneas</strong>.</p>
          </div>
          <p class="text-sm text-slate-600">A los 8 min del final, cada grupo cierra su hoja y prepara una frase de defensa.</p>
        </div>
      `,
      notes: 'Clave: (cod_venta, cod_articulo). DF: cod_venta → fecha, ced_cliente, cod_vendedor; ced_cliente → nombre_cliente, porcentaje_descuento; cod_vendedor → nombre_vendedor; cod_articulo → nombre_articulo, precio_unitario; (cod_venta, cod_articulo) → cantidad. Seis tablas: CLIENTE, TELEFONO_CLIENTE, VENDEDOR, ARTICULO, VENTA, DETALLE_VENTA. Consulta: SELECT v.cod_venta, SUM(d.cantidad * a.precio_unitario) FROM VENTA v JOIN DETALLE_VENTA d ON d.cod_venta = v.cod_venta JOIN ARTICULO a ON a.cod_articulo = d.cod_articulo GROUP BY v.cod_venta. Errores esperados: dejar nombre_cliente en VENTA; olvidar TELEFONO_CLIENTE; no declarar FK.'
    },
    {
      id: 'sql8-16',
      title: 'Plenaria y cierre',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white border-l-4 border-cyan-600 rounded-xl p-4">
            <p class="font-bold text-slate-900">Auditoría cruzada (12 min)</p>
            <p class="text-slate-700 text-sm mt-1">Dos grupos presentan su esquema. A cada uno se le asigna <strong>una</strong> condición para auditar el esquema del otro: atributos, reunión sin pérdida o dependencias.</p>
          </div>
          <div class="bg-cyan-50 border border-cyan-200 rounded-xl p-4">
            <p class="font-bold text-cyan-950">Ticket de salida</p>
            <p class="text-cyan-900 text-sm mt-1">Escriba una descomposición de <code>venta</code> que <strong>sí</strong> pierda información y explique por qué.</p>
          </div>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-3"><p class="font-bold text-rose-950">Jueves 19/11</p><p class="text-rose-900 mt-1">Taller individual · 10 %: normalizar una relación existente hasta 3FN con justificación.</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-3"><p class="font-bold text-slate-900">Entrega</p><p class="text-slate-700 mt-1">Medio y hora <strong>por confirmar</strong>.</p></div>
          </div>
        </div>
      `,
      notes: 'Ticket esperado: cualquier corte cuya intersección no sea clave, p. ej. (cod_venta, cod_articulo, cantidad) junto con (cod_articulo, nombre_articulo) sin conservar la relación venta–artículo. Anunciar el taller del 19/11 y que el medio de entrega está por confirmar.'
    },
    {
      id: 'sql8-17',
      title: 'Fuentes',
      contentHtml: `
        <div class="space-y-4 text-sm">
          <h3 class="text-xl font-bold text-slate-900">Fuentes de la semana</h3>
          <ul class="space-y-2 text-slate-700">
            <li>Elmasri, R. y Navathe, S. (2007). <em>Fundamentos de sistemas de bases de datos</em> (5.ª ed.), §10.4.2–10.5 y §11.1. Pearson.</li>
            <li>Sánchez, J. J. <em>Bases de Datos</em> (curso DAW/DAM/ASIR). CC BY-NC-SA 4.0. https://josejuansanchez.org/bd/</li>
            <li>PostgreSQL Global Development Group. <em>PostgreSQL Documentation</em>. https://www.postgresql.org/docs/</li>
          </ul>
          <p class="text-xs text-slate-500">Programa analítico U-III y PGA 2026-2 (plan de la asignatura).</p>
        </div>
      `,
      notes: 'Las páginas de Elmasri corresponden al ejemplar de la biblioteca del docente (5.ª ed., Pearson).'
    }
  ]
};
