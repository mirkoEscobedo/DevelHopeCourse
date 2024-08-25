// function callback_BasedFunction(arg1, arg2, callback) {

//   setTimeout(() => {
//   const result = arg1 + arg2;
//   if (result % 2 !== 0) {
//   callback(null, result);
//   } else {
//   callback(new Error('Result is not odd!'), null); } }, 1000);
//   }

function promiseFunc(arg1, arg2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = arg1 + arg2;
      if (result % 2 !== 0) {
        resolve(result);
      } else {
        reject('Result is not odd!');
      }
    }, 1000);
  });
}

promiseFunc(22, 32)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
