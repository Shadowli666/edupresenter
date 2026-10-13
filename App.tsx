import React, { useState, useEffect, useCallback } from 'react';
import { AVAILABLE_COURSES } from './constants';
import { Course } from './types';
import { MenuView } from './views/MenuView';
import { SyllabusView } from './views/SyllabusView';
import { PresentationView } from './views/PresentationView';
import { ReadingView } from './views/ReadingView';
import { TasksView } from './views/TasksView';
import { SearchOverlay } from './components/SearchOverlay';
import { revealStep } from './lib/enhance';
import { markSeen } from './lib/progress';
import { restoreUnlocked } from './lib/unlock';

type ViewMode = 'MENU' | 'SYLLABUS' | 'PRESENTATION' | 'READ' | 'TASKS';

const STORAGE_KEY = 'edupresenter:lastState';

const App: React.FC = () => {
  // Navigation State
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('MENU');
  const [searchOpen, setSearchOpen] = useState(false);
  /** Vista a la que se vuelve al cerrar Tareas. */
  const [returnTo, setReturnTo] = useState<ViewMode>('MENU');

  // Content State
  const [activeModuleId, setActiveModuleId] = useState<string>('');
  const [activeSlideId, setActiveSlideId] = useState<string>('');
  const [expandedWeeks, setExpandedWeeks] = useState<string[]>([]);

  // Restore last state on load
  useEffect(() => {
    restoreUnlocked();
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as {
        selectedCourseId?: string;
        viewMode?: ViewMode;
        activeModuleId?: string;
        activeSlideId?: string;
        expandedWeeks?: string[];
      };

      if (!parsed.selectedCourseId) return;
      const course = AVAILABLE_COURSES.find(c => c.id === parsed.selectedCourseId);
      if (!course) return;

      setSelectedCourse(course);
      setActiveModuleId(parsed.activeModuleId ?? '');
      setActiveSlideId(parsed.activeSlideId ?? '');
      setExpandedWeeks(parsed.expandedWeeks ?? []);
      setViewMode(parsed.viewMode && parsed.viewMode !== 'TASKS' ? parsed.viewMode : 'SYLLABUS');
    } catch {
      // ignore restore errors
    }
  }, []);

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

  const handleRead = (moduleId: string) => {
    setActiveModuleId(moduleId);
    setViewMode('READ');
    window.scrollTo(0, 0);
  };

  const handleBackToSyllabus = () => {
    setViewMode('SYLLABUS');
  };

  const handleBackToMenu = () => {
    setSelectedCourse(null);
    setViewMode('MENU');
  };

  const openTasks = () => {
    setReturnTo(viewMode === 'TASKS' ? 'MENU' : viewMode);
    setViewMode('TASKS');
    window.scrollTo(0, 0);
  };

  /** Abre una diapositiva de cualquier materia (resultado de búsqueda o enlace desde Tareas). */
  const openSlide = useCallback((courseId: string, moduleId: string, slideId: string) => {
    const course = AVAILABLE_COURSES.find(c => c.id === courseId);
    if (!course) return;
    setSelectedCourse(course);
    setExpandedWeeks(prev => (prev.includes(moduleId) ? prev : [...prev, moduleId]));
    setActiveModuleId(moduleId);
    setActiveSlideId(slideId);
    setViewMode('PRESENTATION');
    window.scrollTo(0, 0);
  }, []);

  // Derived state
  const activeModule = selectedCourse?.modules.find(m => m.id === activeModuleId);
  const activeSlide = activeModule?.slides.find(s => s.id === activeSlideId);

  // Persist current state
  useEffect(() => {
    const payload = {
      selectedCourseId: selectedCourse?.id ?? null,
      viewMode,
      activeModuleId,
      activeSlideId,
      expandedWeeks
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      // ignore storage errors
    }
  }, [selectedCourse, viewMode, activeModuleId, activeSlideId, expandedWeeks]);

  // Guard: if restored slide/module is invalid, fall back to syllabus
  useEffect(() => {
    if (viewMode === 'PRESENTATION' && (!selectedCourse || !activeModule || !activeSlide)) setViewMode('SYLLABUS');
    if (viewMode === 'READ' && (!selectedCourse || !activeModule)) setViewMode('SYLLABUS');
  }, [viewMode, selectedCourse, activeModule, activeSlide]);

  // Avance: cada diapositiva presentada queda marcada como vista.
  useEffect(() => {
    if (viewMode === 'PRESENTATION' && activeModuleId && activeSlideId) markSeen(activeModuleId, activeSlideId);
  }, [viewMode, activeModuleId, activeSlideId]);

  // Navigation Logic (Next/Prev) — solo dentro del módulo activo
  const slides = activeModule?.slides ?? [];
  const currentIndex = slides.findIndex(s => s.id === activeSlideId);
  const next = activeModule && currentIndex >= 0 && currentIndex < slides.length - 1
    ? { module: activeModule, slide: slides[currentIndex + 1] } : null;
  const prev = activeModule && currentIndex > 0
    ? { module: activeModule, slide: slides[currentIndex - 1] } : null;

  // Keyboard Navigation Handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null;
      const typing = !!el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable);
      // Enter/Espacio sobre un botón o enlace deben activarlo, no revelar un paso.
      const onControl = !!el && !!el.closest('button, a, summary, select, [role="button"]');

      if (e.key === '/' && !typing && !searchOpen) {
        e.preventDefault();
        setSearchOpen(true);
        return;
      }
      if (viewMode !== 'PRESENTATION' || searchOpen || typing) return;

      switch (e.key) {
        case 'ArrowDown':
        case ' ':
        case 'Enter':
          if (onControl) break;
          // Revela el siguiente paso (data-reveal); si no hay pasos, deja el scroll normal.
          if (revealStep()) e.preventDefault();
          break;
        case 'ArrowRight':
        case 'PageDown':
          if (revealStep()) { e.preventDefault(); break; }
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
  }, [viewMode, next, prev, searchOpen]);

  const search = searchOpen && (
    <SearchOverlay courses={AVAILABLE_COURSES} onClose={() => setSearchOpen(false)} onOpen={openSlide} />
  );

  // --- RENDER ---
  let view: React.ReactNode;

  if (viewMode === 'TASKS') {
    view = (
      <TasksView
        courses={AVAILABLE_COURSES}
        courseId={selectedCourse?.id ?? null}
        onBack={() => setViewMode(returnTo === 'TASKS' || (returnTo !== 'MENU' && !selectedCourse) ? 'MENU' : returnTo)}
        onOpenSlide={openSlide}
      />
    );
  } else if (viewMode === 'MENU' || !selectedCourse) {
    view = (
      <MenuView
        courses={AVAILABLE_COURSES}
        onSelectCourse={handleCourseSelect}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenTasks={openTasks}
      />
    );
  } else if (viewMode === 'SYLLABUS') {
    view = (
      <SyllabusView
        course={selectedCourse}
        expandedWeeks={expandedWeeks}
        toggleWeek={toggleWeek}
        onBack={handleBackToMenu}
        onSelectSlide={handleClassSelect}
        onRead={handleRead}
        onOpenTasks={openTasks}
        onOpenSearch={() => setSearchOpen(true)}
      />
    );
  } else if (viewMode === 'READ' && activeModule) {
    view = (
      <ReadingView
        course={selectedCourse}
        module={activeModule}
        onBack={handleBackToSyllabus}
        onOpenTasks={openTasks}
      />
    );
  } else if (activeModule && activeSlide) {
    view = (
      <PresentationView
        course={selectedCourse}
        activeModule={activeModule}
        activeSlide={activeSlide}
        prev={prev}
        next={next}
        onSelect={handleClassSelect}
        onClose={handleBackToSyllabus}
      />
    );
  } else {
    view = null; // el guard de arriba devuelve a SYLLABUS en el siguiente render
  }

  return <>{view}{search}</>;
};

export default App;
