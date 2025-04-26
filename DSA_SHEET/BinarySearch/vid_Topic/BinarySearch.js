const arr = [1, 4, 5, 8, 10, 23, 25, 30];
const target = 30;
let start = 0;
let end = arr.length - 1;

export function Binary_Search(arr, target,start,end) {
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

console.log(Binary_Search(arr, target,start,end));

export const OrderAgonisticBs = (arr, target, start, end) => {
  let isAsc = arr[start] < arr[end];

  while (start <= end) {
    let mid = start + (end - start) / 2;

    if (arr[mid] == target) {
      return mid;
    }

    if (isAsc) {
      if (target < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (target > arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return -1;
};
