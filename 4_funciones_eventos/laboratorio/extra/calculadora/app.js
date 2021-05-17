// No he conseguido sumar más de dos números secuencialmente
var numeroA;
var numeroB;
var operacion;
var getNumber = () => {
    if (isNaN(parseInt(document.getElementById("numero-uno").value))) {
        alert("ERROR: No has introducido un número!");
    } else {
        return parseInt(document.getElementById("numero-uno").value);
    }
};

var sum = () => {
    numeroA = getNumber();
    operacion = "+";
    clear();
}
var substraction = () => {
    numeroA = getNumber();
    operacion = "-";
    clear();
}

var multiplication = () => {
    numeroA = getNumber();
    operacion = "*";
    clear();
}

var division = () => {
    numeroA = getNumber();
    operacion = "/";
    clear();
}
var clear = () => {
    document.getElementById("numero-uno").value = "";
}

function calculate() {
    numeroB = getNumber();
    var resultado;
    switch (operacion) {
        case "+":
            resultado = numeroA + numeroB;
            break;
        case "-":
            resultado = numeroA - numeroB;
            break;
        case "*":
            resultado = numeroA * numeroB;
            break;
        case "/":
            resultado = numeroA / numeroB;
            break;
    }
    clear();
    document.getElementById("total").innerHTML = resultado;
}
document.getElementById("suma").addEventListener("click", sum);
document.getElementById("resta").addEventListener("click", substraction);
document.getElementById("multiplicacion").addEventListener("click", multiplication);
document.getElementById("division").addEventListener("click", division);
document.getElementById("igual").addEventListener("click", calculate);