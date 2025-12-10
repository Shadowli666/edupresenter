import { Module } from '../types';

export const PNN_MODULE_6: Module = {
  id: 'pnn-mod-6',
  title: '6. Repaso del Corte I: Fundamentos Algorítmicos',
  description: 'Repaso de árboles, heaps, Divide y Conquista, y algoritmos de ordenamiento. Entrega de notas.',
  evaluation: 'Cierre de Corte',
  slides: [
    {
      id: 'pnn6-1',
      title: 'Repaso del Corte I: ¿Qué Hemos Construido?',
      notes: 'Iniciar la clase con un resumen de alto nivel de los temas cubiertos.',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
            <h3 class="text-xl font-bold text-orange-900 mb-2">Fundamentos de Algoritmos y Estructuras</h3>
            <p class="text-orange-800">En este primer corte, hemos establecido las bases de cómo estructurar datos y resolver problemas de forma eficiente.</p>
          </div>
          <ul class="list-decimal pl-5 space-y-2 text-gray-700">
            <li><strong>Módulo 1: Teoría de Árboles.</strong> Conceptos, terminología, árboles binarios y su relevancia para la optimización.</li>
            <li><strong>Módulo 2: Heaps.</strong> Estructura del montículo, propiedades, representación en arreglos, y algoritmos de inserción/heapify.</li>
            <li><strong>Módulo 3: Divide y Conquista.</strong> Paradigma algorítmico, recursividad, búsqueda binaria, y algoritmos para encontrar máximos y mínimos.</li>
            <li><strong>Módulo 4: Merge Sort.</strong> Algoritmo de ordenamiento por fusión, análisis de complejidad y concepto de ordenamiento externo.</li>
            <li><strong>Módulo 5: Quick Sort.</strong> Algoritmo de ordenamiento rápido, función de partición, análisis de casos y estrategias de pivote.</li>
          </ul>
        </div>
      `
    },
    {
      id: 'pnn6-2-trees-heaps',
      title: 'Conceptos Clave: Árboles y Heaps',
      notes: 'Repasar la anatomía de un árbol y las propiedades del Heap.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Jerarquías para la Eficiencia</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
             <h4 class="font-bold text-blue-900 mb-2">Árboles Binarios</h4>
             <ul class="list-disc pl-5 text-sm text-blue-800">
               <li>Estructura no lineal con un nodo raíz y máximo dos hijos.</li>
               <li>Terminología: Raíz, Nodo, Hoja, Padre, Hijo, Altura, Nivel, Grado.</li>
               <li>Recorridos (Pre-orden, In-orden, Post-orden) para visitar nodos.</li>
             </ul>
          </div>
          <div class="bg-white p-4 rounded-lg border-l-4 border-green-500 shadow-sm">
             <h4 class="font-bold text-green-900 mb-2">Heaps (Montículos)</h4>
             <ul class="list-disc pl-5 text-sm text-green-800">
               <li>Árbol binario completo con propiedad de orden (Max-Heap o Min-Heap).</li>
               <li>Representación eficiente en arreglos.</li>
               <li>Operaciones básicas: Insertar (Sift-Up) y Extraer Max/Min (Sift-Down).</li>
               <li>Aplicaciones: Colas de Prioridad, Heap Sort.</li>
             </ul>
          </div>
        </div>
      `
    },
    {
      id: 'pnn6-3-dnc',
      title: 'Conceptos Clave: Divide y Conquista (D&C)',
      notes: 'Repasar el paradigma D&C y la recursividad.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">La Estrategia Maestra de Resolución de Problemas</h3>
        <p class="text-gray-600 mb-4">Divide y Conquista es un paradigma para resolver problemas complejos:</p>
        <div class="grid md:grid-cols-3 gap-4 text-center">
            <div class="bg-blue-50 p-4 rounded-lg"><h5 class="font-bold text-blue-900">1. Dividir</h5><p class="text-sm text-blue-800">Problema en subproblemas.</p></div>
            <div class="bg-purple-50 p-4 rounded-lg"><h5 class="font-bold text-purple-900">2. Conquistar</h5><p class="text-sm text-purple-800">Resolver recursivamente.</p></div>
            <div class="bg-green-50 p-4 rounded-lg"><h5 class="font-bold text-green-900">3. Combinar</h5><p class="text-sm text-green-800">Unir soluciones.</p></div>
        </div>
        <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 mt-4">
          <h4 class="font-bold text-yellow-900 mb-2">Recursividad</h4>
          <p class="text-sm text-yellow-800">La recursividad es la herramienta para implementar D&C. Vital recordar el <strong>caso base</strong> para evitar Stack Overflow.</p>
        </div>
      `
    },
    {
      id: 'pnn6-4-sorting',
      title: 'Algoritmos de Ordenamiento: Merge Sort vs. Quick Sort',
      notes: 'Comparar los dos algoritmos de ordenamiento vistos.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Ordenando con Eficiencia</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white p-4 rounded-lg border-l-4 border-teal-500 shadow-sm">
             <h4 class="font-bold text-teal-900 mb-2">Merge Sort</h4>
             <ul class="list-disc pl-5 text-sm text-teal-800">
               <li>Divide el arreglo en mitades y las fusiona ordenadamente.</li>
               <li>Tiempo: <strong>O(N log N)</strong> en todos los casos.</li>
               <li>Espacio: <strong>O(N)</strong> (no in-place). Estable.</li>
               <li>Ideal para ordenamiento externo.</li>
             </ul>
          </div>
          <div class="bg-white p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
             <h4 class="font-bold text-red-900 mb-2">Quick Sort</h4>
             <ul class="list-disc pl-5 text-sm text-red-800">
               <li>Particiona el arreglo alrededor de un pivote.</li>
               <li>Tiempo: <strong>O(N log N)</strong> promedio, pero <strong>O(N²)</strong> peor caso.</li>
               <li>Espacio: <strong>O(log N)</strong> (in-place). No estable.</li>
               <li>Generalmente más rápido en la práctica.</li>
             </ul>
          </div>
        </div>
      `
    },
    {
      id: 'pnn6-5-common-errors',
      title: 'Errores Comunes a Evitar en el Primer Corte',
      notes: 'Resaltar los errores típicos de esta sección.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Cuidado con...</h3>
        <ul class="list-disc pl-5 space-y-3 text-gray-700">
            <li><strong>Casos Base Faltantes/Incorrectos:</strong> En recursividad, un caso base mal definido lleva a bucles infinitos y Stack Overflow.</li>
            <li><strong>Propiedad del Heap Violada:</strong> No restaurar correctamente la propiedad del montículo después de <code>insert</code> o <code>extractMax/Min</code> (errores en Sift-Up/Sift-Down).</li>
            <li><strong>Partición Incorrecta en Quicksort:</strong> Un error en la función <code>partition</code> puede llevar a un ordenamiento incorrecto o al peor caso de complejidad.</li>
            <li><strong>Fugas de Memoria (C++):</strong> Olvidar <code>delete</code> o <code>delete[]</code> en estructuras dinámicas, especialmente en árboles o Heaps construidos manualmente.</li>
        </ul>
      `
    },
    {
      id: 'pnn6-6-challenge',
      title: 'Mini-Reto: El Mejor Algoritmo para la Tarea',
      notes: 'Ejercicio conceptual integrador.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Piensa como un Ingeniero</h3>
        <p class="text-gray-600 mb-4">Para cada escenario, ¿qué algoritmo/estructura sería la más adecuada y por qué?</p>
        <div class="space-y-4">
            <div class="p-4 border rounded-lg bg-white">
                <p class="font-semibold">1. Ordenar una lista de estudiantes por calificación, manteniendo el orden de llegada si tienen la misma calificación.</p>
                <p class="mt-1 text-blue-700 font-bold">&rarr; Merge Sort (es estable y eficiente).</p>
            </div>
            <div class="p-4 border rounded-lg bg-white">
                <p class="font-semibold">2. Encontrar el paciente con mayor urgencia en una sala de emergencias.</p>
                <p class="mt-1 text-blue-700 font-bold">&rarr; Max-Heap (para implementar una Cola de Prioridad).</p>
            </div>
             <div class="p-4 border rounded-lg bg-white">
                <p class="font-semibold">3. Buscar rápidamente un nombre en un directorio telefónico muy grande.</p>
                <p class="mt-1 text-blue-700 font-bold">&rarr; Búsqueda Binaria (si está ordenado), o BST si se requieren inserciones/eliminaciones frecuentes.</p>
            </div>
        </div>
      `
    },
    {
      id: 'pnn6-7-results',
      title: 'Resultados del Corte I',
      notes: 'Entrega formal de las calificaciones del primer corte.',
      contentHtml: `
        <div class="space-y-6">
           <div class="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
            <h3 class="text-xl font-bold text-orange-900 mb-2">Resumen de Evaluaciones</h3>
            <p class="text-orange-800">Ponderación oficial de las actividades realizadas en el primer corte.</p>
          </div>
          <div class="overflow-x-auto border rounded-xl shadow-sm">
            <table class="min-w-full text-sm text-left">
              <thead class="bg-slate-100 text-slate-700 font-bold">
                <tr><th class="p-3">Actividad</th><th class="p-3">Tema</th><th class="p-3 text-center">Valor</th><th class="p-3 text-center">Estado</th></tr>
              </thead>
              <tbody class="divide-y bg-white">
                <tr>
                  <td class="p-3">Taller Práctico</td><td class="p-3">Divide y Conquista</td><td class="p-3 text-center font-bold">10%</td><td class="p-3 text-center text-green-600">Calificado</td>
                </tr>
                <tr>
                  <td class="p-3">Prueba Escrita</td><td class="p-3">Ordenamiento (Merge, Quick)</td><td class="p-3 text-center font-bold">20%</td><td class="p-3 text-center text-green-600">Calificado</td>
                </tr>
                <tr class="bg-slate-50 font-bold"><td class="p-3" colspan="2">TOTAL CORTE I</td><td class="p-3 text-center text-lg">30%</td><td></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 'pnn6-8-next',
      title: 'Preparándonos para el Corte II: Algoritmos Voraces',
      notes: 'Teaser de los próximos temas.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Hacia la Toma de Decisiones Óptimas</h3>
        <p class="text-gray-600 mb-6">Hemos explorado cómo dividir problemas. Ahora, nos enfocaremos en estrategias para tomar la "mejor decisión local" en cada paso, buscando una solución óptima global.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
            <div class="bg-white p-5 border rounded-lg shadow-sm">
              <h4 class="font-bold text-emerald-700 text-lg">Algoritmos Voraces (Greedy)</h4>
              <p class="text-sm text-gray-600">Enfocados en hacer la elección óptima en cada paso, sin mirar al futuro. ¿Funciona siempre?</p>
            </div>
            <div class="bg-white p-5 border rounded-lg shadow-sm">
              <h4 class="font-bold text-sky-700 text-lg">Problemas de Optimización</h4>
              <p class="text-sm text-gray-600">Aplicaremos Greedy a problemas clásicos como la mochila fraccional, árboles de costo mínimo y caminos más cortos.</p>
            </div>
        </div>
      `
    },
    {
      id: 'pnn6-end-questions',
      title: 'Revisión de Calificaciones y Dudas',
      notes: 'Espacio para consultas individuales.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full">
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Consultas Individuales</h3>
          <p class="text-center text-gray-600 max-w-md">Por favor, acérquese para revisar su nota del corte. Este es el momento de aclarar cualquier duda sobre las evaluaciones o el material cubierto.</p>
        </div>
      `
    },
    {
      id: 'pnn6-end-thanks',
      title: 'Fin del Corte I',
      notes: 'Mensaje de cierre y motivación.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center">
          <h2 class="text-3xl font-bold text-slate-900 mb-4">¡Excelente Trabajo en este Primer Corte!</h2>
          <p class="text-gray-600 text-lg">Sigan practicando y aplicando lo aprendido. Nos vemos en el segundo corte.</p>
        </div>
      `
    }
  ]
};