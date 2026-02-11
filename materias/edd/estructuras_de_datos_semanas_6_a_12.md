# Estructuras de Datos — Semanas 6 a 12

> Fuente: contenido del curso en `data/prog/` (módulos 6–12).

## Semana 6 — Entrega de Notas (Corte I)

- Repaso del Corte I: ¿Qué hemos aprendido?
  - Datos, archivos y memoria (Stack vs Heap)
  - Punteros en C++ (`&`, `*`)
  - Arreglos y vectores (búsqueda y ordenamiento)
  - Listas enlazadas
- Concepto clave: estructuras estáticas (arreglos)
  - Ventajas / desventajas
  - Cuándo usarlas
- Concepto clave: estructuras dinámicas (listas enlazadas)
  - Ventajas / desventajas
  - Cuándo usarlas
- Punteros y memoria (C++):
  - `new` y `delete` / `new[]` y `delete[]`
  - Fugas de memoria
  - `nullptr` y buenas prácticas
- Errores comunes y cómo evitarlos:
  - Buffer overflow
  - Dereferenciar puntero nulo
  - Olvidar liberar memoria
- Mini-reto de lógica: playlist de canciones
  - Elección de estructura principal (arreglo vs lista)
  - Estructura para almacenar la información de cada canción
  - Pseudocódigo: “añadir canción al final”
- Resultados del Corte I (tabla de evaluaciones)
- Preparándonos para el Corte II:
  - Listas dobles y circulares
  - Pilas (Stacks)
  - Colas (Queues)
- Entrega individual y dudas
- Cierre del corte

## Semana 7 — Listas Enlazadas Avanzadas

- Parte 1: listas doblemente enlazadas
  - Motivación: recorrido bidireccional
  - Diagrama conceptual (Head/Tail)
- El nodo doble en código (C++ / Python)
- Operación: inserción en lista doble
  - “Baile” de 4 punteros
  - Protocolo de seguridad (orden correcto)
  - Código C++: inserción entre dos nodos
- Operación: eliminación en lista doble
  - Eliminación eficiente con puntero al nodo
  - Estrategia visual
  - Código C++: eliminación
- Caso de uso: historial del navegador (Atrás / Adelante)
- Práctica: recorrido inverso (de cola a cabeza usando `anterior`)
- Parte 2: listas circulares
  - Concepto y aplicaciones (round-robin, playlists en bucle)
  - Visualización: lista doble circular
- Operación: recorrido en círculo
  - C++ (do-while)
  - Python (while True)
- Práctica: problema de Josephus
- Cierre del módulo

## Semana 8 — Pilas (Stacks)

- ¿Qué es una pila? (LIFO)
- Operaciones fundamentales:
  - Push (apilar)
  - Pop (desapilar)
  - Peek/Top
  - `isEmpty()` / `isFull()` (según implementación)
- Visualización: push vs pop (animación)
- Implementación 1: con arreglos (C++)
  - Ventajas / desventajas (tamaño fijo)
- Implementación 2: con listas enlazadas (C++)
  - Mapeo: push ↔ insertar al inicio, pop ↔ eliminar al inicio
  - Complejidad O(1)
- La vía rápida: bibliotecas estándar
  - C++: `std::stack`
  - Python: `list`
- Aplicación: balanceo de paréntesis
- Aplicación: call stack (pila de llamadas)
- Práctica: traza de pila
- Práctica: calculadora RPN (notación polaca inversa)
- Cierre: preguntas y fin de módulo

## Semana 9 — Aplicaciones de las Pilas

- Aplicaciones clave de las pilas:
  - Parseo y evaluación de expresiones
  - Gestión de recursividad
- Notación de expresiones:
  - Infija (humano)
  - Postfija / RPN (máquina)
- Algoritmo: evaluación postfija
  - Reglas de push/pop para operandos y operadores
  - Traza de ejemplo
- Práctica: calculadora postfija (Python) — código
- Práctica: balanceo de símbolos (C++) — código
- Call stack y recursividad
  - Caso base
  - Riesgo de stack overflow
- Eliminando recursión con una pila explícita
  - Ejemplo: factorial
- Otras aplicaciones del mundo real:
  - Undo (deshacer)
  - Historial del navegador
  - DFS
- Práctica: convertidor infijo a postfijo (Shunting-yard)
- Cierre

## Semana 10 — Colas (Queues)

- ¿Qué es una cola? (FIFO)
- Operaciones fundamentales:
  - Enqueue (encolar)
  - Dequeue (desencolar)
  - Front/Peek
- Visualización: enqueue vs dequeue (animación)
- Implementación 1: con listas enlazadas
  - Punteros `frente` y `final`
  - Operaciones O(1)
- Implementación 2: el problema de los arreglos
  - Espacio desperdiciado
  - “Overflow” falso
- Solución: cola circular
  - Uso de módulo (`%`)
- La vía rápida: bibliotecas estándar
  - C++: `std::queue`
  - Python: `collections.deque`
- Aplicación: BFS (búsqueda por anchura)
- Variante: colas de prioridad
  - Concepto y casos de uso
- Práctica: simulador “Hot Potato” (cola circular)
- Cierre

## Semana 11 — Tipos de Colas y Proyecto

- Repaso: cola circular
  - Fórmula: `pos = (pos + 1) % N`
- Colas de prioridad
  - Ejemplo: triaje (VIPs)
- Práctica: `std::priority_queue` en C++
- Práctica: `heapq` en Python (min-heap)
- ¿Cómo funciona? concepto de heap
  - Propiedades
  - Operaciones típicas O(log N)
- Taller práctico: Proyecto Final (20%) — sistema de triaje hospitalario
  - Requisito 1: cola de prioridad (sala de espera)
  - Requisito 2: lista enlazada (historial de atendidos)
  - Requisito 3: pila (deshacer último ingreso)
- Proyecto: estructura del paciente (C++/Python)
- Proyecto: esqueletos de aplicación (C++ y Python)
- Cierre

## Semana 12 — Entrega de Notas (Corte II)

- Repaso del Corte II: ¿qué aprendimos?
  - Listas enlazadas avanzadas
  - Pilas
  - Colas
  - Colas de prioridad
- Concepto clave: listas avanzadas
  - Doblemente enlazadas
  - Circulares
- Duelo: pila (LIFO) vs cola (FIFO)
- Tabla comparativa de complejidad (Big O) para estructuras lineales
- Reflexiones del proyecto final:
  - Gestión de prioridad (max-heap vs min-heap)
  - Punteros y memoria en C++
  - Interacción de estructuras (mover elementos entre ellas)
- Mini-reto: navegador web (estructura para atrás/descargas/historial)
- Resultados del Corte II (tabla)
- Preparándonos para el corte final: árboles y grafos
- Revisión de notas y cierre del corte

---

## Archivos fuente

- data/prog/prog_module6.ts
- data/prog/prog_module7.ts
- data/prog/prog_module8.ts
- data/prog/prog_module9.ts
- data/prog/prog_module10.ts
- data/prog/prog_module11.ts
- data/prog/prog_module12.ts
