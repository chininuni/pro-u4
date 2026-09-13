let productos = Number(prompt("¿Cuántos productos quieres registrar?"));
let precioTotal = 0;
let precioMasAlto = 0;
for (let i = 1; i <= productos; i++) {
    let precio = Number(prompt("Ingresa el precio del producto " + i + ":"));
    precioTotal += precio;
    if (precio > precioMasAlto) {
        precioMasAlto = precio;
    }
}
console.log("Precio total: $" + precioTotal);
console.log("El producto más caro cuesta: $" + precioMasAlto);
