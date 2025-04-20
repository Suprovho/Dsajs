// read note.
var sortedArrayToBST = function (nums) {
  return populateSorted(nums, 0, nums.length);
};

function populateSorted(values, start, end) {
  if (start >= end) return null;

  const mid = Math.floor((start + end) / 2);
  var root = new TreeNode(values[mid]);

  root.left = populateSorted(values, start, mid);
  root.right = populateSorted(values, mid + 1, end);

  return root;
}
