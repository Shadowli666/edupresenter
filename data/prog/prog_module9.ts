
import { Module } from '../../types';

export const PROG_MODULE_9: Module = {
  id: 'prog-mod-9',
  title: '9. Aplicaciones de las Pilas',
  description: 'Evaluación de expresiones y recursividad.',
  evaluation: '10% - Guía de Ejercicios',
  slides: [
    {
      id: 'p9-1',
      title: 'Aplicaciones Clave de las Pilas',
      notes: 'Introducir los dos grandes campos de aplicación de las pilas.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">¿Para Qué Sirve Realmente una Pila?</h3>
        <p class="text-gray-600 mb-6">Las pilas son fundamentales en ciencias de la computación para resolver problemas que tienen una naturaleza "anidada" o "recursiva". Hoy veremos dos de sus aplicaciones más importantes.</p>
        <div class="grid md:grid-cols-2 gap-6 text-center">
          <div class="bg-white p-6 border rounded-lg shadow-sm">
            <h4 class="font-bold text-blue-700 text-lg">1. Parseo y Evaluación de Expresiones</h4>
            <p class="text-sm text-gray-600 mt-2">Convertir expresiones matemáticas (infijas) a un formato que la computadora pueda entender (postfijo) y evaluarlas.</p>
          </div>
          <div class="bg-white p-6 border rounded-lg shadow-sm">
            <h4 class="font-bold text-purple-700 text-lg">2. Gestión de Recursividad</h4>
            <p class="text-sm text-gray-600 mt-2">Manejar el flujo de las llamadas a funciones a través del "Call Stack" y la capacidad de convertir algoritmos recursivos a iterativos.</p>
          </div>
        </div>
      `
    },
    {
      id: 'p9-2',
      title: 'Notación de Expresiones',
      notes: 'Entender la diferencia entre infijo y postfijo (RPN).',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">El Lenguaje de las Calculadoras</h3>
        <p class="text-gray-700 mb-4">Las computadoras no evalúan "3 + 4" directamente. Usan una notación sin paréntesis llamada Notación Polaca Inversa o Postfija.</p>
        <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white p-4 border rounded">
              <strong class="block text-slate-800">Infija (Humano)</strong>
              <p class="font-mono text-lg text-gray-600">(3 + 4) * 2</p>
            </div>
            <div class="bg-blue-50 p-4 border rounded border-blue-200">
              <strong class="block text-blue-800">Postfija (Máquina)</strong>
              <p class="font-mono font-bold text-lg text-blue-700">3 4 + 2 *</p>
            </div>
        </div>
        <p class="text-sm text-gray-600 mt-4">En postfijo, el operador siempre aparece <strong>después</strong> de sus operandos. Esto elimina la necesidad de paréntesis y reglas de precedencia.</p>
      `
    },
    {
      id: 'p9-3-algo-postfix',
      title: 'Algoritmo: Evaluación Postfija',
      notes: 'Explicar el algoritmo de evaluación RPN con una pila.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Evaluando una Expresión Postfija con una Pila</h3>
        <p class="text-gray-600 mb-4">El algoritmo es simple y elegante:</p>
        <div class="grid md:grid-cols-2 gap-6">
          <ol class="list-decimal pl-5 text-sm space-y-2">
            <li>Se recorre la expresión de izquierda a derecha.</li>
            <li>Si el elemento es un <strong>número</strong>, se hace <strong>push</strong> en la pila.</li>
            <li>Si el elemento es un <strong>operador</strong>:
              <ol class="list-alpha pl-4">
                <li>Se hacen dos <strong>pop</strong> para obtener los operandos (<code>op2</code>, luego <code>op1</code>).</li>
                <li>Se realiza la operación (<code>op1 operador op2</code>).</li>
                <li>El resultado se hace <strong>push</strong> de vuelta en la pila.</li>
              </ol>
            </li>
            <li>Al final, el único valor en la pila es el resultado final.</li>
          </ol>
          <div class="bg-gray-100 p-4 rounded-lg text-sm">
             <p class="font-bold">Traza para <code>"3 4 + 2 *"</code>:</p>
             <ul class="font-mono text-xs mt-2 space-y-1">
                <li>1. Token '3': push(3). Pila: [3]</li>
                <li>2. Token '4': push(4). Pila: [3, 4]</li>
                <li>3. Token '+': pop(4), pop(3), push(3+4). Pila: [7]</li>
                <li>4. Token '2': push(2). Pila: [7, 2]</li>
                <li>5. Token '*': pop(2), pop(7), push(7*2). Pila: [14]</li>
                <li><strong>Resultado final: 14</strong></li>
             </ul>
          </div>
        </div>
      `
    },
    {
      id: 'p9-4-practice-postfix',
      title: 'Práctica: Calculadora Postfija (Python)',
      notes: 'Código completo para la calculadora RPN en Python.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Implementando la Calculadora RPN</h3>
        <p class="text-gray-600 mb-4">Esta función de Python toma una lista de tokens y la evalúa.</p>
        <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
          <pre class="font-mono text-sm max-w-full overflow-x-auto"><code class="language-python">
def evaluar_postfija(expresion):
    pila = []
    for token in expresion.split():
        if token.isdigit():
            pila.append(int(token))
        else:
            op2 = pila.pop()
            op1 = pila.pop()
            if token == '+':
                pila.append(op1 + op2)
            elif token == '-':
                pila.append(op1 - op2)
            elif token == '*':
                pila.append(op1 * op2)
            elif token == '/':
                pila.append(op1 / op2)
    return pila.pop()

# --- Prueba ---
expresion = "3 4 + 2 *"
resultado = evaluar_postfija(expresion)
print(f"El resultado de '{expresion}' es: {resultado}") # 14
          </code></pre>
        </div>
      `
    },
    {
      id: 'p9-5-practice-parens',
      title: 'Práctica: Balanceo de Símbolos (C++)',
      notes: 'Código completo para el validador de paréntesis.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Implementando el Validador de Símbolos</h3>
        <p class="text-gray-600 mb-4">Este código C++ usa un <code>std::stack</code> para verificar el balanceo.</p>
        <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
          <pre class="font-mono text-sm max-w-full overflow-x-auto"><code class="language-cpp">
#include &lt;iostream&gt;
#include &lt;stack&gt;
#include &lt;string&gt;

bool estaBalanceada(std::string expr) {
    std::stack&lt;char&gt; pila;
    for (char c : expr) {
        if (c == '(' || c == '{' || c == '[') {
            pila.push(c);
        } else if (c == ')' || c == '}' || c == ']') {
            if (pila.empty()) return false; // Cierre sin apertura
            char apertura = pila.top();
            pila.pop();
            if ((c == ')' && apertura != '(') || 
                (c == '}' && apertura != '{') ||
                (c == ']' && apertura != '[')) {
                return false; // No coinciden
            }
        }
    }
    return pila.empty(); // Debe estar vacía al final
}
          </code></pre>
        </div>
      `
    },
    {
      id: 'p9-6-recursion',
      title: 'La Pila de Llamadas y la Recursividad',
      notes: 'Repasar el concepto del call stack.',
      contentHtml: `
        <h3 class="text-xl font-bold text-purple-800 mb-4">La Pila "Invisible": El Call Stack</h3>
        <p class="text-gray-700 mb-4">Como vimos, cada llamada a función (normal o recursiva) crea un "marco" que se apila. Este marco contiene los parámetros de la función, sus variables locales y la dirección a la que debe retornar al terminar.</p>
        <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500 text-sm">
            <p>Una función recursiva es simplemente una que se apila a sí misma múltiples veces. Si no tiene un <strong>caso base</strong> para detenerse, la pila crece indefinidamente hasta causar un <strong>Stack Overflow</strong>.</p>
        </div>
      `
    },
    {
      id: 'p9-7-recursion-vs-iteration',
      title: 'Eliminando Recursión con una Pila',
      notes: 'Un concepto avanzado pero muy ilustrativo.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Recursión vs. Iteración con Pila Explícita</h3>
        <p class="text-gray-600 mb-4">Cualquier algoritmo recursivo puede ser reescrito de forma iterativa usando una pila explícita. Esto a veces es necesario para evitar un Stack Overflow con entradas muy grandes.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
            <h5 class="text-gray-400 mb-2">// Factorial Recursivo</h5>
            <pre class="font-mono text-sm max-w-full overflow-x-auto"><code class="language-cpp">
int factorial(int n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
}
            </code></pre>
          </div>
          <div class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
            <h5 class="text-gray-400 mb-2">// Factorial Iterativo con Pila</h5>
            <pre class="font-mono text-sm max-w-full overflow-x-auto"><code class="language-cpp">
int factorial_iter(int n) {
    std::stack&lt;int&gt; pila;
    while (n > 0) {
        pila.push(n--);
    }
    int res = 1;
    while (!pila.empty()) {
        res *= pila.top();
        pila.pop();
    }
    return res;
}
            </code></pre>
          </div>
        </div>
      `
    },
    {
      id: 'p9-8-other-apps',
      title: 'Otras Aplicaciones del Mundo Real',
      notes: 'Mencionar otras aplicaciones para ampliar la visión del estudiante.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Las Pilas Están en Todas Partes</h3>
        <ul class="list-disc pl-5 space-y-3 text-gray-700">
            <li>
                <strong>Función "Deshacer" (Undo):</strong> Cada acción que realizas (escribir, borrar) se guarda en una pila. Al presionar "Undo", se hace pop a la última acción y se revierte.
            </li>
            <li>
                <strong>Historial del Navegador:</strong> La función de "Atrás" en un navegador web funciona como una pila. Cada página que visitas es un push. Al ir "Atrás", haces pop a la página actual.
            </li>
            <li>
                <strong>Búsqueda en Profundidad (DFS):</strong> En algoritmos de grafos y árboles, se usa una pila para llevar un registro de los nodos por visitar.
            </li>
        </ul>
      `
    },
    {
      id: 'p9-9-code-practice',
      title: 'Práctica: Convertidor Infijo a Postfijo',
      notes: 'Un ejercicio de codificación desafiante y clásico.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Ejercicio: El Algoritmo Shunting-yard</h3>
        <p class="text-gray-600 mb-4">Implementa el algoritmo "Shunting-yard" de Edsger Dijkstra para convertir una expresión infija a postfija. Necesitarás una pila para los operadores.</p>
        <div class="bg-white border rounded-lg p-6">
          <h4 class="font-bold text-slate-800 mb-2">Algoritmo Simplificado</h4>
          <ol class="text-sm list-decimal pl-5 text-gray-700 space-y-2">
              <li>Si el token es un número, añádelo a la salida.</li>
              <li>Si es un operador, mientras haya un operador en el tope de la pila con mayor o igual precedencia, haz pop de la pila a la salida. Luego, haz push del operador actual.</li>
              <li>Si es un paréntesis izquierdo, haz push.</li>
              <li>Si es un paréntesis derecho, haz pop de la pila a la salida hasta encontrar el paréntesis izquierdo.</li>
              <li>Al final, haz pop de cualquier operador restante en la pila a la salida.</li>
          </ol>
        </div>
      `
    },
    {
      id: 'p9-end-questions',
      title: '¿Preguntas?',
      notes: 'Espacio para dudas.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full">
          <h3 class="text-2xl font-bold text-slate-900 mb-4">¿Dudas sobre Evaluación, Recursión o el Shunting-yard?</h3>
        </div>
      `
    },
    {
      id: 'p9-end-thanks',
      title: 'Gracias y Próxima Clase',
      notes: 'Cierre y adelanto.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center">
          <h2 class="text-3xl font-bold text-slate-900 mb-4">Fin del Módulo 9</h2>
          <p class="text-gray-600 text-lg">Hemos profundizado en las pilas. En la próxima clase, introduciremos su contraparte: <b>Colas (Queues)</b> y el principio FIFO.</p>
        </div>
      `
    }
  ]
}
