let mayor = 0;
for (let i = 1; i <= 10; i++) {
    let numero = Math.floor(Math.random() * 50) + 1;
    console.log(numero);
    if (numero > mayor) {
        mayor = numero;}}
console.log("El mayor es: " + mayor);
