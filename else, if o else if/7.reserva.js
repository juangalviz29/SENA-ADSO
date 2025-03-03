let tipoReserva = "especial";

if (tipoReserva == "individual") {
    console.log("Su mesa está lista en la zona tranquila, por ser reserva " +tipoReserva+"");
} else if (tipoReserva == "grupo") {
    console.log("Se le ha asignado una mesa en la zona de grupos para su atención.");
} else if (tipoReserva == "especial") {
    console.log("Su mesa está reservada en la zona VIP, disfrute de su experiencia.");
} else {
    console.log("No se encontró su reserva, por favor diríjase a la recepción.");
}