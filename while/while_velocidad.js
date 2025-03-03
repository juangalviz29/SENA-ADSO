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

const limiteVelocidad = 60;

let continuar = true;

(async () => {
    while (continuar) {
        const velocidadInput = await pregunta('Ingrese la velocidad (o escriba "salir" para terminar): ');

        if (velocidadInput.toLowerCase() === 'salir') {
            continuar = false;
        } else {
            const velocidad = parseFloat(velocidadInput);

            if (isNaN(velocidad)) {
                console.log("¡Error! Ingrese un valor numérico válido.");
            } else {
                if (velocidad > limiteVelocidad) {
                    console.log(`Usted está excediendo el límite de velocidad, su velocidad es de ${velocidad} km/h.`);
                } else {
                    console.log("Su velocidad es dentro del límite permitido.");
                }
            }
        }
    }

    console.log("Gracias por usar el sistema. ¡Hasta luego!");
    readline.close(); 
})();