
function esModeloDefectuoso(numeroModelo) {
    const modelosDefectuosos = [119, 179, 221, 780];
    const rangoDefectuoso = { inicio: 189, fin: 195 };

    if (modelosDefectuosos.includes(numeroModelo)) {
        return true;
    }

    if (numeroModelo >= rangoDefectuoso.inicio && numeroModelo <= rangoDefectuoso.fin) {
        return true;
    }

    return false;
}

function mostrarMensaje(numeroModelo) {
    if (esModeloDefectuoso(numeroModelo)) {
        console.log("El automóvil está defectuoso, llevar a garantía.");
    } else {
        console.log("Su automóvil no está defectuoso.");
    }
}

function evaluarAutomovil(numeroModelo) {
    mostrarMensaje(numeroModelo);
}

let numeroModelo = 187;
evaluarAutomovil(numeroModelo);