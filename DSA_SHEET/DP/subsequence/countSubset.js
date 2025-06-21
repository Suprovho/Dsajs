function findWays(num, k) {
  let n = num.length;
  let dp = Array.from({ length: n }, () => Array(k + 1).fill(-1));
  return helper(n - 1, num, k, dp);
}

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

// tabulation

function findWays2(num, k) {
  let n = num.length;
  let dp = Array.from({ length: n }, () => Array(k + 1).fill(0));

  for (let i = 0; i < n; i++) {
    dp[i][0] = 1;
  }

  if (num[0] <= k) {
    dp[0][num[0]] = 1;
  }

  for (let ind = 1; ind < n; ind++) {
    for (let target = 1; target <= k; target++) {
      let notTake = dp[ind - 1][target];
      let take = 0;
      if (num[ind] <= target) {
        take = dp[ind - 1][target - num[ind]];
      }
      dp[ind][target] = take + notTake;
    }
  }
  return dp[n - 1][k];
}

function main() {
  const arr = [1, 2, 2, 3];
  const k = 3;

  console.log("The number of subsets found are: " + findWays(arr, k));
  console.log("The number of subsets found are: " + findWays2(arr, k));
}

main();
