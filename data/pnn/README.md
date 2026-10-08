# Módulos de Programación No Numérica II — contenido anterior

Estos 18 módulos (`pnn_module1.ts` … `pnn_module18.ts`) **no se cargan** en la
aplicación: el curso de PNN ahora lee `./data/pnn-2026-2/` (ver `constants.ts`).

**Por qué:** el orden y las ponderaciones de estos módulos pertenecen a otra
planificación y no coinciden con el PGA 2026-2
(`~/Documentos/PSM-2026-2/02-PGA/plan-programacion-no-numerica-ii-2026-2.json`).

| Semana | Estos módulos | PGA 2026-2 |
|---|---|---|
| 2 | Heaps: estructura y algoritmos (INSERTAR / HEAPIFY) | Árboles binarios · Teoremas I y II · arreglos secuenciales |
| 3 | Divide y conquista (10 %) | INSERTAR y HEAPIFY (0 %) |
| 4 | Merge Sort | Prueba escrita Unidad I — **10 %** |
| 6 | — | Divide y conquista — **20 %** |

**Nada se perdió:** los archivos siguen aquí. Para volver a usarlos, cambia en
`constants.ts`:

```ts
const pnnModules = loadModules(import.meta.glob('./data/pnn/*.ts', { eager: true }));
```

`pnn_module1.ts` sí corresponde al período 2026-2 (semana 1) y puede copiarse a
`data/pnn-2026-2/` cuando se reorganice esa carpeta.

---

_Registrado: 2026-10-02 · al preparar la sesión del viernes 02/10/2026._