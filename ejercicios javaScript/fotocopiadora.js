let cantidadCopias = 1000; 

let precioPorCopia = 0; 
let precioTotal = 0; 

if (cantidadCopias >= 0 && cantidadCopias <= 499) {
    precioPorCopia = 120;
} else if (cantidadCopias >= 500 && cantidadCopias <= 749) {
    precioPorCopia = 100;
} else if (cantidadCopias >= 750 && cantidadCopias <= 999) {
    precioPorCopia = 80;
} else if (cantidadCopias >= 1000) {
    precioPorCopia = 50;
} else {
    console.log("Cantidad de copias no válida.");
}

precioTotal = cantidadCopias * precioPorCopia;

console.log(`Precio por copia: $" ${precioPorCopia}`);
console.log(`Precio total: $ ${precioTotal}`);