// BUCLES

// Cuadrado

var square = (n, char) => {
    for (let i = 0; i < n; i++) {
        var cadena = char.repeat(n);
        console.log(cadena);
    }
}

var square = (n, char) => {
    var fila = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            fila += char;
        }
        console.log(i, fila);
        fila = "";
    }

}

//square(5, "*");

// Cuadrado con bordes

var squareWithBorder = (n, charBorder, charInner) => {
        var fila = "";
        for (let i = 0; i < n; i++) {

            for (let j = 0; j < n; j++) {
                if (i == 0 || i == n - 1) {
                    fila += charBorder;
                } else if (j == 0 || j == n - 1) {
                    fila += charBorder;
                } else {
                    fila += charInner;
                }
            }
            console.log(i, fila);
            fila = "";
        }
    }
    //squareWithBorder(6, "B", "*");

// Cuadrado Diagonal Left-Right

var squareDiagonalLR = (n, charDiagonal, charUp, charDown) => {
        var fila = "";
        for (let i = 0; i < n; i++) {

            for (let j = 0; j < n; j++) {
                if (i == j) {
                    fila += charDiagonal;
                } else if (j > i) {
                    fila += charUp;
                } else {
                    fila += charDown;
                }
            }
            console.log(fila);
            fila = "";
        }
    }
    //squareDiagonalLR(6, "\\", "A", "B");

// Cuadrado Diagonal Right-Left

var squareDiagonalRL = (n, charDiagonal, charUp, charDown) => {
    var fila = "";
    for (let i = 0; i < n; i++) {

        for (let j = 0; j < n; j++) {
            if ((i == 0 && j != (n - 1)) || (j == 0 && i != (n - 1))) {
                fila += charUp;
            } else if ((i == (n - 1) && j != 0) || (j == (n - 1) && i != 0) || (j == i && j == n / 2)) {
                fila += charDown;
            } else {
                fila += charDiagonal
            }
        }
        console.log(i, fila);
        fila = "";
    }
}

squareDiagonalRL(5, "/", "A", "B");

// Medio Diamante
var halfDiamond = (n, char) => {
    var fila = "";
    // first half of the diamond
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            fila += char;
        }
        console.log(fila);
        fila = "";
    }


    for (let i = n - 2; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            fila += char;
        }
        console.log(fila);
        fila = "";
    }

}
halfDiamond(6, "*");

// Pirámide
var pyramid = (n, char) => {
    var fila = "";
    // first half of the diamond
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            fila += char;
        }
        console.log(fila);
        fila = "";
    }


    for (let i = n - 2; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            fila += char;
        }
        console.log(fila);
        fila = "";
    }

}
halfDiamond(6, "*");

// priráide 

// diamante