//bfs undirected graph

function hasCycle(adj, start, visited) {
  let q = [];
  q.push([start, -1]); // [currentNode, parentNode]
  visited[start] = true;

  while (q.length > 0) {
    const [node, parent] = q.shift();
    for (const neighbor of adj[node]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        q.push([neighbor, node]);
      } else if (neighbor !== parent) {
        // If the neighbor is visited and not the parent, it's a cycle
        return true;
      }
    }
  }
  return false;
}

// for connected comp 
function isCycle(V, adj) {
  let visited = new Array(V).fill(false);

  for (let i = 0; i < V; i++) {
    if (!visited[i]) {
      if (hasCycle(adj, i, visited)) {
        return true;
      }
    }
  }

  return false;
}
