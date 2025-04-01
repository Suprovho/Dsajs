var lengthOfLongestSubstring = function (s) {
  // brute force.
  let maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    const sub = new Set(); // we need to reset.
    for (let j = i; j < s.length; j++) {
      if (sub.has(s[j])) {
        maxLen = Math.max(maxLen, j - i);
        break;
      }
      sub.add(s[j]);
    }
  }
  return maxLen; // tc-O(N^2); sc-O(N);
};

// sliding wind.. 2 point..

var lengthOfLongestSubstring = function (s) {
  let maxLen = 0;
  const sub = new Set();
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    if (sub.has(s[right])) {
      while (left < right && sub.has(s[right])) {
        sub.delete(s[left]);
        left++;
      }
    }
    sub.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen; // tc-O(N); sc-O(N);
};
