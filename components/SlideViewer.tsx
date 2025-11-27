import React, { useEffect } from 'react';
import mermaid from 'mermaid';
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
    // Initialize mermaid configuration
    mermaid.initialize({
      startOnLoad: false,
      theme: 'neutral',
      securityLevel: 'loose',
      fontFamily: 'Inter',
      flowchart: {
        htmlLabels: true,
        curve: 'basis'
      }
    });

    // Run mermaid on all elements with class 'mermaid'
    mermaid.run({
      querySelector: '.mermaid'
    });
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