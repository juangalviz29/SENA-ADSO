const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Ingrese el estado de la luz: ", (estadoLuz) => {
    estadoLuz = estadoLuz.toLowerCase(); // Convertir a minúsculas o mayusculas 

    switch (estadoLuz) {
        case "encendida":
            console.log("La luz está encendida");
            break;
        case "apagada":
            console.log("La luz está apagada");
            break;
        case "parpadeando":
            console.log("La luz está parpadeando");
            break;
        case "rojo":
            console.log("La luz está en color rojo");
            break;
        default:
            console.log("Estado de la luz desconocido");
            break;
    }

    readline.close(); // Cerrar la interfaz
});