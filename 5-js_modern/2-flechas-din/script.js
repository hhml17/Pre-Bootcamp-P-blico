//Ejercicio 1: Conversor de Temperatura
const convertirCelsiusAFahrenheit = celsius => (celsius * 9/5) + 32;

console.log(convertirCelsiusAFahrenheit(0)); // 32
console.log(convertirCelsiusAFahrenheit(25)); // 77

//Ejercicio 2: Generador de Mensajes Personalizados

const mensajePersonalizado = (nombre, edad) => `Hola ${nombre}, tienes ${edad} años de edad`;

console.log(mensajePersonalizado("Juan", 30)); // "Hola Juan, tienes 30 años de edad"
console.log(mensajePersonalizado("Ana", 25)); // "Hola Ana, tienes 25 años de edad"


//Ejercicio 3: Convertir de Millas a Kilómetros

const convertirMillasAKilometros = millas => millas * 1.60934;

console.log(convertirMillasAKilometros(1)); // 1.60934
console.log(convertirMillasAKilometros(5)); // 8.0467


//Ejercicio 4: Qué llevar con el clima

const queLlevarSegunClima = clima => clima === "lluvia" ? "Lleva un paraguas" : clima === "sol" ? "Lleva un sombrero" : "Clima no especificado";

console.log(queLlevarSegunClima("lluvia")); // "Lleva un paraguas"
console.log(queLlevarSegunClima("sol")); // "Lleva un sombrero"
console.log(queLlevarSegunClima("nublado")); // "Clima no especificado"
