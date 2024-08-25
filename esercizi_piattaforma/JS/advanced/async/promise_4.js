function fetchDataFromAPI() {
  const success = Math.random() * 0.6;
  console.log(success);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success < 0.5) {
        reject(`Error: Failed to fetch data`);
      } else {
        resolve(`Data retrieved successfully`);
      }
    }, 1000);
  });
}

fetchDataFromAPI()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
//.....
