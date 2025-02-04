var smallestDivisor = function (nums, threshold) {
  let start = 1;
  let end = findMax(nums);
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (TotalSum(nums, mid) <= threshold) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return start;
};

function TotalSum(nums, divisor) {
  let TotalSum = 0;
  for (let i = 0; i < nums.length; i++) {
    TotalSum += Math.ceil(nums[i] / divisor);
  }
  return TotalSum;
}

function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(arr[i], max);
  }
  return max;
}
