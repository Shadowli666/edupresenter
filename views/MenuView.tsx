import React from 'react';
import { BookOpen, Calendar, ChevronRight, ListChecks, Search, User } from 'lucide-react';
import { Course } from '../types';

interface MenuViewProps {
  courses: Course[];
  onSelectCourse: (course: Course) => void;
  onOpenSearch: () => void;
  onOpenTasks: () => void;
}

export const MenuView: React.FC<MenuViewProps> = ({ courses, onSelectCourse, onOpenSearch, onOpenTasks }) => {
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
            <div className="ml-auto flex items-center gap-2">
              <button
                onClick={onOpenSearch}
                className="flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-700 rounded-full text-sm font-medium transition-colors border border-slate-200"
                title="Buscar en todas las clases (tecla /)"
              >
                <Search size={16} /><span className="hidden sm:inline">Buscar</span>
              </button>
              <button
                onClick={onOpenTasks}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-bold transition-colors shadow"
              >
                <ListChecks size={16} /><span className="hidden sm:inline">Tareas</span>
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 sm:p-12">
          <div className="max-w-6xl mx-auto">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, idx) => (
                <button 
                  key={course.id} 
                  onClick={() => onSelectCourse(course)}
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
                           <User size={14} className="text-slate-500" />
                        </div>
                        <span className="truncate font-medium">{course.teacherName}</span>
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                      <div className="flex items-center text-xs font-semibold text-slate-500">
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
};
