var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

/*
// Doble bucle 

var encrypt = text => {
    encryptedText = "";
    text = text.toLowerCase();
    for (var letter of text) {
        for (letterEnc j = 0; j < plainAlphabet.length; j++) {
            if (letter === plainAlphabet[j]) {
                encryptedText += encryptedAlphabet[j];
                break;
            } else if (letter === " ") {
                encryptedText += " ";
                break;
            }
        }
    }
    return encryptedText;
}*/

// Refactorizado
// Busca la letra en el alfabeto plano y si coincide la añade al texto y si no sigue buscando; 
// Si no esta en el array, devuelve la misma letra
var encrypt = text => {
    encryptedText = "";
    text = text.toLowerCase();
    for (var letter of text) {
        posicion = plainAlphabet.indexOf(letter);
        if (posicion !== -1) {
            encryptedText += encryptedAlphabet[posicion];
        } else {
            encryptedText += letter;
        }
    }
    return encryptedText;
}

/*
// Doble bucle 

var decrypt = text => {
    decryptedText = "";
    text = text.toLowerCase();
    for (var letter of text) {
        for (let j = 0; j < encryptedAlphabet.length; j++) {
            if (letter === encryptedAlphabet[j]) {
                decryptedText += plainAlphabet[j];
                break;
            } else if (letter === " ") {
                decryptedText += " ";
                break;
            }
        }
    }
    return decryptedText;
}*/

// Refactorizado
// Busca la letra en el alfabeto encriptado y si coincide la añade al texto y si no sigue buscando; 
// Si no esta en el array, devuelve la misma letra
var decrypt = text => {
    decryptedText = "";
    for (var letter of text) {
        posicion = encryptedAlphabet.indexOf(letter);
        if (posicion !== -1) {
            decryptedText += plainAlphabet[posicion];
        } else {
            decryptedText += letter;
        }
    }
    return decryptedText;
}

// Lee el texto a encriptar
var readPlainText = () => {
    plainText = document.getElementById("desencriptado").value;
    encryptedText = encrypt(plainText);
    document.getElementById("encriptado").value = encryptedText;
    document.getElementById("desencriptado").value = "";
}

// Lee el texto a desencriptar
var readEncryptedText = () => {
    encryptedText = document.getElementById("encriptado").value;
    decryptedText = decrypt(encryptedText);
    document.getElementById("desencriptado").value = decryptedText;
    document.getElementById("encriptado").value = "";
}

// Añadir eventos a los botones
document.getElementById("encriptar").addEventListener("click", readPlainText);
document.getElementById("desencriptar").addEventListener("click", readEncryptedText);