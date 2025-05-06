let ans;
var maxPathSum = function (root) {
  ans = Number.MIN_SAFE_INTEGER;
  helper(root);
  return ans;
};

function helper(node) {
  if (node == null) {
    return 0;
  }

  let left = helper(node.left);
  let right = helper(node.right);

  left = Math.max(0, left); // ignore -ve make 0
  right = Math.max(0, right);

  let pathSum = left + right + node.val;

  ans = Math.max(ans, pathSum);

  return Math.max(left, right) + node.val;
}
