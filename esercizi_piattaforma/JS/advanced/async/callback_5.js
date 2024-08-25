function performOperation(a, b, callback) {
  callback(a + b);
  //...
}

function displayResult(result) {
  console.log(result);
  //....
}

performOperation(5, 3, displayResult);
    