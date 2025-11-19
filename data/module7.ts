
import { Module } from '../types';

export const MODULE_7: Module = {
  id: 'mod-7',
  title: '7. Estructuras Secuenciales',
  description: 'Definición, sintaxis y elaboración de algoritmos lineales.',
  evaluation: '0% - Ejercicios en Clase',
  slides: [
    {
      id: 's7-1',
      title: 'Definición y Flujo',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700 text-lg">
            La estructura secuencial es aquella en la que una instrucción sigue a otra en secuencia. Las tareas se suceden de tal modo que la salida de una es la entrada de la siguiente y así sucesivamente hasta el fin del proceso.
          </p>

          <div class="flex flex-col items-center gap-4 my-8">
            <div class="w-64 p-4 bg-blue-50 border border-blue-200 rounded-lg text-center shadow-sm">
              <span class="font-bold text-blue-900">Instrucción 1</span>
              <br><span class="text-xs text-blue-600">Leer Datos</span>
            </div>
            <div class="text-slate-400 text-xl">↓</div>
            <div class="w-64 p-4 bg-blue-50 border border-blue-200 rounded-lg text-center shadow-sm">
              <span class="font-bold text-blue-900">Instrucción 2</span>
              <br><span class="text-xs text-blue-600">Calcular / Procesar</span>
            </div>
            <div class="text-slate-400 text-xl">↓</div>
            <div class="w-64 p-4 bg-blue-50 border border-blue-200 rounded-lg text-center shadow-sm">
              <span class="font-bold text-blue-900">Instrucción 3</span>
              <br><span class="text-xs text-blue-600">Mostrar Resultados</span>
            </div>
          </div>

          <div class="bg-yellow-50 p-4 rounded border-l-4 border-yellow-400 text-sm text-yellow-800">
            <strong>Nota:</strong> En este tipo de estructuras no hay bifurcaciones (decisiones) ni ciclos. El flujo es estrictamente vertical descendente.
          </div>
        </div>
      `
    },
    {
      id: 's7-2',
      title: 'Ejemplo Práctico',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-white border rounded-lg p-6 shadow-sm">
            <h3 class="font-bold text-slate-900 mb-4">Problema: Cálculo de Salario Neto</h3>
            <p class="text-slate-600 mb-4 text-sm">
              Un empleado cobra $20 por hora. Se le descuenta el 10% por impuestos. Calcular el pago final dado el número de horas trabajadas.
            </p>

            <div class="grid md:grid-cols-2 gap-8">
              <div class="font-mono text-xs bg-slate-900 text-green-400 p-4 rounded leading-loose">
                <span class="text-slate-500">// Declaración</span><br>
                Definir horas, bruto, neto Como Real;<br>
                <br>
                <span class="text-slate-500">// Entrada</span><br>
                Escribir "Ingrese horas trabajadas:";<br>
                Leer horas;<br>
                <br>
                <span class="text-slate-500">// Proceso (Secuencial)</span><br>
                bruto = horas * 20;<br>
                impuesto = bruto * 0.10;<br>
                neto = bruto - impuesto;<br>
                <br>
                <span class="text-slate-500">// Salida</span><br>
                Escribir "El pago es: ", neto;
              </div>

              <div class="flex flex-col justify-center space-y-4 text-sm text-slate-700">
                <p><strong>1. Entrada:</strong> Obtenemos las horas (ej. 10).</p>
                <p><strong>2. Proceso 1:</strong> Calculamos bruto (10 * 20 = 200).</p>
                <p><strong>3. Proceso 2:</strong> Calculamos impuesto (200 * 0.10 = 20).</p>
                <p><strong>4. Proceso 3:</strong> Restamos (200 - 20 = 180).</p>
                <p><strong>5. Salida:</strong> Mostramos 180.</p>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 's7-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6 animate-bounce">
             <span class="text-6xl font-bold select-none">?</span>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Flujo Secuencial</h3>
          <p class="text-center text-gray-600 max-w-md">
            Es la base de todo algoritmo. ¿Dudas sobre el orden de ejecución de las instrucciones?
          </p>
        </div>
      `
    },
    {
      id: 's7-end-thanks',
      title: 'Gracias por su atención',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">Fin de la Clase</h2>
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-blue-500 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "Un algoritmo debe ser visto como una receta de cocina: paso a paso, sin saltarse nada."
            </p>
            <footer class="flex items-center justify-center gap-2">
              <div class="h-px w-8 bg-slate-300"></div>
              <cite class="not-italic font-bold text-slate-900">Analogía Clásica</cite>
            </footer>
          </blockquote>
        </div>
      `
    }
  ]
};
