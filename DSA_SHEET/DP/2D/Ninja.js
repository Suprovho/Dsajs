function ninjaTraining(n, points) {
  let dp = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = Array(4).fill(-1);
  }
  return f(n - 1, 3, dp, points);
}

function f(day, last, dp, points) {
  if (dp[day][last] !== -1) return dp[day][last];

  if (day == 0) {
    let maxi = 0;
    for (let i = 0; i <= 2; i++) {
      if (i !== last) {
        maxi = Math.max(maxi, points[0][i]);
      }
    }
    return (dp[day][last] = maxi);
  }

  let maxi = 0;
  for (let i = 0; i <= 2; i++) {
    if (i !== last) {
      let activity = points[day][i] + f(day - 1, i, dp, points);
      maxi = Math.max(maxi, activity);
    }
  }
  return (dp[day][last] = maxi);
}

// tabulation

function ninjaTraining2(n, points) {
  let dp = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(4).fill(0);
  }

  // Initialize the base cases for the first day
  dp[0][0] = Math.max(points[0][1], points[0][2]);
  dp[0][1] = Math.max(points[0][0], points[0][2]);
  dp[0][2] = Math.max(points[0][1], points[0][0]);
  dp[0][3] = Math.max(points[0][0], Math.max(points[0][2], points[0][1]));

  for (let day = 1; day < n; day++) {
    for (let next = 0; next < 4; next++) {
      dp[day][next] = 0;
      for (let task = 0; task <= 2; task++) {
        if (task !== next) {
          let activity = points[day][task] + dp[day - 1][task];
          dp[day][next] = Math.max(dp[day][next], activity);
        }
      }
    }
  }
  return dp[n - 1][3];
}

let points = [
  [10, 40, 70],
  [20, 50, 80],
  [30, 60, 90],
];

let n = points.length;

console.log(ninjaTraining(n, points));
console.log(ninjaTraining2(n, points));
