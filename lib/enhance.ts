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
 */

let revealNext: (() => boolean) | null = null;

/** Muestra el siguiente elemento `data-reveal`. Devuelve true si había algo por mostrar. */
export const revealStep = (): boolean => (revealNext ? revealNext() : false);

export function enhance(root: HTMLElement, opts: { stepped: boolean }): () => void {
  const cleanups: Array<() => void> = [];

  // --- Copiar código ---
  root.querySelectorAll<HTMLElement>('pre').forEach((pre) => {
    if (pre.querySelector('.edup-copy') || pre.closest('.mermaid')) return;
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

  // --- Revelado paso a paso (solo en modo presentación) ---
  revealNext = null;
  if (opts.stepped) {
    const items = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (items.length) {
      let shown = 0;
      items.forEach((it) => it.classList.add('edup-hidden'));
      const hint = document.createElement('button');
      hint.type = 'button';
      hint.className = 'edup-reveal-hint';
      const paint = () => {
        hint.textContent = shown >= items.length ? '✓ Todo visible' : `Mostrar siguiente (${shown}/${items.length})`;
        hint.disabled = shown >= items.length;
      };
      const step = () => {
        if (shown >= items.length) return false;
        items[shown++].classList.remove('edup-hidden');
        paint();
        return true;
      };
      hint.addEventListener('click', step);
      paint();
      root.appendChild(hint);
      revealNext = step;
      cleanups.push(() => { hint.remove(); });
    }
  }

  return () => {
    cleanups.forEach((c) => c());
    revealNext = null;
  };
}
