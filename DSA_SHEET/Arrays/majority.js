var majorityElement = function (nums) {
  let n = nums.length;
  let count = 0;
  let target = Math.floor(n / 2);
  if (nums.length == 1) {
    return nums[0];
  }
  // Brute Force.
  for (let i = 0; i < nums.length; i++) {
    count = 0;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
      if (count === target) {
        return nums[i];
      }
    }
  }
  return -1; // tc- O(N2) or n square
};

// we can optimize it using map

var majorityElement = function (nums) {
  let n = nums.length;
  const map = new Map();
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }
  for (const [num, count] of map) {
    if (count > Math.floor(n / 2)) {
      return num;
    }
  }
  return -1;
};

// optimal approach mooyrs voting algo.
//* increase the count till same ele and decrease on diff if it become zero reset cnt to 1 and add ele thats next;

var majorityElement = function (nums) {
  let n = nums.length;
  let cnt = 0;
  let el;
  for (let i = 0; i < n; i++) {
    if (cnt === 0) {
      cnt = 1;
      el = nums[i];
    }
    if (el === nums[i]) {
      cnt++;
    } else {
      cnt--;
    }
  }
    // checking if the majority 

  let cnt1 = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] === el) {
      cnt1++;
    }
  }

  if (cnt1 > Math.floor(n / 2)) {
    return el;
  }
  return -1;
};
