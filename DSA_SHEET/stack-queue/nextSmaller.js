// same just start from first anf change in while cond.

var nextSmallerElements = function (nums) {
  let stack = [];
  let n = nums.length;
  let ans = [];
  for (let i = 0; i < n; i++) {
    while (!stack.length == 0 && stack[stack.length - 1] >= nums[i]) {
      stack.pop();
    }

    if (!stack.length == 0) ans[i] = stack[stack.length - 1];
    else ans[i] = -1;

    stack.push(nums[i]);
  }

  return ans;
};
