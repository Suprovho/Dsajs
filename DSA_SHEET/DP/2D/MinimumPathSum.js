var minPathSum = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  const dp = new Array(m).fill(null).map(() => new Array(n).fill(-1));
  return helper(grid, m - 1, n - 1, dp);
};

function helper(grid, i, j, dp) {
  if (i === 0 && j === 0) {
    return grid[0][0];
  }
  if (i < 0 || j < 0) {
    return Infinity; // as we are adding up
  }
  if (dp[i][j] !== -1) {
    return dp[i][j];
  }

  let up = grid[i][j] + helper(grid, i - 1, j, dp);
  let left = grid[i][j] + helper(grid, i, j - 1, dp);

  dp[i][j] = Math.min(up, left);
  return dp[i][j];
}

// tabulation

var minPathSum = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  const dp = new Array(m).fill(null).map(() => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = grid[i][j];

      } else {
        let up = grid[i][j];
        if (i > 0) up += dp[i - 1][j];
        else up += Infinity;

        let left = grid[i][j];
        if (j > 0) left += dp[i][j - 1];
        else left += Infinity;

        dp[i][j] = Math.min(left, up);
      }
    }
  }
  return dp[m - 1][n - 1];
};
