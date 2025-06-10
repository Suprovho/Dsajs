var minFallingPathSum = function (matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  const dp = Array.from({ length: n }, () => Array(m).fill(-1));
  let mini = Infinity;

  for (let j = 0; j < m; j++) {
    const ans = getMinUtil(n - 1, j, m, matrix, dp);
    mini = Math.min(mini, ans);
  }
  return mini;
};

function getMinUtil(i, j, m, matrix, dp) {
  if (j < 0 || j >= m) {
    return 1e9;
  }
  if (i === 0) return matrix[0][j];

  if (dp[i][j] !== -1) return dp[i][j];

  const up = matrix[i][j] + getMinUtil(i - 1, j, m, matrix, dp);
  const leftDiagonal = matrix[i][j] + getMinUtil(i - 1, j - 1, m, matrix, dp);
  const RightDiagonal = matrix[i][j] + getMinUtil(i - 1, j + 1, m, matrix, dp);

  return (dp[i][j] = Math.min(up, Math.min(leftDiagonal, RightDiagonal)));
}
