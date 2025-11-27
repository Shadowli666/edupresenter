


import { Module } from '../types';

export const MODULE_9: Module = {
  id: 'mod-9',
  title: '9. Decisiones Avanzadas',
  description: 'Estructuras Anidadas y Selección Múltiple (Switch/Case).',
  evaluation: '0% - Práctica en Clase',
  slides: [
    {
      id: 's9-1',
      title: 'Condicionales Anidadas',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Son estructuras "Si" dentro de otros "Si". Se utilizan cuando necesitamos evaluar más de dos posibilidades de forma jerárquica.
          </p>

          <div class="grid md:grid-cols-2 gap-6 items-center">
            <div class="bg-slate-900 text-slate-300 p-4 rounded-lg font-mono text-sm shadow-lg">
              <p>Si (promedio >= 18) Entonces</p>
              <p class="pl-4 text-green-400">Escribir "Excelente"</p>
              <p>SiNo</p>
              <p class="pl-4">Si (promedio >= 10) Entonces</p>
              <p class="pl-8 text-yellow-400">Escribir "Regular"</p>
              <p class="pl-4">SiNo</p>
              <p class="pl-8 text-red-400">Escribir "Deficiente"</p>
              <p class="pl-4">FinSi</p>
              <p>FinSi</p>
            </div>

            <div class="flex justify-center">
               <div class="mermaid">
                 flowchart TD
                   A{>= 18?} -- Sí --> B[Excelente]
                   A -- No --> C{>= 10?}
                   C -- Sí --> D[Regular]
                   C -- No --> E[Deficiente]
               </div>
            </div>
          </div>

          <div class="bg-yellow-50 p-3 rounded border-l-4 border-yellow-500 text-xs text-yellow-900">
            <strong>Cuidado:</strong> Demasiados anidamientos hacen que el código sea difícil de leer (Espagueti code). Mantén la identación ordenada.
          </div>
        </div>
      `
    },
    {
      id: 's9-2',
      title: 'Selección Múltiple (Según Sea / Case)',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Estructura especializada para cuando una misma variable puede tomar distintos valores específicos (1, 2, 3...). Es ideal para <strong>Menús de Opciones</strong>.
          </p>

          <div class="grid md:grid-cols-2 gap-6 items-center">
            <div class="bg-white border p-4 rounded shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">Sintaxis</h4>
              <div class="font-mono text-sm bg-slate-100 p-3 rounded text-slate-700">
                <span class="text-blue-600 font-bold">Segun</span> opcion <span class="text-blue-600 font-bold">Hacer</span><br>
                &nbsp;&nbsp;1: Escribir "Seleccionó Sumar";<br>
                &nbsp;&nbsp;2: Escribir "Seleccionó Restar";<br>
                &nbsp;&nbsp;3: Escribir "Seleccionó Salir";<br>
                &nbsp;&nbsp;<span class="text-blue-600 font-bold">De Otro Modo:</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;Escribir "Opción Inválida";<br>
                <span class="text-blue-600 font-bold">FinSegun</span>
              </div>
            </div>

            <div class="flex justify-center">
               <div class="mermaid">
                 flowchart TD
                   Start([Inicio]) --> Sel{Opcion?}
                   Sel -- 1 --> A[Sumar]
                   Sel -- 2 --> B[Restar]
                   Sel -- 3 --> C[Salir]
                   Sel -- Otro --> D[Error]
                   A --> End([Fin])
                   B --> End
                   C --> End
                   D --> End
               </div>
            </div>
          </div>
          
          <p class="text-sm text-gray-500">
            Equivalente al <code>switch</code> en C/Java/JS o <code>match</code> en Python.
          </p>
        </div>
      `
    },
    {
      id: 's9-3',
      title: 'Práctica: Calculadora Simple',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-white border p-6 rounded-lg shadow-sm">
            <h3 class="font-bold text-slate-800 mb-4">Desafío: Menú de Operaciones</h3>
            <p class="text-sm text-slate-600 mb-4">
              Cree un algoritmo que pida dos números y luego muestre un menú: 1.Sumar, 2.Restar, 3.Multiplicar. Según la elección, muestre el resultado.
            </p>
            
            <details class="bg-slate-50 p-4 rounded border">
              <summary class="text-blue-600 font-bold text-xs cursor-pointer">Ver Solución</summary>
              <div class="font-mono text-xs mt-3 space-y-1 text-slate-700">
                Leer A, B<br>
                Escribir "1.Sumar 2.Restar 3.Mult"<br>
                Leer Op<br>
                Segun Op Hacer<br>
                &nbsp;&nbsp;1: Res = A + B<br>
                &nbsp;&nbsp;2: Res = A - B<br>
                &nbsp;&nbsp;3: Res = A * B<br>
                &nbsp;&nbsp;De Otro Modo: Escribir "Error"<br>
                FinSegun<br>
                Escribir Res
              </div>
            </details>
          </div>
        </div>
      `
    },
    {
      id: 's9-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-6 animate-bounce">
             <span class="text-6xl font-bold select-none">?</span>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Lógica Compleja</h3>
          <p class="text-center text-gray-600 max-w-md">
            El 'Según Sea' simplifica mucho los menús. ¿Quedó claro cuándo usar Si Anidado vs Según?
          </p>
        </div>
      `
    },
    {
      id: 's9-end-thanks',
      title: 'Gracias por su atención',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">Fin de la Clase</h2>
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-orange-500 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "La complejidad es el enemigo. Cualquier tonto puede hacer algo complejo. Se necesita un genio para hacerlo simple."
            </p>
            <footer class="flex items-center justify-center gap-2">
              <div class="h-px w-8 bg-slate-300"></div>
              <cite class="not-italic font-bold text-slate-900">Albert Einstein</cite>
            </footer>
          </blockquote>
        </div>
      `
    }
  ]
};
