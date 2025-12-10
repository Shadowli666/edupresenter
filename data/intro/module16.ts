import { Module } from "../../types";

export const module16: Module = {
  id: "module16",
  title: "Computación Básica - Semana 16",
  description: "Algoritmos de Ordenamiento: Burbuja, Selección e Inserción",
  evaluation: "Evaluación Continua",
  slides: [
    {
      id: "m16-s1",
      title: "Ordenamiento de Datos",
      contentHtml: "<h1>Ordenamiento de Datos</h1><h2>Poniendo Orden en el Caos</h2>",
    },
    {
      id: "m16-s2",
      title: "¿Por qué Ordenar?",
      contentHtml: `
        <h2>¿Por qué Ordenar?</h2>
        <p>El ordenamiento es organizar los datos en una secuencia específica (ascendente o descendente).</p>
        <ul>
            <li>Facilita la búsqueda (permite Búsqueda Binaria).</li>
            <li>Mejora la presentación de datos al usuario.</li>
            <li>Ayuda a encontrar duplicados o valores extremos.</li>
        </ul>
      `,
    },
    {
      id: "m16-s3",
      title: "Intercambio (Swap)",
      contentHtml: `
        <h2>Intercambio (Swap)</h2>
        <p>Operación fundamental en todos los algoritmos de ordenamiento.</p>
        <pre>
// Intercambiar A y B
temp = A
A = B
B = temp
        </pre>
        <p>Necesitamos una variable temporal para no perder el valor de A al sobrescribirlo.</p>
      `,
    },
    {
      id: "m16-s4",
      title: "Método de la Burbuja (Bubble Sort)",
      contentHtml: `
        <h2>Método de la Burbuja (Bubble Sort)</h2>
        <p>Es el más sencillo de entender. Compara pares adyacentes y los intercambia si están en el orden incorrecto.</p>
        <p>Los elementos más grandes "burbujean" hacia el final de la lista en cada pasada.</p>
      `,
    },
    {
      id: "m16-s5",
      title: "Algoritmo Burbuja",
      contentHtml: `
        <h2>Algoritmo Burbuja</h2>
        <pre>
Para i desde 0 hasta N-1:
    Para j desde 0 hasta N-i-1:
        Si arreglo[j] > arreglo[j+1]:
            Intercambiar(arreglo[j], arreglo[j+1])
        Fin Si
    Fin Para
Fin Para
        </pre>
      `,
    },
    {
      id: "m16-s6",
      title: "Traza Burbuja",
      contentHtml: `
        <h2>Traza Burbuja</h2>
        <p>Lista: <code>[5, 1, 4, 2, 8]</code></p>
        <ol>
            <li>Compara 5 y 1 -> Intercambia -> <code>[1, 5, 4, 2, 8]</code></li>
            <li>Compara 5 y 4 -> Intercambia -> <code>[1, 4, 5, 2, 8]</code></li>
            <li>Compara 5 y 2 -> Intercambia -> <code>[1, 4, 2, 5, 8]</code></li>
            <li>Compara 5 y 8 -> Correcto.</li>
        </ol>
        <p>El 8 ya está en su lugar final.</p>
      `,
    },
    {
      id: "m16-s7",
      title: "Método de Selección (Selection Sort)",
      contentHtml: `
        <h2>Método de Selección (Selection Sort)</h2>
        <p>Busca el elemento más pequeño de la lista y lo coloca al principio.</p>
        <ol>
            <li>Busca el mínimo entre la posición 0 y N. Intercambia con pos 0.</li>
            <li>Busca el mínimo entre la posición 1 y N. Intercambia con pos 1.</li>
            <li>Repite.</li>
        </ol>
      `,
    },
    {
      id: "m16-s8",
      title: "Algoritmo Selección",
      contentHtml: `
        <h2>Algoritmo Selección</h2>
        <pre>
Para i desde 0 hasta N-1:
    minimo_idx = i
    Para j desde i+1 hasta N:
        Si arreglo[j] < arreglo[minimo_idx]:
            minimo_idx = j
    
    Intercambiar(arreglo[i], arreglo[minimo_idx])
Fin Para
        </pre>
      `,
    },
    {
      id: "m16-s9",
      title: "Método de Inserción (Insertion Sort)",
      contentHtml: `
        <h2>Método de Inserción (Insertion Sort)</h2>
        <p>Funciona como ordenar cartas en la mano.</p>
        <ul>
            <li>Tomas la segunda carta y la insertas en su lugar respecto a la primera.</li>
            <li>Tomas la tercera y la insertas en su lugar respecto a las dos anteriores.</li>
        </ul>
        <p>Es muy eficiente para listas pequeñas o casi ordenadas.</p>
      `,
    },
    {
      id: "m16-s10",
      title: "Comparación de Eficiencia",
      contentHtml: `
        <h2>Comparación de Eficiencia</h2>
        <p>Estos tres algoritmos (Burbuja, Selección, Inserción) son de complejidad <strong>Cuadrática O(N^2)</strong>.</p>
        <ul>
            <li>Si duplicas los datos, tardan 4 veces más.</li>
            <li>Son útiles para aprender y para pocos datos.</li>
        </ul>
      `,
    },
    {
      id: "m16-s11",
      title: "Algoritmos Avanzados",
      contentHtml: `
        <h2>Algoritmos Avanzados</h2>
        <p>Para millones de datos, se usan algoritmos más complejos como:</p>
        <ul>
            <li><strong>Merge Sort:</strong> Divide la lista, ordena mitades y mezcla.</li>
            <li><strong>Quick Sort:</strong> Elige un pivote y particiona la lista.</li>
        </ul>
        <p>Son de complejidad O(N log N) (mucho más rápidos).</p>
      `,
    },
    {
      id: "m16-s12",
      title: "Ejercicio Práctico",
      contentHtml: `
        <h2>Ejercicio Práctico</h2>
        <p>Ordena manualmente la lista <code>[7, 3, 5, 2]</code> usando el método de Selección.</p>
        <ol>
            <li>Mínimo de [7, 3, 5, 2] es 2. Swap(7, 2) -> <code>[2, 3, 5, 7]</code>.</li>
            <li>Mínimo de [3, 5, 7] es 3. Swap(3, 3) -> No cambia.</li>
            <li>Mínimo de [5, 7] es 5. Swap(5, 5) -> No cambia.</li>
            <li>Listo.</li>
        </ol>
      `,
    },
    {
      id: "m16-s13",
      title: "Resumen",
      contentHtml: `
        <h2>Resumen</h2>
        <ul>
            <li><strong>Burbuja:</strong> Intercambia vecinos. Lento pero simple.</li>
            <li><strong>Selección:</strong> Busca el mínimo y lo coloca. Minimiza intercambios.</li>
            <li><strong>Inserción:</strong> Construye la lista ordenada paso a paso. Bueno para datos casi ordenados.</li>
            <li>El ordenamiento es clave para la eficiencia de otros algoritmos.</li>
        </ul>
      `,
    },
  ],
};
