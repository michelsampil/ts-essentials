//Access Modifiers (Public, Private, Protected)

//Access modifiers in TypeScript control the visibility 
//and accessibility of class members (properties and methods).

// - public members are accessible from anywhere,
// - private members are only accessible within the class itself,
// - protected members are accessible within the class and its subclasses.


class Person {
  public name: string;
  private age: number;
  protected address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  introduce(): void {
    console.log(`Hi, my name is ${this.name}, I'am ${this.age}years old and I live in ${this.address}`);
  }
}

const homer = new Person('Homer Simpson', 45, "742 Evergreen Terrace");
homer.introduce()
console.log(homer.name);
//console.log(homer.age); // 👈 ❌ We can't access to a private property outside of the class
//console.log(homer.address); // 👈 ❌ We can't access to a protected property outside of the class