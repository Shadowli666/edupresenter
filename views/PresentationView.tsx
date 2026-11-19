import React, { useEffect, useState } from 'react';
import { CheckCircle, ChevronLeft, ChevronRight, Minus, Plus, X } from 'lucide-react';
import { Course, Module, Slide } from '../types';
import { SlideViewer } from '../components/SlideViewer';
import { PdfExport } from '../components/PdfExport';
import { NotesPanel } from '../components/NotesPanel';

interface PresentationViewProps {
  course: Course;
  activeModule: Module;
  activeSlide: Slide;
  prev: { module: Module; slide: Slide } | null;
  next: { module: Module; slide: Slide } | null;
  onSelect: (moduleId: string, slideId: string) => void;
  onClose: () => void;
}

/** Zoom del contenido de la diapositiva (no del marco): 1 = tamaño base. */
const ZOOM_DEFAULT = 1.3;
const ZOOM_MIN = 0.9;
const ZOOM_MAX = 2;
const ZOOM_KEY = 'edupresenter:zoom';

const readZoom = () => {
  const raw = Number(localStorage.getItem(ZOOM_KEY));
  return Number.isFinite(raw) && raw >= ZOOM_MIN && raw <= ZOOM_MAX ? raw : ZOOM_DEFAULT;
};

export const PresentationView: React.FC<PresentationViewProps> = ({
  course,
  activeModule,
  activeSlide,
  prev,
  next,
  onSelect,
  onClose
}) => {
  const [zoom, setZoom] = useState<number>(readZoom);

  useEffect(() => {
    try { localStorage.setItem(ZOOM_KEY, String(zoom)); } catch { /* sin almacenamiento */ }
  }, [zoom]);

  const zoomBy = (delta: number) =>
    setZoom(z => Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, Math.round((z + delta) * 10) / 10)));

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-slate-800 animate-fade-in">
      
      {/* Top Toolbar */}
      <div className="h-16 border-b border-slate-100 flex items-center justify-between px-4 md:px-8 bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3 text-sm">
          <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded font-mono text-xs font-bold uppercase tracking-wider border border-slate-200">
            {activeModule.title.split('.')[0]}
          </span>
          <span className="text-slate-300 font-light">/</span>
          <span className="font-bold text-slate-900 truncate max-w-[200px] md:max-w-md">
            {activeSlide.title}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Tamaño del texto: hace lo que el zoom del navegador, pero solo con la diapositiva */}
          <div className="hidden sm:flex items-center gap-1 mr-1 px-1 py-1 rounded-full bg-slate-50 border border-slate-200">
            <button
              onClick={() => zoomBy(-0.1)}
              className="w-7 h-7 rounded-full hover:bg-white hover:shadow-sm flex items-center justify-center text-slate-600 transition-colors"
              title="Texto más pequeño"
              aria-label="Reducir el tamaño del texto"
            >
              <Minus size={14} />
            </button>
            <button
              onClick={() => setZoom(ZOOM_DEFAULT)}
              className="px-2 text-xs font-mono font-bold text-slate-600 hover:text-blue-600"
              title="Volver al tamaño normal"
            >
              {Math.round(zoom * 100)}%
            </button>
            <button
              onClick={() => zoomBy(0.1)}
              className="w-7 h-7 rounded-full hover:bg-white hover:shadow-sm flex items-center justify-center text-slate-600 transition-colors"
              title="Texto más grande"
              aria-label="Aumentar el tamaño del texto"
            >
              <Plus size={14} />
            </button>
          </div>

          {/* Sala del botón «Mostrar siguiente» que crea lib/enhance.ts */}
          <div id="edup-reveal-slot" className="flex items-center" />

          <NotesPanel key={activeSlide.id} slide={activeSlide} />
          {(
            <PdfExport
              module={activeModule}
              courseTitle={course.title}
              teacherName={course.teacherName}
              school={course.school}
              campus={course.campus}
              term={course.term}
            />
          )}

          <button 
            onClick={onClose}
            className="group flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-red-50 text-slate-600 hover:text-red-600 rounded-full text-sm font-medium transition-colors border border-slate-200 hover:border-red-200"
            title="Presiona ESC para salir"
          >
            <X size={16} className="group-hover:rotate-90 transition-transform duration-300" />
            <span className="hidden sm:inline">Cerrar Clase</span>
          </button>
        </div>
      </div>

      {/* Slide Content */}
      <div className="flex-1 overflow-y-auto bg-white scroll-smooth">
        <div
          className="max-w-4xl mx-auto px-6 pt-8 pb-12 md:px-12 md:pt-10 md:pb-16 min-h-[calc(100vh-140px)]"
          style={{ zoom } as React.CSSProperties}
        >
          {(
            <SlideViewer 
              key={activeSlide.id}
              slide={activeSlide}
              stepped
              teacherName={course.teacherName}
              teacherEmail={course.teacherEmail}
              school={course.school}
              campus={course.campus}
            />
          )}
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="h-24 border-t border-slate-100 bg-white/80 backdrop-blur-xl px-4 md:px-8 flex items-center justify-between sticky bottom-0 z-50">
        
        {/* Prev Button */}
        {prev ? (
          <button 
            onClick={() => onSelect(prev.module.id, prev.slide.id)}
            className="flex items-center gap-3 text-left group hover:bg-slate-50 px-5 py-3 rounded-xl transition-all duration-300 active:scale-95 border border-transparent hover:border-slate-200"
            title="Anterior (Flecha Izquierda)"
          >
            <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-white border border-slate-200 group-hover:border-slate-300 flex items-center justify-center text-slate-500 transition-all group-hover:-translate-x-1 shadow-sm">
              <ChevronLeft size={20} />
            </div>
            <div className="hidden sm:block">
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Anterior</p>
              <p className="text-sm font-bold text-slate-700 group-hover:text-blue-600 transition-colors">{prev.slide.title}</p>
            </div>
          </button>
        ) : <div className="w-32"></div>}

        {/* Progress Indicator */}
        <div className="hidden md:flex flex-col items-center gap-2 flex-1 max-w-xs px-4">
           <div className="flex justify-between w-full text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
             <span>Progreso</span>
             <span>
                {activeModule.slides.findIndex(s => s.id === activeSlide.id)! + 1} / {activeModule.slides.length}
             </span>
           </div>
           <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden shadow-inner">
             <div 
               className="h-full bg-blue-600 transition-all duration-500 ease-out shadow-[0_0_10px_rgba(37,99,235,0.5)] relative"
               style={{ 
                 width: `${((activeModule.slides.findIndex(s => s.id === activeSlide.id)! + 1) / (activeModule.slides.length || 1)) * 100}%` 
               }}
             >
                <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/30 rounded-full"></div>
             </div>
           </div>
        </div>

        {/* Next Button */}
        {next ? (
          <button 
             onClick={() => onSelect(next.module.id, next.slide.id)}
             className="flex items-center gap-3 text-right group hover:bg-blue-50 px-5 py-3 rounded-xl transition-all duration-300 active:scale-95 border border-transparent hover:border-blue-100"
             title="Siguiente (Flecha Derecha)"
          >
            <div className="hidden sm:block">
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Siguiente</p>
              <p className="text-sm font-bold text-slate-700 group-hover:text-blue-600 transition-colors">{next.slide.title}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-600 group-hover:bg-blue-700 flex items-center justify-center text-white shadow-lg shadow-blue-200 transition-all group-hover:translate-x-1 group-hover:shadow-blue-300">
              <ChevronRight size={20} />
            </div>
          </button>
        ) : (
          <button 
             onClick={onClose}
             className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl"
          >
             Finalizar Clase <CheckCircle size={18} />
          </button>
        )}

      </div>
    </div>
  );
};
