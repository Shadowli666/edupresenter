import { Module } from '../../types';

export const PYTHON_MODULE_1: Module = {
  id: 'py-mod-1',
  title: '1. Fundamentos de Python',
  description: 'Arquitectura del lenguaje, intérprete, gestión de paquetes y filosofía de diseño.',
  evaluation: '10% - Taller de Configuración',
  slides: [
    {
      id: 'py1-1',
      title: 'Python: El Lenguaje de Alto Nivel',
      notes: 'Introducción técnica.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full space-y-6">
          <div class="text-center max-w-4xl">
            <h1 class="text-3xl font-bold text-slate-900 mb-4">Python</h1>
            <p class="text-lg text-slate-700">
              Un lenguaje interpretado, multiparadigma y de tipado dinámico.
              Diseñado para priorizar la <strong>legibilidad</strong> y la productividad del desarrollador sobre el rendimiento bruto de la máquina.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
            <div class="bg-white p-6 rounded-xl shadow border border-slate-200 flex flex-col items-center">
              <div class="w-16 h-16 mb-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" />
              </div>
              <h3 class="font-bold text-slate-800">Filosofía (The Zen of Python)</h3>
              <ul class="text-xs text-slate-600 mt-2 italic space-y-1 text-center">
                <li>"Beautiful is better than ugly."</li>
                <li>"Explicit is better than implicit."</li>
                <li>"Simple is better than complex."</li>
              </ul>
            </div>

            <div class="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 class="font-bold text-slate-800 mb-2">Abstracción</h3>
              <div class="space-y-3 text-xs font-mono">
                <div class="bg-white p-2 rounded border border-red-200 opacity-70">
                  <span class="text-slate-400">// C (Bajo Nivel)</span><br>
                  <span class="text-purple-600">char</span>* s = malloc(10);<br>
                  strcpy(s, "Hola");
                </div>
                <div class="bg-white p-2 rounded border border-green-200 shadow-md transform scale-105">
                  <span class="text-slate-400"># Python (Alto Nivel)</span><br>
                  s = <span class="text-green-600">"Hola"</span>
                </div>
              </div>
              <p class="text-xs text-slate-500 mt-2">
                Python gestiona la memoria automáticamente (Garbage Collector).
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py1-2-architecture',
      title: 'Arquitectura del Intérprete',
      notes: 'Cómo funciona por dentro.',
      contentHtml: `
        <div class="flex flex-col h-full space-y-6">
          <h3 class="text-2xl font-bold text-slate-800">De Código Fuente a Ejecución</h3>
          <p class="text-slate-600 text-sm">
            Python no compila a código máquina directamente (como C++). Compila a <strong>Bytecode</strong>, que es ejecutado por la Python Virtual Machine (PVM).
          </p>
          
          <div class="flex-1 flex items-center justify-center">
            <div class="flex items-center gap-4">
              <!-- Source -->
              <div class="flex flex-col items-center">
                <div class="w-16 h-20 bg-white border-2 border-blue-500 rounded flex items-center justify-center shadow-lg">
                  <span class="font-mono font-bold text-blue-600">.py</span>
                </div>
                <span class="text-xs font-bold mt-2">Source</span>
              </div>

              <div class="text-slate-400 text-2xl">→</div>

              <!-- Compiler -->
              <div class="flex flex-col items-center">
                <div class="w-24 h-12 bg-slate-800 text-white rounded flex items-center justify-center text-xs font-bold shadow">
                  Compilador
                </div>
              </div>

              <div class="text-slate-400 text-2xl">→</div>

              <!-- Bytecode -->
              <div class="flex flex-col items-center">
                <div class="w-16 h-20 bg-slate-100 border-2 border-slate-400 border-dashed rounded flex items-center justify-center">
                  <span class="font-mono font-bold text-slate-500 text-xs">.pyc</span>
                </div>
                <span class="text-xs font-bold mt-2">Bytecode</span>
              </div>

              <div class="text-slate-400 text-2xl">→</div>

              <!-- PVM -->
              <div class="flex flex-col items-center">
                <div class="w-24 h-24 bg-green-100 border-4 border-green-500 rounded-full flex flex-col items-center justify-center shadow-xl animate-pulse-slow">
                  <span class="font-bold text-green-800">PVM</span>
                  <span class="text-[10px] text-green-600">Virtual Machine</span>
                </div>
                <span class="text-xs font-bold mt-2">CPU / OS</span>
              </div>
            </div>
          </div>
          
          <div class="bg-yellow-50 p-3 rounded border border-yellow-200 text-xs text-yellow-800 text-center">
            Esto hace que Python sea <strong>portable</strong> (Write Once, Run Anywhere), pero generalmente más lento que C++.
          </div>
        </div>
      `
    },
    {
      id: 'py1-3-ecosystem',
      title: 'El Ecosistema: PIP y Entornos',
      notes: 'Gestión de dependencias.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full">
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-slate-800">Gestión de Paquetes</h3>
            <p class="text-slate-600">
              La verdadera fuerza de Python no es el lenguaje, sino sus librerías.
              <strong>PyPI</strong> (Python Package Index) aloja miles de paquetes.
            </p>
            
            <div class="bg-slate-900 p-4 rounded-lg shadow-lg">
              <div class="flex items-center gap-2 mb-2 border-b border-slate-700 pb-2">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                <span class="text-xs text-slate-400 ml-2">Terminal</span>
              </div>
              <code class="text-xs font-mono text-green-400">
                $ pip install numpy<br>
                $ pip install pandas<br>
                $ pip list
              </code>
            </div>
          </div>

          <div class="bg-white p-6 rounded-xl shadow border border-slate-200">
            <h4 class="font-bold text-slate-700 mb-4">Entornos Virtuales (Virtual Environments)</h4>
            <p class="text-sm text-slate-600 mb-4">
              Es una mala práctica instalar todo en el sistema global. Usamos entornos aislados para cada proyecto.
            </p>
            
            <div class="flex flex-col gap-2">
              <div class="flex items-center gap-4 p-2 bg-blue-50 rounded border border-blue-100">
                <div class="font-bold text-blue-800 text-xs">Proyecto A</div>
                <div class="text-[10px] text-slate-500">Usa Django 2.0</div>
              </div>
              <div class="flex items-center justify-center text-slate-400 text-xs">vs</div>
              <div class="flex items-center gap-4 p-2 bg-green-50 rounded border border-green-100">
                <div class="font-bold text-green-800 text-xs">Proyecto B</div>
                <div class="text-[10px] text-slate-500">Usa Django 3.0</div>
              </div>
            </div>
            <p class="text-xs text-slate-500 mt-4 italic">
              Herramientas: venv, conda, poetry.
            </p>
          </div>
        </div>
      `
    },
    {
      id: 'py1-4-syntax',
      title: 'Sintaxis: La Indentación',
      notes: 'Bloques de código.',
      contentHtml: `
        <div class="flex flex-col h-full">
          <h3 class="text-xl font-bold text-slate-800 mb-4">Estructura Visual Obligatoria</h3>
          <p class="text-slate-600 mb-4 text-sm">
            En Python, la indentación (espacios al inicio de la línea) no es estética, es <strong>semántica</strong>. Define los bloques de código.
          </p>
          
          <div class="grid grid-cols-2 gap-8 flex-1">
            <div class="bg-slate-900 p-4 rounded-xl overflow-hidden relative">
              <div class="absolute top-2 right-2 text-xs text-slate-500">Python</div>
              <pre class="text-xs font-mono text-blue-300">
if condition:
<span class="bg-white/10 text-white px-1">    </span>print("Dentro del if")
<span class="bg-white/10 text-white px-1">    </span>if subcondition:
<span class="bg-white/10 text-white px-1">        </span>print("Anidado")
print("Fuera del if")
              </pre>
              <div class="mt-4 text-[10px] text-green-400">
                ✓ Limpio y forzosamente ordenado.
              </div>
            </div>

            <div class="bg-slate-100 p-4 rounded-xl overflow-hidden relative opacity-70">
              <div class="absolute top-2 right-2 text-xs text-slate-500">Java/C++</div>
              <pre class="text-xs font-mono text-slate-600">
if (condition) {
print("Dentro del if"); // Feo pero válido
    if (subcondition) { print("Anidado"); }
}
print("Fuera del if");
              </pre>
              <div class="mt-4 text-[10px] text-red-500">
                ⚠ El compilador ignora el desorden.
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py1-5-summary',
      title: 'Resumen',
      notes: 'Conclusión.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center space-y-8">
          <h2 class="text-3xl font-bold text-slate-800">El Lenguaje "Pegamento"</h2>
          <p class="text-xl text-slate-600 max-w-2xl">
            Python es fácil de aprender pero difícil de dominar. Se usa en desarrollo web, ciencia de datos, inteligencia artificial y automatización.
          </p>
          <div class="mt-8">
            <p class="text-slate-500 italic">Próxima clase: Variables, Tipos de Datos y Operadores.</p>
          </div>
        </div>
      `
    }
  ]
};
