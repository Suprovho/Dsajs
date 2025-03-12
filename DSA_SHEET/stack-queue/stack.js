
//* in js array is dynamic so the stack implementation is dynamic as of java or c++
//* in java and c++ we have to implement the push,pop function where as in js we already have so it will be diff
//* in java we use pointer to control the push pop operation completely
//* in java or c++ if we have to make dynamic we can use temp array logic or linkedList.

class Stack {
  constructor() {
    this.stack = [];
  }

  push(ele) {
    this.stack.push(ele);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty!!";
    }
    return this.stack.pop();
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty!!";
    }
    return this.stack[this.stack.length - 1];
  }

  size() {
    return this.stack.length;
  }

  display() {
    let str = "";
    for (let i = this.stack.length - 1; i >= 0; i--) {
      str += this.stack[i] + (i >= 1 ? " -> " : " -> END ");
    }
    console.log(str);
  }
}

const st = new Stack();

st.push(45);
st.push(5);
st.push(65);
st.push(71);
st.push(90);

st.display();

console.log(st.pop());
 
st.display();

console.log(st.peek());

