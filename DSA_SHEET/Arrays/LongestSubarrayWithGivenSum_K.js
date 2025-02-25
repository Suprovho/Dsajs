let a = [2, 3, 5, 1, 9];
let k = 10;
let len = getLongestSubarray2(a, k);
console.log("The length of the longest subarray is:", len);

function getLongestSubarray(a, k) {
  let n = a.length;
  let maxLen = 0;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += a[j];
      if (sum === k) {
        maxLen = Math.max(maxLen, j - i + 1);
      }
    }
  }
  return maxLen;
}

//* Optimal tc-O(2n)  sliding window.
// use sliding window for these type of questions where there is a over lap of a elements such as subarray these questions.

function getLongestSubarray2(a, k) {
  let n = a.length;
  let left = 0,
    right = 0; // 2 pointers
  let sum = a[0];
  let maxLen = 0;
  while (right < n) {
     // if sum > k, reduce the subarray from left
    // until sum becomes less or equal to k
    while (left <= right && sum > k) {
      sum -= a[left];
      left++;
    }
    // if sum = k, update the maxLen i.e. answer
    if (sum === k) {
      maxLen = Math.max(maxLen, right - left + 1);
    }
    // Move forward the right pointer
    right++;
    if (right < n) sum += a[right];
  }
  return maxLen;
}
