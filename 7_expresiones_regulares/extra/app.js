// validar telefono
const pattern = /^(\d{9})|(\d{3}\s\d{2}\s\d{2}\s\d{2})$/;
values = ['951956885', '951 9665 88', '952 35 42 77'];
values.forEach(value => {
    console.log(`Regexp matchs with "${value}"? -> `, pattern.test(value));
});

// validar telefono fijo o móvil
const pattern2 = /^((9|6)\d{8})|((9|6)\d{2}\s\d{2}\s\d{2}\s\d{2})$/;
values2 = ['951956885', '751 96 65 88', '652 35 42 77'];
values2.forEach(value => {
    console.log(`Regexp matchs with "${value}"? -> `, pattern2.test(value));
});

// validar telefono fijo o móvil +34
const pattern3 = /^(\+34\s)?(((9|6)\d{8})|((9|6)\d{2}\s\d{2}\s\d{2}\s\d{2}))$/;
values3 = ['+34 951956885', '751 96 65 88', '+34 652 35 42 77'];
values3.forEach(value => {
    console.log(`Regexp matchs with "${value}"? -> `, pattern3.test(value));
});


// validar telefono fijo o móvil (+34)
const pattern4 = /^(\(?\+34\)?\s)?(((9|6)\d{8})|((9|6)\d{2}\s\d{2}\s\d{2}\s\d{2}))$/;
values4 = ['+34 951956885', '751 96 65 88', '(+34) 652 35 42 77'];
values4.forEach(value => {
    console.log(`Regexp matchs with "${value}"? -> `, pattern4.test(value));
});

// validar NIE

const pattern5 = /^(X|Y|Z)\s?\d{7}\s?[A-Z]$/;
values5 = ['X 1234567P', 'X1234567P', 'X123567', 'X 1234567 P'];
values5.forEach(value => {
    console.log(`Regexp matchs with "${value}"? -> `, pattern5.test(value));
});

// Validar NIE con -

const pattern6 = /^(X|Y|Z)\s?\d{7}(\s|-)?[A-Z]$/;
values6 = ['X 1234567P', 'X1234567-P', 'X123567-', 'X 1234567-P'];
values6.forEach(value => {
    console.log(`Regexp matchs with "${value}"? -> `, pattern6.test(value));
});

// Validar CP Málaga

const pattern7 = /^29\d{3}$/;
values7 = ['29010', '2010', '28100', '29 010'];
values7.forEach(value => {
    console.log(`Regexp matchs with "${value}"? -> `, pattern7.test(value));
});

// Validar CP Málaga o Madrid

const pattern8 = /^(29|28)\d{3}$/;
values8 = ['29010', '2010', '28100', '29 010'];
values8.forEach(value => {
    console.log(`Regexp matchs with "${value}"? -> `, pattern8.test(value));
});

// Validar CP Málaga o Madrid o Barcelona

const pattern9 = /^(29|28|08)\d{3}$/;
values9 = ['29010', '08010', '28100', '29 010'];
values9.forEach(value => {
    console.log(`Regexp matchs with "${value}"? -> `, pattern9.test(value));
});

// Validar RGB

const pattern10 = /^RGB\((\d{1,3}\,\s){2}\d{1,3}\)$/i;
values10 = ['RGB(128, 128, 0)', 'rgb(128, 128, 0)', 'RGB(128,128,0)', 'RGB(128, 128, )'];
values10.forEach(value => {
    console.log(`Regexp matchs with "${value}"? -> `, pattern10.test(value));
});