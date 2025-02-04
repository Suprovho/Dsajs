var shipWithinDays = function (weights, days) {
  let start = Number.MIN_SAFE_INTEGER;
  let end = 0;
  for (let i = 0; i < weights.length; i++) {
    end += weights[i];
    start = Math.max(start, weights[i]);
  }

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (checkWeight(weights, mid) <= days) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return start;
};

function checkWeight(arr, weights) {
  let totalDays = 1;
  let totalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (totalSum + arr[i] > weights) {
      totalDays++;
      totalSum = arr[i];
    } else {
      totalSum += arr[i];
    }
  }
  return totalDays;
}
