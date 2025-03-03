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
        const edadInput = await pregunta('Ingrese la edad (o escriba "salir" para terminar): ');

        if (edadInput.toLowerCase() === 'salir') {
            continuar = false;
        } else {
            const edad = parseInt(edadInput, 10);

            if (isNaN(edad)) {
                console.log("Por favor, ingrese una edad válida.");
            } else {
                if (edad >= 18) {
                    console.log("Es mayor de edad.");
                } else {
                    console.log("Es menor de edad.");
                }
            }
        }
    }

    console.log("Gracias por usar el sistema. ¡Hasta luego!");
    readline.close();
})();