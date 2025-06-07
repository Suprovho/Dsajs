var uniquePaths = function (m, n) {
  const dp = Array.from(Array(m), () => Array(n).fill(-1));
  return count(m - 1, n - 1, dp);
};

// in these type of q it would be better if we go from backward means final point to start code will be cleaner or there will be more args

// so we will move up and down instead of down and right

function count(i, j, dp) {
  if (i == 0 && j == 0) {
    return 1;
  }
  if (i < 0 || j < 0) {
    return 0;
  }
  if (dp[i][j] !== -1) {
    return dp[i][j];
  }
  const up = count(i - 1, j, dp);
  const left = count(i, j - 1, dp);

  return (dp[i][j] = up + left);
}

// tabulation

var uniquePaths2 = function (m, n) {
  const dp = Array.from(Array(m), () => Array(n).fill(-1));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = 1;
        continue;
      }
      let up = 0;
      let left = 0;

      if (i > 0) {
        left = dp[i][j - 1];
      }
      if (j > 0) {
        up = dp[i - 1][j];
      }
      dp[i][j] = up + left;
    }
  }
  return dp[m - 1][n - 1];
};
