import { Module } from '../../types';

export const PNN_MODULE_10: Module = {
  id: 'pnn-mod-10',
  title: '10. Ruta más corta desde un origen',
  description: 'Costos acumulados y rutas mínimas en una red dirigida.',
  evaluation: '0 % (formativa)',
  slides: [
    {
      id: "pnn10-1",
      title: "Ruta de menor costo",
      contentHtml: `<div class="space-y-5 text-xl"><p>Desde un <strong>origen</strong>, encontrar rutas de menor costo hacia otros puntos de una red.</p><p class="rounded-xl bg-blue-100 p-5 text-blue-950"><strong>Escenario ilustrativo en Ciudad Ojeda:</strong> un equipo de soporte sale de la sede A hacia los puntos de atención B, C y D. Los tiempos son supuestos, no mediciones reales.</p></div>`,
      notes: "«Imaginemos un equipo de soporte en Ciudad Ojeda que sale de una sede hacia distintos puntos de atención. Los lugares y tiempos son ilustrativos: no representan mediciones reales. Hoy elegiremos rutas y expresaremos el costo en minutos de traslado. No necesitamos computadoras: seguiremos los tramos en la pizarra.» Transición: «Primero interpretemos la red»."
    },
    {
      id: "pnn10-2",
      title: "La red y sus tramos",
      contentHtml: `<div class="space-y-5 text-2xl"><p>Los puntos son <strong>vértices</strong>; las flechas son <strong>aristas dirigidas</strong>.</p><div data-diagram role="img" aria-label="Tramo dirigido desde P hasta Q con costo de 4 minutos.">flowchart LR
 P -- 4 --> Q
 </div><p class="rounded-xl bg-blue-100 p-4 text-blue-950"><strong>4 minutos</strong> es el costo de P hacia Q, no necesariamente de Q hacia P.</p></div>`,
      notes: "«Un vértice representa un lugar. Una flecha indica un tramo que solo se puede recorrer en la dirección indicada. El número es el costo de ese tramo; aquí representa minutos, no distancia física.» Transición: «Veamos cómo se calcula el costo completo»."
    },
    {
      id: "pnn10-3",
      title: "Costo de un camino",
      contentHtml: `<div class="space-y-5 text-2xl"><p>El costo de un camino es la <strong>suma de sus tramos</strong>.</p><div data-diagram role="img" aria-label="Camino dirigido de X a Y con costo 4 y de Y a Z con costo 2.">flowchart LR
 X -- 4 --> Y
 Y -- 2 --> Z
 </div><p>¿Cuánto cuesta ir de X a Z?</p><p data-reveal class="rounded-xl bg-blue-100 p-4 text-blue-950">4 + 2 = <strong>6 minutos</strong>.</p></div>`,
      notes: "«Para saber cuánto cuesta una ruta sumamos todos sus tramos. Pregunte por X hacia Z antes de revelar: cuatro más dos es seis. No basta comparar el último tramo.» Transición: «¿Qué significa que una ruta sea la más corta?»."
    },
    {
      id: "pnn10-4",
      title: "La ruta más corta",
      contentHtml: `<div class="space-y-4 text-xl"><p>Una ruta mínima tiene el <strong>menor costo total</strong> entre las rutas posibles. Puede haber empates.</p><p>Para llegar al mismo destino, dos rutas ilustrativas ofrecen:</p><div class="grid grid-cols-2 gap-4 text-2xl"><div class="rounded-xl bg-blue-100 p-4 text-blue-950"><strong>Ruta 1</strong><br>3 km · 12 min</div><div class="rounded-xl bg-amber-100 p-4 text-amber-950"><strong>Ruta 2</strong><br>5 km · 8 min</div></div><p>¿Cuál elegirían si importa la distancia? ¿Y si urge llegar?</p><p data-reveal class="rounded-xl bg-emerald-100 p-3 text-emerald-950">Por distancia: ruta 1. Por tiempo: ruta 2.</p></div>`,
      notes: "«Más corta significa menor costo total según la medida elegida. En este contraste ilustrativo, ambas rutas parten del mismo origen y llegan al mismo destino; sus cifras no son mediciones reales. Pregunte primero qué se está minimizando: por distancia gana la ruta 1, por tiempo la ruta 2. Un trayecto más largo puede tardar menos por las condiciones de circulación. No se suman kilómetros con minutos: hay que fijar una unidad de costo. Dos rutas distintas podrían empatar; entonces ambas serían óptimas. En la red siguiente todos los costos son positivos y expresan minutos.» Transición: «Dibujemos la red completa»."
    },
    {
      id: "pnn10-5",
      title: "Red de soporte",
      contentHtml: `<div class="space-y-5 text-xl"><div data-diagram role="img" aria-label="Red dirigida: de A a B cuesta 2, de A a C cuesta 5, de A a D cuesta 10, de B a C cuesta 1, de B a D cuesta 6 y de C a D cuesta 2 minutos.">flowchart LR
 A -- 2 --> B
 A -- 5 --> C
 A -- 10 --> D
 B -- 1 --> C
 B -- 6 --> D
 C -- 2 --> D
</div><p>Origen: <strong>A</strong> · Costos en minutos · Tramos dirigidos</p></div>`,
      notes: "«Dibujemos cuatro puntos. Desde A salen tramos hacia B, C y D; desde B se puede ir a C o D; desde C se puede ir a D. Copio los seis costos en la pizarra. Las flechas prohíben recorrer los tramos al revés.» Transición: «Busquemos primero las rutas hasta B y C»."
    },
    {
      id: "pnn10-6",
      title: "Desde A hasta B y C",
      contentHtml: `<div class="space-y-4 text-2xl"><div data-diagram role="img" aria-label="De A a B cuesta 2, de A a C cuesta 5 y de B a C cuesta 1 minuto.">flowchart LR
 A -- 2 --> B
 A -- 5 --> C
 B -- 1 --> C
 </div><p>¿Cuál es el costo de llegar de A a B? Para llegar a C, comparen A → C con A → B → C. ¿Cuál cuesta menos?</p><p data-reveal class="rounded-xl bg-blue-100 p-3 text-blue-950">A → B: <strong>2 minutos</strong>.</p><p data-reveal class="rounded-xl bg-emerald-100 p-3 text-emerald-950">A → C: 5 · A → B → C: 2 + 1 = <strong>3 minutos</strong>.</p></div>`,
      notes: "«Solo hay una ruta de A a B: cuesta dos. Para C comparemos la ruta directa, que cuesta cinco, con la que pasa por B, que cuesta tres. Aunque usa más tramos, tarda menos. Pregunten oralmente cuál prefieren y por qué; escriba ambas sumas.» Transición: «Ahora veamos el destino D»."
    },
    {
      id: "pnn10-7",
      title: "Desde A hasta D",
      contentHtml: `<div class="space-y-3 text-xl"><p class="text-2xl">Comparen las rutas que conducen a D. ¿Cuál tiene menor costo?</p><div data-diagram role="img" aria-label="Red dirigida: A a B cuesta 2, A a C 5, A a D 10, B a C 1, B a D 6 y C a D 2 minutos.">flowchart LR
 A -- 2 --> B
 A -- 5 --> C
 A -- 10 --> D
 B -- 1 --> C
 B -- 6 --> D
 C -- 2 --> D
 </div><p>A → D &nbsp; · &nbsp; A → B → D &nbsp; · &nbsp; A → C → D &nbsp; · &nbsp; A → B → C → D</p><p data-reveal class="rounded-xl bg-blue-100 p-3 text-blue-950">Costos respectivos: 10, 8, 7 y <strong>5 minutos</strong>.</p><p data-reveal class="rounded-xl bg-emerald-100 p-3 text-emerald-950">Ruta mínima: <strong>A → B → C → D</strong>.</p></div>`,
      notes: "«Siguiendo las flechas hay cuatro rutas simples hacia D. Directa: diez. Por B: dos más seis, ocho. Por C: cinco más dos, siete. Por B y C: dos más uno más dos, cinco. El mínimo es cinco y la ruta es A, B, C, D. Pida las sumas oralmente antes de escribirlas; reserve tiempo para justificar que estas son todas las rutas posibles en esta red.» Transición: «Observemos cómo encontrar esos mínimos sin listar rutas completas»."
    },
    {
      id: "pnn10-8",
      title: "Una regla para avanzar",
      contentHtml: `<div class="space-y-2 text-xl"><p>Con costos no negativos, fijen el punto pendiente de <strong>menor costo acumulado</strong> y revisen sus salidas.</p><p>¿Qué punto sigue y cómo cambian los costos conocidos? ∞: sin ruta conocida. En paréntesis: predecesor.</p><table class="w-full text-center text-xl border-collapse"><thead><tr class="bg-slate-800 text-white"><th scope="col" class="p-2">Estado</th><th scope="col">A</th><th scope="col">B</th><th scope="col">C</th><th scope="col">D</th></tr></thead><tbody><tr class="bg-slate-100"><th scope="row" class="p-2">Inicial</th><td>0</td><td>∞</td><td>∞</td><td>∞</td></tr><tr data-reveal class="bg-blue-100 text-blue-950"><th scope="row" class="p-2">Fijado A</th><td>0</td><td>2 (A)</td><td>5 (A)</td><td>10 (A)</td></tr><tr data-reveal class="bg-amber-100 text-amber-950"><td colspan="5" class="p-2">Al revisar B → C: mín(5, 2 + 1) = <strong>3</strong>; predecesor de C: B.</td></tr><tr data-reveal class="bg-slate-100"><th scope="row" class="p-2">Fijado B</th><td>0</td><td>2 (A)</td><td>3 (B)</td><td>8 (B)</td></tr><tr data-reveal class="bg-blue-100 text-blue-950"><th scope="row" class="p-2">Fijado C</th><td>0</td><td>2 (A)</td><td>3 (B)</td><td>5 (C)</td></tr><tr data-reveal class="bg-emerald-100 text-emerald-950"><th scope="row" class="p-2">Fijado D</th><td>0</td><td>2 (A)</td><td>3 (B)</td><td>5 (C)</td></tr></tbody></table></div>`,
      notes: "«Esta es la idea de Dijkstra para costos no negativos. ∞ significa que aún no se conoce una ruta; el paréntesis indica el predecesor de la mejor ruta conocida. Los costos de puntos pendientes son provisionales y pueden mejorar; cuando se fija un punto, su costo es definitivo bajo esta condición. Antes de cada revelación pregunte qué punto pendiente tiene menor costo acumulado y qué salidas mejoran. Al fijar A aparecen B=2, C=5 y D=10, todos desde A. ¿Por qué fijar B? Cualquier ruta alternativa que pase primero por otro punto pendiente ya cuesta al menos tanto como el menor pendiente; con tramos no negativos no puede reducir ese costo al continuar. Esa es la intuición: los costos acumulados no bajan al añadir tramos. Al revisar B→C, comparar la mejor distancia conocida, 5, con 2+1: mín(5, 2+1)=3; actualizar C a 3 y su predecesor de A a B. Para D, mín(10, 2+6)=8 y predecesor B. Al fijar C, mín(8, 3+2)=5 y predecesor C. Al fijar D termina. No elegimos el tramo individual más barato; con pesos negativos la justificación deja de valer.» Transición: «Reconstruyamos la respuesta»."
    },
    {
      id: "pnn10-9",
      title: "Resultados desde A",
      contentHtml: `<div class="space-y-5 text-xl"><p>¿Cómo se reconstruye la ruta mínima hacia D?</p><p>Expliquen oralmente por qué A → C → D no es la mejor ruta.</p><p data-reveal>Predecesores: D ← C ← B ← A. Ruta: <strong>A → B → C → D</strong>.</p><p data-reveal>A → C → D cuesta 5 + 2 = 7; la ruta mínima cuesta 5.</p></div>`,
      notes: "«Las distancias finales son cero, dos, tres y cinco. Para D, seguimos los predecesores: D viene de C, C de B y B de A. ¿Por qué la ruta A, C, D no gana? Escuche: cinco más dos es siete, mayor que cinco. Si alguien compara solo el último tramo, vuelva a señalar la suma completa.» Transición: «Cerremos con una comprobación»."
    },
    {
      id: "pnn10-10",
      title: "Fuentes",
      contentHtml: `<div class="space-y-5 text-xl"><p>¿Una ruta con más tramos puede tener menor costo total?</p><p class="text-sm">Di Pierro, <em>Annotated Algorithms in Python3</em>, pp. 110–111.</p><p class="text-sm">Sedgewick y Wayne, <em>Shortest Paths</em>: https://algs4.cs.princeton.edu/44sp/</p><p class="text-sm">CP-Algorithms, <em>Dijkstra Algorithm</em>: https://cp-algorithms.com/graph/dijkstra.html</p></div>`,
      notes: "«Sí. En nuestro ejemplo A a B a C cuesta tres, mientras que A a C cuesta cinco. El número de tramos no determina por sí solo el costo total.» Cierre: «Una ruta mínima se compara por la suma de sus pesos, desde el mismo origen». Transición final: «Las fuentes permiten ampliar el estudio por cuenta propia». No asignar una nueva entrega ni fecha."
    },
  ],
  tasks: []
};
