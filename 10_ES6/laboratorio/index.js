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


/**
 * searchInStringV1
 */

const searchInStringV1 = (given, character) => Array.from(given).reduce((acc, letter) => {
    if (letter === character) acc++;
    return acc
}, 0);


console.log(searchInStringV1("haalalala", "a"));

/**
 * sotCharacters
 */

const sortCharacters = string => Array.from(string).sort((a, b) => a.localeCompare(b));

console.log(sortCharacters("Hola"))

/**
 * shout
 */

const shout = (...palabras) => {
    return palabras.map(palabra => "¡" + palabra.toUpperCase() + "!").join("");
}

console.log(shout("No", "Fumes", "En clase"))


/**
 * Lista de la compra
 */

const shoppingCart = [
    { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
    { category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
    { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
    { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
    { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
    { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
    { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
];

// ---- A ---- //

// LISTA ANTERIOR MAS IVA
const addIVA = lista => lista.map(product => {
    iva = product.price * 0.21;
    return { iva, ...product }
})
console.log(addIVA(shoppingCart))

// LISTA DE IVA SOLO
const addIVA2 = lista => lista.map(product => product.price * 0.21)
console.log(addIVA2(shoppingCart))

// ---- B ---- //

const sortUnits = lista => lista.sort((productA, productB) => productA.units < productB.units ? 1 : -1)
console.log(sortUnits(shoppingCart))

// ---- C ---- //

const subtotalDrogueria = lista => lista.reduce((subtotal, producto) => {
    if (producto.category === "Droguería") subtotal += producto.price * producto.units;
    return subtotal;
}, 0)

console.log(subtotalDrogueria(shoppingCart));

// ---- D ---- //
shoppingCartTotal = addIVA(shoppingCart)
shoppingCartTotal.sort((a, b) => a.category.localeCompare(b.category)).forEach(producto => {
    console.log(producto.product, "-> ", producto.price + producto.iva, " €")
})