function doubleArray(arr, callback) {
    let newArray = [];
    newArray = arr.map(callback);
    return newArray;
}
function doubleValue(num) {
  return num * 2;
}
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubleArray(numbers, doubleValue);
console.log(doubledNumbers); // Should output [2, 4, 6, 8, 10]
