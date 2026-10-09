let opcion;
do {
    opcion = Number(prompt(
        "MENÚ\n" +
        "1. Saludar\n" +
        "2. Mostrar la fecha actual\n" +
        "3. Salir\n\n" +
        "Elige una opción:"
    ));
    if (opcion === 1) {
        console.log("¡Hola!");
    } else if (opcion === 2) {
        console.log(new Date());
    } else if (opcion === 3) {
        console.log("Saliendo...");
    } else {
        console.log("Opción inválida.");
    }
} while (opcion !== 3);