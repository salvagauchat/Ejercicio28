
//EJERCICIO 28 de practico.

// Primero las dos funciones, la que lee el numero y luego la que compara el valor.
function leerNumero() {
    let numero;
    do {
        numero = parseInt(prompt("Introduce un número entre 1 y 100:"));
    } while (isNaN(numero) || numero < 1 || numero > 100);
    return numero;
}

function comprobarValor(numeroUsuario, numeroCorrecto) {
    if (numeroUsuario === numeroCorrecto) {
        return 0;
    } else if (numeroUsuario > numeroCorrecto) {
        return 1; 
    } else {
        return -1; 
    }
}

const numeroCorrecto = 15; 

let resultado = -1;

//Ejecutamos las funciones hasta que el usuario adivine el valor.

while (resultado !== 0) {
    const numeroUsuario = leerNumero();
    resultado = comprobarValor(numeroUsuario, numeroCorrecto);
    
    if (resultado === 0) {
        alert("Numero adivinado!");
    } else if (resultado === 1) {
        alert("El número que has introducido es mayor.");
    } else if (resultado === -1) {
        alert("El número que has introducido es menor.");
    }
}