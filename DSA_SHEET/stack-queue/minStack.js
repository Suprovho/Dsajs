class MinStack {
  constructor() {
    this.stack = [];
    this.min = [];
  }

  push(val) {
    this.stack.push(val);
    if (this.min.length === 0 || val <= this.min[this.min.length - 1]) {
      this.min.push(val);
    }
  }

  pop() {
    let popped = this.stack.pop();
    if (!this.min.length == 0 && this.min[this.min.length - 1] == popped) {
      this.min.pop(); // pop from both if available.
    }
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.min[this.min.length - 1];
  }
}
