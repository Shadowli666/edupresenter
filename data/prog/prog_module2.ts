
import { Module } from '../../types';

export const PROG_MODULE_2: Module = {
  id: 'prog-mod-2',
  title: '2. Archivos y Organización',
  description: 'Concepto, componentes y tipos de archivos.',
  evaluation: '0% - Ejercicio Teórico/Práctico',
  slides: [
    {
      id: 'p2-1',
      title: 'Concepto de Archivo',
      notes: 'Entender qué es un archivo desde la perspectiva de un programador: una secuencia de bytes.',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-xl text-gray-700">Un <strong>Archivo</strong> es una colección de información relacionada que se almacena de forma persistente en un dispositivo de almacenamiento secundario (Disco Duro, SSD).</p>
          <p class="text-gray-600">Para nosotros, es una <strong>secuencia de bytes</strong> que podemos leer y escribir.</p>
          <h4 class="font-bold text-lg text-slate-800 mt-4">Componentes Básicos</h4>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-amber-50 p-4 rounded border text-center"><span class="block font-bold text-amber-800">Nombre y Extensión</span><span class="text-xs text-amber-700"><code>reporte.txt</code></span></div>
            <div class="bg-amber-50 p-4 rounded border text-center"><span class="block font-bold text-amber-800">Contenido</span><span class="text-xs text-amber-700">Los datos (bytes) dentro del archivo</span></div>
            <div class="bg-amber-50 p-4 rounded border text-center"><span class="block font-bold text-amber-800">Metadatos</span><span class="text-xs text-amber-700">Tamaño, fecha de creación, permisos</span></div>
          </div>
        </div>
      `
    },
    {
      id: 'p2-2',
      title: 'Tipos de Archivos: Texto vs. Binario',
      notes: 'Distinción fundamental que afecta cómo interactuamos con los archivos.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8">
          <div class="border rounded-xl p-6 shadow-sm bg-white">
            <h3 class="text-lg font-bold text-slate-800 mb-3">Archivos de Texto</h3>
            <p class="text-sm text-gray-600 mb-4">Contienen solo caracteres legibles por humanos (ASCII, UTF-8). Se organizan en líneas.</p>
            <ul class="list-disc list-inside text-xs text-gray-500 bg-slate-50 p-3 rounded">
              <li><b>Ejemplos:</b> <code>.txt</code>, <code>.py</code>, <code>.cpp</code>, <code>.html</code>, <code>.csv</code></li>
              <li><b>Ventaja:</b> Fáciles de leer y editar por personas.</li>
              <li><b>Desventaja:</b> Pueden ser ineficientes para datos numéricos complejos.</li>
            </ul>
          </div>
          <div class="border rounded-xl p-6 shadow-sm bg-white">
            <h3 class="text-lg font-bold text-slate-800 mb-3">Archivos Binarios</h3>
            <p class="text-sm text-gray-600 mb-4">Contienen cualquier tipo de dato (imágenes, ejecutables, objetos) codificado en bytes. No son directamente legibles.</p>
            <ul class="list-disc list-inside text-xs text-gray-500 bg-slate-50 p-3 rounded">
              <li><b>Ejemplos:</b> <code>.jpg</code>, <code>.exe</code>, <code>.mp3</code>, <code>.dat</code></li>
              <li><b>Ventaja:</b> Compactos y eficientes. Almacenan datos complejos de forma nativa.</li>
              <li><b>Desventaja:</b> Requieren un programa específico para ser interpretados.</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'p2-3',
      title: 'Operaciones Fundamentales con Archivos',
      notes: 'El ciclo de vida de la interacción con un archivo.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-6 text-center">El Ciclo de Vida de un Archivo</h3>
        <div class="flex justify-around items-center gap-4 text-center">
          <div class="step">
            <div class="bg-blue-100 text-blue-800 p-4 rounded-lg shadow-md"><b>1. Abrir (Open)</b></div>
            <p class="mt-2 text-sm text-gray-600">Se establece una conexión. Se especifica el modo (lectura, escritura).</p>
          </div>
          <div class="text-2xl text-slate-400">&rarr;</div>
          <div class="step">
            <div class="bg-indigo-100 text-indigo-800 p-4 rounded-lg shadow-md"><b>2. Leer / Escribir</b></div>
            <p class="mt-2 text-sm text-gray-600">Se transfieren datos entre el programa y el archivo.</p>
          </div>
          <div class="text-2xl text-slate-400">&rarr;</div>
          <div class="step">
            <div class="bg-red-100 text-red-800 p-4 rounded-lg shadow-md"><b>3. Cerrar (Close)</b></div>
            <p class="mt-2 text-sm text-gray-600">Se rompe la conexión y se guardan los cambios. ¡Paso crucial!</p>
          </div>
        </div>
      `
    },
    {
      id: 'p2-4-python-write',
      title: 'Práctica: Escribir Archivo de Texto (Python)',
      notes: 'Ejemplo de escritura en Python. Destacar la simplicidad de "with open".',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Escribiendo un Log en Python</h3>
        <p class="text-gray-600 mb-4">Vamos a crear un archivo <code>log.txt</code> y escribir algunas líneas. El modo <code>'w'</code> (write) sobreescribe el archivo si existe.</p>
        <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
          <pre><code class="language-python">
# El 'with' se encarga de cerrar el archivo automáticamente
with open('log.txt', 'w') as f:
    f.write('Inicio de sesión del sistema\\n')
    f.write('Usuario "admin" conectado.\\n')
    f.write('Proceso #1 terminado.\\n')

# Modo 'a' (append) para añadir al final sin borrar lo anterior
with open('log.txt', 'a') as f:
    f.write('Usuario "guest" conectado.\\n')

print("Archivo 'log.txt' creado y actualizado.")
          </code></pre>
        </div>
      `
    },
    {
      id: 'p2-5-python-read',
      title: 'Práctica: Leer Archivo de Texto (Python)',
      notes: 'Ejemplo de lectura. Mostrar cómo iterar sobre el archivo.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Leyendo el Log en Python</h3>
        <p class="text-gray-600 mb-4">Leemos el contenido del archivo <code>log.txt</code> que creamos. El modo <code>'r'</code> (read) es el predeterminado.</p>
        <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
          <pre><code class="language-python">
try:
    with open('log.txt', 'r') as f:
        print("--- Contenido completo ---")
        # .read() lee todo el archivo a un string
        # print(f.read()) 
        
        # Es mejor leer línea por línea para archivos grandes
        f.seek(0) # Volvemos al inicio
        print("--- Leyendo línea por línea ---")
        for linea in f:
            print(linea.strip()) # .strip() quita saltos de línea

except FileNotFoundError:
    print("El archivo no existe. Ejecuta primero el script de escritura.")

          </code></pre>
        </div>
      `
    },
    {
      id: 'p2-6-cpp-write',
      title: 'Práctica: Escribir Archivo de Texto (C++)',
      notes: 'Ejemplo de escritura en C++. Explicar fstream y la necesidad de cerrar explícitamente.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Escribiendo un Log en C++</h3>
        <p class="text-gray-600 mb-4">Usamos la librería <code>&lt;fstream&gt;</code>. <code>std::ofstream</code> es para escribir (output).</p>
        <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
          <pre><code class="language-cpp">
#include &lt;iostream&gt;
#include &lt;fstream&gt;
#include &lt;string&gt;

int main() {
    // std::ofstream abre en modo escritura por defecto
    std::ofstream archivo_salida("log_cpp.txt");

    if (archivo_salida.is_open()) {
        archivo_salida &lt;&lt; "Inicio de sesión del sistema\\n";
        archivo_salida &lt;&lt; "Usuario \\"admin\\" conectado.\\n";
        archivo_salida.close(); // Importante cerrar el archivo
        std::cout &lt;&lt; "Archivo 'log_cpp.txt' creado.\\n";
    } else {
        std::cerr &lt;&lt; "No se pudo abrir el archivo para escritura.\\n";
    }
    return 0;
}
          </code></pre>
        </div>
      `
    },
    {
      id: 'p2-7-cpp-read',
      title: 'Práctica: Leer Archivo de Texto (C++)',
      notes: 'Ejemplo de lectura en C++. Mostrar el bucle con getline.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Leyendo el Log en C++</h3>
        <p class="text-gray-600 mb-4">Usamos <code>std::ifstream</code> para leer (input). Leemos el archivo línea por línea.</p>
        <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
          <pre><code class="language-cpp">
#include &lt;iostream&gt;
#include &lt;fstream&gt;
#include &lt;string&gt;

int main() {
    std::ifstream archivo_entrada("log_cpp.txt");
    std::string linea;

    if (archivo_entrada.is_open()) {
        std::cout &lt;&lt; "--- Contenido de log_cpp.txt ---\\n";
        while (getline(archivo_entrada, linea)) {
            std::cout &lt;&lt; linea &lt;&lt; '\\n';
        }
        archivo_entrada.close();
    } else {
        std::cerr &lt;&lt; "No se pudo abrir el archivo para lectura.\\n";
    }
    return 0;
}
          </code></pre>
        </div>
      `
    },
    {
      id: 'p2-8',
      title: 'Organización y Acceso a Archivos',
      notes: 'Repasar los métodos de acceso como preámbulo al acceso aleatorio.',
      contentHtml: `
        <div class="grid md:grid-cols-2 gap-8">
          <div class="border rounded-xl p-6 shadow-sm bg-white">
            <h3 class="text-lg font-bold text-slate-800 mb-3">Acceso Secuencial</h3>
            <p class="text-sm text-gray-600">Para leer un dato, se debe recorrer todo lo anterior. Como un cassette. Ideal para archivos de texto procesados de principio a fin.</p>
          </div>
          <div class="border rounded-xl p-6 shadow-sm bg-white">
            <h3 class="text-lg font-bold text-slate-800 mb-3">Acceso Aleatorio (Directo)</h3>
            <p class="text-sm text-gray-600">Se puede saltar a cualquier parte del archivo directamente. Como un CD. Requiere que los datos tengan un tamaño fijo y predecible (típico de archivos binarios).</p>
          </div>
        </div>
      `
    },
    {
      id: 'p2-9-random-access',
      title: 'Ejemplo: Acceso Aleatorio',
      notes: 'Ejemplo conceptual de acceso aleatorio. El código es pseudo-código para no complicar con implementación binaria todavía.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Caso: Base de Datos de Pacientes</h3>
        <p class="text-gray-600 mb-4">Imagina un archivo binario donde cada paciente ocupa exactamente 256 bytes (registro de tamaño fijo).</p>
        <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
          <h4 class="text-gray-400 mb-2">// Pseudocódigo para buscar un paciente por ID</h4>
          <pre><code class="language-python">
TAMANIO_REGISTRO = 256 # bytes

def buscar_paciente(id_paciente):
    # 1. Abrir archivo en modo binario ('rb')
    archivo = open('pacientes.dat', 'rb')
    
    # 2. Calcular la posición
    # Si los IDs son 0, 1, 2..., la posición es ID * tamaño
    posicion = (id_paciente - 1) * TAMANIO_REGISTRO
    
    # 3. Saltar directamente a la posición (seek)
    archivo.seek(posicion)
    
    # 4. Leer los datos del registro
    datos_paciente = archivo.read(TAMANIO_REGISTRO)
    
    archivo.close()
    return decodificar(datos_paciente)

# Obtenemos el paciente 1500 sin leer los 1499 anteriores.
paciente = buscar_paciente(1500)
          </code></pre>
        </div>
      `
    },
    {
      id: 'p2-10-conceptual-practice',
      title: 'Práctica: Diseño de Sistema',
      notes: 'Ejercicio para pensar en la mejor estrategia de archivos.',
      contentHtml: `
        <div class="bg-white border rounded-lg p-6">
          <h4 class="font-bold text-slate-800 mb-4">Caso de Estudio: Configuración de un Videojuego</h4>
          <p class="text-sm text-slate-600 mb-4">Necesitas guardar la configuración de un jugador: volumen (0-100), dificultad ('fácil', 'normal', 'difícil'), y nombre de usuario. Estos datos se leen al iniciar el juego y se guardan al cambiar las opciones.</p>
          <div class="bg-slate-50 p-4 rounded border">
            <p class="text-sm font-bold text-slate-700 mb-2">Preguntas:</p>
            <ul class="text-sm list-disc pl-5 text-gray-700">
              <li>¿Usarías un archivo de texto o binario? ¿Por qué?</li>
              <li>¿Cómo organizarías los datos dentro del archivo? (ej. JSON, CSV, formato propio)</li>
            </ul>
            <details class="group mt-3">
              <summary class="text-xs text-blue-600 cursor-pointer">Ver Pistas</summary>
              <div class="mt-2 text-sm text-green-700 p-3 rounded">
                Un archivo de texto (quizás en formato JSON o similar) es ideal aquí. Es legible, flexible si añades más opciones en el futuro, y los datos son pequeños, por lo que la eficiencia no es la máxima prioridad.
              </div>
            </details>
          </div>
        </div>
      `
    },
    {
      id: 'p2-11-code-practice',
      title: 'Práctica: A Programar',
      notes: 'Un ejercicio simple de escritura y lectura para afianzar conceptos.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Ejercicio: Mini Agenda Telefónica</h3>
        <p class="text-gray-600 mb-4">Escribe un programa en C++ o Python que haga lo siguiente:</p>
        <ul class="list-decimal pl-5 space-y-2 text-gray-700 mb-4">
          <li>Pida al usuario un nombre y un número de teléfono.</li>
          <li>Añada el contacto a un archivo llamado <code>agenda.txt</code> en el formato <code>nombre,telefono</code>. Cada contacto debe estar en una nueva línea.</li>
          <li>Después de añadir, debe leer e imprimir todos los contactos guardados en <code>agenda.txt</code>.</li>
        </ul>
        <p class="text-sm text-gray-500"><b>Reto extra:</b> Evita añadir contactos duplicados (mismo nombre).</p>
      `
    },
    {
      id: 'p2-end-questions',
      title: '¿Preguntas?',
      notes: 'Espacio para dudas.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full">
          <h3 class="text-2xl font-bold text-slate-900 mb-4">¿Dudas sobre Lectura, Escritura o Acceso?</h3>
        </div>
      `
    },
    {
      id: 'p2-end-thanks',
      title: 'Gracias y Próxima Clase',
      notes: 'Cierre y adelanto.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center">
          <h2 class="text-3xl font-bold text-slate-900 mb-4">Fin del Módulo 2</h2>
          <p class="text-gray-600 text-lg">En la próxima clase, profundizaremos en el concepto de <b>Registros</b> y cómo agrupar datos de manera estructurada dentro de los archivos, un paso clave hacia las bases de datos.</p>
        </div>
      `
    }
  ]
}
