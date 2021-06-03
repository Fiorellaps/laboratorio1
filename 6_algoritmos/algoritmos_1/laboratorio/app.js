const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;
// Entrada.
const products = [{
        description: "Goma de borrar",
        price: 0.25,
        tax: LOWER_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Lápiz H2",
        price: 0.4,
        tax: LOWER_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Cinta rotular",
        price: 9.3,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Papelera plástico",
        price: 2.75,
        tax: REGULAR_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Escuadra",
        price: 8.4,
        tax: REGULAR_TYPE,
        stock: 3,
        units: 0,
    },
    {
        description: "Pizarra blanca",
        price: 5.95,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Afilador",
        price: 1.2,
        tax: LOWER_TYPE,
        stock: 10,
        units: 0,
    },
    {
        description: "Libro ABC",
        price: 19,
        tax: EXEMPT_TYPE,
        stock: 2,
        units: 0,
    },
];

// 1. crear html a partir de la lista




var createItemDescription = (description, i) => {
    var itemDescription = document.createElement("span");
    itemDescription.innerHTML = description;
    var item = document.getElementById("item" + i);
    item.appendChild(itemDescription);
};
var createItemPrice = (price, i) => {
    var itemPrice = document.createElement("span");
    itemPrice.innerHTML = "value" + price + "€/uds";
    var item = document.getElementById("item" + i);
    item.appendChild(itemPrice);
};

var createInputUnits = (max, i) => {
    var inputUnits = document.createElement("input");
    inputUnits.setAttribute("id", "product-unit" + i);
    inputUnits.setAttribute("type", "number");
    inputUnits.setAttribute("min", 0);
    inputUnits.setAttribute("max", max)
    inputUnits.addEventListener("change", event => products[i].units = (event.target.value))
        //inputUnits.addEventListener("change", event => disableCalculate(event))

    var item = document.getElementById("item" + i);
    item.appendChild(inputUnits);
};
var createSeparator = (i) => {
    var separator = document.createElement("span");
    separator.innerHTML = "-";
    var item = document.getElementById("item" + i);
    item.appendChild(separator);
};

for (i = 0; i < products.length; i++) {
    // crear ordered list
    var list = document.createElement("ol");
    list.setAttribute("id", "list");
    var productList = document.getElementById("product-list");
    productList.appendChild(list);
    // añadir elementos a la lista
    var item = document.createElement("li");
    item.setAttribute("id", "item" + i);
    var itemsList = document.getElementById("list");
    itemsList.appendChild(item);
    // añadimos descripcion
    createItemDescription(products[i].description, i);
    // creamos un separador
    createSeparator(i);
    // añadimos precio
    createItemPrice(products[i].price, i);
    // crear inputs
    createInputUnits(products[i].stock, i);
}

// 2. crear factura

// 1  calcular subtotoal 

var calculateSubtotal = () => {
    var subtotal = 0;
    for (var product of products) {
        subtotal += product.units * product.price;
    };
    return subtotal;
};

// 2 calcular IVA

var calculateIVA = () => {
    var iva = 0;
    for (var product of products) {
        iva += product.units * product.price * product.tax / 100;
    };
    return iva;
};

// 3 calcular total
var calculateTotal = () => calculateSubtotal() + calculateIVA();

// imprimir factura
var calculateInvoice = () => {
    document.getElementById("subtotal").innerHTML = "Subtotal " + calculateSubtotal();
    document.getElementById("IVA").innerHTML = "IVA " + calculateIVA();
    document.getElementById("total").innerHTML = "Total " + calculateTotal();
}

document.getElementById("calculate-price").addEventListener("click", calculateInvoice);

// ---- EXTRA --- //

// no me funciona :(

var disableCalculate = (event) => {
        var encontrado = false;
        var i = 0;
        while (!encontrado && i < products.length) {
            if (products[i].units !== 0) {
                encontrado = true;
            }
            i++;
        };
        if (!encontrado) {
            document.getElementById("calculate-price").disabled = true;
        } else {
            document.getElementById("calculate-price").disabled = false;
        }
    }
    // esto no es correcto pero no sé donde llamar a la función disableCalculate
    //document.getElementById("calculate-price").addEventListener("click", disableCalculate);