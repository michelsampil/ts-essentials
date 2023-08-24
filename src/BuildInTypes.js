"use strict";
// Primitive TS data types
// Commontly used
const happyString = 'happy 😃';
const happyNumber = 3;
const happyBoolean = true;
const nullo = null;
const undefinedThing = undefined;
//Not frecuently symbol, bigint
// Complex data types
// Array
const arr = [1, 2, 3];
// const arr: Array<number> = [1, 2, '3'] // 👈 ❌ We can't put a string because is defined as Array<number>
console.log(arr);
// Objects & Classes
// Without implementing classes
const user = {
    name: 'pepe',
    age: 21
};
console.log('user: ', user);
// Implementing Classes
class VirtualPoint {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const newVPoint = new VirtualPoint(13, 56);
console.log(newVPoint);
// Union Types
// Combine multiple types allowing a variable to
// have different possible types
function print(value) {
    console.log('Printing string or number: ', value);
}
print('printing string');
print(44552211);
// WildCard or JS by default Behaviour
function printAny(value) {
    console.log('Printing string or number: ', value);
}
printAny('printing ANYthing...');
// Enums
var CurrencyEnum;
(function (CurrencyEnum) {
    CurrencyEnum[CurrencyEnum["USD"] = 0] = "USD";
    CurrencyEnum[CurrencyEnum["EU"] = 1] = "EU";
    CurrencyEnum[CurrencyEnum["PESO"] = 2] = "PESO";
})(CurrencyEnum || (CurrencyEnum = {}));
// String Enum
var CountryEnum;
(function (CountryEnum) {
    CountryEnum["Usa"] = "United State";
    CountryEnum["Ger"] = "Deuschland";
    CountryEnum["Pl"] = "Polska";
    CountryEnum["Uy"] = "Uruguay";
})(CountryEnum || (CountryEnum = {}));
// Casting
let numberA = 4;
// console.log((numberA as string)); // 👈 ❌  That will fail, need first be casted to unknown
let numberB = 4;
console.log(numberB);
let anyArray = [1, 2, '🥑', [1, 2], { name: 'pedro' }];
anyArray.forEach((e) => {
    console.log('forEach: ', e);
});
