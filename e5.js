let numero = Number(prompt("Ingrese un número entero positivo."));
let original = numero;
let cantidadDigitos = 0;
while(numero>0){
    numero= Math.floor(numero/10);
    cantidadDigitos++;
}
console.log("El número" + original + "tiene" + cantidadDigitos + "dígitos");