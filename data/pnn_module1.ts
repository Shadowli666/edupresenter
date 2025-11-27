
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
            <div class="mermaid">
              graph TD
                A((A)) --- B((B))
                A --- C((C))
                B --- D((D))
                B --- E((E))
                C --- F((F))
                
                style A fill:#4f46e5,color:#fff,stroke:#312e81,stroke-width:2px
                style B fill:#e0e7ff,stroke:#4f46e5,stroke-width:2px
                style C fill:#e0e7ff,stroke:#4f46e5,stroke-width:2px
                style D fill:#f5f3ff,stroke:#818cf8
                style E fill:#f5f3ff,stroke:#818cf8
                style F fill:#f5f3ff,stroke:#818cf8
            </div>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div class="bg-slate-50 p-3 rounded border">
               <strong class="block text-slate-800">Raíz</strong>
               <span class="text-slate-600">Nodo único sin padre (A).</span>
            </div>
            <div class="bg-slate-50 p-3 rounded border">
               <strong class="block text-slate-800">Hoja</strong>
               <span class="text-slate-600">Nodo que no tiene hijos (D, E, F).</span>
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

          <div class="bg-white p-5 rounded-xl border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-3">Mini-actividad guiada</h4>
            <ol class="list-decimal list-inside text-sm text-slate-700 space-y-2">
              <li>En el diagrama de la slide inicial, identifica el <strong>nivel</strong> de cada nodo.</li>
              <li>Calcula la <strong>altura</strong> del árbol.</li>
              <li>Indica el <strong>grado</strong> de la raíz y de B.</li>
            </ol>
            <p class="text-xs text-slate-500 mt-2">Discusión breve: ¿cómo cambia la altura si agregamos un hijo a F?</p>
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
