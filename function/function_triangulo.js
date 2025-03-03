function calcularSumaAngulos(angulo1, angulo2, angulo3) {
    return angulo1 + angulo2 + angulo3;
}

function esTrianguloValido(sumaAngulos) {
    return sumaAngulos === 180;
}

function mostrarResultado(esValido) {
    if (esValido) {
        console.log("El triángulo es válido.");
    } else {
        console.log("El triángulo no es válido.");
    }
}

function verificarTriangulo(angulo1, angulo2, angulo3) {
    const sumaAngulos = calcularSumaAngulos(angulo1, angulo2, angulo3);
    const esValido = esTrianguloValido(sumaAngulos);
    mostrarResultado(esValido);
}

let angulo1 = 60;
let angulo2 = 60;
let angulo3 = 60;

verificarTriangulo(angulo1, angulo2, angulo3);