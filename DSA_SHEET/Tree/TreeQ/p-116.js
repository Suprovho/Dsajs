var connect = function (root) {
  if (root == null) {
    return null;
  }
  let leftMost = root;
  while (leftMost.left !== null) {
    let curr = leftMost;
    while (curr !== null) {
      curr.left.next = curr.right;
      if (curr.next !== null) {
        curr.right.next = curr.next.left;
      }
      curr = curr.next;
    }
    leftMost = leftMost.left;
  }
  return root;
};
