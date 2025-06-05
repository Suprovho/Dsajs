var rob = function (nums) {
  let n = nums.length;
  let temp1 = [],
    temp2 = [];
  if (n == 1) return nums[0];
  for (let i = 0; i < n; i++) {
    if (i != 0) temp1.push(nums[i]);
    if (i != n - 1) temp2.push(nums[i]);
  }
  return Math.max(spaceOpt(temp1),spaceOpt(temp2));
};

function spaceOpt(nums, n) {
  let prev = nums[0];
  let prev2 = 0;

  for (let i = 1; i < nums.length; i++) {
    let pick = nums[i];
    if (i > 1) {
      pick += prev2;
    }
    let notPick = prev;
    const curr_i = Math.max(pick, notPick);
    prev2 = prev;
    prev = curr_i;
  }
  return prev;
}
