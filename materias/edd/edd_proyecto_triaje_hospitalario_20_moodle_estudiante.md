# Proyecto (20%) — Estructuras de Datos

## Tema
**Sistema de Gestión de Triaje Hospitalario (Consola)** usando **Cola de Prioridad**, **Lista Enlazada** y **Pila**.

## Objetivo
Desarrollar una aplicación de consola que simule la atención en urgencias, integrando las estructuras de datos vistas en el corte:
- Cola de prioridad para atender por urgencia.
- Lista enlazada para historial de atendidos.
- Pila para deshacer el último registro.

---

## Enunciado
En la sala de emergencias se registran pacientes con un nivel de triaje:
- **1 = Urgente**
- **2 = Moderado**
- **3 = Leve**

El sistema debe permitir:
1) Registrar pacientes.
2) Atender (sacar) el siguiente paciente según **prioridad**.
3) Deshacer el último registro (por error de digitación).
4) Ver el historial de pacientes atendidos.

**Regla de atención**
- Siempre se atiende primero al paciente con **menor número de triaje** (1 antes que 2 antes que 3).
- Si dos pacientes tienen la misma prioridad, se atienden por **orden de llegada (FIFO dentro de la misma prioridad)**.

---

## Entregable
Entrega un `.zip` (o carpeta) con **una** de estas opciones:

### Opción A (recomendada): Python
- Archivo: **`proyecto.py`**
- Ejecuta con: `python3 proyecto.py`

### Opción B: C++
- Archivo(s): **`main.cpp`** (y los que necesites)
- Incluye un `README.md` con el comando exacto para compilar y ejecutar.

---

## Requisitos técnicos (obligatorios)
Tu solución debe usar estas estructuras (pueden ser implementadas por ti o usando librerías estándar):

1. **Cola de Prioridad (sala de espera)**
   - Prioridad por triaje (1,2,3).
   - FIFO dentro de la misma prioridad.

2. **Lista Enlazada (historial de atendidos)**
   - Guarda cada paciente a medida que se atiende.
   - Debe poder imprimirse en orden de atención.

3. **Pila (deshacer último registro)**
   - Permite eliminar el último paciente registrado por error.

No se requiere GUI ni base de datos.

---

## Funcionalidades mínimas
Tu programa debe incluir un menú (o comandos) con, al menos:

1. **Registrar paciente**
   - Datos mínimos: `nombre` y `prioridad` (1–3).

2. **Atender siguiente paciente**
   - Debe mostrar quién fue atendido.

3. **Deshacer último registro**
   - Si no hay registros para deshacer, mostrar un mensaje.

4. **Ver historial**
   - Imprimir el listado de pacientes atendidos.

---

## Caso de prueba obligatorio (modo demo)
Para que la entrega sea **rápida de evaluar**, el programa debe incluir un **modo demo** que ejecute automáticamente este escenario y muestre el resultado.

Puedes implementarlo como:
- una opción del menú: `5) Ejecutar DEMO`, **o**
- un argumento: `--demo`.

### Escenario DEMO
Registra en este orden:
1) `Ana`, prioridad `3`
2) `Luis`, prioridad `1`
3) `Maria`, prioridad `2`

Luego ejecuta:
- Atender siguiente (debe atender a Luis)
- Deshacer último registro (debe deshacer a Maria)
- Atender siguiente (debe atender a Ana)
- Mostrar historial

### Salida mínima requerida (para calificación rápida)
Durante el DEMO deben aparecer estas líneas (puedes imprimir más, pero estas deben aparecer):

- `DEMO: Atendido: Luis (P1)`
- `DEMO: Deshecho: Maria (P2)`
- `DEMO: Atendido: Ana (P3)`
- `DEMO: Historial: Luis(P1), Ana(P3)`

---

## Criterios de evaluación (20 pts = 20%)
- **Correctitud de prioridad + FIFO (triaje 1/2/3)**: **8 pts**
- **Uso de estructuras (cola de prioridad + lista enlazada + pila)**: **6 pts**
- **Modo DEMO funcionando con salida requerida**: **4 pts**
- **Claridad (nombres, organización, mensajes básicos) + README si aplica**: **2 pts**

---

## Recomendaciones
- Si usas Python: `heapq` (min-heap) te facilita la cola de prioridad.
- Para garantizar FIFO en empates, usa un contador de llegada (ej. `orden`) además de la prioridad.
- Mantén el proyecto simple: consola, sin extras innecesarios.
