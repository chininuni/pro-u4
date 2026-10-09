let remeras = ["blanca", "negra", "azul"];
let pantalones = ["jeans", "cargo", "formal"];
let total = 0;
for (let i = 0; i < remeras.length; i++) {
    for (let j = 0; j < pantalones.length; j++) {
        console.log("Remera " + remeras[i] + " con " + pantalones[j]);
        total++;}}
console.log("Total de combinaciones: " + total);
