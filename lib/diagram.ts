/**
 * Diagramas con PELE (https://pele.run): renderizador Mermaid -> SVG, síncrono y
 * sin dependencias. Es opcional y solo para diapositivas nuevas; los bloques
 * `.mermaid` siguen usando Mermaid (lib/mermaid.ts) sin cambios.
 *
 *   <div data-diagram data-steps="A | B, A>B | C, B>C" data-flow>
 *   flowchart LR
 *     A[Requisitos] --> B[Diseño]
 *     B --> C[Código]
 *   </div>
 *
 * - `data-diagram`  el texto del elemento es el código Mermaid (se desindenta).
 * - `data-steps`    grupos separados por `|`; dentro, ids separados por coma.
 *                   `X` = nodo `.pele-node[data-id="X"]`; `X>Y` = aristas
 *                   `.pele-edge[data-id^="L_X_Y_"]`. Lo no mencionado se ve desde
 *                   el inicio. En presentación cada grupo es un paso del mismo
 *                   contador que `data-reveal` (ver lib/enhance.ts).
 * - `data-flow`     sin valor = todas las aristas; o `A>B, C>D` = solo esas.
 *                   Guiones animados (solo presentación; nunca en lectura/PDF).
 *
 * PELE se carga con `import()` dinámico: Vite lo separa en su propio chunk y las
 * diapositivas sin diagramas no pagan nada. Tras el import, `mount()` es síncrono.
 */
import type { Mounted } from 'pele';

type PeleApi = typeof import('pele');

let peleLoad: Promise<PeleApi> | null = null;
function loadPele(): Promise<PeleApi> {
  if (!peleLoad) {
    peleLoad = import('pele').catch((err) => { peleLoad = null; throw err; });
  }
  return peleLoad;
}

// ---------------------------------------------------------------------------
// Utilidades puras (se prueban fuera del navegador)
// ---------------------------------------------------------------------------

/** `"A | B, A>B | C"` -> `[["A"], ["B", "A>B"], ["C"]]`. Los grupos vacíos se descartan. */
export function parseSteps(attr: string | null | undefined): string[][] {
  if (!attr) return [];
  return attr
    .split('|')
    .map((g) => g.split(',').map((s) => s.trim().replace(/\s*>\s*/g, '>')).filter(Boolean))
    .filter((g) => g.length > 0);
}

/**
 * `data-flow`: `null` = sin flujo; `true` = todas las aristas; lista = solo esas.
 * El atributo presente sin valor (o "true") significa todas; "false" lo desactiva.
 */
export function parseFlow(attr: string | null | undefined): true | string[] | null {
  if (attr === null || attr === undefined) return null;
  const v = attr.trim();
  if (v === '' || v === 'true' || v === 'flow') return true;
  if (v === 'false') return null;
  const list = parseSteps(v.replace(/\|/g, ',')).flat();
  return list.length ? list : true;
}

/** Quita líneas en blanco al inicio/fin y la indentación común. */
export function dedent(text: string): string {
  const lines = text.replace(/\r\n?/g, '\n').replace(/\t/g, '  ').split('\n');
  while (lines.length && !lines[0].trim()) lines.shift();
  while (lines.length && !lines[lines.length - 1].trim()) lines.pop();
  const indents = lines.filter((l) => l.trim()).map((l) => l.match(/^ */)![0].length);
  const cut = indents.length ? Math.min(...indents) : 0;
  return lines.map((l) => l.slice(cut).replace(/\s+$/, '')).join('\n');
}

/**
 * Elementos SVG que corresponden a un id de paso.
 *  - `X`   -> `.pele-node[data-id="X"]` (también `.pele-cluster`, para subgrafos)
 *  - `X>Y` -> `.pele-edge[data-id^="L_X_Y_"]` y su rótulo `.pele-edge-label`
 * Se compara el atributo en JS (no con selectores) para no escapar ids raros, y el
 * sufijo debe ser solo el número de la arista (`L_A_B_0`, no `L_A_B_x_0`).
 */
export function resolveStepId(svg: ParentNode, id: string): Element[] {
  const out: Element[] = [];
  const edge = id.match(/^(.+?)>(.+)$/);
  if (edge) {
    const prefix = `L_${edge[1].trim()}_${edge[2].trim()}_`;
    svg.querySelectorAll('.pele-edge, .pele-edge-label').forEach((e) => {
      const did = e.getAttribute('data-id') ?? '';
      if (did.startsWith(prefix) && /^\d+$/.test(did.slice(prefix.length))) out.push(e);
    });
  } else {
    svg.querySelectorAll('.pele-node, .pele-cluster').forEach((e) => {
      if (e.getAttribute('data-id') === id) out.push(e);
    });
  }
  return out;
}

/** Resuelve cada grupo de pasos a sus elementos SVG (sin duplicados dentro del grupo). */
export function resolveGroups(svg: ParentNode, groups: string[][]): Element[][] {
  return groups.map((ids) => Array.from(new Set(ids.flatMap((id) => resolveStepId(svg, id)))));
}

// ---------------------------------------------------------------------------
// Montaje
// ---------------------------------------------------------------------------

export interface DiagramHandle {
  readonly el: HTMLElement;
  /** Pasos de revelado que aporta este diagrama (0 si no tiene `data-steps`). */
  readonly steps: number;
  /** Muestra los primeros `n` grupos (0 = ninguno). Se puede llamar antes de que PELE cargue. */
  show(n: number): void;
}

export interface DiagramSet {
  items: DiagramHandle[];
  /** Se cumple cuando todos los diagramas terminaron de dibujarse (o fallaron mostrando el error). */
  ready: Promise<void>;
  destroy(): void;
}

/** Código fuente original de cada elemento: sobrevive a un re-montaje del efecto de React. */
const sources = new WeakMap<HTMLElement, string>();
let seq = 0;

function readSource(el: HTMLElement): string {
  const known = sources.get(el);
  if (known !== undefined) return known;
  // `<br/>` dentro del div se vuelve elemento al parsear el HTML y textContent lo
  // pierde en silencio; se devuelve a texto para que Mermaid lo reciba.
  const clone = el.cloneNode(true) as HTMLElement;
  clone.querySelectorAll('br').forEach((br) => br.replaceWith('<br/>'));
  const text = dedent(clone.textContent ?? '');
  sources.set(el, text);
  return text;
}

function showError(el: HTMLElement, source: string, err: unknown) {
  const detail = err instanceof Error ? err.message.split('\n').find((l) => l.trim()) ?? '' : '';
  const msg = document.createElement('p');
  msg.className = 'edup-diagram-msg';
  msg.textContent = 'No se pudo dibujar el diagrama' + (detail ? ` (${detail.slice(0, 140)})` : '.');
  const pre = document.createElement('pre');
  pre.className = 'edup-diagram-src';
  pre.textContent = source;
  el.replaceChildren(msg, pre);
  el.dataset.diagramState = 'error';
}

interface SetupOptions {
  /** Modo presentación: pasos y flujo. */
  stepped: boolean;
  /**
   * true (por defecto): `mount()` de PELE, que se vuelve a dibujar si cambia el ancho
   * del contenedor. false: un único `render()` sin observadores (PDF). PdfExport aplica
   * `zoom` después de medir, lo que cambia el ancho; con un mount vivo PELE podría
   * redibujar (incluso girar LR a TB) y el alto ya no coincidiría con lo medido.
   */
  observe?: boolean;
}

const FONT = 'Arial, Helvetica, sans-serif'; // la misma pila local que lib/mermaid.ts

function createDiagram(el: HTMLElement, opts: SetupOptions): DiagramHandle & { ready: Promise<void>; destroy(): void } {
  const source = readSource(el);
  const groupsSpec = parseSteps(el.dataset.steps);
  const flowSpec = opts.stepped ? parseFlow(el.getAttribute('data-flow')) : null;
  const stepped = opts.stepped && groupsSpec.length > 0;

  let shown = stepped ? 0 : groupsSpec.length;
  let mounted: Mounted | null = null;
  let destroyed = false;
  let groups: Element[][] = [];

  const paint = () => {
    if (!stepped) return;
    const first = new Map<Element, number>();
    groups.forEach((g, i) => g.forEach((e) => { if (!first.has(e)) first.set(e, i); }));
    first.forEach((i, e) => e.classList.toggle('edup-step-hidden', shown <= i));
    const current = shown >= 1 ? groups[Math.min(shown, groups.length) - 1] ?? [] : [];
    first.forEach((_, e) => e.classList.toggle('edup-current', current.includes(e)));
  };

  /** Se ejecuta tras cada render de PELE (también al cambiar el ancho): el SVG es nuevo. */
  const bind = () => {
    const svg = el.querySelector('svg.pele');
    if (!svg) return;
    const flowing = new Set<Element>();
    if (flowSpec) {
      const edges = flowSpec === true
        ? Array.from(svg.querySelectorAll('.pele-edge'))
        : flowSpec.filter((s) => s.includes('>')).flatMap((s) => resolveStepId(svg, s));
      edges.forEach((e) => { if (e.classList.contains('pele-edge')) flowing.add(e); });
    }
    if (stepped) {
      groups = resolveGroups(svg, groupsSpec);
      if (import.meta.env?.DEV) {
        groupsSpec.forEach((g, i) => { if (!groups[i].length) console.warn('[data-steps] el grupo no coincide con ningún elemento:', g.join(', ')); });
      }
      // Trazo "se dibuja" en aristas que aparecen por pasos (si no tienen guiones propios ni flujo).
      groups.flat().forEach((e) => {
        e.classList.add('edup-step');
        if (!e.classList.contains('pele-edge') || flowing.has(e)) return;
        const path = e.querySelector<SVGPathElement>('path:not(.pele-marker)');
        if (!path || path.hasAttribute('stroke-dasharray')) return;
        try { path.style.setProperty('--edup-len', String(Math.ceil(path.getTotalLength()) + 1)); path.classList.add('edup-draw'); }
        catch { /* sin getTotalLength: solo aparece con fundido */ }
      });
    }
    flowing.forEach((e) => e.classList.add('edup-flow'));
    paint();
  };

  el.textContent = '';
  el.dataset.diagramState = 'loading';

  const ready = (async () => {
    try {
      const { mount, render } = await loadPele();
      if (destroyed) return;
      if (opts.observe === false) {
        el.innerHTML = render(source, { maxWidth: el.clientWidth || undefined, fontFamily: FONT, idPrefix: `edup-d${++seq}` }).svg;
        bind();
        el.dataset.diagramState = 'ready';
        return;
      }
      mounted = mount(el, source, {
        zoom: false, // sin zoom/arrastre: no debe competir con las teclas de la presentación
        idPrefix: `edup-d${++seq}`,
        onRender: bind,
        onError: (err) => { if (!destroyed) showError(el, source, err); },
      });
      if (mounted.error) { showError(el, source, mounted.error); return; }
      el.dataset.diagramState = 'ready';
    } catch (err) {
      if (!destroyed) showError(el, source, err);
    }
  })();

  return {
    el,
    steps: stepped ? groupsSpec.length : 0,
    show(n: number) { shown = Math.max(0, Math.min(n, groupsSpec.length)); paint(); },
    ready,
    destroy() {
      destroyed = true;
      try { mounted?.destroy(); } catch { /* ya desmontado */ }
      mounted = null;
      // Devuelve el elemento a su estado original (el HTML lo controla React).
      el.textContent = source;
      delete el.dataset.diagramState;
    },
  };
}

/** Dibuja todos los `[data-diagram]` dentro de `root`. */
export function setupDiagrams(root: HTMLElement, opts: SetupOptions): DiagramSet {
  const els = Array.from(root.querySelectorAll<HTMLElement>('[data-diagram]'));
  const created = els.map((el) => createDiagram(el, opts));
  return {
    items: created,
    ready: Promise.all(created.map((d) => d.ready)).then(() => undefined),
    destroy: () => created.forEach((d) => d.destroy()),
  };
}
