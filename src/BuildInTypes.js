"use strict";
// string, number and boolean
const happyString = 'happy 😃';
const happyNumber = 3;
const happyBoolean = true;
// Array
const arr = [1, 2, 3];
// const arr: Array<number> = [1, 2, '3'] // 👈 ❌ We can't put a string because is defined as Array<number>
console.log(arr);
// Objects & Classes
class VirtualPoint {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const newVPoint = new VirtualPoint(13, 56);
console.log(newVPoint);
// Union Types
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
// Differences Between Type Aliases and Interfaces
// Type aliases and interfaces are very similar,
// and in many cases you can choose between them freely.
// Almost all features of an interface are available in type,
// the key distinction is that a type cannot be re-opened 
// to add new properties vs an interface which is always extendable.
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
