const prompt = require('prompt-sync')();


function getNumber(message) {
  let value;
  while (true) {
    const input = prompt(message);
    value = parseInt(input);
    if (!isNaN(value)) break;
    console.log("❌ Invalid input. Please enter a valid number.");
  }
  return value;
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  populate() {
    const value = getNumber("Enter the root node: ");
    this.root = new Node(value);
    this.populateFull(this.root);
  }

  populateFull(node) {
    const left = prompt(`Do you want to enter left of ${node.value}? (yes/no): `);
    if (left.toLowerCase() === "yes") {
      const leftValue = getNumber(`Enter the value of the left of ${node.value}: `);
      node.left = new Node(leftValue);
      this.populateFull(node.left);
    }

    const right = prompt(`Do you want to enter right of ${node.value}? (yes/no): `);
    if (right.toLowerCase() === "yes") {
      const rightValue = getNumber(`Enter the value of the right of ${node.value}: `);
      node.right = new Node(rightValue);
      this.populateFull(node.right);
    }
  }

  display() {
    console.log("\nTree Structure:");
    this.print(this.root, 0);
  }

  print(node, level) {
    if (!node) return;

    this.print(node.right, level + 1);

    let prefix = "";
    for (let i = 0; i < level - 1; i++) {
      prefix += "|\t\t";
    }

    if (level !== 0) {
      console.log(prefix + "|-------> " + node.value);
    } else {
      console.log(node.value);
    }

    this.print(node.left, level + 1);
  }

  preOrder() {
    console.log("\nPreOrder Traversal:");
    this._preOrderM(this.root);
  }

  _preOrderM(node) {
    if (!node) return;
    console.log(node.value);
    this._preOrderM(node.left);
    this._preOrderM(node.right);
  }

  inOrder() {
    console.log("\nInOrder Traversal:");
    this._inOrder(this.root);
  }

  _inOrder(node) {
    if (!node) return;
    this._inOrder(node.left);
    console.log(node.value);
    this._inOrder(node.right);
  }

  postOrder() {
    console.log("\nPostOrder Traversal:");
    this._postOrder(this.root);
  }

  _postOrder(node) {
    if (!node) return;
    this._postOrder(node.left);
    this._postOrder(node.right);
    console.log(node.value);
  }
}


const tree = new BinaryTree();
tree.populate();
tree.display();
tree.preOrder();
tree.inOrder();
tree.postOrder();

// u can use without npm pkg in browser.