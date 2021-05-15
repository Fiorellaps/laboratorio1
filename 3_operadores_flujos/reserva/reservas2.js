const booking1 = {
    count: 1,
    prince: 127.95
}
const booking2 = {
        count: 5,
        prince: 127.95
    }
    /*
    if (booking1 === booking2) {
        console.log("Son iguales");
    } else {
        console.log("No son iguales");
    }

    if (booking1.count == booking2.count && booking1.prince == booking2.prince) {
        console.log("Son iguales");
    }


const totalNoches = booking1.count + booking2.count;
console.log(totalNoches);
*/
    ++booking1.count
if (booking1.count > booking2.count) {
    console.log("1: " + booking1.count);
} else {
    console.log("2:" + booking2.count)
};

const masnoches = booking1.count > booking2.count ? console.log(booking1.count) : console.log(booking2.count);
reserva = 0
reserva = booking1.prince * booking1.count > 500 ? ++reserva : reserva;
reserva = booking2.prince * booking2.count > 500 ? ++reserva : reserva;
console.log(reserva);