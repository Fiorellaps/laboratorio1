// Bulce for que me genere un numero aleatorio para cada posicion del array de longitud n
// Si el número no está en el array, lo añado; en caso contrario, busco otro numero que no esté en el array
// Sin embargo, este método no es eficiente porque la complejidad computacional aumenta exponencialmente 
// Con valores para n pequeños no hay problema
var randomPick = (n, min, max) => {
    var range = max - min + 1 // 51 numeros
    var arrayNumbers = [];
    for (let i = 0; i < n; i++) {
        encontrado = false;
        while (!encontrado) {
            randomNumber = Math.floor(Math.random() * range) + min;
            posicion = arrayNumbers.indexOf(randomNumber);
            if (posicion === -1) {
                arrayNumbers[i] = randomNumber;
                encontrado = true;
            }
        }
    }
    return arrayNumbers;
}

console.log(randomPick(6, 1, 49)); // Apuesta automática de la primitiva
console.log(randomPick(15, 1, 15));
console.log(randomPick(1, 1, 6));