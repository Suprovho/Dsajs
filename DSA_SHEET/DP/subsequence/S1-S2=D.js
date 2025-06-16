// same prblm as count subset but with diff target

const mod = 1e9 + 7;
function helper(ind, arr, target, dp) {
  if (ind === 0) {
    if (target === 0 && arr[0] === 0) return 2;
    if (target === 0 || target === arr[0]) return 1;
    return 0;
  }

  if (dp[ind][target] !== -1) return dp[ind][target];

  let notTake = helper(ind - 1, arr, target, dp);
  let take = 0;
  if (arr[ind] <= target) {
    take = helper(ind - 1, arr, target - arr[ind], dp);
  }
  return (dp[ind][target] = (take + notTake) % mod);
}

function countPartitions(d, arr) {
  const n = arr.length;
  let totSum = arr.reduce((a, b) => a + b, 0);

  // Edge case checks
  if (totSum - d < 0) return 0;
  if ((totSum - d) % 2 === 1) return 0;

  const s2 = (totSum - d) / 2;
  const dp = Array.from({ length: n }, () => Array(s2 + 1).fill(-1));
  return helper(n-1, arr, s2, dp);
}

// You look for subsets with sum = sum2

// The other subset will automatically have the required sum1 and satisfy the condition
