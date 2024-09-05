// Find the kth largest element in an array.

function kThLargest(arr, k) {
  arr.sort((a, b) => b - a);
  return arr[k - 1];
}

console.log(kThLargest([12, 3, 4, 1, 5, 8], 3));
//TC: O(nlog(n))
//SC:  O(n) // The space complexity is O(n) due to the auxiliary space used during sorting(Timsort).

class MinHeap {
  constructor() {
    this.heap = [];
  }
  push(val) {
    this.heap.push(val);
    this.bubbleUp();
  }
  pop() {
    const max = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.bubbleDown();
    }
    return max;
  }
  peek() {
    return this.heap[0];
  }
  bubbleUp() {
    let idx = this.heap.length - 1;
    const element = this.heap[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.heap[parentIdx];
      if (element >= parent) break;
      this.heap[parentIdx] = element;
      this.heap[idx] = parent;
      idx = parentIdx;
    }
  }
  bubbleDown() {
    let idx = 0;
    const length = this.heap.length;
    const element = this.heap[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.heap[leftChildIdx];
        if (leftChild < element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.heap[rightChildIdx];
        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.heap[idx] = this.heap[swap];
      this.heap[swap] = element;
      idx = swap;
    }
  }
}

function kThLargestUsingHeap(arr, k) {
  let heap = new MinHeap();
  for (let i = 0; i < k; i++) {
    heap.push(arr[i]);
  }
  for (let i = k; i < arr.length; i++) {
    if (arr[i] > heap.peek()) {
      heap.pop();
      heap.push(arr[i]);
    }
  }
  return heap.peek();
}

console.log(kThLargestUsingHeap([12, 3, 4, 1, 5, 8], 3));
//TC: O(nlog(k))
//SC: O(k)

/*
In a min-heap, the smallest element is always at the root (index 0 of the array), and each parent node is smaller than its child nodes.

Class Breakdown:
constructor():

Initializes the heap with an empty array this.heap = [].
The array will be used to store the heap elements.
push(val):

Adds a new element val to the heap by pushing it into the array.
Calls bubbleUp() to ensure the min-heap property (the parent is smaller than its children) is maintained after adding the new element.
pop():

Removes and returns the smallest element (the root element) from the heap.
To maintain the heap structure:
The last element (end) is popped from the array.
If the heap still has elements after removing the last one, the end element is moved to the root (index 0).
Calls bubbleDown() to restore the min-heap property by shifting the new root element to its proper place in the heap.
peek():

Returns the smallest element (the root element) without removing it. The root is at this.heap[0].
bubbleUp():

Restores the heap property after adding a new element.
Starts from the newly added element (the last in the array) and checks if it is smaller than its parent.
If it is, the new element swaps with its parent. This process repeats until the element is in its correct position or it becomes the root.
How it works:

Starts at the last element in the array.
If the element is smaller than its parent, it swaps with the parent.
This process continues until the element reaches its correct position, ensuring the parent-child relationship is maintained.
bubbleDown():

Restores the heap property after removing the smallest element.
Starts from the root (after it has been replaced with the last element) and compares it with its children.
The root swaps with the smaller of its two children if it violates the min-heap property (i.e., if the parent is larger than the child).
This process continues until the element is in the correct position.
How it works:

The root element is compared with its left and right children.
If the left or right child is smaller, the smaller one swaps with the root.
This process repeats down the tree until the element is placed in the correct position, ensuring the heap property is maintained.
Summary of Key Operations:
push(): Adds an element to the heap while maintaining the heap property via bubbleUp().
pop(): Removes the smallest element (root), replaces it with the last element, and uses bubbleDown() to restore the heap property.
peek(): Returns the smallest element without removing it.
bubbleUp(): Moves a newly added element up the tree to maintain the heap property.
bubbleDown(): Moves the root element down the tree to maintain the heap property after removal.
Time Complexity:
push(): O(log n) — because bubbleUp() may need to traverse the height of the heap, which is logarithmic with respect to the number of elements.
pop(): O(log n) — because bubbleDown() may need to traverse the height of the heap.
peek(): O(1) — as it simply returns the root element.
Space Complexity:
O(n) — the space complexity depends on the number of elements stored in the heap.



*/
