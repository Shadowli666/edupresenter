import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Lock, Search, X } from 'lucide-react';
import { Course } from '../types';
import { fold, htmlToText } from '../lib/text';
import { isLocked, slideHtml } from '../lib/unlock';

interface SearchOverlayProps {
  courses: Course[];
  onClose: () => void;
  onOpen: (courseId: string, moduleId: string, slideId: string) => void;
}

interface Entry { courseId: string; courseTitle: string; moduleId: string; moduleTitle: string; slideId: string; title: string; text: string; locked: boolean }

/** Búsqueda global (título + contenido) sobre todas las materias. Las evaluaciones bloqueadas solo buscan por título. */
export const SearchOverlay: React.FC<SearchOverlayProps> = ({ courses, onClose, onOpen }) => {
  const [q, setQ] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Al abrir, guarda el elemento con foco para devolvérselo al cerrar.
  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    inputRef.current?.focus();
    return () => { prev?.focus?.(); };
  }, []);

  // Trampa de foco y Escape dentro del diálogo modal.
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;
      const root = dialogRef.current;
      if (!root) return;
      const focusables = Array.from(
        root.querySelectorAll<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
      ).filter((el) => !el.hasAttribute('disabled'));
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey) {
        if (active === first || !root.contains(active)) { e.preventDefault(); last.focus(); }
      } else if (active === last || !root.contains(active)) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  const index = useMemo<Entry[]>(() =>
    courses.flatMap((c) => c.modules.flatMap((m) => m.slides.map((s) => {
      const locked = isLocked(s);
      return {
        courseId: c.id, courseTitle: c.title, moduleId: m.id, moduleTitle: m.title, slideId: s.id,
        title: s.title, text: fold(locked ? '' : htmlToText(slideHtml(s))), locked,
      };
    }))),
    [courses]
  );

  const results = useMemo(() => {
    const terms = fold(q).split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    return index
      .map((e) => {
        const title = fold(e.title);
        const hay = `${title} ${e.text} ${fold(e.moduleTitle)}`;
        if (!terms.every((t) => hay.includes(t))) return null;
        const inTitle = terms.every((t) => title.includes(t));
        const pos = e.text.indexOf(terms[0]);
        const snippet = pos >= 0 ? e.text.slice(Math.max(0, pos - 50), pos + 110) : '';
        return { e, score: inTitle ? 0 : 1, snippet };
      })
      .filter((r): r is NonNullable<typeof r> => !!r)
      .sort((a, b) => a.score - b.score)
      .slice(0, 40);
  }, [q, index]);

  return (
    <div className="fixed inset-0 z-[100] bg-slate-900/50 backdrop-blur-sm flex items-start justify-center p-4 pt-[10vh]" onMouseDown={onClose}>
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden"
        onMouseDown={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Buscar en las clases"
        ref={dialogRef}
      >
        <div className="flex items-center gap-3 px-4 border-b border-slate-200">
          <Search size={20} className="text-slate-500" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar un tema, término o clase…"
            className="flex-1 py-4 text-base outline-none"
          />
          <button onClick={onClose} className="p-1 text-slate-500 hover:text-slate-700" aria-label="Cerrar"><X size={20} /></button>
        </div>
        <ul className="max-h-[60vh] overflow-y-auto divide-y divide-slate-100">
          {q.trim() && results.length === 0 && (
            <li className="px-5 py-8 text-center text-sm text-slate-500">Sin resultados para «{q}».</li>
          )}
          {results.map(({ e, snippet }) => (
            <li key={`${e.courseId}:${e.slideId}`}>
              <button
                onClick={() => { onOpen(e.courseId, e.moduleId, e.slideId); onClose(); }}
                className="w-full text-left px-5 py-3 hover:bg-blue-50"
              >
                <p className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  {e.locked && <Lock size={13} className="text-amber-500" />}{e.title}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">{e.courseTitle} · {e.moduleTitle}</p>
                {snippet && <p className="text-xs text-slate-500 mt-1">…{snippet}…</p>}
              </button>
            </li>
          ))}
          {!q.trim() && (
            <li className="px-5 py-8 text-center text-sm text-slate-500">Escribe para buscar en todas las materias. Atajo: tecla /</li>
          )}
        </ul>
      </div>
    </div>
  );
};
