let tipoLavadora = 1; 
let cantidad = 4;     
let horas = 5;        
let costoTotal;       

if (tipoLavadora === 1) {
    costoTotal = cantidad * horas * 4000; 
} else if (tipoLavadora === 2) {
    costoTotal = cantidad * horas * 3000; 
} else {
    console.log("Tipo de lavadora no válido. Debe ser 1 o 2.");
}

if (cantidad > 3) {
    costoTotal *= 0.97; 
}

console.log(`Costo total por alquilar ${cantidad} lavadoras tipo ${tipoLavadora} por ${horas} horas: $${costoTotal}.`);