function knapsackUtil(wt, val, ind, W, dp) {
  if (ind === 0) {
    if (wt[0] <= W) return val[0];
    else return 0;
  }
  if (dp[ind][W] !== -1) return dp[ind][W];

  let taken = -Infinity;
  let notTake = knapsackUtil(wt, val, ind - 1, W, dp);
  if (wt[ind] <= W) {
    taken = val[ind] + knapsackUtil(wt, val, ind - 1, W - wt[ind], dp);
  }
  return (dp[ind][W] = Math.max(taken, notTake));
}

function knapsack(wt, val, n, W) {
  let dp = Array.from({ length: n }, () => Array(W + 1).fill(-1));
  return knapsackUtil(wt, val, n - 1, W, dp);
}

// tabulation

function knapsack2(wt, val, n, W) {
  let dp = Array.from({ length: n }, () => Array(W + 1).fill(0));

  for (let i = wt[0]; i <= W; i++) {
    dp[0][i] = val[0];
  }

  for (let ind = 1; ind < n; ind++) {
    for (let cap = 0; cap <= W; cap++) {
      const notTaken = dp[ind - 1][cap];

      let taken = -Infinity;
      if (wt[ind] <= cap) {
        taken = val[ind] + dp[ind - 1][cap - wt[ind]];
      }

      dp[ind][cap] = Math.max(notTaken, taken);
    }
  }

  return dp[n - 1][W];
}

function main() {
  const wt = [1, 2, 4, 5];
  const val = [5, 4, 8, 6];
  const W = 5;
  const n = wt.length;

  console.log(
    "The Maximum value of items the thief can steal is: " +
      knapsack(wt, val, n, W)
  );
  console.log(
    "The Maximum value of items the thief can steal is: " +
      knapsack2(wt, val, n, W)
  );
}

main();
