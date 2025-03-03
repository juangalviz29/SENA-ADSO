const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Ingrese el día de la semana: ", (dia) => {
    dia = dia.toLowerCase(); 

    switch (dia) {
        case "lunes":
            console.log("Hoy es lunes, ¡comienza la semana con energía!");
            break;
        case "martes":
            console.log("Hoy es martes, es un buen día para estudiar.");
            break;
        case "miercoles": 
            console.log("Hoy es miércoles, ¡es mitad de semana!");
            break;
        case "jueves":
            console.log("Hoy es jueves, ¡casi es fin de semana!");
            break;
        case "viernes":
            readline.question("¿Qué vas hacer el viernes? ", (actividad) => {
                console.log(`Hoy es viernes, ¡es noche de ${actividad}!`);
                readline.close();
            });
            return; 
        case "sabado": 
            console.log("Hoy es sábado, es un gran día para descansar.");
            break;
        case "domingo":
            console.log("Hoy es domingo, día de preparación para la semana.");
            break;
        default:
            console.log("Día inválido, por favor ingrese un día de la semana correcto.");
            break;
    }

    readline.close(); 
});