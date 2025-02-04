function nthRoot(n, m) {
  // code here
  let low = 1,
    high = m;
  while (low <= high) {
    let mid = (high + low) / 2;
    if (Math.pow(mid, n) == m) return mid;
    else if (Math.pow(mid, n) > m) high = mid - 1;
    else low = mid + 1;
  }
  return -1;
}
