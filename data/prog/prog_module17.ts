
import { Module } from '../../types';

export const PROG_MODULE_17: Module = {
  id: 'prog-mod-17',
  title: '17. Estructuras Avanzadas y Aplicaciones',
  description: 'Introducción a árboles balanceados (AVL) y aplicaciones prácticas de los árboles.',
  evaluation: '20% - Trabajo Práctico Final',
  slides: [
    {
      id: 'p17-1',
      title: 'Repaso: El Mundo de los Árboles Balanceados',
      notes: 'Recordar por qué existen los árboles auto-balanceables.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">La Garantía del O(log N)</h3>
        <p class="text-gray-600 mb-4">En la clase anterior, vimos los <strong>Árboles AVL</strong>. Su propósito, como el de otros árboles auto-balanceables, es garantizar que el árbol nunca degenere en una lista enlazada, asegurando así un rendimiento de <strong>O(log N)</strong> para las operaciones.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
             <h5 class="font-bold text-blue-900">Árboles AVL</h5>
             <p class="text-sm text-blue-800">Muy estrictos con el balance (Factor de Equilibrio de -1, 0, o 1). Esto los hace muy rápidos para búsquedas, pero más lentos para inserciones/eliminaciones por las posibles rotaciones.</p>
          </div>
          <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
             <h5 class="font-bold text-red-900">Árboles Rojo-Negro</h5>
             <p class="text-sm text-red-800">Son otro tipo de árbol auto-balanceable. Son menos estrictos con el balance, lo que resulta en menos rotaciones en promedio. Son los más usados en implementaciones de la vida real (ej. <code>std::map</code> en C++).</p>
          </div>
        </div>
      `
    },
    {
      id: 'p17-2',
      title: 'Árboles para Bases de Datos: B-Trees',
      notes: 'Introducir los B-Trees y su aplicación en almacenamiento masivo.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">¿Y si los Datos no Caben en Memoria?</h3>
        <p class="text-gray-600 mb-4">Cuando trabajamos con bases de datos o sistemas de archivos, los datos están en el disco, que es miles de veces más lento que la RAM. Los <strong>B-Trees</strong> son árboles optimizados para minimizar los accesos a disco.</p>
        <div class="grid md:grid-cols-2 gap-6 items-center">
            <div class="prose prose-sm">
                <h5>Características del B-Tree</h5>
                <ul>
                    <li>Los nodos pueden tener <strong>muchos hijos</strong> (no solo dos).</li>
                    <li>Son árboles "bajos y anchos", lo que reduce su altura drásticamente.</li>
                    <li>Al tener menos altura, se necesitan menos accesos a disco para encontrar un dato.</li>
                </ul>
            </div>
             <div class="bg-white p-2 border rounded-lg flex justify-center"><div class="mermaid">graph TD; A("10 | 20")-->B(1..9); A-->C("11..19"); A-->D("21..");</div><p class="text-xs text-center mt-2">Un nodo puede contener múltiples claves que guían la búsqueda.</p></div>
        </div>
      `
    },
    {
      id: 'p17-3',
      title: 'La Estructura Final: Introducción a los Grafos',
      notes: 'Presentar los grafos como la estructura más general.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">De las Jerarquías a las Redes</h3>
        <p class="text-gray-600 mb-4">Los árboles son excelentes para relaciones jerárquicas (padre-hijo). Pero, ¿cómo modelamos una red de amigos, un mapa de carreteras, o la web? Aquí entran los <strong>Grafos</strong>.</p>
        <div class="bg-purple-50 border-l-4 border-purple-500 p-4">
            <p class="text-purple-800">Un <strong>Grafo</strong> es un conjunto de <strong>Vértices</strong> (nodos) conectados por <strong>Aristas</strong> (edges). Es la estructura de datos más general que existe; las listas y los árboles son solo tipos especiales de grafos.</p>
        </div>
        <div class="flex justify-center my-4"><div class="mermaid">graph TD; A(Madrid)---B(Barcelona); A---C(Lisboa); B---D(París); C---A;</div></div>
      `
    },
    {
      id: 'p17-4',
      title: 'Terminología de Grafos',
      notes: 'Definir los conceptos básicos de los grafos.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">El Lenguaje de las Redes</h3>
        <div class="grid grid-cols-2 gap-4">
            <div class="p-3 bg-white border rounded-lg"><strong class="text-blue-700">Dirigido vs. No Dirigido:</strong> Una arista puede ser una flecha (como 'seguir' en Twitter) o una línea (como ser 'amigos' en Facebook).</div>
            <div class="p-3 bg-white border rounded-lg"><strong class="text-blue-700">Ponderado vs. No Ponderado:</strong> Una arista puede tener un costo o peso (como la distancia entre dos ciudades) o no.</div>
            <div class="p-3 bg-white border rounded-lg"><strong class="text-blue-700">Grado de un Vértice:</strong> El número de aristas conectadas a él.</div>
            <div class="p-3 bg-white border rounded-lg"><strong class="text-blue-700">Ciclo:</strong> Un camino que empieza y termina en el mismo vértice.</div>
        </div>
      `
    },
    {
      id: 'p17-5',
      title: 'Representación 1: Matriz de Adyacencia',
      notes: 'Primera forma de representar un grafo en código.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Representando un Grafo con una Matriz</h3>
        <p class="text-gray-600 mb-4">Una matriz N x N (donde N es el número de vértices) donde <code>matriz[i][j] = 1</code> si hay una arista de <code>i</code> a <code>j</code>, y <code>0</code> si no.</p>
        <div class="grid md:grid-cols-2 gap-6 items-center">
            <div class="bg-white p-2 border rounded-lg flex justify-center"><div class="mermaid">graph TD; A(0)---B(1); A---C(2); B---C;</div></div>
            <div class="font-mono text-xs">
                <p>  0 1 2</p>
                <p>0 [0,1,1]</p>
                <p>1 [1,0,1]</p>
                <p>2 [1,1,0]</p>
            </div>
        </div>
        <div class="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div class="p-3 bg-green-50 rounded"><strong class="text-green-800">Pro:</strong> Verificar si existe una arista entre dos nodos es muy rápido (O(1)).</div>
            <div class="p-3 bg-red-50 rounded"><strong class="text-red-800">Contra:</strong> Usa mucha memoria (N²) incluso si el grafo tiene pocas aristas (es "disperso").</div>
        </div>
      `
    },
    {
      id: 'p17-6',
      title: 'Representación 2: Lista de Adyacencia',
      notes: 'Segunda y más común forma de representar un grafo.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Representando un Grafo con una Lista</h3>
        <p class="text-gray-600 mb-4">Un arreglo (o mapa) donde cada posición <code>i</code> contiene una lista de los vértices adyacentes a <code>i</code>. Esta es la representación más común.</p>
        <div class="grid md:grid-cols-2 gap-6 items-center">
            <div class="bg-white p-2 border rounded-lg flex justify-center"><div class="mermaid">graph TD; A(0)---B(1); A---C(2); B---C;</div></div>
            <div class="font-mono text-sm">
                <p>0: [1, 2]</p>
                <p>1: [0, 2]</p>
                <p>2: [0, 1]</p>
            </div>
        </div>
        <div class="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div class="p-3 bg-green-50 rounded"><strong class="text-green-800">Pro:</strong> Muy eficiente en memoria para grafos dispersos.</div>
            <div class="p-3 bg-red-50 rounded"><strong class="text-red-800">Contra:</strong> Verificar si existe una arista entre dos nodos es más lento (O(grado)), ya que hay que recorrer la lista.</div>
        </div>
      `
    },
    {
      id: 'p17-7',
      title: 'Práctica: Modelando con Grafos',
      notes: 'Un ejercicio conceptual para aplicar lo aprendido.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Llevando el Mundo a un Grafo</h3>
        <p class="text-gray-600 mb-4">Describe cómo modelarías los siguientes escenarios como un grafo. ¿Es dirigido/no dirigido? ¿Ponderado/no ponderado?</p>
        <div class="space-y-4 text-sm">
            <div class="p-4 border rounded-lg bg-white">
                <p class="font-semibold">1. Una red de carreteras entre ciudades con distancias.</p>
                <p class="mt-1 text-blue-700"><strong>Respuesta:</strong> No dirigido (generalmente) y Ponderado (la distancia es el peso).</p>
            </div>
            <div class="p-4 border rounded-lg bg-white">
                <p class="font-semibold">2. La red de "seguidores" en Instagram.</p>
                <p class="mt-1 text-blue-700"><strong>Respuesta:</strong> Dirigido (puedes seguir a alguien sin que te siga de vuelta) y No Ponderado.</p>
            </div>
             <div class="p-4 border rounded-lg bg-white">
                <p class="font-semibold">3. Prerrequisitos de materias en un pénsum de estudios.</p>
                <p class="mt-1 text-blue-700"><strong>Respuesta:</strong> Dirigido (debes ver Cálculo I ANTES de Cálculo II) y No Ponderado.</p>
            </div>
        </div>
      `
    },
    {
      id: 'p17-8',
      title: 'Proyecto Final (20%): GPS Simple',
      notes: 'Presentar el proyecto final del curso.',
      contentHtml: `
        <div class="bg-slate-900 text-white p-6 rounded-xl shadow-lg">
          <h3 class="text-xl font-bold mb-2 text-yellow-400">Proyecto Final: Mi Propio GPS</h3>
          <p class="text-slate-300 text-sm mb-6">Desarrolle una aplicación de consola en C++ o Python que simule un sistema de mapas simple usando un <strong>Grafo Ponderado No Dirigido</strong>.</p>
          <div class="space-y-3 text-sm border-t border-slate-700 pt-4">
              <p><strong>Requisito 1:</strong> Permitir al usuario añadir "ciudades" (vértices) y "carreteras" (aristas con una distancia o "peso").</p>
              <p><strong>Requisito 2:</strong> Implementar una forma de representar el grafo (Matriz o Lista de Adyacencia).</p>
              <p><strong>Requisito 3:</strong> Implementar un algoritmo de búsqueda de caminos (puede ser BFS para encontrar cualquier camino, o si se atreven, investigar e implementar el <strong>Algoritmo de Dijkstra</strong> para encontrar el camino más corto).</p>
          </div>
        </div>
      `
    },
    {
      id: 'p17-end-questions',
      title: '¿Preguntas?',
      notes: 'Espacio para dudas sobre el proyecto final.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full">
          <h3 class="text-2xl font-bold text-slate-900 mb-4">¿Dudas sobre Grafos o el Proyecto Final?</h3>
        </div>
      `
    },
    {
      id: 'p17-end-thanks',
      title: 'Gracias y Próxima Clase',
      notes: 'Cierre y adelanto.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center">
          <h2 class="text-3xl font-bold text-slate-900 mb-4">Fin del Módulo 17</h2>
          <p class="text-gray-600 text-lg">En la próxima clase, nos enfocaremos en los algoritmos para resolver problemas con grafos, como la <b>Búsqueda por Profundidad (DFS)</b> y la <b>Búsqueda por Anchura (BFS)</b>.</p>
        </div>
      `
    }
  ]
};
