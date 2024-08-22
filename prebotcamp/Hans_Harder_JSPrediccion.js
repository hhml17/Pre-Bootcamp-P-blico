
// Predicción 1
function miEdad() {
   console.log("Tengo: " + 25 + " años");
}

// Llamar a la función
miEdad();

// Predicción 2
function miEdad(edad) {
   console.log("Tengo: " + edad + " años");
}

// Llamar a la función con un argumento
miEdad(25);

// Predicción 3
function restar(primerNumero, segundoNumero) {
   console.log("¡Restemos los números!");
   console.log("primerNumero es:" + primerNumero);
   console.log("segundoNumero es:" + segundoNumero);
   var resultado = primerNumero - segundoNumero;
   console.log(resultado);
}

// Llamar a la función con argumentos
restar(50, 27);
