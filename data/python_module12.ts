
import { Module } from '../types';

export const PYTHON_MODULE_12: Module = {
  id: 'py-mod-12',
  title: '12. Entrega de Notas (Corte III)',
  description: 'Resumen del rendimiento, evidencias y retroalimentación del tercer corte.',
  evaluation: '100% - Cierre de Corte III',
  slides: [
    {
      id: 'py12-1',
      title: 'Resumen del Corte III',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-slate-700">Temas vistos: arreglos 1D/2D, búsqueda, ordenación, práctica integradora.</p>
          <ul class="list-disc list-inside text-sm text-slate-700">
            <li>Prácticas y mini-proyecto.</li>
            <li>Evaluación escrita.</li>
            <li>Participación y tareas.</li>
          </ul>
        </div>
      `
    },
    {
      id: 'py12-2',
      title: 'Criterios de Evaluación',
      contentHtml: `
        <div class="space-y-4">
          <ul class="list-disc list-inside text-sm text-slate-700">
            <li>Conocimiento conceptual.</li>
            <li>Aplicación práctica.</li>
            <li>Calidad del código (legibilidad y pruebas).</li>
            <li>Trabajo en clase y compromiso.</li>
          </ul>
        </div>
      `
    },
    {
      id: 'py12-3',
      title: 'Evidencias Recopiladas',
      contentHtml: `
        <div class="space-y-4">
          <p class="text-slate-700">Se evaluaron notebooks, scripts, y la práctica integradora con menú.</p>
        </div>
      `
    },
    {
      id: 'py12-4',
      title: 'Resultados y Estadísticas',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-slate-700">Distribución de notas y puntos fuertes/débiles observados.</p>
          <div class="mermaid">
            pie title Rendimiento por criterio
              "Conceptual" : 35
              "Práctico" : 40
              "Código" : 15
              "Participación" : 10
          </div>
        </div>
      `
    },
    {
      id: 'py12-5',
      title: 'Retroalimentación',
      contentHtml: `
        <div class="space-y-4">
          <ul class="list-disc list-inside text-sm text-slate-700">
            <li>Mejorar documentación y pruebas básicas.</li>
            <li>Practicar ordenación y búsqueda sobre casos reales.</li>
            <li>Usar más funciones para modularidad.</li>
          </ul>
        </div>
      `
    },
    {
      id: 'py12-6',
      title: 'Plan de Mejora',
      contentHtml: `
        <div class="space-y-4">
          <ul class="list-disc list-inside text-sm text-slate-700">
            <li>Retos semanales pequeños.</li>
            <li>Revisión de código en parejas.</li>
            <li>Integrar pruebas unitarias simples.</li>
          </ul>
        </div>
      `
    },
    {
      id: 'py12-qa',
      title: 'Preguntas y Respuestas',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center space-y-4">
          <h2 class="text-3xl font-bold text-slate-900">¿Dudas sobre notas?</h2>
          <p class="text-slate-600">Aclaramos criterios y evidencias.</p>
        </div>
      `
    },
    {
      id: 'py12-end',
      title: '¡Gracias!',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-16 text-center">
          <div class="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
            <svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-2">Fin del Módulo 12</h3>
          <p class="text-slate-600">Cierre de corte III.</p>
        </div>
      `
    }
  ]
};
