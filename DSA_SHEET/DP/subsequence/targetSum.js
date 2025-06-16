// same as s1-s2=D problem just question framing is changed to confuse

var findTargetSumWays = function (nums, target) {
  return countPartitions(target, nums);
};

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
  return (dp[ind][target] = take + notTake);
}

function countPartitions(d, arr) {
  const n = arr.length;
  let totSum = arr.reduce((a, b) => a + b, 0);

  // Edge case checks
  if (totSum - d < 0) return 0;
  if ((totSum - d) % 2 === 1) return 0;

  const s2 = (totSum - d) / 2;
  const dp = Array.from({ length: n }, () => Array(s2 + 1).fill(-1));
  return helper(n - 1, arr, s2, dp);
}

function main() {
  const arr = [1, 2, 3, 1];
  const target = 3;
  const n = arr.length;

  console.log("The number of ways found is " + findTargetSumWays(arr, target));
}

main();
