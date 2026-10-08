import React, { useEffect } from 'react';
// Carga dinámica de mermaid para reducir el bundle inicial
import { Slide } from '../types';

interface SlideViewerProps {
  slide: Slide;
  teacherName?: string;
  teacherEmail?: string;
  school?: string;
  campus?: string;
}

export const SlideViewer: React.FC<SlideViewerProps> = ({ 
  slide, 
  teacherName, 
  teacherEmail
}) => {
  
  useEffect(() => {
    const hasMermaid = typeof slide.contentHtml === 'string' && (
      // Soporta `class="mermaid"` y también `class="mermaid ..."`
      slide.contentHtml.includes('class="mermaid') ||
      slide.contentHtml.includes("class='mermaid") ||
      slide.contentHtml.includes('```mermaid') ||
      slide.contentHtml.includes('<code class="language-mermaid"')
    );
    if (!hasMermaid) return;

    let isMounted = true;
    (async () => {
      const mermaid = await import('mermaid');
      if (!isMounted) return;
      // Mermaid MIDE el texto de cada rótulo para calcular el tamaño de las cajas y
      // después lo dibuja. Si mide con una fuente y dibuja con otra, las cajas quedan
      // angostas y los rótulos salen recortados. Con una fuente web (Inter) eso pasa
      // siempre que la fuente aún no esté cargada — y esta app restaura la última
      // diapositiva al abrir, así que puede medir antes de que Inter cargue.
      // Solución: una pila de fuentes LOCALES -> medición y dibujo coinciden siempre.
      mermaid.default.initialize({
        startOnLoad: false,
        theme: 'neutral',
        securityLevel: 'loose',
        fontFamily: 'Arial, Helvetica, sans-serif',
        flowchart: {
          htmlLabels: true,
          curve: 'basis',
          padding: 12,
          nodeSpacing: 40,
          rankSpacing: 60
        }
      });
      mermaid.default.run({ querySelector: '.mermaid' });
    })();

    return () => { isMounted = false; };
  }, [slide]);

  return (
    <div className="w-full animate-fade-in flex flex-col min-h-[60vh]">
      {/* Document Header */}
      <div className="mb-8 pb-4 border-b border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">{slide.title}</h2>
      </div>
      
      {/* Document Body */}
      <div 
        className="flex-1 prose prose-slate max-w-none prose-headings:font-bold prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-a:text-blue-600 prose-pre:bg-slate-900 prose-pre:text-slate-50"
        dangerouslySetInnerHTML={{ __html: slide.contentHtml }}
      />

      {/* Institutional Footer */}
      {(teacherName || teacherEmail) && (
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