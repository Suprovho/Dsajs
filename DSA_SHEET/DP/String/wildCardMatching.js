function isAllStars(S1, i) {
  for (let j = 0; j <= i; j++) {
    if (S1[j] !== "*") {
      return false;
    }
  }
  return true;
}

function wildcardMatchingUtil(S1, S2, i, j, dp) {
  if (i < 0 && j < 0) {
    return true;
  }
  if (i < 0 && j >= 0) {
    return false;
  }
  if (i >= 0 && j < 0) {
    return isAllStars(S1, i);
  }

  if (dp[i][j] !== -1) {
    return dp[i][j];
  }

    if (S1[i] === S2[j] || S1[i] === '?') {
        return dp[i][j] = wildcardMatchingUtil(S1, S2, i - 1, j - 1, dp);
    }else{
         if (S1[i] === '*') {
            return dp[i][j] = wildcardMatchingUtil(S1, S2, i - 1, j, dp) || wildcardMatchingUtil(S1, S2, i, j - 1, dp);
         }else{
            return false;
         }
    }
}



function isAllStars(S1, i) {
    // S1 is taken in 1-based indexing
    for (let j = 1; j <= i; j++) {
        if (S1[j - 1] !== '*') {
            return false;
        }
    }
    return true;
}


function wildcardMatching2(S1, S2) {
    const n = S1.length;
    const m = S2.length;

   
    const dp = new Array(n + 1).fill(null).map(() => new Array(m + 1).fill(false));

    dp[0][0] = true;

    for (let j = 1; j <= m; j++) {
        dp[0][j] = false;
    }

    for (let i = 1; i <= n; i++) {
        dp[i][0] = isAllStars(S1, i);
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (S1[i - 1] === S2[j - 1] || S1[i - 1] === '?') {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                if (S1[i - 1] === '*') {
                    dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
                } else {
                    dp[i][j] = false;
                }
            }
        }
    }

    return dp[n][m];
}





var isMatch = function (S1, S2) {
  const n = S1.length;
  const m = S2.length;

  const dp = new Array(n).fill(null).map(() => new Array(m).fill(-1));

  return wildcardMatchingUtil(S1, S2, n - 1, m - 1, dp);
};
