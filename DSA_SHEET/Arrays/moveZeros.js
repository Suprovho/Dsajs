const nums = [0, 1, 0, 3, 12];
//brute
var check = function (nums) {
  let temp = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      temp.push(nums[i]);
    }
  }
  for (let j = 0; j < temp.length; j++) {
    nums[j] = temp[j];
  }
  for (let k = temp.length; k < nums.length; k++) {
    nums[k] = 0;
  }
  return nums;
};

console.log(check(nums));

//optimal

var check2 = function (nums) {
  let j=-1;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i]===0) {
        j=i;
        break;
      }
  }
  if (j === -1) return a;
  for (let i = j+1; i < nums.length; i++) {
    if (nums[i]!==0) {
     [nums[j],nums[i]]=[nums[i],nums[j]];
     j++;   
    } 
  }
  return nums;
};
// tc-O(M)+O(n-m)=O(n);
console.log(check2(nums));