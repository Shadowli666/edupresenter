import { Module } from '../../types';

export const MODULE_14: Module = {
  id: 'mod-14',
  title: '14. Arreglos Bidimensionales (Matrices)',
  description: 'Manejo de tablas de datos, filas y columnas.',
  evaluation: 'Ejercicios Prácticos',
  slides: [
    {
      id: 's14-1',
      title: '¿Qué es una Matriz?',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700 text-lg">
            Una <strong>Matriz</strong> es un arreglo de dos dimensiones. Es una estructura de datos organizada en <strong>Filas</strong> (horizontal) y <strong>Columnas</strong> (vertical).
          </p>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-purple-50 border-l-4 border-purple-500 p-4 flex flex-col justify-center">
              <h4 class="font-bold text-purple-900 mb-2">Analogía Visual</h4>
              <p class="text-purple-800 text-sm">
                Piensa en una hoja de cálculo de Excel, una sala de cine con filas de asientos, o un tablero de ajedrez.
              </p>
            </div>
            
            <div class="flex justify-center items-center gap-4 text-6xl opacity-80">
               <span>♟️</span>
               <span>📊</span>
               <span>🎬</span>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 's14-2',
      title: 'Declaración e Índices',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Necesitamos dos índices para ubicar un elemento: uno para la fila ($i$) y otro para la columna ($j$).
          </p>
          
          <div class="grid md:grid-cols-2 gap-6 items-center">
            <div class="bg-slate-900 text-slate-300 p-5 rounded-xl font-mono text-sm shadow-lg">
              <span class="text-gray-500">// Sintaxis</span><br>
              <span class="text-purple-400">Dimension</span> matriz[filas, columnas]<br>
              <br>
              <span class="text-gray-500">// Ejemplo: Tablero 3x3</span><br>
              <span class="text-purple-400">Dimension</span> tablero[3, 3]
            </div>
            
            <div class="bg-white p-4 rounded border border-slate-200 text-center">
               <div class="text-4xl font-bold text-slate-800 mb-2">M[<span class="text-blue-600">i</span>, <span class="text-green-600">j</span>]</div>
               <div class="text-sm text-slate-500">
                 <span class="text-blue-600 font-bold">i</span> = Fila (Vertical)<br>
                 <span class="text-green-600 font-bold">j</span> = Columna (Horizontal)
               </div>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 's14-3',
      title: 'Visualización',
      contentHtml: `
        <div class="space-y-6 flex flex-col items-center">
          <p class="text-gray-600 text-sm mb-2">Coordenadas [Fila, Columna]</p>
          
          <div class="inline-block bg-white p-4 rounded-xl shadow-lg border border-slate-200">
            <!-- Header Row -->
            <div class="flex mb-2">
              <div class="w-16"></div>
              <div class="w-20 text-center font-bold text-green-600 text-xs uppercase">Col 0</div>
              <div class="w-20 text-center font-bold text-green-600 text-xs uppercase">Col 1</div>
              <div class="w-20 text-center font-bold text-green-600 text-xs uppercase">Col 2</div>
            </div>
            
            <!-- Row 0 -->
            <div class="flex mb-2 items-center">
              <div class="w-16 font-bold text-blue-600 text-xs uppercase text-right pr-3">Fila 0</div>
              <div class="flex">
                <div class="w-20 h-16 bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-500 font-mono text-xs m-0.5 rounded">[0,0]</div>
                <div class="w-20 h-16 bg-slate-50 border border-slate-300 flex items-center justify-center text-slate-500 font-mono text-xs m-0.5 rounded">[0,1]</div>
                <div class="w-20 h-16 bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-500 font-mono text-xs m-0.5 rounded">[0,2]</div>
              </div>
            </div>

            <!-- Row 1 -->
            <div class="flex mb-2 items-center">
              <div class="w-16 font-bold text-blue-600 text-xs uppercase text-right pr-3">Fila 1</div>
              <div class="flex">
                <div class="w-20 h-16 bg-slate-50 border border-slate-300 flex items-center justify-center text-slate-500 font-mono text-xs m-0.5 rounded">[1,0]</div>
                <div class="w-20 h-16 bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-500 font-mono text-xs m-0.5 rounded">[1,1]</div>
                <div class="w-20 h-16 bg-slate-50 border border-slate-300 flex items-center justify-center text-slate-500 font-mono text-xs m-0.5 rounded">[1,2]</div>
              </div>
            </div>
            
            <!-- Row 2 -->
            <div class="flex items-center">
              <div class="w-16 font-bold text-blue-600 text-xs uppercase text-right pr-3">Fila 2</div>
              <div class="flex">
                <div class="w-20 h-16 bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-500 font-mono text-xs m-0.5 rounded">[2,0]</div>
                <div class="w-20 h-16 bg-slate-50 border border-slate-300 flex items-center justify-center text-slate-500 font-mono text-xs m-0.5 rounded">[2,1]</div>
                <div class="w-20 h-16 bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-500 font-mono text-xs m-0.5 rounded">[2,2]</div>
              </div>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 's14-4',
      title: 'Recorrido de Matrices',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Para recorrer una matriz completa, necesitamos <strong>dos ciclos anidados</strong>. El externo controla las filas y el interno las columnas.
          </p>
          
          <div class="grid md:grid-cols-2 gap-6 items-center">
            <div class="bg-slate-900 text-slate-300 p-5 rounded-xl font-mono text-xs shadow-lg">
              <span class="text-purple-400">Para</span> i = 0 <span class="text-purple-400">Hasta</span> 2 <span class="text-purple-400">Hacer</span> <span class="text-gray-500">// Filas</span><br>
              &nbsp;&nbsp;<span class="text-purple-400">Para</span> j = 0 <span class="text-purple-400">Hasta</span> 2 <span class="text-purple-400">Hacer</span> <span class="text-gray-500">// Cols</span><br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">Escribir</span> matriz[i, j]<br>
              &nbsp;&nbsp;<span class="text-purple-400">FinPara</span><br>
              <span class="text-purple-400">FinPara</span>
            </div>

            <div class="flex justify-center">
               <div class="mermaid">
                 graph TD
                   Start((Inicio)) --> LoopI{Fila i <= 2?}
                   LoopI -- V --> LoopJ{Col j <= 2?}
                   LoopJ -- V --> Acc[Acceder M[i,j]]
                   Acc --> IncJ[j++]
                   IncJ --> LoopJ
                   LoopJ -- F --> IncI[i++]
                   IncI --> LoopI
                   LoopI -- F --> End((Fin))
                   style LoopI fill:#dbeafe,stroke:#2563eb
                   style LoopJ fill:#dcfce7,stroke:#16a34a
               </div>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 's14-5',
      title: 'Ejemplo: Matriz Identidad',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Llenar una matriz de forma que la diagonal principal tenga 1s y el resto 0s.
          </p>
          
          <div class="grid md:grid-cols-2 gap-6 items-center">
            <div class="bg-slate-900 text-slate-300 p-5 rounded-xl font-mono text-[10px] shadow-lg overflow-x-auto">
              <span class="text-purple-400">Para</span> i = 0 <span class="text-purple-400">Hasta</span> 2 <span class="text-purple-400">Hacer</span><br>
              &nbsp;&nbsp;<span class="text-purple-400">Para</span> j = 0 <span class="text-purple-400">Hasta</span> 2 <span class="text-purple-400">Hacer</span><br>
                <span class="text-purple-400">Si</span> (i == j) <span class="text-purple-400">Entonces</span><br>
                  &nbsp;&nbsp;matriz[i, j] = 1<br>
                <span class="text-purple-400">SiNo</span><br>
                  &nbsp;&nbsp;matriz[i, j] = 0<br>
                <span class="text-purple-400">FinSi</span><br>
              &nbsp;&nbsp;<span class="text-purple-400">FinPara</span><br>
              <span class="text-purple-400">FinPara</span>
            </div>
            
            <div class="flex justify-center">
              <div class="grid grid-cols-3 gap-1 p-2 bg-gray-200 rounded">
                <div class="w-10 h-10 bg-blue-500 text-white font-bold flex items-center justify-center rounded">1</div>
                <div class="w-10 h-10 bg-white text-gray-400 flex items-center justify-center rounded">0</div>
                <div class="w-10 h-10 bg-white text-gray-400 flex items-center justify-center rounded">0</div>
                
                <div class="w-10 h-10 bg-white text-gray-400 flex items-center justify-center rounded">0</div>
                <div class="w-10 h-10 bg-blue-500 text-white font-bold flex items-center justify-center rounded">1</div>
                <div class="w-10 h-10 bg-white text-gray-400 flex items-center justify-center rounded">0</div>
                
                <div class="w-10 h-10 bg-white text-gray-400 flex items-center justify-center rounded">0</div>
                <div class="w-10 h-10 bg-white text-gray-400 flex items-center justify-center rounded">0</div>
                <div class="w-10 h-10 bg-blue-500 text-white font-bold flex items-center justify-center rounded">1</div>
              </div>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 's14-6',
      title: 'Aplicaciones',
      contentHtml: `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white p-4 rounded-xl border shadow-sm flex items-start gap-3">
            <div class="text-3xl">♟️</div>
            <div>
              <h4 class="font-bold text-slate-800">Juegos de Tablero</h4>
              <p class="text-sm text-slate-600">Ajedrez, Damas, Tres en Raya, Buscaminas.</p>
            </div>
          </div>

          <div class="bg-white p-4 rounded-xl border shadow-sm flex items-start gap-3">
            <div class="text-3xl">🖼️</div>
            <div>
              <h4 class="font-bold text-slate-800">Imágenes Digitales</h4>
              <p class="text-sm text-slate-600">Una imagen en escala de grises es una matriz de píxeles (0-255).</p>
            </div>
          </div>

          <div class="bg-white p-4 rounded-xl border shadow-sm flex items-start gap-3">
            <div class="text-3xl">🗺️</div>
            <div>
              <h4 class="font-bold text-slate-800">Mapas y Terrenos</h4>
              <p class="text-sm text-slate-600">Representación de laberintos o mapas de altura en videojuegos.</p>
            </div>
          </div>

          <div class="bg-white p-4 rounded-xl border shadow-sm flex items-start gap-3">
            <div class="text-3xl">📐</div>
            <div>
              <h4 class="font-bold text-slate-800">Matemáticas</h4>
              <p class="text-sm text-slate-600">Resolución de sistemas de ecuaciones lineales y transformaciones 3D.</p>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 's14-7',
      title: 'Ejercicio: Suma de Filas',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-white p-6 rounded-xl border shadow-sm">
            <h4 class="font-bold text-slate-800 mb-4">Reto: Promedio de Alumnos</h4>
            <p class="text-slate-600 mb-4">
              Dada una matriz de notas (Filas=Alumnos, Columnas=Materias), calcular el promedio de cada alumno.
            </p>
            
            <div class="bg-yellow-50 p-3 rounded text-sm text-yellow-800 mb-4">
              <strong>Pista:</strong> Debes reiniciar el acumulador de suma <strong>dentro</strong> del primer ciclo, pero <strong>antes</strong> del segundo.
            </div>

            <details class="group">
              <summary class="flex items-center gap-2 text-sm font-bold text-blue-600 cursor-pointer hover:underline p-2 bg-blue-50 rounded">
                <span>💡 Ver Solución</span>
              </summary>
              <div class="mt-4 bg-slate-900 text-slate-300 p-4 rounded font-mono text-xs">
                <span class="text-purple-400">Para</span> i = 0 <span class="text-purple-400">Hasta</span> N-1 <span class="text-purple-400">Hacer</span> <span class="text-gray-500">// Alumnos</span><br>
                &nbsp;&nbsp;suma = 0 <span class="text-green-400">// Reiniciar para cada alumno</span><br>
                &nbsp;&nbsp;<span class="text-purple-400">Para</span> j = 0 <span class="text-purple-400">Hasta</span> M-1 <span class="text-purple-400">Hacer</span> <span class="text-gray-500">// Materias</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;suma = suma + notas[i, j]<br>
                &nbsp;&nbsp;<span class="text-purple-400">FinPara</span><br>
                &nbsp;&nbsp;prom = suma / M<br>
                &nbsp;&nbsp;Escribir "Promedio Alumno ", i, ": ", prom<br>
                <span class="text-purple-400">FinPara</span>
              </div>
            </details>
          </div>
        </div>
      `,
    },
    {
      id: 's14-8',
      title: 'Matrices Irregulares',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            En algunos lenguajes (como Java o C#), es posible tener "arreglos de arreglos" donde cada fila tiene un tamaño diferente.
          </p>
          
          <div class="flex items-center gap-6 bg-slate-50 p-6 rounded-xl border border-slate-200">
             <div class="flex flex-col gap-1">
               <div class="flex gap-1">
                 <div class="w-8 h-8 bg-blue-200 rounded"></div>
                 <div class="w-8 h-8 bg-blue-200 rounded"></div>
                 <div class="w-8 h-8 bg-blue-200 rounded"></div>
               </div>
               <div class="flex gap-1">
                 <div class="w-8 h-8 bg-blue-200 rounded"></div>
                 <div class="w-8 h-8 bg-blue-200 rounded"></div>
               </div>
               <div class="flex gap-1">
                 <div class="w-8 h-8 bg-blue-200 rounded"></div>
                 <div class="w-8 h-8 bg-blue-200 rounded"></div>
                 <div class="w-8 h-8 bg-blue-200 rounded"></div>
                 <div class="w-8 h-8 bg-blue-200 rounded"></div>
               </div>
             </div>
             
             <div>
               <h4 class="font-bold text-slate-800">Jagged Arrays (Dentados)</h4>
               <p class="text-sm text-slate-600">
                 No todas las filas tienen la misma longitud. No es común en lógica básica, pero es útil saber que existe.
               </p>
             </div>
          </div>
        </div>
      `,
    },
    {
      id: 's14-9',
      title: 'Resumen',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center space-y-6">
          <div class="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-4xl">
            🏁
          </div>
          <h3 class="text-2xl font-bold text-slate-900">Dominando las Dimensiones</h3>
          <p class="text-gray-600 max-w-md">
            Las matrices expanden nuestra capacidad de organizar datos. La clave es dominar el uso de <strong>ciclos anidados ($i, j$)</strong> para controlar filas y columnas independientemente.
          </p>
        </div>
      `,
    },
  ],
};
