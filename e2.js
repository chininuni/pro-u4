let secreto = Math.floor(Math.random() * 10) + 1;
let numero;
let intentos = 0;
do {
    numero = Number(prompt("Adivina el número (entre 1 y 10):"));
    intentos++;
    if (numero < secreto) {
        console.log("El número es mayor.");
    } else if (numero > secreto) {
        console.log("El número es menor.");
    }
} while (numero !== secreto);
console.log("¡Adivinaste!");
console.log("Necesitaste " + intentos + " intentos.");