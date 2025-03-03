const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Ingrese la duración (15 dias, 30 dias, 3 meses): ', (duracion) => {
    let costo = 0;

    switch (duracion) {
        case "15 dias":
            costo = 18000;
            break;
        case "30 dias":
            costo = 35000;
            break;
        case "3 meses":
            costo = 86000;
            break;
        default:
            console.log("Duración no válida.");
            rl.close();
            return;
    }

    console.log(`El costo de la mensualidad es: $ ${costo}`);

    readline.close();
});