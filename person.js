class Person {
  constructor(name, quirkyFact, favIceCream) {
    this.name = name,
    this.quirkyFact = quirkyFact,
    this.favIceCream = favIceCream
  }
  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}.`;
  }
  dessert() {
    return `I can't go a day without ${this.favIceCream} ice cream.`;
  }
}

class Student extends Person {
  bio() {
    return `I'm a student at Lighthouse Labs. ${super.bio()}`;
  }

  enroll(cohort) {
    this.cohort = cohort;
  }
}

class Mentor extends Person {
  bio() {
    return `I'm a mentor at Lighthouse Labs. ${super.bio()}`;
  }

  goOnShift() {
    this.onShift = true;
  }

  goOffShift() {
    this.onShift = false;
  }
}

let person1 = new Person("Anna", "superhero strength", "chocolate");
let person2 = new Person("Ben", "invisibility powers", "cookie dough")

let mentor1 = new Mentor("Cameron Smith", "baking apple strudel", "hazelnut");
let student1 = new Student("David Johnson", "making pecan pie", "vanilla");