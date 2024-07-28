const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

function isPrime(numArray) {
  let primes = [];
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] % 2 != 0) {
      primes[primes.length] = numArray[i];
    }
  }
  return primes;
}

console.log(isPrime(numbers));
