tarifas = {
    standard: 100,
    junior: 120,
    suite: 150,
    spa: 20,
    parking: 10
}

var getTipo = () => tipo = document.getElementById("tipo-habitacion").value;

var getSPA = () => spa = document.getElementById("spa").checked;

var getOcupacion = () => ocupacion = document.getElementById("ocupacion").value;

var getNoches = () => {
    noches = parseInt(document.getElementById("noches").value);
    if (isNaN(noches)) {
        //alert("ERROR: No has introducido un número de noches correcto!");
        return 0;
    } else {
        return noches;
    }
}


var getParking = () => {
    parking = parseInt(document.getElementById("parking").value);
    if (isNaN(parking)) {
        //alert("ERROR: No has introducido un número de noches de parking correcto!");
        return 0;
    } else {
        return parking;
    }
}

var getTotal = () => {
    var valor_tipo = getNoches() * tarifas[getTipo()];
    var valor_spa = getSPA() ? tarifas.spa : 0;
    var valor_parking = getParking() * tarifas.parking;
    var result = valor_spa + valor_tipo + valor_parking;
    if (getOcupacion() == "individual") {
        result = result * 0.75;
    } else if (getOcupacion() == "triple") {
        result = result * 1.25;
    } else {
        result = result;
    }

    document.getElementById("total").innerHTML = "Total: " + result + " €";
}

//document.getElementById("calcular").addEventListener("click", getTotal);

//OPCIONAL
document.getElementById("tipo-habitacion").addEventListener("click", getTotal);
document.getElementById("spa").addEventListener("change", getTotal);
document.getElementById("ocupacion").addEventListener("click", getTotal);
document.getElementById("noches").addEventListener("keyup", getTotal);
document.getElementById("parking").addEventListener("keyup", getTotal);