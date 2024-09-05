// Implement a stack using an array.

class Stack {
  constructor(size) {
    this.top = -1;
    this.stack = [];
    this.size = size;
  }

  push(el) {
    if (this.top === this.size - 1) {
      throw new Error("Element cannot be added as stack is full");
    } else {
      this.top = this.top + 1;
      this.stack[this.top] = el;
    }
  }

  pop() {
    if (this.stack.length === 0) {
      throw new Error("Cannot pop from empty stack");
    } else {
      this.top -= 1;
      return this.stack.pop();
    }
  }

  peek() {
    return this.stack[this.top];
  }

  isEmpty() {
    if (this.top === -1) {
      return true;
    } else {
      return false;
    }
  }

  full() {
    if (this.top === this.size - 1) {
      return true;
    } else {
      return false;
    }
  }
}

let stk = new Stack(3);
console.log(stk.isEmpty());
stk.push(1);
stk.push(2);
stk.push(3);
console.log(stk.stack);
stk.pop();
stk.push(4);
console.log(stk.full());
console.log(stk.stack);
console.log(stk.peek());
stk.pop();
stk.pop();
stk.pop();
console.log(stk.stack);
