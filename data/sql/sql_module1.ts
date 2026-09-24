import { Module } from '../../types';

export const SQL_ELECTIVE_MODULE_1: Module = {
  id: 'sql-mod-1',
  title: '1. Introducción a SQL y Fundamentos',
  description: 'Bases de datos y SGBD, modelo relacional, historia y estándar de SQL, subconjuntos del lenguaje, tipos de datos y la primera consulta (SELECT, FROM, WHERE, ORDER BY). Unidad I, objetivo I.1.',
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
            SQL no es un lenguaje más: es <strong>el idioma con el que se habla con los datos</strong>. Casi todo sistema real —banca, SAIA, farmacia— guarda y consulta su información en una base de datos relacional.
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
        <div class="space-y-5">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white border-2 border-indigo-100 rounded-xl p-5 shadow-sm">
              <h4 class="font-bold text-indigo-900 text-lg">🗃️ Base de datos</h4>
              <p class="text-sm text-gray-600 mt-2">Colección organizada de datos <strong>interrelacionados</strong>, almacenada de forma que pueda consultarse y actualizarse eficientemente.</p>
            </div>
            <div class="bg-white border-2 border-blue-100 rounded-xl p-5 shadow-sm">
              <h4 class="font-bold text-blue-900 text-lg">⚙️ SGBD</h4>
              <p class="text-sm text-gray-600 mt-2">Software que permite <strong>definir, almacenar, consultar, actualizar y administrar</strong> una BD, garantizando integridad, concurrencia y seguridad.</p>
            </div>
          </div>

          <div class="bg-slate-50 border rounded-xl p-4">
            <p class="text-xs font-bold text-slate-600 mb-2">Motores (SGBD) más usados</p>
            <div class="flex flex-wrap gap-2 text-xs">
              <span class="bg-white border rounded-full px-3 py-1">MySQL</span>
              <span class="bg-white border rounded-full px-3 py-1">PostgreSQL</span>
              <span class="bg-white border rounded-full px-3 py-1">SQL Server</span>
              <span class="bg-white border rounded-full px-3 py-1">Oracle</span>
              <span class="bg-white border rounded-full px-3 py-1">SQLite</span>
            </div>
          </div>
        </div>
      `
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
        </div>
      `
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
                <tr><td class="p-2 border font-mono">1</td><td class="p-2 border">27758801</td><td class="p-2 border">Luis Moreno</td><td class="p-2 border">Sistemas</td><td class="p-2 border">17.5</td></tr>
                <tr class="bg-slate-50"><td class="p-2 border font-mono">2</td><td class="p-2 border">31017576</td><td class="p-2 border">Escarlet Hernández</td><td class="p-2 border">Sistemas</td><td class="p-2 border">15.0</td></tr>
              </tbody>
            </table>
          </div>
          <div class="grid grid-cols-3 gap-3 text-center text-xs">
            <div class="bg-indigo-50 border border-indigo-200 rounded-lg p-2"><strong>Filas</strong><br/>registros (tuplas)</div>
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-2"><strong>Columnas</strong><br/>campos (atributos)</div>
            <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-2"><strong>PK</strong><br/>identifica único</div>
          </div>
        </div>
      `
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

          <div class="bg-slate-900 text-slate-100 rounded-xl p-4 text-sm text-center">
            En SQL escribes <strong>qué</strong> quieres… y el motor se encarga del <strong>cómo</strong>.
          </div>
        </div>
      `
    },
    {
      id: 'sql1-8',
      title: 'Subconjuntos del lenguaje SQL',
      contentHtml: `
        <div class="space-y-4">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-4">
              <h4 class="font-bold text-indigo-900">DDL — Definición</h4>
              <p class="text-xs text-indigo-800 mb-2">Define la estructura.</p>
              <div class="font-mono text-xs bg-white rounded p-2">CREATE · ALTER · DROP</div>
            </div>
            <div class="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-4">
              <h4 class="font-bold text-emerald-900">DML — Manipulación</h4>
              <p class="text-xs text-emerald-800 mb-2">Manipula los datos.</p>
              <div class="font-mono text-xs bg-white rounded p-2">INSERT · UPDATE · DELETE</div>
              <p class="text-xs text-emerald-700 mt-1">SELECT se clasifica aparte como <strong>DQL</strong> (consulta).</p>
            </div>
            <div class="bg-amber-50 border-2 border-amber-200 rounded-xl p-4">
              <h4 class="font-bold text-amber-900">DCL — Control</h4>
              <p class="text-xs text-amber-800 mb-2">Gestiona permisos.</p>
              <div class="font-mono text-xs bg-white rounded p-2">GRANT · REVOKE</div>
            </div>
            <div class="bg-violet-50 border-2 border-violet-200 rounded-xl p-4">
              <h4 class="font-bold text-violet-900">TCL — Transacciones</h4>
              <p class="text-xs text-violet-800 mb-2">Controla transacciones.</p>
              <div class="font-mono text-xs bg-white rounded p-2">COMMIT · ROLLBACK</div>
            </div>
          </div>
          <div class="bg-slate-50 border rounded-lg p-3 text-xs text-slate-600">
            🗺️ <strong>Panorama:</strong> los estudiamos en detalle en las semanas 2–4. Hoy solo los ubicamos.
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
            <p>💡 Elegir bien el tipo es parte del diseño: afecta el <strong>espacio</strong> y el <strong>rendimiento</strong>.</p>
            <p>⚠️ No todos son iguales en cada motor: <code>UUID</code> es nativo en PostgreSQL pero en MySQL se usa <code>CHAR(36)</code>; <code>BOOLEAN</code> en MySQL es un alias de <code>TINYINT(1)</code>. Se profundiza en la semana 2.</p>
          </div>
        </div>
      `
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

          <div>
            <p class="text-xs font-bold text-slate-500 mb-2 text-center">Orden lógico simplificado</p>
            <div class="flex flex-wrap justify-center gap-2 text-xs">
              <span class="bg-blue-50 border border-blue-200 rounded-full px-3 py-1">FROM</span>
              <span class="text-slate-500">→</span>
              <span class="bg-blue-50 border border-blue-200 rounded-full px-3 py-1">WHERE filtra filas</span>
              <span class="text-slate-500">→</span>
              <span class="bg-blue-50 border border-blue-200 rounded-full px-3 py-1">SELECT proyecta columnas</span>
              <span class="text-slate-500">→</span>
              <span class="bg-blue-50 border border-blue-200 rounded-full px-3 py-1">ORDER BY ordena</span>
            </div>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-900">
            ⚠️ Dos matices: el orden <strong>completo</strong> incluye <code>GROUP BY</code>/<code>HAVING</code> (semana 2), y un alias definido en <code>SELECT</code> <strong>no</strong> puede usarse en <code>WHERE</code>, pero <strong>sí</strong> en <code>ORDER BY</code>.
          </div>
        </div>
      `
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
            🧭 <strong>Plan B sin laboratorio:</strong> el aula A-01 no es laboratorio. Usa <strong>SQL Playground</strong> en móvil/laptop, trabaja en parejas (uno dicta, otro escribe) o resuelve en papel y verifica en el proyector.
          </div>
          <div class="bg-slate-50 border rounded-lg p-3 text-xs text-slate-600">
            📌 La <strong>práctica evaluada</strong> de <code>SELECT</code>/<code>WHERE</code>/<code>ORDER BY</code> y el reto de <code>GROUP BY</code> corresponden a la <strong>semana 4</strong> (10%) y a la <strong>semana 2</strong>, respectivamente.
          </div>
        </div>
      `
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
                <li>¿Qué es una clave primaria?</li>
                <li>¿WHERE vs. ORDER BY?</li>
                <li>¿Por qué SQL es declarativo?</li>
              </ul>
            </div>
            <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
              <h4 class="font-bold text-indigo-900 mb-2 text-sm">📚 Tarea</h4>
              <ul class="list-disc list-inside text-xs text-indigo-900 space-y-1">
                <li>Investigar 3 tablas de un sistema real de la zona (con PK).</li>
                <li>Leer Sánchez U01–U04.</li>
                <li>Verificar acceso a MySQL/PostgreSQL o SQL Playground.</li>
              </ul>
            </div>
          </div>

          <div class="bg-slate-50 border rounded-lg p-3 text-xs text-slate-600 text-center">
            ⏭️ <strong>Próxima semana:</strong> componentes de la BD relacional, tipos de datos a fondo y más consultas. Primer práctico evaluado en S4 (10%).
          </div>
        </div>
      `
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
            <p class="text-gray-600 mt-2">Nos vemos el próximo jueves. ¡Trae tu SGBD listo para practicar!</p>
          </div>
        </div>
      `
    }
  ]
};
