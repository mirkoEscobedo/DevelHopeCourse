function randomInt(min, max) {
  const ceil = Math.ceil(min);
  const floor = Math.floor(max);
  return Math.floor(Math.random() * (floor - ceil + 1) + ceil);
}
function lanciaDadi() {
  const d1 = randomInt(1, 6);
  const d2 = randomInt(1, 6);
  console.log(`Lancio dei dadi: Dado 1 = ${d1}, Dado 2 = ${d2}`);
}

const id = setInterval(() => {
  console.log(`Lancio dei dadi in corso...`);
}, 1000);
setTimeout(() => {
  lanciaDadi();
  clearInterval(id);
}, 2000);
