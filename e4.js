let continuar;
do {
    let numero1 = Number(prompt("Ingresa el primer número:"));
    let numero2 = Number(prompt("Ingresa el segundo número:"));
    let operacion = prompt("Ingresa una operación (+, -, *, /):");
    let resultado;
    if (operacion === "+") {
        resultado = numero1 + numero2;
    } else if (operacion === "-") {
        resultado = numero1 - numero2;
    } else if (operacion === "*") {
        resultado = numero1 * numero2;
    } else if (operacion === "/") {
        resultado = numero1 / numero2;
    } else {
        console.log("Operación inválida.");
        resultado = null;
    }
    if (resultado !== null) {
        console.log("Resultado: " + resultado);
    }
    continuar = prompt("¿Quieres hacer otro cálculo? (si/no)");
} while (continuar === "si");
console.log("Hasta luego.");