# Proyecto (20%) — Programación en Python

## Tema
**Sistema de Gestión Académica (Consola)** integrando:
- Menú (`while True`)
- CRUD con **listas/diccionarios**
- Reportes ordenados (Bubble Sort)
- Búsqueda por ID (Binary Search)

## Objetivo
Desarrollar una aplicación de consola que gestione estudiantes y sus notas, y que genere reportes ordenados y búsquedas eficientes.

---

## Enunciado
Construya un **Sistema de Gestión Académica** que permita:
1) **Agregar estudiante** (ID, nombre, notas).
2) **Listar estudiantes**.
3) **Actualizar** datos de un estudiante.
4) **Eliminar** un estudiante.
5) **Ver reporte ordenado** (usando Bubble Sort).
6) **Buscar por ID** (usando Binary Search, con la lista ordenada por ID).

**Estructura sugerida** (puedes variar, pero debe ser equivalente):
- `estudiantes = [ {"id": 101, "nombre": "Ana", "notas": [3.5, 4.0, 4.5]}, ... ]`

---

## Entregable
Entrega un `.zip` (o carpeta) con:

- Archivo: **`proyecto.py`**
- Ejecuta con: `python3 proyecto.py`

(Opcional) **`README.md`** (5–10 líneas) con:
- cómo ejecutar,
- breve descripción,
- qué opciones tiene el menú.

---

## Requisitos técnicos (obligatorios)
- Debe existir un **menú principal** con `while True`.
- Datos en memoria con **lista de diccionarios** (no base de datos).
- Reporte ordenado implementado con **Bubble Sort** (no usar `sorted()` para el criterio principal del proyecto).
- Búsqueda por ID implementada con **Binary Search**:
  - Antes de buscar, debes tener la lista ordenada por `id`.

---

## Funcionalidades mínimas
- Agregar estudiante: validar que el ID sea entero.
- Calcular promedio de notas para reportes.
- Reporte ordenado (elige uno):
  - por ID ascendente, **o**
  - por promedio descendente.

---

## Modo DEMO (obligatorio para calificación rápida)
Incluye un modo demo:
- `python3 proyecto.py --demo`

En DEMO debe:
1) Crear estos estudiantes (en este orden):
   - `101, Ana, [3.5, 4.0, 4.5]`
   - `102, Luis, [2.0, 3.0, 3.2]`
   - `103, Carla, [5.0, 5.0, 4.8]`
2) Imprimir un reporte ordenado **por ID ascendente**.
3) Ejecutar búsqueda por ID para `102` y mostrar el resultado.

### Salida mínima requerida (deben aparecer estas líneas)
- `DEMO: Total estudiantes = 3`
- `DEMO: Reporte por ID: 101-Ana, 102-Luis, 103-Carla`
- `DEMO: Buscar ID 102 -> Luis`

> Puedes imprimir más líneas, pero estas deben aparecer exactamente.

---

## Criterios de evaluación (20 pts = 20%)
- **CRUD funcional (agregar/listar/actualizar/eliminar)**: **7 pts**
- **Bubble Sort implementado y usado en reporte**: **4 pts**
- **Binary Search correcto (búsqueda por ID)**: **3 pts**
- **Modo DEMO funcionando con salida requerida**: **4 pts**
- **Claridad básica (estructura y nombres)**: **2 pts**

---

## Recomendaciones
- Divide en funciones: `agregar_estudiante`, `reporte`, `bubble_sort_por_id`, `binary_search_id`, etc.
- Mantén el proyecto simple: consola, sin librerías externas.
