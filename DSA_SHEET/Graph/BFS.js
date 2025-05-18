function BFS(V, adj) {
  // if v not mentioned then adj.length
  let visited = Array(V).fill(false);
  let BFS = [];
  let queue = [];

  queue.push(0);
  visited[0] = true;

  while (queue.length > 0) {
    const node = queue.shift();
    BFS.push(node);

    for (const neighbor of adj[node]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    }
  }
  return BFS;
}
