class Pizza {

  constructor(size, crust) {
    this.size = size;
    this.crust = crust;
    this.toppings = ["cheese"];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  get size() {
    return this.size;
  }

  get price() {
    let basePrice = 10;
    let toppingPrice = 2;
    return basePrice + (this.toppings.length * toppingPrice);
  }

  set size(size) {
  if(size === 's' || size === 'm' || size === 'l') {
    this.size = size;
  }
  else {
    console.log("Please specify a size")
  }
}

let pizza1 = new Pizza();
pizza1.addTopping("mushrooms");
pizza1.addTopping("peppers");

let pizza2 = new Pizza();
pizza2.addTopping("more cheese");

let pizza3 = new Pizza('large', 'thin')

let pizza4 = new Pizza();
pizza4.price;
pizza4.price = 's';