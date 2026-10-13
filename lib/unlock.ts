import { useSyncExternalStore } from 'react';
import { AVAILABLE_COURSES } from '../constants';
import { Slide } from '../types';
import { openSealed } from './crypto';

/**
 * Contenido protegido del build: notas del docente (clave 'notas') y evaluaciones
 * (`lock: '<clave>'`). Los códigos se guardan en sessionStorage: se olvidan al
 * cerrar la pestaña (no quedan en un PC compartido).
 */
export const NOTES_KEY = 'notas';
const STORAGE_KEY = 'edupresenter:unlocked';

/** slide.id -> HTML ya descifrado de una evaluación (solo en memoria). */
const openedHtml = new Map<string, string>();
/** slide.id -> notas descifradas. */
const openedNotes = new Map<string, string>();
/** clave -> código que funcionó. */
let codes: Record<string, string> = {};
let version = 0;
const listeners = new Set<() => void>();
const emit = () => { version++; listeners.forEach((l) => l()); };

try { codes = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '{}'); } catch { codes = {}; }
const persist = () => { try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(codes)); } catch { /* sin almacenamiento */ } };

const allSlides = (): Slide[] =>
  AVAILABLE_COURSES.flatMap((c) => c.modules.flatMap((m) => m.slides));

/** ¿Esta evaluación está bloqueada ahora mismo? */
export const isLocked = (slide: Slide): boolean =>
  slide.sealed != null && !openedHtml.has(slide.id);

/** Sin código en el build, el contenido no se publicó y no se puede abrir. */
export const isUnavailable = (slide: Slide): boolean => slide.sealed === null;

/** HTML visible de la diapositiva ('' mientras esté bloqueada). */
export const slideHtml = (slide: Slide): string =>
  slide.sealed === undefined ? slide.contentHtml : openedHtml.get(slide.id) ?? '';

/** Notas del docente: en claro (dev), descifradas, o null si siguen bloqueadas / no hay. */
export const slideNotes = (slide: Slide): string | null =>
  slide.notes ?? openedNotes.get(slide.id) ?? null;

/** ¿Hay notas que se pueden desbloquear con el código? */
export const hasLockedNotes = (slide: Slide): boolean =>
  slide.notesSealed != null && !openedNotes.has(slide.id);

async function openGroup(key: string, code: string): Promise<boolean> {
  let ok = false;
  for (const s of allSlides()) {
    if (key === NOTES_KEY && s.notesSealed) {
      const r = await openSealed(s.notesSealed, code);
      if (r?.notes === undefined) return ok; // mismo salt/llave: si falla una, fallan todas
      openedNotes.set(s.id, r.notes); ok = true;
    } else if (key !== NOTES_KEY && s.lock === key && s.sealed) {
      const r = await openSealed(s.sealed, code);
      if (r?.contentHtml === undefined) return ok;
      openedHtml.set(s.id, r.contentHtml); ok = true;
    }
  }
  return ok;
}

const pendingKeys = (): string[] => {
  const keys = new Set<string>();
  for (const s of allSlides()) {
    if (s.notesSealed && !openedNotes.has(s.id)) keys.add(NOTES_KEY);
    if (s.sealed && s.lock && !openedHtml.has(s.id)) keys.add(s.lock);
  }
  return [...keys];
};

/** Prueba un código contra todo lo que sigue bloqueado. Devuelve las claves que abrió. */
export async function unlockWithCode(code: string): Promise<string[]> {
  const done: string[] = [];
  for (const k of pendingKeys()) {
    if (await openGroup(k, code)) { codes[k] = code; done.push(k); }
  }
  if (done.length) { persist(); emit(); }
  return done;
}

/** Al abrir el sitio: reabre lo ya desbloqueado en esta sesión. Si un código dejó de servir, lo descarta. */
export async function restoreUnlocked(): Promise<void> {
  let changed = false;
  for (const [k, c] of Object.entries(codes)) {
    if (!(await openGroup(k, c))) { delete codes[k]; changed = true; }
  }
  if (changed) persist();
  emit();
}

export function useUnlockVersion(): number {
  return useSyncExternalStore(
    (cb) => { listeners.add(cb); return () => listeners.delete(cb); },
    () => version
  );
}
