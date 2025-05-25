class Heap {
  constructor() {
    this.list = [];
  }

  swap(first, second) {
    const temp = this.list[first];
    this.list[first] = this.list[second];
    this.list[second] = temp;
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  left(index) {
    return index * 2 + 1;
  }

  right(index) {
    return index * 2 + 2;
  }

  insert(value) {
    this.list.push(value);
    this.upheap(this.list.length - 1);
  }

  upheap(index) {
    if (index === 0) return;
    const p = this.parent(index);
    if (this.list[index] < this.list[p]) {
      this.swap(index, p);
      this.upheap(p);
    }
  }

  remove() {
    if (this.list.length === 0) {
      throw new Error("Removing from an empty heap!");
    }

    const temp = this.list[0];
    const last = this.list.pop();

    if (this.list.length > 0) {
      this.list[0] = last;
      this.downheap(0);
    }

    return temp;
  }

  downheap(index) {
    let min = index;
    const left = this.left(index);
    const right = this.right(index);

    if (left < this.list.length && this.list[min] > this.list[left]) {
      min = left;
    }

    if (right < this.list.length && this.list[min] > this.list[right]) {
      min = right;
    }

    if (min !== index) {
      this.swap(min, index);
      this.downheap(min);
    }
  }

  heapSort() {
    const sorted = [];
    const original = [...this.list]; // backup

    while (this.list.length > 0) {
      sorted.push(this.remove());
    }

    this.list = original; // restore original heap
    return sorted;
  }
}


const heap = new Heap();

heap.insert(34);
heap.insert(45);
heap.insert(22);
heap.insert(89);
heap.insert(76);

const sortedList = heap.heapSort();
console.log(sortedList); // Output: [22, 34, 45, 76, 89]


// how remove work

// Compare the current node with its children.

// Find the smaller of the two children.

// If the current node is bigger, swap it with the smaller child.

// Repeat until the node is smaller than both children or it's a leaf.