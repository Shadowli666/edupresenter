import { Module } from '../types';

export const MODULE_8: Module = {
  id: 'mod-8',
  title: '8. Taller de Decisiones (Si/No)',
  description: 'Ejercicios prácticos intensivos sobre lógica condicional simple, doble y anidada.',
  evaluation: '0% - Práctica Formativa',
  slides: [
    {
      id: 's8-1',
      title: 'Resumen: Estructuras de Decisión',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-gray-700">
            Antes de comenzar los ejercicios, recordemos los patrones fundamentales. Un buen programador visualiza el flujo antes de escribir código.
          </p>

          <div class="grid md:grid-cols-3 gap-6">
            <!-- Simple -->
            <div class="bg-blue-50 p-4 rounded-xl border border-blue-200 flex flex-col items-center">
              <h4 class="font-bold text-blue-900 mb-2 text-center">1. Simple (Si)</h4>
              <!-- Mini Diagram -->
              <div class="mermaid">
                flowchart TD
                  A{Cond} -->|Si| B[Accion]
                  A -->|No| C((Fin))
                  B --> C
              </div>
              <div class="bg-white p-2 rounded font-mono text-[10px] border border-blue-100 w-full mt-2">
                <span class="text-purple-600">Si</span> (llueve) <span class="text-purple-600">Entonces</span><br>
                &nbsp;&nbsp;Acción...<br>
                <span class="text-purple-600">FinSi</span>
              </div>
            </div>

            <!-- Double -->
            <div class="bg-orange-50 p-4 rounded-xl border border-orange-200 flex flex-col items-center">
              <h4 class="font-bold text-orange-900 mb-2 text-center">2. Doble (Si-No)</h4>
              <!-- Mini Diagram -->
              <div class="mermaid">
                flowchart TD
                  A{Cond} -->|Si| B[A]
                  A -->|No| C[B]
                  B --> D((Fin))
                  C --> D
              </div>
              <div class="bg-white p-2 rounded font-mono text-[10px] border border-orange-100 w-full mt-2">
                <span class="text-purple-600">Si</span> (ok) <span class="text-purple-600">Entonces</span><br>
                &nbsp;&nbsp;A...<br>
                <span class="text-purple-600">SiNo</span><br>
                &nbsp;&nbsp;B...<br>
                <span class="text-purple-600">FinSi</span>
              </div>
            </div>

            <!-- Nested -->
            <div class="bg-purple-50 p-4 rounded-xl border border-purple-200 flex flex-col items-center">
              <h4 class="font-bold text-purple-900 mb-2 text-center">3. Anidada</h4>
              <!-- Mini Diagram -->
              <div class="mermaid">
                flowchart TD
                  A{Cond1} -->|Si| B{Cond2}
                  B -->|Si| C[Accion]
              </div>
              <div class="bg-white p-2 rounded font-mono text-[10px] border border-purple-100 w-full mt-2">
                <span class="text-purple-600">Si</span> ... <span class="text-purple-600">Entonces</span><br>
                &nbsp;&nbsp;<span class="text-purple-600">Si</span> ... <span class="text-purple-600">Entonces</span><br>
                &nbsp;&nbsp;...<br>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 's8-2',
      title: 'Parte 1: Enunciados (Básicos)',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <p class="text-blue-800 font-bold text-sm">Instrucciones</p>
            <p class="text-blue-700 text-xs">Resuelva los siguientes ejercicios en su cuaderno o editor de texto utilizando pseudocódigo. No mire las respuestas hasta terminar.</p>
          </div>

          <div class="grid grid-cols-1 gap-4">
            
            <div class="bg-white border p-4 rounded-lg shadow-sm">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 block">Ejercicio 1</span>
              <h4 class="font-bold text-slate-800 mb-2">Mayoría de Edad</h4>
              <p class="text-sm text-slate-600">Solicite la edad de una persona. Si es mayor o igual a 18, muestre "Es mayor de edad". En caso contrario, muestre "Es menor de edad".</p>
            </div>

            <div class="bg-white border p-4 rounded-lg shadow-sm">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 block">Ejercicio 2</span>
              <h4 class="font-bold text-slate-800 mb-2">Aprobado o Reprobado</h4>
              <p class="text-sm text-slate-600">Solicite la nota de un estudiante (escala 1-20). Si la nota es mayor o igual a 10, está Aprobado. Si no, está Reprobado.</p>
            </div>

            <div class="bg-white border p-4 rounded-lg shadow-sm">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 block">Ejercicio 3</span>
              <h4 class="font-bold text-slate-800 mb-2">División Segura</h4>
              <p class="text-sm text-slate-600">Solicite dos números (Dividendo y Divisor). Realice la división solo si el Divisor es diferente de cero. Si es cero, muestre "Error: No se puede dividir por 0".</p>
            </div>

            <div class="bg-white border p-4 rounded-lg shadow-sm">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 block">Ejercicio 4</span>
              <h4 class="font-bold text-slate-800 mb-2">Tienda de Zapatos (Descuento)</h4>
              <p class="text-sm text-slate-600">Una tienda ofrece 20% de descuento si la compra supera los $100. Calcule e imprima el total a pagar dado un monto ingresado.</p>
            </div>

          </div>
        </div>
      `
    },
    {
      id: 's8-3',
      title: 'Parte 2: Enunciados (Avanzados)',
      contentHtml: `
        <div class="space-y-6">
          <p class="text-slate-600 mb-4 text-sm">Ejercicios que requieren <strong>Operadores Lógicos (Y, O)</strong> y <strong>Condicionales Anidados</strong>.</p>

          <div class="grid grid-cols-1 gap-4">
            
            <div class="bg-white border p-4 rounded-lg shadow-sm">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 block">Ejercicio 5</span>
              <h4 class="font-bold text-slate-800 mb-2">El Mayor de 3 Números</h4>
              <p class="text-sm text-slate-600">Dados tres números A, B y C, determine cuál es el mayor utilizando operadores lógicos o anidamiento.</p>
            </div>

            <div class="bg-white border p-4 rounded-lg shadow-sm">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 block">Ejercicio 6</span>
              <h4 class="font-bold text-slate-800 mb-2">Categoría de Edad</h4>
              <p class="text-sm text-slate-600">Clasifique a una persona según su edad: < 12 (Niño), 12-17 (Adolescente), 18-59 (Adulto), >= 60 (Adulto Mayor).</p>
            </div>

            <div class="bg-white border p-4 rounded-lg shadow-sm">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 block">Ejercicio 7</span>
              <h4 class="font-bold text-slate-800 mb-2">Sistema de Login</h4>
              <p class="text-sm text-slate-600">Simule un login. Usuario correcto: "admin", Clave correcta: "1234". Solo permitir acceso (Mensaje "Bienvenido") si AMBOS coinciden. Si no, "Acceso Denegado".</p>
            </div>

            <div class="bg-white border p-4 rounded-lg shadow-sm">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 block">Ejercicio 8</span>
              <h4 class="font-bold text-slate-800 mb-2">Calculadora Simple (Menú)</h4>
              <p class="text-sm text-slate-600">Pida 2 números y un carácter de operación ('+', '-'). Realice el cálculo correspondiente. Si el carácter no es válido, muestre error.</p>
            </div>

          </div>
        </div>
      `
    },
    {
      id: 's8-solutions',
      title: 'Soluciones y Diagramas',
      contentHtml: `
        <div class="space-y-6">
          <div class="bg-green-50 p-4 rounded-lg border border-green-200 mb-6 text-center">
             <h3 class="text-green-900 font-bold text-lg">Hoja de Respuestas</h3>
             <p class="text-green-700 text-sm">Compare su lógica con las soluciones propuestas (Código y Flujo).</p>
          </div>

          <div class="grid grid-cols-1 gap-6">
            
            <!-- Sol 1 (Doble) -->
            <div class="border rounded bg-slate-50 p-3 grid md:grid-cols-3 gap-4">
               <div class="md:col-span-2">
                   <strong class="text-xs text-slate-500 block mb-1">1. Mayoría de Edad (Condicional Doble)</strong>
                   <div class="bg-slate-900 text-green-400 p-2 rounded font-mono text-[10px]">
                      Leer edad<br>
                      <span class="text-purple-400">Si</span> edad >= 18 <span class="text-purple-400">Entonces</span><br>
                      &nbsp;&nbsp;Escribir "Mayor"<br>
                      <span class="text-purple-400">SiNo</span><br>
                      &nbsp;&nbsp;Escribir "Menor"<br>
                      <span class="text-purple-400">FinSi</span>
                   </div>
               </div>
               <div class="flex items-center justify-center border-l pl-2 w-full">
                   <div class="mermaid">
                     flowchart TD
                       C{>=18?} -- Si --> A[Mayor]
                       C -- No --> B[Menor]
                   </div>
               </div>
            </div>

            <!-- Sol 3 (Validacion) -->
            <div class="border rounded bg-slate-50 p-3 grid md:grid-cols-3 gap-4">
               <div class="md:col-span-2">
                   <strong class="text-xs text-slate-500 block mb-1">3. División Segura (Validación)</strong>
                   <div class="bg-slate-900 text-green-400 p-2 rounded font-mono text-[10px]">
                      Leer A, B<br>
                      <span class="text-purple-400">Si</span> B != 0 <span class="text-purple-400">Entonces</span><br>
                      &nbsp;&nbsp;Escribir A / B<br>
                      <span class="text-purple-400">SiNo</span><br>
                      &nbsp;&nbsp;Escribir "Error"<br>
                      <span class="text-purple-400">FinSi</span>
                   </div>
               </div>
               <div class="flex items-center justify-center border-l pl-2 w-full">
                   <div class="mermaid">
                     flowchart TD
                       C{B!=0?} -- Si --> A[Dividir]
                       C -- No --> B[Error]
                   </div>
               </div>
            </div>

            <!-- Sol 5 (Logico) -->
            <div class="border rounded bg-slate-50 p-3 grid md:grid-cols-3 gap-4">
               <div class="md:col-span-2">
                   <strong class="text-xs text-slate-500 block mb-1">5. Mayor de 3 (Operadores Lógicos)</strong>
                   <div class="bg-slate-900 text-yellow-400 p-2 rounded font-mono text-[10px]">
                      Leer A, B, C<br>
                      <span class="text-purple-400">Si</span> (A>B) Y (A>C) <span class="text-purple-400">Ent</span> Escribir A<br>
                      <span class="text-purple-400">SiNo Si</span> (B>A) Y (B>C) <span class="text-purple-400">Ent</span> Escribir B<br>
                      <span class="text-purple-400">SiNo</span> Escribir C<br>
                      <span class="text-purple-400">FinSi</span>
                   </div>
               </div>
               <div class="flex items-center justify-center border-l pl-2 w-full">
                   <div class="mermaid">
                     flowchart TD
                       C1{A>B y A>C?} -- Si --> R1[Es A]
                       C1 -- No --> C2{B>A y B>C?}
                       C2 -- Si --> R2[Es B]
                       C2 -- No --> R3[Es C]
                   </div>
               </div>
            </div>

            <!-- Sol 6 (Anidado) -->
            <div class="border rounded bg-slate-50 p-3 grid md:grid-cols-3 gap-4">
               <div class="md:col-span-2">
                   <strong class="text-xs text-slate-500 block mb-1">6. Categorías Edad (Cascada)</strong>
                   <div class="bg-slate-900 text-yellow-400 p-2 rounded font-mono text-[10px]">
                      Leer edad<br>
                      <span class="text-purple-400">Si</span> edad < 12 <span class="text-purple-400">Ent</span> "Niño"<br>
                      <span class="text-purple-400">SiNo Si</span> edad < 18 <span class="text-purple-400">Ent</span> "Adolescente"<br>
                      <span class="text-purple-400">SiNo Si</span> edad < 60 <span class="text-purple-400">Ent</span> "Adulto"<br>
                      <span class="text-purple-400">SiNo</span> "Mayor"<br>
                      <span class="text-purple-400">FinSi</span>
                   </div>
               </div>
               <div class="flex items-center justify-center border-l pl-2 w-full">
                   <div class="mermaid">
                     flowchart TD
                       C1{<12?} -- Si --> R1[Niño]
                       C1 -- No --> C2{<18?}
                       C2 -- Si --> R2[Adol]
                       C2 -- No --> C3{<60?}
                       C3 -- Si --> R3[Adulto]
                       C3 -- No --> R4[Mayor]
                   </div>
               </div>
            </div>

          </div>
        </div>
      `
    },
    {
      id: 's8-end-questions',
      title: '¿Preguntas?',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12">
          <div class="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-6 animate-bounce">
             <span class="text-6xl font-bold select-none">?</span>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-4">Lógica Condicional</h3>
          <p class="text-center text-gray-600 max-w-md">
            Dominar el "Si-Sino" es dominar el 50% de la lógica de programación. ¿Algún ejercicio presentó dificultad?
          </p>
        </div>
      `
    },
    {
      id: 's8-end-thanks',
      title: 'Gracias por su atención',
      contentHtml: `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <h2 class="text-4xl font-bold text-slate-900 mb-8">Fin de la Clase</h2>
          <blockquote class="relative p-8 bg-slate-50 rounded-xl border-l-4 border-purple-500 shadow-sm max-w-2xl">
            <p class="text-xl italic font-medium leading-relaxed text-slate-700 mb-4">
              "Programar es el arte de decirle a otro humano lo que quieres que la computadora haga."
            </p>
            <footer class="flex items-center justify-center gap-2">
              <div class="h-px w-8 bg-slate-300"></div>
              <cite class="not-italic font-bold text-slate-900">Donald Knuth</cite>
            </footer>
          </blockquote>
        </div>
      `
    }
  ]
};