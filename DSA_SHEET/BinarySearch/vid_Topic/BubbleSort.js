const arr = [5, 2, 1, 4, 7, 9, 10, 6];

function BubbleSort(arr) {
  let swapped = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length-i; j++) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
}

console.log(BubbleSort(arr));
