const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function pregunta(prompt) {
    return new Promise((resolve) => {
        readline.question(prompt, (respuesta) => {
            resolve(respuesta);
        });
    });
}

let continuar = true;

(async () => {
    while (continuar) {
        const input = await pregunta('Ingrese un número (o escriba "salir" para terminar): ');

        if (input.toLowerCase() === 'salir') {
            continuar = false;
        } else {
            const numero = parseFloat(input);

            if (isNaN(numero)) {
                console.log("¡Error! No ingresaste un número válido.");
            } else if (numero % 2 === 0) {
                console.log(`${numero} es un número par.`);
            } else {
                console.log(`${numero} es un número impar.`);
            }
        }
    }

    console.log("Gracias por usar el sistema. ¡Hasta luego!");
    readline.close(); 
})();