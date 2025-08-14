function checkPrime(n) {
  if (n <= 1) return false;

  // Check from 2 to sqrt(n)
  for (let i = 2; i <= Math.sqrt(n); i++) if (n % i == 0) return false;

  return true;
}

let n = 1483;
let isPrime = checkPrime(n);
if (isPrime) {
  console.log(n + " is a prime number.");
} else {
  console.log(n + " is not a prime number.");
}
