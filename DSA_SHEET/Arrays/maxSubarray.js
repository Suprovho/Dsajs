const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
//KANDE's ALGORITHM 
var maxSubArray = function (nums) {
  let max = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (max < sum) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;

  //     let max=Number.MIN_SAFE_INTEGER;
  //   for (let i = 0; i < nums.length; i++) {
  //     let ans = 0;
  //     for (let j = i; j < nums.length; j++) {
  //         ans += nums[j];
  //         max=Math.max(max,ans);
  //     }
  //   }
  //   return max;
};

const maxSum = maxSubArray(arr);
console.log("The maximum subarray sum is: " + maxSum);
