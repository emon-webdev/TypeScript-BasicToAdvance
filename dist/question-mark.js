"use strict";
// ternary operator
var _a, _b;
const age = 22;
if (age >= 18) {
    console.log("adult");
}
else {
    console.log("no");
}
const isAdult = age >= 18 ? "yes" : "no";
console.log(isAdult);
// nullish coeslanceing operator, (null & undefined)
const isAuthCatedUser = null;
const userName = isAuthCatedUser !== null && isAuthCatedUser !== void 0 ? isAuthCatedUser : "guest";
console.log(userName);
const manush1 = {
    name: "Manush",
    age: 100,
    address: {
        city: "No City",
        road: "No road",
    }
};
// npx ts-node-dev --respown ./src/question-mark.ts
const home = (_b = (_a = manush1 === null || manush1 === void 0 ? void 0 : manush1.address) === null || _a === void 0 ? void 0 : _a.home) !== null && _b !== void 0 ? _b : "No Home"; // default "no home"
console.log(home);
