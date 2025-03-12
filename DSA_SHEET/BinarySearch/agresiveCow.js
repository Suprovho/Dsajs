function aggressiveCows(stalls, k) {
  stalls.sort((a, b) => a - b);
  let n = stalls.length;
  let start = 1;
  let end = stalls[n - 1] - stalls[0];
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (allocate(stalls, mid, k)) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return end;
}

function cowPos(stalls, dist, cows) {
  const n = stalls.length;
  let cntCows = 1; // number of cows placed
  let last = stalls[0]; // position of last placed cow
  for (let i = 1; i < n; i++) {
    if (stalls[i] - last >= dist) {
      cntCows++; // place next cow
      last = stalls[i]; // update the last location
    }
    if (cntCows >= cows) return true;
  }
  return false;
}
