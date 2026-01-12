import { Module } from '../../types';

export const MODULE_16: Module = {
  id: 'mod-16',
  title: '16. Cadenas de Caracteres (Strings)',
  description: 'Manipulación de texto: operaciones, funciones comunes y representación en memoria.',
  evaluation: 'Ejercicios Prácticos',
  slides: [
    {
      id: 's16-1',
      title: '¿Qué es un String?',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700 text-lg">
            Una <strong>Cadena de Caracteres</strong> (String) es, en esencia, un arreglo de caracteres. Imagínalo como un collar de cuentas o vagones de un tren.
          </p>
          
          <div class="flex flex-col items-center py-4">
            <div class="flex">
              <div class="w-12 h-12 border-2 border-pink-500 bg-pink-100 flex items-center justify-center text-2xl font-bold text-pink-900 rounded-l-lg">H</div>
              <div class="w-12 h-12 border-y-2 border-r-2 border-pink-500 bg-pink-50 flex items-center justify-center text-2xl font-bold text-pink-900">o</div>
              <div class="w-12 h-12 border-y-2 border-r-2 border-pink-500 bg-pink-50 flex items-center justify-center text-2xl font-bold text-pink-900">l</div>
              <div class="w-12 h-12 border-y-2 border-r-2 border-pink-500 bg-pink-50 flex items-center justify-center text-2xl font-bold text-pink-900">a</div>
              <div class="w-12 h-12 border-y-2 border-r-2 border-slate-400 bg-slate-200 flex items-center justify-center text-sm font-mono text-slate-600 rounded-r-lg">\\0</div>
            </div>
            <div class="flex text-xs text-gray-400 font-mono mt-1 gap-0">
              <div class="w-12 text-center">0</div>
              <div class="w-12 text-center">1</div>
              <div class="w-12 text-center">2</div>
              <div class="w-12 text-center">3</div>
              <div class="w-12 text-center">End</div>
            </div>
          </div>

          <p class="text-xs text-gray-500 text-center">
            El carácter '\\0' (nulo) es invisible pero indica dónde termina el texto en la memoria.
          </p>
        </div>
      `,
    },
    {
      id: 's16-2',
      title: 'Operaciones Básicas',
      contentHtml: `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white p-4 rounded-xl border shadow-sm">
             <div class="text-3xl mb-2">🔗</div>
             <h4 class="font-bold text-slate-800">Concatenación</h4>
             <p class="text-sm text-slate-600">Unir eslabones. <code>"Hola" + "Mundo"</code> crea una cadena nueva más larga.</p>
          </div>
          
          <div class="bg-white p-4 rounded-xl border shadow-sm">
             <div class="text-3xl mb-2">📏</div>
             <h4 class="font-bold text-slate-800">Longitud</h4>
             <p class="text-sm text-slate-600">Contar cuántos caracteres tiene. "Hola" mide 4.</p>
          </div>

          <div class="bg-white p-4 rounded-xl border shadow-sm">
             <div class="text-3xl mb-2">✂️</div>
             <h4 class="font-bold text-slate-800">Subcadena</h4>
             <p class="text-sm text-slate-600">Recortar un pedazo. <code>Subcadena("Hola", 0, 1)</code> da "Ho".</p>
          </div>

          <div class="bg-white p-4 rounded-xl border shadow-sm">
             <div class="text-3xl mb-2">⚖️</div>
             <h4 class="font-bold text-slate-800">Comparación</h4>
             <p class="text-sm text-slate-600">¿Son iguales? ¡Ojo! "A" (65) es diferente de "a" (97).</p>
          </div>
        </div>
      `,
    },
    {
      id: 's16-3',
      title: 'Código ASCII y Unicode',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Las computadoras solo entienden números. Cada letra tiene un ID numérico.
          </p>
          
          <div class="bg-slate-800 p-4 rounded-xl shadow-lg text-center">
            <h4 class="text-slate-400 text-xs uppercase tracking-widest mb-4">Tabla de Traducción (ASCII)</h4>
            <div class="grid grid-cols-3 gap-4 text-sm font-mono text-green-400">
              <div class="border border-slate-600 p-2 rounded">
                <span class="text-white">'A'</span> == 65
              </div>
              <div class="border border-slate-600 p-2 rounded">
                <span class="text-white">'a'</span> == 97
              </div>
              <div class="border border-slate-600 p-2 rounded">
                <span class="text-white">'0'</span> == 48
              </div>
              <div class="border border-slate-600 p-2 rounded">
                <span class="text-white">' '</span> == 32
              </div>
              <div class="border border-slate-600 p-2 rounded">
                <span class="text-white">'@'</span> == 64
              </div>
              <div class="border border-slate-600 p-2 rounded">
                <span class="text-white">'ñ'</span> == 164
              </div>
            </div>
          </div>
          <p class="text-xs text-gray-500 text-center">
            Por esto "Avión" es menor que "Barco" (65 < 66), pero "avión" es mayor que "Barco" (97 > 66).
          </p>
        </div>
      `,
    },
    {
      id: 's16-4',
      title: 'Caja de Herramientas (Funciones)',
      contentHtml: `
        <div class="space-y-6">
          <div class="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
            <table class="min-w-full text-sm text-left">
              <thead class="bg-gray-50 text-gray-700 font-bold">
                <tr><th class="p-3">Función</th><th class="p-3">Descripción</th></tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                <tr class="bg-white"><td class="p-3 font-mono text-blue-600">Longitud(cad)</td><td class="p-3 text-gray-600">Devuelve el número de caracteres.</td></tr>
                <tr class="bg-gray-50"><td class="p-3 font-mono text-blue-600">Subcadena(cad, i, f)</td><td class="p-3 text-gray-600">Extrae desde la posición i hasta f.</td></tr>
                <tr class="bg-white"><td class="p-3 font-mono text-blue-600">Mayusculas(cad)</td><td class="p-3 text-gray-600">Convierte todo a mayúsculas (útil para comparar).</td></tr>
                <tr class="bg-gray-50"><td class="p-3 font-mono text-blue-600">ConvertirANumero(cad)</td><td class="p-3 text-gray-600">"123" (Texto) -> 123 (Número).</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      `,
    },
    {
      id: 's16-5',
      title: 'Ejemplo: Contar Vocales',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">Algoritmo para contar cuántas 'a' tiene una frase.</p>
          <div class="bg-slate-900 text-slate-300 p-5 rounded-xl font-mono text-xs shadow-lg">
            contador <- 0<br>
            <span class="text-purple-400">Para</span> i <- 0 <span class="text-purple-400">Hasta</span> Longitud(frase)-1 <span class="text-purple-400">Hacer</span><br>
            &nbsp;&nbsp;letra <- <span class="text-yellow-400">Subcadena</span>(frase, i, i)<br>
            &nbsp;&nbsp;<span class="text-purple-400">Si</span> letra == "a" <span class="text-purple-400">O</span> letra == "A" <span class="text-purple-400">Entonces</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;contador <- contador + 1<br>
            &nbsp;&nbsp;<span class="text-purple-400">FinSi</span><br>
            <span class="text-purple-400">FinPara</span>
          </div>
        </div>
      `,
    },
    {
      id: 's16-6',
      title: 'Ejemplo: Palíndromos',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Un palíndromo se lee igual al derecho y al revés.
          </p>
          
          <div class="flex flex-col items-center gap-4 bg-indigo-50 p-6 rounded-xl border border-indigo-100">
             <div class="text-2xl font-bold tracking-widest text-indigo-900">ANITA LAVA LA TINA</div>
             
             <div class="flex w-full justify-between px-8 text-indigo-500 text-2xl">
                <span>⬆️</span>
                <span>⬆️</span>
             </div>
             <div class="flex w-full justify-between px-4 text-xs text-indigo-400 font-mono">
                <span>Inicio (i) -></span>
                <span><- Fin (j)</span>
             </div>
             
             <div class="bg-white p-3 rounded text-xs text-gray-600 shadow-sm w-full">
                <strong>Algoritmo:</strong><br>
                1. Eliminar espacios ("ANITALAVALATINA").<br>
                2. Usar dos índices: <code>i</code> al principio, <code>j</code> al final.<br>
                3. Mientras <code>i < j</code>: Si letras son distintas -> Falso. Avanzar <code>i</code>, Retroceder <code>j</code>.
             </div>
          </div>
        </div>
      `,
    },
    {
      id: 's16-7',
      title: 'Resumen',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center space-y-6">
          <div class="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 text-4xl">
            💬
          </div>
          <h3 class="text-2xl font-bold text-slate-900">El Lenguaje Humano</h3>
          <p class="text-gray-600 max-w-md">
            El manejo de texto es fundamental. Casi toda la información en internet (HTML, JSON, URLs) son cadenas de caracteres que tu programa debe leer y entender.
          </p>
        </div>
      `,
    },
  ],
};
