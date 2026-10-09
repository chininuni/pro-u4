let mayor = 0;
let menor = 101;
let suma = 0;
for (let i = 1; i <= 20; i++) {
    let numero = Math.floor(Math.random() * 100) + 1;
    console.log(numero);
    if (numero > mayor) {
        mayor = numero;}
    if (numero < menor) {
        menor = numero;}
    suma += numero;}
let promedio = suma / 20;
console.log("Mayor: " + mayor);
console.log("Menor: " + menor);
console.log("Promedio: " + promedio);
