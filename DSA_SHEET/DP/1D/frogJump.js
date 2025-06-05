function minCost(height) {
  let dp = Array(n).fill(-1);
  let n = height.length;
  return helper(n - 1, height, dp);
}
// memo
function helper(ind, height) {
  if (n == 0) {
    return 0;
  }
  if (dp[ind] !== -1) return dp[ind];
  let JumpTwo = Infinity;
  let JumpOne =
    helper(ind - 1, height, dp) + Math.abs(height[ind] - height[ind - 1]);
  if (ind > 1)
    JumpTwo =
      helper(ind - 2, height, dp) + Math.abs(height[ind] - height[ind - 2]);

  return (dp[ind] = Math.min(JumpOne, JumpTwo));
}

// tabulation

function minCost2(height) {
  let dp = Array(n).fill(-1);
  let n = height.length;
  dp[0] = 0;
  for (let ind = 1; ind < n; ind++) {
    let jumpTwo = Infinity;
    let jumpOne = dp[ind - 1] + Math.abs(height[ind] - height[ind - 1]);
    if (ind > 1)
      jumpTwo = dp[ind - 2] + Math.abs(height[ind] - height[ind - 2]);
    dp[ind] = Math.min(jumpOne, jumpTwo);
  }
  return dp[n - 1];
}

// space optimization

function minCost2(height) {
  let n = height.length;
  let prev = 0;
  let prev2 = 0;

  for (let ind = 1; ind < n; ind++) {
    let jumpTwo = Infinity;
    let jumpOne = prev + Math.abs(height[ind] - height[ind - 1]);
    if (ind > 1) jumpTwo = prev2 + Math.abs(height[ind] - height[ind - 2]);
    let curr_ind = Math.min(jumpOne, jumpTwo);
    prev2 = prev;
    prev = curr_ind;
  }
  return prev;
}
