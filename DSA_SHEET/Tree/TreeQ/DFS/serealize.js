// we would need pre order and inorder to construct a tree or any 2 dfs order otherwise we cant find null , left or right

// we can construct from 1 by storing null

var serialize = function (root) {
  const list = [];
  helper(root, list);
  return list.join(",");
};

function helper(node, list) {
  if (node === null) {
    list.push("null");
    return;
  }

  list.push(String(node.val));
  helper(node.left, list);
  helper(node.right, list);
}

var deserialize = function (data) {
  const list = data.split(",");
  return helper2(list);
};

function helper2(list) {
  const val = list.shift();

  if (val === "null") {
    return null;
  }

  const node = new TreeNode(parseInt(val));

  node.left = helper2(list);
  node.right = helper2(list);

  return node;
}
