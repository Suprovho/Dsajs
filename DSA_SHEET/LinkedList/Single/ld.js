// LL without tail

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LL {
  constructor() {
    this.head = null;
  }

  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  addLast(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    }
    let curr = this.head; // start from head a external pointer.
    while (curr.next) {
      // traverse until next is null
      curr = curr.next;
    }
    curr.next = newNode;
  }

  size() {
    let count = 0;
    let curr = this.head;
    while (curr) {
      count++;
      curr = curr.next;
    }
    return count;
  }

  atIndex(index, data) {
    if (index < 0 || index > this.size()) {
      console.error("invalid index");
      return;
    }
    if (index === 0) {
      this.addFirst(data);
    }
    const newNode = new Node(data);
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    newNode.next = curr.next;
    curr.next = newNode;
  }

  removeTop() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    let curr = this.head;
    while (curr.next.next) {
      curr = curr.next;
    }
    curr.next = null;
  }

  removeAt(index) {
    if (index < 0 || index > this.size()) {
      console.error("invalid index");
      return;
    }
    if (index === 0) {
      this.removeTop();
      return;
    }
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    if (curr.next) {
      curr.next = curr.next.next;
    }
  }

  print() {
    let curr = this.head;
    while (curr) {
      console.log(curr.value);
      curr = curr.next;
    }
  }
}

const linkedList = new LL();

linkedList.addFirst(5);
linkedList.addFirst(23);
linkedList.addFirst(10);
linkedList.addFirst(15);
linkedList.addLast(50);
linkedList.print();
console.log("Size = " + linkedList.size());
linkedList.removeLast();
console.log("Size = " + linkedList.size());
