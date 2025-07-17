function eggDrop(e, f) {
  let dp = Array.from({ length: e + 1 }, () => Array(f + 1).fill(-1));
  return helper(e, f, dp);
}

function helper(e, f, dp) {
  if (f == 0 || f == 1) {
    return f;
  }
  if (e == 1) {
    return f;
  }

  if (dp[e][f] !== -1) return dp[e][f];

  let min = Number.MAX_SAFE_INTEGER;
  for (let k = 1; k <= f; k++) {
    let temp = 1 + Math.max(helper(e - 1, k - 1, dp), helper(e, f - k, dp));
    min = Math.min(min, temp);
  }
  return (dp[e][f] = min);
}
