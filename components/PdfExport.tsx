import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { FileDown, Loader2 } from 'lucide-react';
import { Module } from '../types';
import { loadMermaid } from '../lib/mermaid';
import { isLocked, slideHtml, useUnlockVersion } from '../lib/unlock';

interface PdfExportProps {
  module: Module;
  courseTitle: string;
  teacherName?: string;
  school?: string;
  campus?: string;
  term?: string;
}

const MIN_ZOOM = 0.45; // por debajo el texto deja de ser legible
const MAX_ZOOM = 1.3;  // las diapositivas poco densas se agrandan para llenar la hoja

/**
 * Escala cada `.pdf-fit` con `zoom` hasta que su alto renderizado quepa en la
 * hoja. `zoom` altera el layout (el texto se re-acomoda al nuevo ancho), así que
 * no basta una división: se itera hasta converger.
 */
function fitSlidesToPage(container: HTMLElement) {
  container.querySelectorAll<HTMLElement>('.pdf-page:not(.pdf-cover)').forEach((page) => {
    delete page.dataset.overflow; // limpia el marcador de recorte de una exportación anterior
    const fit = page.querySelector<HTMLElement>('.pdf-fit');
    if (!fit) return;
    // Espacio útil: alto de la hoja menos el pie (padding-bottom) de la página.
    const avail = page.clientHeight - parseFloat(getComputedStyle(page).paddingBottom || '0');
    let zoom = 1;
    for (let i = 0; i < 6; i++) {
      fit.style.zoom = String(zoom);
      const h = fit.getBoundingClientRect().height;
      if (!h) break;
      const next = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, zoom * (avail / h) * 0.98));
      if (Math.abs(next - zoom) < 0.01) { zoom = next; break; }
      zoom = next;
    }
    // Garantía: si la iteración no convergió, se sigue reduciendo hasta que quepa.
    fit.style.zoom = String(zoom);
    while (fit.getBoundingClientRect().height > avail + 1 && zoom > MIN_ZOOM) {
      zoom = Math.max(MIN_ZOOM, zoom * 0.95);
      fit.style.zoom = String(zoom);
    }
    if (fit.getBoundingClientRect().height > avail + 1) {
      page.dataset.overflow = 'true'; // no cabe ni al zoom mínimo: se recorta
      console.warn('[PdfExport] la diapositiva no cabe en una hoja:', page.dataset.slide);
    }
  });
}

/**
 * Exporta el módulo completo a PDF usando la impresión del navegador
 * (Ctrl/Cmd+P → "Guardar como PDF").
 *
 * Por qué `window.print()` y no una librería (jsPDF/html2canvas): el estilo de
 * la app lo genera Tailwind en tiempo de ejecución y usa colores modernos que
 * html2canvas no reproduce bien. El motor de impresión del navegador respeta
 * el CSS real, así que el PDF sale idéntico a lo que se proyecta.
 *
 * Los diagramas Mermaid se dibujan antes de imprimir: Mermaid mide el texto de
 * cada rótulo para calcular el tamaño de las cajas, por eso el contenedor se
 * mantiene con layout (visible: hidden) en vez de display: none.
 */
export const PdfExport: React.FC<PdfExportProps> = ({
  module,
  courseTitle,
  teacherName,
  school,
  campus,
  term
}) => {
  useUnlockVersion();
  // Las evaluaciones bloqueadas no se exportan hasta que el estudiante las desbloquee.
  const slides = module.slides.filter((s) => !isLocked(s));
  const [preparing, setPreparing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!preparing) return;

    let cancelled = false;
    let fallbackId: number | undefined;

    const prepare = async () => {
      try {
        const container = containerRef.current;
        if (!container) return;

        // 1. Diagramas Mermaid -> SVG (miden el texto, por eso el contenedor tiene layout).
        if (container.querySelector('.mermaid')) {
          try {
            const mermaid = await loadMermaid();
            await mermaid.run({ nodes: container.querySelectorAll<HTMLElement>('.mermaid') });
          } catch {
            // Un diagrama con error de sintaxis no debe impedir exportar el resto.
          }
        }

        // 2. Imágenes: esperar a que estén decodificadas antes de medir su altura.
        await Promise.all(
          Array.from(container.querySelectorAll('img')).map((img) =>
            img.decode ? img.decode().catch(() => {}) : Promise.resolve()
          )
        );

        // 3. Fuentes: Mermaid y el CSS miden con una fuente y pueden dibujar con otra.
        if (document.fonts?.ready) {
          try { await document.fonts.ready; } catch { /* sin soporte */ }
        }

        // 4. Ajuste a la hoja: cada diapositiva se escala para caber entera en una
        //    página A4 (ver .pdf-page en index.html). El contenedor ya tiene el
        //    tamaño exacto de impresión, así que la medida coincide con el PDF.
        fitSlidesToPage(container);

        // 5. Un respiro para que el navegador termine de maquetar antes del diálogo.
        await new Promise((resolve) => setTimeout(resolve, 250));
        if (cancelled) return;

        window.print();
      } catch (err) {
        console.error('[PdfExport] no se pudo preparar la exportación', err);
      } finally {
        // Respaldo por si `afterprint` no llega (móviles): no dejar el botón en "Preparando…".
        if (!cancelled) fallbackId = window.setTimeout(() => setPreparing(false), 500);
      }
    };

    prepare();

    const finish = () => {
      if (fallbackId !== undefined) window.clearTimeout(fallbackId);
      if (!cancelled) setPreparing(false);
    };
    window.addEventListener('afterprint', finish);

    return () => {
      cancelled = true;
      if (fallbackId !== undefined) window.clearTimeout(fallbackId);
      window.removeEventListener('afterprint', finish);
    };
  }, [preparing]);

  return (
    <>
      <button
        onClick={() => setPreparing(true)}
        disabled={preparing}
        title="Exportar toda la clase a PDF (una diapositiva por página)"
        className="flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-emerald-50 text-slate-600 hover:text-emerald-700 rounded-full text-sm font-medium transition-colors border border-slate-200 hover:border-emerald-200 disabled:opacity-60 disabled:cursor-wait"
      >
        {preparing ? <Loader2 size={16} className="animate-spin" /> : <FileDown size={16} />}
        <span className="hidden sm:inline">{preparing ? 'Preparando…' : 'Exportar PDF'}</span>
      </button>

      {/*
        Contenedor de impresión. Va en un portal a <body>, NO dentro de #root:
        al imprimir se oculta todo lo demás con `display: none`, y si el
        contenedor fuera hijo de #root quedaría oculto junto con la app.
        En pantalla se mantiene fuera de vista con posicionamiento absoluto
        (no `display: none`) para que Mermaid pueda medir sus rótulos.
      */}
      {preparing && createPortal(
      <div id="pdf-export-root" ref={containerRef} aria-hidden="true">
        <div className="pdf-page pdf-cover">
          <h1 className="text-4xl font-bold text-slate-900">{module.title}</h1>
          <p className="mt-3 text-lg text-slate-600">{courseTitle}</p>
          <p className="mt-1 text-sm text-slate-500">
            {module.description}
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-3 text-sm text-slate-700 max-w-2xl">
            {teacherName && (<><dt className="font-bold text-slate-500">Docente</dt><dd>{teacherName}</dd></>)}
            {school && (<><dt className="font-bold text-slate-500">Dependencia</dt><dd>{school}</dd></>)}
            {campus && (<><dt className="font-bold text-slate-500">Sede</dt><dd>{campus}</dd></>)}
            {term && (<><dt className="font-bold text-slate-500">Período</dt><dd>{term}</dd></>)}
            <dt className="font-bold text-slate-500">Diapositivas</dt>
            <dd>{slides.length}</dd>
            {module.evaluation && (
              <><dt className="font-bold text-slate-500">Evaluación</dt><dd>{module.evaluation}</dd></>
            )}
          </dl>
          <p className="mt-10 text-xs text-slate-400">
            Exportado desde EduPresenter. Material de uso docente.
          </p>
        </div>

        {slides.map((slide) => (
          <div key={slide.id} className="pdf-page" data-slide={slide.id}>
            <div className="pdf-fit">
              <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-3 mb-5">
                {slide.title}
              </h2>
              <div
                className="prose prose-slate max-w-none prose-headings:font-bold"
                dangerouslySetInnerHTML={{ __html: slideHtml(slide) }}
              />
            </div>
            {teacherName && (
              <p className="pdf-footnote">{teacherName}</p>
            )}
          </div>
        ))}
      </div>,
      document.body
      )}
    </>
  );
};
