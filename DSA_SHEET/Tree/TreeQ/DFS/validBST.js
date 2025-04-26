// pre order

var isValidBST = function (root) {
  return helper(root, null, null);
};

const helper = (node, low, high) => {
  if (node == null) {
    return true;
  }
  if (low != null && node.val <= low) {
    return false;
  }
  if (high != null && node.val >= high) {
    return false;
  }

  let left = helper(node.left, low, node.val);
  let right = helper(node.right, node.val, high);

  return left && right;
};
