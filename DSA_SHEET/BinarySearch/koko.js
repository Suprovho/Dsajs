var minEatingSpeed = function (piles, h) {
  let max = findMax(piles);
  let start = 1;
  let end = max;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (TotalHours(piles, mid) <= h) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return start;
};

function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(arr[i], max);
  }
  return max;
}

function TotalHours(arr, k) {
  let totalh = 0;
  for (let i = 0; i < arr.length; i++) {
    totalh += Math.ceil(arr[i] / k);
  }
  return totalh;
}
