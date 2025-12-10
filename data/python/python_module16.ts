import { Module } from "../../types";

export const python_module16: Module = {
  id: "python_module16",
  title: "Programación en Python - Semana 16",
  description: "Manejo de Archivos y Persistencia",
  evaluation: "Evaluación Continua",
  slides: [
    {
      id: "pm16-s1",
      title: "Manejo de Archivos en Python",
      contentHtml: "<h1>Manejo de Archivos en Python</h1><h2>Lectura, Escritura y Persistencia de Datos</h2>",
    },
    {
      id: "pm16-s2",
      title: "¿Por qué usar archivos?",
      contentHtml: `
        <h2>¿Por qué usar archivos?</h2>
        <p>Hasta ahora, todos los datos de nuestros programas se pierden al cerrar la ejecución (están en RAM).</p>
        <p>Los archivos nos permiten <strong>persistencia</strong>: guardar datos en el disco duro para usarlos después.</p>
        <ul>
            <li>Logs de errores.</li>
            <li>Configuraciones de usuario.</li>
            <li>Bases de datos simples (CSV, JSON).</li>
        </ul>
      `,
    },
    {
      id: "pm16-s3",
      title: "La función open()",
      contentHtml: `
        <h2>La función open()</h2>
        <p>Para trabajar con un archivo, primero debemos abrirlo.</p>
        <pre><code class="language-python">archivo = open("datos.txt", "r")</code></pre>
        <p>El segundo argumento es el <strong>modo</strong>:</p>
        <ul>
            <li><code>'r'</code>: Lectura (Read) - Default. Falla si no existe.</li>
            <li><code>'w'</code>: Escritura (Write) - Crea o sobrescribe.</li>
            <li><code>'a'</code>: Anexar (Append) - Agrega al final.</li>
            <li><code>'x'</code>: Crear - Falla si ya existe.</li>
        </ul>
      `,
    },
    {
      id: "pm16-s4",
      title: "Lectura de Archivos",
      contentHtml: `
        <h2>Lectura de Archivos</h2>
        <p>Métodos principales para leer contenido:</p>
        <pre><code class="language-python">f = open("poema.txt", "r")

# Lee TODO el archivo como un string
contenido = f.read()

# Lee una sola línea
linea = f.readline()

# Lee todas las líneas en una lista
lineas = f.readlines()

f.close() # ¡Importante cerrar!</code></pre>
      `,
    },
    {
      id: "pm16-s5",
      title: "Escritura de Archivos",
      contentHtml: `
        <h2>Escritura de Archivos</h2>
        <p>Usamos <code>write()</code>. Recuerda que el modo 'w' borra el contenido anterior.</p>
        <pre><code class="language-python">f = open("notas.txt", "w")
f.write("Hola Mundo\\n")
f.write("Esta es una nueva línea.")
f.close()</code></pre>
      `,
    },
    {
      id: "pm16-s6",
      title: "Context Managers (with)",
      contentHtml: `
        <h2>Context Managers (with)</h2>
        <p>Es la forma recomendada de trabajar con archivos. Se encarga de cerrar el archivo automáticamente, incluso si ocurre un error.</p>
        <pre><code class="language-python">with open("datos.txt", "r") as f:
    contenido = f.read()
    print(contenido)
# Aquí el archivo ya está cerrado automáticamente</code></pre>
      `,
    },
    {
      id: "pm16-s7",
      title: "Iterando sobre líneas",
      contentHtml: `
        <h2>Iterando sobre líneas</h2>
        <p>La forma más eficiente de leer archivos grandes línea por línea.</p>
        <pre><code class="language-python">with open("libro_gigante.txt", "r") as f:
    for linea in f:
        print(linea.strip()) # strip() quita el salto de línea</code></pre>
        <p>Esto no carga todo el archivo en memoria, solo una línea a la vez.</p>
      `,
    },
    {
      id: "pm16-s8",
      title: "Manejo de Errores",
      contentHtml: `
        <h2>Manejo de Errores</h2>
        <p>Siempre debemos anticipar que el archivo podría no existir o no tener permisos.</p>
        <pre><code class="language-python">try:
    with open("no_existe.txt", "r") as f:
        print(f.read())
except FileNotFoundError:
    print("El archivo no fue encontrado.")
except PermissionError:
    print("No tienes permiso para leer este archivo.")</code></pre>
      `,
    },
    {
      id: "pm16-s9",
      title: "Archivos CSV",
      contentHtml: `
        <h2>Archivos CSV</h2>
        <p>CSV (Comma Separated Values) es un formato común para tablas.</p>
        <pre><code class="language-python">import csv

# Escribir
with open('usuarios.csv', 'w', newline='') as f:
    writer = csv.writer(f)
    writer.writerow(["Nombre", "Edad"])
    writer.writerow(["Ana", 25])

# Leer
with open('usuarios.csv', 'r') as f:
    reader = csv.reader(f)
    for row in reader:
        print(row) # ['Nombre', 'Edad']...</code></pre>
      `,
    },
    {
      id: "pm16-s10",
      title: "Archivos JSON",
      contentHtml: `
        <h2>Archivos JSON</h2>
        <p>JSON es el estándar para intercambio de datos en la web. Python lo soporta nativamente.</p>
        <pre><code class="language-python">import json

datos = {"nombre": "Juan", "hobbies": ["fútbol", "código"]}

# Guardar (Serializar)
with open("data.json", "w") as f:
    json.dump(datos, f)

# Cargar (Deserializar)
with open("data.json", "r") as f:
    datos_cargados = json.load(f)
    print(datos_cargados["hobbies"][0])</code></pre>
      `,
    },
    {
      id: "pm16-s11",
      title: "Rutas de Archivos (os.path)",
      contentHtml: `
        <h2>Rutas de Archivos (os.path)</h2>
        <p>Para manejar rutas de forma compatible entre Windows/Linux/Mac.</p>
        <pre><code class="language-python">import os

ruta = os.path.join("carpeta", "subcarpeta", "archivo.txt")
print(ruta) 
# Linux: carpeta/subcarpeta/archivo.txt
# Windows: carpeta\\subcarpeta\\archivo.txt

if os.path.exists(ruta):
    print("El archivo existe")</code></pre>
      `,
    },
    {
      id: "pm16-s12",
      title: "Ejercicio 1: Diario Personal",
      contentHtml: `
        <h2>Ejercicio 1: Diario Personal</h2>
        <p>Crea un programa que:</p>
        <ol>
            <li>Pregunte al usuario qué quiere escribir hoy.</li>
            <li>Guarde el texto en <code>diario.txt</code> agregando la fecha y hora actual.</li>
            <li>Use el modo 'a' (append) para no borrar entradas anteriores.</li>
        </ol>
      `,
    },
    {
      id: "pm16-s13",
      title: "Solución Ejercicio 1",
      contentHtml: `
        <h2>Solución Ejercicio 1</h2>
        <pre><code class="language-python">import datetime

entrada = input("Querido diario: ")
fecha = datetime.datetime.now()

with open("diario.txt", "a") as f:
    f.write(f"[{fecha}] {entrada}\\n")

print("Guardado.")</code></pre>
      `,
    },
    {
      id: "pm16-s14",
      title: "Ejercicio 2: Contador de Palabras",
      contentHtml: `
        <h2>Ejercicio 2: Contador de Palabras</h2>
        <p>Crea un archivo <code>texto.txt</code> con varias líneas. Luego escribe un script que:</p>
        <ol>
            <li>Lea el archivo.</li>
            <li>Cuente cuántas palabras tiene en total.</li>
            <li>Imprima el resultado.</li>
        </ol>
        <p><em>Pista: usa <code>split()</code> para separar palabras.</em></p>
      `,
    },
    {
      id: "pm16-s15",
      title: "Resumen",
      contentHtml: `
        <h2>Resumen</h2>
        <ul>
            <li><strong>open():</strong> Abre archivos. Usar siempre con <strong>with</strong>.</li>
            <li><strong>Modos:</strong> 'r' (leer), 'w' (escribir/borrar), 'a' (anexar).</li>
            <li><strong>Formatos:</strong> Texto plano (.txt), CSV, JSON.</li>
            <li><strong>Persistencia:</strong> Clave para aplicaciones reales.</li>
        </ul>
      `,
    },
  ],
};
