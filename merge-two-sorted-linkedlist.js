// Merge two sorted linked lists.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Function to merge two sorted linked lists
function mergeTwoSortedLists(l1, l2) {
  // Create a dummy node to simplify the merging process
  let dummy = new Node(0);
  let tail = dummy;

  // Traverse both lists
  while (l1 !== null && l2 !== null) {
    if (l1.data < l2.data) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }

  // Append the remaining nodes of l1 or l2
  if (l1 !== null) {
    tail.next = l1;
  } else {
    tail.next = l2;
  }

  // The merged list starts from dummy.next
  return dummy.next;
}

// Helper function to print the linked list
function printList(head) {
  let current = head;
  let output = "";
  while (current !== null) {
    output += current.data + " -> ";
    current = current.next;
  }
  console.log(output + "null");
}

// Create two sorted linked lists:
// l1: 1 -> 3 -> 5
let l1 = new Node(1);
l1.next = new Node(3);
l1.next.next = new Node(5);

// l2: 2 -> 4 -> 6
let l2 = new Node(2);
l2.next = new Node(4);
l2.next.next = new Node(6);

// Merge the two sorted lists
let mergedList = mergeTwoSortedLists(l1, l2);

// Print the merged linked list
printList(mergedList);
