let fisica = 7;
let quimica = 8;
let biologia = 6;
let matematicas = 9;
let informatica = 10;
let sumaCalificaciones = fisica + quimica + biologia + matematicas + informatica;

let porcentajeFinal = (sumaCalificaciones / 50) * 100;

let calificacionCualitativa;

if (porcentajeFinal < 60) {
    calificacionCualitativa = "Mala";
} else if (porcentajeFinal >= 60 && porcentajeFinal < 80) {
    calificacionCualitativa = "Buena";
} else {
    calificacionCualitativa = "Excelente";
}

console.log(`Tu porcentaje es ${porcentajeFinal}% y tu calificación es ${calificacionCualitativa}.`);