//prefix sum and hashmap.
// almost same as Zero Sum Subarrays in gfg.

function maxlen(arr) {
  let sum = 0;
  maxlen = 0;
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum == 0) {
      maxlen = i + 1; // edge case handler
    }
    if (map.has(sum)) {
      maxlen = Math.max(maxlen, i - map.get(sum));
    } else {
      map.set(sum, i);
    }
  }
  return maxlen;
}
