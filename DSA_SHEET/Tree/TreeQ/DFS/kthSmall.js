let count = 0;
var kthSmallest = function (root, k) {
  count = 0;
  return helper(root, k).val;
};

// inOrder

function helper(root, k) {
  if (root == null) {
    return null;
  }

  let left = helper(root.left, k);

  if (left != null) {
    return left;
  }

  count++;

  if (count == k) {
    return root;
  }

  return helper(root.right, k);
}
