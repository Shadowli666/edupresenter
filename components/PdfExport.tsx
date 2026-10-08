import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { FileDown, Loader2 } from 'lucide-react';
import { Module } from '../types';

interface PdfExportProps {
  module: Module;
  courseTitle: string;
  teacherName?: string;
  school?: string;
  campus?: string;
  term?: string;
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
  const [preparing, setPreparing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!preparing) return;

    let cancelled = false;

    const prepare = async () => {
      const container = containerRef.current;
      if (!container) return;

      // 1. Diagramas Mermaid -> SVG (miden el texto, por eso el contenedor tiene layout).
      if (container.querySelector('.mermaid')) {
        try {
          const mermaid = (await import('mermaid')).default;
          mermaid.initialize({
            startOnLoad: false,
            theme: 'neutral',
            securityLevel: 'loose',
            fontFamily: 'Arial, Helvetica, sans-serif',
            flowchart: { htmlLabels: true, curve: 'basis', padding: 12, nodeSpacing: 40, rankSpacing: 60 }
          });
          await mermaid.run({ nodes: container.querySelectorAll('.mermaid') });
        } catch {
          // Un diagrama con error de sintaxis no debe impedir exportar el resto.
        }
      }

      // 2. Fuentes: Mermaid y el CSS miden con una fuente y pueden dibujar con otra.
      if (document.fonts?.ready) {
        try { await document.fonts.ready; } catch { /* sin soporte */ }
      }

      // 3. Un respiro para que el navegador termine de maquetar antes del diálogo.
      await new Promise((resolve) => setTimeout(resolve, 250));
      if (cancelled) return;

      window.print();
    };

    prepare();

    const finish = () => {
      if (!cancelled) setPreparing(false);
    };
    window.addEventListener('afterprint', finish);

    return () => {
      cancelled = true;
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
      {createPortal(
      <div id="pdf-export-root" ref={containerRef}>
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
            <dd>{module.slides.length}</dd>
            {module.evaluation && (
              <><dt className="font-bold text-slate-500">Evaluación</dt><dd>{module.evaluation}</dd></>
            )}
          </dl>
          <p className="mt-10 text-xs text-slate-400">
            Exportado desde EduPresenter. Material de uso docente.
          </p>
        </div>

        {module.slides.map((slide) => (
          <div key={slide.id} className="pdf-page">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-3 mb-5">
              {slide.title}
            </h2>
            <div
              className="prose prose-slate max-w-none prose-headings:font-bold"
              dangerouslySetInnerHTML={{ __html: slide.contentHtml }}
            />
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
