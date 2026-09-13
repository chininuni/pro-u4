let cantidadNotas = Number(prompt("¿Cuántas notas quieres ingresar?"));
let sumaTotal = 0;
for (let i = 1; i <= cantidadNotas; i++) {
    let nota = Number(prompt("Ingresa la nota " + i + ":"));
    sumaTotal += nota;
}
let promedio = sumaTotal / cantidadNotas;
console.log("Suma total: " + sumaTotal);
console.log("Promedio: " + promedio);

