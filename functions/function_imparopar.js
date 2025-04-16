function esNumeroValido(valor) {
    return !isNaN(valor);
}

function esPar(numero) {
    return numero % 2 === 0;
}

function mostrarResultado(numero) {
    if (!esNumeroValido(numero)) {
        console.log("¡Error! No ingresaste un número válido.");
    } else if (esPar(numero)) {
        console.log(`El número ${numero} es par.`);
    } else {
        console.log(`El número ${numero} es impar.`);
    }
}

function evaluarNumero(numero) {
    mostrarResultado(numero);
}

const numero = 5;
evaluarNumero(numero);