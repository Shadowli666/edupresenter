import { Module } from '../../types';

export const PNN_MODULE_8: Module = {
  id: 'pnn-mod-8',
  title: '8. El método de adquisición y el almacenamiento en cintas',
  description:
    'Semana 8: jueves 12/11 — el método de adquisición (voraz): candidatos, función de selección, factibilidad y objetivo; condiciones de uso; almacenamiento óptimo en cintas magnéticas con la fórmula del MRT, la prueba de optimalidad por intercambio y la verificación por enumeración en C. Viernes 13/11 — el problema de la bolsa de papel (enunciado por confirmar). Unidad III.1.',
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
      notes: 'Activación 7 min con las diap. 2 y 3. Sin laboratorio: el docente ejecuta S08-cintas.c desde el proyector; los estudiantes trabajan en el cuaderno. Lista de cotejo (0 %) sobre la práctica.'
    },
    {
      id: 'pnn8-2',
      title: 'Ruta del jueves',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-slate-600 text-lg">En la S7 comparamos el costo de <strong>partir</strong> un problema. Hoy la pregunta cambia: ¿qué hacemos cuando el problema <strong>no se parte</strong>, sino que hay que <strong>elegir</strong> paso a paso?</p>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-teal-50 border border-teal-200 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-teal-700">Teoría</p><h3 class="text-lg font-bold text-teal-950 mt-2">El método</h3><p class="text-sm text-teal-900 mt-2">Cuatro piezas, dos condiciones de uso y una fórmula.</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-slate-700">Código en vivo</p><h3 class="text-lg font-bold text-slate-950 mt-2">Cintas en C</h3><p class="text-sm text-slate-700 mt-2">Creciente, decreciente y las 120 permutaciones.</p></div>
            <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-emerald-700">Práctica</p><h3 class="text-lg font-bold text-emerald-950 mt-2">Calcular el MRT</h3><p class="text-sm text-emerald-900 mt-2">Guiada en pizarra y autónoma en parejas.</p></div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn8-3',
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
          <p class="text-sm text-slate-600">Se anotan dos o tres respuestas en la pizarra <strong>sin corregirlas</strong>: se contrastan con la diapositiva 7 y con el código.</p>
        </div>
      `,
      notes: 'No corregir las respuestas iniciales: la clase se cierra volviendo a ellas. Si alguien menciona «el más pequeño primero», no confirmarlo todavía: es la hipótesis que hay que probar.'
    },
    {
      id: 'pnn8-4',
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
      id: 'pnn8-5',
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
      id: 'pnn8-6',
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
      notes: 'Preguntar «¿cuál va primero?» y anotar en la pizarra sin corregir. La respuesta se contrasta en la diap. 7 (fórmula) y en la diap. 10 (salida real).'
    },
    {
      id: 'pnn8-7',
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
      id: 'pnn8-8',
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
      notes: 'Cerrar la teoría con esta tabla y volver a la pregunta de la diap. 3: lo que se elige en cada paso es lo que distingue al método. No se resuelven recurrencias: solo se contrasta.'
    },
    {
      id: 'pnn8-9',
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
      notes: 'Código en vivo 20 min con la diap. 10. El archivo también guarda peor_suma/peor_orden y el contador de permutaciones exploradas: en la diapositiva solo se muestra el bloque mínimo. Archivo completo: 03-Clases/PROGRAMACION-NO-NUMERICA-II/S08-cintas.c. Compilar con: gcc -Wall -o cintas S08-cintas.c && ./cintas. Predicción (3 min) antes de ejecutar: cada pareja anota su MRT estimado para el orden creciente. La enumeración es solo verificación: la demostración general es el argumento de intercambio de la diap. 7.'
    },
    {
      id: 'pnn8-10',
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
      notes: 'Salida real (gcc, 12/11/2026); sin generador aleatorio, es idéntica en cualquier equipo. Volver a las respuestas anotadas en la diap. 3/6: ¿quién dijo «el más pequeño primero»? ¿quién dijo «el más grande primero»?'
    },
    {
      id: 'pnn8-11',
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
      id: 'pnn8-12',
      title: 'Práctica autónoma en parejas',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-sm text-slate-600">18 min. Cuaderno. Se corrige al final, no se entrega.</p>
          <div class="space-y-2 text-sm text-slate-700">
            <div class="bg-white border rounded-xl p-3" data-reveal><strong>1.</strong> Longitudes <code>10, 3, 7, 1, 6</code>. Escriba el orden óptimo, la suma de los <code>T<sub>i</sub></code> y el MRT.</div>
            <div class="bg-white border rounded-xl p-3" data-reveal><strong>2.</strong> Si <em>todas</em> las longitudes fueran iguales a <code>L</code>, ¿importa el orden? Justifique con la fórmula.</div>
            <div class="bg-white border rounded-xl p-3" data-reveal><strong>3.</strong> Dos cintas con <code>1, 2, 3, 4, 5, 6</code>. Compare el MRT total de (A) cinta 1 = <code>1, 2, 3</code> y cinta 2 = <code>4, 5, 6</code>; (B) reparto alternado: cinta 1 = <code>1, 3, 5</code> y cinta 2 = <code>2, 4, 6</code>.</div>
            <div class="bg-white border rounded-xl p-3" data-reveal><strong>4.</strong> Con 10 programas hay 3 628 800 órdenes y con 20, más de 2·10<sup>18</sup>. ¿Qué implica eso para la enumeración como método de solución?</div>
          </div>
        </div>
      `,
      notes: 'Respuestas: 1. Orden 1,3,6,7,10; Σ T = 5·1+4·3+3·6+2·7+1·10 = 59; MRT = 11,8. 2. No importa: Σ T = L·n(n+1)/2, independiente del orden. 3. (A) 10 + 28 = 38; (B) 14 + 20 = 34 → mejor B. 4. La enumeración es O(n!) y deja de ser viable; solo se usa para verificar en casos pequeños, y el algoritmo voraz se justifica con la prueba.'
    },
    {
      id: 'pnn8-13',
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
      id: 'pnn8-14',
      title: 'Fuentes',
      contentHtml: `
        <div class="space-y-4 text-sm">
          <h3 class="text-xl font-bold text-slate-900">Fuentes de la semana</h3>
          <ul class="space-y-2 text-slate-700">
            <li>GeeksforGeeks. <em>Optimal Storage on Tapes</em>. https://www.geeksforgeeks.org/dsa/optimal-storage-tapes/</li>
            <li>GeeksforGeeks. <em>Greedy Algorithms</em>. https://www.geeksforgeeks.org/dsa/greedy-algorithms/</li>
            <li>Bourke, C. <em>Computer Science II</em>, cap. 5 «Algorithm Analysis».</li>
            <li>Cormen, T., Leiserson, C., Rivest, R. y Stein, C. (2009). <em>Introduction to Algorithms</em> (3.ª ed.). MIT Press.</li>
          </ul>
          <p class="text-xs text-slate-500">Programa analítico U-III y PGA 2026-2. Cormen se cita como referencia teórica del argumento de intercambio: no hay ejemplar en la biblioteca del docente.</p>
        </div>
      `,
      notes: 'Si el docente incorpora Cormen a la biblioteca, fijar la página del argumento de intercambio (cap. 16, «Greedy Algorithms», sección de colas de prioridad / scheduling).'
    }
  ]
};
