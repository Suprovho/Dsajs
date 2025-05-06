let index;
var buildTree = function (preorder, inorder) {
  index = 0;
  const map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }
  return helper(preorder, inorder, 0, inorder.length - 1, map);
};

function helper(preorder, inorder, left, right, map) {
  if (left > right) {
    return null;
  }
  const current = preorder[index++];
  const node = new TreeNode(current);

  if (left == right) return node;

  const inIndex = map.get(current);

  node.left = helper(preorder, inorder, left, inIndex - 1, map);
  node.right = helper(preorder, inorder, inIndex + 1, right, map);

  return node;
}
