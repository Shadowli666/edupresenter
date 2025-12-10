import { Module } from "../../types";

export const module14: Module = {
  id: "module14",
  title: "Lógica de Programación - Semana 14",
  description: "Arreglos Bidimensionales (Matrices)",
  evaluation: "Ejercicios Prácticos",
  slides: [
    {
      id: "m14-s1",
      title: "Matrices",
      contentHtml: "<h1>Arreglos Bidimensionales</h1><h2>Filas y Columnas</h2>",
    },
    {
      id: "m14-s2",
      title: "¿Qué es una Matriz?",
      contentHtml: `
        <h2>¿Qué es una Matriz?</h2>
        <p>Es un arreglo de arreglos. Se puede visualizar como una tabla con <strong>filas</strong> y <strong>columnas</strong>.</p>
        <p>Se necesitan <strong>dos índices</strong> para acceder a un elemento: <code>matriz[fila][columna]</code>.</p>
      `,
    },
    {
      id: "m14-s3",
      title: "Visualización",
      contentHtml: `
        <h2>Visualización</h2>
        <p>Matriz de 3x3:</p>
        <table border="1" style="text-align: center; margin: 20px auto; width: 50%;">
            <tr><td>[0][0]</td><td>[0][1]</td><td>[0][2]</td></tr>
            <tr><td>[1][0]</td><td>[1][1]</td><td>[1][2]</td></tr>
            <tr><td>[2][0]</td><td>[2][1]</td><td>[2][2]</td></tr>
        </table>
      `,
    },
    {
      id: "m14-s4",
      title: "Declaración",
      contentHtml: `
        <h2>Declaración</h2>
        <p>Pseudocódigo:</p>
        <pre><code>Dimension tablero[3, 3]</code></pre>
        <p>C++ / Java:</p>
        <pre><code class="language-cpp">int matriz[3][3];
int m[][] = { {1,2}, {3,4} };</code></pre>
      `,
    },
    {
      id: "m14-s5",
      title: "Recorrido (Bucles Anidados)",
      contentHtml: `
        <h2>Recorrido (Bucles Anidados)</h2>
        <p>Para recorrer una matriz completa, necesitamos un bucle dentro de otro.</p>
        <pre><code>Para f = 0 Hasta Filas-1 Hacer
    Para c = 0 Hasta Columnas-1 Hacer
        Escribir matriz[f][c]
    FinPara
    Escribir SaltoDeLinea
FinPara</code></pre>
      `,
    },
    {
      id: "m14-s6",
      title: "Ejemplo: Suma de Matrices",
      contentHtml: `
        <h2>Ejemplo: Suma de Matrices</h2>
        <p>Dadas dos matrices A y B del mismo tamaño, la suma C se calcula sumando elemento a elemento.</p>
        <pre><code>Para f = 0 Hasta N-1 Hacer
    Para c = 0 Hasta M-1 Hacer
        C[f][c] = A[f][c] + B[f][c]
    FinPara
FinPara</code></pre>
      `,
    },
    {
      id: "m14-s7",
      title: "Diagonal Principal",
      contentHtml: `
        <h2>Diagonal Principal</h2>
        <p>En una matriz cuadrada (NxN), la diagonal principal son los elementos donde <code>fila == columna</code>.</p>
        <pre><code>Para i = 0 Hasta N-1 Hacer
    Escribir matriz[i][i]
FinPara</code></pre>
      `,
    },
    {
      id: "m14-s8",
      title: "Diagonal Secundaria",
      contentHtml: `
        <h2>Diagonal Secundaria</h2>
        <p>Son los elementos donde <code>fila + columna == N - 1</code>.</p>
        <pre><code>Para i = 0 Hasta N-1 Hacer
    Escribir matriz[i][N - 1 - i]
FinPara</code></pre>
      `,
    },
    {
      id: "m14-s9",
      title: "Ejercicio: Cuadrado Mágico",
      contentHtml: `
        <h2>Ejercicio: Cuadrado Mágico</h2>
        <p>Verificar si una matriz es un cuadrado mágico:</p>
        <ul>
            <li>La suma de cada fila es igual.</li>
            <li>La suma de cada columna es igual.</li>
            <li>La suma de las diagonales es igual.</li>
        </ul>
      `,
    },
    {
      id: "m14-s10",
      title: "Aplicaciones",
      contentHtml: `
        <h2>Aplicaciones</h2>
        <ul>
            <li>Tableros de juegos (Ajedrez, Damas, Sudoku).</li>
            <li>Procesamiento de imágenes (píxeles).</li>
            <li>Mapas y terrenos en videojuegos.</li>
            <li>Operaciones matemáticas (Álgebra Lineal).</li>
        </ul>
      `,
    },
    {
      id: "m14-s11",
      title: "Matrices Irregulares",
      contentHtml: `
        <h2>Matrices Irregulares</h2>
        <p>En algunos lenguajes (como Java o C#), es posible tener matrices donde cada fila tiene un tamaño diferente ("Jagged Arrays").</p>
        <p>En matemáticas, las matrices siempre son rectangulares.</p>
      `,
    },
    {
      id: "m14-s12",
      title: "Resumen",
      contentHtml: `
        <h2>Resumen</h2>
        <ul>
            <li>Las matrices extienden los arreglos a dos dimensiones.</li>
            <li>Se usan bucles anidados para procesarlas.</li>
            <li>Son fundamentales para representar grillas y tablas.</li>
        </ul>
      `,
    },
  ],
};
