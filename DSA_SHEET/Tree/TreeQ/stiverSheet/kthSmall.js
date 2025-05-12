let count;
let ans;
var kthSmallest = function (root, k) {
  count = k;
  ans = null;
  helper(root);
  return ans;
};

function helper(node) {
  if (node == null) {
    return;
  }
  helper(node.left);
  count--;
  if (count == 0) {
    ans = node.val;
    return;
  }
  helper(node.right);
}
