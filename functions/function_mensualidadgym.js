function calcularCostoMensualidad(duracion) {
    if (duracion === "15 días") {
        return 18000;
    } else if (duracion === "30 días") {
        return 35000;
    } else if (duracion === "3 meses") {
        return 86000;
    } else {
        return null;
    }
}

function mostrarResultado(duracion, costo) {
    if (costo === null) {
        console.log("Duración no válida.");
    } else {
        console.log(`El costo de la mensualidad es: $${costo}`);
    }
}

function calcularMensualidad(duracion) {
    const costo = calcularCostoMensualidad(duracion);
    mostrarResultado(duracion, costo);
}

let duracion = "3 meses";
calcularMensualidad(duracion);