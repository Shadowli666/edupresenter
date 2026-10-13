import { useSyncExternalStore } from 'react';

const KEY = 'edupresenter:progress';
type Seen = Record<string, string[]>; // moduleId -> ids de diapositivas vistas

let seen: Seen = {};
try { seen = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch { seen = {}; }
let version = 0;
const listeners = new Set<() => void>();

export function markSeen(moduleId: string, slideId: string) {
  const list = seen[moduleId] ?? [];
  if (list.includes(slideId)) return;
  seen = { ...seen, [moduleId]: [...list, slideId] };
  version++;
  try { localStorage.setItem(KEY, JSON.stringify(seen)); } catch { /* sin almacenamiento */ }
  listeners.forEach((l) => l());
}

export function resetModule(moduleId: string) {
  const { [moduleId]: _gone, ...rest } = seen;
  seen = rest;
  version++;
  try { localStorage.setItem(KEY, JSON.stringify(seen)); } catch { /* sin almacenamiento */ }
  listeners.forEach((l) => l());
}

export const wasSeen = (moduleId: string, slideId: string) => !!seen[moduleId]?.includes(slideId);
export const seenCount = (moduleId: string) => seen[moduleId]?.length ?? 0;

export function useProgress(): number {
  return useSyncExternalStore(
    (cb) => { listeners.add(cb); return () => listeners.delete(cb); },
    () => version
  );
}
