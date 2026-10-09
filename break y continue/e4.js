let nombres = ["Ana", "Luis", "Maria", "Pedro", "Sofia", "Carlos"];
let buscado = prompt("Ingresá un nombre a buscar");
let encontrado = false;
for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === buscado) {
        console.log("El nombre está en la posición:", i);
        encontrado = true;
        break;}}
if (!encontrado) {
    console.log("Nombre no encontrado");}