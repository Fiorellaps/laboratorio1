/*const subtotal = 30;
const descuento = 10;
const calculaTotal = (subtotal, descuento) => {
    return subtotal - (descuento * subtotal) / 100;
};
console.log("Perfumería", calculaTotal(subtotal, descuento));

const subtotal = 50;
const descuento = 20;
const calculaTotal = (subtotal, descuento) => {
    return subtotal - (descuento * subtotal) / 100;
};
console.log("Supermercado", calculaTotal(subtotal, descuento));
*/
// CONFLICTO DE NOMBRES DE VARIABLES CONST

// OPCION 1 cambiar nombre a las variaables --> pero no es dinámico
// A TRAVÉS DE CLASES

class calculaTotal {
    constructor(descuento) {
        // this para acceder a atributos de una clase
        this.descuento = descuento;
        //this.subtotal = 30;
        //this.total = 0;
        this._subtotal = 0; // clase privada de la clase, no se puede cambiar desde fuera

        this.total = 0;
    }

    set subtotal(nuevoValor) {
            this._subtotal = nuevoValor;
            this.total = this._subtotal - (this.descuento * this._subtotal) / 100;
        }
        /*get total() {
            return this.subtotal - (this.descuento * this.subtotal) / 100;

        }*/

    // metodos de la clase
    /*calculaTotal() {
        this.total = this.subtotal - (this.descuento * this.subtotal) / 100;
    }*/
}
/*
const totalesPerfumeria = new calculaTotal(10);
//totalesPerfumeria.calculaTotal();
console.log("Perfumeria", totalesPerfumeria.total)

const totalesSupermercado = new calculaTotal(20);
//totalesSupermercado.calculaTotal();
totalesSupermercado.subtotal = 50; // getter setter
console.log("Supermercado", totalesSupermercado.total)

// Las clases no se pueden llamar antes de definir

// CAMPOS CALCULADOS
totalesSupermercado.subtotal = 30; // getter setter
console.log("Supermercado", totalesSupermercado.total)

*/

// SETTER

const totalesPerfumeria = new calculaTotal(10);
totalesPerfumeria.subtotal = 30;
console.log("Total Perfumería: ", totalesPerfumeria.total);


// THIS

class PreciosAPI {
    constructor() {
        this.descuento = 0.8;
    }

    cargarPrecioDeServidor() {
        // para acceder a los atributos de nuesgra clase desde funciones se puede hacer con 
        // 1) bind(this) --> vale el this que paso desde fuera
        // 2) usar una arrowfunction
        // 3) asignar valor this fuera de la función
        const self = this;

        setTimeout(() => {
                const precio = 2;
                console.log(precio * this.descuento);
                console.log(this.descuento);
                // undefined porque el setTimeOut es un metodo del objeto window y el this es un objeto de window
            } //.bind(this)
            , 1000)
    }

}

const preciosAPI = new PreciosAPI();
preciosAPI.cargarPrecioDeServidor();


// HERNCIA DE CLASES --> clases con codifgo repetido


class Animal {
    constructor(nombre, piernas, ruido) {
        this.tipo = "animal";
        this.nombre = nombre;
        this.piernas = piernas;
        this.ruido = ruido;
    }

    habla() {
        console.log(`${this.nombre} dice ${this.ruido}`);
    }
    anda() {
        console.log(`${this.name} camina con ${this.piernas} piernas`);
    }
    set cazacomida(comida) {
        // seteando; ssi no existe te lo crea, pero no puedo acceder desde fuera hasta que no la defina
        this.comida = comida;
    }
    get come() {
        // interpolación de cadena
        return `${this.nombre} se come ${this.comida || "nada grouaun"}`;
    }
}

const laika = new Animal("Laika", 4, "woff");
laika.cazacomida = "huesos";
console.log(laika.come);


// extends --> hereda
class Loro extends Animal {
    constructor(nombre) {
            // Llamamos al constructor del padre usando super
            super(nombre, 2, "Curuuukaaaak !!!");
            this.tipo = "loro";
        }
        // Sobreescribimos habla
    habla(amo) {
        super.habla();
        console.log(`Dame chocolatinas ${amo}`);
    }
}

console.log("*** Vamos a por el loro ****");
const paco = new Loro("Paco");
paco.cazacomida = "pipas";
console.log(paco.come);
paco.habla("Lissette");


//1:30


// CARRITO DE LA COMPRA


cesta = [{
        nombre: "Cerveza",
        cantidad: 1,
        precio: 2,
        tipoIVA: "general"
    },
    {
        nombre: "Galletas",
        cantidad: 3,
        precio: 1,
        tipoIVA: "reducido"
    },
    {
        nombre: "pan",
        cantidad: 4,
        precio: 0.5,
        tipoIVA: "superreducido"
    }
];

// Requisitos
/**
 * calcular subtotal de la compra: suma de productos por cantidad sin IVA
 * total compra: subtotal + IVA
 */

class CarritoDeLaCompra {
    constructor() {
        this._cesta = [];
        this._subtotal = 0;
        this._total = 0;
    }

    calculaSubtotal() {
        this._subtotal = 0;
        /*    for (let i = 0; i < this._cesta.length; i++) {
            this._subtotal += this._cesta[i].precio * this._cesta[i].cantidad;
            console.log(this._subtotal)
        }
 */
        this._subtotal = cesta.reduce((acumulado, { cantidad, precio }) => acumulado + cantidad * precio, 0);

    }

    calculaFactorIVA(tipoIVA) {
        switch (tipoIVA) {
            case 'general':
                return 1.21;
            case 'reducido':
                return 1.1;
            case 'superreducido':
                return 1.4;
            default:
                return 1;
        }
    }
    calculaTotal() {
        this._total = cesta.reduce((acumulado, { cantidad, precio, tipoIVA }) => acumulado + cantidad * precio * this.calculaFactorIVA(tipoIVA), 0);

    }

    get total() {
        return this._total;
    }

    get subtotal() {
        return this._subtotal;
    }

    set cesta(cestaExterna) {
        this._cesta = cestaExterna;
        this.calculaSubtotal();
        this.calculaTotal();
        // cada vez que cambio el carrito; calculo el subtotal
    }

}

const carrito = new CarritoDeLaCompra();
carrito.cesta = cesta;

console.log("Subtotal", carrito.subtotal);

console.log("Total", carrito.total);


class CarritoExtranjero extends CarritoDeLaCompra {
    calculaTotal() {
        this._total = cesta.reduce((acumulado, { cantidad, precio, tipoIVA }) => acumulado + cantidad * precio, 0);
    }
}
const carritoExtranjero = new CarritoExtranjero();
carritoExtranjero.cesta = cesta;
console.log("Carrito compra extranjero", carritoExtranjero.subtotal);
console.log("Carrito compra extranjero", carritoExtranjero.total);