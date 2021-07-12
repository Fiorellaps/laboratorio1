/**
var myEmptyArray = new Array(3); // Array vacio de 3 posiciones.
console.log(myEmptyArray); // [empty × 3]


var myArray = new Array(3); // Array vacio de 3 posiciones.
myArray.fill("Hola");
console.log(myArray); // ["Hola", "Hola", "Hola"]

var myArray = new Array(3).fill("Hola");
console.log(myArray); // ["Hola","Hola","Hola"]
*/

// ----------- AGENDA ------------ //

/**
 * Horas libres
 * Horas ocupadas
 * primera hora en la que todos los miembros de equipo están libres; primer hueco en sus agendas
 */

// Constantes
var WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
];

// Datos
var myTeam = [{
        name: "María",
        availability: new Array(8).fill(true)
    },
    {
        name: "Pedro",
        availability: new Array(8).fill(true)
    },
    {
        name: "Esther",
        availability: new Array(8).fill(true)
    },
    {
        name: "Marcos",
        availability: new Array(8).fill(true)
    },
];

// 1) Generación aleatoria de la disponibilidad

/**
 * Recorrer todos los miembros del equipo, y a su vez, para cada miembro, 
 * todas las franjas horarias de su disponibilidad, 
 * e ir asignando aleatoriamente si está disponible o no en dicha franja.
 */
var generateRandomAvailability = (myTeam) => {
        for (var employee of myTeam) {
            for (let i = 0; i < employee.availability.length; i++) {
                var hour = employee.availability[i];
                employee.availability[i] = Math.round(Math.random()) === 1;
            }
        }
    }
    //console.log(generateRandomAvailability(myTeam));

/**
    for (var employee of myTeam) {
    console.log("Disponibilidad de", employee.name);
    for (let i = 0; i < employee.availability.length; i++) {
        console.log(WORK_HOURS[i], ":", employee.availability[i] === true ? "Sí" : "No");
    }
}
*/

// 2. Buscar hueco libre

/**
 * comprobar la primera franja horaria en la que todos los miembros del equipo están disponibles.
 */


var findMeetingHour = (myTeam) => {
    found = false;
    teamAvailability = new Array(myTeam.length).fill(false);
    var i = 0;
    var meetingHour = undefined;
    while (!found && i < WORK_HOURS.length) {
        for (let j = 0; j < myTeam.length; j++) {
            teamAvailability[j] = myTeam[j].availability[i];
        }
        if (teamAvailability.indexOf(false) == -1) {
            found = true;
            meetingHour = WORK_HOURS[i];
        }
        i++;
    }
    return (meetingHour);
}

//meetingHour = findMeetingHour(myTeam);
//console.log(meetingHour == undefined ? "Lo siento. No hay hueco disponible en el equipo." : "Hueco encontrado en el horario: " + meetingHour);

// ----------- Calculadora de cambio óptimo de billetes y monedas ------------ //

/**
var calcularBilletes = (total, entregado) => {
    var diferencia = entregado - total;
    var devolucion = {};
    var i = 0;
    if (diferencia < 0) {
        console.log("Error: Has introducido menos dinero de lo que se pedía!!");
    }
    while (diferencia > 0 && i < dinero.length) {

        if (Math.floor(diferencia / dinero[i]) != 0) {
            devolucion[dinero[i]] = Math.floor(diferencia / dinero[i]);
            diferencia -= Math.floor(diferencia / dinero[i]) * dinero[i];
        }
        i++;
    }
    return devolucion;
}
var printCash = () => {
    var entregado = document.getElementById("entregado").value;
    var total = document.getElementById("total").value;
    if (entregado < 0 || total < 0) {
        console.log("Error: No se aceptan valores negativos");
    } else {
        devolucion = calcularBilletes(total, entregado);
        for (const dinero in devolucion) {
            if (dinero >= 5) {
                console.log(devolucion[dinero] + " billete de " + dinero + " euros");
            } else {
                console.log(devolucion[dinero] + " moneda de " + dinero + " céntimos");
            }
        }
    }
}

document.getElementById("calcular").addEventListener("click", printCash);

*/

//  Cálculo según los billetes y monedas que tengamos en nuestra caja.
var dinero = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];

dineroActual = {
    0.01: 0,
    0.02: 0,
    0.05: 0,
    0.1: 0,
    0.2: 0,
    0.5: 0,
    1: 0,
    2: 0,
    5: 0,
    10: 0,
    20: 0,
    50: 0,
    100: 0,
    200: 0
};

// Leer de cada uno de los inputs la cantidad de cada billete/moneda disponible
var getAvailableCash = () => {
    for (moneda in dineroActual) {
        cantidad = parseInt(document.getElementById(moneda).value);
        if (!isNaN(cantidad)) {
            dineroActual[moneda] = cantidad;
        }
    }
}

// Calcular los billetes comprobando que hay disponibilidad
var calcularBilletes = (total, entregado) => {
    var diferencia = entregado - total;
    var devolucion = {};
    var i = 0;
    if (diferencia < 0) {
        console.log("Error: Has introducido menos dinero de lo que se pedía!!");
    }
    while (diferencia > 0 && i < dinero.length) {
        if (Math.floor(diferencia / dinero[i]) != 0 && dineroActual[dinero[i]] > 0) {
            devolucion[dinero[i]] = Math.floor(diferencia / dinero[i]);
            diferencia -= Math.floor(diferencia / dinero[i]) * dinero[i];
            dineroActual[dinero[i]] -= 1;
        }
        i++;
    }
    return devolucion;
}

// Imprimir la vuelta
var printCash = () => {
    getAvailableCash();
    var entregado = document.getElementById("entregado").value;
    var total = document.getElementById("total").value;
    if (entregado < 0 || total < 0) {
        console.log("Error: No se aceptan valores negativos");
    } else {
        devolucion = calcularBilletes(total, entregado);
        for (const dinero in devolucion) {
            if (dinero >= 5) {
                console.log(devolucion[dinero] + " billete de " + dinero + " euros");
            } else if (dinero >= 1) {
                console.log(devolucion[dinero] + " moneda de " + dinero + " euros");
            } else {
                console.log(devolucion[dinero] + " moneda de " + dinero + " céntimos");
            }
        }
    }
}

document.getElementById("calcular").addEventListener("click", printCash);