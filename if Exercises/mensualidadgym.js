let duracion = "3 meses"; 

let costo = 0; 

if (duracion === "15 días") {
    costo = 18000;
} else if (duracion === "30 días") {
    costo = 35000;
} else if (duracion === "3 meses") {
    costo = 86000;
} else {
    console.log("Duración no válida.");
}

console.log(`El costo de la mensualidad es: $ ${costo}`);