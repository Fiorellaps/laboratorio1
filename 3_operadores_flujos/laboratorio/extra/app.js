// -------  EJERCICIO 1  ------- //

let dia_semana = {
    day: "Viernes"
}
let asignatura
switch (dia_semana.day) {
    case "Lunes":
        asignatura = "Matemáticas";
        break;
    case "Martes":
        asignatura = "Lengua";
        break;
    case "Miércoles":
        asignatura = "Física";
        break;
    case "Jueves":
        asignatura = "Química";
        break;
    case "Viernes":
        asignatura = "Gimnsia";
        break;
    default:
        console.log("No hay clase!!");
        break;
}
document.getElementById("asignatura").innerHTML = "El " + dia_semana.day + " hay clase de " + asignatura;
console.log("El " + dia_semana.day + " hay clase de " + asignatura);

// -------  EJERCICIO 2  ------- //

const hora = 1;
let mensaje;
if (hora >= 6 && hora <= 12) {
    mensaje = "Buenos días";
} else if (hora >= 13 && hora <= 20) {
    mensaje = "Buenas tardes";
} else {
    mensaje = "Buenas noches";
}

document.getElementById("hora").innerHTML = "A las " + hora + " se dice: " + mensaje;
console.log("A las " + hora + " se dice:" + mensaje);

// -------  EJERCICIO 3  ------- //

const numero_dia = 2;
let nombre_dia
switch (numero_dia) {
    case 1:
        nombre_dia = "Lunes";
        break;
    case 2:
        nombre_dia = "Martes";
        break;
    case 3:
        nombre_dia = "Miércoles";
        break;
    case 4:
        nombre_dia = "Jueves";
        break;
    case 5:
        nombre_dia = "Viernes";
        break;
    case 6:
        nombre_dia = "Sábado";
        break;
    case 7:
        nombre_dia = "Domingo";
        break
    default:
        nombre_dia = "No existe";
        console.log("No es un día de la semana");
        break;
}
document.getElementById("dia").innerHTML = "El número " + numero_dia + " es el día:  " + nombre_dia;
console.log("El número " + numero_dia + " es el día:  " + nombre_dia);

// -------  EJERCICIO 4  ------- //

const nota1 = 7,
    nota2 = 3,
    nota3 = 9;

let nota_media = (nota1 + nota2 + nota3) / 3;

let calificacion;

if (nota_media == 5) {
    calificacion = "apta";
} else if (nota_media < 5) {
    calificacion = "no apta";
} else if (nota_media > 5 && nota_media <= 7) {
    calificacion = "notable";
} else {
    calificacion = "sobresaliente";
};

document.getElementById("notas").innerHTML = "Su calificación es " + calificacion + "  y su media es  " + nota_media;
console.log("Su calificación es " + calificacion + "  y su media es  " + nota_media);

// -------  EJERCICIO 5  ------- //
const dia_nacimiento = 8,
    mes_nacimiento = 3;
let horoscopo;
if ((mes_nacimiento == 3 && dia_nacimiento >= 21) || (mes_nacimiento == 4 && dia_nacimiento <= 19)) {
    horoscopo = "Aries";
} else if ((mes_nacimiento == 4 && dia_nacimiento >= 20) || (mes_nacimiento == 5 && dia_nacimiento <= 21)) {
    horoscopo = "Tauro";
} else if ((mes_nacimiento == 5 && dia_nacimiento >= 21) || (mes_nacimiento == 6 && dia_nacimiento <= 20)) {
    horoscopo = "Géminis";
} else if ((mes_nacimiento == 6 && dia_nacimiento >= 21) || (mes_nacimiento == 7 && dia_nacimiento <= 22)) {
    horoscopo = "Cáncer";
} else if ((mes_nacimiento == 7 && dia_nacimiento >= 23) || (mes_nacimiento == 8 && dia_nacimiento <= 22)) {
    horoscopo = "Leo";
} else if ((mes_nacimiento == 8 && dia_nacimiento >= 23) || (mes_nacimiento == 9 && dia_nacimiento <= 22)) {
    horoscopo = "Virgo";
} else if ((mes_nacimiento == 9 && dia_nacimiento >= 23) || (mes_nacimiento == 10 && dia_nacimiento <= 22)) {
    horoscopo = "Libra";
} else if ((mes_nacimiento == 10 && dia_nacimiento >= 23) || (mes_nacimiento == 11 && dia_nacimiento <= 21)) {
    horoscopo = "Escorpio";
} else if ((mes_nacimiento == 11 && dia_nacimiento >= 22) || (mes_nacimiento == 12 && dia_nacimiento <= 21)) {
    horoscopo = "Sagitario";
} else if ((mes_nacimiento == 12 && dia_nacimiento >= 22) || (mes_nacimiento == 1 && dia_nacimiento <= 19)) {
    horoscopo = "Capricornio";
} else if ((mes_nacimiento == 1 && dia_nacimiento >= 20) || (mes_nacimiento == 2 && dia_nacimiento <= 18)) {
    horoscopo = "Acuario";
} else if ((mes_nacimiento == 2 && dia_nacimiento >= 19) || (mes_nacimiento == 3 && dia_nacimiento <= 20)) {
    horoscopo = "Picis";
} else {
    horoscopo = "no existe";
};

document.getElementById("horoscopo").innerHTML = "Si ha nacido el  " + dia_nacimiento + "  del " + mes_nacimiento + ", su horoscopo es " + horoscopo;
console.log("Si ha nacido el  " + dia_nacimiento + "  del " + mes_nacimiento + ", su horoscopo es " + horoscopo);

// -------  EJERCICIO 6  ------- //
let numero = 222;

let valor;

if (numero % 2 == 0) {
    valor = "par";
} else {
    valor = "impar";
};

document.getElementById("numero").innerHTML = "El numero " + numero + " es " + valor;
console.log("El numero " + numero + " es " + valor);

// -------  EJERCICIO 7  ------- //
const numero_entero = 22;

let positivo_negativo;

if (numero_entero < 0) {
    positivo_negativo = "negativo";
} else {
    positivo_negativo = "positivo";
};

document.getElementById("positivo").innerHTML = "El numero " + numero_entero + " es " + positivo_negativo;
console.log("El numero " + numero_entero + " es " + positivo_negativo);

// -------  EJERCICIO 8  ------- //
numero = 100;

let mayor_100;

if (numero > 100) {
    mayor_100 = "mayor que 100";
} else if (numero == 100) {
    mayor_100 = "igual que 100";
} else {
    mayor_100 = "menor que 100";
};

document.getElementById("mayor-cien").innerHTML = "El numero " + numero + " es " + mayor_100;
console.log("El numero " + numero + " es " + mayor_100);

// -------  EJERCICIO 9  ------- //
const numero1 = -2,
    numero2 = 9,
    numero3 = 7;

if (numero3 == numero1 + numero2) {
    console.log("El numero " + numero3 + " es igual a la suma de " + numero1 + " y " + numero2);
} else {
    console.log("El numero " + numero3 + " no es igual a la suma de " + numero1 + " y " + numero2);
}

// -------  EJERCICIO 10  ------- //
var square = {
    sideOne: 3,
    sideTwo: 3,
    typeOfGemotricFigure: 'Cuadrado'
}
var circle = {
    radius: 1,
    typeOfGemotricFigure: 'Círculo'
}
const pi = 3.14;
let area;

function calcular_area(figura) {
    if (figura.typeOfGemotricFigure == "Cuadrado") {
        area = figura.sideOne * figura.sideTwo;
    } else if (figura.typeOfGemotricFigure == "Círculo") {
        area = (figura.radius ** 2) * pi;
    };
    return area;
};
console.log("El area del " + square.typeOfGemotricFigure + " es: " + calcular_area(square));
console.log("El area del " + circle.typeOfGemotricFigure + " es: " + calcular_area(circle));