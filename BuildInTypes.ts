// string, number and boolean

const happyString = 'happy 😃';
const happyNumber = 3;
const happyBoolean = true;

// Array
const arr: Array<number> = [1, 2, 3]
// const arr: Array<number> = [1, 2, '3'] // 👈 ❌ We can't put a string because is defined as Array<number>

console.log(arr);


// Objects & Classes


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


// Differences Between Type Aliases and Interfaces
// Type aliases and interfaces are very similar,
// and in many cases you can choose between them freely.
// Almost all features of an interface are available in type,
// the key distinction is that a type cannot be re-opened 
// to add new properties vs an interface which is always extendable.

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

