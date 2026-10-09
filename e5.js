let pin = "1234";
let intento;
let intentos = 0;
do {
    intento = prompt("Ingresa el PIN:");
    intentos++;
    if (intento === pin) {
        console.log("Acceso permitido");
    }
} while (intento !== pin && intentos < 3);
if (intento !== pin) {
    console.log("Cuenta bloqueada");
}