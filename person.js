class Person {
  constructor(name, quirkyFact, favIceCream) {
    this.name = name,
    this.quirkyFact = quirkyFact,
    this.favIceCream = favIceCream
  }
  bio() {
    console.log(`My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}.`);
  }
  dessert() {
    console.log(`I can't go a day without ${this.favIceCream} ice cream.`);
  }
}

class Student extends Person {
  enroll(cohort) {
    this.cohort = cohort;
  }
}

class Mentor extends Person {
  goOnShift() {
    this.onShift = true;
  }
  goOffShift() {
    this.onShift = false;
  }
}

let person1 = new Person("Anna", "superhero strength", "chocolate");
let person2 = new Person("Ben", "invisibility powers", "cookie dough")

person2.bio();
person2.dessert();