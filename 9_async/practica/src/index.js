/*setTimeout(function() {
    alert("Hola después de 1 segundo");
}, 1000);

const myCallback = () => alert("Hola después de 1 segundo");
setTimeout(myCallback, 1000);

setTimeout(() => alert("Hola después de 1 segundo"), 1000);


const myPromise = new Promise((resolve, reject) => {
    resolve("Hola, esto es la respuesta correcta de la promesa :)");
});
// si hacemos .then significa que se ha llegado a resolve
myPromise.then(result => {
    alert(result);
});



const myPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("Hola, esto es la respuesta correcta de la promesa :)");
    }, 3000)
});

myPromise.then(result => {
    alert(result);
});

const myPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        reject("Error dentro de la promesa");
    }, 3000)
});


//Then para resove ; catch para reject
myPromise.then(result => {
    alert(result);
}).catch(error => {
    alert("Se ha producido un error en la promesa: " + error);
});


const myPromise = new Promise((resolve, reject) => {
    const currentDay = new Date().getDate();
    if (currentDay === 1) {
        reject("Error dentro de la promesa");
    } else if (currentDay < 15) {
        resolve("Estamos en la primera quincena");
    } else {
        resolve("Estamos en la segunda quincena");

    }
});

myPromise.then(result => {
    return " correcto: " + result;
}).then(result2 => {
    alert(result2);
}).catch(error => {
    alert("Se ha producido un error en la promesa: " + error);
});


myPromise.then(result => {
    const mySecondPromise = new Promise(resolve => {
        setTimeout(function() {
            resolve("La promesa se ha devuelto: " + result);
        }, 1000)
    })
    return mySecondPromise;
}).then(result2 => {
    alert(result2);
}).catch(error => {
    alert("Se ha producido un error en la promesa: " + error);
});

*/
// para obtener datos a URL del servidir
/*
fetch("https://api.github.com/orgs/lemoncode/members").then(response => {
    return response.json();
}).then(data => {
    for (item of data) {
        document.write(item.login);

    }
}).catch(error => {
    document.write("Se ha producido un error")
});
*/
// AXIOS --> trabajar peticiones a un servidor

import axios from "axios";
axios.get("https://api.github.com/orgs/lemoncode/members").then(response => {
    return response.data
}).then(data => {
    for (item2 of data) {
        document.write(item2.login);
    }
});