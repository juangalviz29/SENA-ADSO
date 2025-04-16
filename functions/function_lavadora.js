function costoBase(tipo, cantidad, horas) {
    if (tipo === 1) {
        return cantidad * horas * 4000; 
    } else if (tipo === 2) {
        return cantidad * horas * 3000; 
    } else {
        return null; 
    }
}

function aplicarDescuento(costo, cantidad) {
    if (cantidad > 3) {
        return costo * 0.97; 
    }
    return costo; 
}

function mostrarCosto(tipo, cantidad, horas, costo) {
    if (costo === null) {
        console.log("Tipo de lavadora no válido. Debe ser 1 o 2.");
    } else {
        console.log(`Costo total por alquilar ${cantidad} lavadoras tipo ${tipo} por ${horas} horas: $${costo}.`);
    }
}

function calcularAlquiler(tipo, cantidad, horas) {
    const base = costoBase(tipo, cantidad, horas); 

    if (base === null) {
        mostrarCosto(tipo, cantidad, horas, null); 
    } else {
        const total = aplicarDescuento(base, cantidad); 
        mostrarCosto(tipo, cantidad, horas, total); 
    }
}

let tipo = 1;
let cantidad = 4;
let horas = 5;

calcularAlquiler(tipo, cantidad, horas);