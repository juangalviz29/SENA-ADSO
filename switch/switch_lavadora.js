const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Ingrese el tipo de lavadora : ", (tipoLavadoraInput) => {
    let tipoLavadora = parseInt(tipoLavadoraInput); 

    readline.question("Ingrese la cantidad de lavadoras: ", (cantidadInput) => {
        let cantidad = parseInt(cantidadInput); 

        readline.question("Ingrese la cantidad de horas: ", (horasInput) => {
            let horas = parseInt(horasInput); 

            if (isNaN(tipoLavadora) || isNaN(cantidad) || isNaN(horas) || tipoLavadora < 1 || tipoLavadora > 2 || cantidad < 1 || horas < 1) {
                console.log("Valores no válidos. Asegúrese de ingresar números válidos.");
                readline.close();
                return;
            }

            let costoTotal = 0;

            switch (tipoLavadora) {
                case 1:
                    costoTotal = cantidad * horas * 4000;
                    break;
                case 2:
                    costoTotal = cantidad * horas * 3000;
                    break;
                default:
                    console.log("Tipo de lavadora no válido. Debe ser 1 o 2.");
                    readline.close();
                    return;
            }

            if (cantidad > 3) {
                costoTotal *= 0.97; 
            }

            console.log(`Costo total por alquilar ${cantidad} lavadoras tipo ${tipoLavadora} por ${horas} horas: $${costoTotal}.`);
            readline.close();
        });
    });
});