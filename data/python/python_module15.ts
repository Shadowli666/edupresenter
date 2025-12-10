import { Module } from "../../types";

export const python_module15: Module = {
  id: "python_module15",
  title: "Programación en Python - Semana 15",
  description: "Programación Orientada a Objetos: Polimorfismo",
  evaluation: "Evaluación Continua",
  slides: [
    {
      id: "pm15-s1",
      title: "Polimorfismo en Python",
      contentHtml: "<h1>Polimorfismo en Python</h1><h2>Flexibilidad y Abstracción</h2>",
    },
    {
      id: "pm15-s2",
      title: "¿Qué es el Polimorfismo?",
      contentHtml: `
        <h2>¿Qué es el Polimorfismo?</h2>
        <p>Del griego "muchas formas". En programación, se refiere a la capacidad de diferentes objetos de responder a la misma acción (método) de diferentes maneras.</p>
        <ul>
            <li>Permite escribir código más genérico y flexible.</li>
            <li>No necesitamos saber el tipo exacto del objeto, solo que "sabe hacer" la acción.</li>
        </ul>
      `,
    },
    {
      id: "pm15-s3",
      title: "Polimorfismo en Funciones Integradas",
      contentHtml: `
        <h2>Polimorfismo en Funciones Integradas</h2>
        <p>Ya lo has usado sin saberlo. Por ejemplo, la función <code>len()</code> funciona con muchos tipos de datos.</p>
        <pre><code class="language-python">print(len("Hola"))       # 4 (String)
print(len([1, 2, 3]))    # 3 (Lista)
print(len({"a": 1}))     # 1 (Diccionario)</code></pre>
        <p>Internamente, cada objeto sabe cómo calcular su longitud, pero la interfaz (<code>len()</code>) es la misma.</p>
      `,
    },
    {
      id: "pm15-s4",
      title: "Polimorfismo con Métodos de Clase",
      contentHtml: `
        <h2>Polimorfismo con Métodos de Clase</h2>
        <p>Diferentes clases pueden tener métodos con el mismo nombre.</p>
        <pre><code class="language-python">class Perro:
    def sonido(self):
        return "Guau"

class Gato:
    def sonido(self):
        return "Miau"

def hacer_ruido(animal):
    print(animal.sonido())

hacer_ruido(Perro()) # Guau
hacer_ruido(Gato())  # Miau</code></pre>
      `,
    },
    {
      id: "pm15-s5",
      title: "Polimorfismo y Herencia",
      contentHtml: `
        <h2>Polimorfismo y Herencia</h2>
        <p>Es común usar polimorfismo con una jerarquía de clases, donde las subclases implementan su propia versión de un método abstracto.</p>
        <pre><code class="language-python">class Ave:
    def volar(self):
        print("Algunas aves vuelan")

class Aguila(Ave):
    def volar(self):
        print("El águila vuela alto")

class Pinguino(Ave):
    def volar(self):
        print("El pingüino no puede volar")</code></pre>
      `,
    },
    {
      id: "pm15-s6",
      title: "Duck Typing",
      contentHtml: `
        <h2>Duck Typing</h2>
        <p><em>"Si camina como un pato y grazna como un pato, entonces es un pato."</em></p>
        <p>En Python, no solemos chequear el tipo del objeto (<code>isinstance</code>), sino si tiene el método que necesitamos.</p>
        <pre><code class="language-python">class Coche:
    def arrancar(self):
        print("Motor encendido")

class Persona:
    def arrancar(self):
        print("La persona arranca a correr")

def iniciar(objeto):
    objeto.arrancar() # Funciona para ambos</code></pre>
      `,
    },
    {
      id: "pm15-s7",
      title: "Clases Abstractas (ABC)",
      contentHtml: `
        <h2>Clases Abstractas (ABC)</h2>
        <p>Para forzar que las subclases implementen ciertos métodos, usamos <code>abc</code> (Abstract Base Classes).</p>
        <pre><code class="language-python">from abc import ABC, abstractmethod

class Forma(ABC):
    @abstractmethod
    def area(self):
        pass

# class Error(Forma): pass
# e = Error() # TypeError: Can't instantiate abstract class...</code></pre>
      `,
    },
    {
      id: "pm15-s8",
      title: "Implementando Clases Abstractas",
      contentHtml: `
        <h2>Implementando Clases Abstractas</h2>
        <pre><code class="language-python">class Cuadrado(Forma):
    def __init__(self, lado):
        self.lado = lado
    
    def area(self):
        return self.lado * self.lado

c = Cuadrado(5)
print(c.area()) # 25</code></pre>
      `,
    },
    {
      id: "pm15-s9",
      title: "Ejemplo Real: Sistemas de Pago",
      contentHtml: `
        <h2>Ejemplo Real: Sistemas de Pago</h2>
        <p>Imagina un e-commerce que acepta múltiples formas de pago.</p>
        <pre><code class="language-python">class MetodoPago(ABC):
    @abstractmethod
    def pagar(self, monto):
        pass

class PayPal(MetodoPago):
    def pagar(self, monto):
        print(f"Pagando \${monto} con PayPal")

class Tarjeta(MetodoPago):
    def pagar(self, monto):
        print(f"Pagando \${monto} con Tarjeta de Crédito")</code></pre>
      `,
    },
    {
      id: "pm15-s10",
      title: "Sobrecarga de Operadores",
      contentHtml: `
        <h2>Sobrecarga de Operadores</h2>
        <p>Podemos definir cómo se comportan los operadores (+, -, *, ==) con nuestros objetos usando "Métodos Mágicos".</p>
        <pre><code class="language-python">class Punto:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __add__(self, otro):
        return Punto(self.x + otro.x, self.y + otro.y)
    
    def __str__(self):
        return f"({self.x}, {self.y})"

p1 = Punto(1, 2)
p2 = Punto(3, 4)
print(p1 + p2) # (4, 6)</code></pre>
      `,
    },
    {
      id: "pm15-s11",
      title: "Ejercicio 1: Notificaciones",
      contentHtml: `
        <h2>Ejercicio 1: Notificaciones</h2>
        <p>Crea un sistema de notificaciones:</p>
        <ol>
            <li>Clase abstracta <code>Notificador</code> con método <code>enviar(mensaje)</code>.</li>
            <li>Clase <code>EmailNotificador</code>: imprime "Enviando Email: [mensaje]".</li>
            <li>Clase <code>SMSNotificador</code>: imprime "Enviando SMS: [mensaje]".</li>
            <li>Función <code>alertar_usuarios(notificadores, mensaje)</code> que reciba una lista de objetos y envíe el mensaje a todos.</li>
        </ol>
      `,
    },
    {
      id: "pm15-s12",
      title: "Solución Ejercicio 1",
      contentHtml: `
        <h2>Solución Ejercicio 1</h2>
        <pre><code class="language-python">class Notificador(ABC):
    @abstractmethod
    def enviar(self, mensaje):
        pass

class EmailNotificador(Notificador):
    def enviar(self, mensaje):
        print(f"EMAIL: {mensaje}")

class SMSNotificador(Notificador):
    def enviar(self, mensaje):
        print(f"SMS: {mensaje}")

lista = [EmailNotificador(), SMSNotificador()]
for n in lista:
    n.enviar("Servidor Caído!")</code></pre>
      `,
    },
    {
      id: "pm15-s13",
      title: "Ejercicio 2: Carrito de Compras",
      contentHtml: `
        <h2>Ejercicio 2: Carrito de Compras</h2>
        <p>Implementa <code>__len__</code> en una clase <code>Carrito</code> para que <code>len(carrito)</code> devuelva la cantidad de productos.</p>
        <pre><code class="language-python">class Carrito:
    def __init__(self):
        self.items = []
    
    def agregar(self, item):
        self.items.append(item)
        
    def __len__(self):
        return len(self.items)

c = Carrito()
c.agregar("Manzana")
print(len(c)) # 1</code></pre>
      `,
    },
    {
      id: "pm15-s14",
      title: "Resumen",
      contentHtml: `
        <h2>Resumen</h2>
        <ul>
            <li><strong>Polimorfismo:</strong> Misma interfaz, diferentes implementaciones.</li>
            <li><strong>Duck Typing:</strong> Importa lo que el objeto hace, no lo que es.</li>
            <li><strong>Clases Abstractas:</strong> Definen contratos que las subclases deben cumplir.</li>
            <li><strong>Métodos Mágicos:</strong> Permiten integrar nuestros objetos con la sintaxis nativa de Python.</li>
        </ul>
      `,
    },
  ],
};
