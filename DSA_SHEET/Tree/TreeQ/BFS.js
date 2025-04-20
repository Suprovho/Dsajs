var levelOrder = function (root) {
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
    result.push(currLevel);
  }
  return result;
};

// average lvl in bt

var averageOfLevels = function (root) {
  let result = [];
  if (root == null) {
    return result;
  }
  let queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let levelSize = queue.length;
    let average = 0;
    for (let i = 0; i < levelSize; i++) {
      let currNode = queue.shift();
      average += currNode.val;
      if (currNode.left !== null) {
        queue.push(currNode.left);
      }
      if (currNode.right !== null) {
        queue.push(currNode.right);
      }
    }
    result.push(average / levelSize);
  }
  return result;
};

// level order successor

function levelOrderSuccessor(root, key) {
  let result = [];
  if (root == null) {
    return result;
  }
  let queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let currNode = queue.shift();
    if (currNode.left !== null) {
      queue.push(currNode.left);
    }
    if (currNode.right !== null) {
      queue.push(currNode.right);
    }
    if (currNode.val == key) break;
  }
  return queue[0];
}


