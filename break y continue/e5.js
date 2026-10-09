let suma = 0;
for (let i = 1; i <= 8; i++) {
    let numero = Number(prompt("Ingresá un número:"));
    if (numero === 0) {
        console.log("Saltando el cero");
        continue;}
    if (numero < 0) {
        break;}
    suma += numero;}
console.log("La suma total es:", suma);