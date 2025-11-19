
import { Module } from '../types';

export const MODULE_10: Module = {
  id: 'mod-10',
  title: '10. Estructuras de Repetición (Mientras)',
  description: 'Ciclos condicionales y control de flujo repetitivo.',
  evaluation: '0% - Práctica',
  slides: [
    {
      id: 's10-1',
      title: 'Ciclo Mientras (While)',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Estructura que repite un bloque de instrucciones <strong>mientras una condición sea Verdadera</strong>. La condición se evalúa <strong>antes</strong> de entrar al ciclo.
          </p>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 border rounded shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">Sintaxis</h4>
              <div class="font-mono text-sm bg-slate-100 p-3 rounded text-slate-700">
                <span class="text-purple-600 font-bold">Mientras</span> (condición) <span class="text-purple-600 font-bold">Hacer</span><br>
                &nbsp;&nbsp;Instrucciones...<br>
                &nbsp;&nbsp;Actualizar variable de control<br>
                <span class="text-purple-600 font-bold">FinMientras</span>
              </div>
            </div>
            
            <div class="bg-red-50 p-4 border border-red-200 rounded text-sm text-red-800">
              <strong>¡Peligro! Ciclo Infinito</strong><br>
              Si no actualizas la variable que controla la condición dentro del ciclo, este nunca terminará y el programa se colgará.
            </div>
          </div>
        </div>
      `
    },
    {
      id: 's10-2',
      title: 'Ejemplo de Trazado',
      contentHtml: `
        <div class="space-y-6">
           <p class="text-gray-600">Imprimir los números del 1 al 5.</p>
           
           <div class="flex flex-col md:flex-row gap-6">
             <div class="font-mono text-sm bg-slate-900 text-green-400 p-4 rounded flex-1">
               i = 1;<br>
               Mientras (i <= 5) Hacer<br>
               &nbsp;&nbsp;Escribir i;<br>
               &nbsp;&nbsp;i = i + 1;<br>
               FinMientras
             </div>

             <div class="bg-white border p-4 rounded flex-1 text-sm">
               <table class="w-full text-left">
                 <thead class="border-b"><tr><th>Iteración</th><th>Valor i</th><th>Condición (i<=5)</th><th>Salida</th></tr></thead>
                 <tbody>
                   <tr><td>1</td><td>1</td><td class="text-green-600">V</td><td>1</td></tr>
                   <tr><td>2</td><td>2</td><td class="text-green-600">V</td><td>2</td></tr>
                   <tr><td>3</td><td>3</td><td class="text-green-600">V</td><td>3</td></tr>
                   <tr><td>4</td><td>4</td><td class="text-green-600">V</td><td>4</td></tr>
                   <tr><td>5</td><td>5</td><td class="text-green-600">V</td><td>5</td></tr>
                   <tr class="bg-slate-100"><td>6</td><td>6</td><td class="text-red-600">F (Sale)</td><td>-</td></tr>
                 </tbody>
               </table>
             </div>
           </div>
        </div>
      `
    },
    {
      id: 's10-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 animate-spin-slow">
             <span class="text-6xl font-bold select-none">?</span>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Bucles y Ciclos</h3>
          <p class="text-center text-gray-600 max-w-md">
            El 'Mientras' es fundamental. ¿Entienden por qué evalúa antes de entrar?
          </p>
        </div>
      `
    },
    {
      id: 's10-end-thanks',
      title: 'Gracias por su atención',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">Fin de la Clase</h2>
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-green-500 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "Locura es hacer lo mismo una y otra vez esperando resultados diferentes."
            </p>
            <footer class="flex items-center justify-center gap-2">
              <div class="h-px w-8 bg-slate-300"></div>
              <cite class="not-italic font-bold text-slate-900">Albert Einstein (Aplicable a ciclos infinitos)</cite>
            </footer>
          </blockquote>
        </div>
      `
    }
  ]
};
