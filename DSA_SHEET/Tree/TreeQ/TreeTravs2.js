//lOL EASY ONE 
var levelOrderBottom = function (root) {
  let result = [];
  if (root == null) {
    return result;
  }
  let queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let levelSize = queue.length;
    let currLevel = [];
    for (let i = 0; i < levelSize; i++) {
      let currNode = queue.shift();
      currLevel.push(currNode.val);
      if (currNode.left !== null) {
        queue.push(currNode.left);
      }
      if (currNode.right !== null) {
        queue.push(currNode.right);
      }
    }
    result.unshift(currLevel);
  }
  return result;
};
