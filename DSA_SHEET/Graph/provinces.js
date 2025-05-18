// same  connected graphs

function numProvinces(V, adj) {
  // convert from matrix to list

  let adjL = Array.from({ length: V }, () => []);

  for (let i = 0; i < V; i++) {
    for (let j = 0; j < V; j++) {       // as row and col are same number or we can do adj[i].length in j 
      if (adj[i][j] == 1 && i != j) {
        adjL[i].push(j);
      }
    }
  }

  const visited = Array(adj.length).fill(false);
  let cnt = 0;

  for (let i = 0; i < V; i++) {
    if (!visited[i]) {
      cnt++;
      dfs(i, adjL, visited);
    }
  }

  return cnt;
}

function dfs(node, adj, visited) {
  visited[node] = true;

  for (const neighbor of adj[node]) {
    if (!visited[neighbor]) {
      dfs(neighbor, adj, visited);
    }
  }
}
