let suma = 0;
while (true) {
    let numero = Number(prompt("Ingresá un número:"));
    if (numero < 0) {
        break;}
    suma += numero;}
console.log("La suma total es:", suma);