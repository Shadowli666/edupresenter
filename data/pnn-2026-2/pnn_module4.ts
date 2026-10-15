import { Module } from '../../types';

export const PNN_MODULE_4: Module = {
  id: 'pnn-mod-4',
  title: '4. Recursividad, divide y conquista y taller de la Unidad I',
  description:
    'Semana 4: jueves 15/10 — recursividad y divide y conquista (búsqueda binaria, máximos y mínimos) con codificación en vivo en C, C++ y Python. Viernes 16/10 — taller de la Unidad I (10 %, Corte I).',
  evaluation: '10% — Taller de la Unidad I (viernes 16/10)',
  slides: [
    {
      id: 'pnn4-1',
      title: "Jueves 15/10 · Recursividad y divide y conquista",
      contentHtml: `

        <div class="space-y-6">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-3xl shadow-lg">🔁</div>
            <div><h2 class="text-3xl font-bold text-slate-900">Recursividad y divide y conquista</h2>
            <p class="text-slate-500">Semana 4 · Jueves 15/10 · 16:45–18:15 · Aula A-06</p></div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-4"><h4 class="font-bold text-indigo-900">Hoy</h4><div class="text-sm text-slate-700 mt-2 space-y-1"><p>Unidad II.1–II.2</p><p>Contenido nuevo (sin evaluación)</p></div></div>
            <div class="bg-sky-50 border border-sky-200 rounded-xl p-4"><h4 class="font-bold text-sky-900">Lenguajes</h4><div class="text-sm text-slate-700 mt-2 space-y-1"><p><strong>C</strong> · <strong>C++</strong> · <strong>Python</strong></p></div></div>
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-4"><h4 class="font-bold text-rose-900">Mañana</h4><div class="text-sm text-slate-700 mt-2 space-y-1"><p>Taller de la Unidad I (10 %)</p><p>Viernes 16/10, mismo horario</p></div></div>
          </div>
        </div>
      
      `,
      notes: "Clase del jueves 15/10. Contenido de recursividad y divide y conquista que estaba previsto para el viernes. El taller de la Unidad I se aplica el viernes 16/10. Demostraciones en C, C++ y Python; no se usa Java."
    },
    {
      id: 'pnn4-2',
      title: "Agenda de hoy",
      contentHtml: `

        <div class="space-y-3">
          <div class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-indigo-700 w-16">7 min</span><span>Activación: tres preguntas relámpago</span></div>
          <div class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-indigo-700 w-16">21 min</span><span>Base teórica: recursividad, divide y conquista, búsqueda binaria, máx/mín</span></div>
          <div class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-indigo-700 w-16">30 min</span><span>Codificación en vivo: C, C++ y Python</span></div>
          <div class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-indigo-700 w-16">22 min</span><span>Práctica autónoma en parejas</span></div>
          <div class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-indigo-700 w-16">10 min</span><span>Cierre, tarea y anticipo</span></div>
        </div>
      
      `
    },
    {
      id: 'pnn4-3',
      title: "Activación · 3 preguntas",
      contentHtml: `

        <div class="space-y-4">
          <div class="bg-white border rounded-xl p-4"><p class="font-bold">1.</p><p>¿Qué significa que una función se llame a sí misma?</p></div>
          <div class="bg-white border rounded-xl p-4"><p class="font-bold">2.</p><p>¿Qué pasaría si esa llamada nunca se detuviera?</p></div>
          <div class="bg-white border rounded-xl p-4"><p class="font-bold">3.</p><p>¿Recuerdan un ejemplo matemático definido en términos de sí mismo?</p></div>
        </div>
      
      `,
      notes: "Respuestas esperadas: 1) recursión; 2) bucle infinito o desbordamiento de pila; 3) factorial o Fibonacci. Solo activar, no re-teorizar."
    },
    {
      id: 'pnn4-4',
      title: "Recursividad: caso base y caso recursivo",
      contentHtml: `

        <div class="space-y-5">
          <p class="text-sm text-slate-700">Una función es recursiva cuando se <strong>llama a sí misma</strong> sobre un subproblema del mismo tipo. Tiene dos partes obligatorias:</p>
          <table class="w-full text-sm border border-slate-200">
            <thead class="bg-slate-100"><tr><th class="p-2 text-left">Parte</th><th class="p-2 text-left">Qué hace</th><th class="p-2 text-left">Ejemplo factorial</th></tr></thead>
            <tbody>
              <tr class="border-t"><td class="p-2 font-bold">Caso base</td><td class="p-2">Detiene la recursión</td><td class="p-2 font-mono">n ≤ 1 → 1</td></tr>
              <tr class="border-t"><td class="p-2 font-bold">Caso recursivo</td><td class="p-2">Reduce hacia el base</td><td class="p-2 font-mono">n · factorial(n−1)</td></tr>
            </tbody>
          </table>
          <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-950">
            🧠 La recursión usa la <strong>pila de llamadas</strong>: cada llamada se apila y se desapila al retornar. Sin caso base, la pila se desborda (<em>stack overflow</em>).
          </div>
        </div>
      
      `,
      notes: "Traza de factorial(4): se apilan 4, 3, 2, 1; al llegar a 1 se retorna 1 y luego 2, 6, 24."
    },
    {
      id: 'pnn4-4b',
      title: "Pila de llamadas · factorial(4)",
      contentHtml: `

        <div class="space-y-4">
          <div class="mermaid">graph TD
            A["factorial(4)"] --> B["4 · factorial(3)"]
            B --> C["3 · factorial(2)"]
            C --> D["2 · factorial(1)"]
            D --> E["caso base: 1"]
            E -.->|"retorna 1"| D
            D -.->|"retorna 2"| C
            C -.->|"retorna 6"| B
            B -.->|"retorna 24"| A</div>
          <p class="text-sm text-slate-700">Las llamadas se <strong>apilan</strong> hasta el caso base y los valores <strong>retornan en orden inverso</strong>: 1, 2, 6, 24.</p>
        </div>

      `,
      notes: "Pedir que digan en voz alta el orden de retorno antes de mostrar el diagrama completo."
    },
    {
      id: 'pnn4-5',
      title: "Estrategia divide y conquista",
      contentHtml: `

        <div class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div data-reveal class="bg-sky-50 border border-sky-200 rounded-xl p-4"><h4 class="font-bold text-sky-900">1 · Dividir</h4><p class="text-sm mt-1">Partir el problema en subproblemas más pequeños, independientes y del mismo tipo.</p></div>
            <div data-reveal class="bg-sky-50 border border-sky-200 rounded-xl p-4"><h4 class="font-bold text-sky-900">2 · Conquistar</h4><p class="text-sm mt-1">Resolver cada subproblema recursivamente (caso base si es trivial).</p></div>
            <div data-reveal class="bg-sky-50 border border-sky-200 rounded-xl p-4"><h4 class="font-bold text-sky-900">3 · Combinar</h4><p class="text-sm mt-1">Unir las soluciones parciales en la solución original.</p></div>
          </div>
          <div class="bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm font-mono">T(n) = a · T(n/b) + f(n)</div>
          <p class="text-xs text-slate-500">a subproblemas de tamaño n/b, más el costo de dividir y combinar f(n).</p>
        </div>
      
      `
    },
    {
      id: 'pnn4-6',
      title: "Búsqueda binaria",
      contentHtml: `

        <div class="space-y-4">
          <p class="text-sm text-slate-700">En un arreglo <strong>ordenado</strong>, compara con el elemento del medio y descarta la mitad en cada paso.</p>
          <div class="bg-white border rounded-xl p-4 text-sm font-mono">mid = (low + high) / 2<br>si a[mid] &lt; x → buscar a la derecha<br>si a[mid] &gt; x → buscar a la izquierda<br>si a[mid] = x → encontrado</div>
          <div class="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-900">⏱️ <strong>O(log₂ n)</strong> frente a <strong>O(n)</strong> de la búsqueda lineal.</div>
        </div>
      
      `,
      notes: "Preguntar: ¿por qué low = mid + 1 y no low = mid? Para no volver a comparar el medio y reducir el intervalo."
    },
    {
      id: 'pnn4-7',
      title: "Máximos y mínimos por divide y conquista",
      contentHtml: `

        <div class="space-y-4">
          <ol class="list-decimal list-inside text-sm text-slate-800 space-y-2">
            <li data-reveal>Caso base: un elemento (es máximo y mínimo) o dos elementos (una comparación).</li>
            <li data-reveal>Dividir el arreglo a la mitad.</li>
            <li data-reveal>Hallar máximo y mínimo de cada mitad recursivamente.</li>
            <li data-reveal>Combinar: el máximo mayor de los dos máximos y el mínimo menor de los dos mínimos.</li>
          </ol>
        </div>
      
      `
    },
    {
      id: 'pnn4-8',
      title: "Código en vivo 1 · factorial en C",
      contentHtml: `

        <div class="space-y-4">
          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto"><p class="text-[10px] uppercase tracking-widest text-slate-400 mb-2">C</p><pre class="text-xs font-mono leading-6">#include &lt;stdio.h&gt;

int factorial(int n) {
    if (n &lt;= 1) return 1;              /* caso base */
    return n * factorial(n - 1);       /* caso recursivo */
}

int main(void) {
    printf("factorial(4) = %d\\n", factorial(4));
    return 0;
}
</pre></div>
          <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-3"><p class="text-xs font-bold text-emerald-900 mb-1">Salida esperada (proyectada antes de ejecutar)</p><pre class="text-xs font-mono text-emerald-950">factorial(4) = 24</pre></div>
          <p class="text-sm text-slate-700">Pregunta: ¿en qué orden se retorna? → del caso base hacia atrás: 1, 2, 6, 24.</p>
        </div>
      
      `,
      notes: "Demostración en vivo con gcc -Wall. Proyectar la salida esperada antes de ejecutar."
    },
    {
      id: 'pnn4-9',
      title: "Código en vivo 2 · búsqueda binaria en C++",
      contentHtml: `

        <div class="space-y-4">
          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto"><p class="text-[10px] uppercase tracking-widest text-slate-400 mb-2">C++</p><pre class="text-xs font-mono leading-6">#include &lt;iostream&gt;
#include &lt;vector&gt;

int busquedaBinaria(const std::vector&lt;int&gt;&amp; a, int x) {
    int low = 0, high = static_cast&lt;int&gt;(a.size()) - 1;
    while (low &lt;= high) {
        int mid = (low + high) / 2;
        std::cout &lt;&lt; "low=" &lt;&lt; low &lt;&lt; " high=" &lt;&lt; high
                  &lt;&lt; " mid=" &lt;&lt; mid &lt;&lt; " a[mid]=" &lt;&lt; a[mid] &lt;&lt; "\\n";
        if (a[mid] == x)      return mid;
        else if (a[mid] &lt; x)  low = mid + 1;
        else                  high = mid - 1;
    }
    return -1;                        // no encontrado
}

int main() {
    std::vector&lt;int&gt; a = {2, 5, 8, 12, 16, 23, 38, 45, 57, 70};
    int idx = busquedaBinaria(a, 23);
    std::cout &lt;&lt; "Índice de 23: " &lt;&lt; idx &lt;&lt; "\\n";
}
</pre></div>
          <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-3"><p class="text-xs font-bold text-emerald-900 mb-1">Salida esperada (proyectada antes de ejecutar)</p><pre class="text-xs font-mono text-emerald-950">low=0 high=9 mid=4 a[mid]=16
low=5 high=9 mid=7 a[mid]=45
low=5 high=6 mid=5 a[mid]=23
Índice de 23: 5</pre></div>
          <p class="text-sm text-slate-700">Pregunta: ¿por qué low = mid + 1? → para no volver a comparar el medio y garantizar que el intervalo se reduzca.</p>
        </div>
      
      `,
      notes: "Compilado con g++ -std=c++17. Verificado: la salida coincide con la esperada."
    },
    {
      id: 'pnn4-10',
      title: "Código en vivo 3 · máx/mín en Python",
      contentHtml: `

        <div class="space-y-4">
          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto"><p class="text-[10px] uppercase tracking-widest text-slate-400 mb-2">Python 3</p><pre class="text-xs font-mono leading-6">def max_min(a, low, high):
    if low == high:                                       # 1 elemento
        return a[low], a[low]
    if high == low + 1:                                   # 2 elementos: 1 comparación
        return (a[low], a[high]) if a[low] &gt; a[high] else (a[high], a[low])
    mid = (low + high) // 2
    izq_max, izq_min = max_min(a, low, mid)               # dividir + conquistar izquierda
    der_max, der_min = max_min(a, mid + 1, high)          # dividir + conquistar derecha
    return max(izq_max, der_max), min(izq_min, der_min)   # combinar

a = [3, 8, 1, 9, 4, 7, 2]
maximo, minimo = max_min(a, 0, len(a) - 1)
print(f"Máx: {maximo} · Mín: {minimo}")
</pre></div>
          <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-3"><p class="text-xs font-bold text-emerald-900 mb-1">Salida esperada (proyectada antes de ejecutar)</p><pre class="text-xs font-mono text-emerald-950">Máx: 9 · Mín: 1</pre></div>
          <p class="text-sm text-slate-700">Pregunta: ¿dónde están los tres pasos de divide y conquista? → dividir (mid), conquistar (llamadas), combinar (max y min finales).</p>
        </div>
      
      `,
      notes: "Verificado con Python 3: salida Máx: 9 · Mín: 1."
    },
    {
      id: 'pnn4-11',
      title: "Práctica autónoma · en parejas (22 min)",
      contentHtml: `

        <div class="space-y-3">
          <div class="bg-white border rounded-xl p-4"><p class="font-bold">Ejercicio 1 · Traza</p><p class="text-sm">Para factorial(5), escriban la pila de llamadas y el orden en que se retorna cada valor.</p></div>
          <div class="bg-white border rounded-xl p-4"><p class="font-bold">Ejercicio 2 · Búsqueda binaria</p><p class="text-sm">En [4, 9, 15, 22, 30, 41, 55, 63, 78, 91], busquen x = 55 y x = 20. Una fila por paso: low, high, mid, a[mid].</p></div>
          <div class="bg-white border rounded-xl p-4"><p class="font-bold">Ejercicio 3 · Máx/mín por DyC</p><p class="text-sm">En [12, 5, 31, 7, 18, 3, 27, 9], dibujen el árbol de llamadas y marquen cada combinación.</p></div>
          <div class="bg-white border rounded-xl p-4"><p class="font-bold">Ejercicio 4 · Reto</p><p class="text-sm">¿Cuántas comparaciones hace una pasada iterativa y cuántas divide y conquista para n = 8? ¿Cuándo conviene cada una?</p></div>
          <p class="text-xs text-slate-500">Verificación cruzada en los últimos 4 minutos.</p>
        </div>
      
      `,
      notes: "Soluciones (no proyectar). E1: se apilan 5,4,3,2,1; retorno 1, 2, 6, 24, 120 → 120. E2: x=55 → índice 6; x=20 → −1 (no encontrado). E3: máx 31, mín 3. E4: iterativo 2n−2 = 14; divide y conquista ≈ 3n/2 − 2 = 10."
    },
    {
      id: 'pnn4-11b',
      title: "Comprobación rápida",
      contentHtml: `

        <div class="space-y-5">
          <div data-quiz class="bg-white border rounded-xl p-4 space-y-2">
            <p class="font-semibold">¿Qué ocurre con una función recursiva sin caso base?</p>
            <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">Devuelve 0 siempre</button>
            <button data-option data-correct class="block w-full text-left border rounded-lg p-2 text-sm">Se apilan llamadas sin parar y se desborda la pila</button>
            <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">El compilador la convierte en un ciclo</button>
            <p data-explain class="text-sm text-slate-600">Sin caso base nada detiene las llamadas: stack overflow.</p>
          </div>
          <div data-quiz class="bg-white border rounded-xl p-4 space-y-2">
            <p class="font-semibold">¿Por qué la búsqueda binaria exige un arreglo ordenado?</p>
            <button data-option data-correct class="block w-full text-left border rounded-lg p-2 text-sm">Porque descarta una mitad según el elemento del medio</button>
            <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">Porque solo funciona con números enteros</button>
            <p data-explain class="text-sm text-slate-600">La decisión de ir a la izquierda o a la derecha solo es válida si hay orden.</p>
          </div>
        </div>

      `,
      notes: "Formativa (0 %). Sustituye o complementa las preguntas de salida del cierre."
    },
    {
      id: 'pnn4-12',
      title: "Cierre del jueves",
      contentHtml: `

        <div class="space-y-4">
          <div class="bg-white border rounded-xl p-4"><h4 class="font-bold">Preguntas de salida</h4>
            <ol class="list-decimal list-inside text-sm space-y-1"><li>¿Cuáles son las dos partes de toda función recursiva?</li><li>¿Cuáles son los tres pasos de divide y conquista?</li><li>¿Por qué la búsqueda binaria exige un arreglo ordenado?</li></ol></div>
          <div class="bg-slate-50 border rounded-xl p-4 text-sm"><strong>Tarea:</strong> resolver los ejercicios 1 a 4 y reescribir max_min sin recursión (iterativo), comparando la salida.</div>
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-950"><strong>Mañana, viernes 16/10:</strong> taller de la Unidad I (10 %).</div>
        </div>
      
      `,
      notes: "Respuestas: 1) caso base y caso recursivo; 2) dividir, conquistar, combinar; 3) porque la decisión de descartar una mitad depende de que el arreglo esté ordenado."
    },
    {
      id: 'pnn4-13',
      title: "Viernes 16/10 · Taller de la Unidad I (10 %)",
      contentHtml: `

        <div class="space-y-5">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 bg-rose-600 rounded-xl flex items-center justify-center text-white text-3xl shadow-lg">📝</div>
            <div><h2 class="text-3xl font-bold text-slate-900">Taller de la Unidad I</h2>
            <p class="text-slate-500">Viernes 16/10 · 16:45–18:15 · Aula A-06 · individual</p></div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-4"><h4 class="font-bold text-rose-900">Peso</h4><div class="text-sm text-slate-700 mt-2 space-y-1"><p>10 % del Corte I</p><p>20 puntos</p></div></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-4"><h4 class="font-bold text-slate-900">Tiempo</h4><div class="text-sm text-slate-700 mt-2 space-y-1"><p>75 minutos de trabajo</p></div></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-4"><h4 class="font-bold text-slate-900">Materiales</h4><div class="text-sm text-slate-700 mt-2 space-y-1"><p>Hojas del taller, hojas de trabajo</p><p>Sin calculadora</p></div></div>
          </div>
        </div>
      
      `,
      notes: "Los ítems del taller NO se proyectan ni se repasan. Están en 04-Evaluaciones/PROGRAMACION-NO-NUMERICA-II/Revisado-2026-2/S04-2026-10-15-prueba-mixta-unidad-I-borrador.md (borrador, pendiente de aprobación docente; el formato 8.1 u 8.5 se confirma antes de imprimir)."
    },
    {
      id: 'pnn4-14',
      title: "Normas del taller",
      contentHtml: `

        <div class="space-y-3">
          <div class="bg-white border rounded-xl p-4 text-sm">✔️ Trabajo individual y en silencio.</div>
          <div class="bg-white border rounded-xl p-4 text-sm">✔️ Muestren todos los pasos en los cálculos y en la construcción de heaps.</div>
          <div class="bg-white border rounded-xl p-4 text-sm">✔️ Sin calculadora. Celulares guardados.</div>
          <div class="bg-white border rounded-xl p-4 text-sm">✔️ Nombre y CI en cada hoja.</div>
        </div>
      
      `
    },
    {
      id: 'pnn4-15',
      title: "Alcance y convenciones de la Unidad I",
      contentHtml: `

        <div class="space-y-4">
          <div class="bg-white border rounded-xl p-4 text-sm"><strong>Temas:</strong> árboles binarios (altura, nivel, grado, aristas) · Teoremas I y II · representación en arreglo secuencial · propiedad HEAP · INSERTAR y HEAPIFY.</div>
          <div class="bg-slate-50 border rounded-xl p-4 text-sm font-mono">raíz: nivel 0 · altura en aristas · índices desde 0<br>hijos de i: 2i+1 y 2i+2 · padre de i: ⌊(i−1)/2⌋</div>
          <p class="text-xs text-slate-500">Repaso por alcance, no por preguntas.</p>
        </div>
      
      `,
      notes: "No adelantar ningún ítem del taller."
    },
    {
      id: 'pnn4-16',
      title: "Devolución y próximos pasos",
      contentHtml: `

        <div class="space-y-4">
          <div class="bg-white border-l-4 border-amber-500 rounded-xl p-4 text-sm"><strong>Devolución:</strong> semana 6 (26–31/10, fecha por confirmar). Notas del Corte I en DACE el 31/10/2026.</div>
          <div class="bg-rose-50 border border-rose-200 rounded-xl p-4"><h4 class="font-bold text-rose-800">Jueves 22/10</h4>
            <p class="text-sm text-rose-700 mt-1"><strong>Taller práctico evaluado (20 %)</strong>: algoritmos recursivos de ordenamiento e intercalación — Sotmerge, Sortmerge 2 y Quicksort.</p></div>
        </div>
      
      `
    },
    {
      id: 'pnn4-17',
      title: "Fuentes",
      contentHtml: `

        <div class="space-y-4">
          <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm space-y-2">
            <p class="font-bold text-slate-800">Fuentes de esta sesión</p>
            <ul class="list-disc list-inside text-gray-600 space-y-1">
              <li><strong>Programa analítico de Programación No Numérica II</strong>, Unidad II: objetivos II.1 y II.2.</li>
              <li><strong>Joyanes, L.</strong> (2007). <em>Estructuras de datos en Java</em>. McGraw-Hill — recursividad y algoritmos (ejemplos trasladados a C, C++ y Python).</li>
              <li><strong>Tenenbaum, A.</strong> (1993). <em>Estructura de datos</em>. Prentice-Hall — divide y conquista.</li>
              <li><strong>GeeksforGeeks</strong> — Divide and Conquer · Binary Search (referencia).</li>
              <li><strong>CP-Algorithms</strong> — búsqueda binaria y divide y conquista (referencia).</li>
              <li><strong>Khan Academy (ES)</strong> — búsqueda binaria (refuerzo en español).</li>
            </ul>
          </div>
          <p class="text-xs text-gray-400 text-center">Material adaptado con fines docentes; se citan las fuentes originales.</p>
        </div>
      
      `
    }
  ]
};
