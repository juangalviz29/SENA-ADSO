const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("¿Está encendido el horno? : ", (respuestaHorno) => {
    let hornoEncendido = respuestaHorno.toLowerCase() === "sí" || respuestaHorno.toLowerCase() === "si";

    if (hornoEncendido) {
        console.log('El horno está encendido.');

        readline.question("Ingrese la temperatura del horno en grados Celsius: ", (temperaturaInput) => {
            let temperatura = parseFloat(temperaturaInput);

            switch (true) {
                case (temperatura < 100):
                    console.log('Temperatura demasiado baja. Ajuste la temperatura.');
                    break;
                case (temperatura >= 100 && temperatura <= 250):
                    console.log('Temperatura adecuada para hornear.');
                    break;
                case (temperatura > 250):
                    console.log('¡Atención! Temperatura excesiva. Evite un incendio.');
                    break;
                default:
                    console.log('Temperatura no válida.');
                    break;
            }

            readline.close();
        });
    } else {
        console.log('Asegúrese de encender el horno.');
        readline.close();
    }
});