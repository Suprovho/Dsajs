function fibo(n) {
  if (n < 2) {
    return n;
  }
  return fibo(n - 1) + fibo(n - 2); // recursive tree. first left then right.
}

console.log(fibo(4));
