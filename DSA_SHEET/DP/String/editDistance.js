var minDistance = function (S1, S2) {
  const n = S1.length;
  const m = S2.length;

  const dp = new Array(n).fill(null).map(() => new Array(m).fill(-1));

  return editDistanceUtil(S1, S2, n - 1, m - 1, dp);
};

function editDistanceUtil(S1, S2, i, j, dp) {
  // If the first string is empty, the only option is to insert all characters from the second string
  if (i < 0) {
    return j + 1;
  }
  // If the second string is empty, the only option is to delete all characters from the first string
  if (j < 0) {
    return i + 1;
  }

  if (dp[i][j] !== -1) return dp[i][j];

  if (S1[i] == S2[j])
    return (dp[i][j] = 0 + editDistanceUtil(S1, S2, i - 1, j - 1, dp));
  else {
    return (dp[i][j] =
      1 +
      Math.min(
        editDistanceUtil(S1, S2, i, j - 1, dp),
        Math.min(
          editDistanceUtil(S1, S2, i - 1, j, dp),
          editDistanceUtil(S1, S2, i - 1, j - 1, dp)
        )
      ));
  }
}

// tabulation

var minDistance = function (S1, S2) {
  const n = S1.length;
  const m = S2.length;

  const dp = new Array(n + 1).fill(null).map(() => new Array(m + 1).fill(0));

  for (let i = 0; i <= n; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j <= m; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (S1[i - 1] === S2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] =
          1 +
          Math.min(
            dp[i][j - 1], // Insert
            dp[i - 1][j], // Delete
            dp[i - 1][j - 1] // Replace
          );
      }
    }
  }

  return dp[n][m];
};
