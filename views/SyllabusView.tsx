import React from 'react';
import {
  ArrowLeft,
  BookText,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Clock,
  ListChecks,
  Lock,
  MonitorPlay,
  Search
} from 'lucide-react';
import { Course } from '../types';
import { isLocked, isUnavailable, useUnlockVersion } from '../lib/unlock';
import { seenCount, useProgress, wasSeen } from '../lib/progress';

interface SyllabusViewProps {
  course: Course;
  expandedWeeks: string[];
  toggleWeek: (moduleId: string) => void;
  onBack: () => void;
  onSelectSlide: (moduleId: string, slideId: string) => void;
  onRead: (moduleId: string) => void;
  onOpenTasks: () => void;
  onOpenSearch: () => void;
}

export const SyllabusView: React.FC<SyllabusViewProps> = ({
  course,
  expandedWeeks,
  toggleWeek,
  onBack,
  onSelectSlide,
  onRead,
  onOpenTasks,
  onOpenSearch
}) => {
  useProgress();
  useUnlockVersion();
  return (
      <div className="min-h-screen bg-white text-slate-800 font-sans animate-fade-in">
        {/* Header with Back Button */}
        <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-slate-200 transition-all">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
            <button 
              onClick={onBack}
              className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-all hover:-translate-x-1 active:scale-95"
              title="Volver a Materias"
            >
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-lg font-bold text-slate-900 leading-none">{course.title}</h1>
              <span className="text-xs text-slate-500 font-medium bg-slate-100 px-2 py-0.5 rounded mt-1 inline-block">
                {course.code}
              </span>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <button
                onClick={onOpenSearch}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900"
                title="Buscar (tecla /)"
              >
                <Search size={20} />
              </button>
              <button
                onClick={onOpenTasks}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-bold transition-colors shadow"
              >
                <ListChecks size={16} /><span className="hidden sm:inline">Tareas</span>
              </button>
            </div>
          </div>
        </div>

        <main className="max-w-4xl mx-auto px-6 py-12">
          <div className="relative border-l-2 border-slate-200 ml-3 md:ml-6 space-y-10">
            
            {course.modules.map((module, index) => {
              const isOpen = expandedWeeks.includes(module.id);
              return (
                <div key={module.id} className="relative pl-8 md:pl-12">
                  {/* Timeline Dot */}
                  <button 
                    onClick={() => toggleWeek(module.id)}
                    className={`absolute -left-[9px] top-1 flex items-center justify-center w-5 h-5 border-4 rounded-full transition-all duration-300 z-10 hover:scale-125 focus:outline-none ${isOpen ? 'bg-white border-blue-600 shadow-[0_0_0_4px_rgba(37,99,235,0.1)]' : 'bg-slate-100 border-slate-300'}`}
                  ></button>
                  
                  {/* Accordion Header */}
                  <button 
                    onClick={() => toggleWeek(module.id)}
                    className="w-full text-left group focus:outline-none"
                  >
                    <div className="flex items-start justify-between bg-white p-2 -m-2 rounded-xl hover:bg-slate-50 transition-colors">
                      <div>
                        <span className={`text-xs font-bold tracking-wider uppercase mb-1 block transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-500'}`}>
                          Semana {index + 1}
                        </span>
                        <h2 className={`text-2xl font-bold transition-colors mb-2 ${isOpen ? 'text-slate-900' : 'text-slate-600 group-hover:text-slate-800'}`}>
                          {module.title}
                        </h2>
                        <p className={`text-slate-600 text-sm transition-all duration-300 ${isOpen ? 'opacity-100 max-h-20' : 'opacity-60 max-h-0 overflow-hidden md:max-h-20 md:opacity-100'}`}>
                          {module.description}
                        </p>
                      </div>
                      <div className={`p-2 rounded-full transition-all duration-300 transform ${isOpen ? 'bg-blue-100 text-blue-600 rotate-180' : 'bg-slate-50 text-slate-500 group-hover:bg-slate-200'}`}>
                        <ChevronDown size={20} />
                      </div>
                    </div>
                  </button>

                  {/* Accordion Body (Content) */}
                  <div 
                    className={`grid gap-3 overflow-hidden transition-all duration-500 ease-in-out p-1 ${isOpen ? 'mt-6 opacity-100 max-h-[2000px]' : 'mt-0 opacity-0 max-h-0'}`}
                    aria-hidden={!isOpen}
                    ref={(el) => { if (el) el.inert = !isOpen; }}
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        onClick={() => onRead(module.id)}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 shadow-sm"
                      >
                        <BookText size={14} /> Leer la semana completa
                      </button>
                      {(module.tasks?.length ?? 0) > 0 && (
                        <button
                          onClick={onOpenTasks}
                          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold hover:bg-amber-100"
                        >
                          <ListChecks size={14} /> {module.tasks!.length} {module.tasks!.length === 1 ? 'tarea' : 'tareas'}
                        </button>
                      )}
                      {seenCount(module.id) > 0 && (
                        <span className="text-xs font-semibold text-slate-500">
                          Visto: {Math.min(seenCount(module.id), module.slides.length)}/{module.slides.length}
                        </span>
                      )}
                    </div>

                    {module.slides.map((slide, sIndex) => (
                      <button
                        key={slide.id}
                        onClick={() => onSelectSlide(module.id, slide.id)}
                        className="group flex items-center bg-white border border-slate-200 p-4 rounded-xl text-left transition-all hover:shadow-md hover:border-blue-400 active:scale-[0.99] relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 group-hover:text-blue-600 group-hover:bg-white group-hover:border-blue-200 transition-all mr-4 shrink-0 shadow-sm relative z-10">
                          {isLocked(slide) || isUnavailable(slide)
                            ? <Lock size={20} className="text-amber-500" />
                            : wasSeen(module.id, slide.id)
                              ? <CheckCircle size={20} className="text-emerald-500" />
                              : <MonitorPlay size={20} />}
                        </div>
                        <div className="flex-1 relative z-10">
                          <h3 className="font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">
                            {slide.title}
                          </h3>
                          <p className="text-xs text-slate-500 mt-0.5 font-medium">Clase {index + 1}.{sIndex + 1}</p>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-blue-600 relative z-10">
                          <ChevronRight size={20} />
                        </div>
                      </button>
                    ))}
                    
                    {/* Evaluation Tag */}
                    {module.evaluation && module.evaluation !== '0%' && (
                      <div className="mt-2 inline-flex items-center px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold w-fit shadow-sm">
                        <Clock size={14} className="mr-2" />
                        Evaluación: {module.evaluation}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* End of Course */}
            <div className="relative pl-8 md:pl-12 pt-8">
              <span className="absolute -left-[9px] top-9 flex items-center justify-center w-5 h-5 bg-slate-200 rounded-full"></span>
              <div className="p-8 bg-slate-900 rounded-2xl text-white flex items-center gap-6 shadow-xl ring-4 ring-slate-100">
                 <div className="p-4 bg-white/10 rounded-full animate-pulse">
                   <CheckCircle size={32} />
                 </div>
                 <div>
                   <h3 className="font-bold text-xl mb-1">Fin del Contenido</h3>
                   <p className="text-slate-500 text-sm">Has revisado toda la estructura del curso.</p>
                 </div>
              </div>
            </div>

          </div>
        </main>
      </div>
  );
};
