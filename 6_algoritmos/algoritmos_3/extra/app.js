// ----Funciones básicas -------

var saludar = () => "Hola Mundo";

console.log(saludar());

var saludarNombre = (nombre) => "Hola " + nombre;

console.log(saludarNombre("Fiorella"))

var toMayusculas = (palabras) => palabras.toUpperCase();

console.log(toMayusculas("Hola Fiorella"));

var toMinusculas = (palabras) => palabras.toLowerCase();

console.log(toMinusculas("Hola Fiorella"));

var suma = (num1, num2) => num1 + num2;

console.log(suma(2, 3));

var concatena = (string1, string2, string3) => string1 + " " + string2 + " " + string3;

console.log(concatena("hola", "Fio", "Chula"));

var persona = {
    name: "Fio",
    age: "12"
}
var crearPropiedad = (objeto) => {
    objeto.id = null
    return objeto
}
crearPropiedad(persona)
console.log(persona)

// ----Funciones con if/else, switches y comprobaciones -------

/*
Implementa una función que admita un parámetro, de cualquier tipo, y que compruebe si el parámetro es undefined o
null */

var compruebaNull = (entrada) => (entrada === undefined || entrada === null);

var coche = "null";
console.log(compruebaNull(coche));

/*
Implementa una función que admita un número como parámetro y devuelva si el número es positivo o negativo.
*/
var compruebaNumero = (numero) => (numero < 0) ? "Negativo" : "Positivo";

var numero = 0;
console.log(compruebaNumero(numero));
/*
Implementa una función que admita un número como parámetro y diga, por consola, si es mayor que 100, menor que
100 o exactamente 100.
*/

var compruebaNumero100 = (numero) => {
    var result;
    if (numero === 100) {
        result = "Exactamente 100";
    } else if (numero < 100) {
        result = "Menor que 100";
    } else {
        result = "Mayor que 100";
    }

    return result;
};

var numero = 00;
console.log(compruebaNumero100(numero));
/*
Implementa una función que admita como parámetro un objeto y devuelva si dicho objeto tiene una propiedad ‘name’
o no.*/

var compruebaName = (object, name) => object[name] === undefined ? "No tiene es propiedad" : "Si tiene esa propiedad";
console.log(compruebaName(persona, "hla"));
/*Implementa una función que admita 2 números como argumento y compruebe si el primero es divisible por el segundo.
 */

/**
 * Definir función 
 * @param {*} num1 
 * @param {*} num2 
 * @returns 
 */
var esDivisible = (num1, num2) => num1 % num2 === 0 ? num1 + " es Divisible por " + num2 : num1 + " no es Divisible por " + num2;
var esDivisible = (num1, num2) => (num1 % num2 === 0);

console.log(esDivisible(6, 5));


/*
Implementa una función que admita un string y un número como parámetro, y comprobar que tienen ese número de
caracteres.
*/

// cambiar por true false
var compruebaNumeroCaracteres = (word, num) => word.length === num ? "La palabra " + word + " tiene " + num + " caracteres." : "La palabra " + word + " no tiene " + num + " caracteres."
var compruebaNumeroCaracteres = (word, num) => (word.length === num);

console.log(compruebaNumeroCaracteres("Hola", 7));

/*Implementa una función que admita un día de la semana en formato número (del 1 al 7) y devuelva que día de la
semana es (en texto).
*/

var diaSemana = (numDia) => {
    var dia;
    switch (numDia) {

        case 1:
            dia = "Lunes";
            break;
        case 2:
            dia = "Martes";
            break;
        case 3:
            dia = "Miercoles";
            break;
        case 4:
            dia = "Jueves";
            break;
        case 5:
            dia = "Viernes";
            break;
        case 6:
            dia = "Sabado";
            break;
        case 7:
            dia = "Domingo";
            break;
        default:
            dia = "No existe ese día"
            break;
    }
    return dia;
}

console.log(diaSemana(9));

/*Implementa un función que dado un número (del 1 al 12), diga a qué mes corresponde en texto.
 */

var nombreMes = (numMes) => {
    var mes;
    switch (numMes) {

        case 1:
            mes = "Enero";
            break;
        case 2:
            mes = "Febrero";
            break;
        case 3:
            mes = "Marzo";
            break;
        case 4:
            mes = "Abril";
            break;
        case 5:
            mes = "Mayo";
            break;
        case 6:
            mes = "Junio";
            break;
        case 7:
            mes = "Julio";
            break;
        case 8:
            mes = "Agosto";
            break;
        case 9:
            mes = "Septiembre";
            break;
        case 10:
            mes = "Octubre";
            break;
        case 11:
            mes = "Noviembre";
            break;
        case 12:
            mes = "Diciembre";
            break;

        default:
            mes = "No existe ese mes"
            break;
    }
    return mes;
}

console.log(nombreMes(01));

/*Implementa una función que admita 2 arrays como argumento, y devuelva el array más largo.
 */

var comparaLongitud = (array1, array2) => {
    var result;
    if (array1.length > array2.length) {
        result = array1;
    } else if (array1.length < array2.length) {
        result = array2;
    } else {
        result = "Son iguales";
    }
    return result;
}

console.log(comparaLongitud([1, 4, 4, 4], [1, 3, 3, 4]));


/*Implementa una función que admita 2 arrays como argumento, y devuelva si el primer elemento de ambos arrays es
igual o no.
*/

var comparaPrimerElemento = (array1, array2) => array1[0] === array2[0] ? "Sí son iguales " : "No son iguales";
var comparaPrimerElemento = (array1, array2) => Array.isArray(array1) && Array.isArray(array2) && array1[0] === array2[0];

console.log(comparaPrimerElemento([4, 4, 4, 4], [1, 3, 3, 4]));

// Funciones con ARRAYS


/**
 * 
 * Implementa una función que admita un array de números, y devuelva el segundo elemento, y en caso de no existir,
devuelva ‘undefined’ .
*/
/*
Implementa una función que admita un string como parámetro y devuelva la última letra.

*/
/*
Implementa una función que dado un array, intercambie el primer elemento por el último. Muestra por consola el
resultado
 */

// FUNCIONES CON ARRAYS

/**
 * Implementa una función que admita 2 parámetros, un número y un texto, y que muestre por consola dicho texto tantas
veces como indique el número.
 */

var loopTimes = (text, number) => {
    for (let i = 0; i < number; i++) {

        console.log(text);

    }
}

loopTimes("hola", 5)
    /*
    Implementa una función que admita como parámetro un objeto cualquiera y devuelva el número de propiedades que
    tiene el objeto.
     */

var casa = {
    habitaciones: 2,
    calle: "Manuel Perez N8",
    plantas: 3,
    años: 4
}
var countProperties = object => {
    numberProperties = 0;
    for (var property in object) {
        if (object.hasOwnProperty(property)) {
            numberProperties++;
        }
    }
    return numberProperties
}
console.log(countProperties(casa));
/*
Implementa una función que admita como parámetro un objeto y muestre por consola los valores de sus propiedades.
 */
/*
var showProperties = object => {
    for (var property in object) {
        if (object.hasOwnProperty(property)) console.log(objetc[property])
    }
}
showProperties(casa);
*/
/*
Implementa una función que admita un array de números y otro parámetro que sea un número y sume cada elemento
del array multiplicado por dicho número. Devuelve el resultado.
 */

var multiplyArray = (array, number) => {
    var total = 0;

    for (var item of array) {
        total += item * number;
    }
    return total
}
console.log(multiplyArray([1, 3, 4], 2));
/*
Implementa una función que dado un string como parámetro y también un carácter, devuelva cuantas veces aparece
dicho carácter en el string
 */

var countCharacter = (string, character) => {
    var total = 0;

    for (let i = 0; i < string.length; i++) {
        string = string.toUpperCase();
        character = character.toUpperCase();
        var element = string.charAt(i);
        //var element = string[i]
        if (element === character) {
            total++;
        }
    }
    return total
}

console.log(countCharacter("Hala", "h"))


/**
 * Implementa una función que dado un array de cualquier tipo, lo recorra del primer al último elemento, mostrando cada
elemento por consola.
*/
var printArray = (array) => {
    for (var item of array) {
        console.log(item);
    }
}

printArray(["hola", "adios", "buenos días", "buenas tardes"]);
/*
Implementa una función que dado un array de cualquier tipo, lo recorra desde el último elemento al primero, y lo
muestre por consola.
*/

var printArrayBack = (array) => {
    for (let i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}

printArrayBack(["hola", "adios", "buenos días", "buenas tardes"]);



/*Implementa una función que dado un array de números, y otro parámetro que sea un número, diga cuantos elementos
son menores a dicho número, y cuántos no.
*/
var arraySmaller = (array, number) => {
    var menores = 0;
    var mayores = 0;
    //var result = [0,0,0] Mayor menor igual
    for (item of array) {
        if (item > number) {
            mayores++;
        } else if (item < number) {
            menores++;
        }

    }
    console.log(menores);
    console.log(mayores);
}
arraySmaller([1, 3, 9, 5, 7, 8, 1], 3);


/*Implementa una función que admita 2 arrays como argumento, y diga si el elemento del primero, se encuentra en el
segundo.
*/
var arrayContains = (array1, array2) => {
    for (let i = 0; i < array1.length; i++) {
        if (array2.indexOf(array1[i]) === -1) {
            console.log("Array 2 NO contiene el elemento " + array1[i])
        } else {
            console.log("Array 2 contiene el elemento " + array1[i])

        }

    }
}
var arrayContains = (array1, array2) => {
    for (var a of array1) {
        for (var b of array2) {
            if (a === b) return true;
        }
    }
    return false;
}
arrayContains([1, 3, 9, 5, 7, 8, 1], [1, 4, 5, 7, 6]);



/*Implementa una función que admita 2 arrays como argumento, y intercambia los elementos del primero en el segundo
y viceversa. Muestra los arrays transformados por consola.
*/


var arrayExchange = (array1, array2) => {
    for (let i = 0; i < Math.min(array1.length, array2.length); i++) {
        var element1 = array1[i];
        var element2 = array2[i];
        array1[i] = element2;
        array2[i] = element1;
        console.log(array1);
        console.log(array2);
    }
    console.log(array1);
    console.log(array2);
}
var swapArrays = (array1, array2) => {
    var i = 0
    while (i < array1.length && i < array2.length) {
        var tmp = array1[i];
        array1[i] = array2[i];
        array2[i] = tmp;
        i++
    }
}

arrayExchange([1, 3, 9], [1, 4, 5, 6]);
/*Implementa una función que admita un array como argumento, y construya un objeto en el que almacene cada uno de
los elementos del array en propiedades indexadas, del tipo ‘prop1’, ‘prop2’, ‘prop3’, etc.
*/

var arrayToObject = (array) => {
    var object = {};
    for (let i = 0; i < array.length; i++) {
        var propertyName = "prop" + (i + 1);
        object[propertyName] = array[i];

    }
    return object
}
console.log(arrayToObject(["hola", "Fio", 9]));
/*Implementa una función que admita un array y un número, y empieza a recorrer dicho array por el número dado.
 */

var arrayStartWith = (array, number) => {
    if (number < array.length && number > 0) {
        for (let i = number; i < array.length; i++) {
            console.log(array[i]);
        }
    }
}
arrayStartWith(["hola", "Fio", 9], 1);


/*Implementa una función que dado un array de strings y otro parámetro como string diga si existe en el array.
 */

var arrayContainsString = (array, string) => {
    if (array.indexOf(string) === -1) {
        console.log("Array NO contiene el string " + string)
    } else {
        console.log("Array contiene el string " + string)

    }

}

arrayContainsString(["Tamara", "Pepa", "Juana", "Luisa"], "Luiksa");
/*Implementa un array que contenga nombres de frutas en Español y otro array con las mismas frutas en el mismo orden
pero en ingles. 
*/

var fruits_english = ["apple", "orange", "banana"];
var fruits_spanish = ["manzana", "naranja", "platano"];

var translateFruits = fruit => fruits_spanish[fruits_english.indexOf(fruit)]

console.log(translateFruits("apple"));
/*Implementa una función de traducción, que dada una fruta en español, diga la traducción en Inglés, y
otra función equivalente que haga la traducción inversa.
*/

var fruits_english = ["apple", "orange", "banana"];
var fruits_spanish = ["manzana", "naranja", "platano"];

var translateFruits = fruta => fruits_english[fruits_spanish.indexOf(fruta)]

console.log(translateFruits("manzana"));

/*
Implementa una función que admita un texto por parámetro y lo devuelva por consola al revés.
 */
var showReverse = text => {
    var result = "";
    for (let i = text.length - 1; i >= 0; i--) {
        result += text[i];
    }
    return result;
}

console.log(showReverse("Hola"));
/*Implementa una función que admita un texto por parámetro y lo devuelva en formato ‘EsTe Es Mi TeXtO’.
 */
var funCapitals = text => {
    var result = "";
    for (let i = 0; i < text.length; i++) {
        result += i % 2 === 0 ? text[i].toUpperCase() : text[i];
    }
    return result;
}
console.log(funCapitals("Hola fio"));

/*Implementa una función que admita como parámetro un array de arrays. La función debe recorrer todos los elementos
de cada subarray y mostrarlos por consola
 */

var iterateSubItems = array => {
    for (subArray of array) {
        for (const item of subArray) {
            console.log(item);
        }
    }
}
iterateSubItems([
    [1, 2],
    [3, 4, 4, "hola"]
]);