function matrixMultiplication(arr) {
  const n = arr.length;
  const dp = Array.from({ length: n }, () => Array(n).fill(-1));

  function f(i, j) {
    if (i === j) return 0;

    if (dp[i][j] !== -1) return dp[i][j];

    let mini = Number.MAX_SAFE_INTEGER;

    // partitioning loop
    for (let k = i; k <= j - 1; k++) {
      const ans = f(i, k) + f(k + 1, j) + arr[i - 1] * arr[k] * arr[j];
      mini = Math.min(mini, ans);
    }

    dp[i][j] = mini;
    return mini;
  }

  return f(1, n - 1);
}

// Example usage
const arr = [10, 20, 30, 40, 50];
console.log(
  "The minimum number of operations are " + matrixMultiplication(arr)
);
