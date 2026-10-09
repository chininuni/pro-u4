let dado1 = Math.floor(Math.random() * 6) + 1;
let dado2 = Math.floor(Math.random() * 6) + 1;
let suma = dado1 + dado2;
console.log("Dado 1: " + dado1);
console.log("Dado 2: " + dado2);
console.log("Suma: " + suma);
if (suma === 7) {
    console.log("Numero de la suerte!");
} else {
    console.log("Resultado: " + suma);}
