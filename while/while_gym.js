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
        const nombreUsuario = await pregunta('Ingrese su nombre (o escriba "salir" para terminar): ');

        if (nombreUsuario.toLowerCase() === 'salir') {
            continuar = false;
        } else {
            const membresiaInput = await pregunta('¿Tiene una membresía activa? (si/no): ');
            const membresiaActiva = membresiaInput.toLowerCase() === 'si';

            if (nombreUsuario === "juan pablo" && membresiaActiva) {
                console.log("Hola " + nombreUsuario + ", bienvenido al gimnasio. ¡Listo para entrenar!");
            } else {
                console.log("Lo sentimos, " + nombreUsuario + ". Necesitas una membresía activa para acceder al gimnasio.");
            }
        }
    }

    console.log("Gracias por usar el sistema. ¡Hasta luego!");
    readline.close(); 
})();