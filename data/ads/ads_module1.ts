import { Module } from '../../types';

export const ANALISIS_DISENO_MODULE_1: Module = {
  id: 'ads-mod-1',
  title: '1. Conceptos Básicos y el Rol del Analista',
  description: 'Semana 1 (jueves + viernes): conceptos de sistema, información y sistemas de información, el rol del analista de sistemas y práctica de estudio de caso (Unidad I, objetivos I.1 y I.2).',
  evaluation: '0% — Diagnóstica / formativa',
  slides: [
    {
      id: 'ads1-1',
      title: 'Análisis y Diseño de Sistemas — Bienvenida',
      contentHtml: `
        <div class="space-y-6">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center text-white text-3xl shadow-lg">🧭</div>
            <div>
              <h2 class="text-3xl font-bold text-slate-900">Análisis y Diseño de Sistemas</h2>
              <p class="text-slate-500">Ing. Luis Felipe Moreno Oropeza · Semana 1 (jueves + viernes)</p>
            </div>
          </div>

          <p class="text-gray-700 text-lg">
            Aquí no van a aprender un lenguaje más: van a aprender a <strong>pensar como analistas</strong> — a entender el problema de una organización antes de proponer la tecnología.
          </p>

          <div class="bg-slate-900 text-white rounded-xl p-4">
            <p class="text-xs uppercase tracking-widest font-bold mb-2">7 unidades</p>
            <div class="flex flex-wrap gap-2 text-xs">
              <span class="bg-white/10 px-2 py-1 rounded">I. Conceptos básicos</span>
              <span class="bg-white/10 px-2 py-1 rounded">II. Sistemas de información</span>
              <span class="bg-white/10 px-2 py-1 rounded">III. SI para decisiones</span>
              <span class="bg-white/10 px-2 py-1 rounded">IV. Metodologías</span>
              <span class="bg-white/10 px-2 py-1 rounded">V. Requerimientos / SRS</span>
              <span class="bg-white/10 px-2 py-1 rounded">VI. Análisis de datos</span>
              <span class="bg-white/10 px-2 py-1 rounded">VII. Diseño del SI</span>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-2 text-center text-xs font-mono">
            <div class="bg-emerald-50 border border-emerald-200 rounded-lg py-2 text-emerald-800">Corte I · 30%</div>
            <div class="bg-emerald-50 border border-emerald-200 rounded-lg py-2 text-emerald-800">Corte II · 30%</div>
            <div class="bg-emerald-50 border border-emerald-200 rounded-lg py-2 text-emerald-800">Corte III · 40%</div>
          </div>
        </div>
      `
    },
    {
      id: 'ads1-3',
      title: 'Diagnóstico inicial (0%)',
      contentHtml: `
        <div class="space-y-5">
          <div class="flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-xl p-3">
            <span class="text-3xl">💬</span>
            <p class="text-sm text-amber-900"><strong>Lluvia de ideas</strong> — no corregimos todavía, solo exploramos.</p>
          </div>

          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-white border rounded-lg p-3 shadow-sm">¿Qué es un <strong>sistema</strong>? Da un ejemplo fuera de la computación.</div>
            <div class="bg-white border rounded-lg p-3 shadow-sm">¿Diferencia entre <strong>dato</strong> e <strong>información</strong>?</div>
            <div class="bg-white border rounded-lg p-3 shadow-sm">¿Qué hace un <strong>analista</strong>? ¿Solo trabaja con computadoras?</div>
            <div class="bg-white border rounded-lg p-3 shadow-sm">¿Qué <strong>sistemas de información</strong> usan a diario?</div>
          </div>

          <div class="bg-slate-50 border rounded-lg p-3 text-xs text-slate-600">
            Responde y comparte: ¿qué se analiza en un análisis de sistemas? · ¿quién decide qué debe hacer el sistema? · ¿qué pasa si se construye sin entender el problema?
          </div>

          <div class="bg-blue-50 border border-blue-200 rounded-lg p-3 text-xs text-blue-900">
            ✍️ <strong>Actividad:</strong> dado el <strong>SAIA</strong>, identifica sus <strong>entradas, proceso y salidas</strong> y una <strong>retroalimentación</strong>.
          </div>
        </div>
      `
    },
    {
      id: 'ads1-4',
      title: 'Análisis vs. Diseño',
      contentHtml: `
        <div class="space-y-6">
          <div class="grid md:grid-cols-2 gap-5">
            <div class="bg-sky-50 border-2 border-sky-200 rounded-2xl p-5">
              <div class="flex items-center gap-2 mb-2"><span class="text-3xl">🔍</span><h4 class="font-bold text-sky-900 text-xl">Análisis</h4></div>
              <p class="text-sm text-sky-800 mb-3"><strong>¿Qué</strong> debe hacer el sistema?</p>
              <ul class="list-disc list-inside text-sm text-sky-900 space-y-1">
                <li>Estudiar y descomponer el sistema actual</li>
                <li>Detectar problemas y necesidades</li>
                <li>Definir requerimientos del sistema nuevo</li>
                <li>Producto: requerimientos y modelos</li>
              </ul>
            </div>
            <div class="bg-violet-50 border-2 border-violet-200 rounded-2xl p-5">
              <div class="flex items-center gap-2 mb-2"><span class="text-3xl">📐</span><h4 class="font-bold text-violet-900 text-xl">Diseño</h4></div>
              <p class="text-sm text-violet-800 mb-3"><strong>¿Cómo</strong> lo va a hacer?</p>
              <ul class="list-disc list-inside text-sm text-violet-900 space-y-1">
                <li>Planificar la solución</li>
                <li>Definir componentes, módulos e interfaces</li>
                <li>Producto: especificaciones de diseño</li>
              </ul>
            </div>
          </div>

          <div class="flex justify-center bg-white p-4 rounded-xl border shadow-sm">
            <div class="mermaid">
              graph LR
                P["Problema"] --> A["ANÁLISIS<br/>¿Qué?"] --> D["DISEÑO<br/>¿Cómo?"] --> S["Sistema"]
                style A fill:#e0f2fe,stroke:#0284c7
                style D fill:#ede9fe,stroke:#7c3aed
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'ads1-5',
      title: '¿Qué es un sistema?',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-5 rounded-2xl">
            <p class="text-xs uppercase tracking-widest font-bold mb-2">Definición</p>
            <p class="text-lg">Conjunto de <strong>componentes interdependientes</strong> que interactúan y trabajan juntos para lograr un <strong>objetivo común</strong>, dentro de un ambiente y con límites definidos.</p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-5 gap-3 text-center">
            <div class="bg-white border rounded-xl p-3 shadow-sm"><div class="text-2xl">🧩</div><p class="text-xs font-bold mt-1">Organización</p></div>
            <div class="bg-white border rounded-xl p-3 shadow-sm"><div class="text-2xl">🔗</div><p class="text-xs font-bold mt-1">Interacción</p></div>
            <div class="bg-white border rounded-xl p-3 shadow-sm"><div class="text-2xl">🪢</div><p class="text-xs font-bold mt-1">Interdependencia</p></div>
            <div class="bg-white border rounded-xl p-3 shadow-sm"><div class="text-2xl">🧲</div><p class="text-xs font-bold mt-1">Integración</p></div>
            <div class="bg-white border rounded-xl p-3 shadow-sm"><div class="text-2xl">🎯</div><p class="text-xs font-bold mt-1">Objetivo central</p></div>
          </div>

          <p class="text-center text-sm text-gray-500">Todo sistema existe por un objetivo. Si no produce valor hacia ese objetivo, sobra.</p>
        </div>
      `
    },
    {
      id: 'ads1-6',
      title: 'Elementos de un sistema',
      contentHtml: `
        <div class="space-y-5">
          <div class="flex justify-center bg-white p-4 rounded-xl border shadow-sm">
            <div class="mermaid">
              graph LR
                E["Entrada<br/>tarjeta + clave"] --> P["Proceso<br/>validar y debitar"]
                P --> S["Salida<br/>efectivo + comprobante"]
                S --> R["Retroalimentación<br/>aviso de error"]
                R --> P
                C["Control<br/>límite diario"] --> P
                style E fill:#ecfdf5,stroke:#10b981
                style P fill:#eff6ff,stroke:#3b82f6
                style S fill:#fef3c7,stroke:#f59e0b
                style R fill:#fee2e2,stroke:#ef4444
                style C fill:#f3e8ff,stroke:#a855f7
            </div>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
            <div class="bg-emerald-50 border border-emerald-200 rounded p-2"><strong>Entrada:</strong> recursos que ingresan</div>
            <div class="bg-blue-50 border border-blue-200 rounded p-2"><strong>Proceso:</strong> transformación</div>
            <div class="bg-amber-50 border border-amber-200 rounded p-2"><strong>Salida:</strong> resultado</div>
            <div class="bg-rose-50 border border-rose-200 rounded p-2"><strong>Retroalimentación:</strong> corrige</div>
            <div class="bg-purple-50 border border-purple-200 rounded p-2"><strong>Control:</strong> reglas</div>
            <div class="bg-slate-50 border border-slate-200 rounded p-2"><strong>Frontera / ambiente:</strong> límites y entorno</div>
          </div>
        </div>
      `
    },
    {
      id: 'ads1-7',
      title: 'Dato → Información → Conocimiento',
      contentHtml: `
        <div class="space-y-5">
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-slate-100 border rounded-xl p-4 text-center">
              <div class="text-3xl mb-1">🔢</div>
              <h4 class="font-bold text-slate-800">Dato</h4>
              <p class="text-xs text-gray-600 mt-1">Hecho aislado, sin contexto.</p>
              <p class="font-mono text-lg mt-2 text-slate-700">15</p>
            </div>
            <div class="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-4 text-center">
              <div class="text-3xl mb-1">💡</div>
              <h4 class="font-bold text-emerald-900">Información</h4>
              <p class="text-xs text-emerald-800 mt-1">Dato procesado, con significado y valor.</p>
              <p class="text-sm mt-2 text-emerald-900">"15 estudiantes aprobaron"</p>
            </div>
            <div class="bg-indigo-50 border rounded-xl p-4 text-center">
              <div class="text-3xl mb-1">🧠</div>
              <h4 class="font-bold text-indigo-900">Conocimiento</h4>
              <p class="text-xs text-indigo-800 mt-1">Información interpretada y aplicada a una decisión.</p>
              <p class="text-sm mt-2 text-indigo-900">"Reforzar el tema X"</p>
            </div>
          </div>

          <div class="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-900 text-center">
            👉 La información <strong>reduce la incertidumbre</strong> para quien decide.
          </div>
        </div>
      `
    },
    {
      id: 'ads1-8',
      title: 'Sistemas de Información y sus 5 recursos',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-gradient-to-r from-emerald-700 to-teal-700 text-white p-4 rounded-xl">
            <p class="text-sm">Un <strong>Sistema de Información</strong> captura, procesa, almacena y distribuye información para apoyar la operación, la decisión y el control de una organización.</p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-5 gap-3 text-center">
            <div class="bg-white border rounded-xl p-3 shadow-sm"><div class="text-2xl">👥</div><p class="text-xs font-bold mt-1">Personas</p><p class="text-xs text-slate-500">analista, usuario</p></div>
            <div class="bg-white border rounded-xl p-3 shadow-sm"><div class="text-2xl">🖥️</div><p class="text-xs font-bold mt-1">Hardware</p><p class="text-xs text-slate-500">servidores, equipos</p></div>
            <div class="bg-white border rounded-xl p-3 shadow-sm"><div class="text-2xl">💾</div><p class="text-xs font-bold mt-1">Software</p><p class="text-xs text-slate-500">SAIA, apps</p></div>
            <div class="bg-white border rounded-xl p-3 shadow-sm"><div class="text-2xl">🗄️</div><p class="text-xs font-bold mt-1">Datos</p><p class="text-xs text-slate-500">notas, saldos</p></div>
            <div class="bg-white border rounded-xl p-3 shadow-sm"><div class="text-2xl">🌐</div><p class="text-xs font-bold mt-1">Redes</p><p class="text-xs text-slate-500">internet, LAN</p></div>
          </div>

          <div class="bg-slate-50 border rounded-lg p-3 text-sm text-slate-700 text-center">
            🤔 ¿El <strong>SAIA del PSM</strong> es un sistema o un sistema de información? ¿Por qué?
          </div>
        </div>
      `
    },
    {
      id: 'ads1-9',
      title: 'El analista: agente de cambio',
      contentHtml: `
        <div class="space-y-6">
          <div class="flex items-center gap-4 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
            <span class="text-4xl">🧑‍💼</span>
            <p class="text-emerald-900 text-sm">El analista es un <strong>agente de cambio</strong>: estudia la organización, detecta oportunidades de mejora y propone soluciones <strong>viables</strong> (técnica, económica y operativamente).</p>
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white border rounded-xl p-4 shadow-sm">
              <h5 class="font-bold text-slate-700 mb-2">Lo que NO es</h5>
              <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Alguien que solo programa</li>
                <li>Alguien que solo "arregla computadoras"</li>
                <li>Alguien que decide sin escuchar al usuario</li>
              </ul>
            </div>
            <div class="bg-white border rounded-xl p-4 shadow-sm">
              <h5 class="font-bold text-slate-700 mb-2">Lo que SÍ hace</h5>
              <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Entiende el negocio y a las personas</li>
                <li>Documenta y modela el sistema</li>
                <li>Comunica entre usuarios, desarrollo y gerencia</li>
              </ul>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'ads1-10',
      title: 'Funciones del analista',
      contentHtml: `
        <div class="space-y-4">
          <div class="space-y-3">
            <div class="flex gap-3 bg-white border-l-4 border-emerald-500 rounded-lg p-3 shadow-sm"><span class="font-bold text-emerald-700">1</span><div><p class="font-semibold text-slate-800 text-sm">Investigación preliminar y viabilidad</p><p class="text-xs text-gray-500">¿Vale la pena el proyecto? (técnica, económica, operativa, legal)</p></div></div>
            <div class="flex gap-3 bg-white border-l-4 border-teal-500 rounded-lg p-3 shadow-sm"><span class="font-bold text-teal-700">2</span><div><p class="font-semibold text-slate-800 text-sm">Elicitación y documentación de requerimientos</p><p class="text-xs text-gray-500">Entrevistas, observación, revisión documental</p></div></div>
            <div class="flex gap-3 bg-white border-l-4 border-cyan-500 rounded-lg p-3 shadow-sm"><span class="font-bold text-cyan-700">3</span><div><p class="font-semibold text-slate-800 text-sm">Modelado del sistema</p><p class="text-xs text-gray-500">DFD, diccionario de datos, UML (unidades VI y VII)</p></div></div>
            <div class="flex gap-3 bg-white border-l-4 border-sky-500 rounded-lg p-3 shadow-sm"><span class="font-bold text-sky-700">4</span><div><p class="font-semibold text-slate-800 text-sm">Comunicación con usuarios, desarrollo y gerencia</p><p class="text-xs text-gray-500">Gestión de expectativas</p></div></div>
            <div class="flex gap-3 bg-white border-l-4 border-blue-500 rounded-lg p-3 shadow-sm"><span class="font-bold text-blue-600">5</span><div><p class="font-semibold text-slate-800 text-sm">Coordinación del equipo y del proyecto</p><p class="text-xs text-gray-500">Roles, tiempos y entregables</p></div></div>
          </div>
        </div>
      `
    },
    {
      id: 'ads1-11',
      title: 'Habilidades del analista',
      contentHtml: `
        <div class="space-y-5">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-blue-50 border border-blue-200 rounded-xl p-4"><h4 class="font-bold text-blue-900">🛠️ Técnicas</h4><p class="text-sm text-blue-800 mt-1">Modelado, bases de datos, herramientas TIC.</p></div>
            <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-4"><h4 class="font-bold text-indigo-900">🧠 Analíticas</h4><p class="text-sm text-indigo-800 mt-1">Pensamiento sistémico, resolución de problemas.</p></div>
            <div class="bg-violet-50 border border-violet-200 rounded-xl p-4"><h4 class="font-bold text-violet-900">🗣️ Comunicación</h4><p class="text-sm text-violet-800 mt-1">Escuchar, entrevistar, redactar, presentar.</p></div>
            <div class="bg-fuchsia-50 border border-fuchsia-200 rounded-xl p-4"><h4 class="font-bold text-fuchsia-900">🤝 Interpersonales y ética</h4><p class="text-sm text-fuchsia-800 mt-1">Empatía, trabajo en equipo, confidencialidad.</p></div>
          </div>

          <div class="bg-white border-l-4 border-emerald-500 rounded-lg p-3 text-sm text-gray-700 shadow-sm">
            💬 <strong>Discusión:</strong> ¿por qué la comunicación pesa tanto como la técnica?
          </div>
        </div>
      `
    },
    {
      id: 'ads1-11-fin-dia1',
      title: 'Fin de la Sesión 1 — Gracias',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center space-y-6">
          <div class="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 text-4xl">👋</div>
          <div>
            <h2 class="text-3xl font-bold text-slate-900">¡Gracias! Fin de la sesión de hoy (jueves)</h2>
            <p class="text-gray-600 mt-2">Nos vemos <strong>mañana viernes</strong> en el mismo horario y aula.</p>
          </div>
          <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4 max-w-xl text-left">
            <p class="text-xs font-bold text-emerald-900 uppercase tracking-widest mb-2">Lo que haremos el viernes</p>
            <ul class="text-sm text-emerald-900 space-y-1 list-disc list-inside">
              <li><strong>Estudio de caso</strong> en equipos con roles (coordinador, secretario, vocero y, si son 4, verificador).</li>
              <li>Análisis de un sistema de información real con la <strong>guía de 7 puntos</strong>.</li>
              <li>Plenaria y <strong>coevaluación</strong> entre equipos.</li>
            </ul>
            <p class="text-xs text-emerald-800 mt-2">Trae tu caso (tarea) para trabajarlo en clase.</p>
          </div>
        </div>
      `
    },
    {
      id: 'ads1-12',
      title: 'Sesión 2 (viernes): Activación y práctica',
      contentHtml: `
        <div class="space-y-6">
          <div class="flex items-center gap-3">
            <span class="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">SESIÓN 2 · VIERNES</span>
            <span class="text-sm text-gray-500">Práctica — estudio de caso</span>
          </div>

          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <h4 class="font-bold text-amber-900 mb-2">⚡ Repaso relámpago</h4>
            <ol class="list-decimal list-inside text-sm text-amber-900 space-y-1">
              <li>¿Qué diferencia hay entre análisis y diseño?</li>
              <li>Menciona al menos 4 elementos de un sistema.</li>
              <li>¿Por qué el analista es un agente de cambio?</li>
            </ol>
          </div>

          <div class="grid md:grid-cols-4 gap-3 text-center text-xs">
            <div class="bg-slate-100 border rounded-lg p-3"><div class="text-2xl">🧑‍✈️</div><p class="font-bold mt-1">Coordinador</p><p class="text-gray-500">Modera y controla el tiempo</p></div>
            <div class="bg-slate-100 border rounded-lg p-3"><div class="text-2xl">✍️</div><p class="font-bold mt-1">Secretario</p><p class="text-gray-500">Escribe los 4 campos</p></div>
            <div class="bg-slate-100 border rounded-lg p-3"><div class="text-2xl">📣</div><p class="font-bold mt-1">Vocero</p><p class="text-gray-500">Expone y responde</p></div>
            <div class="bg-slate-100 border rounded-lg p-3"><div class="text-2xl">🔍</div><p class="font-bold mt-1">Verificador</p><p class="text-gray-500">Revisa y cuestiona</p></div>
          </div>
        </div>
      `
    },
    {
      id: 'ads1-13',
      title: 'Estudio de caso: 4 campos',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white border rounded-xl p-4 shadow-sm">
            <h4 class="font-bold text-slate-800 mb-1">📋 Guía del caso — 4 campos</h4>
            <p class="text-xs text-gray-500 mb-3">Equipos de 3–4 con roles. El <strong>secretario</strong> escribe en el cuaderno (máx. 1 página). Sin impresión.</p>
            <ol class="list-decimal list-inside text-sm text-gray-700 space-y-2">
              <li><strong>Objetivo</strong> del sistema (una frase).</li>
              <li><strong>Entradas → proceso → salidas</strong>.</li>
              <li><strong>Un control y una retroalimentación</strong>.</li>
              <li><strong>Qué información produce y quién decide</strong> con ella.</li>
            </ol>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-900">
            ➕ <strong>Extra (si terminan antes):</strong> ¿dónde está la <strong>frontera</strong> del sistema y qué <strong>dos mejoras</strong> harían?
          </div>
          <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-xs text-emerald-900">
            🧭 Si el equipo se atasca: empezar por el <strong>objetivo</strong>. En plenaria, el vocero responde además: <strong>¿qué haría el analista?</strong>
          </div>
        </div>
      `
    },
    {
      id: 'ads1-14',
      title: 'Casos propuestos',
      contentHtml: `
        <div class="space-y-4">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white border rounded-xl p-4 shadow-sm"><div class="text-2xl">🎓</div><h4 class="font-bold text-slate-800 mt-1">A. Universidad — inscripción y control de estudios</h4><p class="text-xs text-gray-500">El estudiante se inscribe y entrega recaudos; se le cargan materias; al cerrar el período se generan notas y constancias.</p></div>
            <div class="bg-white border rounded-xl p-4 shadow-sm"><div class="text-2xl">💊</div><h4 class="font-bold text-slate-800 mt-1">B. Farmacia de la zona</h4><p class="text-xs text-gray-500">Cada venta descuenta del inventario; al bajar del mínimo hay que reponer; algunas ventas exigen receta.</p></div>
            <div class="bg-white border rounded-xl p-4 shadow-sm"><div class="text-2xl">🏥</div><h4 class="font-bold text-slate-800 mt-1">C. Clínica — citas y pacientes</h4><p class="text-xs text-gray-500">El paciente pide cita; se agenda si hay cupo; al llegar se registra la consulta y se emite el récipe; si cancela, se reprograma.</p></div>
            <div class="bg-white border rounded-xl p-4 shadow-sm"><div class="text-2xl">🔧</div><h4 class="font-bold text-slate-800 mt-1">D. Taller mecánico</h4><p class="text-xs text-gray-500">El cliente trae el vehículo; se diagnostica y se presupuesta; si aprueba, se repara con repuestos; al entregar se cobra y se registra.</p></div>
          </div>

          <div class="bg-slate-50 border rounded-lg p-3 text-xs text-slate-600">
            🎬 El docente presenta la <strong>escena</strong> (30–40 s) y <strong>asigna</strong> un caso por equipo · ⏱️ 35 min · 🗣️ plenaria 2–3 min (vocero) + <strong>coevaluación</strong>.
          </div>
        </div>
      `
    },
    {
      id: 'ads1-14b-coevaluacion',
      title: 'Ficha de coevaluación',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-teal-700 text-white rounded-xl p-4 flex justify-between items-center">
            <div><h4 class="font-bold text-lg">🤝 Coevaluación entre equipos</h4><p class="font-bold text-xs">Cada equipo observa a otro y devuelve 3 criterios</p></div>
            <span class="text-3xl">📝</span>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border-collapse">
              <thead><tr class="bg-slate-100 text-slate-700"><th class="p-2 text-left border">Criterio</th><th class="p-2 text-left border">Pregunta guía</th></tr></thead>
              <tbody class="text-gray-600">
                <tr><td class="p-2 border font-semibold">Aporte</td><td class="p-2 border">¿Qué me aportó su análisis?</td></tr>
                <tr class="bg-slate-50"><td class="p-2 border font-semibold">Claridad</td><td class="p-2 border">¿Se entendió la exposición del vocero?</td></tr>
                <tr><td class="p-2 border font-semibold">Completitud</td><td class="p-2 border">¿Qué le faltó cubrir de la guía?</td></tr>
              </tbody>
            </table>
          </div>
          <div class="bg-teal-50 border border-teal-200 rounded-lg p-3 text-xs text-teal-900">
            ✍️ Una <strong>observación constructiva</strong> por equipo + una <strong>sugerencia</strong>. Formativa, no califica.
          </div>
        </div>
      `
    },
    {
      id: 'ads1-15',
      title: 'Cierre y metacognición',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-4 rounded-xl">
            <p class="text-sm">Todo sistema tiene un <strong>objetivo</strong>; el SI produce <strong>información</strong> para decidir; el <strong>analista</strong> la hace útil.</p>
          </div>

          <div class="bg-white border rounded-xl p-4 shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">🪞 Autoevaluación</h4>
            <ol class="list-decimal list-inside text-sm text-gray-600 space-y-1">
              <li>¿Qué aprendí?</li>
              <li>¿Qué me costó?</li>
              <li>¿Cómo lo aplicaré?</li>
            </ol>
          </div>

          <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-sm text-emerald-900">
            📚 <strong>Tarea:</strong> completar el análisis del caso y traer un ejemplo de <strong>retroalimentación</strong> en un sistema real. <br/>
            ⏭️ <strong>Próxima semana (I.3–I.4):</strong> objetivos del análisis, identificación de necesidades y <strong>estudio de viabilidad</strong> (económica, técnica, operativa y legal).
          </div>
        </div>
      `
    },
    {
      id: 'ads1-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full space-y-4">
          <div class="text-6xl">🤔</div>
          <h3 class="text-2xl font-bold text-slate-900">¿Dudas sobre sistemas e información?</h3>
          <p class="text-gray-500">Sistema, dato vs. información, rol del analista…</p>
        </div>
      `
    },
    {
      id: 'ads1-end-thanks',
      title: 'Gracias',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center space-y-5">
          <div class="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 text-4xl">🧭</div>
          <div>
            <h2 class="text-3xl font-bold text-slate-900">¡Gracias! Fin de la semana 1</h2>
            <p class="text-gray-600 mt-2">Próxima semana: <strong>objetivos del análisis y estudio de viabilidad</strong>.</p>
          </div>
          <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4 max-w-xl text-left">
            <p class="text-xs font-bold text-emerald-900 uppercase tracking-widest mb-2">Tarea / para repasar</p>
            <ul class="text-sm text-emerald-900 space-y-1 list-disc list-inside">
              <li>Completar el análisis del caso (si quedó incompleto).</li>
              <li>Traer un ejemplo de <strong>retroalimentación</strong> en un sistema real.</li>
              <li>Repasar: sistema, dato/información y rol del analista.</li>
            </ul>
          </div>
        </div>
      `
    }
  ]
};
