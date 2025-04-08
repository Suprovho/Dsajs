function factorial(n) {
  if (n <= 1) {
    return n;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));

// in this type of recursion its like hey factorial(5) asking fac..(4) do u have ans and each one is passsing and waiting for next until it hit the base case then remaining one perform basis on that;

// be careful with return statement 