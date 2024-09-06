// Implement a circular linked list.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.tail.next = this.head; // Circular reference
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = this.head; // Circular reference
    }
    this.length++;
    return this;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.tail.next = this.head; // Circular reference
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.tail.next = this.head; // Circular reference
    }
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
    newNode.next = prev.next;
    prev.next = newNode;

    this.length++;
    return true;
  }

  // Optional method to display list contents for verification
  printList() {
    if (!this.head) return null;
    let current = this.head;
    let result = [];
    do {
      result.push(current.val);
      current = current.next;
    } while (current !== this.head);
    console.log(result.join(" -> "));
  }
}

// Example usage:
const circularList = new CircularLinkedList();

// Adding elements
circularList.push(1);
circularList.push(2);
circularList.push(3);
circularList.printList(); // Output: 1 -> 2 -> 3

// Adding element to the beginning
circularList.unshift(0);
circularList.printList(); // Output: 0 -> 1 -> 2 -> 3

// Getting element at index 2
console.log(circularList.get(2).val); // Output: 2

// Inserting element at index 2
circularList.insert(2, 1.5);
circularList.printList(); // Output: 0 -> 1 -> 1.5 -> 2 -> 3

// Inserting element at index 0
circularList.insert(0, -1);
circularList.printList(); // Output: -1 -> 0 -> 1 -> 1.5 -> 2 -> 3

// Inserting element at the end
circularList.insert(6, 4);
circularList.printList(); // Output: -1 -> 0 -> 1 -> 1.5 -> 2 -> 3 -> 4
