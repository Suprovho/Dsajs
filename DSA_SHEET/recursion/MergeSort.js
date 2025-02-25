//* merge sort using recursion basically divide and merge for an unsorted array its diff from prev as there were 2 sorted array we have to merge.

//* tc-O(Nlogn) sc-O(n)

function mergeSort(arr, low, high) {
  if (low >= high) {
    return;
  }
  let mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid); // left half
  mergeSort(arr, mid + 1, high); // right half
  merge(arr, low, mid, high); // merging sorted halves
}

function merge(arr, low, mid, high) {
  let temp = [];
  let left = low;
  let right = mid + 1;

  while (left <= mid && right <= high) {
    if (arr[left] < arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }
  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }

  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  let count = 0; // for correct indexing.
  for (let i = low; i <= high; i++) {
    arr[i] = temp[count++];
  }
}

let arr=[9, 4, 7, 6, 3, 1, 5];
mergeSort(arr,0,arr.length-1)
console.log(arr);
