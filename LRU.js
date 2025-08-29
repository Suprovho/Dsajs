class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();

    // create dummy head and tail
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      this.remove(node);
      this.insert(node);
      return node.value;
    }
    return -1;
  }

  put(key, value) {
    if (this.map.has(key)) {
      this.remove(this.map.get(key));
    }
    if (this.map.size === this.capacity) {
      this.remove(this.tail.prev);
    }
    this.insert(new Node(key, value));
  }

  remove(node) {
    this.map.delete(node.key);
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  insert(node) {
    this.map.set(node.key, node);
    node.next = this.head.next;
    node.next.prev = node;
    this.head.next = node;
    node.prev = this.head;
  }
}

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Example usage:
const cache = new LRUCache(2);
cache.put(1, 1); // cache = {1=1}
cache.put(2, 2); // cache = {1=1, 2=2}
console.log(cache.get(1)); // return 1
cache.put(3, 3); // evicts key 2
console.log(cache.get(2)); // return -1
cache.put(4, 4); // evicts key 1
console.log(cache.get(1)); // return -1
console.log(cache.get(3)); // return 3
console.log(cache.get(4)); // return 4
