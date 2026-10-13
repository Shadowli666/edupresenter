import React, { useEffect, useRef } from 'react';
import { ArrowLeft, ListChecks } from 'lucide-react';
import { Course, Module } from '../types';
import { SlideViewer } from '../components/SlideViewer';
import { PdfExport } from '../components/PdfExport';
import { markSeen } from '../lib/progress';

interface ReadingViewProps {
  course: Course;
  module: Module;
  onBack: () => void;
  onOpenTasks: () => void;
}

/** Lectura continua de una semana completa: pensada para que el estudiante estudie desde el celular. */
export const ReadingView: React.FC<ReadingViewProps> = ({ course, module, onBack, onOpenTasks }) => {
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Marca como vista cada diapositiva cuando se lee (≥50 % visible).
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) markSeen(module.id, (e.target as HTMLElement).dataset.slide!);
      }),
      { threshold: 0.5 }
    );
    Object.values(sectionRefs.current).forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [module.id]);

  const go = (id: string) => sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans animate-fade-in">
      <div className="sticky top-0 z-30 bg-white/85 backdrop-blur-xl border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900"
            title="Volver al contenido del curso"
          >
            <ArrowLeft size={22} />
          </button>
          <div className="min-w-0">
            <p className="text-xs text-slate-500 font-medium truncate">{course.title}</p>
            <h1 className="text-base md:text-lg font-bold text-slate-900 leading-tight truncate">{module.title}</h1>
          </div>
          <div className="ml-auto flex items-center gap-2">
            {(module.tasks?.length ?? 0) > 0 && (
              <button
                onClick={onOpenTasks}
                className="flex items-center gap-2 px-3 py-2 bg-amber-50 border border-amber-200 text-amber-800 rounded-full text-sm font-bold hover:bg-amber-100"
              >
                <ListChecks size={16} /><span className="hidden sm:inline">Tareas</span>
              </button>
            )}
            <PdfExport
              module={module}
              courseTitle={course.title}
              teacherName={course.teacherName}
              school={course.school}
              campus={course.campus}
              term={course.term}
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:flex md:gap-10">
        {/* Índice */}
        <nav className="md:w-64 md:shrink-0 mb-8 md:mb-0" aria-label="Índice de la semana">
          <div className="md:sticky md:top-24">
            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">En esta semana</p>
            <ol className="space-y-1 md:max-h-[70vh] md:overflow-y-auto pr-2">
              {module.slides.map((s, i) => (
                <li key={s.id}>
                  <button
                    onClick={() => go(s.id)}
                    className="w-full text-left text-sm px-3 py-1.5 rounded-lg text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                  >
                    <span className="font-mono text-xs text-slate-400 mr-2">{i + 1}</span>{s.title}
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        {/* Diapositivas en secuencia */}
        <main className="flex-1 min-w-0 space-y-16">
          {module.slides.map((slide, i) => (
            <section
              key={slide.id}
              data-slide={slide.id}
              ref={(el) => { sectionRefs.current[slide.id] = el; }}
              className="scroll-mt-24"
            >
              <p className="text-xs font-mono font-bold text-slate-400 mb-2">
                {i + 1} / {module.slides.length}
              </p>
              <SlideViewer slide={slide} compact />
            </section>
          ))}

          {(module.tasks?.length ?? 0) > 0 && (
            <section className="rounded-2xl bg-blue-600 text-white p-6">
              <h3 className="font-bold text-lg mb-1">Tareas de esta semana</h3>
              <p className="text-sm text-blue-100 mb-4">
                {module.tasks!.map((t) => t.title).join(' · ')}
              </p>
              <button
                onClick={onOpenTasks}
                className="px-4 py-2 rounded-full bg-white text-blue-700 font-bold text-sm hover:bg-blue-50"
              >
                Ver detalle y fechas
              </button>
            </section>
          )}
        </main>
      </div>
    </div>
  );
};
