import { Module } from '../../types';

export const PNN_MODULE_9: Module = {
  id: 'pnn-mod-9',
  title: '9. El método de adquisición: cintas, bolsa e intercalación',
  description:
    'Semana 9: jueves 19/11 — el método de adquisición (voraz): las cuatro piezas, las dos condiciones de uso y cuándo falla; almacenamiento óptimo en cintas magnéticas con la fila de pago como analogía, la fórmula del MRT, la prueba de optimalidad por intercambio y la verificación por enumeración en C; el problema de la bolsa de papel en sus dos variantes (fraccionaria: el voraz es óptimo; 0/1: el voraz falla 30 frente a 40 y entra la programación dinámica con la tabla V(i,w)). Viernes 20/11 — modelos óptimos de intercalación: mezclar archivos de dos en dos, la analogía de la fotocopiadora, el árbol de mezcla y la lectura por profundidad, verificación en C (voraz 205 frente a cascada 270), repaso activo de las Unidades II y III y asignación de la práctica evaluada del 10 % (ejercicio de código para casa). Unidad III.1–III.3.',
  evaluation: '10 % (práctica para casa, asignada el viernes)',
  slides: [
    {
      id: 'pnn9-1',
      title: 'Jueves 19/11 · El método de adquisición',
      contentHtml: `
        <div class="space-y-7">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center text-white text-4xl shadow-lg">🎯</div>
            <div>
              <p class="text-sm uppercase tracking-widest font-bold text-teal-700">Programación No Numérica II · Unidad III.1–III.2</p>
              <h2 class="text-3xl md:text-4xl font-bold text-slate-900">El método de adquisición</h2>
              <p class="text-slate-500 mt-1">Elegir paso a paso, y demostrar que la elección es la correcta</p>
            </div>
          </div>
          <div class="bg-teal-50 border border-teal-200 rounded-xl p-5 text-teal-950">
            <p class="text-lg"><strong>Objetivo:</strong> aplicar el método de adquisición al almacenamiento óptimo en cintas magnéticas y al problema de la bolsa de papel.</p>
            <p class="text-sm text-teal-800 mt-2">Hoy el método <strong>gana dos veces</strong> (cintas y bolsa fraccionaria) y <strong>pierde una</strong> (bolsa 0/1). Ese desenlace es la lección.</p>
          </div>
          <p class="text-sm text-slate-500">Jueves 19/11/2026 · 16:45–18:15 · Aula A-06 · Sección A · IUPSM — Extensión Ciudad Ojeda</p>
        </div>
      `,
      notes: "Portada. Sin laboratorio: el docente ejecuta S08-cintas.c y S08-bolsa.c desde el proyector; los estudiantes trabajan en el cuaderno. Construye hacia: la práctica evaluada del 10 % (ejercicio de código para casa, asignada el viernes). La clase reemplaza al contenido de la S8 que no se dictó; nada de esto se vio antes."
    },
    {
      id: 'pnn9-2',
      title: 'Ruta del jueves',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-slate-600 text-lg">La S4–S7 <strong>partían</strong> el problema (divide y conquista). Hoy la estrategia cambia: el problema no se parte, se <strong>recorre eligiendo</strong>.</p>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-teal-50 border border-teal-200 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-teal-700">Teoría</p><h3 class="text-lg font-bold text-teal-950 mt-2">El método y la cinta</h3><p class="text-sm text-teal-900 mt-2">Cuatro piezas, dos condiciones de uso, la fila de pago y la fórmula del MRT.</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-slate-700">Código en vivo</p><h3 class="text-lg font-bold text-slate-950 mt-2">Dos programas en C</h3><p class="text-sm text-slate-700 mt-2">Cintas: 15,40 frente a 25,40. Bolsa: 46,0 / 30 / 40 sobre la misma instancia.</p></div>
            <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-emerald-700">Práctica</p><h3 class="text-lg font-bold text-emerald-950 mt-2">Pizarra y cuaderno</h3><p class="text-sm text-emerald-900 mt-2">Los seis órdenes de la cinta corta y dos ejercicios para el cuaderno.</p></div>
          </div>
        </div>
      `,
      notes: "La proporción expositiva sube a 42 % porque esta sesión comprime el contenido pendiente de la S8 (cintas y bolsa no se dictaron el 12 y 13/11). Es una corrección puntual: el viernes vuelve al patrón teoría 20–30 %."
    },
    {
      id: 'pnn9-3',
      title: 'Recuperación · ¿partir o elegir?',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <p class="font-bold text-slate-900">Recuperación (responda en voz alta, sin mirar el cuaderno)</p>
            <div class="mt-2" data-quiz>
              <p>1. Si duplico los datos, ¿cuánto más trabajo hace un algoritmo O(n²)?</p>
              <button data-option>Dos veces</button>
              <button data-option data-correct>Cuatro veces</button>
              <button data-option>Diez veces</button>
              <p data-explain>O(n²) crece con el cuadrado: duplicar n cuadruplica el trabajo. La O grande mide crecimiento, no segundos.</p>
            </div>
          </div>
          <p class="text-slate-700">2. ¿Cuál va primero en la cinta: el programa corto o el largo? Anote dos razones en el cuaderno.</p>
          <div class="bg-teal-50 border border-teal-200 rounded-xl p-4 text-sm text-teal-950">
            <p>La S4–S7 partían el problema. ¿Qué pasa con los problemas que <strong>no se pueden partir</strong>, sino que hay que <strong>recorrer eligiendo</strong>?</p>
          </div>
        </div>
      `,
      notes: "4 min. Las preguntas de recuperación se responden sin volver a explicar la Big O (regla anti-repetición). La pregunta puente se anota en la pizarra sin corregir; se contrasta en la diapositiva pnn9-7. Respuestas esperadas de la puente: 'el corto primero' (justificación vaga: tarda menos); el argumento formal aparece con los coeficientes."
    },
    {
      id: 'pnn9-4',
      title: 'El método de adquisición · las cuatro piezas',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-gradient-to-br from-slate-900 to-teal-900 text-white rounded-2xl p-5">
            <p class="text-xs uppercase tracking-widest font-bold text-teal-300">La idea en una frase</p>
            <p class="text-lg md:text-xl font-semibold mt-2 leading-snug">Construir la solución por etapas, tomando en cada etapa la <strong>mejor opción disponible</strong> y sin volver atrás.</p>
            <p class="text-sm text-teal-200 mt-2">«Adquisición» (cátedra) = método voraz o greedy (literatura).</p>
          </div>
          <div class="bg-white border border-slate-200 rounded-xl p-4 text-sm text-slate-700">
            <p><strong>Analogía del mercado:</strong> ir con una lista y un presupuesto fijo. Cada vez que pones algo en la cesta eliges lo que hoy conviene más y <strong>no deshaces</strong> compras anteriores. Si la elección local nunca te mete en un aprieto, terminas con la mejor cesta.</p>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-center text-sm">
            <div class="bg-white border-2 border-teal-200 rounded-xl p-3"><p class="font-bold text-teal-800">Candidatos</p><p class="text-slate-600 mt-1">¿Qué se puede elegir?</p></div>
            <div class="bg-white border-2 border-teal-200 rounded-xl p-3"><p class="font-bold text-teal-800">Función de selección</p><p class="text-slate-600 mt-1">¿Cuál es el mejor ahora?</p></div>
            <div class="bg-white border-2 border-teal-200 rounded-xl p-3"><p class="font-bold text-teal-800">Función de factibilidad</p><p class="text-slate-600 mt-1">¿La elección mantiene la solución válida?</p></div>
            <div class="bg-white border-2 border-teal-200 rounded-xl p-3"><p class="font-bold text-teal-800">Función objetivo</p><p class="text-slate-600 mt-1">¿Qué se minimiza o maximiza?</p></div>
          </div>
        </div>
      `,
      notes: "7 min. La analogía va ANTES de las piezas (modelo mental primero, formalismo después). En la cinta: candidatos = programas sin guardar; selección = menor longitud; factibilidad = siempre queda sitio; objetivo = MRT mínimo. Completar la tabla de viva voz, no leerla."
    },
    {
      id: 'pnn9-5',
      title: 'Condiciones de uso · cuándo falla el método',
      contentHtml: `
        <div class="space-y-5">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white border-l-4 border-teal-500 rounded-xl p-4">
              <p class="text-xs uppercase font-bold text-teal-700">Condición 1</p>
              <p class="font-bold text-slate-900 mt-1">Subestructura óptima</p>
              <p class="text-sm text-slate-600 mt-2">La solución óptima contiene soluciones óptimas de subproblemas.</p>
            </div>
            <div class="bg-white border-l-4 border-teal-500 rounded-xl p-4">
              <p class="text-xs uppercase font-bold text-teal-700">Condición 2</p>
              <p class="font-bold text-slate-900 mt-1">Propiedad de elección voraz</p>
              <p class="text-sm text-slate-600 mt-2">Existe una solución óptima que incluye la elección local del primer paso (y en cada paso).</p>
            </div>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-950">
            <p><strong>Sin las condiciones el método entrega una solución, no LA solución.</strong> Falla cuando una elección local buena cierra una puerta que después se necesita.</p>
          </div>
          <div class="bg-slate-900 text-white rounded-xl p-4 text-center">
            <p class="text-sm uppercase tracking-widest text-teal-300">Tres problemas, tres veredictos</p>
            <p class="text-lg font-semibold mt-1">El método <strong>gana</strong> en la cinta y en la bolsa fraccionaria; <strong>pierde</strong> en la bolsa 0/1.</p>
          </div>
        </div>
      `,
      notes: "Ya está dentro de la teoría 1 (3 min). El anuncio del 'guion' crea expectativa: cada bloque abre con '¿ganará aquí?'. La bolsa 0/1 es el caso exacto: tomar el objeto más denso bloquea la combinación ganadora."
    },
    {
      id: 'pnn9-6',
      title: 'La cinta · la fila de pago y el MRT',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-white border border-slate-200 rounded-xl p-4 text-sm text-slate-700">
            <p><strong>La fila de pago:</strong> en una cola, la persona con la compra corta adelante hace que <em>todos</em> esperen menos en promedio. ¿El promedio de espera sube o baja si siempre se atiende primero la compra más pequeña?</p>
          </div>
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <p class="font-bold text-slate-900">Cinta magnética</p>
              <p class="text-slate-600 mt-2">Almacenamiento de <strong>acceso secuencial</strong>: para leer el programa i hay que recorrer todos los anteriores.</p>
              <p class="mt-2 font-mono text-slate-900">T<sub>i</sub> = L<sub>1</sub> + L<sub>2</sub> + … + L<sub>i</sub></p>
              <p class="text-slate-600 mt-1">Para 5 programas hay <strong>5! = 120</strong> órdenes posibles; con 10: 3 628 800. Probarlos todos no es estrategia.</p>
            </div>
            <div class="bg-teal-50 border border-teal-200 rounded-xl p-4">
              <p class="font-bold text-teal-900">Tiempo medio de recuperación</p>
              <p class="mt-2 font-mono text-lg text-slate-900">MRT = (1/n) · (T<sub>1</sub> + … + T<sub>n</sub>)</p>
              <p class="text-slate-600 mt-2">El objetivo: elegir el <strong>orden</strong> de los programas que minimiza el MRT.</p>
            </div>
          </div>
          <div class="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600">
            <span class="font-bold text-slate-700">Variables:</span> L<sub>i</sub> longitud del programa i · n número de programas · T<sub>i</sub> espera acumulada hasta el programa i · MRT promedio de las n esperas.
          </div>
        </div>
      `,
      notes: "6 min de los 13 de la teoría 2. La fila de pago baja la carga cognitiva: la pregunta '¿sube o baja?' se responde con intuición; la formalización solo la traduce. Los 120 órdenes con 5 programas es el dato que justifica el método (la S4 ya mostró que n! es inabordable)."
    },
    {
      id: 'pnn9-7',
      title: 'Por qué el orden creciente es óptimo',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-white border border-slate-200 rounded-xl p-4">
            <p class="font-bold text-slate-900 text-sm">1. Contar cuántas veces se paga cada longitud</p>
            <div class="mt-2 text-sm" data-reveal>
              <p class="font-mono text-slate-900">Σ T<sub>i</sub> = n·L<sub>1</sub> + (n−1)·L<sub>2</sub> + … + 2·L<sub>n−1</sub> + 1·L<sub>n</sub></p>
              <p class="text-slate-600 mt-1">Los coeficientes <strong>decrecen</strong> (5, 4, 3, 2, 1): lo de adelante se paga en TODAS las recuperaciones.</p>
            </div>
            <div class="mt-2 text-sm bg-teal-50 border border-teal-200 rounded-lg p-3 text-teal-950" data-reveal>
              <p><strong>Lo que se paga más veces debe ser lo más pequeño.</strong></p>
            </div>
          </div>
          <div class="bg-white border border-slate-200 rounded-xl p-4">
            <p class="font-bold text-slate-900 text-sm">2. Intercambio</p>
            <div class="mt-2 text-sm" data-reveal>
              <p class="font-mono text-slate-900">si i &lt; j y L<sub>i</sub> &gt; L<sub>j</sub>, intercambiar cambia la suma en (j−i)·(L<sub>j</sub>−L<sub>i</sub>) &lt; 0 → disminuye</p>
              <p class="text-slate-600 mt-1">Ningún orden con una inversión puede ser óptimo. El creciente es el óptimo.</p>
            </div>
          </div>
          <p class="text-xs text-slate-500">Vocabulario: coeficiente (cuántas veces se paga) · inversión (dos en orden equivocado) · SPT (shortest processing time first).</p>
          <div class="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600">
            <span class="font-bold text-slate-700">Variables:</span> L<sub>i</sub> longitud del programa en la posición i · n número de programas · ΣT<sub>i</sub> suma de todas las esperas · i y j posiciones en el orden.
          </div>
        </div>
      `,
      notes: "7 min. Este es el bloque que responde la pregunta puente de pnn9-3: 'el corto primero' era correcto, pero la razón son los coeficientes. El argumento de intercambio es la misma herramienta que la S7 llamó 'prueba': aquí se usa para ELEGIR, no para analizar recurrencias. Con la respuesta de la fila de pago ya dada, este formalismo es traducción, no contenido nuevo."
    },
    {
      id: 'pnn9-8',
      title: 'Código en vivo · S08-cintas.c',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-3 text-sm text-amber-950">
            <p><strong>Antes de ejecutar:</strong> estime el MRT del orden creciente y anótelo en el cuaderno.</p>
          </div>
          <pre><code>/* cinco longitudes, ordenadas y no ordenadas */
int L[] = {12, 4, 9, 2, 7};

for (orden in {creciente, decreciente}) {
    suma = 0;
    for (i = 0; i &lt; 5; i++)   /* T_i = suma de L[0..i] */
        suma += prefijo(i);
    MRT = suma / 5.0;
}
/* además: enumera las 120 permutaciones (5!) */
/* y verifica: 5*2 + 4*4 + 3*7 + 2*9 + 1*12 */</code></pre>
          <p class="text-sm text-slate-600">Archivo completo: <code>03-Clases/PROGRAMACION-NO-NUMERICA-II/S08-cintas.c</code> · gcc · salida determinista.</p>
        </div>
      `,
      notes: "11 min: 2 de predicción, 2 de ejecución y 7 de lectura (diap. 9). El código NO demuestra la optimalidad: la enumera para este caso (evidencia); la demostración general es el intercambio. Nombrar esa distinción: 'evidencia para este caso' vs 'prueba para todos'."
    },
    {
      id: 'pnn9-9',
      title: 'Salida real · 15,40 frente a 25,40',
      contentHtml: `
        <div class="space-y-4">
          <pre><code>Programas en la cinta (longitudes): 12 4 9 2 7

creciente (SPT):        2  4  7  9 12   |  suma T_i =  77  MRT =  15.40
decreciente:           12  9  7  4  2   |  suma T_i = 127  MRT =  25.40

Permutaciones exploradas: 120  (5! = 120)
mejor (exhaustiva):     2  4  7  9 12   |  suma T_i =  77  MRT =  15.40
peor  (exhaustiva):    12  9  7  4  2   |  suma T_i = 127  MRT =  25.40

Verificacion de la formula: suma T_i = 5*2 + 4*4 + 3*7 + 2*9 + 1*12 = 77
El orden creciente SI es el optimo.</code></pre>
          <div class="grid md:grid-cols-3 gap-3 text-sm">
            <div class="bg-white border-l-4 border-teal-500 rounded-xl p-3"><p class="font-bold text-slate-900">La fórmula se cumple</p><p class="text-slate-600 mt-1">Los coeficientes 5, 4, 3, 2, 1 son los de la teoría: el código los verifica.</p></div>
            <div class="bg-white border-l-4 border-teal-500 rounded-xl p-3"><p class="font-bold text-slate-900">La intuición se confirma</p><p class="text-slate-600 mt-1">El creciente coincide con el mejor de las 120 permutaciones.</p></div>
            <div class="bg-white border-l-4 border-rose-500 rounded-xl p-3"><p class="font-bold text-slate-900">El error cuesta</p><p class="text-slate-600 mt-1">El decreciente pierde 65 % de tiempo medio (25,40 vs 15,40).</p></div>
          </div>
        </div>
      `,
      notes: "Salida real re-ejecutada el 17/11/2026 (gcc): idéntica en cualquier equipo. Preguntar: '¿cómo sabríamos si el creciente NO fuera el mejor?' → las 120 permutaciones lo demuestran para ESTE caso; el intercambio, para TODOS."
    },
    {
      id: 'pnn9-10',
      title: 'Práctica guiada · los seis órdenes de {2, 5, 4}',
      contentHtml: `
        <div class="space-y-5">
          <p class="text-slate-700">Cada uno calcula los seis órdenes en su cuaderno; la tabla se completa en voz alta y se escribe en la pizarra. El ganador se verifica con la fórmula.</p>
          <div class="grid md:grid-cols-3 gap-3 text-sm">
            <div class="bg-white border border-slate-200 rounded-xl p-3"><p class="font-mono font-bold text-slate-900">2, 5, 4</p><p class="text-slate-500 mt-1">Σ T<sub>i</sub> = <span class="font-bold text-teal-700">?</span> · MRT = <span class="font-bold text-teal-700">?</span></p></div>
            <div class="bg-white border border-slate-200 rounded-xl p-3"><p class="font-mono font-bold text-slate-900">2, 4, 5</p><p class="text-slate-500 mt-1">Σ T<sub>i</sub> = <span class="font-bold text-teal-700">?</span> · MRT = <span class="font-bold text-teal-700">?</span></p></div>
            <div class="bg-white border border-slate-200 rounded-xl p-3"><p class="font-mono font-bold text-slate-900">5, 2, 4</p><p class="text-slate-500 mt-1">Σ T<sub>i</sub> = <span class="font-bold text-teal-700">?</span> · MRT = <span class="font-bold text-teal-700">?</span></p></div>
            <div class="bg-white border border-slate-200 rounded-xl p-3"><p class="font-mono font-bold text-slate-900">5, 4, 2</p><p class="text-slate-500 mt-1">Σ T<sub>i</sub> = <span class="font-bold text-teal-700">?</span> · MRT = <span class="font-bold text-teal-700">?</span></p></div>
            <div class="bg-white border border-slate-200 rounded-xl p-3"><p class="font-mono font-bold text-slate-900">4, 2, 5</p><p class="text-slate-500 mt-1">Σ T<sub>i</sub> = <span class="font-bold text-teal-700">?</span> · MRT = <span class="font-bold text-teal-700">?</span></p></div>
            <div class="bg-white border border-slate-200 rounded-xl p-3"><p class="font-mono font-bold text-slate-900">4, 5, 2</p><p class="text-slate-500 mt-1">Σ T<sub>i</sub> = <span class="font-bold text-teal-700">?</span> · MRT = <span class="font-bold text-teal-700">?</span></p></div>
          </div>
          <p class="text-sm text-slate-600"><strong>Verificación final:</strong> 3·2 + 2·4 + 1·5 = <span class="font-bold">?</span> (el valor del mejor orden).</p>
          <div class="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600">
            <span class="font-bold text-slate-700">Variables:</span> T<sub>i</sub> espera acumulada del programa i · MRT promedio de las n esperas.
          </div>
        </div>
      `,
      notes: "9 min. Solución: mejor orden 2, 4, 5 con Σ T<sub>i</sub> = 2+6+11 = 19 y MRT 6,33; los otros: 2,5,4 → 20/6,67; 5,2,4 → 23/7,67; 5,4,2 → 25/8,33; 4,2,5 → 21/7,00; 4,5,2 → 24/8,00. Verificación: 3·2+2·4+1·5 = 19. Pregunta de comprobación al cerrar: 'en un orden óptimo, ¿puede haber una inversión?' (NO)."
    },
    {
      id: 'pnn9-11',
      title: 'La bolsa de papel · dos variantes, una frase',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-white border border-slate-200 rounded-xl p-4 text-sm text-slate-700">
            <p><strong>Enunciado de cátedra:</strong> una bolsa de papel resiste hasta <strong>W</strong> unidades de peso y hay n objetos, cada uno con peso w<sub>i</sub> y valor v<sub>i</sub>. Escoga objetos para que el valor total sea <strong>máximo</strong> sin pasar de W.</p>
          </div>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
              <p class="text-xs uppercase tracking-wider font-bold text-emerald-700">Fraccionaria</p>
              <p class="text-sm text-emerald-950 mt-2">Se puede <strong>partir</strong> un objeto: una fracción 0 ≤ x<sub>i</sub> ≤ 1.</p>
              <p class="text-sm text-emerald-900 mt-2">Real: carga a granel — arena, harina, combustible.</p>
              <p class="text-sm font-bold text-emerald-900 mt-2">Estrategia: voraz (método de adquisición).</p>
            </div>
            <div class="bg-rose-50 border border-rose-200 rounded-2xl p-4">
              <p class="text-xs uppercase tracking-wider font-bold text-rose-700">0/1</p>
              <p class="text-sm text-rose-950 mt-2"><strong>No</strong> se puede partir: x<sub>i</sub> ∈ {0, 1} — entero o nada.</p>
              <p class="text-sm text-rose-900 mt-2">Real: carga discreta — una laptop, un libro, un instrumento.</p>
              <p class="text-sm font-bold text-rose-900 mt-2">El voraz no basta: el contraejemplo lo demuestra.</p>
            </div>
          </div>
          <p class="text-center text-slate-600 text-lg"><strong>La única frase que separa las variantes:</strong> ¿el objeto se puede partir?</p>
          <div class="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600">
            <span class="font-bold text-slate-700">Variables:</span> W capacidad de la bolsa · n número de objetos · w<sub>i</sub> peso del objeto i · v<sub>i</sub> valor del objeto i · x<sub>i</sub> fracción del objeto i que se lleva (0 ≤ x<sub>i</sub> ≤ 1).
          </div>
        </div>
      `,
      notes: "4 min de la teoría 3. Lo que comparten: candidatos, objetivo (maximizar valor) y restricción de capacidad. Lo que cambia: la función de FACTIBILIDAD (depende del hueco que queda). Escribir en la pizarra: 'la selección es la misma; la factibilidad no'."
    },
    {
      id: 'pnn9-12',
      title: 'Fraccionaria · densidad y prueba de optimalidad',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-gradient-to-br from-slate-900 to-emerald-900 text-white rounded-2xl p-5">
            <p class="text-xs uppercase tracking-widest font-bold text-emerald-300">Criterio de selección</p>
            <p class="text-xl font-bold mt-1 font-mono">densidad = v / w</p>
            <p class="text-sm text-emerald-200 mt-2">Valor por unidad de peso. Se ordena de mayor a menor y se llena; si el siguiente no cabe entero, se toma la fracción que cabe y se termina.</p>
          </div>
          <div class="bg-white border border-slate-200 rounded-xl p-4 text-sm text-slate-700">
            <p><strong>Por qué es óptimo (intercambio):</strong> si una solución óptima difiere del voraz, en ella hay espacio libre o un objeto con densidad menor o igual; sustituir esa porción por la del voraz <strong>no reduce</strong> el valor. Se repite hasta igualar el voraz → existe una solución óptima que empieza como el voraz.</p>
          </div>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-3"><p class="font-bold text-slate-900">Costo</p><p class="font-mono text-slate-700 mt-1">O(n log n) ordenar + O(n) recorrer</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-3"><p class="font-bold text-slate-900">Contraste con la cinta</p><p class="text-slate-600 mt-1">Mismo razonamiento de intercambio, otro criterio (longitud → densidad). El método no cambió; cambió el problema.</p></div>
          </div>
          <div class="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600">
            <span class="font-bold text-slate-700">Variables:</span> v valor del objeto · w peso que ocupa · densidad valor por unidad de peso · n número de objetos.
          </div>
        </div>
      `,
      notes: "6 min. Analogía: elegir con cuál harina se llena mejor el saco. Errores frecuentes que se anticipan aquí: (1) ordenar por VALOR absoluto en lugar de densidad; (2) creer que el voraz 'siempre sirve' porque funcionó en la cinta — la siguiente diapositiva lo refuta."
    },
    {
      id: 'pnn9-13',
      title: '0/1 · el voraz falla (30 frente a 40)',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-white border border-slate-200 rounded-xl p-4 text-sm">
            <p class="font-bold text-slate-900">El contraejemplo (W = 10)</p>
            <div class="grid md:grid-cols-3 gap-2 mt-2 text-center">
              <div class="bg-slate-50 border border-slate-200 rounded-lg p-2"><p class="font-bold">Objeto 1</p><p class="font-mono text-slate-700">(6, 30)</p><p class="text-xs text-slate-500">densidad 5,00</p></div>
              <div class="bg-slate-50 border border-slate-200 rounded-lg p-2"><p class="font-bold">Objeto 2</p><p class="font-mono text-slate-700">(5, 20)</p><p class="text-xs text-slate-500">densidad 4,00</p></div>
              <div class="bg-slate-50 border border-slate-200 rounded-lg p-2"><p class="font-bold">Objeto 3</p><p class="font-mono text-slate-700">(5, 20)</p><p class="text-xs text-slate-500">densidad 4,00</p></div>
            </div>
            <div class="mt-3" data-reveal>
              <p class="text-slate-700">Voraz: toma el 1 (peso 6, valor 30) y ya no cabe nada → <strong>30</strong>.</p>
            </div>
            <div class="mt-2" data-reveal>
              <p class="text-slate-700">Óptimo: objetos 2 + 3 (peso 10, valor <strong>40</strong>). El voraz deja 10 unidades (25 %) sobre la mesa.</p>
            </div>
          </div>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-3"><p class="font-bold text-emerald-900">Subestructura óptima</p><p class="text-emerald-900 mt-1">Sí se cumple. Por eso la programación dinámica funciona.</p></div>
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-3"><p class="font-bold text-rose-900">Elección voraz</p><p class="text-rose-900 mt-1"><strong>No se cumple:</strong> tomar el objeto 1 no pertenece a ninguna solución óptima.</p></div>
          </div>
          <p class="text-sm text-slate-600">¿Qué se hace entonces? La <strong>programación dinámica</strong>: una tabla con las mejores soluciones parciales. El código la construye fila por fila.</p>
          <div class="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600">
            <span class="font-bold text-slate-700">Variables:</span> W capacidad de la bolsa · w<sub>i</sub> peso del objeto i · v<sub>i</sub> valor del objeto i.
          </div>
        </div>
      `,
      notes: "7 min. Escribir el contraejemplo en la pizarra ANTES de proyectar. Diagnóstico con las condiciones de la teoría 1: es el caso exacto anunciado — la elección local cerró la puerta. La tabla V(i,w) de la salida se lee en la siguiente diapositiva; el viernes NO se re-explica (se usa en la variante C del ejercicio para casa)."
    },
    {
      id: 'pnn9-14',
      title: 'Código en vivo · S08-bolsa.c y la tabla V(i,w)',
      contentHtml: `
        <div class="space-y-4">
          <pre><code>/* V(i, w): mejor valor con los primeros i objetos y capacidad w */
if (w_i &lt;= w)
    V[i][w] = max(V[i-1][w], v_i + V[i-1][w - w_i]);
else
    V[i][w] = V[i-1][w];
/* la celda V(n, W) es el valor óptimo; la reconstrucción
   recorre la tabla hacia atrás marcando qué objetos entraron */</code></pre>
          <div class="grid md:grid-cols-3 gap-3 text-center text-sm">
            <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-3"><p class="text-xs uppercase font-bold text-emerald-700">Fraccionaria (voraz)</p><p class="text-2xl font-bold text-emerald-900">46,0</p><p class="text-xs text-emerald-800 mt-1">A entero + 80 % de B</p></div>
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-3"><p class="text-xs uppercase font-bold text-rose-700">0/1 voraz</p><p class="text-2xl font-bold text-rose-900">30</p><p class="text-xs text-rose-800 mt-1">el 80 % está prohibido</p></div>
            <div class="bg-teal-50 border border-teal-200 rounded-xl p-3"><p class="text-xs uppercase font-bold text-teal-700">0/1 dinámica</p><p class="text-2xl font-bold text-teal-900">40</p><p class="text-xs text-teal-800 mt-1">la tabla no adivina</p></div>
          </div>
          <table class="w-full text-xs text-center border border-slate-200 rounded-xl overflow-hidden">
            <tbody>
              <tr class="bg-slate-50"><td class="p-1 font-bold text-slate-600">V(i, w)</td><td class="p-1">w=0</td><td class="p-1">w=4</td><td class="p-1">w=5</td><td class="p-1">w=6</td><td class="p-1">w=8</td><td class="p-1">w=10</td></tr>
              <tr><td class="p-1 font-bold text-slate-600">i=0</td><td class="p-1">0</td><td class="p-1">0</td><td class="p-1">0</td><td class="p-1">0</td><td class="p-1">0</td><td class="p-1">0</td></tr>
              <tr class="bg-slate-50"><td class="p-1 font-bold text-slate-600">i=1 (obj. 1)</td><td class="p-1">0</td><td class="p-1">0</td><td class="p-1">0</td><td class="p-1">30</td><td class="p-1">30</td><td class="p-1">30</td></tr>
              <tr><td class="p-1 font-bold text-slate-600">i=2 (obj. 2)</td><td class="p-1">0</td><td class="p-1">0</td><td class="p-1">20</td><td class="p-1">30</td><td class="p-1">30</td><td class="p-1">30</td></tr>
              <tr class="bg-slate-50"><td class="p-1 font-bold text-slate-600">i=3 (obj. 3)</td><td class="p-1">0</td><td class="p-1">0</td><td class="p-1">20</td><td class="p-1">30</td><td class="p-1">30</td><td class="p-1 font-bold text-teal-700">40</td></tr>
            </tbody>
          </table>
          <p class="text-xs text-slate-500">La celda V(3, 10) = 40 es el óptimo; la reconstrucción marca los objetos 3 y 2 (peso usado 10 de 10).</p>
          <div class="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600">
            <span class="font-bold text-slate-700">Variables:</span> i primeros i objetos considerados · w capacidad disponible · V(i,w) mejor valor alcanzable · v<sub>i</sub> valor del objeto i · w<sub>i</sub> su peso.
          </div>
        </div>
      `,
      notes: "10 min (con la diap. 13 cierra la teoría 4). Salida real de S08-bolsa.c re-ejecutada el 17/11/2026 (gcc). La tabla aquí es PARCIAL (columnas clave); la salida completa del programa la imprime el docente. HOY solo se lee la tabla y su resultado: el viernes no se reconstruye (no repetir). Pregunta de comprobación: '¿por qué la fraccionaria sí permite el voraz y la 0/1 no?' (partir permite llenar exactamente la capacidad con lo mejor; sin partir, el objeto 1 bloquea 2+3)."
    },
    {
      id: 'pnn9-15',
      title: 'Práctica autónoma · ficha individual',
      contentHtml: `
        <div class="space-y-5">
          <p class="text-slate-600">En el cuaderno, sin entrega.</p>
          <div class="bg-white border border-slate-200 rounded-xl p-4">
            <p class="font-bold text-slate-900">1 · Cinta</p>
            <p class="text-sm text-slate-700 mt-1">Longitudes <code>{8, 3, 5}</code>: orden óptimo, Σ T<sub>i</sub>, MRT y verificación con la fórmula de coeficientes.</p>
          </div>
          <div class="bg-white border border-slate-200 rounded-xl p-4">
            <p class="font-bold text-slate-900">2 · Bolsa fraccionaria</p>
            <p class="text-sm text-slate-700 mt-1">W = 20; objetos A (10, 60) · B (20, 100) · C (30, 120): valor máximo y cómo se llena la bolsa.</p>
          </div>
          <div class="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <p class="font-bold text-slate-900 text-sm">3 · Bonus oral (si termina)</p>
            <p class="text-sm text-slate-700 mt-1">Con la misma instancia pero 0/1: ¿qué escogería el voraz y cuál es el óptimo?</p>
          </div>
        </div>
      `,
      notes: "10 min. Respuestas: (1) orden 3, 5, 8 → Σ T<sub>i</sub> = 3+8+16 = 27, MRT 9, fórmula 3·3+2·5+1·8 = 27. (2) densidades 6,00/5,00/4,00 → A entero (60) + 50 % de B (50) = 110. (3) voraz 0/1: A = 60; óptimo: B solo = 100 (el voraz pierde 40). Los ejercicios replican el formato de la práctica del 10 % que se asigna el viernes."
    },
    {
      id: 'pnn9-16',
      title: 'Cierre del jueves',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-slate-900 text-white rounded-2xl p-5">
            <p class="text-xs uppercase tracking-widest text-teal-300">Síntesis en dos frases</p>
            <p class="text-lg mt-2">El método de adquisición elige paso a paso y <strong>prueba</strong> (o refuta) su optimalidad.</p>
            <p class="text-lg mt-1">La cinta y la fraccionaria admiten el voraz; la <strong>0/1 no</strong> — y ahí hace falta otra estrategia.</p>
          </div>
          <table class="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
            <tbody>
              <tr class="bg-slate-50 text-slate-600"><td class="p-2 font-bold">Problema</td><td class="p-2 font-bold">Selección</td><td class="p-2 font-bold">¿Voraz óptimo?</td><td class="p-2 font-bold">Prueba</td></tr>
              <tr><td class="p-2">Cinta</td><td class="p-2">menor longitud</td><td class="p-2 font-bold text-emerald-700">Sí</td><td class="p-2 text-slate-600">intercambio (coeficientes)</td></tr>
              <tr class="bg-slate-50"><td class="p-2">Bolsa fraccionaria</td><td class="p-2">mayor densidad</td><td class="p-2 font-bold text-emerald-700">Sí</td><td class="p-2 text-slate-600">intercambio (sustitución)</td></tr>
              <tr><td class="p-2">Bolsa 0/1</td><td class="p-2">mayor densidad</td><td class="p-2 font-bold text-rose-700">No</td><td class="p-2 text-slate-600">contraejemplo 30 vs 40</td></tr>
            </tbody>
          </table>
          <div class="bg-teal-50 border border-teal-200 rounded-xl p-4 text-sm text-teal-950">
            <p><strong>Ticket de salida:</strong> cinta con longitudes {7, 1, 4}. Orden óptimo, Σ T<sub>i</sub> y MRT.</p>
            <p class="mt-2 text-xs text-teal-800">Se responde en el cuaderno y se recoge al salir.</p>
          </div>
          <p class="text-sm text-slate-600"><strong>Viernes:</strong> modelos óptimos de intercalación (contenido nuevo) + asignación de la práctica evaluada del 10 %.</p>
        </div>
      `,
      notes: "8 min. Ticket de salida: orden 1, 4, 7 → Σ T<sub>i</sub> = 1+5+12 = 18, MRT 6; fórmula 3·1+2·4+1·7 = 18. La tabla 'voraz funciona / no funciona' es el síntesis que la práctica para casa podrá pedir. Anuncios: (1) viernes intercalación + asignación del 10 %; (2) corrección de los dos ejercicios a las 16:45; (3) Sortmerge 2 no se dicta esta semana (decisión del docente)."
    },
    {
      id: 'pnn9-17',
      title: 'Viernes 20/11 · Modelos óptimos de intercalación',
      contentHtml: `
        <div class="space-y-7">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center text-white text-4xl shadow-lg">🗂️</div>
            <div>
              <p class="text-sm uppercase tracking-widest font-bold text-teal-700">Programación No Numérica II · Unidad III.3</p>
              <h2 class="text-3xl md:text-4xl font-bold text-slate-900">Modelos óptimos de intercalación</h2>
              <p class="text-slate-500 mt-1">Mezclar archivos de dos en dos pagando lo menos posible</p>
            </div>
          </div>
          <div class="bg-teal-50 border border-teal-200 rounded-xl p-5 text-teal-950">
            <p class="text-lg"><strong>Objetivo del PGA S9:</strong> resolver modelos óptimos de intercalación mediante el método de adquisición.</p>
            <p class="text-sm text-teal-800 mt-2">El jueves el método ganó dos veces y perdió una. Hoy gana de nuevo, en otro problema: intercalar archivos.</p>
          </div>
          <p class="text-sm text-slate-500">Viernes 20/11/2026 · 16:45–18:15 · Aula A-06 · Sección A · IUPSM — Extensión Ciudad Ojeda</p>
        </div>
      `,
      notes: "Portada del viernes. Enlace con el jueves (nota de continuidad): la regla de la cinta ('lo que se paga más veces debe ser pequeño') reaparece en forma de árbol. Al cierre se asigna la práctica del 10 %."
    },
    {
      id: 'pnn9-18',
      title: 'El problema · mezclar de dos en dos',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-white border border-slate-200 rounded-xl p-4 text-sm text-slate-700">
            <p><strong>La fotocopiadora:</strong> tienes cinco fajos de hojas y una fotocopiadora. Para juntar dos fajos en uno solo hay que <strong>fotocopiar todas las hojas de los dos</strong>; cada fotocopia se paga. ¿En qué orden juntas los fajos para pagar lo menos posible?</p>
          </div>
          <div class="grid md:grid-cols-3 gap-3 text-sm">
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-3"><p class="font-bold text-slate-900">Costo de cada mezcla</p><p class="text-slate-600 mt-1">Suma de los tamaños de los dos archivos mezclados.</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-3"><p class="font-bold text-slate-900">El resultado vuelve</p><p class="text-slate-600 mt-1">El archivo mezclado queda pendiente de seguir mezclando (se paga de nuevo).</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-3"><p class="font-bold text-slate-900">El orden importa</p><p class="text-slate-600 mt-1">Con n archivos hay n! árboles posibles: con 5, 120.</p></div>
          </div>
          <div class="bg-teal-50 border border-teal-200 rounded-xl p-4 text-sm text-teal-950">
            <p>Seis archivos de texto se combinan en uno, mezclando de a dos. ¿Importa el orden en que se mezclan?</p>
          </div>
          <div class="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600">
            <span class="font-bold text-slate-700">Variables:</span> tamaño número de hojas del archivo · n número de archivos · n! árboles de mezcla posibles.
          </div>
        </div>
      `,
      notes: "6 min de los 12 de la teoría 1. La fotocopiadora es la analogía rectora del dossier: el costo es físico y visible, la profundidad se vuelve obvia (un fajo que se junta tres veces se fotocopia tres veces) y la regla voraz se justifica sola. Con la pregunta puente del jueves (corregida a las 16:50) se conecta."
    },
    {
      id: 'pnn9-19',
      title: 'El voraz · los dos más pequeños primero',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-gradient-to-br from-slate-900 to-teal-900 text-white rounded-2xl p-5">
            <p class="text-xs uppercase tracking-widest font-bold text-teal-300">La regla en una frase</p>
            <p class="text-xl font-bold mt-1">En cada paso, mezclar los dos archivos más pequeños.</p>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-center text-xs">
            <div class="bg-white border-2 border-teal-200 rounded-xl p-3"><p class="font-bold text-teal-800">Candidatos</p><p class="text-slate-600 mt-1">Los archivos pendientes</p></div>
            <div class="bg-white border-2 border-teal-200 rounded-xl p-3"><p class="font-bold text-teal-800">Selección</p><p class="text-slate-600 mt-1">Los dos más pequeños</p></div>
            <div class="bg-white border-2 border-teal-200 rounded-xl p-3"><p class="font-bold text-teal-800">Factibilidad</p><p class="text-slate-600 mt-1">Siempre (todo se mezcla)</p></div>
            <div class="bg-white border-2 border-teal-200 rounded-xl p-3"><p class="font-bold text-teal-800">Objetivo</p><p class="text-slate-600 mt-1">Costo total mínimo</p></div>
          </div>
          <div class="bg-white border border-slate-200 rounded-xl p-4 text-sm text-slate-700">
            <p><strong>Por qué:</strong> el archivo que se mezcla temprano <strong>vuelve</strong> a pagarse en las mezclas siguientes; el que se mezcla al final se paga una sola vez. Un árbol óptimo nunca deja un archivo grande «profundo» mientras uno pequeño está «arriba» (se prueba por intercambio sobre las profundidades).</p>
          </div>
          <p class="text-xs text-slate-500">Nombre en la literatura: patrones óptimos de mezcla (optimal merge patterns); el árbol es equivalente al de Huffman.</p>
          <div class="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600">
            <span class="font-bold text-slate-700">Variables:</span> tamaño hojas del archivo · costo de una mezcla suma de los tamaños de los dos archivos mezclados.
          </div>
        </div>
      `,
      notes: "6 min. Las cuatro piezas se NOMBRAN (no se re-explican): es la señal de que es el mismo método. Si alguien pide la demostración completa: argumento de intercambio sobre las profundidades, marcado como consulta. Empates: cualquier elección entre dos 'más pequeños' empatados da el mismo costo total."
    },
    {
      id: 'pnn9-20',
      title: 'El árbol de mezcla · la lectura por profundidad',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-sm text-slate-600">Cada mezcla une dos nodos; las hojas son los archivos originales; la raíz es el archivo final. <strong>Profundidad de una hoja = número de veces que ese archivo se paga.</strong></p>
          <div data-diagram data-steps="F5, F10, F20, F30a, F30b | F5>F15, F10>F15, N15 | N15>F35, F20>F35, N35 | F30a>N60, F30b>N60, N60 | N35>R, N60>R, R" data-flow="F5>F15, F10>F15, N15>F35, F20>F35, F30a>N60, F30b>N60, N35>R, N60>R">
flowchart TB
  F5["5"] --> N15["15"]
  F10["10"] --> N15
  N15 --> N35["35"]
  F20["20"] --> N35
  F30a["30"] --> N60["60"]
  F30b["30"] --> N60
  N35 --> R["95"]
  N60 --> R
          </div>
          <div class="bg-teal-50 border border-teal-200 rounded-xl p-4 text-sm text-teal-950">
            <p class="font-bold">La fórmula</p>
            <p class="font-mono text-base mt-1">costo total = Σ (tamaño × profundidad)</p>
            <p class="mt-2">Cinta: Σ T<sub>i</sub> = n·L<sub>1</sub> + (n−1)·L<sub>2</sub> + … + 1·L<sub>n</sub> (coeficientes = posiciones). Intercalación: los coeficientes son <strong>profundidades</strong> del árbol. <strong>Es el mismo principio: lo que se paga muchas veces debe ser pequeño.</strong></p>
          </div>
          <div class="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600">
            <span class="font-bold text-slate-700">Variables:</span> tamaño hojas del archivo · profundidad veces que se paga ese archivo.
          </div>
        </div>
      `,
      notes: "10 min (teoría 2). El diagrama se revela por pasos: primero las hojas, luego cada mezcla (15, 35, 60) y la raíz 95. Con la instancia de clase (20, 30, 10, 5, 30). Frase de la semana: escribirla en la pizarra y subrayarla — es la síntesis de las dos sesiones. El mínimo es único; el árbol puede no serlo (empates)."
    },
    {
      id: 'pnn9-21',
      title: 'Código en vivo · S09-intercalacion.c',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-3 text-sm text-amber-950">
            <p><strong>Antes de ejecutar:</strong> ¿cuánto más caro es mezclar «en el orden en que están listados» frente al voraz?</p>
          </div>
          <pre><code>Archivos (tamanos): 20 30 10 5 30
VORAZ (los dos mas pequenos en cada ronda)
1      5    + 10       15                 [20 30 30 15]
2      15   + 20       35                 [30 30 35]
3      30   + 30       60                 [35 60]
4      35   + 60       95                 [95]
Costo total voraz = 205
CASCADA (mezclar el archivo 1 con el 2, el resultado con el 3, ...)
1      20   + 30       50                 [50 10 5 30]
2      50   + 10       60                 [60 5 30]
3      60   + 5        65                 [65 30]
4      65   + 30       95                 [95]
Costo total cascada = 270
La cascada cuesta 65 unidades de mas (31.7% sobre el voraz).

Tamano   Veces    Aporte        (voraz)
20       2        40
30       2        60
10       3        30
5        3        15
30       2        60
Suma de aportes = 205  (coincide con el costo total voraz)</code></pre>
          <p class="text-xs text-slate-500">Archivo: <code>03-Clases/PROGRAMACION-NO-NUMERICA-II/S09-intercalacion.c</code> · gcc · salida determinista (17/11/2026).</p>
        </div>
      `,
      notes: "10 min. Lectura: (1) ronda por ronda del voraz — el costo de la mezcla VUELVE a la lista (15, 35, 60, 95); (2) la cascada paga 270: 31,7 % más; (3) la tabla de profundidades cierra la verificación: 5 y 10 se pagan 3 veces; los de 20 y los de 30, 2 veces; suma 205 = costo voraz. Error sutil que conviene nombrar: 'ordenar una vez y barrer sin reinsertar' da 210 (dossier C4) — el error no es grotesco, es sutil."
    },
    {
      id: 'pnn9-22',
      title: 'Práctica guiada · intercalar {8, 4, 6, 2}',
      contentHtml: `
        <div class="space-y-5">
          <p class="text-slate-700">Entre todos, complete la tabla de rondas y dibuje el árbol en la pizarra. Luego verificamos con la fórmula de profundidades.</p>
          <table class="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
            <tbody>
              <tr class="bg-slate-50 text-slate-600"><td class="p-2 font-bold">Ronda</td><td class="p-2 font-bold">Mezcla</td><td class="p-2 font-bold">Costo</td><td class="p-2 font-bold">Quedan</td></tr>
              <tr><td class="p-2">1</td><td class="p-2 text-slate-400">? + ?</td><td class="p-2 text-slate-400">?</td><td class="p-2 text-slate-400">?</td></tr>
              <tr class="bg-slate-50"><td class="p-2">2</td><td class="p-2 text-slate-400">? + ?</td><td class="p-2 text-slate-400">?</td><td class="p-2 text-slate-400">?</td></tr>
              <tr><td class="p-2">3</td><td class="p-2 text-slate-400">? + ?</td><td class="p-2 text-slate-400">?</td><td class="p-2 text-slate-400">?</td></tr>
            </tbody>
          </table>
          <p class="text-sm text-slate-600"><strong>Verificación:</strong> 2×3 + 4×3 + 6×2 + 8×1 = <span class="font-bold">?</span> (el costo total).</p>
          <p class="text-sm text-slate-600"><strong>Pregunta de comprobación:</strong> ¿quedó algún archivo grande con profundidad mayor que uno pequeño?</p>
          <div class="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600">
            <span class="font-bold text-slate-700">Variables:</span> cada producto es tamaño × profundidad de un archivo · la suma es el costo total de la intercalación.
          </div>
        </div>
      `,
      notes: "12 min. Solución: ronda 1: 2+4=6 → quedan {8, 6, 6}; ronda 2: 6+6=12 → {8, 12}; ronda 3: 8+12=20 → {20}. Costo total 6+12+20 = 38. Verificación: 2×3+4×3+6×2+8×1 = 6+12+12+8 = 38. Pregunta de comprobación: NO (el 8 es el menos profundo). El dibujo a mano enseña la estructura; el código solo confirma."
    },
    {
      id: 'pnn9-23',
      title: 'Repaso activo · ficha U-II + U-III',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-slate-600">En el cuaderno. Se corrigen dos al final; el resto queda para el repaso del fin de semana. <strong>Este formato es el mismo de la práctica evaluada.</strong></p>
          <div class="bg-white border border-slate-200 rounded-xl p-3"><p class="font-bold text-slate-900 text-sm">1 · Búsqueda binaria (traza)</p><p class="text-sm text-slate-700 mt-1">En <code>[3, 7, 11, 18, 25, 31, 40]</code>, localice el 25 con índices desde 0 y medio ⌊(izq+der)/2⌋. Registre índice medio y valor comparado en cada paso.</p></div>
          <div class="bg-white border border-slate-200 rounded-xl p-3"><p class="font-bold text-slate-900 text-sm">2 · Cinta (decisión + fórmula)</p><p class="text-sm text-slate-700 mt-1">Longitudes <code>{6, 2, 9}</code>: orden óptimo, Σ T<sub>i</sub>, MRT y verificación con coeficientes.</p></div>
          <div class="bg-white border border-slate-200 rounded-xl p-3"><p class="font-bold text-slate-900 text-sm">3 · Bolsa fraccionaria (decisión)</p><p class="text-sm text-slate-700 mt-1">W = 12; objetos A (5, 30) · B (10, 50) · C (8, 40): valor máximo y llenado.</p></div>
          <div class="bg-white border border-slate-200 rounded-xl p-3"><p class="font-bold text-slate-900 text-sm">4 · Intercalación (contraste)</p><p class="text-sm text-slate-700 mt-1">Archivos <code>{12, 3, 7, 5}</code> en el orden listado: costo voraz y costo de la cascada.</p></div>
        </div>
      `,
      notes: "16 min (corrección de 2 al final, 4 min). Respuestas: (1) índice 3 → 18; derecho [4,6] índice 5 → 31; izquierdo [4,4] índice 4 → 25. Encontrado en índice 4. (2) orden 2, 6, 9 → Σ T<sub>i</sub> = 2+8+17 = 27, MRT 9; fórmula 3·2+2·6+1·9 = 27. (3) densidades 6,00/5,00/5,00 → A entero (30) + 7/10 de B (35) = 65. (4) voraz 3+5=8; 7+8=15; 12+15=27 → 50. Cascada: 12+3=15; 15+7=22; 22+5=27 → 64. Diferencia 14. Formato replicado del instrumento: traza, decisión, fórmula, contraste."
    },
    {
      id: 'pnn9-24',
      title: 'Práctica evaluada · ejercicio de código para casa (10 %)',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-teal-50 border border-teal-200 rounded-xl p-4 text-sm text-teal-950">
            <p><strong>Práctica individual para casa · 10 % del Corte II</strong> (sustituye a la prueba escrita de la S9). Programa en <strong>C, C++ o Python</strong> (no Java) que resuelva la variante asignada por el último dígito de la cédula.</p>
          </div>
          <div class="grid md:grid-cols-3 gap-3 text-sm">
            <div class="bg-white border-2 border-teal-200 rounded-xl p-3"><p class="font-bold text-teal-800">A · cédula 0–3</p><p class="text-slate-600 mt-1">Cintas magnéticas: Σ T<sub>i</sub> y MRT del orden dado, orden creciente (SPT) y verificación con coeficientes. L = {14, 3, 8, 6, 11}.</p></div>
            <div class="bg-white border-2 border-teal-200 rounded-xl p-3"><p class="font-bold text-teal-800">B · cédula 4–6</p><p class="text-slate-600 mt-1">Bolsa fraccionaria: densidades, llenado voraz con fracciones y valor total; contraste 0/1. W = 30; A(18,90) B(15,70) C(15,70).</p></div>
            <div class="bg-white border-2 border-teal-200 rounded-xl p-3"><p class="font-bold text-teal-800">C · cédula 7–9</p><p class="text-slate-600 mt-1">Bolsa 0/1: tabla V(i,w) programada, valor máximo y reconstrucción. W = 10; A(6,42) B(5,25) C(5,25).</p></div>
          </div>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-3"><p class="font-bold text-slate-900">Entregables</p><p class="text-slate-600 mt-1">Programa con los datos escritos en el código · salida completa · traza manual solicitada · dos respuestas escritas de justificación.</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-3"><p class="font-bold text-slate-900">Entrega</p><p class="text-slate-600 mt-1">Individual · medio digital por confirmar · plazo por confirmar (propuesto: jueves 26/11) · el código debe ser propio.</p></div>
          </div>
        </div>
      `,
      notes: "15 min. Respuestas de referencia (solo docente, en el instrumento S09-practica-codigo-casa-10pct-borrador.md): A → 129/25,8 frente a 99/19,8; B → 146 fracc / 90 voraz 0/1 / 140 óptimo; C → tabla V(3,10) = 50 (B y C), voraz 42. PENDIENTES por confirmar: plazo y medio de entrega. El enunciado completo con la escala de 20 puntos está en la vista Tareas y con el docente."
    },
    {
      id: 'pnn9-25',
      title: 'Cierre del viernes',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-slate-900 text-white rounded-2xl p-5">
            <p class="text-xs uppercase tracking-widest text-teal-300">La frase de la semana</p>
            <p class="text-xl font-bold mt-2">«Lo que se paga muchas veces debe ser pequeño»</p>
            <p class="text-sm text-slate-300 mt-2">Cinta: coeficientes 5, 4, 3, 2, 1 · Intercalación: profundidad del árbol · Bolsa: se llena primero con la mejor densidad.</p>
          </div>
          <table class="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
            <tbody>
              <tr class="bg-slate-50 text-slate-600"><td class="p-2 font-bold">Problema</td><td class="p-2 font-bold">Selección</td><td class="p-2 font-bold">¿Voraz óptimo?</td><td class="p-2 font-bold">Prueba</td></tr>
              <tr><td class="p-2">Cinta</td><td class="p-2">menor longitud</td><td class="p-2 font-bold text-emerald-700">Sí</td><td class="p-2 text-slate-600">intercambio (coeficientes)</td></tr>
              <tr class="bg-slate-50"><td class="p-2">Bolsa fraccionaria</td><td class="p-2">mayor densidad</td><td class="p-2 font-bold text-emerald-700">Sí</td><td class="p-2 text-slate-600">intercambio (sustitución)</td></tr>
              <tr><td class="p-2">Bolsa 0/1</td><td class="p-2">mayor densidad</td><td class="p-2 font-bold text-rose-700">No</td><td class="p-2 text-slate-600">contraejemplo + dinámica</td></tr>
              <tr class="bg-slate-50"><td class="p-2">Intercalación</td><td class="p-2">los dos más pequeños</td><td class="p-2 font-bold text-emerald-700">Sí</td><td class="p-2 text-slate-600">intercambio (profundidades)</td></tr>
            </tbody>
          </table>
          <div class="bg-teal-50 border border-teal-200 rounded-xl p-4 text-sm text-teal-950" data-quiz>
            <p><strong>Ticket de salida:</strong> ¿qué archivo conviene mezclar primero y por qué?</p>
            <button data-option>El más grande, porque termina antes</button>
            <button data-option data-correct>Los dos más pequeños, porque se pagan más veces</button>
            <button data-option>Cualquier orden: el costo no cambia</button>
            <p data-explain>El archivo que se mezcla temprano vuelve a pagarse en cada mezcla siguiente; por eso los pequeños van al fondo del árbol (mayor profundidad) y los grandes cerca de la raíz.</p>
          </div>
          <p class="text-sm text-slate-600"><strong>S10 (23–28/11):</strong> luces de árbol de costo mínimo y paso más corto. <strong>Taller 20 % del método de adquisición: jueves 03/12.</strong></p>
        </div>
      `,
      notes: "10 min. La tabla completa es el síntesis de la Unidad III hasta hoy (4 problemas). Anuncios: (1) práctica del 10 % se entrega por el medio indicado (plazo por confirmar); (2) S10: Unidad III.3 (árbol de costo mínimo, paso más corto); (3) taller 20 % el 03/12 (PGA S11)."
    },
    {
      id: 'pnn9-26',
      title: 'Fuentes',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-slate-50 border border-slate-200 rounded-2xl p-5">
            <p class="font-bold text-slate-900">Fuentes consultadas (semana 9)</p>
            <ul class="list-disc list-inside text-sm text-slate-700 mt-3 space-y-2">
              <li>IUPSM. (2013). Programa analítico de Programación No Numérica II, Unidad III.</li>
              <li>IUPSM. (2026). PGA Programación No Numérica II 2026-2, semanas 8–9.</li>
              <li>Horowitz, E. y Sahni, S. (1984). Fundamentals of computer algorithms. Computer Science Press. §4.2 (pp. 153–155) y §4.5 «Patrones óptimos de mezcla» (pp. 169–173).</li>
              <li>GeeksforGeeks. (s. f.). Optimal Storage on Tapes. https://www.geeksforgeeks.org/dsa/optimal-storage-tapes/</li>
              <li>GeeksforGeeks. (s. f.). Optimal file merge patterns. https://www.geeksforgeeks.org/dsa/optimal-file-merge-patterns/</li>
              <li>GeeksforGeeks. (s. f.). 0/1 Knapsack Problem. https://www.geeksforgeeks.org/dsa/0-1-knapsack-problem/</li>
              <li>Cormen, T., Leiserson, C., Rivest, R. y Stein, C. (2009). Introduction to Algorithms (3.ª ed.). MIT Press. Caps. 15 y 16.</li>
              <li>Shindler, M. y otros. (2022). Student misconceptions of dynamic programming: A replication study. Computer Science Education, 32(3). https://doi.org/10.1080/08993408.2022.2079865</li>
              <li>Programas de la cátedra: S08-cintas.c, S08-bolsa.c y S09-intercalacion.c (salidas reales, gcc 17/11/2026).</li>
              <li>Dossier del investigador: 03-Clases/_investigacion/S09-pnn-modelos-intercalacion.md (analogía de la fotocopiadora, banco de repaso).</li>
            </ul>
          </div>
        </div>
      `,
      notes: "Solo fuentes del plan de sesión (§6 de ambos planes). Sin imágenes en el módulo: los diagramas son PELE y las tablas son HTML."
    },
  ],
  tasks: [
    {
      id: 'pnn9-t1',
      title: 'Práctica evaluada: ejercicio de código para casa (10 %)',
      description: 'Ejercicio individual de código (C, C++ o Python) según la variante por cédula: A cintas magnéticas, B bolsa fraccionaria, C bolsa 0/1 con tabla V(i,w). Entrega del programa, la salida, la traza manual y dos respuestas escritas. Plazo por confirmar (propuesto: 26/11); medio de entrega por confirmar.',
      items: [
        'Programa con los datos escritos en el código (variante por último dígito de la cédula)',
        'Salida completa del programa (texto o captura)',
        'Traza manual breve y dos respuestas escritas de justificación',
        'Entrega individual por el medio digital indicado',
      ],
      due: '2026-11-26',
      corte: 2,
      weight: '10 %',
      kind: 'evaluacion',
      slideId: 'pnn9-24',
    },
  ],
};
