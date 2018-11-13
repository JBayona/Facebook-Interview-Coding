/*
Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Note: 
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

Follow up:
What if the BST is modified (insert/delete operations) often and you 
need to find the kth smallest frequently? How would you optimize the kthSmallest routine?

https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/
*/

function Node(val,left,right){
  this.val = val;
  this.left = left || null;
  this.right = right || null;
}

/*Complejidad O(N)*/
function findKSmallestBST(tree, k){
  let stack = [];
  let node = tree;
  let count = 0;
  let right;

  while(node){
    stack.push(node);
    node = node.left;
  }

  while(stack.length > 0){
    node = stack.pop();
    count++;
    if(count === k){
      return node.val;
    }
    right = node.right;
    while(right){
      stack.push(right);
      right = right.left;
    }
  }
  return -1;
}

// Recursion with O(N) in space

var kthSmallest = function(root, k) {
  let sorted = [];
  inorder(root, sorted);
  return sorted[k-1];
};

function inorder(node, sorted) {
  if(!node) return;
  inorder(node.left, sorted);
  sorted.push(node.val);
  inorder(node.right, sorted);
}

// Recursion with constant space

var kthSmallest = function(root, k) {
  count = k;
  result = null;
  inorder(root);
  return result;
};

function inorder(node) {
  if(!node) return;
  inorder(node.left);
  
  count--;
  if(count===0) {
      result = node.val;
      return;
  }
  
  inorder(node.right);
}

// Iterative

var kthSmallest = function(root, k) {
  let stack = [];
  let node = root;
  while(true) {
    if(node !== null) {
      stack.push(node);
      node = node.left;
    } else {
      // No more elements in the stack
      if(stack.length === 0) {
          break;
      }
      node = stack.pop();
      --k;
      if(k === 0) {
          return node.val;
      }
      stack.push(node.right);
    }
  }
  
  // Element not found
  return -1;
};


tree = new Node(7, new Node(5, new Node(4, new Node(3)), new Node(6)), new Node(10, new Node(9), new Node(11)));
k = 4;
console.log(findKSmallestBST(tree,k));