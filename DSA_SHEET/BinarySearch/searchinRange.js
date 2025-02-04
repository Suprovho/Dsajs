var searchRange = function (nums, target) {
  let firstIndex = BinarySearch(nums, target, true);
  let secondIndex = BinarySearch(nums, target, false);
  return [firstIndex, secondIndex];
};

function BinarySearch(arr, target, firstIndex) {
  let start = 0;
  let end = arr.length - 1;
  let ans = -1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] < target) {
      start = mid + 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      ans = mid;
      if (firstIndex) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return ans;
}
