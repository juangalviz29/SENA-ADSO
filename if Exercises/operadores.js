let operador = "Claro"; 
let minutosInternacionales = 30; 

let cargoFijo = 0; 
let valorMinutoInternacional = 0; 
let valorPaqueteDatos = 0; 


if (operador === "Tigo") {
    cargoFijo = 45000;
    valorMinutoInternacional = 200;
    valorPaqueteDatos = 12000;
} else if (operador === "Claro") {
    cargoFijo = 30000;
    valorMinutoInternacional = 100;
    valorPaqueteDatos = 18000;
} else if (operador === "Movistar") {
    cargoFijo = 40000;
    valorMinutoInternacional = 250;
    valorPaqueteDatos = 8000;
} else {
    console.log("Operador no válido.");
}

let costoTotal = cargoFijo + (minutosInternacionales * valorMinutoInternacional) + valorPaqueteDatos;

console.log(`Operador:  ${operador}`);
console.log(`Cargo fijo: $ ${cargoFijo}`);
console.log(`Valor por minuto internacional: $  ${valorMinutoInternacional}`);
console.log(`Valor del paquete de datos: $  ${valorPaqueteDatos}`);
console.log(`Costo total: $  ${costoTotal}`);