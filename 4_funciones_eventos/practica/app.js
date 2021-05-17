var altura = 1.6;
var peso = 60;
var sexo = "mujer";
/**
 * var pesoIdeal;
if (sexo == "hombre") {
    pesoIdeal = (altura * 100 - 150) * 0.75 + 50;
} else {
    pesoIdeal = (altura * 100 - 150) * 0.6 + 50;
}
console.log("Tu peso ideal sería ", pesoIdeal, "kilos");
var excesoPeso = peso - pesoIdeal;

if (excesoPeso >= 1) {
    console.log("Cuidado con los excesos", excesoPeso);
} else if (excesoPeso <= -1) {
    console.log("Debes engordar", excesoPeso * -1);
} else {
    console.log("Estas en tu peso ideal");

}
*/
/*
function calcularPesoIdeal(sexo, altura) {
    var factor = sexo == "homabre" ? 0.75 : 0.60;
    return (altura * 100 - 150) * factor + 50;
}

function calcularExcesoPeso(pesoActual, pesoIdeal) {
    return pesoActual - pesoIdeal;
}

function notificaEstado(excesoPeso) {
    if (excesoPeso >= 1) {
        return "Cuidado con los excesos " + excesoPeso;
    } else if (excesoPeso <= -1) {
        return "Debes engordar " + excesoPeso * -1;
    } else {
        return "Estas en tu peso ideal";

    }
}

function informePesoIdeal(altura, peso, sexo) {
    var pesoIdeal = calcularPesoIdeal(sexo, altura);
    var excesoPeso = calcularExcesoPeso(peso, pesoIdeal);
    console.log(notificaEstado(excesoPeso));
}
informePesoIdeal(1.9, 73, "hombre");
*/
// FORMATEADO
// Formula peso ideal:
// Altura en cm - 150 * 0.75|0.6 + 50;
var calcularPesoIdeal = (altura, sexo) => (altura * 100 - 150) * (sexo === "hombre" ? 0.75 : 0.60) + 50;
var calcularExcesoDePeso = (pesoActual, pesoIdeal) => pesoActual - pesoIdeal;
var notificaPesoIdeal = pesoIdeal => "Tu peso ideal corresponde a " + pesoIdeal + " kilos";

var notificaEstadoSobrepeso = (excesoPeso) => {
    if (excesoPeso >= 1) {
        return "Cuidado con los excesos! Debes adelgazar " + excesoPeso + " kilos";
    } else if (excesoPeso <= -1) {
        return "Come un poco más! Debes recuperar " + (excesoPeso * -1) + " kilos";
    } else {
        return "Wow! Estás ideal de la muerte!";
    }
}

var informePesoIdeal = (person) => {
    var pesoIdeal = calcularPesoIdeal(person.altura, person.sexo);
    console.log(notificaPesoIdeal(pesoIdeal));
    console.log(notificaEstadoSobrepeso(calcularExcesoDePeso(person.peso, pesoIdeal)));
}

// Datos de entrada, de server o user input.
var javi = {
    altura: 1.80,
    peso: 73,
    sexo: "hombre",
}

informePesoIdeal(javi);

/// Pedir nombre usuario y apellido
/*
function getName() {
    return document.getElementById("name").value;
}

function getLastname() {
    return document.getElementById("lastname").value;
}

function getFullName() {
    return getName() + " " + getLastname();
}

function submitName() {

    document.getElementById("full-name").innerHTML = getFullName();
}
document.getElementById("submit").addEventListener("click", submitName);
*/
/*
var getName = () => document.getElementById("name").value;
var getLastname = () => document.getElementById("lastname").value;
var getFullName = () => getName() + " " + getLastname();

var submitName = () => {
    document.getElementById("full-name").innerHTML = getFullName();
};

document.getElementById("submit").addEventListener("click", submitName);
*/
var getName = () => document.getElementById("name").value;
var getLastname = () => document.getElementById("lastname").value;
var getFullName = () => getName() + " " + getLastname();

var submitName = () => {
    document.getElementById("full-name").innerHTML = getFullName();
};

document.getElementById("name").addEventListener("keyup", submitName);
document.getElementById("lastname").addEventListener("keyup", submitName);