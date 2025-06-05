// memoization ->

// storing in an array

function fibo(n, dp) {
  if (n <= 1) {
    return n;
  }
  if (!dp[n] == -1) return dp[n]; //* memo
  return (dp[n] = fibo(n - 1, dp) + fibo(n - 2, dp));
}

let n = 5;
let dp = Array(n + 1).fill(-1);
console.log(fibo(n, dp));

// TC-O(N) SC-O(N)

// tabulation

let n2 = 5;
let dp2 = Array(n2 + 1).fill(-1);
console.log(fibo(n2, dp2));
dp[0] = 0;
dp[1] = 1;

for (let i = 2; i <= n2; i++) {
  dp2[i] = dp2[i - 1] + dp2[i - 2];
}

// space optimization

let prev2 = 0;
let prev = 1;

for (let i = 2; i <= n; i++) {
  let cur_i = prev2 + prev;
  prev2 = prev;
  prev = cur_i;
}
console.log(prev);


