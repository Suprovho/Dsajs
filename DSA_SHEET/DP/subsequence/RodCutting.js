function cutRod(price, n) {
  let dp = Array.from({ length: n }, () => Array(n + 1).fill(-1));
  return helper(n - 1, n, price, dp);
}

function helper(ind, N, price, dp) {
  if (ind == 0) {
    return price[0] * N; // at ind 0 i.e 1 length  rod so n/1 ,i.e it requires nth 1 rod so price=price[0]*N  .
  }
  if (dp[ind][N] !== -1) return dp[ind][N];
  let notTake = 0 + helper(ind - 1, N, price, dp);
  let take = -Infinity;
  let rodLength = ind + 1; // 1 based mentioned
  if (rodLength <= N) {
    take = price[ind] + helper(ind, N - rodLength, price, dp);
  }
  return (dp[ind][N] = Math.max(take, notTake));
}

// tabulation & space optimize

function cutRod(price, n) {
  let prev = Array(n + 1).fill(0);
  let curr = Array(n + 1).fill(0);

  for (let N = 0; N <= n; N++) {
    prev[N] = N * price[0];
  }

  for (let ind = 1; ind < n; ind++) {
    for (let N = 0; N <= n; N++) {
      let notTake = 0 + prev[N];
      let take = -Infinity;
      let rodLength = ind + 1; // 1 based mentioned
      if (rodLength <= N) {
        take = price[ind] + curr[N - rodLength];
      }
      curr[N] = Math.max(take, notTake);
    }
    prev = [...curr];
  }
  return prev[n];
}
