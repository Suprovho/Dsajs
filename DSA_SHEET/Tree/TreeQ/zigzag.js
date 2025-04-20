var zigzagLevelOrder = function (root) {
  let result = [];
  if (root == null) {
    return result;
  }
  let dQueue = [];
  dQueue.push(root);
  let flag = false;
  while (dQueue.length > 0) {
    let levelSize = dQueue.length;
    let currAns = [];
    for (let i = 0; i < levelSize; i++) {
      if (!flag) {
        let currNode = dQueue.shift();
        currAns.push(currNode.val);
        if (currNode.left !== null) {
          dQueue.push(currNode.left);
        }
        if (currNode.right !== null) {
          dQueue.push(currNode.right);
        }
      } else {
        let currNode = dQueue.pop();
        currAns.push(currNode.val);
        if (currNode.right !== null) dQueue.unshift(currNode.right); // to maintain stability as in next turn when flag is false it will cause bug or error in reverse order.
        if (currNode.left !== null) dQueue.unshift(currNode.left);
      }
    }
    flag = !flag;
    result.push(currAns);
  }
  return result;
};
