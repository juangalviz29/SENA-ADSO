const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function pregunta(prompt) {
    return new Promise((resolve) => {
        readline.question(prompt, (respuesta) => {
            resolve(respuesta.toLowerCase() === 'si'); 
        });
    });
}

let continuar = true;

(async () => {
    while (continuar) {
        const emitePitido = await pregunta('¿La computadora emite un pitido? (si/no): ');
        const discoDuroGira = await pregunta('¿El disco duro está girando? (si/no): ');

        if (emitePitido && discoDuroGira) {
            console.log("Póngase en contacto con el técnico de apoyo.");
        } else if (emitePitido && !discoDuroGira) {
            console.log("Verificar contactos de la unidad.");
        } else if (!emitePitido && !discoDuroGira) {
            console.log("Traiga la computadora para repararla en la central.");
        } else if (!emitePitido && discoDuroGira) {
            console.log("Compruebe las conexiones de altavoces.");
        } else {
            console.log("Estado no válido.");
        }

        const respuesta = await pregunta('¿Desea realizar otro diagnóstico? (si/no): ');
        if (!respuesta) {
            continuar = false;
        }
    }

    console.log("Gracias por usar el sistema. ¡Hasta luego!");
    readline.close(); 
})();