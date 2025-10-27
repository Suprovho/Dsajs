function bottomView(root) {
  if (!root) return [];
  let result = [];
  let map = new Map();
  let queue = [[root, 0]];
  let minLine = 0,
    maxLine = 0;
  while (queue.length > 0) {
    let [node, line] = queue.shift(); // use font pointer in gfg incase of tle queue[front++]

    map.set(line, node.data); // vertical lvl //  overwrite any previous node on same vertical line

    minLine = Math.min(minLine, line);
    maxLine = Math.max(maxLine, line);

    if (node.left !== null) queue.push([node.left, line - 1]);
    if (node.right !== null) queue.push([node.right, line + 1]);
  }

  for (let i = minLine; i <= maxLine; i++) {
    result.push(map.get(i));
  }

  return result;
}
