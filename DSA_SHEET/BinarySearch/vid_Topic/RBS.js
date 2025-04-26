const arr = [4, 5, 6, 7, 0, 1, 2];
const target = 0;

function Search(nums, target) {
  let pivot = findPivot(nums);
  if (pivot == -1) {
    // just do normal binary search
    return binarySearch(nums, target, 0, nums.length - 1);
  }
  // if pivot is found, you have found 2 asc sorted arrays
  if (nums[pivot] == target) {
    return pivot;
  }

  if (target >= nums[0]) {
    return Binary_Search(nums, target, 0, pivot - 1);
  }

  return Binary_Search(nums, target, pivot + 1, nums.length - 1);
}

function Binary_Search(arr, target, start, end) {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

function findPivot(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (mid < end && arr[mid] > arr[mid + 1]) {
      return mid;
    }
    if (mid > start && arr[mid] < arr[mid - 1]) {
      return mid - 1;
    }
    if (arr[mid] <= arr[start]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

console.log(Search(arr, target));
