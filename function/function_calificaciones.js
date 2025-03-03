function calcularSumaCalificaciones(calificaciones) {
    return calificaciones.reduce((suma, calificacion) => suma + calificacion, 0);
}

function calcularPorcentajeFinal(sumaCalificaciones, totalCalificaciones) {
    return (sumaCalificaciones / totalCalificaciones) * 100;
}

function determinarCalificacionCualitativa(porcentajeFinal) {
    if (porcentajeFinal < 60) {
        return "Mala";
    } else if (porcentajeFinal >= 60 && porcentajeFinal < 80) {
        return "Buena";
    } else {
        return "Excelente";
    }
}

function evaluarCalificaciones(calificaciones, totalCalificaciones) {
    const sumaCalificaciones = calcularSumaCalificaciones(calificaciones);
    const porcentajeFinal = calcularPorcentajeFinal(sumaCalificaciones, totalCalificaciones);
    const calificacionCualitativa = determinarCalificacionCualitativa(porcentajeFinal);

    console.log(`Tu porcentaje es ${porcentajeFinal}% y tu calificación es ${calificacionCualitativa}.`);
}

let calificaciones = [10, 10, 10, 10, 10]; 
let totalCalificaciones = 50; 


evaluarCalificaciones(calificaciones, totalCalificaciones);