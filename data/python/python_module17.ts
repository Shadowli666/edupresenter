import { Module } from "../../types";

export const python_module17: Module = {
  id: "python_module17",
  title: "Programación en Python - Semana 17",
  description: "Introducción a Bases de Datos con SQLite",
  evaluation: "Evaluación Continua",
  slides: [
    {
      id: "pm17-s1",
      title: "Bases de Datos en Python",
      contentHtml: "<h1>Bases de Datos en Python</h1><h2>Persistencia Estructurada con SQLite</h2>",
    },
    {
      id: "pm17-s2",
      title: "¿Por qué una Base de Datos?",
      contentHtml: `
        <h2>¿Por qué una Base de Datos?</h2>
        <p>Los archivos de texto son útiles, pero tienen limitaciones:</p>
        <ul>
            <li>Difíciles de buscar (hay que leer todo).</li>
            <li>Difíciles de actualizar (concurrencia).</li>
            <li>No tienen estructura rígida ni validación.</li>
        </ul>
        <p>Una <strong>Base de Datos Relacional (RDBMS)</strong> organiza datos en tablas y permite consultas complejas.</p>
      `,
    },
    {
      id: "pm17-s3",
      title: "SQLite y Python",
      contentHtml: `
        <h2>SQLite y Python</h2>
        <p><strong>SQLite</strong> es una base de datos ligera, sin servidor, que guarda todo en un solo archivo.</p>
        <ul>
            <li>Viene incluida en Python (biblioteca estándar).</li>
            <li>Ideal para aplicaciones de escritorio, móviles y prototipos.</li>
            <li>Usa lenguaje SQL (Structured Query Language).</li>
        </ul>
      `,
    },
    {
      id: "pm17-s4",
      title: "Conexión y Cursor",
      contentHtml: `
        <h2>Conexión y Cursor</h2>
        <p>Pasos básicos para interactuar con SQLite:</p>
        <pre><code class="language-python">import sqlite3

# 1. Conectar (crea el archivo si no existe)
conn = sqlite3.connect('mi_base.db')

# 2. Crear un cursor (el objeto que ejecuta comandos)
cursor = conn.cursor()

# ... operaciones ...

# 3. Cerrar conexión
conn.close()</code></pre>
      `,
    },
    {
      id: "pm17-s5",
      title: "Crear una Tabla (CREATE)",
      contentHtml: `
        <h2>Crear una Tabla (CREATE)</h2>
        <p>Definimos la estructura de nuestros datos.</p>
        <pre><code class="language-python">cursor.execute('''
    CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        edad INTEGER,
        email TEXT UNIQUE
    )
''')
conn.commit() # Guardar cambios estructurales</code></pre>
      `,
    },
    {
      id: "pm17-s6",
      title: "Insertar Datos (INSERT)",
      contentHtml: `
        <h2>Insertar Datos (INSERT)</h2>
        <p>Agregamos filas a la tabla.</p>
        <pre><code class="language-python"># Insertar uno
cursor.execute("INSERT INTO usuarios (nombre, edad, email) VALUES ('Ana', 30, 'ana@mail.com')")

# Insertar varios (recomendado)
usuarios = [
    ('Beto', 25, 'beto@mail.com'),
    ('Carla', 40, 'carla@mail.com')
]
cursor.executemany("INSERT INTO usuarios (nombre, edad, email) VALUES (?, ?, ?)", usuarios)

conn.commit() # ¡Importante!</code></pre>
      `,
    },
    {
      id: "pm17-s7",
      title: "Consultar Datos (SELECT)",
      contentHtml: `
        <h2>Consultar Datos (SELECT)</h2>
        <p>Recuperamos información de la tabla.</p>
        <pre><code class="language-python">cursor.execute("SELECT * FROM usuarios")
todos = cursor.fetchall()

for u in todos:
    print(u) 
    # (1, 'Ana', 30, 'ana@mail.com')...

# Filtrar con WHERE
cursor.execute("SELECT nombre FROM usuarios WHERE edad > 28")
print(cursor.fetchall())</code></pre>
      `,
    },
    {
      id: "pm17-s8",
      title: "Actualizar y Borrar (UPDATE / DELETE)",
      contentHtml: `
        <h2>Actualizar y Borrar (UPDATE / DELETE)</h2>
        <pre><code class="language-python"># Actualizar
cursor.execute("UPDATE usuarios SET edad = 31 WHERE nombre = 'Ana'")

# Borrar
cursor.execute("DELETE FROM usuarios WHERE id = 2")

conn.commit() # Siempre confirmar cambios de escritura</code></pre>
      `,
    },
    {
      id: "pm17-s9",
      title: "Seguridad: Inyección SQL",
      contentHtml: `
        <h2>Seguridad: Inyección SQL</h2>
        <p>Nunca concatenes strings directamente en una consulta SQL. Es vulnerable a ataques.</p>
        <pre><code class="language-python"># ❌ MAL (Inseguro)
nombre = "Ana' OR '1'='1"
cursor.execute(f"SELECT * FROM usuarios WHERE nombre = '{nombre}'")

# ✅ BIEN (Parametrizado)
cursor.execute("SELECT * FROM usuarios WHERE nombre = ?", (nombre,))</code></pre>
        <p>La librería se encarga de "escapar" los caracteres peligrosos.</p>
      `,
    },
    {
      id: "pm17-s10",
      title: "Tipos de Datos en SQLite",
      contentHtml: `
        <h2>Tipos de Datos en SQLite</h2>
        <p>SQLite es flexible, pero usa principalmente 5 tipos:</p>
        <ul>
            <li><strong>NULL:</strong> Valor nulo.</li>
            <li><strong>INTEGER:</strong> Entero con signo.</li>
            <li><strong>REAL:</strong> Número de punto flotante.</li>
            <li><strong>TEXT:</strong> Cadena de texto (UTF-8).</li>
            <li><strong>BLOB:</strong> Datos binarios (imágenes, archivos).</li>
        </ul>
      `,
    },
    {
      id: "pm17-s11",
      title: "Ejercicio: Inventario",
      contentHtml: `
        <h2>Ejercicio: Inventario</h2>
        <p>Crea un script que gestione un inventario de productos:</p>
        <ol>
            <li>Tabla <code>productos</code> (id, nombre, precio, stock).</li>
            <li>Función <code>agregar_producto(nombre, precio, stock)</code>.</li>
            <li>Función <code>ver_productos()</code>.</li>
            <li>Función <code>actualizar_stock(id, nuevo_stock)</code>.</li>
        </ol>
      `,
    },
    {
      id: "pm17-s12",
      title: "Solución Parcial (Setup)",
      contentHtml: `
        <h2>Solución Parcial (Setup)</h2>
        <pre><code class="language-python">import sqlite3

def conectar():
    return sqlite3.connect("inventario.db")

def crear_tabla():
    conn = conectar()
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS productos 
                 (id INTEGER PRIMARY KEY, nombre TEXT, precio REAL, stock INTEGER)''')
    conn.commit()
    conn.close()

crear_tabla()</code></pre>
      `,
    },
    {
      id: "pm17-s13",
      title: "Solución Parcial (Funciones)",
      contentHtml: `
        <h2>Solución Parcial (Funciones)</h2>
        <pre><code class="language-python">def agregar_producto(nombre, precio, stock):
    conn = conectar()
    conn.cursor().execute("INSERT INTO productos (nombre, precio, stock) VALUES (?, ?, ?)", 
                          (nombre, precio, stock))
    conn.commit()
    conn.close()

def ver_productos():
    conn = conectar()
    filas = conn.cursor().execute("SELECT * FROM productos").fetchall()
    conn.close()
    for f in filas: print(f)</code></pre>
      `,
    },
    {
      id: "pm17-s14",
      title: "Resumen",
      contentHtml: `
        <h2>Resumen</h2>
        <ul>
            <li><strong>SQLite:</strong> Base de datos relacional ligera y potente.</li>
            <li><strong>SQL:</strong> Lenguaje estándar (SELECT, INSERT, UPDATE, DELETE).</li>
            <li><strong>Cursor:</strong> Objeto para ejecutar comandos y recorrer resultados.</li>
            <li><strong>Seguridad:</strong> Usar siempre consultas parametrizadas (<code>?</code>).</li>
        </ul>
      `,
    },
    {
      id: "pm17-s15",
      title: "Próxima Clase: Proyecto Final",
      contentHtml: `
        <h2>Próxima Clase: Proyecto Final</h2>
        <p>Aplicaremos todo lo aprendido (POO, Archivos, BD) para construir una aplicación completa.</p>
      `,
    },
  ],
};
