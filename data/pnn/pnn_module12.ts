import { Module } from '../../types';

export const PNN_MODULE_12: Module = {
  id: 'pnn-mod-12',
  title: '12. Proyecto de Corte II',
  description: 'Aplicación práctica de estructuras jerárquicas (Árboles).',
  evaluation: '20% - Proyecto Final de Corte',
  slides: [
    {
      id: 'pnn12-1',
      title: 'Hito: Estructuras Jerárquicas',
      notes: 'Cierre del módulo de árboles.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full space-y-8">
          <div class="text-center max-w-4xl">
            <h1 class="text-4xl font-bold text-slate-900 mb-6">Proyecto Integrador: Corte II</h1>
            <p class="text-xl text-slate-700">
              Hemos dominado las estructuras no lineales fundamentales:
            </p>
          </div>
          
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
            <div class="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500 flex flex-col items-center">
              <div class="text-4xl mb-2">🌳</div>
              <h3 class="font-bold text-slate-800">Árboles Binarios</h3>
              <p class="text-xs text-slate-500 text-center mt-2">Recorridos y Estructura</p>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-500 flex flex-col items-center">
              <div class="text-4xl mb-2">🔍</div>
              <h3 class="font-bold text-slate-800">BST</h3>
              <p class="text-xs text-slate-500 text-center mt-2">Búsqueda Eficiente</p>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-md border-t-4 border-yellow-500 flex flex-col items-center">
              <div class="text-4xl mb-2">⚡</div>
              <h3 class="font-bold text-slate-800">Heaps</h3>
              <p class="text-xs text-slate-500 text-center mt-2">Prioridad y Orden</p>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-md border-t-4 border-purple-500 flex flex-col items-center">
              <div class="text-4xl mb-2">⚖️</div>
              <h3 class="font-bold text-slate-800">AVL</h3>
              <p class="text-xs text-slate-500 text-center mt-2">Auto-balanceo</p>
            </div>
          </div>
          
          <p class="text-slate-600 italic mt-8">
            "La teoría sin práctica es estéril. La práctica sin teoría es ciega."
          </p>
        </div>
      `
    },
    {
      id: 'pnn12-2-scope',
      title: 'Alcance del Proyecto',
      notes: 'Opciones de implementación.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full">
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-slate-800">El Desafío</h3>
            <p class="text-slate-600">
              Diseñar e implementar una aplicación de software que resuelva un problema real utilizando una estructura de datos jerárquica como componente central.
            </p>
            
            <div class="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <h4 class="font-bold text-slate-700 mb-2">Requisitos Mínimos</h4>
              <ul class="list-disc list-inside space-y-2 text-sm text-slate-600">
                <li>Implementación propia de la estructura (No usar librerías externas para el árbol).</li>
                <li>Persistencia de datos (Archivos o BD).</li>
                <li>Interfaz de Usuario (Consola avanzada o GUI).</li>
              </ul>
            </div>
          </div>

          <div class="bg-white p-6 rounded-xl shadow border border-slate-200">
            <h4 class="font-bold text-slate-700 mb-4">Ideas de Proyectos</h4>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <div class="bg-blue-100 p-2 rounded text-blue-600 font-bold">1</div>
                <div>
                  <h5 class="font-bold text-slate-800">Sistema de Archivos Virtual</h5>
                  <p class="text-xs text-slate-500">Simular comandos como mkdir, ls, cd, rm usando un árbol n-ario.</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="bg-green-100 p-2 rounded text-green-600 font-bold">2</div>
                <div>
                  <h5 class="font-bold text-slate-800">Motor de Autocompletado</h5>
                  <p class="text-xs text-slate-500">Usar un Trie (Árbol de Prefijos) para sugerir palabras rápidamente.</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="bg-purple-100 p-2 rounded text-purple-600 font-bold">3</div>
                <div>
                  <h5 class="font-bold text-slate-800">Gestor de Torneos</h5>
                  <p class="text-xs text-slate-500">Árbol binario para representar llaves de eliminación directa en deportes.</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="bg-yellow-100 p-2 rounded text-yellow-600 font-bold">4</div>
                <div>
                  <h5 class="font-bold text-slate-800">Compresor de Archivos</h5>
                  <p class="text-xs text-slate-500">Implementar el algoritmo de Huffman usando Heaps y Árboles.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn12-3-rubric',
      title: 'Rúbrica de Evaluación',
      notes: 'Criterios de calificación.',
      contentHtml: `
        <div class="flex flex-col h-full">
          <h3 class="text-xl font-bold text-slate-800 mb-6">Criterios de Evaluación (20%)</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
            <!-- Funcionalidad -->
            <div class="bg-white p-6 rounded-xl shadow border-t-4 border-green-500 flex flex-col">
              <h4 class="font-bold text-green-800 text-lg mb-2">Funcionalidad (40%)</h4>
              <ul class="space-y-2 text-sm text-slate-600 flex-1">
                <li>• El programa compila y ejecuta sin errores.</li>
                <li>• Cumple con todos los casos de uso propuestos.</li>
                <li>• Manejo robusto de errores (no se cierra inesperadamente).</li>
              </ul>
            </div>

            <!-- Calidad Técnica -->
            <div class="bg-white p-6 rounded-xl shadow border-t-4 border-blue-500 flex flex-col">
              <h4 class="font-bold text-blue-800 text-lg mb-2">Calidad Técnica (40%)</h4>
              <ul class="space-y-2 text-sm text-slate-600 flex-1">
                <li>• Uso correcto de la estructura de datos.</li>
                <li>• Código limpio, modular y comentado.</li>
                <li>• Eficiencia algorítmica (evitar O(n^2) innecesarios).</li>
                <li>• <strong>Defensa oral:</strong> Capacidad de explicar el código.</li>
              </ul>
            </div>

            <!-- Documentación -->
            <div class="bg-white p-6 rounded-xl shadow border-t-4 border-slate-500 flex flex-col">
              <h4 class="font-bold text-slate-800 text-lg mb-2">Informe (20%)</h4>
              <ul class="space-y-2 text-sm text-slate-600 flex-1">
                <li>• Descripción del problema.</li>
                <li>• Diagrama de clases UML.</li>
                <li>• Análisis de complejidad de las operaciones principales.</li>
                <li>• Manual de usuario.</li>
              </ul>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn12-4-timeline',
      title: 'Cronograma y Entregables',
      notes: 'Fechas importantes.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full space-y-8">
          <div class="w-full max-w-3xl">
            <div class="relative">
              <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-200"></div>
              
              <!-- Evento 1 -->
              <div class="relative flex items-center justify-between mb-8">
                <div class="w-5/12 text-right pr-8">
                  <h4 class="font-bold text-slate-800">Semana 1</h4>
                  <p class="text-sm text-slate-500">Propuesta de Proyecto</p>
                </div>
                <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow"></div>
                <div class="w-5/12 pl-8">
                  <p class="text-xs text-slate-400">Definición del alcance y aprobación del tema.</p>
                </div>
              </div>

              <!-- Evento 2 -->
              <div class="relative flex items-center justify-between mb-8">
                <div class="w-5/12 text-right pr-8">
                  <p class="text-xs text-slate-400">Revisión de estructuras y diseño de clases.</p>
                </div>
                <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow"></div>
                <div class="w-5/12 pl-8">
                  <h4 class="font-bold text-slate-800">Semana 2</h4>
                  <p class="text-sm text-slate-500">Avance del 50%</p>
                </div>
              </div>

              <!-- Evento 3 -->
              <div class="relative flex items-center justify-between">
                <div class="w-5/12 text-right pr-8">
                  <h4 class="font-bold text-slate-800">Semana 3</h4>
                  <p class="text-sm text-slate-500">Entrega Final y Sustentación</p>
                </div>
                <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow"></div>
                <div class="w-5/12 pl-8">
                  <p class="text-xs text-slate-400">Código fuente + Informe + Demo en vivo.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-yellow-50 border border-yellow-200 p-4 rounded-lg text-center max-w-2xl">
            <p class="text-yellow-800 text-sm font-bold">
              ⚠️ Nota: El plagio o la incapacidad de explicar el propio código resultará en una nota de 0.0.
            </p>
          </div>
        </div>
      `
    }
  ]
};
