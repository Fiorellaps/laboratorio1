var greetSomeone = (greeting, nombre) => {
    console.log(greeting + " querida " + nombre);
}
greetSomeone("Hola", "Fio")

var sayHello = () => console.log("Hola mundo");
var suma = (a, b) => a + b; //return
console.log(suma(4, 4));
var createPerson = (name, age) => {
    person = {
        name,
        age,
    };
    return person
        //variable = nombre dado
}; //return

var createPerson = (name, age) => ({ name, age, });

//arrow function con objetos

//EVENTOS --> nos los da el navegador

var handleButtonclick = () => alert("Button Clicked!");
var handleInputChange = (event) => {
    alert(event.target.value);
};
document.getElementById("myButton").addEventListener("click", handleButtonclick);
document.getElementById("my-header").addEventListener("click", handleButtonclick);
document.getElementById("myInput").addEventListener("change", handleInputChange);