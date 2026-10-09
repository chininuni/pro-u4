let notas = [85, 42, 91, 55, 78, 33, 67, 90];
let aprobados = 0;
for (let nota of notas) {
    if (nota >= 60) {
        console.log(nota);
        aprobados++;}}
console.log("Alumnos aprobados: " + aprobados);
