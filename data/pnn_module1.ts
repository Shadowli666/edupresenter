
import { Module } from '../types';

export const PNN_MODULE_1: Module = {
  id: 'pnn-mod-1',
  title: '1. Teoría de Árboles',
  description: 'Conceptos fundamentales, altura, nivel y árboles binarios.',
  evaluation: '0% - Diagnóstico',
  slides: [
    {
      id: 'pnn1-1',
      title: 'Concepto de Árbol',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700 text-lg">
            Un <strong>Árbol</strong> es una estructura de datos no lineal y jerárquica. Consiste en un conjunto de nodos conectados por aristas (ramas), donde existe un nodo especial llamado <strong>Raíz</strong>.
          </p>

          <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex justify-center">
            <div class="flex flex-col items-center gap-4">
               <!-- Root -->
               <div class="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold shadow-md z-10">A</div>
               
               <div class="flex gap-16 relative">
                  <!-- Branches lines (Visual hack) -->
                  <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-32 h-px bg-slate-400"></div>
                  <div class="absolute top-0 left-8 -translate-y-4 w-px h-4 bg-slate-400"></div>
                  <div class="absolute top-0 right-8 -translate-y-4 w-px h-4 bg-slate-400"></div>

                  <!-- Level 1 -->
                  <div class="flex flex-col items-center">
                     <div class="w-12 h-12 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold border border-indigo-200">B</div>
                     <span class="text-xs text-slate-400 mt-1">Hijo izq</span>
                  </div>
                  <div class="flex flex-col items-center">
                     <div class="w-12 h-12 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold border border-indigo-200">C</div>
                     <span class="text-xs text-slate-400 mt-1">Hijo der</span>
                  </div>
               </div>
            </div>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div class="bg-slate-50 p-3 rounded border">
               <strong class="block text-slate-800">Raíz</strong>
               <span class="text-slate-600">Nodo único sin padre.</span>
            </div>
            <div class="bg-slate-50 p-3 rounded border">
               <strong class="block text-slate-800">Hoja</strong>
               <span class="text-slate-600">Nodo que no tiene hijos.</span>
            </div>
             <div class="bg-slate-50 p-3 rounded border">
               <strong class="block text-slate-800">Rama</strong>
               <span class="text-slate-600">Conexión entre dos nodos.</span>
            </div>
             <div class="bg-slate-50 p-3 rounded border">
               <strong class="block text-slate-800">Sub-árbol</strong>
               <span class="text-slate-600">Cualquier estructura descendiente.</span>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn1-2',
      title: 'Propiedades: Nivel, Altura y Grado',
      contentHtml: `
        <div class="space-y-8">
          <div class="grid md:grid-cols-3 gap-6">
            
            <!-- Nivel -->
            <div class="bg-white p-5 rounded-xl border-t-4 border-blue-500 shadow-sm">
              <h3 class="text-lg font-bold text-slate-800 mb-2">Nivel (Level)</h3>
              <p class="text-sm text-slate-600 mb-3">Es la distancia desde la raíz hasta el nodo.</p>
              <ul class="text-xs font-mono bg-slate-100 p-2 rounded text-slate-700">
                <li>Raíz = Nivel 0 (o 1 según autor)</li>
                <li>Hijos = Nivel 1</li>
                <li>Nietos = Nivel 2</li>
              </ul>
            </div>

            <!-- Altura -->
            <div class="bg-white p-5 rounded-xl border-t-4 border-green-500 shadow-sm">
              <h3 class="text-lg font-bold text-slate-800 mb-2">Altura (Height)</h3>
              <p class="text-sm text-slate-600 mb-3">Es el número máximo de niveles que tiene el árbol (el camino más largo de raíz a hoja).</p>
              <div class="text-center text-green-600 font-bold text-2xl">h</div>
            </div>

            <!-- Grado -->
            <div class="bg-white p-5 rounded-xl border-t-4 border-purple-500 shadow-sm">
              <h3 class="text-lg font-bold text-slate-800 mb-2">Grado (Degree)</h3>
              <p class="text-sm text-slate-600 mb-3">Número de hijos que tiene un nodo.</p>
              <ul class="text-xs font-mono bg-slate-100 p-2 rounded text-slate-700">
                <li>Grado del Nodo: Sus hijos directos.</li>
                <li>Grado del Árbol: El máximo grado hallado.</li>
              </ul>
            </div>
          </div>

          <div class="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
            <h4 class="font-bold text-yellow-900 mb-2">Árboles Binarios</h4>
            <p class="text-sm text-yellow-800">
              Es un tipo especial de árbol donde el <strong>grado máximo es 2</strong>. Cada nodo puede tener como máximo un hijo izquierdo y un hijo derecho. Son la base para estructuras de búsqueda eficientes (BST).
            </p>
          </div>
        </div>
      `
    },
    {
      id: 'pnn1-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="text-6xl font-bold text-indigo-600 mb-6 select-none">?</div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Jerarquías de Datos</h3>
          <p class="text-center text-gray-600 max-w-md">
            Los árboles son fundamentales para entender sistemas de archivos y bases de datos. ¿Dudas sobre la terminología?
          </p>
        </div>
      `
    },
    {
      id: 'pnn1-end-thanks',
      title: 'Gracias por su atención',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">Fin de la Clase</h2>
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-indigo-500 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "Un árbol sin raíces se cae, un programa sin estructura falla."
            </p>
            <footer class="flex items-center justify-center gap-2">
              <div class="h-px w-8 bg-slate-300"></div>
              <cite class="not-italic font-bold text-slate-900">Proverbio de la Ingeniería</cite>
            </footer>
          </blockquote>
        </div>
      `
    }
  ]
};
