// Reverse a linked list.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseSinglyLinkedList(head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current !== null) {
    next = current.next; // Store next node
    current.next = prev; // Reverse the current node's pointer
    prev = current; // Move pointers one position ahead
    current = next;
  }

  return prev; // prev is the new head of the reversed list
}

function printList(head) {
  let current = head;
  const values = [];
  while (current !== null) {
    values.push(current.value);
    current = current.next;
  }
  console.log(values.join(" -> "));
}

// Example usage:
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);

head = reverseSinglyLinkedList(head); // Now the list is 3 -> 2 -> 1
console.log("Reversed Singly Linked List:");
printList(head);

class DoublyListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

function reverseDoublyLinkedList(head) {
  let current = head;
  let temp = null;

  while (current !== null) {
    // Swap the next and prev pointers
    temp = current.prev;
    current.prev = current.next;
    current.next = temp;

    // Move to the next node, which is previous node now
    current = current.prev;
  }

  // After the loop, temp will be the new head of the list
  if (temp !== null) {
    head = temp.prev;
  }

  return head;
}

function printDoublyList(head) {
  let current = head;
  const values = [];
  while (current !== null) {
    values.push(current.value);
    current = current.next;
  }
  console.log(values.join(" <-> "));
}

// Example usage:
head = new DoublyListNode(1);
head.next = new DoublyListNode(2);
head.next.prev = head;
head.next.next = new DoublyListNode(3);
head.next.next.prev = head.next;

head = reverseDoublyLinkedList(head); // Now the list is 3 <-> 2 <-> 1
console.log("Reversed Doubly Linked List:");
printDoublyList(head);
