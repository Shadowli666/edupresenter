
import { Module } from '../types';

export const PYTHON_MODULE_1: Module = {
  id: 'py-mod-1',
  title: '1. Fundamentos de Python',
  description: 'Introducción al lenguaje, algoritmos, paquetes y resolución de problemas.',
  evaluation: '10% - Guía de Ejercicios',
  slides: [
    {
      id: 'py1-1',
      title: 'Introducción a Python',
      contentHtml: `
        <div class="space-y-6">
          <div class="flex items-center gap-4 mb-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python Logo" class="w-16 h-16" />
            <div>
              <h3 class="text-2xl font-bold text-slate-900">¿Qué es Python?</h3>
              <p class="text-gray-600">Un lenguaje de programación de alto nivel, interpretado y multipropósito.</p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-blue-50 p-5 rounded-xl border border-blue-100">
              <h4 class="font-bold text-blue-900 mb-2">Características Clave</h4>
              <ul class="list-disc list-inside text-sm text-blue-800 space-y-1">
                <li><strong>Legible:</strong> Sintaxis limpia, similar al inglés.</li>
                <li><strong>Interpretado:</strong> No necesita compilación previa.</li>
                <li><strong>Tipado Dinámico:</strong> No requiere declarar tipos de variables.</li>
                <li><strong>Multiplatforma:</strong> Corre en Windows, Mac, Linux.</li>
              </ul>
            </div>

            <div class="bg-yellow-50 p-5 rounded-xl border border-yellow-100">
              <h4 class="font-bold text-yellow-900 mb-2">Diferencias con C++/Java</h4>
              <div class="space-y-3 text-xs font-mono">
                <div class="bg-white p-2 rounded border border-yellow-200">
                  <span class="text-slate-400">// C++</span><br>
                  <span class="text-purple-600">int</span> main() { cout << "Hola"; }
                </div>
                <div class="bg-white p-2 rounded border border-yellow-200">
                  <span class="text-slate-400"># Python</span><br>
                  <span class="text-blue-600">print</span>(<span class="text-green-600">"Hola"</span>)
                </div>
              </div>
              <p class="text-xs text-yellow-800 mt-2">¡Adiós a los puntos y comas (;) y a las llaves {}!</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py1-2',
      title: 'Algoritmos y Resolución de Problemas',
      contentHtml: `
        <div class="space-y-8">
          <p class="text-gray-700">Antes de programar, debemos entender el problema. Python es solo la herramienta para expresar la solución.</p>

          <div class="relative border-l-4 border-slate-200 ml-4 pl-8 py-2 space-y-8">
            <div class="relative">
              <div class="absolute -left-[42px] bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
              <h4 class="font-bold text-slate-800">Entender el Problema</h4>
              <p class="text-sm text-slate-600">¿Qué datos entran? ¿Qué resultado se espera? (Análisis).</p>
            </div>
            <div class="relative">
              <div class="absolute -left-[42px] bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
              <h4 class="font-bold text-slate-800">Diseñar el Algoritmo</h4>
              <p class="text-sm text-slate-600">Pasos lógicos secuenciales (Pseudocódigo o Diagrama de Flujo).</p>
            </div>
            <div class="relative">
              <div class="absolute -left-[42px] bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
              <h4 class="font-bold text-slate-800">Codificar (Scripting)</h4>
              <p class="text-sm text-slate-600">Traducir la lógica a sintaxis Python (.py).</p>
            </div>
            <div class="relative">
              <div class="absolute -left-[42px] bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
              <h4 class="font-bold text-slate-800">Depurar (Debugging)</h4>
              <p class="text-sm text-slate-600">Corregir errores de sintaxis o lógica.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py1-3',
      title: 'Paquetes y Entorno',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-white p-6 rounded-xl border shadow-sm">
            <h3 class="font-bold text-slate-800 mb-4 border-b pb-2">Gestión de Paquetes (PIP)</h3>
            <p class="text-gray-700 mb-4 text-sm">
              Python destaca por su inmensa comunidad. Un <strong>paquete</strong> es un directorio con scripts de Python que ofrecen funcionalidades extra (ej. NumPy para matemáticas, Pandas para datos).
            </p>
            <div class="bg-slate-900 text-green-400 font-mono text-xs p-4 rounded">
              $ pip install pandas<br>
              $ pip list<br>
              $ pip uninstall numpy
            </div>
            <p class="text-xs text-slate-500 mt-2">
              <strong>PyPI</strong> (Python Package Index) es el repositorio oficial de software.
            </p>
          </div>

          <div class="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
            <h3 class="font-bold text-indigo-900 mb-2">Modo Interactivo vs Script</h3>
            <div class="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong class="block text-indigo-800 mb-1">Modo Interactivo (REPL)</strong>
                <p class="text-indigo-700 text-xs">Escribes una línea y se ejecuta al instante. Ideal para pruebas rápidas en la consola.</p>
                <code class="block bg-white px-2 py-1 mt-1 rounded text-xs">>>> 2 + 2<br>4</code>
              </div>
              <div>
                <strong class="block text-indigo-800 mb-1">Modo Script</strong>
                <p class="text-indigo-700 text-xs">Escribes todo el código en un archivo <code>.py</code> y lo ejecutas completo.</p>
                <code class="block bg-white px-2 py-1 mt-1 rounded text-xs">python main.py</code>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py1-4',
      title: 'Práctica: Hola Mundo y Variables',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-green-50 border border-green-200 p-4 rounded-lg mb-4">
            <p class="text-green-800 font-bold">Evaluación (10%): Primeros Scripts</p>
            <p class="text-green-700 text-sm">Cree un archivo <code>practica1.py</code> y resuelva los siguientes ejercicios.</p>
          </div>

          <div class="space-y-4">
             <!-- Ejercicio 1 -->
             <div class="bg-white p-4 border rounded shadow-sm">
               <h4 class="font-bold text-slate-800 mb-2">1. Saludo Personalizado</h4>
               <p class="text-sm text-slate-600 mb-3">Use <code>input()</code> para pedir el nombre y <code>print()</code> para saludar.</p>
               <details>
                 <summary class="text-xs text-blue-600 cursor-pointer font-bold">Ver Código</summary>
                 <div class="bg-slate-900 text-slate-300 p-3 rounded font-mono text-xs mt-2">
                   nombre = <span class="text-blue-400">input</span>(<span class="text-green-400">"¿Cómo te llamas? "</span>)<br>
                   <span class="text-blue-400">print</span>(<span class="text-green-400">"Hola "</span> + nombre)
                 </div>
               </details>
             </div>

             <!-- Ejercicio 2 -->
             <div class="bg-white p-4 border rounded shadow-sm">
               <h4 class="font-bold text-slate-800 mb-2">2. Suma Simple</h4>
               <p class="text-sm text-slate-600 mb-3">Pida dos números y muestre la suma. ¡Cuidado con los tipos de datos!</p>
               <details>
                 <summary class="text-xs text-blue-600 cursor-pointer font-bold">Ver Código</summary>
                 <div class="bg-slate-900 text-slate-300 p-3 rounded font-mono text-xs mt-2">
                   n1 = <span class="text-purple-400">int</span>(<span class="text-blue-400">input</span>(<span class="text-green-400">"Num 1: "</span>))<br>
                   n2 = <span class="text-purple-400">int</span>(<span class="text-blue-400">input</span>(<span class="text-green-400">"Num 2: "</span>))<br>
                   <span class="text-blue-400">print</span>(n1 + n2)
                 </div>
               </details>
             </div>
          </div>
        </div>
      `
    }
  ]
};
