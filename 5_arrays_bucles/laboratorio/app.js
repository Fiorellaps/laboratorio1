const carrito = [{
        id: 198752,
        name: "Tinta DJ27 Color",
        price: 52.95,
        count: 3,
        premium: true
    },
    {
        id: 75621,
        name: "Impresora ticketera PRO-201",
        price: 32.75,
        count: 2,
        premium: true
    },
    {
        id: 54657,
        name: "Caja de rollos de papel para ticketera",
        price: 5.95,
        count: 3,
        premium: true
    },
    {
        id: 3143,
        name: "Caja de folios DIN-A4 80gr",
        price: 9.95,
        count: 2,
        premium: false
    }
];

//IMPRIMIR TODOS LOS PRODUCTOS
/*
for (product of carrito) {
    printPurchase(product);
}

function printPurchase(product) {
    for (property in product) {
        console.log(property, ":", product[property]);
    }
    console.log("----------------------------------")
};
*/
// ELIMINAR PRDUCTO ID 54657 

for (i = 0; i < carrito.length; i++) {
    if (carrito[i].id == 54657) {
        carrito.splice(i, 1);
    }
}

// CALCULAR TOTAL
/*
function calculateTotal() {
    total = 0;
    for (product of carrito) {
        total += product.count * product.price;
    }
    console.log("Total:", total);
    return total;
}
calculateTotal()
*/

// FILTRAR PRODUCTOS PRIME
/*
for (product of carrito) {
    if (product.premium) {
        printPurchase(product);
    }
};

function printPurchase(product) {
    for (property in product) {
        console.log(property, ":", product[property]);
    }
    console.log("----------------------------------")
};
*/
//-------- EXTRA -----------

//GASTOS DE ENVIO O NO
function hasShippingCosts() {
    encontrado = false
    i = 0;
    while (!encontrado && i < carrito.length) {
        if (carrito[i].premium) {
            encontrado = false
        } else {
            encontrado = true
        }
        i++;
    }

    var gastosEnvio = encontrado ? "Este pedido tiene gastos de envío" : "Pedido sin gastos de envío";

    console.log(gastosEnvio);
}
//hasShippingCosts()

// CARRITO EN LISTADO
function createList() {
    var content;

    for (i = 0; i < carrito.length; i++) {
        var li = document.createElement("li");
        var p = document.createElement("p");
        content = "ID: " + carrito[i].id + "; Name: " + carrito[i].name + "; precio: " + carrito[i].price + "; cuantity: " + carrito[i].count + "; premium: " + carrito[i].premium;
        p.appendChild(document.createTextNode(content));
        document.querySelector("#lista-productos").appendChild(li).appendChild(p);
    }
}
//createList();

// 5% DESCUENTO SI >100

function calculateDescuento() {
    total = 0;
    for (product of carrito) {
        total += product.count * product.price;
    }
    if (total > 100) {
        total = total * 0.95;
        console.log("Total con descuento:", total);
    } else {
        console.log("Total sin descuento:", total);
    }

}
calculateDescuento()