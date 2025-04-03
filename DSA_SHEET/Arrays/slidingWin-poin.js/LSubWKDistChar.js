function kDistinctChars(k, str) {
  let maxLen = 0;
  const map = new Map();
  let left = 0;
  for (let right = 0; right < str.length; right++) {
    map.set(str[right], (map.get(str[right]) || 0) + 1);
    while (map.size > k) {
      map.set(str[left], map.get(str[left]) - 1);
      if (map.get(str[left]) === 0) {
        map.delete(str[left]);
      }
      left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}

let str = "aabcddefg";
console.log(kDistinctChars(3, str));
