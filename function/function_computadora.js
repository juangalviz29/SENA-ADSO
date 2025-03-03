function evaluarEstadoComputadora(emitePitido, discoDuroGira) {
    if (emitePitido && discoDuroGira) {
        return "Póngase en contacto con el técnico de apoyo.";
    } else if (emitePitido && !discoDuroGira) {
        return "Verificar contactos de la unidad.";
    } else if (!emitePitido && !discoDuroGira) {
        return "Traiga la computadora para repararla en la central.";
    } else if (!emitePitido && discoDuroGira) {
        return "Compruebe las conexiones de altavoces.";
    } else {
        return "Estado no válido.";
    }
}

function mostrarMensaje(emitePitido, discoDuroGira) {
    const mensaje = evaluarEstadoComputadora(emitePitido, discoDuroGira);
    console.log(mensaje);
}

function diagnosticarComputadora(emitePitido, discoDuroGira) {
    mostrarMensaje(emitePitido, discoDuroGira);
}

let emitePitido = false;
let discoDuroGira = false;

diagnosticarComputadora(emitePitido, discoDuroGira);