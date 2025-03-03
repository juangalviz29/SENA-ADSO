let hornoEncendido = true;
let temperatura = 180; // temperatura en grados Celsius

if (hornoEncendido) {
    console.log('El horno está encendido');

    if (temperatura < 100) {
        console.log('Temperatura demasiado baja, ajuste la temperatura.');
    } else if (temperatura >= 100 && temperatura <= 250) {
        console.log('Temperatura adecuada para hornear.');
    } else {
        console.log('¡Atención! Temperatura excesiva, evite un incendio.');
    }
} else {
    console.log('Asegúrese de encender el horno.');
}