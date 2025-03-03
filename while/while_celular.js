const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function preguntarEstado() {
    readline.question('Ingrese el estado del dispositivo (prendido, apagado, bajo, cargado) o escriba "salir" para terminar: ', (estadoDispositivo) => {
        if (estadoDispositivo.toLowerCase() === 'salir') {
            console.log("Gracias por usar el sistema. ¡Hasta luego!");
            readline.close(); 
            return;
        }

        if (estadoDispositivo === "prendido") {
            console.log("El dispositivo está " + estadoDispositivo + ", puede usarlo.");
        } else if (estadoDispositivo === "apagado") {
            console.log("El dispositivo está " + estadoDispositivo + ", debe prenderlo.");
        } else if (estadoDispositivo === "bajo") {
            console.log("El dispositivo está " + estadoDispositivo + ", por favor cargue la batería.");
        } else if (estadoDispositivo === "cargado") {
            console.log("El dispositivo está " + estadoDispositivo + ", puede desconectar su dispositivo.");
        } else {
            console.log("Estado " + estadoDispositivo + " no reconocido, verifique el dispositivo.");
        }

        preguntarEstado();
    });
}

preguntarEstado();