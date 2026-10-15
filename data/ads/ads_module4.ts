import { Module } from '../../types';

export const ANALISIS_DISENO_MODULE_4: Module = {
  id: 'ads-mod-4',
  title: '4. Ciclo de vida de los sistemas y prueba del Corte I',
  description:
    'Semana 4 (jueves 15/10 y viernes 16/10): el ciclo de vida de los sistemas (7 fases del SDLC), la importancia de los SI en las organizaciones y el repaso integrador de las Unidades I y II. El viernes 16/10 se aplica la prueba escrita mixta (10 %). Unidad II, objetivos II.3 y II.5.',
  evaluation: '10% — Prueba escrita mixta (Unidades I y II)',
  slides: [
    {
      id: 'ads4-1',
      title: 'Análisis y Diseño de Sistemas · Semana 4',
      contentHtml: `
        <div class="space-y-7">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 bg-sky-600 rounded-2xl flex items-center justify-center text-white text-4xl shadow-lg">🔄</div>
            <div>
              <p class="text-sm uppercase tracking-widest font-bold text-sky-700">Análisis y Diseño de Sistemas · Unidad II</p>
              <h2 class="text-3xl md:text-4xl font-bold text-slate-900">El ciclo de vida de los sistemas</h2>
              <p class="text-slate-500 mt-1">Cómo nace un sistema y por qué importa a la organización</p>
            </div>
          </div>
          <div class="bg-sky-50 border border-sky-200 rounded-xl p-5 text-sky-950">
            <p class="text-lg"><strong>Objetivo:</strong> analizar el ciclo de vida de los sistemas de información y argumentar su importancia en las organizaciones.</p>
          </div>
          <p class="text-sm text-slate-500">Jueves 15/10/2026 · 13:00–14:30 · Aula A-01 · Sección A · IUPSM — Extensión Ciudad Ojeda</p>
        </div>
      `
    },
    {
      id: 'ads4-2',
      title: 'Qué veremos hoy',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-slate-600 text-lg">Ya sabemos <strong>qué es</strong> un SI y <strong>cómo se clasifica</strong>. Hoy respondemos: <strong>¿cómo nace un SI?</strong> Y cerramos con el repaso para la prueba del viernes.</p>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-sky-50 border border-sky-200 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-sky-700">Teoría breve</p><h3 class="text-lg font-bold text-sky-950 mt-2">Ciclo de vida</h3><p class="text-sm text-sky-900 mt-2">Las 7 fases que llevan del problema al sistema en marcha.</p></div>
            <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-emerald-700">Práctica</p><h3 class="text-lg font-bold text-emerald-950 mt-2">Ubicar un caso</h3><p class="text-sm text-emerald-900 mt-2">La ferretería «El Constructor» recorre las 7 fases en tu cuaderno.</p></div>
            <div class="bg-violet-50 border border-violet-200 rounded-2xl p-5"><p class="text-xs uppercase tracking-wider font-bold text-violet-700">Repaso</p><h3 class="text-lg font-bold text-violet-950 mt-2">Unidades I y II</h3><p class="text-sm text-violet-900 mt-2">Repaso integrador por preguntas, preparando el 10 % del viernes.</p></div>
          </div>
          <div class="bg-slate-900 text-white rounded-2xl p-5">
            <p class="text-xs uppercase tracking-widest font-bold text-slate-300 mb-3">Ruta de trabajo (90 min)</p>
            <div class="flex flex-wrap gap-2 text-sm font-bold">
              <span class="bg-sky-600 rounded-full px-3 py-2">Ciclo de vida</span><span class="text-slate-400 self-center">→</span>
              <span class="bg-indigo-600 rounded-full px-3 py-2">Importancia</span><span class="text-slate-400 self-center">→</span>
              <span class="bg-emerald-600 rounded-full px-3 py-2">Caso guiado</span><span class="text-slate-400 self-center">→</span>
              <span class="bg-violet-600 rounded-full px-3 py-2">Repaso I y II</span>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'ads4-3',
      title: 'Activación · devolución del mapa y pregunta puente',
      notes: 'Devolver los mapas corregidos aquí (pendiente del viernes 09/10). Respuesta esperada a la pregunta puente: un SI no nace de la nada; sigue un camino ordenado por fases que va del problema al sistema en marcha — ese camino es el ciclo de vida.',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-sky-600 text-white rounded-xl p-4 flex items-center justify-between"><div><p class="text-xs uppercase tracking-widest font-bold text-sky-100">Primeros 8 minutos</p><h3 class="text-xl font-bold mt-1">Devolución del mapa conceptual</h3></div><span class="text-3xl">🗺️</span></div>
          <p class="text-slate-600">Te regresamos el <strong>mapa conceptual corregido</strong> del viernes 09/10, con dos preguntas de retroalimentación. Es tu <strong>resumen de estudio</strong> para la prueba.</p>
          <div class="bg-gradient-to-br from-slate-900 to-sky-900 text-white p-6 rounded-2xl">
            <p class="text-xs uppercase tracking-widest font-bold text-sky-300">Pregunta puente</p>
            <p class="text-xl md:text-2xl font-bold mt-2 leading-snug">Ya vimos qué es un SI y cómo se clasifica. Ahora: <strong>¿cómo nace un SI?</strong></p>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800">💡 Pista: no nace de la nada. Sigue un <strong>camino ordenado por fases</strong>: del problema al sistema en marcha. Ese camino es el <strong>ciclo de vida</strong>.</div>
        </div>
      `
    },
    {
      id: 'ads4-4',
      title: 'Ciclo de vida: qué es y para qué sirve',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-gradient-to-br from-sky-600 to-indigo-700 text-white p-6 rounded-2xl shadow-lg">
            <p class="text-xs uppercase tracking-widest font-bold text-sky-100">Objetivo II.3</p>
            <p class="text-2xl font-bold mt-2">El <strong>ciclo de vida del desarrollo de sistemas (SDLC)</strong> es el proceso ordenado por fases que va desde que se detecta un <strong>problema u oportunidad</strong> hasta que el sistema queda <strong>implementado y en evaluación continua</strong>.</p>
          </div>
          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-white border-2 border-sky-100 rounded-xl p-5"><h4 class="font-bold text-sky-900">Qué es</h4><p class="text-sm text-slate-700 mt-2">Un <strong>marco de trabajo</strong> que ordena lo que hace el analista y evita saltarse pasos importantes.</p></div>
            <div class="bg-slate-50 border-2 border-slate-200 rounded-xl p-5"><h4 class="font-bold text-slate-900">Qué NO es</h4><p class="text-sm text-slate-700 mt-2">No es una receta rígida: cada proyecto se adapta, pero <strong>siempre</strong> pasa por entender el problema antes de construir.</p></div>
          </div>
          <div class="bg-sky-50 border border-sky-200 rounded-xl p-4 text-sm text-sky-950"><strong>Fuente:</strong> Kendall &amp; Kendall (1997) y TutorialsPoint — System Analysis and Design.</div>
        </div>
      `
    },
    {
      id: 'ads4-5',
      title: 'Las 7 fases del ciclo de vida',
      contentHtml: `
        <div class="space-y-5">
          <p class="text-slate-600 text-lg">Nomenclatura de trabajo en clase. Cada fase responde una pregunta y deja un producto:</p>
          <div class="overflow-x-auto border border-slate-200 rounded-xl">
            <div class="min-w-[680px]">
              <div class="grid grid-cols-3 bg-slate-900 text-white text-xs font-bold"><div class="p-3">Fase</div><div class="p-3">Pregunta que responde</div><div class="p-3">Producto típico</div></div>
              <div class="divide-y divide-slate-200 text-sm">
                <div class="grid grid-cols-3"><div class="p-3 font-bold text-sky-800">1 · Identificación de problemas y objetivos</div><div class="p-3 text-slate-700">¿qué está mal o qué ganamos?</div><div class="p-3 text-slate-700">enunciado del problema</div></div>
                <div class="grid grid-cols-3 bg-slate-50"><div class="p-3 font-bold text-sky-800">2 · Requerimientos de información</div><div class="p-3 text-slate-700">¿qué necesita saber el usuario?</div><div class="p-3 text-slate-700">requerimientos</div></div>
                <div class="grid grid-cols-3"><div class="p-3 font-bold text-sky-800">3 · Análisis de necesidades</div><div class="p-3 text-slate-700">¿cómo organizamos eso en funciones?</div><div class="p-3 text-slate-700">modelo de necesidades</div></div>
                <div class="grid grid-cols-3 bg-slate-50"><div class="p-3 font-bold text-indigo-800">4 · Diseño del sistema</div><div class="p-3 text-slate-700">¿cómo lo construimos?</div><div class="p-3 text-slate-700">diseño (entradas, salidas, datos)</div></div>
                <div class="grid grid-cols-3"><div class="p-3 font-bold text-indigo-800">5 · Desarrollo y documentación</div><div class="p-3 text-slate-700">¿lo programamos?</div><div class="p-3 text-slate-700">código + documentación</div></div>
                <div class="grid grid-cols-3 bg-slate-50"><div class="p-3 font-bold text-indigo-800">6 · Pruebas y mantenimiento</div><div class="p-3 text-slate-700">¿funciona y se corrige?</div><div class="p-3 text-slate-700">plan de pruebas</div></div>
                <div class="grid grid-cols-3"><div class="p-3 font-bold text-violet-800">7 · Implementación y evaluación</div><div class="p-3 text-slate-700">¿lo ponemos en marcha y lo revisamos?</div><div class="p-3 text-slate-700">sistema en producción + evaluación</div></div>
              </div>
            </div>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800">🧭 <strong>Regla:</strong> fases <strong>1–3 = análisis</strong> (entender el problema) · fases <strong>4–7 = diseño y construcción</strong> (resolverlo).</div>
        </div>
      `
    },
    {
      id: 'ads4-5b',
      title: 'El ciclo de vida es un ciclo',
      contentHtml: `
        <div class="space-y-4">
          <div class="mermaid">graph LR
            F1["1 Identificación"] --> F2["2 Requerimientos"] --> F3["3 Análisis"] --> F4["4 Diseño"] --> F5["5 Desarrollo"] --> F6["6 Pruebas"] --> F7["7 Implementación y evaluación"]
            F7 -.->|"nuevas necesidades"| F1</div>
          <p class="text-sm text-slate-600">La implementación no cierra el proceso: la evaluación revela necesidades nuevas y el ciclo vuelve a empezar.</p>
        </div>
      `,
      notes: 'Preguntar: ¿por qué decimos ciclo y no línea? Respuesta: tras evaluar aparecen nuevas necesidades.'
    },
    {
      id: 'ads4-6',
      title: 'Recorrido por las fases (una a una)',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-sky-600 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-sky-100">Sigue el hilo</p><h3 class="text-xl font-bold mt-1">Un mismo caso a lo largo de las 7 fases</h3></div>
          <ol class="space-y-2 text-sm">
            <li data-reveal class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-sky-700">1</span><span class="flex-1"><strong>Identificación:</strong> la ferretería no sabe qué tiene en el depósito. Problema: inventario desactualizado.</span></li>
            <li data-reveal class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-sky-700">2</span><span class="flex-1"><strong>Requerimientos:</strong> el encargado necesita saber existencias por producto y cuánto debe a proveedores.</span></li>
            <li data-reveal class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-sky-700">3</span><span class="flex-1"><strong>Análisis:</strong> se agrupan las necesidades en funciones: registrar compras, registrar ventas, consultar existencias.</span></li>
            <li data-reveal class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-indigo-700">4</span><span class="flex-1"><strong>Diseño:</strong> pantallas de entrada, reportes de inventario y modelo de datos de productos y proveedores.</span></li>
            <li data-reveal class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-indigo-700">5</span><span class="flex-1"><strong>Desarrollo:</strong> se programa el módulo de inventario y se documenta cómo usarlo.</span></li>
            <li data-reveal class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-indigo-700">6</span><span class="flex-1"><strong>Pruebas:</strong> se prueba con datos reales del mes y se corrigen los errores encontrados.</span></li>
            <li data-reveal class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-violet-700">7</span><span class="flex-1"><strong>Implementación:</strong> se pone en marcha en la ferretería y se evalúa si el inventario ya está al día.</span></li>
          </ol>
          <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-sm text-emerald-950"><strong>El ciclo no termina aquí:</strong> al usarlo aparecen nuevas necesidades (¿reportes por proveedor?) y el ciclo <strong>vuelve a empezar</strong>.</div>
        </div>
      `
    },
    {
      id: 'ads4-7',
      title: 'Importancia en las organizaciones · II.5',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-indigo-600 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-indigo-100">Objetivo II.5 · argumentar, no repetir</p><h3 class="text-xl font-bold mt-1">¿Por qué a la organización le importa un SI bien diseñado?</h3></div>
          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-sky-50 border-2 border-sky-200 rounded-xl p-4"><h4 class="font-bold text-sky-900">⚡ Eficiencia</h4><p class="text-sm text-sky-800 mt-1">Procesos ordenados reducen duplicados y retrabajo (fases 2–3).</p></div>
            <div class="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-4"><h4 class="font-bold text-indigo-900">🧩 Integración</h4><p class="text-sm text-indigo-800 mt-1">Un solo flujo de datos entre áreas (fase 4), en vez de libretas separadas.</p></div>
            <div class="bg-violet-50 border-2 border-violet-200 rounded-xl p-4"><h4 class="font-bold text-violet-900">⏱️ Oportunidad</h4><p class="text-sm text-violet-800 mt-1">Información a tiempo para decidir (la fase 2 pregunta qué necesita cada usuario).</p></div>
            <div class="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-4"><h4 class="font-bold text-emerald-900">🔁 Continuidad</h4><p class="text-sm text-emerald-800 mt-1">El sistema se corrige y mejora (fases 6–7), no se abandona.</p></div>
          </div>
          <div class="bg-slate-900 text-white rounded-xl p-4 text-sm"><strong>Idea clave:</strong> un SI importa en la medida en que su <strong>ciclo de vida está bien hecho</strong>. No se rechaza por la tecnología, sino porque el ciclo ignoró una necesidad.</div>
        </div>
      `
    },
    {
      id: 'ads4-8',
      title: 'Práctica guiada · la ferretería recorre las fases',
      notes: 'Guiar en voz alta solo la fase 1. Dejar 15 min. Avisos de tiempo a los 8 y a los 2 minutos. Respuestas de referencia: f.2 preguntar al encargado qué necesita saber; f.3 agrupar en compras/ventas/existencias; f.4 pantallas y reportes; f.5 programar; f.6 probar con datos reales; f.7 puesta en marcha y evaluación.',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-emerald-600 text-white rounded-xl p-4 flex items-center justify-between"><div><p class="text-xs uppercase tracking-widest font-bold text-emerald-100">En parejas · 15 min</p><h3 class="text-xl font-bold">Ubica la ferretería en las 7 fases</h3></div><span class="text-3xl">🏗️</span></div>
          <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-700"><strong>Caso:</strong> la ferretería <strong>«El Constructor»</strong> de Ciudad Ojeda lleva compras, ventas e inventario en <strong>tres libretas</strong>. A fin de mes no sabe qué tiene en el depósito ni cuánto debe a los proveedores.</div>
          <ol class="space-y-2 text-sm">
            <li class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-emerald-700">1</span><span class="flex-1">El docente hace la <strong>fase 1</strong> contigo (problema, oportunidad, objetivo).</span></li>
            <li class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-emerald-700">2</span><span class="flex-1">Completa en el cuaderno las <strong>fases 2 a 7</strong> con una línea cada una: qué preguntarías y qué producto saldría.</span></li>
          </ol>
          <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-sm text-emerald-950"><strong>Reglas:</strong> trabajo en el cuaderno, una línea por fase, sin imprimir nada. Recuerda separar <strong>análisis</strong> (1–3) de <strong>diseño</strong> (4–7).</div>
        </div>
      `
    },
    {
      id: 'ads4-9',
      title: 'Repaso integrador · Unidades I y II',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-violet-600 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-violet-100">ABP + técnica de la pregunta · 25 min</p><h3 class="text-xl font-bold mt-1">Un problema, cinco ejes temáticos</h3></div>
          <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-700"><strong>Escenario (nuevo):</strong> el consultorio <strong>«Salud Familiar»</strong> de Ciudad Ojeda registra citas e historias clínicas en <strong>fichas de papel</strong>. Se pierden fichas, los médicos no saben qué pacientes tienen pendientes y no hay reporte de cuántas consultas hubo en el mes.</div>
          <p class="text-slate-600 text-sm">Este repaso recorre temas de las Unidades I y II <strong>con un caso distinto y preguntas propias del repaso</strong> (no son las preguntas de la prueba):</p>
          <div class="grid md:grid-cols-5 gap-2 text-center text-xs font-bold">
            <div class="bg-sky-50 border border-sky-200 rounded-lg p-2 text-sky-800">Conceptos</div>
            <div class="bg-indigo-50 border border-indigo-200 rounded-lg p-2 text-indigo-800">Necesidades</div>
            <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-2 text-emerald-800">Viabilidad</div>
            <div class="bg-violet-50 border border-violet-200 rounded-lg p-2 text-violet-800">Ciclo de vida</div>
            <div class="bg-amber-50 border border-amber-200 rounded-lg p-2 text-amber-800">Niveles e importancia</div>
          </div>
        </div>
      `
    },
    {
      id: 'ads4-10',
      title: 'Repaso · cinco preguntas guía',
      notes: 'Respuestas de referencia (no se muestran): 1) El prototipo probado corresponde a la fase de pruebas; sigue la implementación. Saltarla sin capacitar y sin migrar las fichas lleva al rechazo del personal y a datos incompletos; además no habría evaluación posterior. 2) El eje económico (presupuesto) y, después, el operativo (¿usarán el sistema?). Alternativa: implantación por fases, empezando por la agenda con una herramienta sencilla o de software libre, con capacitación. 3) Recepcionista: citas del día y pacientes pendientes (nivel operativo). Dueña: reporte mensual de consultas (táctico) y la tendencia de crecimiento (gerencial). 4) ¿Qué decisiones tomas con esa información? ¿Qué datos necesitas ver en cada consulta? ¿Con qué frecuencia y en qué formato? Así se obtiene un requerimiento medible. 5) Ya son un sistema: fichas, archivador, personas y el procedimiento de archivar (elementos que interactúan para un fin). Falta que los datos se procesen y se distribuyan como información oportuna para decidir (consulta rápida, reportes).',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-violet-600 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-violet-100">En parejas · responde en el cuaderno</p><h3 class="text-xl font-bold mt-1">Cinco preguntas sobre «Salud Familiar»</h3></div>
          <div class="space-y-3">
            <div class="flex gap-4 bg-white border-l-4 border-sky-500 rounded-xl p-4"><span class="font-bold text-sky-600">1</span><p class="text-slate-800"><strong>Ciclo de vida:</strong> el consultorio ya probó un prototipo de agenda con una enfermera. ¿Qué fase acaba de cumplir y qué riesgo corre si se salta la siguiente?</p></div>
            <div class="flex gap-4 bg-white border-l-4 border-indigo-500 rounded-xl p-4"><span class="font-bold text-indigo-600">2</span><p class="text-slate-800"><strong>Viabilidad:</strong> con dos médicos y un presupuesto muy ajustado, ¿cuál de los cuatro ejes te preocuparía primero y qué alternativa le propondrías al consultorio?</p></div>
            <div class="flex gap-4 bg-white border-l-4 border-emerald-500 rounded-xl p-4"><span class="font-bold text-emerald-600">3</span><p class="text-slate-800"><strong>Niveles de decisión:</strong> ¿qué información necesita la recepcionista cada mañana y cuál necesita la dueña del consultorio cada mes? ¿En qué nivel está cada una?</p></div>
            <div class="flex gap-4 bg-white border-l-4 border-violet-500 rounded-xl p-4"><span class="font-bold text-violet-600">4</span><p class="text-slate-800"><strong>Rol del analista:</strong> un médico dice «necesito saber todo de mis pacientes». ¿Qué le preguntarías para convertir esa frase en un requerimiento concreto?</p></div>
            <div class="flex gap-4 bg-white border-l-4 border-amber-500 rounded-xl p-4"><span class="font-bold text-amber-600">5</span><p class="text-slate-800"><strong>Sistema vs. sistema de información:</strong> de lo que el consultorio usa hoy (fichas, archivador, secretaria, lapicero), ¿qué ya es un sistema y qué le faltaría para ser un sistema de información?</p></div>
          </div>
          <div class="bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm text-slate-700">El docente rota por los puestos y luego se corrige en plenaria. Trabaja <strong>sin mirar el mapa</strong> primero; úsalo después para verificar.</div>
        </div>
      `
    },
    {
      id: 'ads4-11',
      title: 'Alcance de la prueba del viernes',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-amber-500 text-white rounded-xl p-4 flex items-center justify-between"><div><p class="text-xs uppercase tracking-widest font-bold text-amber-100">Viernes 16/10 · 10 % del Corte I</p><h3 class="text-xl font-bold mt-1">Qué cubre la prueba (solo el alcance)</h3></div><span class="text-3xl">📝</span></div>
          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-white border-2 border-amber-200 rounded-xl p-4"><h4 class="font-bold text-amber-900">Datos</h4><p class="text-sm text-slate-700 mt-1">Prueba escrita mixta · <strong>20 puntos</strong> · <strong>5 apartados</strong> · Unidades I y II.</p></div>
            <div class="bg-white border-2 border-amber-200 rounded-xl p-4"><h4 class="font-bold text-amber-900">Trae</h4><p class="text-sm text-slate-700 mt-1">Lápiz, borrador y calculadora simple. Nada más sobre el pupitre.</p></div>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-950">
            <strong>Alcance temático (Unidades I y II):</strong> conceptos básicos y rol del analista · objetivos del análisis y estudio de viabilidad (4 ejes) · ciclo de vida de los sistemas · sistemas de información (definición, clasificación e importancia).
          </div>
          <p class="text-xs text-slate-500">Las preguntas exactas no se muestran hoy: el repaso de arriba ya ejercitó esos cinco ejes con otro caso.</p>
        </div>
      `
    },
    {
      id: 'ads4-quiz',
      title: 'Comprobación rápida · ciclo de vida',
      contentHtml: `
        <div class="space-y-5">
          <div data-quiz class="bg-white border rounded-xl p-4 space-y-2">
            <p class="font-semibold">¿Cuál de estas fases pertenece al <strong>análisis</strong> (entender el problema)?</p>
            <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">Diseño del sistema recomendado</button>
            <button data-option data-correct class="block w-full text-left border rounded-lg p-2 text-sm">Determinación de los requerimientos de información</button>
            <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">Implementación y evaluación</button>
            <p data-explain class="text-sm text-slate-600">Las fases 1–3 (identificación, requerimientos, análisis) entienden el problema; de la 4 a la 7 se diseña y construye.</p>
          </div>
          <div data-quiz class="bg-white border rounded-xl p-4 space-y-2">
            <p class="font-semibold">¿Por qué se dice que el ciclo de vida es un <em>ciclo</em>?</p>
            <button data-option data-correct class="block w-full text-left border rounded-lg p-2 text-sm">Porque tras evaluar aparecen nuevas necesidades y se vuelve a empezar</button>
            <button data-option class="block w-full text-left border rounded-lg p-2 text-sm">Porque cada fase dura el mismo tiempo</button>
            <p data-explain class="text-sm text-slate-600">La evaluación del sistema alimenta una nueva identificación de problemas.</p>
          </div>
        </div>
      `,
      notes: 'Formativa (0 %). No contiene ítems de la prueba del viernes.'
    },
    {
      id: 'ads4-12',
      title: 'Cierre del jueves · síntesis y cómo estudiar',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-gradient-to-br from-slate-900 to-indigo-900 text-white p-6 rounded-2xl"><p class="text-xs uppercase tracking-widest font-bold text-indigo-200">Antes de irnos</p><h3 class="text-2xl font-bold mt-2">Lo que debe quedar</h3></div>
          <div class="grid md:grid-cols-3 gap-3">
            <div class="bg-white border-2 border-sky-100 rounded-xl p-4"><h4 class="font-bold text-sky-900 text-sm">Síntesis</h4><p class="text-sm text-slate-700 mt-1">Problema → requerimientos → análisis → diseño → construcción → pruebas → implementación, y vuelta a empezar.</p></div>
            <div class="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-4"><h4 class="font-bold text-emerald-900 text-sm">Cómo estudiar 📚</h4><p class="text-sm text-emerald-950 mt-1">Repasa con el <strong>mapa corregido</strong> y los apuntes de S1–S4; vuelve a resolver las 5 preguntas del repaso.</p></div>
            <div class="bg-amber-50 border-2 border-amber-200 rounded-xl p-4"><h4 class="font-bold text-amber-900 text-sm">Anticipo ⏭️</h4><p class="text-sm text-amber-950 mt-1">Viernes 16/10: <strong>prueba escrita mixta (10 %)</strong> · 20 puntos · 5 apartados.</p></div>
          </div>
        </div>
      `
    },
    {
      id: 'ads4-13',
      title: 'Viernes 16/10 · Prueba escrita mixta',
      contentHtml: `
        <div class="space-y-7">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center text-white text-4xl shadow-lg">📝</div>
            <div>
              <p class="text-sm uppercase tracking-widest font-bold text-amber-700">Análisis y Diseño de Sistemas · Corte I</p>
              <h2 class="text-3xl md:text-4xl font-bold text-slate-900">Prueba escrita mixta</h2>
              <p class="text-slate-500 mt-1">Unidades I y II · 20 puntos · 10 %</p>
            </div>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-5 text-amber-950">
            <p class="text-lg"><strong>Hoy evaluamos</strong> las Unidades I y II con una prueba escrita mixta. Trabajo individual, en silencio.</p>
          </div>
          <p class="text-sm text-slate-500">Viernes 16/10/2026 · 13:00–14:30 · Aula A-01 · Sección A · IUPSM — Extensión Ciudad Ojeda</p>
        </div>
      `
    },
    {
      id: 'ads4-14',
      title: 'Logística e instrucciones',
      notes: 'Duración de resolución: 75 min (corregida en la revisión del 15/10). Impresión autorizada: solo las copias de la prueba. Verificar identificación de cada copia. El borrador ya corrige el bloque a viernes 16/10.',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-amber-500 text-white rounded-xl p-4"><p class="text-xs uppercase tracking-widest font-bold text-amber-100">Antes de empezar</p><h3 class="text-xl font-bold mt-1">Instrucciones generales</h3></div>
          <ol class="space-y-2 text-sm">
            <li class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-amber-700">1</span><span class="flex-1">Un estudiante por puesto. Sobre el pupitre: <strong>lápiz, borrador y calculadora simple</strong>.</span></li>
            <li class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-amber-700">2</span><span class="flex-1">Guarda cuadernos, apuntes y dispositivos. <strong>No se permite consultar material.</strong></span></li>
            <li class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-amber-700">3</span><span class="flex-1">La prueba tiene <strong>5 apartados</strong> que suman <strong>20 puntos</strong>. Lee todo antes de responder.</span></li>
            <li class="flex gap-3 bg-white border rounded-xl p-3"><span class="font-bold text-amber-700">4</span><span class="flex-1">Escribe con letra clara y <strong>identifica tu prueba</strong> con nombre, cédula y sección.</span></li>
          </ol>
          <div class="bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm text-slate-700">Si tienes una duda de <strong>redacción</strong>, levanta la mano; las dudas de contenido no se aclaran durante la prueba.</div>
        </div>
      `
    },
    {
      id: 'ads4-15',
      title: 'Aplicación de la prueba',
      notes: 'Avisos de tiempo a los 35 y a los 10 minutos restantes. Supervisar sin interrumpir. No aclarar contenido.',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-gradient-to-br from-amber-500 to-orange-600 text-white p-8 rounded-2xl shadow-lg text-center">
            <p class="text-xs uppercase tracking-widest font-bold text-amber-100">En curso</p>
            <p class="text-3xl md:text-4xl font-bold mt-3">Trabajo individual · en silencio</p>
          </div>
          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-white border-2 border-amber-100 rounded-xl p-4"><h4 class="font-bold text-slate-900">Recuerda</h4><p class="text-sm text-slate-700 mt-1">Lee los 5 apartados completos y administra tu tiempo: no te quedes pegado en uno solo.</p></div>
            <div class="bg-white border-2 border-amber-100 rounded-xl p-4"><h4 class="font-bold text-slate-900">Al entregar</h4><p class="text-sm text-slate-700 mt-1">Revisa que estén tu nombre, cédula y sección antes de entregar la hoja.</p></div>
          </div>
          <p class="text-xs text-slate-500 text-center">75 minutos · 20 puntos · 5 apartados</p>
        </div>
      `
    },
    {
      id: 'ads4-16',
      title: 'Cierre · devolución y próxima semana',
      notes: 'Fechas tomadas del calendario (no inventadas): retroalimentación y notas previstas para la semana 6 (26–31/10; por confirmar con el docente); entrega de notas en DACE del Corte I el 31/10/2026 (semestre.json, corte I entrega_dace). Anticipo: semana 5 = Unidad III + taller 20 % el viernes 23/10.',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-gradient-to-br from-slate-900 to-amber-900 text-white p-6 rounded-2xl"><p class="text-xs uppercase tracking-widest font-bold text-amber-200">Antes de cerrar</p><h3 class="text-2xl font-bold mt-2">Devolución de resultados</h3></div>
          <div class="space-y-3">
            <div class="flex gap-4 bg-white border-l-4 border-amber-500 rounded-xl p-4"><span class="font-bold text-amber-600">📅</span><p class="text-slate-800">Los resultados y la retroalimentación de la prueba se discuten en la <strong>semana 6 (26–31 de octubre; por confirmar)</strong>, junto con el cierre del Corte I.</p></div>
            <div class="flex gap-4 bg-white border-l-4 border-sky-500 rounded-xl p-4"><span class="font-bold text-sky-600">🏛️</span><p class="text-slate-800">La entrega de notas en DACE del Corte I está pautada para el <strong>31/10/2026</strong>.</p></div>
            <div class="flex gap-4 bg-white border-l-4 border-emerald-500 rounded-xl p-4"><span class="font-bold text-emerald-600">⏭️</span><p class="text-slate-800">Semana 5 (jueves 22/10 y viernes 23/10): <strong>Unidad III</strong> — tipos de decisiones y sistemas de apoyo, con <strong>taller del 20 %</strong> el viernes 23/10.</p></div>
          </div>
        </div>
      `
    },
    {
      id: 'ads4-17',
      title: 'Fuentes',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-slate-50 border border-slate-200 rounded-2xl p-5">
            <p class="font-bold text-slate-900">Para ampliar</p>
            <ul class="list-disc list-inside text-sm text-slate-700 mt-3 space-y-2">
              <li><strong>Programa analítico de Análisis y Diseño de Sistemas</strong>, Unidad II: objetivos II.3 (ciclo de vida) y II.5 (importancia en las organizaciones).</li>
              <li><strong>Kendall, K. y Kendall, J.</strong> (1997). <em>Análisis y diseño de sistemas</em>. Pearson Education.</li>
              <li><strong>Senn, J.</strong> (1992). <em>Análisis y diseño de sistemas de información</em>. McGraw-Hill.</li>
              <li><strong>TutorialsPoint</strong> — System Analysis and Design (SDLC, referencia).</li>
            </ul>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-950"><strong>Actividad PGA de la semana:</strong> prueba escrita mixta (Unidades I y II) · técnica: pruebas de comprobación · instrumento: prueba escrita mixta (formato 8.1) · <strong>10 %</strong> · viernes 16/10/2026.</div>
          <p class="text-xs text-slate-400 text-center">Material adaptado con fines docentes; se citan las fuentes originales.</p>
        </div>
      `
    }
  ]
};
