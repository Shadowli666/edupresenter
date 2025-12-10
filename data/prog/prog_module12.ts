
import { Module } from '../../types';

export const PROG_MODULE_12: Module = {
  id: 'prog-mod-12',
  title: '12. Entrega de Notas (Corte II)',
  description: 'Cierre del Segundo Corte y retroalimentación.',
  evaluation: 'Cierre de Corte',
  slides: [
    {
      id: 'p12-1',
      title: 'Repaso del Corte II: ¿Qué Aprendimos?',
      notes: 'Resumen de los temas cubiertos en el segundo corte.',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg">
            <h3 class="text-xl font-bold text-teal-900 mb-2">Temas Cubiertos en el Segundo Corte</h3>
            <p class="text-teal-800">Nos enfocamos en estructuras de datos lineales más especializadas y sus aplicaciones.</p>
          </div>
          <ul class="list-decimal pl-5 space-y-2 text-gray-700">
            <li><strong>Listas Enlazadas Avanzadas:</strong> Exploramos las variantes Dobles (recorrido bidireccional) y Circulares (sin fin).</li>
            <li><strong>Pilas (Stacks):</strong> Comprendimos el principio LIFO y sus usos en recursividad y evaluación de expresiones.</li>
            <li><strong>Colas (Queues):</strong> Aprendimos el principio FIFO, la implementación con colas circulares y su rol en algoritmos como BFS.</li>
            <li><strong>Colas de Prioridad:</strong> Introdujimos el concepto de atender elementos por importancia en vez de por orden de llegada.</li>
          </ul>
        </div>
      `
    },
    {
      id: 'p12-2-advanced-lists',
      title: 'Concepto Clave: Listas Avanzadas',
      notes: 'Repasar las ventajas de las listas dobles y circulares.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Potenciando Nuestras Listas</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white p-4 border rounded-lg shadow-sm">
            <h5 class="font-bold text-blue-700">Listas Doblemente Enlazadas</h5>
            <p class="text-sm text-gray-600 mt-2">Al añadir un puntero <code>anterior</code>, ganamos la habilidad de recorrer la lista hacia atrás y de eliminar un nodo de forma más eficiente (si ya tenemos un puntero a él).</p>
          </div>
          <div class="bg-white p-4 border rounded-lg shadow-sm">
            <h5 class="font-bold text-purple-700">Listas Circulares</h5>
            <p class="text-sm text-gray-600 mt-2">Al conectar el último nodo con el primero, creamos un bucle perfecto para tareas repetitivas como la gestión de turnos en juegos o procesos en un sistema operativo (Round Robin).</p>
          </div>
        </div>
      `
    },
    {
      id: 'p12-3-lifo-fifo',
      title: 'Duelo: Pila (LIFO) vs. Cola (FIFO)',
      notes: 'Comparación visual directa, un concepto fundamental.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4 text-center">Pila vs. Cola: El Duelo Definitivo</h3>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="text-center">
            <h5 class="font-bold text-purple-700 text-lg mb-2">Pila (LIFO)</h5>
            <div class="flex flex-col-reverse items-center p-4 bg-slate-100 rounded-xl h-48 border-b-4 border-slate-300">
               <div class="w-24 h-8 bg-purple-300 rounded mb-1 border border-purple-400">Sale 3º</div>
               <div class="w-24 h-8 bg-purple-400 rounded mb-1 border border-purple-500">Sale 2º</div>
               <div class="w-24 h-8 bg-purple-500 rounded mb-1 border border-purple-600">Sale 1º</div>
            </div>
            <p class="text-sm text-gray-500 mt-2">El último que entra, es el primero que sale.</p>
          </div>
          <div class="text-center">
            <h5 class="font-bold text-green-700 text-lg mb-2">Cola (FIFO)</h5>
            <div class="flex items-center p-4 bg-slate-100 rounded-xl h-48 border-r-4 border-slate-300">
               <div class="w-24 h-8 bg-green-500 rounded mr-1 border border-green-600 flex-shrink-0">Sale 1º</div>
               <div class="w-24 h-8 bg-green-400 rounded mr-1 border border-green-500 flex-shrink-0">Sale 2º</div>
               <div class="w-24 h-8 bg-green-300 rounded mr-1 border border-green-400 flex-shrink-0">Sale 3º</div>
            </div>
            <p class="text-sm text-gray-500 mt-2">El primero que entra, es el primero que sale.</p>
          </div>
        </div>
      `
    },
    {
      id: 'p12-4-big-o',
      title: 'Tabla Comparativa de Complejidad (Big O)',
      notes: 'Una diapositiva de resumen muy valiosa para los estudiantes.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Rendimiento de Estructuras Lineales</h3>
        <div class="overflow-x-auto">
            <table class="min-w-full text-sm text-center">
              <thead class="bg-slate-100 font-bold">
                <tr>
                  <th class="p-2 border">Operación</th>
                  <th class="p-2 border">Arreglo</th>
                  <th class="p-2 border">Lista Enlazada</th>
                  <th class="p-2 border">Pila</th>
                  <th class="p-2 border">Cola</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y">
                <tr><td class="p-2 border font-semibold">Acceso (por índice)</td><td class="p-2 border font-bold text-green-600">O(1)</td><td class="p-2 border text-red-600">O(N)</td><td class="p-2 border text-red-600">O(N)</td><td class="p-2 border text-red-600">O(N)</td></tr>
                <tr><td class="p-2 border font-semibold">Búsqueda (por valor)</td><td class="p-2 border text-red-600">O(N)</td><td class="p-2 border text-red-600">O(N)</td><td class="p-2 border text-red-600">O(N)</td><td class="p-2 border text-red-600">O(N)</td></tr>
                <tr><td class="p-2 border font-semibold">Inserción (Inicio)</td><td class="p-2 border text-red-600">O(N)</td><td class="p-2 border font-bold text-green-600">O(1)</td><td class="p-2 border font-bold text-green-600">O(1)</td><td class="p-2 border text-red-600">O(N) [1]</td></tr>
                <tr><td class="p-2 border font-semibold">Inserción (Final)</td><td class="p-2 border font-bold text-green-600">O(1) [2]</td><td class="p-2 border text-red-600">O(N) [1]</td><td class="p-2 border text-red-600">O(N)</td><td class="p-2 border font-bold text-green-600">O(1)</td></tr>
                <tr><td class="p-2 border font-semibold">Eliminación (Inicio)</td><td class="p-2 border text-red-600">O(N)</td><td class="p-2 border font-bold text-green-600">O(1)</td><td class="p-2 border font-bold text-green-600">O(1)</td><td class="p-2 border font-bold text-green-600">O(1)</td></tr>
                <tr><td class="p-2 border font-semibold">Eliminación (Final)</td><td class="p-2 border font-bold text-green-600">O(1) [2]</td><td class="p-2 border text-red-600">O(N)</td><td class="p-2 border text-red-600">O(N)</td><td class="p-2 border text-red-600">O(N)</td></tr>
              </tbody>
            </table>
        </div>
        <p class="text-xs text-gray-500 mt-2">[1] A menos que se mantenga un puntero a la cola (tail), entonces es O(1).</p>
        <p class="text-xs text-gray-500 mt-1">[2] Tiempo Amortizado para arreglos dinámicos como std::vector.</p>
      `
    },
    {
      id: 'p12-5-project-review',
      title: 'Reflexiones del Proyecto Final',
      notes: 'Discutir los desafíos comunes para aprender de ellos.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Lecciones Aprendidas del Proyecto</h3>
        <p class="text-gray-600 mb-4">El proyecto integró varias estructuras. Algunos de los retos más comunes fueron:</p>
        <ul class="list-disc pl-5 space-y-3 text-gray-700 text-sm">
            <li><strong>Gestión de la Prioridad:</strong> Recordar que la cola de prioridad de C++ es un max-heap por defecto, mientras que la de Python es un min-heap, y adaptar la lógica del objeto \`Paciente\` para que funcione correctamente.</li>
            <li><strong>Punteros y Memoria (C++):</strong> Asegurarse de liberar toda la memoria dinámica (con <code>delete</code>) para evitar fugas de memoria, especialmente al deshacer un ingreso o atender un paciente.</li>
            <li><strong>Interacción de Estructuras:</strong> Mover un \`Paciente\` de la cola de prioridad a la lista de historial, y de la pila de "undo" de vuelta a la cola de prioridad, requiere una gestión cuidadosa de los datos.</li>
        </ul>
      `
    },
    {
      id: 'p12-6-challenge',
      title: 'Mini-Reto: El Navegador Web',
      notes: 'Un ejercicio para que identifiquen qué estructura usar en cada caso.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Diseñando un Navegador Web Simple</h3>
        <p class="text-gray-600 mb-4">Si tuvieras que diseñar un navegador, ¿qué estructura de datos usarías para las siguientes funcionalidades?</p>
        <div class="space-y-4">
            <div class="p-4 border rounded-lg bg-white">
                <p class="font-semibold">1. El botón "Atrás"</p>
                <p class="text-sm text-green-700 font-bold mt-1">Pila (Stack). La última página visitada es la primera a la que se vuelve.</p>
            </div>
            <div class="p-4 border rounded-lg bg-white">
                <p class="font-semibold">2. La cola de descargas</p>
                <p class="text-sm text-green-700 font-bold mt-1">Cola (Queue). Las descargas se procesan en el orden en que se iniciaron.</p>
            </div>
            <div class="p-4 border rounded-lg bg-white">
                <p class="font-semibold">3. El historial de todas las páginas visitadas</p>
                <p class="text-sm text-green-700 font-bold mt-1">Lista Enlazada o Vector Dinámico. Permite almacenar un número variable de registros.</p>
            </div>
        </div>
      `
    },
    {
      id: 'p12-7-results',
      title: 'Resultados del Corte II',
      notes: 'Momento de mostrar la tabla de calificaciones.',
      contentHtml: `
        <div class="space-y-6">
           <div class="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg">
            <h3 class="text-xl font-bold text-teal-900 mb-2">Resumen de Evaluaciones</h3>
          </div>
          <div class="overflow-x-auto border rounded-xl shadow-sm">
            <table class="min-w-full text-sm text-left">
              <thead class="bg-slate-100 text-slate-700 font-bold">
                <tr><th class="p-3">Actividad</th><th class="p-3">Tema</th><th class="p-3 text-center">Valor</th><th class="p-3 text-center">Estado</th></tr>
              </thead>
              <tbody class="divide-y bg-white">
                <tr>
                  <td class="p-3">Guía de Ejercicios</td><td class="p-3">Listas, Pilas, Colas</td><td class="p-3 text-center font-bold">10%</td><td class="p-3 text-center text-green-600">Calificado</td>
                </tr>
                <tr>
                  <td class="p-3">Proyecto Final</td><td class="p-3">Integración de Estructuras</td><td class="p-3 text-center font-bold">20%</td><td class="p-3 text-center text-green-600">Defendido</td>
                </tr>
                <tr class="bg-slate-50 font-bold"><td class="p-3" colspan="2">TOTAL CORTE II</td><td class="p-3 text-center text-lg">30%</td><td></td></tr>
                <tr class="bg-slate-900 text-white font-bold"><td class="p-3" colspan="2">ACUMULADO GENERAL</td><td class="p-3 text-center text-lg">60%</td><td></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 'p12-8-next',
      title: 'Preparándonos para el Corte Final',
      notes: 'Generar expectativa por los temas finales.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">La Recta Final: Estructuras No Lineales</h3>
        <p class="text-gray-600 mb-6">Hemos dominado las estructuras lineales. Ahora, el mundo se vuelve más complejo y poderoso. En el último corte exploraremos:</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
            <div class="bg-white p-5 border rounded-lg shadow-sm">
              <h4 class="font-bold text-emerald-700 text-lg">Árboles</h4>
              <p class="text-sm text-gray-600">Estructuras jerárquicas, ideales para búsquedas eficientes (Árboles de Búsqueda Binaria), sistemas de archivos y mucho más.</p>
            </div>
            <div class="bg-white p-5 border rounded-lg shadow-sm">
              <h4 class="font-bold text-sky-700 text-lg">Grafos</h4>
              <p class="text-sm text-gray-600">La estructura más genérica, que modela redes sociales, mapas de carreteras, conexiones de red y casi cualquier problema de interconexión.</p>
            </div>
        </div>
      `
    },
    {
      id: 'p12-end-questions',
      title: 'Revisión de Notas',
      notes: 'Espacio para consultas individuales.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full">
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Verificación de Calificaciones</h3>
          <p class="text-center text-gray-600 max-w-md">Por favor, acérquese para revisar su nota del proyecto y el acumulado final del corte. Este es el momento de aclarar cualquier duda.</p>
        </div>
      `
    },
    {
      id: 'p12-end-thanks',
      title: 'Fin del Corte II',
      notes: 'Cierre y motivación.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center">
          <h2 class="text-3xl font-bold text-slate-900 mb-4">¡Excelente Trabajo en este Segundo Corte!</h2>
        </div>
      `
    }
  ]
};
