import { Module } from '../../types';

export const PNN_MODULE_11: Module = {
  id: 'pnn-mod-11',
  title: '11. Árboles Balanceados (AVL)',
  description: 'Estructuras de datos auto-balanceadas para garantizar búsquedas eficientes.',
  evaluation: '10% - Quiz + Taller Corto',
  slides: [
    {
      id: 'pnn11-1',
      title: 'El Problema del Desbalance',
      notes: 'Degradación de BST a Lista Enlazada.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full space-y-6">
          <div class="text-center max-w-4xl">
            <h1 class="text-3xl font-bold text-slate-900 mb-4">Árboles AVL</h1>
            <p class="text-lg text-slate-700">
              En un Árbol de Búsqueda Binaria (BST) estándar, el rendimiento depende del orden de inserción.
              Si insertamos datos ordenados (1, 2, 3, 4...), el árbol degenera.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-12 w-full max-w-4xl">
            <!-- Caso Degenerado -->
            <div class="bg-red-50 p-6 rounded-xl border border-red-200 flex flex-col items-center">
              <h3 class="font-bold text-red-800 mb-4">Peor Caso (Degenerado)</h3>
              <div class="flex flex-col items-center space-y-2">
                <div class="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center shadow">1</div>
                <div class="h-4 w-0.5 bg-red-300"></div>
                <div class="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center shadow">2</div>
                <div class="h-4 w-0.5 bg-red-300"></div>
                <div class="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center shadow">3</div>
                <div class="h-4 w-0.5 bg-red-300"></div>
                <div class="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center shadow">4</div>
              </div>
              <p class="mt-4 font-mono text-red-700">Altura = N<br>Búsqueda = O(N)</p>
            </div>

            <!-- Caso Balanceado -->
            <div class="bg-green-50 p-6 rounded-xl border border-green-200 flex flex-col items-center">
              <h3 class="font-bold text-green-800 mb-4">Caso Balanceado (AVL)</h3>
              <div class="relative w-48 h-48">
                <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center shadow z-10">3</div>
                
                <!-- Ramas -->
                <div class="absolute top-4 left-1/2 w-16 h-16 border-t-2 border-l-2 border-green-300 transform -rotate-45 origin-top-left"></div>
                <div class="absolute top-4 left-1/2 w-16 h-16 border-t-2 border-r-2 border-green-300 transform rotate-45 origin-top-right"></div>

                <div class="absolute top-16 left-8 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center shadow">2</div>
                <div class="absolute top-16 right-8 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center shadow">4</div>
                
                <div class="absolute top-32 left-4 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center shadow">1</div>
              </div>
              <p class="mt-4 font-mono text-green-700">Altura ≈ log₂N<br>Búsqueda = O(log N)</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn11-2-definition',
      title: 'Definición y Factor de Equilibrio',
      notes: 'Propiedad invariante del AVL.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full">
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-slate-800">La Propiedad AVL</h3>
            <p class="text-slate-600">
              Un árbol es AVL si para <strong>todo nodo</strong>, la diferencia de altura entre su subárbol izquierdo y derecho es como máximo 1.
            </p>
            
            <div class="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
              <h4 class="font-bold text-blue-900">Factor de Equilibrio (FE)</h4>
              <code class="block bg-white p-2 mt-2 rounded border border-blue-200 text-center font-mono text-blue-800">
                FE = Altura(Izquierda) - Altura(Derecha)
              </code>
              <p class="text-sm text-blue-800 mt-2">
                Para que sea válido: <strong>FE ∈ {-1, 0, 1}</strong>
              </p>
            </div>
          </div>

          <div class="bg-white p-6 rounded-xl shadow border border-slate-200 flex flex-col items-center justify-center">
            <h4 class="font-bold text-slate-700 mb-4">Cálculo de Alturas</h4>
            <div class="relative w-64 h-64">
              <!-- Raiz -->
              <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold z-10">10</div>
              <div class="absolute top-2 left-1/2 transform translate-x-6 text-xs font-bold text-red-500">FE: +1</div>

              <!-- Nivel 1 -->
              <div class="absolute top-16 left-16 w-10 h-10 bg-slate-600 text-white rounded-full flex items-center justify-center font-bold z-10">5</div>
              <div class="absolute top-18 left-16 transform -translate-x-8 text-xs font-bold text-green-500">FE: 0</div>

              <div class="absolute top-16 right-16 w-10 h-10 bg-slate-600 text-white rounded-full flex items-center justify-center font-bold z-10">20</div>
              <div class="absolute top-18 right-16 transform translate-x-8 text-xs font-bold text-red-500">FE: -1</div>

              <!-- Nivel 2 -->
              <div class="absolute top-32 right-8 w-10 h-10 bg-slate-400 text-white rounded-full flex items-center justify-center font-bold z-10">25</div>
              
              <!-- Conexiones -->
              <svg class="absolute inset-0 w-full h-full pointer-events-none">
                <line x1="128" y1="20" x2="84" y2="64" stroke="#94a3b8" stroke-width="2" />
                <line x1="128" y1="20" x2="172" y2="64" stroke="#94a3b8" stroke-width="2" />
                <line x1="192" y1="84" x2="214" y2="128" stroke="#94a3b8" stroke-width="2" />
              </svg>
            </div>
            <p class="text-xs text-slate-500 text-center mt-2">
              Altura Izq: 1 | Altura Der: 2<br>
              FE(10) = 1 - 2 = -1 (Válido)
            </p>
          </div>
        </div>
      `
    },
    {
      id: 'pnn11-3-rotations',
      title: 'Mecánica de Rotaciones',
      notes: 'Cómo corregir el desbalance.',
      contentHtml: `
        <div class="flex flex-col h-full space-y-4">
          <h3 class="text-xl font-bold text-slate-800">Restaurando el Equilibrio</h3>
          <p class="text-slate-600 text-sm">
            Cuando una inserción o eliminación rompe la propiedad AVL (FE se vuelve 2 o -2), aplicamos <strong>rotaciones</strong> locales.
          </p>
          
          <div class="grid grid-cols-2 gap-4 flex-1">
            <!-- Rotación Simple -->
            <div class="bg-white p-4 rounded border border-slate-200">
              <h4 class="font-bold text-indigo-600 mb-2">Rotación Simple (LL / RR)</h4>
              <div class="flex justify-around items-center h-32">
                <div class="flex flex-col items-center">
                  <div class="text-xs mb-1">Desbalanceado</div>
                  <div class="flex flex-col items-end -space-y-1">
                    <div class="w-6 h-6 bg-red-100 border border-red-500 rounded-full flex items-center justify-center text-xs">3</div>
                    <div class="w-0.5 h-4 bg-slate-300 mr-3"></div>
                    <div class="w-6 h-6 bg-red-100 border border-red-500 rounded-full flex items-center justify-center text-xs">2</div>
                    <div class="w-0.5 h-4 bg-slate-300 mr-3"></div>
                    <div class="w-6 h-6 bg-red-100 border border-red-500 rounded-full flex items-center justify-center text-xs">1</div>
                  </div>
                </div>
                <div class="text-2xl text-slate-400">→</div>
                <div class="flex flex-col items-center">
                  <div class="text-xs mb-1">Balanceado</div>
                  <div class="relative w-16 h-12">
                    <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-100 border border-green-500 rounded-full flex items-center justify-center text-xs">2</div>
                    <div class="absolute bottom-0 left-0 w-6 h-6 bg-green-100 border border-green-500 rounded-full flex items-center justify-center text-xs">1</div>
                    <div class="absolute bottom-0 right-0 w-6 h-6 bg-green-100 border border-green-500 rounded-full flex items-center justify-center text-xs">3</div>
                  </div>
                </div>
              </div>
              <p class="text-xs text-slate-500 mt-2">Ocurre cuando el desbalance es "lineal" (Izquierda-Izquierda o Derecha-Derecha).</p>
            </div>

            <!-- Rotación Doble -->
            <div class="bg-white p-4 rounded border border-slate-200">
              <h4 class="font-bold text-purple-600 mb-2">Rotación Doble (LR / RL)</h4>
              <div class="flex justify-around items-center h-32">
                <div class="flex flex-col items-center">
                  <div class="text-xs mb-1">Zig-Zag</div>
                  <div class="relative w-12 h-16">
                    <div class="absolute top-0 left-0 w-6 h-6 bg-red-100 border border-red-500 rounded-full flex items-center justify-center text-xs">3</div>
                    <div class="absolute top-8 left-0 w-6 h-6 bg-red-100 border border-red-500 rounded-full flex items-center justify-center text-xs">1</div>
                    <div class="absolute bottom-0 right-0 w-6 h-6 bg-red-100 border border-red-500 rounded-full flex items-center justify-center text-xs">2</div>
                    <svg class="absolute inset-0 w-full h-full pointer-events-none"><line x1="12" y1="24" x2="12" y2="32" stroke="#cbd5e1" /><line x1="12" y1="56" x2="36" y2="64" stroke="#cbd5e1" /></svg>
                  </div>
                </div>
                <div class="text-2xl text-slate-400">→</div>
                <div class="flex flex-col items-center">
                  <div class="text-xs mb-1">Balanceado</div>
                  <div class="relative w-16 h-12">
                    <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-100 border border-green-500 rounded-full flex items-center justify-center text-xs">2</div>
                    <div class="absolute bottom-0 left-0 w-6 h-6 bg-green-100 border border-green-500 rounded-full flex items-center justify-center text-xs">1</div>
                    <div class="absolute bottom-0 right-0 w-6 h-6 bg-green-100 border border-green-500 rounded-full flex items-center justify-center text-xs">3</div>
                  </div>
                </div>
              </div>
              <p class="text-xs text-slate-500 mt-2">Requiere dos pasos: convertir el Zig-Zag en línea, y luego rotar.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn11-4-code',
      title: 'Implementación (Python)',
      notes: 'Estructura de nodo y rotación.',
      contentHtml: `
        <div class="flex flex-col h-full">
          <div class="bg-yellow-500 text-white px-4 py-2 rounded-t-lg font-bold text-sm">Python: Nodo AVL</div>
          <div class="bg-slate-900 p-4 rounded-b-lg overflow-auto custom-scrollbar flex-1 text-xs font-mono text-yellow-100">
<pre><code class="language-python">class NodoAVL:
    def __init__(self, valor):
        self.valor = valor
        self.izq = None
        self.der = None
        self.altura = 1

def obtener_altura(nodo):
    if not nodo: return 0
    return nodo.altura

def balance(nodo):
    if not nodo: return 0
    return obtener_altura(nodo.izq) - obtener_altura(nodo.der)

def rotar_derecha(y):
    x = y.izq
    T2 = x.der
    
    # Rotación
    x.der = y
    y.izq = T2
    
    # Actualizar alturas
    y.altura = 1 + max(obtener_altura(y.izq), obtener_altura(y.der))
    x.altura = 1 + max(obtener_altura(x.izq), obtener_altura(x.der))
    
    return x # Nueva raíz</code></pre>
          </div>
        </div>
      `
    },
    {
      id: 'pnn11-5-summary',
      title: 'Resumen',
      notes: 'Conclusión.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center space-y-8">
          <h2 class="text-3xl font-bold text-slate-800">Eficiencia Garantizada</h2>
          <p class="text-xl text-slate-600 max-w-2xl">
            Los árboles AVL pagan un pequeño costo extra en la inserción/eliminación (para mantener el balance) a cambio de garantizar búsquedas extremadamente rápidas en el peor caso.
          </p>
          <div class="grid grid-cols-3 gap-4 w-full max-w-lg mt-8">
            <div class="bg-slate-100 p-4 rounded">
              <div class="font-bold text-slate-700">Búsqueda</div>
              <div class="text-green-600">O(log n)</div>
            </div>
            <div class="bg-slate-100 p-4 rounded">
              <div class="font-bold text-slate-700">Inserción</div>
              <div class="text-green-600">O(log n)</div>
            </div>
            <div class="bg-slate-100 p-4 rounded">
              <div class="font-bold text-slate-700">Eliminación</div>
              <div class="text-green-600">O(log n)</div>
            </div>
          </div>
        </div>
      `
    }
  ]
};
