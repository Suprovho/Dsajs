function sumDigit(n) {
  if (n <= 0) {
    return n;
  }
  let sum = Math.floor(n % 10);
  return sum + sumDigit(n / 10);
}

console.log(sumDigit(3421));
