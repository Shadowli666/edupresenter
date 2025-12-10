import { Module } from '../../types';

export const PYTHON_MODULE_13: Module = {
  id: 'py-mod-13',
  title: '13. Programación Orientada a Objetos (POO)',
  description: 'Introducción a la metodología POO: Clases, Objetos, Atributos y Métodos.',
  evaluation: 'Taller Práctico',
  slides: [
    {
      id: 'py13-1',
      title: 'Introducción al Paradigma',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-lg text-gray-700">
            Hasta ahora hemos programado de forma <strong>secuencial</strong> y <strong>estructurada</strong> (funciones). Hoy cambiamos la forma de pensar.
          </p>
          <p class="text-gray-600">
            La <strong>Programación Orientada a Objetos (POO)</strong> intenta modelar el software basándose en cosas del mundo real.
          </p>
          <div class="flex justify-center">
            <div class="bg-indigo-100 p-4 rounded-lg text-indigo-800 font-bold">
              Mundo Real ➡️ Código
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py13-2',
      title: 'POO vs. Estructurada',
      contentHtml: `
        <div class="space-y-6">
          <table class="min-w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th class="px-6 py-3">Estructurada</th>
                <th class="px-6 py-3">Orientada a Objetos</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b">
                <td class="px-6 py-4">Se centra en acciones (verbos).</td>
                <td class="px-6 py-4">Se centra en entidades (sustantivos).</td>
              </tr>
              <tr class="bg-white border-b">
                <td class="px-6 py-4">Datos y funciones separados.</td>
                <td class="px-6 py-4">Datos y funciones encapsulados juntos.</td>
              </tr>
              <tr class="bg-white">
                <td class="px-6 py-4">Difícil de mantener en proyectos grandes.</td>
                <td class="px-6 py-4">Más fácil de mantener y reutilizar.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: 'py13-3',
      title: 'Concepto Clave: La Clase',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-lg text-gray-700">
            Una <strong>Clase</strong> es una plantilla, un molde o un plano. Define cómo serán los objetos, pero no es el objeto en sí.
          </p>
          <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h4 class="font-bold text-yellow-800">Analogía</h4>
            <p class="text-gray-700">El plano de una casa es la <strong>Clase</strong>. No puedes vivir en el plano.</p>
          </div>
          <pre class="bg-gray-800 text-white p-4 rounded-lg text-sm">
class Casa:
    pass
          </pre>
        </div>
      `
    },
    {
      id: 'py13-4',
      title: 'Concepto Clave: El Objeto',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-lg text-gray-700">
            Un <strong>Objeto</strong> es una instancia concreta creada a partir de una clase. Es la "cosa" real que ocupa memoria.
          </p>
          <div class="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 class="font-bold text-green-800">Analogía</h4>
            <p class="text-gray-700">La casa construida en la calle 5 es un <strong>Objeto</strong>. Puedes vivir en ella.</p>
          </div>
          <pre class="bg-gray-800 text-white p-4 rounded-lg text-sm">
mi_casa = Casa()
otra_casa = Casa()
          </pre>
        </div>
      `
    },
    {
      id: 'py13-5',
      title: 'Atributos (Estado)',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Los <strong>Atributos</strong> son las características o datos que describen al objeto. Son variables dentro de la clase.
          </p>
          <ul class="list-disc list-inside space-y-2 text-gray-600">
            <li>Color</li>
            <li>Tamaño</li>
            <li>Marca</li>
            <li>Edad</li>
          </ul>
          <p class="text-sm text-gray-500 italic">En Python, se definen usando <code>self.variable</code>.</p>
        </div>
      `
    },
    {
      id: 'py13-6',
      title: 'Métodos (Comportamiento)',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Los <strong>Métodos</strong> son las acciones que el objeto puede realizar. Son funciones dentro de la clase.
          </p>
          <ul class="list-disc list-inside space-y-2 text-gray-600">
            <li>encender()</li>
            <li>acelerar()</li>
            <li>frenar()</li>
          </ul>
          <pre class="bg-gray-800 text-white p-4 rounded-lg text-sm">
def encender(self):
    print("El motor está en marcha")
          </pre>
        </div>
      `
    },
    {
      id: 'py13-7',
      title: 'El misterio de "self"',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Verás la palabra <code>self</code> en todos los métodos. ¿Qué es?
          </p>
          <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p class="text-blue-900">
              <strong>self</strong> es una referencia al propio objeto actual. Permite que el código sepa a <em>cuál</em> de todas las casas (objetos) nos referimos.
            </p>
          </div>
          <p class="text-sm text-gray-600">Sin <code>self</code>, no podríamos distinguir entre el color de <code>mi_casa</code> y el de <code>otra_casa</code>.</p>
        </div>
      `
    },
    {
      id: 'py13-8',
      title: 'El Constructor (__init__)',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Es un método especial que se ejecuta <strong>automáticamente</strong> al crear un nuevo objeto. Se usa para inicializar los atributos.
          </p>
          <pre class="bg-gray-800 text-white p-4 rounded-lg text-sm">
class Perro:
    def __init__(self, nombre, raza):
        self.nombre = nombre  # Guarda el nombre en el objeto
        self.raza = raza      # Guarda la raza en el objeto
          </pre>
        </div>
      `
    },
    {
      id: 'py13-9',
      title: 'Ejemplo Completo',
      contentHtml: `
        <div class="space-y-6">
          <pre class="bg-gray-800 text-white p-4 rounded-lg text-xs">
class Celular:
    def __init__(self, marca, bateria):
        self.marca = marca
        self.bateria = bateria
    
    def llamar(self, numero):
        if self.bateria > 0:
            print(f"{self.marca} llamando a {numero}...")
            self.bateria -= 1
        else:
            print("Batería agotada")

# Uso
mi_cel = Celular("Samsung", 10)
mi_cel.llamar("555-1234")
print(mi_cel.bateria) # Imprime 9
          </pre>
        </div>
      `
    },
    {
      id: 'py13-10',
      title: 'Quiz Rápido',
      contentHtml: `
        <div class="space-y-6">
          <p class="font-bold text-gray-800">1. ¿Qué es una Clase?</p>
          <ul class="list-none space-y-2 text-gray-600 pl-4">
            <li>a) Un objeto real.</li>
            <li>b) Una función especial.</li>
            <li>c) Una plantilla para crear objetos. ✅</li>
          </ul>
          <p class="font-bold text-gray-800 mt-4">2. ¿Para qué sirve __init__?</p>
          <ul class="list-none space-y-2 text-gray-600 pl-4">
            <li>a) Para borrar el objeto.</li>
            <li>b) Para inicializar atributos al crear el objeto. ✅</li>
            <li>c) Para importar librerías.</li>
          </ul>
        </div>
      `
    },
    {
      id: 'py13-11',
      title: 'Práctica 1: El Estudiante',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h4 class="font-bold text-gray-800 mb-4">Nivel Básico</h4>
            <ol class="list-decimal list-inside space-y-2 text-gray-600">
              <li>Define una clase <code>Estudiante</code>.</li>
              <li>En el <code>__init__</code>, recibe <code>nombre</code> y <code>nota</code>.</li>
              <li>Crea un método <code>aprobo()</code> que retorne <code>True</code> si la nota es >= 10.</li>
              <li>Instancia un estudiante y prueba el método.</li>
            </ol>
          </div>
        </div>
      `
    },
    {
      id: 'py13-12',
      title: 'Práctica 2: Cuenta Bancaria',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h4 class="font-bold text-gray-800 mb-4">Nivel Intermedio</h4>
            <p class="text-gray-600 mb-2">Crea una clase <code>CuentaBancaria</code> con:</p>
            <ul class="list-disc list-inside space-y-1 text-gray-600">
              <li>Atributo <code>saldo</code> (inicia en 0 o lo que se pase).</li>
              <li>Método <code>depositar(cantidad)</code>.</li>
              <li>Método <code>retirar(cantidad)</code> (validar que haya saldo suficiente).</li>
              <li>Método <code>ver_saldo()</code>.</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'py13-13',
      title: 'Errores Comunes',
      contentHtml: `
        <div class="space-y-6">
          <ul class="space-y-4 text-gray-600">
            <li class="flex items-start">
              <span class="text-red-500 font-bold mr-2">❌</span>
              <span>Olvidar el <code>self</code> en los argumentos del método.</span>
            </li>
            <li class="flex items-start">
              <span class="text-red-500 font-bold mr-2">❌</span>
              <span>Intentar acceder a una variable local del <code>__init__</code> en otro método (usar <code>self.variable</code>).</span>
            </li>
            <li class="flex items-start">
              <span class="text-red-500 font-bold mr-2">❌</span>
              <span>Confundir Clase con Objeto (intentar llamar métodos desde la clase sin instanciar).</span>
            </li>
          </ul>
        </div>
      `
    },
    {
      id: 'py13-14',
      title: 'Resumen de la Sesión',
      contentHtml: `
        <div class="space-y-6">
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white p-4 rounded shadow-sm border">
              <h3 class="font-bold text-indigo-600">Clase</h3>
              <p class="text-sm">El molde.</p>
            </div>
            <div class="bg-white p-4 rounded shadow-sm border">
              <h3 class="font-bold text-indigo-600">Objeto</h3>
              <p class="text-sm">La instancia real.</p>
            </div>
            <div class="bg-white p-4 rounded shadow-sm border">
              <h3 class="font-bold text-indigo-600">Atributo</h3>
              <p class="text-sm">Dato (Variable).</p>
            </div>
            <div class="bg-white p-4 rounded shadow-sm border">
              <h3 class="font-bold text-indigo-600">Método</h3>
              <p class="text-sm">Acción (Función).</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'py13-questions',
      title: 'Espacio de Preguntas',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-64 text-center">
          <div class="text-6xl mb-4">🤔</div>
          <h2 class="text-2xl font-bold text-gray-800">¿Alguna duda?</h2>
          <p class="text-gray-600 mt-2">No hay preguntas tontas, solo tontos que no preguntan.</p>
        </div>
      `
    },
    {
      id: 'py13-thanks',
      title: 'Gracias por asistir',
      contentHtml: `
        <div class="flex flex-col items-center justify-center h-64 text-center">
          <div class="text-6xl mb-4">👋</div>
          <h2 class="text-2xl font-bold text-gray-800">¡Nos vemos en la próxima clase!</h2>
          <p class="text-gray-600 mt-2">Tema siguiente: Herencia y Polimorfismo.</p>
        </div>
      `
    }
  ]
};
