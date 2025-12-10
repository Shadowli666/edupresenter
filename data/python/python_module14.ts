import { Module } from "../../types";

export const python_module14: Module = {
  id: "python_module14",
  title: "Programación en Python - Semana 14",
  description: "Programación Orientada a Objetos: Herencia",
  evaluation: "Evaluación Continua",
  slides: [
    {
      id: "pm14-s1",
      title: "Herencia en Python",
      contentHtml: "<h1>Herencia en Python</h1><h2>Reutilización y Jerarquía de Clases</h2>",
    },
    {
      id: "pm14-s2",
      title: "¿Qué es la Herencia?",
      contentHtml: `
        <h2>¿Qué es la Herencia?</h2>
        <p>La herencia es un pilar fundamental de la POO que permite crear nuevas clases basadas en clases existentes.</p>
        <ul>
            <li><strong>Clase Padre (Superclase):</strong> La clase original de la que se hereda.</li>
            <li><strong>Clase Hija (Subclase):</strong> La nueva clase que hereda atributos y métodos del padre.</li>
            <li><strong>Analogía Biológica:</strong> Un hijo hereda rasgos de sus padres (color de ojos), pero desarrolla sus propias habilidades (tocar piano).</li>
        </ul>
        <p><strong>Beneficio principal:</strong> Evita la duplicación de código (DRY - Don't Repeat Yourself).</p>
      `,
    },
    {
      id: "pm14-s3",
      title: "Sintaxis Básica",
      contentHtml: `
        <h2>Sintaxis Básica</h2>
        <p>Para heredar, pasamos la clase padre como argumento en la definición de la clase hija.</p>
        <pre><code class="language-python">class Animal:
    def respirar(self):
        print("El animal respira")

# Perro hereda de Animal
class Perro(Animal):
    def ladrar(self):
        print("Guau!")

mi_perro = Perro()
mi_perro.respirar() # Heredado
mi_perro.ladrar()   # Propio</code></pre>
      `,
    },
    {
      id: "pm14-s4",
      title: "Heredando Atributos",
      contentHtml: `
        <h2>Heredando Atributos</h2>
        <p>Si la clase hija no define su propio <code>__init__</code>, usará el del padre automáticamente.</p>
        <pre><code class="language-python">class Vehiculo:
    def __init__(self, marca, modelo):
        self.marca = marca
        self.modelo = modelo

class Auto(Vehiculo):
    pass # No agrega nada nuevo por ahora

mi_auto = Auto("Toyota", "Corolla")
print(mi_auto.marca) # Toyota</code></pre>
      `,
    },
    {
      id: "pm14-s5",
      title: "Sobreescritura de Métodos (Overriding)",
      contentHtml: `
        <h2>Sobreescritura de Métodos (Overriding)</h2>
        <p>Una clase hija puede modificar el comportamiento de un método heredado definiéndolo nuevamente con el mismo nombre.</p>
        <pre><code class="language-python">class Animal:
    def hablar(self):
        print("Haciendo ruido genérico...")

class Gato(Animal):
    def hablar(self):
        print("Miau!")

a = Animal()
g = Gato()
a.hablar() # Haciendo ruido genérico...
g.hablar() # Miau!</code></pre>
      `,
    },
    {
      id: "pm14-s6",
      title: "La función super()",
      contentHtml: `
        <h2>La función super()</h2>
        <p><code>super()</code> permite llamar a métodos de la clase padre desde la clase hija. Es crucial cuando queremos extender la funcionalidad en lugar de reemplazarla totalmente.</p>
        <pre><code class="language-python">class Persona:
    def presentarse(self):
        print("Hola, soy una persona.")

class Estudiante(Persona):
    def presentarse(self):
        super().presentarse() # Llama al padre
        print("Y estudio Python.")

e = Estudiante()
e.presentarse()
# Salida:
# Hola, soy una persona.
# Y estudio Python.</code></pre>
      `,
    },
    {
      id: "pm14-s7",
      title: "Extendiendo __init__ con super()",
      contentHtml: `
        <h2>Extendiendo __init__ con super()</h2>
        <p>Comúnmente usamos <code>super()</code> en el constructor para inicializar los atributos del padre y luego agregar los propios.</p>
        <pre><code class="language-python">class Empleado:
    def __init__(self, nombre, salario):
        self.nombre = nombre
        self.salario = salario

class Gerente(Empleado):
    def __init__(self, nombre, salario, departamento):
        # Inicializamos la parte de Empleado
        super().__init__(nombre, salario)
        # Inicializamos la parte específica de Gerente
        self.departamento = departamento

g = Gerente("Ana", 5000, "Ventas")
print(g.departamento)</code></pre>
      `,
    },
    {
      id: "pm14-s8",
      title: "Ejemplo Práctico: Figuras Geométricas",
      contentHtml: `
        <h2>Ejemplo Práctico: Figuras Geométricas</h2>
        <pre><code class="language-python">class Figura:
    def __init__(self, color):
        self.color = color

    def area(self):
        return 0

class Rectangulo(Figura):
    def __init__(self, color, base, altura):
        super().__init__(color)
        self.base = base
        self.altura = altura

    def area(self):
        return self.base * self.altura

r = Rectangulo("Rojo", 5, 10)
print(f"Color: {r.color}, Área: {r.area()}")</code></pre>
      `,
    },
    {
      id: "pm14-s9",
      title: "Herencia Múltiple",
      contentHtml: `
        <h2>Herencia Múltiple</h2>
        <p>Python permite que una clase herede de múltiples padres. Se usa con cuidado para evitar complejidad.</p>
        <pre><code class="language-python">class Volador:
    def volar(self):
        print("Volando")

class Nadador:
    def nadar(self):
        print("Nadando")

class Pato(Volador, Nadador):
    pass

p = Pato()
p.volar()
p.nadar()</code></pre>
      `,
    },
    {
      id: "pm14-s10",
      title: "Verificando Tipos y Herencia",
      contentHtml: `
        <h2>Verificando Tipos y Herencia</h2>
        <p>Funciones útiles para inspeccionar objetos:</p>
        <ul>
            <li><code>isinstance(obj, Clase)</code>: Devuelve True si el objeto es instancia de la clase o de una subclase.</li>
            <li><code>issubclass(ClaseA, ClaseB)</code>: Devuelve True si ClaseA hereda de ClaseB.</li>
        </ul>
        <pre><code class="language-python">print(isinstance(p, Pato))    # True
print(isinstance(p, Volador)) # True
print(issubclass(Pato, Volador)) # True</code></pre>
      `,
    },
    {
      id: "pm14-s11",
      title: "Ejercicio 1: Sistema de Transporte",
      contentHtml: `
        <h2>Ejercicio 1: Sistema de Transporte</h2>
        <p>Crea una jerarquía de clases:</p>
        <ol>
            <li>Clase base <code>Vehiculo</code> con atributos <code>marca</code> y <code>capacidad</code>.</li>
            <li>Clase <code>Autobus</code> que hereda de <code>Vehiculo</code>.</li>
            <li>Agrega un método <code>tarifa()</code> en <code>Vehiculo</code> que retorne <code>capacidad * 100</code>.</li>
            <li>En <code>Autobus</code>, sobreescribe <code>tarifa()</code> para agregar un 10% extra de mantenimiento.</li>
        </ol>
      `,
    },
    {
      id: "pm14-s12",
      title: "Solución Ejercicio 1",
      contentHtml: `
        <h2>Solución Ejercicio 1</h2>
        <pre><code class="language-python">class Vehiculo:
    def __init__(self, marca, capacidad):
        self.marca = marca
        self.capacidad = capacidad
    
    def tarifa(self):
        return self.capacidad * 100

class Autobus(Vehiculo):
    def tarifa(self):
        monto_base = super().tarifa()
        return monto_base + (monto_base * 0.10)

bus = Autobus("Mercedes", 50)
print(f"Tarifa Autobús: {bus.tarifa()}") # 5000 + 500 = 5500</code></pre>
      `,
    },
    {
      id: "pm14-s13",
      title: "Ejercicio 2: RPG (Juego de Rol)",
      contentHtml: `
        <h2>Ejercicio 2: RPG (Juego de Rol)</h2>
        <p>Diseña clases para un juego:</p>
        <ul>
            <li><code>Personaje</code>: tiene <code>nombre</code>, <code>vida</code> (100) y método <code>atacar(otro)</code>.</li>
            <li><code>Guerrero</code>: hereda de Personaje. Su ataque hace 15 de daño.</li>
            <li><code>Mago</code>: hereda de Personaje. Su ataque hace 10 de daño pero tiene un método <code>curar()</code>.</li>
        </ul>
        <p>Simula una pequeña batalla.</p>
      `,
    },
    {
      id: "pm14-s14",
      title: "Solución Parcial Ejercicio 2",
      contentHtml: `
        <h2>Solución Parcial Ejercicio 2</h2>
        <pre><code class="language-python">class Personaje:
    def __init__(self, nombre):
        self.nombre = nombre
        self.vida = 100
    
    def esta_vivo(self):
        return self.vida > 0

class Guerrero(Personaje):
    def atacar(self, otro):
        print(f"{self.nombre} ataca con espada a {otro.nombre}!")
        otro.vida -= 15

class Mago(Personaje):
    def atacar(self, otro):
        print(f"{self.nombre} lanza hechizo a {otro.nombre}!")
        otro.vida -= 10</code></pre>
      `,
    },
    {
      id: "pm14-s15",
      title: "Resumen",
      contentHtml: `
        <h2>Resumen</h2>
        <ul>
            <li><strong>Herencia:</strong> Permite crear clases especializadas a partir de generales.</li>
            <li><strong>super():</strong> Accede a métodos de la clase padre.</li>
            <li><strong>Overriding:</strong> Modifica comportamientos heredados.</li>
            <li>La herencia promueve la reutilización y organización lógica del código.</li>
        </ul>
      `,
    },
    {
      id: "pm14-s16",
      title: "Próxima Clase: Polimorfismo",
      contentHtml: `
        <h2>Próxima Clase: Polimorfismo</h2>
        <p>Veremos cómo diferentes objetos pueden responder al mismo método de formas distintas, aprovechando la herencia que aprendimos hoy.</p>
      `,
    },
  ],
};
