function costoBase(tamaño) {
    if (tamaño === "pequeño") {
        return 6000;
    } else if (tamaño === "grande") {
        return 12000;
    } else {
        return null;
    }
}

function costoIngredientes(tocineta, pavo, queso, ) {
    let total = 0;

    if (tocineta) {
        total += 3000; 
    }
    if (pavo) {
        total += 3000; 
    }
    if (queso) {
        total += 2500; 
    
    }

    return total;
}

function mostrarTotal(costoTotal) {
    console.log("El costo total de su pedido es: $" + costoTotal);
}

function calcularPedido(tamaño, tocineta, pavo, queso, jalapeño) {
    const base = costoBase(tamaño);

    if (base === null) {
        console.log("Tamaño no válido.");
        return;
    }

    const ingredientes = costoIngredientes(tocineta, pavo, queso, jalapeño);
    const total = base + ingredientes;
    mostrarTotal(total);
}

let tamaño = "grande";
let tocineta = true;
let pavo = false;
let queso = true;
let jalapeño = true;

calcularPedido(tamaño, tocineta, pavo, queso, jalapeño);