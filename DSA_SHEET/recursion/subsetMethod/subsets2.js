function subset2(arr, ind, list, ans) {
  ans.push(list); //* NOTE: like this because loop is control.. the base case for this. unique observation. 
  for (let i = ind; i < arr.length; i++) {
    if (i !== ind && arr[i] === arr[i - 1]) continue;
    subset2(arr, i + 1, [...list, arr[i]], ans);
  }
}

let nums = [1, 2, 2];
nums.sort((a, b) => a - b);
let ansList = [];
subset2(nums, 0, [], ansList);
console.log(ansList);
