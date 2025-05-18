// Adjacency Matrix

let n = 5, // node
  m = 4; // edge

let adj = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

let edges = [
  [1, 2],
  [2, 3],
  [4, 5],
  [1, 5],
];

for (let i = 0; i < m; i++) {
  let u = edges[i][0];
  let v = edges[i][1];
  adj[u][v] = 1;
  adj[v][u] = 1; // remove for directed graph
}

// print
for (let i = 0; i < n; i++) {
  console.log(adj[i].slice(1)); // ignore 0 index
}

// SC-O(N^2)

//* Adjacency list


// (array of arrays)

let adj2 = Array.from({ length: n + 1 }, () => []);

let edges2 = [
  [1, 2],
  [2, 3],
  [4, 5],
  [1, 5]
];

for (let i = 0; i < m; i++) {
  let [u, v] = edges[i];
  adj[u].push(v);
  adj[v].push(u); // remove this line if it's a directed graph
}


for (let i = 1; i <= n; i++) {
  console.log(`${i}: ${adj[i].join(", ")}`);
}

// Space complexity = O(2xE)