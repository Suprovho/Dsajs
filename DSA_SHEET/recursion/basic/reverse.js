function reverse(n, sum = 0) {
  if (n == 0) {
    return sum;
  }
  let rem = n % 10;
  sum = sum * 10 + rem;
  return reverse(Math.floor(n / 10), sum);
}



console.log(reverse(1842));

function pal(n) {
    return n==reverse(n); 
}

console.log(pal(111));
