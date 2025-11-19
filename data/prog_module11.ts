
import { Module } from '../types';

export const PROG_MODULE_11: Module = {
  id: 'prog-mod-11',
  title: '11. Tipos de Colas y Proyecto',
  description: 'Colas Circulares, Prioridad y asignación del Proyecto Final.',
  evaluation: '20% - Proyecto Estructuras',
  slides: [
    {
      id: 'p11-1',
      title: 'Colas Circulares',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">En una cola lineal normal, al desencolar elementos, los espacios al inicio quedan vacíos e inutilizables hasta reiniciar la cola. La <strong>Cola Circular</strong> soluciona esto conectando el Final con el Frente.</p>

          <div class="flex justify-center my-8">
            <div class="relative w-40 h-40 border-8 border-slate-200 rounded-full flex items-center justify-center">
              <div class="absolute top-0 w-8 h-8 bg-slate-300 rounded-full -mt-4 text-xs flex items-center justify-center">0</div>
              <div class="absolute right-0 w-8 h-8 bg-blue-600 text-white rounded-full -mr-4 text-xs flex items-center justify-center">1</div>
              <div class="absolute bottom-0 w-8 h-8 bg-blue-600 text-white rounded-full -mb-4 text-xs flex items-center justify-center">2</div>
              <div class="absolute left-0 w-8 h-8 bg-blue-600 text-white rounded-full -ml-4 text-xs flex items-center justify-center">3</div>
              
              <div class="text-center">
                <span class="block text-xs text-gray-400">Fórmula:</span>
                <span class="text-xs font-mono font-bold text-blue-800">Pos = (Pos + 1) % N</span>
              </div>
            </div>
          </div>

          <p class="text-sm text-gray-600 text-center bg-slate-50 p-2 rounded">
            Usa Aritmética Modular (%) para volver al índice 0 después del último.
          </p>
        </div>
      `
    },
    {
      id: 'p11-2',
      title: 'Colas de Prioridad',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-amber-50 border-l-4 border-amber-500 p-4">
            <h3 class="font-bold text-amber-900">Definición</h3>
            <p class="text-amber-800 text-sm">No sale el que llegó primero, sino el que tiene <strong>mayor importancia (prioridad)</strong>.</p>
          </div>

          <div class="space-y-2">
            <div class="flex items-center justify-between bg-white p-3 rounded shadow-sm border border-red-200">
              <div class="flex items-center gap-3">
                <span class="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold">Alta</span>
                <span class="text-gray-700">Paciente con Infarto (Llegó a las 10:00)</span>
              </div>
              <span class="text-xs text-gray-400">Sale: #1</span>
            </div>
            <div class="flex items-center justify-between bg-white p-3 rounded shadow-sm border border-yellow-200 opacity-70">
              <div class="flex items-center gap-3">
                <span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-bold">Media</span>
                <span class="text-gray-700">Paciente con Fiebre (Llegó a las 09:00)</span>
              </div>
              <span class="text-xs text-gray-400">Sale: #2</span>
            </div>
          </div>
          
          <p class="text-xs text-gray-500 mt-2">Aunque el de fiebre llegó antes, el infarto se atiende primero.</p>
        </div>
      `
    },
    {
      id: 'p11-3',
      title: 'Proyecto Final de Corte (20%)',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-slate-900 text-white p-6 rounded-xl shadow-lg">
            <h3 class="text-xl font-bold mb-2 text-blue-400">Sistema de Gestión Hospitalaria</h3>
            <p class="text-slate-300 text-sm mb-6">Desarrolle una aplicación de consola en Python/C++ que utilice estructuras de datos para gestionar una emergencia.</p>
            
            <div class="space-y-4 text-sm">
              <div class="flex gap-3">
                <span class="font-bold text-blue-400 w-24">Requisito 1:</span>
                <span>Usar una <strong>Cola de Prioridad</strong> para la sala de espera (Triaje).</span>
              </div>
              <div class="flex gap-3">
                <span class="font-bold text-blue-400 w-24">Requisito 2:</span>
                <span>Usar una <strong>Lista Enlazada</strong> para almacenar el historial de pacientes atendidos.</span>
              </div>
              <div class="flex gap-3">
                <span class="font-bold text-blue-400 w-24">Requisito 3:</span>
                <span>Usar una <strong>Pila</strong> para la funcionalidad de "Deshacer ingreso" (si se registró mal).</span>
              </div>
            </div>
          </div>

          <div class="bg-white border border-slate-200 p-4 rounded-lg">
            <h4 class="font-bold text-slate-800 text-sm mb-2">Entregables:</h4>
            <ul class="list-disc list-inside text-xs text-gray-600">
              <li>Código Fuente (.py / .cpp)</li>
              <li>Informe con capturas de pantalla de las pruebas.</li>
              <li>Defensa presencial del código.</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'p11-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-6 animate-bounce">
             <span class="text-6xl font-bold select-none">?</span>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Sobre el Proyecto</h3>
          <p class="text-center text-gray-600 max-w-md">
            Es la evaluación más importante del corte. ¿Dudas sobre los requisitos o la lógica a implementar?
          </p>
        </div>
      `
    },
    {
      id: 'p11-end-thanks',
      title: 'Gracias por su atención',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">Manos a la Obra</h2>
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-amber-500 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "La programación no es sobre lo que sabes; es sobre lo que puedes descubrir."
            </p>
            <footer class="flex items-center justify-center gap-2">
              <div class="h-px w-8 bg-slate-300"></div>
              <cite class="not-italic font-bold text-slate-900">Chris Pine</cite>
            </footer>
          </blockquote>
        </div>
      `
    }
  ]
};
