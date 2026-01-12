import { Module } from '../../types';

export const PYTHON_MODULE_16: Module = {
  id: 'py-mod-16',
  title: '16. Persistencia de Datos (Archivos)',
  description: 'Guardando información más allá de la ejecución.',
  evaluation: 'Taller Práctico',
  slides: [
    {
      id: 'py16-1-ram-vs-disk',
      title: 'Memoria Volátil vs Persistente',
      notes: '¿Por qué se borran mis datos?',
      contentHtml: `
        <div class="flex flex-col h-full items-center justify-center space-y-8">
          <div class="grid md:grid-cols-2 gap-12 w-full max-w-4xl">
            <!-- RAM -->
            <div class="bg-red-50 p-6 rounded-xl border border-red-200 flex flex-col items-center text-center opacity-70">
              <div class="text-6xl mb-4">⚡</div>
              <h3 class="text-2xl font-bold text-red-900">RAM</h3>
              <p class="text-sm text-red-700 mt-2">
                Rápida pero <strong>volátil</strong>.
                <br>Si apagas el PC o cierras el programa, los datos desaparecen.
              </p>
              <div class="mt-4 bg-white px-4 py-2 rounded border border-red-100 text-xs font-mono text-red-500">
                variables = [...]
              </div>
            </div>

            <!-- Disk -->
            <div class="bg-green-50 p-6 rounded-xl border-2 border-green-500 flex flex-col items-center text-center transform scale-105 shadow-xl">
              <div class="text-6xl mb-4">💾</div>
              <h3 class="text-2xl font-bold text-green-900">Disco Duro</h3>
              <p class="text-sm text-green-700 mt-2">
                Lento pero <strong>persistente</strong>.
                <br>Los datos sobreviven a reinicios y cierres.
              </p>
              <div class="mt-4 bg-white px-4 py-2 rounded border border-green-100 text-xs font-mono text-green-600">
                archivo.txt
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py16-2-open-modes',
      title: 'Modos de Apertura',
      notes: 'Lectura (r), Escritura (w), Append (a).',
      contentHtml: `
        <div class="flex flex-col h-full space-y-6 justify-center">
          <h3 class="text-2xl font-bold text-slate-800 text-center">La función <code>open()</code></h3>
          
          <div class="grid grid-cols-3 gap-6">
            <!-- Read -->
            <div class="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500 hover:bg-blue-50 transition-colors">
              <div class="text-4xl mb-2 text-center">📖</div>
              <div class="font-mono text-center font-bold text-blue-700 text-xl mb-2">'r'</div>
              <h4 class="font-bold text-slate-700 text-center">Read (Leer)</h4>
              <p class="text-xs text-slate-500 text-center mt-2">
                Solo lectura. Error si no existe. El puntero inicia al principio.
              </p>
            </div>

            <!-- Write -->
            <div class="bg-white p-6 rounded-xl shadow-md border-t-4 border-red-500 hover:bg-red-50 transition-colors">
              <div class="text-4xl mb-2 text-center">✍️</div>
              <div class="font-mono text-center font-bold text-red-700 text-xl mb-2">'w'</div>
              <h4 class="font-bold text-slate-700 text-center">Write (Escribir)</h4>
              <p class="text-xs text-slate-500 text-center mt-2">
                Sobreescribe TODO. Crea el archivo si no existe. ¡Cuidado!
              </p>
            </div>

            <!-- Append -->
            <div class="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-500 hover:bg-green-50 transition-colors">
              <div class="text-4xl mb-2 text-center">➕</div>
              <div class="font-mono text-center font-bold text-green-700 text-xl mb-2">'a'</div>
              <h4 class="font-bold text-slate-700 text-center">Append (Anexar)</h4>
              <p class="text-xs text-slate-500 text-center mt-2">
                Agrega al final sin borrar. Crea el archivo si no existe.
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py16-3-context-manager',
      title: 'Context Manager (with)',
      notes: 'La forma segura de abrir archivos.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full items-center">
          <div class="space-y-6">
            <div class="bg-red-50 p-4 rounded-xl border border-red-200 opacity-60">
              <h4 class="font-bold text-red-900 mb-2">❌ Forma Antigua (Peligrosa)</h4>
              <div class="font-mono text-xs text-red-800">
                f = open("data.txt", "w")<br>
                f.write("Hola")<br>
                <span class="font-bold"># Si falla aquí, f nunca se cierra!</span><br>
                f.close()
              </div>
            </div>

            <div class="bg-green-50 p-6 rounded-xl border-l-4 border-green-500 shadow-lg">
              <h4 class="font-bold text-green-900 mb-2">✅ Forma Pythonica (Segura)</h4>
              <p class="text-sm text-green-800 mb-4">
                Usando <code>with</code>, Python garantiza que el archivo se cierre automáticamente, incluso si hay errores.
              </p>
              <div class="bg-slate-900 p-4 rounded-lg font-mono text-sm text-slate-300">
                <span class="text-purple-400">with</span> <span class="text-blue-400">open</span>(<span class="text-green-400">"data.txt"</span>, <span class="text-green-400">"w"</span>) <span class="text-purple-400">as</span> f:<br>
                &nbsp;&nbsp;f.write(<span class="text-green-400">"Hola Mundo"</span>)<br>
                <span class="text-gray-500"># ¡Se cierra solo aquí!</span>
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center justify-center">
            <div class="bg-white p-6 rounded-xl shadow-lg border border-slate-200 w-64 text-center">
              <div class="text-4xl mb-4">🛡️</div>
              <h3 class="font-bold text-slate-800">Gestión Automática</h3>
              <p class="text-xs text-slate-500 mt-2">
                El Context Manager se encarga de liberar los recursos del sistema operativo, evitando "memory leaks" o archivos bloqueados.
              </p>
            </div>
          </div>
        </div>
      `
    }
  ]
};
