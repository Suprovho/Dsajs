function topView(root) {
  if (!root) return [];
  let result = [];
  let q = [[root, 0]];
  let map = new Map();
  let minLine = 0;
  let maxLine = 0;
  let first = 0;
  while (first < q.length) {
    let [node, line] = q[first++];
    if (!map.has(line)) {
      map.set(line, node.data);
    }

    minLine = Math.min(minLine, line);
    maxLine = Math.max(maxLine, line);

    if (node.left) q.push([node.left, line - 1]);
    if (node.right) q.push([node.right, line + 1]);
  }
  
  for (let i = minLine; i <= maxLine; i++) {
    result.push(map.get(i));
  }

  return result;
}
