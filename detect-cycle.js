// Write program to detect loop in a linked list

// using set

class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
  }
}

// Function that returns true if there is a loop in
// linked list else returns false.
function detectLoop1(head) {
  let st = new Set();

  // loop that runs till the head is null
  while (head !== null) {
    // If this node is already present
    // in hashmap it means there is a cycle
    // (Because you will be encountering the
    // node for the second time).
    if (st.has(head)) return true;

    // If we are seeing the node for
    // the first time, insert it in hash
    st.add(head);

    head = head.next;
  }
  return false;
}
// TC: O(n)
// SC: O(n)

function detectLoop2(head) {
  // Fast and slow pointers initially points to the
  // head
  let slow = head,
    fast = head;

  // Loop that runs while fast and slow pointer are
  // not null and not equal
  while (slow !== null && fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    // If fast and slow pointer points to the same
    // node, then the cycle is detected
    if (slow === fast) {
      return true;
    }
  }
  return false;
}

// TC: O(n)
// SC: O(1)

// Create a hard-coded linked list:
// 10 -> 20 -> 30 -> 40 -> 50 -> 60
let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);
head.next.next.next.next.next = new Node(60);

head.next.next.next.next.next.next = new Node(30); //head.next;

if (detectLoop1(head)) console.log("true");
else console.log("false");

if (detectLoop2(head)) console.log("true");
else console.log("false");
