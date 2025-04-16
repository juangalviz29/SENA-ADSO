const numero = 5; 

if (isNaN(numero)) {
    console.log("¡Error! No ingresaste un número válido.");
} else if (numero % 2 === 0) {
    console.log(`El número ${numero} es par.`);
} else {
    console.log(`El número ${numero} es impar.`);
}