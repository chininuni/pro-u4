let temperaturas = [22, 35, 18, 40, 27, 15, 31];
let mayor = temperaturas[0];
let menor = temperaturas[0];
for (let temperatura of temperaturas) {
    if (temperatura > mayor) {
        mayor = temperatura;}
    if (temperatura < menor) {
        menor = temperatura;}}
console.log("Maxima: " + mayor + "°C / Minima: " + menor + "°C");
