function leftView(root) {
  if (!root) return [];

  let result = [];
  let queue = [root]; // pushed root
  while (queue.length > 0) {
    let levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();
      if (i === 0) {
        result.push(node.data);
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return result;
}

// dfs approach

function leftView(root) {
  let result = [];
  dfs(root, 0, result);
  return result;
}

function dfs(node, level, result) {
  if (!node) return;

  // If this is the first node at this level
  if (level === result.length) {
    result.push(node.data);
  }

  // Prioritize left child to get the left view
  dfs(node.left, level + 1, result);
  dfs(node.right, level + 1, result);
}


