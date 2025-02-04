var findKthPositive = function (arr, k) {
  // brute

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= k) {
      k++;
    } else {
      break;
    }
    return k;
  }
};
