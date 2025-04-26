// pre-order
var flatten = function (root) {
  let current = root;
  while (current != null) {
    if (current.left != null) {
      let temp = current.left;
      while (temp.right != null) {
        temp = temp.right;
      }
      temp.right=current.right;
      current.right = current.left;
      current.left= null;
    }
    current=current.right;
  }
};
