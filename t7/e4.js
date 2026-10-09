let total = 0;
let i = 1;
while (i < 10) {
    total += i;
    i++; // era incorrecto usar i-- porque alejaba a i de la condicion de corte.
}
console.log(total);
