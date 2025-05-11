var findTarget = function (root, k) {
  let set = new Set();
  return helper(root, k, set);
};

function helper(node, k, set) {
  if (node == null) {
    return false;
  }
  if (set.has(k - node.val)) {
    return true;
  }

  set.add(node.val);

  return helper(node.left, k, set) || helper(node.right, k, set);
}
