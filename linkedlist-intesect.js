// Check if two linked lists intersect.

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function getLength(head) {
  let length = 0;
  let current = head;
  while (current) {
    length++;
    current = current.next;
  }
  return length;
}

function intersectList1(headA, headB) {
  if (!headA || !headB) return null;

  let lengthA = getLength(headA);
  let lengthB = getLength(headB);

  // Align the start of both lists
  let diff = Math.abs(lengthA - lengthB);
  if (lengthA > lengthB) {
    while (diff--) {
      headA = headA.next;
    }
  } else {
    while (diff--) {
      headB = headB.next;
    }
  }

  // Traverse both lists together to find the intersection
  while (headA && headB) {
    if (headA === headB) {
      return true;
    }
    headA = headA.next;
    headB = headB.next;
  }

  return false; // No intersection
}

// Example usage:
// List A: 1 -> 2 -> 3 \
//                       5 -> 6
// List B:       4 -> /

let intersectNode = new ListNode(5);
intersectNode.next = new ListNode(6);

let headA = new ListNode(1);
headA.next = new ListNode(2);
headA.next.next = new ListNode(3);
headA.next.next.next = intersectNode;

let headB = new ListNode(4);
headB.next = intersectNode;

// Non-Intersecting Lists
let headC = new ListNode(1);
headC.next = new ListNode(2);
headC.next.next = new ListNode(3);

let headD = new ListNode(4);
headD.next = new ListNode(5);
headD.next.next = new ListNode(6);

console.log(intersectList1(headA, headB));
console.log(intersectList1(headC, headD));

function intersectList2(headA, headB) {
  if (!headA || !headB) return null;

  let pointerA = headA;
  let pointerB = headB;

  while (pointerA !== pointerB) {
    // Move to the next node or switch to the head of the other list
    pointerA = pointerA ? pointerA.next : headB;
    pointerB = pointerB ? pointerB.next : headA;
  }

  // If they meet, pointerA (or pointerB) is the intersection node. If not, they both will be null.
  return pointerA ? true : false;
}

console.log(intersectList2(headA, headB));
console.log(intersectList2(headC, headD));
