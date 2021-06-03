var productList = [{
        product: "Jamón Ibérico",
        units: 1,
        price: 9.99,
    },
    {
        product: "Queso Tostado",
        units: 6,
        price: 4.45,
    },
    {
        product: "Vino Tinto",
        units: 12,
        price: 8.15,
    },
];

// recorre lista productos y calcular costes 
// para cada producto calcular coste
// coste total = unit * price
// conocer descuento: necesitacmos unidades y coste total del producto
// si el coste total del produco es > 50 aplicar descuento

var getDiscount = (units, cost) => (units > 5 ? 5 : 0) + (cost > 50 ? 5 : 0);

var productCost = product => {
    var productCost = product.units * product.price;
    var productDiscount = getDiscount(product.units, productCost);
    return productCost * (1 - productDiscount / 100);
}

var totalCost = productList => {
    var totalCost = 0;
    for (var product of productList) {
        totalCost += productCost(product);
    }
    return (totalCost)
}
console.log(totalCost(productList));


/*
La entrada debe ser un número entre 0 y 99999999.
Debemos calcular el resto de la división entera entre el número introducido y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes: (T, R, W, A, G, M, Y, F, P, D, X, B, N, J,
Z, S, Q, V, H, L, C, K, E)
Si lo introducido no es un número deberá indicarse con un alert al usuario y volver a preguntar los datos.
Deberá repetirse el proceso hasta que el usuario pulse "Cancelar".
*/
//paso 1 pedir datos
var number;
do {

    var rest;
    var letter;
    number = prompt("Introduce tu numero de DNI");

    // paso2: comprobar que es un numero
    if (parseInt(number) === Number(number)) {
        console.log("Es un número", number);
        number = Number(number);
        // paso 3: comprobar qeu es un numero valido (0 y 999999)
        if (number >= 0 && number <= 99999999) {
            console.log("EL numero es váido", number);
            // paso 4: obtener el resta y la letra
            rest = number % 23;
            switch (rest) {
                case 0:
                    letter = "T";
                    break;
                case 1:
                    letter = "R";
                    break;
                case 2:
                    letter = "W";
                    break;
                case 3:
                    letter = "A";
                    break;
                case 4:
                    letter = "G";
                    break;
                case 5:
                    letter = "M";
                    break;
                case 6:
                    letter = "Y";
                    break;
                case 7:
                    letter = "F";
                    break;
                case 8:
                    letter = "P";
                    break;
                case 9:
                    letter = "D";
                    break;
                case 10:
                    letter = "X";
                    break;
                case 11:
                    letter = "B";
                    break;
                case 12:
                    letter = "N";
                    break;
                case 13:
                    letter = "J";
                    break;
                case 14:
                    letter = "Z";
                    break;
                case 15:
                    letter = "S";
                    break;
                case 16:
                    letter = "Q";
                    break;
                case 17:
                    letter = "V";
                    break;
                case 18:
                    letter = "H";
                    break;
                case 19:
                    letter = "L";
                    break;
                case 20:
                    letter = "C";
                    break;
                case 21:
                    letter = "K";
                    break;
                case 22:
                    letter = "E";
                    break;
            }
            alert("Número: " + number + ", Letra: " + letter);
            number = null;
        } else {
            lert("El número de DNI es erróneo");
        }
    } else {
        if (number !== null)
            alert(number + " No es un número");
    }
} while (number !== null);
// primer requisito: la entrada es un número
// segundo requisito: el número está ene 0 y 99999999
// tercer requisito: si lo introduciso no es un número volver a preguntar