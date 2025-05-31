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

  _heapifyDown() {
    let i = 0;
    const length = this.heap.length;
    while (true) {
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      let smallest = i;

      if (left < length && this.heap[left][0] < this.heap[smallest][0]) {
        smallest = left;
      }

      if (right < length && this.heap[right][0] < this.heap[smallest][0]) {
        smallest = right;
      }

      if (smallest === i) break;
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      i = smallest;
    }
  }
}
// If a graph has V vertices, the MST will have V - 1 edges.
class Solution {
  spanningTree(V, adj) {
    const minHeap = new MinHeap();
    const visited = new Array(V).fill(false);
    minHeap.push([0, 0]); // [weight, node]
    let sum = 0;

    while (!minHeap.isEmpty()) {
      const [wt, node] = minHeap.pop();

      if (visited[node]) continue;

      visited[node] = true;
      sum += wt;

      for (const [adjNode, edgeWeight] of adj[node]) {
        if (!visited[adjNode]) {
          minHeap.push([edgeWeight, adjNode]);
        }
      }
    }

    return sum;
  }
}
