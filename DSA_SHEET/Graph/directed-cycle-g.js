function dfsCheck(node, adj, visited, pathVisited) {
  visited[node] = true;
  pathVisited[node] = true;

  for (const neighbor of adj[node]) {
    if (!visited[neighbor]) {
      if (dfsCheck(neighbor, adj, visited, pathVisited)) return true; // if its recur.. call returning true then return t..
    } else if (pathVisited[neighbor]) {
      return true; // don't confuse with this
    }
  }
  pathVisited[node] = false;
  return false;
}

function isCyclic(V, edges) {
  const adj = Array.from({ length: V }, () => []);

  // Build the adjacency list
  for (const [u, v] of edges) {
    adj[u].push(v);
  }

  const visited = Array(V).fill(false);
  const pathVisited = Array(V).fill(false);

  for (let i = 0; i < V; i++) {
    if (!visited[i]) {
      if (dfsCheck(i, adj, visited, pathVisited)) return true;
    }
  }

  return false;
}

const V = 4;
const edges = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 3],
];

console.log(isCyclic(V, edges));
