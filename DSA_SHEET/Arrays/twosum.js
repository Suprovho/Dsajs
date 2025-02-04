var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// two pointer approach

var twoSum = function (nums, target) {

  const indexedNums = nums.map((value, index) => ({ value:value, index:index }));

  indexedNums.sort((a, b) => a.value - b.value);

  let start = 0;
  let end = indexedNums.length - 1;

  while (start < end) {
    const sum = indexedNums[start].value + indexedNums[end].value;

    if (sum === target) {
      return [indexedNums[start].index,indexedNums[end].index];
    } else if (sum < target) {
      start++;
    } else {
      end--;
    }
  }

  return [-1, -1]; 
};
