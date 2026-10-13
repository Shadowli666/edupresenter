import React, { useEffect, useRef } from 'react';
import { Slide } from '../types';
import { enhance } from '../lib/enhance';
import { loadMermaid } from '../lib/mermaid';
import { isLocked, slideHtml, useUnlockVersion } from '../lib/unlock';
import { LockPanel } from './LockPanel';

interface SlideViewerProps {
  slide: Slide;
  teacherName?: string;
  teacherEmail?: string;
  school?: string;
  campus?: string;
  /** true en presentación: los `data-reveal` aparecen paso a paso. En lectura se ve todo. */
  stepped?: boolean;
  /** Sin pie institucional (vista de lectura de varias diapositivas seguidas). */
  compact?: boolean;
}

export const SlideViewer: React.FC<SlideViewerProps> = ({
  slide,
  teacherName,
  teacherEmail,
  stepped = false,
  compact = false
}) => {
  useUnlockVersion(); // re-render cuando se desbloquea una evaluación
  const bodyRef = useRef<HTMLDivElement>(null);
  const locked = isLocked(slide);
  const html = slideHtml(slide);

  // Interactivos (pestañas, quiz, pasos, copiar código)
  useEffect(() => {
    if (locked || !bodyRef.current) return;
    return enhance(bodyRef.current, { stepped });
  }, [html, locked, stepped]);

  // Diagramas Mermaid
  useEffect(() => {
    const root = bodyRef.current;
    if (locked || !root || !root.querySelector('.mermaid')) return;

    let isMounted = true;
    (async () => {
      const mermaid = await loadMermaid();
      if (!isMounted) return;
      await mermaid.run({ nodes: root.querySelectorAll<HTMLElement>('.mermaid') });
    })().catch(() => { /* un diagrama con error no debe romper la diapositiva */ });

    return () => { isMounted = false; };
  }, [html, locked]);

  return (
    <div className={`w-full animate-fade-in flex flex-col ${compact ? '' : 'min-h-[60vh]'}`}>
      {/* Document Header */}
      <div className="mb-8 pb-4 border-b border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">{slide.title}</h2>
      </div>

      {/* Document Body */}
      {locked ? (
        <LockPanel slide={slide} />
      ) : (
        <div
          ref={bodyRef}
          className="flex-1 prose prose-slate max-w-none prose-headings:font-bold prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-a:text-blue-600 prose-pre:bg-slate-900 prose-pre:text-slate-50"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )}

      {/* Institutional Footer */}
      {!compact && (teacherName || teacherEmail) && (
        <div className="mt-16 pt-6 border-t border-slate-100 text-xs font-mono text-slate-400 flex justify-end">
          <div className="text-right">
            {teacherName && <p className="font-bold text-slate-500">{teacherName}</p>}
            {teacherEmail && (
              <a href={`mailto:${teacherEmail}`} className="hover:text-blue-500 transition-colors">
                {teacherEmail}
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
