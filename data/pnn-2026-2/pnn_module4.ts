import { Module } from '../../types';

export const PNN_MODULE_4: Module = {
  id: 'pnn-mod-4',
  title: '4. Prueba Unidad I y Divide y Conquista',
  description:
    'Semana 4: jueves 15/10 — prueba escrita mixta de la Unidad I (10 %, Corte I). Viernes 16/10 — contenido nuevo de la Unidad II: recursividad, estrategia divide y conquista (fundamentos), búsqueda binaria y máximos/mínimos, con codificación en vivo en Java.',
  evaluation: '10% — Prueba escrita mixta (Unidad I)',
  slides: [
    {
      id: 'pnn4-1',
      title: 'Prueba escrita mixta · Unidad I',
      contentHtml: `
        <div class="space-y-6">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 bg-rose-600 rounded-xl flex items-center justify-center text-white text-3xl shadow-lg">📝</div>
            <div>
              <h2 class="text-3xl font-bold text-slate-900">Prueba escrita mixta · Unidad I</h2>
              <p class="text-slate-500">Programación No Numérica II · Ing. Luis Felipe Moreno Oropeza</p>
            </div>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-3"><p class="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Fecha</p><p class="font-bold text-slate-800 text-sm">Jueves 15/10/2026</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-3"><p class="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Hora</p><p class="font-bold text-slate-800 text-sm">16:45 – 18:15</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-3"><p class="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Aula</p><p class="font-bold text-slate-800 text-sm">A-06 · Sección A</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-3"><p class="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Valor</p><p class="font-bold text-slate-800 text-sm">20 puntos · 75 min</p></div>
          </div>

          <div class="bg-rose-50 border border-rose-200 rounded-lg p-4 text-sm text-rose-900">
            🎯 <strong>Evaluación del Corte I (10 %):</strong> Estructuras de datos elementales — árboles binarios, teoremas I y II, representación secuencial y HEAP (INSERTAR y HEAPIFY).
          </div>
        </div>
      `,
      notes: 'Materiales: prueba impresa (formato 8.1), hojas de trabajo, cronómetro, escala de estimación. El contenido y las preguntas de la prueba NO se proyectan ni se dictan: están en 04-Evaluaciones/PROGRAMACION-NO-NUMERICA-II/Revisado-2026-2/S04-2026-10-15-prueba-mixta-unidad-I-borrador.md (estado borrador; aplicar solo con aprobación del docente).'
    },
    {
      id: 'pnn4-2',
      title: 'Instrucciones y normas',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-slate-900 text-white rounded-xl p-4 flex justify-between items-center">
            <div>
              <h4 class="font-bold text-lg">📋 Normas de la prueba</h4>
              <p class="font-bold text-xs">Se leen en voz alta antes de repartir</p>
            </div>
            <span class="text-3xl">⏱️</span>
          </div>

          <ul class="space-y-2 text-sm text-gray-700">
            <li class="flex gap-3 bg-white border-l-4 border-rose-500 rounded-lg p-3"><span class="font-bold text-rose-600">1</span><span>Resuelva <strong>individualmente</strong>.</span></li>
            <li class="flex gap-3 bg-white border-l-4 border-rose-500 rounded-lg p-3"><span class="font-bold text-rose-600">2</span><span><strong>Muestre todos los pasos</strong> en los ejercicios de cálculo y construcción.</span></li>
            <li class="flex gap-3 bg-white border-l-4 border-rose-500 rounded-lg p-3"><span class="font-bold text-rose-600">3</span><span><strong>Sin calculadora</strong> y con el celular guardado.</span></li>
            <li class="flex gap-3 bg-white border-l-4 border-rose-500 rounded-lg p-3"><span class="font-bold text-rose-600">4</span><span>Escriba <strong>nombre y CI</strong> en cada hoja que entregue.</span></li>
          </ul>

          <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800">
            🕐 <strong>75 minutos</strong> para resolver. Un resultado sin procedimiento no obtiene el puntaje completo del subítem.
          </div>
        </div>
      `,
      notes: 'Anotar en pizarra la hora de inicio y de cierre (16:58 → 18:13). Avisar a los 35 min: queda la mitad del tiempo. Aclarar solo dudas de forma, nunca de contenido.'
    },
    {
      id: 'pnn4-3',
      title: 'Alcance y convenciones (recordatorio)',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-blue-600 text-white rounded-xl p-4 flex justify-between items-center">
            <div>
              <h4 class="font-bold text-lg">🧭 Alcance de la prueba</h4>
              <p class="font-bold text-xs">Solo se recuerdan los temas y las convenciones de notación</p>
            </div>
            <span class="text-3xl">📚</span>
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
              <h4 class="font-bold text-blue-900 mb-2">Temas (Unidad I)</h4>
              <ul class="list-disc list-inside text-sm text-blue-800 space-y-1">
                <li>Árboles binarios: altura, nivel, grado y aristas</li>
                <li>Teoremas I y II (nodos por nivel y según altura)</li>
                <li>Representación en arreglo secuencial</li>
                <li>Propiedad del HEAP · INSERTAR · HEAPIFY</li>
              </ul>
            </div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <h4 class="font-bold text-slate-700 mb-2">Convenciones ya vistas</h4>
              <ul class="list-disc list-inside text-sm text-slate-600 space-y-1">
                <li>La raíz está en el <strong>nivel 0</strong></li>
                <li>La <strong>altura se cuenta en aristas</strong></li>
                <li>Arreglos con <strong>índices desde 0</strong></li>
                <li>Hijos: <strong>2i+1</strong> y <strong>2i+2</strong> · Padre: <strong>(i−1)/2</strong></li>
              </ul>
            </div>
          </div>

          <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-sm text-emerald-800">
            ✅ Si el grupo viene preparado del taller del 09/10, este repaso se reduce a 3 minutos o se omite.
          </div>
        </div>
      `,
      notes: 'Repaso por alcance, nunca por preguntas: no adelantar ningún ítem de la prueba ni sus datos. Este recordatorio usa las convenciones que ya se dictaron en las semanas 2 y 3 (y que aparecen en las instrucciones del estudiante).'
    },
    {
      id: 'pnn4-4',
      title: 'Cierre del jueves',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-rose-600 text-white rounded-xl p-4 flex items-center gap-4">
            <span class="text-3xl">🏁</span>
            <div>
              <h4 class="font-bold">Fin de la prueba</h4>
              <p class="text-sm">Entregue prueba y hojas juntas, con nombre y CI en cada hoja.</p>
            </div>
          </div>

          <div class="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <h4 class="font-bold text-slate-800 mb-2">¿Y ahora qué sigue?</h4>
            <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>La prueba se corrige con la <strong>escala de estimación</strong> (20 puntos → 10 % del corte).</li>
              <li>Las hojas del taller del 09/10 se devolvieron al inicio de la clase, antes de la prueba.</li>
            </ul>
          </div>

          <div class="bg-blue-600 text-white rounded-xl p-4">
            <h4 class="font-bold">▶ Mañana, viernes 16/10</h4>
            <p class="text-sm mt-1">Contenido nuevo: <strong>Recursividad</strong> y <strong>Divide y Conquista</strong> — búsqueda binaria y máximos/mínimos, con codificación en vivo en Java.</p>
          </div>
        </div>
      `
    },
    {
      id: 'pnn4-5',
      title: 'Sesión 2 · Recursividad y Divide y Conquista',
      contentHtml: `
        <div class="space-y-6">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 bg-violet-600 rounded-xl flex items-center justify-center text-white text-3xl shadow-lg">🔄</div>
            <div>
              <h2 class="text-3xl font-bold text-slate-900">Recursividad y Divide y Conquista</h2>
              <p class="text-slate-500">Programación No Numérica II · Ing. Luis Felipe Moreno Oropeza</p>
            </div>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-3"><p class="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Fecha</p><p class="font-bold text-slate-800 text-sm">Viernes 16/10/2026</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-3"><p class="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Hora</p><p class="font-bold text-slate-800 text-sm">16:45 – 18:15</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-3"><p class="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Aula</p><p class="font-bold text-slate-800 text-sm">A-06 · Sección A</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-3"><p class="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Lenguaje</p><p class="font-bold text-slate-800 text-sm">Java</p></div>
          </div>

          <div class="bg-violet-50 border border-violet-200 rounded-lg p-4 text-sm text-violet-900">
            🎯 <strong>Objetivo II.1:</strong> resolver problemas de recursividad y divide y conquista aplicando búsqueda binaria y máximos/mínimos.
          </div>
        </div>
      `
    },
    {
      id: 'pnn4-6',
      title: 'Qué veremos hoy',
      contentHtml: `
        <div class="space-y-5">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-violet-50 border-2 border-violet-200 rounded-xl p-4">
              <h4 class="font-bold text-violet-900">📐 Teoría (breve)</h4>
              <ul class="list-disc list-inside text-sm text-violet-800 mt-2 space-y-1">
                <li>Recursividad: <strong>caso base</strong> y <strong>caso recursivo</strong></li>
                <li>La <strong>pila de llamadas</strong></li>
                <li>Divide y conquista: <strong>dividir · conquistar · combinar</strong></li>
                <li>Búsqueda binaria y máximos/mínimos</li>
              </ul>
            </div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <h4 class="font-bold text-slate-700">💻 Práctica (el peso de la clase)</h4>
              <ul class="list-disc list-inside text-sm text-slate-600 mt-2 space-y-1">
                <li>Código en vivo en <strong>Java</strong>: factorial</li>
                <li>Código en vivo: <strong>búsqueda binaria</strong></li>
                <li>Código en vivo: <strong>máximos y mínimos</strong> por DyC</li>
                <li>4 ejercicios en parejas + verificación cruzada</li>
              </ul>
            </div>
          </div>
          <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-sm text-emerald-800">
            💡 <strong>La idea de hoy:</strong> la recursión resuelve reduciendo el problema; divide y conquista lo parte en subproblemas independientes y combina. La búsqueda binaria y máx/mín son sus dos primeras aplicaciones.
          </div>
        </div>
      `
    },
    {
      id: 'pnn4-7',
      title: 'Recursividad: caso base y caso recursivo',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-gray-600">Una función es <strong>recursiva</strong> cuando se <strong>llama a sí misma</strong> para resolver un subproblema del mismo tipo. Tiene <strong>dos partes obligatorias</strong>:</p>

          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-4">
              <h4 class="font-bold text-emerald-900 mb-1">🛑 Caso base</h4>
              <p class="text-sm text-emerald-800">Detiene la recursión, <strong>sin</strong> nueva llamada.</p>
              <p class="text-xs font-mono text-emerald-700 mt-2">n &le; 1 &rarr; retorna 1</p>
            </div>
            <div class="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
              <h4 class="font-bold text-blue-900 mb-1">🔄 Caso recursivo</h4>
              <p class="text-sm text-blue-800">Reduce el problema <strong>hacia</strong> el caso base.</p>
              <p class="text-xs font-mono text-blue-700 mt-2">n &middot; factorial(n &minus; 1)</p>
            </div>
          </div>

          <div data-quiz>
            <p class="font-bold text-slate-800">¿Cuál es el caso base de <span class="font-mono">factorial(n)</span>?</p>
            <div class="flex flex-wrap gap-2 mt-2">
              <button data-option data-correct class="bg-slate-100 border border-slate-300 rounded-lg px-3 py-2 text-sm hover:bg-slate-200">n &le; 1 &rarr; retorna 1</button>
              <button data-option class="bg-slate-100 border border-slate-300 rounded-lg px-3 py-2 text-sm hover:bg-slate-200">n &middot; factorial(n &minus; 1)</button>
              <button data-option class="bg-slate-100 border border-slate-300 rounded-lg px-3 py-2 text-sm hover:bg-slate-200">n == 0 &rarr; retorna 0</button>
            </div>
            <p data-explain class="text-sm text-emerald-700 mt-2">El caso base detiene la recursión: para factorial, n &le; 1 retorna 1 y evita la llamada infinita.</p>
          </div>
        </div>
      `
    },
    {
      id: 'pnn4-8',
      title: 'La pila de llamadas',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto">
            <pre class="text-xs font-mono leading-6">static int factorial(int n) {
    if (n &lt;= 1) return 1;              // caso base
    return n * factorial(n - 1);       // caso recursivo
}</pre>
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white border border-slate-200 rounded-xl p-4">
              <h4 class="font-bold text-slate-800 mb-2">📥 Se apilan (n = 4)</h4>
              <p class="text-sm font-mono text-gray-700">factorial(4) &rarr; 4 · f(3)<br>factorial(3) &rarr; 3 · f(2)<br>factorial(2) &rarr; 2 · f(1)<br>factorial(1) &rarr; 1 (base)</p>
            </div>
            <div class="bg-white border border-slate-200 rounded-xl p-4">
              <h4 class="font-bold text-slate-800 mb-2">📤 Se desapilan (retorno)</h4>
              <p class="text-sm font-mono text-gray-700">1 &rarr; 2 &rarr; 6 &rarr; 24</p>
              <p class="text-xs text-gray-500 mt-2">Cada retorno multiplica por el n que quedó guardado en su marco de la pila.</p>
            </div>
          </div>

          <div class="bg-rose-50 border border-rose-200 rounded-lg p-3 text-sm text-rose-800">
            ⚠️ Sin caso base, la pila se desborda: <span class="font-mono">StackOverflowError</span>.
          </div>
        </div>
      `
    },
    {
      id: 'pnn4-9',
      title: 'Divide y Conquista: los 3 pasos',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-gray-600">Estrategia para resolver un problema partiéndolo en <strong>subproblemas más pequeños e independientes</strong> del mismo tipo:</p>

          <div class="space-y-3">
            <div class="flex items-center gap-4 bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
              <div class="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-xl shrink-0">1</div>
              <div><h4 class="font-bold text-blue-900">Dividir</h4><p class="text-sm text-blue-800">Partir el problema en subproblemas más pequeños.</p></div>
            </div>
            <div class="flex items-center gap-4 bg-violet-50 border-2 border-violet-200 rounded-xl p-4">
              <div class="w-12 h-12 bg-violet-600 text-white rounded-lg flex items-center justify-center font-bold text-xl shrink-0">2</div>
              <div><h4 class="font-bold text-violet-900">Conquistar</h4><p class="text-sm text-violet-800">Resolver cada subproblema <strong>recursivamente</strong> (caso base cuando es trivial).</p></div>
            </div>
            <div class="flex items-center gap-4 bg-emerald-50 border-2 border-emerald-200 rounded-xl p-4">
              <div class="w-12 h-12 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-bold text-xl shrink-0">3</div>
              <div><h4 class="font-bold text-emerald-900">Combinar</h4><p class="text-sm text-emerald-800">Unir las soluciones parciales en la solución original.</p></div>
            </div>
          </div>

          <div class="bg-slate-900 text-white rounded-xl p-3 text-sm">
            🧮 Costo típico: una recurrencia <strong>T(n) = a·T(n/b) + f(n)</strong> — a subproblemas de tamaño n/b, más el costo de dividir/combinar.
          </div>
        </div>
      `
    },
    {
      id: 'pnn4-10',
      title: 'Búsqueda binaria',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-gray-600">Busca un valor en un arreglo <strong>ordenado</strong>: compara con el elemento del <strong>medio</strong> y <strong>descarta la mitad</strong> en cada paso.</p>

          <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm font-mono text-gray-700">
            low &rarr; high &rarr; mid = (low + high) / 2<br>
            si a[mid] &lt; x &rarr; buscar en la derecha · si a[mid] &gt; x &rarr; buscar en la izquierda
          </div>

          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-sm text-emerald-900">
              ✅ <strong>Exige arreglo ordenado:</strong> la decisión de a qué mitad ir depende del orden.
            </div>
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-900">
              ⏱️ <strong>O(log₂ n)</strong> frente a <strong>O(n)</strong> de la búsqueda lineal.
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn4-11',
      title: 'Código en vivo · factorial (Java)',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto">
            <pre class="text-xs font-mono leading-6">static int factorial(int n) {
    if (n &lt;= 1) return 1;              // caso base
    return n * factorial(n - 1);       // caso recursivo
}
// main: System.out.println("factorial(4) = " + factorial(4));</pre>
          </div>

          <div class="bg-black text-emerald-300 rounded-xl p-4">
            <p class="text-[11px] uppercase tracking-wider text-emerald-500 font-bold mb-1">Salida esperada</p>
            <pre class="text-sm font-mono">factorial(4) = 24</pre>
          </div>

          <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800">
            🔍 <strong>Pregunta:</strong> ¿en qué orden se retorna? → del caso base hacia atrás: 1, 2, 6, 24.
          </div>
        </div>
      `,
      notes: 'Salida: factorial(4) = 24. Orden de retorno: del caso base hacia atrás: 1, 2, 6, 24. Traza de factorial(5) para el ejercicio 1: se apilan 5, 4, 3, 2, 1; al llegar a 1 (base) se retorna 1 y se desapila multiplicando: 2·1=2, 3·2=6, 4·6=24, 5·24=120. Resultado: 120.'
    },
    {
      id: 'pnn4-12',
      title: 'Código en vivo · búsqueda binaria (Java)',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto">
            <pre class="text-xs font-mono leading-6">static int busquedaBinaria(int[] a, int x) {
    int low = 0, high = a.length - 1;
    while (low &lt;= high) {
        int mid = (low + high) / 2;
        System.out.println("low=" + low + " high=" + high + " mid=" + mid + " a[mid]=" + a[mid]);
        if (a[mid] == x)      return mid;
        else if (a[mid] &lt; x) low = mid + 1;
        else                  high = mid - 1;
    }
    return -1;   // no encontrado
}
// main: int[] a = {2, 5, 8, 12, 16, 23, 38, 45, 57, 70};
//       System.out.println("Índice de 23: " + busquedaBinaria(a, 23));</pre>
          </div>

          <div class="bg-black text-emerald-300 rounded-xl p-4">
            <p class="text-[11px] uppercase tracking-wider text-emerald-500 font-bold mb-1">Salida esperada (buscando 23)</p>
            <pre class="text-sm font-mono">low=0 high=9 mid=4 a[mid]=16
low=5 high=9 mid=7 a[mid]=45
low=5 high=6 mid=5 a[mid]=23
Índice de 23: 5</pre>
          </div>

          <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800">
            🔍 <strong>Pregunta:</strong> ¿por qué <span class="font-mono">low = mid + 1</span> y no <span class="font-mono">low = mid</span>? → para no re-comparar el elemento del medio y garantizar que el intervalo se reduzca.
          </div>
        </div>
      `,
      notes: 'Salida tal como se muestra. El arreglo de ejemplo es {2,5,8,12,16,23,38,45,57,70} y se busca 23 → índice 5 en tres pasos. Señalar que low=mid+1 y high=mid-1 evitan el bucle infinito.'
    },
    {
      id: 'pnn4-13',
      title: 'Código en vivo · máx/mín por divide y conquista (Java)',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto">
            <pre class="text-xs font-mono leading-6">static int[] maxMin(int[] a, int low, int high) {
    if (low == high)          return new int[]{a[low], a[low]};
    if (high == low + 1)                    // 1 sola comparación
        return (a[low] > a[high]) ? new int[]{a[low], a[high]}
                                  : new int[]{a[high], a[low]};
    int mid = (low + high) / 2;
    int[] izq = maxMin(a, low, mid);        // dividir + conquistar
    int[] der = maxMin(a, mid + 1, high);
    return new int[]{ Math.max(izq[0], der[0]),   // combinar
                      Math.min(izq[1], der[1]) };
}
// main: int[] a = {3, 8, 1, 9, 4, 7, 2};
//       int[] r = maxMin(a, 0, a.length - 1);
//       System.out.println("Máx: " + r[0] + " · Mín: " + r[1]);</pre>
          </div>

          <div class="bg-black text-emerald-300 rounded-xl p-4">
            <p class="text-[11px] uppercase tracking-wider text-emerald-500 font-bold mb-1">Salida esperada</p>
            <pre class="text-sm font-mono">Máx: 9 · Mín: 1</pre>
          </div>

          <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800">
            🔍 <strong>Pregunta:</strong> ¿dónde están los tres pasos? → dividir (<span class="font-mono">mid</span>), conquistar (llamadas recursivas), combinar (los <span class="font-mono">Math.max/min</span>).
          </div>
        </div>
      `,
      notes: 'Salida: Máx 9, Mín 1 para a={3,8,1,9,4,7,2}. Traza: maxMin(0,6) → izq maxMin(0,3) y der maxMin(4,6). maxMin(0,3)→(0,1)={8,3} y (2,3)={9,1}→combina {9,1}. maxMin(4,6)→(4,5)={7,4} y (6,6)={2,2}→combina {7,2}. Total: max(9,7)=9, min(1,2)=1.'
    },
    {
      id: 'pnn4-14',
      title: 'Práctica autónoma · 4 ejercicios',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-blue-600 text-white rounded-lg px-4 py-2 flex justify-between items-center">
            <span class="font-bold">📝 EN PAREJAS · CUADERNO U HOJA PROPIA</span>
            <span class="font-bold text-xs">sin material impreso</span>
          </div>

          <div class="space-y-3">
            <div class="bg-white border-2 border-blue-200 rounded-xl p-4">
              <p class="font-bold text-blue-900 mb-1">Ejercicio 1 · Traza de recursividad</p>
              <p class="text-sm text-gray-700">Para <span class="font-mono">factorial(5)</span>, escribe la <strong>pila de llamadas</strong>: la secuencia en que se apilan los argumentos y el orden en que se retorna cada valor.</p>
            </div>
            <div class="bg-white border-2 border-indigo-200 rounded-xl p-4">
              <p class="font-bold text-indigo-900 mb-1">Ejercicio 2 · Búsqueda binaria</p>
              <p class="text-sm text-gray-700">En <span class="font-mono">[4, 9, 15, 22, 30, 41, 55, 63, 78, 91]</span>, busca <span class="font-mono">x = 55</span> y <span class="font-mono">x = 20</span>. Escribe una fila por paso con <span class="font-mono">low</span>, <span class="font-mono">high</span>, <span class="font-mono">mid</span> y <span class="font-mono">a[mid]</span>, y el resultado final.</p>
            </div>
            <div class="bg-white border-2 border-violet-200 rounded-xl p-4">
              <p class="font-bold text-violet-900 mb-1">Ejercicio 3 · Máximos y mínimos por DyC</p>
              <p class="text-sm text-gray-700">Para <span class="font-mono">[12, 5, 31, 7, 18, 3, 27, 9]</span>, dibuja el <strong>árbol de llamadas</strong> de <span class="font-mono">maxMin</span> y marca dónde se combina cada par. Reporta máximo y mínimo.</p>
            </div>
            <div class="bg-white border-2 border-amber-200 rounded-xl p-4">
              <p class="font-bold text-amber-900 mb-1">Ejercicio 4 · Reto (eficiencia)</p>
              <p class="text-sm text-gray-700">¿Cuántas comparaciones hace una pasada iterativa y cuántas el enfoque divide y conquista para <span class="font-mono">n = 8</span>? ¿Cuándo conviene divide y conquista?</p>
            </div>
          </div>

          <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-sm text-emerald-800">
            🔁 <strong>Verificación cruzada (4 min):</strong> cada pareja revisa la traza de otra y marca en qué paso se equivocó.
          </div>
        </div>
      `,
      notes: 'Soluciones y trazas (NO proyectar). Ej.1 factorial(5): se apilan 5,4,3,2,1; retorno 1,2,6,24,120. Ej.2 x=55: (0,9)mid4=30→low5 · (5,9)mid7=63→high6 · (5,6)mid5=41→low6 · (6,6)mid6=55 → índice 6. x=20: (0,9)mid4=30→high3 · (0,3)mid1=9→low2 · (2,3)mid2=15→low3 · (3,3)mid3=22→high2 · low=3>high=2 → -1. Ej.3: maxMin(0,7)→(0,3) y (4,7); (0,3)→(0,1)={12,5} y (2,3)={31,7}→{31,5}; (4,7)→(4,5)={18,3} y (6,7)={27,9}→{27,3}; total máx 31, mín 3. Ej.4: iterativo 2n-2=14; DyC ≈ 3n/2 - 2 = 10; DyC conviene al generalizar el patrón (ordenamiento, matrices).'
    },
    {
      id: 'pnn4-15',
      title: 'Cierre del viernes',
      contentHtml: `
        <div class="space-y-5">
          <div class="grid md:grid-cols-3 gap-3 text-center">
            <div class="bg-white border-l-4 border-blue-500 rounded-lg p-3"><p class="font-bold text-blue-700">1</p><p class="text-sm text-gray-700">¿Dos partes de toda función recursiva?</p></div>
            <div class="bg-white border-l-4 border-violet-500 rounded-lg p-3"><p class="font-bold text-violet-700">2</p><p class="text-sm text-gray-700">¿Tres pasos de divide y conquista?</p></div>
            <div class="bg-white border-l-4 border-emerald-500 rounded-lg p-3"><p class="font-bold text-emerald-700">3</p><p class="text-sm text-gray-700">¿Por qué la búsqueda binaria exige arreglo ordenado?</p></div>
          </div>

          <div class="bg-blue-600 text-white rounded-xl p-4 flex items-center gap-4">
            <span class="text-3xl">📚</span>
            <div>
              <h4 class="font-bold">Tarea</h4>
              <p class="text-sm">Termina los ejercicios 1–4 y reescribe <span class="font-mono">maxMin</span> sin recursión (iterativo), comparando la salida.</p>
            </div>
          </div>

          <div class="bg-rose-50 border border-rose-200 rounded-xl p-4">
            <h4 class="font-bold text-rose-800">▶ Jueves 22/10</h4>
            <p class="text-sm text-rose-700 mt-1"><strong>Taller práctico evaluado (20 %)</strong>: algoritmos recursivos de ordenamiento e intercalación — Sotmerge, Sortmerge 2 y Quicksort.</p>
          </div>
        </div>
      `
    },
    {
      id: 'pnn4-16',
      title: 'Fuentes',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm space-y-2">
            <p class="font-bold text-slate-800">Fuentes de esta sesión</p>
            <ul class="list-disc list-inside text-gray-600 space-y-1">
              <li><strong>Programa analítico de Programación No Numérica II</strong>, Unidad II: objetivos II.1 y II.2 (recursividad, divide y conquista, búsqueda binaria, máximos y mínimos).</li>
              <li><strong>Joyanes, L.</strong> (2007). <em>Estructuras de datos en Java</em>. McGraw-Hill — recursividad y algoritmos en Java.</li>
              <li><strong>Tenenbaum, A.</strong> (1993). <em>Estructura de datos</em>. Prentice-Hall — divide y conquista.</li>
              <li><strong>GeeksforGeeks</strong> — Divide and Conquer · Binary Search (referencia).</li>
              <li><strong>CP-Algorithms</strong> — análisis de búsqueda binaria y divide y conquista (referencia).</li>
              <li><strong>Khan Academy (ES)</strong> — búsqueda binaria (refuerzo en español).</li>
            </ul>
          </div>
          <p class="text-xs text-gray-400 text-center">Material adaptado con fines docentes; se citan las fuentes originales.</p>
        </div>
      `
    }
  ]
};
