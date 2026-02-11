# Tarea (Python) — Entrega en 1 día

## Tema
**Listas/Diccionarios + validación + menú (CLI): Mini Sistema de Inventario**

## Objetivo
Crear una aplicación de consola sencilla para gestionar productos usando:
- Lista de diccionarios.
- Menú con `while True`.
- Validación básica de entradas (números y opción de menú).

---

## Enunciado
Desarrolle un **Mini Sistema de Inventario** con estas funcionalidades mínimas:

1) **Agregar producto**
- Campos: `nombre` (string) y `precio` (float o int).

2) **Listar productos**
- Mostrar cada producto en formato: `Nombre - $Precio`.

3) **Buscar producto por nombre**
- Búsqueda lineal (recorrer la lista).

---

## Entregable
Entrega un `.zip` (o carpeta) con:

- Archivo: **`tarea.py`**

---

## Requisitos técnicos (obligatorios)
- Usar una **lista de diccionarios**, por ejemplo:
  - `inventario = [{"nombre": "Mouse", "precio": 25}, ...]`
- Usar un menú principal con `while True`.
- Validar entradas:
  - Si el precio no es numérico, volver a pedirlo.
  - Si la opción del menú no existe, mostrar “Opción inválida”.

---

## Modo DEMO 

### Escenario DEMO
En modo demo, el programa debe:
1) Cargar automáticamente estos productos (en este orden):
   - `Laptop`, `1200`
   - `Mouse`, `25`
   - `Teclado`, `80`
2) Buscar `Mouse` y mostrarlo.
3) Listar productos.

### Salida mínima requerida
Deben aparecer estas líneas (puedes imprimir más, pero estas deben aparecer):

- `DEMO: Total productos = 3`
- `DEMO: Buscar "Mouse" -> Mouse - $25`
- `DEMO: Lista -> Laptop($1200), Mouse($25), Teclado($80)`

---

## Criterios de evaluación (20 pts)
- **Funcionalidades mínimas (agregar/listar/buscar)**: **10 pts**
- **Estructura correcta (lista de diccionarios + menú)**: **4 pts**
- **Validación básica (precio numérico + opción inválida)**: **2 pts**
- **Modo DEMO con salida requerida**: **4 pts**

---

## Recomendaciones
- Mantén el código simple y claro.
