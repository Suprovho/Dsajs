var isSymmetric = function (root) {
  let queue = [];
  queue.push(root.left);
  queue.push(root.right);
  while (queue.length > 0) {
    let first = queue.shift();
    let second = queue.shift();
    if (first == null && second == null) {
      continue;
    }
    if (first == null || second == null) {
      return false;
    }
    if (left.val != right.val) {
      return false;
    }
    queue.push(first.left);
    queue.push(second.right);
    queue.push(first.right);
    queue.push(second.left);
  }
  return true;
};
