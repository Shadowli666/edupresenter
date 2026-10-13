import { Module } from '../../types';

export const PNN_MODULE_2: Module = {
  id: 'pnn-mod-2',
  title: '2. Árboles Binarios: Teoremas I y II y Arreglo Secuencial',
  description:
    'Semana 2, viernes 02/10: árboles binarios (completo y degenerado), Teorema I (nodos por nivel), Teorema II (nodos según la altura) y representación en arreglos secuenciales con ejercicios y código en Java. Unidad I, objetivos I.2 y I.3.',
  evaluation: '0% — Ejercicios',
  slides: [
    {
      id: 'pnn2-1',
      title: 'Árboles binarios',
      contentHtml: `
        <div class="space-y-6">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center text-white text-3xl shadow-lg">🌳</div>
            <div>
              <h2 class="text-3xl font-bold text-slate-900">Teoremas I y II + arreglo secuencial</h2>
              <p class="text-slate-500">Programación No Numérica II · Ing. Luis Felipe Moreno Oropeza</p>
            </div>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-3"><p class="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Fecha</p><p class="font-bold text-slate-800 text-sm">Viernes 02/10/2026</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-3"><p class="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Hora</p><p class="font-bold text-slate-800 text-sm">16:45 – 18:15</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-3"><p class="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Aula</p><p class="font-bold text-slate-800 text-sm">A-06 · Sección A</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-3"><p class="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Duración</p><p class="font-bold text-slate-800 text-sm">2 h académicas</p></div>
          </div>

          <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-900">
            🎯 <strong>Objetivos de hoy:</strong> entender los tipos de árboles (binarios y HEAP) y <strong>aplicar los teoremas I y II</strong> para el cálculo de nodos y su representación en arreglos secuenciales.
          </div>
        </div>
      `,
      notes: 'Materiales: pizarra/borrador, guía de ejercicios en pantalla (sin impresión), proyector. Verificar que el código Java compile antes de la clase.'
    },
    {
      id: 'pnn2-2',
      title: 'Qué veremos hoy',
      contentHtml: `
        <div class="space-y-5">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
              <h4 class="font-bold text-blue-900">📐 Conceptos</h4>
              <ul class="list-disc list-inside text-sm text-blue-800 mt-2 space-y-1">
                <li>Árbol binario: completo y degenerado</li>
                <li><strong>Teorema I</strong>: nodos de un nivel (2ⁱ)</li>
                <li><strong>Teorema II</strong>: nodos del árbol (2<sup>(h+1)</sup> − 1)</li>
                <li>Representación en arreglo secuencial</li>
              </ul>
            </div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <h4 class="font-bold text-slate-700">💻 Práctica</h4>
              <ul class="list-disc list-inside text-sm text-slate-600 mt-2 space-y-1">
                <li>Dos ejercicios resueltos en pizarra</li>
                <li><strong>Código en vivo en Java</strong> con salida esperada</li>
                <li>Guía de 5 ejercicios + reto, en parejas</li>
                <li>Verificación cruzada</li>
              </ul>
            </div>
          </div>
          <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-sm text-emerald-800">
            💡 <strong>La idea de hoy:</strong> los teoremas dan las <strong>cotas</strong> de un árbol; el arreglo convierte la jerarquía en <strong>aritmética</strong>.
          </div>
        </div>
      `,
      notes: 'Si el jueves 1°/10 ya se introdujo INSERTAR/HEAPIFY, reducir este bloque teórico a 12 min y entrar de una a los ejercicios con arreglo.'
    },
    {
      id: 'pnn2-3',
      title: 'Árbol binario: completo y degenerado',
      contentHtml: `
        <div class="space-y-5">
          <p class="text-gray-600">Un árbol binario es aquel en que <strong>cada nodo tiene como máximo dos hijos</strong>: izquierdo y derecho. De ahí se derivan dos casos extremos.</p>

          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
              <h4 class="font-bold text-blue-900 mb-2">Árbol completo (el máximo)</h4>
              <pre class="text-xs font-mono bg-slate-100 text-slate-800 p-2 rounded-lg">        A
      /       \\
    B           C
  /   \\       /   \\
 D     E     F     G</pre>
              <p class="text-xs text-blue-700 mt-2">Todos los niveles llenos salvo el último, y ese último lleno de izquierda a derecha.</p>
            </div>
            <div class="bg-amber-50 border-2 border-amber-200 rounded-xl p-4">
              <h4 class="font-bold text-amber-900 mb-2">Árbol degenerado (el mínimo)</h4>
              <pre class="text-xs font-mono bg-slate-100 text-slate-800 p-2 rounded-lg">        A
        |
        B
        |
        C
        |
        D</pre>
              <p class="text-xs text-amber-700 mt-2">Cada nodo con un solo hijo: una cadena.</p>
            </div>
          </div>

          <div class="bg-slate-900 text-white rounded-xl p-4 text-sm">
            Un árbol de altura <strong>h</strong> tiene como máximo <strong>2<sup>(h+1)</sup> − 1</strong> nodos y como mínimo <strong>h + 1</strong>.
            El <strong>HEAP</strong> siempre es completo: por eso cabe en un arreglo sin huecos.
          </div>
        </div>
      `,
      notes: 'La raíz está en el nivel 0 y la altura cuenta aristas: es la convención que usan los teoremas siguientes.'
    },
    {
      id: 'pnn2-4',
      title: 'Teorema I — nodos por nivel',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-5 rounded-2xl">
            <p class="text-xs uppercase tracking-widest font-bold mb-2">Teorema I</p>
            <p class="text-lg leading-relaxed">
              En un árbol binario, el número de nodos del <strong>nivel i</strong> es como máximo
              <strong> 2<sup>i</sup></strong> (y como mínimo 1, si ese nivel existe).
            </p>
          </div>

          <table class="w-full text-sm border-collapse">
            <thead>
              <tr class="bg-slate-100 text-slate-700">
                <th class="border border-slate-200 px-3 py-2">Nivel i</th>
                <th class="border border-slate-200 px-3 py-2">Máximo de nodos (2<sup>i</sup>)</th>
                <th class="border border-slate-200 px-3 py-2">Mínimo</th>
              </tr>
            </thead>
            <tbody class="text-center">
              <tr><td class="border border-slate-200 px-3 py-1">0</td><td class="border border-slate-200 px-3 py-1 font-bold">1</td><td class="border border-slate-200 px-3 py-1">1</td></tr>
              <tr><td class="border border-slate-200 px-3 py-1">1</td><td class="border border-slate-200 px-3 py-1 font-bold">2</td><td class="border border-slate-200 px-3 py-1">1</td></tr>
              <tr><td class="border border-slate-200 px-3 py-1">2</td><td class="border border-slate-200 px-3 py-1 font-bold">4</td><td class="border border-slate-200 px-3 py-1">1</td></tr>
              <tr><td class="border border-slate-200 px-3 py-1">3</td><td class="border border-slate-200 px-3 py-1 font-bold">8</td><td class="border border-slate-200 px-3 py-1">1</td></tr>
              <tr><td class="border border-slate-200 px-3 py-1">4</td><td class="border border-slate-200 px-3 py-1 font-bold">16</td><td class="border border-slate-200 px-3 py-1">1</td></tr>
            </tbody>
          </table>

          <div class="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-900">
            📐 <strong>Ejemplo:</strong> en un árbol de altura 4, el nivel 3 admite como máximo <strong>2³ = 8</strong> nodos.
          </div>
        </div>
      `,
      notes: 'Hacer el "reloj de índices": 5 preguntas relámpago (nivel 0 a 4) para automatizar 2^i.'
    },
    {
      id: 'pnn2-5',
      title: 'Teorema II — nodos del árbol',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-gradient-to-br from-indigo-600 to-violet-700 text-white p-5 rounded-2xl">
            <p class="text-xs uppercase tracking-widest font-bold mb-2">Teorema II</p>
            <p class="text-lg leading-relaxed">
              Un árbol binario de altura <strong>h</strong> tiene como máximo
              <strong> 2<sup>(h+1)</sup> − 1</strong> nodos (completo) y como mínimo
              <strong> h + 1</strong> nodos (degenerado).
            </p>
          </div>

          <table class="w-full text-sm border-collapse">
            <thead>
              <tr class="bg-slate-100 text-slate-700">
                <th class="border border-slate-200 px-3 py-2">Altura h</th>
                <th class="border border-slate-200 px-3 py-2">Máximo (2<sup>(h+1)</sup> − 1)</th>
                <th class="border border-slate-200 px-3 py-2">Mínimo (h + 1)</th>
              </tr>
            </thead>
            <tbody class="text-center">
              <tr><td class="border border-slate-200 px-3 py-1">1</td><td class="border border-slate-200 px-3 py-1 font-bold">3</td><td class="border border-slate-200 px-3 py-1">2</td></tr>
              <tr><td class="border border-slate-200 px-3 py-1">2</td><td class="border border-slate-200 px-3 py-1 font-bold">7</td><td class="border border-slate-200 px-3 py-1">3</td></tr>
              <tr><td class="border border-slate-200 px-3 py-1">3</td><td class="border border-slate-200 px-3 py-1 font-bold">15</td><td class="border border-slate-200 px-3 py-1">4</td></tr>
              <tr><td class="border border-slate-200 px-3 py-1">4</td><td class="border border-slate-200 px-3 py-1 font-bold">31</td><td class="border border-slate-200 px-3 py-1">5</td></tr>
              <tr><td class="border border-slate-200 px-3 py-1">5</td><td class="border border-slate-200 px-3 py-1 font-bold">63</td><td class="border border-slate-200 px-3 py-1">6</td></tr>
            </tbody>
          </table>

          <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800">
            ⚠️ <strong>Ojo:</strong> aquí la raíz está en el <strong>nivel 0</strong> y la altura cuenta <strong>aristas</strong>. Si tu material cuenta la altura en número de nodos, el exponente se corre en uno.
          </div>
        </div>
      `,
      notes: 'El error más común es usar 2^h en vez de 2^(h+1) al sumar; verificarlo en el ejercicio 1.'
    },
    {
      id: 'pnn2-6',
      title: 'Representación en arreglos secuenciales',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-900">
            <strong>La idea:</strong> el computador no tiene líneas, solo casillas pegadas. Aplastamos el árbol contando
            los niveles <strong>de arriba hacia abajo</strong> y, dentro de cada nivel, <strong>de izquierda a derecha</strong>, enumerando desde 0.
          </div>

          <div class="grid md:grid-cols-2 gap-3 items-start">
            <div class="bg-white border border-slate-200 rounded-xl p-1">
              <p class="text-[11px] font-bold text-slate-500 text-center mb-0.5">EL ÁRBOL (cada nodo con su índice)</p>
              <div class="mermaid">
                graph TD
                  A["0 · A"] --> B["1 · B"]
                  A --> C["2 · C"]
                  B --> D["3 · D"]
                  B --> E["4 · E"]
                  style A fill:#0f172a,stroke:#0f172a,color:#fff
                  style B fill:#dbeafe,stroke:#3b82f6
                  style C fill:#e0e7ff,stroke:#6366f1
                  style D fill:#d1fae5,stroke:#10b981
                  style E fill:#d1fae5,stroke:#10b981
              </div>
            </div>

            <div>
              <p class="text-[11px] font-bold text-slate-500 text-center mb-1">EL MISMO ÁRBOL EN UN ARREGLO</p>
              <table class="w-full text-center border-collapse">
                <thead>
                  <tr class="bg-slate-100 text-slate-600">
                    <th class="border border-slate-300 px-1 py-1 text-[11px]">0</th>
                    <th class="border border-slate-300 px-1 py-1 text-[11px]">1</th>
                    <th class="border border-slate-300 px-1 py-1 text-[11px]">2</th>
                    <th class="border border-slate-300 px-1 py-1 text-[11px]">3</th>
                    <th class="border border-slate-300 px-1 py-1 text-[11px]">4</th>
                    <th class="border border-slate-300 px-1 py-1 text-[11px]">5</th>
                    <th class="border border-slate-300 px-1 py-1 text-[11px]">6</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="text-sm font-bold">
                    <td class="border border-slate-300 py-2 text-slate-900">A</td>
                    <td class="border border-slate-300 py-2 text-blue-700">B</td>
                    <td class="border border-slate-300 py-2 text-indigo-700">C</td>
                    <td class="border border-slate-300 py-2 text-emerald-700">D</td>
                    <td class="border border-slate-300 py-2 text-emerald-700">E</td>
                    <td class="border border-slate-300 py-2 text-slate-300">–</td>
                    <td class="border border-slate-300 py-2 text-slate-300">–</td>
                  </tr>
                </tbody>
              </table>
              <p class="text-xs text-slate-500 mt-2 text-center">Altura 2 → 2³ − 1 = <strong>7</strong> casillas, 5 usadas</p>
            </div>
          </div>

          <table class="w-full text-sm border-collapse">
            <tbody class="text-center">
              <tr class="bg-blue-50"><td class="border border-blue-200 px-2 py-1.5 font-bold text-blue-900">Hijo izquierdo de p</td><td class="border border-blue-200 px-2 py-1.5 font-mono font-bold text-blue-700">2p + 1</td><td class="border border-blue-200 px-2 py-1.5 text-left text-xs text-blue-800">el asiento siguiente al que le toca</td></tr>
              <tr class="bg-indigo-50"><td class="border border-indigo-200 px-2 py-1.5 font-bold text-indigo-900">Hijo derecho de p</td><td class="border border-indigo-200 px-2 py-1.5 font-mono font-bold text-indigo-700">2p + 2</td><td class="border border-indigo-200 px-2 py-1.5 text-left text-xs text-indigo-800">y el de después</td></tr>
              <tr class="bg-violet-50"><td class="border border-violet-200 px-2 py-1.5 font-bold text-violet-900">Padre de p</td><td class="border border-violet-200 px-2 py-1.5 font-mono font-bold text-violet-700">(p − 1) / 2</td><td class="border border-violet-200 px-2 py-1.5 text-left text-xs text-violet-800">al revés: si el índice es impar, es hijo izquierdo</td></tr>
              <tr class="bg-emerald-50"><td class="border border-emerald-200 px-2 py-1.5 font-bold text-emerald-900">Tamaño para altura h</td><td class="border border-emerald-200 px-2 py-1.5 font-mono font-bold text-emerald-700">2<sup>(h+1)</sup> − 1</td><td class="border border-emerald-200 px-2 py-1.5 text-left text-xs text-emerald-800">la suma de los niveles: 1 + 2 + 4 + … + 2<sup>h</sup></td></tr>
            </tbody>
          </table>

          <div class="bg-slate-900 text-white rounded-xl p-3 text-sm">
            🪑 <strong>La analogía:</strong> el arreglo son asientos. La raíz se sienta en el 0 y <strong>reserva dos asientos para sus hijos</strong>; cada hijo reserva dos para los suyos. Como todos reservan lo mismo, la cuenta sale sola.
            <span class="text-slate-300 text-xs"> · Sin punteros · datos contiguos en memoria · el acceso a un hijo es aritmético (O(1)).</span>
          </div>
        </div>
      `,
      notes: 'Explicar con los asientos antes de mostrar la tabla. Comprobar en vivo: hijo izquierdo de B (p=1) -> 3 = D; padre de D (p=3) -> (3-1)/2 = 1 = B. Si preguntan por que 2^(h+1)-1: sumar los niveles (1+2+4+8=15 para altura 3).'
    },
    {
      id: 'pnn2-7',
      title: 'Ejercicio guiado 1 — cotas de nodos',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-blue-600 text-white rounded-xl p-4 flex justify-between items-center">
            <div>
              <h4 class="font-bold text-lg">📝 Árbol binario de altura 4</h4>
              <p class="font-bold text-xs">Se resuelve en pizarra</p>
            </div>
            <span class="text-3xl">🧮</span>
          </div>

          <div class="space-y-3">
            <div class="bg-white border-l-4 border-blue-500 rounded-lg p-4 shadow-sm">
              <p class="text-sm text-gray-700"><strong>1.</strong> ¿Cuántos nodos caben como máximo en el <strong>nivel 3</strong>?</p>
              <p class="text-xs text-blue-600 mt-1 font-mono">2³ = 8 &nbsp;→ Teorema I</p>
            </div>
            <div class="bg-white border-l-4 border-indigo-500 rounded-lg p-4 shadow-sm">
              <p class="text-sm text-gray-700"><strong>2.</strong> ¿Cuántos nodos tiene el árbol <strong>como mínimo</strong>, en total?</p>
              <p class="text-xs text-indigo-600 mt-1 font-mono">h + 1 = 5 &nbsp;→ Teorema II</p>
            </div>
            <div class="bg-white border-l-4 border-violet-500 rounded-lg p-4 shadow-sm">
              <p class="text-sm text-gray-700"><strong>3.</strong> ¿Y <strong>como máximo</strong>, en total?</p>
              <p class="text-xs text-violet-600 mt-1 font-mono">2⁵ − 1 = 31 &nbsp;→ Teorema II</p>
            </div>
          </div>

          <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800">
            🤔 Si al arreglo del ejercicio 2 le agregas un nodo al final, ¿por qué el árbol se desbalancea? (siguiente ejercicio)
          </div>
        </div>
      `,
      notes: 'Pedir la respuesta antes de escribirla. Luego mostrar el arreglo de 7 posiciones del ejercicio 2.'
    },
    {
      id: 'pnn2-8',
      title: 'Ejercicio guiado 2 — del árbol al arreglo',
      contentHtml: `
        <div class="space-y-5">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
              <h4 class="font-bold text-blue-900 mb-2">Árbol completo de altura 2</h4>
              <pre class="text-xs font-mono bg-slate-100 text-slate-800 p-2 rounded-lg">        A
      /       \\
    B           C
  /   \\
 D     E</pre>
            </div>
            <div class="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-4">
              <h4 class="font-bold text-emerald-900 mb-2">Su arreglo</h4>
              <pre class="text-xs font-mono bg-slate-100 text-slate-800 p-2 rounded-lg">[A, B, C, D, E, -, -]</pre>
              <p class="text-xs text-emerald-700 mt-2">Tamaño = 2³ − 1 = <strong>7</strong> posiciones</p>
            </div>
          </div>

          <div class="bg-white border rounded-xl p-4 shadow-sm">
            <h5 class="font-bold text-slate-700 mb-2">Verificación con las fórmulas</h5>
            <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>Hijo izquierdo de B (p = 1) → <strong>2·1+1 = 3</strong> → D ✓</li>
              <li>Hijo derecho de B (p = 1) → <strong>2·1+2 = 4</strong> → E ✓</li>
              <li>Padre de D (p = 3) → <strong>(3−1)/2 = 1</strong> → B ✓</li>
            </ul>
          </div>
        </div>
      `,
      notes: 'El tamaño 7 sale del Teorema II: enlaza la cota con el tamaño del arreglo, que es el puente al código.'
    },
    {
      id: 'pnn2-9',
      title: 'Código en vivo (Java)',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto">
            <pre class="text-xs font-mono leading-6"><span class="text-slate-400">// Arbol:  A(B(D,E), C)  -&gt;  a = [A, B, C, D, E, -, -]</span>
String[] a = <span class="text-emerald-400">new</span> String[<span class="text-amber-300">7</span>];   <span class="text-slate-400">// 2^(h+1) - 1 = 7</span>
a[<span class="text-amber-300">0</span>]=<span class="text-amber-200">"A"</span>; a[<span class="text-amber-300">1</span>]=<span class="text-amber-200">"B"</span>; a[<span class="text-amber-300">2</span>]=<span class="text-amber-200">"C"</span>;
a[<span class="text-amber-300">3</span>]=<span class="text-amber-200">"D"</span>; a[<span class="text-amber-300">4</span>]=<span class="text-amber-200">"E"</span>;

<span class="text-emerald-400">int</span> p = <span class="text-amber-300">1</span>;                      <span class="text-slate-400">// nodo B</span>
System.out.println(<span class="text-amber-200">"Hijo izq: "</span> + a[<span class="text-amber-300">2</span>*p+<span class="text-amber-300">1</span>]);
System.out.println(<span class="text-amber-200">"Hijo der: "</span> + a[<span class="text-amber-300">2</span>*p+<span class="text-amber-300">2</span>]);
System.out.println(<span class="text-amber-200">"Padre:    "</span> + a[(p-<span class="text-amber-300">1</span>)/<span class="text-amber-300">2</span>]);
System.out.println(<span class="text-amber-200">"Ocupadas: "</span> + <span class="text-amber-300">5</span> + <span class="text-amber-200">" de "</span> + a.length);</pre>
          </div>

          <div class="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-4">
            <h4 class="font-bold text-emerald-900 mb-2">Salida esperada</h4>
            <pre class="text-xs font-mono bg-emerald-900 text-emerald-50 p-2 rounded-lg">Hijo izq: D
Hijo der: E
Padre:    A
Ocupadas: 5 de 7</pre>
          </div>

          <div class="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-900">
            ❓ <strong>Mientras corre:</strong> ¿por qué <span class="font-mono">(p-1)/2</span> es división entera? · ¿qué pasaría si el árbol no fuera completo? · ¿cuántas posiciones quedan sin usar?
          </div>
        </div>
      `,
      notes: 'Escribir el código en vivo, no proyectarlo ya hecho. Proyectar la salida esperada antes de ejecutar (retos de predicción).'
    },
    {
      id: 'pnn2-9c',
      title: 'El mismo código en C++',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-blue-600 text-white rounded-xl p-3 flex justify-between items-center">
            <div>
              <h4 class="font-bold text-lg">C++</h4>
              <p class="font-bold text-xs">Mismo resultado que en Java: el índice no cambia</p>
            </div>
            <span class="text-3xl">🔷</span>
          </div>
          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto">
            <pre class="text-xs font-mono leading-6">#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

int main() {
  <span class="text-emerald-400">string</span> a[<span class="text-amber-300">7</span>] = {<span class="text-amber-200">"A"</span>,<span class="text-amber-200">"B"</span>,<span class="text-amber-200">"C"</span>,<span class="text-amber-200">"D"</span>,<span class="text-amber-200">"E"</span>}; <span class="text-slate-400">// las demas quedan ""</span>
  <span class="text-emerald-400">int</span> p = <span class="text-amber-300">1</span>;                          <span class="text-slate-400">// nodo B</span>
  cout &lt;&lt; <span class="text-amber-200">"Hijo izq: "</span> &lt;&lt; a[<span class="text-amber-300">2</span>*p+<span class="text-amber-300">1</span>] &lt;&lt; endl;
  cout &lt;&lt; <span class="text-amber-200">"Hijo der: "</span> &lt;&lt; a[<span class="text-amber-300">2</span>*p+<span class="text-amber-300">2</span>] &lt;&lt; endl;
  cout &lt;&lt; <span class="text-amber-200">"Padre:    "</span> &lt;&lt; a[(p-<span class="text-amber-300">1</span>)/<span class="text-amber-300">2</span>] &lt;&lt; endl;
  cout &lt;&lt; <span class="text-amber-200">"Ocupadas: "</span> &lt;&lt; <span class="text-amber-300">5</span> &lt;&lt; <span class="text-amber-200">" de "</span> &lt;&lt; <span class="text-amber-300">7</span> &lt;&lt; endl;
  return <span class="text-amber-300">0</span>;
}</pre>
          </div>
          <div class="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-3">
            <pre class="text-xs font-mono bg-emerald-900 text-emerald-50 p-2 rounded-lg">Hijo izq: D
Hijo der: E
Padre:    A
Ocupadas: 5 de 7</pre>
          </div>
        </div>
      `,
      notes: 'Compilado con g++ -Wall. Lo que cambia frente a Java: el arreglo se declara e inicializa con llaves y las cadenas son objetos string.'
    },
    {
      id: 'pnn2-9d',
      title: 'El mismo código en C',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-slate-700 text-white rounded-xl p-3 flex justify-between items-center">
            <div>
              <h4 class="font-bold text-lg">C</h4>
              <p class="font-bold text-xs">Sin librerías de cadena: cada posición es un arreglo de 2 caracteres</p>
            </div>
            <span class="text-3xl">⬛</span>
          </div>
          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto">
            <pre class="text-xs font-mono leading-6">#include &lt;stdio.h&gt;

int main(void) {
  <span class="text-slate-400">/* Arbol: A(B(D,E), C) -&gt; a = [A, B, C, D, E, -, -] */</span>
  <span class="text-emerald-400">char</span> a[<span class="text-amber-300">7</span>][<span class="text-amber-300">2</span>] = {<span class="text-amber-200">"A"</span>,<span class="text-amber-200">"B"</span>,<span class="text-amber-200">"C"</span>,<span class="text-amber-200">"D"</span>,<span class="text-amber-200">"E"</span>};
  <span class="text-emerald-400">int</span> p = <span class="text-amber-300">1</span>;                          <span class="text-slate-400">/* nodo B */</span>
  printf(<span class="text-amber-200">"Hijo izq: %s\n"</span>, a[<span class="text-amber-300">2</span>*p+<span class="text-amber-300">1</span>]);
  printf(<span class="text-amber-200">"Hijo der: %s\n"</span>, a[<span class="text-amber-300">2</span>*p+<span class="text-amber-300">2</span>]);
  printf(<span class="text-amber-200">"Padre:    %s\n"</span>, a[(p-<span class="text-amber-300">1</span>)/<span class="text-amber-300">2</span>]);
  printf(<span class="text-amber-200">"Ocupadas: %d de %d\n"</span>, <span class="text-amber-300">5</span>, <span class="text-amber-300">7</span>);
  return <span class="text-amber-300">0</span>;
}</pre>
          </div>
          <div class="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-3">
            <pre class="text-xs font-mono bg-emerald-900 text-emerald-50 p-2 rounded-lg">Hijo izq: D
Hijo der: E
Padre:    A
Ocupadas: 5 de 7</pre>
          </div>
        </div>
      `,
      notes: 'Compilado con gcc -Wall. Aviso para los estudiantes: char a[7][2] reserva 7 cadenas de 2 caracteres; las posiciones no inicializadas quedan vacías.'
    },
    {
      id: 'pnn2-9e',
      title: 'El mismo código en Python',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-indigo-700 text-white rounded-xl p-3 flex justify-between items-center">
            <div>
              <h4 class="font-bold text-lg">Python</h4>
              <p class="font-bold text-xs">Sin punto y coma y sin tamaño fijo: el tamaño se pregunta con len()</p>
            </div>
            <span class="text-3xl">🐍</span>
          </div>
          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto">
            <pre class="text-xs font-mono leading-6"><span class="text-slate-400"># Arbol:  A(B(D,E), C)  -&gt;  a = [A, B, C, D, E, -, -]</span>
a = [<span class="text-amber-200">"A"</span>, <span class="text-amber-200">"B"</span>, <span class="text-amber-200">"C"</span>, <span class="text-amber-200">"D"</span>, <span class="text-amber-200">"E"</span>, <span class="text-amber-200">"-"</span>, <span class="text-amber-200">"-"</span>]  <span class="text-slate-400"># 2^(h+1) - 1 = 7</span>
p = <span class="text-amber-300">1</span>                                    <span class="text-slate-400"># nodo B</span>

print(<span class="text-amber-200">"Hijo izq:"</span>, a[<span class="text-amber-300">2</span>*p+<span class="text-amber-300">1</span>])
print(<span class="text-amber-200">"Hijo der:"</span>, a[<span class="text-amber-300">2</span>*p+<span class="text-amber-300">2</span>])
print(<span class="text-amber-200">"Padre:   "</span>, a[(p-<span class="text-amber-300">1</span>)<span class="text-rose-300">//</span><span class="text-amber-300">2</span>])        <span class="text-rose-300"># OJO: doble barra = división entera</span>
print(<span class="text-amber-200">"Ocupadas:"</span>, <span class="text-amber-300">5</span>, <span class="text-amber-200">"de"</span>, len(a))</pre>
          </div>
          <div class="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-3">
            <pre class="text-xs font-mono bg-emerald-900 text-emerald-50 p-2 rounded-lg">Hijo izq: D
Hijo der: E
Padre:    A
Ocupadas: 5 de 7</pre>
          </div>
          <div class="bg-rose-50 border border-rose-200 rounded-lg p-3 text-sm text-rose-800">
            ⚠️ <strong>Trampa clásica:</strong> con una sola barra <span class="font-mono">/</span> el padre daría <span class="font-mono">0.0</span> y el programa fallaría al buscar un índice. En Python la división entera <strong>siempre</strong> lleva <span class="font-mono">//</span>.
          </div>
        </div>
      `,
      notes: 'Ejecutado con python3. Aprovechar para preguntar: ¿qué pasaría con (p-1)/2 en Python? Exactamente el error de la diapositiva anterior.'
    },
    {
      id: 'pnn2-9f',
      title: 'Los cuatro lenguajes, lado a lado',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-slate-900 text-white rounded-xl p-4 text-sm">
            Los cuatro programas dan <strong>la misma salida</strong>: <span class="font-mono">Hijo izq: D · Hijo der: E · Padre: A · Ocupadas: 5 de 7</span>.
            El <strong>concepto es uno solo</strong>; lo que cambia es la sintaxis.
          </div>

          <table class="w-full text-xs border-collapse">
            <thead>
              <tr class="bg-slate-100 text-slate-700">
                <th class="border border-slate-200 px-2 py-2 text-left">Detalle</th>
                <th class="border border-slate-200 px-2 py-2">C</th>
                <th class="border border-slate-200 px-2 py-2">C++</th>
                <th class="border border-slate-200 px-2 py-2">Java</th>
                <th class="border border-slate-200 px-2 py-2">Python</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-slate-200 px-2 py-1.5 font-bold">Hijo izquierdo de p</td>
                <td class="border border-slate-200 px-2 py-1.5 font-mono">a[2*p+1]</td>
                <td class="border border-slate-200 px-2 py-1.5 font-mono">a[2*p+1]</td>
                <td class="border border-slate-200 px-2 py-1.5 font-mono">a[2*p+1]</td>
                <td class="border border-slate-200 px-2 py-1.5 font-mono">a[2*p+1]</td>
              </tr>
              <tr class="bg-rose-50">
                <td class="border border-rose-200 px-2 py-1.5 font-bold">División entera (padre)</td>
                <td class="border border-rose-200 px-2 py-1.5 font-mono">/</td>
                <td class="border border-rose-200 px-2 py-1.5 font-mono">/</td>
                <td class="border border-rose-200 px-2 py-1.5 font-mono">/</td>
                <td class="border border-rose-200 px-2 py-1.5 font-mono font-bold">//</td>
              </tr>
              <tr>
                <td class="border border-slate-200 px-2 py-1.5 font-bold">Tamaño del arreglo</td>
                <td class="border border-slate-200 px-2 py-1.5 font-mono">sizeof a / sizeof a[0]</td>
                <td class="border border-slate-200 px-2 py-1.5 font-mono">sizeof a / sizeof a[0]</td>
                <td class="border border-slate-200 px-2 py-1.5 font-mono">a.length</td>
                <td class="border border-slate-200 px-2 py-1.5 font-mono">len(a)</td>
              </tr>
              <tr>
                <td class="border border-slate-200 px-2 py-1.5 font-bold">Arreglo de texto</td>
                <td class="border border-slate-200 px-2 py-1.5 font-mono">char a[7][2]</td>
                <td class="border border-slate-200 px-2 py-1.5 font-mono">string a[7]</td>
                <td class="border border-slate-200 px-2 py-1.5 font-mono">String[] a</td>
                <td class="border border-slate-200 px-2 py-1.5 font-mono">lista de str</td>
              </tr>
              <tr>
                <td class="border border-slate-200 px-2 py-1.5 font-bold">Posición vacía</td>
                <td class="border border-slate-200 px-2 py-1.5 font-mono">""</td>
                <td class="border border-slate-200 px-2 py-1.5 font-mono">""</td>
                <td class="border border-slate-200 px-2 py-1.5 font-mono">null</td>
                <td class="border border-slate-200 px-2 py-1.5 font-mono">None</td>
              </tr>
              <tr>
                <td class="border border-slate-200 px-2 py-1.5 font-bold">Índice fuera de rango</td>
                <td class="border border-slate-200 px-2 py-1.5">indefinido</td>
                <td class="border border-slate-200 px-2 py-1.5">indefinido</td>
                <td class="border border-slate-200 px-2 py-1.5">excepción</td>
                <td class="border border-slate-200 px-2 py-1.5">excepción</td>
              </tr>
            </tbody>
          </table>

          <div class="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-900">
            🎯 <strong>Para pensar:</strong> si el árbol tiene 15 nodos completos, ¿qué índice pide el hijo izquierdo del último nodo? Y si el árbol <em>no</em> es completo, ¿qué pasa al leer esa posición en cada lenguaje?
          </div>
        </div>
      `,
      notes: 'Esta es la diapositiva que más rinde: misma fórmula, distinto lenguaje. Registra participation en las preguntas de la diapositiva anterior.'
    },
    {
      id: 'pnn2-10',
      title: 'Ejercicio autónomo (21 min, 0 %)',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-blue-600 text-white rounded-xl p-4 flex justify-between items-center">
            <div>
              <h4 class="font-bold text-lg">🛠️ Guía de ejercicios</h4>
              <p class="font-bold text-xs">En parejas · 21 minutos · 0 %</p>
            </div>
            <span class="text-3xl">⏱️</span>
          </div>

          <div class="space-y-2">
            <div class="bg-white border rounded-lg p-3 shadow-sm text-sm"><strong>1.</strong> Árbol de altura 5: máximo de nodos en el nivel 4, mínimo y máximo total.</div>
            <div class="bg-white border rounded-lg p-3 shadow-sm text-sm"><strong>2.</strong> Un árbol de 31 nodos: ¿es completo? Justifica con el Teorema II.</div>
            <div class="bg-white border rounded-lg p-3 shadow-sm text-sm"><strong>3.</strong> Pasa el árbol de referencia a un arreglo de 15 posiciones.</div>
            <div class="bg-white border rounded-lg p-3 shadow-sm text-sm"><strong>4.</strong> Completa la tabla de hijos y padre para los nodos 1, 2, 6 y 8.</div>
            <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 shadow-sm text-sm"><strong>Reto:</strong> una agenda médica de 9 pacientes que se agregan y quitan cada día. ¿Arreglo o lista con punteros? Justifica con dos argumentos.</div>
          </div>

          <div class="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-600">
            🔁 Terminan con <strong>verificación cruzada</strong>: cada pareja revisa los ejercicios de otra y marca lo que no le cuadra.
          </div>
        </div>
      `,
      notes: 'El nodo 8 (índice 7) tiene hijos en índices 15 y 16, fuera del arreglo de 15: usarlo para mostrar por qué este árbol no es completo.'
    },
    {
      id: 'pnn2-10a',
      title: 'Árbol de referencia (cópialo)',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-blue-600 text-white rounded-lg px-4 py-2 flex justify-between items-center">
            <span class="font-bold">🌳 COPIA ESTE ÁRBOL EN TU CUADERNO</span>
            <span class="font-bold text-xs">Úsalo en los ejercicios 3 y 4</span>
          </div>

          <div class="bg-white border border-slate-200 rounded-xl p-2">
            <div class="mermaid">
              graph TD
                N1((1)) --> N2((2))
                N1 --> N3((3))
                N2 --> N4((4))
                N2 --> N5((5))
                N3 --> N6((6))
                N4 --> N7((7))
                N4 --> N8((8))
                style N1 fill:#0f172a,stroke:#0f172a,color:#fff
                style N3 fill:#fde68a,stroke:#d97706
                style N6 fill:#fde68a,stroke:#d97706
                style N7 fill:#bbf7d0,stroke:#16a34a
                style N8 fill:#bbf7d0,stroke:#16a34a
            </div>
          </div>
        </div>
      `,
      notes: 'Proyectar 30 segundos en silencio para que copien. SOLUCIÓN (no proyectar): nivel 0: 1 · nivel 1: 2, 3 · nivel 2: 4, 5, 6 · nivel 3: 7, 8. Altura = 3 · Nodos = 8 · Aristas = 7. El arreglo del ejercicio 3 tiene 2^(3+1) − 1 = 15 posiciones. Los nodos amarillos quedan colgando (3 sin hijo izquierdo, 6 sin hijos); el nivel 3 tiene 2 nodos pero el nivel 2 tenía lugar para 4, por eso el árbol no es completo.'
    },
    {
      id: 'pnn2-10b',
      title: 'Ejercicios 1 y 2 (cópialos)',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-blue-600 text-white rounded-lg px-4 py-2">
            <span class="font-bold">📝 COPIA LOS ENUNCIADOS Y RESPONDE EN TU CUADERNO</span>
          </div>

          <div class="space-y-3">
            <div class="bg-white border-2 border-blue-200 rounded-xl p-4">
              <p class="font-bold text-blue-900 mb-1">1 · Cotas de nodos (Teoremas I y II)</p>
              <p class="text-sm text-gray-700">Un árbol binario tiene <strong>altura 5</strong>.</p>
              <ol class="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
                <li>¿Cuántos nodos caben <strong>como máximo en el nivel 4</strong>?</li>
                <li>¿Cuántos nodos tiene el árbol <strong>como mínimo</strong>, en total?</li>
                <li>¿Cuántos nodos tiene <strong>como máximo</strong>, en total?</li>
                <li>¿De cuántas posiciones debe ser el arreglo si el árbol fuera completo?</li>
              </ol>
            </div>

            <div class="bg-white border-2 border-indigo-200 rounded-xl p-4">
              <p class="font-bold text-indigo-900 mb-1">2 · ¿Es completo? (Teorema II)</p>
              <p class="text-sm text-gray-700">Un árbol binario tiene <strong>31 nodos</strong>.</p>
              <ol class="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
                <li>¿Es un árbol <strong>completo</strong>? Justifica con el Teorema II.</li>
                <li>Si su altura fuera 4 y <strong>no</strong> fuera completo, ¿entre qué valores podría estar su número de nodos?</li>
              </ol>
            </div>
          </div>

          <div class="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-600">
            📐 <strong>Fórmulas:</strong> hijo izquierdo = 2p+1 · hijo derecho = 2p+2 · padre = (p−1)/2 · tamaño del arreglo = 2<sup>(h+1)</sup> − 1 · mínimo de nodos = h+1
          </div>
        </div>
      `,
      notes: 'Los enunciados van en pantalla durante la práctica; no se entregan impresos.'
    },
    {
      id: 'pnn2-10c',
      title: 'Ejercicios 3, 4 y reto (cópialos)',
      contentHtml: `
        <div class="space-y-3">
          <div class="bg-white border-2 border-violet-200 rounded-xl p-4">
            <p class="font-bold text-violet-900 mb-1">3 · Del árbol al arreglo</p>
            <p class="text-sm text-gray-700">Con el <strong>árbol de la diapositiva anterior</strong>:</p>
            <ol class="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
              <li>¿Cuál es su altura? ¿Es completo? Justifica.</li>
              <li>Pásalo a un arreglo, completando las posiciones vacías con un guion:<br/>
                <span class="font-mono text-xs">a = [ __, __, __, __, __, __, __, __, __, __, __, __, __, __, __ ]</span></li>
              <li>¿Cuántas posiciones quedan vacías? ¿Cuántos nodos le faltan para completarlo?</li>
            </ol>
          </div>

          <div class="bg-white border-2 border-emerald-200 rounded-xl p-4">
            <p class="font-bold text-emerald-900 mb-1">4 · Hijos y padre en el arreglo</p>
            <p class="text-sm text-gray-700">Completa la tabla sobre el arreglo del ejercicio 3:</p>
            <table class="w-full text-xs border-collapse mt-2">
              <thead>
                <tr class="bg-slate-100">
                  <th class="border border-slate-300 px-2 py-1">Nodo</th>
                  <th class="border border-slate-300 px-2 py-1">Índice</th>
                  <th class="border border-slate-300 px-2 py-1">Hijo izquierdo</th>
                  <th class="border border-slate-300 px-2 py-1">Hijo derecho</th>
                  <th class="border border-slate-300 px-2 py-1">Padre</th>
                </tr>
              </thead>
              <tbody class="text-center">
                <tr class="h-9"><td class="border border-slate-300 font-bold">1</td><td class="border border-slate-300"></td><td class="border border-slate-300"></td><td class="border border-slate-300"></td><td class="border border-slate-300"></td></tr>
                <tr class="h-9"><td class="border border-slate-300 font-bold">2</td><td class="border border-slate-300"></td><td class="border border-slate-300"></td><td class="border border-slate-300"></td><td class="border border-slate-300"></td></tr>
                <tr class="h-9"><td class="border border-slate-300 font-bold">6</td><td class="border border-slate-300"></td><td class="border border-slate-300"></td><td class="border border-slate-300"></td><td class="border border-slate-300"></td></tr>
                <tr class="h-9"><td class="border border-slate-300 font-bold">8</td><td class="border border-slate-300"></td><td class="border border-slate-300"></td><td class="border border-slate-300"></td><td class="border border-slate-300"></td></tr>
              </tbody>
            </table>
          </div>

          <div class="bg-amber-50 border-2 border-amber-200 rounded-xl p-4">
            <p class="font-bold text-amber-900 mb-1">5 · Reto</p>
            <p class="text-sm text-gray-700">Una agenda médica guarda <strong>9 pacientes</strong> y los <strong>agrega y quita todos los días</strong>. Explica con <strong>dos argumentos</strong> por qué conviene la representación en <strong>arreglo secuencial</strong> y no una lista con punteros, y qué habría que hacer si el árbol dejara de estar completo.</p>
          </div>
        </div>
      `,
      notes: 'Proyectar durante la práctica autónoma y durante la verificación cruzada: los pares revisan con estos enunciados a la vista.'
    },
    {
      id: 'pnn2-11',
      title: 'Cierre y tarea',
      contentHtml: `
        <div class="space-y-5">
          <div>
            <h3 class="text-xl font-bold text-slate-900">Preguntas para salir</h3>
            <div class="space-y-2">
              <div class="flex gap-3 bg-white border-l-4 border-blue-500 rounded-lg p-3"><span class="font-bold text-blue-600">1</span><p class="text-sm text-gray-700">¿Cuántos nodos caben como máximo en el <strong>nivel 3</strong>?</p></div>
              <div class="flex gap-3 bg-white border-l-4 border-indigo-500 rounded-lg p-3"><span class="font-bold text-indigo-600">2</span><p class="text-sm text-gray-700">Un árbol de altura 5: ¿cuántos nodos tiene <strong>como mínimo</strong>?</p></div>
              <div class="flex gap-3 bg-white border-l-4 border-violet-500 rounded-lg p-3"><span class="font-bold text-violet-600">3</span><p class="text-sm text-gray-700">Dime la fórmula del hijo izquierdo y la del padre.</p></div>
              <div class="flex gap-3 bg-white border-l-4 border-emerald-500 rounded-lg p-3"><span class="font-bold text-emerald-600">4</span><p class="text-sm text-gray-700">¿Por qué el HEAP se puede guardar en un arreglo sin punteros?</p></div>
            </div>
          </div>

          <div class="bg-blue-600 text-white rounded-xl p-4 flex items-center gap-4">
            <span class="text-3xl">📚</span>
            <div>
              <h4 class="font-bold">Tarea</h4>
              <p class="text-sm">Termina los 5 ejercicios y trae dibujado un árbol de al menos 8 nodos con su arreglo.</p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-slate-50 border rounded-xl p-4">
              <h4 class="font-bold text-slate-800">Próxima sesión · jueves 08/10</h4>
              <p class="text-sm text-gray-600 mt-1"><strong>INSERTAR</strong> y <strong>HEAPIFY</strong>: construcción de árboles HEAP.</p>
            </div>
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-4">
              <h4 class="font-bold text-rose-800">Jueves 15/10</h4>
              <p class="text-sm text-rose-700 mt-1"><strong>10 % del Corte I</strong> — prueba escrita, Unidad I: estructuras de datos elementales.</p>
            </div>
          </div>
        </div>
      `,
      notes: 'Anunciar el 10 % del jueves: los ejercicios de hoy son la preparación directa.'
    },
    {
      id: 'pnn2-12',
      title: 'Fuentes',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm space-y-2">
            <p class="font-bold text-slate-800">Fuentes de esta sesión</p>
            <ul class="list-disc list-inside text-gray-600 space-y-1">
              <li><strong>Programa analítico de Programación No Numérica II</strong>, Unidad I: objetivos I.2 y I.3 y contenido oficial (tipos de árboles —binarios y HEAP— y Teoremas I y II para árboles binarios).</li>
              <li><strong>Tenenbaum, A.</strong> (1993). <em>Estructuras de datos</em>. Prentice-Hall — teoremas de árboles binarios.</li>
              <li><strong>Joyanes, L.</strong> (2007). <em>Estructuras de datos en Java</em>. McGraw-Hill — representación de árboles (lenguaje del código de hoy).</li>
              <li><strong>GeeksforGeeks</strong> — Data Structures &amp; Algorithms (referencia).</li>
              <li><strong>VisuAlgo</strong> — visualización interactiva de árboles y heaps (referencia).</li>
            </ul>
          </div>
          <p class="text-xs text-gray-400 text-center">Material adaptado con fines docentes; se citan las fuentes originales.</p>
        </div>
      `,
      notes: 'Proyectar durante las preguntas de cierre.'
    }
  ]
};