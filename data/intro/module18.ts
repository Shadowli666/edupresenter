import { Module } from '../../types';

export const MODULE_18: Module = {
  id: 'mod-18',
  title: '18. Cierre del Semestre',
  description: 'Entrega de notas finales y despedida.',
  evaluation: 'N/A',
  slides: [
    {
      id: 's18-1',
      title: 'Fin del Camino',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-lg text-gray-700">
            Hemos completado el contenido de Computación Básica.
          </p>
          <div class="grid grid-cols-2 gap-4 text-center text-sm mt-8">
            <div class="bg-gray-100 p-3 rounded">Algoritmos</div>
            <div class="bg-gray-100 p-3 rounded">Diagramas de Flujo</div>
            <div class="bg-gray-100 p-3 rounded">Pseudocódigo</div>
            <div class="bg-gray-100 p-3 rounded">Estructuras de Control</div>
            <div class="bg-gray-100 p-3 rounded">Arreglos</div>
            <div class="bg-gray-100 p-3 rounded">Matrices</div>
          </div>
        </div>
      `
    },
    {
      id: 's18-2',
      title: 'Entrega de Calificaciones',
      contentHtml: `
        <div class="space-y-6 text-center">
          <h3 class="text-2xl font-bold text-gray-800">Notas Finales</h3>
          <p class="text-gray-600">
            Revisión individual de notas y carga al sistema DACE.
          </p>
        </div>
      `
    },
    {
      id: 's18-3',
      title: 'Reflexión Final',
      contentHtml: `
        <div class="space-y-6">
          <blockquote class="text-xl italic text-gray-600 border-l-4 border-indigo-500 pl-4">
            "Todo el mundo en este país debería aprender a programar una computadora... porque te enseña a pensar."
            <footer class="text-sm font-bold mt-2">- Steve Jobs</footer>
          </blockquote>
        </div>
      `
    },
    {
      id: 's18-questions',
      title: 'Espacio Final',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-64 text-center">
          <div class="text-6xl mb-4">💬</div>
          <h2 class="text-2xl font-bold text-gray-800">Comentarios y Sugerencias</h2>
        </div>
      `
    },
    {
      id: 's18-thanks',
      title: '¡Gracias!',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-64 text-center">
          <div class="text-6xl mb-4">🎓</div>
          <h2 class="text-3xl font-bold text-indigo-600">¡Felices Vacaciones!</h2>
        </div>
      `
    }
  ]
};
