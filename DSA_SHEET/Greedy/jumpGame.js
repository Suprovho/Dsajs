var canJump = function (nums) {
  let maxIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxIndex) {
      return false;
    }
    maxIndex = Math.max(maxIndex, i + nums[i]);
  }
  return true;
};

// if we can cross 0 then its true every time
