import { Module } from '../../types';

export const PYTHON_MODULE_15: Module = {
  id: 'py-mod-15',
  title: '15. POO: Polimorfismo',
  description: 'Flexibilidad total: Muchas formas, una interfaz.',
  evaluation: 'Taller Práctico',
  slides: [
    {
      id: 'py15-1-concept',
      title: 'El Camaleón del Código',
      notes: 'Mismo nombre, diferente comportamiento.',
      contentHtml: `
        <div class="flex flex-col h-full items-center justify-center space-y-8">
          <div class="text-center max-w-2xl">
            <h3 class="text-3xl font-bold text-slate-800 mb-4">Polimorfismo</h3>
            <p class="text-slate-600">
              Del griego "muchas formas". Es la capacidad de objetos de diferentes clases de responder al <strong>mismo mensaje</strong> (método) cada uno a su manera.
            </p>
          </div>

          <div class="grid grid-cols-3 gap-8 w-full max-w-4xl">
            <!-- Interface -->
            <div class="col-span-3 flex justify-center mb-4">
              <div class="bg-slate-800 text-white px-6 py-3 rounded-full font-mono shadow-lg border-2 border-slate-600">
                mensaje: <span class="text-yellow-400">.dibujar()</span>
              </div>
            </div>

            <!-- Shape 1 -->
            <div class="bg-white p-6 rounded-xl shadow-md border-b-4 border-red-500 flex flex-col items-center gap-4">
              <div class="w-16 h-16 bg-red-500 rounded-full"></div>
              <div class="font-bold text-slate-700">Círculo</div>
              <div class="text-xs text-slate-500 text-center">"Yo uso pi * r^2"</div>
            </div>

            <!-- Shape 2 -->
            <div class="bg-white p-6 rounded-xl shadow-md border-b-4 border-blue-500 flex flex-col items-center gap-4">
              <div class="w-16 h-16 bg-blue-500"></div>
              <div class="font-bold text-slate-700">Cuadrado</div>
              <div class="text-xs text-slate-500 text-center">"Yo uso lado * lado"</div>
            </div>

            <!-- Shape 3 -->
            <div class="bg-white p-6 rounded-xl shadow-md border-b-4 border-green-500 flex flex-col items-center gap-4">
              <div class="w-0 h-0 border-l-[32px] border-l-transparent border-b-[64px] border-b-green-500 border-r-[32px] border-r-transparent"></div>
              <div class="font-bold text-slate-700">Triángulo</div>
              <div class="text-xs text-slate-500 text-center">"Yo uso base * altura / 2"</div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py15-2-duck-typing',
      title: 'Duck Typing',
      notes: 'Si camina como pato y grazna como pato...',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8 h-full items-center">
          <div class="space-y-6">
            <div class="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
              <h3 class="text-xl font-bold text-yellow-900 mb-2">Filosofía Pythonica</h3>
              <p class="text-yellow-800 text-sm">
                "Si camina como un pato y grazna como un pato, entonces debe ser un pato."
              </p>
              <p class="text-yellow-800 text-sm mt-2">
                A Python no le importa de qué clase es el objeto, solo le importa si tiene el método que llamamos.
              </p>
            </div>

            <div class="bg-slate-900 p-4 rounded-xl font-mono text-sm text-slate-300">
              <span class="text-purple-400">def</span> <span class="text-yellow-400">activar</span>(dispositivo):<br>
              &nbsp;&nbsp;<span class="text-gray-500"># No importa si es TV, Radio o Bomba</span><br>
              &nbsp;&nbsp;dispositivo.encender()
            </div>
          </div>

          <div class="flex flex-col items-center justify-center relative">
            <div class="bg-white p-8 rounded-full shadow-xl border-4 border-slate-200 z-10">
              <div class="text-6xl">🦆</div>
            </div>
            <div class="absolute top-0 right-10 bg-white p-2 rounded shadow border border-slate-200 text-xs transform rotate-12">
              ¿Eres un Pato?
            </div>
            <div class="absolute bottom-0 left-10 bg-white p-2 rounded shadow border border-slate-200 text-xs transform -rotate-12">
              ¡Solo grazna!
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py15-3-example',
      title: 'Ejemplo Práctico: Pagos',
      notes: 'Procesando diferentes métodos de pago.',
      contentHtml: `
        <div class="flex flex-col h-full space-y-6">
          <div class="flex-1 grid md:grid-cols-2 gap-8">
            <!-- Code -->
            <div class="bg-slate-900 p-6 rounded-xl font-mono text-xs text-slate-300 overflow-auto custom-scrollbar">
              <span class="text-purple-400">class</span> <span class="text-yellow-400">Tarjeta</span>:<br>
              &nbsp;&nbsp;<span class="text-purple-400">def</span> <span class="text-blue-400">pagar</span>(<span class="text-red-400">self</span>):<br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"Procesando tarjeta..."</span>)<br>
              <br>
              <span class="text-purple-400">class</span> <span class="text-yellow-400">PayPal</span>:<br>
              &nbsp;&nbsp;<span class="text-purple-400">def</span> <span class="text-blue-400">pagar</span>(<span class="text-red-400">self</span>):<br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">print</span>(<span class="text-green-400">"Redirigiendo a PayPal..."</span>)<br>
              <br>
              <span class="text-gray-500"># Función Polimórfica</span><br>
              <span class="text-purple-400">def</span> <span class="text-yellow-400">procesar_compra</span>(metodo_pago):<br>
              &nbsp;&nbsp;metodo_pago.pagar()
            </div>

            <!-- Visual Flow -->
            <div class="flex flex-col justify-center gap-4">
              <div class="bg-slate-100 p-4 rounded-xl border border-slate-300 text-center font-bold text-slate-700">
                Carrito de Compras ($100)
              </div>
              
              <div class="flex justify-center text-2xl text-slate-400">⬇️</div>

              <div class="bg-blue-600 text-white p-4 rounded-xl text-center font-mono shadow-lg">
                procesar_compra( ? )
              </div>

              <div class="flex justify-center text-2xl text-slate-400">⬇️</div>

              <div class="flex gap-4 justify-center">
                <div class="bg-white p-2 rounded border border-slate-200 text-xs text-center w-24">
                  💳<br>Tarjeta
                </div>
                <div class="bg-white p-2 rounded border border-slate-200 text-xs text-center w-24">
                  🅿️<br>PayPal
                </div>
                <div class="bg-white p-2 rounded border border-slate-200 text-xs text-center w-24">
                  ₿<br>Bitcoin
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    }
  ]
};
