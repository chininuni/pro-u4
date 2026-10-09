let rondas = Number(prompt("¿Cuántas rondas jugaste?"));
let puntajeTotal = 0;
for (let i = 1; i <= rondas; i++) {
    let puntaje = Number(prompt("Ingresa el puntaje de la ronda " + i + ":"));
    puntajeTotal += puntaje;
}
let promedio = puntajeTotal / rondas;
console.log("Puntaje total: " + puntajeTotal);
console.log("Promedio por ronda: " + promedio);
