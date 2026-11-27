# Ejercicios individuales: trazas y caminos óptimos

IUPSM · Extensión Ciudad Ojeda · Ingeniería de Sistemas · 2026-2  
Programación No Numérica II · Sección A · Prof. Luis Felipe Moreno Oropeza  
Segundo corte · 20 % de la asignatura · 20 puntos  
Entrega digital: jueves 03/12/2026. Hora y medio: por confirmar.

Resuelvan individualmente. Indiquen nombre, cédula y el valor de r. No se exige programar ni redactar informe. Muestren sus operaciones y decisiones.

**Variante:** dividan los dos últimos dígitos de su cédula entre 4; r es el residuo (0, 1, 2 o 3). Por ejemplo, terminación 01 produce r = 1.

## 1. Cinta (5 puntos)
Tres programas tienen longitudes 2, 4 y 6 + r. Ordénenlos para minimizar el tiempo promedio de recuperación. Registren los tres tiempos acumulados, su suma y promedio.

## 2. Intercalación (5 puntos)
Cuatro archivos tienen tamaños 1, 2, 4 y 7 + r. En cada paso mezclen los dos menores y reinserten el resultado. Registren cada mezcla, su costo y el costo total. Describan qué ocurre con el archivo resultante después de cada mezcla.

## 3. Primera red (5 puntos)
Las conexiones son dirigidas: A→B = 4 + r, A→C = 1, C→B = 2, B→D = 2, C→D = 7. Desde A, apliquen Dijkstra. Registren vértice fijado, distancias y predecesores en cada paso; den el camino mínimo hasta D y su costo.

## 4. Segunda red (5 puntos)
Las conexiones son dirigidas: P→Q = 2, P→R = 5, Q→R = 1, Q→S = 6 + r, R→S = 2. Desde P, apliquen Dijkstra y registren la traza. Den el camino mínimo hasta S y su costo; comparen con P→Q→S.

Cada ejercicio vale 5 puntos: procedimiento y traza 3; resultado y explicación solicitada 2. Se reconocen procedimientos equivalentes y empates válidos.
