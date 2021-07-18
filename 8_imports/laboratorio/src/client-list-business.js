// FORMA 1 CommonJS
// const DataBusiness = require("./data-business");
// const ClientBusiness = require("./client-business");
// FORMA 2 ES6
import * as DataBusiness from "./data-business";
import * as ClientBusiness from "./client-business";

function printClientsAccounts() {
    const clients = DataBusiness.getClients();
    const ul = document.createElement("ul");
    for (let client of clients) {
        const element = ClientBusiness.getClientElement(client);
        ul.appendChild(element);
    }

    document.getElementById("root").appendChild(ul);
}

// FORMA 1 CommonJS

// module.exports = {
//     printClientsAccounts
// };

// FORMA 2 ES6

export {
    printClientsAccounts
};