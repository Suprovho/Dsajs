var nextGreaterElement = function (nums1, nums2) {
  let map = new Map();
  let stack = [];
  let n = nums2.length;
  for (let i = n - 1; i >= 0; i--) {
    while (!stack.length == 0 && stack[stack.length - 1] <= nums2[i]) {
      stack.pop();
    }
    if (!stack.length == 0) map.set(nums2[i], stack[stack.length - 1]);
    
    // else map.set(nums2[i], -1);  u can ignore it as case is handled in next loop

    stack.push(nums2[i]);
  }
  // add stack ele to nums1 only no extra space required.
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    result.push(map.has(nums1[i]) ? map.get(nums1[i]) : -1);
  }

  return result;
};

// ! same question second part if circular

var nextGreaterElements = function (nums) {
  let stack = [];
  let n = nums.length;
  let ans=[];
  for (let i = 2 * n - 1; i >= 0; i--) {
    while (!stack.length == 0 && stack[stack.length - 1] <= nums[i % n]) {
      stack.pop();
    }

    if (i < n) {
      if (!stack.length == 0) ans[i] = stack[stack.length - 1];
      else ans[i] = -1;
    }

    stack.push(nums[i % n]);
  }

  return ans;
};
