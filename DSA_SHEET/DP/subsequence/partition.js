var canPartition = function (nums) {
  let totalSum = 0;
  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i];
  }
  if (totalSum % 2 === 1) return false;
  else {
    const k = totalSum / 2;
    const dp = Array.from({ length: nums.length }, () => Array(k + 1).fill(-1));
    return helper(nums.length - 1, k, nums, dp);
  }
};

function helper(ind, target, arr, dp) {
  if (target == 0) {
    return true;
  }
  if (ind < 0) {
    return false;
  }
  if (dp[ind][target] !== -1) return dp[ind][target] == 0 ? false : true;

  let notTake = helper(ind - 1, target, arr, dp);
  let taken = false;
  if (arr[ind] <= target) {
    taken = helper(ind - 1, target - arr[ind], arr, dp);
  }
  dp[ind][target] = notTake || taken ? 1 : 0;
  return taken || notTake;
}
