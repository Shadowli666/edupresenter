/**
 * Interactividad declarativa para el HTML de las diapositivas.
 *
 * El contenido se escribe como HTML con atributos `data-*`; sin este script
 * (por ejemplo en el PDF) todo se ve completo y sigue siendo legible:
 *
 *   <li data-reveal>…</li>                       aparece al avanzar (tecla ↓ / Espacio / botón)
 *   <div data-tabs>
 *     <section data-tab="SQL">…</section>        pestañas; sin JS se ven apiladas
 *     <section data-tab="Python">…</section>
 *   </div>
 *   <div data-quiz>                              pregunta de selección
 *     <p>¿Pregunta?</p>
 *     <button data-option>A</button>
 *     <button data-option data-correct>B</button>
 *     <p data-explain>Porque…</p>                se muestra al responder
 *   </div>
 *   <pre><code>…</code></pre>                   botón "Copiar" automático
 *   <div data-diagram data-steps="A | A>B" data-flow>   diagrama PELE (ver lib/diagram.ts);
 *     flowchart LR …                                    cada grupo de data-steps es un paso
 *   </div>                                              más de la misma cola que data-reveal
 *   <div data-curves data-curves-nmax="40" data-curves-ymax="1024">
 *     <input type="range" data-curves-input>            gráfica de crecimiento con deslizador;
 *     <svg data-curves-svg></svg>                       dibuja log n, n, n log n, n² y 2ⁿ;
 *     <span data-curves-out="n"></span>                 cada data-curves-out muestra el valor de esa función
 *   </div>
 */
import { setupDiagrams } from './diagram';

let revealNext: (() => boolean) | null = null;

/** Muestra el siguiente elemento `data-reveal`. Devuelve true si había algo por mostrar. */
export const revealStep = (): boolean => (revealNext ? revealNext() : false);

export function enhance(root: HTMLElement, opts: { stepped: boolean }): () => void {
  const cleanups: Array<() => void> = [];

  // --- Copiar código ---
  root.querySelectorAll<HTMLElement>('pre').forEach((pre) => {
    if (pre.querySelector('.edup-copy') || pre.closest('.mermaid, [data-diagram]')) return;
    pre.style.position = 'relative';
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'edup-copy';
    btn.textContent = 'Copiar';
    btn.addEventListener('click', async () => {
      const text = (pre.querySelector('code') ?? pre).textContent ?? '';
      try { await navigator.clipboard.writeText(text); btn.textContent = '¡Copiado!'; }
      catch { btn.textContent = 'No se pudo'; }
      setTimeout(() => (btn.textContent = 'Copiar'), 1500);
    });
    pre.appendChild(btn);
  });

  // --- Pestañas ---
  root.querySelectorAll<HTMLElement>('[data-tabs]').forEach((box) => {
    if (box.dataset.enhanced) return;
    const panels = Array.from(box.querySelectorAll<HTMLElement>(':scope > [data-tab]'));
    if (panels.length < 2) return;
    box.dataset.enhanced = '1';
    const bar = document.createElement('div');
    bar.className = 'edup-tabbar';
    const show = (n: number) => {
      panels.forEach((p, i) => { p.hidden = i !== n; });
      bar.querySelectorAll('button').forEach((b, i) => b.classList.toggle('active', i === n));
    };
    panels.forEach((p, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.textContent = p.dataset.tab ?? `Pestaña ${i + 1}`;
      b.addEventListener('click', () => show(i));
      bar.appendChild(b);
    });
    box.insertBefore(bar, box.firstChild);
    show(0);
  });

  // --- Preguntas de selección ---
  root.querySelectorAll<HTMLElement>('[data-quiz]').forEach((quiz) => {
    if (quiz.dataset.enhanced) return;
    quiz.dataset.enhanced = '1';
    const options = Array.from(quiz.querySelectorAll<HTMLElement>('[data-option]'));
    const explain = quiz.querySelector<HTMLElement>('[data-explain]');
    if (explain) explain.hidden = true;
    options.forEach((opt) => {
      opt.addEventListener('click', () => {
        if (quiz.dataset.done) return;
        quiz.dataset.done = '1';
        options.forEach((o) => {
          if (o.hasAttribute('data-correct')) o.classList.add('edup-ok');
          else if (o === opt) o.classList.add('edup-bad');
          o.setAttribute('disabled', '');
        });
        if (explain) explain.hidden = false;
      });
    });
  });

  // --- Gráficas de crecimiento con deslizador ---
  root.querySelectorAll<HTMLElement>('[data-curves]').forEach((box) => {
    if (box.dataset.enhanced) return;
    const input = box.querySelector<HTMLInputElement>('[data-curves-input]');
    const svg = box.querySelector<SVGSVGElement>('[data-curves-svg]');
    if (!input || !svg) return;
    box.dataset.enhanced = '1';

    const NS = 'http://www.w3.org/2000/svg';
    const nmax = Number(box.dataset.curvesNmax ?? 40);
    const ymax = Number(box.dataset.curvesYmax ?? 1024);
    const W = 600, H = 240, L = 44, R = 12, T = 12, B = 26;
    const px = (n: number) => L + (n / nmax) * (W - L - R);
    const py = (v: number) => H - B - (Math.min(v, ymax) / ymax) * (H - T - B);
    const mk = (tag: string, attrs: Record<string, string | number>) => {
      const el = document.createElementNS(NS, tag);
      for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, String(v));
      return el;
    };
    const curves = [
      { key: 'log', color: '#94a3b8', f: (n: number) => Math.log2(n) },
      { key: 'n', color: '#0ea5e9', f: (n: number) => n },
      { key: 'nlogn', color: '#14b8a6', f: (n: number) => n * Math.log2(n) },
      { key: 'n2', color: '#f59e0b', f: (n: number) => n * n },
      { key: '2n', color: '#e11d48', f: (n: number) => 2 ** n },
    ];

    svg.replaceChildren();
    svg.appendChild(mk('rect', { x: L, y: T, width: W - L - R, height: H - T - B, fill: '#f8fafc', stroke: '#e2e8f0' }));
    for (let i = 1; i <= 4; i++) {
      const v = (ymax / 4) * i;
      const y = py(v);
      svg.appendChild(mk('line', { x1: L, y1: y, x2: W - R, y2: y, stroke: '#e2e8f0' }));
      const t = mk('text', { x: L - 6, y: y + 4, 'text-anchor': 'end', 'font-size': 13, fill: '#64748b' }) as SVGTextElement;
      t.textContent = v >= 1000 ? `${v / 1000}k` : String(Math.round(v));
      svg.appendChild(t);
    }
    [0, Math.round(nmax / 2), nmax].forEach((n) => {
      const t = mk('text', { x: px(n), y: H - 8, 'text-anchor': 'middle', 'font-size': 13, fill: '#64748b' }) as SVGTextElement;
      t.textContent = String(n);
      svg.appendChild(t);
    });

    curves.forEach(({ color, f }) => {
      let d = '';
      let pen = false;
      for (let n = 2; n <= nmax; n += 0.5) {
        const v = f(n);
        if (v > ymax) { pen = false; continue; }
        d += `${pen ? 'L' : 'M'}${px(n).toFixed(1)} ${py(v).toFixed(1)} `;
        pen = true;
      }
      svg.appendChild(mk('path', { d, fill: 'none', stroke: color, 'stroke-width': 2.5, 'stroke-linejoin': 'round', 'stroke-linecap': 'round' }));
    });

    const cursor = mk('line', { y1: T, y2: H - B, stroke: '#0f172a', 'stroke-width': 1.5, 'stroke-dasharray': '4 3' });
    svg.appendChild(cursor);
    const dots = curves.map(({ color }) => {
      const c = mk('circle', { r: 3.5, fill: color, stroke: '#fff', 'stroke-width': 1.5 });
      svg.appendChild(c);
      return c;
    });

    const outs = Array.from(box.querySelectorAll<HTMLElement>('[data-curves-out]'));
    const sup = (e: number) => String(e).split('').map((d) => '⁰¹²³⁴⁵⁶⁷⁸⁹'[Number(d)] ?? d).join('');
    const fmt = (v: number) => {
      if (v >= 1e6) {
        const e = Math.floor(Math.log10(v));
        return `${(v / 10 ** e).toFixed(1).replace('.', ',')}·10${sup(e)}`;
      }
      return v >= 100
        ? String(Math.round(v)).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
        : String(Math.round(v * 10) / 10).replace('.', ',');
    };
    const update = () => {
      const n = Number(input.value);
      const x = px(n);
      cursor.setAttribute('x1', String(x));
      cursor.setAttribute('x2', String(x));
      curves.forEach(({ key, f }, i) => {
        const v = f(n);
        const dot = dots[i];
        if (v <= ymax) {
          dot.setAttribute('cx', String(x));
          dot.setAttribute('cy', String(py(v)));
          dot.removeAttribute('display');
        } else {
          dot.setAttribute('display', 'none');
        }
        outs.forEach((el) => {
          if (el.dataset.curvesOut === key) el.textContent = fmt(v);
        });
      });
    };
    input.addEventListener('input', update);
    cleanups.push(() => {
      input.removeEventListener('input', update);
      // StrictMode monta, desmonta y vuelve a montar: si el sello quedara puesto,
      // el segundo montaje saldría sin listener y el deslizador quedaría muerto.
      delete box.dataset.enhanced;
    });
    update();
  });

  // --- Diagramas PELE (se dibujan siempre; los pasos solo en presentación) ---
  const diagrams = setupDiagrams(root, { stepped: opts.stepped });
  cleanups.push(() => diagrams.destroy());

  // --- Revelado paso a paso (solo en modo presentación) ---
  // Una sola cola en orden de documento: cada `data-reveal` es un paso y cada grupo
  // de `data-steps` de un diagrama es otro paso (con su contador compartido).
  revealNext = null;
  if (opts.stepped) {
    const steps: Array<() => void> = [];
    root.querySelectorAll<HTMLElement>('[data-reveal], [data-diagram]').forEach((node) => {
      if (node.hasAttribute('data-diagram')) {
        const d = diagrams.items.find((it) => it.el === node);
        for (let i = 1; d && i <= d.steps; i++) steps.push(() => d.show(i));
      } else {
        node.classList.add('edup-hidden');
        steps.push(() => node.classList.remove('edup-hidden'));
      }
    });
    if (steps.length) {
      let shown = 0;
      const hint = document.createElement('button');
      hint.type = 'button';
      hint.className = 'edup-reveal-hint';
      const paint = () => {
        const done = shown >= steps.length;
        hint.textContent = done ? '✓ Todo visible' : `Mostrar siguiente (${shown}/${steps.length})`;
        hint.disabled = done;
        hint.classList.toggle('is-done', done);
      };
      const step = () => {
        if (shown >= steps.length) return false;
        steps[shown++]();
        paint();
        return true;
      };
      hint.addEventListener('click', step);
      paint();
      // El botón vive en la barra superior (PresentationView) para que no flote
      // sobre el contenido; si no hay barra, cae al final de la diapositiva.
      const slot = document.getElementById('edup-reveal-slot');
      (slot ?? root).appendChild(hint);
      revealNext = step;
      cleanups.push(() => { hint.remove(); });
    }
  }

  return () => {
    cleanups.forEach((c) => c());
    revealNext = null;
  };
}
