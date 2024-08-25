const willSucced = false;

function returnPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (willSucced) {
        resolve(`ok`);
      } else {
        reject(`mission failed, we'll get them next time`);
      }
    }, 2000);
  });
}

returnPromise()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
