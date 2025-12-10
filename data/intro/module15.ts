import { Module } from "../../types";

export const module15: Module = {
  id: "module15",
  title: "Lógica de Programación - Semana 15",
  description: "Algoritmos de Búsqueda",
  evaluation: "Prueba de Escritorio",
  slides: [
    {
      id: "m15-s1",
      title: "Búsqueda en Arreglos",
      contentHtml: "<h1>Algoritmos de Búsqueda</h1><h2>Encontrar un elemento en una colección</h2>",
    },
    {
      id: "m15-s2",
      title: "El Problema de la Búsqueda",
      contentHtml: `
        <h2>El Problema de la Búsqueda</h2>
        <p>Dado un arreglo <code>A</code> y un valor <code>x</code>, queremos saber:</p>
        <ul>
            <li>¿Está <code>x</code> en <code>A</code>? (Verdadero/Falso)</li>
            <li>¿En qué posición (índice) está?</li>
        </ul>
      `,
    },
    {
      id: "m15-s3",
      title: "Búsqueda Lineal (Secuencial)",
      contentHtml: `
        <h2>Búsqueda Lineal (Secuencial)</h2>
        <p>Es el método más sencillo: recorrer el arreglo elemento por elemento hasta encontrar el valor o llegar al final.</p>
        <ul>
            <li>Funciona con arreglos desordenados.</li>
            <li>Es ineficiente para grandes volúmenes de datos.</li>
        </ul>
      `,
    },
    {
      id: "m15-s4",
      title: "Algoritmo Búsqueda Lineal",
      contentHtml: `
        <h2>Algoritmo Búsqueda Lineal</h2>
        <pre><code>Funcion BuscarLineal(arreglo, valor)
    Para i = 0 Hasta N-1 Hacer
        Si arreglo[i] == valor Entonces
            Retornar i // Encontrado
        FinSi
    FinPara
    Retornar -1 // No encontrado
FinFuncion</code></pre>
      `,
    },
    {
      id: "m15-s5",
      title: "Análisis Búsqueda Lineal",
      contentHtml: `
        <h2>Análisis Búsqueda Lineal</h2>
        <ul>
            <li><strong>Mejor caso:</strong> El elemento está en la primera posición (1 comparación).</li>
            <li><strong>Peor caso:</strong> El elemento no está o está al final (N comparaciones).</li>
            <li><strong>Complejidad:</strong> O(N).</li>
        </ul>
      `,
    },
    {
      id: "m15-s6",
      title: "Búsqueda Binaria",
      contentHtml: `
        <h2>Búsqueda Binaria</h2>
        <p>Método mucho más eficiente, pero requiere que el arreglo esté <strong>ORDENADO</strong>.</p>
        <p>Divide el espacio de búsqueda a la mitad en cada paso (como buscar en un diccionario o guía telefónica).</p>
      `,
    },
    {
      id: "m15-s7",
      title: "Lógica de la Búsqueda Binaria",
      contentHtml: `
        <h2>Lógica de la Búsqueda Binaria</h2>
        <ol>
            <li>Comparar el valor buscado con el elemento del <strong>centro</strong>.</li>
            <li>Si son iguales, ¡encontrado!</li>
            <li>Si el valor es menor, buscar solo en la mitad <strong>izquierda</strong>.</li>
            <li>Si el valor es mayor, buscar solo en la mitad <strong>derecha</strong>.</li>
            <li>Repetir hasta encontrar o que el rango se anule.</li>
        </ol>
      `,
    },
    {
      id: "m15-s8",
      title: "Algoritmo Búsqueda Binaria",
      contentHtml: `
        <h2>Algoritmo Búsqueda Binaria</h2>
        <pre><code>inicio = 0
fin = N - 1
Mientras inicio <= fin Hacer
    centro = (inicio + fin) / 2
    Si arreglo[centro] == valor Entonces
        Retornar centro
    Sino Si valor < arreglo[centro] Entonces
        fin = centro - 1
    Sino
        inicio = centro + 1
    FinSi
FinMientras
Retornar -1</code></pre>
      `,
    },
    {
      id: "m15-s9",
      title: "Ejemplo Búsqueda Binaria",
      contentHtml: `
        <h2>Ejemplo</h2>
        <p>Buscar 7 en: [1, 3, 5, 7, 9, 11, 13]</p>
        <ol>
            <li>Centro: 7 (índice 3). ¡Encontrado a la primera!</li>
        </ol>
        <p>Buscar 11:</p>
        <ol>
            <li>Centro: 7. 11 > 7, ir a derecha [9, 11, 13].</li>
            <li>Nuevo centro: 11. ¡Encontrado!</li>
        </ol>
      `,
    },
    {
      id: "m15-s10",
      title: "Análisis Búsqueda Binaria",
      contentHtml: `
        <h2>Análisis Búsqueda Binaria</h2>
        <ul>
            <li>En cada paso descartamos la mitad de los datos.</li>
            <li>Para 1,000,000 de datos, solo toma ~20 comparaciones.</li>
            <li><strong>Complejidad:</strong> O(log N).</li>
        </ul>
      `,
    },
    {
      id: "m15-s11",
      title: "Comparación",
      contentHtml: `
        <h2>Comparación</h2>
        <table border="1" style="width:100%; text-align:center;">
            <tr><th>Algoritmo</th><th>Requisito</th><th>Velocidad</th></tr>
            <tr><td>Lineal</td><td>Ninguno</td><td>Lenta (N)</td></tr>
            <tr><td>Binaria</td><td>Ordenado</td><td>Muy Rápida (log N)</td></tr>
        </table>
      `,
    },
    {
      id: "m15-s12",
      title: "Conclusión",
      contentHtml: `
        <h2>Conclusión</h2>
        <p>Si vamos a buscar muchas veces en los mismos datos, vale la pena ordenarlos primero para usar búsqueda binaria.</p>
      `,
    },
  ],
};
