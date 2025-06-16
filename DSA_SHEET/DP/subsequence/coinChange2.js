// similar just little changes to part 1

// in prev we were only taking min combination from take and not take so the base case and relation was diff

var change = function (arr, T) {
  let n = arr.length;
  const dp = Array.from({ length: n }, () => Array(T + 1).fill(-1));
  return countWaysToMakeChangeUtil(arr, n - 1, T, dp);
};

function countWaysToMakeChangeUtil(arr, ind, T, dp) {
  if (ind == 0) {
    return T % arr[ind] == 0 ? 1 : 0;
  }
  if (dp[ind][T] !== -1) {
    return dp[ind][T];
  }
  let notTake = countWaysToMakeChangeUtil(arr, ind - 1, T, dp);
  let take = 0;
  if (arr[ind] <= T) {
    take = countWaysToMakeChangeUtil(arr, ind, T - arr[ind], dp);
  }
  return (dp[ind][amount] = take + notTake);
}

// tabulation + spc optimization

var change2 = function (arr, T) {
  let n = arr.length;
  let prev = Array(T + 1).fill(0);
  for (let i = 0; i <= T; i++) {
    if (i % arr[0] === 0) {
      prev[i] = 1;
    }
  }
  for (let ind = 1; ind < n; ind++) {
     let cur = Array(T + 1).fill(0); // another way
    for (let target = 0; target <= T; target++) {
      const notTaken = prev[target];
      let taken = 0;
      if (arr[ind] <= target) taken = cur[target - arr[ind]];
      cur[target] = notTaken + taken;
    }
    prev = cur;
  }
  return prev[T];
};

function main() {
    const arr = [1, 2, 5];
    const target = 5;
    const n = arr.length;

    console.log("The total number of ways is " + change2(arr,target)); // 4
}


main();