let numero;
do {
    numero = Number(prompt("Ingresa un número entre 1 y 100:"));
} while (numero < 1 || numero > 100);
console.log("Número ingresado: " + numero);