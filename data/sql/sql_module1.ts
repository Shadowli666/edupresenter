import { Module } from '../../types';

export const SQL_ELECTIVE_MODULE_1: Module = {
  id: 'sql-mod-1',
  title: '1. Introducción a SQL y Fundamentos',
  description: 'Bases de datos y SGBD, modelo relacional con integridad de entidad y referencial, historia y estándar de SQL, SQL declarativo, subconjuntos (DDL, DML, DQL, DCL, TCL), tipos de datos, NULL, orden lógico de ejecución y la primera consulta (SELECT, FROM, WHERE, ORDER BY). Unidad I, objetivo I.1.',
  evaluation: '0% — Diagnóstica',
  slides: [
    {
      id: 'sql1-1',
      title: 'Electiva II (SQL) — Bienvenida',
      contentHtml: `
        <div class="space-y-6">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-3xl shadow-lg">🗄️</div>
            <div>
              <h2 class="text-3xl font-bold text-slate-900">Electiva II — Programación en SQL</h2>
              <p class="text-slate-500">Ing. Luis Felipe Moreno Oropeza · Jueves 14:30–16:45 · Aula A-01</p>
            </div>
          </div>

          <p class="text-gray-700 text-lg">
            SQL no es un lenguaje más: es <strong>el idioma con el que se habla con los datos</strong>. Casi todo sistema real —banca en línea, comercio electrónico, farmacia— guarda y consulta su información en una base de datos relacional.
          </p>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-3 text-center"><div class="text-2xl">📘</div><p class="text-xs font-bold text-indigo-900 mt-1">I. Introducción y fundamentos</p></div>
            <div class="bg-blue-50 border border-blue-200 rounded-xl p-3 text-center"><div class="text-2xl">✏️</div><p class="text-xs font-bold text-blue-900 mt-1">II. Manipulación de datos</p></div>
            <div class="bg-violet-50 border border-violet-200 rounded-xl p-3 text-center"><div class="text-2xl">🏗️</div><p class="text-xs font-bold text-violet-900 mt-1">III. Diseño y optimización</p></div>
            <div class="bg-fuchsia-50 border border-fuchsia-200 rounded-xl p-3 text-center"><div class="text-2xl">🛡️</div><p class="text-xs font-bold text-fuchsia-900 mt-1">IV. Administración y apps</p></div>
          </div>

          <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800">
            📝 <strong>Diagnóstica hoy (0%, no califica):</strong> sirve para conocerlos y ajustar el ritmo.
          </div>

          <div class="bg-indigo-50 border border-indigo-200 rounded-lg p-3 text-sm text-indigo-900">
            🎯 <strong>Alcance de hoy:</strong> fundamentos (base de datos, modelo relacional, historia) + una <strong>demostración</strong> de consulta. La práctica evaluada de <code>SELECT</code> corresponde a la <strong>semana 4</strong>.
          </div>
        </div>
      `
    },
    {
      id: 'sql1-2',
      title: 'Diagnóstico inicial (0%)',
      contentHtml: `
        <div class="space-y-5">
          <div class="flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-xl p-3">
            <span class="text-3xl">💬</span>
            <p class="text-sm text-amber-900"><strong>Lluvia de ideas</strong> — anotamos en pizarra, no corregimos todavía.</p>
          </div>

          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-white border rounded-lg p-3 shadow-sm">¿Dónde han visto una "base de datos"?</div>
            <div class="bg-white border rounded-lg p-3 shadow-sm">¿Qué es una tabla? ¿Qué guarda una fila y una columna?</div>
            <div class="bg-white border rounded-lg p-3 shadow-sm">¿Han escrito alguna vez una sentencia SQL?</div>
            <div class="bg-white border rounded-lg p-3 shadow-sm">¿Qué diferencia hay entre Excel y una base de datos?</div>
          </div>

          <div class="bg-slate-50 border rounded-lg p-3 text-xs text-slate-600">
            Interrogatorio oral: ¿qué significa "base de datos relacional"? · ¿cómo pedirías "todos los aprobados"? · ¿por qué no basta un archivo de texto?
          </div>
        </div>
      `
    },
    {
      id: 'sql1-3',
      title: '¿Qué es una base de datos?',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-slate-50 border rounded-xl p-3 text-sm text-slate-700">
            <strong>Dato</strong>: hecho en bruto (<code>17.5</code>). <strong>Información</strong>: dato con contexto y significado («el promedio del estudiante 1 es 17.5»). Una BD guarda datos para poder producir información.
          </div>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white border-2 border-indigo-100 rounded-xl p-4 shadow-sm">
              <h4 class="font-bold text-indigo-900 text-lg">🗃️ Base de datos</h4>
              <p class="text-sm text-gray-600 mt-2">Colección organizada de datos <strong>interrelacionados</strong>, almacenada de forma que pueda consultarse y actualizarse eficientemente.</p>
              <ul class="list-disc list-inside text-xs text-gray-600 mt-2 space-y-1">
                <li><strong>Persistente</strong>: sobrevive al cierre del programa.</li>
                <li><strong>Integrada y compartida</strong>: varias aplicaciones y usuarios la usan.</li>
                <li><strong>Con significado</strong>: representa una parte del mundo real.</li>
              </ul>
            </div>
            <div class="bg-white border-2 border-blue-100 rounded-xl p-4 shadow-sm">
              <h4 class="font-bold text-blue-900 text-lg">⚙️ SGBD</h4>
              <p class="text-sm text-gray-600 mt-2">Software que permite <strong>definir, almacenar, consultar, actualizar y administrar</strong> una BD, garantizando integridad, concurrencia y seguridad.</p>
              <p class="text-xs text-gray-600 mt-2">El SGBD es el <strong>intermediario</strong>: las aplicaciones no tocan los archivos, le piden las operaciones en SQL.</p>
            </div>
          </div>
          <div class="flex flex-wrap items-center gap-2 text-xs">
            <span class="font-bold text-slate-600">Motores:</span>
            <span class="bg-white border rounded-full px-3 py-1">MySQL</span>
            <span class="bg-white border rounded-full px-3 py-1">PostgreSQL</span>
            <span class="bg-white border rounded-full px-3 py-1">SQL Server</span>
            <span class="bg-white border rounded-full px-3 py-1">Oracle</span>
            <span class="bg-white border rounded-full px-3 py-1">SQLite</span>
          </div>
        </div>
      `,
      notes: 'Teoría breve (~8 min). Insistir en la diferencia BD (los datos) vs SGBD (el software que los gestiona): MySQL no es una base de datos, es un SGBD. Fuentes: Elmasri y Navathe (BD), Silberschatz (SGBD).'
    },
    {
      id: 'sql1-3b',
      title: '¿Por qué un SGBD y no archivos u hojas de cálculo?',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-sm text-slate-600">Problemas del enfoque de <strong>archivos sueltos</strong> (texto, Excel) que un SGBD resuelve:</p>
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-rose-50 border border-rose-200 rounded-lg p-3"><strong>Redundancia e inconsistencia</strong><br/><span class="text-xs text-rose-800">El mismo dato en varios archivos; se corrige en uno y queda viejo en otro.</span></div>
            <div class="bg-rose-50 border border-rose-200 rounded-lg p-3"><strong>Sin integridad</strong><br/><span class="text-xs text-rose-800">Nada impide guardar una nota de 85 o un estudiante sin cédula.</span></div>
            <div class="bg-rose-50 border border-rose-200 rounded-lg p-3"><strong>Concurrencia</strong><br/><span class="text-xs text-rose-800">Dos usuarios modifican a la vez y uno pisa al otro.</span></div>
            <div class="bg-rose-50 border border-rose-200 rounded-lg p-3"><strong>Seguridad y recuperación</strong><br/><span class="text-xs text-rose-800">Sin permisos finos; un fallo a mitad de operación deja datos a medias.</span></div>
          </div>
          <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-sm text-emerald-900">
            ✅ El SGBD aporta: <strong>restricciones de integridad</strong>, <strong>control de concurrencia</strong>, <strong>permisos</strong> (DCL), <strong>transacciones</strong> (TCL) e <strong>independencia</strong> entre los datos y las aplicaciones.
          </div>
        </div>
      `,
      notes: 'Retomar las respuestas de la lluvia de ideas sobre Excel vs base de datos (diapositiva Diagnóstico inicial). Dejar que los estudiantes den el ejemplo antes de mostrar la solución. ~5 min.'
    },
    {
      id: 'sql1-4',
      title: 'El modelo relacional',
      contentHtml: `
        <div class="space-y-5">
          <div class="flex items-center gap-4 bg-indigo-50 border border-indigo-200 rounded-xl p-4">
            <span class="text-4xl">🧮</span>
            <p class="text-indigo-900 text-sm">Propuesto por <strong>Edgar F. Codd (1970)</strong>: los datos se representan como <strong>relaciones (tablas)</strong> de filas y columnas. Es la base teórica de SQL.</p>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-sm border-collapse">
              <thead><tr class="bg-slate-100 text-slate-700"><th class="p-2 text-left border">Concepto</th><th class="p-2 text-left border">Equivalente práctico</th></tr></thead>
              <tbody class="text-gray-600">
                <tr><td class="p-2 border">Relación</td><td class="p-2 border">Tabla</td></tr>
                <tr class="bg-slate-50"><td class="p-2 border">Tupla</td><td class="p-2 border">Fila / registro</td></tr>
                <tr><td class="p-2 border">Atributo</td><td class="p-2 border">Columna / campo</td></tr>
                <tr class="bg-slate-50"><td class="p-2 border">Dominio</td><td class="p-2 border">Valores válidos de un atributo</td></tr>
                <tr><td class="p-2 border">Clave primaria (PK)</td><td class="p-2 border">Identifica de forma única cada fila</td></tr>
                <tr class="bg-slate-50"><td class="p-2 border">Clave foránea (FK)</td><td class="p-2 border">Referencia a la PK de otra tabla</td></tr>
              </tbody>
            </table>
          </div>

          <div class="bg-white border rounded-xl p-3 text-xs text-gray-700">
            <p class="font-bold text-slate-700 mb-1">Una relación es un <em>conjunto</em> de tuplas del mismo esquema, por eso:</p>
            <ul class="list-disc list-inside space-y-1">
              <li>No hay filas duplicadas (la PK lo garantiza).</li>
              <li>El orden de filas y de columnas no tiene significado.</li>
              <li>Cada celda guarda un valor <strong>atómico</strong> (indivisible) de su dominio.</li>
            </ul>
          </div>
        </div>
      `,
      notes: 'Teoría breve (~8 min). Esquema = estructura (nombre de la relación y sus atributos); instancia = las filas que contiene en un momento dado. Aclarar que "tabla" es el término práctico y "relación" el formal. Cierre: "el orden de las filas no está garantizado; solo ORDER BY lo asegura" (se retoma en la sintaxis de la consulta).'
    },
    {
      id: 'sql1-5',
      title: 'Ejemplo: tabla estudiante',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-white border rounded-xl p-4 shadow-sm overflow-x-auto">
            <p class="text-xs text-slate-500 mb-2">Tabla <code class="text-indigo-600 font-bold">estudiante</code></p>
            <table class="w-full text-sm border-collapse text-center">
              <thead><tr class="bg-indigo-600 text-white"><th class="p-2 border">id (PK)</th><th class="p-2 border">cedula</th><th class="p-2 border">nombre</th><th class="p-2 border">carrera</th><th class="p-2 border">promedio</th></tr></thead>
              <tbody class="text-gray-700">
                <tr><td class="p-2 border font-mono">1</td><td class="p-2 border">V-00000000</td><td class="p-2 border">Estudiante Ejemplo</td><td class="p-2 border">Sistemas</td><td class="p-2 border">17.5</td></tr>
                <tr class="bg-slate-50"><td class="p-2 border font-mono">2</td><td class="p-2 border">V-00000001</td><td class="p-2 border">Estudiante Ejemplo 2</td><td class="p-2 border">Sistemas</td><td class="p-2 border">15.0</td></tr>
              </tbody>
            </table>
          </div>
          <div class="grid grid-cols-3 gap-3 text-center text-xs">
            <div class="bg-indigo-50 border border-indigo-200 rounded-lg p-2"><strong>Filas</strong><br/>registros (tuplas)</div>
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-2"><strong>Columnas</strong><br/>campos (atributos)</div>
            <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-2"><strong>PK</strong><br/>identifica único</div>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-900">
            🔑 <strong>Clave candidata:</strong> cualquier columna (o grupo) que podría identificar de forma única. Aquí <code>id</code> y <code>cedula</code> lo son; se elige <code>id</code> como <strong>PK</strong> y <code>cedula</code> queda como clave alterna (<code>UNIQUE</code>).
          </div>
        </div>
      `,
      notes: 'Pregunta al grupo: por que no usar nombre como PK (puede repetirse) y por que id aunque ya exista cedula (estable, corta, sin significado externo). Los datos de la tabla son ficticios.'
    },
    {
      id: 'sql1-5b',
      title: 'Integridad de entidad e integridad referencial',
      contentHtml: `
        <div class="space-y-4">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-4">
              <h4 class="font-bold text-indigo-900">Integridad de entidad</h4>
              <p class="text-sm text-indigo-800 mt-1">La <strong>PK</strong> es <strong>única</strong> y <strong>nunca NULL</strong>: toda fila es identificable.</p>
            </div>
            <div class="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-4">
              <h4 class="font-bold text-emerald-900">Integridad referencial</h4>
              <p class="text-sm text-emerald-800 mt-1">Cada valor de una <strong>FK</strong> debe existir como PK en la tabla referenciada, o ser <code>NULL</code> si la FK lo permite.</p>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4 text-xs">
            <div class="bg-white border rounded-xl p-3 shadow-sm">
              <p class="text-slate-500 mb-1">Tabla <code class="text-indigo-600 font-bold">departamento</code></p>
              <table class="w-full border-collapse text-center">
                <thead><tr class="bg-indigo-600 text-white"><th class="p-1 border">id (PK)</th><th class="p-1 border">nombre</th></tr></thead>
                <tbody><tr><td class="p-1 border font-mono">10</td><td class="p-1 border">Sistemas</td></tr><tr class="bg-slate-50"><td class="p-1 border font-mono">20</td><td class="p-1 border">Ventas</td></tr></tbody>
              </table>
            </div>
            <div class="bg-white border rounded-xl p-3 shadow-sm">
              <p class="text-slate-500 mb-1">Tabla <code class="text-indigo-600 font-bold">empleado</code></p>
              <table class="w-full border-collapse text-center">
                <thead><tr class="bg-indigo-600 text-white"><th class="p-1 border">id (PK)</th><th class="p-1 border">nombre</th><th class="p-1 border">id_dep (FK)</th></tr></thead>
                <tbody><tr><td class="p-1 border font-mono">1</td><td class="p-1 border">Ana Pérez</td><td class="p-1 border font-mono">10</td></tr><tr class="bg-slate-50"><td class="p-1 border font-mono">2</td><td class="p-1 border">Luis Gómez</td><td class="p-1 border font-mono">20</td></tr></tbody>
              </table>
            </div>
          </div>
          <p class="text-xs text-slate-600 text-center">La FK <code>empleado.id_dep</code> apunta a <code>departamento.id</code>: así se <strong>relacionan</strong> las tablas sin repetir datos.</p>
        </div>
      `,
      notes: 'Teoría breve (~6 min). Dibujar la flecha FK -> PK en la pizarra. Las acciones referenciales (ON DELETE CASCADE / SET NULL / RESTRICT) solo se nombran hoy; se desarrollan en la Unidad III de diseño.'
    },
    {
      id: 'sql1-5c',
      title: 'Comprobación: ¿el motor lo acepta?',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-xs text-slate-500">Con las tablas <code>departamento</code> (ids 10, 20) y <code>empleado</code> (ids 1, 2) de la diapositiva anterior. Responde en el cuaderno antes de elegir.</p>

          <div data-quiz class="bg-white border rounded-xl p-3 space-y-2">
            <p class="text-sm font-semibold">1. <code>INSERT</code> de un empleado con <code>id = 2</code> (ya existe). ¿Qué ocurre?</p>
            <button data-option class="block w-full text-left text-sm border rounded p-2">Se inserta como segunda fila con id 2</button>
            <button data-option data-correct class="block w-full text-left text-sm border rounded p-2">Se rechaza: viola la integridad de entidad (PK duplicada)</button>
            <button data-option class="block w-full text-left text-sm border rounded p-2">Se rechaza: viola la integridad referencial</button>
            <p data-explain class="text-xs text-slate-600">La PK debe ser única; es una regla de entidad.</p>
          </div>

          <div data-quiz class="bg-white border rounded-xl p-3 space-y-2">
            <p class="text-sm font-semibold">2. <code>INSERT</code> de un empleado con <code>id_dep = 99</code>. ¿Qué ocurre?</p>
            <button data-option class="block w-full text-left text-sm border rounded p-2">Se inserta sin problema</button>
            <button data-option data-correct class="block w-full text-left text-sm border rounded p-2">Se rechaza: el departamento 99 no existe (integridad referencial)</button>
            <button data-option class="block w-full text-left text-sm border rounded p-2">Se rechaza: viola la integridad de entidad</button>
            <p data-explain class="text-xs text-slate-600">Una FK solo puede tomar valores que existan como PK en la tabla referenciada (o NULL).</p>
          </div>
        </div>
      `,
      notes: 'Práctica guiada breve (~5 min). Respuestas: 1) segunda opción, PK duplicada; 2) segunda opción, FK sin PK correspondiente. Preguntas extra orales: puede id_dep ser NULL (si la columna lo permite, el empleado queda sin departamento); y que pasa al borrar el departamento 10 con empleados (el motor lo rechaza por defecto o aplica la acción declarada: CASCADE, SET NULL).'
    },
    {
      id: 'sql1-6',
      title: 'Historia y estándar de SQL',
      contentHtml: `
        <div class="space-y-5">
          <div class="flex justify-center bg-white p-5 rounded-xl border shadow-sm">
            <div class="mermaid">
              graph LR
                A["1970<br/>Codd: modelo relacional"] --> B["Años 70<br/>IBM System R / SEQUEL"]
                B --> C["1986<br/>ANSI"]
                C --> D["1987<br/>ISO"]
                D --> E["Hoy<br/>ISO/IEC 9075"]
                style D fill:#4f46e5,stroke:#3730a3,color:#fff
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-indigo-50 border border-indigo-200 rounded-lg p-3"><strong>SEQUEL → SQL</strong><br/><span class="text-xs">Structured Query Language.</span></div>
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-3"><strong>Dialectos</strong><br/><span class="text-xs">MySQL, PostgreSQL, SQL Server, Oracle adaptan el estándar.</span></div>
          </div>
        </div>
      `
    },
    {
      id: 'sql1-7',
      title: 'SQL es declarativo',
      contentHtml: `
        <div class="space-y-5">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-rose-50 border-2 border-rose-200 rounded-xl p-5">
              <h4 class="font-bold text-rose-900">Imperativo (el "cómo")</h4>
              <p class="text-sm text-rose-800 mt-2">Se indica paso a paso cómo recorrer y filtrar los datos.</p>
            </div>
            <div class="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-5">
              <h4 class="font-bold text-emerald-900">Declarativo (el "qué")</h4>
              <p class="text-sm text-emerald-800 mt-2">Se describe el resultado deseado; el <strong>optimizador</strong> del motor decide cómo obtenerlo.</p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-slate-900 text-slate-100 rounded-xl p-3 font-mono text-xs">
              <div class="text-slate-400">// Imperativo (pseudocódigo)</div>
              <div>resultado = []</div>
              <div>para cada fila en empleado:</div>
              <div>&nbsp;&nbsp;si fila.salario &gt; 1000:</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;resultado.agregar(fila.nombre)</div>
            </div>
            <div class="bg-slate-900 text-slate-100 rounded-xl p-3 font-mono text-xs">
              <div class="text-slate-400">-- Declarativo (SQL)</div>
              <div><span class="text-pink-400">SELECT</span> nombre</div>
              <div><span class="text-pink-400">FROM</span> empleado</div>
              <div><span class="text-pink-400">WHERE</span> salario &gt; 1000;</div>
            </div>
          </div>

          <div class="bg-indigo-50 border border-indigo-200 rounded-lg p-3 text-xs text-indigo-900">
            SQL opera sobre <strong>conjuntos de filas</strong>, no fila por fila. Se apoya en el <strong>álgebra relacional</strong>: <code>WHERE</code> ≈ <em>selección</em> (filtra filas), <code>SELECT</code> ≈ <em>proyección</em> (elige columnas). El motor puede usar un índice o recorrer toda la tabla: el resultado es el mismo.
          </div>
        </div>
      `,
      notes: 'Teoría breve (~4 min). Idea central: el programador declara el resultado; el optimizador elige el plan de ejecución (uso de índices, orden de operaciones). En la unidad de optimización se verá con EXPLAIN.'
    },
    {
      id: 'sql1-8',
      title: 'Subconjuntos del lenguaje SQL',
      contentHtml: `
        <div class="space-y-4">
          <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div class="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-3">
              <h4 class="font-bold text-indigo-900 text-sm">DDL — Definición</h4>
              <p class="text-xs text-indigo-800 mb-2">Crea y modifica la <strong>estructura</strong> (tablas, columnas, restricciones).</p>
              <div class="font-mono text-xs bg-white rounded p-1.5">CREATE · ALTER · DROP</div>
            </div>
            <div class="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-3">
              <h4 class="font-bold text-emerald-900 text-sm">DML — Manipulación</h4>
              <p class="text-xs text-emerald-800 mb-2">Cambia el <strong>contenido</strong>: agrega, modifica o elimina filas.</p>
              <div class="font-mono text-xs bg-white rounded p-1.5">INSERT · UPDATE · DELETE</div>
            </div>
            <div class="bg-sky-50 border-2 border-sky-200 rounded-xl p-3">
              <h4 class="font-bold text-sky-900 text-sm">DQL — Consulta</h4>
              <p class="text-xs text-sky-800 mb-2">Lee datos sin modificarlos. Muchos textos lo incluyen dentro de DML.</p>
              <div class="font-mono text-xs bg-white rounded p-1.5">SELECT</div>
            </div>
            <div class="bg-amber-50 border-2 border-amber-200 rounded-xl p-3">
              <h4 class="font-bold text-amber-900 text-sm">DCL — Control</h4>
              <p class="text-xs text-amber-800 mb-2">Otorga o retira <strong>permisos</strong> a usuarios y roles.</p>
              <div class="font-mono text-xs bg-white rounded p-1.5">GRANT · REVOKE</div>
            </div>
            <div class="bg-violet-50 border-2 border-violet-200 rounded-xl p-3 col-span-2 md:col-span-2">
              <h4 class="font-bold text-violet-900 text-sm">TCL — Transacciones</h4>
              <p class="text-xs text-violet-800 mb-2">Agrupa cambios en una unidad atómica: todo se confirma o todo se deshace.</p>
              <div class="font-mono text-xs bg-white rounded p-1.5">COMMIT · ROLLBACK · SAVEPOINT</div>
            </div>
          </div>
          <div class="bg-slate-50 border rounded-lg p-3 text-xs text-slate-600">
            🧠 Regla práctica: <strong>DDL cambia el esquema</strong>, <strong>DML cambia las filas</strong>, <strong>DQL solo lee</strong>. Hoy los ubicamos; los desarrollamos a lo largo del curso.
          </div>
        </div>
      `
    },
    {
      id: 'sql1-9',
      title: 'Tipos de datos más comunes',
      contentHtml: `
        <div class="space-y-4">
          <div class="overflow-x-auto">
            <table class="w-full text-sm border-collapse">
              <thead><tr class="bg-slate-100 text-slate-700"><th class="p-2 text-left border">Tipo</th><th class="p-2 text-left border">Ejemplos</th><th class="p-2 text-left border">Uso</th></tr></thead>
              <tbody class="text-gray-600 font-mono text-xs">
                <tr><td class="p-2 border font-sans font-semibold">Numéricos</td><td class="p-2 border">INT · BIGINT · DECIMAL(p,s) · FLOAT</td><td class="p-2 border font-sans">ids, cantidades, montos</td></tr>
                <tr class="bg-slate-50"><td class="p-2 border font-sans font-semibold">Texto</td><td class="p-2 border">CHAR(n) · VARCHAR(n) · TEXT</td><td class="p-2 border font-sans">nombres, descripciones</td></tr>
                <tr><td class="p-2 border font-sans font-semibold">Fecha/hora</td><td class="p-2 border">DATE · TIME · TIMESTAMP</td><td class="p-2 border font-sans">fechas, marcas de tiempo</td></tr>
                <tr class="bg-slate-50"><td class="p-2 border font-sans font-semibold">Booleanos</td><td class="p-2 border">BOOLEAN</td><td class="p-2 border font-sans">sí / no</td></tr>
                <tr><td class="p-2 border font-sans font-semibold">Otros</td><td class="p-2 border">BLOB · JSON · UUID</td><td class="p-2 border font-sans">binarios, documentos, ids únicos</td></tr>
              </tbody>
            </table>
          </div>
          <div class="bg-blue-50 border border-blue-200 rounded-lg p-3 text-xs text-blue-900 space-y-1">
            <p>💡 El <strong>tipo</strong> define el dominio de la columna: qué valores acepta, cuánto espacio ocupa y qué operaciones permite.</p>
            <p>⚠️ No todos son iguales en cada motor: <code>UUID</code> es nativo en PostgreSQL pero en MySQL se usa <code>CHAR(36)</code>; <code>BOOLEAN</code> en MySQL es un alias de <code>TINYINT(1)</code>.</p>
          </div>
        </div>
      `
    },
    {
      id: 'sql1-9b',
      title: 'Elegir bien el tipo de dato',
      contentHtml: `
        <div class="space-y-4">
          <div class="grid md:grid-cols-2 gap-3 text-sm">
            <div class="bg-white border rounded-xl p-3 shadow-sm">
              <h4 class="font-bold text-slate-800">CHAR(n) vs VARCHAR(n)</h4>
              <p class="text-xs text-gray-600 mt-1"><code>CHAR</code>: longitud <strong>fija</strong>, rellena con espacios (códigos de largo constante). <code>VARCHAR</code>: longitud <strong>variable</strong> hasta n (nombres).</p>
            </div>
            <div class="bg-white border rounded-xl p-3 shadow-sm">
              <h4 class="font-bold text-slate-800">DECIMAL vs FLOAT</h4>
              <p class="text-xs text-gray-600 mt-1"><code>DECIMAL(p,s)</code>: exacto, <em>p</em> dígitos en total y <em>s</em> decimales. <code>FLOAT</code>: aproximado, con error de redondeo. <strong>Dinero: siempre DECIMAL.</strong></p>
            </div>
            <div class="bg-white border rounded-xl p-3 shadow-sm">
              <h4 class="font-bold text-slate-800">DATE / TIMESTAMP</h4>
              <p class="text-xs text-gray-600 mt-1">Formato estándar <code>'AAAA-MM-DD'</code> (ISO 8601). Permiten ordenar y restar fechas, cosa que un texto no hace bien.</p>
            </div>
            <div class="bg-white border rounded-xl p-3 shadow-sm">
              <h4 class="font-bold text-slate-800">Literales</h4>
              <p class="text-xs text-gray-600 mt-1">Texto y fechas van entre <strong>comillas simples</strong>: <code>'Ana'</code>. Los números no: <code>1200.50</code>. Las comillas dobles son para identificadores.</p>
            </div>
          </div>
          <div class="bg-slate-900 text-slate-100 rounded-xl p-3 font-mono text-xs">
            <div class="text-slate-400">-- Ejemplo de columnas bien tipadas</div>
            <div>salario&nbsp;&nbsp;&nbsp;DECIMAL(10,2) &nbsp;<span class="text-slate-400">-- hasta 99999999.99</span></div>
            <div>fecha_ing DATE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-slate-400">-- '2023-03-01'</span></div>
          </div>
        </div>
      `,
      notes: 'Teoría breve (~4 min). Ejemplo para la pizarra: en punto flotante 0.1 + 0.2 puede dar 0.30000000000000004 (error de representación binaria), por eso el dinero va en DECIMAL. DECIMAL(10,2): 10 dígitos en total, 2 decimales, 8 enteros. Las comillas dobles en SQL estándar delimitan identificadores, aunque MySQL las acepta como cadenas por defecto.'
    },
    {
      id: 'sql1-9c',
      title: 'NULL: ausencia de valor',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-amber-50 border-2 border-amber-200 rounded-xl p-4 text-sm text-amber-900">
            <code>NULL</code> es un <strong>marcador</strong> de valor <strong>desconocido, ausente o no aplicable</strong>. No es <code>0</code> ni <code>''</code> (cadena vacía): es "no se sabe".
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white border rounded-xl p-3 shadow-sm text-xs">
              <p class="font-bold text-slate-700 mb-1">Lógica de tres valores</p>
              <p class="text-gray-600"><code>TRUE</code> · <code>FALSE</code> · <code>UNKNOWN</code>. Cualquier comparación con NULL da <strong>UNKNOWN</strong>, y <code>WHERE</code> solo deja pasar las filas <code>TRUE</code>.</p>
              <div class="font-mono mt-2 space-y-1">
                <div class="bg-slate-50 rounded px-2 py-1">NULL = NULL → UNKNOWN</div>
                <div class="bg-slate-50 rounded px-2 py-1">salario + NULL → NULL</div>
                <div class="bg-emerald-50 rounded px-2 py-1">comision <span class="text-pink-600 font-bold">IS NULL</span> → TRUE/FALSE</div>
              </div>
            </div>
            <div class="bg-white border rounded-xl p-3 shadow-sm text-xs overflow-x-auto">
              <p class="font-bold text-slate-700 mb-1">Ejemplo: columna <code>comision</code></p>
              <table class="w-full border-collapse text-center">
                <thead><tr class="bg-slate-100"><th class="p-1 border">nombre</th><th class="p-1 border">comision</th></tr></thead>
                <tbody>
                  <tr><td class="p-1 border">Ana</td><td class="p-1 border font-mono">100</td></tr>
                  <tr class="bg-slate-50"><td class="p-1 border">Luis</td><td class="p-1 border font-mono text-rose-600">NULL</td></tr>
                  <tr><td class="p-1 border">María</td><td class="p-1 border font-mono">0</td></tr>
                </tbody>
              </table>
              <p class="mt-2 text-gray-600"><code>WHERE comision = 0</code> → solo María. <code>WHERE comision IS NULL</code> → solo Luis.</p>
            </div>
          </div>
          <div class="bg-indigo-50 border border-indigo-200 rounded-lg p-3 text-xs text-indigo-900">
            🔗 Vínculo con la integridad: <code>NOT NULL</code> prohíbe el nulo en una columna; la <strong>PK</strong> es siempre <code>NOT NULL</code>.
          </div>
        </div>
      `,
      notes: 'Teoría breve (~6 min), tema de alta recurrencia en errores. Recalcar: comision <> 0 tampoco devuelve a Luis (UNKNOWN). Para incluirlo hay que pedirlo explicitamente: comision <> 0 OR comision IS NULL. Las funciones COALESCE e IFNULL (reemplazar NULL) se ven en la Unidad II.'
    },
    {
      id: 'sql1-9d',
      title: 'Comprobación: NULL',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-xs text-slate-500">Con la tabla de comisiones (Ana 100, Luis NULL, María 0). Piensa tu respuesta en el cuaderno.</p>
          <div data-quiz class="bg-white border rounded-xl p-3 space-y-2">
            <p class="text-sm font-semibold">¿Qué devuelve <code>SELECT nombre FROM empleado WHERE comision &lt;&gt; 0;</code>?</p>
            <button data-option class="block w-full text-left text-sm border rounded p-2">Luis y Ana</button>
            <button data-option data-correct class="block w-full text-left text-sm border rounded p-2">Solo Ana</button>
            <button data-option class="block w-full text-left text-sm border rounded p-2">Ana, Luis y María</button>
            <p data-explain class="text-xs text-slate-600">Para Luis, <code>NULL &lt;&gt; 0</code> es UNKNOWN y WHERE solo deja pasar TRUE. Para incluirlo: <code>OR comision IS NULL</code>.</p>
          </div>
          <div data-quiz class="bg-white border rounded-xl p-3 space-y-2">
            <p class="text-sm font-semibold">¿Qué tipo conviene para guardar un precio en dólares con centavos?</p>
            <button data-option class="block w-full text-left text-sm border rounded p-2">FLOAT</button>
            <button data-option data-correct class="block w-full text-left text-sm border rounded p-2">DECIMAL(10,2)</button>
            <button data-option class="block w-full text-left text-sm border rounded p-2">VARCHAR(10)</button>
            <p data-explain class="text-xs text-slate-600">DECIMAL es exacto; FLOAT acumula errores de redondeo y VARCHAR no permite operar.</p>
          </div>
        </div>
      `,
      notes: 'Práctica guiada breve (~4 min). Respuestas: 1) Solo Ana (Luis queda fuera por UNKNOWN, María tiene 0 y no cumple <> 0); 2) DECIMAL(10,2).'
    },
    {
      id: 'sql1-10',
      title: 'Sintaxis general de una consulta',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-slate-900 text-slate-100 rounded-xl p-5 font-mono text-sm shadow-lg">
            <div><span class="text-pink-400">SELECT</span>   columnas</div>
            <div><span class="text-pink-400">FROM</span>     tabla</div>
            <div><span class="text-pink-400">WHERE</span>    condición</div>
            <div><span class="text-pink-400">ORDER BY</span> columna [ASC|DESC];</div>
          </div>

          <div class="grid grid-cols-2 gap-3 text-xs">
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-3"><strong>SELECT</strong>: qué columnas o expresiones se devuelven (<em>proyección</em>).</div>
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-3"><strong>FROM</strong>: de qué tabla(s) se leen los datos.</div>
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-3"><strong>WHERE</strong>: qué filas pasan, según una condición (<em>selección</em>).</div>
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-3"><strong>ORDER BY</strong>: en qué orden se presenta el resultado.</div>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-900">
            ⚠️ Sin <code>ORDER BY</code> el motor <strong>no garantiza ningún orden</strong> de las filas. Y el orden en que <em>escribes</em> las cláusulas no es el orden en que el motor las <em>ejecuta</em> (siguiente diapositiva).
          </div>
        </div>
      `
    },
    {
      id: 'sql1-10b',
      title: 'Orden lógico de ejecución de una consulta',
      contentHtml: `
        <div class="space-y-4">
          <div class="flex flex-wrap items-center justify-center gap-2 text-xs">
            <span class="bg-blue-50 border border-blue-200 rounded-full px-3 py-1"><strong>1</strong> FROM</span>
            <span class="text-slate-500">→</span>
            <span class="bg-blue-50 border border-blue-200 rounded-full px-3 py-1"><strong>2</strong> WHERE</span>
            <span class="text-slate-500">→</span>
            <span class="bg-slate-100 border border-slate-300 rounded-full px-3 py-1"><strong>3</strong> GROUP BY</span>
            <span class="text-slate-500">→</span>
            <span class="bg-slate-100 border border-slate-300 rounded-full px-3 py-1"><strong>4</strong> HAVING</span>
            <span class="text-slate-500">→</span>
            <span class="bg-indigo-100 border border-indigo-300 rounded-full px-3 py-1"><strong>5</strong> SELECT</span>
            <span class="text-slate-500">→</span>
            <span class="bg-blue-50 border border-blue-200 rounded-full px-3 py-1"><strong>6</strong> ORDER BY</span>
            <span class="text-slate-500">→</span>
            <span class="bg-slate-100 border border-slate-300 rounded-full px-3 py-1"><strong>7</strong> LIMIT</span>
          </div>
          <p class="text-xs text-slate-500 text-center">En gris: cláusulas que veremos en la semana 3 (<code>GROUP BY</code>/<code>HAVING</code>) y después. Hoy: 1, 2, 5 y 6.</p>

          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 font-mono text-xs">
            <div class="text-slate-400">-- Se ejecuta FROM → WHERE → SELECT → ORDER BY</div>
            <div><span class="text-pink-400">SELECT</span> nombre, salario * 12 <span class="text-pink-400">AS</span> anual</div>
            <div><span class="text-pink-400">FROM</span> empleado</div>
            <div><span class="text-pink-400">WHERE</span> salario &gt; 1000</div>
            <div><span class="text-pink-400">ORDER BY</span> anual <span class="text-pink-400">DESC</span>;</div>
          </div>

          <div class="grid md:grid-cols-2 gap-3 text-xs">
            <div class="bg-rose-50 border border-rose-200 rounded-lg p-3">❌ <code>WHERE anual &gt; 12000</code> falla: el alias nace en <code>SELECT</code> (paso 5), después de <code>WHERE</code> (paso 2).</div>
            <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-3">✅ <code>ORDER BY anual</code> funciona: se ejecuta después de <code>SELECT</code>, cuando el alias ya existe.</div>
          </div>
        </div>
      `,
      notes: 'Teoría breve (~5 min). Este orden es lógico (modelo conceptual); el optimizador puede ejecutar fisicamente en otro orden siempre que el resultado sea equivalente. GROUP BY y HAVING se dictan en la semana 3 (la sesión de la semana 2 del 01/10 no se dictó y se recuperó en la semana 3); hoy solo se ubican en el orden. Ojo: algunos motores relajan reglas de alias (p. ej. MySQL admite alias en GROUP BY/HAVING), pero el estándar no.'
    },
    {
      id: 'sql1-11',
      title: 'Primera consulta: crear y poblar',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 font-mono text-xs shadow-lg overflow-x-auto">
            <div class="text-slate-400">-- DDL: crear la tabla (demostración)</div>
            <div><span class="text-pink-400">CREATE TABLE</span> empleado (</div>
            <div>&nbsp;&nbsp;id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INT <span class="text-pink-400">PRIMARY KEY</span>,</div>
            <div>&nbsp;&nbsp;nombre&nbsp;&nbsp;&nbsp;&nbsp;VARCHAR(60) <span class="text-pink-400">NOT NULL</span>,</div>
            <div>&nbsp;&nbsp;cargo&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VARCHAR(40),</div>
            <div>&nbsp;&nbsp;salario&nbsp;&nbsp;&nbsp;DECIMAL(10,2),</div>
            <div>&nbsp;&nbsp;fecha_ing DATE</div>
            <div>);</div>
          </div>
          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 font-mono text-xs shadow-lg overflow-x-auto">
            <div class="text-slate-400">-- DML: insertar registros (se recomienda indicar las columnas)</div>
            <div><span class="text-pink-400">INSERT INTO</span> empleado (id, nombre, cargo, salario, fecha_ing)</div>
            <div><span class="text-pink-400">VALUES</span></div>
            <div>&nbsp;&nbsp;(1,'Ana Pérez','Analista',1200.00,'2023-03-01'),</div>
            <div>&nbsp;&nbsp;(2,'Luis Gómez','Programador',900.00,'2024-07-15'),</div>
            <div>&nbsp;&nbsp;(3,'María Ríos','DBA',1500.00,'2022-01-10');</div>
            <div class="text-emerald-400 mt-1">-- Salida: 3 rows affected</div>
          </div>
        </div>
      `
    },
    {
      id: 'sql1-12',
      title: 'Consultas básicas en vivo',
      contentHtml: `
        <div class="space-y-4">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-slate-900 text-slate-100 rounded-xl p-4 font-mono text-xs shadow-lg">
              <div class="text-slate-400">-- Todas las columnas</div>
              <div><span class="text-pink-400">SELECT</span> * <span class="text-pink-400">FROM</span> empleado;</div>
              <div class="text-slate-400 mt-2">-- Filtro</div>
              <div><span class="text-pink-400">SELECT</span> nombre, salario</div>
              <div><span class="text-pink-400">FROM</span> empleado</div>
              <div><span class="text-pink-400">WHERE</span> salario > 1000;</div>
              <div class="text-slate-400 mt-2">-- Orden descendente</div>
              <div><span class="text-pink-400">SELECT</span> nombre, salario</div>
              <div><span class="text-pink-400">FROM</span> empleado</div>
              <div><span class="text-pink-400">ORDER BY</span> salario <span class="text-pink-400">DESC</span>;</div>
            </div>
            <div class="bg-white border rounded-xl p-4 shadow-sm">
              <p class="text-xs font-bold text-slate-600 mb-2">Salida esperada (última consulta)</p>
              <div class="font-mono text-xs space-y-1">
                <div class="flex justify-between bg-emerald-50 rounded px-2 py-1"><span>María Ríos</span><span class="text-emerald-700">1500.00</span></div>
                <div class="flex justify-between bg-slate-50 rounded px-2 py-1"><span>Ana Pérez</span><span>1200.00</span></div>
                <div class="flex justify-between bg-slate-50 rounded px-2 py-1"><span>Luis Gómez</span><span>900.00</span></div>
              </div>
            </div>
          </div>
          <div class="bg-indigo-50 border border-indigo-200 rounded-lg p-3 text-xs text-indigo-900">
            👀 <strong>Demostración, no práctica evaluada.</strong> Sirve de gancho: el dominio de <code>SELECT</code>/<code>WHERE</code>/<code>ORDER BY</code> se evalúa en la <strong>semana 4</strong> (10%).
          </div>
        </div>
      `
    },
    {
      id: 'sql1-13',
      title: 'Operadores y funciones',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 font-mono text-xs shadow-lg overflow-x-auto">
            <div><span class="text-pink-400">SELECT</span> nombre,</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;salario * 12 <span class="text-pink-400">AS</span> salario_anual,</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-cyan-300">UPPER</span>(cargo) <span class="text-pink-400">AS</span> cargo_mayus</div>
            <div><span class="text-pink-400">FROM</span>&nbsp;&nbsp;&nbsp;empleado</div>
            <div><span class="text-pink-400">WHERE</span>&nbsp;&nbsp;cargo <span class="text-pink-400">IN</span> ('Analista','DBA')</div>
            <div><span class="text-pink-400">ORDER BY</span> salario_anual <span class="text-pink-400">DESC</span>;</div>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-center">
            <div class="bg-indigo-50 border border-indigo-200 rounded p-2"><code>AS</code><br/>alias</div>
            <div class="bg-blue-50 border border-blue-200 rounded p-2"><code>BETWEEN</code><br/>rango</div>
            <div class="bg-violet-50 border border-violet-200 rounded p-2"><code>LIKE 'M%'</code><br/>patrón</div>
            <div class="bg-fuchsia-50 border border-fuchsia-200 rounded p-2"><code>IS NULL</code><br/>nulos</div>
          </div>
        </div>
      `
    },
    {
      id: 'sql1-14',
      title: 'Error provocado: aprendamos del motor',
      contentHtml: `
        <div class="space-y-5">
          <div class="bg-rose-50 border-2 border-rose-200 rounded-xl p-4">
            <p class="text-xs font-bold text-rose-800 mb-2">❌ Error determinista (cualquier motor)</p>
            <div class="bg-slate-900 text-slate-100 rounded-lg p-3 font-mono text-xs">
              <span class="text-pink-400">SELECT</span> nombre <span class="text-pink-400">FROM</span> empleado <span class="text-pink-400">WHERE</span> sueldo &gt; 1000;
            </div>
            <p class="text-xs text-rose-700 mt-2">El motor lo rechaza porque valida los <strong>identificadores</strong>. El mensaje varía: en PostgreSQL <em>column "sueldo" does not exist</em>; en MySQL <em>Unknown column 'sueldo'...</em></p>
          </div>

          <div class="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-4">
            <p class="text-xs font-bold text-emerald-800 mb-2">✅ Correcto</p>
            <div class="bg-slate-900 text-slate-100 rounded-lg p-3 font-mono text-xs">
              <span class="text-pink-400">SELECT</span> nombre <span class="text-pink-400">FROM</span> empleado <span class="text-pink-400">WHERE</span> salario &gt; 1000;
            </div>
          </div>

          <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-900">
            ⚠️ <strong>Ojo con los tipos según el motor:</strong> <code>WHERE salario &gt; 'mil'</code> falla en PostgreSQL, pero en MySQL/MariaDB <em>no</em> falla (convierte el texto a 0 y devuelve resultados incorrectos). Revisa siempre el tipo de la columna y no confíes en la coerción.
          </div>
        </div>
      `
    },
    {
      id: 'sql1-15',
      title: 'Demostración guiada de consultas',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-indigo-600 text-white rounded-xl p-4 flex justify-between items-center">
            <div><h4 class="font-bold text-lg">🎯 Demostración guiada (no evaluable)</h4><p class="font-bold text-xs">Base de ejemplo: empresa (empleado, departamento)</p></div>
            <span class="text-3xl">⌨️</span>
          </div>
          <ol class="space-y-2 text-sm">
            <li class="bg-white border rounded-lg p-3 shadow-sm"><strong>1.</strong> Listar nombre y cargo de todos los empleados.</li>
            <li class="bg-white border rounded-lg p-3 shadow-sm"><strong>2.</strong> Empleados con salario <strong>entre</strong> 900 y 1200 (<code>BETWEEN</code>).</li>
            <li class="bg-white border rounded-lg p-3 shadow-sm"><strong>3.</strong> Ordenar por fecha de ingreso, del más antiguo al más reciente.</li>
          </ol>
          <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-900">
            📓 <strong>Sin laboratorio:</strong> la demostración se proyecta y la práctica se hace en el <strong>cuaderno</strong> o en la <strong>pizarra</strong>; verificamos juntos en el proyector.
          </div>
          <div class="bg-slate-50 border rounded-lg p-3 text-xs text-slate-600">
            📌 La <strong>práctica evaluada</strong> de <code>SELECT</code>/<code>WHERE</code>/<code>ORDER BY</code> corresponde a la <strong>semana 4</strong> (10%); <code>GROUP BY</code>/<code>HAVING</code> se dictan en la <strong>semana 3</strong>.
          </div>
        </div>
      `
    },
    {
      id: 'sql1-15b',
      title: 'Práctica autónoma · en tu cuaderno',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-emerald-600 text-white rounded-xl p-4 flex justify-between items-center">
            <div><h4 class="font-bold text-lg">✏️ Práctica autónoma (15 min)</h4><p class="font-bold text-xs">Base de ejemplo: empresa (empleado)</p></div>
            <span class="text-3xl">📓</span>
          </div>
          <p class="text-sm text-slate-600">Escribe cada consulta en tu <strong>cuaderno</strong> y luego la contrastamos en la pizarra y el proyector. Trabaja solo o en parejas; el docente circula y orienta.</p>
          <ol class="space-y-2 text-sm">
            <li class="flex gap-3 bg-white border rounded-lg p-3"><span class="font-bold text-emerald-700">1</span><span>Lista <strong>nombre</strong> y <strong>salario</strong> de los empleados con salario mayor a 1000.</span></li>
            <li class="flex gap-3 bg-white border rounded-lg p-3"><span class="font-bold text-emerald-700">2</span><span>Ordena a todos los empleados por <strong>salario descendente</strong>.</span></li>
            <li class="flex gap-3 bg-white border rounded-lg p-3"><span class="font-bold text-emerald-700">3</span><span>Empleados con salario <strong>entre</strong> 900 y 1200 (usa <code>BETWEEN</code>).</span></li>
            <li class="flex gap-3 bg-white border rounded-lg p-3"><span class="font-bold text-emerald-700">4</span><span><strong>Reto:</strong> ¿cómo pedirías los empleados cuyo nombre empieza con "M"? (pista: <code>LIKE 'M%'</code>)</span></li>
            <li class="flex gap-3 bg-white border rounded-lg p-3"><span class="font-bold text-emerald-700">5</span><span><strong>Teoría aplicada:</strong> si un empleado tiene <code>salario</code> NULL, ¿aparece con <code>salario &gt; 1000</code>? ¿y con <code>salario &lt;= 1000</code>? Justifica.</span></li>
          </ol>
          <div class="bg-slate-50 border rounded-lg p-3 text-xs text-slate-600">
            📌 No es evaluada: sirve para afianzar <code>SELECT</code>/<code>WHERE</code>/<code>ORDER BY</code> antes de la práctica evaluada de la semana 4.
          </div>
        </div>
      `,
      notes: 'Práctica autónoma de 15 min (bloque 110–125 del guion). Consignas para el cuaderno. Respuestas de referencia: 1) SELECT nombre, salario FROM empleado WHERE salario > 1000; 2) SELECT nombre, salario FROM empleado ORDER BY salario DESC; 3) SELECT * FROM empleado WHERE salario BETWEEN 900 AND 1200; 4) SELECT * FROM empleado WHERE nombre LIKE \'M%\'; 5) En ninguna de las dos: la comparación con NULL da UNKNOWN y WHERE solo deja pasar TRUE (para incluirlo, usar OR salario IS NULL). No hay laboratorio: la práctica es en cuaderno y se corrige en pizarra/proyector.'
    },
    {
      id: 'sql1-16',
      title: 'Cierre y tarea',
      contentHtml: `
        <div class="space-y-5">
          <div class="flex flex-wrap items-center justify-center gap-2 text-xs">
            <span class="bg-slate-100 border rounded-full px-3 py-1">dato</span><span class="text-slate-500">→</span>
            <span class="bg-slate-100 border rounded-full px-3 py-1">tabla</span><span class="text-slate-500">→</span>
            <span class="bg-slate-100 border rounded-full px-3 py-1">base de datos</span><span class="text-slate-500">→</span>
            <span class="bg-slate-100 border rounded-full px-3 py-1">SGBD</span><span class="text-slate-500">→</span>
            <span class="bg-indigo-100 border border-indigo-200 rounded-full px-3 py-1 text-indigo-800 font-bold">SQL</span>
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white border rounded-xl p-4 shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2 text-sm">Preguntas de comprobación</h4>
              <ul class="list-disc list-inside text-xs text-gray-600 space-y-1">
                <li>¿BD vs. SGBD?</li>
                <li>¿Qué exigen la integridad de entidad y la referencial?</li>
                <li>¿DDL, DML, DQL, DCL y TCL: qué hace cada uno?</li>
                <li>¿Por qué NULL = NULL no es verdadero?</li>
                <li>¿En qué orden ejecuta el motor FROM, WHERE, SELECT y ORDER BY?</li>
                <li>¿Por qué SQL es declarativo?</li>
              </ul>
            </div>
            <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
              <h4 class="font-bold text-indigo-900 mb-2 text-sm">📚 Tarea</h4>
              <ul class="list-disc list-inside text-xs text-indigo-900 space-y-1">
                <li>Investigar 3 tablas de un sistema real de la zona (con PK).</li>
                <li>Leer Sánchez U01–U04.</li>
                <li>Instalar en casa MySQL/PostgreSQL o abrir SQL Playground (individual).</li>
              </ul>
            </div>
          </div>

          <div class="bg-slate-50 border rounded-lg p-3 text-xs text-slate-600 text-center">
            ⏭️ <strong>Siguiente:</strong> más consultas y <code>GROUP BY</code>/<code>HAVING</code> (semana 3). Primer práctico evaluado en S4 (10%).
          </div>
        </div>
      `,
      notes: 'Respuestas de las preguntas de comprobación: BD = datos, SGBD = software que los gestiona; entidad = PK única y no nula, referencial = cada FK existe como PK referenciada o es NULL; DDL estructura, DML filas, DQL lectura (SELECT), DCL permisos, TCL transacciones; NULL es desconocido, la comparación da UNKNOWN; orden lógico FROM, WHERE, SELECT, ORDER BY; SQL describe el resultado y el optimizador decide el cómo. Las preguntas se responden de forma oral, 1 por estudiante. Tarea individual para casa; el medio de entrega queda por confirmar. La sesión de la semana 2 (01/10) no se dictó y se recuperó en la semana 3.'
    },
    {
      id: 'sql1-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full space-y-4">
          <div class="text-6xl">🙋</div>
          <h3 class="text-2xl font-bold text-slate-900">¿Dudas sobre bases de datos y SQL?</h3>
          <p class="text-slate-500">Modelo relacional, tipos de datos, consultas…</p>
        </div>
      `
    },
    {
      id: 'sql1-end-thanks',
      title: 'Gracias',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center space-y-6">
          <div class="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-4xl">🗄️</div>
          <div>
            <h2 class="text-3xl font-bold text-slate-900">Fin del Módulo 1</h2>
            <p class="text-gray-600 mt-2">Nos vemos el próximo jueves. ¡Prepara tu SGBD en casa para practicar!</p>
          </div>
        </div>
      `
    }
  ]
};
