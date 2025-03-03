let nombreMiembro = "sr juan";
let edadMiembro = 20;
let edadMinima = 18;
let codigoMiembro = "ABC123";
let codigoIngresado = "ABC123";

if (edadMiembro >= edadMinima && codigoMiembro === codigoIngresado) {
    console.log("Buenas noches " +nombreMiembro+ ", ¡bienvenido al club! Disfrute de sus privilegios.");
} else {
    console.log("Acceso denegado...");
}