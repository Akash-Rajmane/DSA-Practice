// Implement a queue using an array.

class Queue {
  constructor() {
    this.q = [];
    this.front = -1;
    this.rear = -1;
  }

  enqueue(el) {
    if (this.front === -1) {
      this.front++;
      this.rear++;
    } else {
      this.rear++;
    }
    this.q[this.rear] = el;
  }

  dequeue() {
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front++;
    }
  }

  isEmpty() {
    return this.front === -1 && this.rear === -1;
  }

  getFirstElement() {
    return this.front !== -1 ? this.q[this.front] : "Queue is empty.";
  }
}

let q = new Queue();
q.enqueue(5);
console.log(q.isEmpty());
q.enqueue(10);
console.log(q.getFirstElement());
q.enqueue(15);
q.dequeue();
q.dequeue();
q.dequeue();
console.log(q.isEmpty());
console.log(q.getFirstElement());
console.log(q.q, q.front, q.rear);
