var inorderTraversal = function (root) {
  let list = [];
  helper(root, list);
  return list;
};

function helper(node, list) {
  if (node == null) {
    return list;
  }
  helper(node.left, list);
  list.push(node.val);
  helper(node.right, list);
}

var preorderTraversal = function (root) {
  let list = [];
  helper(root, list);
  return list;
};

function helper(node,list) {
  if (node == null) {
    return list;
  }
  list.push(node.val);
  helper(node.left, list);
  helper(node.right, list);
}

var postorderTraversal = function(root) {
    let list = [];
    helper(root, list);
    return list;
};

function helper(node,list) {
    if (node==null) {
        return list;
    }
    helper(node.left,list);
    helper(node.right,list);
    list.push(node.val)
}