// EXPRESIONES REGULARES//

/**
 * Permiten encontrar patrones
 */

// dir imagen?.png: caracteres de comodin

// Función para validar Email
function validateEmail(email) {
    const atPosition = email.indexOf("@");
    const dotPosition = email.lastIndexOf(".");
    if (atPosition < 1 || dotPosition < atPosition + 2 || dotPosition + 2 >=
        email.length) {
        alert("Not a valid e-mail address");
        return false;
    }
    return true;
}

// Con expresiones regulares
function validateEmail(email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email.toLowerCase());
}

/**
 * /imagen./ --> '/' va a ser regular expresion + texto + '.' carcater más (solo uno)
 * imagenA
 * imagen#
 * imagneJ 
 */

/**const pattern = /imagen./;
const pattern = new RegExp('/imagen./');
const pattern = new RegExp(/imagen./);
*/

const myValueOk = 'imagenA';
const myValueNotOk = 'imag';
const pattern = /imagen./;

const resultOk = pattern.test(myValueOk);
console.log(resultOk)

const resultNotOk = pattern.test(myValueNotOk);
console.log(resultNotOk)

// ^imagen. -> ^ obliga a empezar por imagen
// holaimagen --> MAL
// ^imagen.$ --> $ termina despues del elemento '.'
// imagen0Hola --> MAL

// Si quiero que la cadena contenga el caracter --> '\' (escape)

const pattern = /^imagen.\/jpg$/;

const pattern = /^Jose/;
const values = ['Jose Perez Gomez', 'Manuel Lozano', 'Maria Jose perez'];

values.forEach(value => {
    console.log(`Regexp matchs with "${value}"? -> `, pattern.test(value));
});

// [] --> que sea uno valor entre corchetes
const pattern = /[1234567890]/;
const values = [1, 'A', 'a'];

values.forEach(value => {
    console.log(`Regexp matchs with "${value}"? -> `, pattern.test(value));
});


//[^] --> valor que no esté entre los indicados
const pattern = /[^1234567890]/;
const values = [1, 'A', 'a'];

values.forEach(value => {
    console.log(`Regexp matchs with "${value}"? -> `, pattern.test(value));
});


// verdadedo falso verdadero falso
const pattern = /^...$/;
const values = ['abc', 'ab', 'a12', 'ab\n'];

values.forEach(value => {
    console.log(`Regexp matchs with "${value}"? -> `, pattern.test(value));
});

// \w--> [a-z A-Z 0-9_]

const pattern = /^\w\w\w$/;
// true, true, true, false
const values = ['aaa', 'abc', 'a12', 'ab'];

values.forEach(value => {
    console.log(`Regexp matchs with "${value}"? -> `, pattern.test(value));
});

// \W === [^a-z A-Z 0-9_] negar lo anterior

const pattern = /^\W\W\W$/;
// flase, false, false, true, false
const values = ['aaa', '123', 'a12', '@#%', '@#'];

values.forEach(value => {
    console.log(`Regexp matchs with "${value}"? -> `, pattern.test(value));
});

// \d -> [0-9] 
// \D -> [^0-9]

// \s -> [  ] (espacio, tabulador ,nueva linea, etc)
// \S -> [^ ] (que no sea espacio, tabulador ,nueva linea)


const pattern = /^\d\d\d\d\d\d\d\d\s[A-Z]$/; // con espacio
const pattern = /^\d\d\d\d\d\d\d\d\s[A-Za-z]$/; // mayusculas y minusculas

const values = ['12345678 Q', '12345678-Q', 'abc45678-Q', 'abc45678 Q'];

values.forEach(value => {
    console.log(`Regexp matchs with "${value}"? -> `, pattern.test(value));
});


const pattern = /^\d{8}\S[A-Z]$/; // repetir \d 8 veces
const values = ['12345678 Q', '12345678-Q', 'abc45678-Q', '12345678Q'];

values.forEach(value => {
    console.log(`Regexp matchs with "${value}"? -> `, pattern.test(value));
});

const pattern = /^\d{2,}$/; // al menos dos veces y sin limite
const values = ['72', '1', 'ab', '45678'];

values.forEach(value => {
    console.log(`Regexp matchs with "${value}"? -> `, pattern.test(value));
});

// {x,y} entre x e y repeticiones
const pattern = /^[A-Z]{1,2}\s\d{4,5}\s{0,1}[A-Z]{0,2}$/;
const values = ['M 09345', 'M 1234 Y', 'MA 3456 CY', 'MA 123 C', '0894 BAC'];

values.forEach(value => {
    console.log(`Regexp matchs with "${value}"? -> `, pattern.test(value));
});

// \s? === {0,1} es lo mismo que decir qu epuede o no haber lo que le decimos delnate
const pattern = /^\d{8}\s?[A-Z]$/; // puede haber espacio o no
const values = ['12345678Q', '12345678-Q', '12345678 Q'];

values.forEach(value => {
    console.log(`Regexp matchs with "${value}"? -> `, pattern.test(value));
});

// \s* === {0,} es lo mismo que decir que puede cero al infinito


// \s+ === {1,} es lo mismo que decir que puede uno  al infinito

// (parteCondicional) --> quiero la palabra entera
const pattern = /^(pre)?(historia)$/;
const values = ['pre', 'prehistoria', 'historia', 'hi'];

values.forEach(value => {
    console.log(`Regexp matchs with "${value}"? -> `, pattern.test(value));
});

// MA3678AZ

const pattern = /^[A-Z]{1,2}\d{4}[A-Z]{1,2}$/
const pattern = /^([A-Z]{1,2}\d{4}[A-Z]{1,2})|(\d{4}[A-Z]{3})$/ // (A)|(B)

const values = ['MA4050AZ', '0896BAX', 'M4000', '0896 BAX'];

values.forEach(value => {
    console.log(`Regexp matchs with "${value}"? -> `, pattern.test(value));
});