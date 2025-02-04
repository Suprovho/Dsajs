//optimal ->
// Brute in copy

var nextPermutation = function (nums) {
  let n = nums.length;
  // Step 1: Find the break point:
  let ind = -1; // break point
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      // index i is the break point
      ind = i;
      break;
    }
  }
  if (ind == -1) {
    nums.reverse();
    return nums;
  }
  // Step 2: Find the next greater element
  //         and swap it with A[ind]:

  for (let i = n - 2; i >ind; i--) {
    if (nums[i] > nums[ind]) {
      [nums[i], nums[ind]] = [nums[ind], nums[i]];
      break;
    }
  }
  // Step 3: reverse the right half:

  nums.splice(ind + 1, n - ind - 1, ...nums.slice(ind + 1).reverse());

  return nums;
};


