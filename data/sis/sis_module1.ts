import { Module } from '../../types';

export const SISTEMAS_I_MODULE_1: Module = {
  id: 'sis-mod-1',
  title: '1. Introducción a la Ingeniería de Software',
  description: 'Qué es la ingeniería de software, la crisis del software, el objetivo general y los atributos de calidad, y el campo de aplicación (Unidad I, objetivo I.1).',
  evaluation: '0% — Diagnóstica',
  slides: [
    {
      id: 'sis1-1',
      title: 'Sistemas I — Bienvenida',
      contentHtml: `
        <div class="space-y-6">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center text-white text-3xl shadow-lg">⚙️</div>
            <div>
              <h2 class="text-3xl font-bold text-slate-900">Sistemas I</h2>
              <p class="text-slate-500">Ingeniería de Software · Ing. Luis Felipe Moreno Oropeza</p>
            </div>
          </div>

          <p class="text-gray-700 text-lg">
            No vamos a aprender "un lenguaje más": vamos a aprender a <strong>construir software con enfoque de ingeniería</strong>.
          </p>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="bg-blue-50 border border-blue-200 rounded-xl p-3 text-center">
              <div class="text-2xl">🧱</div>
              <p class="text-xs font-bold text-blue-900 mt-1">I. Introducción a la IS</p>
            </div>
            <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-3 text-center">
              <div class="text-2xl">🔀</div>
              <p class="text-xs font-bold text-indigo-900 mt-1">II. Procesos alternativos</p>
            </div>
            <div class="bg-violet-50 border border-violet-200 rounded-xl p-3 text-center">
              <div class="text-2xl">📋</div>
              <p class="text-xs font-bold text-violet-900 mt-1">III. Análisis de requerimiento</p>
            </div>
            <div class="bg-fuchsia-50 border border-fuchsia-200 rounded-xl p-3 text-center">
              <div class="text-2xl">🏛️</div>
              <p class="text-xs font-bold text-fuchsia-900 mt-1">IV. Arquitectura del software</p>
            </div>
          </div>

          <div class="bg-slate-900 text-white rounded-xl p-4 flex flex-wrap items-center justify-between gap-3">
            <span class="text-sm font-semibold">Evaluación por cortes</span>
            <div class="flex gap-2 text-xs font-mono">
              <span class="bg-white/10 px-3 py-1 rounded">Corte I 30%</span>
              <span class="bg-white/10 px-3 py-1 rounded">Corte II 30%</span>
              <span class="bg-white/10 px-3 py-1 rounded">Corte III 40%</span>
            </div>
          </div>

          <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800">
            📝 <strong>Diagnóstica (0%):</strong> se aplicó el <strong>lunes 28/09</strong> — Sistemas I solo tiene clase los lunes. No califica.
          </div>
        </div>
      `
    },
    {
      id: 'sis1-2',
      title: '¿Qué es la Ingeniería de Software?',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-6 rounded-2xl shadow-lg">
            <p class="text-xs uppercase tracking-widest font-bold mb-2">Definición</p>
            <p class="text-xl leading-relaxed">
              Aplicación de un enfoque <strong>sistemático</strong>, <strong>disciplinado</strong> y <strong>cuantificable</strong> al desarrollo, operación y mantenimiento del software.
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-white border-2 border-blue-100 rounded-xl p-4 shadow-sm">
              <div class="text-3xl mb-2">🧭</div>
              <h4 class="font-bold text-blue-900">Sistemático</h4>
              <p class="text-sm text-gray-600 mt-1">Sigue un <strong>proceso</strong>: no se improvisa.</p>
            </div>
            <div class="bg-white border-2 border-indigo-100 rounded-xl p-4 shadow-sm">
              <div class="text-3xl mb-2">📐</div>
              <h4 class="font-bold text-indigo-900">Disciplinado</h4>
              <p class="text-sm text-gray-600 mt-1">Usa <strong>métodos y estándares</strong> (IEEE / ISO).</p>
            </div>
            <div class="bg-white border-2 border-violet-100 rounded-xl p-4 shadow-sm">
              <div class="text-3xl mb-2">📊</div>
              <h4 class="font-bold text-violet-900">Cuantificable</h4>
              <p class="text-sm text-gray-600 mt-1">Se <strong>mide</strong>: métricas, calidad, esfuerzo.</p>
            </div>
          </div>

          <p class="text-center text-xs text-gray-500">Fuente: SWEBOK v4 · Pressman · Sommerville</p>
        </div>
      `
    },
    {
      id: 'sis1-3',
      title: 'Las capas de la Ingeniería de Software',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-600">Pressman lo representa como una <strong>pirámide de capas</strong>: sin proceso, los métodos y herramientas no sostienen nada.</p>

          <div class="flex justify-center bg-white p-6 rounded-xl border shadow-sm">
            <div class="mermaid">
              graph TB
                H["Herramientas<br/>IDEs · Git · CI/CD"] --> M["Métodos<br/>Análisis · Diseño · Pruebas"]
                M --> P["Proceso<br/>El fundamento de la IS"]
                P --> Q["Enfoque de calidad<br/>La base de todo"]
                style Q fill:#0f172a,stroke:#0f172a,color:#fff
                style P fill:#1d4ed8,stroke:#1e3a8a,color:#fff
                style M fill:#dbeafe,stroke:#3b82f6
                style H fill:#eff6ff,stroke:#93c5fd
            </div>
          </div>

          <div class="bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm text-slate-700">
            💡 <strong>Sin proceso</strong>, las herramientas solo aceleran el caos.
          </div>
        </div>
      `
    },
    {
      id: 'sis1-4',
      title: 'Programa vs. Producto de software',
      contentHtml: `
        <div class="space-y-6">
          <div class="grid md:grid-cols-2 gap-5">
            <div class="bg-amber-50 border-2 border-amber-200 rounded-xl p-5">
              <div class="flex items-center gap-2 mb-3"><span class="text-3xl">📄</span><h4 class="font-bold text-amber-900 text-lg">Programa</h4></div>
              <ul class="list-disc list-inside text-sm text-amber-900 space-y-2">
                <li>Conjunto de instrucciones para una tarea</li>
                <li>Alcance limitado</li>
                <li>Foco en <em>codificar</em></li>
                <li>Poca o nula documentación</li>
              </ul>
            </div>
            <div class="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-5">
              <div class="flex items-center gap-2 mb-3"><span class="text-3xl">📦</span><h4 class="font-bold text-emerald-900 text-lg">Producto de software</h4></div>
              <ul class="list-disc list-inside text-sm text-emerald-900 space-y-2">
                <li>Programa + documentación + datos y procedimientos</li>
                <li>Resuelve problemas reales para varios usuarios</li>
                <li>Ciclo completo: planificar → diseñar → probar → mantener</li>
                <li>Documentación detallada</li>
              </ul>
            </div>
          </div>

          <div class="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-900">
            🤔 <strong>Para discutir:</strong> una app de notas para estudiantes, ¿es programa o producto? ¿Por qué?
          </div>
        </div>
      `
    },
    {
      id: 'sis1-5',
      title: 'El doble rol del software',
      contentHtml: `
        <div class="space-y-6">
          <div class="grid md:grid-cols-2 gap-5">
            <div class="bg-white border rounded-xl p-5 shadow-sm">
              <div class="text-4xl mb-2">🎁</div>
              <h4 class="font-bold text-slate-800 text-lg">Producto</h4>
              <p class="text-sm text-gray-600 mt-1">Se entrega al usuario: una app de facturación, un sistema de notas, una app bancaria.</p>
            </div>
            <div class="bg-white border rounded-xl p-5 shadow-sm">
              <div class="text-4xl mb-2">🚚</div>
              <h4 class="font-bold text-slate-800 text-lg">Vehículo</h4>
              <p class="text-sm text-gray-600 mt-1">Sirve para <strong>construir u operar</strong> otros sistemas: un sistema operativo, un compilador, un framework.</p>
            </div>
          </div>

          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 text-sm">
            El mismo software puede ser las dos cosas. Un <strong>framework web</strong> es un producto… y a la vez el vehículo con el que se construyen miles de aplicaciones.
          </div>
        </div>
      `
    },
    {
      id: 'sis1-6',
      title: 'Características del software',
      contentHtml: `
        <div class="space-y-5">
          <p class="text-gray-600">El software no se comporta como el hardware. Estas cuatro características explican por qué la IS es distinta de la ingeniería clásica.</p>

          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <h4 class="font-bold text-blue-900">👻 Intangible</h4>
              <p class="text-sm text-blue-800 mt-1">No se toca; se manifiesta al ejecutarse.</p>
            </div>
            <div class="bg-rose-50 border border-rose-200 rounded-xl p-4">
              <h4 class="font-bold text-rose-900">🕰️ No se desgasta… pero se deteriora</h4>
              <p class="text-sm text-rose-800 mt-1">No tiene piezas que rocen, pero cada cambio acumula complejidad.</p>
            </div>
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <h4 class="font-bold text-amber-900">✂️ Hecho a medida</h4>
              <p class="text-sm text-amber-800 mt-1">Cada proyecto es distinto; no hay línea de ensamblaje.</p>
            </div>
            <div class="bg-violet-50 border border-violet-200 rounded-xl p-4">
              <h4 class="font-bold text-violet-900">🧩 Complejo</h4>
              <p class="text-sm text-violet-800 mt-1">Muchas partes interdependientes que interactúan.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'sis1-7',
      title: 'La crisis del software (1968)',
      contentHtml: `
        <div class="space-y-6">
          <div class="flex items-center gap-4 bg-slate-900 text-white p-4 rounded-xl">
            <div class="text-4xl">🚨</div>
            <div>
              <h4 class="font-bold text-lg">Conferencia de la OTAN — Garmisch, 1968</h4>
              <p class="text-sm">Proyectos que se retrasaban, excedían el presupuesto o simplemente fallaban.</p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white border rounded-xl p-4 shadow-sm">
              <h5 class="font-bold text-slate-700 mb-2">Síntomas</h5>
              <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Retrasos y sobrecostos</li>
                <li>Baja calidad</li>
                <li>Sistemas que no cumplen lo esperado</li>
              </ul>
            </div>
            <div class="bg-white border rounded-xl p-4 shadow-sm">
              <h5 class="font-bold text-slate-700 mb-2">Causas típicas</h5>
              <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Complejidad creciente</li>
                <li>Requisitos cambiantes o mal entendidos</li>
                <li>Comunicación deficiente cliente–equipo</li>
                <li>Falta de procesos, métodos y métricas</li>
              </ul>
            </div>
          </div>

          <p class="text-center text-sm text-gray-500">De esta crisis nace la Ingeniería de Software como disciplina.</p>
        </div>
      `
    },
    {
      id: 'sis1-8',
      title: 'Casos reales que cambiaron la industria',
      contentHtml: `
        <div class="space-y-6">
          <div class="grid md:grid-cols-2 gap-5">
            <div class="bg-red-50 border-2 border-red-200 rounded-xl p-5">
              <div class="flex items-center gap-3 mb-2"><span class="text-3xl">☢️</span><h4 class="font-bold text-red-900">Therac-25 (1985–87)</h4></div>
              <p class="text-sm text-red-800">Máquina de radioterapia. Se documentaron <strong>6 accidentes</strong> entre 1985 y 1987, varios de ellos fatales, por fallos de software y diseño.</p>
              <p class="text-xs text-red-700 mt-2 font-semibold">Lección: el software crítico exige verificación rigurosa.</p>
            </div>
            <div class="bg-orange-50 border-2 border-orange-200 rounded-xl p-5">
              <div class="flex items-center gap-3 mb-2"><span class="text-3xl">🚀</span><h4 class="font-bold text-orange-900">Ariane 5 (1996)</h4></div>
              <p class="text-sm text-orange-800">El cohete se destruyó 37 s después del lanzamiento por el desbordamiento de una variable de 64 a 16 bits reutilizada de Ariane 4.</p>
              <p class="text-xs text-orange-700 mt-2 font-semibold">Lección: reutilizar sin analizar el contexto es riesgoso.</p>
            </div>
          </div>
          <div class="bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm text-slate-700">
            🧯 Ejemplos actuales: caídas de servicios en producción y errores de cálculo en sistemas financieros.
          </div>
        </div>
      `
    },
    {
      id: 'sis1-9',
      title: 'Objetivo general y atributos de calidad',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-xl">
            <p class="text-sm uppercase tracking-widest font-bold">Objetivo general</p>
            <p class="text-lg font-semibold">Producir software de <strong>calidad</strong>, a <strong>tiempo</strong> y dentro del <strong>presupuesto</strong>.</p>
          </div>

          <p class="text-xs font-bold text-slate-500">Atributos de calidad — <span class="font-normal">modelo clásico de McCall/Pressman</span></p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="bg-white border rounded-xl p-3 text-center shadow-sm"><div class="text-2xl">🔧</div><p class="text-xs font-bold mt-1">Mantenibilidad</p></div>
            <div class="bg-white border rounded-xl p-3 text-center shadow-sm"><div class="text-2xl">⚡</div><p class="text-xs font-bold mt-1">Eficiencia</p></div>
            <div class="bg-white border rounded-xl p-3 text-center shadow-sm"><div class="text-2xl">🛡️</div><p class="text-xs font-bold mt-1">Confiabilidad</p></div>
            <div class="bg-white border rounded-xl p-3 text-center shadow-sm"><div class="text-2xl">✅</div><p class="text-xs font-bold mt-1">Corrección</p></div>
            <div class="bg-white border rounded-xl p-3 text-center shadow-sm"><div class="text-2xl">♻️</div><p class="text-xs font-bold mt-1">Reusabilidad</p></div>
            <div class="bg-white border rounded-xl p-3 text-center shadow-sm"><div class="text-2xl">🧪</div><p class="text-xs font-bold mt-1">Testeabilidad</p></div>
            <div class="bg-white border rounded-xl p-3 text-center shadow-sm"><div class="text-2xl">🔄</div><p class="text-xs font-bold mt-1">Portabilidad</p></div>
            <div class="bg-white border rounded-xl p-3 text-center shadow-sm"><div class="text-2xl">🧑‍💻</div><p class="text-xs font-bold mt-1">Usabilidad</p></div>
          </div>

          <div class="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-600">
            📏 La referencia moderna es <strong>ISO/IEC 25010:2011</strong>, que agrupa la calidad en 8 características (idoneidad funcional, eficiencia, compatibilidad, usabilidad, fiabilidad, seguridad, mantenibilidad y portabilidad); la edición 2023 define 9. Varios de los atributos de arriba son subcaracterísticas suyas.
          </div>

          <div class="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-900">
            💬 ¿Qué atributos priorizarías en el <strong>sistema de notas de la universidad</strong> vs. un <strong>videojuego</strong>?
          </div>
        </div>
      `
    },
    {
      id: 'sis1-10',
      title: 'Campo de aplicación',
      contentHtml: `
        <div class="space-y-5">
          <div class="grid md:grid-cols-2 gap-3">
            <div class="bg-slate-50 border rounded-lg p-3"><span class="font-bold text-slate-800">🏢 Empresarial</span><p class="text-xs text-gray-600">ERP, CRM, facturación, nómina</p></div>
            <div class="bg-slate-50 border rounded-lg p-3"><span class="font-bold text-slate-800">🌐 Web y móvil</span><p class="text-xs text-gray-600">Tiendas en línea, banca, redes sociales</p></div>
            <div class="bg-slate-50 border rounded-lg p-3"><span class="font-bold text-slate-800">🔌 Embebido</span><p class="text-xs text-gray-600">Electrodomésticos, autos, equipos médicos</p></div>
            <div class="bg-slate-50 border rounded-lg p-3"><span class="font-bold text-slate-800">🔬 Científico / ingeniería</span><p class="text-xs text-gray-600">Simulación, cálculo estructural, CAD</p></div>
            <div class="bg-slate-50 border rounded-lg p-3"><span class="font-bold text-slate-800">🤖 Datos e IA</span><p class="text-xs text-gray-600">Analítica, recomendadores, visión</p></div>
            <div class="bg-slate-50 border rounded-lg p-3"><span class="font-bold text-slate-800">🎮 Videojuegos</span><p class="text-xs text-gray-600">Motores, juegos móviles y PC</p></div>
          </div>

          <div class="bg-indigo-50 border border-indigo-200 rounded-lg p-3 text-sm text-indigo-900">
            🔗 En Ingeniería de Sistemas, el software es el <strong>puente entre la organización y la tecnología</strong>: se combina con bases de datos, redes y arquitectura.
          </div>
        </div>
      `
    },
    {
      id: 'sis1-11-taller',
      title: 'Taller práctico en clase',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-blue-600 text-white rounded-xl p-4 flex justify-between items-center">
            <div><h4 class="font-bold text-lg">🛠️ Taller: del concepto al caso</h4><p class="font-bold text-xs">En parejas · 30–35 min</p></div>
            <span class="text-3xl">🧩</span>
          </div>
          <ol class="space-y-2 text-sm">
            <li class="bg-white border rounded-lg p-3 shadow-sm"><strong>1.</strong> Clasifiquen 6 productos de software por <strong>campo de aplicación</strong> (empresarial, web/móvil, embebido, científico, datos/IA, videojuegos).</li>
            <li class="bg-white border rounded-lg p-3 shadow-sm"><strong>2.</strong> Elijan un <strong>caso local</strong> (SAIA, farmacia, banca) y prioricen <strong>3 atributos de calidad</strong>, justificando por qué.</li>
            <li class="bg-white border rounded-lg p-3 shadow-sm"><strong>3.</strong> Identifiquen un atributo en <strong>conflicto</strong> con otro (p. ej. seguridad vs. usabilidad) y cómo lo resolverían.</li>
            <li class="bg-amber-50 border border-amber-200 rounded-lg p-3 shadow-sm"><strong>Reto:</strong> ¿qué atributo elegirían para un sistema de <strong>historia clínica</strong> y por qué?</li>
          </ol>
          <p class="text-xs text-gray-500 text-center">🔁 Puesta en común rápida (2 min por pareja).</p>
        </div>
      `
    },
    {
      id: 'sis1-11',
      title: 'Discusión guiada',
      contentHtml: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-slate-900">Para pensar y discutir</h3>
          <div class="space-y-3">
            <div class="flex gap-3 bg-white border-l-4 border-blue-500 rounded-lg p-4 shadow-sm"><span class="font-bold text-blue-600">1</span><p class="text-sm text-gray-700">¿Cuál es la diferencia entre <strong>programar</strong> y <strong>hacer ingeniería de software</strong>?</p></div>
            <div class="flex gap-3 bg-white border-l-4 border-indigo-500 rounded-lg p-4 shadow-sm"><span class="font-bold text-indigo-600">2</span><p class="text-sm text-gray-700">¿Por qué "calidad" no es lo mismo que "que funcione"?</p></div>
            <div class="flex gap-3 bg-white border-l-4 border-violet-500 rounded-lg p-4 shadow-sm"><span class="font-bold text-violet-600">3</span><p class="text-sm text-gray-700">¿Qué caso de fallo de software recuerdan y qué lo causó?</p></div>
            <div class="flex gap-3 bg-white border-l-4 border-fuchsia-500 rounded-lg p-4 shadow-sm"><span class="font-bold text-fuchsia-600">4</span><p class="text-sm text-gray-700">¿Dónde ven software en su vida diaria que quizá no reconocían como tal?</p></div>
          </div>
        </div>
      `
    },
    {
      id: 'sis1-12',
      title: 'Preguntas de comprobación',
      contentHtml: `
        <div class="space-y-4">
          <h3 class="text-2xl font-bold text-slate-900">Comprobación</h3>
          <ol class="space-y-3">
            <li class="bg-slate-50 border rounded-lg p-3 text-sm"><strong>1.</strong> Define ingeniería de software.</li>
            <li class="bg-slate-50 border rounded-lg p-3 text-sm"><strong>2.</strong> Menciona 3 diferencias entre programa y producto.</li>
            <li class="bg-slate-50 border rounded-lg p-3 text-sm"><strong>3.</strong> ¿Qué fue la crisis del software y una de sus causas?</li>
            <li class="bg-slate-50 border rounded-lg p-3 text-sm"><strong>4.</strong> Da 3 atributos de calidad y por qué importan.</li>
            <li class="bg-slate-50 border rounded-lg p-3 text-sm"><strong>5.</strong> Menciona 2 campos de aplicación con un ejemplo.</li>
          </ol>
        </div>
      `
    },
    {
      id: 'sis1-13',
      title: 'Tarea y próxima clase',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-blue-600 text-white rounded-xl p-5 flex items-center gap-4">
            <span class="text-4xl">📚</span>
            <div>
              <h4 class="font-bold text-lg">Tarea para la casa</h4>
              <p class="font-bold text-sm">Leer Pressman cap. 1 · traer por escrito un caso real de fallo de software (mín. 5 líneas) · 3 ejemplos de software por campo de aplicación.</p>
            </div>
          </div>
          <div class="bg-slate-50 border rounded-xl p-4">
            <h4 class="font-bold text-slate-800">Próxima sesión</h4>
            <p class="text-sm text-gray-600 mt-1">Las actividades de la IS: <strong>Proceso, Administración de Proyectos, Personas, Producto y Calidad</strong>.</p>
          </div>
        </div>
      `
    },
    {
      id: 'sis1-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full space-y-4">
          <div class="text-6xl">🙋</div>
          <h3 class="text-2xl font-bold text-slate-900">¿Dudas sobre qué es la Ingeniería de Software?</h3>
          <p class="text-gray-500">Pregunta ahora o tráelas a la próxima clase.</p>
        </div>
      `
    },
    {
      id: 'sis1-end-thanks',
      title: 'Gracias',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center space-y-6">
          <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-4xl">⚙️</div>
          <div>
            <h2 class="text-3xl font-bold text-slate-900">Fin del Módulo 1</h2>
            <p class="text-gray-600 mt-2">En la próxima clase vemos <strong>las cinco actividades de la ingeniería de software</strong>.</p>
          </div>
        </div>
      `
    }
  ]
};
