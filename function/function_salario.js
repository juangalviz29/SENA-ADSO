function calcularSalario(horas) {
    const TARIFA_1 = 30000; 
    const TARIFA_2 = 33000; 

    if (horas >= 1 && horas <= 10) {
        return horas * TARIFA_1;
    } else if (horas > 10) {
        return horas * TARIFA_2;
    } else {
        return 0;
    }
}

function mostrarResultado(nombre, horas, salario) {
    console.log(`Señor/a ${nombre}, el número de horas es de ${horas} y su salario equivale a $${salario}.`);
}

function calcularYMostrarSalario(nombre, horas) {
    const salario = calcularSalario(horas);
    mostrarResultado(nombre, horas, salario);
}

let nombre = "estefania gonzales";
let horas = 15;

calcularYMostrarSalario(nombre, horas);