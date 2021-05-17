var getNumberA = () => {
    if (isNaN(parseInt(document.getElementById("numero-uno").value))) {
        alert("ERROR: No has introducido un número!");
    } else {
        return parseInt(document.getElementById("numero-uno").value);
    }
};

var getNumberB = () => {
    if (isNaN(parseInt(document.getElementById("numero-dos").value))) {
        alert("ERROR: No has introducido un número!");
    } else {
        return parseInt(document.getElementById("numero-dos").value);
    }
};

//var getNumberB = () => parseInt(document.getElementById("numero-dos").value);

var sum = () => getNumberA() + getNumberB();
var showSum = () => document.getElementById("total").innerHTML = sum();

var substraction = () => getNumberA() - getNumberB();
var showSubstraction = () => document.getElementById("total").innerHTML = substraction();

var multiplication = () => getNumberA() * getNumberB();
var showMultiplication = () => document.getElementById("total").innerHTML = multiplication();

var division = () => getNumberA() / getNumberB();
var showDivision = () => document.getElementById("total").innerHTML = division();

document.getElementById("suma").addEventListener("click", showSum);
document.getElementById("resta").addEventListener("click", showSubstraction);
document.getElementById("multiplicacion").addEventListener("click", showMultiplication);
document.getElementById("division").addEventListener("click", showDivision);

/**
function isSumNumber() {
    if (isNaN(getNumberA()) || isNaN(getNumberB())) {
        document.getElementById("total").innerHTML = "ERROR: No has introducido un número!";
        console.log("A");
    } else {
        showSum();
        console.log("B");
    }
}

function isSubstractionNumber() {
    if (isNaN(getNumberA()) || isNaN(getNumberB())) {
        document.getElementById("total").innerHTML = "ERROR: No has introducido un número!";
    } else {
        showSubstraction();
    }
}

function isMultiplicationNumber() {
    if (isNaN(getNumberA()) || isNaN(getNumberB())) {
        document.getElementById("total").innerHTML = "ERROR: No has introducido un número!";
    } else {
        showMultiplication();
    }
}

function isDivisionNumber() {
    if (isNaN(getNumberA()) || isNaN(getNumberB())) {
        document.getElementById("total").innerHTML = "ERROR: No has introducido un número!";
    } else {
        showDivision();
    }
}
*/