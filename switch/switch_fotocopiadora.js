const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Ingrese la cantidad de copias: ", (cantidadCopiasInput) => {
    let cantidadCopias = parseInt(cantidadCopiasInput); 

    if (isNaN(cantidadCopias) || cantidadCopias < 0) {
        console.log("Cantidad de copias no válida.");
        readline.close();
        return;
    }

    let precioPorCopia = 0;
    let precioTotal = 0;

    switch (true) {
        case (cantidadCopias >= 0 && cantidadCopias <= 499):
            precioPorCopia = 120;
            break;
        case (cantidadCopias >= 500 && cantidadCopias <= 749):
            precioPorCopia = 100;
            break;
        case (cantidadCopias >= 750 && cantidadCopias <= 999):
            precioPorCopia = 80;
            break;
        case (cantidadCopias >= 1000):
            precioPorCopia = 50;
            break;
        default:
            console.log("Cantidad de copias no válida.");
            readline.close();
            return;
    }

    precioTotal = cantidadCopias * precioPorCopia;

    console.log(`Precio por copia: $${precioPorCopia}`);
    console.log(`Precio total: $${precioTotal}`);

    readline.close();
});