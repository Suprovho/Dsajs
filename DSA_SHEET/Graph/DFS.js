function dfs(node, visited, adj, result) {
  visited[node] = true;
  result.push(node);

  for (const neighbor of adj[node]) {
    if (!visited[neighbor]) {
      dfs(neighbor, visited, adj, result);
    }
  }
}

function g(adj) {
  const visited = Array(adj.length).fill(false);
  const result = [];
  dfs(0, visited, adj, result);
  return result;
}

//tc-O(V+2E)