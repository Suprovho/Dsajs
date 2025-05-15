function minPartition(N) {
  // code here

  const currency = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1]; // in max order greedy
  const ans = [];
  let i = 0;

  while (N > 0) {
    let notes = Math.floor(N / currency[i]);
    while (notes-- > 0) {
      ans.push(currency[i]);
    }
    N %= currency[i];
    i++;
  }
  return ans;
}
