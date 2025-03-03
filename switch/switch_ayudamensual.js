const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Ingrese su género : ", (genero) => {
    genero = genero.toLowerCase(); 

    readline.question("Ingrese su edad: ", (edadInput) => {
        let edad = parseInt(edadInput); 

        let ayuda = 0;

        switch (genero) {
            case "femenino":
                if (edad > 50) {
                    ayuda = 120000;
                } else if (edad >= 30 && edad <= 50) {
                    ayuda = 100000;
                } else {
                    ayuda = 0;
                }
                break;
            case "masculino":
                if (edad > 50) {
                    ayuda = 120000;
                } else if (edad >= 30 && edad <= 50) {
                    ayuda = 100000;
                } else {
                    ayuda = 40000;
                }
                break;
            default:
                console.log("Género no válido.");
                readline.close();
                return; 
        }

        console.log(`El valor de ayuda mensual es: $${ayuda}`);
        readline.close();
    });
});