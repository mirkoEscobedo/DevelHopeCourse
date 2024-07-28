function objToArray(obj) {
  let finalArray = [];
  for (let key in obj) {
    if (obj[key].length > 5) {
      finalArray[finalArray.length] = obj[key];
    }
  }
  return finalArray;
}

let car = {
    model: 'fhaoeifhoasei',
    brand: 'feaf',
    year: '323',
}

console.log(objToArray(car));