import React, { useMemo, useState } from 'react';
import { ArrowLeft, CalendarDays, CheckCircle2, Circle, ExternalLink } from 'lucide-react';
import { Course, Module, Task } from '../types';

interface TasksViewProps {
  courses: Course[];
  /** Si viene, la vista abre filtrada por esa materia. */
  courseId: string | null;
  onBack: () => void;
  onOpenSlide: (courseId: string, moduleId: string, slideId: string) => void;
}

interface Row { course: Course; module: Module; task: Task }

const DONE_KEY = 'edupresenter:tasksDone';
const loadDone = (): Record<string, boolean> => {
  try { return JSON.parse(localStorage.getItem(DONE_KEY) || '{}'); } catch { return {}; }
};

const parse = (iso: string) => new Date(`${iso}T12:00:00`);
const dayFmt = new Intl.DateTimeFormat('es-VE', { weekday: 'long', day: 'numeric', month: 'long' });
const MS_DAY = 86400000;

export const TasksView: React.FC<TasksViewProps> = ({ courses, courseId, onBack, onOpenSlide }) => {
  const [filter, setFilter] = useState<string | null>(courseId);
  const [done, setDone] = useState<Record<string, boolean>>(loadDone);

  const rows = useMemo<Row[]>(() =>
    courses
      .filter((c) => !filter || c.id === filter)
      .flatMap((course) => course.modules.flatMap((module) => (module.tasks ?? []).map((task) => ({ course, module, task })))),
    [courses, filter]
  );

  const toggle = (id: string) => {
    const next = { ...done, [id]: !done[id] };
    setDone(next);
    try { localStorage.setItem(DONE_KEY, JSON.stringify(next)); } catch { /* sin almacenamiento */ }
  };

  const today = new Date(); today.setHours(12, 0, 0, 0);
  const groups: Array<{ title: string; tone: string; rows: Row[] }> = [
    { title: 'Vencidas sin marcar', tone: 'text-red-700', rows: [] },
    { title: 'Esta semana', tone: 'text-amber-700', rows: [] },
    { title: 'Próximas', tone: 'text-blue-700', rows: [] },
    { title: 'Sin fecha asignada', tone: 'text-slate-500', rows: [] },
    { title: 'Completadas', tone: 'text-emerald-700', rows: [] },
  ];
  rows.forEach((r) => {
    const key = `${r.course.id}:${r.task.id}`;
    if (done[key]) return groups[4].rows.push(r);
    if (!r.task.due) return groups[3].rows.push(r);
    const diff = Math.floor((parse(r.task.due).getTime() - today.getTime()) / MS_DAY);
    (diff < 0 ? groups[0] : diff <= 7 ? groups[1] : groups[2]).rows.push(r);
  });
  groups.forEach((g) => g.rows.sort((a, b) => (a.task.due ?? '9').localeCompare(b.task.due ?? '9')));

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 animate-fade-in">
      <div className="sticky top-0 z-30 bg-white/85 backdrop-blur-xl border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 md:px-6 py-3 flex items-center gap-3">
          <button onClick={onBack} className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900" title="Volver">
            <ArrowLeft size={22} />
          </button>
          <div>
            <h1 className="text-lg font-bold text-slate-900 leading-tight">Tareas y evaluaciones</h1>
            <p className="text-xs text-slate-500">Lo que debes entregar y cuándo</p>
          </div>
        </div>
        <div className="max-w-3xl mx-auto px-4 md:px-6 pb-3 flex gap-2 overflow-x-auto">
          {[{ id: null as string | null, title: 'Todas' }, ...courses.map((c) => ({ id: c.id as string | null, title: c.title }))].map((c) => (
            <button
              key={c.id ?? 'all'}
              onClick={() => setFilter(c.id)}
              className={`shrink-0 px-3 py-1 rounded-full text-xs font-bold border transition-colors ${filter === c.id ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-slate-200 text-slate-600 hover:border-blue-300'}`}
            >
              {c.title}
            </button>
          ))}
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 md:px-6 py-8 space-y-10">
        {rows.length === 0 && (
          <div className="text-center bg-white border border-slate-200 rounded-2xl p-10 text-slate-500">
            <CalendarDays className="mx-auto mb-3 text-slate-300" size={40} />
            <p className="font-semibold">Todavía no hay tareas publicadas para esta materia.</p>
          </div>
        )}

        {groups.filter((g) => g.rows.length).map((g) => (
          <section key={g.title}>
            <h2 className={`text-xs font-bold uppercase tracking-widest mb-3 ${g.tone}`}>
              {g.title} · {g.rows.length}
            </h2>
            <ul className="space-y-3">
              {g.rows.map(({ course, module, task }) => {
                const key = `${course.id}:${task.id}`;
                const isDone = !!done[key];
                // Destino del enlace: el slideId de la tarea si es válido, o la
                // primera diapositiva del módulo. Un módulo sin diapositivas no
                // debe romper la vista (module.slides[0].id sería un TypeError).
                const targetSlideId = task.slideId && module.slides.some((s) => s.id === task.slideId)
                  ? task.slideId
                  : module.slides[0]?.id;
                return (
                  <li key={key} className={`bg-white border rounded-2xl p-4 md:p-5 shadow-sm ${isDone ? 'border-emerald-200 opacity-75' : 'border-slate-200'}`}>
                    <div className="flex gap-3">
                      <button
                        onClick={() => toggle(key)}
                        className="mt-0.5 shrink-0 text-slate-300 hover:text-emerald-500"
                        aria-label={isDone ? 'Marcar como pendiente' : 'Marcar como hecha'}
                        title={isDone ? 'Marcar como pendiente' : 'Marcar como hecha'}
                      >
                        {isDone ? <CheckCircle2 className="text-emerald-500" size={24} /> : <Circle size={24} />}
                      </button>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">{course.title}</span>
                          {task.kind === 'evaluacion' && <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-red-50 text-red-700 border border-red-100">Evaluación</span>}
                          {task.corte && <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700">Corte {task.corte}</span>}
                          {task.weight && <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-800">{task.weight}</span>}
                        </div>
                        <h3 className={`font-bold text-slate-900 ${isDone ? 'line-through' : ''}`}>{task.title}</h3>
                        {task.due && (
                          <p className="text-sm text-slate-500 mt-0.5 capitalize flex items-center gap-1.5">
                            <CalendarDays size={14} /> Entrega: {dayFmt.format(parse(task.due))}
                          </p>
                        )}
                        {task.description && <p className="text-sm text-slate-600 mt-2">{task.description}</p>}
                        {task.items && task.items.length > 0 && (
                          <ul className="mt-2 list-disc list-inside text-sm text-slate-600 space-y-0.5">
                            {task.items.map((it, i) => <li key={i}>{it}</li>)}
                          </ul>
                        )}
                        {targetSlideId && (
                          <button
                            onClick={() => onOpenSlide(course.id, module.id, targetSlideId)}
                            className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800"
                          >
                            <ExternalLink size={13} /> Ver en la clase: {module.title}
                          </button>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </main>
    </div>
  );
};
