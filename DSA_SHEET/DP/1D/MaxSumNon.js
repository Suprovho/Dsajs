
// same q as house rob

function maximumNonAdjacentSum(nums, n, dp) {
  return helper(0, nums, dp);
}

function helper(ind, nums, dp) {
  if (ind >= nums.length) {
    return 0;
  }
  if (dp[ind] !== -1) return dp[ind];
  const pick = nums[ind] + helper(ind + 2, nums, dp);
  const notPick = helper(ind + 1, nums, dp);

  return (dp[ind] = Math.max(pick, notPick));
}

function tabulation(nums, dp, n) {
  dp[0] = nums[0];
  for (let i = 1; i < n; i++) {
    let pick = nums[i];
    if (i > 1) {
      pick += dp[i - 2];
    }
    let notPick = dp[i - 1];
    dp[i] = Math.max(pick, notPick);
  }
  return dp[n - 1];
}

function spaceOpt(nums, n) {
  let prev = nums[0];
  let prev2 = 0;

  for (let i = 1; i < n; i++) {
    let pick = nums[i];
    if (i > 1) {
      pick += prev2;
    }
    let notPick = prev;
    const curr_i = Math.max(pick, notPick);
    prev2 = prev;
    prev = curr_i;
  }
  return prev;
}

function main() {
  const arr = [2, 1, 4, 9];
  const n = arr.length;
  const dp = new Array(n).fill(-1);
  console.log(maximumNonAdjacentSum(arr, n, dp));
  console.log(tabulation(arr, dp, n));
  console.log(spaceOpt(arr, n));
}

main();
