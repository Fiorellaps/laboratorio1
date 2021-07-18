// FORMA 1 CommonJS
// const ClientListBusiness = require("./client-list-business");

// FORMA 2 ES6
import * as ClientListBusiness from "./client-list-business";


window.onload = function() {
    ClientListBusiness.printClientsAccounts();
};