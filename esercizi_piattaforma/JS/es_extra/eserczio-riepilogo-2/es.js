class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
}

let carArray = [new Car('kia', 'punto', 3000), new Car('fiat', '500', 3249)];

function carPrinter(array) {
  let finalArray = [];
  for (let i = 0; i < array.length; i++) {
    let string;
    string = array[i].brand + ' ' + array[i].model;
    finalArray[finalArray.length] = string;
  }

  return finalArray;
}

console.log(carPrinter(carArray));
