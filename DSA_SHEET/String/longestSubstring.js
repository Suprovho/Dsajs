var longestPalindrome = function (s) {
  if (s === null || s.length < 1) return "";
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    let odd = expandFromMiddle(s, i, i); // racecar
    let even = expandFromMiddle(s, i, i + 1);
    let len = Math.max(odd, even);
    if (len > end - start) {
        start = i - Math.floor((len - 1) / 2);
        end = i + Math.floor(len / 2); 
    }
  }
  return s.substring(start,end+1);
};

function expandFromMiddle(s, left, right) {
  if (s == null || left > right) return 0;
  while (left >= 0 && right < s.length && s[left] == s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}
