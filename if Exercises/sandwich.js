let tamaño = "grande"; 
let tocineta = true; 
let jalapeño = true; 
let pavo = false; 
let queso = true; 

let costoBase = 0;
if (tamaño === "pequeño") {
    costoBase = 6000;
} else if (tamaño === "grande") {
    costoBase = 12000;
} else {
    console.log("Tamaño no válido");
    process.exit(1); 
}

let costoIngredientes = 0;
if (tocineta) {
    costoIngredientes += 3000;
}
if (pavo) {
    costoIngredientes += 3000;
}
if (queso) {
    costoIngredientes += 2500;
}

let costoTotal = costoBase + costoIngredientes;


console.log(`El costo total de su pedido es: $  ${costoTotal}`);