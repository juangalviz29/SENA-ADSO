function esPar(numero) {
    return numero % 2 === 0;
}

function mostrarResultado(numero) {
    if (esPar(numero)) {
        console.log(`${numero} es un número par`);
    } else {
        console.log(`${numero} es un número impar`);
    }
}

function verificarParidad(numero) {
    mostrarResultado(numero);
}

let numero = 2;
verificarParidad(numero);