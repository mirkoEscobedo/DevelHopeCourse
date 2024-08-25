function somma(...num) {
  let somma = num.reduce((acc, num) => {
    return acc + num;
  });
  return somma;
}

console.log(somma(2, 32, 23, 4));
