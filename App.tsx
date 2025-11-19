import React, { useState } from 'react';
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


  // --- RENDER: MAIN MENU ---
  if (viewMode === 'MENU' || !selectedCourse) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
        <header className="bg-white border-b border-slate-200 py-8 px-6">
          <div className="max-w-6xl mx-auto flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
              <BookOpen size={28} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">EduPresenter</h1>
              <p className="text-sm text-slate-500">Organizador de Clases y Presentaciones</p>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 sm:p-12">
          <div className="max-w-6xl mx-auto">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {AVAILABLE_COURSES.map(course => (
                <button 
                  key={course.id} 
                  onClick={() => handleCourseSelect(course)}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-200 hover:border-blue-200 transition-all overflow-hidden text-left flex flex-col h-full"
                >
                  <div className="h-40 bg-gradient-to-br from-slate-800 to-slate-900 p-6 relative overflow-hidden flex items-end">
                     <div className="absolute -right-4 -bottom-4 text-white opacity-10 transform rotate-12">
                       <BookOpen size={140} />
                     </div>
                     
                     <h3 className="font-bold text-xl text-white leading-tight z-10">{course.title}</h3>
                     {course.term && (
                        <span className="absolute bottom-4 right-4 text-white/60 text-xs font-mono">
                          {course.term}
                        </span>
                     )}
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-slate-600 text-sm mb-4 flex-1 leading-relaxed">{course.description}</p>
                    
                    {course.teacherName && (
                      <div className="flex items-center gap-2 text-xs text-slate-500 mb-4 bg-slate-50 p-2 rounded">
                        <User size={14} />
                        <span className="truncate font-medium">{course.teacherName}</span>
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div className="flex items-center text-xs text-slate-500">
                        <Calendar size={14} className="mr-1.5" />
                        <span>{course.modules.length} Semanas</span>
                      </div>
                      <span className="text-blue-600 font-semibold text-sm group-hover:translate-x-1 transition-transform flex items-center">
                        Ver Contenido <ChevronRight size={16} className="ml-1" />
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
      <div className="min-h-screen bg-white text-slate-800 font-sans">
        {/* Header with Back Button */}
        <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
            <button 
              onClick={handleBackToMenu}
              className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
              title="Volver a Materias"
            >
              <ArrowLeft size={20} />
            </button>
            <div>
              <h1 className="text-lg font-bold text-slate-900 leading-none">{selectedCourse.title}</h1>
              <span className="text-xs text-slate-500">
                {selectedCourse.code} • {selectedCourse.teacherName || 'Plan de Estudios'}
              </span>
            </div>
          </div>
        </div>

        <main className="max-w-4xl mx-auto px-6 py-12">
          <div className="relative border-l-2 border-slate-200 ml-3 md:ml-6 space-y-8">
            
            {selectedCourse.modules.map((module, index) => {
              const isOpen = expandedWeeks.includes(module.id);
              return (
                <div key={module.id} className="relative pl-8 md:pl-12">
                  {/* Timeline Dot */}
                  <span className={`absolute -left-[9px] top-1 flex items-center justify-center w-5 h-5 border-4 rounded-full transition-colors duration-300 ${isOpen ? 'bg-white border-blue-600' : 'bg-slate-100 border-slate-300'}`}></span>
                  
                  {/* Accordion Header */}
                  <button 
                    onClick={() => toggleWeek(module.id)}
                    className="w-full text-left group focus:outline-none"
                  >
                    <div className="flex items-start justify-between">
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
                      <div className={`p-2 rounded-full transition-all ${isOpen ? 'bg-blue-50 text-blue-600 rotate-180' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'}`}>
                        <ChevronDown size={20} />
                      </div>
                    </div>
                  </button>

                  {/* Accordion Body (Content) */}
                  <div 
                    className={`grid gap-4 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'mt-6 opacity-100 max-h-[2000px]' : 'mt-0 opacity-0 max-h-0'}`}
                  >
                    {module.slides.map((slide, sIndex) => (
                      <button
                        key={slide.id}
                        onClick={() => handleClassSelect(module.id, slide.id)}
                        className="group flex items-center bg-slate-50 hover:bg-white border border-slate-200 hover:border-blue-300 p-4 rounded-xl text-left transition-all hover:shadow-md"
                      >
                        <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-200 transition-colors mr-4 shrink-0 shadow-sm">
                          <MonitorPlay size={20} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">
                            {slide.title}
                          </h3>
                          <p className="text-xs text-slate-400 mt-0.5">Clase {index + 1}.{sIndex + 1}</p>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-600">
                          <ChevronRight size={20} />
                        </div>
                      </button>
                    ))}
                    
                    {/* Evaluation Tag */}
                    {module.evaluation && module.evaluation !== '0%' && (
                      <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-800 text-xs font-medium w-fit">
                        <Clock size={12} className="mr-1.5" />
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
              <div className="p-6 bg-slate-900 rounded-xl text-white flex items-center gap-4 shadow-lg">
                 <div className="p-3 bg-white/10 rounded-full">
                   <CheckCircle size={24} />
                 </div>
                 <div>
                   <h3 className="font-bold text-lg">Fin del Contenido</h3>
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
    <div className="min-h-screen bg-white flex flex-col font-sans text-slate-800">
      
      {/* Top Toolbar */}
      <div className="h-16 border-b border-slate-100 flex items-center justify-between px-4 md:px-8 bg-white sticky top-0 z-50">
        <div className="flex items-center gap-3 text-sm">
          <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded font-mono text-xs font-bold uppercase">
            {activeModule?.title}
          </span>
          <span className="text-slate-300">/</span>
          <span className="font-bold text-slate-900 truncate max-w-[200px] md:max-w-md">
            {activeSlide?.title}
          </span>
        </div>

        <button 
          onClick={handleBackToSyllabus}
          className="flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-full text-sm font-medium transition-colors"
        >
          <X size={16} />
          <span className="hidden sm:inline">Cerrar Clase</span>
        </button>
      </div>

      {/* Slide Content */}
      <div className="flex-1 overflow-y-auto bg-white">
        <div className="max-w-4xl mx-auto px-6 py-12 md:px-12 md:py-16 min-h-[calc(100vh-140px)]">
          {activeSlide && (
            <SlideViewer 
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
      <div className="h-20 border-t border-slate-100 bg-white/90 backdrop-blur px-4 md:px-8 flex items-center justify-between sticky bottom-0 z-50">
        
        {/* Prev Button */}
        {prev ? (
          <button 
            onClick={() => handleClassSelect(prev.module.id, prev.slide.id)}
            className="flex items-center gap-3 text-left group hover:bg-slate-50 px-4 py-2 rounded-lg transition-all"
          >
            <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-white group-hover:border-slate-300 border border-transparent flex items-center justify-center text-slate-500 transition-all">
              <ChevronLeft size={16} />
            </div>
            <div className="hidden sm:block">
              <p className="text-xs text-slate-400 font-medium uppercase">Anterior</p>
              <p className="text-sm font-bold text-slate-700 group-hover:text-blue-600">{prev.slide.title}</p>
            </div>
          </button>
        ) : <div className="w-32"></div>}

        {/* Progress Indicator */}
        <div className="hidden md:flex flex-col items-center gap-1">
           <div className="text-xs font-mono text-slate-400">
             Clase {selectedCourse.modules.findIndex(m => m.id === activeModuleId) + 1}.
             {activeModule?.slides.findIndex(s => s.id === activeSlideId)! + 1}
           </div>
           <div className="w-32 h-1 bg-slate-100 rounded-full overflow-hidden">
             <div 
               className="h-full bg-blue-600 transition-all duration-500"
               style={{ 
                 width: `${((activeModule?.slides.findIndex(s => s.id === activeSlideId)! + 1) / (activeModule?.slides.length || 1)) * 100}%` 
               }}
             />
           </div>
        </div>

        {/* Next Button */}
        {next ? (
          <button 
             onClick={() => handleClassSelect(next.module.id, next.slide.id)}
             className="flex items-center gap-3 text-right group hover:bg-slate-50 px-4 py-2 rounded-lg transition-all"
          >
            <div className="hidden sm:block">
              <p className="text-xs text-slate-400 font-medium uppercase">Siguiente</p>
              <p className="text-sm font-bold text-slate-700 group-hover:text-blue-600">{next.slide.title}</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-600 group-hover:bg-blue-700 flex items-center justify-center text-white shadow-md shadow-blue-200 transition-all">
              <ChevronRight size={16} />
            </div>
          </button>
        ) : (
          <button 
             onClick={handleBackToSyllabus}
             className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
          >
             Finalizar <CheckCircle size={16} />
          </button>
        )}

      </div>
    </div>
  );
};

export default App;