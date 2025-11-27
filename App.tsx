import React, { useState, useEffect } from 'react';
import { AVAILABLE_COURSES } from './constants';
import { SlideViewer } from './components/SlideViewer';
import { Course, Module, Slide } from './types';
import { 
  BookOpen, 
  MonitorPlay, 
  ArrowLeft, 
  ChevronRight, 
  ChevronLeft, 
  ChevronDown,
  Clock, 
  Calendar, 
  CheckCircle, 
  X, 
  User 
} from 'lucide-react';

const App: React.FC = () => {
  // Navigation State
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [viewMode, setViewMode] = useState<'MENU' | 'SYLLABUS' | 'PRESENTATION'>('MENU');
  
  // Content State
  const [activeModuleId, setActiveModuleId] = useState<string>('');
  const [activeSlideId, setActiveSlideId] = useState<string>('');
  const [expandedWeeks, setExpandedWeeks] = useState<string[]>([]);

  // --- ACTIONS ---

  const handleCourseSelect = (course: Course) => {
    setSelectedCourse(course);
    // Open the first week by default
    if (course.modules.length > 0) {
      setExpandedWeeks([course.modules[0].id]);
    }
    setViewMode('SYLLABUS');
  };

  const toggleWeek = (moduleId: string) => {
    setExpandedWeeks(prev => 
      prev.includes(moduleId) 
        ? prev.filter(id => id !== moduleId) 
        : [...prev, moduleId]
    );
  };

  const handleClassSelect = (moduleId: string, slideId: string) => {
    setActiveModuleId(moduleId);
    setActiveSlideId(slideId);
    setViewMode('PRESENTATION');
    window.scrollTo(0, 0);
  };

  const handleBackToSyllabus = () => {
    setViewMode('SYLLABUS');
  };

  const handleBackToMenu = () => {
    setSelectedCourse(null);
    setViewMode('MENU');
  };

  // Derived state
  const activeModule = selectedCourse?.modules.find(m => m.id === activeModuleId);
  const activeSlide = activeModule?.slides.find(s => s.id === activeSlideId);

  // Navigation Logic (Next/Prev)
  const getNextSlide = () => {
    if (!selectedCourse || !activeModule || !activeSlide) return null;
    
    const currentSlideIndex = activeModule.slides.findIndex(s => s.id === activeSlideId);
    
    // Next in current module ONLY
    if (currentSlideIndex < activeModule.slides.length - 1) {
      return {
        module: activeModule,
        slide: activeModule.slides[currentSlideIndex + 1]
      };
    }
    
    // Do not jump to next module automatically
    return null;
  };

  const getPrevSlide = () => {
    if (!selectedCourse || !activeModule || !activeSlide) return null;

    const currentSlideIndex = activeModule.slides.findIndex(s => s.id === activeSlideId);

    // Prev in current module ONLY
    if (currentSlideIndex > 0) {
      return {
        module: activeModule,
        slide: activeModule.slides[currentSlideIndex - 1]
      };
    }

    // Do not jump to prev module automatically
    return null;
  };

  const next = getNextSlide();
  const prev = getPrevSlide();

  // Keyboard Navigation Handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== 'PRESENTATION') return;

      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
          if (next) {
            e.preventDefault();
            handleClassSelect(next.module.id, next.slide.id);
          }
          break;
        case 'ArrowLeft':
        case 'PageUp':
          if (prev) {
            e.preventDefault();
            handleClassSelect(prev.module.id, prev.slide.id);
          }
          break;
        case 'Escape':
          e.preventDefault();
          handleBackToSyllabus();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode, next, prev]);


  // --- RENDER: MAIN MENU ---
  if (viewMode === 'MENU' || !selectedCourse) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 animate-fade-in">
        <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 py-8 px-6 sticky top-0 z-20">
          <div className="max-w-6xl mx-auto flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200 transform hover:rotate-12 transition-transform duration-300">
              <BookOpen size={28} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">EduPresenter</h1>
              <p className="text-sm text-slate-500 font-medium">Organizador de Clases y Presentaciones</p>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 sm:p-12">
          <div className="max-w-6xl mx-auto">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {AVAILABLE_COURSES.map((course, idx) => (
                <button 
                  key={course.id} 
                  onClick={() => handleCourseSelect(course)}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl border border-slate-200 hover:border-blue-400/50 transition-all duration-300 ease-out overflow-hidden text-left flex flex-col h-full transform hover:-translate-y-2 hover:ring-4 hover:ring-blue-50"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="h-40 bg-gradient-to-br from-slate-800 to-slate-900 p-6 relative overflow-hidden flex items-end">
                     <div className="absolute -right-6 -bottom-6 text-white opacity-5 transform rotate-12 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700 ease-out">
                       <BookOpen size={160} />
                     </div>
                     
                     <div className="relative z-10">
                        <h3 className="font-bold text-xl text-white leading-tight mb-1 group-hover:text-blue-200 transition-colors">{course.title}</h3>
                        <div className="h-1 w-12 bg-blue-500 rounded-full group-hover:w-full transition-all duration-500"></div>
                     </div>

                     {course.term && (
                        <span className="absolute top-4 right-4 bg-white/10 backdrop-blur px-2 py-1 rounded text-white/80 text-xs font-mono border border-white/10">
                          {course.term}
                        </span>
                     )}
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-slate-600 text-sm mb-6 flex-1 leading-relaxed">{course.description}</p>
                    
                    {course.teacherName && (
                      <div className="flex items-center gap-3 text-xs text-slate-500 mb-6 bg-slate-50 p-3 rounded-lg border border-slate-100 group-hover:border-blue-100 transition-colors">
                        <div className="bg-white p-1 rounded-full shadow-sm">
                           <User size={14} className="text-slate-400" />
                        </div>
                        <span className="truncate font-medium">{course.teacherName}</span>
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                      <div className="flex items-center text-xs font-semibold text-slate-400">
                        <Calendar size={14} className="mr-1.5" />
                        <span>{course.modules.length} Semanas</span>
                      </div>
                      <span className="text-blue-600 font-bold text-sm group-hover:translate-x-2 transition-transform flex items-center bg-blue-50 px-3 py-1.5 rounded-full group-hover:bg-blue-100">
                        Ver <ChevronRight size={16} className="ml-1" />
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </main>
      </div>
    );
  }

  // --- RENDER: SYLLABUS VIEW (Single Page) ---
  if (viewMode === 'SYLLABUS') {
    return (
      <div className="min-h-screen bg-white text-slate-800 font-sans animate-fade-in">
        {/* Header with Back Button */}
        <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-slate-200 transition-all">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
            <button 
              onClick={handleBackToMenu}
              className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-all hover:-translate-x-1 active:scale-95"
              title="Volver a Materias"
            >
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-lg font-bold text-slate-900 leading-none">{selectedCourse.title}</h1>
              <span className="text-xs text-slate-500 font-medium bg-slate-100 px-2 py-0.5 rounded mt-1 inline-block">
                {selectedCourse.code}
              </span>
            </div>
          </div>
        </div>

        <main className="max-w-4xl mx-auto px-6 py-12">
          <div className="relative border-l-2 border-slate-200 ml-3 md:ml-6 space-y-10">
            
            {selectedCourse.modules.map((module, index) => {
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
                      <div className={`p-2 rounded-full transition-all duration-300 transform ${isOpen ? 'bg-blue-100 text-blue-600 rotate-180' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-200'}`}>
                        <ChevronDown size={20} />
                      </div>
                    </div>
                  </button>

                  {/* Accordion Body (Content) */}
                  <div 
                    className={`grid gap-3 overflow-hidden transition-all duration-500 ease-in-out p-1 ${isOpen ? 'mt-6 opacity-100 max-h-[2000px]' : 'mt-0 opacity-0 max-h-0'}`}
                  >
                    {module.slides.map((slide, sIndex) => (
                      <button
                        key={slide.id}
                        onClick={() => handleClassSelect(module.id, slide.id)}
                        className="group flex items-center bg-white border border-slate-200 p-4 rounded-xl text-left transition-all hover:shadow-md hover:border-blue-400 active:scale-[0.99] relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:bg-white group-hover:border-blue-200 transition-all mr-4 shrink-0 shadow-sm relative z-10">
                          <MonitorPlay size={20} />
                        </div>
                        <div className="flex-1 relative z-10">
                          <h3 className="font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">
                            {slide.title}
                          </h3>
                          <p className="text-xs text-slate-400 mt-0.5 font-medium">Clase {index + 1}.{sIndex + 1}</p>
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
                   <p className="text-slate-400 text-sm">Has revisado toda la estructura del curso.</p>
                 </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    );
  }

  // --- RENDER: PRESENTATION MODE (Fullscreen) ---
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-slate-800 animate-fade-in">
      
      {/* Top Toolbar */}
      <div className="h-16 border-b border-slate-100 flex items-center justify-between px-4 md:px-8 bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3 text-sm">
          <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded font-mono text-xs font-bold uppercase tracking-wider border border-slate-200">
            {activeModule?.title.split('.')[0]}
          </span>
          <span className="text-slate-300 font-light">/</span>
          <span className="font-bold text-slate-900 truncate max-w-[200px] md:max-w-md">
            {activeSlide?.title}
          </span>
        </div>

        <button 
          onClick={handleBackToSyllabus}
          className="group flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-red-50 text-slate-600 hover:text-red-600 rounded-full text-sm font-medium transition-colors border border-slate-200 hover:border-red-200"
          title="Presiona ESC para salir"
        >
          <X size={16} className="group-hover:rotate-90 transition-transform duration-300" />
          <span className="hidden sm:inline">Cerrar Clase</span>
        </button>
      </div>

      {/* Slide Content */}
      <div className="flex-1 overflow-y-auto bg-white scroll-smooth">
        <div className="max-w-4xl mx-auto px-6 py-12 md:px-12 md:py-16 min-h-[calc(100vh-140px)]">
          {activeSlide && (
            <SlideViewer 
              key={activeSlide.id}
              slide={activeSlide} 
              teacherName={selectedCourse?.teacherName}
              teacherEmail={selectedCourse?.teacherEmail}
              school={selectedCourse?.school}
              campus={selectedCourse?.campus}
            />
          )}
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="h-24 border-t border-slate-100 bg-white/80 backdrop-blur-xl px-4 md:px-8 flex items-center justify-between sticky bottom-0 z-50">
        
        {/* Prev Button */}
        {prev ? (
          <button 
            onClick={() => handleClassSelect(prev.module.id, prev.slide.id)}
            className="flex items-center gap-3 text-left group hover:bg-slate-50 px-5 py-3 rounded-xl transition-all duration-300 active:scale-95 border border-transparent hover:border-slate-200"
            title="Anterior (Flecha Izquierda)"
          >
            <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-white border border-slate-200 group-hover:border-slate-300 flex items-center justify-center text-slate-500 transition-all group-hover:-translate-x-1 shadow-sm">
              <ChevronLeft size={20} />
            </div>
            <div className="hidden sm:block">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Anterior</p>
              <p className="text-sm font-bold text-slate-700 group-hover:text-blue-600 transition-colors">{prev.slide.title}</p>
            </div>
          </button>
        ) : <div className="w-32"></div>}

        {/* Progress Indicator */}
        <div className="hidden md:flex flex-col items-center gap-2 flex-1 max-w-xs px-4">
           <div className="flex justify-between w-full text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
             <span>Progreso</span>
             <span>
                {activeModule?.slides.findIndex(s => s.id === activeSlideId)! + 1} / {activeModule?.slides.length}
             </span>
           </div>
           <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden shadow-inner">
             <div 
               className="h-full bg-blue-600 transition-all duration-500 ease-out shadow-[0_0_10px_rgba(37,99,235,0.5)] relative"
               style={{ 
                 width: `${((activeModule?.slides.findIndex(s => s.id === activeSlideId)! + 1) / (activeModule?.slides.length || 1)) * 100}%` 
               }}
             >
                <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/30 rounded-full"></div>
             </div>
           </div>
        </div>

        {/* Next Button */}
        {next ? (
          <button 
             onClick={() => handleClassSelect(next.module.id, next.slide.id)}
             className="flex items-center gap-3 text-right group hover:bg-blue-50 px-5 py-3 rounded-xl transition-all duration-300 active:scale-95 border border-transparent hover:border-blue-100"
             title="Siguiente (Flecha Derecha)"
          >
            <div className="hidden sm:block">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Siguiente</p>
              <p className="text-sm font-bold text-slate-700 group-hover:text-blue-600 transition-colors">{next.slide.title}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-600 group-hover:bg-blue-700 flex items-center justify-center text-white shadow-lg shadow-blue-200 transition-all group-hover:translate-x-1 group-hover:shadow-blue-300">
              <ChevronRight size={20} />
            </div>
          </button>
        ) : (
          <button 
             onClick={handleBackToSyllabus}
             className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl"
          >
             Finalizar Clase <CheckCircle size={18} />
          </button>
        )}

      </div>
    </div>
  );
};

export default App;