const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Ingresa la calificación de Física (0-10): ", (fisicaInput) => {
    let fisica = parseFloat(fisicaInput);

    readline.question("Ingresa la calificación de Química (0-10): ", (quimicaInput) => {
        let quimica = parseFloat(quimicaInput);

        readline.question("Ingresa la calificación de Biología (0-10): ", (biologiaInput) => {
            let biologia = parseFloat(biologiaInput);

            readline.question("Ingresa la calificación de Matemáticas (0-10): ", (matematicasInput) => {
                let matematicas = parseFloat(matematicasInput);

                readline.question("Ingresa la calificación de Informática (0-10): ", (informaticaInput) => {
                    let informatica = parseFloat(informaticaInput);

                    // Validar que todas las calificaciones estén en el rango correcto
                    if ([fisica, quimica, biologia, matematicas, informatica].some(cal => cal < 0 || cal > 10 || isNaN(cal))) {
                        console.log("Error: Las calificaciones deben estar entre 0 y 10.");
                        readline.close();
                        return;
                    }

                    let sumaCalificaciones = fisica + quimica + biologia + matematicas + informatica;
                    let porcentajeFinal = (sumaCalificaciones / 50) * 100;

                    let calificacionCualitativa;

                    switch (true) {
                        case (porcentajeFinal < 60):
                            calificacionCualitativa = "Mala";
                            break;
                        case (porcentajeFinal >= 60 && porcentajeFinal < 80):
                            calificacionCualitativa = "Buena";
                            break;
                        default:
                            calificacionCualitativa = "Excelente";
                            break;
                    }

                    console.log(`Tu porcentaje es ${porcentajeFinal}% y tu calificación es ${calificacionCualitativa}.`);
                    readline.close();
                });
            });
        });
    });
});