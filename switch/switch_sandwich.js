const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Ingrese el tamaño de la pizza (pequeño/grande): ", (tamaño) => {
    tamaño = tamaño.toLowerCase();

    let costoBase = 0;

    switch (tamaño) {
        case "pequeño":
            costoBase = 6000;
            break;
        case "grande":
            costoBase = 12000;
            break;
        default:
            console.log("Tamaño no válido.");
            readline.close();
            return;
    }

    readline.question("¿Desea tocineta? (sí/no): ", (tocinetaInput) => {
        let tocineta = tocinetaInput.toLowerCase() === "sí" || tocinetaInput.toLowerCase() === "si";

        readline.question("¿Desea jalapeño? (sí/no): ", (jalapeñoInput) => {
            let jalapeño = jalapeñoInput.toLowerCase() === "sí" || jalapeñoInput.toLowerCase() === "si";

            readline.question("¿Desea pavo? (sí/no): ", (pavoInput) => {
                let pavo = pavoInput.toLowerCase() === "sí" || pavoInput.toLowerCase() === "si";

                readline.question("¿Desea queso? (sí/no): ", (quesoInput) => {
                    let queso = quesoInput.toLowerCase() === "sí" || quesoInput.toLowerCase() === "si";

                    let costoIngredientes = 0;
                    if (tocineta) {
                        costoIngredientes += 3000;
                    }
                    if (jalapeño) {
                        costoIngredientes += 0; 
                    }
                    if (pavo) {
                        costoIngredientes += 3000;
                    }
                    if (queso) {
                        costoIngredientes += 2500;
                    }

                    let costoTotal = costoBase + costoIngredientes;

                    console.log(`El costo total de su pedido es: $${costoTotal}`);
                    readline.close();
                });
            });
        });
    });
});