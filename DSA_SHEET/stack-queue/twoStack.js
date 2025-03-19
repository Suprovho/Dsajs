function twoStack(x, a, b, sum, count) {
  if (sum > k) {
    return count;
  }
  if (a.length === 0 || b.length == 0) {
    return count;
  }
  let ans1 = twoStack(x, a.slice(1, a.length), b, sum + a[0], count + 1);
  let ans2 = twoStack(x, a, b.slice(1, b.length), sum + b[0], count + 1);
  return Math.max(ans1, ans2);
}
