// khans algo
// its also a way to detect cycle in directed graph using bfs

function isCyclic(N, edges) {
  const adj = Array.from({ length: N }, () => []);

  for (const [u, v] of edges) {  // for gfg 
    adj[u].push(v);
  }

  let inDegree = Array(N).fill(0);
  let topo = Array(N);

  for (let i = 0; i < N; i++) {
    for (const it of adj[i]) {
      inDegree[it]++;
    }
  }

  let q = [];
  for (let i = 0; i < N; i++) {
    if (inDegree[i] == 0) {
      q.push(i);
    }
  }

  let cnt = 0;
  let ind = 0;

  while (q.length > 0) {
    let node = q.shift();
    topo[ind++] = node;
    cnt++;

    //* Getting neighbor nodes of popped node and decreasing their inDegree by 1

    for (const neighbor of adj[node]) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) {
        q.push(neighbor);
      }
    }
  }

  return cnt !== N ? topo : []; // true means there is a cycle  else its a topo sort 
}
