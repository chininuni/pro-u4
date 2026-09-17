let saldo = 5000;
while(saldo>0){
    let retiro = Number(prompt("¿Cuánto desea retirar?"));
if (retiro>saldo){
    console.log("Saldo insuficiente.");
} else {
    saldo-=retiro;
    console.log("Saldo restante: $"saldo);
}
}
console.log("Cuenta vaciada.")