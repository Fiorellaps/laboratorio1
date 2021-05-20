const bookings = [{
        id: 1,
        price: 45.30,
        count: 3,
        room: "standard",
        prepaid: false,
        succeeded: true
    },
    {
        id: 2,
        price: 92.45,
        count: 4,
        room: "superior",
        prepaid: false,
        succeeded: true
    },
    {
        id: 3,
        price: 63.50,
        count: 7,
        room: "standard",
        prepaid: true,
        succeeded: false
    },
    {
        id: 3,
        price: 37.50,
        count: 2,
        room: "standard",
        prepaid: true,
        succeeded: true
    },
    {
        id: 5,
        price: 87.90,
        count: 5,
        room: "superior",
        prepaid: true,
        succeeded: false
    }
];

/*for (i = 0; i < bookings.length; i++) {
    imprimir(bookings[i]);
}
*/


/*
for (reserva of bookings) {
    imprimir(reserva);
};

function imprimir(booking) {
    console.log("---------")
    for (propiedad in booking) {
        console.log(propiedad, ":", booking[propiedad]);
    }
};

function existeError() {
    let succeeded = true;
    let i = 0;
    //hacemos while porque queremps que salga cuando falle por primera vez
    while (succeeded) {
        console.log("Posicion reserva", i);
        succeeded = succeeded && bookings[i].succeeded;
        i++;
    }
    return !succeeded;
}

console.log("Existe error en la reserva", existeError());

for (reserva of bookings) {
    if (reserva.succeeded) imprimir(reserva);
}


for (reserva of bookings) {
    if (reserva.prepaid) {
        imprimir(reserva);
    }
}
function imprimir(booking) {
    console.log("---------")
    for (propiedad in booking) {
        console.log(propiedad, ":", booking[propiedad]);
    }
};
*/
function totalPrecios() {
    let total = 0;
    for (reserva of bookings) {
        total += reserva.price * reserva.count;
    }
    console.log("Total:", total);
}
//totalPrecios()
/*
for (reserva of bookings) {
    reserva.price_descuento = reserva.price * 0.9;
}

for (reserva of bookings) {
    imprimir(reserva);
};

for (reserva of bookings) {
    if (reserva.prepaid && reserva.succeeded == false) {
        imprimir(reserva);
    }
}
*/
encontrada = false;
for (i = 0; i < bookings.length; i++) {
    const reserva1 = bookings[i];
    for (j = i + 1; j < bookings.length; j++) {
        reserva2 = bookings[j]
        encontrada = encontrada || reserva1.id === reserva2.id;
    }
}
console.log("Hay respetidos:", encontrada);

function imprimir(booking) {
    console.log("---------")
    for (propiedad in booking) {
        console.log(propiedad, ":", booking[propiedad]);
    }
};