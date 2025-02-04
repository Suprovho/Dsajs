function rotate(arr, ind, list) {
  if (ind < 0) {
    return list;
  }
  list.push(arr[ind]);
  return rotate(arr, ind - 1, list);
}

const arr = [1, 4, 3, 2, 6, 5];
const list = [];
rotate(arr, arr.length - 1, list);

console.log(list);

// in place

function rotate2(arr, start, end) {
  if (start >= end) {
    return arr;
  }
  [arr[start], arr[end]] = [arr[end], arr[start]];
  return rotate2(arr, start + 1, end - 1);
}

const arr2 = [1, 4, 3, 2, 6, 5];
console.log(rotate2(arr2, 0, arr2.length - 1));
