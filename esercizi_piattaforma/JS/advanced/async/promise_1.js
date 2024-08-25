let person = {};
function fetchDataFromAPI(callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      callback({ name: 'John', age: 30 });
      if (person !== null) {
        resolve({ status: `ok`, person });
      } else {
        reject(`no data found`);
      }
    }, 2000);
  });
}

function handleData(data) {
  person = { ...data };
}

const result = fetchDataFromAPI(handleData)
  .then((result) => {
    console.log(result.status, result.person);
  })
  .catch((error) => {
    console.log(error);
  });
// function fetchDataFromAPI() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = { name: 'John', age: 30 };
//       if (data) { // Simula una verifica sul dato
//         resolve(data);
//       } else {
//         reject('no data found');
//       }
//     }, 2000);
//   });
// }