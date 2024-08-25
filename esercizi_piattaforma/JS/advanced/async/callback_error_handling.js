function performOperation(a, b, callback) {
  try {
    callback(a + b);
  } catch {
    throw new Error(`bro we neeed numbers not something else`, null);
  }
  //...
}

function displayResult(result) {
  console.log(result);
  //....
}

performOperation(5, 3, displayResult);
