import { Module } from "../../types";

export const python_module18: Module = {
  id: "python_module18",
  title: "Programación en Python - Semana 18",
  description: "Proyecto Final y Cierre del Curso",
  evaluation: "Proyecto Final",
  slides: [
    {
      id: "pm18-s1",
      title: "Proyecto Final",
      contentHtml: "<h1>Proyecto Final</h1><h2>Integración de Conocimientos</h2>",
    },
    {
      id: "pm18-s2",
      title: "Objetivo del Proyecto",
      contentHtml: `
        <h2>Objetivo del Proyecto</h2>
        <p>Desarrollar una aplicación de consola completa que resuelva un problema real, utilizando:</p>
        <ul>
            <li>Estructuras de control y funciones.</li>
            <li>Programación Orientada a Objetos (Clases, Herencia).</li>
            <li>Manejo de Errores (Try/Except).</li>
            <li>Persistencia de Datos (Archivos o SQLite).</li>
        </ul>
      `,
    },
    {
      id: "pm18-s3",
      title: "Propuesta: Sistema de Gestión Escolar",
      contentHtml: `
        <h2>Propuesta: Sistema de Gestión Escolar</h2>
        <p>Una aplicación para administrar alumnos, cursos y calificaciones.</p>
        <h3>Requerimientos:</h3>
        <ul>
            <li>Registrar nuevos alumnos.</li>
            <li>Crear cursos.</li>
            <li>Inscribir alumnos en cursos.</li>
            <li>Asignar notas.</li>
            <li>Generar reporte de promedios.</li>
        </ul>
      `,
    },
    {
      id: "pm18-s4",
      title: "Diseño de Clases (UML Simplificado)",
      contentHtml: `
        <h2>Diseño de Clases</h2>
        <ul>
            <li><strong>Persona</strong> (Clase Base): nombre, dni.</li>
            <li><strong>Alumno</strong> (Hereda de Persona): legajo, lista_cursos.</li>
            <li><strong>Profesor</strong> (Hereda de Persona): especialidad.</li>
            <li><strong>Curso</strong>: nombre, codigo, lista_alumnos.</li>
            <li><strong>Sistema</strong>: Clase principal que gestiona las listas y el menú.</li>
        </ul>
      `,
    },
    {
      id: "pm18-s5",
      title: "Estructura del Proyecto",
      contentHtml: `
        <h2>Estructura del Proyecto</h2>
        <pre>
proyecto_escolar/
│
├── main.py          # Punto de entrada (Menú)
├── modelos.py       # Definición de Clases
├── base_datos.py    # Funciones de SQLite
└── utilidades.py    # Validaciones, formateo
        </pre>
      `,
    },
    {
      id: "pm18-s6",
      title: "Paso 1: Modelos (modelos.py)",
      contentHtml: `
        <h2>Paso 1: Modelos</h2>
        <pre><code class="language-python">class Persona:
    def __init__(self, nombre, dni):
        self.nombre = nombre
        self.dni = dni

class Alumno(Persona):
    def __init__(self, nombre, dni, legajo):
        super().__init__(nombre, dni)
        self.legajo = legajo
    
    def __str__(self):
        return f"{self.nombre} (Legajo: {self.legajo})"</code></pre>
      `,
    },
    {
      id: "pm18-s7",
      title: "Paso 2: Base de Datos (base_datos.py)",
      contentHtml: `
        <h2>Paso 2: Base de Datos</h2>
        <pre><code class="language-python">import sqlite3

def inicializar_db():
    conn = sqlite3.connect("escuela.db")
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS alumnos
                 (id INTEGER PRIMARY KEY, nombre TEXT, dni TEXT, legajo TEXT)''')
    conn.commit()
    conn.close()

def guardar_alumno(alumno):
    # ... INSERT INTO alumnos ...
    pass</code></pre>
      `,
    },
    {
      id: "pm18-s8",
      title: "Paso 3: Lógica Principal (main.py)",
      contentHtml: `
        <h2>Paso 3: Lógica Principal</h2>
        <pre><code class="language-python">from modelos import Alumno
import base_datos

def menu():
    while True:
        print("1. Agregar Alumno")
        print("2. Salir")
        opcion = input("Opción: ")
        
        if opcion == "1":
            # Pedir datos y guardar
            pass
        elif opcion == "2":
            break</code></pre>
      `,
    },
    {
      id: "pm18-s9",
      title: "Buenas Prácticas",
      contentHtml: `
        <h2>Buenas Prácticas</h2>
        <ul>
            <li><strong>Validación:</strong> No confiar en la entrada del usuario (ej. validar que el DNI sea numérico).</li>
            <li><strong>Modularidad:</strong> No escribir todo el código en un solo archivo.</li>
            <li><strong>Comentarios:</strong> Documentar funciones complejas.</li>
            <li><strong>Git:</strong> Usar control de versiones para ir guardando el progreso.</li>
        </ul>
      `,
    },
    {
      id: "pm18-s10",
      title: "Ideas Adicionales",
      contentHtml: `
        <h2>Ideas Adicionales</h2>
        <p>Si terminas rápido, puedes agregar:</p>
        <ul>
            <li>Exportar reportes a CSV o Excel (pandas).</li>
            <li>Interfaz Gráfica (Tkinter o PyQt).</li>
            <li>Envío de correos electrónicos automáticos.</li>
            <li>Login de usuarios (Admin vs Alumno).</li>
        </ul>
      `,
    },
    {
      id: "pm18-s11",
      title: "Recursos para Seguir Aprendiendo",
      contentHtml: `
        <h2>Recursos para Seguir Aprendiendo</h2>
        <ul>
            <li><strong>Web:</strong> Django, Flask, FastAPI.</li>
            <li><strong>Data Science:</strong> NumPy, Pandas, Matplotlib.</li>
            <li><strong>Automatización:</strong> Selenium, Beautiful Soup.</li>
            <li><strong>Juegos:</strong> Pygame.</li>
        </ul>
      `,
    },
    {
      id: "pm18-s12",
      title: "Cierre del Curso",
      contentHtml: `
        <h2>Cierre del Curso</h2>
        <p>¡Felicitaciones! Has completado el curso de Programación en Python.</p>
        <p>Has pasado de conceptos básicos a construir aplicaciones con bases de datos y objetos.</p>
        <p>La programación es una habilidad práctica: ¡Sigue codificando!</p>
      `,
    },
    {
      id: "pm18-s13",
      title: "Evaluación Final",
      contentHtml: `
        <h2>Evaluación Final</h2>
        <p>Presentación del proyecto funcionando.</p>
        <p>Revisión del código fuente (limpieza y estructura).</p>
        <p>Preguntas teóricas sobre las decisiones de diseño.</p>
      `,
    },
  ],
};
