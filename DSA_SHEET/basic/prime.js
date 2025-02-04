function checkPrime(n) {
  let cnt = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      cnt++;
      if (n / i !== i) {
        cnt++;
      }
    }
  }
  return cnt === 2
}

let n = 1483;
let isPrime = checkPrime(n);
if(isPrime) {
    console.log(n + " is a prime number.");
} else {
    console.log(n + " is not a prime number.");
}
