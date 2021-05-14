/**var hotel = {
    name: "Mencey",
    location: "Tenerife",
    img: "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2f/e9/d7/iberostar-grand-mencey.jpg",
    puntuacion: "",
    anonima: "",
};
*/

var hoteles = {
    Miramar: {
        name: "Miramar",
        location: "Granada",
        img: "img/hotel2.png",
        puntuacion: "",
        anonima: "",
    },
    Melia: {
        name: "Melia",
        location: "Malaga",
        img: "img/hotel1.png",
        puntuacion: "",
        anonima: "",
    }
};

var estrellas = {
    una: "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    dos: "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    tres: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    cuatro: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    cinco: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
}

var nombre = prompt("Introduce el nombre del hotel que quieres puentuar (Miramar o Melia):");
hoteles[nombre].puntuacion = prompt("Puntua al hotel del uno al cinco (escribe el número):");
hoteles[nombre].anonima = confirm("¿Quieres que sea anónima?");
document.getElementById("name-hotel").innerHTML = "Hotel: " + hoteles[nombre].name;
document.getElementById("location-hotel").innerHTML = "Situado en " + hoteles[nombre].location;
document.getElementById("img-hotel").src = hoteles[nombre].img;
document.getElementById("rating").innerHTML = " " + estrellas[hoteles[nombre].puntuacion] + " estrellas";
document.getElementById("anonymous").checked = hoteles[nombre].anonima;