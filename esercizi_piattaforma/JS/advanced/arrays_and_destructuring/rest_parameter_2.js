function filterOutOdds(...numbers) {
  let pari = [];
  numbers.forEach((number) =>
    number % 2 == 0 ? pari.push(number) : console.log(number + ' dispari')
  );
  return pari;
}

console.log(filterOutOdds(32, 3, 4, 5, 6132, 64, 31));
