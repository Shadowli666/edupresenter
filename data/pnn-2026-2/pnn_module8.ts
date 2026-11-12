import { Module } from '../../types';

export const PNN_MODULE_8: Module = {
  id: 'pnn-mod-8',
  title: '8. El método de adquisición: cintas magnéticas y bolsa de papel',
  description:
    'Semana 8: jueves 12/11 — devolución de la ficha de la S7 y rescate de la noción de eficiencia (qué mide la O grande, tabla de crecimiento y comparación entre algoritmos) antes de abrir la unidad; después, el método de adquisición (voraz): candidatos, función de selección, factibilidad y objetivo; condiciones de uso; almacenamiento óptimo en cintas magnéticas con la fórmula del MRT, la prueba de optimalidad por intercambio y la verificación por enumeración en C. Viernes 13/11 — el problema de la bolsa de papel en sus dos variantes: fraccionaria (el voraz es óptimo, prueba por intercambio) y 0/1 (el voraz falla: contraejemplo y programación dinámica). Unidad III.1–III.2.',
  evaluation: '0%',
  slides: [
    {
      id: 'pnn8-1',
      title: 'Jueves 12/11 · El método de adquisición',
      contentHtml: `
        <div class="space-y-7">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center text-white text-4xl shadow-lg">🎯</div>
            <div>
              <p class="text-sm uppercase tracking-widest font-bold text-teal-700">Programación No Numérica II · Unidad III</p>
              <h2 class="text-3xl md:text-4xl font-bold text-slate-900">El método de adquisición</h2>
              <p class="text-slate-500 mt-1">Elegir paso a paso, y demostrar que la elección es la correcta</p>
            </div>
          </div>
          <div class="bg-teal-50 border border-teal-200 rounded-xl p-5 text-teal-950">
            <p class="text-lg"><strong>Objetivo:</strong> aplicar el método de adquisición al almacenamiento óptimo en cintas magnéticas.</p>
          </div>
          <p class="text-sm text-slate-500">Jueves 12/11/2026 · 16:45–18:15 · Aula A-06 · Sección A · IUPSM — Extensión Ciudad Ojeda</p>
        </div>
      `,
      notes: 'La clase abre con la devolución de la ficha y el rescate de la O grande en las diap. 3 a 6 (22 min); el método de adquisición empieza en la diap. 7. Sin laboratorio: el docente ejecuta S08-cintas.c desde el proyector; los estudiantes trabajan en el cuaderno. Lista de cotejo (0 %) sobre la práctica guiada.'
    },
    {
      id: 'pnn8-2',
      title: 'Ruta del jueves',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-slate-600 text-lg">Abrimos con la <strong>devolución de la ficha</strong> y una idea que faltaba: qué mide la O grande y cómo se comparan dos algoritmos. Después cambia la pregunta: ¿qué hacemos cuando el problema <strong>no se parte</strong>, sino que hay que <strong>elegir</strong> paso a paso?</p>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-teal-50 border border-teal-200 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-teal-700">Teoría</p><h3 class="text-lg font-bold text-teal-950 mt-2">El método</h3><p class="text-sm text-teal-900 mt-2">Cuatro piezas, dos condiciones de uso y una fórmula.</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-slate-700">Código en vivo</p><h3 class="text-lg font-bold text-slate-950 mt-2">Cintas en C</h3><p class="text-sm text-slate-700 mt-2">Creciente, decreciente y las 120 permutaciones.</p></div>
            <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-emerald-700">Práctica</p><h3 class="text-lg font-bold text-emerald-950 mt-2">Calcular el MRT</h3><p class="text-sm text-emerald-900 mt-2">Guiada en pizarra, completando la tabla entre todos.</p></div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn8-3',
      title: 'Devolución · lo que la ficha pidió y lo que se respondió',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-slate-900 text-white rounded-2xl p-5">
            <p class="text-xs uppercase tracking-widest font-bold text-amber-300">Devolución de la ficha del viernes 06/11</p>
            <p class="text-lg md:text-xl font-semibold mt-2 leading-snug">La ficha pidió <strong>aplicar el Teorema Maestro</strong> a cuatro casos nuevos. Eso exige tener el Teorema consolidado; no era el objetivo de la semana ni es el centro de la prueba del 19/11.</p>
          </div>
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-4">
              <p class="text-xs uppercase font-bold text-rose-700">Lo que costó</p>
              <ul class="mt-2 space-y-1 text-rose-950">
                <li data-reveal>Tres representaciones formales nuevas en 24 minutos.</li>
                <li data-reveal>Una regla de tres casos (<code>a</code> frente a <code>b<sup>d</sup></code>) sin imagen que la sostenga.</li>
                <li data-reveal>Cuatro recurrencias para resolver el viernes, sin margen para consolidar.</li>
              </ul>
            </div>
            <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
              <p class="text-xs uppercase font-bold text-emerald-700">Lo que sí funcionó</p>
              <ul class="mt-2 space-y-1 text-emerald-950">
                <li data-reveal>Leer la tabla de conteos y comparar los dos algoritmos.</li>
                <li data-reveal>Explicar por qué el arreglo ordenado castiga a Quicksort.</li>
                <li data-reveal>Contar comparaciones en una traza concreta.</li>
              </ul>
            </div>
          </div>
          <p class="text-sm text-slate-600">Hoy se recupera la idea que hacía falta —qué significa que un algoritmo sea eficiente— y se deja el Teorema Maestro como herramienta de consulta. Los 20 minutos siguientes valen más que la fórmula.</p>
        </div>
      `,
      notes: 'Devolución en 4 min, sin nombres ni notas individuales. Tono: el diseño de la sesión pidió más de lo que el objetivo requería; el grupo respondió a lo que se le pidió. No abrir debate sobre la calificación de la ficha: es formativa (0 %).'
    },
    {
      id: 'pnn8-4',
      title: 'Qué mide la O grande (y qué no)',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-gradient-to-br from-slate-900 to-teal-900 text-white p-6 rounded-2xl">
            <p class="text-xs uppercase tracking-widest font-bold text-teal-300">La idea en una frase</p>
            <p class="text-xl md:text-2xl font-bold mt-2 leading-snug">La O grande no mide segundos: mide <em>cómo crece</em> el trabajo cuando crece el tamaño de los datos.</p>
          </div>
          <div class="bg-white border rounded-xl p-4 text-sm text-slate-700">
            <p><strong>Definición operativa.</strong> Decimos que el costo <code>f(n)</code> es <code>O(g(n))</code> si, a partir de cierto tamaño, <code>f(n)</code> no supera a <code>g(n)</code> multiplicada por una constante. Es decir: <strong>a partir de cierto punto, se comporta como <code>g</code></strong>.</p>
          </div>
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p class="font-bold text-amber-950">Con pocos datos no se nota</p>
              <p class="text-amber-900 mt-1">Con 10 elementos, un algoritmo <code>n²</code> y uno <code>n log n</code> tardan prácticamente lo mismo.</p>
            </div>
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-4">
              <p class="font-bold text-rose-950">Con muchos datos, decide todo</p>
              <p class="text-rose-900 mt-1">Un algoritmo <code>n²</code> con 10⁶ de datos tarda minutos; con 10⁷, <strong>horas</strong>. El mismo programa, otro tamaño.</p>
            </div>
          </div>
          <div class="bg-slate-100 rounded-xl p-4">
            <p class="text-sm text-slate-700"><strong>La pregunta útil:</strong> si duplico los datos, ¿cuánto más trabajo hay? Si se duplica, es lineal; si se cuadruplica, es cuadrático; si casi no cambia, es logarítmico.</p>
          </div>
        </div>
      `,
      notes: 'No entrar en la definición formal con épsilon y n0: la definición operativa basta para la asignatura y el libro la desarrolla en §5.4.1 (pp. 109-110). El dato de los 8 minutos con 10⁶ y las 13 horas con 10⁷ es de Bourke, §5.1 (p. 102).'
    },
    {
      id: 'pnn8-5',
      title: 'La tabla de crecimiento',
      contentHtml: `
        <div class="space-y-3">
          <p class="text-sm text-slate-600">Costo aproximado según el tamaño de la entrada. Se genera con <code>S08-big-o.c</code> y se copia en el cuaderno.</p>
          <table class="w-full text-sm border-collapse text-center">
            <thead><tr class="bg-slate-700 text-white"><th class="p-2 border">n</th><th class="p-2 border">log₂ n</th><th class="p-2 border">n</th><th class="p-2 border">n log₂ n</th><th class="p-2 border">n²</th><th class="p-2 border">2ⁿ</th></tr></thead>
            <tbody class="font-mono">
              <tr><td class="p-2 border font-bold">10</td><td class="p-2 border">3,3</td><td class="p-2 border">10</td><td class="p-2 border">33</td><td class="p-2 border">100</td><td class="p-2 border">1 024</td></tr>
              <tr class="bg-slate-50"><td class="p-2 border font-bold">100</td><td class="p-2 border">6,6</td><td class="p-2 border">100</td><td class="p-2 border">664</td><td class="p-2 border">10 000</td><td class="p-2 border">1,27·10³⁰</td></tr>
              <tr><td class="p-2 border font-bold">1 000</td><td class="p-2 border">10,0</td><td class="p-2 border">1 000</td><td class="p-2 border">9 966</td><td class="p-2 border">1 000 000</td><td class="p-2 border">inabordable</td></tr>
              <tr class="bg-slate-50"><td class="p-2 border font-bold">1 000 000</td><td class="p-2 border">19,9</td><td class="p-2 border">1 000 000</td><td class="p-2 border">19 931 396</td><td class="p-2 border">10¹²</td><td class="p-2 border">—</td></tr>
            </tbody>
          </table>
          <div class="bg-teal-50 border border-teal-200 rounded-xl p-4 text-sm text-teal-950">
            <p><strong>Cómo se lee:</strong> al pasar de 1 000 a 1 000 000 de datos (mil veces más), <code>log n</code> apenas se duplica, <code>n log n</code> se multiplica por 2 000 y <code>n²</code> por un millón. La misma comparación de antes, ahora con números.</p>
          </div>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-white border rounded-xl p-3"><strong>La tabla es el significado.</strong> Sirve para decidir sin ejecutar nada.</div>
            <div class="bg-white border rounded-xl p-3"><strong>La recurrencia es el cálculo.</strong> Permite escribir la columna sin correr el programa.</div>
          </div>
        </div>
      `,
      notes: 'Proyectar la salida real de S08-big-o.c (tabla 1) y llenar la misma tabla en la pizarra antes de mostrarla. Preguntar primero: «¿cuántas veces más trabajo hay con mil veces más datos?». La respuesta 1 000 000 para n² es la que fija la idea.'
    },
    {
      id: 'pnn8-6',
      title: 'Comparar algoritmos · y el puente con la S7',
      contentHtml: `
        <div class="space-y-3">
          <p class="text-sm text-slate-600">Los cuatro algoritmos de la unidad, con <code>n = 1 000 000</code> y la misma operación contada (comparaciones).</p>
          <table class="w-full text-sm border-collapse">
            <thead><tr class="bg-teal-700 text-white"><th class="p-2 border text-left">Algoritmo</th><th class="p-2 border">Orden</th><th class="p-2 border">Operaciones</th><th class="p-2 border text-left">Condición o riesgo</th></tr></thead>
            <tbody>
              <tr data-reveal><td class="p-2 border font-bold">Búsqueda binaria</td><td class="p-2 border"><code>O(log n)</code></td><td class="p-2 border font-mono">20</td><td class="p-2 border">Exige el arreglo ordenado</td></tr>
              <tr data-reveal><td class="p-2 border font-bold">Búsqueda secuencial</td><td class="p-2 border"><code>O(n)</code></td><td class="p-2 border font-mono">500 000</td><td class="p-2 border">No exige nada; paga el costo</td></tr>
              <tr data-reveal><td class="p-2 border font-bold">Sotmerge</td><td class="p-2 border"><code>O(n log n)</code></td><td class="p-2 border font-mono">19 931 396</td><td class="p-2 border">Necesita arreglo auxiliar</td></tr>
              <tr data-reveal><td class="p-2 border font-bold">Quicksort</td><td class="p-2 border"><code>O(n log n)</code> / <code>O(n²)</code></td><td class="p-2 border font-mono">19 931 396 / 5·10¹¹</td><td class="p-2 border">Depende del pivote y de la entrada</td></tr>
            </tbody>
          </table>
          <div class="bg-slate-900 text-white rounded-xl p-4">
            <p class="text-xs uppercase tracking-widest font-bold text-teal-300">El puente con la clase del jueves pasado</p>
            <p class="text-sm mt-1 leading-relaxed">La recurrencia era la manera de obtener la columna «operaciones» <em>sin ejecutar el programa</em>: cuántas partes (<code>a</code>), de qué tamaño (<code>n/b</code>), cuánto cuesta juntarlas (<code>f(n)</code>). El árbol de recursión solo cuenta niveles. <strong>El Teorema Maestro es el atajo; la tabla es el significado.</strong></p>
          </div>
          <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-sm text-emerald-950">
            <strong>Y lo que la prueba pide:</strong> trazas y comparaciones. Con <code>n = 1024</code> los conteos reales dieron 5 120 (Sotmerge, ordenado) y 523 776 (Quicksort, ordenado): <strong>102 veces más</strong>, con la misma recurrencia.
          </div>
        </div>
      `,
      notes: 'Este es el cierre del rescate y la frase que hay que dejar escrita: «el Teorema Maestro es el atajo; la tabla es el significado». Los conteos reales son de S07-conteo.c. Si preguntan si el Teorema entra en la prueba: lo que se evalúa son trazas y comparaciones; el Teorema queda como herramienta de consulta.'
    },
    {
      id: 'pnn8-7',
      title: 'Activación · ¿partir o elegir?',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-gradient-to-br from-slate-900 to-teal-900 text-white p-6 rounded-2xl">
            <p class="text-xs uppercase tracking-widest font-bold text-teal-300">Pregunta de partida</p>
            <p class="text-xl md:text-2xl font-bold mt-2 leading-snug">Divide y conquista <em>parte</em> el problema. ¿Qué estrategia usamos cuando en cada paso solo podemos <em>elegir</em> y no volver atrás?</p>
          </div>
          <div class="grid md:grid-cols-3 gap-3 text-sm">
            <div class="bg-white border-l-4 border-teal-500 rounded-xl p-3" data-reveal><strong>Antes (S7):</strong> ¿cuánto cuesta partir el problema? Recurrencias y Teorema Maestro.</div>
            <div class="bg-white border-l-4 border-teal-500 rounded-xl p-3" data-reveal><strong>Ahora:</strong> ¿qué se elige en cada paso y qué se gana con esa elección?</div>
            <div class="bg-white border-l-4 border-teal-500 rounded-xl p-3" data-reveal><strong>Siempre:</strong> una función de costo. Sin ella no hay optimización posible.</div>
          </div>
          <p class="text-sm text-slate-600">Se anotan dos o tres respuestas en la pizarra <strong>sin corregirlas</strong>: se contrastan con la diapositiva 11 y con el código.</p>
        </div>
      `,
      notes: 'No corregir las respuestas iniciales: la clase se cierra volviendo a ellas. Si alguien menciona «el más pequeño primero», no confirmarlo todavía: es la hipótesis que hay que probar.'
    },
    {
      id: 'pnn8-8',
      title: 'El método de adquisición',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-slate-700">En la literatura es el <strong>método voraz</strong> (<em>greedy</em>). Una sola idea: <strong>construir la solución por etapas, tomando en cada etapa la mejor opción disponible y sin volver atrás</strong>.</p>
          <table class="w-full text-sm border-collapse">
            <thead><tr class="bg-teal-700 text-white"><th class="p-2 border text-left">Pieza</th><th class="p-2 border text-left">Pregunta que responde</th><th class="p-2 border text-left">En la cinta</th></tr></thead>
            <tbody>
              <tr data-reveal><td class="p-2 border font-bold">Candidatos</td><td class="p-2 border">¿Qué se puede elegir?</td><td class="p-2 border">Los programas que aún no están guardados</td></tr>
              <tr data-reveal><td class="p-2 border font-bold">Función de selección</td><td class="p-2 border">¿Cuál es el «mejor» ahora?</td><td class="p-2 border">El de menor longitud</td></tr>
              <tr data-reveal><td class="p-2 border font-bold">Función de factibilidad</td><td class="p-2 border">¿La elección mantiene válida la solución?</td><td class="p-2 border">¿Queda sitio en la cinta? (aquí, siempre)</td></tr>
              <tr data-reveal><td class="p-2 border font-bold">Función objetivo</td><td class="p-2 border">¿Qué se minimiza o maximiza?</td><td class="p-2 border">El tiempo medio de recuperación</td></tr>
            </tbody>
          </table>
          <div class="bg-slate-900 text-white rounded-xl p-4 text-sm">
            <p class="text-xs uppercase tracking-widest font-bold text-teal-300">Para tener presente</p>
            <p class="mt-1">El método no «adivina»: <strong>elige con una regla</strong>. Lo que hay que demostrar es que esa regla conduce al óptimo.</p>
          </div>
        </div>
      `,
      notes: 'Las cuatro piezas se escriben en la pizarra antes de la diapositiva y se piden con la pregunta, no se leen. «Adquisición» es el nombre de la cátedra; «voraz» es el de la literatura: conviene decir ambos.'
    },
    {
      id: 'pnn8-9',
      title: 'Condiciones de uso · cuándo falla',
      contentHtml: `
        <div class="space-y-4">
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div class="bg-white border-2 border-emerald-300 rounded-2xl p-4">
              <p class="font-bold text-emerald-800">1 · Subestructura óptima</p>
              <p class="text-slate-700 mt-1">La solución óptima contiene soluciones óptimas de los subproblemas que va dejando.</p>
            </div>
            <div class="bg-white border-2 border-emerald-300 rounded-2xl p-4">
              <p class="font-bold text-emerald-800">2 · Propiedad de elección voraz</p>
              <p class="text-slate-700 mt-1">Existe una solución óptima que incluye la elección local hecha en el primer paso; y lo mismo en cada paso siguiente.</p>
            </div>
          </div>
          <div class="bg-rose-50 border border-rose-300 rounded-2xl p-4">
            <p class="text-xs uppercase font-bold text-rose-700">Cuándo falla</p>
            <p class="text-rose-950 mt-1">Cuando una elección local buena <strong>cierra una puerta</strong> que después se necesita.</p>
            <div class="grid md:grid-cols-2 gap-3 mt-3 text-sm">
              <div class="bg-white border rounded-xl p-3"><p class="font-bold text-rose-800">Mochila 0/1 · falla</p><p class="text-slate-700 mt-1">Tomar el objeto de mejor relación valor/peso puede impedir la combinación ganadora.</p></div>
              <div class="bg-white border rounded-xl p-3"><p class="font-bold text-emerald-800">Mochila fraccionaria · funciona</p><p class="text-slate-700 mt-1">Se puede llenar por partes: la elección local nunca cierra la puerta.</p></div>
            </div>
          </div>
          <p class="text-sm text-slate-600">Sin estas dos condiciones el método entrega <em>una</em> solución, no <em>la</em> solución. La mochila 0/1 se trabaja el viernes.</p>
        </div>
      `,
      notes: 'No desarrollar la mochila: solo se nombra como contraejemplo y se deja abierta para el viernes (sugerencia didáctica 3). La distinción fraccionaria/0-1 es la que hace visible por qué falla.'
    },
    {
      id: 'pnn8-10',
      title: 'La cinta magnética · T_i y MRT',
      contentHtml: `
        <div class="space-y-4">
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div class="bg-white border rounded-2xl p-4">
              <p class="font-bold text-slate-900">Acceso secuencial</p>
              <p class="text-slate-700 mt-1">Para leer el programa que está en la posición <code class="bg-slate-100 px-1 rounded">i</code> hay que recorrer <strong>todos los anteriores</strong>.</p>
            </div>
            <div class="bg-white border rounded-2xl p-4">
              <p class="font-bold text-slate-900">El orden importa</p>
              <p class="text-slate-700 mt-1">Con <code class="bg-slate-100 px-1 rounded">n</code> programas hay <code class="bg-slate-100 px-1 rounded">n!</code> órdenes: 120 para 5, 3 628 800 para 10.</p>
            </div>
          </div>
          <div class="bg-teal-50 border-2 border-teal-400 rounded-2xl p-5 space-y-3">
            <div>
              <p class="text-xs uppercase tracking-widest font-bold text-teal-700">Tiempo de recuperación del programa i</p>
              <p class="font-mono text-lg md:text-xl text-teal-950 mt-1">T<sub>i</sub> = L<sub>1</sub> + L<sub>2</sub> + … + L<sub>i</sub></p>
            </div>
            <div>
              <p class="text-xs uppercase tracking-widest font-bold text-teal-700">Tiempo medio de recuperación</p>
              <p class="font-mono text-lg md:text-xl text-teal-950 mt-1">MRT = (1/n) · Σ T<sub>i</sub></p>
            </div>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-950">
            Antes de seguir: <strong>¿cuál va primero, y por qué?</strong> Se anotan dos o tres respuestas sin corregirlas.
          </div>
        </div>
      `,
      notes: 'Preguntar «¿cuál va primero?» y anotar en la pizarra sin corregir. La respuesta se contrasta en la diap. 11 (fórmula) y en la diap. 13 (salida real).'
    },
    {
      id: 'pnn8-11',
      title: 'Por qué el orden creciente es óptimo',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white border rounded-xl p-4 text-sm">
            <p class="font-bold text-slate-900">1 · ¿Cuántas veces se suma cada longitud?</p>
            <p class="text-slate-700 mt-1"><code>L<sub>i</sub></code> aparece en <code>T<sub>i</sub>, T<sub>i+1</sub>, …, T<sub>n</sub></code>. Por lo tanto:</p>
            <p class="font-mono text-sm md:text-base bg-slate-100 rounded p-2 mt-2">Σ T<sub>i</sub> = n·L<sub>1</sub> + (n−1)·L<sub>2</sub> + … + 2·L<sub>n−1</sub> + 1·L<sub>n</sub></p>
            <p class="text-slate-700 mt-2">Los coeficientes son <strong>decrecientes</strong>: la longitud mayor debe llevar el coeficiente <strong>menor</strong>, es decir, el último lugar.</p>
          </div>
          <div class="bg-white border rounded-xl p-4 text-sm">
            <p class="font-bold text-slate-900">2 · Argumento de intercambio</p>
            <p class="text-slate-700 mt-1">Si hay dos posiciones <code>i &lt; j</code> con <code>L<sub>i</sub> &gt; L<sub>j</sub></code>, intercambiarlas cambia la suma en:</p>
            <p class="font-mono text-sm md:text-base bg-slate-100 rounded p-2 mt-2">(j − i)(L<sub>j</sub> − L<sub>i</sub>) &lt; 0</p>
            <p class="text-slate-700 mt-2">Es decir, <strong>disminuye</strong>. Ningún orden con una inversión puede ser óptimo.</p>
          </div>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-3"><strong>Conclusión:</strong> el orden creciente por longitud minimiza el MRT. En producción se llama <strong>SPT</strong> (<em>shortest processing time first</em>).</div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-3"><strong>Costo:</strong> ordenar cuesta <code>O(n log n)</code>; comparar los <code>n!</code> órdenes, <code>O(n!)</code>.</div>
          </div>
        </div>
      `,
      notes: 'La fórmula se escribe en la pizarra con los coeficientes n, n−1, …, 1 debajo de las longitudes. Sugerencia didáctica 2: mover una tarjeta con un número grande al último lugar para que se vea el efecto en el coeficiente.'
    },
    {
      id: 'pnn8-12',
      title: 'Tabla comparativa · partir frente a elegir',
      contentHtml: `
        <div class="space-y-4">
          <table class="w-full text-sm border-collapse">
            <thead><tr class="bg-slate-700 text-white"><th class="p-2 border text-left"></th><th class="p-2 border text-left">Divide y conquista (S4–S7)</th><th class="p-2 border text-left">Método de adquisición (S8)</th></tr></thead>
            <tbody>
              <tr data-reveal><td class="p-2 border font-bold">Qué hace con el problema</td><td class="p-2 border">Lo <strong>parte</strong> en subproblemas del mismo tipo</td><td class="p-2 border">Lo <strong>recorre</strong> eligiendo el mejor candidato</td></tr>
              <tr data-reveal><td class="p-2 border font-bold">Estructura de la solución</td><td class="p-2 border">Recursiva: <code>T(n) = aT(n/b) + f(n)</code></td><td class="p-2 border">Iterativa: una decisión por etapa</td></tr>
              <tr data-reveal><td class="p-2 border font-bold">Cómo se analiza</td><td class="p-2 border">Recurrencia / Teorema Maestro</td><td class="p-2 border">Prueba de optimalidad (intercambio) o contraejemplo</td></tr>
              <tr data-reveal><td class="p-2 border font-bold">Riesgo</td><td class="p-2 border">Mal caso base o mal tamaño de partición</td><td class="p-2 border">Una elección local que impide la solución global</td></tr>
            </tbody>
          </table>
          <div class="bg-teal-50 border border-teal-200 rounded-xl p-4 text-sm text-teal-950">
            Son <strong>estrategias distintas</strong>, no niveles de dificultad. Un problema puede resolverse con una y no con la otra, o con las dos: lo que cambia es <em>cómo se descompone el trabajo</em>.
          </div>
        </div>
      `,
      notes: 'Cerrar la teoría con esta tabla y volver a la pregunta de la diap. 7: lo que se elige en cada paso es lo que distingue al método. No se resuelven recurrencias: solo se contrasta.'
    },
    {
      id: 'pnn8-13',
      title: 'Código en vivo · S08-cintas.c',
      contentHtml: `
        <div class="space-y-3">
          <p class="text-sm text-slate-600">Cinco programas de longitudes <strong>12, 4, 9, 2, 7</strong>. El programa calcula el MRT del orden creciente, el del decreciente y <strong>enumera las 120 permutaciones</strong>.</p>
          <div data-tabs>
            <section data-tab="MRT">
              <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto"><p class="text-[10px] uppercase tracking-widest text-slate-400 mb-2">C</p><pre class="text-xs font-mono leading-5">#define N 5
int longitudes[N] = {12, 4, 9, 2, 7};

/* T_i = suma de las longitudes hasta la posición i (inclusive).
   MRT = (1/n) * suma de los T_i.                            */
double mrt(int orden[], int n)
{
    double total = 0.0;
    for (int i = 0; i &lt; n; i++) {
        int acumulado = 0;
        for (int j = 0; j &lt;= i; j++)
            acumulado += orden[j];
        total += acumulado;
    }
    return total / n;
}

/* La misma suma sin dividir: numerador del MRT,
   que es lo que se compara al buscar el optimo. */
int suma_tiempos(int orden[], int n) { /* ver archivo */ }</pre></div>
            </section>
            <section data-tab="Ordenar">
              <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto"><p class="text-[10px] uppercase tracking-widest text-slate-400 mb-2">C</p><pre class="text-xs font-mono leading-5">int main(void)
{
    int creciente[N], decreciente[N];

    /* (a) Orden creciente: método de adquisición. */
    for (int i = 0; i &lt; N; i++) creciente[i] = longitudes[i];
    for (int i = 1; i &lt; N; i++) {              /* insertion sort, a mano */
        int clave = creciente[i], j = i - 1;
        while (j &gt;= 0 &amp;&amp; creciente[j] &gt; clave) {
            creciente[j + 1] = creciente[j];
            j--;
        }
        creciente[j + 1] = clave;
    }
    for (int i = 0; i &lt; N; i++)
        decreciente[i] = creciente[N - 1 - i];

}</pre></div>
            </section>
            <section data-tab="120 permutaciones">
              <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto"><p class="text-[10px] uppercase tracking-widest text-slate-400 mb-2">C</p><pre class="text-xs font-mono leading-5">int mejor_suma = -1, mejor_orden[N];
void permutar(int nivel, int n)
{
    if (nivel == n) {                      /* permutación completa */
        int s = suma_tiempos(perm, n);
        if (mejor_suma &lt; 0 || s &lt; mejor_suma) {
            mejor_suma = s;
            for (int i = 0; i &lt; n; i++) mejor_orden[i] = perm[i];
        }
        return;
    }
    for (int i = 0; i &lt; n; i++)
        if (!usado[i]) {
            usado[i] = 1; perm[nivel] = longitudes[i];
            permutar(nivel + 1, n);        /* retroceso */
            usado[i] = 0;
        }
}</pre></div>
            </section>
          </div>
        </div>
      `,
      notes: 'Código en vivo 18 min con las diap. 12 y 13. El archivo también guarda peor_suma/peor_orden y el contador de permutaciones exploradas: en la diapositiva solo se muestra el bloque mínimo. Archivo completo: 03-Clases/PROGRAMACION-NO-NUMERICA-II/S08-cintas.c. Compilar con: gcc -Wall -o cintas S08-cintas.c && ./cintas. Predicción (3 min) antes de ejecutar: cada pareja anota su MRT estimado para el orden creciente. La enumeración es solo verificación: la demostración general es el argumento de intercambio de la diap. 11.'
    },
    {
      id: 'pnn8-14',
      title: 'Salida real · 77 frente a 127',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4" data-reveal>
            <p class="text-xs font-bold text-emerald-900 mb-1">Salida de ./cintas</p>
            <pre class="text-xs font-mono text-emerald-950 leading-5">Programas en la cinta (longitudes): 12 4 9 2 7

creciente (SPT):        2  4  7  9 12   |  suma T_i =  77  MRT =  15.40
decreciente:           12  9  7  4  2   |  suma T_i = 127  MRT =  25.40

Permutaciones exploradas: 120  (5! = 120)
mejor (exhaustiva):     2  4  7  9 12   |  suma T_i =  77  MRT =  15.40
peor  (exhaustiva):    12  9  7  4  2   |  suma T_i = 127  MRT =  25.40

Verificacion de la formula: suma T_i = 5*2 + 4*4 + 3*7 + 2*9 + 1*12 = 77
El orden creciente SI es el optimo.</pre>
          </div>
          <ol class="list-decimal list-inside text-sm text-slate-700 space-y-1">
            <li data-reveal>Los coeficientes <code>5, 4, 3, 2, 1</code> son exactamente los de la fórmula.</li>
            <li data-reveal>El orden creciente coincide con el mejor de las 120 permutaciones.</li>
            <li data-reveal>El peor caso es el <strong>orden inverso</strong>: 65 % más de tiempo medio (25,40 frente a 15,40).</li>
            <li data-reveal>El programa <strong>no demuestra</strong> la optimalidad: la enumera para este caso.</li>
          </ol>
        </div>
      `,
      notes: 'Salida real (gcc, 12/11/2026); sin generador aleatorio, es idéntica en cualquier equipo. Volver a las respuestas anotadas en la diap. 7 y 11: ¿quién dijo «el más pequeño primero»? ¿quién dijo «el más grande primero»?'
    },
    {
      id: 'pnn8-15',
      title: 'Práctica guiada · los seis órdenes de {2, 5, 4}',
      contentHtml: `
        <div class="space-y-3">
          <p class="text-sm text-slate-600">Con <code class="bg-slate-100 px-1 rounded">{2, 5, 4}</code> hay <strong>3! = 6</strong> órdenes. Se reparten dos parejas por orden y se completa la tabla en la pizarra.</p>
          <table class="w-full text-sm border-collapse">
            <thead><tr class="bg-teal-700 text-white"><th class="p-2 border text-left">Orden</th><th class="p-2 border text-left">Σ T<sub>i</sub></th><th class="p-2 border text-left">MRT</th></tr></thead>
            <tbody>
              <tr><td class="p-2 border font-mono">2, 5, 4</td><td class="p-2 border text-slate-400">…</td><td class="p-2 border text-slate-400">…</td></tr>
              <tr><td class="p-2 border font-mono">2, 4, 5</td><td class="p-2 border text-slate-400">…</td><td class="p-2 border text-slate-400">…</td></tr>
              <tr><td class="p-2 border font-mono">5, 2, 4</td><td class="p-2 border text-slate-400">…</td><td class="p-2 border text-slate-400">…</td></tr>
              <tr><td class="p-2 border font-mono">5, 4, 2</td><td class="p-2 border text-slate-400">…</td><td class="p-2 border text-slate-400">…</td></tr>
              <tr><td class="p-2 border font-mono">4, 2, 5</td><td class="p-2 border text-slate-400">…</td><td class="p-2 border text-slate-400">…</td></tr>
              <tr><td class="p-2 border font-mono">4, 5, 2</td><td class="p-2 border text-slate-400">…</td><td class="p-2 border text-slate-400">…</td></tr>
            </tbody>
          </table>
          <div class="bg-teal-50 border border-teal-200 rounded-xl p-4 text-sm text-teal-950" data-reveal>
            <strong>Cierre:</strong> verificar el ganador con la fórmula → <code>3·2 + 2·4 + 1·5 = 6 + 8 + 5 = 19</code>.
          </div>
        </div>
      `,
      notes: 'Respuestas: 2,5,4 → 20 / 6,67 · 2,4,5 → 19 / 6,33 (óptimo) · 5,2,4 → 23 / 7,67 · 5,4,2 → 25 / 8,33 · 4,2,5 → 21 / 7,00 · 4,5,2 → 24 / 8,00. No dictar la tabla: se construye con los estudiantes en la pizarra (12 min).'
    },
    {
      id: 'pnn8-16',
      title: 'Ejercicios para la casa',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-sm text-slate-600">No se resuelven en clase. Se corrigen al inicio del viernes, en 4 minutos, y no se entregan.</p>
          <div class="space-y-2 text-sm text-slate-700">
            <div class="bg-white border rounded-xl p-3" data-reveal><strong>1.</strong> Longitudes <code>10, 3, 7, 1, 6</code>. Escriba el orden óptimo, la suma de los <code>T<sub>i</sub></code> y el MRT.</div>
            <div class="bg-white border rounded-xl p-3" data-reveal><strong>2.</strong> Si <em>todas</em> las longitudes fueran iguales a <code>L</code>, ¿importa el orden? Justifique con la fórmula.</div>
            <div class="bg-white border rounded-xl p-3" data-reveal><strong>3.</strong> Dos cintas con <code>1, 2, 3, 4, 5, 6</code>. Compare el MRT total de (A) cinta 1 = <code>1, 2, 3</code> y cinta 2 = <code>4, 5, 6</code>; (B) reparto alternado: cinta 1 = <code>1, 3, 5</code> y cinta 2 = <code>2, 4, 6</code>.</div>
            <div class="bg-white border rounded-xl p-3" data-reveal><strong>4.</strong> Con 10 programas hay 3 628 800 órdenes y con 20, más de 2·10<sup>18</sup>. ¿Qué implica eso para la enumeración como método de solución?</div>
          </div>
        </div>
      `,
      notes: 'Sin práctica autónoma en clase (decisión docente del 12/11): la diapositiva queda como trabajo para la casa y se corrige en 4 min al inicio del viernes. Respuestas: 1. Orden 1,3,6,7,10; Σ T = 5·1+4·3+3·6+2·7+1·10 = 59; MRT = 11,8. 2. No importa: Σ T = L·n(n+1)/2, independiente del orden. 3. (A) 10 + 28 = 38; (B) 14 + 20 = 34 → mejor B. 4. La enumeración es O(n!) y deja de ser viable; solo se usa para verificar en casos pequeños, y el algoritmo voraz se justifica con la prueba.'
    },
    {
      id: 'pnn8-17',
      title: 'Cierre y anuncio del viernes',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-gradient-to-br from-slate-900 to-teal-900 text-white p-6 rounded-2xl">
            <p class="text-xs uppercase tracking-widest font-bold text-teal-300">Idea de la clase</p>
            <p class="text-lg md:text-xl font-bold mt-2 leading-snug">La estrategia dice <em>cómo se elige</em>; la prueba dice <em>si esa elección es la correcta</em>. Sin prueba, el método es solo una costumbre.</p>
          </div>
          <div class="bg-white border-l-4 border-teal-600 rounded-xl p-4">
            <p class="font-bold text-slate-900">Ticket de salida</p>
            <p class="text-slate-700 text-sm mt-1">Cinta con longitudes <code>5, 1, 9</code>: orden óptimo, <code>Σ T<sub>i</sub></code> y MRT.</p>
          </div>
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div class="bg-amber-50 border border-amber-200 rounded-2xl p-4"><p class="text-xs uppercase font-bold text-amber-800">Viernes 13/11</p><p class="font-bold text-amber-950 mt-1">El problema de la bolsa de papel</p><p class="text-amber-900 mt-1">Selección con restricción de capacidad y cierre del método de adquisición (III.1–III.2). Traer el cuaderno con la tabla de hoy.</p></div>
            <div class="bg-rose-50 border border-rose-200 rounded-2xl p-4"><p class="text-xs uppercase font-bold text-rose-700">Jueves 19/11</p><p class="font-bold text-rose-950 mt-1">Prueba escrita · 10 %</p><p class="text-rose-900 mt-1">Unidad II, divide y conquista. Incluye Sortmerge 2: revisar la variante antes de la prueba.</p></div>
          </div>
        </div>
      `,
      notes: 'Ticket esperado: 1, 5, 9; Σ T = 3 + 6 + 15 = 24; MRT = 8. Anunciar el viernes (bolsa de papel) y la prueba del 19/11. El enunciado exacto de la bolsa de papel está pendiente de confirmación por el docente.'
    },
    {
      id: 'pnn8-18',
      title: 'Fuentes del jueves',
      contentHtml: `
        <div class="space-y-4 text-sm">
          <h3 class="text-xl font-bold text-slate-900">Fuentes de la sesión</h3>
          <ul class="space-y-2 text-slate-700">
            <li>Bourke, C. <em>Computer Science II</em>, cap. 5 «Algorithm Analysis» — §5.1 (p. 102) y §5.4.1 (pp. 109–110).</li>
            <li>GeeksforGeeks. <em>Optimal Storage on Tapes</em>. https://www.geeksforgeeks.org/dsa/optimal-storage-tapes/</li>
            <li>GeeksforGeeks. <em>Greedy Algorithms</em>. https://www.geeksforgeeks.org/dsa/greedy-algorithms/</li>
            <li>Cormen, T., Leiserson, C., Rivest, R. y Stein, C. (2009). <em>Introduction to Algorithms</em> (3.ª ed.). MIT Press.</li>
            <li>Programas de la cátedra: <code>S08-big-o.c</code> y <code>S08-cintas.c</code> (salidas reales del 12/11/2026).</li>
          </ul>
          <p class="text-xs text-slate-500">Programa analítico U-II y U-III y PGA 2026-2. Bourke es la fuente del rescate: definición de O grande y evidencia empírica. Cormen se cita como referencia teórica del argumento de intercambio: no hay ejemplar en la biblioteca del docente.</p>
        </div>
      `,
      notes: 'Si el docente incorpora Cormen a la biblioteca, fijar la página del argumento de intercambio (cap. 16, «Greedy Algorithms», sección de colas de prioridad / scheduling).'
    },
    {
      id: 'pnn8-19',
      title: 'Viernes 13/11 · El problema de la bolsa de papel',
      contentHtml: `
        <div class="space-y-7">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center text-white text-4xl shadow-lg">🛍️</div>
            <div>
              <p class="text-sm uppercase tracking-widest font-bold text-teal-700">Programación No Numérica II · Unidad III</p>
              <h2 class="text-3xl md:text-4xl font-bold text-slate-900">El problema de la bolsa de papel</h2>
              <p class="text-slate-500 mt-1">La misma bolsa, dos problemas distintos</p>
            </div>
          </div>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-teal-50 border border-teal-200 rounded-xl p-4 text-teal-950"><p class="text-xs uppercase font-bold text-teal-700">Variante fraccionaria</p><p class="text-lg font-bold mt-1">El objeto se puede partir</p><p class="text-sm mt-1">Carga a granel: arena, harina, combustible.</p></div>
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-4 text-rose-950"><p class="text-xs uppercase font-bold text-rose-700">Variante 0/1</p><p class="text-lg font-bold mt-1">El objeto entra entero o no entra</p><p class="text-sm mt-1">Carga discreta: una laptop, un libro, un instrumento.</p></div>
          </div>
          <p class="text-sm text-slate-500">Viernes 13/11/2026 · 16:45–18:15 · Aula A-06 · Sección A · IUPSM — Extensión Ciudad Ojeda</p>
        </div>
      `,
      notes: 'Inicio 5 min con las diap. 20 y 21. Devolución de 60 s del ticket del jueves (orden 1,5,9; MRT 8). Lista de cotejo (0 %) sobre la práctica.'
    },
    {
      id: 'pnn8-20',
      title: 'Ruta del viernes',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-slate-600 text-lg">El jueves el voraz funcionó. Hoy lo ponemos frente a un problema donde <strong>puede fallar</strong> — y aprendemos a saber <strong>cuándo</strong>.</p>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-teal-50 border border-teal-200 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-teal-700">Teoría</p><h3 class="text-lg font-bold text-teal-950 mt-2">Dos enunciados</h3><p class="text-sm text-teal-900 mt-2">Qué cambia con una sola frase y qué no.</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-slate-700">Código en vivo</p><h3 class="text-lg font-bold text-slate-950 mt-2">Tres estrategias</h3><p class="text-sm text-slate-700 mt-2">Fraccionaria, voraz 0/1 y dinámica, sobre la misma instancia.</p></div>
            <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-emerald-700">Práctica</p><h3 class="text-lg font-bold text-emerald-950 mt-2">Llenar la tabla</h3><p class="text-sm text-emerald-900 mt-2">Una instancia de 15 celdas, a mano, en el cuaderno.</p></div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn8-21',
      title: 'Pregunta puente · ¿el voraz funciona siempre?',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-gradient-to-br from-slate-900 to-teal-900 text-white p-6 rounded-2xl">
            <p class="text-xs uppercase tracking-widest font-bold text-teal-300">Pregunta de partida</p>
            <p class="text-xl md:text-2xl font-bold mt-2 leading-snug">En la cinta el voraz era óptimo porque cada longitud se pagaba varias veces. ¿Basta con ordenar y tomar lo mejor para <em>cualquier</em> problema?</p>
          </div>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-white border-l-4 border-emerald-500 rounded-xl p-3" data-reveal><strong>Lo que sí se conserva:</strong> candidatos, función de selección, función objetivo.</div>
            <div class="bg-white border-l-4 border-rose-500 rounded-xl p-3" data-reveal><strong>Lo que puede cambiar:</strong> la <strong>factibilidad</strong>. Y ahí se decide todo.</div>
          </div>
          <p class="text-sm text-slate-600">Se anota la respuesta del grupo en la pizarra y se vuelve a ella en el cierre.</p>
        </div>
      `,
      notes: 'No responder todavía. La respuesta se construye con el contraejemplo de la diap. 24 y se cierra en la diap. 30.'
    },
    {
      id: 'pnn8-22',
      title: 'El problema · una bolsa, dos enunciados',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white border rounded-xl p-4 text-sm text-slate-700">
            <p class="font-bold text-slate-900">Enunciado</p>
            <p class="mt-1">Una <strong>bolsa de papel</strong> resiste hasta <code class="bg-slate-100 px-1 rounded">W</code> unidades de peso. Hay <code class="bg-slate-100 px-1 rounded">n</code> objetos; el objeto <code>i</code> tiene peso <code>w<sub>i</sub></code> y valor <code>v<sub>i</sub></code>. Se quiere el <strong>valor total máximo</strong> sin pasarse de <code>W</code>.</p>
          </div>
          <table class="w-full text-sm border-collapse">
            <thead><tr class="bg-teal-700 text-white"><th class="p-2 border text-left"></th><th class="p-2 border text-left">Fraccionaria</th><th class="p-2 border text-left">0/1</th></tr></thead>
            <tbody>
              <tr data-reveal><td class="p-2 border font-bold">¿Se puede partir?</td><td class="p-2 border">Sí: <code>0 ≤ x<sub>i</sub> ≤ 1</code></td><td class="p-2 border">No: <code>x<sub>i</sub> ∈ {0, 1}</code></td></tr>
              <tr data-reveal><td class="p-2 border font-bold">Caso real</td><td class="p-2 border">Arena, harina, combustible</td><td class="p-2 border">Laptop, libro, instrumento</td></tr>
              <tr data-reveal><td class="p-2 border font-bold">Método</td><td class="p-2 border"><strong>Voraz</strong> (adquisición)</td><td class="p-2 border"><strong>Programación dinámica</strong></td></tr>
              <tr data-reveal><td class="p-2 border font-bold">Costo</td><td class="p-2 border"><code>O(n log n)</code></td><td class="p-2 border"><code>O(n · W)</code></td></tr>
            </tbody>
          </table>
          <div class="bg-slate-900 text-white rounded-xl p-4">
            <p class="text-xs uppercase tracking-widest font-bold text-teal-300">Para dejar escrito</p>
            <p class="text-lg font-semibold mt-1">La selección es la misma; la factibilidad no.</p>
          </div>
        </div>
      `,
      notes: 'Escribir la frase final en la pizarra y dejarla toda la clase. Es la idea que se evalúa en el ticket de salida.'
    },
    {
      id: 'pnn8-23',
      title: 'Fraccionaria · densidad y prueba',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-teal-50 border-2 border-teal-400 rounded-2xl p-4">
            <p class="text-xs uppercase tracking-widest font-bold text-teal-700">Criterio de selección</p>
            <p class="font-mono text-lg md:text-xl text-teal-950 mt-1">densidad<sub>i</sub> = v<sub>i</sub> / w<sub>i</sub></p>
            <p class="text-sm text-teal-900 mt-2">Ordenar de mayor a menor y llenar la bolsa; si el siguiente no cabe entero, se toma la fracción que cabe y se termina.</p>
          </div>
          <div class="bg-white border rounded-xl p-4 text-sm">
            <p class="font-bold text-slate-900">Por qué es óptimo (intercambio)</p>
            <ol class="mt-2 space-y-1 list-decimal list-inside text-slate-700">
              <li data-reveal>Si en una solución óptima <strong>sobra capacidad</strong>, se añade una porción del objeto más denso: el valor aumenta → no era óptima.</li>
              <li data-reveal>Si está llena, hay dentro una porción de un objeto de densidad <strong>menor o igual</strong>. Se cambia por la misma cantidad del más denso: el peso no cambia y el valor no baja.</li>
              <li data-reveal>Repitiendo el cambio, la solución óptima <strong>coincide con la elección voraz</strong>.</li>
            </ol>
          </div>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-3"><strong>Costo:</strong> ordenar <code>O(n log n)</code> + recorrer <code>O(n)</code>.</div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-3"><strong>Mismo razonamiento</strong> que el intercambio de las cintas: cambió el criterio, no el método.</div>
          </div>
        </div>
      `,
      notes: 'El argumento se construye con preguntas: «si sobra capacidad, ¿qué hago?»; «si está llena, ¿qué hay dentro que valga menos por unidad de peso?». No dictar los tres pasos.'
    },
    {
      id: 'pnn8-24',
      title: '0/1 · el contraejemplo',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-sm text-slate-600">Capacidad <strong>10</strong>. Tres objetos:</p>
          <table class="w-full text-sm border-collapse">
            <thead><tr class="bg-slate-700 text-white"><th class="p-2 border text-left">Objeto</th><th class="p-2 border text-left">Peso</th><th class="p-2 border text-left">Valor</th><th class="p-2 border text-left">Densidad</th></tr></thead>
            <tbody>
              <tr><td class="p-2 border font-bold">1</td><td class="p-2 border">6</td><td class="p-2 border">30</td><td class="p-2 border font-mono text-emerald-700">5,00</td></tr>
              <tr><td class="p-2 border font-bold">2</td><td class="p-2 border">5</td><td class="p-2 border">20</td><td class="p-2 border font-mono">4,00</td></tr>
              <tr><td class="p-2 border font-bold">3</td><td class="p-2 border">5</td><td class="p-2 border">20</td><td class="p-2 border font-mono">4,00</td></tr>
            </tbody>
          </table>
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div class="bg-rose-50 border border-rose-300 rounded-2xl p-4">
              <p class="text-xs uppercase font-bold text-rose-700">Lo que hace el voraz</p>
              <p class="mt-1 text-rose-950">Toma el <strong>1</strong> (peso 6, valor 30). Quedan 4 unidades y ningún objeto cabe: <strong>30</strong>.</p>
            </div>
            <div class="bg-emerald-50 border border-emerald-300 rounded-2xl p-4">
              <p class="text-xs uppercase font-bold text-emerald-700">Lo que es óptimo</p>
              <p class="mt-1 text-emerald-950">Toma <strong>2 + 3</strong>: peso 10 exacto, valor <strong>40</strong>.</p>
            </div>
          </div>
          <div class="bg-slate-900 text-white rounded-xl p-4">
            <p class="text-xs uppercase tracking-widest font-bold text-teal-300">Diagnóstico con las condiciones del jueves</p>
            <p class="text-sm mt-1">Subestructura óptima: <strong>sí</strong>. Propiedad de elección voraz: <strong>no</strong>. Tomar el objeto 1 no pertenece a ninguna solución óptima.</p>
          </div>
          <p class="text-sm text-rose-800"><strong>El voraz deja 10 sobre la mesa: el 25 % del óptimo.</strong></p>
        </div>
      `,
      notes: 'Escribir la instancia en la pizarra y dejar que la resuelvan antes de mostrar la comparación. La frase «no pertenece a ninguna solución óptima» es la clave conceptual.'
    },
    {
      id: 'pnn8-25',
      title: '0/1 · la tabla y la recurrencia',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white border-2 border-teal-300 rounded-2xl p-4 text-sm">
            <p class="font-bold text-slate-900">Definición</p>
            <p class="text-slate-700 mt-1"><code>V(i, w)</code> = mejor valor usando los <strong>primeros <code>i</code></strong> objetos con capacidad <code>w</code>.</p>
            <div class="bg-slate-100 rounded p-3 mt-3 font-mono text-xs md:text-sm leading-6">
V(0, w) = 0 ·  V(i, 0) = 0<br>
V(i, w) = V(i−1, w)                        si w<sub>i</sub> &gt; w<br>
V(i, w) = max( V(i−1, w),                  si w<sub>i</sub> ≤ w<br>
               V(i−1, w − w<sub>i</sub>) + v<sub>i</sub> )
            </div>
          </div>
          <div class="grid md:grid-cols-3 gap-3 text-sm">
            <div class="bg-white border rounded-xl p-3"><p class="font-bold text-slate-900">Se llena por filas</p><p class="text-slate-700 mt-1">Fila = un objeto más. Columna = capacidad disponible.</p></div>
            <div class="bg-white border rounded-xl p-3"><p class="font-bold text-slate-900">La respuesta</p><p class="text-slate-700 mt-1">Está en la última celda: <code>V(n, W)</code>.</p></div>
            <div class="bg-white border rounded-xl p-3"><p class="font-bold text-slate-900">Se reconstruye</p><p class="text-slate-700 mt-1">Si <code>V(i,w) ≠ V(i−1,w)</code>, el objeto <code>i</code> entró.</p></div>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-950">
            <strong>Pseudopolinomial:</strong> <code>O(n · W)</code> depende del <strong>valor</strong> de <code>W</code>, no del tamaño de los datos. Con <code>W = 10⁹</code> la tabla no cabe en ningún equipo.
          </div>
        </div>
      `,
      notes: 'No dar la tabla hecha: se construye en el código (diap. 27) y en la práctica guiada (diap. 28). Aquí solo la definición y el costo.'
    },
    {
      id: 'pnn8-26',
      title: 'Código en vivo · S08-bolsa.c',
      contentHtml: `
        <div class="space-y-3">
          <p class="text-sm text-slate-600">Un solo programa, <strong>una sola instancia</strong> (W = 10; objetos (6,30), (5,20), (5,20)) y las tres estrategias.</p>
          <div data-tabs>
            <section data-tab="Fraccionaria">
              <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto"><p class="text-[10px] uppercase tracking-widest text-slate-400 mb-2">C</p><pre class="text-xs font-mono leading-5">double voraz_fraccionario(Objeto a[], int n, int capacidad)
{
    double total = 0.0;
    int resto = capacidad;

    for (int i = 0; i &lt; n &amp;&amp; resto &gt; 0; i++) {
        if (a[i].peso &lt;= resto) {            /* cabe entero        */
            total += a[i].valor;
            resto -= a[i].peso;
        } else {                             /* cabe una fraccion  */
            double frac = (double) resto / a[i].peso;
            total += a[i].valor * frac;
            resto = 0;
        }
    }
    return total;
}</pre></div>
            </section>
            <section data-tab="Dinámica">
              <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto"><p class="text-[10px] uppercase tracking-widest text-slate-400 mb-2">C</p><pre class="text-xs font-mono leading-5">int V[N + 1][W + 1];

int dinamica_cero_uno(Objeto a[], int n, int capacidad)
{
    for (int w = 0; w &lt;= capacidad; w++) V[0][w] = 0;

    for (int i = 1; i &lt;= n; i++) {
        for (int w = 0; w &lt;= capacidad; w++) {
            V[i][w] = V[i - 1][w];                 /* no se toma */
            if (a[i - 1].peso &lt;= w) {              /* si cabe     */
                int con = V[i - 1][w - a[i - 1].peso] + a[i - 1].valor;
                if (con &gt; V[i][w]) V[i][w] = con;
            }
        }
    }
    return V[n][capacidad];
}</pre></div>
            </section>
            <section data-tab="Reconstrucción">
              <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto"><p class="text-[10px] uppercase tracking-widest text-slate-400 mb-2">C</p><pre class="text-xs font-mono leading-5">void reconstruir(Objeto a[], int n, int capacidad)
{
    int w = capacidad;

    printf("  objetos elegidos:");
    for (int i = n; i &gt; 0; i--) {
        if (V[i][w] != V[i - 1][w]) {         /* el objeto i entro */
            printf(" %d", a[i - 1].indice);
            w -= a[i - 1].peso;
        }
    }
    printf("   (peso usado %d de %d)\n", capacidad - w, capacidad);
}</pre></div>
            </section>
          </div>
        </div>
      `,
      notes: 'Código en vivo 20 min con la diap. 27. Archivo completo: 03-Clases/PROGRAMACION-NO-NUMERICA-II/S08-bolsa.c. Compilar: gcc -Wall -o bolsa S08-bolsa.c && ./bolsa. Predicción (3 min): cada pareja anota cuánto dará el voraz 0/1; casi todos dirán 40 y la salida dirá 30.'
    },
    {
      id: 'pnn8-27',
      title: 'Salida real · 46 / 30 / 40',
      contentHtml: `
        <div class="space-y-3">
          <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4" data-reveal>
            <p class="text-xs font-bold text-emerald-900 mb-1">Salida de ./bolsa (extracto)</p>
            <pre class="text-[11px] font-mono text-emerald-950 leading-5">  fraccionaria: objeto 1 entero  ( 6/10)  valor   30.0
  fraccionaria: objeto 2 al 80%      ( 4/10)  valor   46.0
  voraz 0/1:     objeto 1 entero  ( 6/10)  valor     30
  voraz 0/1:     objeto 2 descartado ( 5/10)
  voraz 0/1:     objeto 3 descartado ( 5/10)

  RESULTADO fraccionaria (voraz) :   46.0
  RESULTADO 0/1 voraz            :     30   &lt;-- no es el optimo
  RESULTADO 0/1 dinamica         :     40

      w:   0   1   2   3   4   5   6   7   8   9  10
  i=0         0   0   0   0   0   0   0   0   0   0   0
  i=1 o1     0   0   0   0   0   0  30  30  30  30  30
  i=2 o2     0   0   0   0   0  20  30  30  30  30  30
  i=3 o3     0   0   0   0   0  20  30  30  30  30  40
  objetos elegidos: 3 2   (peso usado 10 de 10)</pre>
          </div>
          <ol class="list-decimal list-inside text-sm text-slate-700 space-y-1">
            <li data-reveal><strong>46,0</strong>: la fraccionaria usa toda la capacidad (80 % del objeto 2). Por eso el voraz es óptimo ahí.</li>
            <li data-reveal><strong>30</strong>: el mismo orden, sin poder partir, <strong>desperdicia 4 unidades</strong> de capacidad.</li>
            <li data-reveal><strong>40</strong>: el óptimo está en la combinación 2 + 3, que el voraz nunca consideró.</li>
            <li data-reveal>En la fila <code>i=3</code>, columna 10, el valor <strong>salta de 30 a 40</strong>: ahí se ve el punto exacto donde el voraz se detuvo.</li>
            <li data-reveal>La reconstrucción devuelve los objetos <strong>2 y 3</strong>: la tabla da el valor <em>y</em> la decisión.</li>
          </ol>
        </div>
      `,
      notes: 'Salida real (gcc, 12/11/2026); sin aleatoriedad, idéntica en cualquier equipo. Aclarar que el programa verifica esta instancia, no demuestra los teoremas: la prueba está en las diap. 23 y 25.'
    },
    {
      id: 'pnn8-28',
      title: 'Práctica guiada · la tabla de W = 4',
      contentHtml: `
        <div class="space-y-3">
          <div class="bg-teal-50 border border-teal-300 rounded-xl p-3 text-sm text-teal-950 font-mono">
            W = 4 &nbsp;·&nbsp; A (3, 5) &nbsp;·&nbsp; B (2, 3) &nbsp;·&nbsp; C (2, 3)
          </div>
          <div class="grid md:grid-cols-4 gap-2 text-xs text-slate-600">
            <div class="bg-white border rounded-lg p-2">1 · Densidades y orden voraz</div>
            <div class="bg-white border rounded-lg p-2">2 · ¿Cuánto da el voraz 0/1?</div>
            <div class="bg-white border rounded-lg p-2">3 · Llenar la tabla 3 × 5</div>
            <div class="bg-white border rounded-lg p-2">4 · Reconstruir y comparar</div>
          </div>
          <table class="w-full text-sm border-collapse">
            <thead><tr class="bg-slate-700 text-white"><th class="p-2 border text-left">V(i, w)</th><th class="p-2 border">0</th><th class="p-2 border">1</th><th class="p-2 border">2</th><th class="p-2 border">3</th><th class="p-2 border">4</th></tr></thead>
            <tbody>
              <tr><td class="p-2 border font-bold">i = 0</td><td class="p-2 border text-slate-300">·</td><td class="p-2 border text-slate-300">·</td><td class="p-2 border text-slate-300">·</td><td class="p-2 border text-slate-300">·</td><td class="p-2 border text-slate-300">·</td></tr>
              <tr><td class="p-2 border font-bold">i = 1 · A</td><td class="p-2 border text-slate-300">·</td><td class="p-2 border text-slate-300">·</td><td class="p-2 border text-slate-300">·</td><td class="p-2 border text-slate-300">·</td><td class="p-2 border text-slate-300">·</td></tr>
              <tr><td class="p-2 border font-bold">i = 2 · B</td><td class="p-2 border text-slate-300">·</td><td class="p-2 border text-slate-300">·</td><td class="p-2 border text-slate-300">·</td><td class="p-2 border text-slate-300">·</td><td class="p-2 border text-slate-300">·</td></tr>
              <tr><td class="p-2 border font-bold">i = 3 · C</td><td class="p-2 border text-slate-300">·</td><td class="p-2 border text-slate-300">·</td><td class="p-2 border text-slate-300">·</td><td class="p-2 border text-slate-300">·</td><td class="p-2 border text-slate-300">·</td></tr>
            </tbody>
          </table>
          <p class="text-sm text-slate-600">12 min en parejas. La tabla se llena en el <strong>cuaderno</strong> y se completa en la pizarra entre todos; no se proyecta resuelta.</p>
        </div>
      `,
      notes: 'Respuestas: densidades A 1,67 · B 1,50 · C 1,50. Voraz 0/1: A (peso 3) y nada más → 5. Tabla: fila 1 = 0 0 0 5 5 · fila 2 = 0 0 3 5 5 · fila 3 = 0 0 3 5 6. Óptimo 6 con B + C (peso 4). La tabla contradice al voraz, igual que en la instancia grande.'
    },
    {
      id: 'pnn8-29',
      title: 'Práctica autónoma en parejas',
      contentHtml: `
        <div class="space-y-3">
          <p class="text-sm text-slate-600">16 min. Cuaderno. Se corrigen dos ejercicios al final; no se entrega.</p>
          <div class="space-y-2 text-sm text-slate-700">
            <div class="bg-white border rounded-xl p-3" data-reveal><strong>1.</strong> La instancia del código con capacidad <strong>8</strong>: calcule el valor de la fraccionaria y el de la 0/1. ¿Se acercan o se separan?</div>
            <div class="bg-white border rounded-xl p-3" data-reveal><strong>2.</strong> <em>Casos borde:</em> ¿qué pasa si un objeto pesa 0? ¿Y si la capacidad es 0? Una línea por caso.</div>
            <div class="bg-white border rounded-xl p-3" data-reveal><strong>3.</strong> Con <code>n = 100</code>: ¿cuántas combinaciones tiene la búsqueda exhaustiva? ¿Qué implica frente a una tabla de <code>100 × W</code>?</div>
            <div class="bg-white border rounded-xl p-3" data-reveal><strong>4.</strong> <code>W = 3</code>; A (1, 100) y B (2, 50). ¿Se equivoca aquí el voraz? Explique por qué.</div>
          </div>
        </div>
      `,
      notes: 'Respuestas: 1. Fraccionaria 30 + 2/5·20 = 38,0; 0/1 óptimo 30 (B+C pesa 10 > 8) → se separan en 8. 2. Peso 0: la densidad divide entre cero (precondición w > 0); en 0/1 entra siempre. Capacidad 0: ambos dan 0. 3. 2^100 ≈ 1,27·10^30; la dinámica es pseudopolinomial (depende de W), no polinomial en n. 4. Voraz 150 = óptimo: el más denso también es el más pequeño y no bloquea nada.'
    },
    {
      id: 'pnn8-30',
      title: 'Cierre · misma selección, distinta factibilidad',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-slate-900 to-teal-900 text-white p-6 rounded-2xl">
            <p class="text-xs uppercase tracking-widest font-bold text-teal-300">Idea de la clase</p>
            <p class="text-lg md:text-xl font-bold mt-2 leading-snug">La selección es la misma; la factibilidad no. Con fracciones el voraz es óptimo y se prueba por intercambio; sin fracciones hay que ver todas las combinaciones — y eso se hace con una tabla, no con una corazonada.</p>
          </div>
          <div class="bg-white border-l-4 border-teal-600 rounded-xl p-4">
            <p class="font-bold text-slate-900">Ticket de salida</p>
            <p class="text-slate-700 text-sm mt-1">En dos líneas: ¿por qué el método de adquisición falla en la variante 0/1 y por qué no falla en la fraccionaria?</p>
          </div>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-3"><p class="font-bold text-rose-950">Jueves 19/11 · prueba 10 %</p><p class="text-rose-900 mt-1">Unidad II, divide y conquista. Incluye Sortmerge 2: la variante se confirma al inicio de esa sesión.</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-3"><p class="font-bold text-slate-900">Para la próxima</p><p class="text-slate-700 mt-1">Traer el cuaderno con la tabla de hoy y la comparación de las tres estrategias.</p></div>
          </div>
        </div>
      `,
      notes: 'Respuesta esperada del ticket: en la fraccionaria siempre se puede llenar el hueco restante con una porción del objeto más denso, y el intercambio no pierde valor; en la 0/1 la elección local puede bloquear una combinación mejor (la de los objetos 2 + 3). Sin prueba, el método es una costumbre.'
    },
    {
      id: 'pnn8-31',
      title: 'Fuentes del viernes',
      contentHtml: `
        <div class="space-y-4 text-sm">
          <h3 class="text-xl font-bold text-slate-900">Fuentes de la sesión</h3>
          <ul class="space-y-2 text-slate-700">
            <li>GeeksforGeeks. <em>Fractional Knapsack</em>. https://www.geeksforgeeks.org/dsa/fractional-knapsack-problem/</li>
            <li>GeeksforGeeks. <em>0/1 Knapsack Problem</em>. https://www.geeksforgeeks.org/dsa/0-1-knapsack-problem-dp-10/</li>
            <li>Cormen, T., Leiserson, C., Rivest, R. y Stein, C. (2009). <em>Introduction to Algorithms</em> (3.ª ed.), cap. 15 y 16. MIT Press.</li>
            <li>Bourke, C. <em>Computer Science II</em>, cap. 5 «Algorithm Analysis».</li>
          </ul>
          <p class="text-xs text-slate-500">Programa analítico U-III y PGA 2026-2. Cormen se cita como referencia teórica de la programación dinámica y del argumento de intercambio: no hay ejemplar en la biblioteca del docente.</p>
        </div>
      `,
      notes: 'Si el docente incorpora Cormen a la biblioteca, fijar las páginas del capítulo 15 (subestructura óptima) y del capítulo 16 (argumento de intercambio).'
    }
  ]
};
