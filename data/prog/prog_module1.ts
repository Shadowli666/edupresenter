import { Module } from '../types';

export const PROG_MODULE_1: Module = {
  id: 'prog-mod-1',
  title: '1. Datos, Información y Procesamiento',
  description: 'Diferencias fundamentales y tipos de procesamiento de datos.',
  evaluation: '0% - Prueba Diagnóstica',
  slides: [
    {
      id: 'p1-1',
      title: 'Datos vs. Información',
      notes: 'Objetivo: Que todos distingan dato vs. información. La base de todo lo que haremos.',
      contentHtml: `
        <div class="space-y-4">
          <p class="lead text-xl text-gray-600">Para programar eficientemente, primero debemos entender la materia prima con la que trabajamos.</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white border-l-4 border-blue-500 p-6 rounded shadow-sm">
              <h3 class="text-xl font-bold text-blue-900 mb-2">Datos</h3>
              <p class="text-gray-600 text-sm mb-4">Hechos crudos, símbolos o números sin contexto.</p>
              <div class="bg-slate-100 p-3 rounded font-mono text-xs text-slate-600">Ejemplos: 25, "Ana", 20240315</div>
            </div>
            <div class="bg-white border-l-4 border-green-500 p-6 rounded shadow-sm">
              <h3 class="text-xl font-bold text-green-900 mb-2">Información</h3>
              <p class="text-gray-600 text-sm mb-4">Datos procesados y organizados con significado.</p>
              <div class="bg-slate-100 p-3 rounded font-mono text-xs text-slate-600">Ejemplo: "La usuaria Ana (25 años) se registró el 15/03/2024."</div>
            </div>
          </div>
           <div class="text-center pt-2">
             <div class="bg-slate-800 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg inline-block">
                Proceso: Dato + Contexto = Información
             </div>
          </div>
        </div>
      `
    },
    {
      id: 'p1-2-cpp',
      title: 'Ejemplo Práctico en C++',
      notes: 'Mostrar cómo una estructura simple puede contener datos y una función puede darle contexto.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">De Datos a Información con C++</h3>
        <p class="text-gray-600 mb-4">Una estructura puede agrupar nuestros datos. Una función o método les da contexto para convertirlos en información útil.</p>
        <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
          <pre><code class="language-cpp">
#include &lt;iostream&gt;
#include &lt;string&gt;

// DATOS: Una estructura simple para almacenar datos crudos.
struct Usuario {
    std::string nombre;
    int edad;
    std::string fechaRegistro; // YYYYMMDD
};

// PROCESO: Una función que toma los datos y les da formato.
void imprimirInformacion(const Usuario& u) {
    std::string info = "El usuario " + u.nombre + 
                       " tiene " + std::to_string(u.edad) + " años.";
    std::cout &lt;&lt; info &lt;&lt; std::endl;
}

int main() {
    Usuario ana = {"Ana", 25, "20240315"}; // Datos
    imprimirInformacion(ana); // Se genera INFORMACIÓN
    return 0;
}
          </code></pre>
        </div>
      `
    },
    {
      id: 'p1-3-python',
      title: 'Ejemplo Práctico en Python',
      notes: 'Mostrar el mismo concepto en Python, destacando su simplicidad con diccionarios o clases.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">De Datos a Información con Python</h3>
        <p class="text-gray-600 mb-4">Python nos permite manejar datos de forma flexible, por ejemplo, con diccionarios.</p>
        <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
          <pre><code class="language-python">
# DATOS: Un diccionario para almacenar datos crudos.
usuario_datos = {
    "nombre": "Ana",
    "edad": 25,
    "fecha_registro": "20240315"
}

# PROCESO: Una función que formatea los datos.
def generar_informacion(datos):
    # INFORMACIÓN: Se añade contexto a los datos.
    info = f"La usuaria {datos['nombre']} ({datos['edad']} años) se registró el {datos['fecha_registro']}."
    return info

print(generar_informacion(usuario_datos))
          </code></pre>
        </div>
      `
    },
    {
      id: 'p1-4',
      title: 'Ciclo de Vida del Procesamiento de Datos',
      notes: 'Presentar un modelo mental del flujo de datos. Visual y fácil de recordar.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-6 text-center">Flujo Típico de los Datos</h3>
        <div class="flex flex-col md:flex-row justify-around items-center gap-4">
          <div class="text-center">
            <div class="bg-blue-100 text-blue-800 p-4 rounded-full w-24 h-24 flex items-center justify-center mx-auto shadow-md"><b>Entrada</b></div>
            <p class="mt-2 text-sm text-gray-600">Captura de datos<br>(ej. formulario)</p>
          </div>
          <div class="text-2xl text-slate-400 font-mono">&rarr;</div>
          <div class="text-center">
            <div class="bg-indigo-100 text-indigo-800 p-4 rounded-full w-24 h-24 flex items-center justify-center mx-auto shadow-md"><b>Proceso</b></div>
            <p class="mt-2 text-sm text-gray-600">Cálculos, validación<br>y organización</p>
          </div>
          <div class="text-2xl text-slate-400 font-mono">&rarr;</div>
          <div class="text-center">
            <div class="bg-green-100 text-green-800 p-4 rounded-full w-24 h-24 flex items-center justify-center mx-auto shadow-md"><b>Salida</b></div>
            <p class="mt-2 text-sm text-gray-600">Presentación<br>(ej. reporte, pantalla)</p>
          </div>
           <div class="text-2xl text-slate-400 font-mono">&rarr;</div>
          <div class="text-center">
            <div class="bg-yellow-100 text-yellow-800 p-4 rounded-full w-24 h-24 flex items-center justify-center mx-auto shadow-md"><b>Almacenaje</b></div>
            <p class="mt-2 text-sm text-gray-600">Guardado para uso<br>futuro (ej. DB)</p>
          </div>
        </div>
      `
    },
    {
      id: 'p1-5',
      title: 'Tipos de Procesamiento',
      notes: 'Introducción a los diferentes modelos de procesamiento que se detallarán a continuación.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">¿Cómo y Cuándo se Procesan los Datos?</h3>
        <p class="text-gray-700 mb-6">La transformación de datos en información puede ocurrir de distintas maneras, dependiendo de las necesidades del sistema.</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div class="bg-white p-5 border rounded-lg shadow-sm">
            <h4 class="font-bold text-indigo-700 text-lg">Batch</h4>
            <p class="text-sm text-gray-600">Procesamiento por lotes.</p>
          </div>
          <div class="bg-white p-5 border rounded-lg shadow-sm">
            <h4 class="font-bold text-indigo-700 text-lg">Real-Time</h4>
            <p class="text-sm text-gray-600">Procesamiento instantáneo.</p>
          </div>
          <div class="bg-white p-5 border rounded-lg shadow-sm">
            <h4 class="font-bold text-indigo-700 text-lg">Distributed</h4>
            <p class="text-sm text-gray-600">Procesamiento en red.</p>
          </div>
        </div>
      `
    },
    {
      id: 'p1-6-batch',
      title: 'Profundizando: Procesamiento por Lotes (Batch)',
      notes: 'Ejemplo claro de un caso de uso de Batch. El script de Python es conceptual.',
      contentHtml: `
        <h3 class="font-bold text-indigo-700 mb-2 text-xl">Procesamiento por Lotes (Batch)</h3>
        <p class="text-sm text-gray-600 mb-4">Los datos se acumulan y procesan en grupos o "lotes" en momentos planificados. No es instantáneo.</p>
        <p class="text-sm text-gray-600 mb-4"><b>Casos de uso:</b> Generación de nóminas, facturación mensual, reportes nocturnos de ventas.</p>
        <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
          <h4 class="text-gray-400 mb-2">// Pseudocódigo / Python para un reporte simple</h4>
          <pre><code class="language-python">
def generar_reporte_ventas(dia):
    # 1. Acumular datos: Leer todas las ventas del 'dia'.
    ventas = leer_ventas_de_archivo(f"ventas_{dia}.csv")
    
    # 2. Procesar el lote.
    total = 0
    for v in ventas:
        total += v['monto']
        
    # 3. Guardar el resultado.
    guardar_reporte(f"reporte_{dia}.txt", f"Ventas totales: {total}")

# Se ejecuta una vez al final del día.
generar_reporte_ventas("2024-11-28")
          </code></pre>
        </div>
      `
    },
    {
      id: 'p1-7-realtime',
      title: 'Profundizando: Procesamiento en Tiempo Real',
      notes: 'Ejemplo de un caso de uso de Tiempo Real. El código es conceptual.',
      contentHtml: `
        <h3 class="font-bold text-indigo-700 mb-2 text-xl">Procesamiento en Tiempo Real</h3>
        <p class="text-sm text-gray-600 mb-4">Los datos se procesan de forma inmediata (o casi inmediata) al ser recibidos. La respuesta es crítica y afecta la siguiente operación.</p>
        <p class="text-sm text-gray-600 mb-4"><b>Casos de uso:</b> Transacciones en cajeros automáticos (ATMs), reservas de vuelos, sistemas de monitoreo de pacientes.</p>
        <div class="bg-gray-800 text-white p-4 rounded-lg font-mono text-xs overflow-x-auto">
          <h4 class="text-gray-400 mb-2">// Pseudocódigo para reserva de asiento</h4>
          <pre><code class="language-python">
def reservar_asiento(id_vuelo, id_asiento, id_usuario):
    # 1. Recibir datos en tiempo real.
    vuelo = obtener_vuelo(id_vuelo)

    # 2. Procesar inmediatamente.
    if vuelo.asiento_esta_disponible(id_asiento):
        vuelo.marcar_asiento_ocupado(id_asiento, id_usuario)
        guardar_cambios(vuelo)
        # 3. Devolver resultado instantáneo.
        return {"status": "CONFIRMADO", "asiento": id_asiento}
    else:
        return {"status": "RECHAZADO", "mensaje": "Asiento no disponible"}
          </code></pre>
        </div>
      `
    },
     {
      id: 'p1-8-distributed',
      title: 'Profundizando: Procesamiento Distribuido',
      notes: 'Explicación conceptual de procesamiento distribuido. No es necesario un ejemplo de código complejo aquí.',
      contentHtml: `
        <h3 class="font-bold text-indigo-700 mb-2 text-xl">Procesamiento Distribuido</h3>
        <p class="text-sm text-gray-600 mb-4">Un problema de procesamiento grande se divide en tareas más pequeñas que son ejecutadas por múltiples computadoras en una red. Se busca la escalabilidad y tolerancia a fallos.</p>
        <p class="text-sm text-gray-600 mb-4"><b>Ejemplo conceptual: Contar palabras en la web.</b></p>
        <ul class="text-sm text-gray-700 list-disc pl-5 space-y-2">
            <li>Un computador central (Master) envía "páginas web" a muchos computadores (Workers).</li>
            <li>Cada Worker cuenta las palabras en las páginas que recibe (<b>Fase Map</b>).</li>
            <li>Cada Worker envía su resultado de vuelta al Master.</li>
            <li>El Master combina todos los resultados para obtener el total (<b>Fase Reduce</b>).</li>
        </ul>
        <p class="text-xs text-center mt-4 text-gray-500">Este es el principio del modelo <b>MapReduce</b>, fundamental en Big Data.</p>
      `
    },
    {
      id: 'p1-9-practice-questions',
      title: 'Práctica: Diagnóstico',
      notes: 'Revisar conceptos clave con preguntas rápidas.',
      contentHtml: `
        <div class="space-y-6">
          <h3 class="text-lg font-bold text-slate-800 border-b pb-2">Evaluación de Conceptos</h3>
          <div class="space-y-4">
            <details class="group border border-slate-200 rounded-lg bg-white p-4">
              <summary class="cursor-pointer font-medium text-slate-700">1. ¿Un número telefónico en una agenda es Dato o Información?</summary>
              <div class="mt-3 text-sm text-slate-600 pt-3 border-t">
                <p><span class="font-bold text-blue-600">Información.</span> Tiene contexto (a quién pertenece y para qué sirve).</p>
              </div>
            </details>
            <details class="group border border-slate-200 rounded-lg bg-white p-4">
              <summary class="cursor-pointer font-medium text-slate-700">2. ¿Qué tipo de procesamiento usa Spotify para su resumen "Wrapped" anual?</summary>
              <div class="mt-3 text-sm text-slate-600 pt-3 border-t">
                <p><span class="font-bold text-blue-600">Batch.</span> Acumula tus escuchas todo el año y procesa el reporte al final.</p>
              </div>
            </details>
          </div>
        </div>
      `
    },
     {
      id: 'p1-10-code-practice',
      title: 'Práctica: A Programar',
      notes: 'Un ejercicio simple para que apliquen lo aprendido. Deben poder resolverlo en 10-15 mins.',
      contentHtml: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Ejercicio de Programación</h3>
        <p class="text-gray-600 mb-4">Escribe una función en C++ o Python que reciba una lista de "productos" y devuelva un reporte de inventario.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-slate-50 p-4 rounded">
                <h5 class="font-bold text-slate-700">Entrada (Datos):</h5>
                <p class="text-sm mb-2">Una lista de objetos/estructuras, donde cada uno tiene 'nombre' (string), 'cantidad' (int), y 'precio' (float).</p>
                <div class="bg-gray-800 text-white p-2 rounded-lg font-mono text-xs overflow-x-auto">
                    <pre><code class="language-python">
# Ejemplo en Python
[
  {"nombre": "CPU", "cantidad": 10, "precio": 250.0},
  {"nombre": "RAM", "cantidad": 30, "precio": 80.5}
]
                    </code></pre>
                </div>
            </div>
            <div class="bg-blue-50 p-4 rounded">
                <h5 class="font-bold text-blue-800">Salida (Información):</h5>
                <p class="text-sm mb-2">Un string que reporte el valor total del inventario para cada producto.</p>
                 <div class="bg-gray-200 text-black p-2 rounded-lg font-mono text-xs overflow-x-auto">
                    "Valor de CPU: $2500.0\nValor de RAM: $2415.0"
                </div>
            </div>
        </div>
      `
    },
    {
      id: 'p1-end-questions',
      title: '¿Preguntas?',
      notes: 'Espacio para resolver dudas antes de terminar la sesión.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full">
          <div class="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6 animate-bounce">
             <span class="text-6xl font-bold select-none">?</span>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Sesión de Dudas</h3>
        </div>
      `
    },
    {
      id: 'p1-end-thanks',
      title: 'Gracias y Próxima Clase',
      notes: 'Cierre y un adelanto de lo que viene.',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-full text-center">
          <h2 class="text-3xl font-bold text-slate-900 mb-4">Fin del Módulo 1</h2>
          <p class="text-gray-600 text-lg">En la próxima clase, empezaremos a hablar sobre <b>Abstracción de Datos y Tipos de Datos Abstractos (TDA)</b>, la base para construir estructuras de datos complejas.</p>
        </div>
      `
    }
  ]
};
