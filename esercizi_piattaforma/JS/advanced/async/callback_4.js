function runCallbacks(callbacks) {
  callbacks.forEach((callback) => callback());
  //....
}
function firstCallback() {
  console.log(`getting run`);
}
function secondCallback() {
  console.log(`getting run`);
}

function thirdCallback() {
  console.log(`getting run`);
}
const callbackArray = [firstCallback, secondCallback, thirdCallback];
runCallbacks(callbackArray);
