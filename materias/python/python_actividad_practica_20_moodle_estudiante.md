# Actividad Práctica (20%) — Programación en Python

## Tema
**Validación de entrada + bucles + condicionales (CLI): “Adivina el Número”**.

## Objetivo
Construir un programa de consola en Python que aplique:
- Bucle principal (`while True`).
- Validación de entrada con `try/except`.
- Condicionales para dar pistas.
- Conteo de intentos.

---

## Enunciado
Desarrolle el juego **“Adivina el Número”**:
- El programa genera (o define) un número secreto entre 1 y 100.
- El usuario intenta adivinarlo.
- El programa responde con pistas:
  - “Es mayor” si el intento es menor.
  - “Es menor” si el intento es mayor.
- Al acertar, muestra el número de intentos y termina.

---

## Entregable
Entrega un `.zip` (o carpeta) con:

- Archivo: **`solucion.py`**
- Ejecuta con: `python3 solucion.py`

(Opcional) **`README.md`** (5–10 líneas) con instrucciones de ejecución.

---

## Requisitos técnicos (obligatorios)
- Debe usar `while True` para el ciclo del juego.
- Debe validar la entrada:
  - Si el usuario ingresa un valor no numérico, mostrar un mensaje y pedir de nuevo.
- Debe llevar conteo de intentos.
- El rango debe ser **1–100**.

---

## Modo DEMO (obligatorio para calificación rápida)
Para que sea **fácil y rápido de evaluar**, tu programa debe incluir un modo demo que no requiera escribir manualmente.

Puedes implementarlo como:
- argumento: `python3 solucion.py --demo`, **o**
- opción del menú: `DEMO`.

### Reglas del DEMO
En modo demo el programa debe:
- Usar el secreto fijo: `42`.
- Simular estos intentos (en este orden): `10`, `50`, `42`.

### Salida mínima requerida (deben aparecer estas líneas)
- `DEMO: Secreto = 42`
- `DEMO: Intento 1 = 10 -> Es mayor`
- `DEMO: Intento 2 = 50 -> Es menor`
- `DEMO: Intento 3 = 42 -> ¡Ganaste en 3 intentos!`

> Puedes imprimir más líneas, pero estas deben aparecer exactamente.

---

## Criterios de evaluación (20 pts = 20%)
- **Correctitud del juego (pistas + fin al acertar)**: **8 pts**
- **Validación de entrada con `try/except`**: **4 pts**
- **Conteo de intentos (correcto)**: **2 pts**
- **Modo DEMO funcionando con salida requerida**: **4 pts**
- **Claridad básica (nombres, mensajes, orden del código)**: **2 pts**

---

## Recomendaciones
- Mantén el código simple.
- Se permite usar `random.randint(1, 100)` en modo normal.
- En modo demo usa el secreto fijo para que el resultado sea verificable.
