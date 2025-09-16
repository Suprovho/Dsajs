class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 0;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    this.root = this._insert(this.root, value);
  }

  _insert(node, value) {
    if (!node) {
      return new Node(value); // if node is null then only it will add and return new one other wise last line old one.line 31
    }

    if (value < node.value) {
      node.left = this._insert(node.left, value);
    } else if (value > node.value) {
      node.right = this._insert(node.right, value);
    }

    node.height = Math.max(this.height(node.left), this.height(node.right)) + 1; // not so imp
    return node; // imp point to notice. so that structure don't change.
  }

  populate(values) {
    for (let val of values) {
      this.insert(val);
    }
  }

  populateSorted(values) {
    this._populateSorted(values, 0, values.length);
  }

  _populateSorted(values, start, end) {
    if (start >= end) return;

    const mid = Math.floor((start + end) / 2);
    this.insert(values[mid]);

    this._populateSorted(values, start, mid);
    this._populateSorted(values, mid + 1, end);
  }

  display() {
    this._display(this.root, "Root Node: ");
  }

  _display(node, label) {
    if (!node) return;  // preorder
    console.log(label + node.value);
    this._display(node.left, "Left child of " + node.value + ": ");
    this._display(node.right, "Right child of " + node.value + ": ");
  }

  isEmpty() {
    return this.root === null;
  }

  height(node) {
    if (!node) return -1;
    return node.height;
  }

  isBalanced() {
    return this._isBalanced(this.root);
  }

  _isBalanced(node) {
    if (!node) return true;

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    return (
      Math.abs(leftHeight - rightHeight) <= 1 &&
      this._isBalanced(node.left) &&
      this._isBalanced(node.right)
    );
  }
}

const bst = new BST();

bst.populate([10, 5, 20, 3, 7]);

// Or populate balanced from sorted array
// bst.populateSorted([1, 2, 3, 4, 5, 6, 7]);

bst.display();

console.log("Is the tree balanced? " + bst.isBalanced());
