const product = {
    count: 3,
    price: 12.55,
    type: "ropa"
};

const product2 = {
    count: 3,
    price: 12.55,
    type: "libro"
};

const product3 = {
    count: 3,
    price: 12.55,
    type: "alimencion"
};

const product4 = {
    count: 3,
    price: 12.55,
    type: "otro"
};
//product.count = product.count < 0 ?  product.count = 0 : product.count;

let precio_sin_iva;
if (product.count <= 0) {
    precio_sin_iva = 0;
} else {
    precio_sin_iva = product.count * product.price;
}

let iva, precio_con_iva;
switch (product.type) {
    case "alimentacion":
        iva = precio_sin_iva * 0.1;
        precio_con_iva = precio_sin_iva + iva;
        break;
    case "libro":
        iva = precio_sin_iva * 0.04;
        precio_con_iva = precio_sin_iva + iva;
        break;

    default:
        iva = precio_sin_iva * 0.21;
        precio_con_iva = precio_sin_iva + iva;
        break;
};

console.log("Sin IVA: " + precio_sin_iva);
console.log("Con IVA: " + precio_con_iva);
console.log("IVA: " + iva);
document.getElementById("producto").innerHTML = "Prducto: " + product.type;
document.getElementById("precio-normal").innerHTML = "Precio sin IVA: " + precio_sin_iva;
document.getElementById("valor-iva").innerHTML = "IVA: " + iva;
document.getElementById("precio-iva").innerHTML = "Precio +IVA: " + precio_con_iva;

//Tiene el mismo efecto
//product.count = product.count < 0 ?  product.count = 0 : product.count;

// FUNCION GETTOTALVAT
function getVat(product) {
    let iva, precio_con_iva;
    switch (product.type) {
        case "alimentacion":
            iva = product.price * 0.1;
            precio_con_iva = product.price + iva;
            break;
        case "libro":
            iva = product.price * 0.04;
            precio_con_iva = product.price + iva;
            break;

        default:
            iva = product.price * 0.21;
            precio_con_iva = product.price + iva;
            break;
    };

    return precio_con_iva;

};

function getTotalVat(product) {
    return product.count > 0 ? product.count * getVat(product) : 0;
};

console.log("total:" + getTotalVat(product));


// SUELDO NETO

const empleado = {
    bruto: 17000,
    hijos: 0,
    pagas: 12
}

let neto_anual, retencion;

/*if (empleado.bruto < 12000) {
    retencion = 0;
} else if (empleado.bruto < 24000) {
    retencion = 0.08;
} else if (empleado.bruto < 34000) {
    retencion = 0.16;
} else {
    retencion = 0.3;
};
*/
//ACTUAL
if (empleado.bruto < 12000) {
    retencion = 0.19;
} else if (empleado.bruto < 20200) {
    retencion = 0.24;
} else if (empleado.bruto < 35200) {
    retencion = 0.37;
} else {
    retencion = 0.45;
};
console.log("retencion:" + retencion);
if (empleado.hijos > 0 && retencion != 0) {
    retencion = retencion - 0.02;
};
console.log("retencion:" + retencion);


neto_anual = empleado.bruto - (empleado.bruto * retencion);
console.log(neto_anual);
//document.getElementById("sueldo-neto").innerHTML = "Sueldo neto:" + neto_anual;
let neto_mensual;
if (empleado.pagas == 14) {
    neto_mensual = neto_anual / empleado.pagas;
} else {
    neto_mensual = neto_anual / 12;
};

console.log("mensual:" + neto_mensual);
document.getElementById("sueldo-neto").innerHTML = "Neto Anual:" + neto_anual + " ; Neto Mensual: " + neto_mensual;