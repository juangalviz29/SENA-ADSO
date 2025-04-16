function calcularAyudaFemenino(edad) {
    if (edad > 50) {
        return 120000;
    } else if (edad >= 30 && edad <= 50) {
        return 100000;
    } else {
        return 0;
    }
}

function calcularAyudaMasculino(edad) {
    if (edad > 50) {
        return 120000;
    } else if (edad >= 30 && edad <= 50) {
        return 100000;
    } else {
        return 40000;
    }
}

function obtenerAyuda(genero, edad) {
    if (genero === "femenino") {
        return calcularAyudaFemenino(edad);
    } else if (genero === "masculino") {
        return calcularAyudaMasculino(edad);
    } else {
        console.log("Género no válido.");
        return 0;
    }
}

function mostrarAyuda(genero, edad) {
    const ayuda = obtenerAyuda(genero, edad);
    console.log(`El valor de ayuda mensual es: $${ayuda}`);
}


let genero = "femenino";
let edad = 15;

mostrarAyuda(genero, edad);