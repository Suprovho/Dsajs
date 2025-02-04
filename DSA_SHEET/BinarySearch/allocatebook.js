function findPages(arr, n, m) {
  // Write your code here.

  // almost same like ship within days prblm.

  if (m > n) return -1;

  let start = Math.max(...arr);
  let end = sum(arr);
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (allocate(arr, mid, m)) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return start;
}

function sum(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(arr[i], max);
  }
  return max;
}

function allocate(arr, mid, m) {
  let count = 1;
  let page = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + page > mid) {
      count++;
      page = arr[i];
    } else {
      page += arr[i];
    }
  }
  return count <= m;
}
