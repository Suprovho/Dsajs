// cal of edges max one length, diff between this and  height is height deal with node ie -1 in final ans

let diameter = 0;
var diameterOfBinaryTree = function (root) {
  diameter = 0; // remember to reset it in js
  height(root);
  return diameter - 1;
};

function height(node) {
  if (node == null) {
    return 0;
  }
  let left = height(node.left);
  let right = height(node.right);

  let dia = left + right + 1;
  diameter = Math.max(dia, diameter);

  return Math.max(left, right) + 1;
}
