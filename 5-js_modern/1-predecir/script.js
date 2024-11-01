//problema 1 - desestructuración en objetos anidados con propiedades que podrían no existir

const info = {
    personal: {
        nombre: 'Carlos',
        apellido: 'Vega',
        detalles: {
            edad: 30,
            ocupacion: 'Ingeniero'
        }
    }
};


const { personal: { detalles: { edad, salario = 0 } } } = info;
console.log(edad); // 30
console.log(salario); // 0,

//problema 2 -uso del operador spread para fusionar objetos con propiedades repetidas

//El operador spread fusiona los objetos y sobrescribe las propiedades repetidas en el segundo objeto

const objetoA = { a: 1, b: 2, c: 3 };
const objetoB = { b: 4, c: 5, d: 6 };

const resultado = { ...objetoA, ...objetoB };
console.log(resultado);  //{ a: 1, b: 4, c: 5, d: 6 }

//problema 3 -alcance de las variables dentro de bloques y funciones


function verificar() {
    if (true) {
        const a = 2;
        let b = 3;
        var c = 4;
    }
   console.log(c); // 4, var es accesible
    //console.log(a); // ReferenceError: a no está definido
   // console.log(b); // ReferenceError: b no está definido
}
verificar();

//problema 4 - manipulación de un objeto inmutable  

//impide cualquier modificación en el objeto
//Así que intentar modificar edad no tendrá efecto.
const datos = Object.freeze({ nombre: 'Luis', edad: 29 });
datos.edad = 30; // No modifica el objeto
console.log(datos.edad); // 29


// problema 5 - manipulación de arrays con métodos no destructivos

// concat no modifica el array original
// devuelve un nuevo array combinado.

const original = [1, 2, 3];
const nuevo = original.concat(4);
console.log(original); // [1, 2, 3]
console.log(nuevo); // [1, 2, 3, 4]



// problema 6 - desestructuración de arrays

const frutas = ['manzana', 'naranja', 'pera', 'mango'];
const [primera, segunda, , cuarta] = frutas;
console.log(primera); // 'manzana'
console.log(segunda); // 'naranja'
console.log(cuarta); // 'mango'


// problema 7 - alcance de let en bucles anidados

// El uso de let crea un nuevo alcance en cada 
// iteración del bucle, lo que significa que los dos 
// bucles anidados tienen sus propias variables i.

for (let i = 0; i < 3; i++) {
    for (let i = 0; i < 2; i++) {
        console.log(i); // 0, 1, 0, 1, 0, 1
    }
}

// problema 8 -  Operador Spread en Objetos

//El operador spread sobrescribe propiedades
// si los nombres coinciden.
// Si deseas evitar esto,
// debes cambiar el orden de los objetos.

const objeto1 = { a: 1, b: 2 };
const objeto2 = { b: 3, c: 4 };

// Solución para evitar sobrescribir 'b'
const combinado = { ...objeto2, ...objeto1 };
console.log(combinado); // { a: 1, b: 2, c: 4 }


// problema 9 - uso del operador Spread para combinar arrays
// Los elementos duplicados no se eliminan automáticamente.

const numeros1 = [1, 2, 3];
const numeros2 = [3, 4, 5];
const combinados = [...numeros1, ...numeros2];
console.log(combinados); // [1, 2, 3, 3, 4, 5]

// problema 10 - alcance y captura de variables en una función
// var tiene alcance de función, mientras que let tiene alcance de bloque.

function demostracion() {
    var nombre = 'Ana';
    let edad = 25;
    if (true) {
        var nombre = 'Luis';
        let edad = 30;
    }
    console.log(nombre); // 'Luis'
    console.log(edad); // 25
}
demostracion();
