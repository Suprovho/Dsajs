var missingNumber = function (nums) {
  let n=nums.length;
  const summation = (n * (n + 1)) / 2;
  let sum=0;
  for (let i = 0; i < n; i++) {
     sum+=nums[i];
  }
  return summation-sum;
};
