// Dijkstra’s Algorithm is not valid for negative weights or negative cycles. as it will run for infinity as dist is always -ve
// Time Complexity : O( E log(V) )

// follow sheet explanation

// we will be given source

// shortest path

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push([dist, node]) {
    this.heap.push([dist, node]);
    this._heapifyUp();
  }

  pop() {
    if (this.heap.length === 0) return null;
    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this._heapifyDown();
    }
    return min;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  _heapifyUp() {
    let i = this.heap.length - 1;
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.heap[i][0] >= this.heap[parent][0]) break;
      [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
      i = parent;
    }
  }

  _heapifyDown(i = 0) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    const n = this.heap.length;

    let smallest = i;

    if (left < n && this.heap[left][0] < this.heap[smallest][0]) {
      smallest = left;
    }
    if (right < n && this.heap[right][0] < this.heap[smallest][0]) {
      smallest = right;
    }

    if (smallest !== i) {
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      this._heapifyDown(smallest); // recursive call
    }
  }
}

function dijkstra(V, adj, S) {
  const dist = Array(V).fill(Infinity);
  const pq = new MinHeap();
  dist[S] = 0;
  pq.push([0, S]);

  while (!pq.isEmpty()) {
    const [dis, node] = pq.pop();

    for (const [adjNode, edgeWeight] of adj[node]) {
      if (dis + edgeWeight < dist[adjNode]) {
        dist[adjNode] = dis + edgeWeight;
        pq.push([dist[adjNode], adjNode]);
      }
    }
  }
  return dist;
}
