// hard quest watch the vid or article before

//* During DP, you're finding the best way to reach the bottom-right corner.

//* When printing the answer, you're retracing your steps back from the goal to the start to know which path you took.

// reverse engineering.

// use dp table to solve printing problem

var shortestCommonSupersequence = function (s1, s2) {
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

  let i = n;
  let j = m;
  let ans = "";
  while (i > 0 && j > 0) {
    if (s1[i - 1] == s2[j - 1]) {
      ans += s1[i - 1];
      i--, j--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      s += s1[i - 1];
      i--;
    } else {
      s += s2[j - 1];
      j--;
    }
  }
  while (i > 0) {
    ans += s1[i - 1];
    i--;
  }

  while (j > 0) {
    ans += s2[j - 1];
    j--;
  }

  return ans.split("").reverse().join("");
};
