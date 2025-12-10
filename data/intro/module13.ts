import { Module } from "../../types";

export const module13: Module = {
  id: "module13",
  title: "Lógica de Programación - Semana 13",
  description: "Arreglos Unidimensionales (Vectores)",
  evaluation: "Ejercicios Prácticos",
  slides: [
    {
      id: "m13-s1",
      title: "Arreglos (Arrays)",
      contentHtml: "<h1>Arreglos Unidimensionales</h1><h2>Estructuras de Datos Estáticas</h2>",
    },
    {
      id: "m13-s2",
      title: "¿Qué es un Arreglo?",
      contentHtml: `
        <h2>¿Qué es un Arreglo?</h2>
        <p>Un arreglo (o vector) es una colección de variables del <strong>mismo tipo</strong>, almacenadas en posiciones contiguas de memoria.</p>
        <ul>
            <li>Se accede a cada elemento mediante un <strong>índice</strong>.</li>
            <li>Tienen un tamaño fijo (en la mayoría de lenguajes estáticos).</li>
            <li>Permiten almacenar conjuntos de datos relacionados (ej. notas de un curso).</li>
        </ul>
      `,
    },
    {
      id: "m13-s3",
      title: "Índices y Posiciones",
      contentHtml: `
        <h2>Índices y Posiciones</h2>
        <p>En casi todos los lenguajes modernos, los índices comienzan en <strong>0</strong>.</p>
        <div style="display: flex; justify-content: center; margin: 20px;">
            <table border="1" style="text-align: center; font-size: 1.2em;">
                <tr>
                    <td style="padding: 10px;">10</td>
                    <td style="padding: 10px;">25</td>
                    <td style="padding: 10px;">5</td>
                    <td style="padding: 10px;">40</td>
                    <td style="padding: 10px;">12</td>
                </tr>
                <tr style="background-color: #f0f0f0; font-size: 0.8em;">
                    <td>[0]</td>
                    <td>[1]</td>
                    <td>[2]</td>
                    <td>[3]</td>
                    <td>[4]</td>
                </tr>
            </table>
        </div>
        <p>Si el arreglo tiene tamaño N, el último índice es N-1.</p>
      `,
    },
    {
      id: "m13-s4",
      title: "Declaración e Inicialización",
      contentHtml: `
        <h2>Declaración e Inicialización</h2>
        <p>Pseudocódigo:</p>
        <pre><code>Dimension notas[5]
notas[0] = 15
notas[1] = 20
...</code></pre>
        <p>C++ / Java:</p>
        <pre><code class="language-cpp">int notas[5]; // Declaración
int edades[] = {18, 20, 19}; // Inicialización directa</code></pre>
      `,
    },
    {
      id: "m13-s5",
      title: "Recorrido de un Arreglo",
      contentHtml: `
        <h2>Recorrido de un Arreglo</h2>
        <p>La forma más común de procesar un arreglo es usando un bucle <code>Para</code> (For).</p>
        <pre><code>Para i = 0 Hasta 4 Hacer
    Escribir "Nota: ", notas[i]
FinPara</code></pre>
        <p>Esto permite leer o modificar todos los elementos de forma secuencial.</p>
      `,
    },
    {
      id: "m13-s6",
      title: "Operaciones Comunes: Suma y Promedio",
      contentHtml: `
        <h2>Operaciones Comunes: Suma y Promedio</h2>
        <pre><code>suma = 0
Para i = 0 Hasta N-1 Hacer
    suma = suma + arreglo[i]
FinPara
promedio = suma / N</code></pre>
      `,
    },
    {
      id: "m13-s7",
      title: "Operaciones Comunes: Búsqueda del Mayor",
      contentHtml: `
        <h2>Operaciones Comunes: Búsqueda del Mayor</h2>
        <pre><code>mayor = arreglo[0]
Para i = 1 Hasta N-1 Hacer
    Si arreglo[i] > mayor Entonces
        mayor = arreglo[i]
    FinSi
FinPara
Escribir "El mayor es: ", mayor</code></pre>
      `,
    },
    {
      id: "m13-s8",
      title: "Errores Comunes",
      contentHtml: `
        <h2>Errores Comunes</h2>
        <ul>
            <li><strong>Index Out of Bounds:</strong> Intentar acceder a una posición que no existe (ej. índice 5 en un arreglo de tamaño 5).</li>
            <li><strong>Olvidar inicializar:</strong> Usar valores "basura" que estaban en memoria.</li>
            <li><strong>Confusión 0 vs 1:</strong> Pensar que el primer elemento es el 1.</li>
        </ul>
      `,
    },
    {
      id: "m13-s9",
      title: "Arreglos Paralelos",
      contentHtml: `
        <h2>Arreglos Paralelos</h2>
        <p>Usar dos o más arreglos donde el mismo índice relaciona los datos.</p>
        <p>Ejemplo: <code>nombres[i]</code> y <code>edades[i]</code> corresponden a la misma persona.</p>
        <pre><code>nombres = ["Ana", "Juan"]
edades = [20, 25]
// nombres[0] tiene 20 años</code></pre>
        <p><em>Nota: En POO esto se reemplaza por objetos.</em></p>
      `,
    },
    {
      id: "m13-s10",
      title: "Ejercicio Práctico 1",
      contentHtml: `
        <h2>Ejercicio Práctico 1</h2>
        <p>Crear un programa que pida 10 números al usuario, los guarde en un arreglo y luego muestre:</p>
        <ul>
            <li>La suma total.</li>
            <li>Cuántos son positivos.</li>
            <li>Cuántos son negativos.</li>
        </ul>
      `,
    },
    {
      id: "m13-s11",
      title: "Ejercicio Práctico 2",
      contentHtml: `
        <h2>Ejercicio Práctico 2</h2>
        <p>Dado un arreglo de temperaturas de una semana (7 días), encontrar el día más caluroso y el más frío.</p>
      `,
    },
    {
      id: "m13-s12",
      title: "Ventajas y Desventajas",
      contentHtml: `
        <h2>Ventajas y Desventajas</h2>
        <p><strong>Ventajas:</strong> Acceso rápido a cualquier elemento (acceso aleatorio).</p>
        <p><strong>Desventajas:</strong> Tamaño fijo (en lenguajes tradicionales), inserción y borrado costosos (requieren mover elementos).</p>
      `,
    },
    {
      id: "m13-s13",
      title: "Resumen",
      contentHtml: `
        <h2>Resumen</h2>
        <ul>
            <li>Los arreglos almacenan múltiples datos del mismo tipo.</li>
            <li>Se usan índices (empezando en 0) para acceder.</li>
            <li>Los bucles son fundamentales para trabajar con ellos.</li>
        </ul>
      `,
    },
  ],
};
