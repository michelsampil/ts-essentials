// Interfaces define the structure and contract that a class must adhere to.
// They specify properties, method signatures,
// and ensure consistent implementation across multiple classes.
// A class can implement multiple interfaces but can't Inheritance 
// from multiple classes (It relies on the programming language).

interface Shape {
  area(): number;
  draw(): void;
}

class Circle implements Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius + this.radius;
  }

  draw(): void {
    console.log("Drawing a circle");
  }
}

const circle = new Circle(5);
console.log(`Circle Area: ${circle.area()}`);
circle.draw();


// Implementing an interface means that a class must 
// provide implementations for all the properties and 
// methods defined in the interface. This ensures that the
// class adheres to the contract specified by the interface.

interface Printable {
  print(): void;
}

class PrintableDocument implements Printable {
  print(): void {
    console.log("Printing document...")
  }
}

const doc: PrintableDocument = new PrintableDocument();
doc.print();
