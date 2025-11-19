
import { Module } from '../types';

export const MODULE_8: Module = {
  id: 'mod-8',
  title: '8. Estructuras de Decisión (Si/No)',
  description: 'Condicionales Simples y Dobles. Sintaxis y Diagramas.',
  evaluation: '0% - Práctica',
  slides: [
    {
      id: 's8-1',
      title: 'Estructura Condicional Simple',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Permite evaluar una condición lógica. Si la condición es <strong>Verdadera</strong>, se ejecutan ciertas instrucciones. Si es Falsa, no se hace nada (o se salta ese bloque).
          </p>

          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div class="bg-white p-4 border rounded shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">Sintaxis (Pseudocódigo)</h4>
              <div class="font-mono text-sm bg-slate-100 p-3 rounded text-slate-700">
                <span class="text-purple-600 font-bold">Si</span> (condición) <span class="text-purple-600 font-bold">Entonces</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;Instrucciones...<br>
                <span class="text-purple-600 font-bold">FinSi</span>
              </div>
            </div>

            <div class="flex justify-center">
               <!-- Diagrama Simple -->
               <div class="flex flex-col items-center text-xs">
                  <div class="border-2 border-black transform rotate-45 w-16 h-16 flex items-center justify-center bg-purple-50 mb-4">
                    <span class="transform -rotate-45">¿Edad >= 18?</span>
                  </div>
                  <div class="flex w-full justify-between px-2">
                     <div class="flex flex-col items-center">
                        <span class="text-green-600 font-bold">Sí</span>
                        <div class="h-4 w-0.5 bg-black"></div>
                        <div class="border border-black p-2 bg-green-50">Entrar</div>
                     </div>
                     <div class="flex flex-col items-center">
                        <span class="text-red-600 font-bold">No</span>
                        <div class="h-12 w-0.5 bg-black border-dashed"></div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 's8-2',
      title: 'Estructura Condicional Doble (SiNo)',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Permite elegir entre dos caminos. Si la condición es verdadera, se hace el bloque A; si es falsa, se hace el bloque B. <strong>Nunca se ejecutan ambos.</strong>
          </p>

           <div class="grid md:grid-cols-2 gap-8 items-center">
            <div class="bg-white p-4 border rounded shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">Sintaxis (Pseudocódigo)</h4>
              <div class="font-mono text-sm bg-slate-100 p-3 rounded text-slate-700">
                <span class="text-purple-600 font-bold">Si</span> (promedio >= 10) <span class="text-purple-600 font-bold">Entonces</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;Escribir "Aprobado"<br>
                <span class="text-purple-600 font-bold">SiNo</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;Escribir "Reprobado"<br>
                <span class="text-purple-600 font-bold">FinSi</span>
              </div>
            </div>

            <div class="bg-blue-50 p-4 rounded border border-blue-100 text-sm text-blue-900">
               <strong>Analogía:</strong> Llegas a una bifurcación en el camino.
               <ul>
                 <li>- Derecha: Aprobado</li>
                 <li>- Izquierda: Reprobado</li>
               </ul>
               No puedes ir por ambos caminos a la vez.
            </div>
          </div>
        </div>
      `
    },
    {
      id: 's8-3',
      title: 'Práctica: Lógica Condicional',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-white border p-6 rounded-lg shadow-sm">
            <h3 class="font-bold text-slate-800 mb-4">Desafío 1: Par o Impar</h3>
            <p class="text-sm text-slate-600 mb-4">Escriba la lógica para determinar si un número ingresado es Par.</p>
            <details class="bg-slate-50 p-3 rounded border">
              <summary class="text-blue-600 font-bold text-xs cursor-pointer">Ver Solución</summary>
              <div class="font-mono text-xs mt-2">
                Si (num % 2 == 0) Entonces<br>
                &nbsp;&nbsp;Escribir "Es Par"<br>
                SiNo<br>
                &nbsp;&nbsp;Escribir "Es Impar"<br>
                FinSi
              </div>
            </details>
          </div>
          
           <div class="bg-white border p-6 rounded-lg shadow-sm">
            <h3 class="font-bold text-slate-800 mb-4">Desafío 2: Mayor de Edad</h3>
            <p class="text-sm text-slate-600 mb-4">Determine si una persona puede votar (Edad >= 18).</p>
            <details class="bg-slate-50 p-3 rounded border">
              <summary class="text-blue-600 font-bold text-xs cursor-pointer">Ver Solución</summary>
              <div class="font-mono text-xs mt-2">
                Leer edad;<br>
                Si (edad >= 18) Entonces<br>
                &nbsp;&nbsp;Escribir "Puede Votar"<br>
                SiNo<br>
                &nbsp;&nbsp;Escribir "Aún no puede votar"<br>
                FinSi
              </div>
            </details>
          </div>
        </div>
      `
    },
    {
      id: 's8-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-6 animate-bounce">
             <span class="text-6xl font-bold select-none">?</span>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Toma de Decisiones</h3>
          <p class="text-center text-gray-600 max-w-md">
            Las computadoras toman decisiones comparando valores. ¿Dudas sobre el Si o el SiNo?
          </p>
        </div>
      `
    },
    {
      id: 's8-end-thanks',
      title: 'Gracias por su atención',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">Fin de la Clase</h2>
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-purple-500 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "Cuando tienes que tomar una decisión y no la tomas, eso es en sí mismo una decisión."
            </p>
            <footer class="flex items-center justify-center gap-2">
              <div class="h-px w-8 bg-slate-300"></div>
              <cite class="not-italic font-bold text-slate-900">William James</cite>
            </footer>
          </blockquote>
        </div>
      `
    }
  ]
};
