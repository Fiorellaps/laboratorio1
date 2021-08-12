/**
 * VAR Características
 */

// 1. Reasignable, es decir, puede cambiar su valor a lo largo de la ejecución
// 2. Redecrarable, puedo declarar nuevas variabes con el mismo nombre
// 3. Su ámbito es de función, no se puede usar fuera de una función. TENGO ACCESO FUERA DEL BLOQUE (IF, ELSE, FOR)
// 4. Declaración global (objeto window) en el ámbito superior / fichero; hay que tener cuidado porque te puedes cargar otras variables

// Hoisting si llamas a varable definida debajo, devuelve undefined



/**
 * LET Y CONST
 */

// 1. Reasignable --> LET si es reasignable; CONST no
// Con LET no puedo hacer hoisting --> temporal dead zone:
// CONST no puede estar vacía desde el principio y su valor no va a cambiar
// No se puede declarar variavle con mismo nombre
// Ámbito de bloque
// No se crean variables globales


/**
 * ¿Cuándo usar CONST/ LET? --> Usa primero const y si vez que te da error, lo cambias
 */

// si en const hay array/dict, yo puedo modificarlo; array.push

/**
 * SPREAD (...)
 */

// Permite extender difundir elementos; repartir
// 1. En llamadas a funciones 

const names = ["Fio", "Maria", "Laura", "Jaime"];
const sayNames = (name1, name2, name3) => {
    console.log(name1);
    console.log(name3);
    console.log(name2);

}

// sayNames(names[0], names[1], names[2]); // Forma tradicional
sayNames(...names); // Con spread operator

// Si hay menos elementos, comleta con undefines y si hay más se queda en el último


const names = ["Javi", "Lissette", "Dani"];
const greetPeople = (greeting, name1, name2, name3) => {
    console.log(greeting + " " + name1 + ", " + name2 + " y " + name3);
};
greetPeople("Buenos días", ...names);


// 2. Arrays

const original = [1, 2, 3];
const copy = [...original]; // Extendemos cada elemento del array origen en el array destino
console.log(copy); // [1, 2, 3]

// añadir valores
const copy2 = [...original, 7, 7];

// no es lo mismo copyA = original ; es un puntero al mismo objeto; no se un objeto nuevo

// Si hago un copy ... de un objeto se copia la direccion en memoria

// 3. Spread en objetos

const original = {
    name: "Javi",
    surname: "Calzado",
    age: 36,
};
// Objeto con mismas propiedades en original
const copy = {...original };
console.log(copy);

// MERGE DE OBJETOS
const id = {
    name: "Javi",
    surname: "Calzado",
};
const details = {
    age: 36,
    phone: 654123456,
};
const user = {...id, ...details }; // Mezclamos en un nuevo objeto
console.log(user);

// Si hay propiedades con mismo nombre, se machaca el primer valor y se queda con el último

const newUser2 = {
    ...user,
    name: "Lissette",
};
console.log(newUser2); // {name: "Lissette", age: 36}


/**
 * REST (...) --> AGRUPAR ELEMENTOS
 */

// Agruoar elementos de funciones

const myFunction = (...myArguments) => { // array
    console.log(myArguments);
    console.log(myArguments.length); // Es un array!
};
myFunction("uno", 2, true);

// PErmite hacer funciones flexibles, sin epescifical el numero de argumentos

const greetPeople = (greeting, ...names) => {
    let nameListString = "";
    for (const name of names) {
        nameListString += " " + name;
    }
    console.log(greeting + nameListString);
};
greetPeople("Buenos días"); // Buenos días
greetPeople("Buenos días", "Javi"); // Buenos días Javi
greetPeople("Buenos días", "Javi", "Lissette"); // Buenos días Javi, Lissette

const sum = (...numbers) => {
    let result = 0;
    for (const n of numbers) {
        result += n;
    }
    return result;
};
console.log(sum()); // 0
console.log(sum(1)); // 1
console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3)); // 6


/**
 * DESTRUCTURING
 */

// Extrear elementos de un array y almacenalo en variables

// Lo que haciamos antes

const teachers = ["Javi", "Lissette", "Jaime", "Victor", "Dani"];
/* const primero = teachers[0];
const segundo = teachers[1];
const tercero = teachers[2];
 */
const [primero, segundo, tercero] = teachers;
const [, , tercero] = teachers; // solo me quedo con el tercero

console.log(primero, segundo, tercero);


// Si me queiro quedar con el segundo elemto dek array
const teachers = ["Javi", "Lissette", "Jaime", "Victor", "Dani"];
const getSecondTeacher = teachers => {
    const second = teachers[1];
    return second;
};
console.log(getSecondTeacher(teachers));

// USANDO DESTRUCTURING

const getSecondTeacher = ([, second]) => second;
console.log(getSecondTeacher(teachers));


// DESTRUCTURING CON OBJETOS

const user = {
    id: 4451234,
    name: "Javi",
    surname: "Calzado",
    age: 36,
};
const { id, name, age } = user; // Me crea variables para cada propiedad 
console.log(id, name, age);


//Si de forma clásica haríamos:
const userSample = {
    id: 4451234,
    name: "Javi",
    surname: "Calzado",
    age: 36,
};
const getUserFullName = user => user.name + " " + user.surname;
console.log(getUserFullName(userSample));
//con destructuring tendríamos:
const userSample = {
    id: 4451234,
    name: "Javi",
    surname: "Calzado",
    age: 36,
};
const getUserFullName = ({ name, surname }) => name + " " + surname;
console.log(getUserFullName(userSample));
ç


const user = {
    id: 4451234,
    name: "Javi",
    surname: "Calzado",
    age: 36,
};
const { id: userId, name: userName, age: userAge } = user; // Cambiar nombre de las propiedades
console.log(userId, userName, userAge);



const user = {
    id: 4451234,
    name: "Javi",
    surname: "Calzado",
    age: 36,
    location: {
        country: "Spain",
        city: "Málaga",
        postalCode: 29017,
    },
};
const getUserNameAndCountry = ({ name, location: { country } }) => name + " from " + country; // Destructuring dis objetos
console.log(getUserNameAndCountry(user));

// No se puede hacer destructuring sobre valor nulo

const sampleArray = ["uno", 2, true];


const sampleArray = ["uno", 2, true];
const [firstItem, ...restItems] = sampleArray;
console.log(firstItem, restItems);

const [, ...restItems] = sampleArray; // todos menos el primero
console.log(firstItem, restItems);


/**
 * Manipulando arrays sin bucles
 */


const bookCollection = [
    { isbn: 23453, author: "J. Simmons", pages: 250, title: "The Dark", read: true },
    { isbn: 56456, author: "Peter Black", pages: 120, title: "Feed", read: false },
    { isbn: 43243, author: ["A. Smith", "F. Gant"], pages: 340, title: "Fire", read: true },
    { isbn: 23223, author: undefined, pages: 260, title: "Eve", read: true },
    { isbn: 89232, author: "Anna Willis", pages: 610, title: "The Run", read: false },
];

// EVERY
// callback -> función como argumento de otra
// Si todos los elementos cumplen una condicion determinada
const allBooksRead = books => books.every(book => book.read);
console.log(allBooksRead(bookCollection)); // false

/// CLASIC WAY
const allBooksRead = books => {
    for (const book of books) {
        if (book.read) return false;
    }
    return true;

}


/**
 * SOME
 */

// Que al menos un elemento cumple la condición


const anyBookRead = books => books.some(book => book.read);
console.log(anyBookRead(bookCollection)); // true

// Al menos un libro se ha leido


/**
 * FIND
 */

// SE QUEDA CON EL PRIMER ELEMENTO QUE CUMPLe LA CONDICIÓN

const findEveBook = books => books.find(book => book.title === "Eve");
console.log(findEveBook(bookCollection));
const findUnknownAuthorBook = books => books.find(book => !book.author);
console.log(findUnknownAuthorBook(bookCollection));

// FINDINDEX --> devuelve ek indice


/**
 * FILTER
 */
// Te develvo array filtrado pero el original no lo modifico
const unreadBooks = books => books.filter(book => book.read === false); // si devuelve true se lo queda, si devielve false lo descarta
console.log(unreadBooks(bookCollection));

const booksOver300Pages = books => books.filter(book => book.pages >= 300);
console.log(booksOver300Pages(bookCollection));

const multiAuthorBooks = books => books.filter(book => Array.isArray(book.author));
console.log(multiAuthorBooks(bookCollection));


/**
 * 
 * FOREACH, SORT , JOIN
 * 
 */
// foreach
const showTitles = books => books.forEach(b => console.log(b.title));
showTitles(bookCollection);

// sort; si cambia el array original, cambia el orden

const sortByLength = books => books.sort((a, b) => (a.pages > b.pages ? 1 : -1)); // enfgativo va antes y positivo va después
// Tambien se puede hacer restando
const sortByLength = books => books.sort((a, b) => (a.pages - b.pages)); // enfgativo va antes y positivo va después

sortByLength(bookCollection);
console.log(bookCollection);

/**
 * JOIN
 */

// concatenar strings

const sample1 = ["Javi", "Lissette", "Dani"];
const sample2 = ["Texto", 43, true];
console.log(sample1.join("-"));
console.log(sample2.join(" & ")); // Hace casting a string de los elementos.


/**
 * MAP
 */

const getTitleCollection = books => books.map(book => book.title, book.author);
console.log(getTitleCollection(bookCollection));

const addOwner = (owner, books) => books.map(book => ({...book, owner }));

// MAP HACE UN BUCLE SOBRE ARRAY
// Itera element a elemnto, y trasforma según el callback y m edevuelve un array transformado
/**
 * REDUCE
 */

// transforma según callback y devuelve una variable aprtir de la función que se aplica a los elementos
// Es muy util para estadisticas o totales


const getTotal = books => books.reduce((acc, book) => acc + book.pages, 0) // primer argumento callback y segundo pongo el valor de partida
    // acc es el acumulado


const getTitlesString = books => books.reduce((acc, book) => acc + " | " + book.title, "")

const getNumberRead = books => books.reduce((acc, book) => {
    acc + (book.read ? 0 : 1)
}, 0)


const getAllReadPages = books =>
    books.filter(book => book.read).reduce((sumPages, book) => sumPages + book.pages, 0);
console.log(getAllReadPages(bookCollection));

const extractUnreadBooksSorted = books =>
    books
    .filter(book => !book.read)
    .map(book => ({ title: book.title, pages: book.pages }))
    .sort((a, b) => b.pages - a.pages);
console.log(extractUnreadBooksSorted(bookCollection));

// restructuring

const extractUnreadBooksSorted = books =>
    books
    .filter(book => !book.read)
    .map(({ title, pages }) => ({ title, pages }))
    .sort((a, b) => b.pages - a.pages);


const getSortedTitles = books =>
    books
    .map(book => book.title)
    .sort() // Si no le paso función de comparación sigue ordenación alfabética por defecto
    .join(", ");
console.log(getSortedTitles(bookCollection));