//1)There is no cycle of odd length

// 2)A graph is bipartite if the nodes can be partitioned into two independent sets A and B such that every edge in the graph connects a node in set A and a node in set B.(leetcode description)

// 3).The graph should be bi-colorable.

var isBipartite = function (graph) {
  const n = graph.length;
  const colors = Array(n).fill(-1);

  for (let i = 0; i < n; i++) {
    // for connected graph..
    if (colors[i] === -1) {
      if (!bfs(i, graph, colors)) return false;
    }
  }

  return true;
};

function bfs(start, adj, colors) {
  const queue = [];
  queue.push(start);
  colors[start] = 0;

  while (queue.length > 0) {
    let node = queue.shift();
    for (const neighbor of adj[node]) {
      if (colors[neighbor] == -1) {
        colors[neighbor] = colors[node] === 1 ? 0 : 1;
        queue.push(neighbor);
      } else if (colors[neighbor] == colors[node]) {
        return false;
      }
    }
  }
  return true;
}
