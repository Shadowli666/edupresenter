




import { Course } from './types';
import { MODULE_1 } from './data/module1';
import { MODULE_2 } from './data/module2';
import { MODULE_3 } from './data/module3';
import { MODULE_4 } from './data/module4';
import { MODULE_5 } from './data/module5';
import { MODULE_6 } from './data/module6';
import { MODULE_7 } from './data/module7';
import { MODULE_8 } from './data/module8';
import { MODULE_9 } from './data/module9';
import { MODULE_10 } from './data/module10';
import { MODULE_11 } from './data/module11';
import { MODULE_12 } from './data/module12';

// Import new course modules
import { PROG_MODULE_1 } from './data/prog_module1';
import { PROG_MODULE_2 } from './data/prog_module2';
import { PROG_MODULE_3 } from './data/prog_module3';
import { PROG_MODULE_4 } from './data/prog_module4';
import { PROG_MODULE_5 } from './data/prog_module5';
import { PROG_MODULE_6 } from './data/prog_module6';
import { PROG_MODULE_7 } from './data/prog_module7';
import { PROG_MODULE_8 } from './data/prog_module8';
import { PROG_MODULE_9 } from './data/prog_module9';
import { PROG_MODULE_10 } from './data/prog_module10';
import { PROG_MODULE_11 } from './data/prog_module11';
import { PROG_MODULE_12 } from './data/prog_module12';

// Import Non-Numerical Programming modules
import { PNN_MODULE_1 } from './data/pnn_module1';
import { PNN_MODULE_2 } from './data/pnn_module2';
import { PNN_MODULE_3 } from './data/pnn_module3';
import { PNN_MODULE_4 } from './data/pnn_module4';
import { PNN_MODULE_5 } from './data/pnn_module5';
import { PNN_MODULE_6 } from './data/pnn_module6';

// Import Python Modules
import { PYTHON_MODULE_1 } from './data/python_module1';
import { PYTHON_MODULE_2 } from './data/python_module2';
import { PYTHON_MODULE_3 } from './data/python_module3';
import { PYTHON_MODULE_4 } from './data/python_module4';
import { PYTHON_MODULE_5 } from './data/python_module5';
import { PYTHON_MODULE_6 } from './data/python_module6';

export const INTRO_TO_CS_COURSE: Course = {
  id: 'intro-cs-001',
  title: 'Introducción a la Computación',
  code: 'INT-101', 
  description: 'Fundamentos de la informática, desde el hardware hasta la metodología de resolución de problemas.',
  teacherName: 'Ing. Luis Felipe Moreno Oropeza',
  teacherEmail: '27758801@psm.edu.ve',
  modules: [
    MODULE_1,
    MODULE_2,
    MODULE_3,
    MODULE_4,
    MODULE_5,
    MODULE_6,
    MODULE_7,
    MODULE_8,
    MODULE_9,
    MODULE_10,
    MODULE_11,
    MODULE_12
  ]
};

export const PROGRAMMING_COURSE: Course = {
  id: 'prog-iii-002',
  title: 'Estructuras de Datos',
  code: 'PROG-301',
  description: 'Manejo avanzado de estructuras de datos: Archivos, Memoria Dinámica, Punteros, Arreglos, Listas, Pilas y Colas.',
  teacherName: 'Ing. Luis Felipe Moreno Oropeza',
  teacherEmail: '27758801@psm.edu.ve',
  modules: [
    PROG_MODULE_1,
    PROG_MODULE_2,
    PROG_MODULE_3,
    PROG_MODULE_4,
    PROG_MODULE_5,
    PROG_MODULE_6,
    PROG_MODULE_7,
    PROG_MODULE_8,
    PROG_MODULE_9,
    PROG_MODULE_10,
    PROG_MODULE_11,
    PROG_MODULE_12
  ]
};

export const NON_NUMERIC_COURSE: Course = {
  id: 'pnn-ii-003',
  title: 'Programación No Numérica II',
  code: 'PNN-202',
  description: 'Algoritmos avanzados: Árboles, Heaps, Recursividad, Divide y Vencerás, Ordenamiento (Quicksort/Mergesort).',
  teacherName: 'Ing. Luis Felipe Moreno Oropeza',
  teacherEmail: '27758801@psm.edu.ve',
  modules: [
    PNN_MODULE_1,
    PNN_MODULE_2,
    PNN_MODULE_3,
    PNN_MODULE_4,
    PNN_MODULE_5,
    PNN_MODULE_6
  ]
};

export const PYTHON_COURSE: Course = {
  id: 'python-004',
  title: 'Programación en Python',
  code: 'PY-101',
  description: 'Fundamentos de programación moderna usando Python. Desde sintaxis básica hasta estructuras de control.',
  teacherName: 'Ing. Luis Felipe Moreno Oropeza',
  teacherEmail: '27758801@psm.edu.ve',
  modules: [
    PYTHON_MODULE_1,
    PYTHON_MODULE_2,
    PYTHON_MODULE_3,
    PYTHON_MODULE_4,
    PYTHON_MODULE_5,
    PYTHON_MODULE_6
  ]
};

// Array for the main menu selection
export const AVAILABLE_COURSES: Course[] = [
  INTRO_TO_CS_COURSE,
  PROGRAMMING_COURSE,
  NON_NUMERIC_COURSE,
  PYTHON_COURSE
];