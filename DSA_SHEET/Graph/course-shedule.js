var canFinish = function (n, prerequisites) {
  const adj = Array.from({ length: n }, () => []);
  const indegree = Array(n).fill(0);

  for (const [i, j] of prerequisites) {
    adj[j].push(i);
  }

  for (let i = 0; i < n; i++) {
    for (let neighbor of adj[i]) {
      indegree[neighbor]++;
    }
  }

  const q = [];

  for (let i = 0; i < n; i++) {
    if (indegree[i] === 0) {
      q.push(i);
    }
  }

  let count = 0;
  while (q.length > 0) {
    const node = q.shift();
    count++;

    for (let neighbor of adj[node]) {
      indegree[neighbor]--;
      if (indegree[neighbor] === 0) {
        q.push(neighbor);
      }
    }
  }

  return count == n;
};
