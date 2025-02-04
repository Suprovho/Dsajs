let value = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// brute
var removeDuplicates = function (nums) {
  let temp = new Set(nums);
  let uniqueArr = Array.from(temp);
  for (let i = 0; i < uniqueArr.length; i++) {
    nums[i] = uniqueArr[i];
  }

  return uniqueArr.length;
};

console.log(removeDuplicates(value));

// optimal - two pointer

var removeDuplicates2 = function (nums) {
  let i = 0;
  for (let j = 1; j < array.length; j++) {
    if (nums[i] != nums[j]) {
      nums[i+1]=nums[j];
      i++;
    }
  }
  return i+1;
};
