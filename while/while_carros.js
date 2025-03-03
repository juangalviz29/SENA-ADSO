const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


function pregunta(pregunta) {
    return new Promise((resolve) => {
        readline.question(pregunta, (respuesta) => {
            resolve(respuesta);
        });
    });
}

let continuar = true;

(async () => {
    while (continuar) {
        const input = await pregunta('Ingrese el número de modelo (o escriba "salir" para terminar): ');

        if (input.toLowerCase() === 'salir') {
            console.log("Gracias por usar el sistema. ¡Hasta luego!");
            continuar = false;
            readline.close();
            return;
        }

        const numeroModelo = parseInt(input, 10);

        if (isNaN(numeroModelo)) {
            console.log("Por favor, ingrese un número válido.");
        } else {
            if (
                numeroModelo === 119 ||
                numeroModelo === 179 ||
                (numeroModelo >= 189 && numeroModelo <= 195) ||
                numeroModelo === 221 ||
                numeroModelo === 780
            ) {
                console.log("El automóvil está defectuoso, llevar a garantía.");
            } else {
                console.log("Su automóvil no está defectuoso.");
            }
        }
    }
})();