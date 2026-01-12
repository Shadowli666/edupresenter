import { Module } from '../../types';

export const PNN_MODULE_16: Module = {
  id: 'pnn-mod-16',
  title: '16. N-Reinas (N-Queens)',
  description: 'El problema clásico de satisfacción de restricciones en un tablero de ajedrez.',
  evaluation: '0% - Práctica Guiada',
  slides: [
    {
      id: 'pnn16-1',
      title: 'El Desafío Real',
      notes: 'Definición.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full space-y-6">
          <div class="text-center max-w-4xl">
            <h1 class="text-3xl font-bold text-slate-900 mb-4">El Problema de las N-Reinas</h1>
            <p class="text-lg text-slate-700">
              Colocar $N$ reinas en un tablero de $N \\times N$ de modo que <strong>ninguna se ataque entre sí</strong>.
            </p>
          </div>
          
          <div class="bg-white p-4 rounded-lg shadow-xl border border-slate-300">
            <!-- Tablero 4x4 -->
            <div class="grid grid-cols-4 w-64 h-64 border-2 border-slate-800">
              <!-- Fila 0 -->
              <div class="bg-white flex items-center justify-center text-2xl"></div>
              <div class="bg-slate-800 flex items-center justify-center text-2xl text-white">♛</div>
              <div class="bg-white flex items-center justify-center text-2xl"></div>
              <div class="bg-slate-800 flex items-center justify-center text-2xl"></div>
              
              <!-- Fila 1 -->
              <div class="bg-slate-800 flex items-center justify-center text-2xl"></div>
              <div class="bg-white flex items-center justify-center text-2xl"></div>
              <div class="bg-slate-800 flex items-center justify-center text-2xl"></div>
              <div class="bg-white flex items-center justify-center text-2xl text-slate-900">♛</div>
              
              <!-- Fila 2 -->
              <div class="bg-white flex items-center justify-center text-2xl text-slate-900">♛</div>
              <div class="bg-slate-800 flex items-center justify-center text-2xl"></div>
              <div class="bg-white flex items-center justify-center text-2xl"></div>
              <div class="bg-slate-800 flex items-center justify-center text-2xl"></div>
              
              <!-- Fila 3 -->
              <div class="bg-slate-800 flex items-center justify-center text-2xl"></div>
              <div class="bg-white flex items-center justify-center text-2xl"></div>
              <div class="bg-slate-800 flex items-center justify-center text-2xl text-white">♛</div>
              <div class="bg-white flex items-center justify-center text-2xl"></div>
            </div>
          </div>
          <p class="text-sm text-slate-500">Solución válida para N=4.</p>
        </div>
      `
    },
    {
      id: 'pnn16-2-constraints',
      title: 'Modelando las Restricciones',
      notes: 'Filas, Columnas y Diagonales.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full">
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-slate-800">Reglas de Ataque</h3>
            <ul class="space-y-4 text-slate-600">
              <li class="flex items-start gap-3">
                <div class="bg-red-100 p-1 rounded text-red-600 font-bold">1</div>
                <div>
                  <strong>Misma Fila:</strong> Trivial si decidimos colocar una reina por fila (i).
                </div>
              </li>
              <li class="flex items-start gap-3">
                <div class="bg-red-100 p-1 rounded text-red-600 font-bold">2</div>
                <div>
                  <strong>Misma Columna:</strong> Usamos un array <code>cols[j]</code> para marcar columnas ocupadas.
                </div>
              </li>
              <li class="flex items-start gap-3">
                <div class="bg-red-100 p-1 rounded text-red-600 font-bold">3</div>
                <div>
                  <strong>Diagonales:</strong> Aquí está el truco matemático.
                </div>
              </li>
            </ul>
          </div>

          <div class="bg-white p-6 rounded-xl shadow border border-slate-200 flex flex-col items-center justify-center">
            <h4 class="font-bold text-slate-700 mb-4">Matemática de Diagonales</h4>
            <div class="grid grid-cols-4 gap-1 text-xs font-mono text-center mb-4">
              <div class="bg-blue-100 p-2">0,0</div><div class="bg-green-100 p-2">0,1</div><div class="bg-blue-100 p-2">0,2</div><div class="bg-green-100 p-2">0,3</div>
              <div class="bg-green-100 p-2">1,0</div><div class="bg-blue-100 p-2">1,1</div><div class="bg-green-100 p-2">1,2</div><div class="bg-blue-100 p-2">1,3</div>
              <div class="bg-blue-100 p-2">2,0</div><div class="bg-green-100 p-2">2,1</div><div class="bg-blue-100 p-2">2,2</div><div class="bg-green-100 p-2">2,3</div>
              <div class="bg-green-100 p-2">3,0</div><div class="bg-blue-100 p-2">3,1</div><div class="bg-green-100 p-2">3,2</div><div class="bg-blue-100 p-2">3,3</div>
            </div>
            <div class="text-sm text-slate-600 space-y-2">
              <p><span class="bg-blue-100 px-1 rounded">Diagonal Principal (\)</span>: <code>row - col = cte</code></p>
              <p><span class="bg-green-100 px-1 rounded">Diagonal Secundaria (/)</span>: <code>row + col = cte</code></p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn16-3-process',
      title: 'Proceso de Backtracking',
      notes: 'Visualización del algoritmo.',
      contentHtml: `
        <div class="flex flex-col h-full space-y-4">
          <h3 class="text-xl font-bold text-slate-800">Exploración y Poda</h3>
          
          <div class="flex justify-center items-center gap-8 flex-1">
            <!-- Paso 1 -->
            <div class="flex flex-col items-center">
              <div class="text-xs font-bold mb-2">Paso 1</div>
              <div class="grid grid-cols-4 w-24 h-24 border border-slate-400">
                <div class="bg-slate-800 text-white flex items-center justify-center text-xs">Q</div><div class="bg-white"></div><div class="bg-slate-800"></div><div class="bg-white"></div>
                <div class="bg-white"></div><div class="bg-slate-800"></div><div class="bg-white"></div><div class="bg-slate-800"></div>
                <div class="bg-slate-800"></div><div class="bg-white"></div><div class="bg-slate-800"></div><div class="bg-white"></div>
                <div class="bg-white"></div><div class="bg-slate-800"></div><div class="bg-white"></div><div class="bg-slate-800"></div>
              </div>
              <div class="text-[10px] text-green-600 mt-1">OK</div>
            </div>

            <div class="text-2xl text-slate-300">→</div>

            <!-- Paso 2 (Fallo) -->
            <div class="flex flex-col items-center">
              <div class="text-xs font-bold mb-2">Paso 2 (Intento)</div>
              <div class="grid grid-cols-4 w-24 h-24 border border-slate-400">
                <div class="bg-slate-800 text-white flex items-center justify-center text-xs">Q</div><div class="bg-white"></div><div class="bg-slate-800"></div><div class="bg-white"></div>
                <div class="bg-white text-red-600 font-bold flex items-center justify-center text-xs bg-red-100">Q?</div><div class="bg-slate-800"></div><div class="bg-white"></div><div class="bg-slate-800"></div>
                <div class="bg-slate-800"></div><div class="bg-white"></div><div class="bg-slate-800"></div><div class="bg-white"></div>
                <div class="bg-white"></div><div class="bg-slate-800"></div><div class="bg-white"></div><div class="bg-slate-800"></div>
              </div>
              <div class="text-[10px] text-red-600 mt-1">Ataque (Columna)</div>
            </div>

            <div class="text-2xl text-slate-300">→</div>

            <!-- Paso 2 (Correcto) -->
            <div class="flex flex-col items-center">
              <div class="text-xs font-bold mb-2">Paso 2 (Corregido)</div>
              <div class="grid grid-cols-4 w-24 h-24 border border-slate-400">
                <div class="bg-slate-800 text-white flex items-center justify-center text-xs">Q</div><div class="bg-white"></div><div class="bg-slate-800"></div><div class="bg-white"></div>
                <div class="bg-white"></div><div class="bg-slate-800"></div><div class="bg-white text-white flex items-center justify-center text-xs bg-slate-800">Q</div><div class="bg-slate-800"></div>
                <div class="bg-slate-800"></div><div class="bg-white"></div><div class="bg-slate-800"></div><div class="bg-white"></div>
                <div class="bg-white"></div><div class="bg-slate-800"></div><div class="bg-white"></div><div class="bg-slate-800"></div>
              </div>
              <div class="text-[10px] text-green-600 mt-1">OK</div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pnn16-4-code',
      title: 'Implementación (Python)',
      notes: 'Código optimizado.',
      contentHtml: `
        <div class="flex flex-col h-full">
          <div class="bg-yellow-500 text-white px-4 py-2 rounded-t-lg font-bold text-sm">Python: N-Queens</div>
          <div class="bg-slate-900 p-4 rounded-b-lg overflow-auto custom-scrollbar flex-1 text-xs font-mono text-yellow-100">
<pre><code class="language-python">def solve_n_queens(n):
    solutions = []
    board = [-1] * n # board[row] = col
    
    # Sets para búsqueda O(1)
    cols = set()
    diag1 = set() # row - col
    diag2 = set() # row + col
    
    def backtrack(row):
        if row == n:
            solutions.append(board[:])
            return

        for col in range(n):
            if col in cols or (row - col) in diag1 or (row + col) in diag2:
                continue
                
            # Do
            board[row] = col
            cols.add(col)
            diag1.add(row - col)
            diag2.add(row + col)
            
            # Recurse
            backtrack(row + 1)
            
            # Undo
            cols.remove(col)
            diag1.remove(row - col)
            diag2.remove(row + col)
            
    backtrack(0)
    return len(solutions)

print(f"Soluciones para N=8: {solve_n_queens(8)}") # 92</code></pre>
          </div>
        </div>
      `
    }
  ]
};
