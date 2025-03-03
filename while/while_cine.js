const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificarEstadoSala(ocupacionSala, numeroSala) {
    if (ocupacionSala) {
        return "La sala número " + numeroSala + " está ocupada.";
    } else {
        return "La sala número " + numeroSala + " está disponible.";
    }
}

function pregunta(prompt) {
    return new Promise((resolve) => {
        rl.question(prompt, (respuesta) => {
            resolve(respuesta);
        });
    });
}

let continuar = true;

(async () => {
    while (continuar) {
        const numeroSala = await pregunta('Ingrese el número de sala (o escriba "salir" para terminar): ');

        if (numeroSala.toLowerCase() === 'salir') {
            console.log("Gracias por usar el sistema. ¡Hasta luego!");
            continuar = false;
        } else {
            const respuesta = await pregunta('¿La sala está ocupada? (si/no): ');
            const ocupacionSala = respuesta.toLowerCase() === 'si';

            const mensaje = verificarEstadoSala(ocupacionSala, numeroSala);
            console.log(mensaje);
        }
    }

    rl.close(); 
})();