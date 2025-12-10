
import { Module } from '../../types';

export const PYTHON_MODULE_7: Module = {
  id: 'py-mod-7',
  title: '7. Arreglos Unidimensionales (1D)',
  description: 'Concepto, declaración, acceso y operaciones básicas sobre arreglos (listas) 1D.',
  evaluation: '0% - Ejercicio Teórico y Práctico',
  slides: [
    {
      id: 'py7-1',
      title: 'Introducción a Arreglos 1D',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">Un arreglo unidimensional es una estructura que almacena una secuencia de elementos del mismo tipo. En Python se usa <code>list</code>.</p>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded border shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">Declaración y acceso</h4>
              <pre class="font-mono text-sm max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
# Declaración
nums = [10, 20, 30, 40]
# Acceso por índice
print(nums[0])   # 10
print(nums[-1])  # 40 (último)
              </pre>
            </div>
            <div class="bg-blue-50 p-4 rounded border border-blue-200 text-sm">
              <h4 class="font-bold text-blue-900 mb-2">Propiedades</h4>
              <ul class="list-disc list-inside text-blue-800 text-xs space-y-1">
                <li>Indexación comienza en 0.</li>
                <li><code>len(lista)</code> retorna tamaño.</li>
                <li>Permite elementos heterogéneos, pero se recomienda uniformidad.</li>
              </ul>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py7-2',
      title: 'Lectura y Escritura en Listas',
      contentHtml: `
        <div class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6 items-start">
            <div class="bg-white p-4 rounded border shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">Modificar elementos</h4>
              <pre class="font-mono text-sm max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
nums = [1,2,3]
nums[1] = 99
print(nums)  # [1, 99, 3]
              </pre>
            </div>
            <div class="bg-white p-4 rounded border shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">Agregar / Quitar</h4>
              <pre class="font-mono text-sm max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
nums.append(4)         # [1,99,3,4]
nums.insert(0, 0)      # [0,1,99,3,4]
nums.pop()             # quita último
nums.remove(99)        # quita primer 99
              </pre>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py7-3',
      title: 'Recorridos y Operaciones',
      contentHtml: `
        <div class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6 items-start">
            <div class="bg-white p-4 rounded border shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">Recorrer con for</h4>
              <pre class="font-mono text-sm max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
nums = [3, 5, 7]
suma = 0
for n in nums:
    suma += n
print(suma)  # 15
              </pre>
            </div>
            <div class="bg-white p-4 rounded border shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">Contadores y acumuladores</h4>
              <pre class="font-mono text-sm max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
nums = [1,2,3,4,5]
pares = 0
for n in nums:
    if n % 2 == 0:
        pares += 1
print(pares)  # 2
              </pre>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py7-4',
      title: 'Entrada de Datos a Listas',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">Construir lista desde input</h4>
            <pre class="font-mono text-sm max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
n = int(input("Cantidad: "))
nums = []
for i in range(n):
    x = int(input(f"Valor {i+1}: "))
    nums.append(x)
print(nums)
            </pre>
          </div>
        </div>
      `
    },
    {
      id: 'py7-5',
      title: 'Operaciones comunes (min, max, suma, promedio)',
      contentHtml: `
        <div class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded border shadow-sm">
              <h4 class="font-bold text-slate-800 mb-2">Funciones útiles</h4>
              <pre class="font-mono text-sm max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
nums = [5,2,9]
print(min(nums), max(nums))  # 2 9
print(sum(nums))             # 16
prom = sum(nums) / len(nums)
              </pre>
            </div>
            <div class="bg-blue-50 p-4 rounded border border-blue-200 text-sm">
              <h4 class="font-bold text-blue-900 mb-2">Consideraciones</h4>
              <ul class="list-disc list-inside text-blue-800 text-xs space-y-1">
                <li>Asegura listas no vacías antes de <code>min/max</code>.</li>
                <li>Usa <code>len(lista)</code> para evitar división por cero.</li>
              </ul>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py7-6',
      title: 'Práctica I (1D)',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">1) Filtrar pares y obtener promedio</h4>
            <p class="text-sm text-slate-600">Pide N números; guarda solo pares, imprime su promedio.</p>
          </div>
          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">2) Máximo y su índice</h4>
            <p class="text-sm text-slate-600">Determina el mayor elemento y su posición (índice).</p>
          </div>
        </div>
      `
    },
    {
      id: 'py7-7',
      title: 'Práctica II (1D)',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">3) Normalizar calificaciones</h4>
            <p class="text-sm text-slate-600">Lee calificaciones 0-20 y escálalas a 0-100.</p>
          </div>
          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">4) Conteo de ocurrencias</h4>
            <p class="text-sm text-slate-600">Cuenta cuántas veces aparece un número dado en la lista.</p>
          </div>
        </div>
      `
    },
    {
      id: 'py7-8',
      title: 'Mini-Quiz (1D)',
      contentHtml: `
        <div class="space-y-4">
          <div class="bg-white p-4 rounded border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-2">1) ¿Qué imprime?</h4>
            <pre class="font-mono text-sm max-w-full overflow-x-auto bg-slate-900 text-slate-300 p-3 rounded">
nums = [1,2,3]
for i in range(len(nums)):
    nums[i] += 1
print(nums)
            </pre>
            <details class="mt-2">
              <summary class="text-xs text-blue-600 font-bold cursor-pointer">Respuesta</summary>
              <p class="text-sm">Imprime <code>[2,3,4]</code>.</p>
            </details>
          </div>
        </div>
      `
    },
    {
      id: 'py7-qa',
      title: 'Preguntas y Respuestas',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center space-y-4">
          <h2 class="text-3xl font-bold text-slate-900">¿Dudas sobre listas 1D?</h2>
          <p class="text-slate-600">Repasamos acceso, recorridos, operaciones y prácticas.</p>
        </div>
      `
    },
    {
      id: 'py7-end',
      title: '¡Gracias!',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-16 text-center">
          <div class="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
            <svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-2">Fin del Módulo 7</h3>
          <p class="text-slate-600">Siguiente: Arreglos bidimensionales y búsqueda.</p>
        </div>
      `
    }
  ]
};
