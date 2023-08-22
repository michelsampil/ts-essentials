"use strict";
// Abstract Classes
// Abstract classes are classes that cannot be instantiated directly,
// serving as blueprints for other classes. They cancontain abstract methods
// that must be implemented inthe derived classes.
class Vehicle {
}
class Car extends Vehicle {
    move() {
        console.log('the car is moving...');
    }
}
const car = new Car();
car.move();
// const vehicle = new Vehicle(); 👈 ❌ We can't create a instance of an abstract class.