import { Course, Module } from './types';

// Helper function to load and sort modules from a glob import
const loadModules = (modulesGlob: Record<string, unknown>): Module[] => {
  return Object.values(modulesGlob)
    .map((mod: any) => {
      // Extract the first exported object that looks like a Module
      const exportedModule = Object.values(mod).find((val: any) => val && val.id && val.title && val.slides) as Module;
      return exportedModule;
    })
    .filter(Boolean) // Remove undefined if any
    .sort((a, b) => {
      // Extract number from ID for sorting (e.g., "module1" -> 1, "module10" -> 10)
      // Assumes ID format ends with number or contains number
      const numA = parseInt(a.id.replace(/\D/g, ''), 10) || 0;
      const numB = parseInt(b.id.replace(/\D/g, ''), 10) || 0;
      return numA - numB;
    });
};

// Load modules dynamically using Vite's import.meta.glob
const introModules = loadModules(import.meta.glob('./data/intro/*.ts', { eager: true }));
const progModules = loadModules(import.meta.glob('./data/prog/*.ts', { eager: true }));
const pnnModules = loadModules(import.meta.glob('./data/pnn/*.ts', { eager: true }));
const pythonModules = loadModules(import.meta.glob('./data/python/*.ts', { eager: true }));

export const INTRO_TO_CS_COURSE: Course = {
  id: 'intro-cs-001',
  title: 'Introducción a la Computación',
  code: 'INT-101', 
  description: 'Fundamentos de la informática, desde el hardware hasta la metodología de resolución de problemas.',
  teacherName: 'Ing. Luis Felipe Moreno Oropeza',
  teacherEmail: '27758801@psm.edu.ve',
  modules: introModules
};

export const PROGRAMMING_COURSE: Course = {
  id: 'prog-iii-002',
  title: 'Estructuras de Datos',
  code: 'PROG-301',
  description: 'Manejo avanzado de estructuras de datos: Archivos, Memoria Dinámica, Punteros, Arreglos, Listas, Pilas y Colas.',
  teacherName: 'Ing. Luis Felipe Moreno Oropeza',
  teacherEmail: '27758801@psm.edu.ve',
  modules: progModules
};

export const NON_NUMERIC_COURSE: Course = {
  id: 'pnn-ii-003',
  title: 'Programación No Numérica II',
  code: 'PNN-202',
  description: 'Algoritmos avanzados: Árboles, Heaps, Recursividad, Divide y Vencerás, Ordenamiento (Quicksort/Mergesort).',
  teacherName: 'Ing. Luis Felipe Moreno Oropeza',
  teacherEmail: '27758801@psm.edu.ve',
  modules: pnnModules
};

export const PYTHON_COURSE: Course = {
  id: 'python-004',
  title: 'Programación en Python',
  code: 'PY-101',
  description: 'Fundamentos de programación moderna usando Python. Desde sintaxis básica hasta estructuras de control.',
  teacherName: 'Ing. Luis Felipe Moreno Oropeza',
  teacherEmail: '27758801@psm.edu.ve',
  modules: pythonModules
};

// Array for the main menu selection
export const AVAILABLE_COURSES: Course[] = [
  INTRO_TO_CS_COURSE,
  PROGRAMMING_COURSE,
  NON_NUMERIC_COURSE,
  PYTHON_COURSE
];
