let genero = "femenino"; 
let edad = 15; 

let ayuda = 0; 

if (genero === "femenino") {
    if (edad > 50) {
        ayuda = 120000;
    } else if (edad >= 30 && edad <= 50) {
        ayuda = 100000;
    } else {
        ayuda = 0;
    }
} else if (genero === "masculino") {
    if (edad > 50) {
        ayuda = 120000;
    } else if (edad >= 30 && edad <= 50) {
        ayuda = 100000;
    } else {
        ayuda = 40000;
    }
}else if (genero === "masculino") { 
    if (edad >= 0 && edad <= 100) 
    ayuda = 40000;

} else {
    console.log("Género no válido.");
}

console.log(`El valor de ayuda mensual es: $  ${ayuda}`);