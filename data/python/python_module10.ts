
import { Module } from '../../types';

export const PYTHON_MODULE_10: Module = {
  id: 'py-mod-10',
  title: '10. Métodos de Ordenación (Burbuja y Selección)',
  description: 'Implementación y análisis de ordenación básica: burbuja y selección.',
  evaluation: '20% - Prueba Escrita',
  slides: [
    {
      id: 'py10-1',
      title: 'Introducción a Ordenación',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">Ordenar datos facilita búsquedas eficientes y análisis. Veremos dos métodos básicos.</p>
        </div>
      `
    },
    {
      id: 'py10-2',
      title: 'Burbuja (Bubble Sort)',
      contentHtml: `
        <div class="space-y-6">
          <pre class="font-mono text-sm max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
def burbuja(a):
    n = len(a)
    for i in range(n-1):
        for j in range(0, n-1-i):
            if a[j] > a[j+1]:
                a[j], a[j+1] = a[j+1], a[j]
          </pre>
        </div>
      `
    },
    {
      id: 'py10-3',
      title: 'Selección (Selection Sort)',
      contentHtml: `
        <div class="space-y-6">
          <pre class="font-mono text-sm max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
def seleccion(a):
    n = len(a)
    for i in range(n-1):
        min_idx = i
        for j in range(i+1, n):
            if a[j] < a[min_idx]:
                min_idx = j
        a[i], a[min_idx] = a[min_idx], a[i]
          </pre>
        </div>
      `
    },
    {
      id: 'py10-4',
      title: 'Complejidad y Comparación',
      contentHtml: `
        <div class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded border shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">Burbuja</h4>
              <p class="text-sm">Tiempo: O(n^2), Espacio: O(1).</p>
            </div>
            <div class="bg-white p-4 rounded border shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">Selección</h4>
              <p class="text-sm">Tiempo: O(n^2), Espacio: O(1). Menos swaps que burbuja.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py10-5',
      title: 'Práctica I (Ordenación)',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">1) Ordenar lista de enteros</h4>
            <p class="text-sm text-slate-600">Implementa burbuja y selección; compara resultados.</p>
          </div>
          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">2) Ordenar nombres</h4>
            <p class="text-sm text-slate-600">Ordena alfabéticamente una lista de strings.</p>
          </div>
        </div>
      `
    },
    {
      id: 'py10-6',
      title: 'Práctica II (Analítica)',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">3) Contar comparaciones</h4>
            <p class="text-sm text-slate-600">Modifica burbuja para contar comparaciones y swaps.</p>
          </div>
          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">4) Semi-ordenado</h4>
            <p class="text-sm text-slate-600">Evalúa rendimiento en listas casi ordenadas.</p>
          </div>
        </div>
      `
    },
    {
      id: 'py10-7',
      title: 'Mini-Quiz (Ordenación)',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">1) ¿Cuál hace menos swaps?</h4>
            <p class="text-sm">Selección suele hacer menos intercambios que burbuja.</p>
          </div>
        </div>
      `
    },
    {
      id: 'py10-qa',
      title: 'Preguntas y Respuestas',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center space-y-4">
          <h2 class="text-3xl font-bold text-slate-900">¿Dudas sobre ordenación?</h2>
          <p class="text-slate-600">Comparaciones, swaps y casos de uso.</p>
        </div>
      `
    },
    {
      id: 'py10-end',
      title: '¡Gracias!',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-16 text-center">
          <div class="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
            <svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-2">Fin del Módulo 10</h3>
          <p class="text-slate-600">Siguiente: práctica integradora con arreglos.</p>
        </div>
      `
    }
  ]
};
