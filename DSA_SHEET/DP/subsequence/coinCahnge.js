// unbound knapsack logic - coin change 1,2, rod-cutting.

var coinChange = function (coins, amount) {
  let n = coins.length;
  let dp = Array.from({ length: n }, () => Array(amount + 1).fill(-1));
  return helper(n - 1, amount, dp, coins);
};

function helper(ind, amount, dp, arr) {
  if (ind == 0) {
    if (amount % arr[0] == 0) {
      return amount / arr[0];
    } else {
      return Infinity;
    }
  }
  if (dp[ind][amount] !== -1) {
    return dp[ind][amount];
  }
  let notTake = 0 + helper(ind - 1, amount, dp, arr);
  let take = Infinity;
  if (arr[ind] <= amount) {
    take = 1 + helper(ind, amount - arr[ind], dp, arr);
  }
  return (dp[ind][amount] = Math.min(take, notTake));
}

// tabulation + spc optimization

var coinChange = function (coins, amount) {
  let n = coins.length;
  let T = amount;

  let prev = Array(T + 1).fill(0);
  let curr = Array(T + 1).fill(0);

  for (let i = 0; i <= T; i++) {
    if (i % coins[0] == 0) {
      prev[i] = i / coins[0];
    } else {
      prev[i] = Infinity;
    }
  }

  for (let ind = 1; ind < n; ind++) {
    for (let amount = 1; amount <= T; amount++) {
      let notTake = 0 + prev[amount];
      let take = Infinity;
      if (arr[ind] <= amount) {
        take = 1 + curr[amount - arr[ind]];
      }
      curr[amount] = Math.min(take, notTake);
    }
    prev = [...curr]; // for next itr
  }
  let ans = prev[T];
  return ans !== Infinity ? ans : -1;
};
