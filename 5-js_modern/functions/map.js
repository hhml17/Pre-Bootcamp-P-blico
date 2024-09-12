// Array de nombres
let nombres = ["Juan", "María", "Carlos", "Laura", "Ana"];

// Función que devuelve la longitud de cada nombre
let longitudNombre = (nombre) => nombre.length;

// Aplicar la función longitudNombre a cada elemento del array
let longitudes = nombres.map(longitudNombre);

console.log(longitudes); // Resultado: [4, 5, 6, 5, 3]

let numeros = [1, 2, 3, 4, 5];
let doblarNumero = numeros.map(num => num * 2);

console.log(doblarNumero); // Resultado: [2, 4, 6, 8, 10]

let palabras = ["hola", "mundo", "javascript"];
let palabrasMayusculas = palabras.map(palabra => palabra.toUpperCase());

console.log(palabrasMayusculas); // Resultado: ['HOLA', 'MUNDO', 'JAVASCRIPT']

