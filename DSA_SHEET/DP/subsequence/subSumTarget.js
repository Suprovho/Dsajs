// we can use ind +1 also in memo 

function subsetSumToK(n, k, arr) {
  const dp = Array.from({ length: n }, () => Array(k + 1).fill(-1)); // total subset possible O(n*k)

  return helper(n - 1, k, arr, dp);
}

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

const arr = [1, 2, 3, 4];
const k = 5;
const n = arr.length;

console.log(subsetSumToK(n, k, arr));

// tabulation

function subsetSumToK(n, k, arr) {
  const dp = Array.from({ length: n }, () => Array(k + 1).fill(false));

  // Base case: If the target is 0
  
  for (let i = 0; i < n; i++) {
    dp[i][0] = true;
  }

  for (let ind = 1; ind < n; ind++) {
    for (let target = 1; target <= k; target++) {
      const notTaken = dp[ind - 1][target];
      const taken = arr[ind] <= target ? dp[ind - 1][target - arr[ind]] : false;
      dp[ind][target] = notTaken || taken;
    }
  }
  return dp[n - 1][k];
}
