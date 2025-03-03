let estadoDispositivo = "bajo";

if (estadoDispositivo === "prendido") {
    console.log("El dispositivo está "  +estadoDispositivo+ ", puede usarlo.");
} else if (estadoDispositivo === "apagado") {
    console.log("El dispositivo está " +estadoDispositivo+  ", debe prenderlo.");
} else if (estadoDispositivo === "bajo") {
    console.log("El dispositivo está " +estadoDispositivo+  ", por favor cargue la batería.");
} else if (estadoDispositivo === "cargado") {
    console.log("El dispositivo está " +estadoDispositivo+  ", puede desconectar su dispositivo.");    
} else {
    console.log("Estado " +estadoDispositivo+  " no reconocido, verifique el dispositivo.");
}