const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Ingrese el operador (Tigo, Claro, Movistar): ", (operador) => {
    operador = operador.toLowerCase(); 

    readline.question("Ingrese la cantidad de minutos internacionales: ", (minutosInput) => {
        let minutosInternacionales = parseInt(minutosInput); 

        if (isNaN(minutosInternacionales) || minutosInternacionales < 0) {
            console.log("Cantidad de minutos no válida.");
            readline.close();
            return;
        }

        let cargoFijo = 0;
        let valorMinutoInternacional = 0;
        let valorPaqueteDatos = 0;

        switch (operador) {
            case "tigo":
                cargoFijo = 45000;
                valorMinutoInternacional = 200;
                valorPaqueteDatos = 12000;
                break;
            case "claro":
                cargoFijo = 30000;
                valorMinutoInternacional = 100;
                valorPaqueteDatos = 18000;
                break;
            case "movistar":
                cargoFijo = 40000;
                valorMinutoInternacional = 250;
                valorPaqueteDatos = 8000;
                break;
            default:
                console.log("Operador no válido.");
                readline.close();
                return;
        }

        let costoTotal = cargoFijo + (minutosInternacionales * valorMinutoInternacional) + valorPaqueteDatos;

        console.log(`Operador: ${operador}`);
        console.log(`Cargo fijo: $${cargoFijo}`);
        console.log(`Valor por minuto internacional: $${valorMinutoInternacional}`);
        console.log(`Valor del paquete de datos: $${valorPaqueteDatos}`);
        console.log(`Costo total: $${costoTotal}`);

        readline.close();
    });
});