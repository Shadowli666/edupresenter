# Evaluación Práctica (20%) — Programación No Numérica

## Tema
**Algoritmos voraces (Greedy): Intercalación Óptima (Optimal Merge Pattern) con Min-Heap (cola de prioridad).**

## Objetivo
Implementar una solución que calcule el **costo total mínimo** de fusionar varios archivos (o listas) en uno solo, usando una estrategia voraz y una **Min-Heap**.

---

## Enunciado
En una compresión/backup, se deben fusionar varios archivos en uno solo. Cada fusión de dos archivos de tamaños `a` y `b` tiene un costo `a + b`.

Tu tarea es implementar un programa que, dado un conjunto de tamaños, calcule el **costo total mínimo** para fusionarlos todos.

La estrategia correcta (Greedy) es:
- Fusionar siempre los **dos tamaños más pequeños**.
- Sumar su costo (`a + b`) al total.
- Insertar el tamaño fusionado (`a + b`) de nuevo.
- Repetir hasta que quede un solo archivo.

---

## Entregable
Entrega un `.zip` (o carpeta) con:

1. **`solucion.py`**
   - Debe ejecutarse con: `python3 solucion.py`

2. (Opcional) **`README.md`** (5–10 líneas)
   - Cómo ejecutar.
   - Qué imprime.
   - Complejidad esperada: $O(n\log n)$.

---

## Requisitos técnicos
- Debes usar una **Min-Heap** (en Python: `heapq`).
- Implementa la función:
  - `optimal_merge_cost(sizes: list[int]) -> int`
- Si `sizes` está vacía o tiene 1 elemento, el costo es `0`.

---

## Casos de prueba (obligatorios)
Tu `solucion.py` debe incluir estos casos y mostrar sus resultados:

- **Caso 1**
  - Entrada: `[4, 3, 2, 6]`
  - Salida esperada: `29`

- **Caso 2**
  - Entrada: `[10, 20, 30, 40]`
  - Salida esperada: `190`

- **Caso 3**
  - Entrada: `[]`
  - Salida esperada: `0`

### Formato de salida
Al ejecutar `python3 solucion.py`, deben aparecer estas líneas (puedes imprimir líneas adicionales si quieres):

- `Caso 1: 29`
- `Caso 2: 190`
- `Caso 3: 0`

---

## (Opcional) Traza de fusiones
Puedes imprimir las fusiones realizadas en este formato:
- `merge a + b = c`

Ejemplo para el Caso 1:
- `merge 2 + 3 = 5`
- `merge 4 + 5 = 9`
- `merge 6 + 9 = 15`

---

## Criterios de evaluación (20 pts = 20%)
- **Correctitud (resultados y casos borde)**: **12 pts**
- **Enfoque voraz + uso de Min-Heap (`heapq`)**: **4 pts**
- **Claridad del código (legible y bien estructurado)**: **2 pts**
- **Entrega y ejecución (corre y muestra salidas requeridas)**: **2 pts**

---

## Recomendación
No uses librerías externas. Con `heapq` es suficiente.
