function floor(root, key) {
  if (!root) return -1; 

  if (root.data === key) {
    return root.data; 
  }

  if (root.data < key) {
    // If current node is smaller than key, it could be a floor, check right subtree
    let rightFloor = floor(root.right, key);
    return rightFloor !== -1 ? rightFloor : root.data;
  }
  return floor(root.left, key);
}
