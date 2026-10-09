let cara1 = 0;
let cara2 = 0;
let cara3 = 0;
let cara4 = 0;
let cara5 = 0;
let cara6 = 0;
for (let i = 1; i <= 100; i++) {
    let dado = Math.floor(Math.random() * 6) + 1;
    if (dado === 1) {
        cara1++;
    } else if (dado === 2) {
        cara2++;
    } else if (dado === 3) {
        cara3++;
    } else if (dado === 4) {
        cara4++;
    } else if (dado === 5) {
        cara5++;
    } else if (dado === 6) {
        cara6++;}}
console.log("El 1 salio " + cara1 + " veces");
console.log("El 2 salio " + cara2 + " veces");
console.log("El 3 salio " + cara3 + " veces");
console.log("El 4 salio " + cara4 + " veces");
console.log("El 5 salio " + cara5 + " veces");
console.log("El 6 salio " + cara6 + " veces");
