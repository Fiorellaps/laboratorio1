// EJERCICIO IP

// IP 127.0.0.1
// (1-3).(1-3).(1-3).(1-3)

//const pattern = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
const pattern = /^(\d{1,3}\.){3}\d{1,3}$/;
const values = ['127.0.0.1', 'A.0.0.1', '-1.52.0.0', '10.98.199.1', 'AA 123.22.22.9 NN']; // Si NO NO SI NO

values.forEach(value => {
    //console.log('Regex matchs with ' + value + '? ->', pattern.test(value));
})


// EJERCICIO DNI


//const pattern2 = /^\d{8}(\s|_|-)?[A-Za-z]$/;
const pattern2 = /^\d{2}\.?\d{3}\.?\d{3}(\s|_|-)?[A-Za-z]$/;

const values2 = ['12345678Q', '12345678-Q', '12345678 Q', '12345678_Q', '12345678 q', '12.345.678 Q']; // Si NO NO SI NO

values2.forEach(value => {
    console.log('Regex matchs with ' + value + '? ->', pattern2.test(value));
})

// EXTRAET INFORMACION --> EXEC
// El exec te devuelve información del grupo entre ()
const pattern3 = /^(\d{2}\.?\d{3}\.?\d{3})(\s|_|-)?([A-Za-z])$/;

const values3 = ['12345678Q', '12345678-Q', '12345678 Q', '12345678_Q', '12345678 q', '12.345.678 Q']; // Si NO NO SI NO

values3.forEach(value => {
    console.log('Regex matchs with ' + value + '? ->', pattern3.exec(value));
})

// EXTRAET INFORMACION --> MATCH
// es lo mismo pero hay que asignarlo a un String no a un patron (RegExpr)
// Esto permite que se puedan validar textos mulinea porque coge el string que veien despues 
const pattern4 = /^\d{2}\.?\d{3}\.?\d{3}(\s|_|-)?[A-Za-z]$/;

const values4 = ['12345678Q', '12345678-Q', '12345678 Q', '12345678_Q', '12345678 q', '12.345.678 Q']; // Si NO NO SI NO

values4.forEach(value => {
    console.log('Regex matchs with ' + value + '? ->', value.match(pattern4));
})

// Para poder hacer esto con el exec hay que hacerlo con los flags para que lean los valores multiliena

// FLAGS (OPCIONALES)

const pattern5 = /pattern/igm; //flag i, g, m
const pattern6 = new RegExp('/pattern/igm', 'igm'); //flag i, g, m

const pattern7 = /^\d{8}[A-Z]$/i; // el flag afecta a toda la expresión
// i lo que hace es hacer busqueda sin case sensitive 
const values7 = ['12345678Q', '12345678q', '12345678-Q', '12345678-q'];

values7.forEach(value => {
    console.log(`Regexp matchs with "${value}"? -> `, pattern7.test(value));
});

const pattern8 = /^\d{8}[A-Z]$/g; // g de global que bsuca todas las concidiencias que encuentre aunque esté en otra línea
const pattern9 = /^\d{8}[A-Z]$/m; // m de multilinea --> cada liena es un nuevo sitio donde buscar


const pattern10 = /^952\d{6}/gm;
// texto en varias líneas
const phones = `952123456
957123456
957123952
952123952
957952123
952456123
`;

console.log(phones.match(pattern10)); // con el exec solo está preparado para una linea

// match está preparado para multilinea