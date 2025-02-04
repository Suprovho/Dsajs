var rearrangeArray = function (nums) {
  let n = nums.length;
  let ans = new Array(n).fill(0);
  let posIndex = 0,
    negIndex = 1;
  for (let i = 0; i < n; i++) {
    if (nums[i] < 0) {
      ans[negIndex] = nums[i];
      negIndex += 2;
    } else {
      ans[posIndex] = nums[i];
      posIndex += 2;
    }
  }
  return ans;

  //*BRUTE_>
  //   let pos = [];
  //   let neg = [];
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] < 0) {
  //       neg.push(nums[i]);
  //     } else {
  //       pos.push(nums[i]);
  //     }
  //   }
  //   for (let i = 0; i < nums.length / 2; i++) {
  //     nums[2 * i] = pos[i];  // even
  //     nums[2 * i + 1] = neg[i];  //odd
  //   }
  //   return nums;
};
