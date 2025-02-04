var isPalindrome = function (s) {
  let ans = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let start = 0;
  let end = ans.length - 1;
  while (start < end) {
    if (ans[start] === ans[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }
  return true;
};
