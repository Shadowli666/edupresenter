import { Module } from '../types';

export const PROG_MODULE_8: Module = {
  id: 'prog-mod-8',
  title: '8. Pilas (Stacks)',
  description: 'Concepto LIFO, operaciones básicas y estructura.',
  evaluation: '0% - Introducción Teórica',
  slides: [
    {
      id: 'p8-1',
      title: '¿Qué es una Pila (Stack)?',
      notes: 'Introducción al concepto LIFO con una analogía visual.',
      contentHtml: `
        <div class="space-y-8">
          <div class="flex flex-col md:flex-row gap-8 items-center">
            <div class="flex-1">
              <h3 class="text-2xl font-bold text-slate-900 mb-4">LIFO: El Último en Entrar, es el Primero en Salir</h3>
              <p class="text-gray-600">Imagina una pila de platos. Colocas uno encima (push). Cuando necesitas uno, tomas el de arriba (pop), que fue el último que pusiste. No puedes sacar uno del medio.</p>
            </div>
            <div class="flex flex-col-reverse items-center p-6 bg-slate-100 rounded-xl border-b-8 border-slate-300 w-48 shadow-inner">
               <div class="w-32 h-8 bg-red-500 rounded mb-1 shadow-sm text-center text-white text-xs flex items-center justify-center animate-pulse">Tope (Top)</div>
               <div class="w-32 h-8 bg-blue-500 rounded mb-1 shadow-sm"></div>
               <div class="w-32 h-8 bg-blue-500 rounded mb-1 shadow-sm"></div>
               <div class="w-32 h-8 bg-blue-900 rounded mb-1 shadow-sm text-center text-white text-xs flex items-center justify-center">Base</div>
            </div>
          </div>
          <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 text-sm text-yellow-900">
            <strong>Restricción Clave:</strong> Solo se puede acceder al elemento en el <strong>tope</strong> de la pila.
          </div>
        </div>
      `
    },
    {
      id: 'p8-2',
      title: 'Operaciones Fundamentales',
      notes: 'Push, Pop y Peek son las operaciones canónicas.',
      contentHtml: `
        <div class="grid md:grid-cols-3 gap-6 text-center">
          <div class="bg-white border rounded-lg p-6 shadow-sm">
            <h4 class="text-xl font-bold text-green-700 mb-2">Push (Apilar)</h4>
            <p class="text-sm text-gray-600">Añade un elemento al tope de la pila.</p>
          </div>
          <div class="bg-white border rounded-lg p-6 shadow-sm">
            <h4 class="text-xl font-bold text-red-700 mb-2">Pop (Desapilar)</h4>
            <p class="text-sm text-gray-600">Elimina y devuelve el elemento del tope.</p>
          </div>
          <div class="bg-white border rounded-lg p-6 shadow-sm">
            <h4 class="text-xl font-bold text-blue-700 mb-2">Peek / Top</h4>
            <p class="text-sm text-gray-600">Devuelve el elemento del tope sin eliminarlo.</p>
          </div>
        </div>
        <p class="text-center text-sm text-gray-500 mt-6">También son comunes <code>isEmpty()</code> (¿está vacía?) y <code>isFull()</code> (¿está llena?, en implementaciones con arreglos).</p>
      `
    },
    {
      id: 'p8-3-array-impl',
      title: 'Implementación 1: Con Arreglos',
      notes: 'Mostrar la implementación más simple, con sus limitaciones.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Construyendo una Pila con un Arreglo (C++)</h3>
        <p class="text-gray-600 mb-4">Podemos usar un arreglo y una variable <code>tope</code> que actúa como índice para saber dónde está el último elemento.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <pre class="font-mono text-sm max-w-full overflow-x-auto"><code class="language-cpp">
#define MAX_SIZE 100

class Pila {
private:
    int datos[MAX_SIZE];
    int tope;

public:
    Pila() { tope = -1; } // Pila vacía

    bool push(int valor) {
        if (tope >= MAX_SIZE - 1) return false; // Overflow
        datos[++tope] = valor;
        return true;
    }

    int pop() {
        if (tope < 0) return -1; // Underflow
        return datos[tope--];
    }
};
            </code></pre>
          </div>
          <div class="prose prose-sm">
            <h5>Ventajas</h5>
            <ul><li>Simple de implementar.</li><li>Eficiente en memoria.</li></ul>
            <h5>Desventajas</h5>
            <ul><li>Tamaño <strong>fijo</strong>. Si se llena, ocurre un desbordamiento (overflow).</li></ul>
          </div>
        </div>
      `
    },
    {
      id: 'p8-4-list-impl',
      title: 'Implementación 2: Con Listas Enlazadas',
      notes: 'Mostrar la implementación dinámica, que es más flexible.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Una Pila Dinámica con Listas Enlazadas</h3>
        <p class="text-gray-600 mb-4">Usar una lista enlazada nos da una pila de tamaño flexible. Las operaciones de la pila se mapean perfectamente a las de la lista.</p>
        <div class="grid md:grid-cols-2 gap-6">
           <div class="prose prose-sm">
            <ul>
              <li><code>push(valor)</code> se convierte en <code>insertarAlInicio(valor)</code>.</li>
              <li><code>pop()</code> se convierte en <code>eliminarAlInicio()</code>.</li>
            </ul>
            <p>Ambas operaciones son <strong>O(1)</strong>, lo que hace a esta implementación muy eficiente.</p>
            <h5>Ventajas</h5>
            <ul><li>Tamaño dinámico, sin overflow.</li></ul>
            <h5>Desventajas</h5>
            <ul><li>Consume un poco más de memoria por los punteros.</li></ul>
          </div>
          <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <pre class="font-mono text-sm max-w-full overflow-x-auto"><code class="language-cpp">
class Pila {
private:
    Nodo* tope; // La "cabeza" de la lista es el tope

public:
    Pila() { tope = nullptr; }

    void push(int valor) {
        Nodo* nuevo = new Nodo(valor);
        nuevo->siguiente = tope;
        tope = nuevo;
    }

    int pop() {
        if (tope == nullptr) return -1; // Underflow
        int valor = tope->dato;
        Nodo* temp = tope;
        tope = tope->siguiente;
        delete temp;
        return valor;
    }
};
            </code></pre>
          </div>
        </div>
      `
    },
    {
      id: 'p8-5-library',
      title: 'La Vía Rápida: Bibliotecas Estándar',
      notes: 'Enseñar a usar las herramientas ya existentes.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">No Reinventes la Rueda</h3>
        <p class="text-gray-600 mb-6">En la práctica, rara vez construyes una pila desde cero. Usas las que ya existen en las bibliotecas estándar.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
            <h5 class="text-gray-400 mb-2">// C++: std::stack</h5>
            <pre class="font-mono text-sm max-w-full overflow-x-auto"><code class="language-cpp">
#include &lt;stack&gt;
std::stack&lt;int&gt; mi_pila;

mi_pila.push(10);
mi_pila.push(20);
mi_pila.pop(); // Saca el 20
// mi_pila.top() para ver el 10
            </code></pre>
          </div>
          <div class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
            <h5 class="text-gray-400 mb-2"># Python: list</h5>
            <pre class="font-mono text-sm max-w-full overflow-x-auto"><code class="language-python">
mi_pila = []

mi_pila.append(10) # push
mi_pila.append(20) # push
valor = mi_pila.pop() # pop (valor es 20)

# Para ver el tope: mi_pila[-1]
            </code></pre>
          </div>
        </div>
      `
    },
    {
      id: 'p8-6-app-parens',
      title: 'Aplicación: Balanceo de Paréntesis',
      notes: 'Un problema clásico que ilustra perfectamente el uso de una pila.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Resolviendo un Problema Real: Validar Paréntesis</h3>
        <p class="text-gray-600 mb-4">¿Cómo saber si una cadena como <code>"{ [ ( ) ] }"</code> está bien formada? Con una pila.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <ol class="list-decimal pl-5 text-sm space-y-2">
            <li>Recorre la cadena caracter por caracter.</li>
            <li>Si encuentras un paréntesis de apertura (<code>{ [ (</code>), haz <strong>push</strong> en la pila.</li>
            <li>Si encuentras uno de cierre (<code>} ] )</code>), haz <strong>pop</strong>. El paréntesis que sacas debe ser el de apertura correspondiente. Si no lo es, o si la pila está vacía, la cadena es inválida.</li>
            <li>Al final, la pila debe quedar <strong>vacía</strong>.</li>
          </ol>
          <div class="bg-gray-100 p-4 rounded-lg text-sm">
             <p>Traza para <code>"{ ( ] ) }"</code>:</p>
             <ul class="font-mono text-xs mt-2">
                <li>1. Push '{' -> Pila: ['{']</li>
                <li>2. Push '(' -> Pila: ['{', '(']</li>
                <li>3. Encuentra ']'. Pop saca '('. <strong>¡Error! No coinciden.</strong></li>
             </ul>
          </div>
        </div>
      `
    },
    {
      id: 'p8-7-app-callstack',
      title: 'Aplicación: El Call Stack',
      notes: 'Explicación conceptual de cómo funcionan las llamadas a función.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">La Pila Más Importante: El Call Stack</h3>
        <p class="text-gray-600 mb-4">La computadora usa una pila para gestionar las llamadas a funciones. Cada vez que llamas a una función, se crea un "marco" (stack frame) y se apila.</p>
        <div class="grid md:grid-cols-2 gap-6 items-center">
            <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
              <pre class="font-mono text-sm max-w-full overflow-x-auto"><code class="language-cpp">
void func_B() { ... }
void func_A() {
    func_B();
}
int main() {
    func_A();
    return 0;
}
              </code></pre>
            </div>
            <div class="text-sm space-y-2">
                <p>1. Se llama a <code>main()</code>. Se apila el frame de <code>main</code>.</p>
                <p>2. <code>main()</code> llama a <code>func_A()</code>. Se apila el frame de <code>func_A</code>.</p>
                <p>3. <code>func_A()</code> llama a <code>func_B()</code>. Se apila el frame de <code>func_B</code>.</p>
                <p>4. <code>func_B()</code> termina. Se desapila su frame y el control vuelve a <code>func_A</code>.</p>
                <p>5. <code>func_A()</code> termina. Se desapila y vuelve a <code>main</code>.</p>
                <p>6. <code>main()</code> termina. La pila queda vacía.</p>
            </div>
        </div>
      `
    },
    {
      id: 'p8-8-practice-trace',
      title: 'Práctica: Traza de Pila',
      notes: 'Ejercicio rápido para afianzar el LIFO.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Sigue la Pila</h3>
        <p class="text-gray-600 mb-4">Dada una pila P inicialmente vacía, determina su contenido final y el valor del tope.</p>
        <div class="bg-white border p-6 rounded shadow-sm font-mono text-sm overflow-x-auto">
            <p>P.push(30); P.push(15); P.pop(); P.push(40); P.push(50); P.pop();</p>
        </div>
        <details class="group bg-slate-50 p-4 rounded border mt-4">
            <summary class="font-bold text-slate-800 cursor-pointer">Ver Solución</summary>
            <div class="mt-2 text-sm text-slate-700 font-mono">
              <p>1. push(30) -> [30]</p>
              <p>2. push(15) -> [30, 15]</p>
              <p>3. pop() -> saca 15. Queda [30]</p>
              <p>4. push(40) -> [30, 40]</p>
              <p>5. push(50) -> [30, 40, 50]</p>
              <p>6. pop() -> saca 50. Queda [30, 40]</p>
              <p class="font-bold mt-2 text-green-700">Resultado Final: Tope es 40. Pila: [30, 40]</p>
            </div>
        </details>
      `
    },
    {
      id: 'p8-9-code-practice',
      title: 'Práctica: Calculadora RPN',
      notes: 'Un ejercicio de codificación desafiante y clásico.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Ejercicio: Calculadora de Notación Polaca Inversa (RPN)</h3>
        <p class="text-gray-600 mb-4">En RPN, los operadores siguen a sus operandos. Ej: <code>3 4 +</code> es <code>3+4</code>. Se evalúa con una pila.</p>
        <div class="bg-white border rounded-lg p-6">
          <h4 class="font-bold text-slate-800 mb-2">Algoritmo</h4>
          <ol class="text-sm list-decimal pl-5 text-gray-700">
              <li>Recorre la expresión de entrada (ej: "3 4 + 2 *").</li>
              <li>Si el elemento es un número, haz <strong>push</strong> en la pila.</li>
              <li>Si es un operador (+, -, *, /), haz <strong>pop</strong> dos veces para obtener los dos operandos, realiza la operación y haz <strong>push</strong> con el resultado.</li>
              <li>Al final, el único número en la pila es el resultado final.</li>
          </ol>
          <p class="font-mono text-sm mt-4 bg-gray-100 p-2 rounded"><strong>Ejemplo: "3 4 + 2 *"</strong>  -> Pila: [3] -> [3, 4] -> pop 4, pop 3, push 7 -> [7] -> [7, 2] -> pop 2, pop 7, push 14 -> [14]. Resultado: 14.</p>
        </div>
      `
    },
    {
      id: 'p8-end-questions',
      title: '¿Preguntas?',
      notes: 'Espacio para dudas.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full">
          <h3 class="text-2xl font-bold text-slate-900 mb-4">¿Dudas sobre LIFO, Implementaciones o Aplicaciones?</h3>
        </div>
      `
    },
    {
      id: 'p8-end-thanks',
      title: 'Gracias y Próxima Clase',
      notes: 'Cierre y adelanto.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center">
          <h2 class="text-3xl font-bold text-slate-900 mb-4">Fin del Módulo 8</h2>
          <p class="text-gray-600 text-lg">Las pilas son estructuras restrictivas pero potentes. En la próxima clase, veremos a su contraparte: las <b>Colas (Queues)</b>.</p>
        </div>
      `
    }
  ]
}
