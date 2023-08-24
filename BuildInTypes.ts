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
const arr: Array<number> = [1, 2, 3]
// const arr: Array<number> = [1, 2, '3'] // 👈 ❌ We can't put a string because is defined as Array<number>

console.log(arr);


// Objects & Classes

// Without implementing classes
const user = {
  name: 'pepe',
  age: 21
}

console.log('user: ', user);

// Implementing Classes
class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVPoint = new VirtualPoint(13, 56);
console.log(newVPoint);


// Union Types
// Combine multiple types allowing a variable to
// have different possible types

function print(value: string | number) {
  console.log('Printing string or number: ', value);
}

print('printing string');
print(44552211);

// WildCard or JS by default Behaviour
function printAny(value: any) {
  console.log('Printing string or number: ', value);
}

printAny('printing ANYthing...');

// Enums
enum CurrencyEnum {
  "USD",
  "EU",
  "PESO"
}

// String Enum

enum CountryEnum {
  Usa = 'United State',
  Ger = 'Deuschland',
  Pl = 'Polska',
  Uy = 'Uruguay'
}

// Casting

let numberA: number = 4;
// console.log((numberA as string)); // 👈 ❌  That will fail, need first be casted to unknown

let numberB: number = 4;
console.log((numberB as unknown as string));

let anyArray = [1, 2, '🥑', [1, 2], { name: 'pedro' }]
anyArray.forEach((e: any) => {
  console.log('forEach: ', e);
})