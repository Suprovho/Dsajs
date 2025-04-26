var buildTree = function (preorder, inorder) {
  if (preorder.length === 0) {
    return null;
  }
  let index = 0;
  const r = preorder[0];
  for (let i = 0; i < inorder.length; i++) {
    if (inorder[i] == r) {
      index = i;
      break;
    }
  }
  let node = new TreeNode(r);

  node.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
  node.right = buildTree(
    preorder.slice(index + 1, preorder.length),
    inorder.slice(index + 1, inorder.length)
  );

  return node;
};
