function linear(arr, index, target) {
  if (index == arr.length - 1) {
    return false;
  }
  return arr[index] == target || linear(arr, index + 1, target);
}

function linear2(arr, index, target) {
  if (index > arr.length) {
    return -1;
  }
  if (arr[index] === target) {
    return index;
  } else {
    return linear2(arr, index + 1, target);
  }
}

const arr = [1, 2, 3, 4, 5];
console.log(linear(arr, 0, 7));
console.log(linear2(arr, 0, 3));
