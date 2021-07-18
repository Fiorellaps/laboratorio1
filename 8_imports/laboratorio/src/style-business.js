function getNodeStyle(account) {
    if (account.money < 0) {
        return "color: red";
    }

    return "color: blue";
}

// FORMA 1 CommonJS

// module.exports = {
//     getNodeStyle
// };

// FORMA 2 ES6

export {
    getNodeStyle
};