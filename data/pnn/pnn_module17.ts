import { Module } from '../../types';

export const PNN_MODULE_17: Module = {
  id: 'pnn-mod-17',
  title: '17. Suma de Subconjuntos (Subset Sum)',
  description: 'Encontrar combinaciones que sumen un valor exacto mediante Backtracking.',
  evaluation: '0% - Práctica Guiada',
  slides: [
    {
      id: 'pnn17-1',
      title: 'El Problema de la Suma Exacta',
      notes: 'Definición.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full space-y-6">
          <div class="text-center max-w-4xl">
            <h1 class="text-3xl font-bold text-slate-900 mb-4">Subset Sum Problem</h1>
            <p class="text-lg text-slate-700">
              Dado un conjunto de números enteros y un valor objetivo $M$, encontrar si existe un subconjunto cuya suma sea exactamente $M$.
            </p>
          </div>
          
          <div class="bg-white p-6 rounded-xl shadow-lg border border-slate-200 flex flex-col items-center gap-4">
            <div class="flex gap-2">
              <div class="w-12 h-12 bg-slate-200 rounded flex items-center justify-center font-bold text-slate-600">3</div>
              <div class="w-12 h-12 bg-slate-200 rounded flex items-center justify-center font-bold text-slate-600">5</div>
              <div class="w-12 h-12 bg-slate-200 rounded flex items-center justify-center font-bold text-slate-600">2</div>
              <div class="w-12 h-12 bg-slate-200 rounded flex items-center justify-center font-bold text-slate-600">8</div>
            </div>
            
            <div class="text-2xl font-bold text-slate-400">Target = 10</div>
            
            <div class="flex gap-2 mt-2">
              <div class="w-12 h-12 bg-green-500 text-white rounded flex items-center justify-center font-bold shadow-lg transform -translate-y-2">3</div>
              <div class="w-12 h-12 bg-slate-100 rounded flex items-center justify-center font-bold text-slate-300 border border-slate-200">5</div>
              <div class="w-12 h-12 bg-green-500 text-white rounded flex items-center justify-center font-bold shadow-lg transform -translate-y-2">2</div>
              <div class="w-12 h-12 bg-slate-100 rounded flex items-center justify-center font-bold text-slate-300 border border-slate-200">8</div>
            </div>
            <p class="text-green-600 font-bold text-sm">¡No! (3+2=5)</p>
            <p class="text-slate-500 text-xs">Espera... {2, 8} = 10. ¡Sí existe!</p>
          </div>
        </div>
      `
    },
    {
      id: 'pnn17-2-tree',
      title: 'Árbol de Decisión Binario',
      notes: 'Incluir vs Excluir.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full">
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-slate-800">Incluir o No Incluir</h3>
            <p class="text-slate-600">
              Para cada elemento del conjunto, tomamos una decisión binaria.
              Esto genera un árbol de profundidad $N$.
            </p>
            
            <div class="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
              <h4 class="font-bold text-blue-900">Complejidad</h4>
              <p class="text-sm text-blue-800 mt-2">
                En el peor caso, exploramos $2^N$ nodos.
                <br>
                Es un problema <strong>NP-Completo</strong>.
              </p>
            </div>
          </div>

          <div class="bg-white p-2 rounded-xl shadow border border-slate-200 flex items-center justify-center overflow-hidden">
             <div class="flex flex-col items-center w-full">
               <div class="w-16 h-8 bg-slate-800 text-white rounded flex items-center justify-center text-xs mb-4">Suma=0</div>
               
               <div class="flex justify-around w-full">
                 <!-- Rama Izq (Incluir 3) -->
                 <div class="flex flex-col items-center">
                   <div class="text-[10px] text-green-600 mb-1">+3</div>
                   <div class="h-4 w-0.5 bg-slate-300"></div>
                   <div class="w-16 h-8 bg-blue-100 border border-blue-500 rounded flex items-center justify-center text-xs">Suma=3</div>
                   
                   <div class="flex mt-4 gap-4">
                     <div class="flex flex-col items-center">
                       <div class="text-[10px] text-green-600 mb-1">+5</div>
                       <div class="w-16 h-8 bg-blue-50 border border-blue-300 rounded flex items-center justify-center text-[10px]">Suma=8</div>
                     </div>
                     <div class="flex flex-col items-center">
                       <div class="text-[10px] text-red-600 mb-1">No</div>
                       <div class="w-16 h-8 bg-blue-50 border border-blue-300 rounded flex items-center justify-center text-[10px]">Suma=3</div>
                     </div>
                   </div>
                 </div>

                 <!-- Rama Der (Excluir 3) -->
                 <div class="flex flex-col items-center">
                   <div class="text-[10px] text-red-600 mb-1">No</div>
                   <div class="h-4 w-0.5 bg-slate-300"></div>
                   <div class="w-16 h-8 bg-blue-100 border border-blue-500 rounded flex items-center justify-center text-xs">Suma=0</div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn17-3-pruning',
      title: 'Estrategias de Poda',
      notes: 'Optimizaciones.',
      contentHtml: `
        <div class="flex flex-col h-full space-y-6">
          <h3 class="text-xl font-bold text-slate-800">Optimizando la Búsqueda</h3>
          <p class="text-slate-600 text-sm">
            Podemos evitar explorar ramas inútiles si ordenamos el array primero ($w_1 \le w_2 \le ...$).
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-red-50 p-6 rounded-xl border border-red-200">
              <h4 class="font-bold text-red-800 mb-2">Poda por Exceso</h4>
              <p class="text-sm text-red-700">
                Si <code>suma_actual + w[i] > M</code>:
                <br>
                Como el array está ordenado, cualquier elemento futuro también hará que nos pasemos.
                <br>
                <strong>Acción:</strong> Cortar esta rama y todas las siguientes del bucle.
              </p>
            </div>

            <div class="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
              <h4 class="font-bold text-yellow-800 mb-2">Poda por Defecto</h4>
              <p class="text-sm text-yellow-700">
                Si <code>suma_actual + suma_restante < M</code>:
                <br>
                Incluso si sumamos todos los números que quedan, no llegaremos al objetivo.
                <br>
                <strong>Acción:</strong> Retornar (Backtrack).
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn17-4-code',
      title: 'Implementación (Python)',
      notes: 'Código con poda.',
      contentHtml: `
        <div class="flex flex-col h-full">
          <div class="bg-yellow-500 text-white px-4 py-2 rounded-t-lg font-bold text-sm">Python: Subset Sum</div>
          <div class="bg-slate-900 p-4 rounded-b-lg overflow-auto custom-scrollbar flex-1 text-xs font-mono text-yellow-100">
<pre><code class="language-python">def subset_sum(nums, target):
    nums.sort() # Importante para la poda
    solucion = []
    
    def backtrack(start_index, current_sum, path):
        if current_sum == target:
            solucion.append(path[:])
            return
        
        for i in range(start_index, len(nums)):
            # Poda 1: Si ya nos pasamos
            if current_sum + nums[i] > target:
                break # Como está ordenado, los siguientes también se pasarán
                
            # Do
            path.append(nums[i])
            
            # Recurse
            backtrack(i + 1, current_sum + nums[i], path)
            
            # Undo
            path.pop()
            
    backtrack(0, 0, [])
    return solucion

print(subset_sum([2, 3, 5, 8], 10)) 
# [[2, 3, 5], [2, 8]]</code></pre>
          </div>
        </div>
      `
    }
  ]
};
