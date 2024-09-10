/*
A Binary Tree is a type of tree data structure where each node can have a maximum of two child nodes,
a left child node and a right child node.

The tree height is the maximum number of edges from the root node to a leaf node.

### Types of Binary Trees:

A balanced Binary Tree has at most 1 in difference between its left and right subtree heights, for each node in the tree.

A complete Binary Tree has all levels full of nodes, except the last level, which is can also be full, or filled from left to right. The properties of a complete Binary Tree means it is also balanced.

A full Binary Tree is a kind of tree where each node has either 0 or 2 child nodes.

A perfect Binary Tree has all leaf nodes on the same level, which means that all levels are full of nodes, and all internal nodes have two child nodes.The properties of a perfect Binary Tree means it is also full, balanced, and complete.


There are two main categories of Tree traversal methods:

Breadth First Search (BFS) is when the nodes on the same level are visited before going to the next level in the tree. This means that the tree is explored in a more sideways direction.

Depth First Search (DFS) is when the traversal moves down the tree all the way to the leaf nodes, exploring the tree branch by branch in a downwards direction.

There are three different types of DFS traversals:
pre-order
in-order
post-order

In-order Traversal: Visits the left subtree, the root, and then the right subtree.
Pre-order Traversal: Visits the root, then the left subtree, and finally the right subtree.
Post-order Traversal: Visits the left subtree, the right subtree, and then the root.

This Binary Tree can be stored in an Array starting with the root node R on index 0.
The rest of the tree can be built by taking a node stored on index i,
and storing its left child node on index 2⋅i + 1, and its right child node on index 2⋅i + 2

*/

// Implement a binary tree.
// Perform in-order traversal of a binary tree.
// Perform pre-order traversal of a binary tree.
// Perform post-order traversal of a binary tree.
// Find the height of a binary tree.
// Check if a binary tree is balanced.
// Find the maximum depth of a binary tree.
// Find the minimum depth of a binary tree.
// Check if a binary tree is symmetric.
// Find the lowest common ancestor of two nodes in a binary tree.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Insert a node into the binary tree
  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Search for a node with a specific value
  search(node, data) {
    if (node === null) {
      return null;
    }
    if (data < node.data) {
      return this.search(node.left, data);
    } else if (data > node.data) {
      return this.search(node.right, data);
    } else {
      return node;
    }
  }

  // Traverse the tree in-order
  inorder(node, callback) {
    if (node !== null) {
      this.inorder(node.left, callback);
      callback(node.data);
      this.inorder(node.right, callback);
    }
  }

  // Traverse the tree pre-order
  preorder(node, callback) {
    if (node !== null) {
      callback(node.data);
      this.preorder(node.left, callback);
      this.preorder(node.right, callback);
    }
  }

  // Traverse the tree post-order
  postorder(node, callback) {
    if (node !== null) {
      this.postorder(node.left, callback);
      this.postorder(node.right, callback);
      callback(node.data);
    }
  }

  // Get the root node
  getRootNode() {
    return this.root;
  }

  // Function to calculate the height of the binary tree
  findHeight(node) {
    if (node === null) {
      return -1; // Return -1 for an empty tree (or subtree) to count edges, or 0 if counting nodes.
    } else {
      const leftHeight = this.findHeight(node.left);
      const rightHeight = this.findHeight(node.right);
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }

  // Function to check if the binary tree is balanced
  isBalanced(node) {
    if (node === null) {
      return true;
    }

    const leftHeight = this.findHeight(node.left);
    const rightHeight = this.findHeight(node.right);

    const heightDifference = Math.abs(leftHeight - rightHeight);

    if (heightDifference > 1) {
      return false;
    }

    // Recursively check if the left and right subtrees are balanced
    return this.isBalanced(node.left) && this.isBalanced(node.right);
  }

  // Function to find the maximum depth of the binary tree
  maxDepth(node) {
    if (node === null) {
      return 0;
    }

    const leftDepth = this.maxDepth(node.left);
    const rightDepth = this.maxDepth(node.right);

    return Math.max(leftDepth, rightDepth) + 1;
  }

  // Function to find the minimum depth of the binary tree
  minDepth(node) {
    if (node === null) {
      return 0;
    }

    // If one of the subtrees is empty, return the depth of the other subtree + 1
    if (node.left === null) {
      return this.minDepth(node.right) + 1;
    }
    if (node.right === null) {
      return this.minDepth(node.left) + 1;
    }

    const leftDepth = this.minDepth(node.left);
    const rightDepth = this.minDepth(node.right);

    return Math.min(leftDepth, rightDepth) + 1;
  }

  // Function to check if the binary tree is symmetric
  isSymmetric(node) {
    if (node === null) {
      return true;
    }

    return this.isMirror(node.left, node.right);
  }

  isMirror(left, right) {
    if (left === null && right === null) {
      return true;
    }
    if (left === null || right === null) {
      return false;
    }

    return (
      left.data === right.data &&
      this.isMirror(left.left, right.right) &&
      this.isMirror(left.right, right.left)
    );
  }

  // Function to find the lowest common ancestor of two nodes
  findLCA(node, p, q) {
    if (node === null) {
      return null;
    }

    // If either p or q is the root, then the root is LCA
    if (node === p || node === q) {
      return node;
    }

    // Recursively find LCA in the left and right subtrees
    const leftLCA = this.findLCA(node.left, p, q);
    const rightLCA = this.findLCA(node.right, p, q);

    // If p and q are found in both subtrees, then root is the LCA
    if (leftLCA !== null && rightLCA !== null) {
      return node;
    }

    // Otherwise, return the non-null value
    return leftLCA !== null ? leftLCA : rightLCA;
  }
}

const tree = new BinaryTree();

tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);

const root = tree.getRootNode();

console.log("In-order traversal:");
tree.inorder(root, (data) => console.log(data));

console.log("Pre-order traversal:");
tree.preorder(root, (data) => console.log(data));

console.log("Post-order traversal:");
tree.postorder(root, (data) => console.log(data));

const searchValue = 4;
const foundNode = tree.search(root, searchValue);
console.log(
  `\nSearch result for ${searchValue}:`,
  foundNode ? `Node found with data ${foundNode.data}` : "Node not found"
);

const height = tree.findHeight(tree.root);
console.log("Height of the tree:", height);

const balanced = tree.isBalanced(tree.root);
console.log("Is the tree balanced?", balanced);

console.log("Maximum Depth:", tree.maxDepth(tree.root)); // e.g., 3
console.log("Minimum Depth:", tree.minDepth(tree.root)); // e.g., 2
console.log("Is Symmetric:", tree.isSymmetric(tree.root)); // true or false

const lcaNode = tree.findLCA(
  tree.root,
  tree.root.left.left,
  tree.root.left.right
);
console.log(
  "Lowest Common Ancestor of 3 and 7:",
  lcaNode ? lcaNode.data : null
);
