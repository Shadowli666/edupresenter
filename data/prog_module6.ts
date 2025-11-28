
import { Module } from '../types';

export const PROG_MODULE_6: Module = {
  id: 'prog-mod-6',
  title: '6. Entrega de Notas (Corte I)',
  description: 'Retroalimentación y cierre del primer corte.',
  evaluation: 'Cierre de Corte',
  slides: [
    {
      id: 'p6-1',
      title: 'Repaso del Corte I: ¿Qué Hemos Aprendido?',
      notes: 'Iniciar la clase con un resumen de alto nivel de los temas cubiertos.',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
            <h3 class="text-xl font-bold text-indigo-900 mb-2">Resumen de Temas del Primer Corte</h3>
            <p class="text-indigo-800">Hemos construido las bases fundamentales de la programación y las estructuras de datos.</p>
          </div>
          <ul class="list-decimal pl-5 space-y-2 text-gray-700">
            <li><strong>Datos, Archivos y Memoria:</strong> La diferencia entre dato e información, cómo persistir datos en archivos y la gestión de memoria (Stack vs Heap).</li>
            <li><strong>Punteros (C++):</strong> El concepto de dirección de memoria, y los operadores <code>&</code> y <code>*</code>.</li>
            <li><strong>Arreglos y Vectores:</strong> El manejo de estructuras de datos estáticas y contiguas. Algoritmos de búsqueda y ordenamiento.</li>
            <li><strong>Listas Enlazadas:</strong> Nuestra primera estructura de datos dinámica, compuesta por nodos y punteros.</li>
          </ul>
        </div>
      `
    },
    {
      id: 'p6-2-static',
      title: 'Concepto Clave: Estructuras Estáticas',
      notes: 'Repasar las características de los arreglos.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Arreglos (Vectores y Matrices)</h3>
        <p class="text-gray-600 mb-6">Almacenan elementos del mismo tipo en memoria <strong>contigua</strong>.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
             <h5 class="font-bold text-green-900">Ventajas</h5>
             <ul class="list-disc pl-5 text-sm text-green-800">
               <li>Acceso <strong>instantáneo</strong> por índice (O(1)).</li>
               <li>Eficientes en uso de memoria (sin sobrecarga por punteros).</li>
             </ul>
          </div>
          <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
             <h5 class="font-bold text-red-900">Desventajas</h5>
             <ul class="list-disc pl-5 text-sm text-red-800">
               <li>Tamaño <strong>fijo</strong> (en arreglos primitivos).</li>
               <li>Inserción/eliminación <strong>lenta</strong> (O(N)).</li>
             </ul>
          </div>
        </div>
        <p class="text-center text-sm mt-6 bg-gray-100 p-2 rounded"><strong>Cuándo usarlos:</strong> Cuando el número de elementos es fijo o rara vez cambia, y el acceso rápido es prioritario.</p>
      `
    },
    {
      id: 'p6-3-dynamic',
      title: 'Concepto Clave: Estructuras Dinámicas',
      notes: 'Repasar las características de las listas enlazadas.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Listas Enlazadas</h3>
        <p class="text-gray-600 mb-6">Colección de nodos enlazados por punteros, no necesariamente contiguos en memoria.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
             <h5 class="font-bold text-green-900">Ventajas</h5>
             <ul class="list-disc pl-5 text-sm text-green-800">
               <li>Tamaño <strong>flexible</strong>.</li>
               <li>Inserción/eliminación <strong>rápida</strong> al inicio (O(1)).</li>
             </ul>
          </div>
          <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
             <h5 class="font-bold text-red-900">Desventajas</h5>
             <ul class="list-disc pl-5 text-sm text-red-800">
               <li>Acceso y búsqueda <strong>lentos</strong> (O(N)).</li>
               <li>Memoria extra requerida para los punteros.</li>
             </ul>
          </div>
        </div>
        <p class="text-center text-sm mt-6 bg-gray-100 p-2 rounded"><strong>Cuándo usarlas:</strong> Cuando la cantidad de datos es impredecible y las inserciones/eliminaciones son frecuentes.</p>
      `
    },
    {
      id: 'p6-4-pointers',
      title: 'Punteros y Memoria: Lo Esencial',
      notes: 'Reforzar los conceptos más difíciles y cruciales de C++.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Recordatorios Cruciales de C++</h3>
        <ul class="space-y-4">
            <li class="bg-white p-4 border-l-4 border-purple-500 rounded shadow-sm">
                <strong class="text-purple-800"><code>new</code> y <code>delete</code> son pareja.</strong> Si usas <code>new</code>, eres responsable de llamar a <code>delete</code>. Si usas <code>new[]</code>, DEBES usar <code>delete[]</code>.
            </li>
            <li class="bg-white p-4 border-l-4 border-red-500 rounded shadow-sm">
                <strong class="text-red-800">Una Fuga de Memoria (Memory Leak)</strong> ocurre cuando pierdes la única referencia a un bloque de memoria dinámica, haciéndolo irrecuperable.
            </li>
             <li class="bg-white p-4 border-l-4 border-yellow-500 rounded shadow-sm">
                <strong class="text-yellow-800">Un Puntero Nulo (<code>nullptr</code>)</strong> no apunta a ninguna parte. Es seguro y es buena práctica asignarlo a punteros después de un <code>delete</code>.
            </li>
        </ul>
      `
    },
    {
      id: 'p6-5-common-mistakes',
      title: 'Errores Comunes y Cómo Evitarlos',
      notes: 'Una de las diapositivas más útiles para los estudiantes.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Top 3 Errores del Programador Novato</h3>
        <div class="space-y-4">
          <div class="p-4 border rounded-lg">
            <h5 class="font-bold text-red-700">1. Buffer Overflow</h5>
            <p class="text-sm text-gray-600">Acceder a un índice fuera de los límites de un arreglo (ej. <code>arreglo[10]</code> en un arreglo de 10 elementos). C++ no te avisará, simplemente corromperá la memoria.</p>
          </div>
          <div class="p-4 border rounded-lg">
            <h5 class="font-bold text-red-700">2. Dereferenciar un Puntero Nulo</h5>
            <p class="text-sm text-gray-600">Intentar acceder al valor de un puntero que es <code>nullptr</code> (<code>*puntero_nulo</code>). Esto causa un error de segmentación (segmentation fault) y el programa se cierra.</p>
          </div>
          <div class="p-4 border rounded-lg">
            <h5 class="font-bold text-red-700">3. Olvidar Liberar Memoria</h5>
            <p class="text-sm text-gray-600">No llamar a <code>delete</code> o <code>delete[]</code> después de usar <code>new</code> o <code>new[]</code>. Esto causa fugas de memoria que degradan el rendimiento.</p>
          </div>
        </div>
      `
    },
    {
      id: 'p6-6-challenge',
      title: 'Mini-Reto de Lógica',
      notes: 'Un ejercicio para que piensen cómo combinar las estructuras vistas.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Integrando Conceptos</h3>
        <div class="bg-white border rounded-lg p-6">
          <h4 class="font-bold text-slate-800 mb-4">Problema: Playlist de Canciones</h4>
          <p class="text-sm text-slate-600 mb-4">
            Quieres modelar una playlist de canciones. Cada canción tiene un título, artista y duración. Frecuentemente añades nuevas canciones, las eliminas y, lo más importante, quieres poder reproducirlas en orden.
          </p>
          <div class="bg-slate-50 p-4 rounded border">
            <p class="text-sm font-bold text-slate-700 mb-2">Preguntas de Diseño:</p>
            <ul class="text-sm list-disc pl-5 text-gray-700">
              <li>¿Qué estructura de datos principal usarías para la playlist? ¿Un arreglo o una lista enlazada? ¿Por qué?</li>
              <li>¿Qué estructura de datos usarías para almacenar la información de CADA canción?</li>
              <li>En pseudocódigo, ¿cómo sería la función "añadir canción al final de la playlist"?</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'p6-7',
      title: 'Resultados del Corte I',
      notes: `Momento de mostrar la tabla con las evaluaciones.`,
      contentHtml: `
        <div class="space-y-6">
           <div class="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
            <h3 class="text-xl font-bold text-indigo-900 mb-2">Resumen de Evaluaciones</h3>
            <p class="text-indigo-800">Ponderación oficial de las actividades realizadas.</p>
          </div>
          <div class="overflow-x-auto border rounded-xl shadow-sm">
            <table class="min-w-full text-sm text-left text-slate-600">
              <thead class="bg-slate-100 text-slate-700 font-bold">
                <tr>
                  <th class="px-6 py-3">Actividad</th><th class="px-6 py-3">Tema</th><th class="px-6 py-3 text-center">Valor</th><th class="px-6 py-3 text-center">Estado</th>
                </tr>
              </thead>
              <tbody class="divide-y bg-white">
                <tr>
                  <td class="px-6 py-4">Guía de Ejercicios</td><td class="px-6 py-4">Arreglos y Vectores</td><td class="px-6 py-4 text-center font-bold">10%</td><td class="px-6 py-4 text-center text-green-600">Calificado</td>
                </tr>
                <tr>
                  <td class="px-6 py-4">Prueba Escrita</td><td class="px-6 py-4">Listas y Punteros</td><td class="px-6 py-4 text-center font-bold">20%</td><td class="px-6 py-4 text-center text-green-600">Calificado</td>
                </tr>
                <tr class="bg-slate-50 font-bold">
                  <td class="px-6 py-4" colspan="2">TOTAL ACUMULADO</td><td class="px-6 py-4 text-center text-lg">30%</td><td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 'p6-8-next',
      title: 'Preparándonos para el Corte II',
      notes: 'Generar expectativa por los próximos temas.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">¿Qué Sigue en Nuestro Viaje?</h3>
        <p class="text-gray-600 mb-6">En el segundo corte, construiremos sobre nuestra base de listas para explorar estructuras más potentes y especializadas:</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div class="bg-white p-5 border rounded-lg shadow-sm">
              <h4 class="font-bold text-sky-700 text-lg">Listas Dobles y Circulares</h4>
              <p class="text-sm text-gray-600">Variantes de listas que permiten recorridos en dos direcciones.</p>
            </div>
            <div class="bg-white p-5 border rounded-lg shadow-sm">
              <h4 class="font-bold text-sky-700 text-lg">Pilas (Stacks)</h4>
              <p class="text-sm text-gray-600">Estructuras LIFO (Last-In, First-Out). Como una pila de platos.</p>
            </div>
            <div class="bg-white p-5 border rounded-lg shadow-sm">
              <h4 class="font-bold text-sky-700 text-lg">Colas (Queues)</h4>
              <p class="text-sm text-gray-600">Estructuras FIFO (First-In, First-Out). Como la fila de un banco.</p>
            </div>
        </div>
      `
    },
    {
      id: 'p6-end-questions',
      title: 'Entrega Individual y Dudas',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full">
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Firma de Acta y Resolución de Dudas</h3>
          <p class="text-center text-gray-600 max-w-md">Por favor, verifiquen sus notas acumuladas. Este es el momento para aclarar cualquier discrepancia o duda sobre las calificaciones.</p>
        </div>
      `
    },
    {
      id: 'p6-end-thanks',
      title: 'Fin del Corte I',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center">
          <h2 class="text-3xl font-bold text-slate-900 mb-4">¡Excelente Trabajo en este Primer Corte!</h2>
          <p class="text-gray-600 text-lg">Descansen, repasen y prepárense para los nuevos retos que vienen.</p>
        </div>
      `
    }
  ]
};
