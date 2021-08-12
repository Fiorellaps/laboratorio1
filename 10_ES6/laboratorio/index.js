/**
 * HASID
 * Implementa una función llamada hasId que admita como parámetro un objeto y 
 * compruebe si dicho objeto tiene una propiedad llamada id (debe devolver booleano true / false ).
 * */

const hasId = ({ id }) => id ? true : false;
console.log(hasId({ nombre: "Fiorella", apellido: "Piriz" }));
console.log(hasId({ id: 1, nombre: "Fiorella", apellido: "Piriz" }));

/**
 * HEAD
 * Implementa una función llamada head tal que, dado un array como entrada, devuelva el primer elemento.
 */

const head = array => {
    const [primero, ...restItems] = array;
    console.log(primero);
}
head([1, 444, 2, 2]);
/**
 * TAIL
 */

const tail = array => {
    const [primero, ...restItems] = array;
    console.log(restItems);
}
tail([1, 444, 2, 2]);

/**
 * swapFirstToLast
 */

const swapFirstToLast = array => {
    const [primero, ...restItems] = array;
    const nuevoArray = [...restItems, primero]
    console.log(nuevoArray);
}

swapFirstToLast([66, 444, 2, 2]);

/**
 * excludeId
 */

const excludeId = obj => {
    const { id, ...objet } = obj;
    console.log(objet);
}

excludeId({ id: 100, DNI: "2222", nombre: "Fiorella", apellido: "Piriz" });
excludeId({ DNI: "2222", nombre: "Fiorella", apellido: "Piriz" });


/**
 * wordsStartingWithA
 */
const wordsStartingWithA = list => {
    list.forEach(element => {
        element.startsWith('A') ? console.log(element) : ""
    })
}
wordsStartingWithA(["Alvaro", "Amor", "Elefante"]);

wordsStartingWithA(["Elena", "Inma", "Elefante"]);

/**
 * concat
 */

const concat = (...elementos) => elementos.reduce((acc, elemento) => acc + " | " + elemento, "")
console.log(concat("ho", "la", "fiorella", 22))

/**
 * multArray
 */
const multArray = (numero, array) => array.map(elemento => elemento * numero)
console.log(multArray(2, [1, 2, 3]))

/**
 * calcMult
 */

const calcMult = array => array.reduce((acc, element) => acc * element, 1)
console.log(calcMult([1, 2, 3, 6]))

/**
 * swapFistSecond
 */

const swapFirstSecond = array => {
    const [primero, segundo, ...restItems] = array;
    const nuevoArray = [segundo, primero, ...restItems]
    console.log(nuevoArray);
}

swapFirstSecond([66, 444, 2, 2]);

/**
 * longest
 */

const longest = (letter, ...elements) => elements.every(element => element.startsWith(letter))

console.log(longest("E", "Enmma", "Epa", "Hola"))
console.log(longest("E", "Enmma", "Epa", "Eola"))