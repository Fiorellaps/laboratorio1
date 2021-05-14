var hotel = {
    name: "",
    location: "",
};
hotel.name = prompt("Introduce el nombre del hotel");
//var concatHotel = "hotel :" + hotel.name;
document.getElementById('hotel-name').innerHTML = "Hotel: " + hotel.name;
hotel["location"] = prompt("Introduce la locación del hotel");
document.getElementById('hotel-location').innerHTML = hotel["location"];
console.log(hotel)