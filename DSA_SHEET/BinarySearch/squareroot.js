function floorSqrt(n) {
  // your code here 
  if (n === 1) return 1;
  let start = 1;
  let end = Math.floor(n / 2);
  let ans = 0;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (mid * mid === n) {
      return mid;
    }
    if (mid * mid < n) {
      start = mid + 1;
      ans = mid;
    } else {
      end = mid - 1;
    }
  }
  return ans;
}
