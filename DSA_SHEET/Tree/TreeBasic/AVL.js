class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 0;
  }
}

class AVL {
  constructor() {
    this.root = null;
  }

  insert(value) {
    this.root = this._insert(this.root, value);
  }

  height() {
    return this._height(this.root);
  }

  _insert(node, value) {
    if (!node) {
      return new Node(value);
    }

    if (value < node.value) {
      node.left = this._insert(node.left, value);
    } else if (value > node.value) {
      node.right = this._insert(node.right, value);
    }

    node.height = Math.max(this._height(node.left), this._height(node.right)) + 1;
    return this.rotate(node); // imp point to notice.
  }

  rotate(node) {
    if (this._height(node.left) - this._height(node.right) > 1) {
      // left heavy
      if (this._height(node.left.left) - this._height(node.left.right) > 0) {
        // left left case
        return this.rightRotate(node);
      }
      if (this._height(node.left.left) - this._height(node.left.right) < 0) {
        // left right case
        node.left = this.leftRotate(node.left);
        return this.rightRotate(node);
      }
    }

    if (this._height(node.left) - this._height(node.right) < -1) {
      // right heavy
      if (this._height(node.right.left) - this._height(node.right.right) < 0) {
        // right right case
        return this.leftRotate(node);
      }
      if (this._height(node.right.left) - this._height(node.right.right) > 0) {
        // left right case
        node.right = this.rightRotate(node.right);
        return this.leftRotate(node);
      }
    }

    return node;
  }

  rightRotate(p) {
    let c = p.left;
    let t = c.right;

    c.right = p;
    p.left = t;

    p.height = Math.max(this._height(p.left), this._height(p.right) + 1);
    c.height = Math.max(this._height(c.left), this._height(c.right) + 1);

    return c;
  }

  leftRotate(c) {
    let p = c.right;
    let t = p.left;

    p.left = c;
    c.right = t;

    p.height = Math.max(this._height(p.left), this._height(p.right) + 1);
    c.height = Math.max(this._height(c.left), this._height(c.right) + 1);

    return p;
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
    if (!node) return;
    console.log(label + node.value);
    this._display(node.left, "Left child of " + node.value + ": ");
    this._display(node.right, "Right child of " + node.value + ": ");
  }

  isEmpty() {
    return this.root === null;
  }

  _height(node) {
    if (!node) return -1;
    return node.height;
  }

  isBalanced() {
    return this._isBalanced(this.root);
  }

  _isBalanced(node) {
    if (!node) return true;

    const leftHeight = this._height(node.left); 
    const rightHeight = this._height(node.right); 
    return (
      Math.abs(leftHeight - rightHeight) <= 1 &&
      this._isBalanced(node.left) &&
      this._isBalanced(node.right)
    );
}
}

const AVLTree = new AVL();
for (let i = 0; i < 1000; i++) {
  AVLTree.insert(i);
}

console.log(AVLTree.height());
