import React, { useState } from 'react';
import { Lock, StickyNote, X } from 'lucide-react';
import { Slide } from '../types';
import { hasLockedNotes, slideNotes, unlockWithCode, useUnlockVersion } from '../lib/unlock';

/**
 * Notas del docente de la diapositiva. En el sitio publicado están cifradas:
 * se abren con el código de la clave 'notas' (ver AGENTS.md). En `npm run dev`
 * aparecen directamente.
 */
export const NotesPanel: React.FC<{ slide: Slide }> = ({ slide }) => {
  useUnlockVersion();
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const notes = slideNotes(slide);
  const locked = hasLockedNotes(slide);
  if (!notes && !locked) return null;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const opened = await unlockWithCode(code);
    if (!opened.length) setError('Código incorrecto.');
    else setCode('');
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-amber-50 text-slate-600 hover:text-amber-700 rounded-full text-sm font-medium transition-colors border border-slate-200 hover:border-amber-200"
        title="Notas del docente"
        aria-expanded={open}
      >
        {notes ? <StickyNote size={16} /> : <Lock size={16} />}
        <span className="hidden sm:inline">Notas</span>
      </button>

      {open && (
        <aside
          className="fixed right-4 top-20 z-[60] w-[min(26rem,calc(100vw-2rem))] max-h-[70vh] overflow-y-auto rounded-2xl border border-amber-200 bg-amber-50 p-5 shadow-2xl"
          aria-label="Notas del docente"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-amber-900 text-sm uppercase tracking-wider">Notas del docente</h3>
            <button onClick={() => setOpen(false)} aria-label="Cerrar notas" className="text-amber-700 hover:text-amber-900"><X size={18} /></button>
          </div>
          {notes ? (
            <p className="text-sm text-amber-950 whitespace-pre-wrap leading-relaxed">{notes}</p>
          ) : (
            <form onSubmit={submit} className="space-y-3">
              <p className="text-sm text-amber-900">Las notas están protegidas. Escribe el código del docente.</p>
              <input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                autoComplete="off"
                spellCheck={false}
                aria-label="Código de las notas"
                className="w-full rounded-lg border border-amber-300 bg-white px-3 py-2 font-mono tracking-widest uppercase focus:outline-none focus:ring-4 focus:ring-amber-200"
              />
              <button type="submit" className="w-full rounded-lg bg-amber-600 py-2 font-bold text-white hover:bg-amber-700">Abrir notas</button>
              {error && <p role="alert" className="text-sm font-semibold text-red-700">{error}</p>}
            </form>
          )}
        </aside>
      )}
    </>
  );
};
