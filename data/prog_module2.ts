
import { Module } from '../types';

export const PROG_MODULE_2: Module = {
  id: 'prog-mod-2',
  title: '2. Archivos y Organización',
  description: 'Concepto, componentes y tipos de archivos.',
  evaluation: '0% - Ejercicio Teórico/Práctico',
  slides: [
    {
      id: 'p2-1',
      title: 'Concepto de Archivo',
      contentHtml: `
        <div class="space-y-6">
          <div class="prose max-w-none text-gray-700">
            <p>Un <strong>Archivo</strong> (File) es una colección de información relacionada que se almacena en un dispositivo de almacenamiento secundario (Disco Duro, SSD, USB). Desde el punto de vista del programador, es una secuencia de bytes.</p>
          </div>

          <h4 class="font-bold text-lg text-slate-800 mt-4">Componentes Básicos</h4>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-amber-50 p-4 rounded border border-amber-100 text-center">
              <span class="block font-bold text-amber-800 mb-1">Nombre</span>
              <span class="text-xs text-amber-700">Identificador único en el directorio (ej. "datos")</span>
            </div>
            <div class="bg-amber-50 p-4 rounded border border-amber-100 text-center">
              <span class="block font-bold text-amber-800 mb-1">Extensión</span>
              <span class="text-xs text-amber-700">Indica el tipo de contenido (ej. .txt, .py, .cpp)</span>
            </div>
            <div class="bg-amber-50 p-4 rounded border border-amber-100 text-center">
              <span class="block font-bold text-amber-800 mb-1">Contenido</span>
              <span class="text-xs text-amber-700">Datos almacenados (Texto plano o Binario)</span>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'p2-2',
      title: 'Organización y Acceso',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Secuencial -->
          <div class="border rounded-xl p-6 shadow-sm bg-white">
            <div class="flex items-center gap-3 mb-4">
              <div class="bg-blue-100 p-2 rounded text-blue-600">
                 <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h7"></path></svg>
              </div>
              <h3 class="text-lg font-bold text-slate-800">Acceso Secuencial</h3>
            </div>
            <p class="text-sm text-gray-600 mb-4">
              Para leer un dato específico, se debe leer todo lo anterior. Similar a un cassette de música.
            </p>
            <ul class="list-disc list-inside text-xs text-gray-500 bg-slate-50 p-3 rounded">
              <li>Archivos de Texto (.txt)</li>
              <li>Lectura línea por línea</li>
              <li>Menos eficiente para búsquedas</li>
            </ul>
          </div>

          <!-- Aleatorio -->
          <div class="border rounded-xl p-6 shadow-sm bg-white">
            <div class="flex items-center gap-3 mb-4">
              <div class="bg-purple-100 p-2 rounded text-purple-600">
                 <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <h3 class="text-lg font-bold text-slate-800">Acceso Aleatorio (Directo)</h3>
            </div>
            <p class="text-sm text-gray-600 mb-4">
              Se puede acceder a cualquier parte del archivo directamente usando una posición o índice. Similar a un Disco de Vinilo o CD.
            </p>
             <ul class="list-disc list-inside text-xs text-gray-500 bg-slate-50 p-3 rounded">
              <li>Archivos Binarios (.dat)</li>
              <li>Registros de longitud fija</li>
              <li>Muy rápido para búsquedas</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'p2-3',
      title: 'Práctica: Archivos',
      contentHtml: `
        <div class="space-y-8">
          <p class="text-gray-600">Ejercicios conceptuales sobre manejo de archivos.</p>

          <div class="bg-white border rounded-lg p-6">
            <h4 class="font-bold text-slate-800 mb-4">Caso de Estudio</h4>
            <p class="text-sm text-slate-600 mb-4">
              Imagina que estás diseñando un sistema para un hospital. Necesitas guardar el historial médico de 10,000 pacientes y necesitas consultar el historial de un paciente específico por su ID instantáneamente.
            </p>
            
            <div class="bg-slate-50 p-4 rounded border border-slate-200">
              <p class="text-sm font-bold text-slate-700 mb-2">¿Qué tipo de organización de archivo elegirías?</p>
              
              <details class="group">
                <summary class="text-xs text-blue-600 cursor-pointer hover:underline select-none">Ver Respuesta</summary>
                <div class="mt-2 text-sm text-green-700 bg-green-50 p-3 rounded">
                  <strong>Acceso Aleatorio / Directo.</strong> <br>
                  El acceso secuencial sería demasiado lento (tendrías que leer los 9,999 pacientes anteriores para llegar al último). El acceso directo permite saltar a la posición exacta del ID.
                </div>
              </details>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'p2-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-6 animate-pulse">
             <span class="text-6xl font-bold select-none">?</span>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Persistencia de Datos</h3>
          <p class="text-center text-gray-600 max-w-md">
            Los archivos son la forma más básica de persistencia. ¿Dudas sobre texto vs binario?
          </p>
        </div>
      `
    },
    {
      id: 'p2-end-thanks',
      title: 'Gracias por su atención',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">Fin de la Clase</h2>
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-amber-500 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "Verba volant, scripta manent" (Las palabras vuelan, lo escrito permanece).
            </p>
            <footer class="flex items-center justify-center gap-2">
              <div class="h-px w-8 bg-slate-300"></div>
              <cite class="not-italic font-bold text-slate-900">Proverbio Latino</cite>
            </footer>
          </blockquote>
        </div>
      `
    }
  ]
};
