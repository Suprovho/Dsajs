function lcs(s1, s2) {
  let n = s1.length;
  let m = s2.length;
  const dp = Array.from({ length: n }, () => Array(m).fill(-1));
  return helper(s1, s2, n - 1, m - 1, dp);
}

function helper(s1, s2, ind1, ind2, dp) {
  if (ind1 < 0 || ind2 < 0) {
    return 0;
  }
  if (dp[ind1][ind2] !== -1) {
    return dp[ind1][ind2];
  }
  if (s1[ind1] === s2[ind2]) {
    return (dp[ind1][ind2] = 1 + helper(s1, s2, ind1 - 1, ind2 - 1, dp));
  } else {
    // If the characters don't match, consider two options: moving one index in either string
    return (dp[ind1][ind2] = Math.max(
      lcsUtil(ind1, ind2 - 1),
      lcsUtil(ind1 - 1, ind2)
    ));
  }
}
// shifting of 1 indx
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
      if (s1[ind1 - 1] === s2[ind2 - 1]) {
        dp[ind1][ind2] = 1 + dp[ind1 - 1][ind2 - 1];
      } else {
        dp[ind1][ind2] = Math.max(dp[ind1 - 1][ind2], dp[ind1][ind2 - 1]);
      }
    }
  }
  return dp[n][m];
}
