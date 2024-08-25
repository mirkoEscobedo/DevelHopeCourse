function printName(name) {
  console.log(name);
}

function sayHelloName(func, name) {
  setTimeout(function () {
    console.log('Hello ');
    func(name);
  }, 1000);
}

sayHelloName(printName, 'Laura');
