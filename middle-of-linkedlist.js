// Find the middle element of a linked list.

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findMiddle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.value;
}

// Example usage:
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log("Middle Element (Two-Pointer):", findMiddle(head)); // Output: 3
//TC: O(n)
//SC: O(1)

// Method 2
function findMiddle2(head) {
  let count = 0;
  let current = head;

  // Count the number of nodes
  while (current !== null) {
    count++;
    current = current.next;
  }

  // Traverse to the middle node
  current = head;
  let middleIndex = Math.floor(count / 2);
  for (let i = 0; i < middleIndex; i++) {
    current = current.next;
  }

  return current.value;
}

// Example usage:
console.log("Middle Element (Counting):", findMiddle2(head)); // Output: 3
