// const promise = new Promise((resolve) => {
//     setTimeout(()=> {

//     })
// })

async function fetchData() {
  try {
    const result = await fetch('https://api.sampleapis.com/switch/games');
    return result;
  } catch (error) {
    console.log(error);
  }
}
fetchData().then((data) => {
  console.log(data);
});
