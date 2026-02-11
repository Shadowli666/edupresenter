# Evaluación Práctica (20%) — Programación No Numérica

## Tema específico
**Algoritmos voraces (Greedy): Intercalación Óptima (Optimal Merge Pattern) usando Min-Heap (cola de prioridad).**

> Duración sugerida: **30–45 minutos**.
>
> Objetivo: entregar una solución **rápida de ejecutar** y **muy fácil de evaluar** (resultado numérico + trazas opcionales).

---

## Enunciado
En una compresión/backup, se deben fusionar varios archivos (o listas) en uno solo. Cada fusión de dos archivos de tamaños `a` y `b` tiene un costo `a + b` (porque hay que leer/escribir ambos).

Tu tarea es implementar un programa que, dado un conjunto de tamaños, calcule el **costo total mínimo** para fusionarlos todos en un solo archivo.

La estrategia correcta (voraz) es:
- **Fusionar siempre los dos archivos más pequeños primero**.
- Reinsertar el resultado en la estructura de datos.
- Repetir hasta que quede un solo archivo.

Esto se implementa de forma eficiente con una **Min-Heap**.

---

## Requisitos de entrega (rápido y fácil)
Entrega un `.zip` (o carpeta) con:

1. Un archivo **`solucion.py`** que se ejecute así:
   - `python3 solucion.py`

2. (Opcional, recomendado) Un archivo **`README.md`** con 5–10 líneas que incluya:
   - cómo ejecutar,
   - qué imprime,
   - una nota de complejidad $O(n\log n)$.

No se requiere interfaz gráfica.

---

## Especificación mínima (para evaluar en 1 minuto)
En `solucion.py` implementa:

- Función:
  - `optimal_merge_cost(sizes: list[int]) -> int`

**Condiciones**
- Si `sizes` está vacía o tiene 1 elemento, el costo es `0`.
- Los tamaños se asumen enteros `>= 0`.
- Debes usar **Min-Heap** (en Python: `heapq`).

**Salida del programa**
Al ejecutar `python3 solucion.py`, debe imprimir exactamente estos resultados (puedes incluir más líneas, pero estas deben aparecer):

- `Caso 1: 29`
- `Caso 2: 190`
- `Caso 3: 0`

---

## Casos de prueba (fijos)
Usa estos casos dentro de tu `main` (o pruebas simples) para que el evaluador valide rápidamente:

- **Caso 1**
  - Entrada: `[4, 3, 2, 6]`
  - Salida esperada: `29`

- **Caso 2**
  - Entrada: `[10, 20, 30, 40]`
  - Salida esperada: `190`

- **Caso 3**
  - Entrada: `[]`
  - Salida esperada: `0`

> Nota: Para el **Caso 2**, el costo mínimo correcto es `190`.

---

## Extensión opcional (para subir de nivel, sin complicar)
Además de retornar el costo, imprime la secuencia de fusiones en formato:

- `merge a + b = c` (una por línea)

Ejemplo (para Caso 1):
- `merge 2 + 3 = 5`
- `merge 4 + 5 = 9`
- `merge 6 + 9 = 15`

---

## Plantilla sugerida (no obligatoria)
Estructura recomendada de `solucion.py`:
- `optimal_merge_cost(sizes)`
- `if __name__ == "__main__":` imprimir casos

---

## Criterios de evaluación (20%) — Escala de estimación
Puntaje total: **20 puntos** (equivale al **20%** del corte).

### Criterios y ponderación (20 pts)

- **Correctitud (resultados y casos borde)**: **12 pts** (60%)
- **Enfoque voraz + uso de Min-Heap (`heapq`)**: **4 pts** (20%)
- **Claridad del código (legible y bien estructurado)**: **2 pts** (10%)
- **Entrega y ejecución (corre con `python3 solucion.py` y muestra salidas)**: **2 pts** (10%)

### Conversión sugerida (rápida)
- **20–18 pts**: Excelente
- **17–15 pts**: Bueno
- **14–12 pts**: Suficiente
- **≤ 11 pts**: Insuficiente
