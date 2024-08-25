const person = { name: 'John', age: 30 };
let parsedName;
let parsedAge;
function fetchDataFromAPI(callback) {
  setTimeout(() => {
    callback;
  }, 2000);
}

function handleData(data) {
  const { name, age } = data;
  parsedAge = age;
  parsedName = name;
}

fetchDataFromAPI(handleData(person));
console.log(parsedName, parsedAge);
