//1.Copiar las funciones en un archivo JavaScript.
//2.Simplificar la composición de los strings.
//3.Simplificar escritura de los objetos literales.
//4.Transformar las funciones básicas en funciones flecha.
//5.Crear un repositorio con el nombre ES6-miNombre (nombre de cada uno de ustedes) y subir las soluciones a Github a través de la consola o GitHub Desktop.

const saludar = (nombre) => `hola` +nombre


// Mostrar el resultado por consola
console.log(saludar('Alejandro'));

const multiplicar = (a, b) => resultado = a * b

// Mostrar el resultado por consola
console.log (multiplicar(3, 15))

const crearAlumno = (nombre, apellido, edad, materias) => ({nombre, apellido, edad, materias})

// Mostrar el resultado por consola.
console.log (crearAlumno('Leo', 'Messi', '32', ['TLPA','Base de Datos','Inglés']))

const devolverFecha = (dia, mes, año) => `Hoy es ${dia}-${mes}-${año}` 


// Mostrar el resultado por consola.
console.log (devolverFecha('10','09','2022'))