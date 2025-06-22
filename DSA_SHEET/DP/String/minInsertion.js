var minInsertions = function (s) {
  let n = s.length;
  let t = s.split("").reverse().join("");
  // The minimum insertions required is equal to the length of the string minus the length of its Longest Palindromic Subsequence
  return n - lcs(s, t);
};

function lcs(s1, s2) {
  let n = s1.length;
  let m = s2.length;
  const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(-1));
  for (let i = 0; i <= n; i++) {
    dp[i][0] = 0;
  }
  for (let i = 0; i <= m; i++) {
    dp[0][i] = 0;
  }
  for (let ind1 = 1; ind1 <= n; ind1++) {
    for (let ind2 = 1; ind2 <= m; ind2++) {
      if (s1[ind1 - 1] == s2[ind2 - 1]) {
        dp[ind1][ind2] = 1 + dp[ind1 - 1][ind2 - 1];
      } else {
        dp[ind1][ind2] = Math.max(dp[ind1 - 1][ind2], dp[ind1][ind2 - 1]);
      }
    }
  }
  return dp[n][m];
}
