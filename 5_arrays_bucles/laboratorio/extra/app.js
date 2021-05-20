//Ejercicio 1
/*
var datos = [25, 2.05, 1000, 63, 4.01, -9];

for (i = 0; i < datos.length; i++) {
    console.log(datos[i]);
}
for (i in datos) {
    console.log(datos[i]);
}
for (numero of datos) {
    console.log(numero);
}
i = 0;
while (i < datos.length) {
    console.log(datos[i]);
    i++;
}
i = 0;
do {
    console.log(datos[i]);
    i++
} while (i < datos.length)
*/

// Ejercico 2
/*
var datos = [14, 2, 2.02, 63, 0, -9];

for (numero of datos) {
    if (numero > 0) {
        console.log(numero)
    }
}
*/
// Ejercicio 3
/*
var datos = [14, 2, 2.02, 63, 0, -9];
var mayoresCero = [],
    menoresCero = [];
for (numero of datos) {
    if (numero > 0) {
        mayoresCero.push(numero);
    } else {
        menoresCero.push(numero);
    }
}
console.log(mayoresCero);
console.log(menoresCero);
*/
//Ejercicio 4
/*
var datos = [14, 2, 2.02, 63, 0, -9];

function eliminarMenoresCero() {
    for (i = 0; i < datos.length; i++) {
        if (datos[i] <= 0) {
            datos.splice(i, 1);
            i--;
        }
    }
    console.log(datos);
}
eliminarMenoresCero()
*/
//Ejercicio 5
/*
var personas = [
    { id: 1, name: "Jhon", },
    { id: 2, name: "Doe", },
    { id: 3, name: "Clara", },
    { id: 4, name: "Elisa", },
    { id: 4, name: "Pedro", },
];

for (i = personas.length - 1; i >= 0; i--) {
    console.log(personas[i]);
}
*/

//EJercicio 6
/*
var personas = [{ id: 1, name: "Jhon", age: 25, }, { id: 2, name: "Doe", age: 8, }, {
    id: 3,
    name: "Clara",
    age: 15,
}, { id: 4, name: "Elisa", age: 30, }, {
    id: 4,
    name: "Pedro",
    age: 18,
}, ];
var mayores18 = [];
for (persona of personas) {
    if (persona.age >= 18) {
        console.log(persona);
        //mayores18.push(persona);
    }
}
*/
// Ejercicio 7
/*
var personas = [{ id: 1, name: "Jhon", age: 25, }, { id: 2, name: "Doe", age: 8, }, {
    id: 3,
    name: "Clara",
    age: 15,
}, { id: 4, name: "Elisa", age: 30, }, {
    id: 4,
    name: "Pedro",
    age: 18,
}, ];
var mayores18 = [],
    menores18 = [];
for (persona of personas) {
    if (persona.age >= 18) {
        mayores18.push(persona);
    } else {
        menores18.push(persona);
    }
}
console.log(mayores18);
console.log(menores18);
*/

//Ejercicio 8
/*
var hoteles = [{
        hoteId: 1,
        hotelName: "Jhon",
        availableRooms: 25,
        price: 10.20,
    },
    {
        hoteId: 2,
        hotelName: "Doe",
        availableRooms: 8,
        price: 4.25,
    },
    {
        hoteId: 3,
        hotelName: "Clara",
        availableRooms: 15,
        price: 14.30,
    },
    {
        hoteId: 4,
        hotelName: "Elisa",
        availableRooms: 30,
        price: 10,
    },
    {
        hoteId: 4,
        hotelName: "Pedro",
        availableRooms: 9,
        price: 8.10,
    },
];

for (hotel of hoteles) {
    if (hotel.availableRooms < 10) {
        hotel.price = hotel.price * 1.10;
    };
    muestraHotel(hotel);
    console.log("-----------")
}

function muestraHotel(hotel) {
    for (property in hotel) {
        console.log(property + ": " + hotel[property]);
    }
}
*/

//Ejercicio 9

var hoteles = [{
        hoteId: 1,
        hotelName: "Hotel 1",
        availableRooms: 25,
        price: 10.20,
    },
    {
        hoteId: 2,
        hotelName: "Hotel 2",
        availableRooms: 8,
        price: 4.25,
    },
    {
        hoteId: 3,
        hotelName: "Hotel 3",
        availableRooms: 15,
        price: 14.30,
    },
    {
        hoteId: 4,
        hotelName: "Hotel 4",
        availableRooms: 30,
        price: 10,
    },
    {
        hoteId: 5,
        hotelName: "Hotel 5",
        availableRooms: 9,
        price: 8.10,
    },
]
var hotelesIncremento = [];
for (hotel of hoteles) {
    if (hotel.availableRooms < 10) {
        hotel.price = hotel.price * 1.10;
        hotelesIncremento.push(hotel);
    };
}

function muestraHotel(listaHotel) {
    for (hotel of listaHotel) {
        for (property in hotel) {
            console.log(property + ": " + hotel[property]);

        };
        console.log("--------------");
    };
};

muestraHotel(hotelesIncremento);


//Ejercicio 10
/*
var hoteles = [{ hoteId: 1, hotelName: "Hotel 1", availableRooms: 25, price: 10.20, }, {
    hoteId: 2,
    hotelName: "Hotel 2",
    availableRooms: 8,
    price: 4.25,
}, {
    hoteId: 3,
    hotelName: "Hotel 3",
    availableRooms: 15,
    price: 14.30,
}, {
    hoteId: 4,
    hotelName: "Hotel 4",
    availableRooms: 30,
    price: 10,
}, {
    hoteId: 5,
    hotelName: "Hotel 5",
    availableRooms: 10,
    price: 8.10,
}, ]

function getHotel() {
    var hotelIntroducido = document.getElementById("textBox").value;
    encontrado = false;
    i = 0;
    while (!encontrado && i < hoteles.length) {
        if (hotelIntroducido.toUpperCase() == hoteles[i].hotelName.toUpperCase()) {
            encontrado = true;
        }
        i++;
    }

    if (encontrado) {
        document.getElementById("result").innerHTML = "El hotel: " + hotelIntroducido + " existe :)";
    } else {
        document.getElementById("result").innerHTML = "El hotel: " + hotelIntroducido + " NO existe :(";
    }
}
document.getElementById("myButton").addEventListener("click", getHotel);
*/