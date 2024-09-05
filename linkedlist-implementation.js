// Implement a singly linked list using array.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
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
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
}

const list = new SinglyLinkedList();

// Adding elements
list.push(1);
list.push(2);
list.push(3);

console.log(list); // Output: SinglyLinkedList with nodes 1 -> 2 -> 3

// Adding element to the beginning
list.unshift(0);
console.log(list); // Output: SinglyLinkedList with nodes 0 -> 1 -> 2 -> 3

// Getting element at index 2
console.log(list.get(2).val); // Output: 2

// Inserting element at index 2
list.insert(2, 1.5);
console.log(list); // Output: SinglyLinkedList with nodes 0 -> 1 -> 1.5 -> 2 -> 3

// Inserting element at index 0
list.insert(0, -1);
console.log(list); // Output: SinglyLinkedList with nodes -1 -> 0 -> 1 -> 1.5 -> 2 -> 3

// Inserting element at the end
list.insert(6, 4);
console.log(list); // Output: SinglyLinkedList with nodes -1 -> 0 -> 1 -> 1.5 -> 2 -> 3 -> 4
