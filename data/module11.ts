
import { Module } from '../types';

export const MODULE_11: Module = {
  id: 'mod-11',
  title: '11. Ciclos Repetir y Para',
  description: 'Repetir Hasta, Para, Contadores y Acumuladores.',
  evaluation: '0% - Práctica',
  slides: [
    {
      id: 's11-1',
      title: 'Ciclo Repetir (Repeat Until)',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Similar al Mientras, pero evalúa la condición <strong>al final</strong>. Esto garantiza que el bloque de instrucciones se ejecute <strong>al menos una vez</strong>.
          </p>

          <div class="bg-white p-4 border rounded shadow-sm">
             <h4 class="font-bold text-slate-800 mb-2">Sintaxis</h4>
             <div class="font-mono text-sm bg-slate-100 p-3 rounded text-slate-700">
               <span class="text-purple-600 font-bold">Repetir</span><br>
               &nbsp;&nbsp;Instrucciones...<br>
               &nbsp;&nbsp;Leer opcion;<br>
               <span class="text-purple-600 font-bold">Hasta Que</span> (opcion == 0)
             </div>
          </div>
          
          <p class="text-sm text-gray-500 mt-2">Ideal para validar entradas de usuario (ej. "Ingrese un positivo", repetir si ingresa negativo).</p>
        </div>
      `
    },
    {
      id: 's11-2',
      title: 'Ciclo Para (For)',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Se utiliza cuando <strong>sabemos de antemano cuántas veces</strong> queremos repetir el ciclo. Maneja automáticamente la inicialización, condición y aumento de la variable.
          </p>

          <div class="bg-white p-4 border rounded shadow-sm">
             <h4 class="font-bold text-slate-800 mb-2">Sintaxis</h4>
             <div class="font-mono text-sm bg-slate-100 p-3 rounded text-slate-700">
               <span class="text-purple-600 font-bold">Para</span> i = 1 <span class="text-purple-600 font-bold">Hasta</span> 10 <span class="text-purple-600 font-bold">Con Paso</span> 1 <span class="text-purple-600 font-bold">Hacer</span><br>
               &nbsp;&nbsp;Escribir i;<br>
               <span class="text-purple-600 font-bold">FinPara</span>
             </div>
          </div>
        </div>
      `
    },
    {
      id: 's11-3',
      title: 'Contadores y Acumuladores',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-blue-50 p-5 rounded-xl border border-blue-100">
            <h3 class="text-lg font-bold text-blue-900 mb-2">Contador</h3>
            <p class="text-sm text-blue-800 mb-3">Variable que se incrementa en un valor fijo (generalmente 1) para contar sucesos.</p>
            <code class="bg-white px-2 py-1 rounded border text-xs font-mono">c = c + 1</code>
            <p class="text-xs mt-2 text-slate-500">Ej: Contar alumnos aprobados.</p>
          </div>

          <div class="bg-green-50 p-5 rounded-xl border border-green-100">
            <h3 class="text-lg font-bold text-green-900 mb-2">Acumulador</h3>
            <p class="text-sm text-green-800 mb-3">Variable que se incrementa en un valor variable. Suma valores sucesivos.</p>
            <code class="bg-white px-2 py-1 rounded border text-xs font-mono">suma = suma + nota</code>
            <p class="text-xs mt-2 text-slate-500">Ej: Calcular el total de ventas del día.</p>
          </div>
        </div>
      `
    },
    {
      id: 's11-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mb-6 animate-bounce">
             <span class="text-6xl font-bold select-none">?</span>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Ciclos Determinados</h3>
          <p class="text-center text-gray-600 max-w-md">
            El ciclo 'Para' es el más usado en programación. ¿Dudas sobre su sintaxis o funcionamiento?
          </p>
        </div>
      `
    },
    {
      id: 's11-end-thanks',
      title: 'Gracias por su atención',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">Fin de la Clase</h2>
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-teal-500 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "El primer paso de la ignorancia es presumir de saber, y muchos sabrían si no pensaran que saben."
            </p>
            <footer class="flex items-center justify-center gap-2">
              <div class="h-px w-8 bg-slate-300"></div>
              <cite class="not-italic font-bold text-slate-900">Baltasar Gracián</cite>
            </footer>
          </blockquote>
        </div>
      `
    }
  ]
};
