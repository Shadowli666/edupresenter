import { Module } from '../../types';

export const PNN_MODULE_7: Module = {
  id: 'pnn-mod-7',
  title: '7. Eficiencia de los algoritmos divide y conquista',
  description:
    'Semana 7: jueves 05/11 — análisis de eficiencia de los algoritmos divide y conquista (recurrencias, árbol de recursión, Teorema Maestro) y conteo de comparaciones con código en C. Viernes 06/11 — ejercicio integrador en grupos: comparación de eficiencia entre búsqueda binaria, máximos y mínimos, Sotmerge y Quicksort (ficha grupal, formativa). Unidad II.3.',
  evaluation: '0%',
  slides: [
    {
      id: 'pnn7-1',
      title: 'Jueves 05/11 · Eficiencia de divide y conquista',
      contentHtml: `
        <div class="space-y-7">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center text-white text-4xl shadow-lg">📈</div>
            <div>
              <p class="text-sm uppercase tracking-widest font-bold text-teal-700">Programación No Numérica II · Unidad II</p>
              <h2 class="text-3xl md:text-4xl font-bold text-slate-900">Eficiencia de los algoritmos divide y conquista</h2>
              <p class="text-slate-500 mt-1">De la estructura del algoritmo a su costo</p>
            </div>
          </div>
          <div class="bg-teal-50 border border-teal-200 rounded-xl p-5 text-teal-950">
            <p class="text-lg"><strong>Objetivo:</strong> comparar la eficiencia de los algoritmos divide y conquista de búsqueda, ordenamiento e intercalación.</p>
          </div>
          <p class="text-sm text-slate-500">Jueves 05/11/2026 · 16:45–18:15 · Aula A-06 · Sección A · IUPSM — Extensión Ciudad Ojeda</p>
        </div>
      `,
      notes: 'Activación: 8 min en total con las diap. 2 y 3. Sin laboratorio: el docente ejecuta conteo.c desde el proyector.'
    },
    {
      id: 'pnn7-2',
      title: 'Ruta del jueves',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-slate-600 text-lg">Ya sabemos <strong>cómo</strong> funcionan búsqueda binaria, máximos y mínimos, Sotmerge y Quicksort. Hoy <strong>deducimos cuánto cuestan</strong>.</p>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-teal-50 border border-teal-200 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-teal-700">Teoría</p><h3 class="text-lg font-bold text-teal-950 mt-2">Recurrencias</h3><p class="text-sm text-teal-900 mt-2">Árbol de recursión y Teorema Maestro.</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-slate-700">Código en vivo</p><h3 class="text-lg font-bold text-slate-950 mt-2">Contar comparaciones</h3><p class="text-sm text-slate-700 mt-2">Sotmerge y Quicksort instrumentados en C.</p></div>
            <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-emerald-700">Práctica</p><h3 class="text-lg font-bold text-emerald-950 mt-2">Resolver recurrencias</h3><p class="text-sm text-emerald-900 mt-2">Guiada en pizarra y en parejas en el cuaderno.</p></div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn7-3',
      title: 'Activación · ¿igual de rápidos?',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-gradient-to-br from-slate-900 to-teal-900 text-white p-6 rounded-2xl">
            <p class="text-xs uppercase tracking-widest font-bold text-teal-300">Pregunta de partida</p>
            <p class="text-xl md:text-2xl font-bold mt-2 leading-snug">Sotmerge y Quicksort son O(n log n) en el caso promedio. ¿Hacen la misma cantidad de trabajo con cualquier arreglo?</p>
          </div>
          <div class="grid md:grid-cols-3 gap-3 text-sm">
            <div class="bg-white border-l-4 border-teal-500 rounded-xl p-3" data-reveal><strong>Dividir:</strong> partir el problema en subproblemas más pequeños.</div>
            <div class="bg-white border-l-4 border-teal-500 rounded-xl p-3" data-reveal><strong>Conquistar:</strong> resolver cada subproblema de forma recursiva hasta el caso base.</div>
            <div class="bg-white border-l-4 border-teal-500 rounded-xl p-3" data-reveal><strong>Combinar:</strong> unir las soluciones parciales.</div>
          </div>
        </div>
      `,
      notes: 'Recoger respuestas sin corregir; se responden con la tabla de la diap. 9. Los tres pasos se recuperan rápidamente: ya se vieron en S4; no se reexplican.'
    },
    {
      id: 'pnn7-4',
      title: 'Del código a la recurrencia',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-teal-600 text-white rounded-2xl p-5 text-center">
            <p class="text-2xl md:text-3xl font-bold font-mono">T(n) = a · T(n/b) + f(n)</p>
            <p class="mt-2 text-teal-50">T(1) = c (caso base)</p>
          </div>
          <div class="grid md:grid-cols-3 gap-3 text-sm">
            <div class="bg-white border rounded-xl p-3"><p class="font-bold text-teal-700">a</p><p>Número de llamadas recursivas.</p></div>
            <div class="bg-white border rounded-xl p-3"><p class="font-bold text-teal-700">n/b</p><p>Tamaño de cada subproblema.</p></div>
            <div class="bg-white border rounded-xl p-3"><p class="font-bold text-teal-700">f(n)</p><p>Trabajo propio: dividir más combinar.</p></div>
          </div>
          <div class="overflow-x-auto"><table class="w-full text-sm border">
            <thead class="bg-teal-50"><tr><th class="p-2 border text-left">Algoritmo</th><th class="p-2 border text-left">Recurrencia (comparaciones)</th></tr></thead>
            <tbody>
              <tr data-reveal><td class="p-2 border">Búsqueda binaria</td><td class="p-2 border font-mono">T(n) = T(n/2) + 1</td></tr>
              <tr data-reveal><td class="p-2 border">Máximos y mínimos</td><td class="p-2 border font-mono">T(n) = 2T(n/2) + 2, T(2) = 1</td></tr>
              <tr data-reveal><td class="p-2 border">Sotmerge (peor caso)</td><td class="p-2 border font-mono">T(n) = 2T(n/2) + (n − 1)</td></tr>
              <tr data-reveal><td class="p-2 border">Quicksort, partición equilibrada</td><td class="p-2 border font-mono">T(n) = 2T(n/2) + (n − 1)</td></tr>
              <tr data-reveal><td class="p-2 border">Quicksort, partición extrema</td><td class="p-2 border font-mono">T(n) = T(n − 1) + (n − 1)</td></tr>
            </tbody>
          </table></div>
        </div>
      `,
      notes: 'Teoría 1 (8 min). Antes de revelar cada fila, preguntar: ¿cuántas llamadas hace?, ¿de qué tamaño?, ¿cuánto cuesta combinar? Operación elemental: comparación entre elementos. Fuente: Bourke, Computer Science II, §5.7.1, p. 131.'
    },
    {
      id: 'pnn7-5',
      title: 'Árbol de recursión',
      contentHtml: `
        <div class="space-y-4">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white border rounded-2xl p-4">
              <p class="font-bold text-teal-800 mb-2">Sotmerge, n = 8</p>
              <div data-diagram data-steps="R | R>A, R>B, A, B | A>C, A>D, B>E, B>F, C, D, E, F">
flowchart TD
  R["8 · trabajo ≈ 8"] --> A["4"]
  R --> B["4"]
  A --> C["2"]
  A --> D["2"]
  B --> E["2"]
  B --> F["2"]
              </div>
              <p class="text-sm text-slate-700 mt-2">Cada nivel trabaja ≈ n; hay log₂ n niveles → <strong>≈ n · log₂ n = 24</strong>.</p>
            </div>
            <div class="bg-white border rounded-2xl p-4">
              <p class="font-bold text-rose-800 mb-2">Quicksort, partición extrema, n = 8</p>
              <ul class="text-sm font-mono space-y-1">
                <li data-reveal>8 → 7 comparaciones</li>
                <li data-reveal>7 → 6</li>
                <li data-reveal>6 → 5 · … · 2 → 1</li>
              </ul>
              <p class="text-sm text-slate-700 mt-3" data-reveal>(n − 1) + (n − 2) + … + 1 = <strong>n(n − 1)/2 = 28</strong> → Θ(n²).</p>
            </div>
          </div>
        </div>
      `,
      notes: 'Teoría 2 (8 min). En la pizarra, escribir junto a cada nivel su trabajo total. La partición extrema ocurre cuando el pivote queda siempre en un extremo (por ejemplo, arreglo ordenado con pivote = último).'
    },
    {
      id: 'pnn7-6',
      title: 'Teorema Maestro',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-slate-900 text-white rounded-2xl p-5">
            <p class="font-mono text-lg">Si T(n) = a · T(n/b) + Θ(n<sup>d</sup>), con a ≥ 1, b ≥ 2, d ≥ 0:</p>
          </div>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-sky-50 border border-sky-200 rounded-2xl p-4 text-center" data-reveal><p class="font-bold text-sky-800">a &lt; b<sup>d</sup></p><p class="text-xl font-mono mt-2">Θ(n<sup>d</sup>)</p><p class="text-xs text-sky-900 mt-1">domina el trabajo de la raíz</p></div>
            <div class="bg-teal-50 border border-teal-200 rounded-2xl p-4 text-center" data-reveal><p class="font-bold text-teal-800">a = b<sup>d</sup></p><p class="text-xl font-mono mt-2">Θ(n<sup>d</sup> log n)</p><p class="text-xs text-teal-900 mt-1">igual trabajo en cada nivel</p></div>
            <div class="bg-violet-50 border border-violet-200 rounded-2xl p-4 text-center" data-reveal><p class="font-bold text-violet-800">a &gt; b<sup>d</sup></p><p class="text-xl font-mono mt-2">Θ(n<sup>log<sub>b</sub> a</sup>)</p><p class="text-xs text-violet-900 mt-1">dominan las hojas</p></div>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-900">No se aplica a T(n) = T(n − 1) + f(n): el problema no se divide entre b. En ese caso se usa el árbol o la suma.</div>
          <p class="text-xs text-slate-500">Bourke, C. <em>Computer Science II</em>, Teorema 4, §5.7.1.</p>
        </div>
      `,
      notes: 'Teoría 3 (8 min con la diap. 7). Interpretación intuitiva de cada caso con el árbol de recursión de la diap. 5.'
    },
    {
      id: 'pnn7-7',
      title: 'Los algoritmos de la unidad',
      contentHtml: `
        <div class="space-y-4">
          <div class="overflow-x-auto"><table class="w-full text-sm border">
            <thead class="bg-teal-50"><tr><th class="p-2 border text-left">Algoritmo</th><th class="p-2 border">a, b, d</th><th class="p-2 border">Caso</th><th class="p-2 border text-left">Resultado</th></tr></thead>
            <tbody>
              <tr data-reveal><td class="p-2 border">Búsqueda binaria</td><td class="p-2 border text-center">1, 2, 0</td><td class="p-2 border text-center">a = b<sup>d</sup></td><td class="p-2 border">Θ(log n)</td></tr>
              <tr data-reveal><td class="p-2 border">Máximos y mínimos</td><td class="p-2 border text-center">2, 2, 0</td><td class="p-2 border text-center">a &gt; b<sup>d</sup></td><td class="p-2 border">Θ(n) · exacto: 3n/2 − 2 (n potencia de 2)</td></tr>
              <tr data-reveal><td class="p-2 border">Sotmerge</td><td class="p-2 border text-center">2, 2, 1</td><td class="p-2 border text-center">a = b<sup>d</sup></td><td class="p-2 border">Θ(n log n)</td></tr>
              <tr data-reveal><td class="p-2 border">Quicksort equilibrado</td><td class="p-2 border text-center">2, 2, 1</td><td class="p-2 border text-center">a = b<sup>d</sup></td><td class="p-2 border">Θ(n log n)</td></tr>
              <tr data-reveal><td class="p-2 border">Quicksort extremo</td><td class="p-2 border text-center">—</td><td class="p-2 border text-center">no aplica</td><td class="p-2 border">Θ(n²)</td></tr>
            </tbody>
          </table></div>
          <p class="text-sm text-slate-600">Copia esta tabla en el cuaderno: es el punto de partida del viernes.</p>
        </div>
      `,
      notes: 'Pedir a los estudiantes que llenen cada fila antes de revelarla. Dejar la tabla en la pizarra (sugerencia didáctica 3).'
    },
    {
      id: 'pnn7-8',
      title: 'Código en vivo · conteo.c',
      contentHtml: `
        <div class="space-y-3">
          <p class="text-sm text-slate-600">Un contador global <span class="font-mono">comps</span> suma 1 en cada comparación entre elementos.</p>
          <div data-tabs>
            <section data-tab="Sotmerge">
              <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto"><p class="text-[10px] uppercase tracking-widest text-slate-400 mb-2">C</p><pre class="text-xs font-mono leading-5">static long comps;                 /* comparaciones entre elementos */
static int aux[2048];

void intercalar(int a[], int ini, int med, int fin) {
    int i = ini, j = med + 1, k = ini;
    while (i &lt;= med &amp;&amp; j &lt;= fin) {
        comps++;
        if (a[i] &lt;= a[j]) aux[k++] = a[i++];
        else              aux[k++] = a[j++];
    }
    while (i &lt;= med) aux[k++] = a[i++];
    while (j &lt;= fin) aux[k++] = a[j++];
    for (k = ini; k &lt;= fin; k++) a[k] = aux[k];
}
void sotmerge(int a[], int ini, int fin) {
    if (ini &gt;= fin) return;                    /* caso base */
    int med = (ini + fin) / 2;
    sotmerge(a, ini, med);
    sotmerge(a, med + 1, fin);
    intercalar(a, ini, med, fin);
}</pre></div>
            </section>
            <section data-tab="Quicksort">
              <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto"><p class="text-[10px] uppercase tracking-widest text-slate-400 mb-2">C</p><pre class="text-xs font-mono leading-5">/* pivote = último elemento */
int particion(int a[], int ini, int fin) {
    int piv = a[fin], i = ini - 1, t;
    for (int j = ini; j &lt; fin; j++) {
        comps++;
        if (a[j] &lt;= piv) { i++; t = a[i]; a[i] = a[j]; a[j] = t; }
    }
    t = a[i + 1]; a[i + 1] = a[fin]; a[fin] = t;
    return i + 1;
}
void quicksort(int a[], int ini, int fin) {
    if (ini &gt;= fin) return;                    /* caso base */
    int p = particion(a, ini, fin);
    quicksort(a, ini, p - 1);
    quicksort(a, p + 1, fin);
}</pre></div>
            </section>
            <section data-tab="Datos y main">
              <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto"><p class="text-[10px] uppercase tracking-widest text-slate-400 mb-2">C</p><pre class="text-xs font-mono leading-5">#include &lt;stdio.h&gt;
/* datos pseudoaleatorios reproducibles */
void desordenado(int a[], int n) {
    unsigned x = 12345;
    for (int i = 0; i &lt; n; i++) { x = x * 1103515245u + 12345u; a[i] = (x &gt;&gt; 16) % 1000; }
}
void ordenado(int a[], int n) { for (int i = 0; i &lt; n; i++) a[i] = i; }

int main(void) {
    int tam[] = {8, 64, 512, 1024};
    int a[2048];
    printf("%6s %12s %12s %12s %12s\\n", "n", "merge-desord", "merge-orden", "quick-desord", "quick-orden");
    for (int t = 0; t &lt; 4; t++) {
        int n = tam[t];
        long r[4];
        desordenado(a, n); comps = 0; sotmerge(a, 0, n - 1);  r[0] = comps;
        ordenado(a, n);    comps = 0; sotmerge(a, 0, n - 1);  r[1] = comps;
        desordenado(a, n); comps = 0; quicksort(a, 0, n - 1); r[2] = comps;
        ordenado(a, n);    comps = 0; quicksort(a, 0, n - 1); r[3] = comps;
        printf("%6d %12ld %12ld %12ld %12ld\\n", n, r[0], r[1], r[2], r[3]);
    }
    return 0;
}</pre></div>
            </section>
          </div>
        </div>
      `,
      notes: 'Código en vivo (15 min con la diap. 9). Archivo completo: 03-Clases/PROGRAMACION-NO-NUMERICA-II/S07-conteo.c (workspace PSM). Compilar con: gcc -Wall -o conteo S07-conteo.c && ./conteo. Orden del archivo: include y declaraciones de comps/aux arriba, luego Sotmerge, Quicksort, datos y main. Antes de ejecutar, cada pareja predice cuántas comparaciones hará Quicksort con el arreglo ordenado de n = 64 (sugerencia didáctica 1; respuesta real 2016).'
    },
    {
      id: 'pnn7-9',
      title: 'Salida y lectura',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4" data-reveal><p class="text-xs font-bold text-emerald-900 mb-1">Salida de ./conteo</p><pre class="text-xs font-mono text-emerald-950">     n merge-desord  merge-orden quick-desord  quick-orden
     8           17           12           18           28
    64          305          192          353         2016
   512         3972         2304         4826       130816
  1024         8957         5120        10935       523776</pre></div>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-white border rounded-xl p-3"><p class="font-bold text-teal-700">Referencia n · log₂ n</p><p class="font-mono">24 · 384 · 4608 · 10240</p></div>
            <div class="bg-white border rounded-xl p-3"><p class="font-bold text-rose-700">Referencia n(n − 1)/2</p><p class="font-mono">28 · 2016 · 130816 · 523776</p></div>
          </div>
          <ol class="list-decimal list-inside text-sm text-slate-700 space-y-1">
            <li data-reveal>Sotmerge queda por debajo de n · log₂ n en ambos tipos de entrada.</li>
            <li data-reveal>Quicksort con datos desordenados queda cerca de n · log₂ n.</li>
            <li data-reveal>Quicksort con el arreglo ordenado coincide con n(n − 1)/2: es su peor caso, causado por la elección del pivote.</li>
          </ol>
        </div>
      `,
      notes: 'Salida real (gcc, 02/11/2026); el generador propio da la misma salida en cualquier equipo. Volver a la pregunta de la diap. 3: no hacen el mismo trabajo, y Quicksort depende de la entrada.'
    },
    {
      id: 'pnn7-10',
      title: 'Práctica guiada · recurrencias 1 y 2',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-slate-600">Identifica a, b y d, compara a con b<sup>d</sup> y escribe el resultado.</p>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white border rounded-2xl p-5"><p class="font-mono text-lg font-bold">1) T(n) = 2T(n/2) + 1</p><p class="text-sm text-slate-700 mt-3" data-reveal>a = 2, b = 2, d = 0 → a &gt; b<sup>d</sup> → <strong>Θ(n)</strong></p></div>
            <div class="bg-white border rounded-2xl p-5"><p class="font-mono text-lg font-bold">2) T(n) = T(n/2) + n</p><p class="text-sm text-slate-700 mt-3" data-reveal>a = 1, b = 2, d = 1 → a &lt; b<sup>d</sup> → <strong>Θ(n)</strong></p></div>
          </div>
        </div>
      `,
      notes: 'Práctica guiada (18 min con la diap. 11). Pedir la respuesta a un estudiante y la verificación a otro antes de revelar.'
    },
    {
      id: 'pnn7-11',
      title: 'Práctica guiada · máximos y mínimos',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-slate-600">¿Cuántas comparaciones hace máximos y mínimos por divide y conquista con n = 8? Compáralo con recorrer el arreglo comparando cada elemento con el máximo y con el mínimo.</p>
          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 font-mono text-sm leading-7">
            <p data-reveal>T(2) = 1</p>
            <p data-reveal>T(4) = 2 · T(2) + 2 = 4</p>
            <p data-reveal>T(8) = 2 · T(4) + 2 = 10 = 3 · 8/2 − 2</p>
            <p data-reveal class="text-amber-300">Recorrido directo: 2(n − 1) = 14</p>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-900" data-reveal>Los dos son Θ(n), pero no hacen la misma cantidad de comparaciones.</div>
        </div>
      `
    },
    {
      id: 'pnn7-12',
      title: 'Práctica autónoma en parejas',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-slate-600">Resuelve en el cuaderno, en parejas:</p>
          <ol class="space-y-3">
            <li class="bg-white border-l-4 border-emerald-500 rounded-xl p-3"><strong>1.</strong> Resuelve con el Teorema Maestro: <span class="font-mono">T(n) = 4T(n/2) + n</span>.</li>
            <li class="bg-white border-l-4 border-emerald-500 rounded-xl p-3"><strong>2.</strong> Resuelve: <span class="font-mono">T(n) = 2T(n/2) + n²</span>.</li>
            <li class="bg-white border-l-4 border-emerald-500 rounded-xl p-3"><strong>3.</strong> En un arreglo ordenado de 1 000 000 de elementos, ¿cuántas comparaciones hace como máximo la búsqueda binaria? ¿Y la búsqueda secuencial?</li>
            <li class="bg-white border-l-4 border-emerald-500 rounded-xl p-3"><strong>4.</strong> Con la salida de conteo.c: ¿cuántas veces más comparaciones hace Quicksort con el arreglo ordenado que con el desordenado para n = 1024? Propón un cambio en la elección del pivote que evite ese caso.</li>
          </ol>
        </div>
      `,
      notes: 'Práctica autónoma (20 min; corregir 2 ejercicios en los últimos 5). Respuestas: 1) a = 4 > b^d = 2 → Θ(n²). 2) a = 2 < b^d = 4 → Θ(n²). 3) floor(log2 10^6) + 1 = 20; secuencial hasta 1 000 000. 4) 523776 / 10935 ≈ 48 veces; pivote aleatorio o mediana de tres (primero, medio, último).'
    },
    {
      id: 'pnn7-13',
      title: 'Cierre del jueves',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-teal-600 text-white rounded-2xl p-5"><p class="text-lg font-bold">La estructura (a, b, f(n)) indica la eficiencia; la ejecución la ilustra, pero una sola ejecución no la demuestra.</p></div>
          <div class="bg-gradient-to-br from-slate-900 to-teal-900 text-white p-6 rounded-2xl">
            <p class="text-xs uppercase tracking-widest font-bold text-teal-300">Ticket de salida</p>
            <p class="text-lg font-bold mt-2">Un algoritmo divide el problema en 3 partes de tamaño n/3 y combina en tiempo lineal. Escribe su recurrencia y resuélvela.</p>
          </div>
          <div class="flex gap-4 bg-white border-l-4 border-emerald-500 rounded-xl p-4"><span class="font-bold text-emerald-600">⏭️</span><p class="text-slate-800"><strong>Viernes 06/11:</strong> ejercicio integrador en grupos. Trae la tabla de la diapositiva 7 en el cuaderno.</p></div>
        </div>
      `,
      notes: 'Ticket: T(n) = 3T(n/3) + n → a = 3 = b^d → Θ(n log n).'
    },
    {
      id: 'pnn7-14',
      title: 'Viernes 06/11 · Ejercicio integrador',
      contentHtml: `
        <div class="space-y-7">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center text-white text-4xl shadow-lg">⚖️</div>
            <div>
              <p class="text-sm uppercase tracking-widest font-bold text-emerald-700">Programación No Numérica II · Unidad II</p>
              <h2 class="text-3xl md:text-4xl font-bold text-slate-900">Comparar la eficiencia con rigor</h2>
              <p class="text-slate-500 mt-1">Ejercicio integrador en grupos</p>
            </div>
          </div>
          <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-emerald-950">
            <p class="text-lg"><strong>Objetivo:</strong> comparar la eficiencia de búsqueda binaria, máximos y mínimos, Sotmerge y Quicksort bajo una misma métrica.</p>
          </div>
          <p class="text-sm text-slate-500">Viernes 06/11/2026 · 16:45–18:15 · Aula A-06 · Sección A</p>
        </div>
      `,
      notes: 'Viernes: activación 5 min con la diap. 15.'
    },
    {
      id: 'pnn7-15',
      title: 'Activación',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-gradient-to-br from-slate-900 to-emerald-900 text-white p-6 rounded-2xl">
            <p class="text-xs uppercase tracking-widest font-bold text-emerald-300">Pregunta</p>
            <p class="text-xl md:text-2xl font-bold mt-2 leading-snug">Con la tabla de salida de conteo.c, ¿qué conclusión <strong>no</strong> se puede sacar?</p>
          </div>
          <p class="text-slate-600">Antes: dos respuestas del ticket de salida del jueves.</p>
        </div>
      `,
      notes: 'Respuesta esperada: que un algoritmo sea siempre mejor que otro a partir de una sola entrada; o que los tiempos reales sigan la misma proporción. Enlaza con la diap. 16.'
    },
    {
      id: 'pnn7-16',
      title: 'Misma métrica, misma entrada, mismo caso',
      contentHtml: `
        <div class="space-y-4">
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-white border-t-4 border-emerald-500 rounded-2xl p-4"><p class="font-bold text-emerald-800">Métrica</p><p class="text-sm text-slate-700 mt-2">Se cuenta la misma operación elemental (aquí, comparaciones entre elementos).</p></div>
            <div class="bg-white border-t-4 border-emerald-500 rounded-2xl p-4"><p class="font-bold text-emerald-800">Entrada</p><p class="text-sm text-slate-700 mt-2">El mismo tamaño n y los mismos datos para todos los algoritmos.</p></div>
            <div class="bg-white border-t-4 border-emerald-500 rounded-2xl p-4"><p class="font-bold text-emerald-800">Caso</p><p class="text-sm text-slate-700 mt-2">Se declara si se compara el mejor, el peor o el caso promedio.</p></div>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-900">Una ejecución con un arreglo <strong>ilustra</strong> el comportamiento; la recurrencia lo <strong>demuestra</strong>.</div>
        </div>
      `,
      notes: 'Teoría 1 del viernes (6 min). No volver a explicar el Teorema Maestro: se usa la tabla del jueves.'
    },
    {
      id: 'pnn7-17',
      title: 'Clase frente a cantidad',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-slate-700">Búsqueda <strong>ternaria</strong>: divide el arreglo ordenado en tres partes con dos puntos de corte y descarta dos de ellas. Hace 2 comparaciones por nivel.</p>
          <div class="overflow-x-auto"><table class="w-full text-sm border">
            <thead class="bg-emerald-50"><tr><th class="p-2 border text-left">Búsqueda en arreglo ordenado</th><th class="p-2 border">Recurrencia</th><th class="p-2 border">Clase</th><th class="p-2 border">Peor caso, n = 1 000 000</th></tr></thead>
            <tbody>
              <tr><td class="p-2 border">Binaria</td><td class="p-2 border text-center font-mono">T(n/2) + 1</td><td class="p-2 border text-center">Θ(log n)</td><td class="p-2 border text-center font-mono">20</td></tr>
              <tr><td class="p-2 border">Ternaria</td><td class="p-2 border text-center font-mono">T(n/3) + 2</td><td class="p-2 border text-center">Θ(log n)</td><td class="p-2 border text-center font-mono">26</td></tr>
            </tbody>
          </table></div>
          <p class="text-slate-700">Dividir en más partes no siempre ahorra trabajo. La notación O agrupa algoritmos de la misma <strong>clase</strong>; entre ellos deciden la <strong>constante</strong> y los demás recursos.</p>
        </div>
      `,
      notes: 'Teoría 2 del viernes (6 min). Ternaria: 2 log3 n ≈ 1,26 log2 n. Valores de peor caso contados con un programa en Python (02/11/2026): binaria 20 y ternaria 26 para n = 1 000 000. Es un ejemplo nuevo: no repite máximos y mínimos del jueves.'
    },
    {
      id: 'pnn7-18',
      title: 'Más allá de las comparaciones',
      contentHtml: `
        <div class="space-y-3">
          <div class="bg-white border-l-4 border-sky-500 rounded-xl p-4" data-reveal><p class="font-bold text-sky-800">Memoria adicional</p><p class="text-sm text-slate-700">Sotmerge necesita un arreglo auxiliar de tamaño n; Quicksort trabaja sobre el mismo arreglo.</p></div>
          <div class="bg-white border-l-4 border-rose-500 rounded-xl p-4" data-reveal><p class="font-bold text-rose-800">Sensibilidad a la entrada</p><p class="text-sm text-slate-700">El peor caso de Quicksort depende de la elección del pivote; Sotmerge mantiene n log n en todos los casos.</p></div>
          <div class="bg-white border-l-4 border-violet-500 rounded-xl p-4" data-reveal><p class="font-bold text-violet-800">Precondiciones</p><p class="text-sm text-slate-700">La búsqueda binaria solo funciona sobre un arreglo ordenado: si hay que ordenarlo primero, ese costo también cuenta.</p></div>
        </div>
      `,
      notes: 'Teoría 3 del viernes (6 min).'
    },
    {
      id: 'pnn7-19',
      title: 'Ficha grupal · organización',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-emerald-600 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-emerald-100">Ficha de trabajo grupal · formativa</p><p class="mt-1">Grupos de 3 o 4 integrantes. Una hoja propia por grupo, con los nombres de todos.</p></div>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-white border rounded-2xl p-4"><p class="font-bold text-slate-900">Redactor</p><p class="text-sm text-slate-700 mt-1">Escribe las respuestas acordadas.</p></div>
            <div class="bg-white border rounded-2xl p-4"><p class="font-bold text-slate-900">Verificador</p><p class="text-sm text-slate-700 mt-1">Rehace los conteos de la parte 2 por su cuenta.</p></div>
            <div class="bg-white border rounded-2xl p-4"><p class="font-bold text-slate-900">Vocero</p><p class="text-sm text-slate-700 mt-1">Presenta una parte en la plenaria.</p></div>
          </div>
          <p class="text-sm text-slate-600">La ficha tiene cuatro partes (diapositivas siguientes).</p>
        </div>
      `,
      notes: 'Encuadre (4 min). Ficha: 45 min (partes 1–2: 25 min; partes 3–4: 20 min). Criterios formativos: INSTRUMENTOS-FORMATIVOS-0pct.md, fila S7 (identifica tamaño de entrada/costo; compara bajo la misma métrica; justifica la conclusión; no infiere eficiencia de una sola ejecución).'
    },
    {
      id: 'pnn7-20',
      title: 'Ficha · parte 1',
      contentHtml: `
        <div class="space-y-3">
          <p class="font-bold text-slate-900">Parte 1 · Aplicar la tabla a algoritmos nuevos</p>
          <p class="text-sm text-slate-700">Para cada recurrencia indica a, b, d, el caso del Teorema Maestro (o «no aplica») y el resultado. Si no aplica, resuélvela con el árbol de recursión o la suma.</p>
          <div class="overflow-x-auto"><table class="w-full text-sm border">
            <thead class="bg-emerald-50"><tr><th class="p-2 border text-left">Algoritmo</th><th class="p-2 border text-left">Recurrencia</th></tr></thead>
            <tbody>
              <tr><td class="p-2 border">a) Multiplicación de enteros de Karatsuba (3 productos de mitades)</td><td class="p-2 border font-mono">T(n) = 3T(n/2) + n</td></tr>
              <tr><td class="p-2 border">b) Multiplicación de matrices por bloques, clásica (8 productos)</td><td class="p-2 border font-mono">T(n) = 8T(n/2) + n²</td></tr>
              <tr><td class="p-2 border">c) Multiplicación de matrices de Strassen (7 productos)</td><td class="p-2 border font-mono">T(n) = 7T(n/2) + n²</td></tr>
              <tr><td class="p-2 border">d) Quicksort cuyo pivote deja siempre 1/4 y 3/4 del arreglo</td><td class="p-2 border font-mono">T(n) = T(n/4) + T(3n/4) + n</td></tr>
              <tr><td class="p-2 border">e) Búsqueda secuencial recursiva</td><td class="p-2 border font-mono">T(n) = T(n − 1) + 1</td></tr>
            </tbody>
          </table></div>
          <p class="text-sm text-slate-700"><strong>Además:</strong> ¿cuál conviene para n grande, b) o c)? ¿Cómo se compara d) con el Quicksort equilibrado y con el extremo?</p>
        </div>
      `,
      notes: 'Clave parte 1: a) (3,2,1), a > b^d → Θ(n^log2 3) ≈ Θ(n^1,585). b) (8,2,2), 8 > 4 → Θ(n³). c) (7,2,2), 7 > 4 → Θ(n^log2 7) ≈ Θ(n^2,81). d) No aplica (dos subproblemas de distinto tamaño): cada nivel del árbol suma a lo sumo n y la rama más larga tiene log_{4/3} n niveles → Θ(n log n); está en la misma clase que el equilibrado, con más niveles, y lejos del extremo Θ(n²). e) No aplica (no divide entre b): suma de n unos → Θ(n). Para n grande conviene c): exponente 2,81 < 3. Integra la tabla del jueves sin copiarla.'
    },
    {
      id: 'pnn7-21',
      title: 'Ficha · parte 2',
      contentHtml: `
        <div class="space-y-4">
          <p class="font-bold text-slate-900">Parte 2 · Contar a mano</p>
          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 font-mono text-lg text-center">A = [5, 2, 7, 1, 8, 3, 6, 4]</div>
          <ol class="space-y-3 text-slate-700">
            <li class="bg-white border-l-4 border-emerald-500 rounded-xl p-3"><strong>a)</strong> Quicksort con pivote = último elemento: escribe cada partición (subarreglo, pivote y comparaciones) y el total.</li>
            <li class="bg-white border-l-4 border-emerald-500 rounded-xl p-3"><strong>b)</strong> Sotmerge: número de comparaciones de cada intercalación y total.</li>
            <li class="bg-white border-l-4 border-emerald-500 rounded-xl p-3"><strong>c)</strong> Repite a) con <span class="font-mono">B = [1, 2, 3, 4, 5, 6, 7, 8]</span> usando la fórmula del peor caso.</li>
          </ol>
          <p class="text-sm text-slate-600">Usa la partición y la intercalación de conteo.c (diapositiva 8).</p>
        </div>
      `,
      notes: 'Clave parte 2 (verificada con Python). a) [0..7] piv 4, 7 comp → [2,1,3,4,8,7,6,5]; [0..2] piv 3, 2 comp; [0..1] piv 1, 1 comp; [4..7] piv 5, 3 comp → [5,7,6,8]; [5..7] piv 8, 2 comp; [5..6] piv 6, 1 comp. Total 16. b) pares 1+1+1+1, cuartetos 3+3, final 7 → total 17. c) n(n − 1)/2 = 28.'
    },
    {
      id: 'pnn7-22',
      title: 'Ficha · partes 3 y 4',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white border rounded-2xl p-4">
            <p class="font-bold text-slate-900">Parte 3 · ¿Es válida la conclusión?</p>
            <p class="text-sm text-slate-700 mt-2">Un estudiante ejecutó una sola vez Sotmerge y Quicksort con n = 1024 (8957 y 10935 comparaciones) y concluye: «Sotmerge siempre hace un 18 % menos de comparaciones que Quicksort». Indica dos razones por las que la conclusión no es válida y qué harías para comparar correctamente.</p>
          </div>
          <div class="bg-white border rounded-2xl p-4">
            <p class="font-bold text-slate-900">Parte 4 · Decidir con datos</p>
            <p class="text-sm text-slate-700 mt-1">Elige el algoritmo y justifícalo con la métrica:</p>
            <ol class="list-[lower-alpha] list-inside text-sm text-slate-700 mt-2 space-y-1">
              <li>Consultar muchas veces si una cédula está en un padrón ordenado de 2 000 000 de registros.</li>
              <li>Ordenar cada noche un registro de operaciones que llega casi ordenado, en un equipo con poca memoria libre.</li>
              <li>Averiguar una sola vez si un código está en una lista <strong>no ordenada</strong> de 1000 elementos. ¿Y si hubiera que consultar muchos códigos en la misma lista?</li>
            </ol>
          </div>
        </div>
      `,
      notes: 'Clave parte 3: (1) una sola entrada pseudoaleatoria no representa el promedio ni el peor caso; (2) con el arreglo ordenado la relación se invierte (5120 frente a 523776), así que «siempre» es falso; contar comparaciones tampoco incluye memoria ni intercambios. Comparar con las mismas entradas, varios tamaños y tipos de datos (ordenado, inverso, aleatorio), declarando el caso y usando la recurrencia. Parte 4: a) búsqueda binaria, floor(log2 2 000 000) + 1 = 21 comparaciones como máximo frente a 2 000 000. b) Quicksort con mediana de tres o pivote aleatorio (sin memoria auxiliar y evita el peor caso); se acepta Sotmerge si se justifica con la garantía n log n y se reconoce su memoria auxiliar de tamaño n. c) Una sola consulta: búsqueda secuencial, hasta 1000 comparaciones; ordenar con Sotmerge cuesta del orden de n log2 n ≈ 9 966 antes de la primera búsqueda binaria (10). Con k consultas: secuencial ≈ 1000k frente a ≈ 9 966 + 10k, por lo que ordenar compensa a partir de unas 11 consultas (precondición de la búsqueda binaria, diap. 18).'
    },
    {
      id: 'pnn7-23',
      title: 'Plenaria',
      contentHtml: `
        <div class="space-y-4">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white border rounded-2xl p-4"><p class="font-bold">Parte 1</p><p class="text-sm text-slate-700">¿Qué filas tienen «no aplica» y por qué? ¿Strassen o la clásica?</p></div>
            <div class="bg-white border rounded-2xl p-4"><p class="font-bold">Parte 2</p><p class="text-sm text-slate-700">¿Coincidieron el redactor y el verificador?</p></div>
            <div class="bg-white border rounded-2xl p-4"><p class="font-bold">Parte 3</p><p class="text-sm text-slate-700">«No es válida porque…; lo correcto sería…»</p></div>
            <div class="bg-white border rounded-2xl p-4"><p class="font-bold">Parte 4</p><p class="text-sm text-slate-700">Dos grupos con elecciones distintas defienden su opción.</p></div>
          </div>
        </div>
      `,
      notes: 'Plenaria (13 min). Un vocero por parte, de grupos distintos. En la parte 4 b) ambas opciones son aceptables si se justifican (sugerencia didáctica 3). Anotar errores frecuentes para la prueba S9.'
    },
    {
      id: 'pnn7-24',
      title: 'Cierre y próximas semanas',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-emerald-600 text-white rounded-2xl p-5"><p class="text-lg font-bold">Comparar es medir lo mismo, sobre la misma entrada y en el mismo caso.</p></div>
          <div class="space-y-3">
            <div class="flex gap-4 bg-white border-l-4 border-sky-500 rounded-xl p-4"><span class="font-bold text-sky-600">S8</span><p class="text-slate-800"><strong>Jueves 12/11 y viernes 13/11:</strong> Unidad III, método de adquisición: almacenamiento óptimo en cintas y problema de la bolsa de papel.</p></div>
            <div class="flex gap-4 bg-white border-l-4 border-rose-500 rounded-xl p-4"><span class="font-bold text-rose-600">S9</span><p class="text-slate-800"><strong>Jueves 19/11:</strong> prueba escrita de la Unidad II (divide y conquista) · <strong>10 %</strong> del Corte II.</p></div>
          </div>
        </div>
      `,
      notes: 'Pendiente del docente: confirmar la variante y la sesión en que se dicta Sortmerge 2, que aparece en la pregunta 3 del borrador de la prueba S9.'
    },
    {
      id: 'pnn7-25',
      title: 'Fuentes',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-slate-50 border border-slate-200 rounded-2xl p-5">
            <p class="font-bold text-slate-900">Para ampliar</p>
            <ul class="list-disc list-inside text-sm text-slate-700 mt-3 space-y-2">
              <li><strong>Bourke, C.</strong> <em>Computer Science II</em>. Cap. 5, Algorithm Analysis, §5.7: relaciones de recurrencia y Teorema Maestro.</li>
              <li><strong>Joyanes, L.</strong> (2007). <em>Estructuras de datos</em>. McGraw-Hill (teoría; los ejemplos de clase están en C).</li>
              <li><strong>GeeksforGeeks</strong> — Master Theorem; <strong>CP-Algorithms</strong>; <strong>VisuAlgo</strong> — visualización de ordenamientos.</li>
            </ul>
          </div>
          <p class="text-xs text-slate-400 text-center">Material adaptado con fines docentes; se citan las fuentes originales.</p>
        </div>
      `
    }
  ],
  tasks: [{
    id: 'pnn7-t1',
    title: 'Ficha grupal: comparación de eficiencia',
    description: 'Ejercicio integrador en grupos de 3 o 4 en clase: análisis de recurrencias de algoritmos nuevos, conteo de comparaciones a mano, análisis de una conclusión y decisión del algoritmo para tres escenarios.',
    items: ['Parte 1: recurrencias de algoritmos nuevos', 'Parte 2: conteos con A y B', 'Parte 3: validez de una conclusión', 'Parte 4: decisión en tres escenarios'],
    due: '2026-11-06',
    corte: 2,
    weight: '0 % (formativa)',
    kind: 'tarea',
    slideId: 'pnn7-19',
  }],
};
