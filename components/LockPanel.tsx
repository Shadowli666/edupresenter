import React, { useState } from 'react';
import { Lock } from 'lucide-react';
import { unlockWithCode, isUnavailable } from '../lib/unlock';
import { Slide } from '../types';

/** Panel que reemplaza a una diapositiva bloqueada (evaluaciones) hasta ingresar el código. */
export const LockPanel: React.FC<{ slide: Slide }> = ({ slide }) => {
  const [code, setCode] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  if (isUnavailable(slide)) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center text-slate-600">
        <Lock className="mx-auto mb-3 text-slate-400" size={32} />
        <p className="font-semibold">Este contenido aún no está disponible.</p>
      </div>
    );
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;
    setBusy(true);
    setError('');
    const opened = await unlockWithCode(code);
    setBusy(false);
    if (!opened.length) setError('Código incorrecto. Revisa con tu docente.');
  };

  return (
    <form onSubmit={submit} className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-8 text-center max-w-xl mx-auto">
      <Lock className="mx-auto mb-3 text-amber-600" size={36} />
      <h3 className="text-xl font-bold text-amber-900 mb-1">Evaluación bloqueada</h3>
      <p className="text-sm text-amber-800 mb-5">
        Tu docente te dará un código el día de la evaluación. Escríbelo para ver el contenido.
      </p>
      <div className="flex gap-2 justify-center">
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          autoComplete="off"
          autoCapitalize="characters"
          spellCheck={false}
          placeholder="Código"
          aria-label="Código de desbloqueo"
          className="flex-1 max-w-xs rounded-lg border border-amber-300 bg-white px-4 py-2 font-mono tracking-widest text-center uppercase focus:outline-none focus:ring-4 focus:ring-amber-200"
        />
        <button
          type="submit"
          disabled={busy}
          className="rounded-lg bg-amber-600 px-5 py-2 font-bold text-white hover:bg-amber-700 disabled:opacity-60"
        >
          {busy ? 'Abriendo…' : 'Desbloquear'}
        </button>
      </div>
      {error && <p role="alert" className="mt-3 text-sm font-semibold text-red-700">{error}</p>}
      <p className="mt-4 text-xs text-amber-700">«{slide.title}»</p>
    </form>
  );
};
