class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter, current;
    if (index <= this.length / 2) {
      counter = 0;
      current = this.head;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      current = this.tail;
      while (counter !== index) {
        current = current.prev;
        counter--;
      }
    }
    return current;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    if (afterNode) afterNode.prev = newNode;

    this.length++;
    return true;
  }
}

const list = new DoublyLinkedList();

// Adding elements
list.push(1);
list.push(2);
list.push(3);

console.log(list); // Output: DoublyLinkedList with nodes 1 <-> 2 <-> 3

// Adding element to the beginning
list.unshift(0);
console.log(list); // Output: DoublyLinkedList with nodes 0 <-> 1 <-> 2 <-> 3

// Getting element at index 2
console.log(list.get(2).val); // Output: 2

// Inserting element at index 2
list.insert(2, 1.5);
console.log(list); // Output: DoublyLinkedList with nodes 0 <-> 1 <-> 1.5 <-> 2 <-> 3

// Inserting element at index 0
list.insert(0, -1);
console.log(list); // Output: DoublyLinkedList with nodes -1 <-> 0 <-> 1 <-> 1.5 <-> 2 <-> 3

// Inserting element at the end
list.insert(6, 4);
console.log(list); // Output: DoublyLinkedList with nodes -1 <-> 0 <-> 1 <-> 1.5 <-> 2 <-> 3 <-> 4
