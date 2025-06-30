var lengthOfLIS = function (nums) {
  const n = nums.length;

  const dp = new Array(n).fill().map(() => new Array(n + 1).fill(-1));

  return getAns(nums, n, 0, -1, dp);
};

function getAns(arr, n, ind, prevIndex, dp) {
  if (ind == n) {
    return 0;
  }
  if (dp[ind][prevIndex + 1] !== -1) return dp[ind][prevIndex + 1];

  let notTake = 0 + getAns(arr, n, ind + 1, prevIndex, dp);
  let take = 0;
  if (prevIndex === -1 || arr[ind] > arr[prevIndex]) {
    take = 1 + getAns(arr, n, ind + 1, ind, dp);
  }
  return (dp[ind][prevIndex + 1] = Math.max(notTake, take));
}

// tabulation

var lengthOfLIS = function (nums) {
  const n = nums.length;

  const dp = new Array(n + 1).fill().map(() => new Array(n + 1).fill(-1));

  for (let ind = n - 1; ind >= 0; ind--) {
    for (let prev_index = ind - 1; prev_index >= -1; prev_index--) {
      let notTake = 0 + dp[ind + 1][prev_index + 1];

      let take = 0;

      if (prev_index == -1 || nums[ind] > nums[prev_index]) {
        take = 1 + dp[ind + 1][ind + 1];
      }

      dp[ind][prev_index + 1] = Math.max(notTake, take);
    }
  }

  return dp[0][0];
};
