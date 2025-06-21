function unboundedKnapsack(n, W, val, wt) {
  const dp = Array.from({ length: n }, () => Array(W + 1).fill(-1));

  function knapsackUtil(ind, W) {
    if (ind === 0) {
      // Calculate the maximum value for this item
      return Math.floor(W / wt[0]) * val[0];
    }

    if (dp[ind][W] !== -1) return dp[ind][W];

    let notTaken = 0 + knapsackUtil(ind - 1, W);

    let taken = -Infinity;
    if (wt[ind] <= W) taken = val[ind] + knapsackUtil(ind, W - wt[ind]);

    return (dp[ind][W] = Math.max(notTaken, taken));
  }

  return knapsackUtil(n - 1, W);
}

// tabulation
function unboundedKnapsack2(n, W, val, wt) {
  const dp = Array.from({ length: n }, () => Array(W + 1).fill(0));

  for (let i = wt[0]; i <= W; i++) {
    dp[0][i] = Math.floor(i / wt[0]) * val[0];
  }

  for (let ind = 1; ind < n; ind++) {
    for (let cap = 0; cap <= W; cap++) {
      const notTaken = dp[ind - 1][cap];

      let taken = -Infinity;
      if (wt[ind] <= cap) taken = val[ind] + dp[ind][cap - wt[ind]];

      dp[ind][cap] = Math.max(notTaken, taken);
    }
  }

  return dp[n - 1][W];
}

function main() {
  const wt = [2, 4, 6];
  const val = [5, 11, 13];
  const W = 10;
  const n = wt.length;

  console.log(
    "The Maximum value of items the thief can steal is " +
      unboundedKnapsack(n, W, val, wt)
  );
}

main();
