let suma = 0;
let cantidad = 0;
while(suma<=100){
    let numero = Number(prompt("Ingresa un número"));
    suma += numero;
    cantidad++;
}
console.log("Total:" suma);
console.log("Cantidad de números ingresados:" cantidad);