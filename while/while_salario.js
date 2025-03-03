const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


function pregunta(prompt) {
    return new Promise((resolve) => {
        readline.question(prompt, (respuesta) => {
            resolve(respuesta);
        });
    });
}

let continuar = true;

(async () => {
    while (continuar) {
        const nombre = await pregunta('Ingrese su nombre (o escriba "salir" para terminar): ');

        if (nombre.toLowerCase() === 'salir') {
            continuar = false;
        } else {
            const horasInput = await pregunta('Ingrese el número de horas trabajadas: ');
            const horas = parseFloat(horasInput);

            if (isNaN(horas) || horas < 0) {
                console.log("¡Error! Ingrese un número válido de horas.");
            } else {
                let salario;

                if (horas >= 1 && horas <= 10) {
                    salario = horas * 30000; 
                } else if (horas > 10) {
                    salario = horas * 33000; 
                } else {
                    salario = 0; 
                }

                console.log(`Señor/a ${nombre}, el número de horas es ${horas} y su salario equivale a $${salario}.`);
            }
        }
    }

    console.log("Gracias por usar el sistema. ¡Hasta luego!");
    readline.close(); 
})();