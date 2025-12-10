
import { Module } from '../../types';

export const PYTHON_MODULE_9: Module = {
  id: 'py-mod-9',
  title: '9. Métodos de Búsqueda (Secuencial y Binaria)',
  description: 'Aplicación de métodos de búsqueda: secuencial en cualquier arreglo; binaria en arreglos ordenados.',
  evaluation: '10% - Prueba de Comprobación',
  slides: [
    {
      id: 'py9-1',
      title: 'Búsqueda Secuencial (Lineal)',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">Recorre el arreglo elemento por elemento hasta encontrar el objetivo o agotar la lista.</p>
          <pre class="font-mono text-sm max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
def buscar_lineal(a, x):
    for i, v in enumerate(a):
        if v == x:
            return i
    return -1
          </pre>
        </div>
      `
    },
    {
      id: 'py9-2',
      title: 'Complejidad de la Búsqueda Lineal',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">Tiempo: O(n). En el peor caso revisa todos los elementos. Espacio: O(1).</p>
        </div>
      `
    },
    {
      id: 'py9-3',
      title: 'Búsqueda Binaria (Requisitos)',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-yellow-50 p-4 rounded border border-yellow-200 text-sm">
            <h4 class="font-bold text-yellow-900 mb-2">Requisitos</h4>
            <ul class="list-disc list-inside text-yellow-800 text-xs space-y-1">
              <li>El arreglo debe estar <strong>ordenado ascendente</strong> o descendente.</li>
              <li>Acceso por índice (listas/arrays).</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'py9-4',
      title: 'Búsqueda Binaria (Implementación)',
      contentHtml: `
        <div class="space-y-6">
          <pre class="font-mono text-sm max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
def buscar_binaria(a, x):
    i, j = 0, len(a) - 1
    while i <= j:
        m = (i + j) // 2
        if a[m] == x:
            return m
        elif x < a[m]:
            j = m - 1
        else:
            i = m + 1
    return -1
          </pre>
        </div>
      `
    },
    {
      id: 'py9-5',
      title: 'Casos de Prueba (Binaria)',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">Ejemplos</h4>
            <pre class="font-mono text-sm max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
a = [1,3,5,7,9]
print(buscar_binaria(a, 1))  # 0
print(buscar_binaria(a, 9))  # 4
print(buscar_binaria(a, 2))  # -1
            </pre>
          </div>
        </div>
      `
    },
    {
      id: 'py9-6',
      title: 'Práctica I (Búsquedas)',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">1) Verificar presencia</h4>
            <p class="text-sm text-slate-600">Dado un arreglo y un valor, indica si aparece (lineal) y su índice.</p>
          </div>
          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">2) Encontrar primera y última ocurrencia</h4>
            <p class="text-sm text-slate-600">En un arreglo ordenado, usa binaria para hallar rangos de un valor.</p>
          </div>
        </div>
      `
    },
    {
      id: 'py9-7',
      title: 'Práctica II (Mezcla)',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">3) Agenda de contactos</h4>
            <p class="text-sm text-slate-600">Busca por nombre en una lista ordenada alfabéticamente.</p>
          </div>
          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">4) Validar elemento en 2D</h4>
            <p class="text-sm text-slate-600">Recorre matriz y reporta si aparece X (secuencial 2D).</p>
          </div>
        </div>
      `
    },
    {
      id: 'py9-8',
      title: 'Mini-Quiz (Búsqueda)',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">1) ¿Cuándo usar binaria?</h4>
            <p class="text-sm">Solo cuando el arreglo está <strong>ordenado</strong>.</p>
          </div>
        </div>
      `
    },
    {
      id: 'py9-qa',
      title: 'Preguntas y Respuestas',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center space-y-4">
          <h2 class="text-3xl font-bold text-slate-900">¿Dudas sobre búsqueda?</h2>
          <p class="text-slate-600">Analizamos casos, requisitos y complejidad.</p>
        </div>
      `
    },
    {
      id: 'py9-end',
      title: '¡Gracias!',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-16 text-center">
          <div class="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
            <svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-2">Fin del Módulo 9</h3>
          <p class="text-slate-600">Siguiente: Métodos de ordenación básicos.</p>
        </div>
      `
    }
  ]
};
