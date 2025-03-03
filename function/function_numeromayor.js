function encontrarNumeroMayor(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else if (num3 > num1 && num3 > num2) {
        return num3;
    } else {
        return null; 
    }
}

function mostrarResultado(num1, num2, num3) {
    const numeroMayor = encontrarNumeroMayor(num1, num2, num3);

    if (numeroMayor === null) {
        console.log("Los números son iguales o hay un empate.");
    } else {
        console.log(`El número mayor es: ${numeroMayor}`);
    }
}

function compararNumeros(num1, num2, num3) {
    mostrarResultado(num1, num2, num3);
}

let num1 = 15;
let num2 = 30;
let num3 = 20;

compararNumeros(num1, num2, num3);