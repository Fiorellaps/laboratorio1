function hello() {
    return "Hola :)";
}

function bye() {
    return "Adios :)";
}
//Añado al objeto windows del navegador
window.App = {
    hello,
    bye
};

// Forma estandar con trabajar con imports

// Funcion autoinvocada
// No hay cambios porque hay que hacer lo mismo que antes;  
(function(App) {
    App.hello3 = function() {
        return "¡Hola! :)";
    };
})(window.App || (window.App = {}));