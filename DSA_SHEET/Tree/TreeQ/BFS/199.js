var rightSideView = function (root) {
  let result = [];
  if (root == null) {
    return result;
  }
  let queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      let currNode = queue.shift();
      if (i==levelSize-1) { 
        result.push(currNode.val)
      }
      if (currNode.left !== null) {
        queue.push(currNode.left);
      }
      if (currNode.right !== null) {
        queue.push(currNode.right);
      }
    }
  }
  return result;
};
