import { Module } from '../../types';

export const PNN_MODULE_3: Module = {
  id: 'pnn-mod-3',
  title: '3. Construcción de árboles HEAP: INSERTAR y HEAPIFY',
  description:
    'Semana 3: propiedad del HEAP, algoritmos INSERTAR y HEAPIFY con demostración paso a paso (jueves 08/10) y taller de construcción y validación de heaps con verificación cruzada (viernes 09/10). Unidad I, objetivo I.4.',
  evaluation: '0% — Taller',
  slides: [
    {
      id: 'pnn3-1',
      title: 'Sesión 1 · Construcción de heaps',
      contentHtml: `
        <div class="space-y-6">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center text-white text-3xl shadow-lg">🌳</div>
            <div>
              <h2 class="text-3xl font-bold text-slate-900">INSERTAR y HEAPIFY: construyendo el HEAP</h2>
              <p class="text-slate-500">Programación No Numérica II · Ing. Luis Felipe Moreno Oropeza</p>
            </div>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-3"><p class="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Fecha</p><p class="font-bold text-slate-800 text-sm">Jueves 08/10/2026</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-3"><p class="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Hora</p><p class="font-bold text-slate-800 text-sm">16:45 – 18:15</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-3"><p class="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Aula</p><p class="font-bold text-slate-800 text-sm">A-06 · Sección A</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-3"><p class="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Duración</p><p class="font-bold text-slate-800 text-sm">2 h académicas</p></div>
          </div>

          <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-900">
            🎯 <strong>Objetivo I.4:</strong> construir árboles HEAP aplicando los algoritmos <strong>INSERTAR</strong> y <strong>HEAPIFY</strong>.
          </div>
        </div>
      `
    },
    {
      id: 'pnn3-2',
      title: 'Qué veremos hoy',
      contentHtml: `
        <div class="space-y-5">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
              <h4 class="font-bold text-blue-900">📐 Conceptos</h4>
              <ul class="list-disc list-inside text-sm text-blue-800 mt-2 space-y-1">
                <li>La <strong>propiedad del HEAP</strong> (dos condiciones)</li>
                <li>Fórmulas del arreglo: hijos y padre</li>
                <li>Algoritmo <strong>INSERTAR</strong>: burbujear hacia arriba</li>
                <li>Algoritmo <strong>HEAPIFY</strong>: corregir hacia abajo</li>
              </ul>
            </div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <h4 class="font-bold text-slate-700">💻 Práctica</h4>
              <ul class="list-disc list-inside text-sm text-slate-600 mt-2 space-y-1">
                <li><strong>INSERTAR</strong> paso a paso: 40, 70, 20, 90</li>
                <li><strong>HEAPIFY</strong> sobre un arreglo dado</li>
                <li>Ejercicio en pizarra: 5 inserciones</li>
                <li>Preguntas de salida y tarea</li>
              </ul>
            </div>
          </div>
          <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-sm text-emerald-800">
            💡 <strong>La idea de hoy:</strong> el HEAP se trabaja todo el tiempo sobre el <strong>arreglo con índices</strong>, no dibujando el árbol.
          </div>
          <div class="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-600">
            📋 <strong>Aviso:</strong> mañana viernes 09/10 → taller de construcción y validación de heaps (0 %). Jueves 15/10 → prueba escrita del 10 %.
          </div>
        </div>
      `
    },
    {
      id: 'pnn3-3',
      title: 'La propiedad del HEAP',
      contentHtml: `
        <div class="space-y-5">
          <p class="text-gray-600">Un <strong>HEAP máximo</strong> es un árbol binario que cumple <strong>dos condiciones a la vez</strong>:</p>

          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
              <h4 class="font-bold text-blue-900 mb-2">1 · Es un árbol binario <strong>completo</strong></h4>
              <p class="text-sm text-blue-800">Sus niveles están llenos de izquierda a derecha.</p>
              <p class="text-xs text-blue-700 mt-2">Por eso cabe en un arreglo <strong>sin huecos</strong>.</p>
            </div>
            <div class="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-4">
              <h4 class="font-bold text-indigo-900 mb-2">2 · Cada padre ≥ sus hijos</h4>
              <p class="text-sm text-indigo-800">El valor más grande siempre está en la <strong>raíz</strong>.</p>
              <p class="text-xs text-indigo-700 mt-2">La condición es completísima: vale para <strong>toda</strong> la descendencia.</p>
            </div>
          </div>

          <div class="bg-slate-900 text-white rounded-xl p-4 text-sm">
            📐 <strong>De la condición 1 salen las fórmulas del arreglo</strong> (las de la Semana 2):
            hijo izquierdo = <strong>2p+1</strong> · hijo derecho = <strong>2p+2</strong> · padre = <strong>(p−1)/2</strong> (división entera).
          </div>
        </div>
      `
    },
    {
      id: 'pnn3-4',
      title: 'Fórmulas del arreglo: el mapa de índices',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-900">
            <strong>La idea:</strong> si el nodo está en el índice <strong>p</strong>, lo averiguamos todo con aritmética, sin punteros.
          </div>

          <table class="w-full text-sm border-collapse">
            <thead>
              <tr class="bg-slate-100 text-slate-700">
                <th class="border border-slate-200 px-3 py-2 text-left">Relación</th>
                <th class="border border-slate-200 px-3 py-2">Fórmula</th>
              </tr>
            </thead>
            <tbody class="text-center">
              <tr><td class="border border-slate-200 px-3 py-2 font-bold text-slate-800 text-left">Hijo izquierdo de p</td><td class="border border-slate-200 px-3 py-2 font-mono font-bold text-blue-700">2p + 1</td></tr>
              <tr class="bg-slate-50"><td class="border border-slate-200 px-3 py-2 font-bold text-slate-800 text-left">Hijo derecho de p</td><td class="border border-slate-200 px-3 py-2 font-mono font-bold text-blue-700">2p + 2</td></tr>
              <tr><td class="border border-slate-200 px-3 py-2 font-bold text-slate-800 text-left">Padre de p</td><td class="border border-slate-200 px-3 py-2 font-mono font-bold text-blue-700">(p − 1) / 2</td></tr>
            </tbody>
          </table>

          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-sm text-emerald-900">
              ✅ <strong>Ejemplo:</strong> p = 3 → hijo izquierdo <strong>7</strong>, hijo derecho <strong>8</strong>, padre <strong>1</strong>.
            </div>
            <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800">
              ⚠️ <strong>Chequeo previo:</strong> si el índice calculado cae <strong>fuera del arreglo</strong> (≥ n), ese hijo no existe.
            </div>
          </div>

          <div class="bg-slate-900 text-white rounded-xl p-3 text-sm">
            🪑 Estas tres fórmulas son <strong>el motor de INSERTAR y HEAPIFY</strong>: ambos algoritmos solo comparan e intercambian casillas.
          </div>
        </div>
      `
    },
    {
      id: 'pnn3-5',
      title: 'Algoritmo INSERTAR',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto">
            <pre class="text-xs font-mono leading-6">Insertar(x):
  1. a[n] = x ; n = n + 1      <span class="text-slate-400">// se agrega AL FINAL del arreglo</span>
  2. i = n - 1
  3. while i > 0 y a[padre(i)] &lt; a[i]:
       intercambiar a[i] y a[padre(i)]
       i = padre(i)            <span class="text-slate-400">// burbujear hacia arriba</span></pre>
          </div>

          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-sm text-emerald-900">
              ✅ <strong>¿Por qué al final?</strong> Agregar al final conserva la condición de <strong>completo</strong>: el nuevo nodo cae en el último lugar del último nivel.
            </div>
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-900">
              🔼 <strong>¿Y el orden?</strong> Si el hijo es mayor que su padre, se intercambian y se sigue subiendo hasta que la condición padre ≥ hijo se cumpla (o llegue a la raíz).
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn3-6',
      title: 'INSERTAR paso a paso: 40, 70, 20, 90',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-sm text-gray-600">Insertamos en un heap máximo vacío, escribiendo el arreglo tras cada inserción:</p>

          <table class="w-full text-sm border-collapse">
            <thead>
              <tr class="bg-slate-100 text-slate-700">
                <th class="border border-slate-200 px-3 py-2">Paso</th>
                <th class="border border-slate-200 px-3 py-2">Arreglo después</th>
                <th class="border border-slate-200 px-3 py-2 text-left">Acción</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="border border-slate-200 px-3 py-2 text-center font-bold">1</td><td class="border border-slate-200 px-3 py-2 text-center font-mono">[40]</td><td class="border border-slate-200 px-3 py-2 text-gray-700">agregar 40 al final (queda solo)</td></tr>
              <tr class="bg-slate-50"><td class="border border-slate-200 px-3 py-2 text-center font-bold">2</td><td class="border border-slate-200 px-3 py-2 text-center font-mono font-bold text-blue-700">[70, 40]</td><td class="border border-slate-200 px-3 py-2 text-gray-700">agregar 70 → 70 &gt; 40 → <strong>sube</strong> a la raíz</td></tr>
              <tr><td class="border border-slate-200 px-3 py-2 text-center font-bold">3</td><td class="border border-slate-200 px-3 py-2 text-center font-mono">[70, 40, 20]</td><td class="border border-slate-200 px-3 py-2 text-gray-700">agregar 20 → 20 &lt; 40 → <strong>se queda</strong></td></tr>
              <tr class="bg-slate-50"><td class="border border-slate-200 px-3 py-2 text-center font-bold">4</td><td class="border border-slate-200 px-3 py-2 text-center font-mono font-bold text-blue-700">[90, 70, 20, 40]</td><td class="border border-slate-200 px-3 py-2 text-gray-700">agregar 90 en índice 3 → 90 &gt; 40 (sube) → 90 &gt; 70 (sube) → raíz</td></tr>
            </tbody>
          </table>

          <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800">
            🔍 <strong>Ojo con el paso 4:</strong> 90 burbujeó desde el índice <strong>3</strong> → padre <strong>1</strong> → raíz <strong>0</strong>. Siempre usa <strong>(p−1)/2</strong> para saber con quién compara.
          </div>
        </div>
      `
    },
    {
      id: 'pnn3-7',
      title: 'Algoritmo HEAPIFY',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto">
            <pre class="text-xs font-mono leading-6">Heapify(i):
  1. mayor = i ; izq = 2i+1 ; der = 2i+2
  2. si izq &lt; n y a[izq] &gt; a[mayor]: mayor = izq
  3. si der &lt; n y a[der] &gt; a[mayor]: mayor = der
  4. si mayor != i:
       intercambiar a[i] y a[mayor]
       Heapify(mayor)             <span class="text-slate-400">// sigue bajando</span></pre>
          </div>

          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-900">
              🔽 <strong>¿Qué hace?</strong> Compara el nodo con sus dos hijos, elige el <strong>mayor</strong>, lo intercambia y baja a seguir corrigiendo. Es la versión <strong>hacia abajo</strong> del burbujeo.
            </div>
            <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-sm text-emerald-900">
              🏁 <strong>¿Desde dónde arranca?</strong> Desde el <strong>último nodo que tiene hijos</strong> (= último índice no hoja) y avanza hasta la raíz.
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn3-8',
      title: 'Pregunta clave: ¿por qué tan lejos de la raíz?',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-gradient-to-br from-indigo-600 to-violet-700 text-white p-5 rounded-2xl">
            <p class="text-xs uppercase tracking-widest font-bold mb-2">Pregunta clave</p>
            <p class="text-lg leading-relaxed">¿Por qué HEAPIFY empieza en el <strong>último nodo que tiene hijos</strong> y no en la raíz?</p>
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-4">
              <h4 class="font-bold text-emerald-900">Las hojas ya cumplen</h4>
              <p class="text-sm text-emerald-800 mt-2">Una hoja <strong>no tiene hijos</strong>, entonces no puede violar la condición padre ≥ hijos. Empezar por ellas no cambiaría nada.</p>
            </div>
            <div class="bg-amber-50 border-2 border-amber-200 rounded-xl p-4">
              <h4 class="font-bold text-amber-900">Bajar desde la raíz puede fallar</h4>
              <p class="text-sm text-amber-800 mt-2">Corregir arriba mueve valores hacia abajo: podrías dejar violadas casillas de abajo que no se revisan si no se recorre completo, desde el final hasta la raíz, en orden.</p>
            </div>
          </div>

          <div class="bg-slate-900 text-white rounded-xl p-3 text-sm">
            🧭 <strong>Dónde está ese nodo:</strong> es el índice <strong>p</strong> tal que <strong>2p+1 &lt; n</strong> y <strong>2p+2 ≥ n</strong> (o también &lt; n si existe), es decir, <strong>(n−2) / 2</strong> en división entera. Desde ahí hasta la raíz, uno por uno.
          </div>
        </div>
      `
    },
    {
      id: 'pnn3-9',
      title: 'Ejercicio en pizarra: 15, 8, 30, 12, 25',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-blue-600 text-white rounded-lg px-4 py-2 flex justify-between items-center">
            <span class="font-bold">📝 EN TU CUADERNO: INSERTA UNO A UNO Y ESCRIBE EL ARREGLO</span>
            <span class="font-bold text-xs">Heap máximo vacío</span>
          </div>

          <table class="w-full text-sm border-collapse">
            <thead>
              <tr class="bg-slate-100 text-slate-700">
                <th class="border border-slate-200 px-2 py-2">Tras insertar</th>
                <th class="border border-slate-200 px-2 py-2">Arreglo</th>
              </tr>
            </thead>
            <tbody class="text-center font-mono">
              <tr><td class="border border-slate-200 px-3 py-2 font-bold">15</td><td class="border border-slate-200 px-3 py-2">[15]</td></tr>
              <tr class="bg-slate-50"><td class="border border-slate-200 px-3 py-2 font-bold">8</td><td class="border border-slate-200 px-3 py-2">[15, 8]</td></tr>
              <tr><td class="border border-slate-200 px-3 py-2 font-bold">30</td><td class="border border-slate-200 px-3 py-2 font-bold text-blue-700">[30, 8, 15]</td></tr>
              <tr class="bg-slate-50"><td class="border border-slate-200 px-3 py-2 font-bold">12</td><td class="border border-slate-200 px-3 py-2">[30, 12, 15, 8]</td></tr>
              <tr><td class="border border-slate-200 px-3 py-2 font-bold">25</td><td class="border border-slate-200 px-3 py-2 font-bold text-blue-700">[30, 25, 15, 8, 12]</td></tr>
            </tbody>
          </table>

          <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-sm text-emerald-900">
            🔍 <strong>Traza del último paso:</strong> 25 entra en el índice <strong>4</strong>; su padre (p = 1) es <strong>12</strong> → 25 &gt; 12, <strong>se intercambian</strong> (sube al índice 1); su nuevo padre (raíz) es <strong>30</strong> → 25 &lt; 30, <strong>se detiene</strong>.
          </div>
        </div>
      `
    },
    {
      id: 'pnn3-10',
      title: 'Cierre del jueves',
      contentHtml: `
        <div class="space-y-5">
          <div>
            <h3 class="text-xl font-bold text-slate-900">Preguntas para salir</h3>
            <div class="space-y-2">
              <div class="flex gap-3 bg-white border-l-4 border-blue-500 rounded-lg p-3"><span class="font-bold text-blue-600">1</span><p class="text-sm text-gray-700">¿Qué <strong>dos condiciones</strong> cumple un HEAP máximo?</p></div>
              <div class="flex gap-3 bg-white border-l-4 border-indigo-500 rounded-lg p-3"><span class="font-bold text-indigo-600">2</span><p class="text-sm text-gray-700">¿Hacia dónde burbujea <strong>INSERTAR</strong> y hacia dónde <strong>HEAPIFY</strong>?</p></div>
              <div class="flex gap-3 bg-white border-l-4 border-emerald-500 rounded-lg p-3"><span class="font-bold text-emerald-600">3</span><p class="text-sm text-gray-700">¿Por qué INSERTAR agrega siempre <strong>al final</strong> del arreglo?</p></div>
            </div>
          </div>

          <div class="bg-blue-600 text-white rounded-xl p-4 flex items-center gap-4">
            <span class="text-3xl">📚</span>
            <div>
              <h4 class="font-bold">Tarea</h4>
              <p class="text-sm">Resuelve en el cuaderno los <strong>4 ejercicios del taller</strong> de mañana (viernes 09/10), que se proyectan en las diapositivas.</p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-slate-50 border rounded-xl p-4">
              <h4 class="font-bold text-slate-800">Viernes 09/10</h4>
              <p class="text-sm text-gray-600 mt-1"><strong>Taller de construcción de heaps</strong> en parejas, con verificación cruzada (0 %).</p>
            </div>
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-4">
              <h4 class="font-bold text-rose-800">Jueves 15/10</h4>
              <p class="text-sm text-rose-700 mt-1"><strong>10 % del Corte I</strong> — prueba escrita, Unidad I: estructuras de datos elementales.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn3-11',
      title: 'Repaso relámpago',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-indigo-600 text-white rounded-xl p-4 flex justify-between items-center">
            <div>
              <h4 class="font-bold text-lg">⚡ 3 preguntas antes de empezar</h4>
              <p class="font-bold text-xs">Responde rápido, en voz alta</p>
            </div>
            <span class="text-3xl">⏱️</span>
          </div>

          <div class="space-y-3">
            <div class="bg-white border-l-4 border-blue-500 rounded-lg p-4 shadow-sm">
              <p class="text-sm text-gray-700"><strong>1.</strong> ¿Cuál es la <strong>condición</strong> que define un HEAP máximo?</p>
              <p class="text-xs text-blue-600 mt-1">(pista: dos cosas)</p>
            </div>
            <div class="bg-white border-l-4 border-indigo-500 rounded-lg p-4 shadow-sm">
              <p class="text-sm text-gray-700"><strong>2.</strong> ¿Hacia dónde burbujea <strong>INSERTAR</strong> y hacia dónde <strong>HEAPIFY</strong>?</p>
              <p class="text-xs text-indigo-600 mt-1">(pista: arriba ↓ abajo…)</p>
            </div>
            <div class="bg-white border-l-4 border-emerald-500 rounded-lg p-4 shadow-sm">
              <p class="text-sm text-gray-700"><strong>3.</strong> Si el arreglo tiene <strong>n</strong> elementos ocupados, ¿en qué <strong>índice</strong> cae el próximo valor insertado?</p>
              <p class="text-xs text-emerald-600 mt-1">(pista: piensa en n = 5)</p>
            </div>
          </div>

          <div class="bg-slate-900 text-white rounded-xl p-3 text-sm">
            🏗️ Estas preguntas son la base del taller de hoy: si dudas, pregunta.
          </div>
        </div>
      `
    },
    {
      id: 'pnn3-12',
      title: 'Encuadre del taller',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-blue-600 text-white rounded-xl p-4 flex justify-between items-center">
            <div>
              <h4 class="font-bold text-lg">🛠️ Taller: construcción y validación de heaps</h4>
              <p class="font-bold text-xs">En parejas · cuaderno u hoja propia · sin material impreso</p>
            </div>
            <span class="text-3xl">⏱️</span>
          </div>

          <div class="grid md:grid-cols-3 gap-3 text-center">
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-3"><p class="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Ejercicios</p><p class="font-bold text-slate-800">4</p><p class="text-xs text-slate-500">construir, extraer, corregir y validar</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-3"><p class="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Evaluación</p><p class="font-bold text-slate-800">0 %</p><p class="text-xs text-slate-500">lista de cotejo / ficha individual</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-3"><p class="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Después</p><p class="font-bold text-slate-800">20 min</p><p class="text-xs text-slate-500">verificación cruzada en parejas</p></div>
          </div>

          <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-sm text-emerald-800">
            📋 <strong>Cómo se evalúa:</strong> la <strong>lista de cotejo</strong> de 7 criterios (la verás al final). No es mecánica: cada paso debe quedar <strong>justificado</strong>, con el índice y la comparación que hiciste.
          </div>

          <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800">
            🔁 <strong>Verificación cruzada:</strong> al terminar, cada pareja entrega su hoja y revisa el heap de otra pareja.
          </div>
        </div>
      `
    },
    {
      id: 'pnn3-13',
      title: 'Taller · Ejercicio 1: insertar',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white border-2 border-blue-200 rounded-xl p-5">
            <p class="font-bold text-blue-900 mb-2">Ejercicio 1 · Construir por INSERTAR</p>
            <p class="text-sm text-gray-700">Inserta <strong>uno a uno</strong> los valores <strong>50, 20, 70, 10, 30</strong> en un heap máximo vacío.</p>
            <ol class="list-decimal list-inside text-sm text-gray-700 mt-3 space-y-1">
              <li>Escribe el <strong>arreglo completo</strong> tras cada inserción.</li>
              <li>Marca con una flecha ↑ cuándo un valor <strong>burbujea</strong> y hasta dónde sube.</li>
              <li>Verifica con las fórmulas: hijo izquierdo <strong>2p+1</strong>, hijo derecho <strong>2p+2</strong>, padre <strong>(p−1)/2</strong>.</li>
            </ol>
          </div>

          <div class="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-600">
            📐 <strong>Formato sugerido:</strong> una fila por inserción — | valor | arreglo después | ¿subió? |
          </div>
        </div>
      `
    },
    {
      id: 'pnn3-14',
      title: 'Taller · Ejercicio 2: eliminar la raíz',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white border-2 border-indigo-200 rounded-xl p-5">
            <p class="font-bold text-indigo-900 mb-2">Ejercicio 2 · Extraer la raíz</p>
            <p class="text-sm text-gray-700">Del heap que quedaste en el <strong>ejercicio 1</strong>, <strong>elimina la raíz</strong> cuidando que el heap siga siendo máximo <strong>y completo</strong>.</p>
            <ol class="list-decimal list-inside text-sm text-gray-700 mt-3 space-y-1">
              <li>Escribe el <strong>arreglo resultante</strong>.</li>
              <li>Aplica <strong>HEAPIFY</strong> para restaurar la propiedad: compara con los hijos, intercambia con el <strong>mayor</strong> y baja.</li>
              <li>Justifica <strong>cada intercambio</strong> con el índice y los valores comparados.</li>
            </ol>
          </div>

          <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-sm text-emerald-900">
            💡 <strong>Idea clave:</strong> al quitar la raíz, el último elemento toma su lugar y hay que <strong>corregir hacia abajo</strong>. Es la técnica que usarás en la evaluación del 22/10.
          </div>
        </div>
      `
    },
    {
      id: 'pnn3-15',
      title: 'Taller · Ejercicio 3: HEAPIFY completo',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white border-2 border-violet-200 rounded-xl p-5">
            <p class="font-bold text-violet-900 mb-2">Ejercicio 3 · Aplicar HEAPIFY</p>
            <p class="text-sm text-gray-700">A partir del arreglo <span class="font-mono font-bold">[9, 5, 7, 2, 6]</span>, aplica <strong>HEAPIFY</strong> desde el <strong>último nodo con hijos</strong> hasta la raíz.</p>
            <ol class="list-decimal list-inside text-sm text-gray-700 mt-3 space-y-1">
              <li>Escribe el <strong>arreglo final</strong>.</li>
              <li>Indica <strong>desde qué índice</strong> empezaste y por qué.</li>
              <li>Anota cada intercambio con los <strong>índices</strong> y los <strong>valores</strong> comparados.</li>
            </ol>
          </div>

          <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800">
            ⚠️ <strong>Recuerda:</strong> <strong>solo las hojas</strong> quedan fuera del recorrido. HEAPIFY compare el nodo con sus dos hijos y baja con el <strong>mayor</strong>.
          </div>
        </div>
      `
    },
    {
      id: 'pnn3-16',
      title: 'Taller · Ejercicio 4: validación',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white border-2 border-rose-200 rounded-xl p-5">
            <p class="font-bold text-rose-900 mb-2">Ejercicio 4 · ¿Es un heap máximo?</p>
            <p class="text-sm text-gray-700">El arreglo <span class="font-mono font-bold">[12, 8, 15, 3, 10, 5]</span> corresponde a un heap máximo. <strong>Verifica</strong> esa afirmación.</p>
            <ol class="list-decimal list-inside text-sm text-gray-700 mt-3 space-y-1">
              <li>Revisa la condición padre ≥ hijo para <strong>cada</strong> padre (índices con hijos).</li>
              <li>Responde: <strong>¿es o no es un heap máximo?</strong> Justifica.</li>
              <li>Si no lo es, <strong>corrígelo</strong> con HEAPIFY, indicando el <strong>índice de cada intercambio</strong>.</li>
            </ol>
          </div>

          <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-sm text-emerald-900">
            💡 <strong>Consejo:</strong> organízalo en una tabla | índice p | a[p] | hijos | ¿cumple? | intercambio |. La <strong>validación</strong> es lo que más prepara la prueba escrita del 15/10.
          </div>
        </div>
      `
    },
    {
      id: 'pnn3-17',
      title: 'Lista de cotejo (7 criterios)',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-blue-600 text-white rounded-lg px-4 py-2 flex justify-between items-center">
            <span class="font-bold">📋 AUTO-CONTROLA TU HOJA CON ESTA LISTA</span>
            <span class="font-bold text-xs">0 % · taller</span>
          </div>

          <table class="w-full text-sm border-collapse">
            <thead>
              <tr class="bg-slate-100 text-slate-700">
                <th class="border border-slate-200 px-2 py-1.5 text-left">Criterio</th>
                <th class="border border-slate-200 px-2 py-1.5 w-16">✓</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="border border-slate-200 px-3 py-2">La condición de <strong>completo</strong> se respeta en cada paso</td><td class="border border-slate-200 text-center">☐</td></tr>
              <tr class="bg-slate-50"><td class="border border-slate-200 px-3 py-2"><strong>INSERTAR</strong> coloca al <strong>final</strong> y burbujea hacia arriba</td><td class="border border-slate-200 text-center">☐</td></tr>
              <tr><td class="border border-slate-200 px-3 py-2"><strong>HEAPIFY</strong> empieza en el <strong>último nodo con hijos</strong></td><td class="border border-slate-200 text-center">☐</td></tr>
              <tr class="bg-slate-50"><td class="border border-slate-200 px-3 py-2">El <strong>arreglo final</strong> de cada ejercicio es correcto</td><td class="border border-slate-200 text-center">☐</td></tr>
              <tr><td class="border border-slate-200 px-3 py-2">Cada paso está <strong>justificado</strong> (índice y comparación)</td><td class="border border-slate-200 text-center">☐</td></tr>
              <tr class="bg-slate-50"><td class="border border-slate-200 px-3 py-2">El heap del ejercicio 4 está <strong>validado</strong> con un veredicto claro</td><td class="border border-slate-200 text-center">☐</td></tr>
              <tr><td class="border border-slate-200 px-3 py-2"><strong>Letra legible</strong> y trabajo entregado <strong>en el tiempo</strong></td><td class="border border-slate-200 text-center">☐</td></tr>
            </tbody>
          </table>

          <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-sm text-emerald-800">
            ✅ <strong>7 de 7</strong> es la meta. La lista te sirve <strong>a ti</strong> para prepararte para la prueba del 15/10.
          </div>
        </div>
      `
    },
    {
      id: 'pnn3-18',
      title: 'Verificación cruzada',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-indigo-600 text-white rounded-xl p-4 flex justify-between items-center">
            <div>
              <h4 class="font-bold text-lg">🔁 Cada pareja revisa el heap de OTRA pareja</h4>
              <p class="font-bold text-xs">20 minutos · con la lista de cotejo a la vista</p>
            </div>
            <span class="text-3xl">👀</span>
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white border border-slate-200 rounded-xl p-4">
              <h4 class="font-bold text-slate-800 mb-2">Cómo hacerlo</h4>
              <ol class="list-decimal list-inside text-sm text-gray-600 space-y-1">
                <li>Entrega tu hoja y <strong>recibe otra</strong>.</li>
                <li>Recorre los <strong>4 ejercicios</strong> con la lista de cotejo.</li>
                <li>Marcas lo que no cuadra y <strong>no corriges tú</strong>: solo señalas.</li>
              </ol>
            </div>
            <div class="bg-amber-50 border-2 border-amber-200 rounded-xl p-4">
              <h4 class="font-bold text-amber-900 mb-2">La pregunta obligatoria</h4>
              <p class="text-sm text-amber-800">No informes “está bien o mal”: escribe <strong>en qué paso</strong> tu compañero se equivocó, con el índice del arreglo en el que ocurre.</p>
              <p class="text-xs text-amber-700 mt-2">Justificar el paso es exactamente lo que se evaluará en la prueba escrita.</p>
            </div>
          </div>

          <div class="bg-slate-900 text-white rounded-xl p-3 text-sm">
            🧠 <strong>Por qué funciona:</strong> revisar el procedimiento de otro obliga a <strong>leer pasos</strong> (no resultados), que es la habilidad evaluada.
          </div>
        </div>
      `
    },
    {
      id: 'pnn3-19',
      title: 'Plenaria y cierre',
      contentHtml: `
        <div class="space-y-5">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white border-l-4 border-rose-500 rounded-lg p-4">
              <p class="text-xs uppercase tracking-wider font-bold text-rose-700">En pizarra</p>
              <p class="text-sm text-gray-700 mt-1">Los <strong>2 casos con más errores</strong> de la verificación cruzada se corrigen <strong>colectivamente</strong>, con el arreglo a la vista y los índices señalados.</p>
            </div>
            <div class="bg-white border-l-4 border-blue-500 rounded-lg p-4">
              <p class="text-xs uppercase tracking-wider font-bold text-blue-700">Preguntas de salida</p>
              <ol class="list-decimal list-inside text-sm text-gray-700 mt-1 space-y-1">
                <li>¿Qué línea del INSERTAR garantiza que el heap siga siendo <strong>completo</strong>?</li>
                <li>¿Por qué el ejercicio 2 usa <strong>HEAPIFY</strong> y no INSERTAR?</li>
                <li>¿Cuántos intercambios puede llegar a hacer <strong>HEAPIFY</strong>?</li>
              </ol>
            </div>
          </div>

          <div class="bg-blue-600 text-white rounded-xl p-4 flex items-center gap-4">
            <span class="text-3xl">📚</span>
            <div>
              <h4 class="font-bold">Tarea</h4>
              <p class="text-sm">Las hojas corregidas se devuelven el lunes 12/10 con dos preguntas de retroalimentación. Repasa los 4 ejercicios del taller para la prueba.</p>
            </div>
          </div>

          <div class="bg-rose-50 border border-rose-200 rounded-xl p-4">
            <h4 class="font-bold text-rose-800">⚠️ Aviso importante</h4>
            <p class="text-sm text-rose-700 mt-1"><strong>Jueves 15/10 → prueba escrita del 10 % del Corte I</strong>. Contenido: árboles binarios, teoremas y construcción/validación de heaps con INSERTAR y HEAPIFY.</p>
          </div>
        </div>
      `
    },
    {
      id: 'pnn3-20',
      title: 'Fuentes',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm space-y-2">
            <p class="font-bold text-slate-800">Fuentes de esta sesión</p>
            <ul class="list-disc list-inside text-gray-600 space-y-1">
              <li><strong>Programa analítico de Programación No Numérica II</strong>, Unidad I: objetivo I.4 y contenido oficial (construcción de árboles HEAP — INSERTAR y HEAPIFY).</li>
              <li><strong>Tenenbaum, A.</strong> (1993). <em>Estructuras de datos</em>. Prentice-Hall — algoritmos sobre heaps y árboles.</li>
              <li><strong>Joyanes, L.</strong> (2007). <em>Estructuras de datos en Java</em>. McGraw-Hill — implementación de heaps.</li>
              <li><strong>GeeksforGeeks</strong> — Heap Data Structure: build-heap, insert y delete (referencia).</li>
              <li><strong>VisuAlgo</strong> — visualización interactiva de heaps (referencia).</li>
            </ul>
          </div>
          <p class="text-xs text-gray-400 text-center">Material adaptado con fines docentes; se citan las fuentes originales.</p>
        </div>
      `
    }
  ]
};
