function boundaryTraversal(root) {
  let res = [];
  if (!root) {
    return res;
  }
  if (!isLeaf(root)) {
    res.push(root.data);
  }

  addLeft(root.left, res);
  addLeaf(root, res);
  addRight(root.right, res);

  return res;
}

function isLeaf(root) {
  return !root.left && !root.right;
}

function addLeft(node, res) {
  let curr = node;
  while (curr) {
    if (!isLeaf(curr)) {
      res.push(curr.data);
    }
    if (curr.left) {
      curr = curr.left;
    } else {
      curr = curr.right;
    }
  }
}

function addRight(node, res) {
  let temp = [];
  let curr = node;
  while (curr) {
    if (!isLeaf(curr)) {
      temp.push(curr.data);
    }
    if (curr.right) {
      curr = curr.right;
    } else {
      curr = curr.left;
    }
  }
  for (let i = temp.length-1; i >= 0; i--) {
    res.push(temp[i]);
  }
}

function addLeaf(node, res) {
  if (isLeaf(node)) {
    res.push(node.data);
    return;
  }
  if (node.left) addLeaf(node.left, res);
  if (node.right) addLeaf(node.right, res);
}
