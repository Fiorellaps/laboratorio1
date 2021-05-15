var noches = prompt("Introduce el numero de noches");
var precio = 80;
var total = noches * 80;

/*var booking={
    count:5,
    precio: 127.95
};
let total = booking.count * booking.precio;
console.log(total)
if(total > 500){
let discount = total * 0.2;
total = total -discount;
}

*/

if (total > 500) {
    document.getElementById("detalle").innerHTML = "Total sin descuento: " + total;

    document.getElementById("descuento").innerHTML = "Descuento: " + total * 0.2;

    total = total * 0.8;
};


//total = total > 500 ? total * 0.8 : total;
document.getElementById("precio").innerHTML = total + " € con descuento";