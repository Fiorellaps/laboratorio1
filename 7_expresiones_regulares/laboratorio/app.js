// Laboratorio

// EJERCICIO IBAN
// ------ CASO 1 ------
// Ejemplo: ES6600190020961234567890
//const pattern = /^[A-Z]{2}\d{2}(\d{4}){2}\d{2}\d{10}$/;
const pattern = /^[A-Z]{2}\d{22}$/;
values = ['ES6600190020961234567890', 'ES660019002096123456789', 'E16600190020961234567890'];
values.forEach(value => {
    //console.log(`Regexp matchs with "${value}"? -> `, pattern.test(value));
});

// ------ CASO 2 ------
// Ejemplo: ES6600190020961234567890 && ES66 0019 0020 9612 3456 7890

const pattern2 = /^[A-Z]{2}\d{2}\s{0,1}(\d{4}\s{0,1}){4}\d{4}$/;

values2 = ['ES6600190020961234567890', 'ES660019002096123456789', 'E16600190020961234567890', 'ES66 0019 0020 9612 3456 7890'];
values2.forEach(value => {
    console.log(`Regexp matchs with "${value}"? -> `, pattern2.test(value));
});

// ------ CASO 3 ------
// Extrarer el código del país y el digito de control
const pattern3 = /^([A-Z]{2})(\d{2})\s{0,1}(\d{4}\s{0,1}){4}\d{4}$/;

values3 = ['ES6600190020961234567890', 'ES660019002096123456789', 'E16600190020961234567890', 'ES66 0019 0020 9612 3456 7890'];
values3.forEach(value => {
    console.log(`Regexp matchs with "${value}"? -> `, pattern3.exec(value));
});

// MATRICULA COCHE

/**
 * 2021 GMD
 * 2345-GMD
 * 4532BDB
 * 0320-AAA
 */
const pattern4 = /^(\d{4})(\s|-)?([A-Z]{3})$/;

values4 = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA'];
values4.forEach(value => {
    console.log(`Regexp matchs with "${value}"? -> `, pattern4.test(value));
});

var images = document.getElementsByTagName('img');
for (var i = 0; i < images.length; i++) {
    console.log(images[i].src);
}

// ADICIONAL

// EXTRATER IMAGENES  < --> NO LO ENTIENDO
const pattern10 = /^<img\ssrc=".{1,}\.[a-z]{2,4}"\s?\/>$/;

let txt = 'src="https://github.githubassets.com/logos_page/GitHub-Mark.png"';
console.log("Regexp matchs with  imga src" + txt, pattern10.test(txt));
const pattern11 = /^<img\ssrc="https:\/\/(\w+\.\w+\/)*\w+\.\w+"\s?\/\>$/mg;

// TARJETA DE CREDITO

// 16 numero
// empieza por  50,51,52,53,54,55.

// CASO 1
// 5299 64000 000 000 
//5299-64000-000-000 
//529964000000000

const pattern5 = /^(5[0-5]\d{2})(\s|-)?(\d{5})((\s|-)?\d{3}){2}$/;

values5 = ['5299 64000 000 000', '5299-64000-000-000', '529964000000000', 'ES66 0019 0020 9612 3456 7890'];
values5.forEach(value => {
    console.log(`Regexp matchs with "${value}"? -> `, pattern5.test(value));
});

values5.forEach(value => {
    console.log(`Regexp matchs with "${value}"? -> `, pattern5.exec(value));
});

// BUSCAR EXPRESIONES

// CLAVE ES FUERTE
// * COMPLEJO

const pattern6 = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/
    // * Moderado

const pattern7 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

// validar url

const pattern8 = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/

// validar color hexadecimal
const pattern9 = /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/