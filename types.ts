export interface Slide {
  id: string;
  title: string;
  contentHtml: string; // HTML content for the slide
  notes?: string; // Teacher notes
}

export interface Module {
  id: string;
  title: string;
  description: string;
  evaluation: string; // e.g., "0%", "10%"
  slides: Slide[];
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