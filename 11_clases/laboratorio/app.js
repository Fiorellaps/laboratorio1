const reservas = [
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 3,
  },
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: "suite",
    pax: 2,
    noches: 1,
  },
];

class ReservaHotel {
  constructor() {
    this._reserva = [];
    this._subtotal = 0;
    this._total = 0;
  }

  calcularPrecioHabitacion(tipoHabitacion) {
    switch (tipoHabitacion) {
      case "standard":
        return 100;
      case "suite":
        return 150;

      default:
        return 0;
    }
  }
  calcularSubtotal() {
    const costeAdicional = 40;
    this._subtotal = this._reserva.reduce(
      (acc, reserva) =>
        reserva.noches * this.calcularPrecioHabitacion(reserva.tipoHabitacion) +
        (reserva.pax - 1) * costeAdicional,
      0
    );
  }

  calcularTotal() {
    const IVA = 1.21;
    // Calculo el subtotal por si no lo había hecho antes
    this.calcularSubtotal();
    this._total = this._subtotal + this._subtotal * IVA;
  }
  get subtotal() {
    return this._subtotal;
  }

  get total() {
    return this._total;
  }

  set reserva(listaReservas) {
    this._reserva = listaReservas;
    this.calcularSubtotal();
    this.calcularTotal();
  }
}

const reservaHotel = new ReservaHotel();

reservaHotel.reserva = reservas;

console.log("Subtotal", reservaHotel.subtotal);

console.log("Total", reservaHotel.total);

class ReservaHotelTourOperadora extends ReservaHotel {
  calcularPrecioHabitacion() {
    return 100;
  }

  calcularSubtotal() {
    const costeAdicional = 40;
    this._subtotal = this._reserva.reduce(
      (acc, reserva) =>
        reserva.noches * this.calcularPrecioHabitacion() +
        (reserva.pax - 1) * costeAdicional,
      0
    );
    this._subtotal = this._subtotal * 0.85;
  }

  calcularTotal() {
    const IVA = 1.21;
    // Calculo el subtotal por si no lo había hecho antes
    this.calcularSubtotal();
    this._total = this._subtotal + this._subtotal * IVA;
    this._total = this._total * 0.85;
  }
}

const reservaHotelOperadora = new ReservaHotelTourOperadora();

reservaHotelOperadora.reserva = reservas;

console.log("Subtotal Operadora", reservaHotelOperadora.subtotal);

console.log("Total Operadora", reservaHotelOperadora.total);

// ------------- DESAFÍO --------------- //

class ReservasGeneral {
  constructor() {
    this._reserva = [];
    this._subtotal = 0;
    this._total = 0;
  }
  calcularSubtotal() {
    const costeAdicional = 40;
    this._subtotal = this._reserva.reduce(
      (acc, reserva) =>
        reserva.noches * this.calcularPrecioHabitacion(reserva.tipoHabitacion) +
        (reserva.pax - 1) * costeAdicional,
      0
    );
  }
  calcularTotal() {
    const IVA = 1.21;
    // Calculo el subtotal por si no lo había hecho antes
    this.calcularSubtotal();
    this._total = this._subtotal + this._subtotal * IVA;
  }

  get subtotal() {
    return this._subtotal;
  }

  get total() {
    return this._total;
  }

  set reserva(listaReservas) {
    this._reserva = listaReservas;
    this.calcularSubtotal();
    this.calcularTotal();
  }
}

class ReservasTourOperadora extends ReservasGeneral {
  calcularPrecioHabitacion(tipoHabitacion) {
    return 100;
  }

  calcularSubtotal() {
    super.calcularSubtotal();
    this._subtotal = this._subtotal * 0.85;
  }

  calcularTotal() {
    super.calcularTotal();
    this._total = this._total * 0.85;
  }
}

class ReservasParticulares extends ReservasGeneral {
  calcularPrecioHabitacion(tipoHabitacion) {
    switch (tipoHabitacion) {
      case "standard":
        return 100;
      case "suite":
        return 150;
      default:
        return 0;
    }
  }
}

console.log("// ------------- DESAFÍO --------------- //");

const reservasTourOperadora = new ReservasTourOperadora();

reservasTourOperadora.reserva = reservas;

console.log("Subtotal Operadora", reservasTourOperadora.subtotal);

console.log("Total Operadora", reservasTourOperadora.total);

const reservasParticulares = new ReservasParticulares();

reservasParticulares.reserva = reservas;

console.log("Subtotal Particular", reservasParticulares.subtotal);

console.log("Total Particular", reservasParticulares.total);

// ------------------ ADICIONAL ----------------//

class ReservasGeneralAdicional {
  constructor() {
    this._reserva = [];
    this._subtotal = 0;
    this._total = 0;
  }

  get subtotal() {
    return this._subtotal;
  }

  get total() {
    return this._total;
  }
  calcularSubtotal() {
    const costeAdicional = 40;

    this._subtotal = this._reserva.reduce(
      (acc, reserva) =>
        reserva.noches * this.calcularPrecioHabitacion(reserva.tipoHabitacion) +
        (reserva.pax - 1) * costeAdicional +
        (reserva.desayuno ? 15 : 0),
      0
    );
  }

  calcularTotal() {
    const IVA = 1.21;
    // Calculo el subtotal por si no lo había hecho antes
    this.calcularSubtotal();
    this._total = this._subtotal + this._subtotal * IVA;
  }

  set reserva(listaReservas) {
    this._reserva = listaReservas;
    this.calcularSubtotal();
    this.calcularTotal();
  }
}

class ReservasTourOperadoraAdicional extends ReservasGeneralAdicional {
  calcularPrecioHabitacion(tipoHabitacion) {
    return 100;
  }

  calcularSubtotal() {
    super.calcularSubtotal();
    this._subtotal = this._subtotal * 0.85;
  }

  calcularTotal() {
    super.calcularTotal();
    this._total = this._total * 0.85;
  }
}

class ReservasParticularesAdicional extends ReservasGeneralAdicional {
  calcularPrecioHabitacion(tipoHabitacion) {
    switch (tipoHabitacion) {
      case "standard":
        return 100;
      case "suite":
        return 150;

      default:
        return 0;
    }
  }
}

const reservasAdicional = [
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 3,
  },
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: "suite",
    desayuno: true,
    pax: 2,
    noches: 1,
  },
];

console.log("// ------------- ADICIONAL --------------- //");

const reservasTourOperadoraAdicional = new ReservasTourOperadoraAdicional();

reservasTourOperadoraAdicional.reserva = reservasAdicional;

console.log("Subtotal Operadora", reservasTourOperadoraAdicional.subtotal);

console.log("Total Operadora", reservasTourOperadoraAdicional.total);

const reservasParticularesAdicional = new ReservasParticularesAdicional();

reservasParticularesAdicional.reserva = reservasAdicional;

console.log("Subtotal Particular", reservasParticularesAdicional.subtotal);

console.log("Total Particular", reservasParticularesAdicional.total);
