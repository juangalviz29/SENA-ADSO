
function calcularPrecioPorCopia(cantidadCopias) {
    if (cantidadCopias >= 0 && cantidadCopias <= 499) {
        return 120;
    } else if (cantidadCopias >= 500 && cantidadCopias <= 749) {
        return 100;
    } else if (cantidadCopias >= 750 && cantidadCopias <= 999) {
        return 80;
    } else if (cantidadCopias >= 1000) {
        return 50;
    } else {
        return null; 
    }
}

function calcularPrecioTotal(cantidadCopias, precioPorCopia) {
    return cantidadCopias * precioPorCopia;
}

function mostrarResultados(cantidadCopias, precioPorCopia, precioTotal) {
    console.log(`Precio por copia: $${precioPorCopia}`);
    console.log(`Precio total: $${precioTotal}`);
}

function calcularCostoCopias(cantidadCopias) {
    const precioPorCopia = calcularPrecioPorCopia(cantidadCopias);
    
    if (precioPorCopia === null) {
        console.log("Cantidad de copias no válida.");
        return; 
    }
    
    const precioTotal = calcularPrecioTotal(cantidadCopias, precioPorCopia);
    mostrarResultados(cantidadCopias, precioPorCopia, precioTotal);
}

let cantidadCopias = 1000;
calcularCostoCopias(cantidadCopias);