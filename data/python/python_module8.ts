
import { Module } from '../../types';

export const PYTHON_MODULE_8: Module = {
  id: 'py-mod-8',
  title: '8. Arreglos Bidimensionales (2D) y Búsqueda',
  description: 'Definición y recorridos en matrices (2D). Búsqueda secuencial básica sobre datos 2D.',
  evaluation: '0% - Ejercicio Teórico y Práctico',
  slides: [
    {
      id: 'py8-1',
      title: 'Matrices (Listas de Listas)',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">Una matriz 2D se representa como una lista de listas. Cada fila es una lista.</p>
          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">Declaración y acceso</h4>
            <pre class="font-mono text-sm max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
mat = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
print(mat[0][1])  # 2 (fila 0, col 1)
            </pre>
          </div>
        </div>
      `
    },
    {
      id: 'py8-2',
      title: 'Recorridos por Filas y Columnas',
      contentHtml: `
        <div class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded border shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">Por filas</h4>
              <pre class="font-mono text-sm max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
for fila in mat:
    for x in fila:
        print(x, end=" ")
              </pre>
            </div>
            <div class="bg-white p-4 rounded border shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">Por columnas</h4>
              <pre class="font-mono text-sm max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
filas = len(mat)
cols = len(mat[0])
for j in range(cols):
    for i in range(filas):
        print(mat[i][j], end=" ")
              </pre>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py8-3',
      title: 'Construir Matriz desde Input',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">Ingreso de datos</h4>
            <pre class="font-mono text-sm max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
filas = int(input("Filas: "))
cols = int(input("Columnas: "))
mat = []
for i in range(filas):
    fila = []
    for j in range(cols):
        fila.append(int(input(f"[{i},{j}]: ")))
    mat.append(fila)
            </pre>
          </div>
        </div>
      `
    },
    {
      id: 'py8-4',
      title: 'Operaciones básicas en 2D',
      contentHtml: `
        <div class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded border shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">Suma por filas</h4>
              <pre class="font-mono text-sm max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
suma_filas = [sum(f) for f in mat]
print(suma_filas)
              </pre>
            </div>
            <div class="bg-white p-4 rounded border shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">Suma por columnas</h4>
              <pre class="font-mono text-sm max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
cols = len(mat[0])
suma_cols = []
for j in range(cols):
    s = 0
    for i in range(len(mat)):
        s += mat[i][j]
    suma_cols.append(s)
print(suma_cols)
              </pre>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py8-5',
      title: 'Búsqueda Secuencial (2D)',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">La búsqueda secuencial recorre cada elemento hasta encontrar coincidencia.</p>
          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">Ejemplo</h4>
            <pre class="font-mono text-sm max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
objetivo = 5
pos = None
for i in range(len(mat)):
    for j in range(len(mat[0])):
        if mat[i][j] == objetivo:
            pos = (i,j)
            break
    if pos is not None:
        break
print(pos)
            </pre>
          </div>
        </div>
      `
    },
    {
      id: 'py8-6',
      title: 'Práctica I (2D)',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">1) Transpuesta de matriz</h4>
            <p class="text-sm text-slate-600">Construye la transpuesta de una matriz dada.</p>
          </div>
          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">2) Suma diagonal principal</h4>
            <p class="text-sm text-slate-600">Calcula la suma de los elementos <em>mat[i][i]</em>.</p>
          </div>
        </div>
      `
    },
    {
      id: 'py8-7',
      title: 'Práctica II (2D)',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">3) Buscar el mayor y su posición</h4>
            <p class="text-sm text-slate-600">Determina el máximo valor de toda la matriz y su índice (i,j).</p>
          </div>
          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">4) Conteo de pares</h4>
            <p class="text-sm text-slate-600">Cuenta cuántos elementos pares hay en la matriz.</p>
          </div>
        </div>
      `
    },
    {
      id: 'py8-8',
      title: 'Mini-Quiz (2D)',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">1) ¿Qué imprime?</h4>
            <pre class="font-mono text-sm max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
mat = [[1,2],[3,4]]
for i in range(len(mat)):
    for j in range(len(mat[0])):
        if (i+j) % 2 == 0:
            print(mat[i][j])
            </pre>
            <details class="mt-2">
              <summary class="text-xs text-blue-600 font-bold cursor-pointer">Respuesta</summary>
              <p class="text-sm">Imprime 1 y 4.</p>
            </details>
          </div>
        </div>
      `
    },
    {
      id: 'py8-qa',
      title: 'Preguntas y Respuestas',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center space-y-4">
          <h2 class="text-3xl font-bold text-slate-900">¿Dudas sobre matrices 2D?</h2>
          <p class="text-slate-600">Consultas sobre recorridos, transpuestas y búsquedas.</p>
        </div>
      `
    },
    {
      id: 'py8-end',
      title: '¡Gracias!',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-16 text-center">
          <div class="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
            <svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-2">Fin del Módulo 8</h3>
          <p class="text-slate-600">Siguiente: Métodos de búsqueda (secuencial y binaria).</p>
        </div>
      `
    }
  ]
};
