var isCousins = function (root, x, y) {
  let xx = findNode(root, x);
  let yy = findNode(root, y);

  return level(root, xx, 0) == level(root, yy, 0) && !isSibling(root, xx, yy);
};

function findNode(node, x) {
  if (node == null) {
    return null;
  }
  if (node.val == x) {
    return node;
  }
  let n = findNode(node.left, x);
  if (n != null) {
    return n;
  }
  return findNode(node.right, x);
}

function isSibling(node, xx, yy) {
  if (node == null) {
    return false;
  }

  return (
    (node.left == xx && node.right == yy) ||
    (node.left == yy && node.right == xx) ||
    isSibling(node.left, xx, yy) ||
    isSibling(node.right, xx, yy)
  );
}

function level(node, x, lev) {
  if (node == null) {
    return 0;
  }

  if (node == x) {
    return lev;
  }

  let l = level(node.left, x, lev + 1);
  if (l != 0) {
    return l;
  }
  return level(node.right, x, lev + 1);
}
