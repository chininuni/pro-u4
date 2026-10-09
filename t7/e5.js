let contador = 0;
let suma = 0;
let numero;
while (contador < 20) {
    numero = Number(prompt("Ingresa un numero (-1 para terminar):"));
    if (numero === -1) {
        break;}
    suma += numero;
    contador++;}
console.log("Numeros ingresados: " + contador);
console.log("Suma total: " + suma);
