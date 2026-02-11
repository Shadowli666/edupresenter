# Programación No Numérica — Semanas 6 a 12

> Fuente: contenido del curso en `data/pnn/` (módulos 6–12).

## Semana 6 — Repaso del Corte I: La Galería Algorítmica

- Recorrido de repaso (formato “galería”)
- Sala 1: jerarquías y prioridades
  - Árboles binarios (conceptos + recorridos)
  - Heaps (max/min-heap) y colas de prioridad
- Sala 2: Divide y Conquista
  - Dividir / Conquistar (recursión, caso base) / Combinar
- Sala 3: ordenamiento
  - Merge Sort vs Quick Sort (estabilidad, memoria, peor caso)
- Sala 4: desafío mental (elegir herramienta)
  - Cola de prioridad (urgencias)
  - Merge Sort (estable)
  - Quick Sort (rápido e in-place)
- Sala 5: resultados del corte (entrega de notas)
- Puente al Corte II: teaser de algoritmos voraces (Greedy)

## Semana 7 — Algoritmos Voraces: El Estratega Impaciente

- Concepto: enfoque Greedy
  - “Óptimo local” y decisiones irrevocables
- Problema del cambio de monedas
  - Estrategia: tomar la moneda más grande que quepa
- Limitación: contraejemplo donde Greedy falla
  - Sistema de monedas “raro” (4, 3, 1) para objetivo 6
- Selección de actividades (agenda de reuniones)
  - Heurística Greedy: elegir siempre la actividad que termina primero
- Implementación (Python): selección de actividades
  - Ordenar por tiempo de finalización
  - Complejidad: O(N log N)
- Cierre: cuándo usar Greedy vs cuándo evitarlo (mención de Knapsack 0/1)

## Semana 8 — Aplicaciones Voraces: Mochila y Fusión

- Repaso de la estrategia voraz (criterio de selección + factibilidad)
- Problema 1: Mochila Fraccional
  - Definición formal (capacidad W, objetos con peso/valor, fracciones 0..1)
  - Criterio Greedy: densidad de valor (ratio v/w)
  - Traza con ejemplo numérico (orden por ratio y toma fracciones)
- ¿Por qué falla en Mochila 0/1?
  - Contraejemplo y motivación hacia Programación Dinámica
- Implementación (Python): knapsack fraccional
  - Casos de prueba (W=50, mochila pequeña, todo cabe)
- Problema 2: Intercalación Óptima (Optimal Merge Pattern)
  - Idea: fusionar siempre los 2 archivos más pequeños
  - Estructura clave: Min-Heap (cola de prioridad)
  - Traza: costos acumulados por fusiones
  - Implementación (Python) con `heapq`
- Complejidad (resumen)
  - Knapsack fraccional: O(N log N)
  - Optimal merge: O(N log N)

## Semana 9 — Algoritmos Voraces: Árboles de Expansión Mínima (MST)

- Planteamiento: conectar una red al menor costo
- Definiciones: grafo ponderado, spanning tree, MST
- Propiedad del corte (cut property)
- Algoritmo de Prim
  - Crecimiento desde un nodo
  - Estructura: Min-Heap / Priority Queue
  - Complejidad: O(E log V)
- Algoritmo de Kruskal
  - Ordenar aristas y evitar ciclos
  - Estructura: Union-Find (Disjoint Set)
  - Complejidad: O(E log E) (≈ O(E log V))
- Comparación: cuándo conviene Prim vs Kruskal
- Código (Python)
  - Prim con `heapq`
  - Kruskal con Union-Find
- Cierre: preparación para caminos más cortos (Dijkstra)

## Semana 10 — Algoritmos Voraces: Caminos Más Cortos (Dijkstra)

- Motivación: “GPS algorítmico” (SSSP desde un origen)
- Idea central
  - Greedy: extraer el nodo no visitado con menor distancia conocida
  - Relajación: actualizar distancias cuando aparece un camino más corto
- Traza paso a paso con ejemplo
- Implementación (Python): Dijkstra con `heapq`
- Limitaciones
  - No funciona con pesos negativos (mención de Bellman-Ford)
- Complejidad
  - O(E log V) usando heap binario
- Cierre: transición a Programación Dinámica

## Semana 11 — Árboles Balanceados (AVL)

- Problema: un BST puede degenerar (búsqueda O(N))
- Propiedad AVL
  - Factor de equilibrio FE = altura(izq) − altura(der)
  - Restricción: FE ∈ {-1, 0, 1}
- Rotaciones para re-balancear
  - Rotación simple (LL / RR)
  - Rotación doble (LR / RL)
- Implementación (Python)
  - Nodo AVL, cálculo de balance
  - Ejemplo: rotación derecha (actualización de alturas)
- Cierre: garantías de complejidad
  - Búsqueda / inserción / eliminación: O(log n)

## Semana 12 — Proyecto de Corte II

- Hito: cierre del bloque de estructuras jerárquicas
  - Árboles binarios, BST, heaps, AVL
- Alcance del proyecto
  - Implementación propia de la estructura (sin librerías externas para el árbol)
  - Persistencia de datos (archivos o BD)
  - Interfaz (consola avanzada o GUI)
- Ideas de proyectos
  - Sistema de archivos virtual (árbol n-ario)
  - Autocompletado (Trie)
  - Gestor de torneos (árbol de eliminación)
  - Compresor de archivos (Huffman con heaps + árboles)
- Rúbrica de evaluación (20%)
  - Funcionalidad (40%)
  - Calidad técnica (40%) + defensa oral
  - Informe/documentación (20%)
- Cronograma y entregables
  - Semana 1: propuesta
  - Semana 2: avance 50%
  - Semana 3: entrega final + sustentación

---

## Archivos fuente

- data/pnn/pnn_module6.ts
- data/pnn/pnn_module7.ts
- data/pnn/pnn_module8.ts
- data/pnn/pnn_module9.ts
- data/pnn/pnn_module10.ts
- data/pnn/pnn_module11.ts
- data/pnn/pnn_module12.ts
