import { Module } from '../../types';

export const MODULE_17: Module = {
  id: 'mod-17',
  title: '17. Práctica Final Integradora',
  description: 'Aplicación de todos los conocimientos: Arreglos, Búsqueda y Ordenación.',
  evaluation: 'Defensa de Proyecto',
  slides: [
    {
      id: 's17-1',
      title: 'El Desafío Final',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-lg text-gray-700">
            Vamos a resolver un problema completo que requiere el uso de múltiples estructuras y algoritmos vistos en el corte.
          </p>
        </div>
      `
    },
    {
      id: 's17-2',
      title: 'Enunciado del Problema',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 class="font-bold text-indigo-600 mb-2">Gestión de Notas de Estudiantes</h3>
            <p class="text-gray-600">
              Se requiere un programa para gestionar las notas de <strong>N</strong> estudiantes. Para cada estudiante se tiene: Nombre y Nota Final.
            </p>
            <ul class="list-disc list-inside mt-4 text-gray-600">
              <li>Almacenar los datos en vectores paralelos (Nombres y Notas).</li>
              <li>Calcular el promedio del salón.</li>
              <li>Ordenar la lista de estudiantes por nota (de mayor a menor).</li>
              <li>Buscar si un estudiante específico aprobó o no.</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 's17-3',
      title: 'Fase 1: Análisis y Diseño',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Antes de codificar, diseñemos la solución.
          </p>
          <ul class="space-y-2 text-gray-600">
            <li><strong>Entradas:</strong> Cantidad de estudiantes, nombres y notas.</li>
            <li><strong>Procesos:</strong> Ciclo para leer, Acumulador para promedio, Burbuja para ordenar, Búsqueda Secuencial.</li>
            <li><strong>Salidas:</strong> Listado ordenado, Promedio, Resultado de búsqueda.</li>
          </ul>
        </div>
      `
    },
    {
      id: 's17-4',
      title: 'Manos a la Obra',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Desarrollen el algoritmo en pseudocódigo o diagrama de flujo. Tienen 45 minutos.
          </p>
        </div>
      `
    },
    {
      id: 's17-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-64 text-center">
          <div class="text-6xl mb-4">❓</div>
          <h2 class="text-2xl font-bold text-gray-800">Consultas sobre el Proyecto</h2>
        </div>
      `
    },
    {
      id: 's17-thanks',
      title: 'Gracias por su atención',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-64 text-center">
          <div class="text-6xl mb-4">👋</div>
          <h2 class="text-2xl font-bold text-gray-800">¡Éxito en la defensa!</h2>
        </div>
      `
    }
  ]
};
