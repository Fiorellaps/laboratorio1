// 1. Full name validation
// - Nombre no vacio y longitud minima de 5
var isValidFullName = fullname => fullname && fullname.length >= 5;
/*
var validateFullName = () => {
    var fullNameField = document.getElementById("fullName");
    var valid = isValidFullName(fullNameField.value);
    if (valid) {
        fullNameField.classList.remove("error");
    } else {
        fullNameField.classList.add("error");
    }
    return valid;
};
*/

// 2. Birthdae validation
// - Year Mayor 1850 Menor que 2021
// - Month entre 1 y 12
// - Días Máximo 30 o 31 segun el mes y febrero 28 o 29 

var isValidYear = year =>
    year && year >= 1850 && year < new Date().getFullYear();
var isValidMonth = month => month >= 1 && month <= 12;
var isLeapYear = year =>
    year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
var isValidDay = (day, month, year) => {
    var monthLength = [
        31,
        isLeapYear(year) ? 29 : 28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31,
    ];
    return day > 0 && day <= monthLength[month - 1];
};
var splitDateInParts = date => {
    var parts = date.split("/");
    return [parseInt(parts[0]), parseInt(parts[1]), parseInt(parts[2])];
};
var isValidDate = date => {
    if (date.length < 8 || date.length > 10) return false;
    var parts = splitDateInParts(date); // [day, month, year]
    return (
        isValidYear(parts[2]) &&
        isValidMonth(parts[1]) &&
        isValidDay(parts[0], parts[1], parts[2])
    );
};
/*
var validateBirthdate = () => {
    var birthdayField = document.getElementById("birthday");
    var valid = isValidDate(birthdayField.value);
    if (isValidDate(birthdayField.value)) {
        birthdayField.classList.remove("error");
    } else {
        birthdayField.classList.add("error");
    }
    return valid;
};
*/


// 3. DNI validation
var DNI_LETTERS = "TRWAGMYFPDXBNJZSQVHLCKET";
var isValidDNILetter = (dniLetter, dniNumber) =>
    DNI_LETTERS[dniNumber % 23] === dniLetter.toUpperCase();
var isValidDNINumber = number => number >= 0 && number <= 99999999;
var isValidDNI = dni => {
    if (dni.length !== 9) return false;
    var dniNumber = dni.slice(0, 8);
    var dniLetter = dni.slice(8, 9);
    return isValidDNINumber(dniNumber) && isValidDNILetter(dniLetter, dniNumber);
};
/*var validateDNI = () => {
    var dniField = document.getElementById("dni");
    var valid = isValidDNI(dniField.value);
    if (valid) {
        dniField.classList.remove("error");
    } else {
        dniField.classList.add("error");
    }
    return valid;
};
*/
// 4. Mobile Validation
var isValidPhoneNumber = phoneNumber => phoneNumber && parseInt(phoneNumber) && phoneNumber.length === 9 && (phoneNumber.startsWith(9), phoneNumber.startsWith(8), phoneNumber.startsWith(7), phoneNumber.startsWith(6));
/*var validatePhoneNumber = () => {
    var PhoneNumberField = document.getElementById("mobile");
    var valid = isValidPhoneNumber(PhoneNumberField.value);
    if (valid) {
        PhoneNumberField.classList.remove("error");
    } else {
        PhoneNumberField.classList.add("error");
    }
    return valid;
};*/

// 5. General Algorithm



var validateInput = (id, validationFunction) => {
    var field = document.getElementById(id);
    var valid = validationFunction(field.value);
    if (valid) {
        field.classList.remove("error");
    } else {
        field.classList.add("error");
    }
    return valid;
}
var validateForm = (event) => {
    event.preventDefault();
    validateInput("fullName", isValidFullName);
    validateInput("birthday", isValidDate);
    validateInput("dni", isValidDNI);
    validateInput("mobile", isValidPhoneNumber);

}
document.getElementById("register").addEventListener("submit", validateForm)
    /*
    document.getElementById("fullName").addEventListener("change", validateInput("fullName", isValidFullName));
    document.getElementById("birthday").addEventListener("change", validateInput("birthday", isValidDate));
    document.getElementById("dni").addEventListener("change", validateInput("dni", isValidDNI));
    document.getElementById("mobile").addEventListener("change", validateInput("mobile", isValidPhoneNumber));
    */

/*
var inputs = {
fullName: () => validateInput("fullName", isValidFullName),
birthday: () => validateInput("birthday", isValidDate, showIsAdult),
dni: () => validateInput("dni", isValidDNI),
mobile: () => validateInput("mobile", isValidMobile),
};
var validateForm = event => {
event.preventDefault();
for (const id in inputs) {
inputs[id]();
}
};
// EVENTS
document.getElementById("register").addEventListener("submit", validateForm);
for (const id in inputs) {
document.getElementById(id).addEventListener("change", inputs[id]);
}

*/