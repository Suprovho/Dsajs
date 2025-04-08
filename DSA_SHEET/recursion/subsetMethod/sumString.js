function sum(arr, target, list, curr) {
  if (arr.length == 0) {
    if (curr == target) {
      list.push(curr);
    }
    return;
  }
  let ele = arr[0];
  sum(arr.slice(1), target, list, curr + ele);
  sum(arr.slice(1), target, list, curr);
}
let list = [];
sum(arr, target, list, 0);
console.log(list.length);
 
