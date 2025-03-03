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
        const input1 = await pregunta('Ingrese el primer número (o escriba "salir" para terminar): ');
        
        if (input1.toLowerCase() === 'salir') {
            continuar = false;
        } else {
            const input2 = await pregunta('Ingrese el segundo número: ');
            const input3 = await pregunta('Ingrese el tercer número: ');

            const num1 = parseFloat(input1);
            const num2 = parseFloat(input2);
            const num3 = parseFloat(input3);

            if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
                console.log("¡Error! Al menos uno de los valores ingresados no es un número válido.");
            } else {
                if (num1 > num2 && num1 > num3) {
                    console.log(`El número mayor es: ${num1}`);
                } else if (num2 > num1 && num2 > num3) {
                    console.log(`El número mayor es: ${num2}`);
                } else if (num3 > num1 && num3 > num2) {
                    console.log(`El número mayor es: ${num3}`);
                } else {
                    console.log("Los números son iguales o hay un empate.");
                }
            }
        }
    }

    console.log("Gracias por usar el sistema. ¡Hasta luego!");
    readline.close(); 
})();