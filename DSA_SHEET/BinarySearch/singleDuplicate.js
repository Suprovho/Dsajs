var singleNonDuplicate = function (arr) {
  let start = 0;
  let end = arr.length - 1;
  if (end == 0) {
    return nums[0];
  } else if (nums[0] != nums[1]) {
    return nums[0];
  } else if (nums[end] != nums[end - 1]) {
    return nums[end];
  }

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] !== arr[mid + 1] && arr[mid] !== arr[mid - 1]) {
      return nums[mid];
    }
    if (
      (mid % 2 == 0 && nums[mid] == nums[mid + 1]) ||
      (mid % 2 == 1 && nums[mid] == nums[mid - 1])
    ) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};
