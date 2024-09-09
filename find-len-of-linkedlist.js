// Find the length of a linked list.

class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
  }
}

function getLength(head) {
  let count = 0;
  let current = head;

  while (current !== null) {
    count++;
    current = current.next;
  }

  return count;
}

// Create a linked list: 10 -> 20 -> 30 -> 40 -> 50
let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);

console.log("Length of the linked list:", getLength(head));
// TC: O(n)
// SC: O(1)
