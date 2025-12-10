import { Module } from '../../types';

export const PROG_MODULE_18: Module = {
  id: 'prog-mod-18',
  title: '18. Repaso Final y Próximos Pasos',
  description: 'Cierre del curso, repaso general y orientación para el futuro.',
  evaluation: 'Cierre de Semestre',
  slides: [
    {
      id: 'p18-1',
      title: 'El Gran Resumen del Curso',
      notes: 'Ofrecer una vista panorámica de todo lo aprendido durante el semestre.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Nuestro Viaje por las Estructuras de Datos</h3>
        <p class="text-gray-600 mb-6">Desde los conceptos más básicos hasta las redes complejas, hemos construido un entendimiento fundamental de cómo organizar la información de manera eficiente.</p>
        <div class="grid md:grid-cols-3 gap-4 text-center">
            <div class="p-4 bg-white border rounded-lg shadow-sm">
              <h5 class="font-bold text-blue-700">1. Estructuras Lineales</h5>
              <p class="text-xs text-gray-600 mt-2">Arreglos, Listas, Pilas, Colas. La base de la organización secuencial de datos.</p>
            </div>
            <div class="p-4 bg-white border rounded-lg shadow-sm">
              <h5 class="font-bold text-green-700">2. Estructuras Jerárquicas</h5>
              <p class="text-xs text-gray-600 mt-2">Árboles Binarios, BST, AVL. Ideales para búsquedas rápidas y datos ordenados.</p>
            </div>
            <div class="p-4 bg-white border rounded-lg shadow-sm">
              <h5 class="font-bold text-purple-700">3. Estructuras de Red</h5>
              <p class="text-xs text-gray-600 mt-2">Grafos. La estructura más universal, capaz de modelar cualquier tipo de conexión.</p>
            </div>
        </div>
      `
    },
    {
      id: 'p18-2',
      title: 'El Poder de Elegir la Estructura Correcta',
      notes: 'La lección más importante del curso: aplicar el conocimiento.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">¿Qué Estructura Usarías Para...?</h3>
        <p class="text-gray-600 mb-4">La verdadera habilidad de un ingeniero es saber elegir la herramienta correcta para cada trabajo.</p>
        <div class="space-y-3 text-sm">
            <div class="p-3 bg-white border rounded-lg">
                <p class="font-semibold">...el sistema de "Deshacer" (Undo) en un editor?</p>
                <p class="mt-1 text-purple-700 font-bold">&rarr; Pila (el último cambio es el primero en deshacerse).</p>
            </div>
             <div class="p-3 bg-white border rounded-lg">
                <p class="font-semibold">...la cola de impresión de una oficina?</p>
                <p class="mt-1 text-green-700 font-bold">&rarr; Cola (el primer trabajo enviado es el primero en imprimirse).</p>
            </div>
            <div class="p-3 bg-white border rounded-lg">
                <p class="font-semibold">...un diccionario de autocompletado?</p>
                <p class="mt-1 text-sky-700 font-bold">&rarr; Árbol (específicamente un Trie) para búsquedas de prefijos eficientes.</p>
            </div>
            <div class="p-3 bg-white border rounded-lg">
                <p class="font-semibold">...modelar una red de amistades en Facebook?</p>
                <p class="mt-1 text-indigo-700 font-bold">&rarr; Grafo no dirigido.</p>
            </div>
        </div>
      `
    },
    {
      id: 'p18-3',
      title: 'Algoritmos Clave que Debes Recordar',
      notes: 'Una lista de los algoritmos más importantes vistos.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Tu Caja de Herramientas Algorítmica</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>Recorridos de Árboles (DFS y BFS):</strong> Saber cómo visitar cada nodo de un árbol es fundamental. Pre-orden, In-orden, Post-orden y Por Niveles son esenciales.</li>
            <li><strong>Búsqueda Binaria:</strong> El algoritmo para encontrar elementos en datos ordenados en tiempo O(log N). La base de los BST.</li>
            <li><strong>Rotaciones de Árbol (Conceptual):</strong> Entender cómo los árboles AVL se balancean mediante rotaciones para garantizar el rendimiento.</li>
            <li><strong>Algoritmos de Grafos (BFS, DFS):</strong> Saber cómo explorar un grafo para encontrar nodos o caminos es el primer paso para resolver problemas más complejos como la búsqueda del camino más corto.</li>
        </ul>
      `
    },
    {
      id: 'p18-4',
      title: '¿Qué Sigue Ahora? Tu Camino como Ingeniero',
      notes: 'Orientación profesional para los estudiantes.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Este es Solo el Comienzo</h3>
        <p class="text-gray-600 mb-4">Las estructuras de datos son la base. Los siguientes pasos en tu formación incluyen:</p>
        <div class="grid md:grid-cols-2 gap-4">
            <div class="p-4 bg-white border rounded-lg">
                <h5 class="font-bold">Análisis y Diseño de Algoritmos</h5>
                <p class="text-xs text-gray-600 mt-1">Profundizar en la complejidad (Big O) y aprender paradigmas como Divide y Vencerás, Programación Dinámica y Algoritmos Voraces.</p>
            </div>
             <div class="p-4 bg-white border rounded-lg">
                <h5 class="font-bold">Bases de Datos</h5>
                <p class="text-xs text-gray-600 mt-1">Entender cómo los B-Trees y otras estructuras se usan internamente para gestionar y consultar terabytes de información de forma eficiente.</p>
            </div>
            <div class="p-4 bg-white border rounded-lg col-span-2">
                <h5 class="font-bold text-center text-red-700">¡Entrevistas de Trabajo!</h5>
                <p class="text-xs text-gray-600 mt-1 text-center">Los problemas sobre listas enlazadas, árboles, grafos, pilas y colas son el 90% de las entrevistas técnicas para roles de desarrollo de software en las grandes empresas de tecnología.</p>
            </div>
        </div>
      `
    },
    {
      id: 'p18-5',
      title: 'Resultados del Corte III',
      notes: 'Presentar las calificaciones finales.',
      contentHtml: `
        <div class="space-y-6">
           <div class="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
            <h3 class="text-xl font-bold text-purple-900 mb-2">Evaluaciones del Tercer Corte</h3>
          </div>
          <div class="overflow-x-auto border rounded-xl shadow-sm">
            <table class="min-w-full text-sm text-left">
              <thead class="bg-slate-100 text-slate-700 font-bold">
                <tr><th class="p-3">Actividad</th><th class="p-3">Tema</th><th class="p-3 text-center">Valor</th></tr>
              </thead>
              <tbody class="divide-y bg-white">
                <tr>
                  <td class="p-3">Guía de Ejercicios</td><td class="p-3">Recorridos / BST</td><td class="p-3 text-center font-bold">20%</td>
                </tr>
                <tr>
                  <td class="p-3">Proyecto Final</td><td class="p-3">Grafos</td><td class="p-3 text-center font-bold">20%</td>
                </tr>
                <tr class="bg-slate-50 font-bold"><td class="p-3" colspan="2">TOTAL CORTE III</td><td class="p-3 text-center text-lg">40%</td></tr>
                <tr class="bg-slate-900 text-white font-bold"><td class="p-3" colspan="2">NOTA FINAL DEL SEMESTRE</td><td class="p-3 text-center text-lg">100%</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 'p18-6',
      title: 'Discusión de Notas Finales',
      notes: 'Espacio para consultas individuales y cierre administrativo.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full">
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Revisión Final</h3>
          <p class="text-center text-gray-600 max-w-md">Se procederá con la revisión individual de las calificaciones del proyecto y la nota final acumulada.</p>
        </div>
      `
    },
    {
      id: 'p18-7',
      title: '¡Misión Cumplida!',
      notes: 'Mensaje de felicitaciones.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center">
            <div class="text-6xl mb-4">🎉</div>
            <h2 class="text-4xl font-bold text-slate-900 mb-2">¡Felicitaciones a Todos!</h2>
            <p class="text-gray-600 text-lg">Han completado con éxito el curso de Estructuras de Datos.</p>
        </div>
      `
    },
    {
      id: 'p18-8',
      title: 'Agradecimientos',
      notes: 'Un agradecimiento personal del instructor.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center">
          <h3 class="text-2xl font-bold text-slate-800 mb-4">Gracias</h3>
          <p class="text-gray-600 max-w-xl">Gracias por su esfuerzo, su participación y su curiosidad durante todo el semestre. Ha sido un placer guiarlos a través de este tema fundamental. Espero que lo que han aprendido aquí sea una base sólida para su futuro como excelentes ingenieros de software.</p>
        </div>
      `
    },
    {
      id: 'p18-9',
      title: '¿Preguntas Finales?',
      notes: 'Última oportunidad para dudas generales.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full">
          <h3 class="text-2xl font-bold text-slate-900 mb-4">¿Alguna Última Duda o Comentario?</h3>
        </div>
      `
    },
    {
      id: 'p18-10',
      title: 'Manténganse Curiosos',
      notes: 'Mensaje final de motivación.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center">
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-purple-500 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "La única forma de hacer un gran trabajo es amar lo que haces."
            </p>
            <footer class="flex items-center justify-center gap-2">
              <div class="h-px w-8 bg-slate-300"></div>
              <cite class="not-italic font-bold text-slate-900">Steve Jobs</cite>
            </footer>
          </blockquote>
        </div>
      `
    }
  ]
};