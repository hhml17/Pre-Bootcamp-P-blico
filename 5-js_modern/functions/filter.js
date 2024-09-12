// Array de palabras
let palabras = ["Hola", "Mundo", "OpenAI", "es", "genial"];

// Función que filtra las palabras que tienen más de 3 letras
let masDeTresLetras = (palabra) => {
    return palabra.length > 3;
};

// Filtrar las palabras que tienen más de 3 letras
let palabrasFiltradas = palabras.filter(masDeTresLetras);

console.log(palabrasFiltradas); // Resultado: ["Hola", "Mundo", "OpenAI", "genial"]

let numeros = [1, 2, 3, 4, 5];

let mayoraTres = numeros.filter((numero) => {
  return numero > 3;
});

console.log(mayoraTres); // Resultado: [4, 5]

let palabras= ["manzana", "plátano", "uva", "naranja"];

let contieneLetra = palabras.filter((palabra) => {
  return palabra.includes("a");
});

console.log(contieneLetra); // Resultado: ["manzana", "plátano", "uva", "naranja"]