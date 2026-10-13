/** Contenido cifrado (AES-GCM) de una diapositiva bloqueada. Solo existe en el build. */
export interface Sealed {
  s: string; // salt PBKDF2 (base64)
  i: string; // iv AES-GCM (base64)
  d: string; // texto cifrado (base64)
}

export interface Slide {
  id: string;
  title: string;
  contentHtml: string; // HTML content for the slide
  /** Notas del docente (respuestas, tiempos, pendientes). En el build salen cifradas: ver `notesSealed`. */
  notes?: string;
  /** Notas cifradas; las genera el build, no se escriben a mano. `null` = sin código (no disponible). */
  notesSealed?: Sealed | null;
  /**
   * Clave del código de desbloqueo (ej. 'eval-corte-1'). En el build el
   * contenido se cifra con el código definido para esa clave.
   */
  lock?: string;
  /** Contenido cifrado; lo genera el build, no se escribe a mano. */
  sealed?: Sealed | null;
}

export interface Task {
  id: string;
  title: string;
  /** Texto plano, sin HTML. */
  description?: string;
  /** Pasos o entregables concretos. */
  items?: string[];
  /** Fecha de entrega, YYYY-MM-DD. */
  due?: string;
  /** Corte al que pertenece (1, 2 o 3). */
  corte?: 1 | 2 | 3;
  /** Ponderación, ej. "10 %" o "0 % (formativa)". */
  weight?: string;
  kind?: 'tarea' | 'evaluacion' | 'lectura';
  /** Diapositiva donde se explica la tarea (id dentro del mismo módulo). */
  slideId?: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  evaluation: string; // e.g., "0%", "10%"
  slides: Slide[];
  tasks?: Task[];
}

export interface Course {
  id: string;
  title: string;
  code: string;
  description: string;
  // Institutional Data
  school?: string;
  campus?: string;
  teacherName?: string;
  teacherEmail?: string;
  term?: string;
  modules: Module[];
}

export enum ViewMode {
  DASHBOARD = 'DASHBOARD',
  PRESENTATION = 'PRESENTATION'
}
