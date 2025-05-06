var sumNumbers = function (root) {
  return helper(root, 0);
};

function helper(node, sum) {
  if (node == null) {
    return 0;
  }
  sum = sum * 10 + node.val;
  let left = helper(node.left, sum);
  let right = helper(node.right, sum);

  if (node.left == null && node.right == null) return sum;

  return left + right;
}
