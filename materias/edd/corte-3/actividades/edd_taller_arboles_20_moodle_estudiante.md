# Taller (20%) — Árboles de Búsqueda (Corte III)

## Tema
**Sistema de Directorio de Archivos** usando **Árboles Binarios de Búsqueda (BST)**.

## Objetivo
Implementar un sistema de gestión de nombres de archivos que permita búsquedas eficientes y organización jerárquica, aplicando los conceptos de Árboles Binarios de Búsqueda (BST) y recorridos.

---

## Enunciado
Se requiere un programa de consola que gestione un listado de archivos. Cada archivo tiene un **nombre** (único) y un **tamaño** (en KB). Debido a la gran cantidad de archivos, se debe usar un BST para que la búsqueda sea rápida.

El sistema debe permitir:
1. **Insertar** un nuevo archivo (basado en el nombre como clave).
2. **Buscar** un archivo por su nombre y mostrar su tamaño.
3. **Listar** todos los archivos en orden alfabético (Recorrido In-Order).
4. **Mostrar la estructura** del árbol (Recorrido Pre-Order para ver la jerarquía).
5. **Calcular el tamaño total** del sistema (Suma de tamaños de todos los nodos).

---

## Entregable
Entrega un `.zip` con **una** de estas opciones:

### Opción A: Python
- Archivo: **`taller_arboles.py`**
- Implementa tu propia clase `Nodo` y la lógica de inserción/búsqueda/recorrido.

### Opción B: C++
- Archivo: **`taller_arboles.cpp`**
- Usa punteros para la implementación del árbol.

---

## Requisitos técnicos (obligatorios)
1. **Clase/Estructura Nodo**: Debe contener `nombre`, `tamaño`, `izquierda` y `derecha`.
2. **Inserción**: Debe seguir las reglas de un BST (menores a la izquierda, mayores a la derecha).
3. **Recorridos**: 
   - `In-Order` para mostrar el listado alfabético.
   - `Pre-Order` (o una representación visual) para mostrar la raíz y sus descendientes.

---

## Funcionalidades mínimas
El menú debe incluir:
1. **Agregar archivo**: Solicitar nombre y tamaño.
2. **Buscar archivo**: Mostrar el tamaño o "No encontrado".
3. **Listar alfabéticamente**: Mostrar nombres en orden.
4. **Estadísticas**: Mostrar el total de archivos y la suma de sus tamaños.
5. **Ejecutar DEMO**: Carga automática de datos de prueba.

---

## Caso de prueba obligatorio (Modo DEMO)
El programa debe tener una opción para cargar estos datos automáticamente:

### Escenario DEMO
1. Insertar: `documento.pdf` (500 KB)
2. Insertar: `video.mp4` (2000 KB)
3. Insertar: `foto.jpg` (300 KB)
4. Insertar: `notas.txt` (100 KB)
5. Insertar: `tarea.docx` (800 KB)

### Salida esperada en el DEMO:
- **Búsqueda**: Buscar `foto.jpg` -> debe decir "Encontrado: 300 KB".
- **Listado In-Order**: `documento.pdf, foto.jpg, notas.txt, tarea.docx, video.mp4` (orden alfabético).
- **Tamaño Total**: Suma de todos (3700 KB).

---

## Criterios de evaluación (20 pts = 20%)
- **Lógica de Inserción BST (orden correcto)**: **7 pts**
- **Búsqueda eficiente**: **4 pts**
- **Recorridos (In-Order y Pre-Order)**: **4 pts**
- **Cálculo de estadísticas (Recursividad)**: **3 pts**
- **Interfaz de consola y claridad**: **2 pts**
