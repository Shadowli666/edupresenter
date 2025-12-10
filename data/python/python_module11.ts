
import { Module } from '../../types';

export const PYTHON_MODULE_11: Module = {
  id: 'py-mod-11',
  title: '11. Práctica Integradora (Arreglos 1D/2D, Búsqueda y Ordenación)',
  description: 'Resolución de problemas combinando listas, matrices, búsqueda y ordenación.',
  evaluation: '20% - Prueba Escrita',
  slides: [
    {
      id: 'py11-1',
      title: 'Enunciados de Práctica',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">Trabajaremos problemas que integran los contenidos del corte.</p>
          <ul class="list-disc list-inside text-sm text-slate-700 space-y-1">
            <li>Inventario de productos (arreglos 1D).</li>
            <li>Tablas de calificaciones (matrices).</li>
            <li>Búsqueda y ordenación en reportes.</li>
          </ul>
        </div>
      `
    },
    {
      id: 'py11-2',
      title: 'Caso 1: Inventario (1D)',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">Gestión de lista de productos: agregar, listar, ordenar por precio, buscar por nombre.</p>
          <pre class="font-mono text-xs max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
# estructura sugerida
productos = []  # cada item: {"nombre": str, "precio": float}
          </pre>
        </div>
      `
    },
    {
      id: 'py11-3',
      title: 'Caso 2: Calificaciones (2D)',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">Matriz de estudiantes x evaluaciones. Calcular promedios por estudiante y por evaluación.</p>
        </div>
      `
    },
    {
      id: 'py11-4',
      title: 'Caso 3: Reporte Ordenado',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">Ordena el inventario por precio y permite búsqueda binaria por precio exacto.</p>
        </div>
      `
    },
    {
      id: 'py11-5',
      title: 'Práctica Guiada I',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">1) Alta/Baja de productos</h4>
            <p class="text-sm text-slate-600">Añadir y eliminar productos del inventario.</p>
          </div>
          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">2) Ordenar por precio</h4>
            <p class="text-sm text-slate-600">Aplica selección sobre la lista de productos.</p>
          </div>
        </div>
      `
    },
    {
      id: 'py11-6',
      title: 'Práctica Guiada II',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">3) Promedios por estudiante</h4>
            <p class="text-sm text-slate-600">Calcula promedio fila por fila y reporta máximos.</p>
          </div>
          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">4) Promedios por evaluación</h4>
            <p class="text-sm text-slate-600">Calcula promedio columna por columna y reporta mínimos.</p>
          </div>
        </div>
      `
    },
    {
      id: 'py11-7',
      title: 'Mini-Proyecto: Consola Integrada',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">Sistema tipo menú que integra los casos: productos y calificaciones.</p>
          <div class="mermaid">
            flowchart TD
              A[Inicio] --> B[Menú]
              B --> C{Caso}
              C -- Inventario --> I[Gestión + Ordenación]
              C -- Calificaciones --> K[Promedios]
              I --> B
              K --> B
              B --> S[Salir]
          </div>
        </div>
      `
    },
    {
      id: 'py11-8',
      title: 'Mini-Quiz (Integrador)',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">1) ¿Cuándo usar binaria en productos?</h4>
            <p class="text-sm">Cuando la lista esté ordenada por el campo que se busca.</p>
          </div>
        </div>
      `
    },
    {
      id: 'py11-qa',
      title: 'Preguntas y Respuestas',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center space-y-4">
          <h2 class="text-3xl font-bold text-slate-900">¿Dudas del integrador?</h2>
          <p class="text-slate-600">Aclaramos estructuras y flujos.</p>
        </div>
      `
    },
    {
      id: 'py11-end',
      title: '¡Gracias!',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-16 text-center">
          <div class="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
            <svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-2">Fin del Módulo 11</h3>
          <p class="text-slate-600">Siguiente: Entrega de notas corte III.</p>
        </div>
      `
    }
  ]
};
