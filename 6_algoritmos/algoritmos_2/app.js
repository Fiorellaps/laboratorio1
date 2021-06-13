/*console.log("Hola");

// Generación aleatoria

// casino, dado, ruleta, loteria, etc.

// random geneera numeros decimales aleatorios entre [0,1)
// pseudo aleatorio, no se debe usar para seguridad

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

// Generación Binaria

// poder tomar decisiones aleatroias entre dos estados

//0                    0.5                  1
//[--------------------|--------------------)

// probabilidad 50% para cada opcion
var getRandom = (a, b) => (Math.random() < 0.5) ? a : b;
var getRandom = (a, b) => Math.round(Math.random()) ? a : b;

console.log(getRandom("niño", "niña"));
console.log(getRandom("niño", "niña"));
console.log(getRandom("niño", "niña"));
console.log(getRandom("niño", "niña"));

// Generación con Multiples opciones
// CASO SENCILO
// Elegir aleatoriamente entre 0 y 9
// Calcular rango --> rango = max - min + 1 = 10
Math.random() * 10;
// Math floor te coge el enetero mas proximo por la izquierda (4.99-->4 )

//Math.ceil -->  hace lo contrario, aproxima por la derecha

var getRandomNumber = () => Math.floor(Math.random() * 10);
console.log(getRandomNumber());
console.log(getRandomNumber());
console.log(getRandomNumber());
console.log(getRandomNumber());

// CASO GENERAL
// Elegir aleatoriamente entre 50 y 100

//var range = 100 - 50 + 1 // 51 numeros
Math.floor(Math.random() * range) + 50; // resultados entre [0, 50] + 50 (min)
var max = 100,
    min = 50;
var range = max - min + 1 // 51 numeros
var getRandom = () => Math.floor(Math.random() * range) + min; // aleatorios enteros entre min y maximo
console.log(getRandom());
console.log(getRandom());

// Que pasa si quiero cambiar la probabilidad (segmento más grande)

// Algoritmos de búsqueda
var array = [1, 3, 4, 5, 2, 9, 6, 7, 8];
var search = (array, target) => {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === target) return i;
    }
    return -1;
}
console.log(search(array, 2))

array.indexOf(2); // se queda con la primera apacición
// array.indexOf("a");

// 1.09

// Búsuqeda binaria
// siempre que el array esté ordenado
// localizar punto medio del array y nos preguntamos de si lo que biscamos esta por aariba o por debajo (divide y cenceras)

//[12, 14, 23, 25, 30, 36, 43, 62, 67, 72, 88];


//1. Buscar los índices máximos y mínimos del array como min = 0 y max = length - 1 .
//2. Computar el punto medio como la media entre min y max redondeada hacia abajo (debe ser un índice entero).
//3. Si array[punto medio] === target , paramos el algoritmo, lo hemos encontrado.
//4. Si array[punto medio] < target , movemos el mínimo min = punto medio + 1 .
//5. En otro caso, movemos el máximo a max = punto medio - 1 .
//6. Volvemos al paso 2 .
*/
var binarySearch = (array, target) => {
    var min = 0;
    var max = array.length - 1;
    while (min <= max) {
        var mid = min + Math.floor((max - min) / 2);
        if (array[mid] === target) return mid;
        else if (array[mid] < target) min = mid + 1;
        else max = mid - 1;
    }
    return -1;
};

var sortedArray = [11, 15, 32, 34, 36, 37, 75, 79, 80, 89];
console.log(binarySearch(sortedArray, 34));


// Algoritmos de ordenación

array = [3, 5, 1, 8, 7, 2];

// Ordenados de menor a mayor

// 1. Bubble sort o por burbuja
// cogemos de dos en dos y preguntamos cual es mayor, ara comprobar si se cumple la ordenación
// hay que dar tantas vueltas como elemntos haya en el array

var swap = (array, a, b) => {
    var temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

var bubbleSort = array => {
    // tantas iteracione como elementos
    var size = array.length;
    for (var index = 1; index < size; index++) {
        for (var left = 0; left < size - index; left++) {
            var right = left + 1;
            if (array[left] > array[right]) swap(array, left, right);
        }
    }
}

// 2. Ordenación por selección

// cojo elemento , reoccro y busco el valor mas peqeño e intercambio valores
// el intercambio no cambia
var swap = (array, a, b) => {
    var temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

var selectionSort = array => {
    var size = array.length;
    var minIndex;
    for (var sIndex = 0; sIndex < size; sIndex++) {
        //sIndex --> seleccion
        minIndex = sIndex;
        for (var i = sIndex; i < size; i++) {
            if (array[i] < array[minIndex]) minIndex = i;
        }
        swap(array, minIndex, sIndex);
    }
    return array;
}

// 3. Ordenación por inserción
// va buscado hasta si es más pequeño, hast aque sea más grande y se queda ahi

var swap = (array, a, b) => {
    // Intercambiamos el contenido de los índices a y b
    var temp = array[a];
    array[a] = array[b];
    array[b] = temp;
};
var selectionSort = array => {
    var minIndex;
    var size = array.length; // Calculamos su tamaño;
    for (var s = 0; s < size; s++) {
        // s => selection
        // Bucle externo.
        minIndex = s;
        for (var i = s + 1; i < size; i++) {
            // Bucle interno.
            if (array[i] < array[minIndex]) minIndex = i;
        }
        swap(array, minIndex, s);
    }
    return array;
};
console.log(selectionSort([3, 5, 1, 8, 7, 2]));