function obtenerValores(operador) {
    if (operador === "Tigo") {
        return { cargoFijo: 45000, minuto: 200, datos: 12000 };
    } else if (operador === "Claro") {
        return { cargoFijo: 30000, minuto: 100, datos: 18000 };
    } else if (operador === "Movistar") {
        return { cargoFijo: 40000, minuto: 250, datos: 8000 };
    } else {
        return null; 
    }
}

function calcularTotal(cargoFijo, minuto, datos, minutosUsados) {
    return cargoFijo + (minuto * minutosUsados) + datos;
}

function mostrarResultado(operador, cargoFijo, minuto, datos, total) {
    console.log("Operador: " + operador);
    console.log("Cargo fijo: $" + cargoFijo);
    console.log("Costo por minuto internacional: $" + minuto);
    console.log("Costo del paquete de datos: $" + datos);
    console.log("Costo total: $" + total);
}

function calcularFactura(operador, minutosUsados) {
    const valores = obtenerValores(operador);

    if (valores === null) {
        console.log("Operador no válido.");
    } else {
        const total = calcularTotal(valores.cargoFijo, valores.minuto, valores.datos, minutosUsados);
        mostrarResultado(operador, valores.cargoFijo, valores.minuto, valores.datos, total);
    }
}

let operador = "Claro";
let minutosUsados = 30;

calcularFactura(operador, minutosUsados);