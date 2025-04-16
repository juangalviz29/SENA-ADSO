let nombre = "estefania gonzales"; 
let horas = 15;

let salario;

if (horas >= 1 && horas <= 10) {
    salario = horas * 30.000; 
} else if (horas > 10) {
    salario = horas * 33.000; 
} else {
    salario = 0; 
}

console.log(`Señor/a ${nombre}, el número de horas es ${horas} y su salario equivale a $${salario}.`);